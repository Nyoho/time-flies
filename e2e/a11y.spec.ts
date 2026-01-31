import AxeBuilder from '@axe-core/playwright'
import { expect, test, type Page } from '@playwright/test'

const getSeriousViolations = async (page: Page) => {
  const results = await new AxeBuilder({ page }).analyze()
  return results.violations.filter((violation) => ['critical', 'serious'].includes(violation.impact ?? ''))
}

test('home page has no serious accessibility violations', async ({ page }) => {
  await page.goto('/')

  const seriousViolations = await getSeriousViolations(page)
  expect(seriousViolations).toEqual([])
})

test('time slip modal has no serious accessibility violations when opened', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'タイムスリップ' }).click()
  await expect(page.getByRole('dialog', { name: '時刻ワープ' })).toBeVisible()

  const seriousViolations = await getSeriousViolations(page)
  expect(seriousViolations).toEqual([])
})
