import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check } from 'lucide-react';
import { processSteps } from '../data/content';

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="process" ref={ref} className="py-12 md:py-24 px-4 md:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}>
          <h2 className="section-title text-[24px] sm:text-[34px] font-bold mb-2 md:mb-3"
              style={{ color: 'var(--notes-title)' }}>
            Как я работаю
          </h2>
          <p className="text-[14px] md:text-[16px] mt-3 md:mt-4 mb-6 md:mb-12 max-w-2xl"
             style={{ color: 'var(--notes-secondary)' }}>
            Чёткий процесс от идеи до готового видео
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Left — checklist card */}
          <motion.div style={{ y: bgY }}
            className="note-card note-card-accent paper-texture">
            <p className="text-[12px] md:text-[13px] font-medium mb-4 md:mb-6"
               style={{ color: 'var(--notes-secondary)' }}>
              Чек-лист проекта
            </p>
            <div className="space-y-0">
              {processSteps.map((step, i) => (
                <motion.div key={step.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                  className={`flex items-center gap-3 md:gap-4 py-3 md:py-5 ${
                    i < processSteps.length - 1 ? 'border-b' : ''
                  }`}
                  style={{ borderColor: 'var(--notes-separator)' }}>

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, type: "spring", stiffness: 400, damping: 15 }}
                    className="checkbox-circle checked">
                    <Check size={13} className="text-white" strokeWidth={3} />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] md:text-[17px] font-semibold mb-0.5 md:mb-1"
                        style={{ color: 'var(--notes-title)' }}>
                      {step.title}
                    </h3>
                    <p className="text-[13px] md:text-[14px]" style={{ color: 'var(--notes-body)' }}>
                      {step.description}
                    </p>
                  </div>

                  <span className="w-8 text-right text-[24px] font-bold flex-shrink-0"
                        style={{ color: 'var(--notes-accent)', opacity: 0.4 }}>
                    {step.id}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — stats / summary */}
          <div>
            {/* Desktop: stacked note-cards */}
            <div className="hidden md:flex flex-col gap-6">
              {[
                { number: '700+', label: 'Видео смонтировано', ellipse: true },
                { number: '19M+', label: 'Суммарных просмотров', ellipse: false },
                { number: '2 дня', label: 'Среднее время монтажа', ellipse: false },
              ].map((stat, i) => (
                <motion.div key={stat.label}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                  className="note-card note-card-accent paper-texture flex items-center gap-5">
                  {stat.ellipse ? (
                    <span className="relative inline-block text-[48px] font-bold leading-none flex-shrink-0"
                          style={{ color: 'var(--notes-accent)' }}>
                      <svg className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)]"
                           viewBox="0 0 120 60" fill="none">
                        <ellipse cx="60" cy="30" rx="55" ry="25"
                          stroke="var(--notes-accent)" strokeWidth="2.5" strokeLinecap="round"
                          style={{ transform: 'rotate(-2deg)', transformOrigin: 'center' }} />
                      </svg>
                      700+
                    </span>
                  ) : (
                    <span className="text-[48px] font-bold leading-none flex-shrink-0"
                          style={{ color: 'var(--notes-accent)' }}>
                      {stat.number}
                    </span>
                  )}
                  <span className="text-[16px] font-medium leading-snug"
                        style={{ color: 'var(--notes-body)' }}>
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Mobile: compact 3-column grid */}
            <div className="md:hidden grid grid-cols-3 gap-2">
              {[
                { number: '700+', label: 'Видео' },
                { number: '19M+', label: 'Просмотров' },
                { number: '2 дня', label: 'Среднее время' },
              ].map((stat, i) => (
                <motion.div key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="rounded-xl p-3 text-center"
                  style={{ background: 'var(--notes-sidebar)' }}>
                  <span className="text-[20px] font-bold leading-none block"
                        style={{ color: 'var(--notes-accent)' }}>
                    {stat.number}
                  </span>
                  <span className="text-[10px] font-medium mt-1 block leading-tight"
                        style={{ color: 'var(--notes-secondary)' }}>
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
