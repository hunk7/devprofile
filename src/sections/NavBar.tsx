import { useEffect, useState } from 'react';
import { ThemeToggle } from '../components/ThemeToggle';
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiFolder,
  FiCode,
  FiGithub,
  FiMenu,
  FiX,
} from 'react-icons/fi';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home', icon: FiHome },
  { id: 'about', label: 'About', icon: FiUser },
  { id: 'experience', label: 'Experience', icon: FiBriefcase },
  { id: 'projects', label: 'Projects', icon: FiFolder },
  { id: 'skills', label: 'Skills', icon: FiCode },
  { id: 'github', label: 'GitHub', icon: FiGithub },
];

export function NavBar() {
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const renderLink = (item: (typeof NAV_ITEMS)[number], compact: boolean) => {
    const Icon = item.icon;
    const isActive = active === item.id;
    return (
      <a
        key={item.id}
        href={`#${item.id}`}
        onClick={() => setMenuOpen(false)}
        className={`inline-flex min-h-[40px] shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all sm:text-sm ${
          compact ? 'w-full justify-start' : ''
        } ${
          isActive
            ? 'border-transparent bg-gradient-to-r from-accent to-violet-400 text-white shadow-md'
            : 'border-border bg-transparent text-text-secondary hover:border-accent hover:text-accent'
        }`}
      >
        <Icon className="h-4 w-4" />
        <span>{item.label}</span>
      </a>
    );
  };

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-surface/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-4 py-2.5">
        <div className="hidden flex-1 flex-wrap items-center gap-1.5 overflow-x-auto scrollbar-none sm:flex sm:gap-2">
          {NAV_ITEMS.map((item) => renderLink(item, false))}
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent sm:hidden"
        >
          {menuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
        <ThemeToggle />
      </nav>
      {menuOpen && (
        <div className="flex flex-col gap-1.5 border-t border-border px-4 py-3 sm:hidden">
          {NAV_ITEMS.map((item) => renderLink(item, true))}
        </div>
      )}
    </header>
  );
}


