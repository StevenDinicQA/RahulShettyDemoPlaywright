import { test } from '@playwright/test';
import RahulPage from '../../services/Pages/rahul.pages';
import RahulSteps from '../../services/Steps/rahul.steps';



test.describe('iFrame tests', () => {
    let rahulPage: RahulPage;
    let rahulSteps: RahulSteps;

    test.beforeEach(async ({page}) => {
        rahulPage = new RahulPage (page);
        rahulSteps = new RahulSteps (page, rahulPage);

        await page.goto('/AutomationPractice/', {
            waitUntil: 'networkidle',
         });
    });


test ('iFrame mentorship test', async () =>{
    await rahulSteps.iFrameMentorship();
})

test ('iFrame testemonials', async () =>{
    await rahulSteps.iFrameMentorship();
    await rahulSteps.iFrameTestemonials();
    
})
    
})