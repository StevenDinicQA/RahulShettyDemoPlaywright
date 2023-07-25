import { test } from '@playwright/test';
import RahulPage from '../../services/Pages/rahul.pages';
import RahulSteps from '../../services/Steps/rahul.steps';
import * as testData from '../../test-data/test-data.json'

test.describe('Alerts and Confirmations tests', () => {
    let rahulPage: RahulPage;
    let rahulSteps: RahulSteps;

    test.beforeEach(async ({page}) => {
        rahulPage = new RahulPage (page);
        rahulSteps = new RahulSteps (page, rahulPage);

        await page.goto('/AutomationPractice/', {
            waitUntil: 'networkidle',
         });
    });


    test ('Alerts', async ()=>{
        const text = testData.rahulAutomation.hiJohn;
        await rahulSteps.openAlerts(text);
    })
    
    test ('Confirmations', async ()=>{
        const text = testData.rahulAutomation.hiJohn;
        await rahulSteps.openConfirm(text);
    })



})