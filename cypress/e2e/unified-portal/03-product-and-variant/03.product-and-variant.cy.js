import {
  When, And,
} from 'cypress-cucumber-preprocessor/steps';
import CreateProductPage from '../../../pages/unified-portal/product/create-product-page';
import ProductVariantPage from '../../../pages/unified-portal/product/product-variant-page';
import ProductHomePage from '../../../pages/unified-portal/product/product-home-page';
import ViewProductPage from '../../../pages/unified-portal/product/View-Product-Page';
import ProductCategoryHomePage from '../../../pages/unified-portal/product/product-category-home-page';
import CommonUtilities from "../../../common/Util";

And(/^I navigate to the Product Category Page/, () => {
  ProductCategoryHomePage.visitProductCategoriesHomePageUsingLeftMenu();
  if (Cypress.env('lighthouse') === true) {
    cy.checkPerformance();
  }
});

And(/^I navigate to the View Products Page/, () => {
  ProductHomePage.visitProductHomePageUsingUrl();
  cy.wait(8000);
});

When(/^I perform Create Product having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (PRODUCT_NAME, PRODUCT_CODE, DESCRIPTION, SUPPLIERID, PRODUCT_TYPE, PRODUCT_WORKFLOW, PRODUCT_CATEGORY, PRODUCT_TAX, DATANAME, DATAVALUE, PRODUCTSKU, SUPPLIER_REFERENCE, STATUS, TERMS_AND_CONDITIONS, EANCODE, DATANAME_VARIENT, DATAVALUE_VARIENT, VARIANT_CURRENCY, VARIANT_PRICE, VARIANT_NAME, VARIANT_DESCRIPTION) => {
  ProductHomePage.clickCreateProductButton();
  CreateProductPage.clickOnCreateProductVariant();
  ProductVariantPage.fillProductVariantInformation(
    PRODUCTSKU, SUPPLIER_REFERENCE, STATUS,
    TERMS_AND_CONDITIONS, EANCODE,
    DATANAME_VARIENT, DATAVALUE_VARIENT, VARIANT_CURRENCY, VARIANT_PRICE, VARIANT_NAME, VARIANT_DESCRIPTION,
  );
  ProductVariantPage.verifyProductVariantAdded();
  if (PRODUCT_NAME !== "") {
    CreateProductPage.fillProductName(PRODUCT_NAME);
  }
  if (PRODUCT_CODE !== "") {
    CreateProductPage.fillProductCode(PRODUCT_CODE);
  }
  CreateProductPage.fillDescription(DESCRIPTION);
  CreateProductPage.fillSupplierID(SUPPLIERID);
  CreateProductPage.selectProductType(PRODUCT_TYPE);
  CreateProductPage.fillAppliedFromDate();
  CreateProductPage.fillAppliedUntillDate();
  CreateProductPage.selectProductWorkflow(PRODUCT_WORKFLOW);
  if (PRODUCT_CATEGORY !== "") {
    CreateProductPage.selectProductCategory(PRODUCT_CATEGORY);
  }
  CreateProductPage.fillProductTaxInformation(PRODUCT_TAX);
  if (DATANAME !== "") {
    CreateProductPage.addMultipleData(DATANAME, DATAVALUE);
  }
  CreateProductPage.submitProduct();
});

And(/^I am able to search existing Product "([^"]*)"$/, (productName) => {
  // ProductHomePage.visitProductHomePageUsingLeftMenu();
  ProductHomePage.visitProductHomePageUsingUrl();
  cy.wait(5000);
  ProductHomePage.clickFilterButton();
  cy.wait(3000);
  cy.debug('select column code from dropdown');
  ProductHomePage.selectColumn('Code');
  cy.wait(3000);
  cy.debug('select operrator equals from dropdown');
  ProductHomePage.selectOperator('equals');
  cy.wait(3000);
  cy.debug('fill filter value :', productName);
  ProductHomePage.fillFilterValue(productName);
  cy.wait(3000);
  cy.debug('Now click filter button');
  ProductHomePage.clickFilterButton();
  cy.wait(2000);
});

And(/^Product created should be visible inside table "([^"]*)"$/, (productName) => {
  ProductHomePage.verifyTableCount(productName);
});

When(/^I perform Edit Product having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (PRODUCT_NAME, PRODUCT_CODE, DESCRIPTION, SUPPLIERID, PRODUCT_TYPE, PRODUCT_WORKFLOW, PRODUCT_CATEGORY, PRODUCT_TAX, DATANAME, DATAVALUE, PRODUCTSKU, SUPPLIER_REFERENCE, STATUS, TERMS_AND_CONDITIONS, EANCODE, DATANAME_VARIENT, DATAVALUE_VARIENT, VARIANT_CURRENCY, VARIANT_PRICE, PRODUCTSKU_STATUS, IMAGE_FILE ) => {
  ProductHomePage.clickEditButton();
  ProductVariantPage.clickVariantEditButton();
  cy.wait(1000);
  ProductVariantPage.fillTermsAndConditions(TERMS_AND_CONDITIONS);
  cy.wait(1000);
  ProductVariantPage.fillEANCode(EANCODE);
  cy.wait(1000);
  ProductVariantPage.selectStatus(PRODUCTSKU_STATUS);
  cy.wait(1000);
  ProductVariantPage.fillUnitPrice(VARIANT_PRICE);
  cy.wait(1000);
  if (PRODUCTSKU_STATUS == "DISABLED") {
    ProductVariantPage.verifyProductSKUDisabled();
  }
  ProductVariantPage.uploadImage(IMAGE_FILE);
  cy.wait(1000);
  ProductVariantPage.clickSubmitButton();
  cy.wait(1000);
  ProductVariantPage.verifyEditProductVariantAdded();
  cy.wait(1000);
  CreateProductPage.fillProductName(PRODUCT_NAME);
  cy.wait(1000);
  CreateProductPage.fillProductCode(PRODUCT_CODE);
  cy.wait(1000);
  CreateProductPage.fillDescription(DESCRIPTION);
  cy.wait(1000);
  CreateProductPage.fillSupplierID(SUPPLIERID);
  cy.wait(1000);
  CreateProductPage.selectProductType(PRODUCT_TYPE);
  cy.wait(1000);
  CreateProductPage.selectProductWorkflow(PRODUCT_WORKFLOW);
  cy.wait(1000);
  CreateProductPage.selectProductCategory(PRODUCT_CATEGORY);
  cy.wait(1000);
  CreateProductPage.fillProductTaxInformation(PRODUCT_TAX);
  if (DATANAME !== "") {
    CreateProductPage.fillDataName(DATANAME);
    CreateProductPage.fillDataValue(DATAVALUE);
  } else {
    CreateProductPage.deleteDataField();
  }
  cy.wait(1000);
  CreateProductPage.submitProduct();
  cy.wait(1000);
});

When(/^I perform View Product and Variant having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (PRODUCT_NAME, PRODUCT_CODE, DESCRIPTION, PRODUCT_TYPE, PRODUCT_WORKFLOW, PRODUCT_CATEGORY, PRODUCTSKU, SUPPLIER_REFERENCE, STATUS, VARIANT_CURRENCY, VARIANT_PRICE) => {
  ProductHomePage.clickViewProduct();
  cy.wait(5000);
  ViewProductPage.ValidateProductInformation(PRODUCT_NAME, PRODUCT_CODE, DESCRIPTION, PRODUCT_TYPE,
    PRODUCT_WORKFLOW, PRODUCT_CATEGORY);
  ViewProductPage.ValidateProductVariantInformation(PRODUCTSKU, SUPPLIER_REFERENCE, STATUS,
    VARIANT_CURRENCY, VARIANT_PRICE);
});

When(/^I perform Create multiple Product Variant having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (PRODUCT_NAME, PRODUCTSKU, SUPPLIER_REFERENCE, STATUS, TERMS_AND_CONDITIONS, EANCODE, DATANAME_VARIENT, DATAVALUE_VARIENT, VARIANT_CURRENCY, VARIANT_PRICE) => {
  ProductHomePage.clickEditButton();
  cy.wait(2000);
  CreateProductPage.clickOnCreateProductVariant();
  cy.wait(2000);
  ProductVariantPage.fillProductVariantInformationByClickingOnEditProduct(PRODUCTSKU, SUPPLIER_REFERENCE, STATUS, TERMS_AND_CONDITIONS, EANCODE,
    DATANAME_VARIENT, DATAVALUE_VARIENT, VARIANT_CURRENCY, VARIANT_PRICE);
});

When(/^I perform View multiple Product Variant having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (PRODUCT_NAME, PRODUCTSKU, SUPPLIER_REFERENCE, STATUS, TERMS_AND_CONDITIONS, VARIANT_CURRENCY, VARIANT_PRICE) => {
  ProductHomePage.clickViewVariant();
  cy.wait(3000);
  ProductVariantPage.ValidateProductVariantInformation(PRODUCTSKU, SUPPLIER_REFERENCE, STATUS,
    VARIANT_CURRENCY, VARIANT_PRICE, TERMS_AND_CONDITIONS);
});

When(/^I perform Delete Product operation$/, () => {
  ProductHomePage.clickDeleteProduct();
});

When(/^I perform Delete Main Product Category operation even it has Sub Product Category$/, () => {
  ProductCategoryHomePage.clickDeleteProductCategory();
});

When(/^I perform Delete Product Category operation$/, () => {
  ProductCategoryHomePage.clickDeleteProductCategory();
});

When(/^I cancel the delete operation$/, () => {
  ProductCategoryHomePage.clickDeleteNoButton();
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

When(/^I perform Edit upsell products selection having following parameters "([^"]*)" "([^"]*)"$/, (UPSELL_OPTION, PRODUCT_SKU) => {
  ProductHomePage.clickEditButton();
  ProductVariantPage.clickVariantEditButton();
  ProductVariantPage.fillUpSellOption(UPSELL_OPTION);
  if (UPSELL_OPTION === 'Static') {
    ProductVariantPage.fillProductSKU(PRODUCT_SKU);
  }
  ProductVariantPage.clickSubmitButton();
  cy.wait(1000);
  ProductVariantPage.verifyEditProductVariantAdded();
  CreateProductPage.submitProduct();
});

When(/^I perform Create Product with invalid data having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (PRODUCT_NAME, PRODUCT_CODE, DESCRIPTION, SUPPLIERID, PRODUCT_TYPE, PRODUCT_WORKFLOW, PRODUCT_CATEGORY, PRODUCT_TAX, DATANAME, DATAVALUE, PRODUCTSKU, SUPPLIER_REFERENCE, STATUS, TERMS_AND_CONDITIONS, EANCODE, DATANAME_VARIENT, DATAVALUE_VARIENT, VARIANT_CURRENCY, VARIANT_PRICE, VARIANT_NAME, VARIANT_DESCRIPTION) => {
  ProductHomePage.clickCreateProductButton();
  CreateProductPage.clickOnCreateProductVariant();
  ProductVariantPage.fillProductVariantInformation(
    PRODUCTSKU, SUPPLIER_REFERENCE, STATUS,
    TERMS_AND_CONDITIONS, EANCODE,
    DATANAME_VARIENT, DATAVALUE_VARIENT, VARIANT_CURRENCY, VARIANT_PRICE,
    VARIANT_NAME, VARIANT_DESCRIPTION,
  );
  CreateProductPage.fillProductName(PRODUCT_NAME);
  if (PRODUCT_CODE !== "") {
    CreateProductPage.fillProductCode(PRODUCT_CODE);
  }
  CreateProductPage.fillDescription(DESCRIPTION);
  CreateProductPage.fillSupplierID(SUPPLIERID);
  CreateProductPage.selectProductType(PRODUCT_TYPE);
  CreateProductPage.fillAppliedFromDate();
  CreateProductPage.fillAppliedUntillDate();
  CreateProductPage.selectProductWorkflow(PRODUCT_WORKFLOW);
  CreateProductPage.selectProductCategory(PRODUCT_CATEGORY);
  CreateProductPage.fillProductTaxInformation(PRODUCT_TAX);
  if (DATANAME !== "") {
    CreateProductPage.addData();
    CreateProductPage.fillDataName(DATANAME);
    CreateProductPage.fillDataValue(DATAVALUE);
  }
});

When(/^I click submit button$/, () => {
  CreateProductPage.submitProduct();
});

When(/^I click product variant submit button$/, () => {
  ProductVariantPage.clickOnVariantSubmitButton();
});

And(/^I scroll to Bottom if area is scrollable$/, () => {
  ProductHomePage.scrollToBottomWithCondition();
});

When(/^I perform Update Product Variant with Currency with more than 60characters "([^"]*)" "([^"]*)"$/, (VARIANT_CURRENCY, CHARACTER_LENGTH) => {
  ProductHomePage.clickEditButton();
  ProductVariantPage.clickVariantEditButton();
  ProductVariantPage.fillVariantCurrencyWithCharacterLength(VARIANT_CURRENCY, CHARACTER_LENGTH);
  ProductVariantPage.clickSubmitButton();
  cy.wait(1000);
});

When(/^I perform Update Product Variant EAN code with more than 255characters "([^"]*)" "([^"]*)"$/, (EANCODE, CHARACTER_LENGTH) => {
  ProductHomePage.clickEditButton();
  ProductVariantPage.clickVariantEditButton();
  ProductVariantPage.fillVariantEANCodeWithCharacterLength(EANCODE, CHARACTER_LENGTH);
  ProductVariantPage.clickSubmitButton();
  cy.wait(1000);
});

When(/^I perform Create Product Variant with Invalid dates "([^"]*)" "([^"]*)" "([^"]*)"$/, (PRODUCT_NAME, PRODUCT_CODE, PRODUCTSKU) => {
  ProductHomePage.clickCreateProductButton();
  CreateProductPage.clickOnCreateProductVariant();
  ProductVariantPage.fillProductSKU(PRODUCTSKU);
  ProductVariantPage.fillAppliedFromDate();
  ProductVariantPage.fillAppliedUntillDate();
  ProductVariantPage.clickOnVariantSubmitButton();
  if (PRODUCT_NAME !== "") {
    CreateProductPage.fillProductName(PRODUCT_NAME);
  }
  if (PRODUCT_CODE !== "") {
    CreateProductPage.fillProductCode(PRODUCT_CODE);
  }
  CreateProductPage.submitProduct();
});

When(/^I perform Create Product Variant with EAN code having more than 255characters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (PRODUCT_NAME, PRODUCT_CODE, EANCODE, CHARACTER_LENGTH, PRODUCTSKU) => {
  ProductHomePage.clickCreateProductButton();
  CreateProductPage.clickOnCreateProductVariant();
  ProductVariantPage.fillProductSKU(PRODUCTSKU);
  ProductVariantPage.fillVariantEANCodeWithCharacterLength(EANCODE, CHARACTER_LENGTH);
  ProductVariantPage.clickOnVariantSubmitButton();
  if (PRODUCT_NAME !== "") {
    CreateProductPage.fillProductName(PRODUCT_NAME);
  }
  if (PRODUCT_CODE !== "") {
    CreateProductPage.fillProductCode(PRODUCT_CODE);
  }
  CreateProductPage.submitProduct();
});

When(/^I perform Create Product Variant with Currency field having more than 60characters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (PRODUCT_NAME, PRODUCT_CODE, VARIANT_CURRENCY, CHARACTER_LENGTH, PRODUCTSKU) => {
  ProductHomePage.clickCreateProductButton();
  CreateProductPage.clickOnCreateProductVariant();
  ProductVariantPage.fillProductSKU(PRODUCTSKU);
  ProductVariantPage.fillVariantCurrencyWithCharacterLength(VARIANT_CURRENCY, CHARACTER_LENGTH);
  ProductVariantPage.clickOnVariantSubmitButton();
  if (PRODUCT_NAME !== "") {
    CreateProductPage.fillProductName(PRODUCT_NAME);
  }
  if (PRODUCT_CODE !== "") {
    CreateProductPage.fillProductCode(PRODUCT_CODE);
  }
  CreateProductPage.submitProduct();
});

When(/^I validate Product should not be visible$/, () => {
  ProductHomePage.productShouldNotVisible();
});

Then(/^I validate delete button should not be visible$/, () => {
  ProductHomePage.deleteShouldNotVisible();
});

When(/^I click on variant option$/, () => {
  ProductHomePage.clickVariant();
});

Then(/^I validate update button should not be visible$/, () => {
  ProductHomePage.updateShouldNotVisible();
});

When(/^I perform Delete Product Variant operation$/, () => {
  ProductHomePage.clickDeleteProduct();
});

When(/^I perform create product variant having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (PRODUCTSKU, SUPPLIER_REFERENCE, STATUS, TERMS_AND_CONDITIONS, EANCODE, DATANAME_VARIENT, DATAVALUE_VARIENT, VARIANT_CURRENCY, VARIANT_PRICE) => {
  CreateProductPage.clickOnCreateProductVariant();
  ProductVariantPage.fillProductVariantInformationByClickingOnEditProduct(PRODUCTSKU, SUPPLIER_REFERENCE, STATUS, TERMS_AND_CONDITIONS, EANCODE, DATANAME_VARIENT, DATAVALUE_VARIENT, VARIANT_CURRENCY, VARIANT_PRICE);
});

When(/^I perform Delete Product Variant operation from multiple variants$/, () => {
  ProductHomePage.clickDeleteProductVariants();
});

When(/^I should be able to view publish catalogue button/, () => {
  ProductHomePage.checkPublishCatalogueButton();
});

And(/^I should be able publish product catalogue by clicking on publish catalogue button having following parameters "([^"]*)"$/, (REMARKS) => {
  ProductHomePage.publishCatalogue(REMARKS);
});

Then(/^I click Create Product button/, () => {
  ProductHomePage.clickCreateProductButton();
});

And(/^I click on Create Product Variant button/, () => {
  CreateProductPage.clickOnCreateProductVariant();
});

Then(/^I click on Select Product Variant Template button/, () => {
  CreateProductPage.clickOnSelectVariantTemplateButton();
});

And(/^I provide template type "([^"]*)"$/, (TEMPLATE_TYPE) => {
  CreateProductPage.provideTemplateType(TEMPLATE_TYPE);
  cy.wait(1000);
});

Then(/^I enter "([^"]*)" and its value as "([^"]*)"$/, (FIELD_NAME, FIELD_VALUE) => {
  CreateProductPage.fillFieldValue(FIELD_NAME, FIELD_VALUE);
});

Then(/^I select "([^"]*)" and its value as "([^"]*)"$/, (FIELD_NAME, FIELD_VALUE) => {
  CreateProductPage.selectFieldValue(FIELD_NAME, FIELD_VALUE);
});

Then(/^I verfiy "([^"]*)" and its value as "([^"]*)"$/, (FIELD_NAME, FIELD_VALUE) => {
  CreateProductPage.verifyFieldValue(FIELD_NAME, FIELD_VALUE);
});

Then(/^I verfiy "([^"]*)" and its value as "([^"]*)" should not exist$/, (FIELD_NAME, FIELD_VALUE) => {
  CreateProductPage.verifyFieldValueNotExist(FIELD_NAME, FIELD_VALUE);
});

And(/^I click on template Submit button/, () => {
  CreateProductPage.clickTemplateSubmitButton();
});

And(/^I click on template Reset button/, () => {
  CreateProductPage.clickTemplateResetButton();
  cy.wait(1000);
});

And(/^I click on product variant Reset button/, () => {
  ProductVariantPage.clickProductVariantResetButton();
  cy.wait(1000);
});

Then(/^I click on Update Product Variant Template button/, () => {
  CreateProductPage.clickOnUpdateVariantTemplateButton();
});

And(/^I close Template window/, () => {
  CreateProductPage.closeVariantTemplateWindow();
  cy.wait(300);
});

And(/^I close Product Variant window/, () => {
  CreateProductPage.closeVariantWindow();
});

Then(/^I click on Select Product Template button/, () => {
  CreateProductPage.clickOnSelectProductTemplateButton();
});

Then(/^I click on Update Product Template button/, () => {
  CreateProductPage.clickOnUpdateProductTemplateButton();
});

Then(/^I try to add data name and data value in product page "([^"]*)" "([^"]*)"$/, (DATA_NAME, DATA_VALUE) => {
  CreateProductPage.addMultipleData(DATA_NAME, DATA_VALUE);
});

Then(/^I verify alert Message for given input "([^"]*)" as "([^"]*)"$/, (VALUE, ALERT_MESSAGE) => {
  CreateProductPage.verifyAlertMessage(VALUE, ALERT_MESSAGE);
});

Then(/^I try to add data name and data value in product variant page "([^"]*)" "([^"]*)"$/, (DATA_NAME, DATA_VALUE) => {
  ProductVariantPage.addMultipleVarientData(DATA_NAME, DATA_VALUE);
});

Then(/^I click on edit button/, () => {
  ProductHomePage.clickEditButton();
});

Then(/^I validate static upsell option should not be visible$/, () => {
  ProductVariantPage.staticUpSellOptionNotVisible();
});
