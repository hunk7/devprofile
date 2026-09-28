import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Projects } from '../src/sections/Projects';
import { projects } from '../src/content/projects';

describe('Projects section', () => {
  it('renders all curated projects', () => {
    render(<Projects />);
    projects.forEach((project) => {
      expect(screen.getByText(project.name)).toBeInTheDocument();
    });
  });
});
