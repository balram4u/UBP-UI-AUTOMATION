/* eslint-disable max-len */
import {
  And, Then, When,
} from 'cypress-cucumber-preprocessor/steps';

import InventoriesHomePage from '../../../pages/unified-portal/inventory/inventories-home-page';
import DetailedInventoryPage from '../../../pages/unified-portal/inventory/detailed-inventory-home-page';
import CommonUtilities from '../../../common/Util';
import SplitInventoriesPage from '../../../pages/unified-portal/inventory/split-inventories-page';
import BoxItemsPage from '../../../pages/unified-portal/inventory/inventories-boxItems-page';

And(/^I navigate to the Inventories Page$/, () => {
  InventoriesHomePage.visitInventoriesHomePageUsingUrl();
  cy.wait(9000);
});

Then(/^I verify Stock In Hand Own Count "([^"]*)"$/, (username) => {
  InventoriesHomePage.verifyStockInHandOwn(username);
});

Then(/^I verify Child Stock Summary Children Count "([^"]*)"$/, (username) => {
  InventoriesHomePage.verifyChildStockSummaryChildrenCount(username);
});

Then(/^I search for particular product with "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (productCategory, productName, productSKU, reseller) => {
  cy.wait(3000);
  InventoriesHomePage.selectProductCategory(productCategory);
  InventoriesHomePage.enterProductName(productName);
  InventoriesHomePage.enterProductSKU(productSKU);
  InventoriesHomePage.enterResellerName(reseller);
  InventoriesHomePage.clickSearch();
  cy.wait(3000);
});

Then(/^I search with multiple product category "([^"]*)" "([^"]*)"$/, (productCategory1, productCategory2) => {
  cy.wait(3000);
  InventoriesHomePage.selectProductCategory(productCategory1);
  cy.wait(3000);
  InventoriesHomePage.selectProductCategory(productCategory2);
  InventoriesHomePage.clickSearch();
});

Then(/^I search with multiple product SKU "([^"]*)" "([^"]*)"$/, (productSKU1, productSKU2) => {
  cy.wait(3000);
  InventoriesHomePage.enterProductSKU(productSKU1);
  InventoriesHomePage.enterProductSKU(productSKU2);
  InventoriesHomePage.clickSearch();
});

Then(/^I search with multiple product name "([^"]*)" "([^"]*)"$/, (productName1, productName2) => {
  cy.wait(3000);
  InventoriesHomePage.enterProductName(productName1);
  InventoriesHomePage.enterProductName(productName2);
  InventoriesHomePage.clickSearch();
});

Then(/^I search with multiple reseller name "([^"]*)" "([^"]*)"$/, (resellerName1, resellerName2) => {
  cy.wait(3000);
  InventoriesHomePage.enterResellerName(resellerName1);
  InventoriesHomePage.enterResellerName(resellerName2);
  InventoriesHomePage.clickSearch();
});

Then(/^I verify searched product availabe in the table with "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (productName, categoryPath, productSKU, productType) => {
  InventoriesHomePage.validateSearchedProductInTable(productName, categoryPath, productSKU, productType);
});

Then(/^I verify Stock In Hand Own Count for "([^"]*)" "([^"]*)"$/, (username, productSKU) => {
  InventoriesHomePage.verifySearchedStockInHandOwn(username, productSKU);
});

Then(/^I verify Child Stock Summary Children Count for "([^"]*)" "([^"]*)"$/, (username, productSKU) => {
  InventoriesHomePage.verifySearchedChildStockSummaryChildrenCount(username, productSKU);
});

Then(/^I click on action button of searched product$/, () => {
  InventoriesHomePage.clickActionOfSearchProduct();
});

Then(/^I click on action button of first boxId available on the screen$/, () => {
  InventoriesHomePage.clickActionOfBoxId();
});

Then(/^I click on action button of first row boxId$/, () => {
  InventoriesHomePage.clickActionOfFirstBoxId();
});

Then(/^I select serial number whose status should be "([^"]*)"$/, (status) => {
  InventoriesHomePage.selectSerialNumber(status);
});

Then(/^I perform manual inventory adjustment with passing "([^"]*)" "([^"]*)"$/, (status, reason) => {
  InventoriesHomePage.clickManualAdjustmentButton();
  InventoriesHomePage.selectStatus(status);
  InventoriesHomePage.enterReason(reason);
  InventoriesHomePage.clickSubmit();
});

Then(/^I validated updated inventory status "([^"]*)"$/, (status) => {
  InventoriesHomePage.validateUpdatedStatus(status);
});

And(/^I navigate to the Detailed Inventory Page$/, () => {
  DetailedInventoryPage.visitDetailedInventoryHomePageUsingUrl();
});

And(/^I get the first serail number available on the protal$/, () => {
  DetailedInventoryPage.getFirstSerialNumber();
});

Then(/^I validate that filters should be work for serial number "([^"]*)" "([^"]*)"$/, (columnName, operator) => {
  DetailedInventoryPage.clickFilterButton();
  cy.wait(1000);
  DetailedInventoryPage.selectColumn(columnName);
  cy.wait(1000);
  DetailedInventoryPage.selectOperator(operator);
  cy.wait(1000);
  DetailedInventoryPage.fillSerialNumber();
  cy.wait(1000);
  DetailedInventoryPage.clickFilterButton();
  cy.wait(1000);
  DetailedInventoryPage.searchedRowVisible();
});

And(/^I sort with parameters "([^"]*)" "([^"]*)"$/, (sortField, sortType) => {
  CommonUtilities.SortBy(sortField, sortType);
  cy.wait(1000);
});

And(/^I enter additional filters with parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (column, operations, value) => {
  CommonUtilities.applyFilter(column, operations, value);
  cy.wait(2000);
});

And(/^I verify page title "([^"]*)"$/, (pageTitle) => {
  cy.wait(2000);
  InventoriesHomePage.verifyPageTitle(pageTitle);
});

And(/^I click on Inventory option$/, () => {
  InventoriesHomePage.clickInventory();
});

And(/^I verify different inventory operations$/, () => {
  InventoriesHomePage.verifyInventoryOperations();
});

When(/^I perform Split Inventory on quantity having more than 2$/, () => {
  SplitInventoriesPage.splitInventories();
});

And(/^I check invertories are spliited correctly$/, () => {
  SplitInventoriesPage.validateSplitInventories();
});

Then(/^I validate the table parameters "([^"]*)" "([^"]*)"$/, (key, value) => {
  BoxItemsPage.validateTableParameters(key, value);
});

Then(/^I validate the table list parameters "([^"]*)" "([^"]*)"$/, (key, value) => {
  BoxItemsPage.validateTableListParameters(key, value);
});

Then(/^I should see all box items are available in the table$/, () => {
  SplitInventoriesPage.verifyBoxList();
});

Then(/^I validate Location Id "([^"]*)"$/, (locationId) => {
  BoxItemsPage.validateLocationId(locationId);
});

Then(/^I click on select column button$/, () => {
  InventoriesHomePage.clickOnSelectColumn();
  cy.wait(800);
});

And(/^I disable & enable the table column view and verify accordingly "([^"]*)"$/, (tableColumnName) => {
  cy.wait(800);
  InventoriesHomePage.tableColumnDisable(tableColumnName);
  cy.wait(800);
  InventoriesHomePage.verifyTableColumnDisabled(tableColumnName);
  cy.wait(800);
  InventoriesHomePage.tableColumnEnable(tableColumnName);
  cy.wait(800);
  InventoriesHomePage.verifyTableColumnEnabled(tableColumnName);
});

And(/^I click on export button$/, () => {
  InventoriesHomePage.clickOnExportButton();
});

And(/^I click on export button in Detailed Inventory Page$/, () => {
  InventoriesHomePage.clickOnExportButtonDetailedInventory();
});

And(/^I click on download button$/, () => {
  InventoriesHomePage.clickOnDownloadButton();
  cy.wait(800);
});

And(/^I click on download button in Detailed Inventory Page$/, () => {
  InventoriesHomePage.clickOnDownloadButtonDetailedInventory();
});

And(/^I read file name "([^"]*)"$/, (fileName) => {
  CommonUtilities.readFileName(fileName);
});

Then(/^I delete file name "([^"]*)"$/, (fileName) => {
  cy.task('deleteFile', fileName);
});

Then(/^I click on view button for inventory "([^"]*)" "([^"]*)"$/, (productSKU) => {
  DetailedInventoryPage.getFirstSerialNumber();
  DetailedInventoryPage.clickOnEyeIcon(productSKU);
});

And(/^I verify data is displayed in tabular form$/, () => {
  InventoriesHomePage.verifyTabularForm();
});

And(/^I uncheck Include own inventory$/, () => {
  InventoriesHomePage.clickIncludeOwnInventory();
});

And(/^I click on search button$/, () => {
  InventoriesHomePage.clickSearch();
});

And(/^I click on columns button$/, () => {
  InventoriesHomePage.clickColumns();
});

And(/^I enter column title "([^"]*)"$/, (columnTitle) => {
  InventoriesHomePage.enterColumnTitle(columnTitle);
});

And(/^I verify toggle list is filtered "([^"]*)"$/, (columnTitle) => {
  InventoriesHomePage.verifyColumnFiltered(columnTitle);
});

And(/^I click on toggle button "([^"]*)"$/, (columnTitle) => {
  InventoriesHomePage.clickToggleButton(columnTitle);
});

Then(/^I click on filters$/, () => {
  InventoriesHomePage.clickOnFilters();
});

And(/^I select filter column "([^"]*)"$/, (column) => {
  InventoriesHomePage.selectFilterColumn(column);
});

And(/^I select filter option "([^"]*)"$/, (option) => {
  InventoriesHomePage.selectFilterOption(option);
});

And(/^I enter filter value "([^"]*)"$/, (value) => {
  InventoriesHomePage.typeFilterValue(value);
  cy.wait(3000);
  InventoriesHomePage.clickOnFilters();
});

And(/^Unchecking the toggle should remove that column from the table "([^"]*)"$/, (columnName) => {
  DetailedInventoryPage.verifyColumnNotVisible(columnName);
});

And(/^I click on rows per page dropdown$/, () => {
  InventoriesHomePage.clickOnRowsPerPageDropdown();
});

And(/^I verify values in rows per page dropdown$/, () => {
  InventoriesHomePage.verifyRowsPerPageDropdownValues();
});

And(/^I select number of rows to be displayed "([^"]*)"$/, (noOfRows) => {
  InventoriesHomePage.selectNoOfRows(noOfRows);
});

And(/^I verify number of rows displayed "([^"]*)"$/, (noOfRows) => {
  InventoriesHomePage.verifyNoOfRowsInTable(noOfRows);
});

And(/^I click on split button$/, () => {
  BoxItemsPage.clickOnSplitButton();
});

And(/^I enter End serial range "([^"]*)"$/, (range) => {
  BoxItemsPage.enterEndSerialRange(range);
});

And(/^I verify alphabets not entered$/, () => {
  BoxItemsPage.verifyEndSerialIsEmpty();
});

And(/^I verify out of range warning$/, () => {
  BoxItemsPage.verifyOutOfRangeWarning();
});

And(/^I verify split boxed popup is opened$/, () => {
  BoxItemsPage.verifySplitBoxesPopup();
});

And(/^I click on create more boxes$/, () => {
  BoxItemsPage.clickCreateMoreBoxes();
});

And(/^I verify product details in table "([^"]*)" "([^"]*)"$/, (columnName, productDetail) => {
  InventoriesHomePage.validateTableListParameters(columnName, productDetail);
  cy.wait(2000);
});

Then(/^I click on first view button for inventory$/, () => {
  DetailedInventoryPage.clickOnFirstEyeIcon();
});

And(/^I click on export button in Box Items Page with "([^"]*)"$/, (state) => {
  BoxItemsPage.clickOnExportButtonDetailedInventory(state);
});

Then(/^I validate the table list parameters in the detail inventories page "([^"]*)" "([^"]*)"$/, (key, value) => {
  DetailedInventoryPage.validateTableListParameters(key, value);
});
