/* eslint-disable max-len */
const VIEW_PRODUCTS_HEADER = '//p[contains(text(),"This section contains all the product specific details including their variants that they hold.")]';
const EDIT_PRODUCTS_HEADER = '//p[contains(text(),"This section allows the user to edit existing product with new changes.")]';
const PRODUCTSKU_XPATH = '//label[text()="Product SKU"]//following::input[1]';
const SUPPLIER_REFERENCE_XPATH = '//input[@id="variant-supplier-reference-input-box"]';
const TERMS_AND_CONDITIONS_XPATH = '//input[contains(@name,"termsAndConditions")]';
const VARIANT_NAME_XPATH = "//input[@name='productVariantName']";
const VARIANT_DESCRIPTION_XPATH = "//input[@name='productVariantDescription']";
const EANCODE_XPATH = '//input[contains(@name,"EANCode")]';
const STATUS_XPATH = '//select[@id="variant-status-dropdown"]';
const PRODUCT_CATEGORY_AVAILABLE_FORM_DATE_PICKER = "//input[@id='variant-available-from-input-box']";
const PRODUCT_CATEGORY_UNTIL_DATE_PICKER = "//input[@id='variant-available-until-input-box']";
const ADD_DATA = '(//button/span[text()="Add Data"])[2]';
const DATANAME_XPATH = '//input[@placeholder="Name"]';
const DATAVALUE_XPATH = '//input[@placeholder="Value"]';
const FIRST_DATANAME_XPATH = '(//input[@placeholder="Name"])[1]';
const FIRST_DATAVALUE_XPATH = '(//input[@placeholder="Value"])[1]';
const PRODUCT_VARIANT_CURRENCY = '//input[@name="unitPrice.currency"]';
const PRODUCT_VARIANT_PRICE = '//input[@name="unitPrice.price"]';

const SUBMIT_VARIANT_XPATH = '(//span[text()="Submit"])[2]';
const SUBMIT_VARIANT_XPATH_EDIT = "//span[text()='Submit']";
const UPDATE_SUBMIT_BUTTON_XPATH = '//span[text()="Submit"]';
// const PRODUCT_VARIANT_ADDED_TOASTMESSAGE_XPATH = '//div[text()="Product Variant has been Added"]';
const EDIT_VARIANT_BUTTON = "(//a[contains(@href,'/variants/edit/')])[1]";
const VIEW_VARIANTS_EDIT_HEADER = "//p[contains(text(),'View and manage your product variant details')]";
const VIEW_PRODUCT_SKU_XPATH = "//div[@data-field='productSKU' and @data-rowindex=0]";
const VIEW_SUPPLIER_REF_XPATH = "//div[@data-field='supplierReference' and @data-rowindex=0]";
const VIEW_STATUS_XPATH = "//div[@data-field='status' and @data-rowindex=0]";
const VIEW_VARIANT_CURRENCY_XPATH = "//div[@data-field='currency' and @data-rowindex=0]";
const VIEW_VARIANT_PRICE_XPATH = "//div[@data-field='price' and @data-rowindex=0]";
const VIEW_TERMS_AND_CONDITIONS_XPATH = "//div[@data-field='termsAndConditions' and @data-rowindex=0]";
const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "select[id=columns-filter-select]";
const OPERATOR_SELECT = "select[id=columns-operators-select]";
const FILTER_VALUE = "//input[@placeholder='Filter value']";
const PAGINATION_LIST = "//div[@role='button' and @aria-haspopup='listbox']";
const CLICK_COUNT_PER_PAGE = "//li[text()='10']";
const CLICK_NEXT_PAGE = "//button[@title='Next page']";
const CLICK_PREVIOUS_PAGE = "//button[@title='Previous page']";
const SELECT_UPSELL_OPTION = "//select[@id='upsell-option']";
const SELECT_PRODUCT_SKU = "//input[@id='product-sku' or @name='productSKU']";
const DATE_CLICK = '//button[contains(@class,"MuiPickersDay-current MuiPickersDay-daySelected")]';
const PRODUCT_VARIANT_RESET_BUTTON = "//h6[contains(text(),'Variant')]/ancestor::header/following-sibling::div//span[text()='Reset']/..";
const STATIC_UPSELL_PRODUCT_SKU = "//input[@id='product-sku']";
const PRODUCT_SKU_DISABLED = "//input[@id='variant-product-sku-input-box']";
const FILE_UPLOAD_FIELD = '//input[@type="file"]';
const SELECT_BUTTON = '//span[contains(text(),"file_upload")]';

class ProductVariantPage {
  static fillProductVariantInformation(
    PRODUCTSKU, SUPPLIER_REFERENCE, STATUS,
    TERMS_AND_CONDITIONS, EANCODE,
    DATANAME_VARIENT, DATAVALUE_VARIENT, VARIANT_CURRENCY, VARIANT_PRICE, VARIANT_NAME, VARIANT_DESCRIPTION,
  ) {
    cy.log('Adding Product Varient information');
    cy.log(PRODUCTSKU, SUPPLIER_REFERENCE, STATUS,
      TERMS_AND_CONDITIONS, EANCODE,
      DATANAME_VARIENT, DATAVALUE_VARIENT, VARIANT_CURRENCY, VARIANT_PRICE, VARIANT_NAME, VARIANT_DESCRIPTION);
    cy.wait(800);
    cy.xpath(PRODUCTSKU_XPATH).clear().type(PRODUCTSKU);
    cy.xpath(SUPPLIER_REFERENCE_XPATH).clear().type(SUPPLIER_REFERENCE);
    cy.xpath(TERMS_AND_CONDITIONS_XPATH).clear().type(TERMS_AND_CONDITIONS);
    if (VARIANT_NAME != "") {
      cy.xpath(VARIANT_NAME_XPATH).clear().type(VARIANT_NAME);
    }
    if (VARIANT_DESCRIPTION != "") {
      cy.xpath(VARIANT_DESCRIPTION_XPATH).clear().type(VARIANT_DESCRIPTION);
    }
    cy.xpath(EANCODE_XPATH).clear().type(EANCODE);
    cy.xpath(STATUS_XPATH).select(STATUS);
    cy.log('select from date');
    cy.xpath(PRODUCT_CATEGORY_AVAILABLE_FORM_DATE_PICKER).click();
    cy.wait(1000);
    cy.xpath(DATE_CLICK).click();
    cy.wait(1000);
    cy.log('select to date');
    cy.xpath(PRODUCT_CATEGORY_UNTIL_DATE_PICKER).click();
    cy.wait(1000);
    cy.xpath(DATE_CLICK).click();
    cy.wait(1000);
    if (DATANAME_VARIENT !== "") {
      this.addMultipleVarientData(DATANAME_VARIENT, DATAVALUE_VARIENT);
    }
    cy.xpath(PRODUCT_VARIANT_CURRENCY).type(VARIANT_CURRENCY);
    cy.xpath(PRODUCT_VARIANT_PRICE).clear().type(VARIANT_PRICE);
    cy.xpath(SUBMIT_VARIANT_XPATH).click();
    cy.wait(100);
  }

  static verifyProductVariantAdded() {
    cy.log('Veriy product variant added');
    cy.xpath(VIEW_PRODUCTS_HEADER)
      .should('be.visible');
    // cy.xpath(PRODUCT_VARIANT_ADDED_TOASTMESSAGE_XPATH)
    //   .should('be.visible');
  }

  static verifyEditProductVariantAdded() {
    cy.log('Validating edit product variant added');
    cy.xpath(EDIT_PRODUCTS_HEADER)
      .should('be.visible');
  }

  static clickVariantEditButton() {
    cy.log('Click variant edit button');
    cy.xpath(VIEW_VARIANTS_EDIT_HEADER).should('be.visible');
    cy.xpath(EDIT_VARIANT_BUTTON).click();
  }

  static fillTermsAndConditions(TERMS_AND_CONDITIONS) {
    cy.log('Enter terms and conditions');
    cy.xpath(TERMS_AND_CONDITIONS_XPATH).clear().type(TERMS_AND_CONDITIONS);
  }

  static fillEANCode(EANCODE) {
    cy.log('Enter EAN code');
    cy.xpath(EANCODE_XPATH).clear().type(EANCODE);
  }

  static fillUnitPrice(VARIANT_PRICE) {
    cy.log('Enter until price');
    cy.xpath(PRODUCT_VARIANT_PRICE).clear().type(VARIANT_PRICE);
  }

  static fillVariantCurrencyWithCharacterLength(currency, characterLength) {
    cy.log('Enter variant currency');
    let value = "";
    for (let i = 1; i <= parseInt(characterLength, 10); i++) {
      value = value.concat(currency);
    }
    cy.xpath(PRODUCT_VARIANT_CURRENCY).wait(500).clear().clear()
      .type(value);
  }

  static fillVariantEANCodeWithCharacterLength(code, characterLength) {
    cy.log('Enter EAN code');
    let value = "";
    for (let i = 1; i <= parseInt(characterLength, 10); i++) {
      value = value.concat(code);
    }
    cy.xpath(EANCODE_XPATH).wait(500).clear().clear()
      .type(value);
  }

  static clickSubmitButton() {
    cy.log('Click submit button');
    cy.xpath(UPDATE_SUBMIT_BUTTON_XPATH).click();
  }

  static clickOnVariantSubmitButton() {
    cy.log('Click submit button');
    cy.xpath(SUBMIT_VARIANT_XPATH).click();
  }

  static fillProductVariantInformationByClickingOnEditProduct(PRODUCTSKU, SUPPLIER_REFERENCE, STATUS, TERMS_AND_CONDITIONS, EANCODE, DATANAME_VARIENT, DATAVALUE_VARIENT, VARIANT_CURRENCY, VARIANT_PRICE) {
    cy.log('Adding Product Varient information');
    cy.xpath(PRODUCTSKU_XPATH).clear().type(PRODUCTSKU);
    cy.xpath(SUPPLIER_REFERENCE_XPATH).clear().type(SUPPLIER_REFERENCE);
    cy.xpath(TERMS_AND_CONDITIONS_XPATH).clear().type(TERMS_AND_CONDITIONS);
    cy.xpath(EANCODE_XPATH).clear().type(EANCODE);
    cy.xpath(STATUS_XPATH).select(STATUS);
    cy.xpath(PRODUCT_VARIANT_CURRENCY).clear().type(VARIANT_CURRENCY);
    cy.xpath(PRODUCT_VARIANT_PRICE).clear().type(VARIANT_PRICE);
    cy.xpath(SUBMIT_VARIANT_XPATH_EDIT).click();
  }

  static verifyTableCountOnFirstPage(STATUS) {
    cy.log('Validating table count on first page');
    cy.get(`[data-value="${STATUS}"]`).should('have.length', 10);
  }

  static verifyTableCountOnNextPage(STATUS) {
    cy.log('Validating table count on next page');
    cy.get(`[data-value="${STATUS}"]`).should('have.length', 1);
  }

  static clickPagingation() {
    cy.xpath(PAGINATION_LIST).click();
    cy.xpath(CLICK_COUNT_PER_PAGE).click();
  }

  static goToNextPage() {
    cy.log('Go to next page');
    cy.xpath(CLICK_NEXT_PAGE).click();
  }

  static goToPreviousPage() {
    cy.log('Go to previous page');
    cy.xpath(CLICK_PREVIOUS_PAGE).click();
  }

  static clickFilterButton() {
    cy.xpath(FILTER).click();
  }

  static selectStatus(status) {
    cy.xpath(STATUS_XPATH).select(status);
  }

  static selectColumn(value) {
    cy.get(COLUMN_SELECT).select(value);
  }

  static selectOperator(value) {
    cy.get(OPERATOR_SELECT).select(value);
  }

  static fillFilterValue(filterValue) {
    cy.xpath(FILTER_VALUE).clear().type(filterValue);
    cy.wait(1000);
  }

  static ValidateProductVariantInformation(PRODUCTSKU, SUPPLIER_REFERENCE, STATUS, VARIANT_CURRENCY, VARIANT_PRICE, TERMS_AND_CONDITIONS) {
    cy.log('Validating Product variant information');
    cy.wait(1000);
    this.clickFilterButton();
    cy.wait(800);
    this.selectColumn("Supplier Reference");
    cy.wait(1000);
    this.selectOperator("equals");
    cy.wait(1000);
    this.fillFilterValue(SUPPLIER_REFERENCE);
    cy.wait(800);
    this.clickFilterButton();
    cy.xpath(VIEW_PRODUCT_SKU_XPATH).should('have.text', PRODUCTSKU);
    cy.xpath(VIEW_SUPPLIER_REF_XPATH).should('have.text', SUPPLIER_REFERENCE);
    cy.xpath(VIEW_STATUS_XPATH).should('have.text', STATUS);
    cy.xpath(VIEW_VARIANT_CURRENCY_XPATH).should('have.text', VARIANT_CURRENCY);
    cy.xpath(VIEW_VARIANT_PRICE_XPATH).should('have.text', VARIANT_PRICE);
    cy.xpath(VIEW_TERMS_AND_CONDITIONS_XPATH).should('have.text', TERMS_AND_CONDITIONS);
  }

  static fillUpSellOption(UPSELL_OPTION) {
    cy.log('Select upsell option');
    cy.xpath(SELECT_UPSELL_OPTION).select(UPSELL_OPTION);
  }

  static fillProductSKU(PRODUCT_SKU) {
    cy.log('Select product sku');
    cy.xpath(SELECT_PRODUCT_SKU).type(PRODUCT_SKU).type('{downArrow}')
      .type('{enter}');
  }

  static validateDateFormat(availableFrom, availableUntil) {
    cy.log('validate date format');
    cy.wait(1000);
    cy.xpath(APPLIED_FROM_DATE_VARIANT_XPATH_EDIT).invoke('val').then((dateFrom) => {
      const text1 = dateFrom;
      cy.log('now from date is ****', text1);
      expect(text1).to.contains(availableFrom);
    });
    cy.wait(1000);
    cy.xpath(APPLIED_UNTILL_DATE_VARIANT_XPATH_EDIT).invoke('val').then((dateUntil) => {
      const text2 = dateUntil;
      cy.log('now until date is ****', text2);
      expect(text2).to.contains(availableUntil);
    });
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

  static clickProductVariantResetButton() {
    cy.log('click product variant reset button');
    cy.xpath(PRODUCT_VARIANT_RESET_BUTTON).click({ force: true });
  }

  static staticUpSellOptionNotVisible() {
    cy.log('verify static upsell option is not visible');
    cy.xpath(STATIC_UPSELL_PRODUCT_SKU).should('not.exist');
  }

  static addMultipleVarientData(dataName, dataValue) {
    const name = dataName.split(",");
    const value = dataValue.split(",");
    if (name.length > 1) {
      for (let index = 0; index < name.length; index++) {
        cy.xpath(ADD_DATA).click().wait(500);
        cy.xpath(DATANAME_XPATH).eq(index).clear().type(name[index])
          .wait(500);
        cy.xpath(DATAVALUE_XPATH).eq(index).clear().type(value[index])
          .wait(500);
      }
    } else {
      cy.xpath(ADD_DATA).click().wait(500);
      cy.xpath(FIRST_DATANAME_XPATH).clear().type(dataName).wait(500);
      cy.xpath(FIRST_DATAVALUE_XPATH).clear().type(dataValue).wait(500);
    }
  }

  static verifyProductSKUDisabled() {
    cy.log('verify product sku should be disabled');
    cy.xpath(PRODUCT_SKU_DISABLED).should('be.disabled');
  }

  static uploadImage(imageFile) {
    if (imageFile !== '') {
      cy.log('upload file');
      const fileName = imageFile;
      cy.xpath(SELECT_BUTTON).click();
      cy.xpath(FILE_UPLOAD_FIELD).invoke('show').attachFile(fileName);
      cy.wait(1000);
    }
  }
}

export default ProductVariantPage;
