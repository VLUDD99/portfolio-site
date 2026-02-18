import { motion } from 'framer-motion';
import { Monitor, Layers, Palette } from 'lucide-react';
import { about } from '../data/content';
import { PhotoPlaceholder } from './IOSDecorations';

const toolIcons = {
  'Premiere Pro': Monitor,
  'After Effects': Layers,
  'DaVinci Resolve': Palette,
};

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 px-4 md:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}>
          <h2 className="section-title text-[24px] sm:text-[34px] font-bold mb-6 md:mb-12"
              style={{ color: 'var(--notes-title)' }}>
            Обо мне
          </h2>
        </motion.div>

        {/* Single card with all content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="note-card note-card-accent paper-texture w-full max-w-full">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
            {/* Desktop: Large polaroid photo */}
            <motion.div
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 hidden md:block"
              style={{
                transform: 'rotate(2deg)',
                boxShadow: '0 10px 30px var(--notes-shadow-hover)'
              }}>
              <div style={{
                padding: '12px',
                background: 'var(--notes-card)',
                border: '1px solid var(--notes-separator)',
                borderRadius: '8px'
              }}>
                {/* TODO: Заменить на реальное фото: public/images/about-photo.jpg */}
                <img 
                  src="/images/IMG_33.JPG" 
                  alt="Владислав" 
                  width={240}
                  height={280}
                  className="w-240 h-280 object-cover rounded-2xl" 
                />
              </div>
            </motion.div>

            {/* Mobile: centered photo above text */}
            <div className="md:hidden w-full flex flex-col items-center mb-2">
              {/* TODO: Заменить на реальное фото: public/images/about-photo.jpg */}
              <img
                src="/images/IMG_33_M.JPG" 
                alt="Владислав" 
                width={140}
                height={140}
                text=""
                className="rounded-full mb-2"
                style={{
                  boxShadow: '0 4px 12px var(--notes-shadow-hover)'
                }}
              />
            </div>

            <div className="flex-1 min-w-0 w-full"
                 style={{ overflowWrap: 'break-word', wordBreak: 'break-word' }}>
              <h3 className="text-[18px] md:text-[22px] font-bold mb-2 md:mb-3 text-center md:text-left"
                  style={{ color: 'var(--notes-title)' }}>
                Владислав
              </h3>
              <p className="text-[14px] md:text-[16px] leading-relaxed whitespace-pre-line"
                 style={{ color: 'var(--notes-body)' }}>
                {about.text}
              </p>

              {/* Tools — flex-wrap, no horizontal scroll */}
              <div className="mt-4 md:mt-6">
                <p className="text-[12px] md:text-[13px] font-medium mb-2 md:mb-3"
                   style={{ color: 'var(--notes-secondary)' }}>
                  Инструменты
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {about.tools.map((tool, i) => {
                    const Icon = toolIcons[tool] || Monitor;
                    return (
                      <motion.div key={tool}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                        className="flex items-center gap-1.5 px-2 py-1 rounded-lg flex-shrink-0"
                        style={{ background: 'var(--notes-sidebar)' }}>
                        <Icon size={14}
                              style={{ color: 'var(--notes-checklist)' }} />
                        <span className="text-[11px] md:text-[14px] font-medium"
                              style={{ color: 'var(--notes-title)' }}>
                          {tool}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
