import {
  And, Then, When,
} from 'cypress-cucumber-preprocessor/steps';

import subscriberTopupMainPage from '../../../pages/unified-portal/transactions/subscriber-topup_main_page';
import searchTransactionMainPage from '../../../pages/unified-portal/transactions/search-transaction';

And(/^I verify username "([^"]*)"$/, (userName) => {
  subscriberTopupMainPage.verifyUserName(userName);
});

And(/^I navigate to subscriber topup page$/, () => {
  subscriberTopupMainPage.navigateTosubscriberTopupUsingUrl();
});

When(/^I provide data with these parameters and click on sell topup button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (productCategory, recipientMobileNumber, amount, paymentMethod) => {
  subscriberTopupMainPage.selectProductCategory(productCategory);
  subscriberTopupMainPage.selectPaymentMethod(paymentMethod);
  subscriberTopupMainPage.typeRecipientMobileNumber(recipientMobileNumber);
  subscriberTopupMainPage.typeAmount(amount);
  // eslint-disable-next-line max-len
  subscriberTopupMainPage.typeComments(productCategory, recipientMobileNumber, amount, paymentMethod);
  subscriberTopupMainPage.clickOnSellTopupButton();
});

Then(/^I store the transaction reference number$/, () => {
  subscriberTopupMainPage.getTransactionReference();
});

And(/^I navigate to hierarchy transaction page and verify search transaction page title visible$/, () => {
  searchTransactionMainPage.clickOnHierarchyTransactionUsingUrl();
  searchTransactionMainPage.verifySearchTransactionPageTitle();
});

When(/^I provide transaction reference and click on search button$/, () => {
  subscriberTopupMainPage.searchWithTransactionReference();
  searchTransactionMainPage.clickOnSearch();
});

Then(/^I should able to verify these parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (senderResellerId, receiverResellerId, receiverMSISDN, transactionType, product, amount, status) => {
  searchTransactionMainPage.scrollRight();
  searchTransactionMainPage.verifySenderResellerId(senderResellerId);
  searchTransactionMainPage.verifyReceiverResellerId(receiverResellerId);
  searchTransactionMainPage.verifyReceiverMSISDN(receiverMSISDN);
  searchTransactionMainPage.verifyTransactionType(transactionType);
  searchTransactionMainPage.verifyProduct(product);
  searchTransactionMainPage.verifyAmount(amount);
  searchTransactionMainPage.verifyStatus(status);
});

When(/^I perform transaction with mobile number having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (mobileNo, amount, comments, transactionType) => {
  subscriberTopupMainPage.enterMobileNo(mobileNo);
  subscriberTopupMainPage.enterAmount(amount);
  subscriberTopupMainPage.enterComments(comments);
  if (transactionType === 'TOPUP') {
    subscriberTopupMainPage.clickSellTopUpButton();
  } else if (transactionType === 'POSTPAID_TOPUP') {
    subscriberTopupMainPage.clickSellPostpaidTopUp();
  }
});

And(/^I validate and confirm the transaction using mobile transaction "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (mobileNo, amount, paymentMethod, comments) => {
  subscriberTopupMainPage.validateBeforeTransaction(mobileNo, amount, paymentMethod, comments);
  subscriberTopupMainPage.clickConfirmButton();
});

Then(/^I validate the transaction using mobile transaction "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (mobile, amount, title, message) => {
  subscriberTopupMainPage.validateTransactionReceipt(mobile, amount, title, message);
  subscriberTopupMainPage.closeTransactionScreen();
});

And(/^I navigate to hierarchy transaction page and verify search transaction page title visible for tpk$/, () => {
  searchTransactionMainPage.navigateHierarchyTransactionUsingUrl();
  searchTransactionMainPage.verifySearchTransactionPageTitle();
});

Then(/^I get the transaction reference number and close the transaction$/, () => {
  subscriberTopupMainPage.saveTransactionReference();
  subscriberTopupMainPage.closeTransactionScreen();
});

And(/^I validate Bulk Transaction Number$/, () => {
  subscriberTopupMainPage.verifyBulkTransaction();
});

And(/^I validate Single Transaction Number$/, () => {
  subscriberTopupMainPage.verifySingleTransaction();
});

And(/^I navigate to the topup Page$/, () => {
  subscriberTopupMainPage.navigateTopupUsingUrl();
});

Then(/^I validate transaction screen ui "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (mobile, amount, paymentMethod, comments) => {
  subscriberTopupMainPage.validateTopUpUI(mobile, amount, paymentMethod, comments);
});

And(/^I click on sell topup button$/, () => {
  subscriberTopupMainPage.clickSellTopUpButton();
});

When(/^I get anonymous id for "([^"]*)"$/, (mobile) => {
  subscriberTopupMainPage.getAnonymousId(mobile);
});

When(/^I perform transaction with anonymous id having following parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (amount, comments, transactionType) => {
  subscriberTopupMainPage.clickAnonymousIdToggle();
  subscriberTopupMainPage.enterAnonymousId();
  subscriberTopupMainPage.enterAmount(amount);
  subscriberTopupMainPage.enterComments(comments);
  if (transactionType === 'TOPUP') {
    subscriberTopupMainPage.clickSellTopUpButton();
  } else if (transactionType === 'POSTPAID_TOPUP') {
    subscriberTopupMainPage.clickSellPostpaidTopUp();
  }
});

When(/^I enter mobile number, amount and comments "([^"]*)" "([^"]*)" "([^"]*)"$/, (mobileNo, amount, comments) => {
  subscriberTopupMainPage.enterMobileNo(mobileNo);
  subscriberTopupMainPage.enterAmount(amount);
  subscriberTopupMainPage.enterComments(comments);
});

And(/^I verify mobile number, amount and comments fields are reset$/, () => {
  subscriberTopupMainPage.verifyMobileNoEmpty();
  subscriberTopupMainPage.verifyAmountEmpty();
  subscriberTopupMainPage.verifyCommentsEmpty();
});

And(/^I validate and confirm the transaction using anonymous transaction "([^"]*)" "([^"]*)" "([^"]*)"$/, (amount, paymentMethod, comments) => {
  subscriberTopupMainPage.validateBeforeTransactionForAnonymousID(amount, paymentMethod, comments);
  subscriberTopupMainPage.clickConfirmButton();
});

Then(/^I validate the transaction using anonymous transaction "([^"]*)" "([^"]*)" "([^"]*)"$/, (amount, title, message) => {
  subscriberTopupMainPage.validateTransactionReceiptForAnonymousId(amount, title, message);
});

Then(/^I should able to verify these parameters for anonymous id transaction "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (senderResellerId, receiverResellerId, transactionType, product, amount, status) => {
  searchTransactionMainPage.scrollRight();
  searchTransactionMainPage.verifySenderResellerId(senderResellerId);
  searchTransactionMainPage.verifyReceiverResellerId(receiverResellerId);
  searchTransactionMainPage.verifyAnonymousId();
  searchTransactionMainPage.verifyTransactionType(transactionType);
  searchTransactionMainPage.verifyProduct(product);
  searchTransactionMainPage.verifyAmount(amount);
  searchTransactionMainPage.verifyStatus(status);
});

And(/^I navigate to the airtime postpaid Page$/, () => {
  subscriberTopupMainPage.navigateAirtimePostpaidUsingUrl();
});

And(/^I click on sell postpaid topup button$/, () => {
  subscriberTopupMainPage.clickSellPostpaidTopUp();
});

And(/^I navigate to manual adjustment Page$/, () => {
  subscriberTopupMainPage.navigateManualAdjustmentUsingUrl();
});

Then(/^I validate the transaction "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerId, amount, title, message) => {
  subscriberTopupMainPage.validateTransactionReceipt(resellerId, amount, title, message);
});

And(/^I click on sell airtime stock button$/, () => {
  subscriberTopupMainPage.clickSellAirtimeStock();
});

And(/^I perform bulk transaction with mobile number having following parameters "([^"]*)" "([^"]*)"$/, (uploadFile, transactionType) => {
  subscriberTopupMainPage.clickBulkToggle();
  subscriberTopupMainPage.bulkTransaction(uploadFile);
  if (transactionType === 'TOPUP') {
    subscriberTopupMainPage.clickSellTopUpButton();
  } else if (transactionType === 'POSTPAID_TOPUP') {
    subscriberTopupMainPage.clickSellPostpaidTopUp();
  } else if (transactionType === 'CREDIT_TRANSFER') {
    subscriberTopupMainPage.clickSellAirtimeStock();
  }
});

And(/^I click on bulk toggle$/, () => {
  subscriberTopupMainPage.clickBulkToggle();
});

And(/^I validate and confirm the bulk transaction using mobile transaction "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (firstMobile, firstAmount, secondMobile, secondAmount, thirdMobile, thirdAmount, paymentMethod, comments) => {
  subscriberTopupMainPage.validateBeforeBulkTransaction(firstMobile, firstAmount, secondMobile, secondAmount, thirdMobile, thirdAmount, paymentMethod, comments);
  subscriberTopupMainPage.clickConfirmButton();
});

And(/^I validate the bulk transaction using mobile transaction "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (firstMobile, firstAmount, title, firstMessage, secondMobile, secondAmount, secondMessage, thirdMobileNo, thirdAmount, thirdMessage) => {
  subscriberTopupMainPage.validateBulkTransactionReceipt(firstMobile, firstAmount, title, firstMessage, secondMobile, secondAmount, secondMessage, thirdMobileNo, thirdAmount, thirdMessage);
});

Then(/^I get the bulk transaction reference numbers and close the transactions$/, () => {
  subscriberTopupMainPage.saveBulkTransactionReference();
  subscriberTopupMainPage.closeTransactionScreen();
});

When(/^I provide first transaction reference and click on search button$/, () => {
  subscriberTopupMainPage.searchWithFirstTransactionReference();
  searchTransactionMainPage.clickOnSearch();
});

When(/^I provide second transaction reference and click on search button$/, () => {
  subscriberTopupMainPage.searchWithSecondTransactionReference();
  searchTransactionMainPage.clickOnSearch();
});

When(/^I provide third transaction reference and click on search button$/, () => {
  subscriberTopupMainPage.searchWithThirdTransactionReference();
  searchTransactionMainPage.clickOnSearch();
});

When(/^I clear the serach transaction screen$/, () => {
  searchTransactionMainPage.resetSearch();
});

And(/^I perform bulk transaction with mobile number by add new option having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (firstMobile, firstAmount, secondMobile, secondAmount, thirdMobile, thirdAmount, comments, transactionType) => {
  subscriberTopupMainPage.clickBulkToggle();
  subscriberTopupMainPage.enterMobileNo(firstMobile);
  subscriberTopupMainPage.enterAmount(firstAmount);
  subscriberTopupMainPage.enterComments(comments);
  subscriberTopupMainPage.clickAddNew();
  subscriberTopupMainPage.enterSecondMobileNo(secondMobile);
  subscriberTopupMainPage.enterSecondAmount(secondAmount);
  subscriberTopupMainPage.enterSecondComments(comments);
  subscriberTopupMainPage.clickAddNew();
  subscriberTopupMainPage.enterThirdMobileNo(thirdMobile);
  subscriberTopupMainPage.enterThirdAmount(thirdAmount);
  subscriberTopupMainPage.enterThirdComments(comments);

  if (transactionType === 'TOPUP') {
    subscriberTopupMainPage.clickSellTopUpButton();
  } else if (transactionType === 'POSTPAID_TOPUP') {
    subscriberTopupMainPage.clickSellPostpaidTopUp();
  } else if (transactionType === 'CREDIT_TRANSFER') {
    subscriberTopupMainPage.clickSellAirtimeStock();
  }
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

And(/^I click reset button$/, () => {
  subscriberTopupMainPage.clickResetButton();
});

Then(/^I click on Transaction tab/, () => {
  cy.wait(800);
  subscriberTopupMainPage.clickOnTransactionTab();
});

And(/^I validate top-up option is not visible/, () => {
  cy.wait(800);
  subscriberTopupMainPage.validateTopUpTabNotExist();
});

When(/^I provide "([^"]*)" "([^"]*)" and click on search button$/, (searchField, searchValue) => {
  searchTransactionMainPage.searchTransaction(searchField, searchValue);
  searchTransactionMainPage.clickOnSearch();
});

Then(/^I scroll to right$/, () => {
  searchTransactionMainPage.scrollRight();
});

Then(/^I scroll to center$/, () => {
  searchTransactionMainPage.scrollCenter();
});

Then(/^I scroll to bottom$/, () => {
  searchTransactionMainPage.scrollBottom();
});

Then(/^I validate "([^"]*)" should be available in the grid$/, (data) => {
  // searchTransactionMainPage.scrollRight();
  searchTransactionMainPage.validateData(data);
});

Then(/^I validate "([^"]*)" "([^"]*)" should be blank$/, (field, value) => {
  searchTransactionMainPage.shouldBeBlank(field, value);
});

Then(/^I validate "([^"]*)" should be available in the table$/, (data) => {
  searchTransactionMainPage.validateData(data);
});

Then(/^I validate element "([^"]*)" should be available in the table$/, (data) => {
  searchTransactionMainPage.validateElement(data);
});

Then(/^I scroll to the element$/, () => {
  searchTransactionMainPage.scrollTo();
});

Then(/^I get the transaction reference number$/, () => {
  subscriberTopupMainPage.saveTransactionReference();
});

Then(/^I enter comments for reversal "([^"]*)"$/, (comments) => {
  subscriberTopupMainPage.enterReversalComments(comments);
});

Then(/^I enter comments for request reversal in search transaction "([^"]*)"$/, (comments) => {
  subscriberTopupMainPage.enterReversalCommentsSearchTransaction(comments);
});

And(/^I click confirm for reversal$/, () => {
  subscriberTopupMainPage.confirmReversal();
});

And(/^I navigate to search transaction page and verify search transaction page title visible$/, () => {
  searchTransactionMainPage.clickOnSearchTransactionUsingUrl();
  searchTransactionMainPage.verifySearchTransactionPageTitle();
});

And(/^I provide Date and click on search button$/, () => {
  searchTransactionMainPage.enterDate();
  searchTransactionMainPage.clickOnSearch();
});

And(/^I validate transaction should be available in the table$/, () => {
  searchTransactionMainPage.validateTransactionEntry();
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

And(/^I verify warning message "([^"]*)"$/, (warningMsg) => {
  subscriberTopupMainPage.verifyWarningMsg(warningMsg);
});

And(/^I delete transaction number "([^"]*)"$/, (transactionNo) => {
  subscriberTopupMainPage.deleteTransaction(transactionNo);
});

And(/^I verify not authorized screen$/, () => {
  subscriberTopupMainPage.verifyNotAuthorized();
});

And(/^I navigate to pending transactions page$/, () => {
  subscriberTopupMainPage.navigatePendingTransactionsUsingUrl();
});

And(/^I navigate to standard bundle page$/, () => {
  subscriberTopupMainPage.navigateStandardBundleUsingUrl();
});

And(/^I click on cart button$/, () => {
  subscriberTopupMainPage.clickOnCart();
});

And(/^I click on submit button$/, () => {
  subscriberTopupMainPage.clickSubmit();
});

And(/^I click on request reversal button$/, () => {
  subscriberTopupMainPage.clickRequestReversal();
});

And(/^I enter subscriber MSISDN "([^"]*)"$/, (subscriberMsisdn) => {
  subscriberTopupMainPage.enterSubscriberMSISDN(subscriberMsisdn);
});

And(/^I enter sender reseller id "([^"]*)"$/, (senderResellerId) => {
  subscriberTopupMainPage.enterSenderResellerID(senderResellerId);
});

And(/^I enter reveiver reseller id "([^"]*)"$/, (receiverResellerId) => {
  subscriberTopupMainPage.enterReceiverResellerID(receiverResellerId);
});

And(/^I select sender account type "([^"]*)"$/, (senderAccountType) => {
  subscriberTopupMainPage.selectSenderAccountType(senderAccountType);
});

And(/^I select receiver account type "([^"]*)"$/, (receiverAccountType) => {
  subscriberTopupMainPage.selectReceiverAccountType(receiverAccountType);
});

And(/^I enter amount "([^"]*)"$/, (amount) => {
  subscriberTopupMainPage.enterAmount(amount);
});

And(/^I click on continue$/, () => {
  subscriberTopupMainPage.clickContinue();
});

And(/^I click on view button$/, () => {
  subscriberTopupMainPage.clickViewButton();
});

And(/^I click on reverse transaction button$/, () => {
  subscriberTopupMainPage.clickReverseTransaction();
});

And(/^I verify confirm button is disabled$/, () => {
  subscriberTopupMainPage.verifyConfirmButtonDisabled();
});

And(/^I click on reject pending button$/, () => {
  subscriberTopupMainPage.clickOnRejectPending();
});

And(/^I click on approve pending button$/, () => {
  subscriberTopupMainPage.clickOnApprovePending();
});

And(/^I click on reject button$/, () => {
  subscriberTopupMainPage.clickOnRejectButton();
});

And(/^I click on approve button$/, () => {
  subscriberTopupMainPage.clickOnApproveButton();
});

And(/^I click on confirm button again$/, () => {
  subscriberTopupMainPage.clickConfirmButtonAgain();
});

Then(/^I scroll to the elements$/, () => {
  searchTransactionMainPage.scrollInTo();
});

And(/^I wait for "([^"]*)" miliseconds$/, (miliseconds) => {
  cy.wait(parseInt(miliseconds));
});

Then(/^I scroll to elements$/, () => {
  searchTransactionMainPage.scrollToTheElement();
});

And(/^I click on transfer$/, () => {
  subscriberTopupMainPage.clickTransfer();
});

Then(/^I validate the manual adjustment receipt "([^"]*)" "([^"]*)" "([^"]*)"$/, (sender_reseller_id, status, result_message) => {
  subscriberTopupMainPage.validateManualAdjustmentReceipt(sender_reseller_id, status, result_message);
  subscriberTopupMainPage.closeTransactionScreen();
});