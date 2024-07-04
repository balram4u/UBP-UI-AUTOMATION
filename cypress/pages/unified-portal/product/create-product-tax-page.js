const CREATE_PRODUCT_TAX_HEADER = '//p[contains(text(),"This section contains all the taxes specific details .")]';
const ENTER_PERCENT_VALUE = "//input[contains(@name,'percentValue')]";
const ENTER_FIXED_VALUE = "//input[contains(@name,'fixedValue')]";
const ENTER_DISCRIPTION = "//textarea[contains(@name,'description')]";
const CLICK_SUBMIT = "//button/span[text()='Submit']";
const ENTER_TAX_TYPE = "//input[contains(@name,'taxType')]";
const CLICK_ADD_DATA = "//span[contains(text(),'Add Data')]";
const ENTER_DATA_NAME = "//input[contains(@name,'data.0.dataName')]";
const ENTER_DATA_VALUE = "//input[contains(@name,'data.0.dataValue')]";
const DELETE_DATA_FIELD = "//span[text()='delete']";
const CLICK_UPDATE = "//button/span[text()='Update']";
const FIXED_TOGGLE = "//input[@name='enableTax']";

class CreateProductRulePage {
  static verifyCreateProductHeader() {
    cy.xpath(CREATE_PRODUCT_TAX_HEADER)
      .should('be.visible');
  }

  static enterTaxType(taxType) {
    cy.log('enter tax type', taxType);
    cy.xpath(ENTER_TAX_TYPE).clear().type(taxType);
    cy.wait(500);
  }

  static enterPercentValue(percentValue) {
    cy.log('enter percent value', percentValue);
    cy.xpath(ENTER_PERCENT_VALUE).clear().type(percentValue);
    cy.wait(500);
  }

  static enterFixedValue(fixedValue) {
    cy.log('enter fixed value', fixedValue);
    cy.xpath(ENTER_FIXED_VALUE).clear().type(fixedValue);
    cy.wait(500);
  }

  static enterDiscription(discription) {
    cy.log('enter discription', discription);
    cy.xpath(ENTER_DISCRIPTION).clear().type(discription);
    cy.wait(500);
  }

  static addData() {
    cy.log('click add data button');
    cy.xpath(CLICK_ADD_DATA).click();
    cy.wait(500);
  }

  static enterDataName(dateName) {
    cy.log('enter data name', dateName);
    cy.xpath(ENTER_DATA_NAME).clear().type(dateName);
    cy.wait(500);
  }

  static enterDataValue(dataValue) {
    cy.log('enter data value', dataValue);
    cy.xpath(ENTER_DATA_VALUE).clear().type(dataValue);
    cy.wait(500);
  }

  static clickSubmit() {
    cy.log('click submit');
    cy.xpath(CLICK_SUBMIT).click();
    cy.wait(1000);
  }

  static deleteDataField() {
    cy.log('delete data value and data name');
    cy.wait(900);
    cy.xpath(DELETE_DATA_FIELD).click();
  }

  static validateDataField() {
    cy.log('validate data value and data name should not exist');
    cy.wait(900);
    cy.xpath(ENTER_DATA_NAME).should('not.exist');
    cy.xpath(ENTER_DATA_VALUE).should('not.exist');
  }

  static removeDataFromDataFields() {
    cy.log('remove data name');
    cy.xpath(ENTER_DATA_NAME).clear();
    cy.wait(1000);
    cy.log('remove data value');
    cy.xpath(ENTER_DATA_VALUE).clear();
    cy.wait(1000);
  }

  static clickUpdate() {
    cy.log('click update');
    cy.xpath(CLICK_UPDATE).click();
    cy.wait(200);
  }

  static clickFixedToggle() {
    cy.log('click fixed toggle');
    cy.xpath(FIXED_TOGGLE).click();
    cy.wait(1000);
  }
}

export default CreateProductRulePage;
