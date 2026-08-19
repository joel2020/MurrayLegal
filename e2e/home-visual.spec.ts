import { expect, test } from '@playwright/test';

test('homepage renders the editorial hero and responsive content', async ({ page }, testInfo) => {
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);

  await expect(page.getByRole('heading', { level: 1, name: 'Serious counsel for consequential matters.' })).toBeVisible();
  await expect(page.getByAltText('Monochrome view of the Lower Manhattan skyline')).toBeVisible();
  await expect(page.locator('[data-counsel-card]')).toHaveCount(8);
  await expect(page.getByRole('link', { name: 'Request a consultation' }).first()).toBeVisible();
  const panelEdge = await page.locator('.city-hero__panel').evaluate((panel) => {
    const style = getComputedStyle(panel);
    return { color: style.borderLeftColor, style: style.borderLeftStyle, width: parseFloat(style.borderLeftWidth) };
  });
  expect(panelEdge.color).toBe('rgb(176, 138, 50)');
  expect(panelEdge.style).toBe('solid');
  expect(panelEdge.width).toBeGreaterThanOrEqual(5);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);

  const isMobile = testInfo.project.name.startsWith('mobile');
  await page.screenshot({
    path: `artifacts/site-audit/redesign-${isMobile ? 'mobile' : 'desktop'}-home.png`,
    fullPage: true,
  });
});

test('CityHero content remains complete when Manhattan images fail', async ({ page }) => {
  await page.route('**/images/murray-legal-manhattan.webp', (route) => route.abort());
  await page.route('**/images/murray-legal-manhattan.jpg', (route) => route.abort());
  await page.goto('/');

  const panel = page.locator('.city-hero__panel');
  await expect(panel).toHaveCSS('background-color', 'rgb(8, 20, 38)');
  await expect(panel.getByRole('heading', { level: 1, name: 'Serious counsel for consequential matters.' })).toBeVisible();
  await expect(panel.getByRole('link', { name: 'Request a consultation' })).toBeVisible();
  await expect(panel.getByRole('link', { name: 'Explore the firm' })).toBeVisible();
});
