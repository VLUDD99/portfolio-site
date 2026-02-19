import { motion } from 'framer-motion';
import { siteConfig } from '../data/content';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: 'var(--notes-bg)' }}>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-[20px] font-bold mb-5 tracking-tight"
        style={{ color: 'var(--notes-title)' }}>
        {siteConfig.name}
      </motion.p>

      {/* Progress bar */}
      <div className="w-[200px] h-[3px] rounded-full overflow-hidden"
           style={{ background: 'var(--notes-separator)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'var(--notes-accent)' }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}
