import { test, expect } from '@playwright/test'

test('Test Home', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Mercado Libre | Envíos a todo el país/)
  await expect(page.locator('p').first()).toContainText('Calle 45 #192-31')
})
