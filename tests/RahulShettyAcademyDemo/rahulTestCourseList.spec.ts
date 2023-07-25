import { test } from '@playwright/test';
import RahulPage from '../../services/Pages/rahul.pages';
import RahulSteps from '../../services/Steps/rahul.steps';
import * as testData from '../../test-data/test-data.json'


test.describe('Course list tests', () => {
    let rahulPage: RahulPage;
    let rahulSteps: RahulSteps;

    test.beforeEach(async ({page}) => {
        rahulPage = new RahulPage (page);
        rahulSteps = new RahulSteps (page, rahulPage);

        await page.goto('/', {
            waitUntil: 'networkidle',
         });
    });

test ('Checking course list titles', async () => {
        await rahulSteps.courseList();
} )


test('Checking course one', async () =>{
    const courseOne = testData.rahulAutomation.course1;
    const courseOneFaq = testData.rahulAutomation.faqTitle;
    const courseOneCopyright = testData.rahulAutomation.copyrightFooterText;
    await rahulSteps.courseContents(courseOne);
    await rahulSteps.courseFaq(courseOneFaq);
    await rahulSteps.courseCopyright(courseOneCopyright);
})

test ('Checking course two', async () =>{
    const courseTwo = testData.rahulAutomation.course2;
    const courseTwoFaq = testData.rahulAutomation.faqTitle;
    const courseTwoCopyright = testData.rahulAutomation.copyrightFooterText;
    const courseTwoText = testData.rahulAutomation.courseTwoContent;

    await rahulSteps.courseContents(courseTwo);
    await rahulSteps.courseTwoText(courseTwoText);
    await rahulSteps.courseFaq(courseTwoFaq);
    await rahulSteps.courseCopyright(courseTwoCopyright);
    
})

test ('Checking course three', async () =>{
    const courseThree = testData.rahulAutomation.course3;
    const courseThreeFaq = testData.rahulAutomation.faqTitle;
    const courseThreeCopyright = testData.rahulAutomation.copyrightFooterText;

    await rahulSteps.courseContents(courseThree);
    await rahulSteps.courseThreeBundle();
    await rahulSteps.courseFaq(courseThreeFaq);
    await rahulSteps.courseCopyright(courseThreeCopyright);
})

})