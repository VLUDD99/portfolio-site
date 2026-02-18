import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Film, Sparkles } from 'lucide-react';
import { services } from '../data/content';

const iconMap = { video: Film, sparkles: Sparkles };

export default function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="services" ref={ref} className="py-12 md:py-24 px-4 md:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}>
          <h2 className="section-title text-[24px] sm:text-[34px] font-bold mb-2 md:mb-3"
              style={{ color: 'var(--notes-title)' }}>
            Что я делаю
          </h2>
          <p className="text-[14px] md:text-[16px] mt-3 md:mt-4 mb-6 md:mb-12 max-w-2xl"
             style={{ color: 'var(--notes-secondary)' }}>
            Два направления, в которых я создаю контент для брендов и экспертов
          </p>
        </motion.div>

        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div className="flex md:grid md:grid-cols-2 gap-3 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2 -mx-4 px-4 md:mx-0 md:px-0"
             style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Film;
            return (
              <motion.div key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                className="note-card note-card-accent paper-texture min-w-[260px] max-w-[280px] md:min-w-0 md:max-w-none snap-start flex-shrink-0 md:flex-shrink min-h-[200px] md:min-h-0 flex flex-col">

                {/* Mobile: vertical (icon above title+desc), Desktop: horizontal */}
                <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4 flex-1">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                       style={{ background: 'var(--notes-accent-soft)' }}>
                    <Icon size={22} style={{ color: 'var(--notes-checklist)' }} />
                  </div>
                  <div className="w-full min-w-0">
                    <h3 className="text-[18px] md:text-[20px] font-semibold mb-2" style={{ color: 'var(--notes-title)' }}>
                      {service.title}
                    </h3>
                    <p className="text-[14px] md:text-[15px] leading-relaxed" style={{ color: 'var(--notes-body)' }}>
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 flex justify-between items-center"
                     style={{ borderTop: '1px solid var(--notes-separator)' }}>
                  <span className="text-[12px]" style={{ color: 'var(--notes-tertiary)' }}>
                    Изменено: {service.date}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
