import { education } from '../content/education';
import { Card } from '../components/Card';
import { FiBookOpen } from 'react-icons/fi';

export function Education() {
  return (
    <section id="education" className="py-10 text-center">
      <h2 className="mb-6 text-2xl font-heading font-semibold">Education</h2>
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 text-left sm:grid-cols-2">
        {education.map((entry) => (
          <Card key={entry.school}>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <FiBookOpen className="h-[18px] w-[18px]" />
              </span>
              <div>
                <h3 className="font-semibold">{entry.school}</h3>
                <p className="text-sm text-text-secondary">
                  {entry.degree} · {entry.period}
                </p>
                <p className="text-sm text-text-secondary">{entry.gpa}</p>
                {entry.specialization && (
                  <p className="text-sm text-text-secondary">Specialization: {entry.specialization}</p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

