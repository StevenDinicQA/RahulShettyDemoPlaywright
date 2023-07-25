import { test } from '@playwright/test';
import RahulPage from '../../services/Pages/rahul.pages';
import RahulSteps from '../../services/Steps/rahul.steps';
import { delay } from '../../utils/utils';


test.describe('Countries tests', () => {
    let rahulPage: RahulPage;
    let rahulSteps: RahulSteps;

    test.beforeEach(async ({page}) => {
        rahulPage = new RahulPage (page);
        rahulSteps = new RahulSteps (page, rahulPage);

        await page.goto('/AutomationPractice/', {
            waitUntil: 'networkidle',
         });
    });

    test ('Countries input exists', async () =>{
        await delay(2000);
        await rahulSteps.countriesInput();

    });

    test ('Countries list check', async () =>{
        await delay(2000);
        await rahulSteps.countriesClear();
        await rahulSteps.countriesInput();
        await rahulSteps.countriesList();
    })

})