import { test, expect } from '@playwright/test'

test('Details of Product by Id', async ({ page }) => {
  await page.goto('/')
  await page.fill('.placeholder-gray-50', 'macbook')

  // Search for a product
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL('/items?search=macbook')
})
