const RESELLER_TYPE = "//select[@id='reseller-type-drop-down']";
const CUSTOMER_ID = "//input[@name='customerId']";
const FIRST_NAME = "//input[@name='firstName']";
const MIDDLE_NAME = "//input[@name='additionalFields.middleName']";
const LAST_NAME = "//input[@name='additionalFields.lastName']";
const JURDICALE_NAME = "//input[@name='familyName']";
const MOBILE_NO = "//input[@name='msisdn']";
const EMAIL = "//input[@name='email']";
const REGION = "//input[@id='combo-box-additionalFields.region']";
const STREET = "//input[@name='street']";
const CITY = "//input[@name='city']";
const COUNTRY = "//input[@name='country']";
const ROLE = "//input[@name='additionalFields.role']";
const DESIGNATION = "//input[@name='additionalFields.designation']";
const USER_PRIVILEGE = "//input[@id='combo-box-additionalFields.user_privilege']";
const REPORTING_TO = "//input[@name='parentResellerId']";
const STATUS = "//input[@id='combo-box-status']";
const USER_SUB_TYPE = "//input[@name='additionalFields.sincId']";
const NEXT_BUTTON = "//span[contains(text(),'Next')]";
const PREVIOUS_BUTTON = "//span[contains(text(),'Previous')]";
const RESET_BUTTON = "//span[contains(text(),'Previous')]";
const SUBMIT_BUTTON = "//span[contains(text(),'Submit')]";
const UPDATE_BUTTON = "//span[contains(text(),'Update')]";
const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "select[id=columns-filter-select]";
const OPERATOR_SELECT = "select[id=columns-operators-select]";
const FILTER_VALUE = "//input[@placeholder='Filter value']";

const ALERTMESSAGE = "#notistack-snackbar";

class kycRegister {
  static clickOnKycRegisterUsingLeftMenu() {
    cy.log('click On Kyc Registe rUsing Left Menu');
    cy.visit('/home/kyc/register');
    cy.url().should('contains', '/home/kyc/register');
  }

  static clickOnSerchKyc() {
    cy.log('Click on search kyc');
    cy.wait(2000);
    cy.visit('/home/kyc/search');
    cy.url().should('contains', '/home/kyc/search');
  }

  static clickFilterButton() {
    cy.log('Click on filter button');
    cy.xpath(FILTER).click();
  }

  static selectColumn(column) {
    cy.log('Select  the column value', column);
    cy.get(COLUMN_SELECT).select(column);
  }

  static selectOperator(operator) {
    cy.log('Select  the operator', operator);
    cy.get(OPERATOR_SELECT).select(operator);
  }

  static typeFilterValue(filterValue) {
    cy.log('type filter value', filterValue);
    cy.xpath(FILTER_VALUE).clear().type(filterValue);
  }

  static selectTypeOfReseller(resellerType) {
    cy.xpath(RESELLER_TYPE).select(resellerType).should('have.value', resellerType);
  }

  static typeFirstName(firstName) {
    cy.log(`fill in hq data: ${firstName}`);
    if (firstName !== " ") {
      cy.log('hqCode selection block');
      cy.xpath(FIRST_NAME).type(firstName).should('have.value', firstName);
    }
  }

  static typeMiddleName(MiddleName) {
    cy.log(`fill in hq data: ${MiddleName}`);
    if (MiddleName !== " ") {
      cy.log('MiddleName selection block');
      cy.xpath(MIDDLE_NAME).type(MiddleName).should('have.value', MiddleName);
    }
  }

  static typeLastName(LastName) {
    cy.log(`fill in hq data: ${LastName}`);
    if (LastName !== " ") {
      cy.log('LastName selection block');
      cy.xpath(LAST_NAME).type(LastName).should('have.value', LastName);
    }
  }

  static typeUserName(username) {
    cy.log(`fill in hq data: ${username}`);
    if (username !== " ") {
      cy.log('username selection block');
      cy.xpath(CUSTOMER_ID).type(username).should('have.value', username);
    }
  }

  static typeJuridicalName(juridicalName) {
    cy.log(`fill in hq data: ${juridicalName}`);
    if (juridicalName !== " ") {
      cy.log('juridicalName selection block');
      cy.xpath(JURDICALE_NAME).type(juridicalName).should('have.value', juridicalName);
    }
  }

  static typeCustomerId(customersId) {
    cy.log(`fill in hq data: ${customersId}`);
    if (customersId !== " ") {
      cy.log('customersId selection block');
      cy.xpath(CUSTOMER_ID).type(customersId).should('have.value', customersId);
    }
  }

  static typeMobileNo(mobileNo) {
    cy.log(`fill in hq data: ${mobileNo}`);
    if (mobileNo !== " ") {
      cy.log('customersId selection block');
      cy.xpath(MOBILE_NO).clear();
      cy.xpath(MOBILE_NO).type(mobileNo).should('have.value', mobileNo);
    }
  }

  static checkMsisdnNoIsDisabled() {
    cy.xpath(MOBILE_NO).should('be.disabled');
  }

  static typeEmail(email) {
    cy.log(`fill in hq data: ${email}`);
    if (email !== " ") {
      cy.log('email selection block');
      cy.xpath(EMAIL).clear();
      cy.xpath(EMAIL).type(email).should('have.value', email);
    }
  }

  static typeStreet(street) {
    cy.log(`fill in hq data: ${street}`);
    if (street !== " ") {
      cy.log('street selection block');
      cy.xpath(STREET).type(street).should('have.value', street);
    }
  }

  static typeCity(city) {
    cy.log(`fill in hq data: ${city}`);
    if (city !== " ") {
      cy.log('city selection block');
      cy.xpath(CITY).type(city).should('have.value', city);
    }
  }

  static typeCountry(country) {
    cy.log(`fill in hq data: ${country}`);
    if (country !== " ") {
      cy.log('country selection block');
      cy.xpath(COUNTRY).type(country).should('have.value', country);
    }
  }

  static selectRegion(region) {
    cy.log(`fill in hq data: ${region}`);
    if (region !== " ") {
      cy.log('region selection block');
      cy.xpath(REGION).type(region);
      cy.contains(region).click();
    }
  }

  static typeRole(role) {
    cy.log(`fill in hq data: ${role}`);
    if (role !== " ") {
      cy.log('role selection block');
      cy.xpath(ROLE).type(role).should('have.value', role);
    }
  }

  static typeDesignation(designation) {
    cy.log(`fill in hq data: ${designation}`);
    if (designation !== " ") {
      cy.log('designation selection block');
      cy.xpath(DESIGNATION).type(designation).should('have.value', designation);
    }
  }

  static typeReportingTo(reportingTo) {
    cy.log(`fill in hq data: ${reportingTo}`);
    if (reportingTo !== " ") {
      cy.log('reportingTo selection block');
      cy.xpath(REPORTING_TO).type(reportingTo).should('have.value', reportingTo);
    }
  }

  static selectUserPrivilege(privilege) {
    cy.log(`fill in hq data: ${privilege}`);
    if (privilege !== " ") {
      cy.log('privilege selection block');
      cy.xpath(USER_PRIVILEGE).should('have.value', privilege);
    }
  }

  static selectStatus(status) {
    cy.log(`fill in hq data: ${status}`);
    if (status !== " ") {
      cy.log('status selection block');
      cy.xpath(STATUS).type(status);
      cy.contains(status).click();
    }
  }

  static typeUserSubType(userSubType) {
    cy.log(`fill in hq data: ${userSubType}`);
    if (userSubType !== " ") {
      cy.log('userSubType selection block');

      cy.xpath(USER_SUB_TYPE).type(userSubType).should('have.value', userSubType);
    }
  }

  static clickNextButton() {
    cy.log('Click on Next button');
    cy.xpath(NEXT_BUTTON).click();
  }

  static clickPreviousButton() {
    cy.log('Click on previous button');
    cy.xpath(PREVIOUS_BUTTON).click();
  }

  static clickSubmitButton() {
    cy.log('Click on Submit button');
    cy.xpath(SUBMIT_BUTTON).click();
  }

  static clickResetButton() {
    cy.log('Click on Reset button');
    cy.xpath(RESET_BUTTON).click();
  }

  static clickUpdateButton() {
    cy.log('Click on update button');
    cy.xpath(UPDATE_BUTTON).click();
  }

  static verifyMessage(message) {
    cy.get(ALERTMESSAGE).then((alert) => {
      const text = alert.text();
      cy.log(text);
      expect(text).contains(message);
    });
    cy.log("It is done");
  }
}

export default kycRegister;
