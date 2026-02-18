import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Send } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { siteConfig } from '../data/content';

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-6 lg:px-12 ${
        scrolled ? 'header-blur' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src="/images/IMG_logo1.JPG" alt="Logo" className="w-8 h-8 rounded-lg object-cover" />
          <span className="text-[15px] font-semibold tracking-tight"
                style={{ color: 'var(--notes-title)' }}>
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {['Услуги', 'Работы', 'Процесс', 'Обо мне'].map((item, i) => (
            <a key={item}
               href={`#${['services', 'portfolio', 'process', 'about'][i]}`}
               className="text-[14px] font-medium transition-colors hover:opacity-70"
               style={{ color: 'var(--notes-secondary)' }}>
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
            style={{ background: 'var(--notes-sidebar)' }}>
            <motion.div key={isDark ? 'moon' : 'sun'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}>
              {isDark 
                ? <Moon size={16} style={{ color: 'var(--notes-accent)' }} />
                : <Sun size={16} style={{ color: 'var(--notes-title)' }} />
              }
            </motion.div>
          </button>

          <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer"
             className="hidden sm:flex notes-button !py-2.5 !px-5 !text-[14px] !rounded-xl">
            <Send size={14} />
            Написать
          </a>
        </div>
      </div>
    </motion.header>
  );
}
