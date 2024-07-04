import URL_PATH from '../../../common/Route';

const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "select[id=columns-filter-select]";
const OPERATOR_SELECT = "select[id=columns-operators-select]";
const FILTER_VALUE = "//input[@class='MuiInputBase-input MuiInput-input']";
const FILTER_ORDER_VALUE = "//input[@class='MuiInputBase-input MuiInput-input']";
const GET_START_SERIAL = ".MuiDataGrid-cell.MuiDataGrid-cellLeft[data-rowindex='0'][data-field='startSerial']";
const TABLE = "//div[@class='rendering-zone/div']";

let startSerial = '';
const LEFT_MENU_ORDER = "//p[text()='ORDER']";
const LEFIT_MENU_RAISE_ORDERS = "//p[text()='RAISE ORDERS']";

class RaiseOrderHomePage {
  static visitRaiseOrderHomePageUsingUrl() {
    cy.log('Open raise order home page and verify page title');
    cy.intercept("GET", "api/oms/v2/order-payment-types").as("getOrderPaymentTypes");
    cy.intercept("GET", "api/pms/v1/tax").as("getProductTaxes");
    cy.visit(URL_PATH.raiseOrder);
    cy.wait(["@getOrderPaymentTypes", "@getProductTaxes"]);
  }

  static visitRaiseOrderHomePageUsingLeftMenu() {
    cy.log('Open Order -> View raise orders page');
    cy.xpath(LEFT_MENU_ORDER).should('be.visible');
    cy.wait(5000);
    cy.xpath(LEFT_MENU_ORDER).click();
    cy.wait(5000);
    // cy.xpath(LEFT_MENU_ORDER).click();
    cy.xpath(LEFIT_MENU_RAISE_ORDERS).click();
  }

  static clickFilterButton() {
    cy.log('Click on filter');
    cy.xpath(FILTER).click();
  }

  static verifyPageTitle(pageTitle) {
    cy.log(`verify page title as ${pageTitle}`);
    cy.xpath(`//h4[contains(text(),'${pageTitle}')]`).should('be.visible');
  }

  static selectColumn(value) {
    cy.log('Select column');
    cy.get(COLUMN_SELECT).select(value);
  }

  static selectOperator(value) {
    cy.log('Select operator');
    cy.get(OPERATOR_SELECT).select(value);
  }

  static fillFilterValue(filterValue) {
    cy.log('Enter value');
    cy.log(filterValue);
    cy.xpath(FILTER_VALUE).clear().type(filterValue);
  }

  static fillFilterOrderValue(filterValue) {
    cy.log('Enter value');
    cy.log(filterValue);
    cy.xpath(FILTER_ORDER_VALUE).clear().type(filterValue);
  }

  static verifyTableCount(PRODUCT_NAME) {
    cy.get(`[data-value="${PRODUCT_NAME}"]`).should('have.length', 1);
  }

  static getStartSerial() {
    cy.log('Get start serial value from raise order home page');
    cy.get(GET_START_SERIAL).invoke('text').then((text) => {
      console.log(text);
      startSerial = text.toString();
      console.log(startSerial);
    });
  }

  static fillStartSearialValue() {
    cy.log('Enter start serial value in filter value');
    cy.log(startSerial);
    cy.wait(500);
    cy.xpath(FILTER_VALUE).clear().type(startSerial);
  }

  static verifyInsideTable() {
    cy.log('Verify the order id present inside the table ');
    cy.xpath(TABLE).should('have.length', 0);
    cy.log('I verified that the Oreder id is not present after cancelling the Trip');
  }
}

export default RaiseOrderHomePage;
