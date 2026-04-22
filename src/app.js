const state = {
  view: "home",
  weekId: null,
  topicId: null,
  quiz: {
    initialized: false,
    mode: "mixed",
    selectedWeekIds: new Set(),
    selectedTopicKeys: new Set(),
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

const course = window.COURSE || { weeks: [], grammar: [] };

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function slugKey(weekId, topicId) {
  return `${weekId}:${topicId}`;
}

function getWeek(weekId) {
  return course.weeks.find((week) => week.id === weekId);
}

function getTopic(weekId, topicId) {
  return getWeek(weekId)?.topics.find((topic) => topic.id === topicId);
}

function allTopics() {
  return course.weeks.flatMap((week) =>
    week.topics.map((topic) => ({
      week,
      topic,
      key: slugKey(week.id, topic.id)
    }))
  );
}

function baseQuestionPool() {
  return allTopics().flatMap(({ week, topic, key }) =>
    (topic.questions || []).map((question) => ({
      ...question,
      weekId: week.id,
      weekTitle: week.title,
      topicId: topic.id,
      topicTitle: topic.title,
      topicKey: key
    }))
  );
}

function questionPool(mode = state.quiz.mode) {
  const base = baseQuestionPool();
  const personal = personalVocabularyQuestions();

  if (mode === "vocab") {
    return [...courseVocabularyQuestions(), ...personal];
  }

  if (mode === "numbers") {
    return numberWritingQuestions();
  }

  return [...base, ...personal];
}

function courseVocabularyQuestions() {
  return allTopics().flatMap(({ week, topic, key }) =>
    (topic.vocab || [])
      .filter((item) => item.it && (item.en || item.de))
      .map((item, index) => ({
        id: `vocab-${week.id}-${topic.id}-${index}-${item.it}`,
        type: "typed",
        prompt: `Write the Italian for: ${item.en}${item.de ? ` / ${item.de}` : ""}`,
        answer: stripArticle(item.it),
        accepted: acceptedVocabAnswers(item.it),
        explanation: item.note || "",
        weekId: week.id,
        weekTitle: week.title,
        topicId: topic.id,
        topicTitle: topic.title,
        topicKey: key
      }))
  );
}

function personalVocabularyQuestions() {
  return loadVocabulary().map((item) => ({
    id: `personal-vocab-${item.id}`,
    type: "typed",
    prompt: `Write the Italian for: ${item.en || item.de || item.note || "your saved word"}`,
    answer: stripArticle(item.it),
    accepted: acceptedVocabAnswers(item.it),
    explanation: item.note || "Personal vocabulary.",
    weekId: "personal",
    weekTitle: "Personal",
    topicId: "personal-vocabulary",
    topicTitle: "Personal vocabulary",
    topicKey: "personal:personal-vocabulary"
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
    weekId: "numbers",
    weekTitle: "Numbers",
    topicId: "numbers-writing",
    topicTitle: "Numbers writing",
    topicKey: "numbers:numbers-writing"
  }));
}

function stripArticle(value) {
  return String(value || "")
    .replace(/^(il|lo|la|l'|un|uno|una|un')\s+/i, "")
    .trim();
}

function acceptedVocabAnswers(value) {
  const clean = stripArticle(value);
  const raw = String(value || "").trim();
  return [...new Set([raw, clean].filter(Boolean))];
}

function setTitle(title) {
  viewTitle.textContent = title;
  document.title = `${title} - Italian Course`;
}

function updateNav() {
  document.querySelectorAll(".nav-item[data-view], .bottom-nav-item[data-view]").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === state.view);
  });

  document.querySelectorAll("[data-week-id]").forEach((item) => {
    item.classList.toggle("active", item.dataset.weekId === state.weekId && state.view === "week");
  });
}

function renderWeekNav() {
  const weekNav = document.getElementById("week-nav");
  weekNav.innerHTML = course.weeks.map((week) => `
    <button class="week-nav-item" type="button" data-route-week="${escapeHtml(week.id)}" data-week-id="${escapeHtml(week.id)}">
      ${escapeHtml(week.title)}
      <small>${escapeHtml(week.theme)}</small>
    </button>
  `).join("");
}

function route(view, params = {}) {
  state.view = view;
  state.weekId = params.weekId || null;
  state.topicId = params.topicId || null;
  closeSidebar();
  render();
}

function render() {
  updateNav();

  if (state.view === "week") {
    return renderWeek(state.weekId);
  }

  if (state.view === "topic") {
    return renderTopic(state.weekId, state.topicId);
  }

  if (state.view === "grammar") {
    return renderGrammar();
  }

  if (state.view === "quiz") {
    return renderQuizBuilder();
  }

  if (state.view === "notebook") {
    return renderNotebook();
  }

  renderHome();
}

function renderHome() {
  setTitle("Course Home");
  const totalTopics = allTopics().length;
  const totalQuestions = baseQuestionPool().length;

  app.innerHTML = `
    <section class="page-header">
      <h1 class="page-title">${escapeHtml(course.title)}</h1>
      <p class="page-copy">${escapeHtml(course.description)}</p>
    </section>

    <section class="grid three">
      <article class="card">
        <div class="meta-label">Course</div>
        <h3>Week-by-week path</h3>
        <p>Study each week in order, then open individual topics for deeper review.</p>
      </article>
      <article class="card">
        <div class="meta-label">Practice</div>
        <h3>${totalQuestions} questions ready</h3>
        <p>Quiz one topic, one week, selected topics, or the whole question pool.</p>
      </article>
      <article class="card">
        <div class="meta-label">Notebook</div>
        <h3>Personal phrases</h3>
        <p>Store travel phrases, useful words, and things you learn outside the course.</p>
      </article>
    </section>

    <section class="section">
      <div class="grid two">
        ${course.weeks.map(renderWeekCard).join("")}
      </div>
    </section>
  `;
}

function renderWeekCard(week) {
  const topicCount = week.topics.length;
  const questionCount = week.topics.reduce((sum, topic) => sum + (topic.questions || []).length, 0);

  return `
    <article class="card week-card">
      <div>
        <div class="badge-row">
          <span class="badge">${escapeHtml(week.status || "ready")}</span>
          <span class="badge">${topicCount} topics</span>
          <span class="badge">${questionCount} questions</span>
        </div>
        <h3 class="week-title">${escapeHtml(week.title)}</h3>
        <p>${escapeHtml(week.theme)}</p>
      </div>
      <p>${escapeHtml(week.goal)}</p>
      <div class="card-actions">
        <button class="button" type="button" data-route-week="${escapeHtml(week.id)}">Study week</button>
        <button class="secondary-button" type="button" data-quiz-week="${escapeHtml(week.id)}">Quiz week</button>
      </div>
    </article>
  `;
}

function renderWeek(weekId) {
  const week = getWeek(weekId);
  if (!week) {
    return renderMissing("Week not found");
  }

  setTitle(week.title);
  app.innerHTML = `
    <section class="page-header">
      <div class="badge-row">
        <span class="badge">${escapeHtml(week.status || "ready")}</span>
        <span class="badge">${week.topics.length} topics</span>
      </div>
      <h1 class="page-title">${escapeHtml(week.title)}: ${escapeHtml(week.theme)}</h1>
      <p class="page-copy">${escapeHtml(week.goal)}</p>
    </section>

    <section class="grid two">
      <article class="card">
        <h3>Outcomes</h3>
        ${renderList(week.outcomes)}
      </article>
    </section>

    <section class="section">
      <div class="grid two">
        ${week.topics.map((topic) => renderTopicCard(week, topic)).join("")}
      </div>
    </section>
  `;
}

function renderTopicCard(week, topic) {
  const questionCount = (topic.questions || []).length;
  return `
    <article class="card">
      <div class="badge-row">
        <span class="badge">${escapeHtml(topic.type || "topic")}</span>
        <span class="badge">${questionCount} questions</span>
      </div>
      <h3>${escapeHtml(topic.title)}</h3>
      <p>${escapeHtml(topic.summary)}</p>
      <div class="card-actions">
        <button class="button" type="button" data-route-topic="${escapeHtml(week.id)}" data-topic-id="${escapeHtml(topic.id)}">Study topic</button>
        <button class="secondary-button" type="button" data-quiz-topic="${escapeHtml(week.id)}" data-topic-id="${escapeHtml(topic.id)}">Quiz topic</button>
      </div>
    </article>
  `;
}

function renderTopic(weekId, topicId) {
  const week = getWeek(weekId);
  const topic = getTopic(weekId, topicId);
  if (!week || !topic) {
    return renderMissing("Topic not found");
  }

  setTitle(topic.title);
  app.innerHTML = `
    <section class="study-layout">
      <article class="card">
        <div class="badge-row">
          <span class="badge">${escapeHtml(week.title)}</span>
          <span class="badge">${escapeHtml(topic.type || "topic")}</span>
        </div>
        <h1 class="topic-title">${escapeHtml(topic.title)}</h1>
        <p>${escapeHtml(topic.summary)}</p>

        ${(topic.sections || []).map((section) => `
          <section class="section">
            <h3>${escapeHtml(section.title)}</h3>
            ${(section.body || []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
          </section>
        `).join("")}

        ${renderVocab(topic.vocab)}
        ${renderExamples(topic.examples)}
      </article>

      <aside class="card">
        <h3>Topic practice</h3>
        <p>Quiz only this topic, or go back to the week and mix it with other material.</p>
        <div class="card-actions">
          <button class="button" type="button" data-quiz-topic="${escapeHtml(week.id)}" data-topic-id="${escapeHtml(topic.id)}">Quiz this topic</button>
          <button class="ghost-button" type="button" data-route-week="${escapeHtml(week.id)}">Back to week</button>
        </div>
      </aside>
    </section>
  `;
}

function renderVocab(vocab = []) {
  if (!vocab.length) return "";
  return `
    <section class="section">
      <h3>Vocabulary</h3>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Italian</th><th>English</th><th>German</th><th>Note</th></tr></thead>
          <tbody>
            ${vocab.map((item) => `
              <tr>
                <td>${escapeHtml(item.it)}</td>
                <td>${escapeHtml(item.en)}</td>
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
  if (!examples.length) return "";
  return `
    <section class="section">
      <h3>Examples</h3>
      ${examples.map((example) => `
        <div class="example">
          <strong>${escapeHtml(example.it)}</strong>
          <span>EN: ${escapeHtml(example.en)}</span>
          ${example.de ? `<span>DE: ${escapeHtml(example.de)}</span>` : ""}
        </div>
      `).join("")}
    </section>
  `;
}

function renderList(items = []) {
  if (!items.length) return `<p class="empty">Nothing added yet.</p>`;
  return `<ul class="list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderGrammar() {
  setTitle("Grammar Overview");
  app.innerHTML = `
    <section class="page-header">
      <h1 class="page-title">Grammar Overview</h1>
      <p class="page-copy">A reference area for grammar patterns you can use while doing exercises outside the app.</p>
    </section>

    <section class="grid two">
      ${course.grammar.map((item) => `
        <article class="card">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.summary)}</p>
          ${renderList(item.points)}
        </article>
      `).join("")}
    </section>
  `;
}

function renderQuizBuilder() {
  setTitle("Quiz Builder");
  if (!state.quiz.initialized) {
    course.weeks.forEach((week) => state.quiz.selectedWeekIds.add(week.id));
    state.quiz.initialized = true;
  }
  rebuildQuizPool();

  app.innerHTML = `
    <section class="page-header">
      <h1 class="page-title">Quiz Builder</h1>
      <p class="page-copy">Choose specific weeks and topics, then practice from that question pool.</p>
    </section>

    <section class="quiz-builder">
      <aside class="card">
        <h3>Filters</h3>
        <div class="filter-group compact-first">
          <div class="meta-label">Practice type</div>
          <div class="mode-grid">
            <button class="mode-button ${state.quiz.mode === "mixed" ? "active" : ""}" type="button" data-quiz-mode="mixed">Mixed</button>
            <button class="mode-button ${state.quiz.mode === "vocab" ? "active" : ""}" type="button" data-quiz-mode="vocab">Vocabulary</button>
            <button class="mode-button ${state.quiz.mode === "numbers" ? "active" : ""}" type="button" data-quiz-mode="numbers">Numbers</button>
          </div>
        </div>
        <button class="ghost-button" type="button" data-action="select-all-quiz">Select all</button>
        <button class="ghost-button" type="button" data-action="clear-quiz">Clear</button>

        <div class="filter-group">
          <div class="meta-label">Weeks</div>
          ${course.weeks.map((week) => `
            <label class="check-row">
              <input type="checkbox" data-filter-week="${escapeHtml(week.id)}" ${state.quiz.selectedWeekIds.has(week.id) ? "checked" : ""}>
              <span>${escapeHtml(week.title)}<small>${escapeHtml(week.theme)}</small></span>
            </label>
          `).join("")}
        </div>

        <div class="filter-group">
          <div class="meta-label">Topics</div>
          ${allTopics().map(({ week, topic, key }) => `
            <label class="check-row">
              <input type="checkbox" data-filter-topic="${escapeHtml(key)}" ${state.quiz.selectedTopicKeys.has(key) ? "checked" : ""}>
              <span>${escapeHtml(topic.title)}<small>${escapeHtml(week.title)}</small></span>
            </label>
          `).join("")}
        </div>
      </aside>

      <section class="card" id="quiz-stage">
        ${renderQuizStage()}
      </section>
    </section>
  `;
}

function rebuildQuizPool() {
  const pool = filteredQuestionPool();
  const poolKey = [
    state.quiz.mode,
    [...state.quiz.selectedWeekIds].sort().join(","),
    [...state.quiz.selectedTopicKeys].sort().join(","),
    pool.map((question) => question.id).sort().join(",")
  ].join("|");

  if (poolKey !== state.quiz.poolKey) {
    state.quiz.poolKey = poolKey;
    state.quiz.pool = pool;
    state.quiz.deck = shuffle(pool);
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

  const selectedWeeks = state.quiz.selectedWeekIds;
  const selectedTopics = state.quiz.selectedTopicKeys;

  return pool.filter((question) => {
    if (question.weekId === "personal") return true;
    const topicMatch = selectedTopics.has(question.topicKey);
    const weekMatch = selectedWeeks.has(question.weekId);
    return topicMatch || weekMatch;
  });
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
      <div class="stat"><strong>${state.quiz.round}</strong><span>Round</span></div>
    </div>
  `;

  if (!state.quiz.pool.length) {
    return `${stats}<p class="empty">Select at least one week or topic with quiz questions.</p>`;
  }

  if (!state.quiz.current) {
    state.quiz.current = drawQuestion();
  }

  const question = state.quiz.current;
  return `
    ${stats}
    <div class="badge-row">
      <span class="badge">${escapeHtml(question.weekTitle)}</span>
      <span class="badge">${escapeHtml(question.topicTitle)}</span>
      <span class="badge">${escapeHtml(question.type)}</span>
    </div>
    <div class="quiz-prompt">
      <div class="meta-label">Question</div>
      <h3>${escapeHtml(question.prompt)}</h3>
    </div>
    ${renderQuestionInput(question)}
    <div class="feedback" id="feedback"></div>
    <div class="difficulty-actions" id="difficulty-actions" hidden>
      <div class="meta-label">How did it feel?</div>
      <div class="card-actions">
        <button class="secondary-button" type="button" data-difficulty="easy">Easy</button>
        <button class="secondary-button" type="button" data-difficulty="hard">Hard</button>
        <button class="secondary-button" type="button" data-difficulty="very-hard">Very hard</button>
      </div>
    </div>
    <div class="card-actions">
      <button class="ghost-button" type="button" data-action="reset-score">Reset score</button>
    </div>
  `;
}

function renderQuestionInput(question) {
  if (question.type === "typed") {
    return `
      <div class="answer-row">
        <input class="text-input" id="typed-answer" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type your answer">
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
    state.quiz.deck = shuffle(state.quiz.pool);
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
    .replace(/[\u0300-\u036f]/g, "");
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

  const feedback = document.getElementById("feedback");
  feedback.className = `feedback ${correct ? "good" : "bad"}`;
  feedback.innerHTML = correct
    ? `Correct. ${escapeHtml(question.explanation || "")}`
    : `Not yet. Correct answer: <strong>${escapeHtml(question.answer)}</strong>. ${escapeHtml(question.explanation || "")}`;

  document.getElementById("difficulty-actions")?.removeAttribute("hidden");
}

function rateAndContinue(difficulty) {
  if (!state.quiz.current) return;
  applyDifficulty(state.quiz.current, difficulty);
  state.quiz.current = drawQuestion();
  state.quiz.answered = false;
  const stage = document.getElementById("quiz-stage");
  if (stage) stage.innerHTML = renderQuizStage();
  document.getElementById("typed-answer")?.focus();
}

function applyDifficulty(question, difficulty) {
  if (difficulty === "hard") {
    state.quiz.deck.splice(Math.max(1, Math.floor(state.quiz.deck.length / 2)), 0, question);
  }

  if (difficulty === "very-hard") {
    state.quiz.deck.splice(Math.max(1, Math.floor(state.quiz.deck.length / 3)), 0, question);
    state.quiz.deck.push(question);
  }
}

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

function renderMissing(message) {
  setTitle("Not Found");
  app.innerHTML = `
    <section class="card">
      <h1 class="page-title">${escapeHtml(message)}</h1>
      <button class="button" type="button" data-view="home">Back home</button>
    </section>
  `;
}

function openSidebar() {
  sidebar.classList.add("open");
  overlay.classList.add("open");
}

function closeSidebar() {
  sidebar.classList.remove("open");
  overlay.classList.remove("open");
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button, input, [data-action]");
  if (!target) return;

  if (target.dataset.action === "open-sidebar") openSidebar();
  if (target.dataset.action === "close-sidebar") closeSidebar();

  if (target.dataset.view) route(target.dataset.view);

  if (target.dataset.routeWeek) {
    route("week", { weekId: target.dataset.routeWeek });
  }

  if (target.dataset.routeTopic) {
    route("topic", {
      weekId: target.dataset.routeTopic,
      topicId: target.dataset.topicId
    });
  }

  if (target.dataset.quizWeek) {
    state.quiz.initialized = true;
    state.quiz.selectedWeekIds = new Set([target.dataset.quizWeek]);
    state.quiz.selectedTopicKeys = new Set();
    resetQuizDeck();
    route("quiz");
  }

  if (target.dataset.quizTopic) {
    state.quiz.initialized = true;
    state.quiz.selectedWeekIds = new Set();
    state.quiz.selectedTopicKeys = new Set([slugKey(target.dataset.quizTopic, target.dataset.topicId)]);
    resetQuizDeck();
    route("quiz");
  }

  if (target.dataset.action === "select-all-quiz") {
    state.quiz.initialized = true;
    state.quiz.selectedWeekIds = new Set(course.weeks.map((week) => week.id));
    state.quiz.selectedTopicKeys = new Set();
    resetQuizDeck();
    renderQuizBuilder();
  }

  if (target.dataset.action === "clear-quiz") {
    state.quiz.initialized = true;
    state.quiz.selectedWeekIds = new Set();
    state.quiz.selectedTopicKeys = new Set();
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

  if (target.dataset.difficulty) {
    rateAndContinue(target.dataset.difficulty);
  }

  if (target.dataset.action === "reset-score") {
    state.quiz.correct = 0;
    state.quiz.total = 0;
    resetQuizDeck();
    renderQuizBuilder();
  }

  if (target.dataset.deleteNote) {
    deleteNote(target.dataset.deleteNote);
  }

  if (target.dataset.deleteVocab) {
    deleteVocabulary(target.dataset.deleteVocab);
  }

  if (target.dataset.editNote) {
    editNote(target.dataset.editNote);
  }

  if (target.dataset.action === "cancel-note-edit") {
    resetNoteForm();
  }

  if (target.dataset.format) {
    applyNoteFormat(target.dataset.format);
  }
});

document.addEventListener("change", (event) => {
  const target = event.target;

  if (target.dataset.filterWeek) {
    if (target.checked) {
      state.quiz.selectedWeekIds.add(target.dataset.filterWeek);
    } else {
      state.quiz.selectedWeekIds.delete(target.dataset.filterWeek);
    }
    resetQuizDeck();
    renderQuizBuilder();
  }

  if (target.dataset.filterTopic) {
    if (target.checked) {
      state.quiz.selectedTopicKeys.add(target.dataset.filterTopic);
    } else {
      state.quiz.selectedTopicKeys.delete(target.dataset.filterTopic);
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

  if (event.key === "Enter" && document.activeElement?.id === "typed-answer") {
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

renderWeekNav();
render();
