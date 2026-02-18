import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Play, User, Send } from 'lucide-react';
import { navigation } from '../data/content';

const iconMap = { home: Home, play: Play, user: User, send: Send };

export default function TabBar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(n => document.getElementById(n.id)).filter(Boolean);
      const pos = window.scrollY + window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= pos) { setActive(navigation[i].id); break; }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 sm:hidden tab-bar">
      <div className="flex items-center justify-around h-16 px-2 pb-1">
        {navigation.map(item => {
          const Icon = iconMap[item.icon] || Home;
          const isActive = active === item.id;
          return (
            <button key={item.id}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="flex flex-col items-center gap-0.5 py-1 px-3">
              <Icon size={22}
                style={{ color: isActive ? 'var(--notes-checklist)' : 'var(--notes-tertiary)' }}
                strokeWidth={isActive ? 2.5 : 1.5} />
              <span className="text-[10px] font-medium"
                style={{ color: isActive ? 'var(--notes-checklist)' : 'var(--notes-tertiary)' }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
