import {
  When, Then, And,
} from 'cypress-cucumber-preprocessor/steps';
import CommonUtilities from '../../../common/Util';
import AccountTypeHomePage from '../../../pages/unified-portal/account/account-type-home-page';
import CreateAccountTypePage from '../../../pages/unified-portal/account/create-account-type-page';
import ViewAccountPage from '../../../pages/unified-portal/account/view-account-page';

And(/^I navigate to the Account Types Page/, () => {
  AccountTypeHomePage.visitAccountTypeHomePageUsingUrl();
});

And(/^Click on Create Account Type button/, () => {
  AccountTypeHomePage.clickCreateAccountButton();
});

When(/^I perform Create Account Type having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ACCOUNT_TYPE_ID, DESCRIPTION, MINIMUM_ACCOUNT_BALANCE, MAXIMUM_ACCOUNT_BALANCE, MINIMUM_TRANSACTION_AMOUNT, MAXIMUM_TRANSACTION_AMOUNT, CREDIT_LIMIT, COUNT_LIMIT, PAY_LIMIT, URL, EXPIRY_DATE) => {
  CreateAccountTypePage.verifyAccountTypeCreatePage();
  CreateAccountTypePage.fillAccountTypeId(ACCOUNT_TYPE_ID);
  CreateAccountTypePage.fillDescription(DESCRIPTION);
  CreateAccountTypePage.fillMinimumAccountBalance(MINIMUM_ACCOUNT_BALANCE);
  CreateAccountTypePage.fillMaximumAccountBalance(MAXIMUM_ACCOUNT_BALANCE);
  CreateAccountTypePage.fillMinimumTransactionAmount(MINIMUM_TRANSACTION_AMOUNT);
  CreateAccountTypePage.fillMaximumTransactionAmount(MAXIMUM_TRANSACTION_AMOUNT);
  CreateAccountTypePage.fillCreditLimit(CREDIT_LIMIT);
  CreateAccountTypePage.fillCountLimit(COUNT_LIMIT);
  CreateAccountTypePage.fillPayLimit(PAY_LIMIT);
  CreateAccountTypePage.fillUrl(URL);
  CreateAccountTypePage.fillExpiryDate(EXPIRY_DATE);
  CreateAccountTypePage.clickSubmitButton();
});

Then(/^I am able to validate proper Account type added message "([^"]*)"$/, (MESSAGE) => {
  CreateAccountTypePage.confirmMessage(MESSAGE);
  cy.wait(1000);
});

And(/^Account Type created should be visible inside table "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (accountTypeId, selectColumn, selectOPerator, FilterValue) => {
  AccountTypeHomePage.clickFilterButton();
  AccountTypeHomePage.selectColumn(selectColumn);
  AccountTypeHomePage.selectOperator(selectOPerator);
  AccountTypeHomePage.fillFilterValue(FilterValue);
  AccountTypeHomePage.verifyAccountTypeIdInsideTable(accountTypeId);
});

And(/^Click on Create Account Type button/, () => {
  AccountTypeHomePage.clickCreateAccountButton();
});

When(/^I perform Create Account Type with existing data with having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ACCOUNT_TYPE_ID, DESCRIPTION, MINIMUM_ACCOUNT_BALANCE, MAXIMUM_ACCOUNT_BALANCE, MINIMUM_TRANSACTION_AMOUNT, MAXIMUM_TRANSACTION_AMOUNT, CREDIT_LIMIT, COUNT_LIMIT, PAY_LIMIT, URL, EXPIRY_DATE) => {
  CreateAccountTypePage.verifyAccountTypeCreatePage();
  CreateAccountTypePage.fillAccountTypeId(ACCOUNT_TYPE_ID);
  CreateAccountTypePage.fillDescription(DESCRIPTION);
  CreateAccountTypePage.fillMinimumAccountBalance(MINIMUM_ACCOUNT_BALANCE);
  CreateAccountTypePage.fillMaximumAccountBalance(MAXIMUM_ACCOUNT_BALANCE);
  CreateAccountTypePage.fillMinimumTransactionAmount(MINIMUM_TRANSACTION_AMOUNT);
  CreateAccountTypePage.fillMaximumTransactionAmount(MAXIMUM_TRANSACTION_AMOUNT);
  CreateAccountTypePage.fillCreditLimit(CREDIT_LIMIT);
  CreateAccountTypePage.fillCountLimit(COUNT_LIMIT);
  CreateAccountTypePage.fillPayLimit(PAY_LIMIT);
  CreateAccountTypePage.fillUrl(URL);
  CreateAccountTypePage.fillExpiryDate(EXPIRY_DATE);
  CreateAccountTypePage.clickSubmitButton();
});

And(/^I perform click on filter to show the Account type inside the table "([^"]*)" "([^"]*)" "([^"]*)"$/, (selectColumn, selectOPerator, FilterValue) => {
  AccountTypeHomePage.clickFilterButton();
  cy.wait(800);
  AccountTypeHomePage.selectColumn(selectColumn);
  cy.wait(800);
  AccountTypeHomePage.selectOperator(selectOPerator);
  cy.wait(800);
  AccountTypeHomePage.fillFilterValue(FilterValue);
  cy.wait(800);
});

And(/^I click on edit button inside the table$/, () => {
  AccountTypeHomePage.clickEditButton();
});

And(/^I click on view button inside the table$/, () => {
  AccountTypeHomePage.clickViewButton();
});

When(/^I perform Edit Account Type having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ACCOUNT_TYPE_ID, DESCRIPTION, MINIMUM_ACCOUNT_BALANCE, MAXIMUM_ACCOUNT_BALANCE, MINIMUM_TRANSACTION_AMOUNT, MAXIMUM_TRANSACTION_AMOUNT, CREDIT_LIMIT, COUNT_LIMIT, PAY_LIMIT, URL, EXPIRY_DATE) => {
  CreateAccountTypePage.fillDescription(DESCRIPTION);
  CreateAccountTypePage.fillMinimumAccountBalance(MINIMUM_ACCOUNT_BALANCE);
  CreateAccountTypePage.fillMaximumAccountBalance(MAXIMUM_ACCOUNT_BALANCE);
  CreateAccountTypePage.fillMinimumTransactionAmount(MINIMUM_TRANSACTION_AMOUNT);
  CreateAccountTypePage.fillMaximumTransactionAmount(MAXIMUM_TRANSACTION_AMOUNT);
  CreateAccountTypePage.fillCreditLimit(CREDIT_LIMIT);
  CreateAccountTypePage.fillCountLimit(COUNT_LIMIT);
  CreateAccountTypePage.fillPayLimit(PAY_LIMIT);
  CreateAccountTypePage.fillUrl(URL);
  CreateAccountTypePage.fillExpiryDate(EXPIRY_DATE);
});

And(/^I validate existing data in create or edit page "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (DESCRIPTION, MINIMUM_ACCOUNT_BALANCE, MAXIMUM_ACCOUNT_BALANCE, MINIMUM_TRANSACTION_AMOUNT, MAXIMUM_TRANSACTION_AMOUNT, CREDIT_LIMIT, COUNT_LIMIT, PAY_LIMIT, URL) => {
  CreateAccountTypePage.verifyExistingDescription(DESCRIPTION);
  CreateAccountTypePage.verifyExistingMinimumAccountBalance(MINIMUM_ACCOUNT_BALANCE);
  CreateAccountTypePage.verifyExistingMaximumAccountBalance(MAXIMUM_ACCOUNT_BALANCE);
  CreateAccountTypePage.verifyExistingMinimumTransactionAmount(MINIMUM_TRANSACTION_AMOUNT);
  CreateAccountTypePage.verifyExistingMaximumTransactionAmount(MAXIMUM_TRANSACTION_AMOUNT);
  CreateAccountTypePage.verifyExistingCreditLimit(CREDIT_LIMIT);
  CreateAccountTypePage.verifyExistingCountLimit(COUNT_LIMIT);
  CreateAccountTypePage.verifyExistingPayLimit(PAY_LIMIT);
  CreateAccountTypePage.verifyExistingUrl(URL);
});

When(/^I perform click on filter to search the Account Id "([^"]*)" "([^"]*)" "([^"]*)"$/, (selectColumn, selectOPerator, FilterValue) => {
  AccountTypeHomePage.clickFilterButton();
  AccountTypeHomePage.selectColumn(selectColumn);
  AccountTypeHomePage.selectOperator(selectOPerator);
  AccountTypeHomePage.fillFilterValue(FilterValue);
});

Then(/^I am able see the Account type inside the table with AccountType id "([^"]*)"$/, (accountTypeId) => {
  AccountTypeHomePage.verifyAccountTypeIdInsideTable(accountTypeId);
});

Then(/^I am able validate the Account type inside the view page "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ACCOUNT_TYPE_ID, DESCRIPTION, MINIMUM_ACCOUNT_BALANCE, MAXIMUM_ACCOUNT_BALANCE, MINIMUM_TRANSACTION_AMOUNT, MAXIMUM_TRANSACTION_AMOUNT, CREDIT_LIMIT, COUNT_LIMIT, PAY_LIMIT, URL, EXPIRY_DATE) => {
  ViewAccountPage.verifyAccountId(ACCOUNT_TYPE_ID);
  ViewAccountPage.verifyAccountDescription(DESCRIPTION);
  ViewAccountPage.verifyMinimumAccountBalance(MINIMUM_ACCOUNT_BALANCE);
  ViewAccountPage.verifyMaximumAccountBalance(MAXIMUM_ACCOUNT_BALANCE);
  ViewAccountPage.verifyMinimumTransactionAmount(MINIMUM_TRANSACTION_AMOUNT);
  ViewAccountPage.verifyMaximumTransactionAmount(MAXIMUM_TRANSACTION_AMOUNT);
  ViewAccountPage.verifyCreditLimit(CREDIT_LIMIT);
  ViewAccountPage.verifyCountLimit(COUNT_LIMIT);
  ViewAccountPage.verifyPayLimit(PAY_LIMIT);
  ViewAccountPage.verifyURL(URL);
  ViewAccountPage.verifyExpiryDate(EXPIRY_DATE);
});

And(/^I click on update button$/, () => {
  CreateAccountTypePage.clickUpdateButton();
});

And(/^I click on reset button$/, () => {
  CreateAccountTypePage.clickResetButton();
});

And(/^I click on submit button$/, () => {
  CreateAccountTypePage.clickSubmitButton();
});

And(/^I verify required field Account type Id message displayed "([^"]*)" "([^"]*)"$/, (message, inputField) => {
  CommonUtilities.validateFieldMessage(message, inputField);
});

Then(/^I enter Account type Id and verify error message vanished "([^"]*)"$/, (accountTypeId) => {
  CreateAccountTypePage.fillAccountTypeId(accountTypeId);
  CreateAccountTypePage.requiredAccountTypeIdMessageVanished();
});

Then(/^I validate the table parameters "([^"]*)" "([^"]*)"$/, (columnName, columnFirstRowValue) => {
  AccountTypeHomePage.validateTableParameters(columnName, columnFirstRowValue);
});

And(/^I click reset button$/, () => {
  CreateAccountTypePage.clickReset();
});

And(/^I enter account type id and description "([^"]*)" "([^"]*)"$/, (accountTypeId, description) => {
  CreateAccountTypePage.fillAccountTypeId(accountTypeId);
  CreateAccountTypePage.fillDescription(description);
});

When(/^I verify account types id and description are reset to blank$/, () => {
  CreateAccountTypePage.verifyEmptyAccountTypeId();
  CreateAccountTypePage.verifyEmptyDesription();
});

And(/^I click on export button$/, () => {
  AccountTypeHomePage.clickOnExportButton();
});

And(/^I click on download button$/, () => {
  AccountTypeHomePage.clickOnDownloadButton();
});

And(/^I read file name "([^"]*)"$/, (fileName) => {
  CommonUtilities.readFileName(fileName);
});

Then(/^I delete file name "([^"]*)"$/, (fileName) => {
  cy.task('deleteFile', fileName);
});

And(/^I scroll right to particular column "([^"]*)"$/, (columnCount) => {
  AccountTypeHomePage.scrollToRightwithArguments(AccountTypeHomePage.getColumnCountToScrollPixel(columnCount));
});

And(/^I sort table data with parameters "([^"]*)" "([^"]*)"$/, (sortField, sortType) => {
  CommonUtilities.SortBy(sortField, sortType);
  cy.wait(800);
});

Then(/^I should see account types details in table with follwing parameters "([^"]*)" "([^"]*)"$/,
  (accountTypeId, description) => {
    AccountTypeHomePage.verifyAccountTypeIdInAccountsTypesPage(accountTypeId);
    AccountTypeHomePage.verifyDescriptionInAccountsTypesPage(description);
  });

And(/^I verify not authorized screen is visible$/, () => {
  AccountTypeHomePage.verifyNotAuthorized();
});
