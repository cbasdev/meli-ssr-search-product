import { test, expect } from '@playwright/test'

test('List of products by query search', async ({ page }) => {
  await page.goto('/items?search=laptop')
  await expect(page.locator('h2').first()).toContainText('Notebook Exo Smart')
})
