import {
  And, Then, When,
} from 'cypress-cucumber-preprocessor/steps';

import subscriberTopupMainPage from '../../../pages/unified-portal/transactions/subscriber-topup_main_page';

And(/^I navigate to manual adjustment Page$/, () => {
  subscriberTopupMainPage.navigateManualAdjustmentUsingUrl();
});

And(/^I navigate to manual adjustment Page and verify not authorized$/, () => {
  subscriberTopupMainPage.navigateManualAdjustmentUsingUrlAndVerifyNotAuthorized();
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

And(/^I click on transfer$/, () => {
  subscriberTopupMainPage.clickTransfer();
});

Then(/^I validate the manual adjustment receipt "([^"]*)" "([^"]*)" "([^"]*)"$/, (sender_reseller_id, status, result_message) => {
  // eslint-disable-next-line max-len
  subscriberTopupMainPage.validateManualAdjustmentReceipt(sender_reseller_id, status, result_message);
  subscriberTopupMainPage.closeTransactionScreen();
});
