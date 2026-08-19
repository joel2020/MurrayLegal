import { expect, test } from '@playwright/test';

const layoutWidths = [375, 768, 1024, 1440] as const;

test('homepage visual contract holds at the four approved widths', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-chromium', 'One browser project covers the explicit width matrix.');

  for (const width of layoutWidths) {
    await page.setViewportSize({ width, height: width === 375 ? 812 : 1000 });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole('heading', { level: 1, name: 'Serious counsel for consequential matters.' })).toBeVisible();
    await expect(page.locator('[data-hero-visual="city"]')).toBeVisible();
    const cards = page.locator('[data-counsel-card]');
    await expect(cards).toHaveCount(8);
    for (const card of await cards.all()) {
      await expect(card.getByRole('heading', { level: 3 })).toBeVisible();
      await expect(card.locator('p')).toBeVisible();
    }

    const header = page.locator('header');
    if (width < 1024) {
      await expect(header.getByRole('link', { name: 'Request a consultation' })).toBeVisible();
      await header.getByRole('button', { name: 'Open navigation' }).click();
      const mobile = page.getByRole('navigation', { name: 'Mobile navigation' });
      await expect(mobile.getByRole('link', { name: 'Call Murray Legal' })).toHaveAttribute('href', 'tel:+19142141880');
      await header.getByRole('button', { name: 'Close navigation' }).click();
    } else {
      await expect(header.getByRole('link', { name: 'Request a consultation' })).toBeVisible();
      await expect(header.getByRole('link', { name: 'Call Murray Legal' })).toHaveAttribute('href', 'tel:+19142141880');
    }

    const heroAction = page.locator('.city-hero__panel').getByRole('link', { name: 'Request a consultation' });
    await page.evaluate(() => (document.activeElement as HTMLElement | null)?.blur());
    for (let tab = 0; tab < 30 && !(await heroAction.evaluate((element) => element === document.activeElement)); tab += 1) {
      await page.keyboard.press('Tab');
    }
    await expect(heroAction).toBeFocused();
    await expect(heroAction).toHaveCSS('outline-style', 'solid');
    const focusBox = await heroAction.boundingBox();
    expect(focusBox, `missing focused action bounds at ${width}px`).not.toBeNull();
    expect(focusBox!.x, `focus ring clipped on the left at ${width}px`).toBeGreaterThanOrEqual(7);
    expect(focusBox!.x + focusBox!.width, `focus ring clipped on the right at ${width}px`).toBeLessThanOrEqual(width - 7);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1), `horizontal overflow at ${width}px`).toBe(true);
  }
});

test('homepage interaction and content evidence match the approved visual contract', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-chromium', 'One desktop interaction check is sufficient.');
  await page.goto('/');
  const panel = page.locator('.city-hero__panel');
  const primary = panel.getByRole('link', { name: 'Request a consultation' });
  const secondary = panel.getByRole('link', { name: 'Explore the firm' });
  await expect(primary).toHaveCSS('background-color', 'rgb(176, 138, 50)');
  await expect(secondary).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
  await primary.hover();
  await expect(primary.locator('.action-link__icon')).not.toHaveCSS('transform', 'none');

  const bodyText = await page.locator('body').innerText();
  expect(bodyText).toContain('currently licensed to practice law in Pennsylvania');
  expect(bodyText).not.toMatch(/testimonial|five[- ]star|years of experience|case results|award-winning/i);
  await expect(page.locator('main img')).toHaveCount(1);
  await expect(page.getByAltText('Monochrome view of the Lower Manhattan skyline')).toBeVisible();
});

test('homepage remains composed at the tablet breakpoint', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-chromium', 'A single explicit 768px capture is sufficient.');
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1, name: 'Serious counsel for consequential matters.' })).toBeVisible();
  await expect(page.getByAltText('Monochrome view of the Lower Manhattan skyline')).toBeVisible();
  await expect(page.locator('[data-counsel-card]')).toHaveCount(8);
  await expect(page.getByRole('link', { name: 'Request a consultation' }).first()).toBeVisible();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
  expect(overflow).toBe(false);
  await page.screenshot({ path: 'artifacts/site-audit/redesign-tablet-home.png', fullPage: true });
});
