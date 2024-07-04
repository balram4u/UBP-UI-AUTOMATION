import urlPath from '../../../common/Route';

const VIEW_PRODUCTS_HEADER = '//h4[text()="This section allows the user to view and manage their product history."]';
const VIEW_PRODUCTSINFO_HEADER = '//h4[text()="Product information"]//following::p[text()="This section contains all the product specific details including their variants that they hold. "]';
const PRODUCTSINFO_SECTION = '//h6[text()="Product information"]';
const PRODUCT_NAME_XPATH = '(//div//p[text()="Product Name"]//following::div//p)[1]';
const PRODUCT_CODE_XPATH = '(//div//p[text()="Product Code"]//following::div//p)[1]';
const DESCRIPTION_XPATH = '(//div//p[text()="Description"]//following::div//p)[1]';
const PRODUCT_TYPE_XPATH = '(//div//p[text()="Product Type"]//following::div//p)[1]';
const APPLIED_FROM_DATE_XPATH = '(//div//p[text()="Available From"]//following::div//p)[1]';
const APPLIED_UNTILL_DATE_XPATH = '(//div//p[text()="Available Until"]//following::div//p)[1]';
const PRODUCT_WORKFLOW_XPATH = '(//div//p[text()="Product Workflow"]//following::div//p)[1]';
const PRODUCT_CATEGORY_XPATH = '(//div//p[text()="Product Category"]//following::div//p)[1]';
const DATA_SECTION = '//h6[text()="Data"]';
const DATANAME_XPATH = '//div//p[text()="Name"]//following::div//p[1]';
const DATAVALUE_XPATH = '(//div//p[text()="Value"]//following::div//p)[1]';
const PRODUCT_SKU_XPATH = "//div[@data-field='productSKU' and @data-rowindex=0]";
const SUPPLIER_REF_XPATH = "//div[@data-field='supplierReference' and @data-rowindex=0]";
const STATUS_XPATH = "//div[@data-field='status' and @data-rowindex=0]";
const VARIANT_CURRENCY_XPATH = "//div[@data-field='currency' and @data-rowindex=0]";
const VARIANT_PRICE_XPATH = "//div[@data-field='price' and @data-rowindex=0]";

let COLUMNCELL = '(//div[@role="cell" and @data-field="name" and @data-value="';
const VIEWLINK = '"]//following::a[contains(@href,"products/view")])[1]';

class ViewProductPage {
  static visitViewProductPage() {
    cy.wait(3000);
    cy.visit(urlPath.View_Products);
    cy.xpath(VIEW_PRODUCTS_HEADER)
      .should('be.visible');
  }

  static openProductfromTable(PRODUCT_NAME) {
    cy.log('Viewing Product from Table', PRODUCT_NAME);
    COLUMNCELL += PRODUCT_NAME;
    COLUMNCELL += VIEWLINK;
    cy.log(COLUMNCELL);
    cy.xpath(COLUMNCELL).click();
    COLUMNCELL = '(//div[@role="cell" and @data-field="name" and @data-value="';
  }

  static ValidateProductInformation(PRODUCT_NAME, PRODUCT_CODE, DESCRIPTION, PRODUCT_TYPE,
    PRODUCT_WORKFLOW, PRODUCT_CATEGORY) {
    cy.log('Validating product information');
    cy.xpath(VIEW_PRODUCTSINFO_HEADER)
      .should('be.visible');
    cy.log('Validating Product information');
    cy.log(PRODUCT_NAME, PRODUCT_CODE, DESCRIPTION,
      PRODUCT_TYPE,
      PRODUCT_WORKFLOW, PRODUCT_CATEGORY);
    cy.xpath(PRODUCTSINFO_SECTION)
      .should('be.visible');
    cy.xpath(PRODUCT_NAME_XPATH).should('have.text', PRODUCT_NAME);
    cy.xpath(PRODUCT_CODE_XPATH).should('have.text', PRODUCT_CODE);
    cy.xpath(DESCRIPTION_XPATH).should('have.text', DESCRIPTION);
    cy.xpath(PRODUCT_TYPE_XPATH).contains(PRODUCT_TYPE, { matchCase: false });
    if (PRODUCT_WORKFLOW != "") {
      cy.xpath(PRODUCT_WORKFLOW_XPATH).should('have.text', PRODUCT_WORKFLOW);
    }
    cy.xpath(PRODUCT_CATEGORY_XPATH).should('have.text', PRODUCT_CATEGORY);
  }

  static ValidateProductData(DATANAME_VARIENT,
    DATAVALUE_VARIENT) {
    cy.xpath(DATA_SECTION)
      .should('be.visible');
    cy.log('Validating Product data');
    cy.log(DATANAME_VARIENT, DATAVALUE_VARIENT);
    cy.xpath(DATANAME_XPATH).should('contains.text', DATANAME_VARIENT);
    cy.xpath(DATAVALUE_XPATH).should('have.text', DATAVALUE_VARIENT);
  }

  static ValidateProductVariantInformation(PRODUCTSKU, SUPPLIER_REFERENCE, STATUS,
    VARIANT_CURRENCY, VARIANT_PRICE) {
    cy.log('Validating Product variant information');
    cy.xpath(PRODUCT_SKU_XPATH).should('have.text', PRODUCTSKU);
    cy.xpath(SUPPLIER_REF_XPATH).should('have.text', SUPPLIER_REFERENCE);
    cy.xpath(STATUS_XPATH).should('have.text', STATUS);
    cy.xpath(VARIANT_CURRENCY_XPATH).should('have.text', VARIANT_CURRENCY);
    cy.xpath(VARIANT_PRICE_XPATH).should('have.text', VARIANT_PRICE);
  }

  static ValidateProductVariantInformation1(PRODUCTSKU, SUPPLIER_REFERENCE, STATUS) {
    cy.log('Validating Product variant information');
    cy.xpath(PRODUCT_SKU_XPATH).should('have.text', PRODUCTSKU);
    cy.xpath(SUPPLIER_REF_XPATH).should('have.text', SUPPLIER_REFERENCE);
    cy.xpath(STATUS_XPATH).should('have.text', STATUS);
  }
}

export default ViewProductPage;
