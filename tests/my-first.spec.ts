import { test, expect } from '@playwright/test';

// ПОЗИТИВНИЙ тест — перевіряє що щось Є
test('page has the correct title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

// НЕГАТИВНИЙ тест — перевіряє що чогось НЕМАЄ
test('page does not contain error text', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByText('404 Page Not Found')).not.toBeVisible();
});