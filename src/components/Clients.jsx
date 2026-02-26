import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { clients } from '../data/content';

export default function Clients() {
  return (
    <section id="clients" className="py-12 md:py-24 px-4 md:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}>
          <h2 className="section-title text-[24px] sm:text-[34px] font-bold mb-2 md:mb-3"
              style={{ color: 'var(--notes-title)' }}>
            Мне доверяют
          </h2>
          <p className="text-[14px] md:text-[16px] mt-3 md:mt-4 mb-6 md:mb-12 max-w-2xl"
             style={{ color: 'var(--notes-secondary)' }}>
            Работал с блогерами, экспертами и брендами
          </p>
        </motion.div>

        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0 clients-scroll"
             style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' }}>
          <style>{`
            .clients-scroll::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {clients.map((client, i) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.15,
                duration: 0.7,
                ease: [0.2, 0.8, 0.2, 1]
              }}
              className="note-card note-card-accent paper-texture min-w-[260px] md:min-w-0 snap-start flex-shrink-0 md:flex-shrink">

              <div className="flex flex-col items-center text-center">
                {/* TODO: Заменить на реальное фото клиента */}
                <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-4 flex-shrink-0"
                     style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                  {client.photo ? (
                    <img
                      src={client.photo}
                      alt={client.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="1.5" className="text-gray-400">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  )}
                </div>

                <h3 className="text-[17px] font-bold mb-1" style={{ color: 'var(--notes-title)' }}>
                  {client.name}
                </h3>

                <p className="text-[14px] mb-3 leading-relaxed"
                   style={{ color: 'var(--notes-body)' }}>
                  {client.description}
                </p>

                <div className="flex items-center gap-2 text-[13px] font-medium"
                     style={{ color: 'var(--notes-secondary)' }}>
                  <Users size={14} style={{ color: 'var(--notes-checklist)' }} />
                  <span>{client.followers}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
