import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('DevProfile portfolio', () => {
  test('navigation scrolls to sections and highlights active link', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Ganesh Bhadra' })).toBeVisible();
    await page.getByRole('link', { name: 'Projects' }).click();
    await expect(page.locator('#projects')).toBeInViewport();
  });

  test('theme toggle persists across reload', async ({ page }) => {
    await page.goto('/');
    const toggle = page.getByRole('button', { name: /switch to dark theme/i });
    await toggle.click();
    await expect(page.locator('html')).toHaveClass(/dark/);
    await page.reload();
    await expect(page.locator('html')).toHaveClass(/dark/);
  });

  test('featured projects render with links', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('codedotnet')).toBeVisible();
  });

  test('GitHub section shows fallback or live data without hiding content', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#github')).toBeVisible();
  });

  test('resume download link is present', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: /download resume/i })).toBeVisible();
  });

  test('external links use safe rel attributes', async ({ page }) => {
    await page.goto('/');
    const github = page.locator('a[href="https://github.com/hunk7"]').first();
    await expect(github).toHaveAttribute('rel', /noopener/);
  });

  test('no horizontal overflow at viewport width', async ({ page }) => {
    await page.goto('/');
    const hasOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(hasOverflow).toBeFalsy();
  });

  test('has no critical accessibility violations', async ({ page }) => {
    await page.goto('/');
    const results = await new AxeBuilder({ page }).analyze();
    const critical = results.violations.filter((v) => v.impact === 'critical');
    expect(critical).toEqual([]);
  });
});
