import {
  And, Then, When,
} from 'cypress-cucumber-preprocessor/steps';
import CommonUtilities from "../../../common/Util";
import ResellerHomePage from '../../../pages/unified-portal/reseller/reseller_home_page';
import CreatePasswordPolicyPage from '../../../pages/unified-portal/reseller/password_policy_page';
import ViewPasswordPolicyPage from '../../../pages/unified-portal/reseller/view_passwordPolicy_page';
import ViewReseller from '../../../pages/unified-portal/reseller/view-reseller';
import resellerGeneralInfo from '../../../pages/unified-portal/reseller/reseller_general_info';

And(/^I navigate to the Reseller Password Policy Page$/, () => {
  ResellerHomePage.goTOResellerPasswordPoliciesUsingUrl();
});

When(/^I create Password Policy with following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" and "([^"]*)"$/, (policyName, pageTitle, description, minLength, maxLength, regExp, changePolicy, createPolicy, changeTempKey, createTempKey, legalChar, encription) => {
  ResellerHomePage.clickOnCreateResellerPasswordPolicy();
  cy.wait(1000);
  CreatePasswordPolicyPage.verifyPageTitle(pageTitle);
  CreatePasswordPolicyPage.fillPasswordPOlicyName(policyName);
  CreatePasswordPolicyPage.fillDescription(description);
  CreatePasswordPolicyPage.fillMinPassword(minLength);
  CreatePasswordPolicyPage.fillMaxPassword(maxLength);
  CreatePasswordPolicyPage.fillRegExp(regExp);
  CreatePasswordPolicyPage.selectChangePolicy(changePolicy);
  CreatePasswordPolicyPage.selectCreatePolicy(createPolicy);
  CreatePasswordPolicyPage.selectChangeTempKey(changeTempKey);
  CreatePasswordPolicyPage.selectCreateTempKey(createTempKey);
  CreatePasswordPolicyPage.selectLegalChar(legalChar);
  CreatePasswordPolicyPage.selectEncryption(encription);
});

And(/^I click on submit$/, () => {
  CreatePasswordPolicyPage.clickOnSubmit();
});

And(/^Password Policy created should be visible inside table "([^"]*)"$/, (policyName) => {
  CommonUtilities.applyFilter('Name', 'equals', policyName);
});

When(/^I update Password Policy with following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" and "([^"]*)"$/, (policyName, pageTitle, description, minLength, maxLength, regExp, changePolicy, createPolicy, changeTempKey, createTempKey, legalChar, encription) => {
  ResellerHomePage.clickOnEditOfResellerPasswordPolicy(policyName);
  cy.wait(1000);
  CreatePasswordPolicyPage.verifyPageTitle(pageTitle);
  CreatePasswordPolicyPage.fillDescription(description);
  CreatePasswordPolicyPage.fillMinPassword(minLength);
  CreatePasswordPolicyPage.fillMaxPassword(maxLength);
  CreatePasswordPolicyPage.fillRegExp(regExp);
  CreatePasswordPolicyPage.selectChangePolicy(changePolicy);
  CreatePasswordPolicyPage.selectCreatePolicy(createPolicy);
  CreatePasswordPolicyPage.selectChangeTempKey(changeTempKey);
  CreatePasswordPolicyPage.selectCreateTempKey(createTempKey);
  CreatePasswordPolicyPage.selectLegalChar(legalChar);
  CreatePasswordPolicyPage.selectEncryption(encription);
});

When(/^I perform View password policy "([^"]*)"$/, (policyName) => {
  ResellerHomePage.clickOnViewOfResellerPasswordPolicy(policyName);
});

Then(/^I am able to validate following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" and "([^"]*)"$/, (policyName, description, minLength, maxLength, regExp, changePolicy, createPolicy, legalChar, encription) => {
  ViewPasswordPolicyPage.verifyPasswordPolicyDetails('Policy Name', policyName);
  ViewPasswordPolicyPage.verifyPasswordPolicyDetails('Description', description);
  ViewPasswordPolicyPage.verifyPasswordPolicyDetails('Password min length', minLength);
  ViewPasswordPolicyPage.verifyPasswordPolicyDetails('Password max length', maxLength);
  ViewPasswordPolicyPage.verifyPasswordPolicyDetails('Regular expression', regExp);
  ViewPasswordPolicyPage.verifyPasswordPolicyDetails('Password change policy', `ChangePolicy_${changePolicy}`);
  ViewPasswordPolicyPage.verifyPasswordPolicyDetails('Password create policy', createPolicy);
});

And(/^I click on delete button "([^"]*)"$/, (policyName) => {
  ResellerHomePage.clickOnDeleteOfResellerPasswordPolicy(policyName);
});

And(/^I verify the delete confirmation pop up appears$/, () => {
  CreatePasswordPolicyPage.verifyConfirmPopup();
});

And(/^I click Yes to confirm operation$/, () => {
  ResellerHomePage.clickOnDeleteRolePopupYesButton();
});

And(/^I click No to confirm operation$/, () => {
  ResellerHomePage.clickOnDeleteRolePopupNoButton();
});

And(/^I click on create password policy$/, () => {
  ResellerHomePage.clickOnCreateResellerPasswordPolicy();
});

And(/^I click reset button$/, () => {
  CreatePasswordPolicyPage.clickReset();
});

And(/^I click submit button$/, () => {
  CreatePasswordPolicyPage.clickSubmit();
});

And(/^I enter password controls details "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/,
  // eslint-disable-next-line max-len
  (expiryPeriod, createMsg, pwdControl, maxIncorrectLogins, passwordHistoryLimits, bannedPassword) => {
    CreatePasswordPolicyPage.selectPasswordExpirySelect(expiryPeriod);
    CreatePasswordPolicyPage.selectCreateMessage(createMsg);
    CreatePasswordPolicyPage.selectPasswordControl(pwdControl);
    CreatePasswordPolicyPage.enterMaxIncorrectAttempts(maxIncorrectLogins);
    CreatePasswordPolicyPage.enterPasswordHistoryLimits(passwordHistoryLimits);
    CreatePasswordPolicyPage.enterBannedPasswords(bannedPassword);
  });

And(/^I enter policy name and description "([^"]*)" "([^"]*)"$/, (policyName, desc) => {
  CreatePasswordPolicyPage.fillPasswordPOlicyName(policyName);
  CreatePasswordPolicyPage.fillDescription(desc);
});

And(/^I verify policy name and description are reset to blank$/, () => {
  CreatePasswordPolicyPage.verifyBlankPasswordPOlicyName();
  CreatePasswordPolicyPage.verifyblankDescription();
});

And(/^I click on export button$/, () => {
  CreatePasswordPolicyPage.clickOnExportButton();
});

And(/^I click on download button$/, () => {
  CreatePasswordPolicyPage.clickOnDownloadButton();
});

And(/^I read file name "([^"]*)"$/, (fileName) => {
  CommonUtilities.readFileName(fileName);
});

Then(/^I delete file name "([^"]*)"$/, (fileName) => {
  cy.task('deleteFile', fileName);
});

Then(/^I click on select column button$/, () => {
  CreatePasswordPolicyPage.clickOnSelectColumn();
});

And(/^I disable & enable the table column view and verify accordingly "([^"]*)"$/, (tableColumnName) => {
  cy.wait(800);
  CreatePasswordPolicyPage.tableColumnDisable(tableColumnName);
  cy.wait(800);
  CreatePasswordPolicyPage.verifyTableColumnDisabled(tableColumnName);
  cy.wait(800);
  CreatePasswordPolicyPage.tableColumnEnable(tableColumnName);
  cy.wait(800);
  CreatePasswordPolicyPage.verifyTableColumnEnabled(tableColumnName);
});

And(/^I scroll to Bottom if area is scrollable$/, () => {
  CreatePasswordPolicyPage.scrollToBottomWithCondition();
});

Then(/^I fetch count before policy creation$/, () => {
  cy.wait(6000);
  CreatePasswordPolicyPage.fetchCountBeforePolicyCreation();
});

Then(/^I verify count after policy creation$/, () => {
  cy.wait(6000);
  CreatePasswordPolicyPage.verifyCountAfterPolicyCreation();
});

Then(/^I fetch count before policy deletion$/, () => {
  cy.wait(6000);
  CreatePasswordPolicyPage.fetchCountBeforePolicyDeletion();
});

Then(/^I verify count after policy deletion$/, () => {
  cy.wait(6000);
  CreatePasswordPolicyPage.verifyCountAfterPolicyDeletion();
});

And(/^I verify not authorized screen is visible$/, () => {
  CreatePasswordPolicyPage.verifyNotAuthorized();
});

Then(/^I click on update button$/, () => {
  CreatePasswordPolicyPage.clickOnUpdate();
});

And(/^I click on expired password "([^"]*)"$/, (userID) => {
  ViewReseller.clickOnExpiredPassword(userID);
  cy.wait(1000);
});

// ###################  Reseller Methods - Start ################

And(/^I navigate to the Resellers Page$/, () => {
  resellerGeneralInfo.navigateToAddResellerUsingUrl();
});

And(/^I enter reseller info with parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (searchField, searchOperation, searchValue) => {
  CommonUtilities.applyFilter(searchField, searchOperation, searchValue);
  resellerGeneralInfo.clickSearch();
  cy.wait(800);
});

And(/^I click on view reseller option$/, () => {
  resellerGeneralInfo.clickViewReseller();
  cy.wait(800);
});

When(/^I navigate to Reseller user information tab$/, () => {
  cy.contains('Reseller User Information').click();
});

// ###################  Reseller Methods - End ################
