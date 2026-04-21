# Italian Course App Structure

This repo is a static Italian course app. It should work by opening `index.html`
directly in a browser, without a build step or backend.

## Product Shape

The app has four learning surfaces:

1. **Week-by-week course**
   - Each week has a title, goal, topics, homework, and quiz pool.
   - Weeks are the main progression path.

2. **Topic study**
   - A week contains multiple topics.
   - A topic can include explanations, grammar notes, vocabulary, examples,
     dialogue, and exercises.

3. **Filtered quizzes**
   - Quiz by one topic.
   - Quiz by one week.
   - Quiz by multiple selected weeks and topics.
   - Quiz by the full available question pool.

4. **Personal notebook**
   - A local place for phrases, travel vocabulary, personal examples, and notes.
   - Initial implementation stores entries in `localStorage`.
   - A future implementation can export/import JSON.

## File Layout

```text
index.html
css/
  styles.css
src/
  app.js
content/
  course.js
docs/
  PROJECT_STRUCTURE.md
```

## Content Model

Course content lives in `content/course.js` as `window.COURSE`.

```js
{
  weeks: [
    {
      id: "week-1",
      title: "Settimana 1",
      theme: "Pronunciation, greetings, identity",
      goal: "Introduce yourself and pronounce basic Italian sounds.",
      topics: [
        {
          id: "pronunciation",
          title: "Fonetica",
          type: "grammar",
          summary: "Italian spelling is highly regular.",
          sections: [
            {
              title: "Key idea",
              body: ["Short paragraphs of study text."]
            }
          ],
          vocab: [
            { it: "ciao", en: "hello / bye", note: "informal" }
          ],
          examples: [
            { it: "Ciao, mi chiamo Luca.", en: "Hi, my name is Luca." }
          ],
          exercises: [
            {
              prompt: "Translate: Hi, my name is Anna.",
              answer: "Ciao, mi chiamo Anna."
            }
          ],
          questions: [
            {
              type: "multiple-choice",
              prompt: "What does 'ciao' mean?",
              answer: "hello / bye",
              options: ["hello / bye", "thank you", "please", "good night"]
            }
          ]
        }
      ]
    }
  ]
}
```

## Adding A Week

1. Add a new week object in `content/course.js`.
2. Give each topic a stable `id`.
3. Put reusable study material in `sections`, `vocab`, `examples`, and
   `exercises`.
4. Put active recall material in `questions`.
5. Keep each question attached to the topic it tests. The app builds mixed
   quizzes from those topic pools automatically.

## Question Types

Supported first:

- `multiple-choice`
- `typed`

Likely future additions:

- `article`
- `conjugation`
- `listening`
- `sentence-build`

## Commit Workflow

Small commits should follow the learning product stages:

1. Architecture/docs.
2. Static shell/layout.
3. Course rendering.
4. Quiz behavior.
5. Personal notebook.
6. New weekly content.

