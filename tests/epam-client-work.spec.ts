import { test, expect } from '@playwright/test';

// EPAM: Explore Our Client Work via Services menu
// Scenario Steps:
// 1. Open the browser and navigate to https://www.epam.com/
// 2. From the header menu, locate and select the "Services" option.
// 3. Find and click on the "Explore Our Client Work" link.
// 4. Confirm that the "Client Work" text is displayed on the page.

test('EPAM: Explore Our Client Work via Services menu', async ({ page }) => {
  // 1. Open the browser and navigate to the Epam website
  await page.goto('https://www.epam.com/');

  // 2. From the header menu, locate and select the "Services" option
  // Use header navigation link. There can be multiple matches, so click a visible one.
  await page.getByRole('link', { name: 'Services' }).first().click();

  // 3. Find and click on the "Explore Our Client Work" link
  const exploreClientWork = page.getByRole('link', { name: 'Explore Our Client Work' });
  await expect(exploreClientWork).toBeVisible();
  await exploreClientWork.click();

  // 4. Confirm that the "Client Work" text is displayed on the page
  await expect(page.getByText('Client Work').first()).toBeVisible();
});

// Always close the browser once the test scenario is executed
// Playwright Test automatically closes the page context, but we ensure browser closure here.
// Note: In Playwright Test, closing the browser is handled by the test runner. As an extra safety, we call browser.close.

test.afterAll(async ({ browser }) => {
  // Ensure browser closes after all tests in this file
  await browser.close();
});
