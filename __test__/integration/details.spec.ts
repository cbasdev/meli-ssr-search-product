import { test, expect } from '@playwright/test'

test('Details of Product by Id', async ({ page }) => {
  await page.goto('/items/MLA825411628')

  /** Title of Product */
  await expect(page.locator('h2').first()).toContainText(
    'Trailer Para Caballos Y Otros Animales'
  )
  /** Price of Product */
  await expect(page.locator('.text-4xl').first()).toContainText('$ 1.300.000')
})
