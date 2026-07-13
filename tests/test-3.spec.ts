import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByText('PlaywrightDocsMCPCLIAPINode.').click();
  await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
  await page.getByRole('banner').click();
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.locator('h1')).toContainText('Installation');
});