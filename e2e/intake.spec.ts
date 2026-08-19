import { expect, test } from '@playwright/test';

test('consultation request validates and submits successfully', async ({ page }, testInfo) => {
  let submittedBody: Record<string, unknown> | undefined;
  await page.route('**/api/intake', async (route) => {
    submittedBody = route.request().postDataJSON();
    await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true }) });
  });
  await page.goto('/contact');
  await expect(page.locator('[data-hero-visual="solid"]')).toBeVisible();
  const phoneLink = page.locator('main').getByRole('link', { name: 'Call Murray Legal at (914) 214-1880' });
  await expect(phoneLink).toBeVisible();
  await expect(phoneLink).toHaveAttribute('href', 'tel:+19142141880');
  await page.screenshot({ path: `artifacts/site-audit/contact-${testInfo.project.name}.png`, fullPage: true });
  await page.getByRole('button', { name: /Request a consultation/i }).click();
  await expect(page.getByRole('alert')).toContainText('highlighted fields');
  await page.getByLabel(/Full name/i).fill('Jordan Client');
  await page.getByLabel(/Email address/i).fill('jordan@example.com');
  await page.getByLabel(/Phone number/i).fill('215-555-0123');
  await page.getByLabel(/Practice area/i).selectOption('Corporate Law');
  await page.getByLabel(/State or jurisdiction/i).fill('Pennsylvania');
  await page.getByLabel(/Brief description/i).fill('Contract review for a proposed business transaction.');
  await page.getByLabel(/I understand that submitting/i).check();
  await page.getByRole('button', { name: /Request a consultation/i }).click();
  await expect(page.getByRole('status')).toContainText('request has been received');
  expect(submittedBody).toMatchObject({
    name: 'Jordan Client',
    email: 'jordan@example.com',
    phone: '215-555-0123',
    company: '',
    practiceArea: 'Corporate Law',
    jurisdiction: 'Pennsylvania',
    urgency: '',
    contactMethod: '',
    matterDescription: 'Contract review for a proposed business transaction.',
    consent: true,
    website: '',
  });
  expect(submittedBody?.pageUrl).toMatch(/\/contact$/);
});
