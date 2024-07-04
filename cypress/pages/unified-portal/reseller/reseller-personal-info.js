// dist,sub-dist,resellers,BA
import URL_PATH from "../../../common/Route";

const FIRST_NAME = "//input[@name='name']";
const EMAIL = "//input[@name='email']";
const TILL_NO = "//input[@name='tillNo']";
const SHORT_CODE = "//input[@name='shortCode']";
const NEXT_BUTTON = "//span[contains(text(),'Next')]";
const SUBMIT_BUTTON = "//span[contains(text(),'Submit')]";
const LEFT_MENU_KYC = "//p[text()='KYC']";
const LEFIT_MENU_KYC_REGISTER = "//p[text()='REGISTER']";
const USER_NAME = "//input[@name='resellerId']";
const DSA_NATIONAL_ID = "//input[@name='customer_national_identification_id']";
const DBM_NATIONAL_ID = "//input[@name='customer_national_identification_id']";
const NAME_INPUT = "#name-input";
const STATUS_DROPDOWN = "#status-drop-down";
const PASSWORD_ADDRESS_CONTACT_PAGE_VFO = "//input[@id='password-input']";

class personalInfo {
  static clickOnKycRegisterUsingLeftMenu() {
    cy.log('Open KYC register page');
    cy.xpath(LEFT_MENU_KYC).should('be.visible');
    cy.xpath(LEFT_MENU_KYC).click();
    cy.wait(1000);
    cy.xpath(LEFT_MENU_KYC).click();
    cy.xpath(LEFIT_MENU_KYC_REGISTER).click();
    cy.url().should('contain', URL_PATH.kycRegister);
  }

  static clickOnKycRegisterUsingUrl() {
    cy.log('Open KYC register page');
    cy.visit(URL_PATH.kycRegister);
    cy.url().should('contain', URL_PATH.kycRegister);
  }

  static typeFirstName(firstName) {
    // cy.log(`fill in hq data: ${firstName}`);
    if (firstName !== "") {
      // cy.log('firstName selection block');
      cy.xpath(FIRST_NAME).clear();
      cy.xpath(FIRST_NAME).type(firstName).should('have.value', firstName);
    }
  }

  static typeEmail(email) {
    // cy.log(`fill in hq data: ${email}`);
    if (email !== "") {
      // cy.log('email selection block');
      cy.xpath(EMAIL, { timeout: 5000 }).clear();
      cy.xpath(EMAIL, { timeout: 5000 }).type(email).should('have.value', email);
    }
  }

  static typeBranchTillNo(branchTillNo) {
    cy.log(`Parent Category Name is: ${branchTillNo}`);
    if (branchTillNo !== " ") {
      cy.log('branchTillNo selection block');
      cy.xpath(TILL_NO).clear();
      cy.xpath(TILL_NO).type(branchTillNo).should('have.value', branchTillNo);
      cy.xpath(NEXT_BUTTON).click({ force: true });
    }
  }

  static typeBranchShortCode(branchShortCode) {
    cy.log(`Parent Category Name is: ${branchShortCode}`);
    if (branchShortCode !== " ") {
      cy.log('branchShortCode selection block');
      cy.xpath(SHORT_CODE).clear();
      cy.xpath(SHORT_CODE).type(branchShortCode).should('have.value', branchShortCode);
    }
  }

  static clickNextButton() {
    cy.log('click on Next Button');
    cy.xpath(NEXT_BUTTON).click({ force: true });
  }

  static clickSubmitButton() {
    cy.log('click on Submit Button');
    cy.xpath(SUBMIT_BUTTON).click();
  }

  static validateResellerIdDisabled() {
    cy.log('Validate resellerId should be disable');
    cy.xpath(USER_NAME).should('be.disabled');
  }

  static validateDSANationalIdDisabled() {
    cy.log('Validate National id should be disabled');
    cy.xpath(DSA_NATIONAL_ID).should('be.disabled');
  }

  static validateDBMNationalIdDisabled() {
    cy.log(`Validate National id should be disabled`);
    cy.xpath(DBM_NATIONAL_ID).should('be.disabled');
  }

  static enterName(name) {
    if (name !== "") {
      cy.log("enter name");
      cy.get(NAME_INPUT).clear().type(name);
    }
  }

  static selectStatus(status) {
    if (status !== "") {
      cy.log("Select status from status dropdown");
      cy.get(STATUS_DROPDOWN).select(status);
    }
  }

  static clickNext() {
    cy.wait(1000);
    cy.log("click next");
    cy.xpath(NEXT_BUTTON).should('be.visible').click();
  }

  static enterPasswordVFO(password) {
    if (password !== "") {
      cy.log("enter password");
      cy.xpath(PASSWORD_ADDRESS_CONTACT_PAGE_VFO).clear().type(password);
    }
  }
}
export default personalInfo;
