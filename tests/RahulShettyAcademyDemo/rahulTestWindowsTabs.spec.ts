import { test } from '@playwright/test';
import RahulPage from '../../services/Pages/rahul.pages';
import RahulSteps from '../../services/Steps/rahul.steps';
// import { textSpanContainsTextSpan } from 'typescript';


test.describe('Windows and Tabs tests', () => {
    let rahulPage: RahulPage;
    let rahulSteps: RahulSteps;

    test.beforeEach(async ({page}) => {
        rahulPage = new RahulPage (page);
        rahulSteps = new RahulSteps (page, rahulPage);

        await page.goto('/AutomationPractice/', {
            waitUntil: 'networkidle',
         });
    });


    test ('Opening a new window', async () =>{
        await rahulSteps.openNewWindow();
    })

    test ('Opening a new tab', async () =>{
        await rahulSteps.openNewTab();
    })


})