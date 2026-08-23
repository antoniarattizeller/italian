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
      exercises: [
        {
          prompt: "Scrivi il pronome soggetto giusto: ___ sono Anna (I), ___ siete studenti (you all), ___ è mia sorella (she), ___ siamo amici (we).",
          reveal: {
            body: ["io sono Anna, voi siete studenti, lei è mia sorella, noi siamo amici.", "Ricorda: spesso in italiano il pronome si può togliere, perché il verbo mostra già la persona."]
          }
        }
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
      status: "ready",
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
      status: "ready",
      summary: "Masculine/feminine endings, useful patterns, and how singular nouns become plural.",
      sections: [
        {
          title: "Singular gender",
          body: [
            "Nouns ending in -o are normally masculine: libro.",
            "Nouns ending in -a are normally feminine: penna.",
            "Nouns ending in -e can be masculine or feminine: studente (m), lezione (f).",
            "Useful patterns: -zione words are usually feminine (lezione, soluzione); -ore words are usually masculine (proiettore)."
          ]
        },
        {
          title: "Making the plural",
          body: [
            "Masculine -o becomes -i: libro -> libri.",
            "Feminine -a becomes -e: penna -> penne.",
            "Nouns in -e (either gender) become -i: studente -> studenti, lezione -> lezioni.",
            "Nouns with a final stressed vowel (città) or foreign words (bar, sport) do not change in the plural: la città -> le città."
          ]
        }
      ],
      tables: [
        {
          title: "Singular to plural",
          columns: ["Ending", "Singular", "Plural"],
          rows: [
            ["-o (m)", "il libro", "i libri"],
            ["-a (f)", "la penna", "le penne"],
            ["-e (m)", "lo studente", "gli studenti"],
            ["-e (f)", "la lezione", "le lezioni"],
            ["stressed vowel", "la città", "le città"]
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
        { it: "Il libro è sul tavolo; i libri sono nello zaino.", en: "The book is on the table; the books are in the backpack.", de: "Das Buch ist auf dem Tisch; die Bücher sind im Rucksack." },
        { it: "Le lezioni cominciano alle nove.", en: "The lessons start at nine.", de: "Der Unterricht beginnt um neun." }
      ],
      exercises: [
        {
          prompt: "Metti al plurale (con l'articolo): il libro, la penna, lo studente, la lezione, la città.",
          reveal: {
            body: ["i libri, le penne, gli studenti, le lezioni, le città."],
            examples: [{ it: "Le città italiane sono belle." }]
          }
        }
      ],
      questions: [
        { id: "g-gender-libro", type: "multiple-choice", prompt: "What is the usual gender of nouns ending in -o, like libro?", answer: "masculine", options: ["masculine", "feminine", "always plural", "formal"] },
        { id: "g-gender-zione", type: "multiple-choice", prompt: "Words ending in -zione, like lezione, are usually...", answer: "feminine", options: ["feminine", "masculine", "verbs", "pronouns"] },
        { id: "g-plural-penna", type: "typed", prompt: "Give the plural of 'la penna' (with article).", answer: "le penne", accepted: ["le penne"] },
        { id: "g-plural-lezione", type: "typed", prompt: "Give the plural of 'la lezione' (with article).", answer: "le lezioni", accepted: ["le lezioni"] },
        { id: "g-plural-citta", type: "multiple-choice", prompt: "What is the plural of 'città'?", answer: "città", options: ["città", "cittàe", "cittài", "citte"], explanation: "Nouns with a final stressed vowel don't change." }
      ]
    },
    {
      id: "articoli",
      title: "Articles (the / a)",
      stage: 1,
      level: "A2",
      status: "ready",
      summary: "Definite (il, lo, la, l', i, gli, le) and indefinite (un, uno, una, un') articles and how they change with the next word.",
      sections: [
        {
          title: "The definite article (the)",
          body: [
            "Italian has seven words for 'the'. The form depends on gender, number, and the first sound of the next word.",
            "Masculine: il before most consonants (il libro); lo before s+consonant, z, gn, ps, y (lo studente, lo zaino); l' before a vowel (l'amico).",
            "Masculine plural: i (i libri); gli where the singular was lo or l' (gli studenti, gli amici).",
            "Feminine: la before a consonant (la casa); l' before a vowel (l'amica). Plural is always le (le case, le amiche)."
          ]
        },
        {
          title: "The indefinite article (a / an)",
          body: [
            "Masculine: un before a vowel or most consonants (un amico, un libro); uno before s+consonant, z, gn, ps, y (uno studente, uno zaino).",
            "Feminine: una before a consonant (una casa); un' before a vowel (un'amica).",
            "The indefinite article has no plural; for 'some' Italian uses di + article (dei, degli, delle) or just the bare noun."
          ]
        }
      ],
      tables: [
        {
          title: "Definite article",
          columns: ["", "Masculine", "Feminine"],
          rows: [
            ["before consonant", "il (il libro)", "la (la casa)"],
            ["before s+cons., z...", "lo (lo zaino)", "la (la stazione)"],
            ["before vowel", "l' (l'amico)", "l' (l'amica)"],
            ["plural", "i / gli", "le"]
          ]
        },
        {
          title: "Indefinite article",
          columns: ["", "Masculine", "Feminine"],
          rows: [
            ["before consonant", "un (un libro)", "una (una casa)"],
            ["before s+cons., z...", "uno (uno zaino)", "una (una studentessa)"],
            ["before vowel", "un (un amico)", "un' (un'amica)"]
          ]
        }
      ],
      examples: [
        { it: "Il libro è sul tavolo, e lo zaino è per terra.", en: "The book is on the table, and the backpack is on the floor.", de: "Das Buch ist auf dem Tisch, und der Rucksack ist auf dem Boden." },
        { it: "Gli studenti leggono un libro.", en: "The students are reading a book.", de: "Die Studenten lesen ein Buch." },
        { it: "Vorrei un caffè e un'acqua, per favore.", en: "I would like a coffee and a water, please.", de: "Ich möchte einen Kaffee und ein Wasser, bitte." }
      ],
      exercises: [
        {
          prompt: "Scrivi l'articolo determinativo (il, lo, la, l', i, gli, le) davanti a queste parole: ___ zaino, ___ amico, ___ studente, ___ casa, ___ amiche, ___ libri.",
          reveal: {
            body: ["lo zaino, l'amico, lo studente, la casa, le amiche, i libri."],
            examples: [{ it: "Gli amici di Marco sono simpatici." }]
          }
        },
        {
          prompt: "Scrivi l'articolo indeterminativo (un, uno, una, un') davanti a: ___ libro, ___ zaino, ___ amica, ___ studentessa.",
          reveal: {
            body: ["un libro, uno zaino, un'amica, una studentessa."]
          }
        }
      ],
      questions: [
        { id: "g-art-zaino", type: "multiple-choice", prompt: "Which definite article goes with 'zaino'?", answer: "lo", options: ["lo", "il", "l'", "gli"], explanation: "z takes lo." },
        { id: "g-art-amico", type: "multiple-choice", prompt: "Which definite article goes with 'amico'?", answer: "l'", options: ["l'", "il", "lo", "la"], explanation: "Before a vowel, il/lo become l'." },
        { id: "g-art-plural-libro", type: "typed", prompt: "Give the plural with article of 'il libro'.", answer: "i libri", accepted: ["i libri"] },
        { id: "g-art-plural-studente", type: "typed", prompt: "Give the plural with article of 'lo studente'.", answer: "gli studenti", accepted: ["gli studenti"] },
        { id: "g-art-indef-studente", type: "multiple-choice", prompt: "Which indefinite article goes with 'studente'?", answer: "uno", options: ["uno", "un", "una", "un'"], explanation: "s+consonant takes uno." },
        { id: "g-art-indef-amica", type: "multiple-choice", prompt: "Which indefinite article goes with 'amica'?", answer: "un'", options: ["un'", "una", "un", "uno"], explanation: "Feminine before a vowel takes un'." }
      ]
    },
    {
      id: "presente",
      title: "Present tense (regular verbs)",
      stage: 1,
      level: "A2",
      status: "ready",
      summary: "Present indicative of regular -are, -ere, and -ire verbs (parlare, prendere, dormire, capire).",
      sections: [
        {
          title: "Three groups",
          body: [
            "Italian verbs end in -are, -ere, or -ire. To conjugate, drop the ending and add the endings for that group and person.",
            "-are (parlare): parlo, parli, parla, parliamo, parlate, parlano.",
            "-ere (prendere): prendo, prendi, prende, prendiamo, prendete, prendono.",
            "-ire (dormire): dormo, dormi, dorme, dormiamo, dormite, dormono."
          ]
        },
        {
          title: "The -isc- group",
          body: [
            "Many -ire verbs add -isc- in all singular forms and the third person plural: capire -> capisco, capisci, capisce, capiamo, capite, capiscono.",
            "Other common -isc- verbs: finire (to finish), preferire (to prefer), pulire (to clean).",
            "The present tense also covers English 'I do / I am doing': parlo = I speak, I do speak, I am speaking."
          ]
        }
      ],
      tables: [
        {
          title: "Regular present endings",
          columns: ["Person", "-are (parlare)", "-ere (prendere)", "-ire (dormire)"],
          rows: [
            ["io", "parlo", "prendo", "dormo"],
            ["tu", "parli", "prendi", "dormi"],
            ["lui/lei", "parla", "prende", "dorme"],
            ["noi", "parliamo", "prendiamo", "dormiamo"],
            ["voi", "parlate", "prendete", "dormite"],
            ["loro", "parlano", "prendono", "dormono"]
          ]
        }
      ],
      examples: [
        { it: "Parlo italiano e studio ogni giorno.", en: "I speak Italian and I study every day.", de: "Ich spreche Italienisch und lerne jeden Tag." },
        { it: "Prendiamo un caffè al bar.", en: "We have a coffee at the bar.", de: "Wir trinken einen Kaffee in der Bar." },
        { it: "I bambini dormono e non capiscono.", en: "The children are sleeping and don't understand.", de: "Die Kinder schlafen und verstehen nicht." }
      ],
      exercises: [
        {
          prompt: "Coniuga 'mangiare', 'scrivere' e 'dormire' al presente per tutte le sei persone. Poi rivela per controllare.",
          reveal: {
            tables: [
              {
                title: "Modello",
                columns: ["Persona", "mangiare", "scrivere", "dormire"],
                rows: [
                  ["io", "mangio", "scrivo", "dormo"],
                  ["tu", "mangi", "scrivi", "dormi"],
                  ["lui/lei", "mangia", "scrive", "dorme"],
                  ["noi", "mangiamo", "scriviamo", "dormiamo"],
                  ["voi", "mangiate", "scrivete", "dormite"],
                  ["loro", "mangiano", "scrivono", "dormono"]
                ]
              }
            ]
          }
        },
        {
          prompt: "Scrivi tre frasi su una tua giornata usando verbi regolari al presente (per esempio: lavorare, leggere, partire).",
          hint: "Una frase con -are, una con -ere e una con -ire.",
          reveal: {
            examples: [
              { it: "La mattina lavoro in ufficio." },
              { it: "Il pomeriggio leggo un libro." },
              { it: "La sera parto per la palestra." }
            ]
          }
        }
      ],
      questions: [
        { id: "g-pres-parlare-noi", type: "typed", prompt: "Complete: noi (parlare) ___", answer: "parliamo", accepted: ["parliamo"] },
        { id: "g-pres-prendere-loro", type: "typed", prompt: "Complete: loro (prendere) ___", answer: "prendono", accepted: ["prendono"] },
        { id: "g-pres-dormire-tu", type: "typed", prompt: "Complete: tu (dormire) ___", answer: "dormi", accepted: ["dormi"] },
        { id: "g-pres-capire-io", type: "typed", prompt: "Complete: io (capire) ___", answer: "capisco", accepted: ["capisco"] },
        { id: "g-pres-are-loro", type: "multiple-choice", prompt: "What is the loro ending for regular -are verbs?", answer: "-ano", options: ["-ano", "-ono", "-ete", "-iamo"], explanation: "parlano, mangiano, lavorano." },
        { id: "g-pres-gap-lavora", type: "typed", prompt: "Completa al presente: Ogni giorno Marco ___ (lavorare) in ufficio.", answer: "lavora", accepted: ["lavora"] },
        { id: "g-pres-gap-scrivono", type: "typed", prompt: "Completa al presente: I bambini ___ (scrivere) una lettera.", answer: "scrivono", accepted: ["scrivono"] },
        { id: "g-pres-gap-capisci", type: "typed", prompt: "Completa al presente: Tu ___ (capire) l'italiano?", answer: "capisci", accepted: ["capisci"], explanation: "capire è un verbo in -isc-." }
      ]
    },
    {
      id: "aggettivi",
      title: "Adjectives & agreement",
      stage: 1,
      level: "A2",
      status: "ready",
      summary: "Adjective endings agree with the noun in gender and number, and where the adjective goes.",
      sections: [
        {
          title: "Two kinds of adjective",
          body: [
            "Adjectives agree with the noun in gender and number.",
            "Adjectives ending in -o have four forms: -o (m.sg), -a (f.sg), -i (m.pl), -e (f.pl): alto, alta, alti, alte.",
            "Adjectives ending in -e have two forms: -e (singular, both genders), -i (plural, both genders): grande, grandi."
          ]
        },
        {
          title: "Position",
          body: [
            "Most adjectives go after the noun: una macchina rossa, un libro interessante.",
            "A few very common ones usually go before the noun: bello, brutto, buono, cattivo, grande, piccolo, giovane, vecchio, nuovo.",
            "Colours, shapes, and nationalities always follow the noun: una bandiera italiana, un tavolo rotondo."
          ]
        }
      ],
      tables: [
        {
          title: "Agreement",
          columns: ["", "Masculine", "Feminine"],
          rows: [
            ["singular (-o type)", "alto", "alta"],
            ["plural (-o type)", "alti", "alte"],
            ["singular (-e type)", "grande", "grande"],
            ["plural (-e type)", "grandi", "grandi"]
          ]
        }
      ],
      examples: [
        { it: "Un ragazzo alto e una ragazza alta.", en: "A tall boy and a tall girl.", de: "Ein großer Junge und ein großes Mädchen." },
        { it: "Le case sono grandi e nuove.", en: "The houses are big and new.", de: "Die Häuser sind groß und neu." },
        { it: "Ho una macchina rossa italiana.", en: "I have a red Italian car.", de: "Ich habe ein rotes italienisches Auto." }
      ],
      exercises: [
        {
          prompt: "Accorda l'aggettivo tra parentesi: le case (bello) ___, i ragazzi (italiano) ___, una macchina (verde) ___, due libri (interessante) ___.",
          reveal: {
            body: ["le case belle, i ragazzi italiani, una macchina verde, due libri interessanti."],
            examples: [{ it: "Le ragazze italiane sono simpatiche." }]
          }
        },
        {
          prompt: "Descrivi la tua stanza con tre aggettivi, facendo attenzione all'accordo.",
          reveal: {
            examples: [
              { it: "La mia stanza è piccola ma luminosa." },
              { it: "Ho due finestre grandi e una lampada gialla." }
            ]
          }
        }
      ],
      questions: [
        { id: "g-adj-case-belle", type: "typed", prompt: "Agree the adjective: le case (bello) ___", answer: "belle", accepted: ["belle"] },
        { id: "g-adj-ragazzi-it", type: "typed", prompt: "Agree the adjective: i ragazzi (italiano) ___", answer: "italiani", accepted: ["italiani"] },
        { id: "g-adj-e-type", type: "multiple-choice", prompt: "How many forms does an -e adjective like 'grande' have?", answer: "two", options: ["two", "four", "one", "three"], explanation: "grande / grandi." },
        { id: "g-adj-position", type: "multiple-choice", prompt: "Where does a colour adjective normally go?", answer: "after the noun", options: ["after the noun", "before the noun", "either, no change", "it never changes"], explanation: "una macchina rossa." }
      ]
    },

    // ---------------------------------------------------------------- Stage 2
    {
      id: "riflessivi",
      title: "Reflexive verbs",
      stage: 2,
      level: "A2",
      status: "ready",
      summary: "Verbs like chiamarsi and alzarsi that use the pronouns mi/ti/si/ci/vi/si.",
      sections: [
        {
          title: "How they work",
          body: [
            "A reflexive verb pairs a reflexive pronoun with the verb: the action comes back to the subject. Mi chiamo = I call myself.",
            "The reflexive pronouns are mi, ti, si, ci, vi, si. They go before the verb: mi alzo, ti alzi, si alza...",
            "In the infinitive the pronoun is attached at the end and the -e drops: alzarsi, svegliarsi, lavarsi.",
            "This pattern drives most daily-routine verbs (see the Daily routine vocabulary)."
          ]
        }
      ],
      tables: [
        {
          title: "alzarsi (to get up)",
          columns: ["Person", "Reflexive present"],
          rows: [
            ["io", "mi alzo"],
            ["tu", "ti alzi"],
            ["lui/lei", "si alza"],
            ["noi", "ci alziamo"],
            ["voi", "vi alzate"],
            ["loro", "si alzano"]
          ]
        }
      ],
      examples: [
        { it: "Mi chiamo Luca. E tu, come ti chiami?", en: "My name is Luca. And you, what is your name?", de: "Ich heisse Luca. Und du, wie heisst du?" },
        { it: "La mattina mi sveglio alle sette e mi alzo subito.", en: "In the morning I wake up at seven and get up right away.", de: "Morgens wache ich um sieben auf und stehe sofort auf." },
        { it: "I bambini si lavano le mani prima di cena.", en: "The children wash their hands before dinner.", de: "Die Kinder waschen sich vor dem Abendessen die Hände." }
      ],
      exercises: [
        {
          prompt: "Coniuga 'svegliarsi' al presente per tutte le sei persone.",
          reveal: {
            tables: [
              {
                title: "svegliarsi",
                columns: ["Persona", "svegliarsi"],
                rows: [["io", "mi sveglio"], ["tu", "ti svegli"], ["lui/lei", "si sveglia"], ["noi", "ci svegliamo"], ["voi", "vi svegliate"], ["loro", "si svegliano"]]
              }
            ]
          }
        },
        {
          prompt: "Descrivi la tua mattina con quattro verbi riflessivi (svegliarsi, alzarsi, lavarsi, vestirsi).",
          reveal: {
            examples: [
              { it: "Mi sveglio alle sette." },
              { it: "Mi alzo e mi lavo." },
              { it: "Poi mi vesto e faccio colazione." }
            ]
          }
        }
      ],
      questions: [
        { id: "g-chiamarsi-loro", type: "typed", prompt: "Complete with chiamarsi: loro ___", answer: "si chiamano", accepted: ["si chiamano"] },
        { id: "g-refl-alzarsi-io", type: "typed", prompt: "Complete with alzarsi: io ___", answer: "mi alzo", accepted: ["mi alzo"] },
        { id: "g-refl-lavarsi-noi", type: "typed", prompt: "Complete with lavarsi: noi ci ___", answer: "laviamo", accepted: ["laviamo", "ci laviamo"] },
        { id: "g-refl-pronoun", type: "multiple-choice", prompt: "Which reflexive pronoun goes with 'tu'?", answer: "ti", options: ["ti", "mi", "si", "vi"] }
      ]
    },
    {
      id: "verbi-modali",
      title: "Modal verbs (potere, dovere, volere)",
      stage: 2,
      level: "A2",
      status: "ready",
      summary: "can / must / want + infinitive: posso, devo, voglio ... plus the polite vorrei.",
      sections: [
        {
          title: "Modal + infinitive",
          body: [
            "Modal verbs are followed directly by another verb in the infinitive: posso andare, devo studiare, voglio mangiare.",
            "potere = can / to be able to / may. dovere = must / to have to. volere = to want.",
            "All three are irregular in the present tense."
          ]
        },
        {
          title: "Being polite",
          body: [
            "For polite requests, use the conditional vorrei (I would like) instead of voglio (I want): Vorrei un caffè.",
            "potere is also used to ask permission politely: Posso entrare? (May I come in?)"
          ]
        }
      ],
      tables: [
        {
          title: "Present tense",
          columns: ["Person", "potere", "dovere", "volere"],
          rows: [
            ["io", "posso", "devo", "voglio"],
            ["tu", "puoi", "devi", "vuoi"],
            ["lui/lei", "può", "deve", "vuole"],
            ["noi", "possiamo", "dobbiamo", "vogliamo"],
            ["voi", "potete", "dovete", "volete"],
            ["loro", "possono", "devono", "vogliono"]
          ]
        }
      ],
      examples: [
        { it: "Non posso venire stasera, devo studiare.", en: "I can't come tonight, I have to study.", de: "Ich kann heute Abend nicht kommen, ich muss lernen." },
        { it: "Vogliamo prenotare un tavolo per due.", en: "We want to book a table for two.", de: "Wir möchten einen Tisch für zwei reservieren." },
        { it: "Scusi, posso pagare con la carta?", en: "Excuse me, can I pay by card?", de: "Entschuldigung, kann ich mit Karte zahlen?" }
      ],
      exercises: [
        {
          prompt: "Coniuga 'potere', 'dovere' e 'volere' al presente per tutte le persone.",
          reveal: {
            tables: [
              {
                title: "Modello",
                columns: ["Persona", "potere", "dovere", "volere"],
                rows: [["io", "posso", "devo", "voglio"], ["tu", "puoi", "devi", "vuoi"], ["lui/lei", "può", "deve", "vuole"], ["noi", "possiamo", "dobbiamo", "vogliamo"], ["voi", "potete", "dovete", "volete"], ["loro", "possono", "devono", "vogliono"]]
              }
            ]
          }
        },
        {
          prompt: "Scrivi tre frasi: una cosa che vuoi fare, una che devi fare e una che non puoi fare oggi.",
          reveal: {
            examples: [
              { it: "Oggi voglio andare al cinema." },
              { it: "Devo finire un lavoro importante." },
              { it: "Non posso uscire perché piove." }
            ]
          }
        }
      ],
      questions: [
        { id: "g-modal-potere-io", type: "typed", prompt: "Complete with potere: io ___", answer: "posso", accepted: ["posso"] },
        { id: "g-modal-dovere-noi", type: "typed", prompt: "Complete with dovere: noi ___", answer: "dobbiamo", accepted: ["dobbiamo"] },
        { id: "g-modal-volere-loro", type: "typed", prompt: "Complete with volere: loro ___", answer: "vogliono", accepted: ["vogliono"] },
        { id: "g-modal-after", type: "multiple-choice", prompt: "What form follows a modal verb?", answer: "the infinitive", options: ["the infinitive", "the gerund", "the past participle", "another conjugated verb"], explanation: "posso andare, devo studiare." },
        { id: "g-modal-polite", type: "multiple-choice", prompt: "What is the polite way to say 'I want a coffee'?", answer: "Vorrei un caffè.", options: ["Vorrei un caffè.", "Voglio un caffè.", "Devo un caffè.", "Posso un caffè."], explanation: "vorrei is the polite conditional." }
      ]
    },
    {
      id: "stare-gerundio",
      title: "Present continuous (stare + gerundio)",
      stage: 2,
      level: "A2",
      status: "ready",
      summary: "Describing what is happening right now: sto mangiando, stai leggendo.",
      sections: [
        {
          title: "How to form it",
          body: [
            "Use stare in the present + the gerundio to say what is happening right now: Sto mangiando = I am eating.",
            "Gerundio endings: -are verbs -> -ando (parlare -> parlando); -ere and -ire verbs -> -endo (prendere -> prendendo, dormire -> dormendo).",
            "A few are irregular: fare -> facendo, bere -> bevendo, dire -> dicendo."
          ]
        },
        {
          title: "When to use it",
          body: [
            "Use it only for an action in progress at this moment: Cosa stai facendo? Sto lavorando.",
            "For habits or general facts, use the normal present instead: Lavoro in banca (not sto lavorando)."
          ]
        }
      ],
      tables: [
        {
          title: "stare + gerundio",
          columns: ["Person", "stare", "example"],
          rows: [
            ["io", "sto", "sto parlando"],
            ["tu", "stai", "stai leggendo"],
            ["lui/lei", "sta", "sta dormendo"],
            ["noi", "stiamo", "stiamo mangiando"],
            ["voi", "state", "state facendo"],
            ["loro", "stanno", "stanno bevendo"]
          ]
        }
      ],
      examples: [
        { it: "Cosa stai facendo? Sto studiando.", en: "What are you doing? I'm studying.", de: "Was machst du gerade? Ich lerne." },
        { it: "I bambini stanno dormendo, non fare rumore.", en: "The children are sleeping, don't make noise.", de: "Die Kinder schlafen, mach keinen Lärm." }
      ],
      exercises: [
        {
          prompt: "Trasforma al presente continuo (stare + gerundio): io (mangiare), tu (leggere), noi (dormire), loro (fare).",
          reveal: {
            body: ["sto mangiando, stai leggendo, stiamo dormendo, stanno facendo."]
          }
        },
        {
          prompt: "Guarda fuori dalla finestra (o immagina una scena) e scrivi tre frasi su cosa stanno facendo le persone.",
          reveal: {
            examples: [
              { it: "Un uomo sta camminando con il cane." },
              { it: "Due bambini stanno giocando a palla." },
              { it: "Una signora sta parlando al telefono." }
            ]
          }
        }
      ],
      questions: [
        { id: "g-ger-mangiare", type: "typed", prompt: "Give the gerundio of 'mangiare'.", answer: "mangiando", accepted: ["mangiando"] },
        { id: "g-ger-prendere", type: "typed", prompt: "Give the gerundio of 'prendere'.", answer: "prendendo", accepted: ["prendendo"] },
        { id: "g-ger-io-parlare", type: "typed", prompt: "Say 'I am speaking' (stare + gerundio).", answer: "sto parlando", accepted: ["sto parlando"] },
        { id: "g-ger-fare", type: "multiple-choice", prompt: "What is the gerundio of the irregular verb 'fare'?", answer: "facendo", options: ["facendo", "fando", "faciendo", "facente"] }
      ]
    },
    {
      id: "piacere",
      title: "Piacere (to like)",
      stage: 2,
      level: "A2",
      status: "ready",
      summary: "mi piace + singular/infinitive vs. mi piacciono + plural; and the pronouns it uses.",
      sections: [
        {
          title: "A different way of thinking",
          body: [
            "piacere does not work like English 'to like'. It means 'to be pleasing to': Mi piace il caffè literally means 'Coffee is pleasing to me'.",
            "So the thing you like is the subject, and the verb agrees with it: mi piace + singular or infinitive, mi piacciono + plural.",
            "Mi piace la pizza. Mi piace viaggiare. Mi piacciono i libri."
          ]
        },
        {
          title: "Who likes it",
          body: [
            "The person who likes is shown by an indirect pronoun: mi, ti, gli (to him), le (to her), ci, vi, gli (to them).",
            "With a name, use a: A Marco piace il calcio = Gli piace il calcio.",
            "Negative: Non mi piace il freddo. To agree: Anche a me! To disagree: A me no."
          ]
        }
      ],
      tables: [
        {
          title: "mi piace / mi piacciono",
          columns: ["Likes what", "Verb", "Example"],
          rows: [
            ["one thing", "piace", "Mi piace la musica."],
            ["an action", "piace", "Mi piace ballare."],
            ["many things", "piacciono", "Mi piacciono i gatti."]
          ]
        }
      ],
      examples: [
        { it: "Mi piace il caffè, ma non mi piacciono i dolci.", en: "I like coffee, but I don't like sweets.", de: "Ich mag Kaffee, aber ich mag keine Süßigkeiten." },
        { it: "Ti piace viaggiare?", en: "Do you like travelling?", de: "Reist du gern?" },
        { it: "A Marco piacciono i film italiani.", en: "Marco likes Italian films.", de: "Marco mag italienische Filme." }
      ],
      exercises: [
        {
          prompt: "Completa con 'piace' o 'piacciono': Mi ___ la pizza. Mi ___ gli spaghetti. Ti ___ leggere. Non mi ___ le verdure.",
          reveal: {
            body: ["Mi piace la pizza. Mi piacciono gli spaghetti. Ti piace leggere. Non mi piacciono le verdure."]
          }
        },
        {
          prompt: "Scrivi tre cose che ti piacciono e due che non ti piacciono.",
          reveal: {
            examples: [
              { it: "Mi piace la musica italiana." },
              { it: "Mi piacciono i viaggi e i libri." },
              { it: "Non mi piace il freddo e non mi piacciono i ragni." }
            ]
          }
        }
      ],
      questions: [
        { id: "g-piace-pizza", type: "multiple-choice", prompt: "Choose: Mi ___ la pizza.", answer: "piace", options: ["piace", "piacciono", "piaci", "piaccio"], explanation: "Singular thing -> piace." },
        { id: "g-piace-libri", type: "multiple-choice", prompt: "Choose: Mi ___ i libri.", answer: "piacciono", options: ["piacciono", "piace", "piaci", "piacete"], explanation: "Plural thing -> piacciono." },
        { id: "g-piace-infinitive", type: "typed", prompt: "Say 'I like to travel'.", answer: "mi piace viaggiare", accepted: ["mi piace viaggiare"] },
        { id: "g-piace-marco", type: "multiple-choice", prompt: "'A Marco piace il calcio' can be shortened to...", answer: "Gli piace il calcio.", options: ["Gli piace il calcio.", "Le piace il calcio.", "Mi piace il calcio.", "Ci piace il calcio."], explanation: "gli = to him." }
      ]
    },
    {
      id: "ce-ci-sono",
      title: "There is / there are (c'è, ci sono)",
      stage: 2,
      level: "A2",
      status: "ready",
      summary: "Saying what exists or is present: c'è un problema, ci sono due libri.",
      sections: [
        {
          title: "c'è and ci sono",
          body: [
            "Use c'è (short for ci è) + a singular thing: C'è un problema. In cucina c'è un frigorifero.",
            "Use ci sono + a plural thing: Ci sono due libri. In classe ci sono venti studenti.",
            "They say that something exists or is present in a place."
          ]
        },
        {
          title: "Questions and negatives",
          body: [
            "Question: C'è un bagno qui? Ci sono domande?",
            "Negative: Non c'è tempo. Non ci sono problemi.",
            "Don't confuse c'è (there is) with è (it is): C'è un gatto (there is a cat) vs. È un gatto (it is a cat)."
          ]
        }
      ],
      examples: [
        { it: "Nel frigorifero c'è del latte e ci sono tre uova.", en: "In the fridge there is some milk and there are three eggs.", de: "Im Kühlschrank ist Milch und es sind drei Eier." },
        { it: "Scusi, c'è una farmacia qui vicino?", en: "Excuse me, is there a pharmacy near here?", de: "Entschuldigung, gibt es hier in der Nähe eine Apotheke?" },
        { it: "Oggi non ci sono lezioni.", en: "Today there are no lessons.", de: "Heute gibt es keinen Unterricht." }
      ],
      exercises: [
        {
          prompt: "Completa con 'c'è' o 'ci sono': In camera ___ un letto. Sul tavolo ___ due bicchieri. ___ un problema. Non ___ molte persone.",
          reveal: {
            body: ["In camera c'è un letto. Sul tavolo ci sono due bicchieri. C'è un problema. Non ci sono molte persone."]
          }
        },
        {
          prompt: "Descrivi la tua cucina: scrivi tre frasi con 'c'è' e 'ci sono'.",
          reveal: {
            examples: [
              { it: "In cucina c'è un grande frigorifero." },
              { it: "Ci sono quattro sedie intorno al tavolo." },
              { it: "Non c'è la lavastoviglie." }
            ]
          }
        }
      ],
      questions: [
        { id: "g-ce-sing", type: "multiple-choice", prompt: "Choose: ___ un problema.", answer: "C'è", options: ["C'è", "Ci sono", "È", "Ci ha"], explanation: "Singular -> c'è." },
        { id: "g-ce-plur", type: "multiple-choice", prompt: "Choose: ___ due libri sul tavolo.", answer: "Ci sono", options: ["Ci sono", "C'è", "È", "Sono"], explanation: "Plural -> ci sono." },
        { id: "g-ce-neg", type: "typed", prompt: "Say 'there is no time' in Italian.", answer: "non c'è tempo", accepted: ["non c'è tempo"] }
      ]
    },
    {
      id: "possessivi",
      title: "Possessives (my, your, ...)",
      stage: 2,
      level: "A2",
      status: "ready",
      summary: "il mio, la tua, i nostri ... — possessives agree with the thing owned and usually take an article.",
      sections: [
        {
          title: "Article + possessive + noun",
          body: [
            "A possessive agrees with the thing owned, not with the owner, and usually takes the definite article: il mio libro, la mia casa, i miei amici, le mie amiche.",
            "The forms are mio, tuo, suo, nostro, vostro, loro. All change like -o adjectives (mio/mia/miei/mie) except loro, which never changes: il loro libro, la loro casa, i loro amici.",
            "suo/sua means his, her, or your (formal) — it agrees with the thing, not the owner: la sua macchina can be his or her car."
          ]
        },
        {
          title: "The family exception",
          body: [
            "With a singular family member you drop the article: mio padre, mia madre, tua sorella, suo fratello.",
            "But keep the article in the plural (i miei fratelli), with loro (il loro padre), and with an added adjective (la mia sorella piccola)."
          ]
        }
      ],
      tables: [
        {
          title: "Possessive forms",
          columns: ["Owner", "m.sg", "f.sg", "m.pl", "f.pl"],
          rows: [
            ["my", "mio", "mia", "miei", "mie"],
            ["your (tu)", "tuo", "tua", "tuoi", "tue"],
            ["his/her/your", "suo", "sua", "suoi", "sue"],
            ["our", "nostro", "nostra", "nostri", "nostre"],
            ["your (voi)", "vostro", "vostra", "vostri", "vostre"],
            ["their", "loro", "loro", "loro", "loro"]
          ]
        }
      ],
      examples: [
        { it: "Il mio libro è sul tavolo e le mie penne sono nello zaino.", en: "My book is on the table and my pens are in the backpack.", de: "Mein Buch ist auf dem Tisch und meine Stifte sind im Rucksack." },
        { it: "Mia sorella abita con i suoi amici.", en: "My sister lives with her friends.", de: "Meine Schwester wohnt mit ihren Freunden." },
        { it: "La loro casa è grande.", en: "Their house is big.", de: "Ihr Haus ist groß." }
      ],
      exercises: [
        {
          prompt: "Completa con l'articolo e il possessivo giusti: ___ (my) libri, ___ (your, tu) casa, ___ (our) amici, ___ (my) madre.",
          reveal: {
            body: ["i miei libri, la tua casa, i nostri amici, mia madre (senza articolo: familiare singolare)."]
          }
        },
        {
          prompt: "Scrivi tre frasi sulla tua famiglia usando i possessivi (ricorda l'eccezione dei familiari).",
          reveal: {
            examples: [
              { it: "Mia madre si chiama Anna." },
              { it: "I miei fratelli sono più grandi di me." },
              { it: "La nostra casa è vicino al centro." }
            ]
          }
        }
      ],
      questions: [
        { id: "g-poss-libri", type: "typed", prompt: "Say 'my books' (with article).", answer: "i miei libri", accepted: ["i miei libri"] },
        { id: "g-poss-agree", type: "multiple-choice", prompt: "A possessive agrees with...", answer: "the thing owned", options: ["the thing owned", "the owner", "nothing", "the verb"], explanation: "la sua macchina agrees with macchina." },
        { id: "g-poss-family", type: "multiple-choice", prompt: "Which is correct?", answer: "mia madre", options: ["mia madre", "la mia madre", "mie madre", "il mia madre"], explanation: "Singular family member drops the article." },
        { id: "g-poss-loro", type: "multiple-choice", prompt: "How does 'loro' (their) change for gender/number?", answer: "it never changes", options: ["it never changes", "loro/lora/lori/lore", "like mio", "only in plural"], explanation: "loro is invariable." }
      ]
    },
    {
      id: "dimostrativi",
      title: "Demonstratives (questo / quello)",
      stage: 2,
      level: "A2",
      status: "ready",
      summary: "this and that, and how questo and quello change form.",
      sections: [
        {
          title: "questo (this)",
          body: [
            "questo points to something near the speaker. It has four forms like an -o adjective: questo, questa, questi, queste.",
            "Questo libro, questa casa, questi ragazzi, queste ragazze.",
            "Before a vowel, questo/questa often shorten to quest': quest'anno, quest'amica."
          ]
        },
        {
          title: "quello (that)",
          body: [
            "quello points to something far from the speaker. Before a noun it changes like the definite article (il/lo/la/l'/i/gli/le).",
            "quel libro (il), quello studente (lo), quell'amico (l'), quella casa (la), quei libri (i), quegli studenti (gli), quelle case (le).",
            "So the first letters of the next word decide the form, exactly like articles."
          ]
        }
      ],
      tables: [
        {
          title: "quello before a noun",
          columns: ["Like article", "Demonstrative", "Example"],
          rows: [
            ["il", "quel", "quel libro"],
            ["lo", "quello", "quello zaino"],
            ["l' (m)", "quell'", "quell'amico"],
            ["la", "quella", "quella casa"],
            ["i", "quei", "quei libri"],
            ["gli", "quegli", "quegli studenti"],
            ["le", "quelle", "quelle case"]
          ]
        }
      ],
      examples: [
        { it: "Questo caffè è buono, ma quel dolce è troppo dolce.", en: "This coffee is good, but that cake is too sweet.", de: "Dieser Kaffee ist gut, aber jener Kuchen ist zu süß." },
        { it: "Quegli studenti sono simpatici.", en: "Those students are nice.", de: "Jene Studenten sind sympathisch." }
      ],
      exercises: [
        {
          prompt: "Completa con la forma giusta di 'quello': ___ zaino, ___ amici, ___ casa, ___ studenti, ___ libro.",
          reveal: {
            body: ["quello zaino, quegli amici, quella casa, quegli studenti, quel libro."]
          }
        },
        {
          prompt: "In un negozio, indica quattro oggetti usando 'questo' (vicino) e 'quello' (lontano).",
          reveal: {
            examples: [
              { it: "Vorrei questa maglietta, non quella." },
              { it: "Mi piacciono questi pantaloni e quelle scarpe." }
            ]
          }
        }
      ],
      questions: [
        { id: "g-dim-questi", type: "typed", prompt: "Say 'these boys' (questo + ragazzi).", answer: "questi ragazzi", accepted: ["questi ragazzi"] },
        { id: "g-dim-zaino", type: "multiple-choice", prompt: "Choose: ___ zaino (that).", answer: "quello", options: ["quello", "quel", "quegli", "quella"], explanation: "z takes lo, so quello." },
        { id: "g-dim-studenti", type: "multiple-choice", prompt: "Choose: ___ studenti (those).", answer: "quegli", options: ["quegli", "quei", "quelli", "quelle"], explanation: "gli -> quegli." },
        { id: "g-dim-libro", type: "multiple-choice", prompt: "Choose: ___ libro (that).", answer: "quel", options: ["quel", "quello", "quell'", "quei"], explanation: "il -> quel." }
      ]
    },
    {
      id: "quantificatori",
      title: "Quantifiers (molto, poco, troppo)",
      stage: 2,
      level: "A2",
      status: "ready",
      summary: "How much / how many: molto, poco, troppo, tanto, tutto — as adverbs and as adjectives.",
      sections: [
        {
          title: "Adjective vs. adverb",
          body: [
            "molto, poco, troppo, tanto can be adjectives OR adverbs, and this decides whether they change.",
            "As an adjective (before a noun) they agree: molti libri, molta acqua, troppe persone, poche idee.",
            "As an adverb (with a verb or an adjective) they never change: mangio molto, è troppo caro, lavoro poco, sono tanto stanca."
          ]
        },
        {
          title: "tutto",
          body: [
            "tutto (all/whole) agrees and is followed by the article: tutto il giorno, tutta la notte, tutti i giorni, tutte le settimane.",
            "tutti/tutte alone can mean 'everybody': Tutti sono qui."
          ]
        }
      ],
      tables: [
        {
          title: "molto",
          columns: ["Use", "Form", "Example"],
          rows: [
            ["adjective + noun", "agrees", "molti amici, molta fame"],
            ["adverb + verb", "invariable", "studio molto"],
            ["adverb + adjective", "invariable", "molto bello"]
          ]
        }
      ],
      examples: [
        { it: "Ho molti amici, ma poco tempo libero.", en: "I have many friends, but little free time.", de: "Ich habe viele Freunde, aber wenig Freizeit." },
        { it: "Questo ristorante è troppo caro.", en: "This restaurant is too expensive.", de: "Dieses Restaurant ist zu teuer." },
        { it: "Studio tutti i giorni.", en: "I study every day.", de: "Ich lerne jeden Tag." }
      ],
      exercises: [
        {
          prompt: "Accorda se serve: Ho (molto) ___ amici. Bevo (poco) ___ acqua. Sono (troppo) ___ stanca. Ci sono (tanto) ___ persone.",
          reveal: {
            body: ["Ho molti amici (aggettivo, accorda). Bevo poca acqua (aggettivo). Sono troppo stanca (avverbio, invariabile). Ci sono tante persone (aggettivo)."]
          }
        },
        {
          prompt: "Scrivi due frasi con 'molto' come aggettivo e due con 'molto' come avverbio.",
          reveal: {
            examples: [
              { it: "Ho molti libri e molte penne. (aggettivo)" },
              { it: "Mangio molto e dormo molto. (avverbio)" }
            ]
          }
        }
      ],
      questions: [
        { id: "g-quant-amici", type: "typed", prompt: "Agree: (molto) ___ amici", answer: "molti", accepted: ["molti"] },
        { id: "g-quant-acqua", type: "typed", prompt: "Agree: (poco) ___ acqua", answer: "poca", accepted: ["poca"] },
        { id: "g-quant-adverb", type: "multiple-choice", prompt: "In 'è troppo caro', does 'troppo' change?", answer: "no, it's an adverb", options: ["no, it's an adverb", "yes, troppa", "yes, troppi", "yes, troppe"], explanation: "With an adjective it's an invariable adverb." },
        { id: "g-quant-tutto", type: "typed", prompt: "Say 'every day' (tutto + giorno).", answer: "tutti i giorni", accepted: ["tutti i giorni"] }
      ]
    },
    {
      id: "interrogativi",
      title: "Question words",
      stage: 2,
      level: "A2",
      status: "ready",
      summary: "chi, che/cosa, dove, quando, perché, quanto, come, quale.",
      sections: [
        {
          title: "The question words",
          body: [
            "chi = who; che / che cosa / cosa = what; dove = where; quando = when; come = how; perché = why (and also 'because').",
            "quanto and quale change when they go with a noun: quanto agrees (quanti anni, quanta acqua), quale becomes quali in the plural (quale libro, quali libri).",
            "dove + è becomes dov'è: Dov'è la stazione?"
          ]
        }
      ],
      tables: [
        {
          title: "Question words",
          columns: ["Italian", "English", "Example"],
          rows: [
            ["chi", "who", "Chi è?"],
            ["che / cosa", "what", "Cosa fai?"],
            ["dove", "where", "Dove abiti?"],
            ["quando", "when", "Quando parti?"],
            ["perché", "why", "Perché studi italiano?"],
            ["come", "how", "Come stai?"],
            ["quanto", "how much/many", "Quanti anni hai?"],
            ["quale", "which", "Quale preferisci?"]
          ]
        }
      ],
      examples: [
        { it: "Dove abiti e con chi?", en: "Where do you live and with whom?", de: "Wo wohnst du und mit wem?" },
        { it: "Quanti anni hai?", en: "How old are you?", de: "Wie alt bist du?" },
        { it: "Perché studi l'italiano? Perché mi piace.", en: "Why do you study Italian? Because I like it.", de: "Warum lernst du Italienisch? Weil es mir gefällt." }
      ],
      exercises: [
        {
          prompt: "Scrivi la parola interrogativa giusta: ___ ti chiami? ___ abiti? ___ anni hai? ___ studi italiano?",
          reveal: {
            body: ["Come ti chiami? Dove abiti? Quanti anni hai? Perché studi italiano?"]
          }
        },
        {
          prompt: "Immagina di conoscere una persona nuova: scrivi cinque domande per fare la sua conoscenza.",
          reveal: {
            examples: [
              { it: "Come ti chiami?" },
              { it: "Di dove sei?" },
              { it: "Che lavoro fai?" },
              { it: "Quanti anni hai?" },
              { it: "Cosa ti piace fare nel tempo libero?" }
            ]
          }
        }
      ],
      questions: [
        { id: "g-int-who", type: "multiple-choice", prompt: "Which word means 'who'?", answer: "chi", options: ["chi", "che", "come", "dove"] },
        { id: "g-int-age", type: "typed", prompt: "Ask 'How old are you?' in Italian.", answer: "quanti anni hai", accepted: ["quanti anni hai", "quanti anni hai?"] },
        { id: "g-int-where", type: "typed", prompt: "Ask 'Where do you live?' (informal).", answer: "dove abiti", accepted: ["dove abiti", "dove abiti?"] },
        { id: "g-int-quale", type: "multiple-choice", prompt: "What is the plural of 'quale'?", answer: "quali", options: ["quali", "quale", "quanti", "quelli"] }
      ]
    },

    // ---------------------------------------------------------------- Stage 3
    {
      id: "preposizioni-semplici",
      title: "Simple prepositions",
      stage: 3,
      level: "A2",
      status: "ready",
      summary: "di, a, da, in, con, su, per, tra/fra — and their most common uses.",
      sections: [
        {
          title: "The eight prepositions",
          body: [
            "di = of / from (possession, origin, topic): il libro di Marco, sono di Roma.",
            "a = to / at (cities, time): vado a Roma, a casa, alle otto.",
            "da = from / at someone's place: vengo da Milano, vado dal medico.",
            "in = in / to (countries, rooms, transport): in Italia, in cucina, in treno."
          ]
        },
        {
          title: "The others",
          body: [
            "con = with: vengo con te. su = on / about: il libro è su tavolo -> sul tavolo; un film su Roma.",
            "per = for / in order to: questo è per te; studio per imparare.",
            "tra / fra = between / among, and 'in' for future time: tra i due, tra un'ora. (tra and fra are interchangeable.)",
            "Remember: with cities use a (a Roma), with countries use in (in Italia)."
          ]
        }
      ],
      tables: [
        {
          title: "Common uses",
          columns: ["Preposition", "Main use", "Example"],
          rows: [
            ["di", "possession / origin", "la casa di Anna"],
            ["a", "to / at, cities, time", "a Milano, alle tre"],
            ["da", "from / at someone's", "dal dentista"],
            ["in", "in / to countries, transport", "in Francia, in bici"],
            ["con", "with", "con gli amici"],
            ["su", "on / about", "sul letto"],
            ["per", "for / in order to", "per due giorni"],
            ["tra / fra", "between / in (time)", "tra dieci minuti"]
          ]
        }
      ],
      examples: [
        { it: "Sono di Napoli, ma abito a Roma.", en: "I'm from Naples, but I live in Rome.", de: "Ich komme aus Neapel, aber ich wohne in Rom." },
        { it: "Vado in Italia in treno con mia sorella.", en: "I'm going to Italy by train with my sister.", de: "Ich fahre mit dem Zug mit meiner Schwester nach Italien." },
        { it: "Il regalo è per te. Ci vediamo tra un'ora.", en: "The gift is for you. See you in an hour.", de: "Das Geschenk ist für dich. Wir sehen uns in einer Stunde." }
      ],
      exercises: [
        {
          prompt: "Completa con la preposizione giusta (di, a, da, in, con, su, per, tra): Sono ___ Milano. Vado ___ Parigi. Il libro è ___ Marco. Parto ___ due ore.",
          reveal: {
            body: ["Sono di Milano (origine). Vado a Parigi (città). Il libro è di Marco (possesso). Parto tra due ore (tempo futuro)."]
          }
        },
        {
          prompt: "Scrivi tre frasi sui tuoi programmi usando 'a', 'in' e 'con'.",
          reveal: {
            examples: [
              { it: "Domani vado a Firenze." },
              { it: "In estate viaggio in Spagna." },
              { it: "Esco con i miei amici stasera." }
            ]
          }
        }
      ],
      questions: [
        { id: "g-prep-city", type: "multiple-choice", prompt: "Which preposition goes with a city? '___ Roma'", answer: "a", options: ["a", "in", "di", "da"], explanation: "Cities take a; countries take in." },
        { id: "g-prep-country", type: "multiple-choice", prompt: "'I live in Italy' = Abito ___ Italia.", answer: "in", options: ["in", "a", "di", "su"], explanation: "Countries take in." },
        { id: "g-prep-origin", type: "multiple-choice", prompt: "'I'm from Rome' = Sono ___ Roma.", answer: "di", options: ["di", "da", "a", "in"], explanation: "Origin (essere di) uses di." },
        { id: "g-prep-doctor", type: "multiple-choice", prompt: "'I'm going to the doctor's' = Vado ___ medico.", answer: "dal", options: ["dal", "al", "nel", "del"], explanation: "da = to someone's place (da+il = dal)." }
      ]
    },
    {
      id: "preposizioni-articolate",
      title: "Combined prepositions",
      stage: 3,
      level: "A2",
      status: "ready",
      summary: "Preposition + article: del, al, dal, nel, sul, ... and when you need them.",
      sections: [
        {
          title: "Preposition + article merge",
          body: [
            "When di, a, da, in, su come before a definite article, they merge into one word: a + il = al, in + la = nella, su + i = sui.",
            "You need the combined form whenever the noun has 'the': Vado al cinema (a + il cinema). Il gatto è sul divano (su + il divano).",
            "con and per are usually left separate at A2 (con il, per la), though 'col' exists."
          ]
        },
        {
          title: "How to read the table",
          body: [
            "Take the preposition down the side and the article across the top; the cell is the merged word.",
            "di -> del/dello/della/dei/degli/delle; a -> al/allo/alla/ai/agli/alle; da -> dal...; in -> nel...; su -> sul..."
          ]
        }
      ],
      tables: [
        {
          title: "Combined forms",
          columns: ["", "il", "lo", "la", "l'", "i", "gli", "le"],
          rows: [
            ["di", "del", "dello", "della", "dell'", "dei", "degli", "delle"],
            ["a", "al", "allo", "alla", "all'", "ai", "agli", "alle"],
            ["da", "dal", "dallo", "dalla", "dall'", "dai", "dagli", "dalle"],
            ["in", "nel", "nello", "nella", "nell'", "nei", "negli", "nelle"],
            ["su", "sul", "sullo", "sulla", "sull'", "sui", "sugli", "sulle"]
          ]
        }
      ],
      examples: [
        { it: "Il libro è sul tavolo, vicino alla finestra.", en: "The book is on the table, near the window.", de: "Das Buch ist auf dem Tisch, neben dem Fenster." },
        { it: "Torno dal lavoro alle sei e vado al supermercato.", en: "I get back from work at six and go to the supermarket.", de: "Ich komme um sechs von der Arbeit und gehe zum Supermarkt." },
        { it: "Parliamo degli esami e dei problemi.", en: "We talk about the exams and the problems.", de: "Wir reden über die Prüfungen und die Probleme." }
      ],
      exercises: [
        {
          prompt: "Unisci preposizione e articolo: a + il = ___, in + la = ___, su + i = ___, di + gli = ___, da + l' = ___.",
          reveal: {
            body: ["al, nella, sui, degli, dall'."]
          }
        },
        {
          prompt: "Completa: Vado ___ (a + il) cinema. Il gatto dorme ___ (su + il) divano. Torno ___ (da + la) scuola.",
          reveal: {
            body: ["Vado al cinema. Il gatto dorme sul divano. Torno dalla scuola."]
          }
        }
      ],
      questions: [
        { id: "g-artprep-a-il", type: "typed", prompt: "Combine: a + il = ?", answer: "al", accepted: ["al"] },
        { id: "g-artprep-in-la", type: "typed", prompt: "Combine: in + la = ?", answer: "nella", accepted: ["nella"] },
        { id: "g-artprep-su-i", type: "typed", prompt: "Combine: su + i = ?", answer: "sui", accepted: ["sui"] },
        { id: "g-artprep-di-gli", type: "multiple-choice", prompt: "Combine: di + gli = ?", answer: "degli", options: ["degli", "dei", "delle", "dello"] },
        { id: "g-artprep-cinema", type: "typed", prompt: "'I go to the cinema' = Vado ___ cinema.", answer: "al", accepted: ["al"] },
        { id: "g-artprep-gap-tavolo", type: "typed", prompt: "Completa (preposizione articolata): Il libro è ___ (su + il) tavolo.", answer: "sul", accepted: ["sul"] },
        { id: "g-artprep-gap-scuola", type: "typed", prompt: "Completa (preposizione articolata): Torno ___ (da + la) scuola.", answer: "dalla", accepted: ["dalla"] }
      ]
    },
    {
      id: "preposizioni-luogo",
      title: "Place prepositions",
      stage: 3,
      level: "A2",
      status: "ready",
      summary: "Where things are: sopra, sotto, davanti a, dietro, vicino a, accanto a, tra. (Pairs with the Locations vocab.)",
      sections: [
        {
          title: "Saying where",
          body: [
            "Place prepositions describe where something is: sopra (above), sotto (under), davanti (in front), dietro (behind), dentro (inside), fuori (outside), tra/fra (between).",
            "Several of them need a linking word before the noun: davanti a, vicino a, accanto a, di fronte a, in mezzo a, intorno a, and lontano da.",
            "That linking a/da then combines with the article: davanti alla scuola, vicino al bar, lontano dalla città."
          ]
        }
      ],
      tables: [
        {
          title: "Place prepositions",
          columns: ["Italian", "Meaning", "Example"],
          rows: [
            ["sopra / su", "above / on", "sopra il tavolo"],
            ["sotto", "under", "sotto la sedia"],
            ["davanti a", "in front of", "davanti alla porta"],
            ["dietro", "behind", "dietro la casa"],
            ["vicino a", "near", "vicino al centro"],
            ["accanto a", "next to", "accanto al bar"],
            ["di fronte a", "opposite", "di fronte alla chiesa"],
            ["tra / fra", "between", "tra la banca e la posta"]
          ]
        }
      ],
      examples: [
        { it: "Il gatto è sotto il tavolo e il cane è davanti alla porta.", en: "The cat is under the table and the dog is in front of the door.", de: "Die Katze ist unter dem Tisch und der Hund vor der Tür." },
        { it: "La farmacia è vicino alla stazione, accanto al bar.", en: "The pharmacy is near the station, next to the bar.", de: "Die Apotheke ist in der Nähe des Bahnhofs, neben der Bar." }
      ],
      exercises: [
        {
          prompt: "Completa con la preposizione di luogo e l'articolo: Il libro è ___ (on) tavolo. La macchina è ___ (in front of) casa. Abito ___ (near) centro.",
          reveal: {
            body: ["Il libro è sul tavolo. La macchina è davanti alla casa. Abito vicino al centro."]
          }
        },
        {
          prompt: "Descrivi dove sono cinque oggetti nella tua stanza usando le preposizioni di luogo.",
          reveal: {
            examples: [
              { it: "Il letto è vicino alla finestra." },
              { it: "Lo zaino è sotto la scrivania." },
              { it: "La lampada è sul comodino, accanto al letto." }
            ]
          }
        }
      ],
      questions: [
        { id: "g-luogo-under", type: "multiple-choice", prompt: "Which means 'under'?", answer: "sotto", options: ["sotto", "sopra", "dietro", "davanti"] },
        { id: "g-luogo-davanti", type: "multiple-choice", prompt: "'In front of the school' = ___ scuola.", answer: "davanti alla", options: ["davanti alla", "davanti la", "davanti della", "davanti a la"], explanation: "davanti a + la = davanti alla." },
        { id: "g-luogo-near", type: "typed", prompt: "'near the bar' = ___ bar (vicino + a + il).", answer: "vicino al", accepted: ["vicino al"] }
      ]
    },
    {
      id: "pronomi-diretti",
      title: "Direct object pronouns",
      stage: 3,
      level: "A2",
      status: "ready",
      summary: "lo, la, li, le, mi, ti, ci, vi — replacing the direct object (Lo vedo).",
      sections: [
        {
          title: "Replacing the direct object",
          body: [
            "A direct object pronoun replaces a noun that follows the verb without a preposition: Vedo Marco -> Lo vedo.",
            "The forms are: mi (me), ti (you), lo (him/it m.), la (her/it f.), ci (us), vi (you pl.), li (them m.), le (them f.).",
            "They go before the conjugated verb: La conosco. Non li mangio. With an infinitive they can attach to the end: Voglio vederlo."
          ]
        },
        {
          title: "In the passato prossimo",
          body: [
            "lo and la shorten to l' before a vowel: L'ho visto ieri.",
            "With avere, the past participle agrees with lo/la/li/le: Le mele? Le ho comprate. I libri? Li ho letti."
          ]
        }
      ],
      tables: [
        {
          title: "Direct object pronouns",
          columns: ["Person", "Pronoun", "Example"],
          rows: [
            ["me", "mi", "Mi vedi?"],
            ["you (tu)", "ti", "Ti chiamo."],
            ["him / it (m)", "lo", "Lo conosco."],
            ["her / it (f)", "la", "La invito."],
            ["us", "ci", "Ci aspetti?"],
            ["you (voi)", "vi", "Vi saluto."],
            ["them (m)", "li", "Li vedo."],
            ["them (f)", "le", "Le compro."]
          ]
        }
      ],
      examples: [
        { it: "Conosci Marco? Sì, lo conosco bene.", en: "Do you know Marco? Yes, I know him well.", de: "Kennst du Marco? Ja, ich kenne ihn gut." },
        { it: "Le mele sono buone: le compro sempre.", en: "The apples are good: I always buy them.", de: "Die Äpfel sind gut: Ich kaufe sie immer." },
        { it: "Ti chiamo stasera.", en: "I'll call you tonight.", de: "Ich rufe dich heute Abend an." }
      ],
      exercises: [
        {
          prompt: "Sostituisci l'oggetto con il pronome: Mangio la pizza -> ___ mangio. Vedo Marco -> ___ vedo. Compro le scarpe -> ___ compro. Leggo i libri -> ___ leggo.",
          reveal: {
            body: ["La mangio. Lo vedo. Le compro. Li leggo."]
          }
        },
        {
          prompt: "Rispondi a queste domande usando un pronome diretto: Conosci la mia amica? Guardi la TV la sera? Prendi il caffè la mattina?",
          reveal: {
            examples: [
              { it: "Sì, la conosco." },
              { it: "Sì, la guardo la sera." },
              { it: "Sì, lo prendo ogni mattina." }
            ]
          }
        }
      ],
      questions: [
        { id: "g-dir-pizza", type: "multiple-choice", prompt: "'Mangio la pizza' -> ___ mangio.", answer: "La", options: ["La", "Lo", "Le", "Li"], explanation: "la pizza (f.sg) -> la." },
        { id: "g-dir-libri", type: "multiple-choice", prompt: "'Leggo i libri' -> ___ leggo.", answer: "Li", options: ["Li", "Le", "Lo", "La"], explanation: "i libri (m.pl) -> li." },
        { id: "g-dir-marco", type: "typed", prompt: "'Vedo Marco' -> ___ vedo.", answer: "lo", accepted: ["lo"] },
        { id: "g-dir-agree", type: "multiple-choice", prompt: "'Le mele? ___ ho comprate.' Which pronoun makes the participle agree?", answer: "Le", options: ["Le", "La", "Li", "Lo"], explanation: "le mele -> le, participle -> comprate." }
      ]
    },
    {
      id: "pronomi-indiretti",
      title: "Indirect object pronouns",
      stage: 3,
      level: "A2",
      status: "ready",
      summary: "gli, le, mi, ti, ci, vi — replacing 'to someone' (Le parlo).",
      sections: [
        {
          title: "Replacing 'to someone'",
          body: [
            "An indirect object pronoun replaces a + a person: Telefono a Marco -> Gli telefono. Scrivo a Maria -> Le scrivo.",
            "The forms are: mi (to me), ti (to you), gli (to him), le (to her), ci (to us), vi (to you pl.), gli (to them).",
            "Note the difference from direct pronouns only in the third person: lo/la (him/her) vs. gli/le (to him/to her)."
          ]
        },
        {
          title: "Verbs that take 'a'",
          body: [
            "Common verbs with an indirect object: telefonare a, scrivere a, parlare a, dare a, chiedere a, rispondere a, regalare a, and piacere.",
            "In the passato prossimo the participle does NOT agree with indirect pronouns: Le ho parlato (not parlata)."
          ]
        }
      ],
      tables: [
        {
          title: "Indirect object pronouns",
          columns: ["Person", "Pronoun", "Example"],
          rows: [
            ["to me", "mi", "Mi scrivi?"],
            ["to you (tu)", "ti", "Ti telefono."],
            ["to him", "gli", "Gli parlo."],
            ["to her", "le", "Le rispondo."],
            ["to us", "ci", "Ci scrivono."],
            ["to you (voi)", "vi", "Vi do il libro."],
            ["to them", "gli", "Gli telefono."]
          ]
        }
      ],
      examples: [
        { it: "Telefoni a Marco? Sì, gli telefono adesso.", en: "Are you calling Marco? Yes, I'm calling him now.", de: "Rufst du Marco an? Ja, ich rufe ihn jetzt an." },
        { it: "Scrivo a Maria: le scrivo un'email.", en: "I write to Maria: I write her an email.", de: "Ich schreibe Maria: Ich schreibe ihr eine E-Mail." },
        { it: "I bambini hanno fame: gli do un panino.", en: "The children are hungry: I give them a sandwich.", de: "Die Kinder haben Hunger: Ich gebe ihnen ein Brötchen." }
      ],
      exercises: [
        {
          prompt: "Sostituisci con il pronome indiretto: Parlo a Luca -> ___ parlo. Scrivo a Sara -> ___ scrivo. Telefono ai miei amici -> ___ telefono.",
          reveal: {
            body: ["Gli parlo. Le scrivo. Gli telefono. (a + persona -> pronome indiretto)"]
          }
        },
        {
          prompt: "Pensa a un amico lontano. Scrivi tre cose che gli/le fai (telefonare, scrivere, regalare).",
          reveal: {
            examples: [
              { it: "Le telefono ogni domenica." },
              { it: "Le scrivo lunghi messaggi." },
              { it: "Per il compleanno le regalo un libro." }
            ]
          }
        }
      ],
      questions: [
        { id: "g-ind-luca", type: "multiple-choice", prompt: "'Parlo a Luca' -> ___ parlo.", answer: "Gli", options: ["Gli", "Le", "Lo", "La"], explanation: "a Luca (to him) -> gli." },
        { id: "g-ind-sara", type: "multiple-choice", prompt: "'Scrivo a Sara' -> ___ scrivo.", answer: "Le", options: ["Le", "Gli", "La", "Li"], explanation: "a Sara (to her) -> le." },
        { id: "g-ind-vs-direct", type: "multiple-choice", prompt: "Which pair is direct 'him' vs. indirect 'to him'?", answer: "lo / gli", options: ["lo / gli", "gli / lo", "la / le", "mi / ti"], explanation: "Direct lo, indirect gli." },
        { id: "g-ind-them", type: "typed", prompt: "'I phone them' = ___ telefono.", answer: "gli", accepted: ["gli"] }
      ]
    },
    {
      id: "ci-ne",
      title: "Ci and ne",
      stage: 3,
      level: "A2",
      status: "ready",
      summary: "The little words ci (there / about it) and ne (of it / of them).",
      sections: [
        {
          title: "ci (there / about it)",
          body: [
            "ci replaces a place introduced by a, in, or su = 'there': Vai a Roma? Sì, ci vado. Sei mai stato in Italia? No, non ci sono mai stato.",
            "ci also replaces a + something with verbs like pensare a and credere a: Pensi al lavoro? Sì, ci penso sempre."
          ]
        },
        {
          title: "ne (of it / of them)",
          body: [
            "ne replaces di + something, and quantities 'of it/of them': Quante mele vuoi? Ne voglio due. Vuoi del pane? Sì, ne voglio un po'.",
            "ne also replaces di + topic: Parli di politica? Sì, ne parlo spesso.",
            "In the passato prossimo with a quantity, the participle agrees with what ne stands for: Ho comprato tre mele -> Ne ho comprate tre."
          ]
        }
      ],
      examples: [
        { it: "Vai spesso in palestra? Sì, ci vado tre volte alla settimana.", en: "Do you often go to the gym? Yes, I go there three times a week.", de: "Gehst du oft ins Fitnessstudio? Ja, ich gehe dreimal pro Woche hin." },
        { it: "Quanti caffè bevi? Ne bevo due al giorno.", en: "How many coffees do you drink? I drink two (of them) a day.", de: "Wie viele Kaffees trinkst du? Ich trinke zwei am Tag." },
        { it: "Parliamo del progetto? Sì, ne parliamo domani.", en: "Shall we talk about the project? Yes, we'll talk about it tomorrow.", de: "Reden wir über das Projekt? Ja, wir reden morgen darüber." }
      ],
      exercises: [
        {
          prompt: "Rispondi con 'ci' o 'ne': Vai al cinema stasera? Quante pizze mangi? Pensi spesso alle vacanze? Vuoi dell'acqua?",
          reveal: {
            body: ["Sì, ci vado. Ne mangio una. Sì, ci penso spesso. Sì, ne voglio un po'.", "ci = luogo o 'a qualcosa'; ne = quantità o 'di qualcosa'."]
          }
        }
      ],
      questions: [
        { id: "g-cine-place", type: "multiple-choice", prompt: "'Vai a Roma? Sì, ___ vado.'", answer: "ci", options: ["ci", "ne", "lo", "li"], explanation: "ci replaces a place." },
        { id: "g-cine-quantity", type: "multiple-choice", prompt: "'Quante mele vuoi? ___ voglio due.'", answer: "Ne", options: ["Ne", "Ci", "Le", "Li"], explanation: "ne replaces a quantity 'of them'." },
        { id: "g-cine-di", type: "multiple-choice", prompt: "'Parli di politica? Sì, ___ parlo.'", answer: "ne", options: ["ne", "ci", "la", "lo"], explanation: "di + topic -> ne." }
      ]
    },

    // ---------------------------------------------------------------- Stage 4
    {
      id: "passato-prossimo",
      title: "Passato prossimo",
      stage: 4,
      level: "A2",
      status: "ready",
      summary: "Completed past actions with avere/essere + past participle; agreement with essere.",
      sections: [
        {
          title: "How to form it",
          body: [
            "passato prossimo = present of avere or essere + past participle. It describes a completed action: Ieri ho mangiato una pizza.",
            "Regular participles: -are -> -ato (parlato), -ere -> -uto (creduto), -ire -> -ito (dormito).",
            "Most verbs use avere and the participle does not change: ho parlato, abbiamo mangiato."
          ]
        },
        {
          title: "Verbs with essere",
          body: [
            "Verbs of movement or change of state use essere: andare, venire, arrivare, partire, uscire, entrare, tornare, restare, nascere, morire, and all reflexive verbs.",
            "With essere the participle agrees with the subject: Maria è andata, i ragazzi sono usciti, noi siamo partiti.",
            "Common irregular participles: fare -> fatto, essere -> stato, prendere -> preso, vedere -> visto, leggere -> letto, scrivere -> scritto, dire -> detto, bere -> bevuto, aprire -> aperto, mettere -> messo, venire -> venuto, rimanere -> rimasto."
          ]
        }
      ],
      tables: [
        {
          title: "avere vs. essere",
          columns: ["Auxiliary", "Example", "Participle agrees?"],
          rows: [
            ["avere", "ho mangiato, hai visto", "no"],
            ["essere (movement)", "sono andato/a", "yes, with subject"],
            ["essere (reflexive)", "mi sono alzato/a", "yes, with subject"]
          ]
        }
      ],
      examples: [
        { it: "Ieri ho mangiato al ristorante con gli amici.", en: "Yesterday I ate at the restaurant with friends.", de: "Gestern habe ich mit Freunden im Restaurant gegessen." },
        { it: "Maria è andata a Roma e ha visto il Colosseo.", en: "Maria went to Rome and saw the Colosseum.", de: "Maria ist nach Rom gefahren und hat das Kolosseum gesehen." },
        { it: "Ci siamo alzati presto e siamo partiti.", en: "We got up early and left.", de: "Wir sind früh aufgestanden und losgefahren." }
      ],
      exercises: [
        {
          prompt: "Metti al passato prossimo: io (mangiare), tu (andare), lei (partire), noi (fare), loro (vedere).",
          reveal: {
            body: ["ho mangiato, sei andato/a, è partita, abbiamo fatto, hanno visto.", "Ricorda: andare e partire usano essere (participio concorda); mangiare, fare e vedere usano avere."]
          }
        },
        {
          prompt: "Racconta cosa hai fatto ieri in cinque frasi al passato prossimo.",
          reveal: {
            examples: [
              { it: "Ieri mi sono svegliato alle otto." },
              { it: "Ho fatto colazione e sono andato al lavoro." },
              { it: "A pranzo ho mangiato un panino." },
              { it: "Il pomeriggio ho visto un amico." },
              { it: "La sera sono tornato a casa e ho letto un libro." }
            ]
          }
        }
      ],
      questions: [
        { id: "g-pp-aux-andare", type: "multiple-choice", prompt: "Which auxiliary does 'andare' take?", answer: "essere", options: ["essere", "avere", "stare", "fare"], explanation: "Movement verbs use essere." },
        { id: "g-pp-part-parlare", type: "typed", prompt: "Give the past participle of 'parlare'.", answer: "parlato", accepted: ["parlato"] },
        { id: "g-pp-part-fare", type: "typed", prompt: "Give the (irregular) past participle of 'fare'.", answer: "fatto", accepted: ["fatto"] },
        { id: "g-pp-agree", type: "multiple-choice", prompt: "'Maria (andare)' in passato prossimo =", answer: "è andata", options: ["è andata", "è andato", "ha andato", "ha andata"], explanation: "essere + agreement with feminine subject." },
        { id: "g-pp-avere", type: "typed", prompt: "Say 'I ate' (mangiare, io).", answer: "ho mangiato", accepted: ["ho mangiato"] },
        { id: "g-pp-tr-pizza", type: "transform", prompt: "Metti al passato prossimo:", source: "Mangio una pizza.", answer: "Ho mangiato una pizza.", accepted: ["ho mangiato una pizza"], explanation: "mangiare -> avere + mangiato." },
        { id: "g-pp-tr-cinema", type: "transform", prompt: "Metti al passato prossimo:", source: "Vado al cinema.", answer: "Sono andato al cinema.", accepted: ["sono andato al cinema", "sono andata al cinema"], explanation: "andare -> essere; il participio concorda (andato/andata)." },
        { id: "g-pp-tr-parte", type: "transform", prompt: "Metti al passato prossimo:", source: "Marco parte per Roma.", answer: "Marco è partito per Roma.", accepted: ["marco è partito per roma"], explanation: "partire -> essere partito." },
        { id: "g-pp-gap-mare", type: "typed", prompt: "Completa al passato prossimo: Ieri Marco ___ (andare) al mare.", answer: "è andato", accepted: ["è andato"], explanation: "andare -> essere andato." },
        { id: "g-pp-gap-colazione", type: "typed", prompt: "Completa al passato prossimo: Stamattina (io) ___ (fare) colazione tardi.", answer: "ho fatto", accepted: ["ho fatto"], explanation: "fare -> avere + fatto." }
      ]
    },
    {
      id: "imperfetto",
      title: "Imperfetto",
      stage: 4,
      level: "A2",
      status: "ready",
      summary: "Habitual and background past: descriptions, ongoing states, 'used to'.",
      sections: [
        {
          title: "When to use it",
          body: [
            "The imperfetto describes the past without a clear end: habits ('used to'), descriptions, ongoing background, and age/time/weather in the past.",
            "Da bambino giocavo a calcio. Era una bella giornata e faceva caldo. Avevo dieci anni."
          ]
        },
        {
          title: "How to form it",
          body: [
            "Take the stem and add: -are -> -avo, -avi, -ava, -avamo, -avate, -avano (parlavo); -ere -> -evo... (prendevo); -ire -> -ivo... (dormivo).",
            "essere is irregular: ero, eri, era, eravamo, eravate, erano.",
            "fare -> facevo, bere -> bevevo, dire -> dicevo (they use the old longer stem)."
          ]
        }
      ],
      tables: [
        {
          title: "Imperfetto endings",
          columns: ["Person", "-are (parlare)", "-ere (prendere)", "-ire (dormire)"],
          rows: [
            ["io", "parlavo", "prendevo", "dormivo"],
            ["tu", "parlavi", "prendevi", "dormivi"],
            ["lui/lei", "parlava", "prendeva", "dormiva"],
            ["noi", "parlavamo", "prendevamo", "dormivamo"],
            ["voi", "parlavate", "prendevate", "dormivate"],
            ["loro", "parlavano", "prendevano", "dormivano"]
          ]
        }
      ],
      examples: [
        { it: "Da bambino giocavo a calcio ogni giorno.", en: "As a child I used to play football every day.", de: "Als Kind spielte ich jeden Tag Fußball." },
        { it: "Era una bella giornata e c'era il sole.", en: "It was a nice day and it was sunny.", de: "Es war ein schöner Tag und die Sonne schien." },
        { it: "Quando ero piccola, abitavamo al mare.", en: "When I was little, we lived by the sea.", de: "Als ich klein war, wohnten wir am Meer." }
      ],
      exercises: [
        {
          prompt: "Metti all'imperfetto: io (parlare), tu (avere), lui (essere), noi (dormire), loro (fare).",
          reveal: {
            body: ["parlavo, avevi, era, dormivamo, facevano."]
          }
        },
        {
          prompt: "Descrivi com'era la tua vita quando avevi dieci anni: dove abitavi, cosa ti piaceva fare, com'era la tua scuola (cinque frasi).",
          reveal: {
            examples: [
              { it: "Quando avevo dieci anni, abitavo in campagna." },
              { it: "Ogni estate andavo dai nonni." },
              { it: "Mi piaceva leggere e giocare fuori." },
              { it: "La mia scuola era piccola e tranquilla." }
            ]
          }
        }
      ],
      questions: [
        { id: "g-imp-parlare-io", type: "typed", prompt: "Imperfetto: io (parlare) ___", answer: "parlavo", accepted: ["parlavo"] },
        { id: "g-imp-essere-lui", type: "typed", prompt: "Imperfetto: lui (essere) ___", answer: "era", accepted: ["era"] },
        { id: "g-imp-fare-noi", type: "typed", prompt: "Imperfetto: noi (fare) ___", answer: "facevamo", accepted: ["facevamo"] },
        { id: "g-imp-use", type: "multiple-choice", prompt: "Which is a typical use of the imperfetto?", answer: "a habit in the past ('used to')", options: ["a habit in the past ('used to')", "a single completed action", "a future plan", "a command"], explanation: "Habits, descriptions, background." },
        { id: "g-imp-tr-gioco", type: "transform", prompt: "Metti all'imperfetto:", source: "Gioco a calcio ogni giorno.", answer: "Giocavo a calcio ogni giorno.", accepted: ["giocavo a calcio ogni giorno"], explanation: "giocare -> giocavo (abitudine nel passato)." },
        { id: "g-imp-tr-casa", type: "transform", prompt: "Metti all'imperfetto:", source: "Abitiamo al mare.", answer: "Abitavamo al mare.", accepted: ["abitavamo al mare"], explanation: "abitare -> abitavamo." },
        { id: "g-imp-gap-bambino", type: "typed", prompt: "Completa all'imperfetto: Da bambino (io) ___ (essere) molto timido.", answer: "ero", accepted: ["ero"], explanation: "essere -> ero (irregolare)." }
      ]
    },
    {
      id: "passato-vs-imperfetto",
      title: "Passato prossimo vs. imperfetto",
      stage: 4,
      level: "A2",
      status: "ready",
      summary: "Choosing between the two: completed events vs. background and habits.",
      sections: [
        {
          title: "The core difference",
          body: [
            "passato prossimo = a completed event, something that happened (and finished): Ieri ho visto un film.",
            "imperfetto = background, description, or habit, something that was going on or used to happen: Da bambino guardavo molti film.",
            "Ask yourself: is it 'what happened' (passato prossimo) or 'what was going on / how things were' (imperfetto)?"
          ]
        },
        {
          title: "Together in one story",
          body: [
            "Very often the imperfetto sets the scene and the passato prossimo is the event that interrupts it: Mentre mangiavo, è arrivato Marco.",
            "Guardavo la TV (background) quando è suonato il telefono (event).",
            "Signal words: often with imperfetto -> sempre, ogni giorno, di solito, mentre; often with passato prossimo -> ieri, poi, all'improvviso, una volta."
          ]
        }
      ],
      examples: [
        { it: "Mentre camminavo, ho incontrato un vecchio amico.", en: "While I was walking, I met an old friend.", de: "Während ich ging, traf ich einen alten Freund." },
        { it: "Era tardi e pioveva, così sono tornato a casa.", en: "It was late and raining, so I went back home.", de: "Es war spät und es regnete, also ging ich nach Hause." },
        { it: "Da piccola andavo al mare ogni estate; l'anno scorso invece sono andata in montagna.", en: "As a child I went to the sea every summer; last year, though, I went to the mountains.", de: "Als Kind fuhr ich jeden Sommer ans Meer; letztes Jahr aber in die Berge." }
      ],
      exercises: [
        {
          prompt: "Scegli il tempo giusto: Mentre (leggere) ___, (suonare) ___ il telefono. Ieri (essere) ___ stanco e (andare) ___ a letto presto.",
          reveal: {
            body: ["Mentre leggevo (imperfetto, azione in corso), è suonato il telefono (passato prossimo, evento). Ieri ero stanco (imperfetto, stato) e sono andato a letto presto (passato prossimo, evento)."]
          }
        },
        {
          prompt: "Racconta un piccolo episodio del passato: usa l'imperfetto per lo sfondo e il passato prossimo per l'evento (quattro frasi).",
          reveal: {
            examples: [
              { it: "Era una bella giornata di primavera." },
              { it: "Camminavo nel parco e ascoltavo la musica." },
              { it: "All'improvviso ho visto un vecchio amico." },
              { it: "Ci siamo fermati a prendere un caffè." }
            ]
          }
        }
      ],
      questions: [
        { id: "g-pvi-event", type: "multiple-choice", prompt: "'Yesterday I saw a film' uses...", answer: "passato prossimo", options: ["passato prossimo", "imperfetto", "futuro", "presente"], explanation: "A single completed event." },
        { id: "g-pvi-habit", type: "multiple-choice", prompt: "'As a child I used to play outside' uses...", answer: "imperfetto", options: ["imperfetto", "passato prossimo", "condizionale", "imperativo"], explanation: "A past habit." },
        { id: "g-pvi-combo", type: "multiple-choice", prompt: "'Mentre ___, è arrivato Marco.' Which fits the gap?", answer: "mangiavo", options: ["mangiavo", "ho mangiato", "mangerò", "mangio"], explanation: "Background action -> imperfetto." }
      ]
    },
    {
      id: "futuro",
      title: "Simple future (futuro semplice)",
      stage: 4,
      level: "A2",
      status: "ready",
      summary: "Talking about the future: parlerò, prenderai, saremo, and irregular stems.",
      sections: [
        {
          title: "How to form it",
          body: [
            "Endings are the same for all verbs: -ò, -ai, -à, -emo, -ete, -anno.",
            "The -are and -ere stems both end in -er-: parlare -> parler-, prendere -> prender-. So parlerò, parlerai, parlerà, parleremo, parlerete, parleranno.",
            "The -ire stem ends in -ir-: dormire -> dormirò.",
            "The future can also express a guess about the present: Saranno le tre (It's probably three o'clock)."
          ]
        },
        {
          title: "Irregular stems",
          body: [
            "Many common verbs have a short irregular stem, but the same endings: essere -> sar-, avere -> avr-, andare -> andr-, fare -> far-, venire -> verr-, potere -> potr-, dovere -> dovr-, volere -> vorr-, vedere -> vedr-.",
            "So: sarò, avrò, andrò, farò, verrò, potrò, dovrò, vorrò, vedrò."
          ]
        }
      ],
      tables: [
        {
          title: "Future endings & irregular stems",
          columns: ["Person", "parlare", "essere (sar-)", "avere (avr-)"],
          rows: [
            ["io", "parlerò", "sarò", "avrò"],
            ["tu", "parlerai", "sarai", "avrai"],
            ["lui/lei", "parlerà", "sarà", "avrà"],
            ["noi", "parleremo", "saremo", "avremo"],
            ["voi", "parlerete", "sarete", "avrete"],
            ["loro", "parleranno", "saranno", "avranno"]
          ]
        }
      ],
      examples: [
        { it: "Domani partirò per Roma e resterò una settimana.", en: "Tomorrow I'll leave for Rome and stay a week.", de: "Morgen fahre ich nach Rom und bleibe eine Woche." },
        { it: "L'anno prossimo andremo in vacanza in Sicilia.", en: "Next year we'll go on holiday to Sicily.", de: "Nächstes Jahr fahren wir nach Sizilien in den Urlaub." },
        { it: "Quando avrò tempo, ti chiamerò.", en: "When I have time, I'll call you.", de: "Wenn ich Zeit habe, rufe ich dich an." }
      ],
      exercises: [
        {
          prompt: "Metti al futuro: io (parlare), tu (essere), lei (avere), noi (andare), loro (fare).",
          reveal: {
            body: ["parlerò, sarai, avrà, andremo, faranno."]
          }
        },
        {
          prompt: "Scrivi cinque frasi sui tuoi progetti per il prossimo anno (viaggi, studio, lavoro).",
          reveal: {
            examples: [
              { it: "L'anno prossimo studierò di più." },
              { it: "Andrò in Italia in estate." },
              { it: "Cambierò lavoro, forse." },
              { it: "Imparerò a cucinare meglio." }
            ]
          }
        }
      ],
      questions: [
        { id: "g-fut-parlare-io", type: "typed", prompt: "Future: io (parlare) ___", answer: "parlerò", accepted: ["parlerò", "parlero"] },
        { id: "g-fut-essere-loro", type: "typed", prompt: "Future: loro (essere) ___", answer: "saranno", accepted: ["saranno"] },
        { id: "g-fut-andare-noi", type: "typed", prompt: "Future: noi (andare) ___", answer: "andremo", accepted: ["andremo"] },
        { id: "g-fut-ending", type: "multiple-choice", prompt: "What is the io future ending?", answer: "-ò", options: ["-ò", "-ei", "-avo", "-o"], explanation: "parlerò, sarò, avrò." },
        { id: "g-fut-tr-parto", type: "transform", prompt: "Metti al futuro:", source: "Domani parto per Roma.", answer: "Domani partirò per Roma.", accepted: ["domani partirò per roma", "domani partiro per roma"], explanation: "partire -> partirò." },
        { id: "g-fut-tr-andiamo", type: "transform", prompt: "Metti al futuro:", source: "L'anno prossimo andiamo in Italia.", answer: "L'anno prossimo andremo in Italia.", accepted: ["l'anno prossimo andremo in italia"], explanation: "andare -> andr- -> andremo." },
        { id: "g-fut-gap-tempo", type: "typed", prompt: "Completa al futuro: Quando (io) ___ (avere) tempo, ti chiamo.", answer: "avrò", accepted: ["avrò", "avro"], explanation: "avere -> avr- -> avrò." }
      ]
    },
    {
      id: "condizionale",
      title: "Present conditional",
      stage: 4,
      level: "A2",
      status: "ready",
      summary: "Would / polite requests: vorrei, potrei, mi piacerebbe.",
      sections: [
        {
          title: "How to form it",
          body: [
            "The present conditional means 'would'. It uses the SAME stem as the future, with the endings -ei, -esti, -ebbe, -emmo, -este, -ebbero.",
            "parlare -> parlerei, parleresti, parlerebbe, parleremmo, parlereste, parlerebbero. prendere -> prenderei. dormire -> dormirei.",
            "The irregular stems are the same as the future: essere -> sarei, avere -> avrei, volere -> vorrei, potere -> potrei, dovere -> dovrei, fare -> farei, andare -> andrei."
          ]
        },
        {
          title: "What it's for",
          body: [
            "Polite requests and wishes: Vorrei un caffè. Potrei avere il conto? Mi piacerebbe visitare Roma.",
            "Advice and softening: Dovresti riposare. Al tuo posto, parlerei con lei.",
            "It is the polite, softer alternative to the plain present (voglio -> vorrei)."
          ]
        }
      ],
      tables: [
        {
          title: "Conditional endings & irregular stems",
          columns: ["Person", "parlare", "volere (vorr-)", "potere (potr-)"],
          rows: [
            ["io", "parlerei", "vorrei", "potrei"],
            ["tu", "parleresti", "vorresti", "potresti"],
            ["lui/lei", "parlerebbe", "vorrebbe", "potrebbe"],
            ["noi", "parleremmo", "vorremmo", "potremmo"],
            ["voi", "parlereste", "vorreste", "potreste"],
            ["loro", "parlerebbero", "vorrebbero", "potrebbero"]
          ]
        }
      ],
      examples: [
        { it: "Vorrei un tavolo per due, per favore.", en: "I would like a table for two, please.", de: "Ich hätte gern einen Tisch für zwei, bitte." },
        { it: "Scusi, potrei avere il conto?", en: "Excuse me, could I have the bill?", de: "Entschuldigung, könnte ich die Rechnung haben?" },
        { it: "Mi piacerebbe imparare a suonare la chitarra.", en: "I would like to learn to play the guitar.", de: "Ich würde gern Gitarre spielen lernen." }
      ],
      exercises: [
        {
          prompt: "Metti al condizionale: io (volere), tu (potere), lei (dovere), noi (essere), loro (parlare).",
          reveal: {
            body: ["vorrei, potresti, dovrebbe, saremmo, parlerebbero."]
          }
        },
        {
          prompt: "Sei al ristorante. Scrivi tre richieste gentili al cameriere usando il condizionale.",
          reveal: {
            examples: [
              { it: "Vorrei vedere il menù, per favore." },
              { it: "Potrei avere un bicchiere d'acqua?" },
              { it: "Mi porterebbe il conto, per cortesia?" }
            ]
          }
        }
      ],
      questions: [
        { id: "g-cond-volere-io", type: "typed", prompt: "Conditional: io (volere) ___", answer: "vorrei", accepted: ["vorrei"] },
        { id: "g-cond-potere-tu", type: "typed", prompt: "Conditional: tu (potere) ___", answer: "potresti", accepted: ["potresti"] },
        { id: "g-cond-parlare-lui", type: "typed", prompt: "Conditional: lui (parlare) ___", answer: "parlerebbe", accepted: ["parlerebbe"] },
        { id: "g-cond-use", type: "multiple-choice", prompt: "'Vorrei un caffè' is more polite than...", answer: "Voglio un caffè", options: ["Voglio un caffè", "Ho un caffè", "Sono un caffè", "Faccio un caffè"], explanation: "Conditional softens the request." },
        { id: "g-cond-tr-voglio", type: "transform", prompt: "Rendi più gentile (condizionale):", source: "Voglio un caffè.", answer: "Vorrei un caffè.", accepted: ["vorrei un caffè", "vorrei un caffe"], explanation: "voglio -> vorrei." },
        { id: "g-cond-tr-puoi", type: "transform", prompt: "Rendi più gentile (condizionale):", source: "Puoi aiutarmi?", answer: "Potresti aiutarmi?", accepted: ["potresti aiutarmi"], explanation: "puoi -> potresti." },
        { id: "g-cond-gap-piacere", type: "typed", prompt: "Completa al condizionale: Mi ___ (piacere) visitare Roma.", answer: "piacerebbe", accepted: ["piacerebbe"], explanation: "piacere -> mi piacerebbe." }
      ]
    },
    {
      id: "imperativo",
      title: "Imperative (informal)",
      stage: 4,
      level: "A2",
      status: "ready",
      summary: "Giving instructions and suggestions: parla!, prendi!, andiamo!, and negatives.",
      sections: [
        {
          title: "tu, noi, voi",
          body: [
            "The informal imperative gives orders, instructions, and suggestions to people you address as tu / noi / voi.",
            "tu: -are verbs end in -a (Parla!), while -ere and -ire end in -i (Prendi! Dormi!).",
            "noi = 'let's': -iamo (Parliamo! Andiamo!). voi: -ate / -ete / -ite (Parlate! Prendete! Dormite!)."
          ]
        },
        {
          title: "Negatives and irregulars",
          body: [
            "Negative tu = non + the infinitive: Non parlare! Non correre! Non toccare!",
            "Negative noi/voi just add non: Non parlate!",
            "A few irregular tu forms: essere -> sii, avere -> abbi, andare -> va' (or vai), fare -> fa' (fai), dare -> da' (dai), stare -> sta' (stai), dire -> di'."
          ]
        }
      ],
      tables: [
        {
          title: "Informal imperative",
          columns: ["Person", "-are (parlare)", "-ere (prendere)", "-ire (dormire)"],
          rows: [
            ["tu", "parla!", "prendi!", "dormi!"],
            ["noi", "parliamo!", "prendiamo!", "dormiamo!"],
            ["voi", "parlate!", "prendete!", "dormite!"],
            ["tu (negative)", "non parlare!", "non prendere!", "non dormire!"]
          ]
        }
      ],
      examples: [
        { it: "Marco, chiudi la porta e ascolta!", en: "Marco, close the door and listen!", de: "Marco, schließ die Tür und hör zu!" },
        { it: "Andiamo al parco! Fa bel tempo.", en: "Let's go to the park! The weather is nice.", de: "Gehen wir in den Park! Das Wetter ist schön." },
        { it: "Non parlare così in fretta, per favore.", en: "Don't speak so fast, please.", de: "Sprich bitte nicht so schnell." }
      ],
      exercises: [
        {
          prompt: "Dai l'ordine (tu): (parlare) più piano, (prendere) l'ombrello, (aprire) la finestra. Poi mettili al negativo.",
          reveal: {
            body: ["Parla più piano! Prendi l'ombrello! Apri la finestra!", "Negativo: Non parlare! Non prendere l'ombrello! Non aprire la finestra!"]
          }
        },
        {
          prompt: "Scrivi tre consigli a un amico che va in Italia, usando l'imperativo informale.",
          reveal: {
            examples: [
              { it: "Visita Roma e Firenze!" },
              { it: "Mangia la vera pizza napoletana!" },
              { it: "Non dimenticare di prenotare l'albergo!" }
            ]
          }
        }
      ],
      questions: [
        { id: "g-imper-parla", type: "typed", prompt: "Give the tu imperative of 'parlare'.", answer: "parla", accepted: ["parla", "parla!"] },
        { id: "g-imper-prendi", type: "typed", prompt: "Give the tu imperative of 'prendere'.", answer: "prendi", accepted: ["prendi", "prendi!"] },
        { id: "g-imper-neg", type: "multiple-choice", prompt: "How do you say 'Don't speak!' (tu)?", answer: "Non parlare!", options: ["Non parlare!", "Non parli!", "Non parla!", "Non parlate!"], explanation: "Negative tu = non + infinitive." },
        { id: "g-imper-noi", type: "typed", prompt: "Say \"Let's go!\" (andare, noi).", answer: "andiamo", accepted: ["andiamo", "andiamo!"] }
      ]
    },
    {
      id: "comparativi",
      title: "Comparatives",
      stage: 4,
      level: "A2",
      status: "ready",
      summary: "più... di, meno... di, (così) come — comparing people and things.",
      sections: [
        {
          title: "More, less, equal",
          body: [
            "More: più + adjective + di. Less: meno + adjective + di. Marco è più alto di Luca. Oggi sono meno stanco di ieri.",
            "Equal: (così)... come or (tanto)... quanto. Anna è (così) alta come Marco. The così/tanto is optional.",
            "Use di before nouns, pronouns, and numbers."
          ]
        },
        {
          title: "di vs. che, and irregulars",
          body: [
            "Use che (not di) when you compare two of the same kind directly: two verbs, two adjectives, or two nouns after the same verb. Studio più che parlo. È più simpatico che intelligente.",
            "Irregular comparatives: buono -> migliore (better), cattivo -> peggiore (worse); the adverbs bene -> meglio, male -> peggio.",
            "Questo caffè è migliore di quello. Oggi sto meglio di ieri."
          ]
        }
      ],
      tables: [
        {
          title: "Comparisons",
          columns: ["Type", "Structure", "Example"],
          rows: [
            ["more", "più ... di", "più alto di Luca"],
            ["less", "meno ... di", "meno caro di ieri"],
            ["equal", "(così) ... come", "alto come Marco"],
            ["irregular", "migliore / peggiore", "migliore di questo"]
          ]
        }
      ],
      examples: [
        { it: "Milano è più grande di Verona.", en: "Milan is bigger than Verona.", de: "Mailand ist größer als Verona." },
        { it: "Questo ristorante è meno caro di quello.", en: "This restaurant is less expensive than that one.", de: "Dieses Restaurant ist weniger teuer als jenes." },
        { it: "Anna è brava come Marco, ma oggi sta meglio di lui.", en: "Anna is as good as Marco, but today she's better than him.", de: "Anna ist so gut wie Marco, aber heute geht es ihr besser als ihm." }
      ],
      exercises: [
        {
          prompt: "Completa con 'di', 'che' o 'come': Marco è più alto ___ Luca. Studio più ___ dormo. Sei gentile ___ tua sorella.",
          reveal: {
            body: ["Marco è più alto di Luca (nomi/pronomi -> di). Studio più che dormo (due verbi -> che). Sei gentile come tua sorella (uguaglianza -> come)."]
          }
        },
        {
          prompt: "Confronta due città che conosci: scrivi tre frasi (più... di, meno... di, come).",
          reveal: {
            examples: [
              { it: "Roma è più grande di Firenze." },
              { it: "Firenze è meno caotica di Roma." },
              { it: "Firenze è bella come Roma." }
            ]
          }
        }
      ],
      questions: [
        { id: "g-comp-di", type: "multiple-choice", prompt: "'Marco è più alto ___ Luca.'", answer: "di", options: ["di", "che", "come", "quanto"], explanation: "Before a name/pronoun use di." },
        { id: "g-comp-che", type: "multiple-choice", prompt: "'Studio più ___ parlo.' (two verbs)", answer: "che", options: ["che", "di", "come", "quanto"], explanation: "Comparing two verbs -> che." },
        { id: "g-comp-migliore", type: "multiple-choice", prompt: "What is the irregular comparative of 'buono'?", answer: "migliore", options: ["migliore", "più buono", "meglio", "buonissimo"], explanation: "buono -> migliore (adjective)." },
        { id: "g-comp-equal", type: "typed", prompt: "Complete for equality: Anna è alta ___ Marco.", answer: "come", accepted: ["come"] }
      ]
    }
  ],

  vocab: [
    {
      id: "greetings",
      title: "Greetings & how are you",
      status: "ready",
      summary: "Salutare, chiedere come sta una persona, e la differenza tra formale e informale.",
      words: [
        { it: "ciao", def: "Saluto informale per dire buongiorno o arrivederci, con il 'tu'.", ex: "Ciao, come stai?", en: "hello / bye", de: "hallo / tschüss", note: "Informale, tu." },
        { it: "buongiorno", def: "Saluto formale o neutro che si usa la mattina e di giorno.", ex: "Buongiorno, signora Rossi!", en: "good morning / good day", de: "guten Morgen / guten Tag", note: "Formale o neutro." },
        { it: "buonasera", def: "Saluto che si usa la sera.", ex: "Buonasera, come sta?", en: "good evening", de: "guten Abend", note: "Si usa di sera." },
        { it: "salve", def: "Saluto neutro, né troppo formale né informale.", ex: "Salve, posso entrare?", en: "hello", de: "hallo / guten Tag", note: "Saluto neutro." },
        { it: "arrivederci", def: "Formula per salutare quando si va via, formale o neutra.", ex: "Arrivederci e grazie di tutto!", en: "goodbye", de: "auf Wiedersehen", note: "Congedo formale/neutro." },
        { it: "a presto", def: "Formula per salutare quando ci si rivede tra poco tempo.", ex: "Ci vediamo, a presto!", en: "see you soon", de: "bis bald", note: "Congedo." },
        { it: "alla prossima", def: "Formula per salutare fino alla volta successiva.", ex: "Buona giornata, alla prossima!", en: "until next time", de: "bis zum nächsten Mal", note: "Congedo." },
        { it: "come ti chiami?", def: "Domanda informale per chiedere il nome a qualcuno.", ex: "Ciao, come ti chiami?", en: "what is your name?", de: "wie heisst du?", note: "Informale." },
        { it: "come stai?", def: "Domanda informale per chiedere come sta una persona.", ex: "Come stai oggi?", en: "how are you?", de: "wie geht es dir?", note: "Informale." },
        { it: "come sta?", def: "Domanda formale per chiedere come sta una persona.", ex: "Buongiorno, come sta?", en: "how are you?", de: "wie geht es Ihnen?", note: "Formale." },
        { it: "tutto bene", def: "Risposta positiva: va tutto bene.", ex: "Come va? Tutto bene, grazie.", en: "everything is good", de: "alles gut", note: "Risposta comune." },
        { it: "abbastanza bene", def: "Risposta moderatamente positiva.", ex: "Come stai? Abbastanza bene.", en: "quite well", de: "ziemlich gut", note: "Risposta media." },
        { it: "così così", def: "Risposta neutra: né bene né male.", ex: "Come va? Così così.", en: "so-so", de: "so lala", note: "Risposta neutra." },
        { it: "male", def: "Risposta negativa: non bene.", ex: "Oggi sto male, sono stanco.", en: "badly", de: "schlecht", note: "Risposta negativa." }
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
      summary: "Nome, età, origine, dove abiti e cosa studi.",
      words: [
        { it: "mi chiamo", def: "Frase per dire il proprio nome.", ex: "Mi chiamo Lucia, e tu?", en: "my name is / I am called", de: "ich heisse", note: "Da chiamarsi." },
        { it: "sono", def: "Prima persona di 'essere'; si usa per dire chi o come sei.", ex: "Sono italiana.", en: "I am", de: "ich bin", note: "Da essere." },
        { it: "ho ventun anni", def: "Frase per dire l'età; in italiano si usa 'avere' con gli anni.", ex: "Ho ventun anni.", en: "I am twenty-one years old", de: "ich bin einundzwanzig Jahre alt", note: "Avere + anni." },
        { it: "sono tedesca / tedesco", def: "Frase per dire la propria nazionalità.", ex: "Sono tedesco, di Berlino.", en: "I am German", de: "ich bin Deutsche / Deutscher", note: "-a femminile, -o maschile." },
        { it: "abito a Berlino", def: "Frase per dire in quale città vivi; si usa 'a' con le città.", ex: "Abito a Berlino da tre anni.", en: "I live in Berlin", de: "ich wohne in Berlin", note: "'a' con le città." },
        { it: "sono di Verona", def: "Frase per dire da dove vieni; si usa 'di' per l'origine.", ex: "Vivo a Roma, ma sono di Verona.", en: "I am from Verona", de: "ich komme aus Verona", note: "'di' per l'origine." },
        { it: "studio filosofia", def: "Frase per dire cosa studi all'università.", ex: "Studio filosofia e latino.", en: "I study philosophy", de: "ich studiere Philosophie", note: "Materia di studio." },
        { it: "filosofia", def: "La materia che studia il pensiero e le grandi domande sulla vita.", ex: "La filosofia mi appassiona.", en: "philosophy", de: "Philosophie", note: "Materia." },
        { it: "matematica", def: "La materia dei numeri e dei calcoli.", ex: "La matematica è difficile per me.", en: "mathematics", de: "Mathematik", note: "Materia." },
        { it: "storia", def: "La materia che studia il passato.", ex: "Mi piace la storia antica.", en: "history", de: "Geschichte", note: "Materia." },
        { it: "informatica", def: "La materia dei computer e dei programmi.", ex: "Studio informatica all'università.", en: "computer science", de: "Informatik", note: "Materia." },
        { it: "economia e commercio", def: "La materia che studia i soldi, le aziende e il mercato.", ex: "Mio fratello studia economia e commercio.", en: "economics and business", de: "Wirtschaftswissenschaften", note: "Materia." }
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
        { it: "la lavagna", def: "La superficie in classe dove l'insegnante scrive.", ex: "Il professore scrive alla lavagna.", en: "whiteboard / blackboard", de: "die Tafel", note: "Femminile." },
        { it: "la bottiglia", def: "Il contenitore di vetro o plastica per i liquidi.", ex: "C'è una bottiglia d'acqua sul banco.", en: "bottle", de: "die Flasche", note: "Femminile." },
        { it: "lo zaino", def: "La borsa che si porta sulla schiena per i libri.", ex: "Metto i quaderni nello zaino.", en: "backpack", de: "der Rucksack", note: "Maschile; z prende 'lo'." },
        { it: "il quaderno", def: "Il libretto di fogli su cui si scrive.", ex: "Scrivo gli appunti sul quaderno.", en: "notebook", de: "das Heft", note: "Maschile." },
        { it: "il proiettore", def: "L'apparecchio che mostra le immagini sul muro o sullo schermo.", ex: "Il proiettore non funziona oggi.", en: "projector", de: "der Projektor / Beamer", note: "Maschile -ore." },
        { it: "la penna", def: "L'oggetto con cui si scrive con l'inchiostro.", ex: "Mi presti una penna?", en: "pen", de: "der Stift", note: "Femminile." },
        { it: "il libro", def: "L'oggetto fatto di pagine che si legge e si studia.", ex: "Apri il libro a pagina dieci.", en: "book", de: "das Buch", note: "Maschile." },
        { it: "il cellulare", def: "Il telefono che si porta sempre con sé.", ex: "Spegni il cellulare durante la lezione.", en: "mobile phone", de: "das Handy", note: "Maschile -e." },
        { it: "la classe", def: "Il gruppo di studenti, o la stanza dove si studia.", ex: "La mia classe ha venti studenti.", en: "class", de: "die Klasse", note: "Femminile -e." },
        { it: "la lezione", def: "Il periodo di tempo in cui si insegna una materia.", ex: "La lezione di italiano comincia alle nove.", en: "lesson", de: "die Lektion", note: "Femminile -zione." }
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
      status: "ready",
      summary: "Da dove vengono le persone; le forme che cambiano -o/-a e quelle che restano uguali.",
      words: [
        { it: "tedesco / tedesca", def: "La nazionalità di una persona che viene dalla Germania.", ex: "Hans è tedesco, di Monaco.", en: "German", de: "deutsch", note: "Cambia -o/-a." },
        { it: "italiano / italiana", def: "La nazionalità di una persona che viene dall'Italia.", ex: "Giulia è italiana, di Napoli.", en: "Italian", de: "italienisch", note: "Cambia -o/-a." },
        { it: "spagnolo / spagnola", def: "La nazionalità di una persona che viene dalla Spagna.", ex: "Pablo è spagnolo, di Madrid.", en: "Spanish", de: "spanisch", note: "Cambia -o/-a." },
        { it: "russo / russa", def: "La nazionalità di una persona che viene dalla Russia.", ex: "Irina è russa, di Mosca.", en: "Russian", de: "russisch", note: "Cambia -o/-a." },
        { it: "polacco / polacca", def: "La nazionalità di una persona che viene dalla Polonia.", ex: "Marek è polacco.", en: "Polish", de: "polnisch", note: "Cambia -o/-a." },
        { it: "cinese", def: "La nazionalità di chi viene dalla Cina; stessa forma per maschile e femminile.", ex: "Li è cinese, di Shanghai.", en: "Chinese", de: "chinesisch", note: "Uguale m/f." },
        { it: "francese", def: "La nazionalità di chi viene dalla Francia; stessa forma per maschile e femminile.", ex: "Marie è francese, di Parigi.", en: "French", de: "französisch", note: "Uguale m/f." },
        { it: "inglese", def: "La nazionalità di chi viene dall'Inghilterra; stessa forma per maschile e femminile.", ex: "Tom è inglese, di Londra.", en: "English", de: "englisch", note: "Uguale m/f." }
      ],
      questions: [
        { id: "v-nat-cinese", type: "multiple-choice", prompt: "Which nationality keeps the same form for masculine and feminine?", answer: "cinese", options: ["cinese", "russo", "polacco", "spagnolo"] }
      ]
    },
    {
      id: "hobbies",
      title: "Free time & hobbies",
      status: "ready",
      summary: "Parlare di cosa ti piace fare; mi piace, fare, giocare, suonare.",
      words: [
        { it: "nel tempo libero", def: "Nelle ore in cui non lavori e non studi.", ex: "Nel tempo libero leggo molto.", en: "in my free time", de: "in meiner Freizeit", note: "Frase per i passatempi." },
        { it: "leggere", def: "Guardare le parole di un libro e capirle.", ex: "Mi piace leggere romanzi la sera.", en: "to read", de: "lesen", note: "Passatempo." },
        { it: "ascoltare la musica", def: "Sentire canzoni e brani con attenzione.", ex: "Ascolto la musica mentre corro.", en: "to listen to music", de: "Musik hören", note: "Passatempo." },
        { it: "fare sport", def: "Praticare un'attività fisica.", ex: "Faccio sport tre volte alla settimana.", en: "to do sports", de: "Sport machen", note: "fare + attività." },
        { it: "giocare a calcio", def: "Praticare lo sport con la palla e due squadre.", ex: "La domenica gioco a calcio con gli amici.", en: "to play football", de: "Fußball spielen", note: "giocare a + sport." },
        { it: "giocare a tennis", def: "Praticare lo sport con la racchetta e la pallina.", ex: "Gioco a tennis con mio fratello.", en: "to play tennis", de: "Tennis spielen", note: "giocare a + sport." },
        { it: "suonare il piano", def: "Produrre musica con il pianoforte.", ex: "Da piccola ho imparato a suonare il piano.", en: "to play the piano", de: "Klavier spielen", note: "suonare + strumento." },
        { it: "viaggiare", def: "Andare a visitare posti nuovi, vicino o lontano.", ex: "Mi piace viaggiare in estate.", en: "to travel", de: "reisen", note: "Passatempo." },
        { it: "cucinare per gli amici", def: "Preparare da mangiare per gli amici.", ex: "Il sabato mi piace cucinare per gli amici.", en: "to cook for friends", de: "für Freunde kochen", note: "Passatempo." }
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
