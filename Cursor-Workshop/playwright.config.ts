// Basic Playwright config
// Docs: https://playwright.dev/docs/test-configuration

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  retries: 0,
  reporter: [
    [
      'pwmochawesome',
      { reportDir: 'mochawesome-report', reportTitle: 'UI Tests' },
    ],
  ],
});
