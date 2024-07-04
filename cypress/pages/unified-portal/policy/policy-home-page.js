import URL_PATH from '../../../common/Route';

const CREATE_POLICY = "//span[contains(text(),'Create new policy')]";
const POLICY_NAME = "//input[@class='MuiInputBase-input MuiInput-input MuiInputBase-inputMarginDense MuiInput-inputMarginDense']";
const DESCRIPTION = "//textarea[@name='description']";
const END_DATE_PICKER = "//input[@name='toDate']";
const CLICK_START_DATE_PICKER = "(//button[@class='MuiButtonBase-root MuiIconButton-root'])[1]";
const CLICK_END_DATE_PICKER = "(//button[@class='MuiButtonBase-root MuiIconButton-root'])[2]";
// const SELECT_END_DATE = "(//span/p[contains(text(),'30')])";
const SELECT_END_DATE = "//button[contains(@class,'MuiPickersDay-current MuiPickersDay-daySelected')]";
const SELECT_END_TIME_IN_HOURS = "//span[contains(text(),'7')]";
const SELECT_ACCESSIBLE_MODULES = "//input[@aria-labelledby='ACCESS']";
const SELECT_ACCESSIBLE_UI_SUBMODULES = "(//input[@aria-labelledby='[object Object]'])[1]";
const SELECT_ACCESSIBLE_SUBMODULES = "(//input[@aria-labelledby='[object Object]'])[2]";
const MOVE_TO_LEFT_ACCESSIBLE_MODULES = "(//button[@aria-label='move selected left'])[1]";
const MOVE_TO_LEFT_ACCESSIBLE_SUBMODULES = "(//button[@aria-label='move selected left'])[2]";
const SUBMIT_BUTTON = "//span[normalize-space()='Save']";
const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "//select[@id='columns-filter-select']";
const OPERATOR_SELECT = "//select[@id='columns-operators-select']";
const FILTER_VALUE = "//input[@placeholder='Filter value']";
const CONFIRM_DELETE_POPUP = "//p[contains(text(),'delete the policy')]";
const DELETE_POPUP_YES_BUTTON = "(//button//span[contains(text(),'Delete')])[1]";
const POLICY_DESCRIPTION = "(//p[text()='Description']/../following-sibling::div/p)[1]";
const START_DATE = "(//p[text()='Start Date']/../following-sibling::div/p)[1]";
const END_DATE = "(//p[text()='End Date']/../following-sibling::div/p)[1]";
const PREVIEW_BUTTON = "//span[contains(text(),'Preview')]";
const UPDATE_BUTTON = "(//button/span[contains(text(),'Update')])[1]";
const UPDATE_ACCESSIBLE_MODULES = "//input[@aria-labelledby='ACTIVITY']";
const UPDATE_ACCESSIBLE_SUBMODULES = "(//input[@aria-labelledby='[object Object]'])[3]";
const FILTER_UI_BASED_MODULE = "//span[contains(text(),'Filter UI based module features')]";

class PolicyHomePage {
  static clickCreatePolicyButton() {
    cy.log('click on create new policy button');
    cy.wait(800);
    cy.xpath(CREATE_POLICY).click();
  }

  static selectDatesFromCalender() {
    cy.xpath(CLICK_START_DATE_PICKER).click();
    cy.wait(800);
    cy.get("[class='MuiPickersBasePicker-container']").type('{Enter}');
    cy.wait(800);
    cy.xpath(END_DATE_PICKER).click();
    cy.xpath(CLICK_END_DATE_PICKER).click();
    cy.xpath(SELECT_END_DATE).click();
    cy.xpath(SELECT_END_TIME_IN_HOURS).click({ force: true });
    cy.get("[class='MuiPickersClock-squareMask']").type('{Enter}');
  }

  static selectAccessibleModules() {
    cy.wait(500);
    cy.log('select accessible module');
    cy.xpath(SELECT_ACCESSIBLE_MODULES).click();
    cy.log('move selected modules left');
    cy.xpath(MOVE_TO_LEFT_ACCESSIBLE_MODULES).click();
  }

  static selectAccessibleSubModules() {
    cy.log('select accessable sub modules');
    cy.xpath(SELECT_ACCESSIBLE_SUBMODULES).click();
    cy.wait(500);
    cy.log('move selected submodules left');
    cy.xpath(MOVE_TO_LEFT_ACCESSIBLE_SUBMODULES).click();
  }

  static clickOnSubmitButton() {
    cy.xpath(SUBMIT_BUTTON).click();
  }

  static visitPolicyHomePage() {
    cy.log('Now visit policy home page');
    cy.wait(800);
    cy.visit(URL_PATH.policy);
  }

  static clickFilterButton() {
    cy.log('click filter button');
    cy.xpath(FILTER).click();
  }

  static selectColumn(column) {
    cy.log('select column for filter');
    cy.xpath(COLUMN_SELECT).select(column);
  }

  static selectOperator(operator) {
    cy.log('select operator for filter');
    cy.xpath(OPERATOR_SELECT).select(operator);
  }

  static fillFilterValue(filterValue) {
    cy.log('Provide the filter value you want to show inside the Table');
    cy.xpath(FILTER_VALUE).clear().type(filterValue);
  }

  static verifyConfirmPopup() {
    cy.xpath(CONFIRM_DELETE_POPUP).should('be.visible');
  }

  static clickOnDeletePolicy(policyName) {
    cy.log("click on Delete button");
    cy.xpath(`(//div[@data-value='${policyName}']/following-sibling::div[@data-field='actions']//*[local-name()='svg'])[4]`).scrollIntoView().click();
  }

  static clickOnViewPolicy(policyName) {
    cy.log("click on View button");
    cy.xpath(`(//div[@data-value='${policyName}']/following-sibling::div[@data-field='actions']//*[local-name()='svg'])[2]`).scrollIntoView().click();
  }

  static clickOnDeleteRolePopupYesButton() {
    cy.log('Clicking on Delete Policy Popup Yes Button');
    cy.wait(800);
    cy.xpath(DELETE_POPUP_YES_BUTTON).click({ force: true });
  }

  static clickOnEditPolicy(policyName) {
    cy.log("click on Edit button");
    cy.wait(800);
    cy.xpath(`(//div[@data-value='${policyName}']/following-sibling::div[@data-field='actions']//*[local-name()='svg'])[1]`).scrollIntoView().click();
  }

  static updateModule() {
    cy.log('add accessible module');
    cy.wait(800);
    cy.xpath(UPDATE_ACCESSIBLE_MODULES).click();
    cy.log('move selected modules left');
    cy.xpath(MOVE_TO_LEFT_ACCESSIBLE_MODULES).click();
  }

  static UpdateSubModules() {
    cy.log('add accessable sub modules');
    cy.xpath(UPDATE_ACCESSIBLE_SUBMODULES).click();
    cy.wait(800);
    cy.log('move selected submodules left');
    cy.xpath(MOVE_TO_LEFT_ACCESSIBLE_SUBMODULES).click();
  }

  static enterPolicyName(policyName) {
    cy.wait(800);
    if (policyName !== "") {
      cy.log("Entering policy name");
      cy.xpath(POLICY_NAME).clear().type(policyName);
    }
  }

  static enterDescription(policyDescription) {
    if (policyDescription !== "") {
      cy.log("Entering policy description");
      cy.xpath(DESCRIPTION).clear().type(policyDescription);
    }
  }

  static clickOnPreviewButton() {
    cy.xpath(PREVIEW_BUTTON).click();
  }

  static clickOnUpdateButton() {
    cy.xpath(UPDATE_BUTTON).click();
  }

  static clickOnFilterUICheckBox() {
    cy.xpath(FILTER_UI_BASED_MODULE).click();
    cy.wait(500);
    cy.xpath(SELECT_ACCESSIBLE_UI_SUBMODULES).click();
    cy.xpath(MOVE_TO_LEFT_ACCESSIBLE_SUBMODULES).click();
    cy.xpath(FILTER_UI_BASED_MODULE).click();
  }

  static viewPolicyDescription(policyDescription) {
    cy.log('validating Policy name');
    cy.xpath(POLICY_DESCRIPTION).then((POLICYDESCRIPTION) => {
      const description = POLICYDESCRIPTION.text();
      expect(description).to.equal(policyDescription);
    });
  }

  static viewStartDate(startDate) {
    cy.log('validating start date');
    cy.xpath(START_DATE).then((STARTDATE) => {
      const startdate = STARTDATE.text();
      expect(startdate).to.equal(startDate);
    });
  }

  static viewEndDate(endDate) {
    cy.log('validating end date');
    cy.xpath(END_DATE).then((ENDDATE) => {
      const enddate = ENDDATE.text();
      expect(enddate).to.equal(endDate);
    });
  }
}

export default PolicyHomePage;
