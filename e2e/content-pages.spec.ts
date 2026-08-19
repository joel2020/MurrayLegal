import { expect, test } from '@playwright/test';

test('representative content templates are responsive', async ({ page }, testInfo) => {
  const routes = [
    ['/practice-areas/corporate-law', 'Corporate Law Attorney'],
    ['/industries/businesses-founders', 'Businesses & Founders'],
    ['/about', 'About Murray Legal'],
    ['/insights/business-contract-red-flags-executives-should-review-before-signing', 'Business Contract Red Flags'],
  ] as const;

  for (const [path, heading] of routes) {
    await page.goto(path);
    await expect(page.getByRole('heading', { level: 1, name: new RegExp(heading, 'i') })).toBeVisible();
    await expect(page.locator('[data-hero-visual]').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Request a consultation' }).first()).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
    expect(overflow).toBe(false);
  }

  await page.goto('/practice-areas/corporate-law');
  await page.screenshot({ path: `artifacts/site-audit/content-${testInfo.project.name}.png`, fullPage: true });
});

test('practice hero keeps Pennsylvania licensure adjacent and visible on mobile', async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.startsWith('mobile'), 'Mobile prominence check');
  await page.goto('/practice-areas/corporate-law');
  const hero = page.locator('[data-hero-visual="city"]').first();
  await expect(hero.getByText('Pennsylvania-licensed counsel', { exact: true })).toBeVisible();
  const box = await hero.getByText('Pennsylvania-licensed counsel', { exact: true }).boundingBox();
  expect(box).not.toBeNull();
  expect(box!.x).toBeGreaterThanOrEqual(0);
  expect(box!.x + box!.width).toBeLessThanOrEqual(page.viewportSize()?.width ?? 390);
});
