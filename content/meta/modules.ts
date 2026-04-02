import type { Module } from "@/lib/types"

export const modules: Module[] = [
  {
    id: 1,
    title: "Sun'iy intellekt nima?",
    subtitle: "ASOS",
    icon: "🧠",
    description:
      "AI ning asosiy tushunchalari, tarixi, ishlash prinsipi va turlari bilan tanishing.",
    color: {
      primary: "var(--module-1)",
      name: "blue",
      gradient: "from-blue-500 to-blue-600",
      bg: "bg-blue-500/10",
    },
    lessons: [
      {
        id: 1,
        slug: "ai-nima",
        title: "Sun'iy intellekt (Artificial Intelligence) nima?",
        description:
          "AI ta'rifi, kundalik hayotda AI misollari, AI va odatiy dastur farqi",
        duration: 25,
        type: "nazariy",
        moduleId: 1,
        objectives: [
          "AI ning aniq ta'rifini bilish",
          "Kundalik hayotda AI misollarini aniqlash",
          "AI va oddiy dastur o'rtasidagi farqni tushunish",
        ],
      },
      {
        id: 2,
        slug: "ai-tarixi",
        title: "AI tarixi — Turing dan ChatGPT gacha",
        description:
          "1950-2025 timeline, muhim voqealar, AI qishlari va bahorlari",
        duration: 30,
        type: "nazariy",
        moduleId: 1,
        objectives: [
          "AI tarixidagi muhim sanalarni bilish",
          "AI qishlari va bahorlarini tushunish",
          "Zamonaviy AI inqilobini anglash",
        ],
      },
      {
        id: 3,
        slug: "ai-qanday-ishlaydi",
        title: "AI qanday ishlaydi?",
        description:
          "Model, data, training, inference, neural network asoslari",
        duration: 35,
        type: "nazariy",
        moduleId: 1,
        objectives: [
          "Neural network asosiy tushunchasini bilish",
          "Training va inference farqini tushunish",
          "AI modelining ishlash jarayonini tushuntira olish",
        ],
      },
      {
        id: 4,
        slug: "ai-turlari",
        title: "AI turlari",
        description:
          "Narrow/General/Super AI, ML/DL/NLP klassifikatsiyasi",
        duration: 25,
        type: "nazariy",
        moduleId: 1,
        objectives: [
          "AI ning 3 darajasini farqlash",
          "ML, DL, NLP tushunchalarini bilish",
          "Har bir AI turi uchun amaliy misollar keltira olish",
        ],
      },
      {
        id: 5,
        slug: "llm-katta-til-modellari",
        title: "LLM — Katta til modellari",
        description:
          "Transformer arxitekturasi (oddiy tilda), tokenization, context window",
        duration: 40,
        type: "amaliy",
        moduleId: 1,
        objectives: [
          "LLM nima ekanini tushunish",
          "Tokenization jarayonini bilish",
          "Context window cheklovini anglash",
        ],
      },
      {
        id: 6,
        slug: "ai-vositalar",
        title: "AI vositalar bilan tanishish",
        description:
          "ChatGPT, Claude, Gemini, Midjourney — har birida amaliy mashq",
        duration: 45,
        type: "amaliy",
        moduleId: 1,
        objectives: [
          "4 ta asosiy AI vositani sinab ko'rish",
          "Har bir vositaning kuchli tomonini bilish",
          "Amaliy so'rov (prompt) yozish",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "AI bilan ishlash ko'nikmalari",
    subtitle: "AMALIY",
    icon: "⚡",
    description:
      "Prompt engineering, matn, rasm, video va kod yaratish ko'nikmalarini o'rganing.",
    color: {
      primary: "var(--module-2)",
      name: "purple",
      gradient: "from-purple-500 to-purple-600",
      bg: "bg-purple-500/10",
    },
    lessons: [
      {
        id: 7,
        slug: "prompt-engineering-asoslar",
        title: "Prompt engineering — asoslar",
        description:
          "Yaxshi/yomon prompt farqi, 5 ta asosiy qoida, amaliy mashqlar",
        duration: 35,
        type: "amaliy",
        moduleId: 2,
        objectives: [
          "Yaxshi prompt yozish qoidalarini bilish",
          "Yomon promptlarni aniqlash va tuzatish",
          "5 ta asosiy prompt texnikasini qo'llash",
        ],
      },
      {
        id: 8,
        slug: "prompt-engineering-ilgor",
        title: "Prompt engineering — ilg'or texnikalar",
        description:
          "Chain-of-thought, few-shot, role-play, system prompt",
        duration: 40,
        type: "amaliy",
        moduleId: 2,
        objectives: [
          "Chain-of-thought texnikasini qo'llash",
          "Few-shot prompting bilan ishlash",
          "System prompt yozish",
        ],
      },
      {
        id: 9,
        slug: "ai-bilan-matn-yozish",
        title: "AI bilan matn yozish",
        description:
          "Blog post, ijtimoiy tarmoq, email, mahsulot tavsifi yaratish",
        duration: 35,
        type: "amaliy",
        moduleId: 2,
        objectives: [
          "AI yordamida professional matn yozish",
          "Har xil formatdagi kontentni yaratish",
          "Matnni tahrirlash va yaxshilash",
        ],
      },
      {
        id: 10,
        slug: "ai-bilan-rasm-yaratish",
        title: "AI bilan rasm yaratish",
        description:
          "Midjourney, DALL-E, Leonardo AI — prompt yozish, stillar",
        duration: 45,
        type: "amaliy",
        moduleId: 2,
        objectives: [
          "Rasm generatsiya promptini yozish",
          "Turli AI rasm vositalarini solishtirish",
          "Stillar va parametrlarni boshqarish",
        ],
      },
      {
        id: 11,
        slug: "ai-bilan-video-audio",
        title: "AI bilan video va audio",
        description: "Sora, ElevenLabs, HeyGen, CapCut AI, Runway",
        duration: 40,
        type: "amaliy",
        moduleId: 2,
        objectives: [
          "AI video yaratish vositalarini sinash",
          "AI ovoz generatsiyasini o'rganish",
          "Video tahrirlashda AI dan foydalanish",
        ],
      },
      {
        id: 12,
        slug: "ai-bilan-kod-yozish",
        title: "AI bilan kod yozish",
        description: "Cursor, Claude Code, GitHub Copilot, Replit AI",
        duration: 50,
        type: "amaliy",
        moduleId: 2,
        objectives: [
          "AI kod yozish vositalarini o'rnatish",
          "AI yordamida dastur yozish",
          "Kodni debug qilish va optimallashtirish",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "AI Avtomatizatsiya asoslari",
    subtitle: "AUTOMATION",
    icon: "🔧",
    description:
      "Make.com, Zapier va n8n bilan real avtomatizatsiyalar quring.",
    color: {
      primary: "var(--module-3)",
      name: "emerald",
      gradient: "from-emerald-500 to-emerald-600",
      bg: "bg-emerald-500/10",
    },
    lessons: [
      {
        id: 13,
        slug: "avtomatizatsiya-nima",
        title: "Avtomatizatsiya nima va nega kerak?",
        description:
          "Oddiy misol: qo'lda vs avtomatik, ROI hisoblash",
        duration: 25,
        type: "nazariy",
        moduleId: 3,
        objectives: [
          "Avtomatizatsiyaning biznes qiymatini tushunish",
          "ROI hisoblashni o'rganish",
          "Avtomatizatsiya uchun mos jarayonlarni aniqlash",
        ],
      },
      {
        id: 14,
        slug: "make-com-asoslar",
        title: "Make.com — asoslar",
        description:
          "Ro'yxatdan o'tish, interfeys, birinchi ssenariy",
        duration: 45,
        type: "amaliy",
        moduleId: 3,
        objectives: [
          "Make.com platformasiga kirish",
          "Interfeys bilan tanishish",
          "Birinchi ssenariy yaratish",
        ],
      },
      {
        id: 15,
        slug: "make-com-real-ssenariylar",
        title: "Make.com — real ssenariylar",
        description:
          "Email → Sheets, forma → Telegram, social media posting",
        duration: 50,
        type: "amaliy",
        moduleId: 3,
        objectives: [
          "3 ta amaliy ssenariy qurish",
          "Modullarni bog'lashni o'rganish",
          "Xatoliklarni boshqarish",
        ],
      },
      {
        id: 16,
        slug: "zapier-n8n",
        title: "Zapier va n8n bilan ishlash",
        description:
          "Zapier zap yaratish, n8n o'rnatish, 3 platformani solishtirish",
        duration: 40,
        type: "amaliy",
        moduleId: 3,
        objectives: [
          "Zapier da zap yaratish",
          "n8n ni o'rnatish va ishga tushirish",
          "3 platformani solishtirish",
        ],
      },
      {
        id: 17,
        slug: "ai-api-integratsiya",
        title: "AI + API integratsiyasi",
        description: "OpenAI API, webhook, HTTP modul, JSON parsing",
        duration: 50,
        type: "amaliy",
        moduleId: 3,
        objectives: [
          "API nima ekanini tushunish",
          "OpenAI API ni Make.com da ishlatish",
          "Webhook va HTTP modullarni sozlash",
        ],
      },
      {
        id: 18,
        slug: "real-keys-avtomatizatsiya",
        title: "Real keys: to'liq avtomatizatsiya",
        description:
          "Kichik biznes — lead → CRM → email → hisobot",
        duration: 60,
        type: "keys",
        moduleId: 3,
        objectives: [
          "To'liq biznes jarayonini avtomatlashtirish",
          "CRM integratsiyasini sozlash",
          "Hisobot generatsiyasini yaratish",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Real biznes muammolarini hal qilish",
    subtitle: "CASE STUDIES",
    icon: "💼",
    description:
      "5 ta real biznes ssenariysi bilan interaktiv mashq qiling.",
    color: {
      primary: "var(--module-4)",
      name: "amber",
      gradient: "from-amber-500 to-amber-600",
      bg: "bg-amber-500/10",
    },
    lessons: [
      {
        id: 19,
        slug: "biznes-muammolari-ai",
        title: "Biznes muammolarini AI ko'zi bilan ko'rish",
        description:
          "Muammo topish metodikasi, AI qo'llanilishi mumkin bo'lgan sohalar",
        duration: 30,
        type: "nazariy",
        moduleId: 4,
        objectives: [
          "Biznes muammolarini AI nuqtai nazaridan tahlil qilish",
          "AI yechimi mos keladigan sohalarni aniqlash",
          "Muammo-yechim metodikasini o'rganish",
        ],
      },
      {
        id: 20,
        slug: "keys-restoran-chatbot",
        title: "Keys: Restoran uchun AI chatbot",
        description:
          "WhatsApp bot, menyu, buyurtma, feedback yig'ish",
        duration: 60,
        type: "keys",
        moduleId: 4,
        objectives: [
          "Restoran uchun chatbot arxitekturasini loyihalash",
          "WhatsApp bot integratsiyasini tushunish",
          "Feedback yig'ish tizimini sozlash",
        ],
      },
      {
        id: 21,
        slug: "keys-online-dokon",
        title: "Keys: Online do'kon avtomatizatsiyasi",
        description:
          "Mijoz savollari, buyurtma tracking, qaytish jarayoni",
        duration: 55,
        type: "keys",
        moduleId: 4,
        objectives: [
          "E-commerce avtomatizatsiyasini loyihalash",
          "Mijoz xizmatini AI bilan yaxshilash",
          "Buyurtma tracking tizimini qurish",
        ],
      },
      {
        id: 22,
        slug: "keys-klinika-navbat",
        title: "Keys: Klinika uchun navbat tizimi",
        description:
          "Telegram bot, eslatma, shifokor jadvali",
        duration: 55,
        type: "keys",
        moduleId: 4,
        objectives: [
          "Telegram bot arxitekturasini loyihalash",
          "Navbat tizimini avtomatlashtirish",
          "Eslatma tizimini sozlash",
        ],
      },
      {
        id: 23,
        slug: "keys-talim-ai",
        title: "Keys: Ta'lim muassasasi uchun AI",
        description:
          "FAQ bot, imtihon natijalarini tahlil, o'qituvchiga yordamchi",
        duration: 50,
        type: "keys",
        moduleId: 4,
        objectives: [
          "Ta'lim sohasi uchun AI yechimlarini loyihalash",
          "FAQ bot yaratish strategiyasini bilish",
          "Ma'lumot tahlili asoslarini qo'llash",
        ],
      },
      {
        id: 24,
        slug: "keys-rieltor-lead",
        title: "Keys: Rieltor uchun lead generation",
        description:
          "Landing page, chatbot, avtomatik taklifnoma",
        duration: 55,
        type: "keys",
        moduleId: 4,
        objectives: [
          "Lead generation tizimini loyihalash",
          "Landing page + chatbot integratsiyasi",
          "Avtomatik taklifnoma generatsiyasi",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "AI xizmatlarini sotish va pul ishlash",
    subtitle: "PUL ISHLASH",
    icon: "🚀",
    description:
      "Freelancer sifatida AI xizmatlarini sotish va daromad olish yo'llarini o'rganing.",
    color: {
      primary: "var(--module-5)",
      name: "rose",
      gradient: "from-rose-500 to-rose-600",
      bg: "bg-rose-500/10",
    },
    lessons: [
      {
        id: 25,
        slug: "ai-freelancer-pozitsiya",
        title: "AI freelancer sifatida pozitsiyalash",
        description:
          "Niche tanlash, USP yaratish, brend qurish",
        duration: 30,
        type: "nazariy",
        moduleId: 5,
        objectives: [
          "O'z niche ni tanlash",
          "USP (unique selling proposition) yaratish",
          "Shaxsiy brend qurish asoslari",
        ],
      },
      {
        id: 26,
        slug: "upwork-profil",
        title: "Upwork profili yaratish",
        description:
          "Profil, portfolio, proposal yozish, birinchi ish topish",
        duration: 45,
        type: "amaliy",
        moduleId: 5,
        objectives: [
          "Professional Upwork profil yaratish",
          "Samarali proposal yozish",
          "Birinchi mijozni topish strategiyasi",
        ],
      },
      {
        id: 27,
        slug: "fiverr-gig",
        title: "Fiverr gig yaratish",
        description:
          "Gig sarlavha, tavsif, narx paketlari, SEO",
        duration: 40,
        type: "amaliy",
        moduleId: 5,
        objectives: [
          "Fiverr gig yaratish va optimallashtirish",
          "Narx paketlarini to'g'ri belgilash",
          "Gig SEO ni o'rganish",
        ],
      },
      {
        id: 28,
        slug: "mahalliy-biznesga-sotish",
        title: "Mahalliy biznesga sotish",
        description:
          "Cold outreach, demo tayyorlash, narxlash, shartnoma",
        duration: 35,
        type: "amaliy",
        moduleId: 5,
        objectives: [
          "Cold outreach strategiyasini o'rganish",
          "Demo tayyorlash va o'tkazish",
          "Narxlash va shartnoma asoslari",
        ],
      },
      {
        id: 29,
        slug: "portfolio-case-study",
        title: "Portfolio va case study tayyorlash",
        description:
          "Before/after, natijalar bilan portfolio yaratish",
        duration: 40,
        type: "amaliy",
        moduleId: 5,
        objectives: [
          "Professional portfolio yaratish",
          "Case study formatlash",
          "Before/after natijalarni ko'rsatish",
        ],
      },
      {
        id: 30,
        slug: "birinchi-1000",
        title: "Birinchi $1000 — amaliy reja",
        description:
          "30 kunlik reja, haftalik maqsadlar, accountability tizimi",
        duration: 45,
        type: "keys",
        moduleId: 5,
        objectives: [
          "30 kunlik amaliy reja tuzish",
          "Haftalik maqsadlarni belgilash",
          "Accountability tizimini qurish",
        ],
      },
    ],
  },
]

export function getAllLessons() {
  return modules.flatMap((m) => m.lessons)
}

export function getLessonBySlug(slug: string) {
  return getAllLessons().find((l) => l.slug === slug)
}

export function getModuleByLessonId(lessonId: number) {
  return modules.find((m) => m.lessons.some((l) => l.id === lessonId))
}

export function getAdjacentLessons(lessonId: number) {
  const all = getAllLessons()
  const index = all.findIndex((l) => l.id === lessonId)
  return {
    prev: index > 0 ? all[index - 1] : null,
    next: index < all.length - 1 ? all[index + 1] : null,
  }
}
