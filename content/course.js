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
      status: "stub",
      summary: "Numbers, days of the week, months, telling the time, and giving dates.",
      words: []
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
      status: "stub",
      summary: "Rooms and objects: kitchen, living room, bathroom, bedroom, and the things in them.",
      words: []
    },
    {
      id: "family-people",
      title: "Family & people",
      status: "stub",
      summary: "Family members and words to describe people.",
      words: []
    },
    {
      id: "food-drink",
      title: "Food, drink & the restaurant",
      status: "stub",
      summary: "Food, drinks, meals, and ordering in a café or restaurant.",
      words: []
    },
    {
      id: "city-directions",
      title: "The city & directions",
      status: "stub",
      summary: "Places in town and how to ask for and give directions.",
      words: []
    },
    {
      id: "travel",
      title: "Travel",
      status: "stub",
      summary: "Station, ticket, luggage, and useful phrases for finding your way when travelling.",
      words: []
    },
    {
      id: "shopping",
      title: "Shopping & money",
      status: "stub",
      summary: "Shops, prices, sizes, and 'how much is it?'.",
      words: []
    },
    {
      id: "clothing",
      title: "Clothes",
      status: "stub",
      summary: "Clothes and accessories.",
      words: []
    },
    {
      id: "body-health",
      title: "Body & health",
      status: "stub",
      summary: "Body parts, at the doctor, and basic symptoms.",
      words: []
    },
    {
      id: "weather-seasons",
      title: "Weather & seasons",
      status: "stub",
      summary: "Weather, seasons, and temperature.",
      words: []
    },
    {
      id: "jobs",
      title: "Jobs",
      status: "stub",
      summary: "Professions and workplaces.",
      words: []
    },
    {
      id: "daily-routine",
      title: "Daily routine",
      status: "stub",
      summary: "Everyday actions through the day. (Pairs with Reflexive verbs.)",
      words: []
    },
    {
      id: "colors",
      title: "Colors",
      status: "stub",
      summary: "Colors, and how they agree with the noun.",
      words: []
    },
    {
      id: "feelings-adjectives",
      title: "Feelings & descriptions",
      status: "stub",
      summary: "Moods and common descriptive adjectives.",
      words: []
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
