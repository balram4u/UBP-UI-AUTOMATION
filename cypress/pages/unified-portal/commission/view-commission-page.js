const SCHEME_NAME = "//p[contains(text(),'Scheme Name')]/following-sibling::span";
const STATUS = "//p[contains(text(),'Status')]/following-sibling::span";
const COMMISSION_TYPE = "//p[contains(text(),'Commission Type')]/following-sibling::span";
const CREATED_BY = "//p[contains(text(),'Created By')]/following-sibling::span";
const CREATION_DATE = "//p[contains(text(),'Creation Date')]/following-sibling::span";
const CURRENCY = "//p[contains(text(),'Currency')]/following-sibling::span";
const CUST_ID = "//p[contains(text(),'Customer Id')]/following-sibling::span";
const VALIDITY_FROM_DATE = "//p[contains(text(),'Validity From Date')]/following-sibling::span";
const VALIDITY_TO_DATE = "//p[contains(text(),'Validity To Date')]/following-sibling::span";
const NEXT_CALCULATION_DATE = "//p[contains(text(),'Next Calculation Date')]/following-sibling::span";
const NEXT_DISBURSEMENT = "//p[contains(text(),'Next Disbursement')]/following-sibling::span";
const CAL_FREQUENCY = "//p[contains(text(),'Calculation Frequency')]/following-sibling::span";
const DISBURSEMENT_FREQUENCY = "//p[contains(text(),'Disbursement Frequency')]/following-sibling::span";
const WALLET_TYPE = "//p[contains(text(),'Wallet Type')]/following-sibling::span";
const VERSION = "//p[contains(text(),'Version')]/following-sibling::span";
// const UPDATED_BY = "//p[contains(text(),'Updated BY')]/following-sibling::span";
// const UPDATED_ON = "//p[contains(text(),'Updated On')]/following-sibling::span";
const TABLE_NAME = "(//span[text() = 'reseller_id_type_wise_hourly_total'])[2]";

class ViewCommissionPage {
  static verifySchemeName(schemeName) {
    cy.log('Now verify scheme Name inside view commission page');
    cy.xpath(SCHEME_NAME).should('have.text', schemeName).then(((val) => {
      const name = val.text();
      cy.log(`The SCHEME_NAME is: ${name}`);
      expect(name).to.equal(schemeName);
    }));
  }

  static verifyStatus(statusVal) {
    cy.log('Now verify status Val inside view commission page');
    cy.xpath(STATUS).should('have.text', statusVal).then(((val) => {
      const status = val.text();
      cy.log(`The STATUS is: ${status}`);
    }));
  }

  static verifyCommissionType(commissionType) {
    cy.log('Now verify commission Type inside view commission page');
    cy.xpath(COMMISSION_TYPE).should('have.text', commissionType);
  }

  static verifyCreatedBy(createdBy) {
    cy.log('Now verify created By inside view commission page');
    cy.xpath(CREATED_BY).should('have.text', createdBy);
  }

  static verifyCreationDate(creationDate) {
    cy.log('Now verify creation Date inside view commission page');
    cy.xpath(CREATION_DATE).should('have.text', creationDate);
  }

  static verifyCurrency(currency) {
    cy.log('Now verify currency inside view commission page');
    cy.xpath(CURRENCY).should('have.text', currency);
  }

  static verifyCustomerId(customerId) {
    cy.log('Now verify customer Id inside view commission page');
    cy.xpath(CUST_ID).should('have.text', customerId);
  }

  static verifyValidityFrom(validityFromDate) {
    cy.log('Now verify validity From Date inside view commission page');
    cy.xpath(VALIDITY_FROM_DATE).should('have.text', validityFromDate);
  }

  static verifyValidityTo(validityToDate) {
    cy.log('Now verify validity To Date inside view commission page');
    cy.xpath(VALIDITY_TO_DATE).should('have.text', validityToDate);
  }

  static verifyNextCalDate(nextCalDate) {
    cy.log('Now verify next Cal Date inside view commission page');
    cy.xpath(NEXT_CALCULATION_DATE).should('have.text', nextCalDate);
  }

  static verifyNextDisbursement(nextDisbursement) {
    cy.log('Now verify next Disbursement inside view commission page');
    cy.xpath(NEXT_DISBURSEMENT).should('have.text', nextDisbursement);
  }

  static verifyCalculationFreq(calFrequency) {
    cy.log('Now verify Calculation Freq inside view commission page');
    cy.xpath(CAL_FREQUENCY).should('have.text', calFrequency);
  }

  static verifyDisbursementFreq(disbursementFreq) {
    cy.log('Now verify disbursement Freq inside view commission page');
    cy.xpath(DISBURSEMENT_FREQUENCY).should('have.text', disbursementFreq);
  }

  static verifyWalletType(walletType) {
    cy.log('Now verify wallet Type inside view commission page');
    cy.xpath(WALLET_TYPE).should('have.text', walletType);
  }

  static verifyVersion(version) {
    cy.log('Now verify version inside view commission page');
    cy.xpath(VERSION).should('have.text', version);
  }

  static verifyTableName(tableName) {
    cy.log('Now verify table Name inside view commission page');
    cy.xpath(TABLE_NAME).should('have.text', tableName);
  }
}
export default ViewCommissionPage;
