import { expect, test, type Page } from '@playwright/test'
import { captureSlide } from '../scripts/capture-screenshot'

const controls = {
  fast: 'Dados rápidos',
  slow: 'Dados lentos',
  restart: 'Reiniciar',
}

function captureErrors(page: Page) {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('console', message => {
    if (message.type() === 'error') errors.push(message.text())
  })
  return errors
}

test('controlos, contagem de ritmos diferentes e reinício determinístico', async ({ page }) => {
  const errors = captureErrors(page)
  await page.goto('/')

  const diagram = page.getByTestId('diagram')
  const status = page.getByTestId('status')
  const completed = page.getByTestId('completed')
  await expect(diagram).toBeVisible()
  await expect(status).toBeVisible()
  await expect(completed).toBeVisible()
  await page.clock.install()

  await expect(page.getByRole('button', { name: controls.fast, exact: true })).toBeVisible()
  await expect(page.getByRole('button', { name: controls.slow, exact: true })).toBeVisible()
  await expect(page.getByRole('button', { name: controls.restart, exact: true })).toBeVisible()

  await page.getByRole('button', { name: 'Pausar', exact: true }).click()
  await expect(status).toContainText('Pausado')
  await page.getByRole('button', { name: 'Continuar', exact: true }).click()
  await expect(status).not.toContainText('Pausado')

  await page.getByRole('button', { name: controls.fast, exact: true }).click()
  await page.clock.runFor(4200)
  await page.getByRole('button', { name: 'Pausar', exact: true }).click()
  const fastCount = Number(await completed.textContent())
  await page.getByRole('button', { name: controls.slow, exact: true }).click()
  await page.clock.runFor(4200)
  await page.getByRole('button', { name: 'Pausar', exact: true }).click()
  const slowCount = Number(await completed.textContent())
  expect(slowCount).toBeGreaterThan(0)
  expect(fastCount).toBeGreaterThan(slowCount)

  await page.getByRole('button', { name: controls.restart, exact: true }).click()
  await expect(completed).toHaveText('0')
  const resetDiagram = await diagram.innerHTML()
  await page.clock.runFor(400)
  await page.getByRole('button', { name: controls.restart, exact: true }).click()
  await expect(completed).toHaveText('0')
  expect(await diagram.innerHTML()).toBe(resetDiagram)
  expect(errors).toEqual([])
})

test('composição sem sobreposição nos dois formatos de apresentação', async ({ page }) => {
  const errors = captureErrors(page)
  await page.goto('/')
  for (const viewport of [{ width: 1920, height: 1080 }, { width: 1280, height: 720 }]) {
    await page.setViewportSize(viewport)
    const title = await page.locator('h1').boundingBox()
    const diagram = await page.getByTestId('diagram').boundingBox()
    const controlsBox = await page.locator('.controls').boundingBox()
    expect(title).not.toBeNull()
    expect(diagram).not.toBeNull()
    expect(controlsBox).not.toBeNull()
    for (const box of [title!, diagram!, controlsBox!]) {
      expect(box.x).toBeGreaterThanOrEqual(0)
      expect(box.y).toBeGreaterThanOrEqual(0)
      expect(box.x + box.width).toBeLessThanOrEqual(viewport.width)
      expect(box.y + box.height).toBeLessThanOrEqual(viewport.height)
    }
    expect(title!.y + title!.height).toBeLessThanOrEqual(diagram!.y)
    expect(diagram!.y + diagram!.height).toBeLessThanOrEqual(controlsBox!.y)
  }
  expect(errors).toEqual([])
})

test('a compilação estática mantém as interações disponíveis sem rede', async ({ browser }) => {
  const context = await browser.newContext({ baseURL: 'http://127.0.0.1:4173' })
  const page = await context.newPage()
  const errors = captureErrors(page)
  const remoteRequests: string[] = []
  await page.route('**/*', async route => {
    const url = new URL(route.request().url())
    if (url.hostname !== '127.0.0.1' && url.hostname !== 'localhost') {
      remoteRequests.push(url.href)
      await route.abort()
      return
    }
    await route.continue()
  })
  try {
    await page.goto('/', { waitUntil: 'networkidle' })
    await expect(page.getByTestId('diagram')).toBeVisible()
    await page.getByRole('button', { name: controls.fast, exact: true }).waitFor({ state: 'visible' })
    await page.getByRole('button', { name: controls.slow, exact: true }).waitFor({ state: 'visible' })
    await context.setOffline(true)
    await page.getByRole('button', { name: controls.slow, exact: true }).click()
    await page.getByRole('button', { name: 'Pausar', exact: true }).click()
    await page.getByRole('button', { name: controls.restart, exact: true }).click()
    await expect(page.getByTestId('status')).toBeVisible()
    expect(remoteRequests).toEqual([])
    expect(errors).toEqual([])
  }
  finally {
    await context.close()
  }
})

test('capturas de ecrã @screenshots', async ({ browser }) => {
  await captureSlide(browser, 1920, 1080, 'fast', 'artifacts/memory-bottleneck-fast-1920x1080.png')
  await captureSlide(browser, 1920, 1080, 'slow', 'artifacts/memory-bottleneck-slow-1920x1080.png')
  await captureSlide(browser, 1280, 720, 'fast', 'artifacts/memory-bottleneck-fast-1280x720.png')
  await captureSlide(browser, 1280, 720, 'slow', 'artifacts/memory-bottleneck-slow-1280x720.png')
})
