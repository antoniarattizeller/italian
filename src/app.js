const state = {
  view: "home",
  unitKey: null,
  quiz: {
    initialized: false,
    mode: "all",
    selectedUnitKeys: new Set(),
    pool: [],
    deck: [],
    poolKey: "",
    current: null,
    answered: false,
    correct: 0,
    total: 0,
    round: 1
  }
};

const app = document.getElementById("app");
const viewTitle = document.getElementById("view-title");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

const course = window.COURSE || { grammar: [], vocab: [], reference: [], stages: [] };

const KIND_LABEL = { grammar: "Grammar", vocab: "Vocabulary", reference: "Reference" };

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ---------------------------------------------------------------- Units

function unitsOfKind(kind) {
  return (course[kind] || []).map((data) => ({
    kind,
    id: data.id,
    key: `${kind}:${data.id}`,
    data
  }));
}

function grammarUnits() {
  return unitsOfKind("grammar");
}

function vocabUnits() {
  return unitsOfKind("vocab");
}

function referenceUnits() {
  return unitsOfKind("reference");
}

function allUnits() {
  return [...grammarUnits(), ...vocabUnits(), ...referenceUnits()];
}

function getUnit(key) {
  return allUnits().find((unit) => unit.key === key);
}

function unitWords(unit) {
  return unit.data.words || unit.data.vocab || [];
}

// A word can be quizzed if it has an Italian form and something to prompt with:
// an Italian definition (preferred) or an English/German translation.
function isQuizableWord(word) {
  return Boolean(word.it && (word.def || word.en || word.de));
}

function grammarStages() {
  const stages = course.stages && course.stages.length
    ? course.stages
    : [...new Set(grammarUnits().map((unit) => unit.data.stage))].sort().map((id) => ({ id, title: `Stage ${id}`, summary: "" }));
  return stages.map((stage) => ({
    ...stage,
    units: grammarUnits().filter((unit) => unit.data.stage === stage.id)
  }));
}

// ---------------------------------------------------------------- Question pools

function tagQuestion(question, unit) {
  return {
    ...question,
    unitKey: unit.key,
    unitKind: unit.kind,
    unitTitle: unit.data.title,
    kindLabel: KIND_LABEL[unit.kind] || unit.kind
  };
}

function taggedTypedQuestion(id, prompt, answer, accepted, explanation, unit) {
  return {
    id, type: "typed", prompt, answer, accepted, explanation,
    unitKey: unit.key, unitKind: unit.kind, unitTitle: unit.data.title,
    kindLabel: KIND_LABEL[unit.kind] || unit.kind
  };
}

function taggedMcQuestion(id, prompt, answer, distractors, explanation, unit) {
  return {
    id, type: "multiple-choice", prompt, answer, options: [answer, ...distractors], explanation,
    unitKey: unit.key, unitKind: unit.kind, unitTitle: unit.data.title,
    kindLabel: KIND_LABEL[unit.kind] || unit.kind
  };
}

// Pick up to n distractor words from the same topic (deterministic, so question
// ids and the SRS boxes stay stable across sessions).
function pickDistractors(baseForms, answer, seed, n = 3) {
  const pool = baseForms.filter((b) => normalizeAnswer(b) !== normalizeAnswer(answer));
  const out = [];
  for (let k = 1; out.length < n && k <= pool.length; k += 1) {
    const candidate = pool[(seed + k) % pool.length];
    if (!out.some((o) => normalizeAnswer(o) === normalizeAnswer(candidate))) out.push(candidate);
  }
  return out;
}

// Turn an example sentence into a gap-fill by blanking the base word, if it
// appears as a whole word (handles multi-word entries too). Returns null if not.
function clozeSentence(example, base) {
  if (!example || !base) return null;
  const escaped = base.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(^|[^\\p{L}'])(${escaped})(?=$|[^\\p{L}'])`, "iu");
  if (!re.test(example)) return null;
  return example.replace(re, "$1_____");
}

// Build a varied set of vocabulary questions for one unit: definition -> word
// and cloze (example with the word blanked), each as multiple-choice or typed.
function vocabQuestionsForUnit(unit) {
  const words = unitWords(unit).filter(isQuizableWord);
  const baseForms = words.map((word) => stripArticle(word.it));
  const canMc = baseForms.length >= 4;
  const out = [];

  words.forEach((word, index) => {
    const base = stripArticle(word.it);
    const accepted = acceptedVocabAnswers(word.it);
    const explanation = [word.note, word.ex].filter(Boolean).join(" ");
    const defPrompt = word.def ? `Quale parola? ${word.def}` : `In italiano: ${word.en || word.de || ""}`;

    // Definition question: MC on even indexes, typed on odd (a balanced mix).
    const defId = `vocab-${unit.id}-${index}-def`;
    out.push(canMc && index % 2 === 0
      ? taggedMcQuestion(defId, defPrompt, base, pickDistractors(baseForms, base, index), explanation, unit)
      : taggedTypedQuestion(defId, defPrompt, base, accepted, explanation, unit));

    // Cloze question (only if the word appears in its example). Opposite format.
    const gap = clozeSentence(word.ex, base);
    if (gap) {
      const clozeId = `vocab-${unit.id}-${index}-cloze`;
      const clozePrompt = `Completa: ${gap}`;
      out.push(canMc && index % 2 === 1
        ? taggedMcQuestion(clozeId, clozePrompt, base, pickDistractors(baseForms, base, index + 1), explanation, unit)
        : taggedTypedQuestion(clozeId, clozePrompt, base, accepted, explanation, unit));
    }
  });

  return out;
}

function writtenPool(units = allUnits()) {
  return units.flatMap((unit) =>
    (unit.data.questions || []).map((question) => tagQuestion(question, unit))
  );
}

function autoVocabPool(units = allUnits()) {
  return units.flatMap((unit) => vocabQuestionsForUnit(unit));
}

function personalVocabularyQuestions() {
  return loadVocabulary().map((item) => ({
    id: `personal-vocab-${item.id}`,
    type: "typed",
    prompt: `Write the Italian for: ${item.en || item.de || item.note || "your saved word"}`,
    answer: stripArticle(item.it),
    accepted: acceptedVocabAnswers(item.it),
    explanation: item.note || "Personal vocabulary.",
    unitKey: "personal",
    unitKind: "personal",
    unitTitle: "Personal vocabulary",
    kindLabel: "Personal"
  }));
}

function numberWritingQuestions() {
  return [
    [0, "zero"], [1, "uno"], [2, "due"], [3, "tre"], [4, "quattro"],
    [5, "cinque"], [6, "sei"], [7, "sette"], [8, "otto"], [9, "nove"],
    [10, "dieci"], [11, "undici"], [12, "dodici"], [13, "tredici"],
    [14, "quattordici"], [15, "quindici"], [16, "sedici"],
    [17, "diciassette"], [18, "diciotto"], [19, "diciannove"],
    [20, "venti"], [21, "ventuno"], [22, "ventidue"],
    [23, "ventitré"], [24, "ventiquattro"], [25, "venticinque"],
    [26, "ventisei"], [27, "ventisette"], [28, "ventotto"],
    [29, "ventinove"], [30, "trenta"], [40, "quaranta"],
    [50, "cinquanta"], [60, "sessanta"], [70, "settanta"],
    [80, "ottanta"], [90, "novanta"], [100, "cento"]
  ].map(([number, word]) => ({
    id: `number-${number}`,
    type: "typed",
    prompt: `Write this number in Italian: ${number}`,
    answer: word,
    accepted: [word],
    explanation: `${number} = ${word}`,
    unitKey: "numbers",
    unitKind: "numbers",
    unitTitle: "Numbers",
    kindLabel: "Numbers"
  }));
}

function questionPool(mode = state.quiz.mode) {
  if (mode === "numbers") return numberWritingQuestions();
  if (mode === "vocab") return [...autoVocabPool(), ...personalVocabularyQuestions()];
  if (mode === "grammar") return writtenPool(grammarUnits());
  if (mode === "all") return [...writtenPool(), ...autoVocabPool(), ...personalVocabularyQuestions()];
  return [...writtenPool(), ...personalVocabularyQuestions()];
}

// Everything the learner can practise (used by the progress dashboard).
function allTrackableQuestions() {
  return [...writtenPool(), ...autoVocabPool(), ...personalVocabularyQuestions()];
}

function stripArticle(value) {
  return String(value || "")
    .replace(/^(il|lo|la|l'|i|gli|le|un|uno|una|un')\s+/i, "")
    .trim();
}

function acceptedVocabAnswers(value) {
  const clean = stripArticle(value);
  const raw = String(value || "").trim();
  return [...new Set([raw, clean].filter(Boolean))];
}

// ---------------------------------------------------------------- Spaced repetition (Leitner)
//
// Each question id has a box (1..5) and a due date, stored in localStorage.
// A correct answer promotes the item one box (longer wait); a wrong answer
// resets it to box 1 (comes back soon). Intervals grow with the box, following
// the classic Leitner schedule.

const SRS_KEY = "italian-srs";
const DAY_MS = 86400000;
const SRS_INTERVAL_DAYS = [0, 0, 2, 7, 16, 35]; // index = box (1..5); box 1 -> next session

function loadSrs() {
  try {
    return JSON.parse(localStorage.getItem(SRS_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveSrs(map) {
  localStorage.setItem(SRS_KEY, JSON.stringify(map));
}

function srsBox(id) {
  const rec = loadSrs()[id];
  return rec ? rec.box : 0; // 0 = new / never seen
}

function srsIsDue(id, now = Date.now()) {
  const rec = loadSrs()[id];
  return !rec || rec.due <= now;
}

function srsReview(id, correct) {
  const map = loadSrs();
  const rec = map[id] || { box: 1, due: 0 };
  const box = correct ? Math.min(5, rec.box + 1) : 1;
  map[id] = { box, due: Date.now() + SRS_INTERVAL_DAYS[box] * DAY_MS };
  saveSrs(map);
  return map[id];
}

// Order a pool so that new and due items come first, waiting items last, so a
// session always surfaces what most needs review but never runs dry.
function buildDeck(pool) {
  const now = Date.now();
  const dueNew = [];
  const waiting = [];
  pool.forEach((question) => {
    if (srsIsDue(question.id, now)) dueNew.push(question);
    else waiting.push(question);
  });
  return [...shuffle(dueNew), ...shuffle(waiting)];
}

function dueCount(pool) {
  const now = Date.now();
  return pool.filter((question) => srsIsDue(question.id, now)).length;
}

// ---------------------------------------------------------------- Chrome

function setTitle(title) {
  viewTitle.textContent = title;
  document.title = `${title} - Italian A2`;
}

function statusBadge(status) {
  if (!status || status === "ready") return "";
  return `<span class="badge badge-${escapeHtml(status)}">${escapeHtml(status)}</span>`;
}

function updateNav() {
  document.querySelectorAll(".nav-item[data-view], .bottom-nav-item[data-view]").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === state.view);
  });

  document.querySelectorAll("[data-route-unit]").forEach((item) => {
    item.classList.toggle("active", item.dataset.routeUnit === state.unitKey && state.view === "unit");
  });
}

function renderUnitNav() {
  const nav = document.getElementById("unit-nav");
  if (!nav) return;
  nav.innerHTML = grammarStages().map((stage) => `
    <div class="nav-stage">
      <div class="nav-stage-label">${escapeHtml(stage.title)}</div>
      ${stage.units.map((unit) => `
        <button class="week-nav-item" type="button" data-route-unit="${escapeHtml(unit.key)}">
          ${escapeHtml(unit.data.title)}
          <small>${escapeHtml(unit.data.status || "ready")}</small>
        </button>
      `).join("")}
    </div>
  `).join("");
}

function route(view, params = {}) {
  state.view = view;
  state.unitKey = params.unitKey || null;
  closeSidebar();
  render();
}

function render() {
  updateNav();

  if (state.view === "unit") return renderUnit(state.unitKey);
  if (state.view === "grammar") return renderGrammarList();
  if (state.view === "vocab") return renderVocabList();
  if (state.view === "reference") return renderReferenceList();
  if (state.view === "quiz") return renderQuizBuilder();
  if (state.view === "progress") return renderProgress();
  if (state.view === "notebook") return renderNotebook();
  renderHome();
}

// ---------------------------------------------------------------- Home

function renderHome() {
  setTitle("Home");
  const grammarCount = grammarUnits().length;
  const vocabCount = vocabUnits().length;
  const questionCount = writtenPool().length + autoVocabPool().length;

  app.innerHTML = `
    <section class="page-header">
      <h1 class="page-title">${escapeHtml(course.title)}</h1>
      <p class="page-copy">${escapeHtml(course.description)}</p>
    </section>

    <section class="grid three">
      <article class="card">
        <div class="meta-label">Grammar</div>
        <h3>${grammarCount} categories</h3>
        <p>Study grammar in a sensible order, stage by stage.</p>
        <div class="card-actions"><button class="secondary-button" type="button" data-view="grammar">Open grammar</button></div>
      </article>
      <article class="card">
        <div class="meta-label">Vocabulary</div>
        <h3>${vocabCount} topics</h3>
        <p>Learn and quiz words by theme: time, places, house, travel...</p>
        <div class="card-actions"><button class="secondary-button" type="button" data-view="vocab">Open vocabulary</button></div>
      </article>
      <article class="card">
        <div class="meta-label">Practice</div>
        <h3>${questionCount} questions</h3>
        <p>Quiz one category, one topic, several, or everything.</p>
        <div class="card-actions"><button class="secondary-button" type="button" data-view="quiz">Open quiz</button></div>
      </article>
    </section>

    ${grammarStages().map((stage) => `
      <section class="section">
        <div class="section-head">
          <h2>${escapeHtml(stage.title)}</h2>
          <p class="page-copy">${escapeHtml(stage.summary || "")}</p>
        </div>
        <div class="grid two">
          ${stage.units.map((unit) => renderUnitCard(unit)).join("")}
        </div>
      </section>
    `).join("")}

    <section class="section">
      <div class="section-head"><h2>Vocabulary topics</h2></div>
      <div class="grid two">
        ${vocabUnits().map((unit) => renderUnitCard(unit)).join("")}
      </div>
    </section>
  `;
}

function renderUnitCard(unit) {
  const questionCount = (unit.data.questions || []).length + unitWords(unit).filter((word) => isQuizableWord(word)).length;
  return `
    <article class="card">
      <div class="badge-row">
        <span class="badge">${escapeHtml(KIND_LABEL[unit.kind] || unit.kind)}</span>
        ${statusBadge(unit.data.status)}
        <span class="badge">${questionCount} questions</span>
      </div>
      <h3>${escapeHtml(unit.data.title)}</h3>
      <p>${escapeHtml(unit.data.summary || "")}</p>
      <div class="card-actions">
        <button class="button" type="button" data-route-unit="${escapeHtml(unit.key)}">Study</button>
        <button class="secondary-button" type="button" data-quiz-unit="${escapeHtml(unit.key)}">Quiz</button>
      </div>
    </article>
  `;
}

// ---------------------------------------------------------------- Lists

function renderGrammarList() {
  setTitle("Grammar");
  app.innerHTML = `
    <section class="page-header">
      <h1 class="page-title">Grammar</h1>
      <p class="page-copy">A2 grammar, ordered for learning. Work through the stages in order.</p>
    </section>
    ${grammarStages().map((stage) => `
      <section class="section">
        <div class="section-head">
          <h2>${escapeHtml(stage.title)}</h2>
          <p class="page-copy">${escapeHtml(stage.summary || "")}</p>
        </div>
        <div class="grid two">
          ${stage.units.map((unit) => renderUnitCard(unit)).join("")}
        </div>
      </section>
    `).join("")}
  `;
}

function renderVocabList() {
  setTitle("Vocabulary");
  app.innerHTML = `
    <section class="page-header">
      <h1 class="page-title">Vocabulary</h1>
      <p class="page-copy">Learn and practice words by theme.</p>
    </section>
    <section class="section">
      <div class="grid two">
        ${vocabUnits().map((unit) => renderUnitCard(unit)).join("")}
      </div>
    </section>
  `;
}

function renderReferenceList() {
  setTitle("Reference");
  app.innerHTML = `
    <section class="page-header">
      <h1 class="page-title">Reference</h1>
      <p class="page-copy">The alphabet, spelling, and pronunciation rules.</p>
    </section>
    <section class="section">
      <div class="grid two">
        ${referenceUnits().map((unit) => renderUnitCard(unit)).join("")}
      </div>
    </section>
  `;
}

// ---------------------------------------------------------------- Unit detail

function renderUnit(unitKey) {
  const unit = getUnit(unitKey);
  if (!unit) return renderMissing("Not found");

  setTitle(unit.data.title);
  const d = unit.data;
  const words = unitWords(unit);
  const hasContent = (d.sections || []).length || words.length || (d.examples || []).length || (d.exercises || []).length;
  const questionCount = (d.questions || []).length + words.filter((word) => isQuizableWord(word)).length;
  const backView = unit.kind === "grammar" ? "grammar" : unit.kind === "vocab" ? "vocab" : "reference";

  app.innerHTML = `
    <section class="study-layout">
      <article class="card">
        <div class="badge-row">
          <span class="badge">${escapeHtml(KIND_LABEL[unit.kind] || unit.kind)}</span>
          ${statusBadge(d.status)}
        </div>
        <h1 class="topic-title">${escapeHtml(d.title)}</h1>
        <p>${escapeHtml(d.summary || "")}</p>

        ${!hasContent ? `<p class="empty">Content coming soon. This topic is scaffolded and will be filled in.</p>` : ""}

        ${(d.sections || []).map((section) => `
          <section class="section">
            <h3>${escapeHtml(section.title)}</h3>
            ${(section.body || []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
          </section>
        `).join("")}

        ${renderTables(d.tables)}
        ${renderWordTable(words)}
        ${renderExamples(d.examples)}
        ${renderExercises(unit)}
      </article>

      <aside class="card">
        <h3>Practice</h3>
        <p>${questionCount} question${questionCount === 1 ? "" : "s"} for this topic.</p>
        <div class="card-actions">
          <button class="button" type="button" data-quiz-unit="${escapeHtml(unit.key)}"${questionCount ? "" : " disabled"}>Quiz this topic</button>
          <button class="ghost-button" type="button" data-view="${backView}">Back</button>
        </div>
      </aside>
    </section>
  `;
}

function renderTables(tables = []) {
  if (!tables || !tables.length) return "";
  return tables.map((table) => `
    <section class="section">
      <h3>${escapeHtml(table.title || "")}</h3>
      <div class="table-wrap">
        <table>
          <thead><tr>${(table.columns || []).map((col) => `<th>${escapeHtml(col)}</th>`).join("")}</tr></thead>
          <tbody>
            ${(table.rows || []).map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `).join("");
}

function renderWordTable(words = []) {
  if (!words.length) return "";

  // Italian-first layout when definitions exist: lead with the Italian word,
  // its Italian definition and example. Translation stays as a quiet safety net.
  const italianFirst = words.some((word) => word.def);
  if (italianFirst) {
    return `
      <section class="section">
        <h3>Parole</h3>
        <div class="word-list">
          ${words.map((item) => `
            <div class="word-entry">
              <div class="word-head">${escapeHtml(item.it)}</div>
              ${item.def ? `<div class="word-def">${escapeHtml(item.def)}</div>` : ""}
              ${item.ex ? `<div class="word-ex">${escapeHtml(item.ex)}</div>` : ""}
              ${(item.en || item.de) ? `<div class="word-tr">${escapeHtml([item.en, item.de].filter(Boolean).join(" · "))}</div>` : ""}
            </div>
          `).join("")}
        </div>
      </section>
    `;
  }

  return `
    <section class="section">
      <h3>Vocabulary</h3>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Italian</th><th>English</th><th>German</th><th>Note</th></tr></thead>
          <tbody>
            ${words.map((item) => `
              <tr>
                <td>${escapeHtml(item.it)}</td>
                <td>${escapeHtml(item.en || "")}</td>
                <td>${escapeHtml(item.de || "")}</td>
                <td>${escapeHtml(item.note || "")}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderExamples(examples = []) {
  if (!examples || !examples.length) return "";
  return `
    <section class="section">
      <h3>Examples</h3>
      ${examples.map((example) => `
        <div class="example">
          <strong>${escapeHtml(example.it)}</strong>
          ${example.en ? `<span>EN: ${escapeHtml(example.en)}</span>` : ""}
          ${example.de ? `<span>DE: ${escapeHtml(example.de)}</span>` : ""}
        </div>
      `).join("")}
    </section>
  `;
}

function revealId(unit, index) {
  return `reveal-${unit.key}-${index}`.replace(/[^a-z0-9-]/gi, "-");
}

function renderRevealBlocks(reveal = {}) {
  if (!reveal) return "";
  let html = "";
  (reveal.body || []).forEach((paragraph) => {
    html += `<p>${escapeHtml(paragraph)}</p>`;
  });
  html += renderTables(reveal.tables);
  html += renderExamples(reveal.examples);
  return html;
}

function renderExercises(unit) {
  const exercises = unit.data.exercises || [];
  if (!exercises.length) return "";
  return `
    <section class="section exercises">
      <h3>Esercizi — scrivi a mano, poi controlla</h3>
      <p class="page-copy">Fai ogni esercizio sul tuo quaderno. Poi rivela il suggerimento per confrontare.</p>
      ${exercises.map((exercise, index) => {
        const id = revealId(unit, index);
        return `
        <div class="exercise-card">
          <div class="exercise-prompt">${escapeHtml(exercise.prompt)}</div>
          ${exercise.hint ? `<p class="exercise-hint">Suggerimento: ${escapeHtml(exercise.hint)}</p>` : ""}
          <button class="secondary-button" type="button" data-toggle-reveal="${id}">Rivela suggerimento</button>
          <div class="exercise-reveal" id="${id}" hidden>
            ${renderRevealBlocks(exercise.reveal)}
          </div>
        </div>`;
      }).join("")}
    </section>
  `;
}

function renderMissing(message) {
  setTitle("Not Found");
  app.innerHTML = `
    <section class="card">
      <h1 class="page-title">${escapeHtml(message)}</h1>
      <button class="button" type="button" data-view="home">Back home</button>
    </section>
  `;
}

// ---------------------------------------------------------------- Quiz

function renderQuizBuilder() {
  setTitle("Quiz Builder");
  if (!state.quiz.initialized) {
    allUnits().forEach((unit) => state.quiz.selectedUnitKeys.add(unit.key));
    state.quiz.initialized = true;
  }
  rebuildQuizPool();

  app.innerHTML = `
    <section class="page-header">
      <h1 class="page-title">Quiz Builder</h1>
      <p class="page-copy">Choose categories and topics, then practice from that question pool.</p>
    </section>

    <section class="quiz-builder">
      <aside class="card">
        <h3>Filters</h3>
        <div class="filter-group compact-first">
          <div class="meta-label">Practice type</div>
          <div class="mode-grid">
            <button class="mode-button ${state.quiz.mode === "all" ? "active" : ""}" type="button" data-quiz-mode="all">All</button>
            <button class="mode-button ${state.quiz.mode === "grammar" ? "active" : ""}" type="button" data-quiz-mode="grammar">Grammar</button>
            <button class="mode-button ${state.quiz.mode === "vocab" ? "active" : ""}" type="button" data-quiz-mode="vocab">Vocabulary</button>
            <button class="mode-button ${state.quiz.mode === "mixed" ? "active" : ""}" type="button" data-quiz-mode="mixed">Grammar+notes</button>
            <button class="mode-button ${state.quiz.mode === "numbers" ? "active" : ""}" type="button" data-quiz-mode="numbers">Numbers</button>
          </div>
        </div>
        <button class="ghost-button" type="button" data-action="select-all-quiz">Select all</button>
        <button class="ghost-button" type="button" data-action="clear-quiz">Clear</button>

        <div class="filter-group">
          <div class="meta-label">Grammar</div>
          ${grammarUnits().map((unit) => renderFilterRow(unit)).join("")}
        </div>

        <div class="filter-group">
          <div class="meta-label">Vocabulary</div>
          ${vocabUnits().map((unit) => renderFilterRow(unit)).join("")}
        </div>

        <div class="filter-group">
          <div class="meta-label">Reference</div>
          ${referenceUnits().map((unit) => renderFilterRow(unit)).join("")}
        </div>
      </aside>

      <section class="card" id="quiz-stage">
        ${renderQuizStage()}
      </section>
    </section>
  `;
}

function renderFilterRow(unit) {
  return `
    <label class="check-row">
      <input type="checkbox" data-filter-unit="${escapeHtml(unit.key)}" ${state.quiz.selectedUnitKeys.has(unit.key) ? "checked" : ""}>
      <span>${escapeHtml(unit.data.title)}<small>${escapeHtml(unit.data.status || "ready")}</small></span>
    </label>
  `;
}

function rebuildQuizPool() {
  const pool = filteredQuestionPool();
  const poolKey = [
    state.quiz.mode,
    [...state.quiz.selectedUnitKeys].sort().join(","),
    pool.map((question) => question.id).sort().join(",")
  ].join("|");

  if (poolKey !== state.quiz.poolKey) {
    state.quiz.poolKey = poolKey;
    state.quiz.pool = pool;
    state.quiz.deck = buildDeck(pool);
    state.quiz.current = null;
    state.quiz.answered = false;
    state.quiz.round = 1;
    return;
  }

  state.quiz.pool = pool;
  if (state.quiz.current && !state.quiz.pool.some((question) => question.id === state.quiz.current.id)) {
    state.quiz.current = null;
    state.quiz.answered = false;
  }
}

function filteredQuestionPool() {
  const pool = questionPool();
  if (state.quiz.mode === "numbers") return pool;
  return pool.filter((question) =>
    question.unitKey === "personal" || state.quiz.selectedUnitKeys.has(question.unitKey)
  );
}

function resetQuizDeck() {
  state.quiz.poolKey = "";
  state.quiz.deck = [];
  state.quiz.current = null;
  state.quiz.answered = false;
  state.quiz.round = 1;
}

function renderQuizStage() {
  const stats = `
    <div class="quiz-stats">
      <div class="stat"><strong>${state.quiz.correct}</strong><span>Correct</span></div>
      <div class="stat"><strong>${state.quiz.total}</strong><span>Total</span></div>
      <div class="stat"><strong>${dueCount(state.quiz.pool)}</strong><span>Due</span></div>
    </div>
  `;

  if (!state.quiz.pool.length) {
    return `${stats}<p class="empty">Select at least one category or topic with quiz questions.</p>`;
  }

  if (!state.quiz.current) {
    state.quiz.current = drawQuestion();
  }

  const question = state.quiz.current;
  const box = srsBox(question.id);
  const boxBadge = box ? `Box ${box}/5` : "New";
  return `
    ${stats}
    <div class="badge-row">
      <span class="badge">${escapeHtml(question.kindLabel || "")}</span>
      <span class="badge">${escapeHtml(question.unitTitle || "")}</span>
      <span class="badge badge-box">${boxBadge}</span>
    </div>
    ${renderQuestionPrompt(question)}
    ${renderQuestionInput(question)}
    <div class="feedback" id="feedback"></div>
    <div class="continue-actions" id="continue-actions" hidden>
      <button class="button" type="button" data-action="continue-quiz">Continua &rarr;</button>
    </div>
    <div class="card-actions">
      <button class="ghost-button" type="button" data-action="reset-score">Reset score</button>
    </div>
  `;
}

function renderQuestionPrompt(question) {
  // A transform question shows the source sentence prominently under the task.
  if (question.type === "transform") {
    return `
      <div class="quiz-prompt">
        <div class="meta-label">${escapeHtml(question.prompt)}</div>
        <h3 class="quiz-source">${escapeHtml(question.source || "")}</h3>
      </div>
    `;
  }
  return `
    <div class="quiz-prompt">
      <div class="meta-label">Question</div>
      <h3>${escapeHtml(question.prompt)}</h3>
    </div>
  `;
}

function renderQuestionInput(question) {
  if (question.type !== "multiple-choice") {
    const placeholder = question.type === "transform" ? "Riscrivi la frase" : "Type your answer";
    return `
      <div class="answer-row">
        <input class="text-input" id="typed-answer" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${placeholder}">
        <button class="button" type="button" data-action="submit-typed">Check</button>
      </div>
    `;
  }

  const options = shuffle([...(question.options || []), question.answer])
    .filter((value, index, arr) => arr.indexOf(value) === index);

  return `
    <div class="quiz-options">
      ${options.map((option) => `
        <button class="quiz-option" type="button" data-answer-option="${escapeHtml(option)}">${escapeHtml(option)}</button>
      `).join("")}
    </div>
  `;
}

function drawQuestion() {
  if (!state.quiz.deck.length) {
    state.quiz.deck = buildDeck(state.quiz.pool);
    state.quiz.round += 1;
  }
  return state.quiz.deck.shift() || null;
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function normalizeAnswer(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")  // strip accents
    .replace(/[.,!?;:]/g, "")         // ignore punctuation (helps sentence transforms)
    .replace(/\s+/g, " ")             // collapse whitespace
    .trim();
}

function isCorrectAnswer(question, value) {
  const accepted = question.accepted || [question.answer];
  return accepted.map(normalizeAnswer).includes(normalizeAnswer(value));
}

function answerQuestion(value, button = null) {
  if (state.quiz.answered || !state.quiz.current) return;

  const question = state.quiz.current;
  const correct = isCorrectAnswer(question, value);
  state.quiz.answered = true;
  state.quiz.total += 1;
  if (correct) state.quiz.correct += 1;

  document.querySelectorAll("[data-answer-option]").forEach((optionButton) => {
    const optionValue = optionButton.dataset.answerOption;
    optionButton.disabled = true;
    if (isCorrectAnswer(question, optionValue)) optionButton.classList.add("correct");
  });

  if (button && !correct) button.classList.add("wrong");
  if (button && correct) button.classList.add("correct");

  const input = document.getElementById("typed-answer");
  if (input) input.disabled = true;

  // Spaced repetition: promote on correct, reset on wrong.
  const record = srsReview(question.id, correct);

  // A wrong item also comes back within this same session, a few cards later.
  if (!correct) {
    const position = Math.min(state.quiz.deck.length, 4);
    state.quiz.deck.splice(position, 0, question);
  }

  const boxNote = correct
    ? `Moved to box ${record.box}/5.`
    : `Back to box 1 — you'll see it again soon.`;

  const feedback = document.getElementById("feedback");
  feedback.className = `feedback ${correct ? "good" : "bad"}`;
  feedback.innerHTML = correct
    ? `Corretto! ${escapeHtml(question.explanation || "")} <span class="srs-note">${boxNote}</span>`
    : `Non ancora. Risposta: <strong>${escapeHtml(question.answer)}</strong>. ${escapeHtml(question.explanation || "")} <span class="srs-note">${boxNote}</span>`;

  const continueActions = document.getElementById("continue-actions");
  if (continueActions) continueActions.removeAttribute("hidden");
  document.querySelector('[data-action="continue-quiz"]')?.focus();
}

function advanceQuiz() {
  if (!state.quiz.current) return;
  state.quiz.current = drawQuestion();
  state.quiz.answered = false;
  const stage = document.getElementById("quiz-stage");
  if (stage) stage.innerHTML = renderQuizStage();
  document.getElementById("typed-answer")?.focus();
}

// ---------------------------------------------------------------- Progress dashboard

function srsStats(questions) {
  const now = Date.now();
  const boxes = [0, 0, 0, 0, 0, 0]; // index 0 = new/unseen, 1..5 = Leitner boxes
  let due = 0;
  questions.forEach((question) => {
    boxes[srsBox(question.id)] += 1;
    if (srsIsDue(question.id, now)) due += 1;
  });
  return { total: questions.length, boxes, due, seen: questions.length - boxes[0] };
}

function renderSrsBar(stats) {
  const total = stats.total || 1;
  const segments = [
    ["seg-new", stats.boxes[0], "new"],
    ["seg-b1", stats.boxes[1], "box 1"],
    ["seg-b2", stats.boxes[2], "box 2"],
    ["seg-b3", stats.boxes[3], "box 3"],
    ["seg-b4", stats.boxes[4], "box 4"],
    ["seg-b5", stats.boxes[5], "box 5"]
  ].filter(([, count]) => count > 0);
  return `<div class="srs-bar">${segments.map(([cls, count, label]) =>
    `<span class="srs-seg ${cls}" style="width:${(count / total * 100).toFixed(1)}%" title="${label}: ${count}"></span>`
  ).join("")}</div>`;
}

function progressRow(unit, byUnit) {
  const questions = byUnit[unit.key] || [];
  if (!questions.length) return "";
  const stats = srsStats(questions);
  return `
    <div class="progress-row">
      <div class="progress-row-head">
        <button class="link-button" type="button" data-route-unit="${escapeHtml(unit.key)}">${escapeHtml(unit.data.title)}</button>
        <span class="progress-meta">${stats.boxes[5]}/${stats.total} mastered${stats.due ? ` &middot; ${stats.due} due` : ""}</span>
      </div>
      ${renderSrsBar(stats)}
    </div>
  `;
}

function renderProgress() {
  setTitle("Progress");
  const questions = allTrackableQuestions();
  const overall = srsStats(questions);
  const byUnit = {};
  questions.forEach((question) => {
    (byUnit[question.unitKey] = byUnit[question.unitKey] || []).push(question);
  });

  app.innerHTML = `
    <section class="page-header">
      <h1 class="page-title">Progress</h1>
      <p class="page-copy">Your spaced-repetition progress. A correct answer moves an item up a box; a wrong answer sends it back to box 1.</p>
    </section>

    <section class="grid three">
      <article class="card"><div class="meta-label">Seen</div><h3>${overall.seen} / ${overall.total}</h3><p>practised at least once</p></article>
      <article class="card"><div class="meta-label">Mastered</div><h3>${overall.boxes[5]}</h3><p>items in box 5</p></article>
      <article class="card"><div class="meta-label">Due now</div><h3>${overall.due}</h3><p>ready to review</p></article>
    </section>

    <section class="section">
      <article class="card">
        <h3>Overall</h3>
        ${renderSrsBar(overall)}
        <div class="srs-legend">
          <span><i class="seg-new"></i>new</span>
          <span><i class="seg-b1"></i>box 1</span>
          <span><i class="seg-b2"></i>2</span>
          <span><i class="seg-b3"></i>3</span>
          <span><i class="seg-b4"></i>4</span>
          <span><i class="seg-b5"></i>5</span>
        </div>
        <div class="card-actions">
          <button class="button" type="button" data-action="review-due"${overall.due ? "" : " disabled"}>Review ${overall.due} due now</button>
          <button class="ghost-button" type="button" data-action="reset-progress">Reset progress</button>
        </div>
      </article>
    </section>

    ${grammarStages().map((stage) => `
      <section class="section">
        <div class="section-head"><h2>${escapeHtml(stage.title)}</h2></div>
        ${stage.units.map((unit) => progressRow(unit, byUnit)).join("")}
      </section>
    `).join("")}

    <section class="section">
      <div class="section-head"><h2>Vocabulary</h2></div>
      ${vocabUnits().map((unit) => progressRow(unit, byUnit)).join("")}
    </section>
  `;
}

// ---------------------------------------------------------------- Notebook

function renderNotebook() {
  setTitle("Personal Notebook");
  const notes = loadNotes();

  app.innerHTML = `
    <section class="page-header">
      <h1 class="page-title">Personal Notebook</h1>
      <p class="page-copy">Save travel phrases, useful vocabulary, and personal examples you want to keep in the app.</p>
    </section>

    <section class="grid two">
      <article class="card">
        <h3>Add a note</h3>
        <form class="note-form" id="note-form">
          <input type="hidden" name="id" id="note-id">
          <input class="note-input" name="title" required placeholder="Title, phrase, or word">
          <div class="format-toolbar" aria-label="Formatting examples">
            <button class="ghost-button" type="button" data-format="bold">Bold</button>
            <button class="ghost-button" type="button" data-format="italic">Italic</button>
            <button class="ghost-button" type="button" data-format="bullet">Bullet</button>
          </div>
          <textarea class="note-textarea" name="body" id="note-body" required placeholder="Use **bold**, *italic*, inline code, and lines starting with - for bullets."></textarea>
          <input class="note-input" name="tags" placeholder="Tags, e.g. travel, food, hotel">
          <div class="card-actions">
            <button class="button" type="submit" id="note-submit">Add note</button>
            <button class="ghost-button" type="button" data-action="cancel-note-edit">Cancel</button>
          </div>
        </form>
      </article>

      <article class="card">
        <h3>Your notes</h3>
        <div id="notes-list">
          ${renderNotes(notes)}
        </div>
      </article>
    </section>

    <section class="section grid two">
      <article class="card">
        <h3>Add vocabulary</h3>
        <form class="note-form" id="vocab-form">
          <input class="note-input" name="it" required placeholder="Italian word or phrase">
          <input class="note-input" name="en" placeholder="English meaning">
          <input class="note-input" name="de" placeholder="German meaning">
          <input class="note-input" name="note" placeholder="Pronunciation, context, example...">
          <button class="button" type="submit">Add to vocabulary quiz</button>
        </form>
      </article>

      <article class="card">
        <h3>Vocabulary for quizzes</h3>
        <div id="vocab-list">
          ${renderVocabulary(loadVocabulary())}
        </div>
      </article>
    </section>
  `;
}

function renderNotes(notes) {
  if (!notes.length) {
    return `<p class="empty">No personal notes yet.</p>`;
  }

  return notes.map((note) => `
    <div class="note-card">
      <div class="badge-row">
        ${(note.tags || []).map((tag) => `<span class="badge">${escapeHtml(tag)}</span>`).join("")}
      </div>
      <h3>${escapeHtml(note.title)}</h3>
      <div class="rich-note">${formatNote(note.body)}</div>
      <div class="card-actions">
        <button class="secondary-button" type="button" data-edit-note="${escapeHtml(note.id)}">Edit</button>
        <button class="ghost-button" type="button" data-delete-note="${escapeHtml(note.id)}">Delete</button>
      </div>
    </div>
  `).join("");
}

function formatNote(value) {
  const lines = escapeHtml(value).split(/\n/);
  let inList = false;
  const html = lines.map((line) => {
    const formatted = line
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>");

    if (formatted.startsWith("- ")) {
      const item = `<li>${formatted.slice(2)}</li>`;
      if (!inList) {
        inList = true;
        return `<ul>${item}`;
      }
      return item;
    }

    if (inList) {
      inList = false;
      return `</ul><p>${formatted}</p>`;
    }

    return formatted ? `<p>${formatted}</p>` : "";
  }).join("");

  return inList ? `${html}</ul>` : html;
}

function loadNotes() {
  try {
    return JSON.parse(localStorage.getItem("italian-course-notes") || "[]");
  } catch {
    return [];
  }
}

function saveNotes(notes) {
  localStorage.setItem("italian-course-notes", JSON.stringify(notes));
}

function loadVocabulary() {
  try {
    return JSON.parse(localStorage.getItem("italian-course-vocabulary") || "[]");
  } catch {
    return [];
  }
}

function saveVocabulary(items) {
  localStorage.setItem("italian-course-vocabulary", JSON.stringify(items));
}

function renderVocabulary(items) {
  if (!items.length) {
    return `<p class="empty">No personal vocabulary yet.</p>`;
  }

  return items.map((item) => `
    <div class="note-card">
      <h3>${escapeHtml(item.it)}</h3>
      <p>${escapeHtml(item.en || "")}${item.de ? ` / ${escapeHtml(item.de)}` : ""}</p>
      ${item.note ? `<p>${escapeHtml(item.note)}</p>` : ""}
      <button class="ghost-button" type="button" data-delete-vocab="${escapeHtml(item.id)}">Delete</button>
    </div>
  `).join("");
}

function addVocabulary(form) {
  const formData = new FormData(form);
  const items = loadVocabulary();
  items.unshift({
    id: `${Date.now()}`,
    it: formData.get("it"),
    en: formData.get("en"),
    de: formData.get("de"),
    note: formData.get("note")
  });
  saveVocabulary(items);
  form.reset();
  document.getElementById("vocab-list").innerHTML = renderVocabulary(items);
  resetQuizDeck();
}

function deleteVocabulary(itemId) {
  const items = loadVocabulary().filter((item) => item.id !== itemId);
  saveVocabulary(items);
  document.getElementById("vocab-list").innerHTML = renderVocabulary(items);
  resetQuizDeck();
}

function addNote(form) {
  const formData = new FormData(form);
  const noteId = formData.get("id");
  const notes = loadNotes();
  const nextNote = {
    id: noteId || `${Date.now()}`,
    title: formData.get("title"),
    body: formData.get("body"),
    tags: String(formData.get("tags") || "")
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean)
  };

  if (noteId) {
    const index = notes.findIndex((note) => note.id === noteId);
    if (index >= 0) notes[index] = nextNote;
  } else {
    notes.unshift(nextNote);
  }

  saveNotes(notes);
  resetNoteForm();
  document.getElementById("notes-list").innerHTML = renderNotes(notes);
}

function editNote(noteId) {
  const note = loadNotes().find((item) => item.id === noteId);
  if (!note) return;

  const form = document.getElementById("note-form");
  form.elements.id.value = note.id;
  form.elements.title.value = note.title;
  form.elements.body.value = note.body;
  form.elements.tags.value = (note.tags || []).join(", ");
  document.getElementById("note-submit").textContent = "Save note";
  form.elements.title.focus();
}

function resetNoteForm() {
  const form = document.getElementById("note-form");
  if (!form) return;
  form.reset();
  form.elements.id.value = "";
  document.getElementById("note-submit").textContent = "Add note";
}

function applyNoteFormat(kind) {
  const textarea = document.getElementById("note-body");
  if (!textarea) return;

  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const selected = textarea.value.slice(start, end) || "text";
  const wrappers = {
    bold: [`**`, `**`],
    italic: [`*`, `*`],
    bullet: [`- `, ``]
  };
  const [before, after] = wrappers[kind] || ["", ""];
  const next = `${before}${selected}${after}`;
  textarea.setRangeText(next, start, end, "select");
  textarea.focus();
}

function deleteNote(noteId) {
  const notes = loadNotes().filter((note) => note.id !== noteId);
  saveNotes(notes);
  document.getElementById("notes-list").innerHTML = renderNotes(notes);
}

// ---------------------------------------------------------------- Sidebar

function openSidebar() {
  sidebar.classList.add("open");
  overlay.classList.add("open");
}

function closeSidebar() {
  sidebar.classList.remove("open");
  overlay.classList.remove("open");
}

// ---------------------------------------------------------------- Events

document.addEventListener("click", (event) => {
  const target = event.target.closest("button, input, [data-action]");
  if (!target) return;

  if (target.dataset.action === "open-sidebar") openSidebar();
  if (target.dataset.action === "close-sidebar") closeSidebar();

  if (target.dataset.view) route(target.dataset.view);

  if (target.dataset.routeUnit) {
    route("unit", { unitKey: target.dataset.routeUnit });
  }

  if (target.dataset.quizUnit) {
    state.quiz.initialized = true;
    state.quiz.selectedUnitKeys = new Set([target.dataset.quizUnit]);
    if (target.dataset.quizUnit.startsWith("vocab:")) state.quiz.mode = "vocab";
    resetQuizDeck();
    route("quiz");
  }

  if (target.dataset.action === "select-all-quiz") {
    state.quiz.initialized = true;
    state.quiz.selectedUnitKeys = new Set(allUnits().map((unit) => unit.key));
    resetQuizDeck();
    renderQuizBuilder();
  }

  if (target.dataset.action === "clear-quiz") {
    state.quiz.initialized = true;
    state.quiz.selectedUnitKeys = new Set();
    resetQuizDeck();
    renderQuizBuilder();
  }

  if (target.dataset.quizMode) {
    state.quiz.mode = target.dataset.quizMode;
    resetQuizDeck();
    renderQuizBuilder();
  }

  if (target.dataset.answerOption) {
    answerQuestion(target.dataset.answerOption, target);
  }

  if (target.dataset.action === "submit-typed") {
    answerQuestion(document.getElementById("typed-answer")?.value || "");
  }

  if (target.dataset.action === "continue-quiz") {
    advanceQuiz();
  }

  if (target.dataset.action === "reset-score") {
    state.quiz.correct = 0;
    state.quiz.total = 0;
    resetQuizDeck();
    renderQuizBuilder();
  }

  if (target.dataset.action === "review-due") {
    state.quiz.initialized = true;
    state.quiz.mode = "all";
    state.quiz.selectedUnitKeys = new Set(allUnits().map((unit) => unit.key));
    resetQuizDeck();
    route("quiz");
  }

  if (target.dataset.action === "reset-progress") {
    if (window.confirm("Reset all spaced-repetition progress? This cannot be undone.")) {
      saveSrs({});
      renderProgress();
    }
  }

  if (target.dataset.toggleReveal) {
    const revealEl = document.getElementById(target.dataset.toggleReveal);
    if (revealEl) {
      const wasHidden = revealEl.hasAttribute("hidden");
      revealEl.toggleAttribute("hidden", !wasHidden);
      target.textContent = wasHidden ? "Nascondi suggerimento" : "Rivela suggerimento";
    }
  }

  if (target.dataset.deleteNote) deleteNote(target.dataset.deleteNote);
  if (target.dataset.deleteVocab) deleteVocabulary(target.dataset.deleteVocab);
  if (target.dataset.editNote) editNote(target.dataset.editNote);
  if (target.dataset.action === "cancel-note-edit") resetNoteForm();
  if (target.dataset.format) applyNoteFormat(target.dataset.format);
});

document.addEventListener("change", (event) => {
  const target = event.target;

  if (target.dataset.filterUnit) {
    if (target.checked) {
      state.quiz.selectedUnitKeys.add(target.dataset.filterUnit);
    } else {
      state.quiz.selectedUnitKeys.delete(target.dataset.filterUnit);
    }
    resetQuizDeck();
    renderQuizBuilder();
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.id === "note-form") {
    event.preventDefault();
    addNote(event.target);
  }

  if (event.target.id === "vocab-form") {
    event.preventDefault();
    addVocabulary(event.target);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeSidebar();

  if (event.key !== "Enter") return;

  // After answering, Enter advances to the next question (from anywhere).
  if (state.view === "quiz" && state.quiz.answered) {
    event.preventDefault();
    advanceQuiz();
    return;
  }

  // While answering a typed/transform/cloze question, Enter submits.
  if (document.activeElement?.id === "typed-answer") {
    answerQuestion(document.activeElement.value);
  }
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // The app still works without offline caching.
    });
  });
}

renderUnitNav();
render();
