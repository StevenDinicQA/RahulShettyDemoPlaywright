import { test } from '@playwright/test';
import RahulPage from '../../services/Pages/rahul.pages';
import RahulSteps from '../../services/Steps/rahul.steps';


test.describe('Radio button tests', () => {
    let rahulPage: RahulPage;
    let rahulSteps: RahulSteps;

    test.beforeEach(async ({page}) => {
        rahulPage = new RahulPage (page);
        rahulSteps = new RahulSteps (page, rahulPage);

        await page.goto('/AutomationPractice/', {
            waitUntil: 'networkidle',
         });
    });

test ('Radio button list is visible', async () => {
    await rahulSteps.radioBtnCheck();
})

test ('Radio buttons click check', async () => {
    await rahulSteps.radioBtnCheck();
    await rahulSteps.radioBtnClick1();
    await rahulSteps.radioBtnClick2();
    await rahulSteps.radioBtnClick3();
 })
})