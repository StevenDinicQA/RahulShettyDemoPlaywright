import { ElementHandle, Locator, Page } from '@playwright/test';
import * as rahulSelectors from '../../selectors/rahul-selectors.json';

export default class RahulPage{
    constructor (page: Page){
        this.page = page;
    }

    private page: Page;

    //radioBtns

    public getRadioBtnList (): Locator{
        return this.page.locator(rahulSelectors.radioBtnList);
    }

    public getRadioBtn1 (): Locator{
        return this.page.locator(rahulSelectors.radioBtn1);
    }

    public getRadioBtn2 (): Locator{
        return this.page.locator(rahulSelectors.radioBtn2);
    }
    
    public getRadioBtn3 (): Locator{
        return this.page.locator(rahulSelectors.radioBtn3);
    }

    // countries

    public getCountries (): Locator{
        return this.page.locator(rahulSelectors.countries);
    }

    public getCountriesList (): Promise<ElementHandle<SVGElement | HTMLElement>[]> {
        return this.page.$$(rahulSelectors.countriesList);
    }

    public getCountriesArray (): Promise<ElementHandle<SVGElement | HTMLElement>[]>{
        return this.page.$$(rahulSelectors.countriesArray);
    }

    // dropdown

    public getDropdown (): Locator{
        return this.page.locator(rahulSelectors.dropdown);
    }

    // checkBox

    public getCheckBoxList (): Locator{
        return this.page.locator(rahulSelectors.checkBoxList);
    }

    public getCheckOption1 (): Locator{
        return this.page.locator(rahulSelectors.option1);
    }

    public getCheckOption2 (): Locator{
        return this.page.locator(rahulSelectors.option2);
    }
    
    public getCheckOption3 (): Locator{
        return this.page.locator(rahulSelectors.option3);
    }

    //windows and tabs

    public getNewWindow (): Locator{
        return this.page.locator(rahulSelectors.openNewWindow);
    }

    public getNewTab (): Locator{
        return this.page.locator(rahulSelectors.openNewTab);
    }

    //alerts and confirms 

    public getAlertsBox (): Locator{
        return this.page.locator(rahulSelectors.alertsBox);
    }

    public getAlertsName (): Locator{
        return this.page.locator(rahulSelectors.alertsName);
    }

    public getAlertsBtn (): Locator{
        return this.page.locator(rahulSelectors.alertBtn);
    }

    public getConfirmBtn (): Locator {
        return this.page.locator(rahulSelectors.confirmBtn);
    }

    //show/hide textbox

    public getRightField (): Locator{
        return this.page.locator(rahulSelectors.rightFieldSet);
    }

    public getHideTextBox (): Locator{
        return this.page.locator(rahulSelectors.hideTextBox);
    }

    public getShowTextBox (): Locator{
        return this.page.locator(rahulSelectors.showTextBox);
    }

    public getDisplayedText (): Locator{
        return this.page.locator(rahulSelectors.displayedText);
    }

    //mouse-hover

    public getMouseOver (): Locator {
        return this.page.locator(rahulSelectors.mouseOver);
    }

    public getMouseOverContent (): Locator {
        return this.page.locator(rahulSelectors.mouseOverContent);
    }

    public getMouseTop (): Locator {
        return this.page.locator(rahulSelectors.mouseTop);
    }

    public getMouseReload (): Locator {
        return this.page.locator(rahulSelectors.mouseReload);
    }

    //iframe
    
    public getiFrame (): Locator {
        return this.page.locator(rahulSelectors.iframe);
    }

    public getIFrameMentorship (): Locator {
        return this.page.frameLocator('#courses-iframe').locator('(//a[@href=\'mentorship\'])[1]');
    }

    public getIFrameMentTitle (): Locator {
        return this.page.frameLocator('#courses-iframe').locator('//h1[normalize-space()=\'Mentorship\']');

    }

    public getIFrameTestemonials (): Locator{
        return this.page.frameLocator('#courses-iframe').locator('//aside[@class=\'sidebar default-sidebar\']');
    }

    //webtables

    public getWebTables (): Locator{
        return this.page.locator(rahulSelectors.fixedWebTable);
    }
    
    public getTableValues (): Locator{
        return this.page.locator(rahulSelectors.tableValue);
    }

    public getRowOne (): Locator{
        return this.page.locator(rahulSelectors.row1);
    }

    public getRowTwo (): Locator{
        return this.page.locator(rahulSelectors.row2);
    }

    public getRowThree (): Locator{
        return this.page.locator(rahulSelectors.row3);
    }

    public getRowFour (): Locator {
        return this.page.locator(rahulSelectors.row4);
    }

    // courses 

    public getHeaderTitle (): Locator {
        return this.page.locator(rahulSelectors.headerTitle);
    }

    public getCourseList (): Locator {
        return this.page.locator(rahulSelectors.courseList);
    }

    public getCourseHeadline (): Locator {
        return this.page.locator(rahulSelectors.courseHeadline);
    }

    public getCourseTitle (): Locator {
        return this.page.locator(rahulSelectors.courseTitle);
    }

    public getCourseOnePic (): Locator {
        return this.page.locator(rahulSelectors.courseOnePic);
    }

    public getFaqSegment (): Locator{
        return this.page.locator(rahulSelectors.faqSection);
    }

    public getGetStarted (): Locator{
        return this.page.locator(rahulSelectors.getStarted);
    }

    public getCopyrightFooter (): Locator{
        return this.page.locator(rahulSelectors.copyrightFooter);
    }

    public getCourseTwoText (): Locator{
        return this.page.locator(rahulSelectors.courseTwoText);
    }

    public getCourseThreeBundle (): Locator{
        return this.page.locator(rahulSelectors.courseThreeBundle);
    }

    public getCourseThreeBundleElement (): Locator{
        return this.page.locator(rahulSelectors.courseThreeBundleElement);
    }

    public getCourseSubtitleList (): Locator{
        return this.page.locator(rahulSelectors.courseThreeBundleSubtitlesList);
    }
}
