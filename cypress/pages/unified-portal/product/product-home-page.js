// eslint-disable-next-line max-len
import URL_PATH from "../../../common/Route";

const VIEW_PRODUCTS_HEADER = '//h4[text()="This section allows the user to view and manage their product history."]';
const CREATE_PRODUCT = '//span[contains(text(),"Create Product")]';
const FILTER = "//span[text()='Filters']";
// const FILTER_VALUE = "//input[@class='MuiInputBase-input MuiInput-input']";
const COLUMN_SELECT = "//select[@id='columns-filter-select']";
const OPERATOR_SELECT = "//select[@id='columns-operators-select']";
const FILTER_VALUE1 = "//input[@placeholder='Filter value' or @class='MuiInputBase-input MuiInput-input']";
const EDIT_BUTTON = "//a[contains(@href,'/edit/')]";
const VIEW_PRODUCT = "//a[contains(@href,'/home/product/products/view')]";
const VIEW_VARIANT = "//a[contains(@href,'/variants')]";
const DELETE_PRODUCT = "//button[contains(@class,'MuiButton-root MuiButton-text MuiButtonGroup-grouped')][@type='button']";
const DELETE_YES_BUTTON = "//span[contains(text(),'Yes')]";
const LEFT_MENU_PRODUCT = "//p[text()='PRODUCT']";
const LEFIT_MENU_VIEW_PRODUCTS = "//p[text()='VIEW PRODUCTS']";
const EXPORT_BUTTON = "//button/span[text()='Export']";
const DOWNLOAD_BUTTON = "//li[contains(text(),'Download')]";
const TABLE_PAGINATION = "(//div[contains(@class,'MuiTablePagination-toolbar')]/p)[2]";
const SCROLLABLE_AREA = "div.MuiDataGrid-window";
const PRODUCT_CODE = "//div[@data-field='code' and @data-rowindex='0']";
const DELETE_PRODUCT_VARIANT = "//button[contains(@class,'MuiButton-root MuiButton-text MuiButtonGroup-grouped')][@type='button']";
const CLICK_VARIANT = "//a[contains(@href,'/variants')]";
const CREATE_PRODUCT_VARIANT = "//span[contains(text(),'Create Product Variant')]";
const UPDATE_PRODUCT_VARIANT = "//a[contains(@href,'/variants/edit')]";
const DELETE_PRODUCT_VARIANTS = "(//button[contains(@class,'MuiButton-root MuiButton-text MuiButtonGroup-grouped')][@type='button'])[1]";
const DELETE_YES_BUTTONS = "(//span[contains(text(),'Yes')])[1]";
const PRODUCT_PUBLISHCATALOGUE_BUTTON = "//span[text()='Publish Catalogue']";
const PUBLISH_CATALOGUE_REMARKS = "//div[starts-with (@class,'MuiInputBase-root')]//textarea[1]";
const PUBLISH_CATALOGUESUBMIT_BUTTON = "//span[text()='Publish']";
const PUBLISH_CATALOGUECANCEL_BUTTON = "//span[text()='Cancel']";
const CLICK_VARIANT_VIEW = "//a[@title='View']";
class ProductHomePage {
  static visitProductHomePageUsingLeftMenu() {
    cy.log('Open Product -> View Products page');
    cy.xpath(LEFT_MENU_PRODUCT).should('be.visible');
    cy.xpath(LEFT_MENU_PRODUCT).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_PRODUCT).click();
    cy.xpath(LEFIT_MENU_VIEW_PRODUCTS).click();
    cy.xpath(VIEW_PRODUCTS_HEADER).should('be.visible');
  }

  static visitProductHomePageUsingUrl() {
    cy.log('Now visit product home page');
    cy.visit(URL_PATH.viewProducts);
  }

  static clickCreateProductButton() {
    cy.log('Click create product button');
    cy.xpath(CREATE_PRODUCT).click();
  }

  static clickFilterButton() {
    cy.log('Click filter button');
    cy.xpath(FILTER, { timeout: 1000 }).click();
  }

  static selectColumn(value) {
    cy.log('Select column');
    cy.xpath(COLUMN_SELECT, { timeout: 3000 }).select(value);
  }

  static selectOperator(value) {
    cy.log('Select operator');
    cy.xpath(OPERATOR_SELECT, { timeout: 1000 }).select(value);
  }

  static fillFilterValue(filterValue) {
    cy.log('Enter filter value');
    cy.xpath(FILTER_VALUE1, { timeout: 2000 }).clear().type(filterValue);
  }

  static verifyTableCount(PRODUCT_NAME) {
    cy.log('validating product');
    cy.wait(2000);
    cy.get(`[data-value="${PRODUCT_NAME}"]`).should('have.length', 2);
  }

  /** *
     * PRODUCT_NAME need to pass to create random edit option
     */
  static clickEditButton() {
    cy.log('Click edit button');
    cy.xpath(EDIT_BUTTON).click();
  }

  static clickViewProduct() {
    cy.wait(800);
    cy.xpath(VIEW_PRODUCT).click();
  }

  static clickViewVariant() {
    cy.wait(800);
    cy.xpath(VIEW_VARIANT).click();
  }

  static clickDeleteProduct() {
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
    cy.xpath(PRODUCT_CODE).should('not.exist');
  }

  static deleteShouldNotVisible() {
    cy.log('validate delete button should not be visible');
    cy.wait(900);
    cy.xpath(DELETE_PRODUCT_VARIANT).should('not.exist');
  }

  static clickVariant() {
    cy.log('click variant option');
    cy.wait(900);
    cy.xpath(CLICK_VARIANT).click();
  }

  static clickVariantView() {
    cy.log('click variant Details View');
    cy.wait(900);
    cy.xpath(CLICK_VARIANT_VIEW).click();
  }

  static createProductVariantShouldNotVisible() {
    cy.log('validate create product variant button should not be visible');
    cy.wait(900);
    cy.xpath(CREATE_PRODUCT_VARIANT).should('not.exist');
  }

  static createProductShouldNotVisible() {
    cy.log('validate create product variant button should not be visible');
    cy.wait(900);
    cy.xpath(CREATE_PRODUCT).should('not.exist');
  }

  static updateShouldNotVisible() {
    cy.log('validate update button should not be visible');
    cy.wait(900);
    cy.xpath(UPDATE_PRODUCT_VARIANT).should('not.exist');
  }

  static clickDeleteProductVariants() {
    cy.wait(800);
    cy.xpath(DELETE_PRODUCT_VARIANTS).click();
    cy.xpath(DELETE_YES_BUTTONS).click({ force: true });
  }

  static checkPublishCatalogueButton() {
    cy.wait(800);
    cy.xpath(PRODUCT_PUBLISHCATALOGUE_BUTTON).should('be.visible');
  }

  static publishCatalogue(remarks) {
    cy.xpath(PRODUCT_PUBLISHCATALOGUE_BUTTON).click();
    if (remarks != "") {
      cy.xpath(PUBLISH_CATALOGUE_REMARKS).type(remarks);
    }
    cy.xpath(PUBLISH_CATALOGUESUBMIT_BUTTON).click();
    cy.xpath(PUBLISH_CATALOGUECANCEL_BUTTON).click();
    cy.wait(1000);
  }
}

export default ProductHomePage;
