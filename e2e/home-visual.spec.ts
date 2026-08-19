import { expect, test } from '@playwright/test';

test('homepage renders the editorial hero and responsive content', async ({ page }, testInfo) => {
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);

  await expect(page.getByRole('heading', { level: 1, name: 'Serious counsel for consequential matters.' })).toBeVisible();
  await expect(page.getByAltText('Monochrome view of the Lower Manhattan skyline')).toBeVisible();
  await expect(page.locator('[data-counsel-card]')).toHaveCount(8);
  await expect(page.getByRole('link', { name: 'Request a consultation' }).first()).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);

  const isMobile = testInfo.project.name.startsWith('mobile');
  await page.screenshot({
    path: `artifacts/site-audit/redesign-${isMobile ? 'mobile' : 'desktop'}-home.png`,
    fullPage: true,
  });
});
