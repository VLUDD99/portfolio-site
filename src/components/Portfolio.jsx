import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Search, Play } from 'lucide-react';
import { portfolio } from '../data/content';

export default function Portfolio() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState(null);
  const ref = useRef(null);

  const allTags = [...new Set(portfolio.flatMap(p => p.tags))];

  const filtered = portfolio.filter(item => {
    const matchesSearch = !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !activeTag || item.tags.includes(activeTag);
    return matchesSearch && matchesTag;
  });

  return (
    <section id="portfolio" ref={ref} className="py-12 md:py-24 px-4 md:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}>
          <h2 className="section-title text-[24px] sm:text-[34px] font-bold mb-2 md:mb-3"
              style={{ color: 'var(--notes-title)' }}>
            Мои работы
          </h2>
          <p className="text-[14px] md:text-[16px] mt-3 md:mt-4 mb-4 md:mb-8 max-w-2xl"
             style={{ color: 'var(--notes-secondary)' }}>
            Кейсы из портфолио — результаты, которые говорят сами за себя
          </p>
        </motion.div>

        {/* Search + Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 md:mb-8">
          <div className="relative mb-3 md:mb-4 max-w-md">
            <Search size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: 'var(--notes-secondary)' }} />
            <input type="text" placeholder="Поиск по работам..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-bar" />
          </div>
          <div className="flex gap-2 flex-nowrap overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap"
               style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
            <button onClick={() => setActiveTag(null)}
              className={`tag-pill flex-shrink-0 ${!activeTag ? 'active' : ''}`}>
              Все
            </button>
            {allTags.map(tag => (
              <button key={tag}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className={`tag-pill flex-shrink-0 ${activeTag === tag ? 'active' : ''}`}>
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2 -mx-4 px-4 md:mx-0 md:px-0"
             style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div key={item.id}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                layout
                className="note-card paper-texture min-w-[260px] max-w-[280px] md:min-w-0 md:max-w-none snap-start flex-shrink-0 md:flex-shrink">

                {/* Video: iframe if videoUrl exists, otherwise placeholder */}
                {item.videoUrl ? (
                  <iframe
                    src={item.videoUrl}
                    className="w-full rounded-xl mb-5"
                    style={{ aspectRatio: '9/16', backgroundColor: '#000' }}
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                    frameBorder="0"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : (
                  <div className="video-placeholder mb-5 group cursor-pointer w-full">
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-md group-hover:bg-white/25 group-hover:scale-110 transition-all duration-500">
                        <Play size={22} fill="white" className="text-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-[17px] font-semibold mb-2" style={{ color: 'var(--notes-title)' }}>
                  {item.title}
                </h3>
                <p className="text-[14px] leading-relaxed mb-4" style={{ color: 'var(--notes-body)' }}>
                  {item.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between w-full pt-3"
                     style={{ borderTop: '1px solid var(--notes-separator)' }}>
                  <div className="flex flex-wrap gap-1.5 items-center">
                    {item.tags.map(tag => (
                      <span key={tag}
                        className="tag-pill inline-flex items-center justify-center !py-2 !px-2.5 !text-[10px] !leading-none !min-h-0 !min-w-0 !rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] flex-shrink-0 ml-2" style={{ color: 'var(--notes-tertiary)' }}>
                    {item.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center py-16 text-[16px]" style={{ color: 'var(--notes-secondary)' }}>
            Заметок не найдено
          </p>
        )}
      </div>
    </section>
  );
}
