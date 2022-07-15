import { test, expect } from '@playwright/test'

test('in Home not pass', async ({ page }) => {
  await page.goto('/')
  await page.fill('#name', 'Peter')
  await expect(page).toHaveTitle(/''/)
})
