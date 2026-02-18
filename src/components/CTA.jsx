import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Send } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function CTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  return (
    <section id="contact" ref={ref} className="py-12 md:py-20 px-4 md:px-6 lg:px-12">
      <motion.div style={{ scale, opacity }}
        className="max-w-7xl mx-auto">
        <div className="note-card text-center py-12 md:py-16 lg:py-20 px-6 md:px-8 overflow-hidden relative"
             style={{ background: 'var(--notes-accent)' }}>
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10"
               style={{
                 backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(0,0,0,0.1) 31px, rgba(0,0,0,0.1) 32px)`,
               }} />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[32px] sm:text-[42px] font-bold mb-4 leading-tight"
              style={{ color: '#1D1D1F' }}>
              Готовы обсудить проект?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-[17px] mb-10 max-w-lg mx-auto"
              style={{ color: 'rgba(29, 29, 31, 0.7)' }}>
              Напишите мне — обсудим задачу, сроки и стоимость
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}>
              <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-[17px] font-semibold transition-all hover:scale-[1.04] active:scale-95"
                 style={{
                   background: '#1D1D1F',
                   color: '#FFFFFF',
                   boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                 }}>
                <Send size={18} />
                Написать в Telegram
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
