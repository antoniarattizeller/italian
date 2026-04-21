window.COURSE = {
  title: "Italian Course",
  description: "A week-by-week Italian course with focused study topics, quizzes, grammar references, and a personal notebook.",
  weeks: [
    {
      id: "week-1",
      title: "Week 1",
      theme: "Starter structure",
      status: "draft",
      goal: "This placeholder is ready for your first week of course content.",
      outcomes: [
        "Study a topic inside the week.",
        "Quiz one topic or the whole week.",
        "Mix this week with future weeks in the quiz builder."
      ],
      topics: [
        {
          id: "orientation",
          title: "Course Orientation",
          type: "study",
          summary: "A placeholder topic showing how lessons, examples, exercises, and quiz questions fit together.",
          sections: [
            {
              title: "How to use this week",
              body: [
                "Replace this placeholder with your first real topic.",
                "Each topic can contain explanations, vocabulary, examples, exercises, and its own quiz questions.",
                "The quiz builder automatically finds questions attached to selected weeks and topics."
              ]
            }
          ],
          vocab: [
            { it: "ciao", en: "hello / bye", note: "Informal greeting." },
            { it: "grazie", en: "thank you", note: "Useful immediately." },
            { it: "per favore", en: "please", note: "Polite phrase." }
          ],
          examples: [
            { it: "Ciao, grazie!", en: "Hi, thanks!" },
            { it: "Un caffe, per favore.", en: "A coffee, please." }
          ],
          exercises: [
            {
              prompt: "Write one phrase you already know in Italian.",
              answer: "Any correct personal phrase."
            },
            {
              prompt: "Create a mini travel phrase you want to remember.",
              answer: "Save it in the Personal Notebook."
            }
          ],
          questions: [
            {
              id: "w1-orientation-ciao",
              type: "multiple-choice",
              prompt: "What does 'ciao' mean?",
              answer: "hello / bye",
              options: ["hello / bye", "thank you", "please", "good evening"],
              explanation: "'Ciao' is informal and can be used for both hello and bye."
            },
            {
              id: "w1-orientation-grazie",
              type: "typed",
              prompt: "Type the Italian for: thank you",
              answer: "grazie",
              accepted: ["grazie"]
            }
          ]
        }
      ],
      homework: [
        "Prepare the real Week 1 course content and replace the placeholder topic.",
        "Add at least 8-12 quiz questions across the week."
      ]
    }
  ],
  grammar: [
    {
      id: "pronunciation",
      title: "Pronunciation",
      summary: "Italian spelling is regular compared with English. Sound patterns are worth reviewing often.",
      points: [
        "c + e/i sounds like 'ch' in church: cena, cinema.",
        "c + a/o/u sounds like 'k': casa, come, cuore.",
        "ch keeps the hard k sound before e/i: che, chi.",
        "g + e/i sounds like 'j' in gelato and giro.",
        "gh keeps the hard g sound before e/i: spaghetti, ghiaccio."
      ]
    },
    {
      id: "articles",
      title: "Articles",
      summary: "Italian articles depend on gender, number, and the first sound of the noun.",
      points: [
        "Masculine singular usually uses il: il libro.",
        "Masculine before s+consonant, z, gn, ps, or x uses lo: lo studente.",
        "Feminine singular uses la before consonants: la casa.",
        "Before vowels, use l': l'amico, l'amica."
      ]
    },
    {
      id: "present-verbs",
      title: "Present tense verbs",
      summary: "Regular verbs follow patterns by infinitive ending: -are, -ere, and -ire.",
      points: [
        "-are example: parlare -> parlo, parli, parla, parliamo, parlate, parlano.",
        "-ere example: prendere -> prendo, prendi, prende, prendiamo, prendete, prendono.",
        "-ire example: dormire -> dormo, dormi, dorme, dormiamo, dormite, dormono.",
        "Subject pronouns are often omitted because the verb ending shows the person."
      ]
    }
  ]
};
