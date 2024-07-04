const ACCOUNT_ID = "//input[@name='account.accountId']";
const ACCOUNT_DESCRIPTION = "//input[@name='account.accountDescription']";
const ACCOUNT_PROVIDER_ID = "//input[@name='account.accountProviderId']";

const ACCOUNT_TYPE_ID = "//input[@name='account.accountTypeId']";
const ACTIVATION_DATE = "//input[@name='account.activationDate']";
const PASSWORD = "//input[@name='password']";
const OWNER = "//input[@name='owner']";
const CURRENCY = "//input[@name='currency']";
const AVAILABLE_AMOUNT = "//input[@name='availableAmount.value']";
const REVERSSED_AMOUNT = "//input[@name='reservedAmount.value']";
const BALANCE = "//input[@name='balance.value']";
const UNLIMITED_CREDIT_LIMIT_CHECKBOX = "//input[@name='unlimitedCredit']";
const CREDITLIMIT = "//input[@name='creditLimit.value']";
const MINIMUM_ACCOUNT_BALANCE = "//input[@name='minimumAccountBalance.value']";
const MAXIMUM_TRANSACTION_AMOUNT = "//input[@name='minimumTransactionAmount.value']";
const LANGUAGE = "//select[@name='languageCode']";
const NEXT_BUTTON = "//span[contains(text(),'Next')]";
const SUBMIT_BUTTON = "//span[contains(text(),'Submit')]";
const MESSAGE_ALERT = "//div[@id='notistack-snackbar']";

class createAccountInformationPage {
  static typeAccountId(accountId) {
    cy.log('trpe accountId for create account');
    cy.xpath(ACCOUNT_ID).clear();
    cy.xpath(ACCOUNT_ID).type(accountId);
  }

  static typeAccountDescription(accountDescription) {
    cy.log('trpe accountDescription for create account');
    cy.xpath(ACCOUNT_DESCRIPTION).clear();
    cy.xpath(ACCOUNT_DESCRIPTION).type(accountDescription);
  }

  static typeAccountProviderId(accountProviderId) {
    cy.log('trpe accountProviderId for create account');
    cy.xpath(ACCOUNT_PROVIDER_ID).clear();
    cy.xpath(ACCOUNT_PROVIDER_ID).type(accountProviderId);
  }

  static typeAccountTypeId(accountTypeId) {
    cy.log('trpe accountTypeId for create account');
    cy.xpath(ACCOUNT_TYPE_ID).clear();
    cy.xpath(ACCOUNT_TYPE_ID).type(accountTypeId);
  }

  static typeActivationDate(activationDate) {
    cy.log('trpe activationDate for create account');
    cy.xpath(ACTIVATION_DATE).clear();
    cy.xpath(ACTIVATION_DATE).type(activationDate);
  }

  static typeAccountPassword(accountPassword) {
    cy.log('trpe accountPassword for create account');
    cy.xpath(PASSWORD).clear();
    cy.xpath(PASSWORD).type(accountPassword);
  }

  static typeAccountOwner(accountOwner) {
    cy.log('trpe accountOwner for create account');
    cy.xpath(OWNER).clear();
    cy.xpath(OWNER).type(accountOwner);
  }

  static typeAccountCurrency(accountCurrency) {
    cy.log('trpe accountCurrency for create account');
    cy.xpath(CURRENCY).clear();
    cy.xpath(CURRENCY).type(accountCurrency);
  }

  static typeAvailableAmount(availableAmount) {
    cy.log('trpe availableAmount for create account');
    cy.xpath(AVAILABLE_AMOUNT).clear();
    cy.xpath(AVAILABLE_AMOUNT).type(availableAmount);
  }

  static typeReservedAmount(reservedAmount) {
    cy.log('trpe reservedAmount for create account');
    cy.xpath(REVERSSED_AMOUNT).clear();
    cy.xpath(REVERSSED_AMOUNT).type(reservedAmount);
  }

  static typeAccountBalance(accountBalance) {
    cy.log('trpe accountBalance for create account');
    cy.xpath(BALANCE).clear();
    cy.xpath(BALANCE).type(accountBalance);
  }

  static uncheckCreditLimit() {
    cy.log('uncheck creditLimit for create account');
    cy.xpath(UNLIMITED_CREDIT_LIMIT_CHECKBOX).uncheck();
  }

  static typeCreditLimit(creditLimit) {
    cy.log('trpe creditLimit for create account');
    cy.xpath(CREDITLIMIT).clear();
    cy.xpath(CREDITLIMIT).type(creditLimit);
  }

  static typeMinimumAccountBalance(minimumAccountBalance) {
    cy.log('trpe minimumAccountBalance for create account');
    cy.xpath(MINIMUM_ACCOUNT_BALANCE).clear();
    cy.xpath(MINIMUM_ACCOUNT_BALANCE).type(minimumAccountBalance);
  }

  static typeMaximunAmountTransaction(maximunAmountTransaction) {
    cy.log('trpe maximunAmountTransaction for create account');
    cy.xpath(MAXIMUM_TRANSACTION_AMOUNT).clear();
    cy.xpath(MAXIMUM_TRANSACTION_AMOUNT).type(maximunAmountTransaction);
  }

  static selectLangauage(language) {
    cy.log('select language for create account');
    cy.log(language);
    cy.xpath(LANGUAGE).select(language);
  }

  static clickNextButton() {
    cy.log('After filling all details about Account Infomation click on Next button');
    cy.xpath(NEXT_BUTTON).click();
  }

  static clickSubmitButton() {
    cy.log('After filling all details about Account Addiional information click on Submit button');
    cy.xpath(SUBMIT_BUTTON).click();
  }

  static confirmMessage(message) {
    cy.log('confirm Message');
    cy.xpath(MESSAGE_ALERT).then((alert) => {
      const text = alert.text();
      cy.log(text);
      expect(text).to.eq(message);
    });
    cy.log("It is done");
  }
}
export default createAccountInformationPage;
