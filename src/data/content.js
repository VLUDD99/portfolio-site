// ============================================
// ВЕСЬ КОНТЕНТ САЙТА — РЕДАКТИРУЙ ЗДЕСЬ
// ============================================

export const siteConfig = {
  name: "Orehov | Reels prod",   // ← надпись в хедере (левый верхний угол)
  heroTitle: "Владислав",         // ← большой заголовок Hero
  title: "Монтаж вертикального контента",
  subtitle: "который залетает в рекомендации",
  description: "Монтирую Reels, Shorts и TikTok. Делаю моушн-дизайн и анимации, которые цепляют внимание с первой секунды.",
  telegram: "https://t.me/Wlugg66", // ← ЗАМЕНИ НА СВОЙ
};

export const services = [
  {
    id: 1,
    title: "Reels / Shorts монтаж",
    description: "Динамичный монтаж вертикальных видео для Instagram, YouTube и TikTok. Субтитры, цветокоррекция, саунд-дизайн.",
    icon: "video",
    date: "15 фев 2025",
  },
  {
    id: 2,
    title: "Моушн-дизайн",
    description: "Анимированные заголовки, переходы, инфографика и визуальные эффекты для вашего контента.",
    icon: "sparkles",
    date: "10 фев 2025",
  },
];

export const portfolio = [
  {
    id: 1,
    title: "",
    description: "",
    videoUrl: "/videos/video1.mp4", // ← положи файл в public/videos/
    thumbnail: "/images/TN1.png",
    tags: ["Reels", "Моушн"],
    date: "12 фев 2025",
  },
  {
    id: 2,
    title: "Мармеладыч",
    description: "Упаковка контента для бизнес-тренера: динамичные нарезки с субтитрами",
    videoUrl: "/videos/video2.mp4",
    thumbnail: "/images/TN6.png",
    tags: ["Reels", "Эксперт"],
    date: "8 фев 2025",
  },
  {
    id: 3,
    title: "Эксперт по продажам — Shorts",
    description: "Упаковка контента для бизнес-тренера: динамичные нарезки с субтитрами",
    videoUrl: "/videos/video3.mp4",
    thumbnail: "/images/TN2.png",
    tags: ["Shorts", "Эксперт", "Моушн"],
    date: "8 фев 2025",
  },
  {
    id: 4,
    title: "Маркетинговое агентство — TikTok",
    description: "Креативные ролики для привлечения клиентов в digital-агентство",
    videoUrl: "/videos/video4.mp4",
    thumbnail: "/images/TN3.png",
    tags: ["Reels"],
    date: "1 фев 2025",
  },
  {
    id: 5,
    title: "Онлайн-школа — промо-ролики",
    description: "Серия рекламных видео для запуска онлайн-курса по маркетингу",
    videoUrl: "/videos/video5.mp4",
    thumbnail: "/images/TN4.png",
    tags: ["Моушн"],
    date: "18 янв 2025",
  },
  {
    id: 6,
    title: "Ресторан — контент для Stories",
    description: "Аппетитный видеоконтент с моушн-графикой для ресторана японской кухни",
    videoUrl: "/videos/video6.mp4",
    thumbnail: "/images/TN5.png",
    tags: ["Моушн", "Анимация лого"],
    date: "10 янв 2025",
  },
];

export const processSteps = [
  { id: 1, title: "Бриф", description: "Обсуждаем задачу, стиль, референсы и сроки" },
  { id: 2, title: "Монтаж", description: "Собираю видео, добавляю эффекты и графику" },
  { id: 3, title: "Правки", description: "Вносим корректировки до идеала" },
  { id: 4, title: "Сдача", description: "Готовое видео в нужном формате и разрешении" },
];

export const about = {
  text: "Привет, дорогой гость!\nЯ Помогаю бизнесу, блогерам и всем, кто создает контент для соцсетей.\n\nМоя основная задача — помочь сделать ваши ролики такими, чтобы они привлекали внимание, удерживали зрителя и работали на результат: будь то рост охватов, увеличение числа подписчиков или привлечение клиентов.",
  tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
};

export const clients = [
  {
    id: 1,
    name: "Мармеладыч",
    description: "Крупнейший ритейлер мармелада в России",
    followers: "3,3M+ подписчиков",
    photo: "/images/Marmelad2.jpg" // ← раскомментируй когда добавишь фото
  },
  {
    id: 2,
    name: "Арон Закрия",
    description: "Эксперт по нейросетям. Предприниматель",
    followers: "460к+ подписчиков",
    photo: "/images/Aron1.jpg"
  },
  {
    id: 3,
    name: "Оскар Хартманн",
    description: "Серийный предприниматель, венчурный инвестор",
    followers: "570K+ подписчиков",
    photo: "/images/Oscar3.jpg"
  },
];

export const navigation = [
  { id: "home", label: "Главная", icon: "home" },
  { id: "portfolio", label: "Работы", icon: "play" },
  { id: "about", label: "Обо мне", icon: "user" },
  { id: "contact", label: "Контакт", icon: "send" },
];
