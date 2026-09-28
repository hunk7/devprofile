import { certifications } from '../content/certifications';
import { Card } from '../components/Card';
import { TODO_PLACEHOLDER } from '../content/todo';
import { FiAward } from 'react-icons/fi';

export function Certifications() {
  return (
    <section id="certifications" className="py-10 text-center">
      <h2 className="mb-6 text-2xl font-heading font-semibold">Certifications</h2>
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 text-left sm:grid-cols-2">
        {certifications.map((cert) => (
          <Card key={cert.code}>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <FiAward className="h-[18px] w-[18px]" />
              </span>
              <div>
                <h3 className="font-semibold">{cert.name}</h3>
                <p className="text-sm text-text-secondary">{cert.code}</p>
                {cert.credentialUrl !== TODO_PLACEHOLDER ? (
                  <a href={cert.credentialUrl as string} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm text-accent">
                    View credential
                  </a>
                ) : (
                  <p className="mt-2 text-xs text-text-secondary">Credential URL pending</p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

