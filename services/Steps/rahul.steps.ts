import { Page } from '@playwright/test';
import { Expect, expect } from '@playwright/test';
import { delay } from '../../utils/utils';
// import { BrowserContext } from '@playwright/test';
import RahulPage from '../Pages/rahul.pages'; 
import * as testData from '../../test-data/test-data.json'


export default class RahulSteps {
    constructor(page: Page, rahulPages: RahulPage, ) {
       this.page = page;
       this.rahulPages = rahulPages;
    //    this.context = contexts;
    }

    private page: Page;
    private rahulPages: RahulPage;
    // private context: BrowserContext;
    

    // radio buttons steps
    async radioBtnCheck(){
        await delay(2000);
        expect(await this.rahulPages.getRadioBtnList()).toBeVisible();
    }

    async radioBtnClick1(){
        await delay(1000);
        await this.rahulPages.getRadioBtn1().click();
        expect(this.rahulPages.getRadioBtn1()).toBeChecked();
    }

    async radioBtnClick2(){
        await delay(2000);
        await this.rahulPages.getRadioBtn2().click();
        expect(this.rahulPages.getRadioBtn2()).toBeChecked();
    }

    async radioBtnClick3(){
        await delay(2000);
        await this.rahulPages.getRadioBtn3().click();
        expect(this.rahulPages.getRadioBtn3()).toBeChecked();
    }

    // countries list steps
    async countriesInput(){
        await delay (1000);
        await this.rahulPages.getCountries().fill('co');
    }

    // this list is tricky because the end result on the page is bugged in, but the function goes this way
    async countriesList(){
        const countries = ['Cook Islands', 'Colombia',  'Comoros', 'Congo', 'Congo, the Democratic Republic of the', 'Cook Islands',
        'Costa Rica', 'Cote d\'Ivoire','Mexico', 'Monaco', 'Morocco', 'Puerto Rico', 'Turks and Caicos Islands']
        const country = await this.rahulPages.getCountriesList()
        await delay (1000);
        // expect (this.rahulPages.countriesList()).toContain('Cook Islands');

        for (let i = 0; i < countries.length; i++) {
            const element = countries;
            expect (await country[i].textContent()).toContain(element);        
        }
    }

    async countriesClear(){
        await this.rahulPages.getCountries().clear();
    }

    // dropdown select steps
    async dropdownSelect(){
        await this.rahulPages.getDropdown().selectOption('option2');
        expect (this.rahulPages.getDropdown()).toHaveValue('option2');
    }

    // checkboxes steps
    async checkBoxSelectAll (){
        expect(this.rahulPages.getCheckBoxList()).toBeVisible();
        await this.rahulPages.getCheckOption1().click();
        expect (this.rahulPages.getCheckOption1()).toBeChecked();

        await this.rahulPages.getCheckOption2().click();
        expect (this.rahulPages.getCheckOption2()).toBeChecked();

        await this.rahulPages.getCheckOption3().click();
        expect (this.rahulPages.getCheckOption3()).toBeChecked();
    }

    async checkBoxSelectOpt1(){
        expect(this.rahulPages.getCheckBoxList()).toBeVisible();
        await this.rahulPages.getCheckOption1().click();
        expect (this.rahulPages.getCheckOption1()).toBeChecked();
    }

    async checkBoxSelectOpt2(){
        expect(this.rahulPages.getCheckBoxList()).toBeVisible();
        await this.rahulPages.getCheckOption2().click();
        expect (this.rahulPages.getCheckOption2()).toBeChecked();
    }

    async checkBoxSelectOpt3(){
        expect(this.rahulPages.getCheckBoxList()).toBeVisible();
        await this.rahulPages.getCheckOption3().click();
        expect (this.rahulPages.getCheckOption3()).toBeChecked();
    }


    // windows/tabs steps
    async openNewWindow(){
        expect (this.rahulPages.getNewWindow()).toBeVisible();
        await this.rahulPages.getNewWindow().click();

        const [newWindowOpen] = await Promise.all([
          this.page.context().waitForEvent("page"),  
        ]);
        
        await delay(3000);
        expect (newWindowOpen).toHaveURL('http://www.qaclickacademy.com/');
        expect('.header-top d-none d-lg-block').toBeTruthy;
    }
    

    async openNewTab(){
        expect (this.rahulPages.getNewWindow()).toBeVisible();
        await this.rahulPages.getNewTab().click();
        const [newTabOpen] = await Promise.all([
            this.page.context().waitForEvent("page"),
        ]);
        await delay(3000);
        expect(newTabOpen).toHaveURL('https://www.qaclickacademy.com/');

    }

    // alerts/confirmations steps
    async openAlerts(text: string){
        expect (this.rahulPages.getAlertsBox()).toBeVisible();
        await this.rahulPages.getAlertsName().type('john');
        await this.rahulPages.getAlertsBtn().click();
        await delay(1000);
        this.page.on("dialog", async (dialog) =>{
            expect (dialog.type()).toContain(text)
            await dialog.accept();
        }) 
    }

    async openConfirm(text: string){
        expect (this.rahulPages.getConfirmBtn()).toBeVisible();
        await this.rahulPages.getAlertsName().type('john');
        await this.rahulPages.getConfirmBtn().click();
        await delay(1000);
        this.page.on("dialog", async (dialogue) =>{
                expect(dialogue.type()).toContain(text)
                await dialogue.accept();
        })
    }
       
    // show/hide text steps
    async hideText(text: string){
        expect (this.rahulPages.getShowTextBox()).toBeVisible();
        await delay (1000);
        await this.rahulPages.getShowTextBox().click();
        await this.rahulPages.getShowTextBox().scrollIntoViewIfNeeded();
        await this.rahulPages.getDisplayedText().type(text);
        await this.rahulPages.getHideTextBox().click();
        expect (this.rahulPages.getDisplayedText()).toBeHidden();
    }

    async showText(text: string){
        expect (this.rahulPages.getShowTextBox()).toBeVisible();
        await this.rahulPages.getShowTextBox().click();
        await this.rahulPages.getDisplayedText().scrollIntoViewIfNeeded();
        await delay (1000);
        await this.rahulPages.getDisplayedText().type(text);
        await delay (1000);
        expect (this.rahulPages.getDisplayedText()).toHaveValue('Hello!');
    }

    // mouse hover steps
    async mouseHoverTop (){
        expect (this.rahulPages.getMouseOver()).toBeVisible();
        await this.rahulPages.getMouseOver().scrollIntoViewIfNeeded();
        await delay (2000);
        await this.rahulPages.getMouseOver().hover();
        await this.rahulPages.getMouseTop().hover();
        await this.rahulPages.getMouseTop().click();
        await delay (2000);
        expect (this.rahulPages.getAlertsBox()).toBeVisible();
    }
    
    async mouseHoverReload (){
        expect (this.rahulPages.getMouseOver()).toBeVisible();
        await this.rahulPages.getMouseOver().scrollIntoViewIfNeeded();
        await delay (2000);
        await this.rahulPages.getMouseOver().hover();
        await this.rahulPages.getMouseReload().hover();
        await this.rahulPages.getMouseReload().click()
        await delay (2000);
        expect (this.rahulPages.getAlertsBox()).toBeVisible();
    }

    // iFrame steps
    async iFrameMentorship(){
        await this.rahulPages.getiFrame().scrollIntoViewIfNeeded();
        expect (this.rahulPages.getiFrame()).toBeVisible();
        await delay (1000);
        await this.rahulPages.getIFrameMentorship().click();
        await delay (2000);
        expect (await this.rahulPages.getIFrameMentTitle()).toBeVisible();
    }

    async iFrameTestemonials(){
        await this.rahulPages.getIFrameTestemonials().scrollIntoViewIfNeeded();
        expect (await this.rahulPages.getIFrameTestemonials()).toBeVisible;
    }

    // table contents steps
    async tableContents(){
        await this.rahulPages.getWebTables().scrollIntoViewIfNeeded();
        expect (this.rahulPages.getWebTables()).toBeVisible();
        expect ((await this.rahulPages.getRowOne().innerText()).trim()).toContain('Alex');
        await delay (1000);
        const rows = testData.rahulAutomation.rowList;
        for (let i = 0; i < rows.length; i++) {
            const list = ((await this.rahulPages.getTableValues().nth(i).innerText()).trim())
            expect (await list).toContain(rows[i]);
        }
    }
    
    // courses steps
    async courseList (){
        expect (this.rahulPages.getHeaderTitle()).toBeVisible();
        await delay (1000);

        const courseListText = this.rahulPages.getCourseList();
        const numberOfCourses = 3;

        for (let i = 0; i < numberOfCourses ; i++) {
            const randomFindName = Math.floor (Math.random () * await courseListText.count());
            const randomIndexInnerText = await courseListText.nth(randomFindName).innerText();
            await courseListText.nth(randomFindName).click();
            await delay (2000);
            expect (this.page).toHaveURL(/p/ || '');
            await this.page.goBack({waitUntil: 'domcontentloaded'});
        }
    }

    async courseContents (course: string) {
        expect (this.rahulPages.getHeaderTitle()).toBeVisible();
        await delay (1000);
        const courseName = await this.rahulPages.getCourseList().getByText(course);
        await courseName.click();
        await delay (2000);           
    }

    async courseOnePicCheck (){
        await this.rahulPages.getCourseOnePic().scrollIntoViewIfNeeded();
        await delay (2000);
        expect (this.rahulPages.getCourseOnePic()).toBeVisible();
    }

    async courseFaq (faq: string){
        await this.rahulPages.getFaqSegment().scrollIntoViewIfNeeded();
        await delay (1000);
        expect ((await this.rahulPages.getFaqSegment().innerText()).trim()).toContain(faq);
    }

    async courseCopyright (copyright: string){
        await this.rahulPages.getCopyrightFooter().scrollIntoViewIfNeeded();
        await delay (1000);
        expect ((await this.rahulPages.getCopyrightFooter().innerText()).trim()).toContain(copyright);
    }

    async courseTwoText(text: string){
        await this.rahulPages.getCourseTwoText().scrollIntoViewIfNeeded();
        await delay (1000);
        expect(await this.rahulPages.getCourseTwoText()).toContainText(text);
    }

    async courseThreeBundle (){
        await this.rahulPages.getCourseThreeBundle().scrollIntoViewIfNeeded();
        await delay (1000);
        expect ((await this.rahulPages.getCourseThreeBundleElement().innerText()).trim()).toContain('Learn SQL in Practical + DataBase Testing from Scratch');
        const dataList = testData.rahulAutomation.courseThreeDataList;
        for (let i = 0; i <dataList.length ; i++) {
            const bundle = (await this.rahulPages.getCourseSubtitleList().nth(i).innerText()).trim();
             expect ( await bundle).toEqual(dataList[i]);
        }
    }

}
