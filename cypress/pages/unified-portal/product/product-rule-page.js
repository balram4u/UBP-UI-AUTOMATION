// eslint-disable-next-line max-len
import URL_PATH from "../../../common/Route";

const CREATE_PRODUCT_RULE = '//span[contains(text(),"Create New Rule")]';
const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "//select[@id='columns-filter-select']";
const OPERATOR_SELECT = "//select[@id='columns-operators-select']";
const FILTER_VALUE1 = "//input[@placeholder='Filter value' or @class='MuiInputBase-input MuiInput-input']";
const EDIT_BUTTON = "(//a[contains(@href,'/edit/')])[1]";
const VIEW_PRODUCT_RULE = "(//a[contains(@href,'/home/product/rules/view')])[1]";
const DELETE_PRODUCT = "//button[contains(@class,'MuiButton-root MuiButton-text MuiButtonGroup-grouped')][@type='button']";
const DELETE_YES_BUTTON = "//span[text()='Yes']";
const EXPORT_BUTTON = "//button/span[text()='Export']";
const DOWNLOAD_BUTTON = "//li[contains(text(),'Export')]";

class ProductRulePage {
  static visitProductRulePageUsingUrl() {
    cy.log('Now visit product rule page');
    cy.wait(3000);
    cy.visit(URL_PATH.productRule);
  }

  static clickCreateNewRuleButton() {
    cy.log('Click create product button');
    cy.xpath(CREATE_PRODUCT_RULE).click();
    cy.wait(1000);
  }

  static clickFilterButton() {
    cy.log('Click filter button');
    cy.xpath(FILTER).click();
    cy.wait(1000);
  }

  static selectColumn(value) {
    cy.log('Select column');
    cy.xpath(COLUMN_SELECT).select(value);
    cy.wait(1000);
  }

  static selectOperator(value) {
    cy.log('Select operator');
    cy.xpath(OPERATOR_SELECT).select(value);
    cy.wait(1000);
  }

  static fillFilterValue(filterValue) {
    cy.log('Enter filter value');
    cy.xpath(FILTER_VALUE1).clear().type(filterValue);
    cy.wait(1000);
  }

  static verifyTableCount(PRODUCT_NAME) {
    cy.log('validating product');
    cy.get(`[data-value="${PRODUCT_NAME}"]`).should('have.length', 1);
  }

  /** *
     * PRODUCT_NAME need to pass to create random edit option
     */
  static clickEditButton() {
    cy.log('Click edit button');
    cy.xpath(EDIT_BUTTON).click();
    cy.wait(1000);
  }

  static clickViewProductRule() {
    cy.xpath(VIEW_PRODUCT_RULE).click();
    cy.wait(1000);
  }

  static clickDeleteProductRule() {
    cy.wait(800);
    cy.xpath(DELETE_PRODUCT).click();
    cy.xpath(DELETE_YES_BUTTON).click();
  }

  static clickOnExportButton() {
    cy.log(`click on export button`);
    cy.xpath(EXPORT_BUTTON).click();
  }

  static clickOnDownloadButton() {
    cy.log(`click on download button`);
    cy.xpath(DOWNLOAD_BUTTON).click();
  }
}

export default ProductRulePage;
