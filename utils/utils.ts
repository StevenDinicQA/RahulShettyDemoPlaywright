import * as fs from 'fs';
import { PNG } from 'pngjs';
import { Page } from '@playwright/test';
import { expect } from '@playwright/test';

// const pixelmatch = require('pixelmatch');

let imgFolder = 'test-results/';

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const visualComparison = async (page: Page, pageTwo: Page, projectName: string) => {
   imgFolder += `${projectName}/`;
   await delay(3000);
   await page.screenshot({ path: `${imgFolder}compare-first-${projectName}.png`, fullPage: true });
   await pageTwo.screenshot({ path: `${imgFolder}compare-second-${projectName}.png`, fullPage: true });

   const img1 = PNG.sync.read(fs.readFileSync(`${imgFolder}compare-first-${projectName}.png`));
   const img2 = PNG.sync.read(fs.readFileSync(`${imgFolder}compare-second-${projectName}.png`));

   const { width, height } = img1;
   if (img2.width !== width || img2.height !== height) {
      console.log(`Image dimensions do not match: ${width}x${height} vs ${img2.width}x${img2.height}`);
      process.exit();
   }

   // const diff = new PNG({ width, height });
   // const numDiffPixels = await pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 1.5 });
   // await fs.writeFileSync(`${imgFolder}diff.png`, PNG.sync.write(diff));
   // const diffPercent = (numDiffPixels / (width * height) * 100);
   // expect(diffPercent).toBe(0);
};
