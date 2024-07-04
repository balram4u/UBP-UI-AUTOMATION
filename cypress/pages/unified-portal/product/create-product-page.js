const CREATE_PRODUCTS_HEADER = '//p[contains(text(),"This section contains all the product specific details including their variants that they hold.")]';
const PRODUCT_NAME_XPATH = '//label[text()="Product Name"]//following::input[1]';
const PRODUCT_CODE_XPATH = '//label[text()="Product Code"]//following::input[1]';
const DESCRIPTION_XPATH = '//label[text()="Description"]//following::textarea[1]';
const SUPPLIERID_XPATH = '//select[@name="supplierId"]';
const PRODUCT_TYPE_XPATH = '//select[@name="productType"]';
const SELECT_WORKFLOW = '//select[@name="workflowId"]';
const SELECT_CATEGORY = '//input[@id="product-select-category-input-box"]';
const SELECT_TAX = '//input[@name="taxIds"]';

const ADD_DATA = '//button/span[text()="Add Data"]';
const DATANAME_XPATH = '//input[@placeholder="Name"]';
const DATAVALUE_XPATH = '//input[@placeholder="Value"]';
const DELETE_DATA_FIELD = '//button//span[text()="delete"]';
const FIRST_DATANAME_XPATH = '(//input[@placeholder="Name"])[1]';
const FIRST_DATAVALUE_XPATH = '(//input[@placeholder="Value"])[1]';

const SUBMIT_XPATH = '//button//span[text()="Submit"]';
const PRODUCT_ADDED_TOASTMESSAGE_XPATH = '//*[contains(text(),"Product added")]';
const TABLE_XPATH = '//div[contains(@class,"MuiDataGrid-row")]//div[@role="cell" and @aria-colindex="3"]';
const ADD_PRODUCT_VARIANT = "//span[contains(text(),'Create Product Variant')]";
const PRODUCT_CATEGORY_AVAILABLE_FORM_DATE_PICKER = '//input[@id="product-available-from-input-box"]';
const PRODUCT_CATEGORY_UNTIL_DATE_PICKER = '//input[@id="product-available-until-input-box"]';
const DATE_CLICK = '//button[contains(@class,"MuiPickersDay-current MuiPickersDay-daySelected")]';

const SELECT_PRODUCT_VARIANT_TEMPLATE_BUTTON = "//span[text()='Select Product Variant Template']";
const UPDATE_PRODUCT_VARIANT_TEMPLATE_BUTTON = "//span[text()='Update Product Variant Template']";
const TEMPLATE_TYPE = "//input[contains(@id,'-dialog-template-type-input-box')]";
const TEMPLATE_SUBMIT_BUTTON = "//h6[contains(text(),'Template')]/ancestor::div[@role='dialog']/descendant::span[text()='Submit']";
const TEMPLATE_RESET_BUTTON = "//h6[contains(text(),'Template')]/ancestor::div[@role='dialog']/descendant::span[text()='Reset']/..";
const PRODUCT_VARIANT_TEMPLATE_CLOSE_BUTTON = "//h6[contains(text(),'Template')]/preceding-sibling::button";
const PRODUCT_VARIANT_CLOSE_BUTTON = "//h6[contains(text(),'Product Variant')]/preceding-sibling::button";
const SELECT_PRODUCT_TEMPLATE_BUTTON = "//span[text()='Select Product Template']";
const UPDATE_PRODUCT_TEMPLATE_BUTTON = "//span[text()='Update Product Template']";

const FILE_UPLOAD_FIELD = '//input[@type="file"]';
const SELECT_BUTTON = '//span[contains(text(),"file_upload")]';

class CreateProductPage {
  static verifyCreateProductHeader() {
    cy.xpath(CREATE_PRODUCTS_HEADER)
      .should('be.visible');
  }

  static fillProductName(PRODUCT_NAME) {
    cy.log('Enter product name');
    cy.xpath(PRODUCT_NAME_XPATH).clear().clear().type(PRODUCT_NAME);
  }

  static fillProductCode(PRODUCT_CODE) {
    cy.log('Enter product code');
    cy.xpath(PRODUCT_CODE_XPATH).clear().type(PRODUCT_CODE);
  }

  static fillDescription(DESCRIPTION) {
    cy.log('Enter product description');
    cy.xpath(DESCRIPTION_XPATH).clear().type(DESCRIPTION);
  }

  static fillSupplierID(SUPPLIERID) {
    cy.log('Enter supplier id');
    cy.xpath(SUPPLIERID_XPATH).should('be.visible').select(SUPPLIERID);
    // cy.xpath(SUPPLIERID_XPATH).type(SUPPLIERID);
  }

  static selectProductType(PRODUCT_TYPE) {
    cy.log('Enter product type');
    cy.xpath(PRODUCT_TYPE_XPATH).select(PRODUCT_TYPE);
  }

  static fillAppliedFromDate() {
    cy.log('Enter date applied from');
    cy.xpath(PRODUCT_CATEGORY_AVAILABLE_FORM_DATE_PICKER).click();
    cy.wait(1000);
    cy.xpath(DATE_CLICK).click();
    cy.wait(1000);
  }

  static fillAppliedUntillDate() {
    cy.log('Enter date applied until');
    cy.xpath(PRODUCT_CATEGORY_UNTIL_DATE_PICKER).click();
    cy.wait(1000);
    cy.xpath(DATE_CLICK).click();
    cy.wait(1000);
  }

  static selectProductWorkflow(PRODUCT_WORKFLOW) {
    if (PRODUCT_WORKFLOW !== "") {
      cy.log('Select product workflow');
      cy.xpath(SELECT_WORKFLOW).select(PRODUCT_WORKFLOW);
    }
  }

  static uploadImage(IMAGE_FILE) {
    if (IMAGE_FILE !== "") {
      cy.log('upload file');
      const fileName = IMAGE_FILE;
      cy.xpath(SELECT_BUTTON).click();
      cy.xpath(FILE_UPLOAD_FIELD).invoke('show').attachFile(fileName);
      cy.wait(1000);
    }
  }

  static selectProductCategory(productCategory) {
    cy.log('Select product category');
    cy.xpath(SELECT_CATEGORY).clear().type(productCategory);
    cy.contains(productCategory).click();
  }

  static fillProductTaxInformation(productTax) {
    cy.log('Enter product tax information');
    cy.log(productTax);
    if (productTax !== '') {
      cy.log('PRODUCT_TAX selection block');
      cy.xpath(SELECT_TAX).clear().type(productTax);
      cy.contains(productTax).click();
    }
  }

  static fillDataName(DATANAME) {
    cy.xpath(DATANAME_XPATH).clear().type(DATANAME);
  }

  static fillDataValue(DATAVALUE) {
    cy.xpath(DATAVALUE_XPATH).clear().type(DATAVALUE);
  }

  static clickOnCreateProductVariant() {
    cy.log('Click create product variant button');
    cy.xpath(ADD_PRODUCT_VARIANT).click();
  }

  static submitProduct() {
    cy.log('Click submit button');
    cy.xpath(SUBMIT_XPATH).click();
  }

  static confirm(PRODUCT_NAME) {
    cy.log("Product Added Successfully");
    cy.xpath(PRODUCT_ADDED_TOASTMESSAGE_XPATH)
      .should('be.visible');
    cy.xpath(CREATE_PRODUCTS_HEADER)
      .should('be.visible');
    cy.xpath(TABLE_XPATH)
      .each(($div) => {
        cy.log($div.text());
        if ($div.text() === PRODUCT_NAME) {
          cy.log(`${PRODUCT_NAME} found on the table`);
          // expect(checkflag).to.equals(1)
        }
        // expect($div.text()).to.equal("Automation-Test-20")
      });
    // cy.log(tablevalues);
  }

  static addData() {
    cy.log('Click add data button');
    cy.xpath(ADD_DATA).click();
  }

  static deleteDataField() {
    cy.log('remove data field');
    cy.xpath(DELETE_DATA_FIELD).click();
  }

  static addMultipleData(dataName, dataValue) {
    const name = dataName.split(",");
    const value = dataValue.split(",");
    if (name.length > 1) {
      for (let index = 0; index < name.length; index++) {
        this.addData();
        cy.wait(500);
        cy.xpath(DATANAME_XPATH).eq(index).clear().type(name[index]);
        cy.wait(500);
        cy.xpath(DATAVALUE_XPATH).eq(index).clear().type(value[index]);
        cy.wait(500);
      }
    } else {
      this.addData();
      cy.wait(500);
      cy.xpath(FIRST_DATANAME_XPATH).clear().type(dataName);
      cy.wait(500);
      cy.xpath(FIRST_DATAVALUE_XPATH).clear().type(dataValue);
      cy.wait(500);
    }
  }

  static clickOnSelectVariantTemplateButton() {
    cy.log('click on select variant template button');
    cy.xpath(SELECT_PRODUCT_VARIANT_TEMPLATE_BUTTON).click();
  }

  static clickOnUpdateVariantTemplateButton() {
    cy.log('click on update variant template button');
    cy.xpath(UPDATE_PRODUCT_VARIANT_TEMPLATE_BUTTON).click();
  }

  static clickOnSelectProductTemplateButton() {
    cy.log('click on select product template button');
    cy.xpath(SELECT_PRODUCT_TEMPLATE_BUTTON).click();
  }

  static clickOnUpdateProductTemplateButton() {
    cy.log('click on update product button');
    cy.xpath(UPDATE_PRODUCT_TEMPLATE_BUTTON).click();
  }

  static provideTemplateType(templateType) {
    cy.log('provide template type');
    cy.xpath(TEMPLATE_TYPE).clear().type(templateType).type('{downArrow}')
      .type('{enter}');
  }

  static selectFieldValue(fieldName, fieldValue) {
    if (fieldName != "") {
      cy.log('select field details');
      cy.xpath(`//label[contains(text(),'${fieldName}')]/..//select`).scrollIntoView().select(fieldValue);
    }
  }

  static fillFieldValue(fieldName, fieldValue) {
    if (fieldName != "") {
      cy.log('fill field details');
      cy.xpath(`//label[contains(text(),'${fieldName}')]/..//input`).scrollIntoView().type(fieldValue).type('{downArrow}')
        .type('{enter}');
    }
  }

  static verifyFieldValue(fieldName, fieldValue) {
    cy.log('verify field details');
    cy.xpath(`(//label[contains(text(),'${fieldName}')]/..//div//span)[1]`).scrollIntoView().should('have.text', fieldValue);
  }

  static verifyFieldValueNotExist(fieldName, fieldValue) {
    cy.log('verify field details');
    cy.xpath(`(//label[contains(text(),'${fieldName}')]/..//div//span)[1]`).should('not.contain', fieldValue);
  }

  static clickTemplateSubmitButton() {
    cy.log('click template submit button');
    cy.xpath(TEMPLATE_SUBMIT_BUTTON).click({
      force: true,
    });
  }

  static clickTemplateResetButton() {
    cy.log('click template reset button');
    cy.xpath(TEMPLATE_RESET_BUTTON).click({ force: true });
  }

  static closeVariantTemplateWindow() {
    cy.log('close varint template window');
    cy.xpath(PRODUCT_VARIANT_TEMPLATE_CLOSE_BUTTON).click();
  }

  static closeVariantWindow() {
    cy.log('close varint template window');
    cy.xpath(PRODUCT_VARIANT_CLOSE_BUTTON).click();
  }

  static verifyAlertMessage(inputValue, alertMessage) {
    cy.log('verify alert message');
    cy.xpath(`//input[@value='${inputValue}']/../../..//p`).scrollIntoView().should('include.text', alertMessage);
  }
}

export default CreateProductPage;
