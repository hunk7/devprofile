import { getTechIcon } from '../utils/techIcons';

export function Badge({ label, accentClass }: { label: string; accentClass?: string }) {
  const Icon = getTechIcon(label);
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-secondary shadow-sm transition-colors hover:border-accent hover:text-text ${
        accentClass ? `bg-gradient-to-r ${accentClass} text-white border-transparent hover:text-white` : ''
      }`}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {label}
    </span>
  );
}

