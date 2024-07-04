import {
  And, Then, When,
} from 'cypress-cucumber-preprocessor/steps';
import CommonUtilities from "../../../common/Util";
import resellerHomePage from '../../../pages/unified-portal/reseller/reseller_home_page';
import createNewResellerRolePage from '../../../pages/unified-portal/reseller/create_new_resellerRole_page';

And(/^I navigate to the Reseller Role Page/, () => {
  resellerHomePage.clickOnResellerRolesUsingUrl();
});

When(/^I perform Create Reseller Role having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (roleName, importId, passwordPolicy, addressLock, userId, description) => {
  resellerHomePage.clickOnCreateResellerRole();
  createNewResellerRolePage.fillRoleName(roleName);
  createNewResellerRolePage.fillImportId(importId);
  createNewResellerRolePage.selectPasswordPolicy(passwordPolicy);
  createNewResellerRolePage.fillAddressLock(addressLock);
  createNewResellerRolePage.fillUserIdRegExp(userId);
  createNewResellerRolePage.fillDescription(description);
  createNewResellerRolePage.clicOnSubmit();
});

Then(/^I am able to see the created Reseller Role successfully Type message "([^"]*)"$/, (message) => {
  createNewResellerRolePage.verifySuccessfulMessage(message);
});

And(/^Reseller Role created should be visible inside table "([^"]*)"$/, (role) => {
  resellerHomePage.clickOnFilter();
  resellerHomePage.selectSearchColumn('Role Name');
  resellerHomePage.fillSearchValue(role);
  resellerHomePage.verifyDataInTable(role);
  cy.wait(800);
});

When(/^I perform Edit reseller role having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (roleName, importId, passwordPolicy, addressLock, userId, description) => {
  resellerHomePage.clickOnEditOfResellerRole(roleName);
  createNewResellerRolePage.selectPasswordPolicy(passwordPolicy);
  createNewResellerRolePage.fillRoleDescription(description);
  createNewResellerRolePage.clickOnUpdate();
});

When(/^I perform View reseller "([^"]*)"$/, (role) => {
  resellerHomePage.clickOnViewOfResellerRole(role);
});

Then(/^I am able to validate following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (roleName, importId, addressLock, userId, description) => {
  createNewResellerRolePage.verifyResellerRoleDetails(roleName, importId,
    addressLock, userId, description);
  createNewResellerRolePage.clickOnClose();
});

When(/^I perform Delete reseller "([^"]*)"$/, (role) => {
  resellerHomePage.clickOnDeleteButtonForRole(role);
  resellerHomePage.clickOnDeleteRolePopupYesButton();
});

And(/^I click submit button$/, () => {
  createNewResellerRolePage.clickSubmit();
});

And(/^I click on create reseller role$/, () => {
  resellerHomePage.clickOnCreateResellerRole();
});

And(/^I enter import id and name "([^"]*)" "([^"]*)"$/, (roleName, importId) => {
  createNewResellerRolePage.fillRoleName(roleName);
  createNewResellerRolePage.fillImportId(importId);
});

And(/^I click reset button$/, () => {
  createNewResellerRolePage.clickReset();
});

When(/^I verify import id and name are reset to blank$/, () => {
  createNewResellerRolePage.verifyEmptyResellerImportId();
  createNewResellerRolePage.verifyEmptyResellerTypeName();
});

And(/^I click on export button$/, () => {
  createNewResellerRolePage.clickOnExportButton();
});

And(/^I click on download button$/, () => {
  createNewResellerRolePage.clickOnDownloadButton();
});

And(/^I read file name "([^"]*)"$/, (fileName) => {
  CommonUtilities.readFileName(fileName);
});

Then(/^I delete file name "([^"]*)"$/, (fileName) => {
  cy.task('deleteFile', fileName);
});

Then(/^I click on select column button$/, () => {
  createNewResellerRolePage.clickOnSelectColumn();
});

And(/^I disable & enable the table column view and verify accordingly "([^"]*)"$/, (tableColumnName) => {
  cy.wait(800);
  createNewResellerRolePage.tableColumnDisable(tableColumnName);
  cy.wait(800);
  createNewResellerRolePage.verifyTableColumnDisabled(tableColumnName);
  cy.wait(800);
  createNewResellerRolePage.tableColumnEnable(tableColumnName);
  cy.wait(800);
  createNewResellerRolePage.verifyTableColumnEnabled(tableColumnName);
});

Then(/^I verify import id is not editable$/, () => {
  createNewResellerRolePage.clickOnSelectColumn();
});

And(/^Reseller roles table should be empty$/, () => {
  createNewResellerRolePage.verifyEmptyResellerRolesTable();
});

Then(/^I click on filters$/, () => {
  createNewResellerRolePage.clickOnFilters();
});

And(/^I select filter column "([^"]*)"$/, (column) => {
  createNewResellerRolePage.selectFilterColumn(column);
});

And(/^I select filter option "([^"]*)"$/, (option) => {
  createNewResellerRolePage.selectFilterOption(option);
});

And(/^I enter filter value "([^"]*)"$/, (value) => {
  createNewResellerRolePage.typeFilterValue(value);
});

And(/^Reseller type with name "([^"]*)" should be visible on the screen$/, (resellerType) => {
  createNewResellerRolePage.verifyResellerType(resellerType);
});
