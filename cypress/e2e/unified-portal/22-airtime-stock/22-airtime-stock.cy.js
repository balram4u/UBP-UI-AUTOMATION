import {
  And, Then, When,
} from 'cypress-cucumber-preprocessor/steps';

import subscriberTopupMainPage from '../../../pages/unified-portal/transactions/subscriber-topup_main_page';
import searchTransactionMainPage from '../../../pages/unified-portal/transactions/search-transaction';

And(/^I navigate to the airtime stock Page$/, () => {
  subscriberTopupMainPage.navigateAirtimeStockUsingUrl();
});

And(/^I wait for "([^"]*)" miliseconds$/, (miliseconds) => {
  cy.wait(parseInt(miliseconds));
});

And(/^I verify username "([^"]*)"$/, (userName) => {
  subscriberTopupMainPage.verifyUserName(userName);
});

Then(/^I validate the transaction "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerId, amount, title, message) => {
  subscriberTopupMainPage.validateTransactionReceipt(resellerId, amount, title, message);
});

When(/^I perform airtime stock transaction having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerId, amount, comments, msisdn) => {
  if (msisdn === "") {
    subscriberTopupMainPage.enterResellerId(resellerId);
  } else {
    subscriberTopupMainPage.clickMsisdnToggle();
    subscriberTopupMainPage.enterMsisdn(msisdn);
  }
  subscriberTopupMainPage.enterAmount(amount);
  subscriberTopupMainPage.enterComments(comments);
  subscriberTopupMainPage.clickSellAirtimeStock();
});

And(/^I validate and confirm the transaction "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerId, amount, paymentMethod, comments) => {
  subscriberTopupMainPage.validateBeforeTransaction(resellerId, amount, paymentMethod, comments);
  subscriberTopupMainPage.clickConfirmButton();
});

And(/^I click transfer button for reversal$/, () => {
  subscriberTopupMainPage.clickTransferButton();
});

And(/^I perform bulk transaction with msisdn by add new option having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (firstMobile, firstAmount, secondMobile, secondAmount, thirdMobile, thirdAmount, comments, transactionType) => {
  subscriberTopupMainPage.clickBulkToggle();
  subscriberTopupMainPage.clickMsisdnToggle();
  subscriberTopupMainPage.enterMsisdn(firstMobile);
  subscriberTopupMainPage.enterAmount(firstAmount);
  subscriberTopupMainPage.enterComments(comments);
  subscriberTopupMainPage.clickAddNew();
  subscriberTopupMainPage.clickSecondMsisdnToggle();
  subscriberTopupMainPage.enterSecondMsisdn(secondMobile);
  subscriberTopupMainPage.enterSecondAmount(secondAmount);
  subscriberTopupMainPage.enterSecondComments(comments);
  subscriberTopupMainPage.clickAddNew();
  subscriberTopupMainPage.clickThirdMsisdnToggle();
  subscriberTopupMainPage.enterThirdMsisdn(thirdMobile);
  subscriberTopupMainPage.enterThirdAmount(thirdAmount);
  subscriberTopupMainPage.enterThirdComments(comments);
  subscriberTopupMainPage.clickSellAirtimeStock();
});

When(/^I perform bulk transaction with one valid and one invalid "([^"]*)" by add new option having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (transactionDataType, firstMobile, firstAmount, secondMobile, secondAmount, comments, transactionType) => {
  subscriberTopupMainPage.clickBulkToggle();
  if (transactionDataType == 'MSISDN') {
    subscriberTopupMainPage.clickMsisdnToggle();
  }
  subscriberTopupMainPage.enterMsisdn(firstMobile);
  subscriberTopupMainPage.enterAmount(firstAmount);
  subscriberTopupMainPage.enterComments(comments);
  subscriberTopupMainPage.clickAddNew();
  if (transactionDataType == 'MSISDN') {
    subscriberTopupMainPage.clickSecondMsisdnToggle();
  }
  subscriberTopupMainPage.enterSecondMsisdn(secondMobile);
  subscriberTopupMainPage.enterSecondAmount(secondAmount);
  subscriberTopupMainPage.enterSecondComments(comments);

  if (transactionType === 'TOPUP') {
    subscriberTopupMainPage.clickSellTopUpButton();
  } else if (transactionType === 'POSTPAID_TOPUP') {
    subscriberTopupMainPage.clickSellPostpaidTopUp();
  } else if (transactionType === 'CREDIT_TRANSFER') {
    subscriberTopupMainPage.clickSellAirtimeStock();
  }
});

And(/^I click on confirm button$/, () => {
  subscriberTopupMainPage.clickConfirmButton();
});

And(/^I close the transaction receipt$/, () => {
  subscriberTopupMainPage.closeTransactionScreen();
});

And(/^I validate the bulk transaction details "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (successCount, failureCount, firstReceipent, firstAmount, firstStatus, firstResult, secondReceipent, secondAmount, secondStatus, secondResult, thirdReceipent, thirdAmount, thirdStatus, thirdResult) => {
  subscriberTopupMainPage.verifySuccessCount(successCount);
  subscriberTopupMainPage.verifyFailureCount(failureCount);
  subscriberTopupMainPage.verifyFirstReceipent(firstReceipent);
  subscriberTopupMainPage.verifyFirstAmount(firstAmount);
  subscriberTopupMainPage.verifyFirstStatus(firstStatus);
  subscriberTopupMainPage.verifyFirstResult(firstResult);
  subscriberTopupMainPage.verifySecondReceipent(secondReceipent);
  subscriberTopupMainPage.verifySecondAmount(secondAmount);
  subscriberTopupMainPage.verifySecondStatus(secondStatus);
  subscriberTopupMainPage.verifySecondResult(secondResult);
  subscriberTopupMainPage.verifyThirdReceipent(thirdReceipent);
  subscriberTopupMainPage.verifyThirdAmount(thirdAmount);
  subscriberTopupMainPage.verifyThirdStatus(thirdStatus);
  subscriberTopupMainPage.verifyThirdResult(thirdResult);
});

Then(/^I get the transaction reference number and close the transaction$/, () => {
  subscriberTopupMainPage.saveTransactionReference();
  subscriberTopupMainPage.closeTransactionScreen();
});

And(/^I perform bulk transaction with mobile number having following parameters "([^"]*)" "([^"]*)"$/, (uploadFile, transactionType) => {
  subscriberTopupMainPage.clickBulkToggle();
  subscriberTopupMainPage.bulkTransaction(uploadFile);
  subscriberTopupMainPage.clickSellAirtimeStock();
});

And(/^I perform bulk transaction with resellerId by add new option having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (firstMobile, firstAmount, secondMobile, secondAmount, thirdMobile, thirdAmount, comments, transactionType) => {
  subscriberTopupMainPage.clickBulkToggle();
  subscriberTopupMainPage.enterMsisdn(firstMobile);
  subscriberTopupMainPage.enterAmount(firstAmount);
  subscriberTopupMainPage.enterComments(comments);
  subscriberTopupMainPage.clickAddNew();
  subscriberTopupMainPage.enterSecondMsisdn(secondMobile);
  subscriberTopupMainPage.enterSecondAmount(secondAmount);
  subscriberTopupMainPage.enterSecondComments(comments);
  subscriberTopupMainPage.clickAddNew();
  subscriberTopupMainPage.enterThirdMsisdn(thirdMobile);
  subscriberTopupMainPage.enterThirdAmount(thirdAmount);
  subscriberTopupMainPage.enterThirdComments(comments);
  subscriberTopupMainPage.clickSellAirtimeStock();
});

And(/^I validate and confirm the bulk transaction using mobile transaction "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (firstMobile, firstAmount, secondMobile, secondAmount, thirdMobile, thirdAmount, paymentMethod, comments) => {
  // eslint-disable-next-line max-len
  subscriberTopupMainPage.validateBeforeBulkTransaction(firstMobile, firstAmount, secondMobile, secondAmount, thirdMobile, thirdAmount, paymentMethod, comments);
  subscriberTopupMainPage.clickConfirmButton();
});

Then(/^I get the transaction reference number$/, () => {
  subscriberTopupMainPage.saveTransactionReference();
});

Then(/^I enter comments for reversal "([^"]*)"$/, (comments) => {
  subscriberTopupMainPage.enterReversalComments(comments);
});

And(/^I click confirm for reversal$/, () => {
  subscriberTopupMainPage.confirmReversal();
});

Then(/^I get the bulk transaction reference numbers and close the transactions$/, () => {
  subscriberTopupMainPage.saveBulkTransactionReference();
  subscriberTopupMainPage.closeTransactionScreen();
});

And(/^I navigate to the airtime stock Page and verify not authorized screen$/, () => {
  subscriberTopupMainPage.navigateAirtimeStockUsingUrlAndVerifyNotAuthorized();
});

And(/^I navigate to search transaction page and verify search transaction page title visible$/, () => {
  searchTransactionMainPage.clickOnSearchTransactionUsingUrl();
  searchTransactionMainPage.verifySearchTransactionPageTitle();
});

When(/^I provide transaction reference and click on search button$/, () => {
  subscriberTopupMainPage.searchWithTransactionReference();
  searchTransactionMainPage.clickOnSearch();
});

And(/^I navigate to pending transactions page$/, () => {
  subscriberTopupMainPage.navigatePendingTransactionsUsingUrl();
});

And(/^I click on reject pending button$/, () => {
  subscriberTopupMainPage.clickOnRejectPending();
});

And(/^I navigate to hierarchy transaction page and verify search transaction page title visible$/, () => {
  searchTransactionMainPage.clickOnHierarchyTransactionUsingUrl();
  searchTransactionMainPage.verifySearchTransactionPageTitle();
});

And(/^I click on view button$/, () => {
  subscriberTopupMainPage.clickViewButton();
});

And(/^I click on reverse transaction button$/, () => {
  subscriberTopupMainPage.clickReverseTransaction();
});

Then(/^I enter comments for request reversal in search transaction "([^"]*)"$/, (comments) => {
  subscriberTopupMainPage.enterReversalCommentsSearchTransaction(comments);
});

And(/^I click on reject button$/, () => {
  subscriberTopupMainPage.clickOnRejectButton();
});

And(/^I click on approve button$/, () => {
  subscriberTopupMainPage.clickOnApproveButton();
});

And(/^I click on approve pending button$/, () => {
  subscriberTopupMainPage.clickOnApprovePending();
});
