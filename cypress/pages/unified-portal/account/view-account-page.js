const ACCOUNT_ID = "//div[@class='MuiGrid-root MuiGrid-container']/div[2]/div[2]";
const ACCOUNT_TYPE_ID = "//div[@class='MuiGrid-root MuiGrid-container']/div[2]/div[4]";
const ACCOUNT_PROVIDER_ID = "//div[@class='MuiGrid-root MuiGrid-container']/div[3]/div[2]";
const ACCOUNT_DESCRIPTION = "(//p[contains(text(),'Description')]/../following-sibling::div/p)[1]";
// const CREATION_DATE = "//div[@class='MuiGrid-root MuiGrid-container']/div[4]/div[2]";
const ACTIVATION_DATE = "//div[@class='MuiGrid-root MuiGrid-container']/div[4]/div[4]";
// const STATUS = "//div[@class='MuiGrid-root MuiGrid-container']/div[5]/div[2]";
const OWNER = "//div[@class='MuiGrid-root MuiGrid-container']/div[5]/div[4]";
const CURRENCY = "//div[@class='MuiGrid-root MuiGrid-container']/div[6]/div[2]";
const BALANCE = "//div[@class='MuiGrid-root MuiGrid-container']/div[6]/div[4]";
const AVAILABLE_AMOUNT = "//div[@class='MuiGrid-root MuiGrid-container']/div[7]/div[2]";
const RESERVED_AMOUNT = "//div[@class='MuiGrid-root MuiGrid-container']/div[7]/div[4]";
const CREDIT_LIMIT = "(//p[text()='Credit Limit']/../following-sibling::div/p)[1]";
const COUNT_LIMIT = "(//p[text()='Count Limit']/../following-sibling::div/p)[1]";
// const PERIODIC_CREDIT_LIMIT = "//div[@class='MuiGrid-root MuiGrid-container']/div[8]/div[4]";
// const ACCOUNT_CLASS_ID = "//div[@class='MuiGrid-root MuiGrid-container']/div[9]/div[2]";
// const ACCOUNT_CLASS_EXPIRY = "//div[@class='MuiGrid-root MuiGrid-container']/div[9]/div[4]";
// const ACCOUNT_BASE_CLASS_ID = "//div[@class='MuiGrid-root MuiGrid-container']/div[10]/div[2]";
// const ACCOUNT_LINK_TYPE_ID = "//div[@class='MuiGrid-root MuiGrid-container']/div[10]/div[4]";
// const ACCOUNT_VALID_FROM = "//div[@class='MuiGrid-root MuiGrid-container']/div[11]/div[2]";
// const ACCOUNT_EXPIRY = "//div[@class='MuiGrid-root MuiGrid-container']/div[10]/div[4]";
const MINIMUM_ACCOUNT_BALANCE = "(//p[text()='Minimum Account Balance']/../following-sibling::div/p)[1]";
const MAXIMUM_ACCOUNT_BALANCE = "(//p[text()='Maximum Account Balance']/../following-sibling::div/p)[1]";
const MINIMUM_TRANSACTION_AMOUNT = "(//p[text()='Minimum Transaction Amount']/../following-sibling::div/p)[1]";
const MAXIMUM_TRANSACTION_AMOUNT = "(//p[text()='Maximum Transaction Amount']/../following-sibling::div/p)[1]";
const PAY_LIMIT = "(//p[text()='Pay Limit']/../following-sibling::div/p)[1]";
const URL = "(//p[text()='URL']/../following-sibling::div/p)[1]";
const EXPIRY_DATE = "(//p[text()='Expiry Date']/../following-sibling::div/p)[1]";
// const PAY_LIMIT_COUNT = "//div[@class='MuiGrid-root MuiGrid-container']/div[14]/div[4]";
// const PAY_LIMIT_PERIOD = "//div[@class='MuiGrid-root MuiGrid-container']/div[15]/div[2]";
// const RESELLER_TYPE_ID = "//div[@class='MuiGrid-root MuiGrid-container']/div[15]/div[4]";
// const LOAN_ACCOUNT = "//div[@class='MuiGrid-root MuiGrid-container']/div[16]/div[2]";
// const LOAN_DATE = "//div[@class='MuiGrid-root MuiGrid-container']/div[16]/div[4]";
// const LOAN_ENABLED = "//div[@class='MuiGrid-root MuiGrid-container']/div[17]/div[2]";
// const LOAN_AMOUNT = "//div[@class='MuiGrid-root MuiGrid-container']/div[17]/div[4]";

class ViewAccountPage {
  static verifyAccountId(accountId) {
    cy.log('Now verify accountId inside view account page');
    cy.xpath(ACCOUNT_ID).should('have.text', accountId).then(((val) => {
      const id = val.text();
      cy.log(`The ACCOUNT_ID is: ${id}`);
      expect(id).to.equal(accountId);
    }));
  }

  static verifyAccountDescription(accountDescription) {
    cy.log('Now verify accountDescription inside view account page');
    cy.xpath(ACCOUNT_DESCRIPTION).should('have.text', accountDescription).then(((val) => {
      const description = val.text();
      cy.log(`The ACCOUNT dESCRIPTION is: ${description}`);
    }));
  }

  static verifyAccountProviderId(accountProviderId) {
    cy.log('Now verify accountProviderId inside view account page');
    cy.xpath(ACCOUNT_PROVIDER_ID).should('have.text', accountProviderId).then(((val) => {
      const providerId = val.text();
      cy.log(`The Account provider Id is: ${providerId}`);
    }));
  }

  static verifAccountTypeId(accountTypeId) {
    cy.log('Now verify accountTypeId inside view account page');
    cy.xpath(ACCOUNT_TYPE_ID).should('have.text', accountTypeId).then(((val) => {
      const typeId = val.text();
      cy.log(`The Accounttype ID: ${typeId}`);
    }));
  }

  static verifyActivationdate(activationDate) {
    cy.log('Now verify activationDate inside view account page');
    cy.xpath(ACTIVATION_DATE).should('have.text', activationDate).then(((val) => {
      const date = val.text();
      cy.log(`The Activation date id: ${date}`);
    }));
  }

  static verifyAccountOwner(owner) {
    cy.log('Now verify account owner inside view account page');
    cy.xpath(OWNER).should('have.text', owner).then(((val) => {
      const ownerText = val.text();
      cy.log(`The owner is: ${ownerText}`);
    }));
  }

  static verifyCurrency(currency) {
    cy.log('Now verify currency inside view account page');
    cy.xpath(CURRENCY).should('have.text', currency).then(((val) => {
      const currencyText = val.text();
      cy.log(`The currency is: ${currencyText}`);
    }));
  }

  static verifyAvailableAmount(availableAmount) {
    cy.log('Now verify available Amount inside view account page');
    cy.xpath(AVAILABLE_AMOUNT).should('have.text', availableAmount).then(((val) => {
      const amountText = val.text();
      cy.log(`The available amount is: ${amountText}`);
    }));
  }

  static verifyReserveAmount(reserveAmount) {
    cy.log('Now verify reserveAmount inside view account page');
    cy.xpath(RESERVED_AMOUNT).should('have.text', reserveAmount).then(((val) => {
      const reserveAmountText = val.text();
      cy.log(`The reserved amount is : ${reserveAmountText}`);
    }));
  }

  static verifyBalance(balance) {
    cy.log('Now verify balance inside view account page');
    cy.xpath(BALANCE).should('have.text', balance).then(((val) => {
      const balanceText = val.text();
      cy.log(`The Balnce amount is: ${balanceText}`);
    }));
  }

  static verifyCreditLimit(creditLimit) {
    cy.log('Now verify creditLimit inside view account page');
    cy.xpath(CREDIT_LIMIT).should('have.text', creditLimit).then(((val) => {
      const creditText = val.text();
      cy.log(`The credit limit is: ${creditText}`);
    }));
  }

  static verifyCountLimit(countLimit) {
    cy.log('Now verify countLimit inside view account page');
    cy.xpath(COUNT_LIMIT).should('have.text', countLimit).then(((val) => {
      const countText = val.text();
      cy.log(`The count limit is: ${countText}`);
    }));
  }

  static verifyPayLimit(payLimit) {
    cy.log('Now verify payLimit inside view account page');
    cy.xpath(PAY_LIMIT).should('have.text', payLimit).then(((val) => {
      const payText = val.text();
      cy.log(`The pay limit is: ${payText}`);
    }));
  }

  static verifyMaximumAccountBalance(maximumAccountBalance) {
    cy.log('Now verify Maximum Transaction Amount inside view account page');
    cy.xpath(MAXIMUM_ACCOUNT_BALANCE).should('have.text', maximumAccountBalance).then(((val) => {
      const maxBalanceText = val.text();
      cy.log(`The maximum account balance is: ${maxBalanceText}`);
    }));
  }

  static verifyMinimumAccountBalance(minimumAccountBalance) {
    cy.log('Now verify Minimum Transaction Amount inside view account page');
    cy.xpath(MINIMUM_ACCOUNT_BALANCE).should('have.text', minimumAccountBalance).then(((val) => {
      const minBalanceText = val.text();
      cy.log(`The minimum account balance is: ${minBalanceText}`);
    }));
  }

  static verifyMaximumTransactionAmount(maximumTransactionAmount) {
    cy.log('Now verify Maximum Transaction Amount inside view account page');
    cy.xpath(MAXIMUM_TRANSACTION_AMOUNT).should('have.text', maximumTransactionAmount).then(((val) => {
      const maxTransactionAmountText = val.text();
      cy.log(`The maximum transaction amount is: ${maxTransactionAmountText}`);
    }));
  }

  static verifyMinimumTransactionAmount(minimumTransactionAmount) {
    cy.log('Now verify Minimum Transaction Amount inside view account page');
    cy.xpath(MINIMUM_TRANSACTION_AMOUNT).should('have.text', minimumTransactionAmount).then(((val) => {
      const minTransactionAmountText = val.text();
      cy.log(`The minimum transaction amount is: ${minTransactionAmountText}`);
    }));
  }

  static verifyURL(url) {
    cy.log('Now verify url inside view account page');
    cy.xpath(URL).should('have.text', url).then(((val) => {
      const urlText = val.text();
      cy.log(`The url is: ${urlText}`);
    }));
  }

  static verifyExpiryDate(expiryDate) {
    if (expiryDate !== "") {
      cy.log('Now verify expiry date inside view account page');
      cy.xpath(EXPIRY_DATE).should('have.text', expiryDate).then(((val) => {
        const expiryDateText = val.text();
        cy.log(`The expiry date is: ${expiryDateText}`);
      }));
    }
  }
}
export default ViewAccountPage;
