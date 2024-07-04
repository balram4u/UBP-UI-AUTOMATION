// eslint-disable-next-line max-len
import URL_PATH from "../../../common/Route";

const CREATE_PRODUCT_TAX = '//span[contains(text(),"Create Tax")]';
const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "//select[@id='columns-filter-select']";
const OPERATOR_SELECT = "//select[@id='columns-operators-select']";
const FILTER_VALUE1 = "//input[@placeholder='Filter value' or @class='MuiInputBase-input MuiInput-input']";
const DELETE_PRODUCT_TAX = "//button[contains(@class,'MuiButton-root MuiButton-text MuiButtonGroup-grouped')][@type='button']";
const TABLE_PAGINATION = "(//div[contains(@class,'MuiTablePagination-toolbar')]/p)[2]";
const SCROLLABLE_AREA = "div.MuiDataGrid-window";
const TAX_TYPE = "//div[@data-field='taxType' and @data-rowindex='0']";
const EXPORT_BUTTON = "//button/span[text()='Export']";
const DOWNLOAD_BUTTON = "//li[contains(text(),'Download')]";
const EDIT_PRODUCT_TAX = "//a[contains(@href,'/edit')]";
const CLICK_VIEW_LINK = "//a[contains(@href,'/taxes/view')]";
const VIEW_TAX_TYPE = "(//div//p[text()='Tax Type']//following::div//p)[1]";
const VIEW_PERCENT_VALUE = "(//div//p[text()='Percent Value']//following::div//p)[1]";
const VIEW_FIXED_VALUE = "(//div//p[text()='Fixed Value']//following::div//p)[1]";
const VIEW_DISCRIPTION = "(//div//p[text()='Description']//following::div//p)[1]";
const VIEW_DATA_NAME = "(//div//p[text()='Name']//following::div//p)[1]";
const VIEW_DATA_VALUE = "(//div//p[text()='Value']//following::div//p)[1]";

class ProductRulePage {
  static visitProductTaxesPageUsingUrl() {
    cy.log('Now visit product taxes page');
    cy.wait(3000);
    cy.visit(URL_PATH.productTaxes);
  }

  static clickCreateTaxButton() {
    cy.log('Click create tax button');
    cy.xpath(CREATE_PRODUCT_TAX).click();
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

  static verifyTableCount(name) {
    cy.log('validating product');
    cy.get(`[data-value="${name}"]`).should('have.length', 1);
  }

  static deleteShouldNotVisible() {
    cy.log('validate delete button should not be visible');
    cy.xpath(DELETE_PRODUCT_TAX).should('not.exist');
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

  static taxShouldNotVisible() {
    cy.log('validate tax type should not be visible');
    cy.log(1000);
    cy.xpath(TAX_TYPE).should('not.exist');
  }

  static verifyTaxType(name) {
    cy.log('validate tax type should be visible');
    cy.log(1000);
    cy.xpath(`//div[@data-value="${name}"]`).should('be.visible');
  }

  static verifyPercentValue(percentValue) {
    cy.log('validate tax type should be visible');
    cy.log(1000);
    cy.xpath(`//div[@data-value="${percentValue}" and @data-field='percentValue']`).should('be.visible');
  }

  static verifyFixedValue(fixedValue) {
    cy.log('validate tax type should be visible');
    cy.log(1000);
    cy.xpath(`//div[@data-value="${fixedValue}" and @data-field='fixedValue']`).should('be.visible');
  }

  static createTaxButtonShouldNotVisible() {
    cy.log('validate create tax button should not be visible');
    cy.log(1000);
    cy.xpath(CREATE_PRODUCT_TAX).should('not.exist');
  }

  static clickOnExportButton() {
    cy.log(`click on export button`);
    cy.xpath(EXPORT_BUTTON).click();
  }

  static clickOnDownloadButton() {
    cy.log(`click on download button`);
    cy.xpath(DOWNLOAD_BUTTON).click();
  }

  static updateShouldNotVisible() {
    cy.log('validate update button should not be visible');
    cy.wait(900);
    cy.xpath(EDIT_PRODUCT_TAX).should('not.exist');
  }

  static clickView() {
    cy.log('click edit link');
    cy.xpath(CLICK_VIEW_LINK).click();
    cy.wait(1000);
  }

  static clickEdit() {
    cy.log('click edit link');
    cy.xpath(EDIT_PRODUCT_TAX).click();
    cy.wait(1000);
  }

  static viewTaxType(taxType) {
    cy.xpath(VIEW_TAX_TYPE).invoke('text').then((tax_type) => {
      const text1 = tax_type;
      cy.log('tax type is ****', text1);
      expect(text1).to.equal(taxType);
    });
  }

  static viewPercentValue(percentValue) {
    cy.xpath(VIEW_PERCENT_VALUE).invoke('text').then((percent_value) => {
      const text1 = percent_value;
      cy.log('tax percent value is ****', text1);
      expect(text1).to.equal(percentValue);
    });
  }

  static viewFixedValue(fixedValue) {
    cy.xpath(VIEW_FIXED_VALUE).invoke('text').then((fixed_value) => {
      const text1 = fixed_value;
      cy.log('tax fixed value ****', text1);
      expect(text1).to.equal(fixedValue);
    });
  }

  static viewDiscription(discription) {
    cy.xpath(VIEW_DISCRIPTION).invoke('text').then((dis) => {
      const text1 = dis;
      cy.log('tax discription ****', text1);
      expect(text1).to.equal(discription);
    });
  }

  static viewDataName(dataName) {
    cy.xpath(VIEW_DATA_NAME).invoke('text').then((data_name) => {
      const text1 = data_name;
      cy.log('tax data name ****', text1);
      expect(text1).to.equal(dataName);
    });
  }

  static viewDataValue(dataValue) {
    cy.xpath(VIEW_DATA_VALUE).invoke('text').then((data_value) => {
      const text1 = data_value;
      cy.log('tax data value ****', text1);
      expect(text1).to.equal(dataValue);
    });
  }
}

export default ProductRulePage;
