import { PlaywrightTestConfig } from '@playwright/test';
import * as envUrls from './environments.json';

const env = {
  dev: envUrls.dev,
  prod: envUrls.prod,
};

export const config: PlaywrightTestConfig = {
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,

  expect: {
     timeout: 5000,
  },

  forbidOnly: !!process.env.CI,

  reporter: [['junit', { outputFile: 'reports/results-junit.xml' }], ['html', { outputFolder: 'reports/html/' }]],
  
  use: {
    baseURL: env[process.env.ENV] || env.dev,

    screenshot: 'on',

    acceptDownloads: true,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',

    headless: false,
 },

 grep: [new RegExp(process.env.tags)],

 /* This will mark if the test is flaky or not*/
 retries: 1,
};

export default config;