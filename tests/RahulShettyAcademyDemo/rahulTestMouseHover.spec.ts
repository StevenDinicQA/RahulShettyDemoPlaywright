import { test } from '@playwright/test';
import RahulPage from '../../services/Pages/rahul.pages';
import RahulSteps from '../../services/Steps/rahul.steps';



test.describe('Mouse hover tests', () => {
    let rahulPage: RahulPage;
    let rahulSteps: RahulSteps;

    test.beforeEach(async ({page}) => {
        rahulPage = new RahulPage (page);
        rahulSteps = new RahulSteps (page, rahulPage);

        await page.goto('/AutomationPractice/', {
            waitUntil: 'networkidle',
         });
    });


test ('Mouse hover top', async () =>{
    await rahulSteps.mouseHoverTop();
})

test ('Mouse hover reload', async () => {
    await rahulSteps.mouseHoverReload();
})



})