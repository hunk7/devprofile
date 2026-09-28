import { useTheme } from '../providers/ThemeProvider';
import { FiSun, FiMoon } from 'react-icons/fi';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} theme`}
      className={`group relative inline-flex min-h-[44px] min-w-[44px] items-center justify-center overflow-hidden rounded-full border transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
        isLight
          ? 'border-violet-300 bg-gradient-to-br from-violet-200 to-purple-300 text-violet-700 shadow-md shadow-violet-300/40'
          : 'border-violet-400/40 bg-gradient-to-br from-violet-600 to-slate-900 text-violet-200 shadow-md shadow-violet-900/40'
      }`}
    >
      <span className="transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110">
        {isLight ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
      </span>
    </button>
  );
}

