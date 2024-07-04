import {
  When, And,
} from "cypress-cucumber-preprocessor/steps";

import ProductTaxesPage from "../../../pages/unified-portal/product/product-tax-page";
import CreateProductTaxPage from "../../../pages/unified-portal/product/create-product-tax-page";
import CommonUtilities from "../../../common/Util";

And(/^I navigate to the Product Tax Page$/, () => {
  ProductTaxesPage.visitProductTaxesPageUsingUrl();
  cy.wait(3000);
});

When(/^I perform Create Product Tax having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (taxType, percentValue, fixedValue, discription, dateName, dataValue) => {
  ProductTaxesPage.clickCreateTaxButton();
  CreateProductTaxPage.enterTaxType(taxType);
  if (percentValue !== "") {
    CreateProductTaxPage.enterPercentValue(percentValue);
  } else {
    CreateProductTaxPage.clickFixedToggle();
    CreateProductTaxPage.enterFixedValue(fixedValue);
  }
  CreateProductTaxPage.enterDiscription(discription);
  CreateProductTaxPage.addData();
  CreateProductTaxPage.enterDataName(dateName);
  CreateProductTaxPage.enterDataValue(dataValue);
});

And(/^I am able to search existing Product Tax "([^"]*)"$/, (name) => {
  ProductTaxesPage.visitProductTaxesPageUsingUrl();
  ProductTaxesPage.clickFilterButton();
  ProductTaxesPage.selectColumn('Tax Type');
  ProductTaxesPage.selectOperator('equals');
  ProductTaxesPage.fillFilterValue(name);
  ProductTaxesPage.clickFilterButton();
});

And(/^Product Tax created should be visible inside table "([^"]*)" "([^"]*)" "([^"]*)"$/, (name, percentValue, fixedvalue) => {
  ProductTaxesPage.verifyTableCount(name);
  ProductTaxesPage.verifyTaxType(name);
  if (percentValue !== "") {
    ProductTaxesPage.verifyPercentValue(percentValue);
  } else {
    ProductTaxesPage.verifyFixedValue(fixedvalue);
  }
});

And(/^I click on Submit button$/, () => {
  CreateProductTaxPage.clickSubmit();
});

When(/^I validate delete button should not be visible$/, () => {
  ProductTaxesPage.deleteShouldNotVisible();
});

When(/^I Delete data value and data name field$/, () => {
  CreateProductTaxPage.deleteDataField();
});

When(/^I validate data value and data name should not be visibled$/, () => {
  CreateProductTaxPage.validateDataField();
});

And(/^I scroll to Bottom if area is scrollable$/, () => {
  ProductTaxesPage.scrollToBottomWithCondition();
});

When(/^I validate Product Tax should not be visible$/, () => {
  ProductTaxesPage.taxShouldNotVisible();
});

When(/^I remove data from data value and data name field$/, () => {
  CreateProductTaxPage.removeDataFromDataFields();
});

Then(/^I validate create tax button should not be visible$/, () => {
  ProductTaxesPage.createTaxButtonShouldNotVisible();
});

And(/^I click on export button$/, () => {
  ProductTaxesPage.clickOnExportButton();
});

And(/^I click on download button$/, () => {
  ProductTaxesPage.clickOnDownloadButton();
});

And(/^I read file name "([^"]*)"$/, (fileName) => {
  CommonUtilities.readFileName(fileName);
});

Then(/^I delete file name "([^"]*)"$/, (fileName) => {
  cy.task('deleteFile', fileName);
});

Then(/^I validate update button should not be visible$/, () => {
  ProductTaxesPage.updateShouldNotVisible();
});

When(/^I perform Update Product Tax having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (taxType, percentValue, fixedValue, discription, dateName, dataValue) => {
  ProductTaxesPage.clickEdit();
  CreateProductTaxPage.enterTaxType(taxType);
  if (percentValue !== "") {
    CreateProductTaxPage.enterPercentValue(percentValue);
  } else {
    CreateProductTaxPage.enterFixedValue(fixedValue);
  }
  CreateProductTaxPage.enterDiscription(discription);
  CreateProductTaxPage.enterDataName(dateName);
  CreateProductTaxPage.enterDataValue(dataValue);
});

And(/^I click on Update button$/, () => {
  CreateProductTaxPage.clickUpdate();
});

When(/^I perform View Product Tax having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (taxType, percentValue, fixedValue, discription, dateName, dataValue) => {
  ProductTaxesPage.clickView();
  ProductTaxesPage.viewTaxType(taxType);
  if (percentValue !== "") {
    ProductTaxesPage.viewPercentValue(percentValue);
  } else {
    ProductTaxesPage.viewFixedValue(fixedValue);
  }
  ProductTaxesPage.viewDiscription(discription);
  ProductTaxesPage.viewDataName(dateName);
  ProductTaxesPage.viewDataValue(dataValue);
});
