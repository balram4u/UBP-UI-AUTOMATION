import URL_PATH from '../../../common/Route';

const REVERSAL_ORDER_HEADER = "//p[text()='Raise Order']"; // it should be Stock Transfer , bug raised for it.
const SELECT_ORDER_TYPE_FIELD = '//select[@id="order-type-drop-down"]';
const YES_BUTTON = '//span[text()="Yes"]';
const NEXT_BUTTON = '//span[text()="Next"]';
const SELECT_PRODUCT_SKU_FIELD = '//input[@id="combo-box-demo"]';
const SELECT_RANGE = '//div[@data-rowindex = "0"]//span[text()="Select Range"]';
const ENTER_QUANTITY = "//input[@name='quantity']";
const SUBMIT_BUTTON = '//span[text()="Submit"]';
const ENTER_SELLER_NAME = '//input[@class="MuiInputBase-input"]';
const SEARCH_BUTTON = '//button[@type="submit"]';
const SELECT_SELLER_NAME = '//input[@type="checkbox" and @aria-label="Select Row checkbox"]';
const SELECT_BUYER = '//div[@data-id="SUBDIST1-1"]//input[@type="checkbox"]';
const LEFT_MENU_ORDER = "//p[text()='ORDER']";
const LEFIT_MENU_REVERSAL = "//p[text()='REVERSAL']";

class ReversalOrderHomePage {
  static visitReversalOrderHomePageUsingLeftMenu() {
    cy.log('Open Reversal Order Home page and verify title');
    cy.xpath(LEFT_MENU_ORDER).should('be.visible');
    cy.xpath(LEFT_MENU_ORDER).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_ORDER).click();
    cy.xpath(LEFIT_MENU_REVERSAL).click();
    cy.xpath(REVERSAL_ORDER_HEADER).should('be.visible');
  }

  static visitReversalOrderHomePageUsingUrl() {
    cy.log('Open Reversal Order Home page and verify title');
    cy.wait(3000);
    cy.visit(URL_PATH.reversalOrder);
  }

  static orderType(orderType) {
    cy.log('Select order type');
    cy.log(orderType);
    if (orderType !== '') {
      cy.xpath(SELECT_ORDER_TYPE_FIELD).select(orderType);
      cy.wait(500);
      cy.xpath(YES_BUTTON).click();
      cy.wait(500);
    }
  }

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

  static clickOnSelectRange() {
    cy.log('Click on select range button');
    cy.wait(800);
    cy.xpath(SELECT_RANGE).click(); // 2 seconds
  }

  static enterQuantity(quantity) {
    cy.log('Enter quantity');
    cy.log(quantity);
    cy.wait(100);
    cy.xpath(ENTER_QUANTITY).clear().type(quantity);
  }

  static clickOnSubmit() {
    cy.log('Click on submit button');
    cy.xpath(SUBMIT_BUTTON).click();
  }

  static searchResellerId(SELLER_NAME) {
    cy.log('Search ResellerId');
    cy.log(SELLER_NAME);
    cy.xpath(ENTER_SELLER_NAME).clear().type(SELLER_NAME);
    cy.xpath(SEARCH_BUTTON).click();
    cy.wait(300);
  }

  static selectResellerId() {
    cy.log('Select ResellerId');
    cy.xpath(SELECT_SELLER_NAME).click();
  }

  static selectSUBDIST1AsBuyer() {
    cy.log('Select reseller Id');
    cy.xpath(SELECT_BUYER).click();
  }
}

export default ReversalOrderHomePage;
