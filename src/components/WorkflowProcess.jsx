import { motion } from 'framer-motion';

export default function WorkflowProcess() {
  const screenshots = [
    {
      title: 'Premiere Pro',
      description: 'Монтаж и нарезка',
      image: '/images/Premier11.jpg',
      rotation: -2,
      delay: 0
    },
    {
      title: 'After Effects',
      description: 'Моушн-графика',
      image: '/images/Ae22.jpg',
      rotation: 1,
      delay: 0.15
    },
    {
      title: 'DaVinci Resolve',
      description: 'Цветокоррекция',
      image: '/images/DaVinci33.jpg',
      rotation: -1,
      delay: 0.3
    }
  ];

  return (
    <section id="workflow" className="py-12 md:py-24 px-4 md:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}>
          <h2 className="section-title text-[24px] sm:text-[34px] font-bold mb-2 md:mb-3"
              style={{ color: 'var(--notes-title)' }}>
            Рабочий процесс
          </h2>
          <p className="text-[14px] md:text-[16px] mt-3 md:mt-4 mb-6 md:mb-12 max-w-2xl"
             style={{ color: 'var(--notes-secondary)' }}>
            Инструменты, которые я использую каждый день
          </p>
        </motion.div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {screenshots.map((screen, i) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: screen.rotation }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: screen.delay,
                duration: 0.7,
                ease: [0.2, 0.8, 0.2, 1]
              }}
              whileHover={{
                scale: 1.04,
                rotate: 0,
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
              className="relative"
              style={{
                transform: `rotate(${screen.rotation}deg)`,
              }}>
              {/* Polaroid-style frame */}
              <div className="p-4 rounded-lg w-full"
                   style={{
                     background: 'var(--notes-card)',
                     boxShadow: '0 10px 40px var(--notes-shadow-hover)',
                     border: '1px solid var(--notes-separator)',
                   }}>
                <img
                  src={screen.image}
                  alt={screen.title}
                  className="w-full mb-3 rounded-sm"
                  style={{ aspectRatio: '16/9', objectFit: 'cover' }}
                />
                <div className="text-center">
                  <p className="font-semibold text-[15px]" style={{ color: 'var(--notes-title)' }}>
                    {screen.title}
                  </p>
                  <p className="text-[13px]" style={{ color: 'var(--notes-secondary)' }}>
                    {screen.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4"
             style={{
               scrollSnapType: 'x mandatory',
               scrollbarWidth: 'none',
               msOverflowStyle: 'none',
               WebkitOverflowScrolling: 'touch'
             }}>
          <div className="flex gap-4">
            {screenshots.map((screen, i) => (
              <motion.div
                key={screen.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex-shrink-0"
                style={{ scrollSnapAlign: 'start' }}>
                <div className="p-4 rounded-lg"
                     style={{
                       background: 'var(--notes-card)',
                       boxShadow: '0 4px 20px var(--notes-shadow-hover)',
                       border: '1px solid var(--notes-separator)',
                       width: '260px'
                     }}>
                  {/* TODO: Заменить на реальное фото: public/images/workflow-{i+1}.jpg */}
                  <img
                    src={screen.image} 
                    alt={screen.title} 
                    width={228}
                    height={128}
                    text={`Скрин ${screen.title}`}
                    className="mb-3"
                    style={{ aspectRatio: '16/9' }}
                  />
                  <div className="text-center">
                    <p className="font-semibold text-[15px]" style={{ color: 'var(--notes-title)' }}>
                      {screen.title}
                    </p>
                    <p className="text-[13px]" style={{ color: 'var(--notes-secondary)' }}>
                      {screen.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
