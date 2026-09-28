import snapshot from '../generated/github-profile.json';
import type { GithubSnapshot } from '../types/github';
import { Card } from '../components/Card';
import { FiGithub, FiStar, FiGitBranch } from 'react-icons/fi';
import { profile } from '../content/profile';

const STALE_THRESHOLD_MS = 1000 * 60 * 60 * 24 * 3; // 3 days
const GITHUB_USERNAME = 'hunk7';

export function GitHubStatus() {
  const data = snapshot as GithubSnapshot;
  const isPlaceholder = data.status === 'placeholder' || !data.lastRefreshedAt;
  const isStale =
    !isPlaceholder &&
    data.lastRefreshedAt !== null &&
    Date.now() - new Date(data.lastRefreshedAt).getTime() > STALE_THRESHOLD_MS;

  return (
    <section id="github" className="py-10">
      <h2 className="mb-2 flex items-center gap-2 text-2xl font-heading font-semibold">
        <FiGithub className="h-6 w-6 text-accent" /> GitHub Engineering Status
      </h2>
      {isPlaceholder ? (
        <p className="text-sm text-text-secondary">
          GitHub metadata has not been generated yet. This section refreshes automatically via a
          scheduled workflow.
        </p>
      ) : (
        <>
          {isStale && (
            <p className="mb-4 text-xs text-text-secondary">
              Showing last known data — refresh in progress.
            </p>
          )}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Card className="text-center bg-gradient-to-br from-accent/10 to-transparent">
              <p className="text-2xl font-bold text-accent">{data.profile.publicRepos}</p>
              <p className="text-sm text-text-secondary">Public repositories</p>
            </Card>
            <Card className="text-center bg-gradient-to-br from-accent/10 to-transparent">
              <p className="text-2xl font-bold text-accent">{data.contributions.totalLastYear}</p>
              <p className="text-sm text-text-secondary">Contributions (last year)</p>
            </Card>
            <Card className="text-center bg-gradient-to-br from-accent/10 to-transparent">
              <p className="text-2xl font-bold text-accent">{data.repositories.length}</p>
              <p className="text-sm text-text-secondary">Featured repositories</p>
            </Card>
          </div>
        </>
      )}

      <Card className="mt-6 overflow-x-auto">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-text-secondary">Recent Contribution History</h3>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
          >
            <FiGithub className="h-3.5 w-3.5" /> @{GITHUB_USERNAME}
          </a>
        </div>
        <img
          src={`https://ghchart.rshah.org/7c3aed/${GITHUB_USERNAME}`}
          alt={`${GITHUB_USERNAME}'s GitHub contribution chart`}
          className="min-w-[640px] w-full dark:invert-0"
          loading="lazy"
        />
      </Card>

      {data.repositories.length > 0 && (
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {data.repositories.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg border border-border bg-surface p-3 text-sm transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
            >
              <span className="font-medium text-text group-hover:text-accent">{repo.name}</span>
              <span className="flex items-center gap-3 text-xs text-text-secondary">
                <span className="flex items-center gap-1">
                  <FiStar className="h-3.5 w-3.5" /> {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <FiGitBranch className="h-3.5 w-3.5" /> {repo.forks}
                </span>
              </span>
            </a>
          ))}
        </div>
      )}

      <p className="mt-4 text-xs text-text-secondary">
        Last refreshed: {data.lastRefreshedAt ?? 'never (placeholder data)'}
      </p>
    </section>
  );
}

