import { useState } from 'react';
import { useHSlider } from '../hooks/useHSlider';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { portfolio } from '../data/content';
import LazyVideo from './LazyVideo';

export default function Portfolio() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState(null);
  const sliderRef = useHSlider();
  const allTags = [...new Set(portfolio.flatMap(p => p.tags))];

  const filtered = portfolio.filter(item => {
    const matchesSearch = !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !activeTag || item.tags.includes(activeTag);
    return matchesSearch && matchesTag;
  });

  return (
    <section id="portfolio" className="py-12 md:py-24 px-4 md:px-6 lg:px-12">
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
        <div ref={sliderRef}
             className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2 -mx-4 px-4 md:mx-0 md:px-0"
             style={{ scrollbarWidth: 'none' }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div key={item.id}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                layout
                className="rounded-2xl overflow-hidden border snap-start flex-shrink-0 md:flex-shrink min-w-[220px] max-w-[240px] md:min-w-0 md:max-w-none"
                style={{
                  padding: '6px',
                  background: 'var(--notes-card)',
                  borderColor: 'var(--notes-separator)',
                  boxShadow: '0 1px 4px var(--notes-shadow)',
                }}>

                <LazyVideo videoUrl={item.videoUrl} thumbnail={item.thumbnail} />
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
