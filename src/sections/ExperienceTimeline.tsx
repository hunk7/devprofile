import { experience } from '../content/experience';
import { Badge } from '../components/Badge';
import { FiBriefcase, FiMapPin, FiCheckCircle } from 'react-icons/fi';

const dotAccents = ['from-accent to-violet-400', 'from-purple-500 to-accent', 'from-violet-500 to-fuchsia-500'];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-10">
      <h2 className="mb-8 text-2xl font-heading font-semibold">Experience</h2>
      <ol className="relative border-l-2 border-border pl-8">
        {experience.map((entry, idx) => (
          <li key={entry.company} className="mb-12 last:mb-0">
            <span
              className={`absolute -left-[9px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br ${dotAccents[idx % dotAccents.length]} ring-4 ring-bg`}
            />
            <p className="text-sm font-medium text-text-secondary">{entry.period}</p>
            <h3 className="mt-1 flex flex-wrap items-center gap-2 text-lg font-semibold">
              <FiBriefcase className="h-4 w-4 text-accent" />
              {entry.title} · {entry.company}
            </h3>
            <p className="mt-0.5 flex items-center gap-1 text-sm text-text-secondary">
              <FiMapPin className="h-3.5 w-3.5" /> {entry.location}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-text-secondary">
              {entry.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {entry.stack.map((s) => (
                <Badge key={s} label={s} />
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

