import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GitHubStatus } from '../src/sections/GitHubStatus';

describe('GitHubStatus section', () => {
  it('shows a placeholder message when no snapshot data is available', () => {
    render(<GitHubStatus />);
    expect(
      screen.getByText(/GitHub metadata has not been generated yet/i)
    ).toBeInTheDocument();
  });
});
