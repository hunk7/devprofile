import { ThemeProvider } from './providers/ThemeProvider';
import { NavBar } from './sections/NavBar';
import { Hero } from './sections/Hero';
import { ImpactMetrics } from './sections/ImpactMetrics';
import { About } from './sections/About';
import { ExperienceTimeline } from './sections/ExperienceTimeline';
import { Projects } from './sections/Projects';
import { TechBadges } from './sections/TechBadges';
import { Certifications } from './sections/Certifications';
import { Education } from './sections/Education';
import { GitHubStatus } from './sections/GitHubStatus';
import { BackgroundOrbs } from './components/BackgroundOrbs';

function App() {
  return (
    <ThemeProvider>
      <BackgroundOrbs />
      <NavBar />
      <main className="mx-auto max-w-5xl px-4">
        <Hero />
        <ImpactMetrics />
        <About />
        <ExperienceTimeline />
        <Projects />
        <TechBadges />
        <Certifications />
        <Education />
        <GitHubStatus />
      </main>
    </ThemeProvider>
  );
}

export default App;


