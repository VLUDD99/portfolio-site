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
    videoUrl: "https://vk.com/clip_ext.php?oid=-232053066&id=456239025&autoplay=0",
    thumbnail: "/images/TN1.png", // ← /images/thumb1.jpg
    tags: ["Reels", "Моушн"],
    date: "12 фев 2025",
  },
  {
    id: 2,
    title: "Эксперт по продажам — Shorts",
    description: "Упаковка контента для бизнес-тренера: динамичные нарезки с субтитрами",
    videoUrl: "https://vk.com/clip_ext.php?oid=-232053066&id=456239023&autoplay=0",
    thumbnail: "/images/TN2.png", // ← /images/thumb2.jpg
    tags: ["Shorts", "Эксперт"],
    date: "8 фев 2025",
  },
  {
    id: 3,
    title: "Маркетинговое агентство — TikTok",
    description: "Креативные ролики для привлечения клиентов в digital-агентство",
    videoUrl: "https://vk.com/clip_ext.php?oid=-232053066&id=456239026&autoplay=0",
    thumbnail: "/images/TN3.png", // ← /images/thumb3.jpg
    tags: ["Reels"],
    date: "1 фев 2025",
  },
  {
    id: 4,
    title: "Онлайн-школа — промо-ролики",
    description: "Серия рекламных видео для запуска онлайн-курса по маркетингу",
    videoUrl: "https://vk.com/clip_ext.php?oid=-232053066&id=456239027&autoplay=0",
    thumbnail: "/images/TN4.png", // ← /images/thumb4.jpg
    tags: ["Моушн"],
    date: "18 янв 2025",
  },
  {
    id: 5,
    title: "Ресторан — контент для Stories",
    description: "Аппетитный видеоконтент с моушн-графикой для ресторана японской кухни",
    videoUrl: "https://vk.com/clip_ext.php?oid=-232053066&id=456239028&autoplay=0",
    thumbnail: "/images/TN5.png", // ← /images/thumb5.jpg
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
  text: "Привет, дорогой гость!\nМеня зовут Владислав — я монтажер.\n\nПомогаю бизнесу, блогерам и всем, кто создает контент для соцсетей.\n\nМоя основная задача — помочь сделать ваши ролики такими, чтобы они привлекали внимание, удерживали зрителя и работали на результат: будь то рост охватов, увеличение числа подписчиков или привлечение клиентов.",
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
