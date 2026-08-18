import { expect, test } from '@playwright/test';

test('homepage shell routes to consultation without overflow', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
  await expect(page.getByRole('link', { name: 'Schedule a Consultation' }).first()).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);

  await page.getByRole('link', { name: 'Schedule a Consultation' }).first().click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByRole('heading', { level: 1, name: /Schedule a Consultation/i })).toBeVisible();
});

test('mobile navigation exposes practice and industry links', async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.startsWith('mobile'), 'Mobile navigation contract');
  await page.goto('/');
  const menuButton = page.getByRole('button', { name: /Toggle mobile menu/i });
  await menuButton.click();
  const mobileNavigation = page.getByRole('navigation', { name: 'Mobile navigation' });
  await expect(mobileNavigation.getByRole('link', { name: 'Corporate Law', exact: true })).toBeVisible();
  await expect(mobileNavigation.getByRole('link', { name: 'Businesses & Founders', exact: true })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
});
