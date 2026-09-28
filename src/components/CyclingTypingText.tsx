import { useEffect, useState } from 'react';

export function CyclingTypingText({
  words,
  className = '',
  typingSpeedMs = 90,
  deletingSpeedMs = 45,
  pauseMs = 1400,
}: {
  words: string[];
  className?: string;
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayed((prev) =>
            isDeleting ? currentWord.slice(0, prev.length - 1) : currentWord.slice(0, prev.length + 1)
          );
        },
        isDeleting ? deletingSpeedMs : typingSpeedMs
      );
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typingSpeedMs, deletingSpeedMs, pauseMs]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-pulse text-accent">|</span>
    </span>
  );
}
