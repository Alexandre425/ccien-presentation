import { mkdir } from 'node:fs/promises'
import { dirname } from 'node:path'
import type { Browser } from '@playwright/test'

const baseURL = 'http://127.0.0.1:3030'

export async function captureSlide(browser: Browser, width: number, height: number, mode: 'fast' | 'slow', path: string) {
  await mkdir(dirname(path), { recursive: true })
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 })
  try {
    await page.goto(baseURL, { waitUntil: 'networkidle' })
    await page.getByTestId('diagram').waitFor({ state: 'visible' })
    await page.clock.install()
    await page.getByRole('button', { name: mode === 'fast' ? 'Dados rápidos' : 'Dados lentos', exact: true }).click()
    await page.clock.runFor(1800)
    await page.getByRole('button', { name: 'Pausar', exact: true }).click()
    await page.screenshot({ path, fullPage: true, animations: 'disabled' })
  }
  finally {
    await page.close()
  }
}
