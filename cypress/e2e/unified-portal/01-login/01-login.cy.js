import { Then, When, And } from 'cypress-cucumber-preprocessor/steps';
import PortalHomePage from '../../../pages/unified-portal/home/portal-home-page';
import resellerGeneralInfo from '../../../pages/unified-portal/reseller/reseller_general_info';
import PortalLoginPage from '../../../pages/unified-portal/login/portal-login-page';
import ResellerHomePage from '../../../pages/unified-portal/reseller/reseller_home_page';
import PasswordPolicyPage from '../../../pages/unified-portal/reseller/password_policy_page';
import CommonUtilities from "../../../common/Util";

When(/^I perform Change Password operation having following parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (password, newPassword, confirmPassword) => {
  PortalHomePage.clickChangePassword();
  PortalHomePage.enterChangePasswordDetails(password, newPassword, confirmPassword);
});

When(/^Click on Having trouble signing in$/, () => {
  PortalHomePage.clickOnHavingTroubleSigningIn();
});

Then(/^I should see the Recover your account on recovery page$/, () => {
  PortalHomePage.verifyRecoveryPage();
});

And(/^I click on forgot password$/, () => {
  PortalHomePage.clickOnForgotPassword();
});

Then(/^I verify UserId is available$/, () => {
  PortalHomePage.verifyUserIdLabel();
});

When(/^I click on MSISDN Login$/, () => {
  PortalHomePage.clickMSISDNLogin();
});

When(/^I click on Having trouble signing in option$/, () => {
  PortalHomePage.clickHavingTrouble();
});

When(/^I enter userId "([^"]*)"$/, (userId) => {
  PortalHomePage.enterUsername(userId);
  PortalHomePage.clickNext();
});

When(/^I click via SMS option$/, () => {
  PortalHomePage.clickSMSOption();
});

When(/^I enter invalid otp$/, () => {
  PortalHomePage.enterOTP();
  PortalHomePage.verifyOTP();
});

When(/^I enter MSISDN "([^"]*)"$/, (msisdn) => {
  PortalHomePage.clickMSISDNOption();
  PortalHomePage.enterUsername(msisdn);
  PortalHomePage.clickNext();
});

And(/^I click on change password$/, () => {
  PortalHomePage.clickChangePassword();
});

Then(/^I provide particular "([^"]*)" "([^"]*)"$/, (passwordType, password) => {
  PortalHomePage.providePasswordType(passwordType, password);
});

And(/^I validate "([^"]*)" in dot-format$/, (passwordType) => {
  PortalHomePage.verifyPasswordFormatDot(passwordType);
});

And(/^I validate "([^"]*)" in text-format$/, (passwordType) => {
  PortalHomePage.verifyPasswordFormatText(passwordType);
});

Then(/^I click on view "([^"]*)"$/, (passwordType) => {
  PortalHomePage.clickOnViewIcon(passwordType);
});

And(/^I enter reseller info with parameters "([^"]*)" "([^"]*)"$/, (searchFeild, searchValue) => {
  resellerGeneralInfo.enterSearchValue(searchFeild, searchValue);
  resellerGeneralInfo.clickSearch();
  // cy.wait(5000);
});

And(/^I navigate to the Resellers Page$/, () => {
  cy.debug('Navigate to add resellers page');
  // resellerGeneralInfo.navigateToAddResellerUsingLeftMenu();
  resellerGeneralInfo.navigateToAddResellerUsingUrl();
  cy.wait(9000);
});

And(/^I Click on the eye icon against any reseller from the list$/, () => {
  // cy.wait(1000);
  resellerGeneralInfo.clickViewReseller();
});

And(/^I perform Reset Wrong Password Attempts operation$/, () => {
  cy.wait(1000);
  resellerGeneralInfo.clickResetWrongPasswordAttempts();
});

And(/^I click on Reseller User Information$/, () => {
  cy.wait(1000);
  resellerGeneralInfo.clickResellerUserInfo();
});

When(/^Provide "([^"]*)" and "([^"]*)" and login$/, (resellerId, password) => {
  PortalLoginPage.loginCredentials(resellerId, password);
});

And(/^I navigate to the Reseller Password Policy Page$/, () => {
  ResellerHomePage.goTOResellerPasswordPoliciesUsingUrl();
  cy.wait(5000);
});

And(/^Password Policy created should be visible inside table "([^"]*)"$/, (policyName) => {
  CommonUtilities.applyFilter('Name', 'equals', policyName);
  cy.wait(5000);
});

When(/^I update Password Policy with following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" and "([^"]*)"$/, (policyName, pageTitle, description, minLength, maxLength, regExp, changePolicy, createPolicy, changeTempKey, createTempKey, legalChar, encription) => {
  ResellerHomePage.clickOnEditOfResellerPasswordPolicy(policyName);
  cy.wait(5000);
  PasswordPolicyPage.verifyPageTitle(pageTitle);
  PasswordPolicyPage.fillDescription(description);
  PasswordPolicyPage.fillMinPassword(minLength);
  PasswordPolicyPage.fillMaxPassword(maxLength);
  PasswordPolicyPage.fillRegExp(regExp);
  PasswordPolicyPage.selectChangePolicy(changePolicy);
  PasswordPolicyPage.selectCreatePolicy(createPolicy);
  PasswordPolicyPage.selectChangeTempKey(changeTempKey);
  PasswordPolicyPage.selectCreateTempKey(createTempKey);
  PasswordPolicyPage.selectLegalChar(legalChar);
  PasswordPolicyPage.selectEncryption(encription);
});

And(/^I enter password controls details "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/,
  // eslint-disable-next-line max-len
  (expiryPeriod, createMsg, pwdControl, maxIncorrectLogins, passwordHistoryLimits, bannedPassword) => {
    PasswordPolicyPage.selectPasswordExpirySelect(expiryPeriod);
    PasswordPolicyPage.selectCreateMessage(createMsg);
    PasswordPolicyPage.selectPasswordControl(pwdControl);
    PasswordPolicyPage.enterMaxIncorrectAttempts(maxIncorrectLogins);
    PasswordPolicyPage.enterPasswordHistoryLimits(passwordHistoryLimits);
    PasswordPolicyPage.enterBannedPasswords(bannedPassword);
    cy.wait(1000);
  });

Then(/^I click on update button$/, () => {
  PasswordPolicyPage.clickOnUpdate();
});

And(/^I create DIST using API having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (
  loginId, loginPassword, parentMSISDN, parentOriginId, parentExtCode, userCode, userName, extCode, webLoginId, MSISDN) => {
  resellerGeneralInfo.createResellerUsingAPI(loginId, loginPassword, parentMSISDN, parentOriginId, parentExtCode, userCode, userName, extCode, webLoginId, MSISDN);
});

When(/^I change the password having following parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (password, newPassword, confirmPassword) => {
  PortalHomePage.enterChangePasswordDetails(password, newPassword, confirmPassword);
});

Then(/^I verify the status of Reseller on Reseller home page "([^"]*)"$/, (status) => {
  resellerGeneralInfo.verifyStatusResellerHomePage(status);
});

after(() => {
  cy.writeFile("browserDetails.json", Cypress.browser);
});
