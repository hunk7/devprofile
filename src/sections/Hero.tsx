import { profile } from '../content/profile';
import { Button } from '../components/Button';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { CyclingTypingText } from '../components/CyclingTypingText';

const HERO_WORDS = [profile.name, profile.role, 'Building with .NET', 'Building with React', 'Cloud-Native on Azure', 'Writing clean code'];

export function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-2xl py-12 text-center">
      <p className="text-xs uppercase tracking-widest text-text-secondary">{profile.location}</p>
      <h1 className="mt-3 min-h-[3rem] font-display text-3xl font-bold tracking-tight sm:text-4xl">
        <span className="text-text">Hey, I&apos;m </span>
        <CyclingTypingText words={HERO_WORDS} className="text-accent" />
      </h1>
      <p className="mx-auto mt-3 max-w-lg text-sm text-text-secondary sm:text-base">{profile.descriptor}</p>
      <div className="mt-5 flex flex-wrap justify-center gap-2.5">
        <Button onClick={() => window.open(profile.github, '_blank', 'noopener,noreferrer')}>
          <FiGithub className="h-4 w-4" aria-hidden="true" /> GitHub
        </Button>
        <Button variant="secondary" onClick={() => window.open(profile.linkedin, '_blank', 'noopener,noreferrer')}>
          <FiLinkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
        </Button>
        <Button variant="secondary" onClick={() => (window.location.href = `mailto:${profile.email}`)}>
          <FiMail className="h-4 w-4" aria-hidden="true" /> Email
        </Button>
      </div>
    </section>
  );
}



