// Italian A2 study data.
//
// Everything lives in window.COURSE as three collections:
//   grammar[]    grammar categories, grouped by learning `stage` (1..4).
//                Array order within a stage IS the intended study order.
//   vocab[]      vocabulary topics (word packs) that feed the vocab quiz.
//   reference[]  study material that is neither a category nor a topic
//                (alphabet, pronunciation).
//
// status: "stub" | "draft" | "ready" tracks how finished an entry is.
//
// Learning order for grammar (why the stages exist):
//   Stage 1  Foundations        subject pronouns, essere/stare/avere,
//                               articles, noun gender, regular present, adjectives
//   Stage 2  Building sentences  reflexives, piacere, c'è/ci sono, possessives, ...
//   Stage 3  Prepositions & pronouns
//   Stage 4  Past tenses & beyond (passato prossimo, imperfetto, ...)
//
// You should study earlier stages before later ones: articles and the
// present tense come before prepositions and passato prossimo.

window.COURSE = {
  title: "Italian A2 Study",
  description: "Study and practice Italian by grammar category and vocabulary topic, in a sensible learning order.",

  stages: [
    { id: 1, title: "Foundations", summary: "Pronouns, the key verbs, articles, noun gender, the present tense." },
    { id: 2, title: "Building sentences", summary: "Reflexives, piacere, there is/are, possessives, and more." },
    { id: 3, title: "Prepositions & pronouns", summary: "Simple and combined prepositions, place words, object pronouns." },
    { id: 4, title: "Past tenses & beyond", summary: "Passato prossimo, imperfetto, future, conditional." }
  ],

  grammar: [
    // ---------------------------------------------------------------- Stage 1
    {
      id: "pronomi-soggetto",
      title: "Subject pronouns",
      stage: 1,
      level: "A2",
      status: "ready",
      summary: "io, tu, lui/lei, noi, voi, loro — and why Italian often drops them.",
      sections: [
        {
          title: "The pronouns",
          body: [
            "io = I, tu = you (informal), lui/lei = he/she, Lei = you (formal), noi = we, voi = you (plural), loro = they.",
            "Italian often leaves out the subject pronoun because the verb ending already shows the person: Mi chiamo Luca, not Io mi chiamo Luca every time.",
            "Lei with a capital L is formal singular you. Voi is plural you and can also address several people politely."
          ]
        }
      ],
      vocab: [
        { it: "io", en: "I", de: "ich", note: "Subject pronoun." },
        { it: "tu", en: "you", de: "du", note: "Informal singular." },
        { it: "lui", en: "he", de: "er", note: "Third person singular." },
        { it: "lei", en: "she", de: "sie", note: "Third person singular." },
        { it: "Lei", en: "you", de: "Sie", note: "Formal singular." },
        { it: "noi", en: "we", de: "wir", note: "First person plural." },
        { it: "voi", en: "you all", de: "ihr / Sie", note: "Second person plural." },
        { it: "loro", en: "they", de: "sie", note: "Third person plural." }
      ],
      examples: [
        { it: "Io sono Sara e lei è Marta.", en: "I am Sara and she is Marta.", de: "Ich bin Sara und sie ist Marta." },
        { it: "Lei è il signor Rinaldi, vero?", en: "You are Mr. Rinaldi, right?", de: "Sie sind Herr Rinaldi, oder?" },
        { it: "Voi siete il signor e la signora Ferri?", en: "Are you Mr. and Mrs. Ferri?", de: "Sind Sie Herr und Frau Ferri?" }
      ],
      questions: [
        { id: "g-pron-io", type: "multiple-choice", prompt: "What does 'io' mean?", answer: "I", options: ["I", "you", "we", "they"] },
        { id: "g-pron-formal-you", type: "multiple-choice", prompt: "Which pronoun is formal singular 'you'?", answer: "Lei", options: ["Lei", "tu", "io", "loro"] }
      ]
    },
    {
      id: "presente-irregolari",
      title: "Present: essere, avere, stare",
      stage: 1,
      level: "A2",
      status: "draft",
      summary: "The three most important irregular verbs in the present tense.",
      sections: [
        {
          title: "Indicativo presente",
          body: [
            "essere (to be): sono, sei, è, siamo, siete, sono.",
            "stare (to be / to stay): sto, stai, sta, stiamo, state, stanno.",
            "avere (to have): ho, hai, ha, abbiamo, avete, hanno.",
            "Italian uses avere for age: Ho ventun anni = I am twenty-one (literally: I have twenty-one years)."
          ]
        }
      ],
      tables: [
        {
          title: "essere and stare",
          columns: ["Person", "essere", "stare"],
          rows: [
            ["io", "sono", "sto"],
            ["tu", "sei", "stai"],
            ["lui/lei", "è", "sta"],
            ["noi", "siamo", "stiamo"],
            ["voi", "siete", "state"],
            ["loro", "sono", "stanno"]
          ]
        }
      ],
      examples: [
        { it: "Noi stiamo bene, grazie.", en: "We are well, thank you.", de: "Uns geht es gut, danke." },
        { it: "Ho ventun anni.", en: "I am twenty-one years old.", de: "Ich bin einundzwanzig Jahre alt." }
      ],
      exercises: [
        {
          prompt: "Scrivi tre frasi su di te usando 'essere', 'avere' e 'stare' (una per verbo).",
          hint: "Per esempio: la tua nazionalità, la tua età, come stai oggi.",
          reveal: {
            body: ["Ecco un modello. Le tue frasi possono essere diverse: l'importante è coniugare bene il verbo."],
            examples: [
              { it: "Sono italiana e sono di Roma." },
              { it: "Ho venticinque anni e ho un fratello." },
              { it: "Oggi sto bene, grazie." }
            ]
          }
        },
        {
          prompt: "Coniuga 'avere' al presente per tutte le sei persone, poi rivela per controllare.",
          reveal: {
            tables: [
              {
                title: "avere — presente",
                columns: ["Persona", "avere"],
                rows: [["io", "ho"], ["tu", "hai"], ["lui/lei", "ha"], ["noi", "abbiamo"], ["voi", "avete"], ["loro", "hanno"]]
              }
            ]
          }
        }
      ],
      questions: [
        { id: "g-essere-noi", type: "typed", prompt: "Complete with essere: noi ___", answer: "siamo", accepted: ["siamo"] },
        { id: "g-essere-loro", type: "typed", prompt: "Complete with essere: loro ___", answer: "sono", accepted: ["sono"] },
        { id: "g-stare-tu", type: "typed", prompt: "Complete with stare: tu ___", answer: "stai", accepted: ["stai"] },
        { id: "g-stare-loro", type: "typed", prompt: "Complete with stare: loro ___", answer: "stanno", accepted: ["stanno"] }
      ]
    },
    {
      id: "nomi-genere-numero",
      title: "Noun gender & number",
      stage: 1,
      level: "A2",
      status: "draft",
      summary: "Masculine/feminine endings, useful patterns, and how to spot gender.",
      sections: [
        {
          title: "Singular gender",
          body: [
            "Nouns ending in -o are normally masculine: libro.",
            "Nouns ending in -a are normally feminine: penna.",
            "Nouns ending in -e can be masculine or feminine: studente, lezione.",
            "Useful patterns: -zione words are usually feminine (lezione, soluzione); -ore words are usually masculine (proiettore)."
          ]
        }
      ],
      vocab: [
        { it: "il libro", en: "the book", de: "das Buch", note: "Masculine -o." },
        { it: "la penna", en: "the pen", de: "der Stift", note: "Feminine -a." },
        { it: "lo studente", en: "the student", de: "der Student", note: "Masculine -e." },
        { it: "la lezione", en: "the lesson", de: "die Lektion", note: "Feminine -zione." }
      ],
      examples: [
        { it: "Il libro è sul tavolo.", en: "The book is on the table.", de: "Das Buch ist auf dem Tisch." }
      ],
      questions: [
        { id: "g-gender-libro", type: "multiple-choice", prompt: "What is the usual gender of nouns ending in -o, like libro?", answer: "masculine", options: ["masculine", "feminine", "always plural", "formal"] },
        { id: "g-gender-zione", type: "multiple-choice", prompt: "Words ending in -zione, like lezione, are usually...", answer: "feminine", options: ["feminine", "masculine", "verbs", "pronouns"] },
        { id: "g-gender-sort", type: "multiple-choice", prompt: "Which group contains only masculine nouns?", answer: "zaino, quaderno, libro", options: ["zaino, quaderno, libro", "penna, classe, lezione", "lavagna, bottiglia, penna", "classe, libro, lezione"] }
      ]
    },
    {
      id: "articoli",
      title: "Articles (the / a)",
      stage: 1,
      level: "A2",
      status: "stub",
      summary: "Definite (il, lo, la, l', i, gli, le) and indefinite (un, uno, una, un') articles and how they follow the noun.",
      sections: []
    },
    {
      id: "presente",
      title: "Present tense (regular verbs)",
      stage: 1,
      level: "A2",
      status: "stub",
      summary: "Present indicative of regular -are, -ere, and -ire verbs (parlare, prendere, dormire, capire).",
      sections: []
    },
    {
      id: "aggettivi",
      title: "Adjectives & agreement",
      stage: 1,
      level: "A2",
      status: "stub",
      summary: "Adjective endings agree with the noun in gender and number, and where the adjective goes.",
      sections: []
    },

    // ---------------------------------------------------------------- Stage 2
    {
      id: "riflessivi",
      title: "Reflexive verbs",
      stage: 2,
      level: "A2",
      status: "draft",
      summary: "Verbs like chiamarsi and alzarsi that use mi/ti/si/ci/vi/si.",
      sections: [
        {
          title: "How they work",
          body: [
            "Reflexive verbs pair a reflexive pronoun with the verb: mi chiamo = I call myself.",
            "chiamarsi: mi chiamo, ti chiami, si chiama, ci chiamiamo, vi chiamate, si chiamano.",
            "The same pattern drives daily-routine verbs like alzarsi (to get up) and svegliarsi (to wake up)."
          ]
        }
      ],
      examples: [
        { it: "Mi chiamo Luca. E tu, come ti chiami?", en: "My name is Luca. And you, what is your name?", de: "Ich heisse Luca. Und du, wie heisst du?" }
      ],
      questions: [
        { id: "g-chiamarsi-loro", type: "typed", prompt: "Complete with chiamarsi: loro ___", answer: "si chiamano", accepted: ["si chiamano"] }
      ]
    },
    {
      id: "verbi-modali",
      title: "Modal verbs (potere, dovere, volere)",
      stage: 2,
      level: "A2",
      status: "stub",
      summary: "can / must / want + infinitive: posso, devo, voglio ... plus the polite vorrei.",
      sections: []
    },
    {
      id: "stare-gerundio",
      title: "Present continuous (stare + gerundio)",
      stage: 2,
      level: "A2",
      status: "stub",
      summary: "Describing what is happening right now: sto mangiando, stai leggendo.",
      sections: []
    },
    {
      id: "piacere",
      title: "Piacere (to like)",
      stage: 2,
      level: "A2",
      status: "stub",
      summary: "mi piace + singular/infinitive vs. mi piacciono + plural; and the indirect pronouns it uses.",
      sections: []
    },
    {
      id: "ce-ci-sono",
      title: "There is / there are (c'è, ci sono)",
      stage: 2,
      level: "A2",
      status: "stub",
      summary: "Saying what exists or is present: c'è un problema, ci sono due libri.",
      sections: []
    },
    {
      id: "possessivi",
      title: "Possessives (my, your, ...)",
      stage: 2,
      level: "A2",
      status: "stub",
      summary: "il mio, la tua, i nostri ... — possessives agree with the thing owned and usually take an article.",
      sections: []
    },
    {
      id: "dimostrativi",
      title: "Demonstratives (questo / quello)",
      stage: 2,
      level: "A2",
      status: "stub",
      summary: "this and that, and how questo and quello change form.",
      sections: []
    },
    {
      id: "quantificatori",
      title: "Quantifiers (molto, poco, troppo)",
      stage: 2,
      level: "A2",
      status: "stub",
      summary: "How much / how many: molto, poco, troppo, tanto, tutto — as adverbs and as adjectives.",
      sections: []
    },
    {
      id: "interrogativi",
      title: "Question words",
      stage: 2,
      level: "A2",
      status: "stub",
      summary: "chi, che/cosa, dove, quando, perché, quanto, come, quale.",
      sections: []
    },

    // ---------------------------------------------------------------- Stage 3
    {
      id: "preposizioni-semplici",
      title: "Simple prepositions",
      stage: 3,
      level: "A2",
      status: "stub",
      summary: "di, a, da, in, con, su, per, tra/fra — and their most common uses.",
      sections: []
    },
    {
      id: "preposizioni-articolate",
      title: "Combined prepositions",
      stage: 3,
      level: "A2",
      status: "stub",
      summary: "Preposition + article: del, al, dal, nel, sul, ... and when you need them.",
      sections: []
    },
    {
      id: "preposizioni-luogo",
      title: "Place prepositions",
      stage: 3,
      level: "A2",
      status: "stub",
      summary: "Where things are: sopra, sotto, davanti a, dietro, vicino a, accanto a, tra. (Pairs with the Locations vocab.)",
      sections: []
    },
    {
      id: "pronomi-diretti",
      title: "Direct object pronouns",
      stage: 3,
      level: "A2",
      status: "stub",
      summary: "lo, la, li, le, mi, ti, ci, vi — replacing the direct object (Lo vedo).",
      sections: []
    },
    {
      id: "pronomi-indiretti",
      title: "Indirect object pronouns",
      stage: 3,
      level: "A2",
      status: "stub",
      summary: "gli, le, mi, ti, ci, vi — replacing 'to someone' (Le parlo).",
      sections: []
    },
    {
      id: "ci-ne",
      title: "Ci and ne",
      stage: 3,
      level: "A2",
      status: "stub",
      summary: "The little words ci (there / about it) and ne (of it / of them).",
      sections: []
    },

    // ---------------------------------------------------------------- Stage 4
    {
      id: "passato-prossimo",
      title: "Passato prossimo",
      stage: 4,
      level: "A2",
      status: "stub",
      summary: "Completed past actions with avere/essere + past participle; agreement with essere.",
      sections: []
    },
    {
      id: "imperfetto",
      title: "Imperfetto",
      stage: 4,
      level: "A2",
      status: "stub",
      summary: "Habitual and background past: descriptions, ongoing states, 'used to'.",
      sections: []
    },
    {
      id: "passato-vs-imperfetto",
      title: "Passato prossimo vs. imperfetto",
      stage: 4,
      level: "A2",
      status: "stub",
      summary: "Choosing between the two: completed events vs. background and habits.",
      sections: []
    },
    {
      id: "futuro",
      title: "Simple future (futuro semplice)",
      stage: 4,
      level: "A2",
      status: "stub",
      summary: "Talking about the future: parlerò, prenderai, saremo, and irregular stems.",
      sections: []
    },
    {
      id: "condizionale",
      title: "Present conditional",
      stage: 4,
      level: "A2",
      status: "stub",
      summary: "Would / polite requests: vorrei, potrei, mi piacerebbe.",
      sections: []
    },
    {
      id: "imperativo",
      title: "Imperative (informal)",
      stage: 4,
      level: "A2",
      status: "stub",
      summary: "Giving instructions and suggestions: parla!, prendi!, andiamo!, and negatives.",
      sections: []
    },
    {
      id: "comparativi",
      title: "Comparatives",
      stage: 4,
      level: "A2",
      status: "stub",
      summary: "più... di, meno... di, (così) come — comparing people and things.",
      sections: []
    }
  ],

  vocab: [
    {
      id: "greetings",
      title: "Greetings & how are you",
      status: "ready",
      summary: "Saying hello and goodbye, asking how someone is, informal vs. formal.",
      words: [
        { it: "ciao", en: "hello / bye", de: "hallo / tschüss", note: "Informal, tu." },
        { it: "buongiorno", en: "good morning / good day", de: "guten Morgen / guten Tag", note: "Formal or neutral." },
        { it: "buonasera", en: "good evening", de: "guten Abend", note: "Used when it is evening." },
        { it: "salve", en: "hello", de: "hallo / guten Tag", note: "Neutral greeting." },
        { it: "arrivederci", en: "goodbye", de: "auf Wiedersehen", note: "Formal or neutral goodbye." },
        { it: "a presto", en: "see you soon", de: "bis bald", note: "Useful closing phrase." },
        { it: "alla prossima", en: "until next time", de: "bis zum nächsten Mal", note: "Goodbye phrase." },
        { it: "come ti chiami?", en: "what is your name?", de: "wie heisst du?", note: "Informal." },
        { it: "come stai?", en: "how are you?", de: "wie geht es dir?", note: "Informal." },
        { it: "come sta?", en: "how are you?", de: "wie geht es Ihnen?", note: "Formal." },
        { it: "tutto bene", en: "everything is good", de: "alles gut", note: "Common answer." },
        { it: "abbastanza bene", en: "quite well", de: "ziemlich gut", note: "Moderate positive answer." },
        { it: "così così", en: "so-so", de: "so lala", note: "Neutral answer." },
        { it: "male", en: "badly", de: "schlecht", note: "Negative answer." }
      ],
      examples: [
        { it: "Ciao, come ti chiami?", en: "Hi, what is your name?", de: "Hallo, wie heisst du?" },
        { it: "Buongiorno, professoressa. Come sta?", en: "Good morning, professor. How are you?", de: "Guten Morgen, Frau Professorin. Wie geht es Ihnen?" },
        { it: "Arrivederci, alla prossima!", en: "Goodbye, until next time!", de: "Auf Wiedersehen, bis zum nächsten Mal!" }
      ],
      questions: [
        { id: "v-greet-ciao", type: "multiple-choice", prompt: "When do you use 'ciao'?", answer: "Informally, for hello or bye.", options: ["Informally, for hello or bye.", "Only formally.", "Only at night.", "Only with Lei."] },
        { id: "v-greet-buonasera", type: "multiple-choice", prompt: "Which greeting means 'good evening'?", answer: "buonasera", options: ["buonasera", "a presto", "arrivederci", "così così"] },
        { id: "v-greet-formal-how", type: "typed", prompt: "Type the formal Italian for: How are you?", answer: "come sta", accepted: ["come sta", "come sta?"] },
        { id: "v-greet-informal-how", type: "typed", prompt: "Type the informal Italian for: How are you?", answer: "come stai", accepted: ["come stai", "come stai?"] },
        { id: "v-greet-so-so", type: "multiple-choice", prompt: "What does 'così così' mean?", answer: "so-so", options: ["so-so", "very well", "goodbye", "thank you"] },
        { id: "v-greet-goodbye", type: "typed", prompt: "Type a formal/neutral Italian goodbye.", answer: "arrivederci", accepted: ["arrivederci"] }
      ]
    },
    {
      id: "introductions",
      title: "Introducing yourself",
      status: "ready",
      summary: "Name, age, origin, where you live, and what you study.",
      words: [
        { it: "mi chiamo", en: "my name is / I am called", de: "ich heisse", note: "Reflexive form of chiamarsi." },
        { it: "sono", en: "I am", de: "ich bin", note: "From essere." },
        { it: "ho ventun anni", en: "I am twenty-one years old", de: "ich bin einundzwanzig Jahre alt", note: "Italian uses avere: ho ... anni." },
        { it: "sono tedesca / tedesco", en: "I am German", de: "ich bin Deutsche / Deutscher", note: "-a feminine, -o masculine." },
        { it: "abito a Berlino", en: "I live in Berlin", de: "ich wohne in Berlin", note: "Use a with cities." },
        { it: "sono di Verona", en: "I am from Verona", de: "ich komme aus Verona", note: "Use di for origin." },
        { it: "studio filosofia", en: "I study philosophy", de: "ich studiere Philosophie", note: "University subject phrase." },
        { it: "filosofia", en: "philosophy", de: "Philosophie", note: "Subject." },
        { it: "matematica", en: "mathematics", de: "Mathematik", note: "Subject." },
        { it: "storia", en: "history", de: "Geschichte", note: "Subject." },
        { it: "informatica", en: "computer science", de: "Informatik", note: "Subject." },
        { it: "economia e commercio", en: "economics and business", de: "Wirtschaftswissenschaften", note: "Subject." }
      ],
      examples: [
        { it: "Ciao, mi chiamo Lucia.", en: "Hi, my name is Lucia.", de: "Hallo, ich heisse Lucia." },
        { it: "Abito a Berlino, ma sono di Verona.", en: "I live in Berlin, but I am from Verona.", de: "Ich wohne in Berlin, aber ich komme aus Verona." },
        { it: "Studio informatica.", en: "I study computer science.", de: "Ich studiere Informatik." }
      ],
      questions: [
        { id: "v-intro-mi-chiamo", type: "multiple-choice", prompt: "What is the most natural Italian starter phrase for 'My name is Lucia'?", answer: "Mi chiamo Lucia.", options: ["Mi chiamo Lucia.", "Ho Lucia.", "Abito Lucia.", "Sto Lucia."], explanation: "Mi chiamo means I call myself." },
        { id: "v-intro-age", type: "typed", prompt: "Type in Italian: I am twenty-one years old.", answer: "ho ventun anni", accepted: ["ho ventun anni", "ho ventuno anni"], explanation: "Italian uses avere for age." },
        { id: "v-intro-live", type: "typed", prompt: "Type in Italian: I live in Berlin.", answer: "abito a berlino", accepted: ["abito a berlino"], explanation: "Use a with cities." },
        { id: "v-intro-origin", type: "multiple-choice", prompt: "How do you say 'I am from Verona'?", answer: "Sono di Verona.", options: ["Sono di Verona.", "Abito di Verona.", "Ho Verona.", "Sto a Verona."], explanation: "Sono di marks origin." },
        { id: "v-intro-philosophy", type: "multiple-choice", prompt: "What does 'filosofia' mean?", answer: "philosophy", options: ["philosophy", "history", "biology", "economics"] },
        { id: "v-intro-informatica", type: "multiple-choice", prompt: "What does 'informatica' mean?", answer: "computer science", options: ["computer science", "chemistry", "art history", "geology"] }
      ]
    },
    {
      id: "classroom",
      title: "In the classroom",
      status: "ready",
      summary: "Classroom objects and study words.",
      words: [
        { it: "la lavagna", en: "whiteboard / blackboard", de: "die Tafel", note: "Feminine." },
        { it: "la bottiglia", en: "bottle", de: "die Flasche", note: "Feminine." },
        { it: "lo zaino", en: "backpack", de: "der Rucksack", note: "Masculine; z takes lo." },
        { it: "il quaderno", en: "notebook", de: "das Heft", note: "Masculine." },
        { it: "il proiettore", en: "projector", de: "der Projektor / Beamer", note: "Masculine -ore." },
        { it: "la penna", en: "pen", de: "der Stift", note: "Feminine." },
        { it: "il libro", en: "book", de: "das Buch", note: "Masculine." },
        { it: "il cellulare", en: "mobile phone", de: "das Handy", note: "Masculine -e." },
        { it: "la classe", en: "class", de: "die Klasse", note: "Feminine -e." },
        { it: "la lezione", en: "lesson", de: "die Lektion", note: "Feminine -zione." }
      ],
      examples: [
        { it: "Il cellulare è sul tavolo.", en: "The mobile phone is on the table.", de: "Das Handy ist auf dem Tisch." }
      ],
      questions: [
        { id: "v-class-book", type: "multiple-choice", prompt: "What does 'libro' mean?", answer: "book", options: ["book", "pen", "class", "backpack"] },
        { id: "v-class-pen", type: "multiple-choice", prompt: "What does 'penna' mean?", answer: "pen", options: ["pen", "phone", "bottle", "notebook"] },
        { id: "v-class-backpack", type: "typed", prompt: "Type the Italian for: backpack", answer: "zaino", accepted: ["zaino", "lo zaino"] },
        { id: "v-class-phone", type: "multiple-choice", prompt: "What is 'cellulare'?", answer: "mobile phone", options: ["mobile phone", "projector", "whiteboard", "lesson"] },
        { id: "v-class-lesson", type: "multiple-choice", prompt: "Which word means 'lesson'?", answer: "lezione", options: ["lezione", "classe", "penna", "quaderno"] }
      ]
    },
    {
      id: "nationalities-languages",
      title: "Nationalities & languages",
      status: "draft",
      summary: "Where people are from; forms that change -o/-a and forms that do not.",
      words: [
        { it: "tedesco / tedesca", en: "German", de: "deutsch", note: "-o/-a change." },
        { it: "italiano / italiana", en: "Italian", de: "italienisch", note: "-o/-a change." },
        { it: "spagnolo / spagnola", en: "Spanish", de: "spanisch", note: "-o/-a change." },
        { it: "russo / russa", en: "Russian", de: "russisch", note: "-o/-a change." },
        { it: "polacco / polacca", en: "Polish", de: "polnisch", note: "-o/-a change." },
        { it: "cinese", en: "Chinese", de: "chinesisch", note: "Same form for m/f." },
        { it: "francese", en: "French", de: "französisch", note: "Same form for m/f." },
        { it: "inglese", en: "English", de: "englisch", note: "Same form for m/f." }
      ],
      questions: [
        { id: "v-nat-cinese", type: "multiple-choice", prompt: "Which nationality keeps the same form for masculine and feminine?", answer: "cinese", options: ["cinese", "russo", "polacco", "spagnolo"] }
      ]
    },
    {
      id: "hobbies",
      title: "Free time & hobbies",
      status: "draft",
      summary: "Talking about what you like to do; mi piace, fare, giocare, suonare.",
      words: [
        { it: "nel tempo libero", en: "in my free time", de: "in meiner Freizeit", note: "Intro phrase for hobbies." },
        { it: "leggere", en: "to read", de: "lesen", note: "Hobby." },
        { it: "ascoltare la musica", en: "to listen to music", de: "Musik hören", note: "Hobby." },
        { it: "fare sport", en: "to do sports", de: "Sport machen", note: "fare + activity." },
        { it: "giocare a calcio", en: "to play football", de: "Fußball spielen", note: "giocare a for sports/games." },
        { it: "giocare a tennis", en: "to play tennis", de: "Tennis spielen", note: "giocare a." },
        { it: "suonare il piano", en: "to play the piano", de: "Klavier spielen", note: "suonare for instruments." },
        { it: "viaggiare", en: "to travel", de: "reisen", note: "Hobby." },
        { it: "cucinare per gli amici", en: "to cook for friends", de: "für Freunde kochen", note: "Hobby." }
      ],
      examples: [
        { it: "Nel tempo libero mi piace viaggiare.", en: "In my free time I like travelling.", de: "In meiner Freizeit reise ich gern." },
        { it: "Mi piace suonare il piano.", en: "I like playing the piano.", de: "Ich spiele gern Klavier." }
      ],
      questions: [
        { id: "v-hob-read", type: "typed", prompt: "Type the Italian infinitive for: to read", answer: "leggere", accepted: ["leggere"] },
        { id: "v-hob-travel", type: "typed", prompt: "Type the Italian infinitive for: to travel", answer: "viaggiare", accepted: ["viaggiare"] },
        { id: "v-hob-football", type: "multiple-choice", prompt: "Which phrase means 'to play football'?", answer: "giocare a calcio", options: ["giocare a calcio", "suonare il piano", "fare spese", "ascoltare la musica"] },
        { id: "v-hob-music", type: "typed", prompt: "Type in Italian: to listen to music", answer: "ascoltare la musica", accepted: ["ascoltare la musica"] },
        { id: "v-hob-piano", type: "typed", prompt: "Type in Italian: to play the piano", answer: "suonare il piano", accepted: ["suonare il piano"] }
      ]
    },
    {
      id: "numbers-dates",
      title: "Numbers, days & dates",
      status: "ready",
      summary: "I giorni, i mesi, l'ora e le date. (Per i numeri 0-100 usa la modalità 'Numbers' nel quiz.)",
      words: [
        { it: "lunedì", def: "Il primo giorno della settimana.", ex: "Il lunedì comincia la scuola.", en: "Monday", de: "Montag" },
        { it: "martedì", def: "Il giorno dopo lunedì.", ex: "Martedì ho una riunione.", en: "Tuesday", de: "Dienstag" },
        { it: "mercoledì", def: "Il giorno a metà settimana, dopo martedì.", ex: "Mercoledì vado in palestra.", en: "Wednesday", de: "Mittwoch" },
        { it: "giovedì", def: "Il giorno dopo mercoledì.", ex: "Giovedì sera esco con gli amici.", en: "Thursday", de: "Donnerstag" },
        { it: "venerdì", def: "L'ultimo giorno della settimana lavorativa.", ex: "Venerdì finisco di lavorare presto.", en: "Friday", de: "Freitag" },
        { it: "sabato", def: "Il primo giorno del fine settimana.", ex: "Il sabato dormo di più.", en: "Saturday", de: "Samstag" },
        { it: "domenica", def: "Il giorno di riposo, alla fine della settimana.", ex: "La domenica pranziamo dai nonni.", en: "Sunday", de: "Sonntag" },
        { it: "la settimana", def: "Il periodo di sette giorni.", ex: "Questa settimana lavoro molto.", en: "week", de: "Woche" },
        { it: "il mese", def: "Uno dei dodici periodi dell'anno.", ex: "Gennaio è il primo mese dell'anno.", en: "month", de: "Monat" },
        { it: "l'anno", def: "Il periodo di dodici mesi.", ex: "L'anno prossimo vado in Italia.", en: "year", de: "Jahr" },
        { it: "gennaio", def: "Il primo mese dell'anno.", ex: "Il mio compleanno è a gennaio.", en: "January", de: "Januar" },
        { it: "febbraio", def: "Il secondo mese, il più corto.", ex: "Febbraio ha ventotto giorni.", en: "February", de: "Februar" },
        { it: "marzo", def: "Il terzo mese; comincia la primavera.", ex: "A marzo le giornate si allungano.", en: "March", de: "März" },
        { it: "aprile", def: "Il quarto mese dell'anno.", ex: "Ad aprile piove spesso.", en: "April", de: "April" },
        { it: "maggio", def: "Il quinto mese dell'anno.", ex: "A maggio ci sono molti fiori.", en: "May", de: "Mai" },
        { it: "giugno", def: "Il sesto mese; comincia l'estate.", ex: "A giugno finisce la scuola.", en: "June", de: "Juni" },
        { it: "luglio", def: "Il settimo mese, in piena estate.", ex: "A luglio vado in vacanza.", en: "July", de: "Juli" },
        { it: "agosto", def: "L'ottavo mese; molti italiani sono in ferie.", ex: "Ad agosto le città sono vuote.", en: "August", de: "August" },
        { it: "settembre", def: "Il nono mese; comincia l'autunno.", ex: "A settembre ricomincia la scuola.", en: "September", de: "September" },
        { it: "ottobre", def: "Il decimo mese dell'anno.", ex: "A ottobre fa più fresco.", en: "October", de: "Oktober" },
        { it: "novembre", def: "L'undicesimo mese dell'anno.", ex: "A novembre cadono le foglie.", en: "November", de: "November" },
        { it: "dicembre", def: "Il dodicesimo mese; c'è il Natale.", ex: "A dicembre fa freddo.", en: "December", de: "Dezember" },
        { it: "Che ore sono?", def: "Frase per chiedere l'orario.", ex: "Che ore sono? Sono le tre.", en: "What time is it?", de: "Wie spät ist es?" },
        { it: "mezzogiorno", def: "Le dodici del giorno.", ex: "Pranziamo a mezzogiorno.", en: "noon", de: "Mittag" },
        { it: "mezzanotte", def: "Le dodici della notte.", ex: "La festa finisce a mezzanotte.", en: "midnight", de: "Mitternacht" },
        { it: "e mezza", def: "Trenta minuti dopo l'ora.", ex: "Sono le due e mezza.", en: "half past", de: "halb" },
        { it: "un quarto", def: "Quindici minuti.", ex: "Sono le tre e un quarto.", en: "a quarter", de: "Viertel" }
      ]
    },
    {
      id: "time-words",
      title: "Time words",
      status: "ready",
      summary: "Quando succede qualcosa: oggi, ieri, domani, presto, tardi, già, tra poco...",
      words: [
        { it: "oggi", def: "Il giorno in cui siamo adesso.", ex: "Oggi è lunedì e lavoro tutto il giorno.", en: "today", de: "heute" },
        { it: "ieri", def: "Il giorno prima di oggi.", ex: "Ieri sono rimasto a casa.", en: "yesterday", de: "gestern" },
        { it: "domani", def: "Il giorno dopo oggi.", ex: "Domani vado dal dottore.", en: "tomorrow", de: "morgen" },
        { it: "dopodomani", def: "Il giorno dopo domani.", ex: "Dopodomani parto per Roma.", en: "the day after tomorrow", de: "übermorgen" },
        { it: "adesso", def: "In questo momento.", ex: "Adesso non posso parlare, sono occupato.", en: "now", de: "jetzt" },
        { it: "presto", def: "Prima del solito, o dopo poco tempo.", ex: "Domani mi alzo presto.", en: "early / soon", de: "früh / bald" },
        { it: "tardi", def: "Dopo il momento giusto o dopo il solito.", ex: "Stasera torno a casa tardi.", en: "late", de: "spät" },
        { it: "prima", def: "Nel momento che precede un altro.", ex: "Prima mangio, poi esco.", en: "before / first", de: "vorher / zuerst" },
        { it: "dopo", def: "Nel momento che viene dopo un altro.", ex: "Dopo il lavoro vado in palestra.", en: "after / afterwards", de: "nachher / danach" },
        { it: "poi", def: "Più tardi, in seguito.", ex: "Finisco questo lavoro e poi ti chiamo.", en: "then", de: "dann" },
        { it: "già", def: "Prima di adesso, prima del previsto.", ex: "Ho già mangiato, grazie.", en: "already", de: "schon" },
        { it: "non ... ancora", def: "Fino a questo momento no.", ex: "Non ho ancora finito i compiti.", en: "not yet", de: "noch nicht" },
        { it: "sempre", def: "In ogni momento, tutte le volte.", ex: "La mattina bevo sempre un caffè.", en: "always", de: "immer" },
        { it: "mai", def: "In nessun momento.", ex: "Non vado mai a letto presto.", en: "never", de: "nie" },
        { it: "spesso", def: "Molte volte, di frequente.", ex: "Vado spesso al cinema con gli amici.", en: "often", de: "oft" },
        { it: "a volte", def: "Non sempre, solo qualche volta.", ex: "A volte mangio al ristorante.", en: "sometimes", de: "manchmal" },
        { it: "di solito", def: "Nella maggior parte dei casi, normalmente.", ex: "Di solito pranzo all'una.", en: "usually", de: "normalerweise" },
        { it: "subito", def: "Immediatamente, senza aspettare.", ex: "Arrivo subito, aspettami!", en: "immediately", de: "sofort" },
        { it: "tra poco", def: "Dopo poco tempo da adesso.", ex: "Il treno parte tra poco.", en: "in a little while", de: "gleich / bald" },
        { it: "tra una settimana", def: "Dopo sette giorni da oggi.", ex: "Tra una settimana comincio le vacanze.", en: "in a week", de: "in einer Woche" },
        { it: "una settimana fa", def: "Sette giorni prima di oggi.", ex: "Una settimana fa ero a Milano.", en: "a week ago", de: "vor einer Woche" },
        { it: "stamattina", def: "Questa mattina.", ex: "Stamattina ho fatto colazione presto.", en: "this morning", de: "heute Morgen" },
        { it: "stasera", def: "Questa sera.", ex: "Stasera resto a casa a guardare un film.", en: "this evening / tonight", de: "heute Abend" }
      ]
    },
    {
      id: "locations",
      title: "Locations & place words",
      status: "ready",
      summary: "Dove si trova qualcosa: sopra, sotto, davanti, dietro, vicino, tra... (Va insieme a 'Place prepositions'.)",
      words: [
        { it: "sopra", def: "In una posizione più alta, sulla parte superiore di qualcosa.", ex: "Il libro è sopra il tavolo.", en: "above / on top", de: "über / oben" },
        { it: "sotto", def: "In una posizione più bassa, nella parte inferiore.", ex: "Il gatto dorme sotto la sedia.", en: "under / below", de: "unter" },
        { it: "davanti a", def: "Nella parte anteriore, di fronte a qualcosa.", ex: "Ti aspetto davanti alla stazione.", en: "in front of", de: "vor" },
        { it: "dietro", def: "Nella parte posteriore di qualcosa.", ex: "Il giardino è dietro la casa.", en: "behind", de: "hinter" },
        { it: "vicino a", def: "A poca distanza da qualcosa.", ex: "Abito vicino al centro.", en: "close to / near", de: "nahe bei" },
        { it: "accanto a", def: "Proprio al fianco di qualcosa, di lato.", ex: "La farmacia è accanto al bar.", en: "next to", de: "neben" },
        { it: "lontano da", def: "A grande distanza da qualcosa.", ex: "L'aeroporto è lontano dalla città.", en: "far from", de: "weit von" },
        { it: "tra", def: "Nel mezzo di due cose o persone.", ex: "La banca è tra il bar e la posta.", en: "between", de: "zwischen" },
        { it: "dentro", def: "Nella parte interna di qualcosa.", ex: "Le chiavi sono dentro la borsa.", en: "inside", de: "innen / in" },
        { it: "fuori", def: "Nella parte esterna, non dentro.", ex: "I bambini giocano fuori.", en: "outside", de: "draußen" },
        { it: "di fronte a", def: "Dalla parte opposta, davanti a qualcosa.", ex: "Il museo è di fronte alla chiesa.", en: "opposite / facing", de: "gegenüber" },
        { it: "in mezzo a", def: "Al centro di uno spazio o di un gruppo.", ex: "C'è un tavolo in mezzo alla stanza.", en: "in the middle of", de: "mitten in" },
        { it: "intorno a", def: "Tutt'intorno, che circonda qualcosa.", ex: "C'è un muro intorno al giardino.", en: "around", de: "um ... herum" },
        { it: "su", def: "Sopra una superficie e a contatto con essa.", ex: "Il quaderno è sul banco.", en: "on", de: "auf" },
        { it: "a destra", def: "Dal lato destro.", ex: "Il bagno è a destra.", en: "on the right", de: "rechts" },
        { it: "a sinistra", def: "Dal lato sinistro.", ex: "Gira a sinistra dopo il semaforo.", en: "on the left", de: "links" },
        { it: "qui", def: "In questo luogo, dove sono io.", ex: "Vieni qui, per favore!", en: "here", de: "hier" },
        { it: "lì", def: "In quel luogo, lontano da me.", ex: "Il ristorante è lì, in fondo alla strada.", en: "there", de: "dort" }
      ]
    },
    {
      id: "house",
      title: "The house",
      status: "ready",
      summary: "Le stanze e gli oggetti della casa: cucina, bagno, camera, soggiorno e i mobili.",
      words: [
        { it: "la cucina", def: "La stanza dove si prepara e si cucina il cibo.", ex: "In cucina c'è un frigorifero grande.", en: "kitchen", de: "Küche" },
        { it: "il bagno", def: "La stanza con la doccia, il water e il lavandino.", ex: "Vado in bagno a lavarmi le mani.", en: "bathroom", de: "Bad" },
        { it: "la camera da letto", def: "La stanza dove si dorme.", ex: "La mia camera da letto è piccola ma luminosa.", en: "bedroom", de: "Schlafzimmer" },
        { it: "il soggiorno", def: "La stanza dove ci si rilassa, si guarda la TV e si ricevono gli ospiti.", ex: "La sera guardiamo un film in soggiorno.", en: "living room", de: "Wohnzimmer" },
        { it: "la sala da pranzo", def: "La stanza dove si mangia.", ex: "A Natale mangiamo tutti nella sala da pranzo.", en: "dining room", de: "Esszimmer" },
        { it: "il corridoio", def: "Lo spazio stretto che collega le stanze.", ex: "Le camere sono in fondo al corridoio.", en: "hallway", de: "Flur" },
        { it: "il balcone", def: "Lo spazio esterno con una ringhiera, fuori da una stanza.", ex: "In estate faccio colazione sul balcone.", en: "balcony", de: "Balkon" },
        { it: "il giardino", def: "Lo spazio verde intorno o vicino alla casa.", ex: "I bambini giocano in giardino.", en: "garden", de: "Garten" },
        { it: "il tavolo", def: "Il mobile con un piano e le gambe, dove si mangia o si lavora.", ex: "Mettiamo i piatti sul tavolo.", en: "table", de: "Tisch" },
        { it: "la sedia", def: "Il mobile su cui ci si siede.", ex: "Ci sono quattro sedie intorno al tavolo.", en: "chair", de: "Stuhl" },
        { it: "il letto", def: "Il mobile su cui si dorme.", ex: "La sera vado a letto alle undici.", en: "bed", de: "Bett" },
        { it: "il divano", def: "Il mobile comodo e morbido dove ci si siede in più persone.", ex: "Mi rilasso sul divano dopo cena.", en: "sofa", de: "Sofa" },
        { it: "l'armadio", def: "Il mobile alto dove si tengono i vestiti.", ex: "Metto la giacca nell'armadio.", en: "wardrobe", de: "Schrank" },
        { it: "il frigorifero", def: "L'elettrodomestico freddo dove si conservano i cibi.", ex: "Il latte è nel frigorifero.", en: "fridge", de: "Kühlschrank" },
        { it: "il forno", def: "L'elettrodomestico caldo dove si cuociono i cibi.", ex: "La pizza è nel forno.", en: "oven", de: "Ofen" },
        { it: "il lavandino", def: "Il posto con l'acqua dove ci si lava le mani o si lavano i piatti.", ex: "Lavo i piatti nel lavandino.", en: "sink", de: "Waschbecken" },
        { it: "la doccia", def: "Il posto nel bagno dove ci si lava con l'acqua.", ex: "Faccio la doccia ogni mattina.", en: "shower", de: "Dusche" },
        { it: "la finestra", def: "L'apertura nel muro con il vetro che fa entrare la luce.", ex: "Apri la finestra, fa caldo.", en: "window", de: "Fenster" },
        { it: "la porta", def: "L'apertura da cui si entra e si esce da una stanza.", ex: "Chiudi la porta, per favore.", en: "door", de: "Tür" },
        { it: "la lampada", def: "L'oggetto che dà luce in una stanza.", ex: "Accendo la lampada per leggere.", en: "lamp", de: "Lampe" }
      ]
    },
    {
      id: "family-people",
      title: "Family & people",
      status: "ready",
      summary: "I membri della famiglia e le parole per parlare delle persone.",
      words: [
        { it: "la famiglia", def: "Il gruppo di persone unite da parentela: genitori, figli e parenti.", ex: "La mia famiglia è numerosa.", en: "family", de: "Familie" },
        { it: "la madre", def: "Il genitore donna; la mamma.", ex: "Mia madre si chiama Anna.", en: "mother", de: "Mutter" },
        { it: "il padre", def: "Il genitore uomo; il papà.", ex: "Mio padre lavora in banca.", en: "father", de: "Vater" },
        { it: "i genitori", def: "La madre e il padre insieme.", ex: "I miei genitori abitano a Torino.", en: "parents", de: "Eltern" },
        { it: "il figlio", def: "Il bambino maschio rispetto ai genitori.", ex: "Hanno un figlio di dieci anni.", en: "son", de: "Sohn" },
        { it: "la figlia", def: "La bambina femmina rispetto ai genitori.", ex: "La loro figlia studia medicina.", en: "daughter", de: "Tochter" },
        { it: "il fratello", def: "Il figlio maschio degli stessi genitori.", ex: "Mio fratello è più grande di me.", en: "brother", de: "Bruder" },
        { it: "la sorella", def: "La figlia femmina degli stessi genitori.", ex: "Ho una sorella e un fratello.", en: "sister", de: "Schwester" },
        { it: "il nonno", def: "Il padre della madre o del padre.", ex: "Il nonno racconta belle storie.", en: "grandfather", de: "Großvater" },
        { it: "la nonna", def: "La madre della madre o del padre.", ex: "La nonna cucina benissimo.", en: "grandmother", de: "Großmutter" },
        { it: "lo zio", def: "Il fratello della madre o del padre.", ex: "Mio zio vive in Germania.", en: "uncle", de: "Onkel" },
        { it: "la zia", def: "La sorella della madre o del padre.", ex: "La zia viene a pranzo domenica.", en: "aunt", de: "Tante" },
        { it: "il cugino", def: "Il figlio dello zio o della zia.", ex: "Gioco a calcio con mio cugino.", en: "cousin", de: "Cousin" },
        { it: "il marito", def: "L'uomo sposato rispetto alla moglie.", ex: "Suo marito è medico.", en: "husband", de: "Ehemann" },
        { it: "la moglie", def: "La donna sposata rispetto al marito.", ex: "Mia moglie e io viaggiamo spesso.", en: "wife", de: "Ehefrau" },
        { it: "il bambino", def: "Una persona di pochi anni.", ex: "Il bambino gioca nel parco.", en: "child", de: "Kind" },
        { it: "l'amico", def: "Una persona a cui vuoi bene e con cui passi il tempo.", ex: "Esco con i miei amici il sabato.", en: "friend", de: "Freund" },
        { it: "il ragazzo", def: "Un giovane uomo; può anche significare il fidanzato.", ex: "Quel ragazzo è molto simpatico.", en: "boy / boyfriend", de: "Junge / Freund" },
        { it: "la ragazza", def: "Una giovane donna; può anche significare la fidanzata.", ex: "La ragazza legge un libro.", en: "girl / girlfriend", de: "Mädchen / Freundin" }
      ]
    },
    {
      id: "food-drink",
      title: "Food, drink & the restaurant",
      status: "ready",
      summary: "Cibo, bevande, i pasti e come ordinare al bar o al ristorante.",
      words: [
        { it: "il cibo", def: "Tutto quello che si mangia.", ex: "Mi piace molto il cibo italiano.", en: "food", de: "Essen" },
        { it: "l'acqua", def: "La bevanda trasparente che si beve ogni giorno.", ex: "Vorrei una bottiglia d'acqua, per favore.", en: "water", de: "Wasser" },
        { it: "il caffè", def: "La bevanda calda e scura che molti bevono la mattina.", ex: "Prendo un caffè al bar.", en: "coffee", de: "Kaffee" },
        { it: "il pane", def: "L'alimento fatto con farina e acqua, cotto al forno.", ex: "Compro il pane fresco ogni mattina.", en: "bread", de: "Brot" },
        { it: "la pasta", def: "Un piatto tipico italiano fatto di farina, come gli spaghetti.", ex: "Stasera mangiamo la pasta al pomodoro.", en: "pasta", de: "Nudeln" },
        { it: "la frutta", def: "Gli alimenti dolci che crescono sugli alberi, come le mele.", ex: "Mangio la frutta a colazione.", en: "fruit", de: "Obst" },
        { it: "la verdura", def: "Le piante che si mangiano, come le carote e gli spinaci.", ex: "La verdura fa bene alla salute.", en: "vegetables", de: "Gemüse" },
        { it: "la carne", def: "L'alimento che viene dagli animali.", ex: "Non mangio molta carne.", en: "meat", de: "Fleisch" },
        { it: "il pesce", def: "L'animale che vive nell'acqua e si può mangiare.", ex: "Il venerdì mangiamo il pesce.", en: "fish", de: "Fisch" },
        { it: "il formaggio", def: "L'alimento fatto con il latte.", ex: "Sulla pasta metto un po' di formaggio.", en: "cheese", de: "Käse" },
        { it: "il vino", def: "La bevanda alcolica fatta con l'uva.", ex: "Beviamo un bicchiere di vino rosso.", en: "wine", de: "Wein" },
        { it: "la birra", def: "La bevanda alcolica bionda fatta con i cereali.", ex: "In estate mi piace una birra fredda.", en: "beer", de: "Bier" },
        { it: "la colazione", def: "Il primo pasto della giornata, la mattina.", ex: "Faccio colazione con caffè e biscotti.", en: "breakfast", de: "Frühstück" },
        { it: "il pranzo", def: "Il pasto di mezzogiorno.", ex: "A pranzo mangio un panino.", en: "lunch", de: "Mittagessen" },
        { it: "la cena", def: "Il pasto della sera.", ex: "La cena è pronta alle otto.", en: "dinner", de: "Abendessen" },
        { it: "il ristorante", def: "Il luogo dove vai a mangiare e paghi per il pasto.", ex: "Stasera andiamo al ristorante.", en: "restaurant", de: "Restaurant" },
        { it: "il conto", def: "Il foglio che dice quanto devi pagare al ristorante.", ex: "Il conto, per favore!", en: "the bill", de: "Rechnung" },
        { it: "il cameriere", def: "La persona che prende le ordinazioni e porta i piatti al ristorante.", ex: "Il cameriere è molto gentile.", en: "waiter", de: "Kellner" },
        { it: "il menù", def: "La lista dei piatti e delle bevande al ristorante.", ex: "Posso vedere il menù?", en: "menu", de: "Speisekarte" },
        { it: "Vorrei...", def: "Frase gentile per ordinare o chiedere qualcosa.", ex: "Vorrei un caffè e un cornetto.", en: "I would like...", de: "Ich möchte..." }
      ]
    },
    {
      id: "city-directions",
      title: "The city & directions",
      status: "ready",
      summary: "I luoghi della città e come chiedere e dare indicazioni stradali.",
      words: [
        { it: "la città", def: "Un luogo grande dove vivono molte persone, con case, negozi e strade.", ex: "Roma è una città bellissima.", en: "city", de: "Stadt" },
        { it: "il centro", def: "La parte centrale della città, di solito con i negozi principali.", ex: "Il museo è in centro.", en: "city centre", de: "Zentrum" },
        { it: "la strada", def: "Il percorso dove passano le macchine e le persone.", ex: "Attraversa la strada con attenzione.", en: "street / road", de: "Straße" },
        { it: "la piazza", def: "Uno spazio aperto in città, circondato da edifici.", ex: "Ci incontriamo in piazza alle cinque.", en: "square", de: "Platz" },
        { it: "il negozio", def: "Il luogo dove si comprano le cose.", ex: "Il negozio apre alle nove.", en: "shop", de: "Geschäft" },
        { it: "il supermercato", def: "Il grande negozio dove si compra il cibo e altro.", ex: "Vado al supermercato a fare la spesa.", en: "supermarket", de: "Supermarkt" },
        { it: "la banca", def: "Il luogo dove si tengono e si gestiscono i soldi.", ex: "Devo andare in banca stamattina.", en: "bank", de: "Bank" },
        { it: "la farmacia", def: "Il negozio dove si comprano le medicine.", ex: "La farmacia è accanto al bar.", en: "pharmacy", de: "Apotheke" },
        { it: "l'ospedale", def: "Il luogo dove si curano i malati.", ex: "L'ospedale è fuori città.", en: "hospital", de: "Krankenhaus" },
        { it: "la chiesa", def: "L'edificio dove le persone pregano.", ex: "La chiesa in piazza è molto antica.", en: "church", de: "Kirche" },
        { it: "il museo", def: "Il luogo dove si vedono opere d'arte e oggetti storici.", ex: "Domenica visitiamo il museo.", en: "museum", de: "Museum" },
        { it: "il parco", def: "Uno spazio verde in città dove si passeggia e ci si rilassa.", ex: "Corro al parco la mattina.", en: "park", de: "Park" },
        { it: "il semaforo", def: "Il segnale con le luci rosse, gialle e verdi che regola il traffico.", ex: "Gira a destra al semaforo.", en: "traffic light", de: "Ampel" },
        { it: "l'incrocio", def: "Il punto dove due strade si incontrano.", ex: "All'incrocio vai dritto.", en: "crossroads", de: "Kreuzung" },
        { it: "dritto", def: "Senza girare, in avanti.", ex: "Vai sempre dritto fino alla piazza.", en: "straight on", de: "geradeaus" },
        { it: "girare", def: "Cambiare direzione, a destra o a sinistra.", ex: "Devi girare a sinistra qui.", en: "to turn", de: "abbiegen" },
        { it: "Dov'è...?", def: "Frase per chiedere dove si trova qualcosa.", ex: "Dov'è la fermata dell'autobus?", en: "Where is...?", de: "Wo ist...?" },
        { it: "Come arrivo a...?", def: "Frase per chiedere la strada per un luogo.", ex: "Come arrivo alla stazione, per favore?", en: "How do I get to...?", de: "Wie komme ich zu...?" }
      ]
    },
    {
      id: "travel",
      title: "Travel",
      status: "ready",
      summary: "Stazione, biglietto, valigia e frasi utili per orientarsi in viaggio.",
      words: [
        { it: "la stazione", def: "Il luogo da cui partono e arrivano i treni.", ex: "Ci vediamo alla stazione alle nove.", en: "station", de: "Bahnhof" },
        { it: "l'aeroporto", def: "Il luogo da cui partono e arrivano gli aerei.", ex: "L'aeroporto è lontano dal centro.", en: "airport", de: "Flughafen" },
        { it: "il treno", def: "Il mezzo di trasporto che va su rotaie.", ex: "Prendo il treno per andare a lavorare.", en: "train", de: "Zug" },
        { it: "l'aereo", def: "Il mezzo di trasporto che vola nel cielo.", ex: "L'aereo per Roma parte alle sette.", en: "plane", de: "Flugzeug" },
        { it: "l'autobus", def: "Il mezzo di trasporto pubblico che va su strada.", ex: "Aspetto l'autobus alla fermata.", en: "bus", de: "Bus" },
        { it: "il biglietto", def: "Il documento che compri per viaggiare o entrare in un posto.", ex: "Ho comprato il biglietto del treno online.", en: "ticket", de: "Fahrkarte" },
        { it: "il binario", def: "Il posto nella stazione da cui parte il treno.", ex: "Il treno parte dal binario tre.", en: "platform / track", de: "Gleis" },
        { it: "la fermata", def: "Il punto dove l'autobus si ferma per far salire e scendere le persone.", ex: "Scendo alla prossima fermata.", en: "stop", de: "Haltestelle" },
        { it: "la valigia", def: "La borsa grande dove metti i vestiti quando viaggi.", ex: "Preparo la valigia prima di partire.", en: "suitcase", de: "Koffer" },
        { it: "la prenotazione", def: "Quando riservi in anticipo un posto, una camera o un tavolo.", ex: "Ho una prenotazione per due notti.", en: "reservation / booking", de: "Reservierung" },
        { it: "l'albergo", def: "Il luogo dove dormi quando sei in viaggio.", ex: "Dormiamo in un albergo vicino al mare.", en: "hotel", de: "Hotel" },
        { it: "la camera", def: "La stanza dell'albergo dove dormi.", ex: "La nostra camera è al secondo piano.", en: "room", de: "Zimmer" },
        { it: "la mappa", def: "Il disegno di una città o di una zona che aiuta a trovare la strada.", ex: "Guardo la mappa per trovare il museo.", en: "map", de: "Karte" },
        { it: "il passaporto", def: "Il documento che serve per viaggiare in altri paesi.", ex: "Non dimenticare il passaporto in aeroporto.", en: "passport", de: "Reisepass" },
        { it: "la partenza", def: "Il momento in cui si parte.", ex: "La partenza è prevista alle otto.", en: "departure", de: "Abfahrt" },
        { it: "l'arrivo", def: "Il momento in cui si arriva.", ex: "L'arrivo a Napoli è alle dieci.", en: "arrival", de: "Ankunft" },
        { it: "il ritardo", def: "Quando qualcosa arriva o parte più tardi del previsto.", ex: "Il treno è in ritardo di venti minuti.", en: "delay", de: "Verspätung" },
        { it: "il volo", def: "Il viaggio che si fa in aereo.", ex: "Il volo dura due ore.", en: "flight", de: "Flug" },
        { it: "Scusi, dov'è...?", def: "Frase per chiedere gentilmente dove si trova un luogo.", ex: "Scusi, dov'è la stazione?", en: "Excuse me, where is...?", de: "Entschuldigung, wo ist...?" },
        { it: "A che ora parte?", def: "Frase per chiedere l'orario di partenza.", ex: "A che ora parte il prossimo treno?", en: "What time does it leave?", de: "Wann fährt es ab?" }
      ]
    },
    {
      id: "shopping",
      title: "Shopping & money",
      status: "ready",
      summary: "I soldi, i prezzi, le taglie e come si paga nei negozi.",
      words: [
        { it: "i soldi", def: "Il denaro che si usa per comprare le cose.", ex: "Non ho soldi con me oggi.", en: "money", de: "Geld" },
        { it: "l'euro", def: "La moneta usata in Italia e in molti paesi europei.", ex: "Il caffè costa un euro.", en: "euro", de: "Euro" },
        { it: "il prezzo", def: "Quanto costa una cosa.", ex: "Il prezzo è troppo alto.", en: "price", de: "Preis" },
        { it: "Quanto costa?", def: "Frase per chiedere il prezzo di qualcosa.", ex: "Quanto costa questa maglietta?", en: "How much is it?", de: "Wie viel kostet das?" },
        { it: "costare", def: "Avere un certo prezzo.", ex: "Queste scarpe costano cinquanta euro.", en: "to cost", de: "kosten" },
        { it: "comprare", def: "Prendere qualcosa pagando dei soldi.", ex: "Compro il pane in panetteria.", en: "to buy", de: "kaufen" },
        { it: "pagare", def: "Dare i soldi per qualcosa.", ex: "Pago con la carta.", en: "to pay", de: "bezahlen" },
        { it: "la carta di credito", def: "La tessera che si usa per pagare senza contanti.", ex: "Posso pagare con la carta di credito?", en: "credit card", de: "Kreditkarte" },
        { it: "i contanti", def: "I soldi in banconote e monete.", ex: "Preferisco pagare in contanti.", en: "cash", de: "Bargeld" },
        { it: "lo sconto", def: "La riduzione del prezzo.", ex: "C'è uno sconto del venti percento.", en: "discount", de: "Rabatt" },
        { it: "i saldi", def: "Il periodo in cui i negozi vendono a prezzi più bassi.", ex: "Compro i vestiti durante i saldi.", en: "the sales", de: "Schlussverkauf" },
        { it: "caro", def: "Che costa molto.", ex: "Questo ristorante è troppo caro.", en: "expensive", de: "teuer" },
        { it: "economico", def: "Che costa poco.", ex: "Ho trovato un hotel economico.", en: "cheap", de: "günstig" },
        { it: "la taglia", def: "La misura di un vestito.", ex: "Che taglia porta?", en: "size (clothes)", de: "Größe" },
        { it: "la cassa", def: "Il posto nel negozio dove si paga.", ex: "Pago alla cassa.", en: "checkout / till", de: "Kasse" },
        { it: "lo scontrino", def: "Il foglio che dimostra che hai pagato.", ex: "Vuole lo scontrino?", en: "receipt", de: "Kassenbon" },
        { it: "il mercato", def: "Il luogo all'aperto dove si comprano frutta, verdura e altro.", ex: "Il sabato vado al mercato.", en: "market", de: "Markt" }
      ]
    },
    {
      id: "clothing",
      title: "Clothes",
      status: "ready",
      summary: "I vestiti e gli accessori che indossiamo.",
      words: [
        { it: "i vestiti", def: "Le cose che indossiamo per coprire il corpo.", ex: "Metto i vestiti nell'armadio.", en: "clothes", de: "Kleidung" },
        { it: "la maglietta", def: "Un indumento leggero per la parte superiore del corpo, con maniche corte.", ex: "In estate porto una maglietta.", en: "t-shirt", de: "T-Shirt" },
        { it: "la camicia", def: "Un indumento elegante per la parte superiore, con i bottoni.", ex: "Per il lavoro indosso una camicia.", en: "shirt", de: "Hemd" },
        { it: "il maglione", def: "Un indumento caldo, spesso di lana, per l'inverno.", ex: "Metto il maglione quando fa freddo.", en: "sweater", de: "Pullover" },
        { it: "i pantaloni", def: "L'indumento che copre le gambe.", ex: "Questi pantaloni sono troppo lunghi.", en: "trousers", de: "Hose" },
        { it: "la gonna", def: "L'indumento che copre dalla vita alle gambe.", ex: "Porta una gonna nera.", en: "skirt", de: "Rock" },
        { it: "il vestito", def: "Un abito in un unico pezzo, o un completo elegante.", ex: "Ho comprato un vestito per la festa.", en: "dress / suit", de: "Kleid / Anzug" },
        { it: "la giacca", def: "L'indumento che si mette sopra gli altri per uscire.", ex: "Fa freddo, prendi la giacca.", en: "jacket", de: "Jacke" },
        { it: "il cappotto", def: "Un indumento lungo e caldo per l'inverno.", ex: "In inverno porto un cappotto pesante.", en: "coat", de: "Mantel" },
        { it: "le scarpe", def: "Quello che si indossa ai piedi.", ex: "Queste scarpe sono molto comode.", en: "shoes", de: "Schuhe" },
        { it: "i calzini", def: "Quello che si mette ai piedi sotto le scarpe.", ex: "Ho perso un calzino.", en: "socks", de: "Socken" },
        { it: "il cappello", def: "Quello che si mette sulla testa.", ex: "Con il sole porto un cappello.", en: "hat", de: "Hut" },
        { it: "la sciarpa", def: "Quello che si mette intorno al collo per non avere freddo.", ex: "In inverno uso una sciarpa di lana.", en: "scarf", de: "Schal" },
        { it: "i guanti", def: "Quello che si mette sulle mani per il freddo.", ex: "Con la neve porto i guanti.", en: "gloves", de: "Handschuhe" },
        { it: "gli occhiali", def: "Quello che si mette sugli occhi per vedere meglio o per il sole.", ex: "Non trovo i miei occhiali.", en: "glasses", de: "Brille" },
        { it: "indossare", def: "Avere addosso un vestito; portare.", ex: "Oggi indosso una camicia bianca.", en: "to wear", de: "tragen" }
      ]
    },
    {
      id: "body-health",
      title: "Body & health",
      status: "ready",
      summary: "Le parti del corpo, dal dottore e i sintomi di base.",
      words: [
        { it: "il corpo", def: "L'insieme di tutte le parti fisiche di una persona.", ex: "Lo sport fa bene al corpo.", en: "body", de: "Körper" },
        { it: "la testa", def: "La parte superiore del corpo, dove sono gli occhi e la bocca.", ex: "Mi fa male la testa.", en: "head", de: "Kopf" },
        { it: "gli occhi", def: "Le parti del viso con cui vediamo.", ex: "Ha gli occhi verdi.", en: "eyes", de: "Augen" },
        { it: "il naso", def: "La parte del viso con cui respiriamo e sentiamo gli odori.", ex: "Con il raffreddore il naso cola.", en: "nose", de: "Nase" },
        { it: "la bocca", def: "La parte del viso con cui mangiamo e parliamo.", ex: "Apri la bocca, dice il dottore.", en: "mouth", de: "Mund" },
        { it: "l'orecchio", def: "La parte del corpo con cui sentiamo i suoni.", ex: "Mi fa male un orecchio.", en: "ear", de: "Ohr" },
        { it: "il braccio", def: "La parte del corpo tra la spalla e la mano.", ex: "Si è rotto un braccio.", en: "arm", de: "Arm" },
        { it: "la mano", def: "La parte del corpo alla fine del braccio, con le dita.", ex: "Mi lavo le mani prima di mangiare.", en: "hand", de: "Hand" },
        { it: "la gamba", def: "La parte del corpo con cui camminiamo.", ex: "Dopo la corsa mi fanno male le gambe.", en: "leg", de: "Bein" },
        { it: "il piede", def: "La parte del corpo alla fine della gamba.", ex: "Ho i piedi freddi.", en: "foot", de: "Fuß" },
        { it: "lo stomaco", def: "L'organo interno dove va il cibo.", ex: "Ho mal di stomaco.", en: "stomach", de: "Magen" },
        { it: "la schiena", def: "La parte posteriore del corpo, dalla nuca ai fianchi.", ex: "Lavoro al computer e mi fa male la schiena.", en: "back", de: "Rücken" },
        { it: "il dottore", def: "La persona che cura i malati; il medico.", ex: "Se stai male, vai dal dottore.", en: "doctor", de: "Arzt" },
        { it: "la medicina", def: "La sostanza che si prende per guarire.", ex: "Prendo la medicina due volte al giorno.", en: "medicine", de: "Medikament" },
        { it: "essere malato", def: "Non stare bene di salute.", ex: "Oggi sono malato e resto a letto.", en: "to be ill", de: "krank sein" },
        { it: "avere mal di...", def: "Sentire dolore in una parte del corpo.", ex: "Ho mal di testa.", en: "to have a ...ache", de: "... schmerzen haben" },
        { it: "stare bene", def: "Sentirsi in buona salute.", ex: "Grazie, sto bene.", en: "to be well", de: "sich gut fühlen" }
      ]
    },
    {
      id: "weather-seasons",
      title: "Weather & seasons",
      status: "ready",
      summary: "Il tempo, le stagioni e la temperatura.",
      words: [
        { it: "il tempo", def: "Le condizioni dell'atmosfera: sole, pioggia, vento.", ex: "Che tempo fa oggi?", en: "weather", de: "Wetter" },
        { it: "il sole", def: "La stella che dà luce e calore di giorno.", ex: "Oggi c'è il sole.", en: "sun", de: "Sonne" },
        { it: "la pioggia", def: "L'acqua che cade dal cielo.", ex: "Prendi l'ombrello, c'è la pioggia.", en: "rain", de: "Regen" },
        { it: "la neve", def: "L'acqua ghiacciata e bianca che cade in inverno.", ex: "In montagna c'è molta neve.", en: "snow", de: "Schnee" },
        { it: "il vento", def: "L'aria che si muove.", ex: "Oggi c'è vento e fa freddo.", en: "wind", de: "Wind" },
        { it: "la nuvola", def: "La massa bianca o grigia che si vede nel cielo.", ex: "Ci sono molte nuvole, forse piove.", en: "cloud", de: "Wolke" },
        { it: "caldo", def: "Quando la temperatura è alta.", ex: "In estate fa molto caldo.", en: "hot / warm", de: "heiß / warm" },
        { it: "freddo", def: "Quando la temperatura è bassa.", ex: "In inverno fa freddo.", en: "cold", de: "kalt" },
        { it: "piovere", def: "Cadere dell'acqua dal cielo.", ex: "Domani dovrebbe piovere.", en: "to rain", de: "regnen" },
        { it: "Fa bel tempo", def: "Frase per dire che il tempo è buono.", ex: "Oggi fa bel tempo, andiamo al mare.", en: "the weather is nice", de: "das Wetter ist schön" },
        { it: "Fa brutto tempo", def: "Frase per dire che il tempo è cattivo.", ex: "Fa brutto tempo, restiamo a casa.", en: "the weather is bad", de: "das Wetter ist schlecht" },
        { it: "la stagione", def: "Uno dei quattro periodi dell'anno.", ex: "La mia stagione preferita è l'estate.", en: "season", de: "Jahreszeit" },
        { it: "la primavera", def: "La stagione dopo l'inverno, quando sbocciano i fiori.", ex: "In primavera il clima è mite.", en: "spring", de: "Frühling" },
        { it: "l'estate", def: "La stagione più calda dell'anno.", ex: "In estate andiamo al mare.", en: "summer", de: "Sommer" },
        { it: "l'autunno", def: "La stagione in cui cadono le foglie.", ex: "In autunno piove spesso.", en: "autumn", de: "Herbst" },
        { it: "l'inverno", def: "La stagione più fredda dell'anno.", ex: "In inverno a volte nevica.", en: "winter", de: "Winter" }
      ]
    },
    {
      id: "jobs",
      title: "Jobs",
      status: "ready",
      summary: "Le professioni e i luoghi di lavoro.",
      words: [
        { it: "il lavoro", def: "L'attività che una persona fa per guadagnare soldi.", ex: "Il mio lavoro mi piace molto.", en: "job / work", de: "Arbeit" },
        { it: "l'insegnante", def: "La persona che insegna a scuola.", ex: "L'insegnante spiega la lezione.", en: "teacher", de: "Lehrer" },
        { it: "il medico", def: "La persona che cura i malati.", ex: "Il medico visita i pazienti la mattina.", en: "doctor", de: "Arzt" },
        { it: "l'infermiere", def: "La persona che assiste i malati in ospedale.", ex: "L'infermiere è molto gentile.", en: "nurse", de: "Krankenpfleger" },
        { it: "l'avvocato", def: "La persona che difende le persone nei tribunali.", ex: "L'avvocato studia il caso.", en: "lawyer", de: "Anwalt" },
        { it: "l'ingegnere", def: "La persona che progetta macchine, ponti o edifici.", ex: "Mio fratello fa l'ingegnere.", en: "engineer", de: "Ingenieur" },
        { it: "il commesso", def: "La persona che vende nei negozi.", ex: "Il commesso mi mostra le scarpe.", en: "shop assistant", de: "Verkäufer" },
        { it: "il cuoco", def: "La persona che cucina in un ristorante.", ex: "Il cuoco prepara un buon risotto.", en: "cook", de: "Koch" },
        { it: "il poliziotto", def: "La persona che protegge i cittadini e fa rispettare le leggi.", ex: "Il poliziotto dirige il traffico.", en: "police officer", de: "Polizist" },
        { it: "l'impiegato", def: "La persona che lavora in un ufficio.", ex: "Lavoro come impiegato in banca.", en: "office worker", de: "Angestellter" },
        { it: "l'operaio", def: "La persona che lavora in una fabbrica.", ex: "Gli operai costruiscono le macchine.", en: "factory worker", de: "Arbeiter" },
        { it: "il giornalista", def: "La persona che scrive notizie per i giornali o la TV.", ex: "Il giornalista intervista il sindaco.", en: "journalist", de: "Journalist" },
        { it: "l'ufficio", def: "Il luogo dove si lavora, di solito con scrivanie e computer.", ex: "Vado in ufficio alle nove.", en: "office", de: "Büro" },
        { it: "l'azienda", def: "L'organizzazione che produce o vende qualcosa; la ditta.", ex: "Lavoro in un'azienda di informatica.", en: "company", de: "Firma" },
        { it: "lavorare", def: "Fare un'attività per guadagnare soldi.", ex: "Lavoro dal lunedì al venerdì.", en: "to work", de: "arbeiten" },
        { it: "Che lavoro fai?", def: "Frase per chiedere la professione di qualcuno.", ex: "Che lavoro fai? Sono insegnante.", en: "What's your job?", de: "Was machst du beruflich?" }
      ]
    },
    {
      id: "daily-routine",
      title: "Daily routine",
      status: "ready",
      summary: "Le azioni di ogni giorno, dalla mattina alla sera. (Va insieme a 'Reflexive verbs'.)",
      words: [
        { it: "svegliarsi", def: "Aprire gli occhi e smettere di dormire.", ex: "Mi sveglio alle sette ogni mattina.", en: "to wake up", de: "aufwachen" },
        { it: "alzarsi", def: "Uscire dal letto e mettersi in piedi.", ex: "Mi alzo subito dopo la sveglia.", en: "to get up", de: "aufstehen" },
        { it: "lavarsi", def: "Pulirsi il corpo con l'acqua.", ex: "Mi lavo con l'acqua calda.", en: "to wash oneself", de: "sich waschen" },
        { it: "farsi la doccia", def: "Lavarsi il corpo sotto la doccia.", ex: "Mi faccio la doccia ogni mattina.", en: "to have a shower", de: "duschen" },
        { it: "lavarsi i denti", def: "Pulirsi i denti con lo spazzolino.", ex: "Mi lavo i denti dopo i pasti.", en: "to brush one's teeth", de: "Zähne putzen" },
        { it: "pettinarsi", def: "Sistemarsi i capelli con il pettine.", ex: "Mi pettino davanti allo specchio.", en: "to comb one's hair", de: "sich kämmen" },
        { it: "vestirsi", def: "Mettersi i vestiti.", ex: "Mi vesto in fretta la mattina.", en: "to get dressed", de: "sich anziehen" },
        { it: "fare colazione", def: "Mangiare il primo pasto della giornata.", ex: "Faccio colazione alle otto.", en: "to have breakfast", de: "frühstücken" },
        { it: "andare al lavoro", def: "Recarsi nel luogo dove si lavora.", ex: "Vado al lavoro in bici.", en: "to go to work", de: "zur Arbeit gehen" },
        { it: "pranzare", def: "Mangiare il pasto di mezzogiorno.", ex: "Pranzo con i colleghi all'una.", en: "to have lunch", de: "zu Mittag essen" },
        { it: "tornare a casa", def: "Rientrare nella propria casa.", ex: "Torno a casa alle sei.", en: "to go back home", de: "nach Hause zurückkehren" },
        { it: "fare la spesa", def: "Comprare il cibo e le cose per la casa.", ex: "Il sabato faccio la spesa.", en: "to do the grocery shopping", de: "einkaufen" },
        { it: "cenare", def: "Mangiare il pasto della sera.", ex: "Ceniamo insieme alle otto.", en: "to have dinner", de: "zu Abend essen" },
        { it: "riposarsi", def: "Fermarsi per recuperare le forze.", ex: "Dopo pranzo mi riposo un po'.", en: "to rest", de: "sich ausruhen" },
        { it: "andare a letto", def: "Andare a dormire.", ex: "Vado a letto verso le undici.", en: "to go to bed", de: "ins Bett gehen" },
        { it: "addormentarsi", def: "Cominciare a dormire.", ex: "Mi addormento subito la sera.", en: "to fall asleep", de: "einschlafen" }
      ]
    },
    {
      id: "colors",
      title: "Colors",
      status: "ready",
      summary: "I colori e come si accordano con il nome. (Va insieme a 'Adjectives & agreement'.)",
      words: [
        { it: "il colore", def: "La qualità di ciò che vediamo: rosso, blu, verde e così via.", ex: "Di che colore è la tua macchina?", en: "colour", de: "Farbe" },
        { it: "rosso", def: "Il colore del sangue e delle fragole.", ex: "Ho una maglietta rossa.", en: "red", de: "rot" },
        { it: "blu", def: "Il colore del cielo sereno e del mare.", ex: "Il suo cappotto è blu.", en: "blue", de: "blau" },
        { it: "azzurro", def: "Un blu chiaro, come il cielo di giorno.", ex: "La maglia della nazionale italiana è azzurra.", en: "light blue", de: "hellblau" },
        { it: "verde", def: "Il colore dell'erba e delle foglie.", ex: "Le mele verdi sono un po' acide.", en: "green", de: "grün" },
        { it: "giallo", def: "Il colore del sole e dei limoni.", ex: "Ho comprato dei fiori gialli.", en: "yellow", de: "gelb" },
        { it: "arancione", def: "Il colore delle arance e delle carote.", ex: "Indossa una giacca arancione.", en: "orange", de: "orange" },
        { it: "rosa", def: "Il colore chiaro tra il rosso e il bianco.", ex: "La sua camera è rosa.", en: "pink", de: "rosa" },
        { it: "viola", def: "Il colore tra il blu e il rosso, come la lavanda.", ex: "Le ho regalato una sciarpa viola.", en: "purple", de: "lila" },
        { it: "marrone", def: "Il colore della terra e del legno.", ex: "Ho gli occhi marroni.", en: "brown", de: "braun" },
        { it: "grigio", def: "Il colore tra il bianco e il nero, come le nuvole.", ex: "Il cielo è grigio oggi.", en: "grey", de: "grau" },
        { it: "nero", def: "Il colore più scuro, come la notte.", ex: "Porto spesso scarpe nere.", en: "black", de: "schwarz" },
        { it: "bianco", def: "Il colore della neve e del latte.", ex: "Il muro della cucina è bianco.", en: "white", de: "weiß" },
        { it: "chiaro", def: "Un colore con molta luce, tenue.", ex: "Preferisco i colori chiari.", en: "light (shade)", de: "hell" },
        { it: "scuro", def: "Un colore con poca luce, intenso.", ex: "Ha i capelli scuri.", en: "dark (shade)", de: "dunkel" }
      ]
    },
    {
      id: "feelings-adjectives",
      title: "Feelings & descriptions",
      status: "ready",
      summary: "Gli stati d'animo e gli aggettivi per descrivere le persone.",
      words: [
        { it: "felice", def: "Che prova gioia; contento.", ex: "Sono felice di vederti!", en: "happy", de: "glücklich" },
        { it: "triste", def: "Che prova dispiacere; non contento.", ex: "Oggi sono un po' triste.", en: "sad", de: "traurig" },
        { it: "contento", def: "Soddisfatto e di buon umore.", ex: "Sono contento del mio lavoro.", en: "glad / pleased", de: "zufrieden" },
        { it: "stanco", def: "Che ha bisogno di riposo, senza energia.", ex: "Dopo il lavoro sono stanco.", en: "tired", de: "müde" },
        { it: "arrabbiato", def: "Che prova rabbia.", ex: "È arrabbiato perché è in ritardo.", en: "angry", de: "wütend" },
        { it: "annoiato", def: "Che si annoia, senza niente di interessante da fare.", ex: "Sono annoiato, non c'è niente da fare.", en: "bored", de: "gelangweilt" },
        { it: "preoccupato", def: "Che pensa con ansia a un problema.", ex: "Sono preoccupato per l'esame.", en: "worried", de: "besorgt" },
        { it: "nervoso", def: "Agitato, teso.", ex: "Prima di parlare in pubblico sono nervoso.", en: "nervous", de: "nervös" },
        { it: "tranquillo", def: "Calmo, senza preoccupazioni.", ex: "Oggi sono tranquillo, non ho fretta.", en: "calm", de: "ruhig" },
        { it: "simpatico", def: "Piacevole e gentile nel comportamento.", ex: "Il tuo amico è molto simpatico.", en: "likeable / nice", de: "sympathisch" },
        { it: "gentile", def: "Che tratta gli altri con cortesia.", ex: "La commessa è stata molto gentile.", en: "kind", de: "freundlich" },
        { it: "bravo", def: "Capace, che fa bene una cosa.", ex: "Sei molto bravo a cucinare.", en: "good / skilled", de: "tüchtig" },
        { it: "innamorato", def: "Che prova amore per qualcuno.", ex: "Marco è innamorato di Lucia.", en: "in love", de: "verliebt" },
        { it: "di buon umore", def: "Che si sente allegro e positivo.", ex: "Stamattina sono di buon umore.", en: "in a good mood", de: "gut gelaunt" },
        { it: "avere fame", def: "Sentire il bisogno di mangiare.", ex: "Ho fame, mangiamo qualcosa?", en: "to be hungry", de: "Hunger haben" },
        { it: "avere sete", def: "Sentire il bisogno di bere.", ex: "Ho sete, vorrei dell'acqua.", en: "to be thirsty", de: "Durst haben" }
      ]
    }
  ],

  reference: [
    {
      id: "alfabeto",
      title: "The alphabet & spelling",
      summary: "21 native letters plus foreign letters, and how to spell names aloud.",
      sections: [
        {
          title: "Basic alphabet",
          body: [
            "The basic Italian alphabet has 21 letters: a b c d e f g h i l m n o p q r s t u v z.",
            "The foreign letters are j, k, w, x, y — useful for names and borrowed words."
          ]
        },
        {
          title: "Useful questions",
          body: [
            "Come si scrive? = How is it spelled?",
            "Si scrive ... = It is spelled ...",
            "Come ti chiami di cognome? = What is your surname?"
          ]
        }
      ],
      vocab: [
        { it: "acca", en: "the letter h", de: "h", note: "Italian name of h." },
        { it: "cu", en: "the letter q", de: "q", note: "Italian name of q." },
        { it: "zeta", en: "the letter z", de: "z", note: "Italian name of z." },
        { it: "i lunga", en: "the letter j", de: "j", note: "Foreign letter." },
        { it: "kappa", en: "the letter k", de: "k", note: "Foreign letter." },
        { it: "doppia vu", en: "the letter w", de: "w", note: "Foreign letter." },
        { it: "ipsilon / i greca", en: "the letter y", de: "y", note: "Foreign letter." }
      ],
      examples: [
        { it: "Come si scrive?", en: "How is it spelled?", de: "Wie schreibt man das?" },
        { it: "Si scrive G-I-U-L-I-A.", en: "It is spelled G-I-U-L-I-A.", de: "Man schreibt es G-I-U-L-I-A." }
      ],
      questions: [
        { id: "r-alf-how", type: "typed", prompt: "Type in Italian: How is it spelled?", answer: "come si scrive", accepted: ["come si scrive", "come si scrive?"] },
        { id: "r-alf-k", type: "multiple-choice", prompt: "What is the Italian name of the letter k?", answer: "kappa", options: ["kappa", "acca", "cu", "ipsilon"] },
        { id: "r-alf-w", type: "multiple-choice", prompt: "What is the Italian name of the letter w?", answer: "doppia vu", options: ["doppia vu", "i lunga", "ics", "zeta"] }
      ]
    },
    {
      id: "pronuncia-c-g",
      title: "Pronunciation: c and g",
      summary: "How c and g change sound depending on the following letter.",
      sections: [
        {
          title: "The letter c",
          body: [
            "c + i/e sounds like English ch: ciao, arrivederci, cellulare, piacere.",
            "c + a/o/u or ch sounds like k: Carlo, come, cucina, Michele."
          ]
        },
        {
          title: "The letter g",
          body: [
            "g + i/e sounds like English j: Giulia, Genova, buongiorno.",
            "g + a/o/u or gh sounds like a hard g: Gabriele, guardare, funghi, spaghetti."
          ]
        }
      ],
      examples: [
        { it: "Ciao, piacere!", en: "Hi, nice to meet you!", de: "Hallo, freut mich!" },
        { it: "Michele mangia spaghetti.", en: "Michele eats spaghetti.", de: "Michele isst Spaghetti." }
      ],
      questions: [
        { id: "r-pron-ci", type: "multiple-choice", prompt: "In 'ciao', the c sounds like...", answer: "ch", options: ["ch", "k", "g", "s"] },
        { id: "r-pron-che", type: "multiple-choice", prompt: "In 'Michele', ch sounds like...", answer: "k", options: ["k", "ch", "j", "sh"] },
        { id: "r-pron-gi", type: "multiple-choice", prompt: "In 'Giulia', g sounds like...", answer: "j", options: ["j", "hard g", "k", "s"] },
        { id: "r-pron-ghi", type: "multiple-choice", prompt: "In 'funghi', gh sounds like...", answer: "hard g", options: ["hard g", "j", "ch", "sh"] }
      ]
    }
  ]
};
