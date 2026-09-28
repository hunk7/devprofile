import type { Todo } from './todo';

export interface Project {
  name: string;
  year: string;
  description: string;
  liveDemo?: string;
  repoUrl: string | Todo;
  stack: string[];
  status: 'live' | 'active' | 'archived';
}

export const projects: Project[] = [
  {
    name: 'codedotnet',
    year: '2025',
    description:
      'A browser-based C# playground for writing, compiling, and running C# entirely on the client using the .NET 10 WebAssembly runtime and Roslyn. No server-side compilation, installation, account, or authentication required.',
    liveDemo: 'https://hunk7.github.io/codedotnet',
    repoUrl: 'https://github.com/hunk7/codedotnet',
    stack: ['C#', '.NET 10', 'WebAssembly', 'Roslyn', 'JavaScript', 'HTML5', 'CSS3', 'React', 'Vite', 'GitHub Pages'],
    status: 'live',
  },
  {
    name: 'Algorithms and Data Structures',
    year: '2024',
    description:
      'A curated C# repository covering graph algorithms, Dijkstra, BFS, DFS, binary search, sliding window, two pointers, heaps, monotonic stacks, trees, intervals, dynamic programming, backtracking, and complexity analysis.',
    repoUrl: 'https://github.com/hunk7/leetcode',
    stack: ['C#', 'Algorithms', 'Data Structures'],
    status: 'active',
  },
];
