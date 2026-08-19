import { expect, test } from '@playwright/test';

test.setTimeout(90_000);

const canonicalRoutes = [
  '/', '/insights', '/about', '/contact', '/disclaimer', '/privacy-policy',
  '/practice-areas/corporate-law', '/practice-areas/real-estate', '/practice-areas/civil-litigation', '/practice-areas/entertainment-transactions', '/practice-areas/sports-transactions', '/practice-areas/intellectual-property', '/practice-areas/trusts-wills-estates', '/practice-areas/divorce-family-law',
  '/industries/businesses-founders', '/industries/real-estate-investors', '/industries/entertainment-professionals', '/industries/athletes-sports-organizations', '/industries/high-net-worth-individuals',
  '/insights/business-contract-red-flags-executives-should-review-before-signing', '/insights/commercial-real-estate-due-diligence-checklist', '/insights/what-to-do-when-a-business-contract-is-breached', '/insights/entertainment-contract-red-flags-for-creators-and-producers', '/insights/athlete-endorsement-agreement-red-flags', '/insights/trademark-vs-copyright-what-business-owners-need-to-know', '/insights/estate-planning-checklist-for-executives-and-business-owners', '/insights/high-net-worth-divorce-legal-and-financial-issues-to-consider', '/insights/what-should-be-included-in-a-shareholder-agreement',
];

test('all canonical routes expose a stable accessible document shell', async ({ page }) => {
  const consoleErrors: string[] = [];
  page.on('console', (message) => { if (message.type() === 'error') consoleErrors.push(message.text()); });
  for (const route of canonicalRoutes) {
    await page.goto(route);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('meta[name="description"]')).toHaveCount(1);
    await expect(page.locator('meta[name="description"]')).not.toHaveAttribute('content', '');
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://murraylegalfirm.com${route}`);
    await expect(page.locator('[data-hero-visual]').first()).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
    expect(overflow, `horizontal overflow on ${route}`).toBe(false);
    const unlabeledControls = await page.locator('input:not([type="hidden"]), select, textarea').evaluateAll((controls) => controls.filter((control) => {
      const id = control.getAttribute('id');
      return !control.getAttribute('aria-label') && !(id && document.querySelector(`label[for="${CSS.escape(id)}"]`));
    }).length);
    expect(unlabeledControls, `unlabeled controls on ${route}`).toBe(0);
  }
  expect(consoleErrors).toEqual([]);
});

test('keyboard users can skip navigation and operate disclosure menus', async ({ page }, testInfo) => {
  await page.goto('/');
  if (testInfo.project.name === 'mobile-chromium') await page.getByRole('link', { name: 'Skip to main content' }).focus();
  else await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to main content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#main-content')).toBeFocused();

  if (await page.getByRole('button', { name: 'Practices' }).isVisible()) {
    await page.getByRole('button', { name: 'Practices' }).focus();
    await page.keyboard.press('Enter');
    await expect(page.getByRole('button', { name: 'Practices' })).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Escape');
    await expect(page.getByRole('button', { name: 'Practices' })).toHaveAttribute('aria-expanded', 'false');
  } else {
    await page.getByRole('button', { name: 'Open navigation' }).click();
    await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
  }
});

test('crawler files reference the canonical domain and published routes', async ({ page }) => {
  const robots = await (await page.request.get('/robots.txt')).text();
  const sitemap = await (await page.request.get('/sitemap.xml')).text();
  const llms = await (await page.request.get('/llms.txt')).text();
  expect(robots).toContain('Sitemap: https://murraylegalfirm.com/sitemap.xml');
  expect(llms).toContain('https://murraylegalfirm.com');
  expect(sitemap).not.toContain('murraylegal.com');
  for (const route of canonicalRoutes) expect(sitemap, `missing sitemap URL ${route}`).toContain(`<loc>https://murraylegalfirm.com${route}</loc>`);
});
