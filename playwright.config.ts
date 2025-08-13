import { defineConfig, devices } from '@playwright/test';
import path from 'path';

export default defineConfig({
  testDir: './test',
  testMatch: /.*\.spec\.ts$/,
  outputDir: 'results',
  preserveOutput: 'always',
  retries: 0,
  workers: 4, // Enable parallel execution
  reporter: [
    ['list'],
    ['html', { outputFolder: 'results/html', open: 'never' }],
    ['junit', { outputFile: 'results/results.xml' }],
    ['json', { outputFile: 'results/results.json' }]
  ],
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] }
    }
  ],
  globalSetup: require.resolve('./src/helpers/globalSetup'),
  globalTeardown: require.resolve('./src/helpers/globalTeardown'),
  env: {
    ENV: process.env.ENV || '.env.test'
  }
});
