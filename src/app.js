const state = {
  view: "home",
  weekId: null,
  topicId: null,
  quiz: {
    initialized: false,
    selectedWeekIds: new Set(),
    selectedTopicKeys: new Set(),
    pool: [],
    current: null,
    answered: false,
    correct: 0,
    total: 0
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

function questionPool() {
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

function setTitle(title) {
  viewTitle.textContent = title;
  document.title = `${title} - Italian Course`;
}

function updateNav() {
  document.querySelectorAll("[data-view]").forEach((item) => {
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
  const totalQuestions = questionPool().length;

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
      <article class="card">
        <h3>Homework</h3>
        ${renderList(week.homework)}
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
        ${renderExercises(topic.exercises)}
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
          <thead><tr><th>Italian</th><th>English</th><th>Note</th></tr></thead>
          <tbody>
            ${vocab.map((item) => `
              <tr>
                <td>${escapeHtml(item.it)}</td>
                <td>${escapeHtml(item.en)}</td>
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
          <span>${escapeHtml(example.en)}</span>
        </div>
      `).join("")}
    </section>
  `;
}

function renderExercises(exercises = []) {
  if (!exercises.length) return "";
  return `
    <section class="section">
      <h3>Exercises</h3>
      ${exercises.map((exercise, index) => `
        <div class="example">
          <strong>${index + 1}. ${escapeHtml(exercise.prompt)}</strong>
          <span>${escapeHtml(exercise.answer)}</span>
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
  const pool = questionPool();
  const selectedWeeks = state.quiz.selectedWeekIds;
  const selectedTopics = state.quiz.selectedTopicKeys;

  state.quiz.pool = pool.filter((question) => {
    const topicMatch = selectedTopics.has(question.topicKey);
    const weekMatch = selectedWeeks.has(question.weekId);
    return topicMatch || weekMatch;
  });

  if (state.quiz.current && !state.quiz.pool.some((question) => question.id === state.quiz.current.id)) {
    state.quiz.current = null;
    state.quiz.answered = false;
  }
}

function renderQuizStage() {
  const stats = `
    <div class="quiz-stats">
      <div class="stat"><strong>${state.quiz.correct}</strong><span>Correct</span></div>
      <div class="stat"><strong>${state.quiz.total}</strong><span>Total</span></div>
      <div class="stat"><strong>${state.quiz.pool.length}</strong><span>Pool</span></div>
    </div>
  `;

  if (!state.quiz.pool.length) {
    return `${stats}<p class="empty">Select at least one week or topic with quiz questions.</p>`;
  }

  if (!state.quiz.current) {
    state.quiz.current = pickQuestion();
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
    <div class="card-actions">
      <button class="secondary-button" type="button" data-action="next-question">Next question</button>
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

function pickQuestion() {
  return state.quiz.pool[Math.floor(Math.random() * state.quiz.pool.length)];
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
  return String(value || "").trim().toLowerCase();
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
}

function nextQuestion() {
  state.quiz.current = pickQuestion();
  state.quiz.answered = false;
  const stage = document.getElementById("quiz-stage");
  if (stage) stage.innerHTML = renderQuizStage();
  document.getElementById("typed-answer")?.focus();
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
          <input class="note-input" name="title" required placeholder="Title, phrase, or word">
          <textarea class="note-textarea" name="body" required placeholder="Meaning, context, example sentence, pronunciation note..."></textarea>
          <input class="note-input" name="tags" placeholder="Tags, e.g. travel, food, hotel">
          <button class="button" type="submit">Add note</button>
        </form>
      </article>

      <article class="card">
        <h3>Your notes</h3>
        <div id="notes-list">
          ${renderNotes(notes)}
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
      <p>${escapeHtml(note.body)}</p>
      <button class="ghost-button" type="button" data-delete-note="${escapeHtml(note.id)}">Delete</button>
    </div>
  `).join("");
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

function addNote(form) {
  const formData = new FormData(form);
  const notes = loadNotes();
  notes.unshift({
    id: `${Date.now()}`,
    title: formData.get("title"),
    body: formData.get("body"),
    tags: String(formData.get("tags") || "")
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean)
  });
  saveNotes(notes);
  form.reset();
  document.getElementById("notes-list").innerHTML = renderNotes(notes);
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
    state.quiz.current = null;
    state.quiz.answered = false;
    route("quiz");
  }

  if (target.dataset.quizTopic) {
    state.quiz.initialized = true;
    state.quiz.selectedWeekIds = new Set();
    state.quiz.selectedTopicKeys = new Set([slugKey(target.dataset.quizTopic, target.dataset.topicId)]);
    state.quiz.current = null;
    state.quiz.answered = false;
    route("quiz");
  }

  if (target.dataset.filterWeek) {
    if (target.checked) {
      state.quiz.selectedWeekIds.add(target.dataset.filterWeek);
    } else {
      state.quiz.selectedWeekIds.delete(target.dataset.filterWeek);
    }
    state.quiz.current = null;
    state.quiz.answered = false;
    renderQuizBuilder();
  }

  if (target.dataset.filterTopic) {
    if (target.checked) {
      state.quiz.selectedTopicKeys.add(target.dataset.filterTopic);
    } else {
      state.quiz.selectedTopicKeys.delete(target.dataset.filterTopic);
    }
    state.quiz.current = null;
    state.quiz.answered = false;
    renderQuizBuilder();
  }

  if (target.dataset.action === "select-all-quiz") {
    state.quiz.initialized = true;
    state.quiz.selectedWeekIds = new Set(course.weeks.map((week) => week.id));
    state.quiz.selectedTopicKeys = new Set();
    state.quiz.current = null;
    renderQuizBuilder();
  }

  if (target.dataset.action === "clear-quiz") {
    state.quiz.initialized = true;
    state.quiz.selectedWeekIds = new Set();
    state.quiz.selectedTopicKeys = new Set();
    state.quiz.current = null;
    renderQuizBuilder();
  }

  if (target.dataset.answerOption) {
    answerQuestion(target.dataset.answerOption, target);
  }

  if (target.dataset.action === "submit-typed") {
    answerQuestion(document.getElementById("typed-answer")?.value || "");
  }

  if (target.dataset.action === "next-question") {
    nextQuestion();
  }

  if (target.dataset.action === "reset-score") {
    state.quiz.correct = 0;
    state.quiz.total = 0;
    renderQuizBuilder();
  }

  if (target.dataset.deleteNote) {
    deleteNote(target.dataset.deleteNote);
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.id === "note-form") {
    event.preventDefault();
    addNote(event.target);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeSidebar();

  if (event.key === "Enter" && document.activeElement?.id === "typed-answer") {
    answerQuestion(document.activeElement.value);
  }
});

renderWeekNav();
render();
