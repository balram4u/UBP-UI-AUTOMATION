const RESELLER_TYPE = "//select[@name='resellerType']";
const USER_NAME = "//input[@name='customerId']";
const FIRST_NAME = "//input[@name='firstName']";
const LAST_NAME = "//input[@name='familyName']";
const MOBILE_NO = "//input[@name='msisdn']";
const EMAIL = "//input[@name='email']";
const NEXT_BUTTON = "//span[contains(text(),'Next')]";
const SUBMIT_BUTTON = "//span[contains(text(),'Submit')]";
const ROLE_ID = "//input[@id='extraFields-roleId-autocomplete']";
const NEXT_MONTH = "(//div[@class='MuiPickersCalendarHeader-switchHeader']//span[@class='MuiIconButton-label'])[2]";
const TO_DATE = "(//p[text()='30'])[1]";
const TO_DATE_DROP_DOWN = "(//button[@aria-label='change date'])[2]";

class SccKycPage {
  static selectTypeOfReseller(resellerType) {
    cy.log('select reseller type');
    cy.xpath(RESELLER_TYPE).select(resellerType).should('have.value', resellerType);
  }

  static typeUserName(username) {
    cy.log(`fill in hq data: ${username}`);
    if (username !== " ") {
      cy.log('username selection block');
      cy.xpath(USER_NAME).clear().type(username).should('have.value', username);
    }
  }

  static typeFirstName(firstName) {
    cy.log(`fill in hq data: ${firstName}`);
    if (firstName !== " ") {
      cy.log('firstName selection block');
      cy.xpath(FIRST_NAME).clear().type(firstName).should('have.value', firstName);
    }
  }

  static typeLastName(lastName) {
    cy.log(`fill in hq data: ${lastName}`);
    if (lastName !== " ") {
      cy.log('firstName selection block');
      cy.xpath(LAST_NAME).clear().type(lastName).should('have.value', lastName);
    }
  }

  static typeMobileNo(mobileNo) {
    cy.log(`fill in hq data: ${mobileNo}`);
    if (mobileNo !== " ") {
      cy.log('mobileNo selection block');
      cy.xpath(MOBILE_NO).clear().type(mobileNo).should('have.value', mobileNo);
    }
  }

  static typeEmail(email) {
    cy.log(`fill in hq data: ${email}`);
    if (email !== " ") {
      cy.log('email selection block');
      cy.xpath(EMAIL).clear().type(email).should('have.value', email);
    }
  }

  static clickNextButton() {
    cy.log('click on Next Button');
    cy.xpath(NEXT_BUTTON).click();
  }

  static clickSubmitButton() {
    cy.log('click on Submit Button');
    cy.xpath(SUBMIT_BUTTON).click();
  }

  static selectRoleId(roleId) {
    cy.log('select reseller type');
    cy.xpath(ROLE_ID).type(roleId);
    cy.contains(roleId).click();
  }

  static moveToNextMonth() {
    cy.log('move to next month');
    cy.wait(1000);
    cy.xpath(NEXT_MONTH).click();
    cy.wait(1000);
  }

  static selectToDate() {
    cy.log('select to date');
    cy.xpath(TO_DATE).click();
    cy.wait(1000);
  }

  static selectToDateDropDown() {
    cy.log('select to date');
    cy.xpath(TO_DATE_DROP_DOWN).click();
    cy.wait(1000);
  }
}

export default SccKycPage;
