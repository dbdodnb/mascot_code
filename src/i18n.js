// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: { 
        translation: { 
            about: "About us",
            accomodations: "Accomodations",
            faq: "FAQ",
            support: "Support us",
            headerInfo: "Camp MASCOT is a 10-day program for Ukrainian proactive teenagers aimed to build a bright future in Ukraine.",
            applications: "Applications will be opened here soon!",
            allAbout: "MASCOT is all about people",
            about1: "We believe that what truly makes camp unforgettable are the connections we build, the friendships we forge, and the community that stands together. Our goal is to create a safe and supportive space where everyone feels valued, respected, and encouraged to grow.",
            about2: "Since 2010, about 16 camps have been implemented for more than 900 teenagers.",
            values: "Values",
            respect: "Respect",
            respectDef: "We do value each person equally",
            inclusivity: "Inslusivity",
            inclusivityDef: "We celebrate each and every background",
            communication: "Communication",
            communicationDef: "We believe it’s an honest, open, and supportive key to solve any situation",
            trust: "Trust",
            trustDef: "We provide a comfortable safe space for everyone",
            community: "Community",
            communityDef: "We are also the same people who wanna trust each other",
            equality: "Equality and diversity",
            equalityDef: "We celebrate each and every background",
            join: "Who can join the camp?",
            join1: "15-20 years old",
            join2: "All over Ukraine",
            join3: "72 participants",
            join4: "Ready to engage, learn, and grow teenagers",
            accomodationsTitle: "What do we provide?",
            accomodations1: "Location on the West of Ukraine",
            accomodations2: "Comfortable rooms for 4-6 peopled",
            accomodations3: "Bomb shelter, medical specialist, and security during the program",
            accomodations4: "3-times food course with vegetarian and vegan options",
            organizers: "Organizers 2025",
            sasha: "Oleksandra Viskovatova",
            nystia: "Anastasiia Khomenko",
            alex: "Oleksandr Marchyshak",
            yulia: "Yuliia Buhera",
            illia: "Illia Chaikovskyi",
            reviews: "Reviews",
            lisaName: "Lisa Voloshyna",
            lisaCity: "Kyiv",
            lisaReview: "MASCOT is like a mini life that really changes me. I’ve overcome some of my fears, found new emotions, and now I feel like a different person. Everything that fills the camp — lectures, activities, energizers — will stay in my heart forever 💋",
            marynaName: "Maryna Polyvach",
            marynaCity: "Kyiv",
            marynaReview: "Every year, I return to MASCOT for the incredible people and the atmosphere they create. This is a place where I feel comfortable and happy, surrounded by people who inspire me to create even more throughout the year.",
            danyloName: "Danylo Domskyi",
            danyloCity: "Zhytomyr",
            danyloReview: "MASCOT is something that changes your life once and for all. Once you come to this camp, trust me, it becomes a part of your life immediately. The people, atmosphere, values, activities — they all enter your life and stay with you for years to come.",
            anastasiiaName: "Anastasiia Miniailo",
            anastasiiaCity: "Kharkiv",
            anastasiiaReview: "MASCOT is the place where I met so many different strangers on the first day, that on the last day I became an indestructible piece of my soul. MASCOT is the place where I forgot for 10 days about everyday personal space bubbles, by living inside bubbles full of energizers, PDM sessions, incredible lectures and unimaginably cool people.  MASCOT is the place that gave me invaluable experience of getting to know other parts of the community, the one you can’t explain in 3 sentences, the one you need 20 bottles of water for, to stay hydrated after a 4th hour of unstoppable speech.",
            olenaName: "Olena Khiznychenko",
            olenaCity: "Mykolaiv",
            olenaReview: "Despite having attended dozens of projects before, MASCOT is the best one I have ever been to. It is a place with the closest knit-tight community, where I met people that I can easily call family just after one and a half weeks. Friendships made at MASCOT will last for years after the project.",
            partners: "Our partners",
            faqTitle: "Any questions?",
            faq1: "Is there any participance fee?",
            faqAnsw1: "Our camp is non-profit, and all counselors and organizers work on a volunteer basis. Therefore, last year the participant fee was only 1700 UAH for organizational expenses (accommodation, meals, and gifts). An exact amount for the next year camp will be announced soon.",
            faq2: "What safety measures are in place at the camp?",
            faqAnsw2: "The camp has strict safety measures, including 24-hour access to medical staff, a teen psychologist, location security, and adherence to all sanitary standards. The camp area also has access to a bomb shelter, which all participants are required to go to in case of danger.",
            faq3: "How are language classes conducted?",
            faqAnsw3: "<strong>Duration of one lesson:</strong> 50 minutes. The break between them varies from 10 to 30 minutes, depending on the workload.\n\nThis year's program includes classes on the following topics: human rights, state policy, economy, ecology, culture, and art, as well as additional classes on project management. At the end of the camp, all participants implement a social project.\n\nDuring the program, all participants communicate only in English. In case of an emergency, we switch to Ukrainian.",
            faq4: "How is the staff selected?",
            faqAnsw4: "The team consists of adult volunteers with an English proficiency of at least Advanced level and an active pro-Ukrainian stance. It is important for us that all team members share the camp values and have both the skills and experience working with teenagers.\n\nEach member underwent a preliminary selection process, including an application form and an interview. The counselors are working together on program activities two months before the start in an online format.",
        } 
    },
      uk: {
        translation: { 
            about: "Про нас",
            accomodations: "Умови",
            faq: "Часті питання",
            support: "Підтримати",
            headerInfo: "Camp MASCOT — це 10-денна програма для українських активних підлітків, спрямована на створення світлого майбутнього в Україні.", 
            applications: "Зовсім скоро буде можливість подати заявку на участь!",
            allAbout: "MASCOT — це про людей",
            about1: "Ми віримо, що справді незабутнім табір роблять зв'язки, які ми створюємо; дружба, яку ми зав'язуємо, і спільнота, яка підтримує один одного. Наша мета — створити безпечний та підтримуючий простір, де кожен відчуває себе цінним та має змогу розвиватися.",
            about2: "З 2010 року було проведено близько 16 таборів для більш ніж 900 підлітків.",
            values: "Цінності",
            respect: "Повага",
            respectDef: "Ми справді цінуємо кожного та кожну, хто долучається до нашої спільноти",
            inclusivity: "Інклюзивність",
            inclusivityDef: "Ми цінуємо кожен життєвий досвід",
            communication: "Комунікація",
            communicationDef: "Ми віримо, що чесне та відкрите спілкування — ключ до вирішення будь-якої ситуації.",
            trust: "Довіра",
            trustDef: "Ми створюємо комфортний та безпечний простір для всіх",
            community: "Спільнота",
            communityDef: "Ми і є тими людьми, які прагнуть довіри одне до одного",
            equality: "Рівність та різноманітність",
            equalityDef: "Ми цінуємо кожен життєвий досвід",
            join: "Хто може долучитись до табору?",
            join1: "15-20 років",
            join2: "Підлітки з усіх куточків України",
            join3: "72 учасники",
            join4: "Підлітки, готові до навчання та розвитку у команді",
            accomodationsTitle: "Які умови ми пропонуємо?",
            accomodations1: "Локація на заході України",
            accomodations2: "Зручні кімнати для 4-6 осіб",
            accomodations3: "Бомбосховище, медсестра та охорона протягом всієї програми",
            accomodations4: "Триразове харчування з вегетаріанськими та веганськими опціями",
            organizers: "Організатори 2025",
            sasha: "Олександра Вісковатова",
            nystia: "Анастасія Хоменко",
            alex: "Олександр Марчишак",
            yulia: "Юлія Бугера",
            illia: "Ілля Чайковський",
            reviews: "Фідбек від учасників",
            lisaName: "Ліза Волошина",
            lisaCity: "Київ",
            lisaReview: "MASCOT – це такий mini life, який мене дуже змінює. Я подолала деякі свої страхи, відчула нові емоції і тепер я почуваюся іншою. Усе, що наповнює кемп, а саме лекції, активності, енерджайзери назаважди залишаються у сердечку💋",
            marynaName: "Марина Поливач",
            marynaCity: "Київ",
            marynaReview: "Щороку повертаюсь на MASCOT заради неймовірних людей та атмосфери, що вони створюють. Це місце, де я почуваю себе комфортно та щасливою і це коло людей, які заряджають мене творити весь наступний рік.",
            danyloName: "Данило Домський",
            danyloCity: "Житомир",
            danyloReview: "MASCOT – це те, що змінює твоє життя раз і назавжди. Потрапивши на цей кемп одного разу, повірте, він закріпиться у вашому житті. Люди, атмосфера, цінності, активності – це все те, увійде у твоє життя і залишиться з тобою на роки.",
            anastasiiaName: "Анастасія Міняйло",
            anastasiiaCity: "Харків",
            anastasiiaReview: "MASCOT — це місце, де я познайомилася з багатьма різними людьми в перший день, які в останній день стали незамінною частиною моєї душі. MASCOT — це місце, де я забула про особистий простір на 10 днів, живучи в бульбашках, наповнених енерджайзерами, сесіями з проєктного менеджменту, неймовірними лекціями та фантастичними людьми. MASCOT — це місце, яке подарувало мені безцінний досвід знайомства з іншими частинами спільноти, той, який не пояснити трьома реченнями і для якого потрібно 20 пляшок води, щоб не втратити голос після четвертої години безперервної розмови.",
            olenaName: "Олена Хізниченко",
            olenaCity: "Миколаїв",
            olenaReview: "Попри те, що я брала участь у десятках проєктів, MASCOT — найкращий із них. Це місце має найбільш згуртовану спільноту, де я зустріла людей, яких легко можу назвати родиною всього після півтора тижня. Дружба, яку я завела на MASCOT, впевнена, триватиме ще довгі роки після проєкту.",
            partners: "Наші партнери",
            faqTitle: "Лишилися запитання?",
            faq1: "Яка вартість участі у таборі?",
            faqAnsw1: "Наш табір є неприбутковим і вся залучена команда вожатих та організаторів працює на волонтерських засадах. Саме тому, внесок учасника у 2024 році складав лише 1700 грн, які використали на організаційні витрати (проживання, харчування та подарунки). Інформацію про внесок у 2025 році буде анонсовано згодом 🙂",
            faq2: "Які заходи безпеки діють у таборі?",
            faqAnsw2: "У таборі діють суворі заходи безпеки, включаючи цілодобовий доступ до медичного персоналу, підліткового психолога та охорони локації, а також дотримання всіх санітарних норм. \n\n На території проведення табору є доступ до бомбосховища до якого всі учасники зобовʼязані йти у разі небезпеки.",
            faq3: "Як проходять заняття?",
            faqAnsw3: "Тривалість одного заняття: 50 хвилин. Перерва між ними варіюється від 10 до 30 хвилин, залежно від навантаженості дня. \n\n Цьогорічна програма включає заняття з наступних тем: права людини, політика держави, економіка, екологія, культура та мистецтво, а також додаткові заняття з проєктного менеджменту. Наприкінці табору всі учасники реалізовують соціальний проєкт. \n\n Протягом програми всі учасники спілкуються <strong>лише англійською.</strong> У разі екстрених ситуацій переходимо на українську.",
            faq4: "Як відбувається відбір персоналу?",
            faqAnsw4: "До команди входять повнолітні волонтери, які мають рівень англійської не нижче Advanced,  а також з активною проукраїнською позицією. Для нас важливо, аби всі члени команди розділяли цінності табору та мали не тільки хист, а й досвід роботи з підлітками. \n\n Кожен з нас проходив попередній відбір у вигляді аплікаційної форми та інтервʼю. Команда вожатих розпочинає роботу між собою та над активностями програми за 2 місяці до початку в онлайн-форматі.",
        } 
    },
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;