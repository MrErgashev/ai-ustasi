import type { QuizQuestion, FlashcardItem, TaskItem, StepItem } from "@/lib/types"

// ─── MODUL 1: QUIZ DATA ───────────────────────────────────

export const quizzes: Record<string, QuizQuestion[]> = {
  "lesson-1": [
    {
      id: "1-q1",
      question: "AI ning eng oddiy ta'rifi qaysi?",
      options: [
        "Kompyuterga o'rganish va qaror qabul qilish qobiliyatini beruvchi texnologiya",
        "Faqat robotlarni boshqaruvchi dastur",
        "Internet orqali ishlaydigan maxsus veb-sayt",
        "Faqat ingliz tilida ishlaydigan dastur",
      ],
      correctIndex: 0,
      explanation:
        "AI — bu kompyuterga ma'lumotlardan o'rganish va qaror qabul qilish imkonini beruvchi texnologiyalar to'plami.",
      difficulty: "oson",
    },
    {
      id: "1-q2",
      question: "Quyidagilardan qaysi biri AI misoli emas?",
      options: [
        "Netflix film tavsiyalari",
        "Oddiy kalkulyator",
        "Siri ovozli yordamchi",
        "Tesla avtopiloti",
      ],
      correctIndex: 1,
      explanation:
        "Kalkulyator oddiy dastur — u faqat formulalar asosida ishlaydi va ma'lumotlardan o'rganmaydi.",
      difficulty: "oson",
    },
    {
      id: "1-q3",
      question: "AI va oddiy dastur o'rtasidagi asosiy farq nima?",
      options: [
        "AI internetga ulangan, oddiy dastur esa yo'q",
        "AI ma'lumotlardan o'rganadi, oddiy dastur esa qoidalar asosida ishlaydi",
        "AI faqat telefonlarda ishlaydi",
        "Farq yo'q",
      ],
      correctIndex: 1,
      explanation:
        "Asosiy farq — AI ma'lumotlardan o'rganish qobiliyatiga ega. Oddiy dastur faqat dasturchi yozgan qoidalarga amal qiladi.",
      difficulty: "o'rta",
    },
  ],
  "lesson-2": [
    {
      id: "2-q1",
      question: "AI atamasini birinchi bo'lib kim taklif qilgan?",
      options: [
        "Alan Turing",
        "John McCarthy",
        "Elon Musk",
        "Sam Altman",
      ],
      correctIndex: 1,
      explanation:
        "John McCarthy 1956-yilda Dartmouth konferensiyasida 'Artificial Intelligence' atamasini birinchi marta ishlatgan.",
      difficulty: "o'rta",
    },
    {
      id: "2-q2",
      question: "'AI qishi' (AI Winter) nima?",
      options: [
        "AI quvvat manbai muzlab qolishi",
        "AI sohasiga qiziqish va moliyalashtirish kamaygan davr",
        "AI faqat qishda ishlaydigan tizim",
        "AI loyihalarni to'xtatish buyrug'i",
      ],
      correctIndex: 1,
      explanation:
        "AI qishi — AI sohasiga investitsiya va qiziqish keskin kamaygan davrlar. Bu ikki marta sodir bo'lgan: 1970-80 va 1990-yillarda.",
      difficulty: "o'rta",
    },
    {
      id: "2-q3",
      question: "ChatGPT qachon chiqarilgan?",
      options: ["2020-yil", "2021-yil", "2022-yil", "2023-yil"],
      correctIndex: 2,
      explanation:
        "ChatGPT 2022-yil 30-noyabrda OpenAI tomonidan chiqarilgan va AI sohasida inqilob yasagan.",
      difficulty: "oson",
    },
  ],
  "lesson-3": [
    {
      id: "3-q1",
      question: "Neural network (neyron tarmoq) nimaga o'xshaydi?",
      options: [
        "Kompyuter xotirasiga",
        "Inson miyasi tuzilishiga",
        "Internet tarmog'iga",
        "Elektr tarmog'iga",
      ],
      correctIndex: 1,
      explanation:
        "Neural network inson miyasidagi neyronlarning bog'lanish tuzilishiga o'xshatib yaratilgan.",
      difficulty: "oson",
    },
    {
      id: "3-q2",
      question: "AI modelini 'training' (o'qitish) nima?",
      options: [
        "Modelga yangi dastur o'rnatish",
        "Modelga katta hajmdagi ma'lumotlarni ko'rsatib, naqshlarni o'rgatish",
        "Modelni internetga ulash",
        "Modelni boshqa kompyuterga ko'chirish",
      ],
      correctIndex: 1,
      explanation:
        "Training — bu AI modeliga millionlab misollarni ko'rsatib, ulardan naqshlar va qonuniyatlarni o'rganishga o'rgatish jarayoni.",
      difficulty: "o'rta",
    },
    {
      id: "3-q3",
      question: "'Inference' nima?",
      options: [
        "Modelni yaratish jarayoni",
        "O'qitilgan modelni yangi ma'lumotlarga qo'llash",
        "Ma'lumotlarni yig'ish",
        "Modelni o'chirish",
      ],
      correctIndex: 1,
      explanation:
        "Inference — o'qitilgan model yangi, ilgari ko'rmagan ma'lumotlar asosida bashorat qilish jarayoni. ChatGPT ga savol berganda — bu inference.",
      difficulty: "o'rta",
    },
  ],
  "lesson-4": [
    {
      id: "4-q1",
      question: "Hozirgi mavjud AI qaysi turga kiradi?",
      options: [
        "Artificial General Intelligence (AGI)",
        "Artificial Narrow Intelligence (ANI)",
        "Artificial Super Intelligence (ASI)",
        "Barcha turlar mavjud",
      ],
      correctIndex: 1,
      explanation:
        "Hozirda faqat Narrow AI mavjud — aniq bir vazifani bajaruvchi AI. AGI va ASI hali yaratilmagan.",
      difficulty: "oson",
    },
    {
      id: "4-q2",
      question: "NLP nimaning qisqartmasi?",
      options: [
        "New Language Program",
        "Natural Language Processing",
        "Neural Learning Platform",
        "Network Logic Protocol",
      ],
      correctIndex: 1,
      explanation:
        "NLP — Natural Language Processing (Tabiiy tilni qayta ishlash). ChatGPT, Google Translate kabi vositalar NLP ga asoslangan.",
      difficulty: "oson",
    },
  ],
  "lesson-5": [
    {
      id: "5-q1",
      question: "LLM nimaning qisqartmasi?",
      options: [
        "Large Language Model",
        "Linear Learning Machine",
        "Long Life Memory",
        "Local Logic Module",
      ],
      correctIndex: 0,
      explanation:
        "LLM — Large Language Model (Katta til modeli). ChatGPT, Claude, Gemini — bular LLM ga misollar.",
      difficulty: "oson",
    },
    {
      id: "5-q2",
      question: "Tokenization nima?",
      options: [
        "Matnni kichik bo'laklarga (tokenlarga) ajratish",
        "Parolni shifrlash",
        "Rasm yaratish jarayoni",
        "Ma'lumotlarni o'chirish",
      ],
      correctIndex: 0,
      explanation:
        "Tokenization — matnni LLM tushuna oladigan kichik birliklarga (tokenlarga) bo'lish. Bir token taxminan 3/4 so'z.",
      difficulty: "o'rta",
    },
    {
      id: "5-q3",
      question: "Context window nima?",
      options: [
        "Kompyuter ekranining o'lchami",
        "LLM bir vaqtda qayta ishlay oladigan matn hajmi",
        "Internet tezligi ko'rsatkichi",
        "Dastur interfeysi",
      ],
      correctIndex: 1,
      explanation:
        "Context window — LLM bir vaqtda o'qiy va qayta ishlay oladigan maksimal token soni. GPT-4 da 128K token, Claude da 200K token.",
      difficulty: "o'rta",
    },
  ],
  "lesson-6": [
    {
      id: "6-q1",
      question: "ChatGPT qaysi kompaniya tomonidan yaratilgan?",
      options: ["Google", "OpenAI", "Meta", "Anthropic"],
      correctIndex: 1,
      explanation: "ChatGPT OpenAI kompaniyasi tomonidan yaratilgan.",
      difficulty: "oson",
    },
    {
      id: "6-q2",
      question: "Claude AI ni qaysi kompaniya yaratgan?",
      options: ["OpenAI", "Google", "Anthropic", "Microsoft"],
      correctIndex: 2,
      explanation:
        "Claude AI Anthropic kompaniyasi tomonidan yaratilgan. Anthropic OpenAI ning sobiq xodimlari tomonidan tashkil etilgan.",
      difficulty: "oson",
    },
    {
      id: "6-q3",
      question: "Midjourney asosan nima uchun ishlatiladi?",
      options: [
        "Kod yozish",
        "Rasm yaratish",
        "Video tahrirlash",
        "Matn tarjima qilish",
      ],
      correctIndex: 1,
      explanation:
        "Midjourney asosan AI yordamida rasm yaratish uchun ishlatiladi. U matnli tavsif asosida yuqori sifatli rasmlar generatsiya qiladi.",
      difficulty: "oson",
    },
  ],
}

// ─── MODUL 1: FLASHCARD DATA ──────────────────────────────

export const flashcards: Record<string, FlashcardItem[]> = {
  "lesson-1": [
    { front: "Artificial Intelligence (AI)", back: "Sun'iy intellekt — kompyuterga o'rganish va qaror qabul qilish qobiliyatini beruvchi texnologiya", category: "Asosiy" },
    { front: "Machine Learning (ML)", back: "Mashinali o'rganish — AI ning bir turi, kompyuter ma'lumotlardan o'zi o'rganadi", category: "Asosiy" },
    { front: "NLP", back: "Natural Language Processing — tabiiy tilni qayta ishlash", category: "Asosiy" },
    { front: "Computer Vision", back: "Kompyuter ko'rishi — rasmlar va videolarni tahlil qilish texnologiyasi", category: "Asosiy" },
    { front: "Neural Network", back: "Neyron tarmoq — inson miyasiga o'xshash tarzda ishlaydigan tizim", category: "Texnik" },
  ],
  "lesson-2": [
    { front: "Turing Test", back: "Alan Turing taklif qilgan test — mashina insonni alday oladimi?", category: "Tarix" },
    { front: "AI Winter", back: "AI sohasiga qiziqish va moliyalashtirish kamaygan davr", category: "Tarix" },
    { front: "Deep Learning", back: "Chuqur o'rganish — ko'p qatlamli neyron tarmoqlar asosidagi AI", category: "Tarix" },
    { front: "Dartmouth Conference", back: "1956-yil — AI sohasining rasmiy boshlanishi", category: "Tarix" },
    { front: "GPT", back: "Generative Pre-trained Transformer — matn yaratuvchi oldindan o'qitilgan model", category: "Zamonaviy" },
  ],
  "lesson-3": [
    { front: "Training", back: "O'qitish — AI modeliga ma'lumotlarni ko'rsatib o'rgatish jarayoni", category: "Jarayon" },
    { front: "Inference", back: "Xulosa chiqarish — o'qitilgan modelni yangi ma'lumotlarga qo'llash", category: "Jarayon" },
    { front: "Dataset", back: "Ma'lumotlar to'plami — model o'qitish uchun ishlatiladigan ma'lumotlar", category: "Jarayon" },
    { front: "Parameter", back: "Model ichidagi sozlanadigan qiymat — milliardlab parametrlar bo'lishi mumkin", category: "Texnik" },
    { front: "Overfitting", back: "Ortiqcha moslashish — model faqat o'quv ma'lumotlarini yodlab olishi", category: "Muammo" },
  ],
  "lesson-5": [
    { front: "LLM", back: "Large Language Model — katta til modeli (ChatGPT, Claude)", category: "Asosiy" },
    { front: "Transformer", back: "2017-yilda yaratilgan arxitektura — barcha zamonaviy LLM lar asosi", category: "Arxitektura" },
    { front: "Token", back: "Matnning eng kichik birligi — taxminan 3/4 so'z", category: "Asosiy" },
    { front: "Context Window", back: "LLM bir vaqtda qayta ishlay oladigan maksimal token soni", category: "Asosiy" },
    { front: "Prompt", back: "Foydalanuvchi AI ga bergan so'rov yoki buyruq", category: "Asosiy" },
    { front: "Fine-tuning", back: "Oldindan o'qitilgan modelni maxsus vazifa uchun qo'shimcha o'qitish", category: "Texnik" },
  ],
  "lesson-6": [
    { front: "ChatGPT", back: "OpenAI tomonidan yaratilgan LLM chatbot (GPT modeli asosida)", category: "Vosita" },
    { front: "Claude", back: "Anthropic tomonidan yaratilgan AI yordamchi", category: "Vosita" },
    { front: "Gemini", back: "Google tomonidan yaratilgan multimodal AI", category: "Vosita" },
    { front: "Midjourney", back: "Matn asosida rasm yaratuvchi AI vositasi", category: "Vosita" },
    { front: "DALL-E", back: "OpenAI ning rasm yaratuvchi AI modeli", category: "Vosita" },
  ],
}

// ─── MODUL 1: CHECKLIST DATA ──────────────────────────────

export const checklists: Record<string, { title: string; tasks: TaskItem[] }> = {
  "lesson-1": {
    title: "AI ni kundalik hayotda toping",
    tasks: [
      { text: "Telefoningizda 3 ta AI ishlatadigan ilovani aniqlang", hint: "Camera, Maps, va ijtimoiy tarmoqlar ko'pincha AI ishlatadi" },
      { text: "ChatGPT.com ga kiring va bitta savol bering", hint: "Bepul akkaunt ochish mumkin, Google bilan kirish tezroq" },
      { text: "Google Translate da biror matnni tarjima qiling", hint: "Murakkab jumlalarni tarjima qilib, sifatini baholang" },
      { text: "YouTube da 'AI explained' deb qidiring va 1 ta video ko'ring" },
    ],
  },
  "lesson-6": {
    title: "AI vositalarni sinab ko'ring",
    tasks: [
      { text: "ChatGPT da biror mavzuda 3 ta savol bering", hint: "chat.openai.com da bepul foydalanish mumkin" },
      { text: "Claude.ai da xuddi shu savollarni bering va javoblarni solishtiring", hint: "claude.ai da bepul akkaunt oching" },
      { text: "Google Gemini da ham sinab ko'ring", hint: "gemini.google.com" },
      { text: "3 ta javobni solishtiring va farqlarni yozing" },
    ],
  },
}

// ─── MODUL 1: STEP-BY-STEP DATA ──────────────────────────

export const stepGuides: Record<string, StepItem[]> = {
  "lesson-6-chatgpt": [
    { title: "ChatGPT ga kirish", content: "chat.openai.com saytiga boring va 'Sign up' tugmasini bosing", tip: "Google akkaunt orqali tezroq ro'yxatdan o'tish mumkin" },
    { title: "Birinchi so'rov", content: "Chat maydoniga savolingizni yozing va Enter bosing", tip: "O'zbek tilida ham yozishingiz mumkin" },
    { title: "Natijani baholang", content: "Javobni o'qing, kerak bo'lsa davom ettiruvchi savol bering" },
  ],
}
