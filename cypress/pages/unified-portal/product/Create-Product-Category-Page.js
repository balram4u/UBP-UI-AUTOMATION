const PRODUCT_CATEGORY_NAME_XPATH = '//input[@name="name"]';
const PRODUCT_CATEGORY_STATUS_XPATH = "//select[@name='status']";
const DESCRIPTION_XPATH = '//textarea[@name="description"]';
const PRODUCT_PARENT_CATEGORY_XPATH = "//input[@id='product-category-parent-id-dropdown']";
const PRODUCT_TAX_XPATH = '//input[@id="product-category-taxes-dropdown"]';
const PRODUCT_CATEGORY_AVAILABLE_FORM_DATE_PICKER = '//input[@id="product-category-from-date"]';
const PRODUCT_CATEGORY_UNTIL_DATE_PICKER = '//input[@id="product-category-to-date"]';
const PRODUCT_SUBMIT_XPATH = '//span[contains(text(),"Submit")]';
const MESSAGE_ALERT = '//div[@id="notistack-snackbar"]';
const UPDATE = "//span[contains(text(),'Update')]";
const PRODUCT_WORKFLOW_XPATH = "//select[@name='workflowId']";
const FILE_UPLOAD_FIELD = '//input[@type="file"]';
const SELECT_BUTTON = '//span[contains(text(),"file_upload")]';
const ADD_DATA = '//button/span[text()="Add Data"]';
const DATANAME_XPATH = '//input[@placeholder="Name"]';
const DATAVALUE_XPATH = '//input[@placeholder="Value"]';
const DATE_CLICK = '//button[contains(@class,"MuiPickersDay-current MuiPickersDay-daySelected")]';

// workflowId
class CreateProductCategoryPage {
  static createProductCategories(PRODUCT_CATEGORY_NAME, PRODUCT_CATEGORY_STATUS,
    // eslint-disable-next-line max-len
    DESCRIPTION, PRODUCT_PARENT_CATEGORY, PRODUCT_WORKFLOW, PRODUCT_TAX, IMAGE_NAME, DATANAME, DATAVALUE) {
    if (PRODUCT_CATEGORY_NAME !== "") {
      cy.xpath(PRODUCT_CATEGORY_NAME_XPATH).clear().type(PRODUCT_CATEGORY_NAME);
    }
    cy.xpath(PRODUCT_CATEGORY_STATUS_XPATH).select(PRODUCT_CATEGORY_STATUS);
    cy.xpath(DESCRIPTION_XPATH).clear().type(DESCRIPTION);
    if (PRODUCT_PARENT_CATEGORY !== '') {
      cy.xpath(PRODUCT_PARENT_CATEGORY_XPATH).clear().type(PRODUCT_PARENT_CATEGORY);
      cy.contains(PRODUCT_PARENT_CATEGORY).click();
    }
    if (PRODUCT_WORKFLOW !== '') {
      cy.xpath(PRODUCT_WORKFLOW_XPATH, { timeout: 2000 }).select(PRODUCT_WORKFLOW);
    }
    if (PRODUCT_TAX !== '') {
      cy.xpath(PRODUCT_TAX_XPATH).clear().type(PRODUCT_TAX);
      cy.contains(PRODUCT_TAX).click();
    }
    cy.xpath(PRODUCT_CATEGORY_AVAILABLE_FORM_DATE_PICKER).click();
    cy.xpath(DATE_CLICK).click();
    cy.xpath(PRODUCT_CATEGORY_UNTIL_DATE_PICKER).click();
    cy.xpath(DATE_CLICK).click();

    if (IMAGE_NAME !== '') {
      const fileName = IMAGE_NAME;
      cy.xpath(SELECT_BUTTON).click();
      cy.xpath(FILE_UPLOAD_FIELD).invoke('show').attachFile(fileName);
      cy.wait(1000);
    }

    if (DATANAME !== "") {
      cy.xpath(ADD_DATA).click();
      cy.xpath(DATANAME_XPATH).clear().type(DATANAME);
      cy.xpath(DATAVALUE_XPATH).clear().type(DATAVALUE);
    }

    cy.xpath(PRODUCT_SUBMIT_XPATH).click();
  }

  static fillProductCategoryName(name) {
    if (name !== "") {
      cy.xpath(PRODUCT_CATEGORY_NAME_XPATH).clear().type(name);
    }
  }

  static fillProductCategoryNameWithCharacterLength(name, characterLength) {
    let value = "";
    for (let i = 1; i <= parseInt(characterLength, 10); i++) {
      value = value.concat(name);
    }
    cy.xpath(PRODUCT_CATEGORY_NAME_XPATH).clear().type(value);
  }

  static fillDescription(description) {
    cy.xpath(DESCRIPTION_XPATH).clear().type(description);
  }

  static fillDescriptionWithCharacterLength(description, characterLength) {
    let value = "";
    for (let i = 1; i <= parseInt(characterLength, 10); i++) {
      value = value.concat(description);
    }
    cy.xpath(DESCRIPTION_XPATH).clear().type(value);
  }

  static fillProductCategoryStatus(PRODUCT_CATEGORY_STATUS) {
    cy.xpath(PRODUCT_CATEGORY_STATUS_XPATH).select(PRODUCT_CATEGORY_STATUS);
  }

  static fillProductParentCategory(PRODUCT_PARENT_CATEGORY) {
    if (PRODUCT_PARENT_CATEGORY !== '') {
      cy.xpath(PRODUCT_PARENT_CATEGORY_XPATH).select(PRODUCT_PARENT_CATEGORY);
    }
  }

  static fillProductWorkflow(PRODUCT_WORKFLOW) {
    if (PRODUCT_WORKFLOW !== '') {
      cy.xpath(PRODUCT_WORKFLOW_XPATH).select(PRODUCT_WORKFLOW);
    }
  }

  static fillProductTaxInformation(PRODUCT_TAX) {
    if (PRODUCT_TAX !== '') {
      cy.xpath(PRODUCT_TAX_XPATH).clear().type(PRODUCT_TAX);
    }
  }

  static fillProductCategoryAvailableFrom(PRODUCT_CATEGORY_AVAILABLE_FORM) {
    cy.xpath(PRODUCT_CATEGORY_AVAILABLE_FORM_DATE_PICKER).clear().type(PRODUCT_CATEGORY_AVAILABLE_FORM);
  }

  static selectProductCategoryAvailableUntil(PRODUCT_CATEGORY_UNTIL) {
    cy.xpath(PRODUCT_CATEGORY_UNTIL_DATE_PICKER).clear().type(PRODUCT_CATEGORY_UNTIL);
  }

  static clickUpdateButton() {
    cy.xpath(UPDATE).click();
  }

  static confirmMessage(message) {
    cy.log('Verifing message');
    cy.xpath(MESSAGE_ALERT).should('have.text', message);
    cy.log("It is done");
  }

  static clickOnSubmitButton() {
    cy.log('click on submit button');
    cy.xpath(PRODUCT_SUBMIT_XPATH).click();
  }

  static validateDateFormat(availableFrom, availableUntil) {
    cy.log('validate date format');
    cy.wait(1000);
    cy.xpath(PRODUCT_CATEGORY_AVAILABLE_FORM_DATE_PICKER).invoke('val').then((dateFrom) => {
      const text1 = dateFrom;
      cy.log('now from date is ****', text1);
      expect(text1).to.contains(availableFrom);
    });
    cy.wait(1000);
    cy.xpath(PRODUCT_CATEGORY_UNTIL_DATE_PICKER).invoke('val').then((dateUntil) => {
      const text2 = dateUntil;
      cy.log('now until date is ****', text2);
      expect(text2).to.contains(availableUntil);
    });
  }
  static enterName(PRODUCT_CATEGORY_NAME) {
    cy.xpath(PRODUCT_CATEGORY_NAME_XPATH).clear().type(PRODUCT_CATEGORY_NAME);
  }
}

export default CreateProductCategoryPage;
