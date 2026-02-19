import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4"
         style={{ background: 'var(--notes-bg)' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className="note-card note-card-accent paper-texture text-center max-w-sm w-full">

        {/* 404 with SVG ellipse */}
        <div className="flex items-center justify-center mb-4">
          <span className="relative inline-block text-[72px] font-bold leading-none"
                style={{ color: 'var(--notes-accent)' }}>
            <svg
              className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)]"
              viewBox="0 0 180 80" fill="none">
              <ellipse cx="90" cy="40" rx="82" ry="34"
                stroke="var(--notes-accent)" strokeWidth="2.5" strokeLinecap="round"
                style={{ transform: 'rotate(-1.5deg)', transformOrigin: 'center' }} />
            </svg>
            404
          </span>
        </div>

        <p className="text-[16px] mb-6 leading-relaxed"
           style={{ color: 'var(--notes-secondary)' }}>
          Такой заметки не существует
        </p>

        <a href="/" className="notes-button inline-flex">
          На главную
        </a>
      </motion.div>
    </div>
  );
}
