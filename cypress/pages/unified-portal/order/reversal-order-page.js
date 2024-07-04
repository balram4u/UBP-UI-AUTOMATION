import StockTransferPage from "./stock-transfer-page";

const NEXT_BUTTON = '//span[text()="Next"]';
const SELECT_PRODUCT_SKU_FIELD = '//input[@id="combo-box-demo"]';
const SUBMIT_BUTTON = '//span[text()="Submit"]';
const SEARCH_BUTTON = '//span[text()="Search"]';
const SELECT_ORDER_ID = '//input[@type="checkbox" and @aria-label="Select Row checkbox"]';

class ReversalOrderPage {
  static clickOnNext() {
    cy.log('Click on Next button');
    cy.xpath(NEXT_BUTTON).click();
  }

  static selectProductSKU(productSKU) {
    cy.log('Select product SKU');
    cy.log(productSKU);
    if (productSKU !== '') {
      cy.xpath(SELECT_PRODUCT_SKU_FIELD).type(productSKU)
        .type('{downArrow}').type('{downArrow}')
        .type('{enter}');
    }
  }

  static clickOnSubmit() {
    cy.log('Click on submit button');
    cy.xpath(SUBMIT_BUTTON).click();
  }

  static enterOrderId() {
    StockTransferPage.enterOrderID();
  }

  static clickOnSearch() {
    cy.log('Click on submit button');
    cy.xpath(SEARCH_BUTTON).click();
  }

  static selectOrderID() {
    cy.log('Select order id from reversal order page');
    cy.xpath(SELECT_ORDER_ID).click();
  }
}

export default ReversalOrderPage;
