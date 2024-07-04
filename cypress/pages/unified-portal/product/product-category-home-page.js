import URL_PATH from '../../../common/Route';

const CREATE_PRODUCT_CATEGORY = '//span[contains(text(),"Create Product Category")]';
const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "//select[@id='columns-filter-select']";
const OPERATOR_SELECT = "//select[@id='columns-operators-select']";
// const FILTER_VALUE = "//input[@placeholder='Filter value']";
const FILTER_VALUE = "//div[contains(@class,'MuiInput-formControl')]/input[@type='text']";
// const EDIT_BUTTON = "//a[contains(@href,'/edit/')]";
const VIEW_BTN = "//a[contains(@href,'/view/')]";
const PAGINATION_LOCATOR = ".MuiTablePagination-select";
const NEXT_PAGE = "button[title='Next page']";
const DELETE_PRODUCT_CATEGORY = "//button[contains(@class,'MuiButton-root MuiButton-text MuiButtonGroup-grouped')][@type='button']";
const DELETE_YES_BUTTON = "//span[contains(text(),'Yes')]";
const DELETE_NO_BUTTON = "//span[text()='No']";
const HEADING = "//div/h4";
const LEFT_MENU_PRODUCT = "//p[text()='PRODUCT']";
const LEFIT_MENU_VIEW_CATEGORIES = "//p[text()='VIEW CATEGORIES']";
const EXPORT_BUTTON = "//button/span[text()='Export']";
const DOWNLOAD_BUTTON = "//li[contains(text(),'Download')]";
const TABLE_PAGINATION = "(//div[contains(@class,'MuiTablePagination-toolbar')]/p)[2]";
const SCROLLABLE_AREA = "div.MuiDataGrid-window";
const PRODUCT_CATEGORY_NAME = "//div[@data-field='name' and @data-rowindex='0']";
const UPDATE_PRODUCT_CATEGORY = "//a[contains(@href,'/variants/edit')]";
const CLICK_EDIT = "(//div[@data-field='actions']//*[local-name()='svg'])[3]";

class ProductCategoryHomePage {
  static visitProductCategoriesHomePageUsingLeftMenu() {
    cy.log('Select Product -> View Categories from left menu');
    cy.xpath(LEFT_MENU_PRODUCT).should('be.visible');
    cy.xpath(LEFT_MENU_PRODUCT).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_PRODUCT).click();
    cy.xpath(LEFIT_MENU_VIEW_CATEGORIES).click();
    cy.xpath(HEADING).should('be.visible');
  }

  static visitProductCategoriesHomePageUsingUrl() {
    cy.log('Now visit product home page');
    cy.visit(URL_PATH.productCategories);
    // cy.xpath(HEADING).should('be.visible');
  }

  static clickCreateProductCategoriesButton() {
    cy.log('Click create product category button');
    cy.xpath(CREATE_PRODUCT_CATEGORY).click();
    cy.intercept("GET", "/api/pms/v1/workflow").as("getWorkflow");
    cy.intercept("GET", "/api/pms/v1/tax*").as("getTax");
    cy.intercept("GET", "/api/pms/v1/productCategory*").as("getproductCategory");
    cy.wait(["@getTax", "@getproductCategory"])
    // Wait for the intercepted request to complete
    cy.wait("@getWorkflow").then((interception) => {
      // Assert the status code of the response
      // If it's not 200, fail the test case
      if (interception.response.statusCode !== 200) {
        //cy.fail('API request returned a status other than 200');
        throw new Error("API request returned a status other than 200");
      }
    });
  }

  static selectColumn(value) {
    cy.xpath(COLUMN_SELECT, { timeout: "3000" }).should('be.visible').select(value);
  }

  static selectOperator(value) {
    cy.xpath(OPERATOR_SELECT, { timeout: "3000" }).should('be.visible').select(value);
  }

  static fillFilterValue(filterValue) {
    cy.xpath(FILTER_VALUE, { timeout: "3000" }).should('be.visible').clear().type(filterValue);
  }

  static clickFilterButton() {
    cy.xpath(FILTER, { timeout: "3000" }).should('be.visible').click({ force: true });
  }

  static waitForproductCategoryIntercept() {
    cy.intercept("GET", "/api/pms/v1/productCategory*").as("productCategory");
    cy.wait("@productCategory");
  }

  static verifyTableCount(productCategoryName) {
    cy.get(`[data-value="${productCategoryName}"]`, { timeout: "3000" }).should('have.length', 1);
  }

  /** *
     * PRODUCT_CATEGORY_NAME need to pass to create random edit option
     */

  static clickEditButton() {
    cy.xpath(CLICK_EDIT, { timeout: "3000" }).scrollIntoView().click();
  }

  static clickViewButton() {
    cy.xpath(VIEW_BTN, { timeout: "3000" }).click();
  }

  static setPerPageCount(count) {
    cy.get(PAGINATION_LOCATOR, { timeout: "3000" }).click();
    const el = `//li[text()='${count}']`;
    cy.xpath(el, { timeout: "3000" }).click();
  }

  static clickNext() {
    cy.get(NEXT_PAGE, { timeout: "3000" }).click();
  }

  static clickDeleteProductCategory() {
    cy.xpath(DELETE_PRODUCT_CATEGORY, { timeout: "3000" }).click();
    cy.xpath(DELETE_YES_BUTTON, { timeout: "3000" }).click();
  }

  static clickDeleteNoButton() {
    cy.xpath(DELETE_NO_BUTTON, { timeout: "3000" }).click();
  }

  static clickOnExportButton() {
    cy.xpath(EXPORT_BUTTON, { timeout: "3000" }).click();
  }

  static clickOnDownloadButton() {
    cy.xpath(DOWNLOAD_BUTTON, { timeout: "3000" }).click();
  }

  static deleteShouldNotVisible() {
    cy.log('validate delete button should not be visible');
    cy.xpath(DELETE_PRODUCT_CATEGORY).should('not.exist');
  }

  static productShouldNotVisible(productName) {
    cy.log('validate product should not be visible');
    cy.wait(1000);
    cy.xpath(`//div[text()="${productName}"]`).should('not.exist');
    cy.wait(3000);
  }

  static scrollToBottomWithCondition() {
    cy.log('Scroll to bottom with condition');
    cy.xpath(TABLE_PAGINATION).invoke('text').then((value) => {
      value = value.split(" ")[2];
      if (parseInt(value, 10) > 9) {
        cy.get(SCROLLABLE_AREA).scrollTo('bottom');
      }
    });
    cy.wait(800);
  }

  static productShouldNotVisible() {
    cy.log('validate tax type should not be visible');
    cy.log(1000);
    cy.xpath(PRODUCT_CATEGORY_NAME).should('not.exist');
  }

  static productCategoryButtonShouldNotVisible() {
    cy.log('validate tax type should not be visible');
    cy.log(1000);
    cy.xpath(CREATE_PRODUCT_CATEGORY).should('not.exist');
  }

  static updateShouldNotVisible() {
    cy.log('validate update button should not be visible');
    cy.wait(900);
    cy.xpath(UPDATE_PRODUCT_CATEGORY).should('not.exist');
  }
}

export default ProductCategoryHomePage;
