import { expect, test } from '@playwright/test';

test('homepage shell preserves conversion paths, hero, and routing without overflow', async ({ page }, testInfo) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
  await expect(page.locator('[data-hero-visual]').first()).toBeVisible();

  const header = page.locator('header');
  if (testInfo.project.name.startsWith('mobile')) {
    await expect(header.getByRole('link', { name: 'Request a consultation' })).toBeVisible();
    await header.getByRole('button', { name: 'Open navigation' }).click();
    const mobile = page.getByRole('navigation', { name: 'Mobile navigation' });
    await expect(mobile.getByRole('link', { name: 'Request a consultation' })).toBeVisible();
    await expect(mobile.getByRole('link', { name: 'Call Murray Legal at (914) 214-1880' })).toHaveAttribute('href', 'tel:+19142141880');
    await header.getByRole('button', { name: 'Close navigation' }).click();
  } else {
    await expect(header.getByRole('link', { name: 'Request a consultation' })).toBeVisible();
    await expect(header.getByRole('link', { name: 'Call Murray Legal at (914) 214-1880' })).toHaveAttribute('href', 'tel:+19142141880');
  }

  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1)).toBe(true);

  await page.getByRole('link', { name: 'Request a consultation' }).first().click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByRole('heading', { level: 1, name: /Schedule a Consultation/i })).toBeVisible();
  await expect(page.locator('#main-content')).toBeFocused();
});

test('mobile navigation exposes practice and industry links', async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.startsWith('mobile'), 'Mobile navigation contract');
  await page.goto('/');
  const menuButton = page.getByRole('button', { name: 'Open navigation' });
  await menuButton.click();
  const mobileNavigation = page.getByRole('navigation', { name: 'Mobile navigation' });
  await expect(mobileNavigation.getByRole('link', { name: 'Corporate Law', exact: true })).toBeVisible();
  await expect(mobileNavigation.getByRole('link', { name: 'Businesses & Founders', exact: true })).toBeVisible();
  await expect(mobileNavigation.getByRole('link', { name: 'Request a consultation' })).toBeVisible();
  await expect(mobileNavigation.getByRole('link', { name: 'Call Murray Legal at (914) 214-1880' })).toHaveAttribute('href', 'tel:+19142141880');
  const links = mobileNavigation.getByRole('link');
  await expect(links.first()).toBeFocused();
  await expect(page.locator('#main-content')).toHaveAttribute('inert', '');
  await links.first().press('Shift+Tab');
  await expect(links.last()).toBeFocused();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1)).toBe(true);
});

test('mobile overlay closes and restores the document across the desktop breakpoint', async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.startsWith('mobile'), 'Mobile-to-desktop breakpoint contract');
  await page.goto('/');
  await page.getByRole('button', { name: 'Open navigation' }).click();

  const mobileNavigation = page.locator('#mobile-navigation');
  await expect(mobileNavigation).toBeVisible();
  await expect.poll(() => page.evaluate(() => document.body.style.overflow)).toBe('hidden');
  await expect(page.locator('#main-content')).toHaveAttribute('inert', '');
  await expect(page.locator('footer')).toHaveAttribute('inert', '');

  await page.setViewportSize({ width: 1024, height: 900 });

  await expect(mobileNavigation).toHaveCount(0);
  await expect.poll(() => page.evaluate(() => document.body.style.overflow)).toBe('');
  await expect(page.locator('#main-content')).not.toHaveAttribute('inert', '');
  await expect(page.locator('footer')).not.toHaveAttribute('inert', '');

  const desktopNavigation = page.getByRole('navigation', { name: 'Primary navigation' });
  await expect(desktopNavigation).toBeVisible();
  await desktopNavigation.getByRole('link', { name: 'About' }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole('heading', { level: 1, name: 'About Murray Legal' })).toBeVisible();
});

test('current navigation links expose the current page', async ({ page }, testInfo) => {
  await page.goto('/about');
  if (testInfo.project.name.startsWith('mobile')) {
    await page.getByRole('button', { name: 'Open navigation' }).click();
    await expect(page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'About' })).toHaveAttribute('aria-current', 'page');
  } else {
    await expect(page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('link', { name: 'About' })).toHaveAttribute('aria-current', 'page');
  }
});

test('reduced-motion users retain the primary conversion path', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  expect(await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches)).toBe(true);
  const primaryAction = page.locator('.city-hero__panel').getByRole('link', { name: 'Request a consultation' });
  await expect(primaryAction).toBeVisible();
  await primaryAction.hover();
  await expect(primaryAction.locator('.action-link__icon')).toHaveCSS('transform', 'none');
});
