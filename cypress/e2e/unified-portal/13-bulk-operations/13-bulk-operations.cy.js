import {
  When, And, Then,
} from "cypress-cucumber-preprocessor/steps";
import BulkImportHomePage from "../../../pages/unified-portal/inventory/bulk-import-home-page";
import ProductHomePage from '../../../pages/unified-portal/product/product-home-page';
import ViewProductPage from '../../../pages/unified-portal/product/View-Product-Page';
import c2sRulesMainPage from '../../../pages/unified-portal/c2sRules/c2sRules_main_page';
import CreateContractType from '../../../pages/unified-portal/contract/create_contract_page';
import CommonUtilities from "../../../common/Util";

When(/^I navigate to the bulk import page$/, () => {
  BulkImportHomePage.navigateToBulkImportHomepageUsingUrl();
});

And(/^I perform import bulk operation with params "([^"]*)" "([^"]*)"$/, (importType, fileName) => {
  BulkImportHomePage.clickSubmitNewImport();
  BulkImportHomePage.selectSubImportType(importType);
  BulkImportHomePage.clickImportCSV();
  BulkImportHomePage.uploadFile(fileName);
});

And(/^I validate import information with params "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (importSubType, status, username, fileName) => {
  BulkImportHomePage.verifyImportInformation(importSubType, fileName, status, username);
});

And(/^I click refresh and verify data again with params "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (status, totalUploaded, passed, failed) => {
  BulkImportHomePage.refreshDataAndVerifyInfo(status, totalUploaded,
    passed, failed);
});

Then(/^I validate the status "([^"]*)" "([^"]*)"$/, (columnName, value) => {
  BulkImportHomePage.validateColumnStatus(columnName, value);
});

Then(/^I click on filters$/, () => {
  BulkImportHomePage.clickOnFilters();
});

And(/^I select filter column "([^"]*)"$/, (column) => {
  BulkImportHomePage.selectFilterColumn(column);
});

And(/^I select filter option "([^"]*)"$/, (option) => {
  BulkImportHomePage.selectFilterOption(option);
});

And(/^I enter filter value "([^"]*)"$/, (value) => {
  BulkImportHomePage.typeFilterValue(value);
  cy.wait(1000);
});

And(/^I fetch the import id "([^"]*)"$/, (value) => {
  BulkImportHomePage.typeFilterValue(value);
});

And(/^I enter the import id$/, () => {
  BulkImportHomePage.typeImportID();
  cy.wait(900);
});

And(/^Approve the Imported File$/, () => {
  BulkImportHomePage.approveImport();
  cy.wait(900);
});

And(/^Reject the Imported File$/, () => {
  BulkImportHomePage.rejectImport();
  cy.wait(900);
});

And(/^Captured Bulk Import Batch Id$/, () => {
  BulkImportHomePage.captureBatchId();
  cy.wait(900);
});

And(/^I enter filter value as BatchId and Go to Details Screen$/, () => {
  BulkImportHomePage.enterBatchId();
  cy.wait(900);
});

And(/^I click on view button$/, () => {
  BulkImportHomePage.clickOnView();
});

And(/^I wait for 2minutes$/, () => {
  cy.wait(150000);
});

And(/^I wait for 3minutes$/, () => {
  cy.wait(180000);
});

And(/^I reload the page$/, () => {
  cy.reload();
});

And(/^I click on Product Variant View Details Button/, () => {
  ProductHomePage.clickVariant();
  cy.wait(8000);
});

And(/^I click on Product Variant Details View Button/, () => {
  ProductHomePage.clickVariantView();
  cy.wait(8000);
});

When(/^I perform View Product Variant having following parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (PRODUCT_SKU, SUPPLIER_REFERENCE, STATUS) => {
  ViewProductPage.ValidateProductVariantInformation1(PRODUCT_SKU, SUPPLIER_REFERENCE, STATUS);
});

And(/^I navigate to the View Products Page/, () => {
  ProductHomePage.visitProductHomePageUsingUrl();
  cy.wait(8000);
});

And(/^I am able to search existing Product "([^"]*)"$/, (productName) => {
  // ProductHomePage.visitProductHomePageUsingLeftMenu();
  ProductHomePage.visitProductHomePageUsingUrl();
  cy.wait(3000);
  ProductHomePage.clickFilterButton();
  cy.wait(3000);
  cy.debug('select column code from dropdown');
  ProductHomePage.selectColumn('Code');
  cy.wait(5000);
  cy.debug('select operrator equals from dropdown');
  ProductHomePage.selectOperator('equals');
  cy.wait(5000);
  cy.debug('fill filter value :', productName);
  ProductHomePage.fillFilterValue(productName);
  cy.wait(5000);
  cy.debug('Now click filter button');
  ProductHomePage.clickFilterButton();
  cy.wait(3000);
});

Then(/^I navigate to c2s Rules page and verify c2s Rules page title$/, () => {
  c2sRulesMainPage.navigateToC2SRulesUsingUrl();
  cy.wait(15000);
  c2sRulesMainPage.verifyC2SRulePageTitle();
});

When(/^I click on C2S Rule View Button$/, () => {
  cy.wait(15000);
  c2sRulesMainPage.clickOnViewButton();
});

When(/^I Validate "([^"]*)" is visible in the C2S rules$/, (productVariant) => {
  cy.wait(15000);
  c2sRulesMainPage.validateProductVariant(productVariant);
});

When(/^I Validate "([^"]*)" is not visible in the C2S rules$/, (productVariant) => {
  cy.wait(15000);
  c2sRulesMainPage.validateProductVariantNotExist(productVariant);
});

And(/^I navigate to the contracts Page$/, () => {
  CreateContractType.visitContractPageUsingUrl();
  cy.wait(8000);
});

And(/^I select price entry option and validate new price-entry ranges "([^"]*)" for "([^"]*)" are added$/, (priceEntryRanges, product) => {
  CreateContractType.clickOnPrice();
  cy.wait(4000);
  CommonUtilities.clickOnFilters();
  CommonUtilities.selectFilterColumn("Product SKU");
  CommonUtilities.selectFilterOption("Equal");
  CommonUtilities.typeFilterValue(product);
  CommonUtilities.clickOnFilters();
  cy.wait(1000);
  CreateContractType.clickProductViewAction(product);
  CreateContractType.validatePriceEntryRanges(priceEntryRanges);
  cy.wait(2000);
});

And(/^I validate "([^"]*)" is updated for existing price-entry ranges "([^"]*)" of "([^"]*)"$/, (value, priceEntryRanges, product) => {
  CommonUtilities.clickOnFilters();
  CommonUtilities.selectFilterColumn("Product SKU");
  CommonUtilities.selectFilterOption("Equal");
  CommonUtilities.typeFilterValue(product);
  CommonUtilities.clickOnFilters();
  cy.wait(1000);
  CreateContractType.clickProductViewAction(product);
  cy.wait(1000);
  CreateContractType.clickProductViewAction(priceEntryRanges);
  CreateContractType.validateCommissionValue(value);
  cy.wait(1000);
});

And(/^I select price entry option and delete the product "([^"]*)"$/, (product) => {
  CreateContractType.clickOnPrice();
  cy.wait(4000);
  CommonUtilities.clickOnFilters();
  CommonUtilities.selectFilterColumn("Product SKU");
  CommonUtilities.selectFilterOption("Equal");
  CommonUtilities.typeFilterValue(product);
  CommonUtilities.clickOnFilters();
  cy.wait(1000);
  CreateContractType.clickDelete(product);});

And(/^I validate reason of failure contains "([^"]*)"$/, (stringToCheck) => {
  BulkImportHomePage.validateFailureReasonContains(stringToCheck);
});
And(/^I wait for "([^"]*)" miliseconds$/, (miliseconds) => {
  cy.wait(parseInt(miliseconds, 10));
});
