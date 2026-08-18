import { expect, test } from '@playwright/test';

test('homepage remains composed at the tablet breakpoint', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-chromium', 'A single explicit 768px capture is sufficient.');
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1, name: /Strategic Legal Counsel/i })).toBeVisible();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
  expect(overflow).toBe(false);
  await page.screenshot({ path: 'artifacts/site-audit/redesign-tablet-home.png', fullPage: true });
});
