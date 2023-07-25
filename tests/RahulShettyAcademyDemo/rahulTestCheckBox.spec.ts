import { test } from '@playwright/test';
import RahulPage from '../../services/Pages/rahul.pages';
import RahulSteps from '../../services/Steps/rahul.steps';


test.describe('CheckBox tests', () => {
    let rahulPage: RahulPage;
    let rahulSteps: RahulSteps;

    test.beforeEach(async ({page}) => {
        rahulPage = new RahulPage (page);
        rahulSteps = new RahulSteps (page, rahulPage);

        await page.goto('/AutomationPractice/', {
            waitUntil: 'networkidle',
         });
    });

    test ('Checkbox test', async () =>{
        await rahulSteps.checkBoxSelectAll();
    });

    test ('Checkbox opyion 1', async () =>{
        await rahulSteps.checkBoxSelectOpt1();
    })
    
    test ('Checkbox opyion 2', async () =>{
        await rahulSteps.checkBoxSelectOpt2();
    })
    
    test ('Checkbox opyion 3', async () =>{
        await rahulSteps.checkBoxSelectOpt3();
    })


})