import { motion } from 'framer-motion';

// iOS Toggle Switch - декоративный тумблер
export function IOSToggle({ className = '', style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`absolute ${className}`}
      style={{ rotate: '-3deg', ...style }}
    >
      <div className="relative w-[51px] h-[31px] rounded-full flex items-center px-[2px]"
           style={{ background: '#34C759', boxShadow: '0 2px 8px rgba(52, 199, 89, 0.4)' }}>
        <div className="absolute right-[2px] w-[27px] h-[27px] bg-white rounded-full"
             style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }} />
      </div>
    </motion.div>
  );
}

// Text Selection - выделение текста как в iOS
export function TextSelection({ children, className = '' }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 -inset-x-1 rounded"
            style={{
              background: 'rgba(0, 122, 255, 0.15)',
              zIndex: 0
            }} />
      {/* Левый маркер */}
      <span className="absolute -left-1 top-0 w-2 h-2 rounded-full"
            style={{ background: '#007AFF' }} />
      {/* Правый маркер */}
      <span className="absolute -right-1 bottom-0 w-2 h-2 rounded-full"
            style={{ background: '#007AFF' }} />
    </span>
  );
}

// Жёлтое выделение маркером (строчное)
export function YellowHighlight({ children, className = '' }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 -inset-x-1 rounded"
            style={{
              background: '#FFD859',
              opacity: 0.4,
              zIndex: 0
            }} />
      {/* Оранжевые маркеры */}
      <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
            style={{ background: '#E8A317' }} />
      <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
            style={{ background: '#E8A317' }} />
    </span>
  );
}

// Жёлтая обводка овалом (рукописная)
export function HanddrawnCircle({ children, className = '', style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, pathLength: 0, rotate: 0 }}
      whileInView={{ opacity: 1, pathLength: 1, rotate: -3 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className={`relative inline-block ${className}`}
      style={style}
    >
      {children}
      <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
        <motion.ellipse
          cx="50%"
          cy="50%"
          rx="58%"
          ry="58%"
          fill="none"
          stroke="#FFD859"
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            transform: 'rotate(-5deg)',
            transformOrigin: 'center'
          }}
        />
      </svg>
    </motion.div>
  );
}

// Рукописная стрелка
export function HanddrawnArrow({ className = '', pointTo = 'right', style = {} }) {
  const paths = {
    right: "M 10 20 Q 40 15 70 20 Q 90 22 95 25 L 90 20 M 95 25 L 90 30",
    down: "M 20 10 Q 18 30 22 50 Q 23 70 25 75 L 20 70 M 25 75 L 30 70",
    left: "M 90 20 Q 60 18 30 22 Q 10 23 5 25 L 10 20 M 5 25 L 10 30"
  };

  return (
    <motion.div
      initial={{ opacity: 0, pathLength: 0 }}
      whileInView={{ opacity: 1, pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
      className={`absolute ${className}`}
      style={{ rotate: '-2deg', ...style }}
    >
      <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
        <motion.path
          d={paths[pointTo] || paths.right}
          stroke="#FFB800"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </svg>
    </motion.div>
  );
}

// Copy/Paste Popup - декоративный тултип iOS
export function CopyPastePopup({ className = '', style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className={`absolute ${className}`}
      style={{ rotate: '2deg', ...style }}
    >
      <div className="relative">
        {/* Треугольник-стрелка снизу */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0"
             style={{
               borderLeft: '6px solid transparent',
               borderRight: '6px solid transparent',
               borderTop: '6px solid #1C1C1E'
             }} />

        {/* Основной попап */}
        <div className="px-4 py-2 rounded-lg flex items-center gap-2"
             style={{
               background: '#1C1C1E',
               boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
             }}>
          <span className="text-white text-[13px] font-medium">Copy</span>
          <span className="text-gray-400 text-[13px]">|</span>
          <span className="text-white text-[13px] font-medium">Paste</span>
        </div>
      </div>
    </motion.div>
  );
}

// Emoji Reactions - панель реакций из iMessage
export function EmojiReactions({ className = '', style = {} }) {
  const emojis = ['🥰', '🤩', '😐', '🥺', '😄'];
  const selectedIndex = 1; // 🤩 выбран

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`absolute ${className}`}
      style={{ rotate: '-1deg', ...style }}
    >
      <div className="relative">
        {/* Основная панель */}
        <div className="rounded-full px-3 py-2 flex items-center gap-1"
             style={{
               background: 'rgba(120, 120, 128, 0.24)',
               backdropFilter: 'blur(12px)',
               boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
             }}>
          {emojis.map((emoji, i) => (
            <span key={i}
                  className="text-xl transition-transform"
                  style={{
                    display: i === selectedIndex ? 'none' : 'inline-block'
                  }}>
              {emoji}
            </span>
          ))}
        </div>

        {/* Выбранный эмодзи "выскакивает" */}
        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [-2, -8, -2] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
          className="absolute -top-8 left-1/2 -translate-x-1/2 text-3xl"
        >
          {emojis[selectedIndex]}
        </motion.span>
      </div>
    </motion.div>
  );
}

// macOS Folder - голубая иконка папки
export function MacOSFolder({ className = '', size = 48, style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring" }}
      className={`absolute ${className}`}
      style={{ rotate: '3deg', ...style }}
    >
      <svg width={size} height={size * 0.8} viewBox="0 0 48 38" fill="none">
        {/* Папка с градиентом */}
        <defs>
          <linearGradient id="folderGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5DADE2" />
            <stop offset="100%" stopColor="#3B8CC7" />
          </linearGradient>
        </defs>
        {/* Основное тело папки */}
        <path
          d="M 2 8 Q 2 6 4 6 L 16 6 L 20 10 L 44 10 Q 46 10 46 12 L 46 34 Q 46 36 44 36 L 4 36 Q 2 36 2 34 Z"
          fill="url(#folderGradient)"
        />
        {/* "Ушко" сверху */}
        <path
          d="M 16 6 L 18 4 Q 18 3 19 3 L 21 3 L 23 6 Z"
          fill="#4BA3D6"
        />
      </svg>
    </motion.div>
  );
}

// Placeholder для фотографий
export function PhotoPlaceholder({ width = 280, height = 280, text = "Фото — заменить", className = '', style = {} }) {
  return (
    <div
      className={`bg-gray-200 dark:bg-gray-700 rounded-2xl flex flex-col items-center justify-center overflow-hidden ${className}`}
      style={{ width, height, ...style }}
    >
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           strokeWidth="1.5" className="text-gray-400 mb-2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span className="text-sm text-gray-400 text-center px-4">{text}</span>
    </div>
  );
}
