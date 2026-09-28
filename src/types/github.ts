export interface GithubRepoSummary {
  name: string;
  url: string;
  stars: number;
  forks: number;
  language: string | null;
}

export interface GithubSnapshot {
  profile: {
    login: string;
    avatarUrl: string;
    publicRepos: number;
  };
  contributions: {
    totalLastYear: number;
  };
  repositories: GithubRepoSummary[];
  lastRefreshedAt: string | null;
  status: 'ok' | 'placeholder' | 'stale';
}
