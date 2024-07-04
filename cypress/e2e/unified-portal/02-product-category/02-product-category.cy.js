import {
  When,
  Then,
  And,
} from 'cypress-cucumber-preprocessor/steps';
import CreateProductCategory from '../../../pages/unified-portal/product/Create-Product-Category-Page';
import ProductCategoryHomePage from '../../../pages/unified-portal/product/product-category-home-page';
import ViewProductCategoryPage from "../../../pages/unified-portal/product/view-product-category-page";
import CommonUtilities from "../../../common/Util";
import PortalHomePage from '../../../pages/unified-portal/home/portal-home-page';

And(/^I navigate to the Product Category Page/, () => {
  ProductCategoryHomePage.visitProductCategoriesHomePageUsingUrl();
  cy.wait(8000);
  if (Cypress.env('lighthouse') === true) {
    cy.checkPerformance();
  }
});

When(/^I perform Create Product Category having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (PRODUCT_CATEGORY_NAME, PRODUCT_CATEGORY_STATUS, DESCRIPTION, PRODUCT_PARENT_CATEGORY, PRODUCT_WORKFLOW, PRODUCT_TAX, IMAGE_NAME, DATANAME, DATAVALUE) => {
  ProductCategoryHomePage.clickCreateProductCategoriesButton();
  CreateProductCategory.createProductCategories(PRODUCT_CATEGORY_NAME, PRODUCT_CATEGORY_STATUS,
    // eslint-disable-next-line max-len
    DESCRIPTION, PRODUCT_PARENT_CATEGORY, PRODUCT_WORKFLOW, PRODUCT_TAX, IMAGE_NAME, DATANAME, DATAVALUE);
});

And(/^I am able to search existing Product Categories "([^"]*)"$/, (PRODUCT_CATEGORY_NAME) => {
  ProductCategoryHomePage.clickFilterButton();
  ProductCategoryHomePage.selectColumn('Name');
  ProductCategoryHomePage.selectOperator('Equal');
  ProductCategoryHomePage.fillFilterValue(PRODUCT_CATEGORY_NAME);
  ProductCategoryHomePage.clickFilterButton();
  ProductCategoryHomePage.waitForproductCategoryIntercept();
});

And(/^Product Categories created should be visible inside table "([^"]*)"$/, (ACCOUNT_TYPE_ID) => {
  ProductCategoryHomePage.verifyTableCount(ACCOUNT_TYPE_ID);
});

When(/^I perform Edit Product Category having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (PRODUCT_CATEGORY_NAME, PRODUCT_CATEGORY_STATUS, DESCRIPTION, PRODUCT_PARENT_CATEGORY, PRODUCT_WORKFLOW, PRODUCT_TAX) => {
  cy.wait(4000);
  ProductCategoryHomePage.clickEditButton();
  cy.wait(4000);
  CreateProductCategory.enterName(PRODUCT_CATEGORY_NAME);
  CreateProductCategory.fillProductCategoryStatus(PRODUCT_CATEGORY_STATUS);
  CreateProductCategory.fillDescription(DESCRIPTION);
  CreateProductCategory.fillProductParentCategory(PRODUCT_PARENT_CATEGORY);
  CreateProductCategory.fillProductWorkflow(PRODUCT_WORKFLOW);
  CreateProductCategory.fillProductTaxInformation(PRODUCT_TAX);
  CreateProductCategory.clickUpdateButton();
});

And(/^I verify the product category in view page "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (PRODUCT_CATEGORY_NAME, PRODUCT_CATEGORY_STATUS, DESCRIPTION, PRODUCT_PARENT_CATEGORY, PRODUCT_TAX) => {
  ProductCategoryHomePage.clickViewButton();
  ViewProductCategoryPage.verifyData(PRODUCT_CATEGORY_NAME, PRODUCT_CATEGORY_STATUS,
    DESCRIPTION, PRODUCT_PARENT_CATEGORY, PRODUCT_TAX);
});

And(/^I click on export button$/, () => {
  ProductCategoryHomePage.clickOnExportButton();
});

And(/^I click on download button$/, () => {
  ProductCategoryHomePage.clickOnDownloadButton();
});

And(/^I read file name "([^"]*)"$/, (fileName) => {
  CommonUtilities.readFileName(fileName);
});

Then(/^I delete file name "([^"]*)"$/, (fileName) => {
  cy.task('deleteFile', fileName);
});

And(/^I Delete the Product Category$/, () => {
  ProductCategoryHomePage.clickDeleteProductCategory();
});

When(/^I perform Delete Main Product Category operation even it has Sub Product Category$/, () => {
  ProductCategoryHomePage.clickDeleteProductCategory();
});

When(/^I cancel the delete operation$/, () => {
  ProductCategoryHomePage.clickDeleteNoButton();
});

When(/^I perform Delete Product Category operation$/, () => {
  ProductCategoryHomePage.clickDeleteProductCategory();
});

When(/^I validate delete button should not be visible$/, () => {
  ProductCategoryHomePage.deleteShouldNotVisible();
});

When(/^I perform Edit Product Category to validate Date format "([^"]*)" "([^"]*)" "([^"]*)"$/, (productCategoryName, availableFrom, availableUntil) => {
  ProductCategoryHomePage.clickEditButton(productCategoryName);
  CreateProductCategory.validateDateFormat(availableFrom, availableUntil);
  CreateProductCategory.clickUpdateButton();
});

And(/^I verify product should not be available "([^"]*)"$/, (PRODUCT_CATEGORY_NAME) => {
  ProductCategoryHomePage.productShouldNotVisible(PRODUCT_CATEGORY_NAME);
});

And(/^I scroll to Bottom if area is scrollable$/, () => {
  ProductCategoryHomePage.scrollToBottomWithCondition();
});

When(/^I perform Create Product Category having description more than 255 charaters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (PRODUCT_CATEGORY_NAME, PRODUCT_CATEGORY_STATUS, DESCRIPTION, CHARACTER_COUNT) => {
  ProductCategoryHomePage.clickCreateProductCategoriesButton();
  CreateProductCategory.fillProductCategoryName(PRODUCT_CATEGORY_NAME);
  CreateProductCategory.fillProductCategoryStatus(PRODUCT_CATEGORY_STATUS);
  CreateProductCategory.fillDescriptionWithCharacterLength(DESCRIPTION, CHARACTER_COUNT);
});

When(/^I perform Create Product Category having name more than 60 charaters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (PRODUCT_CATEGORY_NAME, PRODUCT_CATEGORY_STATUS, DESCRIPTION, CHARACTER_COUNT) => {
  ProductCategoryHomePage.clickCreateProductCategoriesButton();
  CreateProductCategory.fillProductCategoryNameWithCharacterLength(PRODUCT_CATEGORY_NAME, CHARACTER_COUNT);
  CreateProductCategory.fillProductCategoryStatus(PRODUCT_CATEGORY_STATUS);
  CreateProductCategory.fillDescription(DESCRIPTION);
});

Then(/^I click submit button$/, () => {
  CreateProductCategory.clickOnSubmitButton();
});

When(/^I validate Product should not be visible$/, () => {
  ProductCategoryHomePage.productShouldNotVisible();
});

Then(/^I validate create product category button should not be visible$/, () => {
  ProductCategoryHomePage.productCategoryButtonShouldNotVisible();
});

Then(/^I validate update button should not be visible$/, () => {
  ProductCategoryHomePage.updateShouldNotVisible();
});

Then(/^I validate Product menu should not be visible$/, () => {
  PortalHomePage.productShouldNotVisible();
});
