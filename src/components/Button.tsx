import type { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary';

export function Button({
  variant = 'primary',
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition-all min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent hover:-translate-y-0.5 hover:shadow-lg';
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-accent to-violet-400 text-white border-transparent hover:shadow-accent/40'
      : 'bg-surface text-text border-border hover:border-accent hover:text-accent';
  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
