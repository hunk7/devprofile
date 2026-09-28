import { skillGroups } from '../content/skills';
import { Badge } from '../components/Badge';

export function TechBadges() {
  return (
    <section id="skills" className="py-10 text-center">
      <h2 className="mb-5 text-2xl font-heading font-semibold">Technology Profile</h2>
      <div className="mx-auto max-w-3xl space-y-5">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-secondary">
              {group.category}
            </h3>
            <div className="flex flex-wrap justify-center gap-1.5">
              {group.items.map((item) => (
                <Badge key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


