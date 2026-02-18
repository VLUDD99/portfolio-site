import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Send, ArrowDown } from 'lucide-react';
import { siteConfig } from '../data/content';
import { HanddrawnCircle } from './IOSDecorations';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const now = new Date();
  const dateStr = now.toLocaleDateString('ru-RU', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <section id="home" ref={ref}
      className="relative flex items-center pt-20 pb-4 md:pb-8 px-4 md:px-6 lg:px-12">
      <motion.div style={{ y, opacity, scale }}
        className="w-full max-w-7xl mx-auto py-4 md:py-10">

        {/* ── MOBILE LAYOUT (< md) ── */}
        <div className="md:hidden">
          {/* Level 1: date + title */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-[11px] font-medium mb-2"
            style={{ color: 'var(--notes-secondary)' }}>
            {dateStr}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-[30px] font-bold tracking-tight leading-tight mb-4"
            style={{ color: 'var(--notes-title)' }}>
            {siteConfig.heroTitle}
          </motion.h1>

          {/* Level 2: text left + photo right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center gap-4 mb-5">
            <div className="flex-1 min-w-0">
              <p className="text-[16px] font-medium leading-snug mb-2"
                 style={{ color: 'var(--notes-title)' }}>
                {siteConfig.title}
              </p>
              <p className="text-[13px] leading-relaxed"
                 style={{ color: 'var(--notes-secondary)' }}>
                {siteConfig.description}
              </p>
            </div>
            <div className="flex-shrink-0">
              {/* TODO: Заменить на реальное фото: public/images/hero-photo.jpg */}
              <img
                src="/images/IMG_44.JPG"
                alt="Монтаж рилс"
                width={120}
                height={120}
                text=""
                className="rounded-full"
                style={{
                  boxShadow: '0 4px 16px var(--notes-shadow-hover)',
                  border: '3px solid var(--notes-accent)'
                }}
              />
            </div>
          </motion.div>

          {/* Level 3: buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="flex items-center gap-3">
            <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer"
               className="notes-button !text-[13px] !px-5 !py-2.5 !rounded-xl">
              <Send size={14} />
              Обсудить проект
            </a>
            <a href="#portfolio"
               className="flex items-center gap-1 text-[13px] font-medium transition-all hover:opacity-70"
               style={{ color: 'var(--notes-link)' }}>
              Работы
              <ArrowDown size={13} />
            </a>
          </motion.div>
        </div>

        {/* ── DESKTOP LAYOUT (≥ md) ── */}
        <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mb-2">
              <span className="text-[13px] font-medium" style={{ color: 'var(--notes-secondary)' }}>
                {dateStr}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-[56px] lg:text-[68px] font-bold tracking-tight leading-[1.05] mt-4 mb-4">
              <span style={{ color: 'var(--notes-title)' }}>{siteConfig.heroTitle}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-[24px] font-medium leading-snug mb-3"
              style={{ color: 'var(--notes-title)' }}>
              {siteConfig.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-[18px] leading-relaxed mb-10 max-w-xl"
              style={{ color: 'var(--notes-secondary)' }}>
              {siteConfig.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="flex gap-4 items-center">
              <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer"
                 className="notes-button text-[16px] px-8 py-4">
                <Send size={15} />
                Обсудить проект
              </a>
              <a href="#portfolio"
                 className="flex items-center gap-2 px-6 py-4 rounded-xl text-[15px] font-medium transition-all hover:opacity-70"
                 style={{ color: 'var(--notes-link)' }}>
                Работы
                <ArrowDown size={14} />
              </a>
            </motion.div>
          </div>

          {/* Right — photo (lg+ only) */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="hidden lg:flex justify-end">
            <div className="relative">
              {/* TODO: Заменить на реальное фото: public/images/hero-photo.jpg */}
              <HanddrawnCircle className="inline-block">
                <img
                  src="/images/IMG_44.JPG"
                  alt="Монтаж reels"
                  width={280}
                  height={280}
                  text="Фото профиля — заменить"
                  className="rounded-full shadow-2xl"
                  style={{
                    boxShadow: '0 20px 60px var(--notes-shadow-hover)',
                    border: '4px solid var(--notes-card)'
                  }}
                />
              </HanddrawnCircle>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
