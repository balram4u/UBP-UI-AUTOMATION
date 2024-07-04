const ACCOUNT_TYPE_ID = "//input[@name='accountTypeId']";
const DESCRIPTION = "//input[@name='description']";
const MINIMUM_ACCOUNT_BALANCE = "//input[@name='minAccountBalance']";
const MAXIMUM_ACCOUNT_BALANCE = "//input[@name='maxAccountBalance']";
const MINIMUM_TRANSACTION_AMOUNT = "//input[@name='minTransactionAmount']";
const MAXIMUM_TRANSACTION_AMOUNT = "//input[@name='maxTransactionAmount']";
const CREDIT_LIMIT = "//input[@name='creditLimit']";
const COUNT_LIMIT = "//input[@name='countLimit']";
const PAY_LIMIT = "//input[@name='payLimit']";
const URL = "//input[@name='url']";
const EXPIRY_DATE = "//input[@name='expiryDate']";
const SUBMIT = "//span[contains(text(),'Submit')]";
const UPDATE = "//span[contains(text(),'Update')]";
const RESET = "//span[contains(text(),'Reset')]";
const MESSAGE_ALERT = "#notistack-snackbar";
const REQUIRED_ACCOUNT_TYPE_ID = "//p[text()='accountTypeId is Required']";
const RESET_BUTTON = "//button/span[text() = 'Reset']";

class CreateAccountTypePage {
  static verifyCreateAccountTypeHomePage() {
    cy.log('verify Account Type Home Page');
    cy.url().should('include', '/account/account-types');
  }

  static verifyAccountTypeCreatePage() {
    cy.log('verify Account Type Create Page');
    cy.url().should('include', '/account-types/create');
  }

  static fillAccountTypeId(accountTypeId) {
    cy.log('fill accountTypeId');
    cy.xpath(ACCOUNT_TYPE_ID).clear().clear().type(accountTypeId);
  }

  static fillDescription(description) {
    cy.log('fill description');
    cy.xpath(DESCRIPTION).clear().clear().type(description);
  }

  static verifyExistingDescription(description) {
    cy.log('verify existing description');
    cy.xpath(DESCRIPTION).should('include.value', description);
  }

  static fillMinimumAccountBalance(minimumAccountBalance) {
    cy.log('fill minimumAccountBalance');
    cy.xpath(MINIMUM_ACCOUNT_BALANCE).clear().clear().type(minimumAccountBalance);
  }

  static verifyExistingMinimumAccountBalance(minimumAccountBalance) {
    cy.log('verify existing  minimumAccountBalance');
    cy.xpath(MINIMUM_ACCOUNT_BALANCE).should('include.value', minimumAccountBalance);
  }

  static fillMaximumAccountBalance(maximumAccountBalance) {
    cy.log('fill maximumAccountBalance');
    cy.xpath(MAXIMUM_ACCOUNT_BALANCE).clear().clear().type(maximumAccountBalance);
  }

  static verifyExistingMaximumAccountBalance(maximumAccountBalance) {
    cy.log('verify existing maximumAccountBalance');
    cy.xpath(MAXIMUM_ACCOUNT_BALANCE).should('include.value', maximumAccountBalance);
  }

  static fillMinimumTransactionAmount(minimumTransactionAmount) {
    cy.log('fill minimumTransactionAmount');
    cy.xpath(MINIMUM_TRANSACTION_AMOUNT).clear().clear().type(minimumTransactionAmount);
  }

  static verifyExistingMinimumTransactionAmount(minimumTransactionAmount) {
    cy.log('verify existing minimumTransactionAmount');
    cy.xpath(MINIMUM_TRANSACTION_AMOUNT).should('include.value', minimumTransactionAmount);
  }

  static fillMaximumTransactionAmount(maximumTransactionAmount) {
    cy.log('fill maximumTransactionAmount');
    cy.xpath(MAXIMUM_TRANSACTION_AMOUNT).clear().clear().type(maximumTransactionAmount);
  }

  static verifyExistingMaximumTransactionAmount(maximumTransactionAmount) {
    cy.log('verify existing maximumTransactionAmount');
    cy.xpath(MAXIMUM_TRANSACTION_AMOUNT).should('include.value', maximumTransactionAmount);
  }

  static fillCreditLimit(creditLimit) {
    cy.log('fill creditLimit');
    cy.xpath(CREDIT_LIMIT).clear().clear().type(creditLimit);
  }

  static verifyExistingCreditLimit(creditLimit) {
    cy.log('verify existing creditLimit');
    cy.xpath(CREDIT_LIMIT).should('include.value', creditLimit);
  }

  static fillCountLimit(countLimit) {
    cy.log('fill countLimit');
    cy.xpath(COUNT_LIMIT).clear().clear().type(countLimit);
  }

  static verifyExistingCountLimit(countLimit) {
    cy.log('verify existing countLimit');
    cy.xpath(COUNT_LIMIT).should('include.value', countLimit);
  }

  static fillPayLimit(payLimit) {
    cy.log('fill payLimit');
    cy.xpath(PAY_LIMIT).clear().clear().type(payLimit);
  }

  static verifyExistingPayLimit(payLimit) {
    cy.log('verify existing payLimit');
    cy.xpath(PAY_LIMIT).should('include.value', payLimit);
  }

  static fillUrl(url) {
    cy.log('fill url');
    cy.xpath(URL).clear().clear().type(url);
  }

  static verifyExistingUrl(url) {
    cy.log('verify existing url');
    cy.xpath(URL).should('include.value', url);
  }

  static fillExpiryDate(expiryDate) {
    cy.log('fill expiryDate');
    cy.xpath(EXPIRY_DATE).clear().clear();
    cy.xpath(EXPIRY_DATE).type(expiryDate);
  }

  static verifyExistingExpiryDate(expiryDate) {
    cy.log('verify existing expiryDate');
    cy.xpath(EXPIRY_DATE).should('include.value', expiryDate);
  }

  static clickSubmitButton() {
    cy.log('After Fill all the details we click on Submit button');
    cy.xpath(SUBMIT).click();
  }

  static clickResetButton() {
    cy.log('click Reset button');
    cy.xpath(RESET).click();
  }

  static clickUpdateButton() {
    cy.log('After Fill all the details we click on Update button');
    cy.xpath(UPDATE).click();
  }

  static requiredAccountTypeIdMessageVanished() {
    cy.log('required field is account type id is vanished');
    cy.xpath(REQUIRED_ACCOUNT_TYPE_ID).should('not.exist');
  }

  static confirmMessage(message) {
    cy.log('confirm Message');
    cy.get(MESSAGE_ALERT).then((alert) => {
      const text = alert.text();
      cy.log(text);
      expect(text).contains(message);
    });
    cy.log("It is done");
  }

  static clickReset() {
    cy.log("Click reset");
    cy.xpath(RESET_BUTTON).click();
    cy.wait(1000);
  }

  static verifyEmptyAccountTypeId() {
    cy.log('verify empty account type id');
    cy.xpath(ACCOUNT_TYPE_ID).should('be.empty');
  }

  static verifyEmptyDesription() {
    cy.log('verify empty description');
    cy.xpath(DESCRIPTION).should('be.empty');
  }
}

export default CreateAccountTypePage;
