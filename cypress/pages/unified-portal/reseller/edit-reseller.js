const SELECT_RESELLER_TYPE = "//select[@id='indirect-drop-down']";
const RESELLER_ID = "//input[@name='resellerId']";
const PHONE = "//input[@name='resellerMSISDN']";
const NEXT_BUTTON = "//span[contains(text(),'Next')]";
class editReseller {
  static verifyDisabledField() {
    cy.log('verifying the Reseller type is disabled or not');
    cy.xpath(SELECT_RESELLER_TYPE).should('be.disabled');
    cy.log('verifying the Reseller Id is disabled or not');
    cy.xpath(RESELLER_ID).should('be.disabled');
    cy.log('Click on next button');
    cy.xpath(NEXT_BUTTON).click();
    cy.log('verifying the Reseller Phone no is disabled or not');
    cy.xpath(PHONE).should('be.disabled');
    cy.log('I verified that three fields are in disabled and it can not be editable');
  }
}
export default editReseller;
