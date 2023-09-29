// @ts-check
import { test, expect } from '@playwright/test'

const URLTEST = 'http://localhost:5173/'
const CAT_PREFIX = 'https://cataas.com/'

test('has title', async ({ page }) => {
  await page.goto(URLTEST)

  const text = await page.getByRole('paragraph')
  const image = page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX)).toBeTruthy()
})
