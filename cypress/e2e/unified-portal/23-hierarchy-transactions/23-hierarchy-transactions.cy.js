import {
  And, Then, When,
} from 'cypress-cucumber-preprocessor/steps';

import subscriberTopupMainPage from '../../../pages/unified-portal/transactions/subscriber-topup_main_page';
import searchTransactionMainPage from '../../../pages/unified-portal/transactions/search-transaction';

And(/^I navigate to hierarchy transaction page and verify search transaction page title visible$/, () => {
  searchTransactionMainPage.clickOnHierarchyTransactionUsingUrl();
  searchTransactionMainPage.verifySearchTransactionPageTitle();
});

And(/^I navigate to the airtime stock Page$/, () => {
  subscriberTopupMainPage.navigateAirtimeStockUsingUrl();
});

When(/^I provide "([^"]*)" "([^"]*)" and click on search button$/, (searchField, searchValue) => {
  searchTransactionMainPage.searchTransaction(searchField, searchValue);
  searchTransactionMainPage.clickOnSearch();
});

Then(/^I scroll to right$/, () => {
  searchTransactionMainPage.scrollRight();
});

Then(/^I validate "([^"]*)" should be available in the grid$/, (data) => {
  // searchTransactionMainPage.scrollRight();
  searchTransactionMainPage.validateData(data);
});

And(/^I click reset button$/, () => {
  subscriberTopupMainPage.clickResetButton();
});

Then(/^I validate "([^"]*)" "([^"]*)" should be blank$/, (field, value) => {
  searchTransactionMainPage.shouldBeBlank(field, value);
});

And(/^I provide Date and click on search button$/, () => {
  searchTransactionMainPage.enterDate();
  searchTransactionMainPage.clickOnSearch();
});

And(/^I validate transaction should be available in the table$/, () => {
  searchTransactionMainPage.validateTransactionEntry();
});

Then(/^I validate "([^"]*)" should be available in the table$/, (data) => {
  searchTransactionMainPage.validateData(data);
});

Then(/^I validate element "([^"]*)" should be available in the table$/, (data) => {
  searchTransactionMainPage.validateElement(data);
});

Then(/^I scroll to the elements$/, () => {
  searchTransactionMainPage.scrollInTo();
});

Then(/^I scroll to center$/, () => {
  searchTransactionMainPage.scrollCenter();
});

Then(/^I scroll to bottom$/, () => {
  searchTransactionMainPage.scrollBottom();
});

Then(/^I scroll to the element$/, () => {
  searchTransactionMainPage.scrollTo();
});
