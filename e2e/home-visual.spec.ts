import { expect, test } from '@playwright/test';

test('homepage renders the editorial hero and responsive content', async ({ page }, testInfo) => {
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);

  await expect(page.getByRole('heading', { level: 1, name: /Strategic Legal Counsel for Consequential Decisions/i })).toBeVisible();
  await expect(page.getByAltText('Contemporary limestone and bronze architecture in directional light')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Schedule a Consultation' }).first()).toBeVisible();
  await expect(page.getByRole('region', { name: 'Practice areas' }).getByRole('article')).toHaveCount(8);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);

  const isMobile = testInfo.project.name.startsWith('mobile');
  await page.screenshot({
    path: `artifacts/site-audit/redesign-${isMobile ? 'mobile' : 'desktop'}-home.png`,
    fullPage: true,
  });
});
