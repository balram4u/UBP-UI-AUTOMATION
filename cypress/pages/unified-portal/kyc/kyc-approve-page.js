import URL_PATH from "../../../common/Route";

const APPROVE_BUTTON = "//span[contains(text(),'thumb_up')]";
// const APPROVE_BUTTON = "//div[@class='rendering-zone']/div/div[8]/div/div/button[1]";
const CLICK_YES_ON_APPROVE = "//span[contains(text(),'Yes')]";
const REJECT_BUTTON = "//span[contains(text(),'thumb_down')]";
const REASON_REJECTION = "//input[@name='rejectReason']";
const LEFT_MENU_KYC = "//p[text()='KYC']";
const LEFIT_MENU_KYC_APPROVE = "//p[text()='APPROVE']";
const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "select[id=columns-filter-select]";
const OPERATOR_SELECT = "select[id=columns-operators-select]";
const COLUMN_VALUE = "//input[@class='MuiInputBase-input MuiInput-input']";

class approveKycPage {
  static clickOnApproveKyc() {
    cy.log('visit kyc approve page');
    cy.wait(2000);
    cy.visit(URL_PATH.kycApprove);
    cy.url().should('contains', URL_PATH.kycApprove);
  }

  static clickOnApproveKycUsingUrl() {
    cy.log('visit kyc approve page');
    cy.xpath(LEFT_MENU_KYC).should('be.visible');
    cy.xpath(LEFT_MENU_KYC).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_KYC).click();
    cy.xpath(LEFIT_MENU_KYC_APPROVE).click();
    cy.url().should('contain', URL_PATH.kycApprove);
  }

  static clickOnApproveButton() {
    cy.log('click On Approve Button');
    cy.xpath(APPROVE_BUTTON).click();
  }

  static clickOnRejectButton() {
    cy.log('click On reject Button');
    cy.xpath(REJECT_BUTTON).click();
  }

  static typeReasonForRejection(reasonForRejection) {
    cy.log('type reject reason');
    cy.xpath(REASON_REJECTION).type(reasonForRejection);
  }

  static clickYesOnApproveButton() {
    cy.log('click on yes button');
    cy.xpath(CLICK_YES_ON_APPROVE).click();
  }

  static clickFilterButton() {
    cy.log('Click on filter button');
    cy.wait(1000);
    cy.xpath(FILTER).click();
  }

  static selectColumn(value) {
    cy.log('Select column');
    cy.log(value);
    cy.get(COLUMN_SELECT).select(value);
  }

  static selectOperator(value) {
    cy.log('Select operator');
    cy.log(value);
    cy.get(OPERATOR_SELECT).select(value);
  }

  static enterValue(value) {
    cy.log('Enter value');
    cy.log(value);
    cy.xpath(COLUMN_VALUE).type(value);
  }
}
export default approveKycPage;
