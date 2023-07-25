import { test } from '@playwright/test';
import RahulPage from '../../services/Pages/rahul.pages';
import RahulSteps from '../../services/Steps/rahul.steps';
import * as testData from '../../test-data/test-data.json';


test.describe('Show and Hide text tests', () => {
    let rahulPage: RahulPage;
    let rahulSteps: RahulSteps;

    test.beforeEach(async ({page}) => {
        rahulPage = new RahulPage (page);
        rahulSteps = new RahulSteps (page, rahulPage);

        await page.goto('/AutomationPractice/', {
            waitUntil: 'networkidle',
         });
    });


    test ('Show text', async () =>{
        const text = testData.rahulAutomation.hello;
        await rahulSteps.showText(text);
    })

    test ('Hide text', async () =>{
        const text = testData.rahulAutomation.hello;
        await rahulSteps.hideText(text);
    })


})