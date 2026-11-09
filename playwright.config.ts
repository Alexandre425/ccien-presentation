import { defineConfig, devices } from '@playwright/test'

const baseURL = 'http://127.0.0.1:3030'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL,
    ...devices['Desktop Chrome'],
    headless: true,
    launchOptions: {
      executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH,
    },
    trace: 'retain-on-failure',
  },
  webServer: [
    {
      command: 'corepack pnpm exec slidev --port 3030',
      url: baseURL,
      reuseExistingServer: !process.env.CI,
      timeout: 120_000,
    },
    {
      command: 'test -f dist/index.html && python3 -m http.server 4173 --bind 127.0.0.1 --directory dist',
      url: 'http://127.0.0.1:4173',
      reuseExistingServer: !process.env.CI,
      timeout: 30_000,
    },
  ],
})
