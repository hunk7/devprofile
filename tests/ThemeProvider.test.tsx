import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../src/providers/ThemeProvider';
import { ThemeToggle } from '../src/components/ThemeToggle';

function ThemeConsumer() {
  const { theme } = useTheme();
  return <span data-testid="theme-value">{theme}</span>;
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('defaults to light theme when nothing is stored', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme-value').textContent).toBe('light');
  });

  it('toggles and persists theme to localStorage', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
        <ThemeToggle />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByTestId('theme-value').textContent).toBe('dark');
    expect(window.localStorage.getItem('devprofile-theme')).toBe('dark');
  });
});
