window.COURSE = {
  title: "Italian Course",
  description: "A week-by-week Italian course with focused study topics, quizzes, grammar references, and a personal notebook.",
  weeks: [
    {
      id: "week-1",
      title: "Week 1",
      theme: "Unità 0: pronti, partenza, via",
      status: "ready",
      goal: "Introduce yourself, greet people, spell your name, recognize classroom words, and understand the first grammar patterns from Unità 0.",
      outcomes: [
        "Present yourself with name, age, origin, residence, studies, and free-time interests.",
        "Use informal and formal greetings and ask how someone is.",
        "Spell names with the Italian alphabet.",
        "Recognize classroom objects and basic noun gender patterns.",
        "Use subject pronouns and the present forms of chiamarsi, essere, and stare.",
        "Connect Italian expressions with English and German equivalents."
      ],
      topics: [
        {
          id: "presentazioni",
          title: "Presentazioni",
          type: "speaking",
          summary: "The core Week 1 speaking frame: introduce yourself and understand other students' presentations.",
          sections: [
            {
              title: "Modello",
              body: [
                "Ciao, mi chiamo Julia. Ho ventun anni, sono tedesca, abito a Berlino, a Neukolln, ma sono di Buxtehude, vicino ad Amburgo.",
                "Studio filosofia e latino. Nel tempo libero mi piace leggere e ascoltare la musica.",
                "You can also say: sono Julia or il mio nome è Julia, but mi chiamo is the most natural starter form."
              ]
            },
            {
              title: "Connection between languages",
              body: [
                "Italian mi chiamo literally means I call myself. German also uses a verb-based identity phrase: ich heisse. English usually says my name is.",
                "Italian ho ventun anni uses avere, like German ich bin einundzwanzig Jahre alt is structurally different and English says I am twenty-one.",
                "Italian abito a Berlino means I live in Berlin. For origin, use sono di Buxtehude."
              ]
            }
          ],
          vocab: [
            { it: "mi chiamo", en: "my name is / I am called", de: "ich heisse", note: "Reflexive form of chiamarsi." },
            { it: "sono", en: "I am", de: "ich bin", note: "From essere." },
            { it: "il mio nome è", en: "my name is", de: "mein Name ist", note: "Understandable, but mi chiamo is more common for introductions." },
            { it: "ho ventun anni", en: "I am twenty-one years old", de: "ich bin einundzwanzig Jahre alt", note: "Italian uses avere: ho anni." },
            { it: "sono tedesca / tedesco", en: "I am German", de: "ich bin Deutsche / Deutscher", note: "Use -a for feminine, -o for masculine." },
            { it: "abito a Berlino", en: "I live in Berlin", de: "ich wohne in Berlin", note: "Use a with cities." },
            { it: "sono di Buxtehude", en: "I am from Buxtehude", de: "ich komme aus Buxtehude", note: "Use di for origin." },
            { it: "vicino ad Amburgo", en: "near Hamburg", de: "in der Nähe von Hamburg", note: "ad before a vowel can sound smoother than a." },
            { it: "studio filosofia", en: "I study philosophy", de: "ich studiere Philosophie", note: "University subject phrase." },
            { it: "nel tempo libero", en: "in my free time", de: "in meiner Freizeit", note: "Useful phrase for hobbies." },
            { it: "mi piace leggere", en: "I like reading", de: "ich lese gern", note: "Mi piace + infinitive." }
          ],
          examples: [
            { it: "Ciao, mi chiamo Julia.", en: "Hi, my name is Julia.", de: "Hallo, ich heisse Julia." },
            { it: "Ho ventun anni.", en: "I am twenty-one years old.", de: "Ich bin einundzwanzig Jahre alt." },
            { it: "Sono tedesca.", en: "I am German.", de: "Ich bin Deutsche." },
            { it: "Abito a Berlino, ma sono di Buxtehude.", en: "I live in Berlin, but I am from Buxtehude.", de: "Ich wohne in Berlin, aber ich komme aus Buxtehude." },
            { it: "Nel tempo libero mi piace leggere.", en: "In my free time I like reading.", de: "In meiner Freizeit lese ich gern." }
          ],
          exercises: [
            {
              prompt: "Write your own full presentation using name, age, nationality, city, origin, studies, and one hobby.",
              answer: "Ciao, mi chiamo ___. Ho ___ anni. Sono ___. Abito a ___, ma sono di ___. Studio ___. Nel tempo libero mi piace ___."
            },
            {
              prompt: "Translate to Italian: I live in Berlin, but I am from Hamburg.",
              answer: "Abito a Berlino, ma sono di Amburgo."
            },
            {
              prompt: "Say three hobbies with mi piace.",
              answer: "Mi piace leggere. Mi piace ascoltare la musica. Mi piace viaggiare."
            }
          ],
          questions: [
            {
              id: "w1-presentazioni-mi-chiamo",
              type: "multiple-choice",
              prompt: "What is the most natural Italian starter phrase for 'My name is Julia'?",
              answer: "Mi chiamo Julia.",
              options: ["Mi chiamo Julia.", "Ho Julia.", "Abito Julia.", "Sto Julia."],
              explanation: "Mi chiamo means I call myself and is the normal introduction phrase."
            },
            {
              id: "w1-presentazioni-age",
              type: "typed",
              prompt: "Type in Italian: I am twenty-one years old.",
              answer: "ho ventun anni",
              accepted: ["ho ventun anni", "ho ventuno anni"],
              explanation: "Italian uses avere for age: ho ... anni."
            },
            {
              id: "w1-presentazioni-live",
              type: "typed",
              prompt: "Type in Italian: I live in Berlin.",
              answer: "abito a berlino",
              accepted: ["abito a berlino"],
              explanation: "Use a with cities."
            },
            {
              id: "w1-presentazioni-origin",
              type: "multiple-choice",
              prompt: "How do you say 'I am from Buxtehude'?",
              answer: "Sono di Buxtehude.",
              options: ["Sono di Buxtehude.", "Abito di Buxtehude.", "Ho Buxtehude.", "Sto a Buxtehude."],
              explanation: "Sono di marks origin."
            },
            {
              id: "w1-presentazioni-free-time",
              type: "multiple-choice",
              prompt: "What does 'nel tempo libero' mean?",
              answer: "in my free time",
              options: ["in my free time", "near the city", "at university", "my surname is"],
              explanation: "Nel tempo libero introduces hobbies."
            }
          ]
        },
        {
          id: "saluti",
          title: "Saluti e come stai",
          type: "conversation",
          summary: "Greeting, saying goodbye, asking how someone is, and distinguishing informal from formal language.",
          sections: [
            {
              title: "Saluti",
              body: [
                "Ciao is informal and can mean hello or bye. Use it with tu.",
                "Buongiorno is safer and more formal. Buonasera is used in the evening.",
                "Arrivederci, a presto, and alla prossima are goodbye formulas."
              ]
            },
            {
              title: "Come stai?",
              body: [
                "Informal: Come stai? Formal: Come sta?",
                "Common answers: molto bene, benissimo, tutto bene, abbastanza bene, così così, male, molto male.",
                "The polite plural or formal plural uses voi: Come state?"
              ]
            }
          ],
          vocab: [
            { it: "ciao", en: "hello / bye", de: "hallo / tschuss", note: "Informal, tu." },
            { it: "buongiorno", en: "good morning / good day", de: "guten Morgen / guten Tag", note: "Formal or neutral." },
            { it: "buonasera", en: "good evening", de: "guten Abend", note: "Used when it is evening." },
            { it: "salve", en: "hello", de: "hallo / guten Tag", note: "Neutral greeting." },
            { it: "arrivederci", en: "goodbye", de: "auf Wiedersehen", note: "Formal or neutral goodbye." },
            { it: "a presto", en: "see you soon", de: "bis bald", note: "Useful closing phrase." },
            { it: "alla prossima", en: "until next time", de: "bis zum nächsten Mal", note: "Goodbye phrase." },
            { it: "come ti chiami?", en: "what is your name?", de: "wie heisst du?", note: "Informal." },
            { it: "come sta?", en: "how are you?", de: "wie geht es Ihnen?", note: "Formal." },
            { it: "come stai?", en: "how are you?", de: "wie geht es dir?", note: "Informal." },
            { it: "tutto bene", en: "everything is good", de: "alles gut", note: "Common answer." },
            { it: "abbastanza bene", en: "quite well", de: "ziemlich gut", note: "Moderate positive answer." },
            { it: "così così", en: "so-so", de: "so lala", note: "Neutral answer." },
            { it: "male", en: "badly", de: "schlecht", note: "Negative answer." }
          ],
          examples: [
            { it: "Ciao, come ti chiami?", en: "Hi, what is your name?", de: "Hallo, wie heisst du?" },
            { it: "Mi chiamo Tarik. E tu?", en: "My name is Tarik. And you?", de: "Ich heisse Tarik. Und du?" },
            { it: "Buongiorno, professoressa. Come sta?", en: "Good morning, professor. How are you?", de: "Guten Morgen, Frau Professorin. Wie geht es Ihnen?" },
            { it: "Sto bene, grazie. E voi?", en: "I am well, thank you. And you all?", de: "Mir geht es gut, danke. Und ihr / Sie?" },
            { it: "Arrivederci, alla prossima!", en: "Goodbye, until next time!", de: "Auf Wiedersehen, bis zum nächsten Mal!" }
          ],
          exercises: [
            {
              prompt: "Create a formal mini-dialogue with buongiorno, come sta, and arrivederci.",
              answer: "Buongiorno, professoressa. Come sta? Sto bene, grazie. Arrivederci."
            },
            {
              prompt: "Create an informal mini-dialogue with ciao, come stai, and tutto bene.",
              answer: "Ciao, come stai? Tutto bene, grazie. E tu?"
            }
          ],
          questions: [
            {
              id: "w1-saluti-ciao",
              type: "multiple-choice",
              prompt: "When do you use 'ciao'?",
              answer: "Informally, for hello or bye.",
              options: ["Informally, for hello or bye.", "Only formally.", "Only at night.", "Only with Lei."],
              explanation: "Ciao belongs to informal tu situations."
            },
            {
              id: "w1-saluti-buonasera",
              type: "multiple-choice",
              prompt: "Which greeting means 'good evening'?",
              answer: "buonasera",
              options: ["buonasera", "a presto", "arrivederci", "così così"]
            },
            {
              id: "w1-saluti-formal-how",
              type: "typed",
              prompt: "Type the formal Italian for: How are you?",
              answer: "come sta",
              accepted: ["come sta", "come sta?"],
              explanation: "Formal singular uses sta."
            },
            {
              id: "w1-saluti-informal-how",
              type: "typed",
              prompt: "Type the informal Italian for: How are you?",
              answer: "come stai",
              accepted: ["come stai", "come stai?"],
              explanation: "Informal singular uses stai."
            },
            {
              id: "w1-saluti-so-so",
              type: "multiple-choice",
              prompt: "What does 'così così' mean?",
              answer: "so-so",
              options: ["so-so", "very well", "goodbye", "thank you"]
            }
          ]
        },
        {
          id: "alfabeto-spelling",
          title: "L'alfabeto e lo spelling",
          type: "pronunciation",
          summary: "Italian has 21 native alphabet letters plus foreign letters used in borrowed words and spelling names.",
          sections: [
            {
              title: "Alfabeto base",
              body: [
                "The basic Italian alphabet has 21 letters: a b c d e f g h i l m n o p q r s t u v z.",
                "The foreign letters are j, k, w, x, y. They are useful for names, borrowed words, and spelling."
              ]
            },
            {
              title: "Domande utili",
              body: [
                "Come si scrive? means How is it spelled?",
                "Si scrive ... means It is spelled ..."
              ]
            }
          ],
          vocab: [
            { it: "a", en: "a", de: "a", note: "Letter name." },
            { it: "b", en: "b", de: "b", note: "Letter name." },
            { it: "c", en: "c", de: "c", note: "Letter name." },
            { it: "h", en: "acca", de: "h", note: "Italian letter name: acca." },
            { it: "q", en: "cu", de: "q", note: "Italian letter name: cu." },
            { it: "r", en: "erre", de: "r", note: "Rolled r sound." },
            { it: "s", en: "esse", de: "s", note: "Letter name." },
            { it: "z", en: "zeta", de: "z", note: "Letter name." },
            { it: "j", en: "i lunga", de: "j", note: "Foreign letter." },
            { it: "k", en: "kappa", de: "k", note: "Foreign letter." },
            { it: "w", en: "doppia vu", de: "w", note: "Foreign letter." },
            { it: "x", en: "ics", de: "x", note: "Foreign letter." },
            { it: "y", en: "ipsilon / i greca", de: "y", note: "Foreign letter." }
          ],
          examples: [
            { it: "Come si scrive?", en: "How is it spelled?", de: "Wie schreibt man das?" },
            { it: "Si scrive G-I-U-L-I-A.", en: "It is spelled G-I-U-L-I-A.", de: "Man schreibt es G-I-U-L-I-A." },
            { it: "Come ti chiami di cognome?", en: "What is your surname?", de: "Wie heisst du mit Nachnamen?" },
            { it: "Di cognome mi chiamo Rossi.", en: "My surname is Rossi.", de: "Mit Nachnamen heisse ich Rossi." }
          ],
          exercises: [
            {
              prompt: "Spell your first name in Italian letter names.",
              answer: "Use the alphabet table and say: Si scrive ..."
            },
            {
              prompt: "Ask someone for their surname and spelling.",
              answer: "Come ti chiami di cognome? Come si scrive?"
            }
          ],
          questions: [
            {
              id: "w1-alfabeto-how-spelled",
              type: "typed",
              prompt: "Type in Italian: How is it spelled?",
              answer: "come si scrive",
              accepted: ["come si scrive", "come si scrive?"]
            },
            {
              id: "w1-alfabeto-k",
              type: "multiple-choice",
              prompt: "What is the Italian name of the letter k?",
              answer: "kappa",
              options: ["kappa", "acca", "cu", "ipsilon"]
            },
            {
              id: "w1-alfabeto-w",
              type: "multiple-choice",
              prompt: "What is the Italian name of the letter w?",
              answer: "doppia vu",
              options: ["doppia vu", "i lunga", "ics", "zeta"]
            },
            {
              id: "w1-alfabeto-surname",
              type: "multiple-choice",
              prompt: "What does 'di cognome' refer to?",
              answer: "surname",
              options: ["surname", "first name", "age", "city"]
            }
          ]
        },
        {
          id: "lezione-in-classe",
          title: "A lezione, in classe",
          type: "vocabulary",
          summary: "Classroom objects and study words from the workbook pages.",
          sections: [
            {
              title: "Oggetti in classe",
              body: [
                "This topic collects the objects shown in the classroom listening exercise: lavagna, bottiglia, zaino, quaderno, proiettore, penna, libro, cellulare.",
                "Use these words to practice spelling and noun gender."
              ]
            }
          ],
          vocab: [
            { it: "la lavagna", en: "whiteboard / blackboard", de: "die Tafel", note: "Feminine, ends in -a." },
            { it: "la bottiglia", en: "bottle", de: "die Flasche", note: "Feminine." },
            { it: "lo zaino", en: "backpack", de: "der Rucksack", note: "Masculine; z takes lo." },
            { it: "il quaderno", en: "notebook", de: "das Heft", note: "Masculine." },
            { it: "il proiettore", en: "projector", de: "der Projektor / Beamer", note: "Masculine -ore." },
            { it: "la penna", en: "pen", de: "der Stift / die Feder", note: "Feminine." },
            { it: "il libro", en: "book", de: "das Buch", note: "Masculine." },
            { it: "il cellulare", en: "mobile phone", de: "das Handy", note: "Masculine -e." },
            { it: "la classe", en: "class", de: "die Klasse", note: "Feminine -e." },
            { it: "la lezione", en: "lesson", de: "die Unterrichtsstunde / Lektion", note: "Feminine -zione." }
          ],
          examples: [
            { it: "Come si scrive zaino?", en: "How do you spell zaino?", de: "Wie schreibt man zaino?" },
            { it: "Il cellulare è sul tavolo.", en: "The mobile phone is on the table.", de: "Das Handy ist auf dem Tisch." }
          ],
          exercises: [
            {
              prompt: "Choose five classroom objects and spell them aloud.",
              answer: "Example: libro: elle, i, bi, erre, o."
            },
            {
              prompt: "Sort the words into masculine and feminine.",
              answer: "Masculine: zaino, quaderno, proiettore, libro, cellulare. Feminine: lavagna, bottiglia, penna, classe, lezione."
            }
          ],
          questions: [
            {
              id: "w1-classe-book",
              type: "multiple-choice",
              prompt: "What does 'libro' mean?",
              answer: "book",
              options: ["book", "pen", "class", "backpack"]
            },
            {
              id: "w1-classe-pen",
              type: "multiple-choice",
              prompt: "What does 'penna' mean?",
              answer: "pen",
              options: ["pen", "phone", "bottle", "notebook"]
            },
            {
              id: "w1-classe-backpack",
              type: "typed",
              prompt: "Type the Italian for: backpack",
              answer: "zaino",
              accepted: ["zaino", "lo zaino"]
            },
            {
              id: "w1-classe-phone",
              type: "multiple-choice",
              prompt: "What is 'cellulare'?",
              answer: "mobile phone",
              options: ["mobile phone", "projector", "whiteboard", "lesson"]
            },
            {
              id: "w1-classe-lesson",
              type: "multiple-choice",
              prompt: "Which word means 'lesson'?",
              answer: "lezione",
              options: ["lezione", "classe", "penna", "quaderno"]
            }
          ]
        },
        {
          id: "fonetica-c-g",
          title: "Fonetica: c, ci, ch, g, gh",
          type: "pronunciation",
          summary: "Pronunciation rules for c and g before different vowels.",
          sections: [
            {
              title: "Regole della lettera c",
              body: [
                "c + i/e is pronounced like English ch: ciao, arrivederci, cellulare, piacere.",
                "c + a/o/u or ch is pronounced like k: Carlo, come, cucina, Michele.",
                "The workbook connects this with German examples: c before i/e like Tschüss; ch before i/e like Kaktus."
              ]
            },
            {
              title: "Regole della lettera g",
              body: [
                "g + i/e is pronounced like English j: Giulia, Genova, buongiorno.",
                "g + a/o/u or gh is pronounced like hard g: Gabriele, dialogo, guardare, funghi, spaghetti.",
                "The workbook connects this with German examples: g before i/e like Gin; gh before i/e like Garten."
              ]
            }
          ],
          vocab: [
            { it: "ciao", en: "hello / bye", de: "hallo / tschuss", note: "c + ia -> ch sound." },
            { it: "arrivederci", en: "goodbye", de: "auf Wiedersehen", note: "ci -> ch sound." },
            { it: "cellulare", en: "mobile phone", de: "Handy", note: "ce -> ch sound." },
            { it: "piacere", en: "nice to meet you / pleasure", de: "freut mich / Vergnügen", note: "ce -> ch sound." },
            { it: "come", en: "how / as", de: "wie", note: "co -> k sound." },
            { it: "Michele", en: "Michele", de: "Michele", note: "che -> k sound." },
            { it: "Giulia", en: "Giulia", de: "Giulia", note: "gi -> j sound." },
            { it: "Genova", en: "Genoa", de: "Genua", note: "ge -> j sound." },
            { it: "spaghetti", en: "spaghetti", de: "Spaghetti", note: "ghe -> hard g." },
            { it: "funghi", en: "mushrooms", de: "Pilze", note: "ghi -> hard g." }
          ],
          examples: [
            { it: "Ciao, piacere!", en: "Hi, nice to meet you!", de: "Hallo, freut mich!" },
            { it: "Michele mangia spaghetti.", en: "Michele eats spaghetti.", de: "Michele isst Spaghetti." },
            { it: "Giulia è di Genova.", en: "Giulia is from Genoa.", de: "Giulia kommt aus Genua." }
          ],
          exercises: [
            {
              prompt: "Sort these by sound: ciao, come, Michele, cellulare.",
              answer: "ch sound: ciao, cellulare. k sound: come, Michele."
            },
            {
              prompt: "Sort these by sound: Giulia, guardare, funghi, Genova.",
              answer: "j sound: Giulia, Genova. hard g: guardare, funghi."
            }
          ],
          questions: [
            {
              id: "w1-fonetica-ci",
              type: "multiple-choice",
              prompt: "In 'ciao', the c sounds like...",
              answer: "ch",
              options: ["ch", "k", "g", "s"]
            },
            {
              id: "w1-fonetica-che",
              type: "multiple-choice",
              prompt: "In 'Michele', ch sounds like...",
              answer: "k",
              options: ["k", "ch", "j", "sh"]
            },
            {
              id: "w1-fonetica-gi",
              type: "multiple-choice",
              prompt: "In 'Giulia', g sounds like...",
              answer: "j",
              options: ["j", "hard g", "k", "s"]
            },
            {
              id: "w1-fonetica-ghi",
              type: "multiple-choice",
              prompt: "In 'funghi', gh sounds like...",
              answer: "hard g",
              options: ["hard g", "j", "ch", "sh"]
            }
          ]
        },
        {
          id: "grammatica-base",
          title: "Grammatica: pronomi, verbi, sostantivi",
          type: "grammar",
          summary: "Subject pronouns, present forms of chiamarsi, essere, stare, and the first noun gender rules.",
          sections: [
            {
              title: "Pronomi soggetto",
              body: [
                "io = I, tu = you informal, lui/lei/Lei = he/she/formal you, noi = we, voi = you plural, loro = they.",
                "Italian often leaves out the subject pronoun because the verb form already shows the person.",
                "Lei with a capital L is formal singular. Voi can be plural you, and in formal plural contexts it can address more than one person politely."
              ]
            },
            {
              title: "Indicativo presente",
              body: [
                "chiamarsi: mi chiamo, ti chiami, si chiama, ci chiamiamo, vi chiamate, si chiamano.",
                "essere: sono, sei, è, siamo, siete, sono.",
                "stare: sto, stai, sta, stiamo, state, stanno."
              ]
            },
            {
              title: "Sostantivi singolari",
              body: [
                "Nouns ending in -o are normally masculine: libro.",
                "Nouns ending in -a are normally feminine: penna.",
                "Nouns ending in -e can be masculine or feminine: studente, lezione.",
                "Useful patterns: -zione words are usually feminine, -ore words are usually masculine."
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
            { it: "loro", en: "they", de: "sie", note: "Third person plural." },
            { it: "il libro", en: "the book", de: "das Buch", note: "Masculine -o." },
            { it: "la penna", en: "the pen", de: "der Stift / die Feder", note: "Feminine -a." },
            { it: "lo studente", en: "the student", de: "der Student", note: "Masculine -e." },
            { it: "la lezione", en: "the lesson", de: "die Lektion", note: "Feminine -zione." }
          ],
          examples: [
            { it: "Mi chiamo Stefano. E tu, come ti chiami?", en: "My name is Stefano. And you, what is your name?", de: "Ich heisse Stefano. Und du, wie heisst du?" },
            { it: "Io sono Elena e lei è Anna.", en: "I am Elena and she is Anna.", de: "Ich bin Elena und sie ist Anna." },
            { it: "Noi stiamo bene, grazie.", en: "We are well, thank you.", de: "Uns geht es gut, danke." },
            { it: "Lei è il signor Draghi, vero?", en: "You are Mr. Draghi, right?", de: "Sie sind Herr Draghi, oder?" },
            { it: "Voi siete il signor e la signora Colombo?", en: "Are you Mr. and Mrs. Colombo?", de: "Sind Sie Herr und Frau Colombo?" }
          ],
          exercises: [
            {
              prompt: "Complete: io ___, tu sei, lui/lei è, noi siamo, voi siete, loro ___.",
              answer: "sono, sono"
            },
            {
              prompt: "Complete: io sto, tu ___, lui/lei sta, noi stiamo, voi state, loro ___.",
              answer: "stai, stanno"
            },
            {
              prompt: "Choose masculine or feminine: zaino, universita, cellulare, soluzione, citta, quaderno, proiettore, arte.",
              answer: "Masculine: zaino, cellulare, quaderno, proiettore. Feminine: universita, soluzione, citta, arte."
            }
          ],
          questions: [
            {
              id: "w1-grammar-io",
              type: "multiple-choice",
              prompt: "What does 'io' mean?",
              answer: "I",
              options: ["I", "you", "we", "they"]
            },
            {
              id: "w1-grammar-formal-you",
              type: "multiple-choice",
              prompt: "Which pronoun is formal singular 'you'?",
              answer: "Lei",
              options: ["Lei", "tu", "io", "loro"]
            },
            {
              id: "w1-grammar-essere-noi",
              type: "typed",
              prompt: "Complete with essere: noi ___",
              answer: "siamo",
              accepted: ["siamo"]
            },
            {
              id: "w1-grammar-stare-tu",
              type: "typed",
              prompt: "Complete with stare: tu ___",
              answer: "stai",
              accepted: ["stai"]
            },
            {
              id: "w1-grammar-chiamarsi-loro",
              type: "typed",
              prompt: "Complete with chiamarsi: loro ___",
              answer: "si chiamano",
              accepted: ["si chiamano"]
            },
            {
              id: "w1-grammar-libro-gender",
              type: "multiple-choice",
              prompt: "What is the usual gender of nouns ending in -o, like libro?",
              answer: "masculine",
              options: ["masculine", "feminine", "always plural", "formal"]
            },
            {
              id: "w1-grammar-zione",
              type: "multiple-choice",
              prompt: "Words ending in -zione, like lezione, are usually...",
              answer: "feminine",
              options: ["feminine", "masculine", "verbs", "pronouns"]
            }
          ]
        },
        {
          id: "lessico-personale",
          title: "Lessico personale",
          type: "vocabulary",
          summary: "Nationalities, cities, university subjects, and hobbies for building your own introduction.",
          sections: [
            {
              title: "Nazionalita",
              body: [
                "Many nationalities change -o/-a for masculine and feminine: bulgaro/bulgara, croato/croata, persiano/persiana.",
                "Some forms in this list do not visibly change between masculine and feminine: cinese, francese, inglese."
              ]
            },
            {
              title: "Tempo libero",
              body: [
                "Use mi piace + infinitive for a single activity: mi piace leggere.",
                "For sports and activities, fare is very productive: fare sport, fare una passeggiata, fare spese."
              ]
            }
          ],
          vocab: [
            { it: "bulgaro / bulgara", en: "Bulgarian", de: "bulgarisch", note: "Nationality." },
            { it: "croato / croata", en: "Croatian", de: "kroatisch", note: "Nationality." },
            { it: "cinese", en: "Chinese", de: "chinesisch", note: "Same visible form for masculine/feminine." },
            { it: "francese", en: "French", de: "französisch", note: "Same visible form for masculine/feminine." },
            { it: "inglese", en: "English", de: "englisch", note: "Same visible form for masculine/feminine." },
            { it: "polacco / polacca", en: "Polish", de: "polnisch", note: "Nationality." },
            { it: "russo / russa", en: "Russian", de: "russisch", note: "Nationality." },
            { it: "spagnolo / spagnola", en: "Spanish", de: "spanisch", note: "Nationality." },
            { it: "turco / turca", en: "Turkish", de: "türkisch", note: "Nationality." },
            { it: "ucraino / ucraina", en: "Ukrainian", de: "ukrainisch", note: "Nationality." },
            { it: "filosofia", en: "philosophy", de: "Philosophie", note: "Subject." },
            { it: "latino", en: "Latin", de: "Latein", note: "Subject." },
            { it: "matematica", en: "mathematics", de: "Mathematik", note: "Subject." },
            { it: "biologia", en: "biology", de: "Biologie", note: "Subject." },
            { it: "storia", en: "history", de: "Geschichte", note: "Subject." },
            { it: "informatica", en: "computer science", de: "Informatik", note: "Subject." },
            { it: "economia e commercio", en: "economics and business", de: "Wirtschaftswissenschaften", note: "Subject." },
            { it: "leggere", en: "to read", de: "lesen", note: "Hobby." },
            { it: "ascoltare la musica", en: "to listen to music", de: "Musik hören", note: "Hobby." },
            { it: "fare sport", en: "to do sports", de: "Sport machen", note: "Hobby." },
            { it: "incontrare gli amici", en: "to meet friends", de: "Freunde treffen", note: "Hobby." },
            { it: "giocare a tennis", en: "to play tennis", de: "Tennis spielen", note: "Use giocare a for sports/games." },
            { it: "giocare a calcio", en: "to play football", de: "Fußball spielen", note: "Use giocare a." },
            { it: "suonare il piano", en: "to play the piano", de: "Klavier spielen", note: "Use suonare for instruments." },
            { it: "cucinare per gli amici", en: "to cook for friends", de: "für Freunde kochen", note: "Hobby." },
            { it: "viaggiare", en: "to travel", de: "reisen", note: "Useful personal learning word." }
          ],
          examples: [
            { it: "Studio informatica.", en: "I study computer science.", de: "Ich studiere Informatik." },
            { it: "Nel tempo libero mi piace viaggiare.", en: "In my free time I like travelling.", de: "In meiner Freizeit reise ich gern." },
            { it: "Mi piace giocare a calcio.", en: "I like playing football.", de: "Ich spiele gern Fußball." },
            { it: "Mi piace suonare il piano.", en: "I like playing the piano.", de: "Ich spiele gern Klavier." }
          ],
          exercises: [
            {
              prompt: "Choose three subjects and build sentences with Studio...",
              answer: "Studio filosofia. Studio latino. Studio informatica."
            },
            {
              prompt: "Choose five hobbies and build sentences with Mi piace...",
              answer: "Mi piace leggere. Mi piace viaggiare. Mi piace cucinare. Mi piace nuotare. Mi piace disegnare."
            }
          ],
          questions: [
            {
              id: "w1-lessico-philosophy",
              type: "multiple-choice",
              prompt: "What does 'filosofia' mean?",
              answer: "philosophy",
              options: ["philosophy", "history", "biology", "economics"]
            },
            {
              id: "w1-lessico-informatica",
              type: "multiple-choice",
              prompt: "What does 'informatica' mean?",
              answer: "computer science",
              options: ["computer science", "chemistry", "art history", "geology"]
            },
            {
              id: "w1-lessico-read",
              type: "typed",
              prompt: "Type the Italian infinitive for: to read",
              answer: "leggere",
              accepted: ["leggere"]
            },
            {
              id: "w1-lessico-travel",
              type: "typed",
              prompt: "Type the Italian infinitive for: to travel",
              answer: "viaggiare",
              accepted: ["viaggiare"]
            },
            {
              id: "w1-lessico-football",
              type: "multiple-choice",
              prompt: "Which phrase means 'to play football'?",
              answer: "giocare a calcio",
              options: ["giocare a calcio", "suonare il piano", "fare spese", "ascoltare la musica"]
            }
          ]
        }
      ],
      homework: [
        "Write and rehearse your full personal introduction.",
        "Spell your first name and surname aloud using Italian letter names.",
        "Create two dialogues: one informal with ciao and one formal with buongiorno.",
        "Make a personal list of 10 hobbies or travel phrases and save them in the notebook."
      ]
    }
  ],
  grammar: [
    {
      id: "subject-pronouns",
      title: "Pronomi soggetto",
      summary: "Italian subject pronouns connect clearly with English and German, but Italian often leaves them out.",
      points: [
        "io = I = ich.",
        "tu = informal you = du.",
        "lui/lei = he/she = er/sie.",
        "Lei = formal you = Sie.",
        "noi = we = wir; voi = you plural = ihr/Sie; loro = they = sie.",
        "Italian often omits the pronoun: Mi chiamo Stefano, not Io mi chiamo Stefano every time."
      ]
    },
    {
      id: "essere-stare-chiamarsi",
      title: "Essere, stare, chiamarsi",
      summary: "The first three verb patterns from Week 1.",
      points: [
        "essere: sono, sei, è, siamo, siete, sono.",
        "stare: sto, stai, sta, stiamo, state, stanno.",
        "chiamarsi: mi chiamo, ti chiami, si chiama, ci chiamiamo, vi chiamate, si chiamano.",
        "Come stai? is informal. Come sta? is formal."
      ]
    },
    {
      id: "noun-gender",
      title: "Sostantivi singolari",
      summary: "The first noun gender patterns from the workbook.",
      points: [
        "Nouns ending in -o are normally masculine: libro.",
        "Nouns ending in -a are normally feminine: penna.",
        "Nouns ending in -e can be masculine or feminine: studente, lezione.",
        "Words ending in -zione are usually feminine: lezione, soluzione.",
        "Words ending in -ore are usually masculine: proiettore."
      ]
    },
    {
      id: "pronunciation-c-g",
      title: "Fonetica: c and g",
      summary: "Italian c and g change sound depending on the following letter.",
      points: [
        "c + e/i sounds like ch: ciao, cellulare, arrivederci.",
        "c + a/o/u sounds like k: Carlo, come, cucina.",
        "ch + e/i keeps the k sound: Michele.",
        "g + e/i sounds like j: Giulia, Genova.",
        "gh + e/i keeps the hard g sound: spaghetti, funghi."
      ]
    },
    {
      id: "introductions",
      title: "Presentarsi",
      summary: "Core sentence frames for introducing yourself.",
      points: [
        "Mi chiamo Julia = My name is Julia = Ich heisse Julia.",
        "Ho ventun anni = I am twenty-one = Ich bin einundzwanzig Jahre alt.",
        "Abito a Berlino = I live in Berlin = Ich wohne in Berlin.",
        "Sono di Buxtehude = I am from Buxtehude = Ich komme aus Buxtehude.",
        "Nel tempo libero mi piace leggere = In my free time I like reading = In meiner Freizeit lese ich gern."
      ]
    }
  ]
};
