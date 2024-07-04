import {
  When, And, Then,
} from 'cypress-cucumber-preprocessor/steps';
import CommonUtilities from "../../../common/Util";
import ResellerTypesPage from '../../../pages/unified-portal/reseller/reseller-types-home-page';
import CreateResellerTypesPage from '../../../pages/unified-portal/reseller/create-reseller-type-page';
import EditResellerTypesPage from '../../../pages/unified-portal/reseller/edit-reseller-type-page';

And(/^I navigate to the Reseller Types Page/, () => {
  ResellerTypesPage.visitResellerTypesPageUsingUrl();
});

When(/^I enter reseller type information "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (IMPORT_ID, NAME, DESCRIPTION, ROLE, SELECT_MPOS_SUPPORT_TYPE, SELECT_REPORT_GROUP) => {
  ResellerTypesPage.clickCreateResellerTypeButton();
  // eslint-disable-next-line max-len
  CreateResellerTypesPage.createResellerType(IMPORT_ID, NAME, DESCRIPTION, ROLE, SELECT_MPOS_SUPPORT_TYPE, SELECT_REPORT_GROUP);
});

And(/^I select reseller type settings "([^"]*)" "([^"]*)" "([^"]*)"$/, (setting1, setting2, setting3) => {
  CreateResellerTypesPage.selectResellerTypeSettings(setting1);
  CreateResellerTypesPage.selectResellerTypeSettings(setting2);
  CreateResellerTypesPage.selectResellerTypeSettings(setting3);
});

And(/^I select sub-reseller types "([^"]*)" "([^"]*)"$/, (subResellerType1, subResellerType2) => {
  CreateResellerTypesPage.selectSubResellerTypes(subResellerType1);
  CreateResellerTypesPage.selectSubResellerTypes(subResellerType2);
});

And(/^I select allowed-reseller types "([^"]*)"$/, (allowedResellerType) => {
  CreateResellerTypesPage.allowedResellerTypes(allowedResellerType);
});

And(/^Reseller Types created should be visible inside table "([^"]*)"$/, (IMPORT_ID) => {
  ResellerTypesPage.filterResellerType(IMPORT_ID);
  CreateResellerTypesPage.verifyTableCount(IMPORT_ID);
});

When(/^I perform edit Reseller Types having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (IMPORT_ID, NAME, DESCRIPTION, SELECT_MPOS_SUPPORT_TYPE, SELECT_REPORT_GROUP, RESELLERT_TYPE_SETTINGS) => {
  ResellerTypesPage.filterResellerType(IMPORT_ID);
  ResellerTypesPage.clickEditResellerTypeButton(IMPORT_ID);
  EditResellerTypesPage.editResellerType(NAME, DESCRIPTION, SELECT_MPOS_SUPPORT_TYPE,
    SELECT_REPORT_GROUP, RESELLERT_TYPE_SETTINGS);
});

When(/^I edit fields "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (NAME, DESCRIPTION, SELECT_MPOS_SUPPORT_TYPE, SELECT_REPORT_GROUP, RESELLERT_TYPE_SETTINGS) => {
  EditResellerTypesPage.editResellerType(NAME, DESCRIPTION, SELECT_MPOS_SUPPORT_TYPE,
    SELECT_REPORT_GROUP, RESELLERT_TYPE_SETTINGS);
});

And(/^I search for reseller type with import ID "([^"]*)"$/, (importID) => {
  ResellerTypesPage.filterResellerType(importID);
});

And(/^I click on edit button "([^"]*)"$/, (importID) => {
  ResellerTypesPage.clickEditResellerTypeButton(importID);
});

And(/^I click on view button "([^"]*)"$/, (importID) => {
  ResellerTypesPage.clickViewResellerTypeButton(importID);
});

And(/^I verify import id is disabled$/, () => {
  CreateResellerTypesPage.verifyImportIdDisabled();
});

When(/^I perform View Reseller Types having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (IMPORT_ID, NAME, DESCRIPTION, SELECT_MPOS_SUPPORT_TYPE, SELECT_REPORT_GROUP, RESELLERT_TYPE_SETTINGS) => {
  ResellerTypesPage.filterResellerType(IMPORT_ID);
  ResellerTypesPage.clickViewResellerTypeButton(IMPORT_ID);
  // eslint-disable-next-line max-len
  EditResellerTypesPage.viewResellerType(IMPORT_ID, NAME, DESCRIPTION, SELECT_MPOS_SUPPORT_TYPE,
    SELECT_REPORT_GROUP, RESELLERT_TYPE_SETTINGS);
});

And(/^I verify all the reseller information is available on screen$/, () => {
  CreateResellerTypesPage.verifyImportIdDisabled();
});

When(/^I click on the Parent button and verify reseller types "([^"]*)" "([^"]*)" "([^"]*)"$/, (IMPORT_ID, NAME, SUB_IMPORT_ID) => {
  ResellerTypesPage.filterResellerType(SUB_IMPORT_ID);
  ResellerTypesPage.clickParentButton();
  EditResellerTypesPage.verifyResellerType(IMPORT_ID, NAME);
});

When(/^I perform Delete Reseller Types having following parameters "([^"]*)"$/, (IMPORT_ID) => {
  ResellerTypesPage.filterResellerType(IMPORT_ID);
  ResellerTypesPage.clickDeleteButton();
});

And(/^I click submit button$/, () => {
  ResellerTypesPage.clickSubmit();
});

And(/^I click on create reseller type$/, () => {
  ResellerTypesPage.clickCreateResellerTypeButton();
});

When(/^I enter import id and name "([^"]*)" "([^"]*)"$/, (IMPORT_ID, NAME) => {
  CreateResellerTypesPage.enterResellerTypeName(NAME);
  CreateResellerTypesPage.enterResellerImportId(IMPORT_ID);
});

And(/^I click reset button$/, () => {
  CreateResellerTypesPage.clickReset();
});

When(/^I verify import id and name are reset to blank$/, () => {
  CreateResellerTypesPage.verifyEmptyResellerImportId();
  CreateResellerTypesPage.verifyEmptyResellerTypeName();
});

And(/^I click next button$/, () => {
  CreateResellerTypesPage.clickNext();
});

And(/^Validate the parent child relationship in reseller type$/, () => {
  CreateResellerTypesPage.clickNext();
});

And(/^I click on export button$/, () => {
  CreateResellerTypesPage.clickOnExportButton();
});

And(/^I click on download button$/, () => {
  CreateResellerTypesPage.clickOnDownloadButton();
});

And(/^I read file name "([^"]*)"$/, (fileName) => {
  CommonUtilities.readFileName(fileName);
});

Then(/^I delete file name "([^"]*)"$/, (fileName) => {
  cy.task('deleteFile', fileName);
});

Then(/^I verify Sub-Reseller Type Settings DropDown$/, () => {
  CreateResellerTypesPage.verifySubResellerTypeDropdown();
});

Then(/^I verify Reseller Type Settings "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ALLOW_SPECIFICATION_OF_ID, AUTOMATIC_GENERATION_OF_ID, WEB_SHOP, WEB_LOGIN, PARENTLESS, USED, TERMINALS, TOP_LEVEL_RESELLER) => {
  CreateResellerTypesPage.verifyResellerTypeSettings(ALLOW_SPECIFICATION_OF_ID);
  CreateResellerTypesPage.verifyResellerTypeSettings(AUTOMATIC_GENERATION_OF_ID);
  CreateResellerTypesPage.verifyResellerTypeSettings(WEB_SHOP);
  CreateResellerTypesPage.verifyResellerTypeSettings(WEB_LOGIN);
  CreateResellerTypesPage.verifyResellerTypeSettings(PARENTLESS);
  CreateResellerTypesPage.verifyResellerTypeSettings(USED);
  CreateResellerTypesPage.verifyResellerTypeSettings(TERMINALS);
  CreateResellerTypesPage.verifyResellerTypeSettings(TOP_LEVEL_RESELLER);
});

Then(/^I verify not authorized when tried to access reseller types page$/, () => {
  ResellerTypesPage.verifyNotAuthorized();
});

Then(/^I click on filters$/, () => {
  cy.wait(1000);
  ResellerTypesPage.clickOnFilters();
  cy.wait(1000);
});

And(/^I select filter column "([^"]*)"$/, (column) => {
  ResellerTypesPage.selectFilterColumn(column);
});

And(/^I select filter option "([^"]*)"$/, (option) => {
  ResellerTypesPage.selectFilterOption(option);
});

And(/^I enter filter value "([^"]*)"$/, (value) => {
  ResellerTypesPage.typeFilterValue(value);
});

And(/^Reseller type with name "([^"]*)" should be visible on the screen$/, (resellerType) => {
  ResellerTypesPage.verifyResellerType(resellerType);
});

And(/^Reseller types table should be empty$/, () => {
  ResellerTypesPage.verifyEmptyResellerTypeTable();
});

Then(/^I verify filter options$/, () => {
  cy.wait(1000);
  ResellerTypesPage.verifyFilterOptions();
});

Then(/^Column with toggle option should be visible "([^"]*)"$/, (column) => {
  ResellerTypesPage.verifyColumnWithToggleVisible(column);
});

Then(/^I toggle off the button for column "([^"]*)"$/, (toggleButton) => {
  ResellerTypesPage.clickToggle(toggleButton);
});

And(/^I click on columns button$/, () => {
  ResellerTypesPage.clickColumns();
});

And(/^I click on show all button$/, () => {
  ResellerTypesPage.showColumns();
});

And(/^I click on hide all button$/, () => {
  ResellerTypesPage.hideColumns();
});

And(/^I search for any column "([^"]*)"$/, (columnName) => {
  ResellerTypesPage.searchColumn(columnName);
});

And(/^I verify all columns are hidden on screen$/, () => {
  cy.wait(1000);
  ResellerTypesPage.verifyColumnsHidden();
});

And(/^I verify all columns are visible on screen$/, () => {
  cy.wait(1000);
  ResellerTypesPage.verifyColumnsVisible();
});
