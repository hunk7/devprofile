import { projects } from '../content/projects';
import { Card } from '../components/Card';
import { StatusPill } from '../components/StatusPill';
import { Badge } from '../components/Badge';
import { TODO_PLACEHOLDER } from '../content/todo';

export function Projects() {
  return (
    <section id="projects" className="py-10">
      <h2 className="mb-8 text-2xl font-heading font-semibold">Featured Projects</h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name}>
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <StatusPill status={project.status} />
            </div>
            <p className="mt-2 text-sm text-text-secondary">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <Badge key={s} label={s} />
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm">
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-accent">
                  Live demo
                </a>
              )}
              {project.repoUrl !== TODO_PLACEHOLDER ? (
                <a href={project.repoUrl as string} target="_blank" rel="noopener noreferrer" className="text-accent">
                  GitHub
                </a>
              ) : (
                <span className="text-text-secondary">Repo link pending</span>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
