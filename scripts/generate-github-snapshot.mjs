// Generates a static GitHub engineering-status snapshot for the DevProfile portfolio.
// Run via `npm run generate:github-snapshot`. Requires a GITHUB_TOKEN env var
// (provided via GitHub Actions secrets in CI; never committed or bundled).
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const GITHUB_LOGIN = 'hunk7';
const OUTPUT_PATH = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../src/generated/github-profile.json'
);

const token = process.env.GITHUB_TOKEN;

async function githubFetch(url) {
  const res = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!res.ok) {
    throw new Error(`GitHub API request failed: ${res.status} ${res.statusText} (${url})`);
  }
  return res.json();
}

async function main() {
  const [profile, repos] = await Promise.all([
    githubFetch(`https://api.github.com/users/${GITHUB_LOGIN}`),
    githubFetch(`https://api.github.com/users/${GITHUB_LOGIN}/repos?sort=updated&per_page=10`),
  ]);

  const repositories = repos.map((repo) => ({
    name: repo.name,
    url: repo.html_url,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    language: repo.language,
  }));

  const snapshot = {
    profile: {
      login: profile.login,
      avatarUrl: profile.avatar_url,
      publicRepos: profile.public_repos,
    },
    contributions: {
      // Contribution-calendar totals require the GraphQL API; left as 0 until
      // implemented with a token that has read:user scope.
      totalLastYear: 0,
    },
    repositories,
    lastRefreshedAt: new Date().toISOString(),
    status: 'ok',
  };

  await writeFile(OUTPUT_PATH, `${JSON.stringify(snapshot, null, 2)}\n`, 'utf-8');
  console.log(`GitHub snapshot written to ${OUTPUT_PATH}`);
}

main().catch((error) => {
  console.error('Failed to generate GitHub snapshot:', error);
  // Do not fail the build: retain the last successful snapshot (Section 7 fallback rules).
  process.exitCode = 0;
});
