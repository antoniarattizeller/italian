# Italian Study App — A2 Structure

This repo is a static Italian study app. It works by opening `index.html`
directly in a browser, with no build step and no backend.

## What changed (and why)

The app used to be a **week-by-week, book-guided course**. We are pivoting to a
**topic-organized A2 study app**: instead of progressing through weeks tied to a
textbook, you study and practice by **grammar category** (passato prossimo,
imperfetto, condizionale, presente, articoli, preposizioni, ...) and by
**vocabulary topic** (time words, locations, the house, travel, ...).

The learner drives their own path: pick a grammar category or a vocab topic,
read it, then quiz it — alone or mixed with anything else.

The existing **Week 1** content is not discarded. It is **redistributed** into
the new grammar categories and vocab topics (see *Week 1 migration map*).

## Product shape

Four learning surfaces:

1. **Grammar categories**
   - One entry per A2 grammar point.
   - Each has explanation sections, optional conjugation/usage tables, examples,
     and its own quiz question pool.
   - **Do-it-by-hand exercises.** A category can carry an `exercises[]` list.
     Each exercise shows an Italian prompt to do on paper (handwriting supports
     learning), plus a hidden `reveal` (paragraphs, a table, and/or example
     sentences) that unhides on click for self-checking. The app guides; the
     learning happens in the learner's own notebook.

2. **Vocabulary topics**
   - One entry per theme (time words, locations, house, travel, ...).
   - Each is a word list that auto-feeds the vocabulary quiz. Topics can also
     carry hand-written questions.
   - **Italian-first (immersion).** A word carries an Italian definition (`def`)
     and an Italian example (`ex`); the study view leads with those and the
     vocab quiz prompts in Italian ("Quale parola? <definizione>"). `en`/`de`
     stay only as a small safety net. Words with only `en`/`de` still work.

3. **Filtered quizzes**
   - Quiz one grammar category, one vocab topic, several selected, or the whole
     pool. Modes: **Mixed**, **Grammar only**, **Vocabulary only**, **Numbers**.

4. **Personal notebook**
   - Local place for phrases, travel vocabulary, and personal notes.
   - Stored in `localStorage`. Personal vocab feeds the vocab quiz.

A small **Reference** area holds things that are not a category or a topic:
the alphabet/spelling and pronunciation rules (c/g, etc.).

## File layout

```text
index.html
css/
  styles.css
src/
  app.js
content/
  course.js          # window.COURSE — all study data
docs/
  PROJECT_STRUCTURE.md
```

## Content model

Course content lives in `content/course.js` as `window.COURSE`.

```js
window.COURSE = {
  title: "Italian A2 Study",
  description: "Study and practice Italian by grammar category and vocabulary topic.",

  grammar: [
    {
      id: "passato-prossimo",
      title: "Passato prossimo",
      level: "A2",
      status: "stub",               // "stub" | "draft" | "ready"
      summary: "Talking about completed past actions with avere/essere + participle.",
      sections: [
        { title: "When to use it", body: ["Short study paragraphs."] }
      ],
      tables: [                       // optional — conjugations / usage grids
        {
          title: "Auxiliary + participle",
          columns: ["Person", "avere", "essere"],
          rows: [["io", "ho parlato", "sono andato/a"]]
        }
      ],
      examples: [
        { it: "Ieri ho mangiato la pizza.", en: "Yesterday I ate pizza.", de: "Gestern habe ich Pizza gegessen." }
      ],
      exercises: [                     // optional — do by hand, then reveal
        {
          prompt: "Scrivi tre frasi al passato prossimo su ieri.",
          hint: "Pensa a cosa hai fatto: mangiare, andare, vedere...",
          reveal: {                     // any of: body[], tables[], examples[]
            body: ["Un modello; le tue frasi possono essere diverse."],
            examples: [{ it: "Ieri sono andato al cinema con un amico." }]
          }
        }
      ],
      questions: [
        { id: "pp-aux-essere", type: "multiple-choice",
          prompt: "Which auxiliary does 'andare' take?",
          answer: "essere", options: ["essere", "avere", "stare", "fare"],
          explanation: "Movement verbs use essere." }
      ]
    }
  ],

  vocab: [
    {
      id: "time-words",
      title: "Time words",
      status: "stub",
      summary: "When something happens: yesterday, soon, before, tomorrow...",
      words: [
        // Italian-first: def + ex are Italian; en/de are the safety net.
        { it: "ieri", def: "Il giorno prima di oggi.", ex: "Ieri sono rimasto a casa.", en: "yesterday", de: "gestern" },
        { it: "tra una settimana", def: "Dopo sette giorni da oggi.", ex: "Tra una settimana parto.", en: "in a week", de: "in einer Woche" }
      ],
      questions: []                   // optional hand-written questions
    }
  ],

  reference: [
    {
      id: "alfabeto",
      title: "The alphabet & spelling",
      summary: "21 native letters plus foreign letters; how to spell names.",
      sections: [ { title: "...", body: ["..."] } ]
    }
  ]
};
```

### Question types

Supported now:

- `multiple-choice` — options + one answer.
- `typed` — accent- and punctuation-insensitive; supports an `accepted` array
  of alternatives.
- `transform` — show a `source` sentence and a task `prompt` ("Metti al passato
  prossimo:"); the learner rewrites it. Graded like `typed` (lenient), and the
  full correct sentence is revealed. Used for tense transformations.

Auto-generated (Vocabulary mode), all in Italian:

- **Definition → word**: prompt is the Italian `def`; multiple-choice
  (distractors from the same topic) or typed, alternating for variety.
- **Cloze**: the word's Italian example `ex` with the word blanked; MC or typed.
  Generated only when the word appears in its example.
- Numbers 0–100 are generated in **Numbers** mode.

### Spaced repetition (Leitner)

Every question (written and auto-generated) is tracked by a stable id in a
Leitner system stored in `localStorage` (`italian-srs`): box 1–5 with a due
date. Correct → promote (2/7/16/35-day intervals); wrong → back to box 1 and
re-queued within the session. The deck surfaces due and new items first.

Likely future additions: `article` (choose il/lo/la/...), `sentence-build`,
`listening`; a review dashboard; error-spotting questions.

## A2 grammar categories (scaffold list)

Create every one as a `stub` first (id + title + summary + empty sections),
then fill in passes.

**Nouns, articles, adjectives**
- `articoli` — definite & indefinite articles (the / a: il, lo, la, l', i, gli, le, un, uno, una, un')
- `nomi-genere-numero` — noun gender and plurals (-o/-a/-e, -zione, -ore)
- `aggettivi` — adjective agreement and position
- `possessivi` — possessive adjectives (il mio, la tua, ...)
- `dimostrativi` — questo / quello
- `quantificatori` — molto, poco, troppo, tanto, tutto

**Verbs**
- `presente` — present indicative (regular -are/-ere/-ire)
- `presente-irregolari` — essere, avere, stare, fare, andare, venire, ...
- `riflessivi` — reflexive verbs (mi chiamo, mi alzo, ...)
- `verbi-modali` — potere, dovere, volere
- `passato-prossimo` — completed past with avere/essere + participle
- `imperfetto` — habitual/background past
- `passato-vs-imperfetto` — choosing between the two
- `futuro` — futuro semplice
- `condizionale` — condizionale presente (vorrei, potrei, ...)
- `imperativo` — informal commands (basic)
- `stare-gerundio` — stare + gerundio (present continuous)

**Little words / structure**
- `preposizioni-semplici` — di, a, da, in, con, su, per, tra/fra
- `preposizioni-articolate` — del, al, dal, nel, sul, ...
- `preposizioni-luogo` — place prepositions (sopra, sotto, davanti a, vicino a, ...)
- `pronomi-soggetto` — io, tu, lui/lei, noi, voi, loro
- `pronomi-diretti` — lo, la, li, le, mi, ti, ci, vi
- `pronomi-indiretti` — gli, le, mi, ti, ci, vi
- `ci-ne` — ci and ne (basic uses)
- `ce-ci-sono` — c'è / ci sono
- `piacere` — mi piace / mi piacciono
- `comparativi` — più... di, meno... di, come
- `interrogativi` — chi, che, dove, quando, perché, quanto, come

## A2 vocabulary topics (scaffold list)

- `time-words` — yesterday, late, before, soon, tomorrow, in a week, early, ...
- `locations` — behind, on top, in front, close to, under, over, next to, ...
  (pairs with the `preposizioni-luogo` grammar category)
- `house` — rooms + kitchen items, living room, bathroom, bedroom objects
- `travel` — station, ticket, luggage, directions, "excuse me, where is...?"
- `food-drink` — food, drinks, restaurant / ordering
- `numbers-dates` — numbers, days, months, telling time, dates
- `family-people` — family members and describing people
- `body-health` — body parts, at the doctor, basic symptoms
- `clothing` — clothes and accessories
- `weather-seasons` — weather, seasons, temperature
- `jobs` — professions and workplaces
- `city-directions` — places in town + asking/giving directions
- `shopping` — shops, money, sizes, "how much is it?"
- `daily-routine` — everyday actions (pairs with `riflessivi`)
- `feelings-adjectives` — moods and common descriptive adjectives
- `colors` — colors (with adjective agreement)
- `nationalities-languages` — nationalities and languages
- `hobbies` — free-time activities and sports

## Week 1 migration map

Existing Week 1 topics are redistributed as follows. Nothing is lost.

| Week 1 topic            | Goes to                                                        |
|-------------------------|----------------------------------------------------------------|
| `presentazioni`         | vocab `introductions` (new) + phrases in the notebook seed     |
| `saluti`                | vocab `greetings` (new)                                        |
| `alfabeto-spelling`     | reference `alfabeto`                                           |
| `lezione-in-classe`     | vocab `classroom` (new) + grammar `nomi-genere-numero`        |
| `fonetica-c-g`          | reference `pronuncia-c-g`                                      |
| `grammatica-base`       | grammar `presente-irregolari` (essere/stare), `riflessivi` (chiamarsi), `pronomi-soggetto`, `nomi-genere-numero` |
| `lessico-personale`     | vocab `nationalities-languages` + `hobbies`                    |

The current top-level `grammar[]` reference entries (subject pronouns,
essere/stare/chiamarsi, noun gender, c/g pronunciation, introductions) become
the seed content for the corresponding new grammar categories and reference
pages, rather than a flat reference list.

## App changes required (for the code pass — not done yet)

`src/app.js` today is organized around `weeks → topics`. The engine is already
category-agnostic; the pivot is mostly renaming + two collections instead of
weeks:

1. Read `course.grammar` and `course.vocab` instead of `course.weeks`.
2. Replace the week nav / week cards with a **Grammar** list and a **Vocab**
   list (two sections on Home, two nav entries).
3. Quiz builder: filter checkboxes become **grammar categories** and **vocab
   topics** instead of weeks/topics. Keep Mixed / Vocabulary / Numbers modes;
   add a **Grammar-only** mode.
4. `courseVocabularyQuestions()` reads `topic.words` from `course.vocab` (and
   still any `vocab` arrays attached to grammar categories).
5. Add a **Reference** view for `course.reference`.
6. Keep the notebook and personal-vocab logic unchanged.

The quiz engine, accent normalization, spaced-repetition re-queue, typed/MC
input, numbers mode, and notebook all carry over unchanged.

## Build order

1. **Plan** (this document). ✅
2. **Engine refactor** — weeks → `grammar` + `vocab` + `reference`; rename nav
   and quiz filters; migrate Week 1 content. ✅ Later added do-it-by-hand
   exercises and Italian-first vocab (`def`/`ex`).
3. **Scaffold** — every grammar category and vocab topic as a `stub`. ✅
4. **Fill in passes** — promote stubs to `ready` with sections/tables, Italian
   examples, exercises, and questions. ✅
   - Vocabulary: all 21 topics filled, Italian-first.
   - Grammar: all 28 categories filled across the four stages, each with a
     table where relevant, by-hand exercises, and quiz questions.

### What's left / next ideas

- Reference pages (alfabeto, pronuncia-c-g) could gain by-hand exercises too.
- New question types from the list below (`conjugation`, `article`,
  `sentence-build`, `listening`).
- Optional: audio, progress tracking, spaced-repetition tuning, export/import
  of the personal notebook.

## Commit workflow

Small commits, one concern each. Commit the current state **before** changing
it, so every step of the development is traceable in history:

1. Docs / plan.
2. Engine refactor (weeks → grammar/vocab/reference).
3. Scaffold stubs.
4. Content fill (one or a few categories/topics per commit).
5. New question types.
