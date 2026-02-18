import { siteConfig } from '../data/content';

export default function Footer() {
  return (
    <footer className="py-10 px-6 lg:px-12 pb-24 sm:pb-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4"
           style={{ borderTop: '1px solid var(--notes-separator)', paddingTop: '24px' }}>
        <p className="text-[13px]" style={{ color: 'var(--notes-secondary)' }}>
          © {new Date().getFullYear()} {siteConfig.name} — монтаж и моушн-дизайн
        </p>
        <p className="text-[12px]" style={{ color: 'var(--notes-tertiary)' }}>
          Сделано с любовью к деталям
        </p>
      </div>
    </footer>
  );
}
