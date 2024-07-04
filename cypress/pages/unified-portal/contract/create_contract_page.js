/// <reference types="cypress" />
import URL_PATH from "../../../common/Route";
import CommonUtilities from "../../../common/Util";
import FTLExpressionsPage from "./ftl_expressions_page";

const CREATE_CONTRACT = "//span[text()='Create Contract']/..";
const CONTRACT_TYPE_DD = "#contract-type-drop-down";
const NAME = "//input[@name = 'name']";
const CLONE_NAME = "(//input[@name = 'name'])[2]";
const IMPORT_ID = "input[name = 'importId']";
const CLONE_IMPORT_ID = "(//input[@name = 'importId'])[2]";
const DESCRIPTION = "input[name = 'description']";
const CLONE_DESCRIPTION = "(//input[@name = 'description'])";
const RESELLER_TYPE = "#reseller-type-drop-down";
// const CLONE_RESELLER_TYPE = "#reseller-type-drop-down";
const COUNTRY = "#country-drop-down";
const CONTRACT_STATUS = "#contract-status-drop-down";
const COMMISSION_MODE = "#commission-mode-drop-down";
const SUBMIT_BUTTON = "//span[text()='Submit']";
const RESET_BUTTON = "//button/span[text() = 'Reset']";
const EDIT_BUTTON = "//a[contains(@href,'/home/contract/contracts/edit')]";
const CLONE_BUTTON = "//span[text() = 'content_copy']";
const CLONE_BUTTON_CLONING = "//span[text() = 'Clone']";
const UPDATE = "//span[text()='Update']";
const MESSAGE_ALERT = '//div[@id="notistack-snackbar"]';
const LEFT_MENU_CONTRACT = "//p[text()='CONTRACT']";
const LEFIT_MENU_CONTRACTS = "//p[text()='CONTRACTS']";
const REGION = "//select[@id='region-drop-down']";
const SEARCH_BUTTON = "//button//span[text()='Search']";
const EDIT_CONTRACT_BUTTON = "//a[contains(@href,'/home/contract/contracts/edit/')][1]";
const PRICE_BUTTON = "//a[@title='Price']";
const CREATE_MARGIN = "//span[text()='Add Margin for ']";
const PRODUCTS_PAGE_HEADER = "//h4[text()='Select a product & Add margin']";
const PRODUCT_NAME = "//input[@name=\"productName\"]";
const ADD_ENTITIES_BUTTON = "//button//span[text()= 'Add Entities']";
const ADD_BUTTON = "//button/span[text()=\"Add\"]";
const SAVE_BUTTON = "//button/span[text()='Save']";
const SNACKBAR = "#notistack-snackbar";
// price entry locators starts here
const RANGE_FROM = "//input[@id=\"rules[0].rangeFrom\"]";
const RANGE_TO = "//input[@id=\"rules[0].rangeTo\"]";
const DELETE_ROW = "(//span[text()='delete'])[2]";
const ACCOUNT_TYPE1 = "//select[@id=\"rules[0].productRules[0].accountType\"]";
const ACCOUNT_TYPE2 = "//select[@id=\"rules[0].productRules[1].accountType\"]";
const ACCOUNT_TYPE3 = "//select[@id=\"rules[0].productRules[2].accountType\"]";
const ACCOUNT_TYPE4 = "//select[@id=\"rules[0].productRules[3].accountType\"]";
const ACCOUNT_ID1 = "//input[@name=\"rules[0].productRules[0].accountId\"]";
const ACCOUNT_ID3_SELECT = "//select[@id='rules[0].productRules[2].accountId']";
const ACCOUNT_ID4_SELECT = "//select[@id='rules[0].productRules[3].accountId']";
const ACCOUNT_ID2 = "//input[@name=\"rules[0].productRules[1].accountId\"]";
const ACCOUNT_ID3 = "//select[@id=\"rules[0].productRules[2].accountId\"]";
const ACCOUNT_ID4 = "//input[@name=\"rules[0].productRules[0].accountId\"]";
const VALUE1 = "//select[@id=\"rules[0].productRules[0].expressionValue\"]";
const VALUE2 = "//select[@id=\"rules[0].productRules[1].expressionValue\"]";
const VALUE3 = "//select[@id=\"rules[0].productRules[2].expressionValue\"]";
const VALUE4 = "//select[@id=\"rules[0].productRules[3].expressionValue\"]";
const CONTRACT_VALUE1 = "//input[@name=\"rules[0].productRules[0].contractValue\"]";
const CONTRACT_VALUE2 = "//input[@name=\"rules[0].productRules[1].contractValue\"]";
const CONTRACT_VALUE3 = "//input[@name=\"rules[0].productRules[2].contractValue\"]";
const CONTRACT_VALUE4 = "//input[@name=\"rules[0].productRules[3].contractValue\"]";
const WALLET_TYPE1 = "//select[@id=\"rules[0].productRules[0].walletType\"]";
const WALLET_TYPE2 = "//select[@id=\"rules[0].productRules[1].walletType\"]";
const WALLET_TYPE3 = "//select[@id=\"rules[0].productRules[2].walletType\"]";
const WALLET_TYPE4 = "//select[@id=\"rules[0].productRules[3].walletType\"]";
const TAG1 = "//select[@id=\"rules[0].productRules[0].tag\"]";
const TAG2 = "//select[@id=\"rules[0].productRules[1].tag\"]";
const TAG3 = "//select[@id=\"rules[0].productRules[2].tag\"]";
const TAG4 = "//select[@id=\"rules[0].productRules[3].tag\"]";
const YES_BUTTON = "//button/span[text()='Yes']";
const EDIT_PRODUCT = "//button[@title='Edit']";
const EXPORT_BUTTON = "//button/span[text()='Export']";
const DOWNLOAD_BUTTON = "//li[contains(text(),'Download')]";
const SCROLLABLE_AREA = "div.MuiDataGrid-window";
const EDIT_PRODUCT_SKU = "(//button/span[@class='MuiButton-label'])[7]";
const EDIT_RULE = "(//button[contains(@class,'MuiButtonGroup-groupedTextPrimary')]/span[@class='MuiButton-label'])[2]";
const PRODUCT_STATUS_TOGGLE = "(//input[@name='status']/..)[1]";
const VIEW_PRODUCT_SKU = "(//button/span[@class='MuiButton-label'])[6]";
const MARGIN_TABLE = "(//div[@class='MuiDataGrid-main'])[2]";
const VIEW_CONTRACT_BUTTON = "a[title='View']";
const APPROVE_CLONE_BUTTON = "//div[@aria-label='group action buttons']/button[3]";
const APPROVE_CLONE_YES_BUTTON = "//span[text()='Yes']";
const OK = "//span[text()='OK']";
const VALIDATE_COMMISSION_VALUE = "(//input[@value='VALUE'])[1]";
const ADD_RANGE_BUTTON = "//span[text()='Add Range']";
const RANGE_FROM2 = "//input[@id=\"rules[1].rangeFrom\"]";
const RANGE_TO2 = "//input[@id=\"rules[1].rangeTo\"]";
const ACCOUNT_TYPE1_2 = "//select[@id=\"rules[1].productRules[0].accountType\"]";
const ACCOUNT_TYPE2_2 = "//select[@id=\"rules[1].productRules[1].accountType\"]";
const ACCOUNT_ID1_2 = "//input[@name=\"rules[1].productRules[0].accountId\"]";
const ACCOUNT_ID2_2 = "//input[@name=\"rules[1].productRules[1].accountId\"]";
const VALUE1_2 = "//select[@id=\"rules[1].productRules[0].expressionValue\"]";
const VALUE2_2 = "//select[@id=\"rules[1].productRules[1].expressionValue\"]";
const CONTRACT_VALUE1_2 = "//input[@name=\"rules[1].productRules[0].contractValue\"]";
const CONTRACT_VALUE2_2 = "//input[@name=\"rules[1].productRules[1].contractValue\"]";
const WALLET_TYPE1_2 = "//select[@id=\"rules[1].productRules[0].walletType\"]";
const WALLET_TYPE2_2 = "//select[@id=\"rules[1].productRules[1].walletType\"]";
const TAG1_2 = "//select[@id=\"rules[1].productRules[1].tag\"]";
const TAG2_2 = "//select[@id='rules[1].productRules[1].tag']";
const NOT_AUTHORIZED = "//h2[text() = ' Not Authroized ']";
const TOGGLE_BUTTON = "//input[@name='validFrom']";
const SELECT_DATE = "//input[@name='startDate']";


class CreateContractPage {
  static visitContractPageUsingLeftMenu() {
    cy.log('Open Account -> View Account Types page');
    cy.xpath(LEFT_MENU_CONTRACT).should('be.visible');
    cy.xpath(LEFT_MENU_CONTRACT).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_CONTRACT).click();
    cy.xpath(LEFIT_MENU_CONTRACTS).click();
  }

  static scrollRight() {
    cy.log('scroll right');
    cy.get(SCROLLABLE_AREA).scrollTo('right');
    cy.wait(1000);
  }

  static visitContractPageUsingUrl() {
    cy.log('visit contract page');
    cy.wait(3000);
    cy.visit(URL_PATH.contracts);
  }

  static clickCreateContract() {
    cy.log('click create contract');
    cy.log("click create contract button");
    cy.xpath(CREATE_CONTRACT).click();
    cy.wait(1000);
  }

  static checkAllowedStatus(allowedStatus) {
    cy.get(CONTRACT_STATUS).invoke('text').should('eq', allowedStatus);
  }

  static selectContractType(type) {
    cy.log('select contract type for create contract');
    cy.get(CONTRACT_TYPE_DD).select(type);
  }

  static addDescription(desc) {
    cy.log("Now add descriptions of contract");
    cy.get(DESCRIPTION).clear().type(desc);
  }

  // eslint-disable-next-line no-unused-vars
  static selectResellerType(type) {
    cy.log("Now select reseller type of contract");
    cy.get(RESELLER_TYPE).select(0);
  }

  static selectCountry(country) {
    cy.log("Now select country of contract");
    cy.get(COUNTRY).select(country);
  }

  static selectStatus(status) {
    cy.log("Now select status of contract");
    cy.get(CONTRACT_STATUS).select(status);
  }

  static selectCommissionMode(commissionMode) {
    cy.log("Now select commission mode of contract");
    cy.get(COMMISSION_MODE).select(commissionMode);
  }

  static selectRegion(region) {
    if (region !== "") {
      cy.log("Select region");
      cy.xpath(REGION).select(region);
    }
  }

  static addName(name) {
    if (name !== "") {
      cy.log("Now add name of contract");
      cy.xpath(NAME).should('be.visible').clear({ force: true });
      cy.xpath(NAME).should('be.visible').type(name, { force: true });
    }
  }

  static enterImportid(id) {
    if (id !== "") {
      cy.log("Now enter import id of contract");
      cy.get(IMPORT_ID).type(id);
    }
  }

  static clickSubmit() {
    cy.log("Click submit");
    cy.xpath(SUBMIT_BUTTON).click();
  }

  static clickEdit() {
    cy.log("Click edit button");
    cy.xpath(EDIT_BUTTON).click();
    cy.wait(1000);
  }

  static clickUpdate() {
    cy.log('click Update');
    cy.xpath(UPDATE).click();
    cy.wait(1000);
  }

  static confirmMessage(message) {
    cy.xpath(MESSAGE_ALERT).should('have.text', message);
    cy.log("It is done");
  }

  static clickSearch() {
    cy.log('click on search');
    cy.xpath(SEARCH_BUTTON, { timeout: 5000 }).click();
    // cy.wait(2000);
  }

  static verifyContractName(contractName) {
    cy.log('verify contract name after search');
    cy.xpath(`//div[@title='${contractName}']`).should('be.visible');
  }

  static verifyStatus(status) {
    cy.log('verify status of contract');
    cy.xpath(`//div[@title='${status}']`).should('exist');
  }

  static clickOnEdit() {
    cy.log('click on edit contract button');
    cy.xpath(EDIT_CONTRACT_BUTTON).click();
    cy.wait(1000);
  }

  static clickOnPrice() {
    cy.log('click on price button');
    cy.xpath(PRICE_BUTTON).click();
  }

  static clickCreateMargin() {
    cy.log('click on create margin');
    cy.xpath(CREATE_MARGIN).click();
  }

  static verifyProductsPage() {
    cy.log('verify header');
    cy.xpath(PRODUCTS_PAGE_HEADER).should('be.visible');
  }

  static enterProductName(productName) {
    cy.log('enter product name');
    cy.xpath(PRODUCT_NAME, { timeout: 5000 }).type(productName);
  }

  static verifyProduct(productName) {
    cy.log('verify product name in search result');
    cy.xpath(`//div[@data-value='${productName}']`);
  }

  static clickProductAction(productName) {
    cy.log('click on action button of the product');
    cy.xpath(`//div[@data-value='${productName}']//..//div/button`).click();
    cy.wait(1000);
  }

  static verifyActionPageHeader(productName) {
    cy.log('verify products page heading');
    cy.xpath(`//h6[text()='Add margin of variants for ${productName}']`);
  }

  static clickTransactionActionButton(transactionType) {
    cy.log('click transaction action button');
    cy.xpath(`//tr/th[text()='${transactionType}']//..//td/button`).click();
    // cy.xpath(`//button[@title='${transactionType}']`).click();
    cy.wait(2000);
  }

  static enterRange(rangeFrom, rangeTo) {
    cy.log('enter range values');
    cy.xpath(RANGE_FROM).clear().type(rangeFrom);
    cy.xpath(RANGE_TO).clear().type(rangeTo);
  }

  static enterAccountType(accountType1, accountType2, accountType3, accountType4) {
    cy.log('enter account types for all 4 rows');
    if (accountType1 !== "") {
      cy.xpath(ACCOUNT_TYPE1).select(accountType1);
    }

    if (accountType2 !== "") {
      cy.xpath(ACCOUNT_TYPE2).select(accountType2);
    }

    if (accountType3 !== "") {
      cy.xpath(ACCOUNT_TYPE3).select(accountType3);
    }

    if (accountType4 !== "") {
      cy.xpath(ACCOUNT_TYPE4).select(accountType4);
    }
  }

  // eslint-disable-next-line max-len
  static enterPriceDetailsforFTLExpressionRow1(ftlAccountType1, ftlAccountId1, ftlValue1, ftlContractValue1, ftlWalletType1, ftlTag1,
    condition1, mode1, valueType, amount, elseValueType, elseAmount, message, condition2, mode2) {
    cy.xpath('(//span[text()="delete"])').its('length').then((Length) => {
      const size = Length;
      cy.log(size);
      if (size === 2) {
        cy.log('delete second row only if it is FTL expression price entry');
        cy.xpath(DELETE_ROW).click();
      }
    });
    // cy.log('delete second row');
    // cy.xpath(DELETE_ROW).click();
    cy.log('enter row 3 details for FTL Expression');
    cy.log('enter values');
    if (ftlValue1 !== "") {
      cy.xpath(VALUE3).select(ftlValue1);
    }

    // FTL page data
    FTLExpressionsPage.selectConditions(condition1, condition2);
    FTLExpressionsPage.clickOK();
    FTLExpressionsPage.selectMode(condition1, condition2, mode1, mode2);
    FTLExpressionsPage.selectValueType(valueType);
    FTLExpressionsPage.enterAmount(amount);
    FTLExpressionsPage.selectValueTypeforElseCondition(elseValueType);
    FTLExpressionsPage.enterAmountforElseCondition(elseAmount);
    FTLExpressionsPage.clickValidate();
    FTLExpressionsPage.clickOK();
    CommonUtilities.validateMessage(message);

    cy.log('select account type');
    if (ftlAccountType1 !== "") {
      cy.xpath(ACCOUNT_TYPE3).select(ftlAccountType1);
    }

    cy.log('enter account type for all 4 rows');
    if (ftlAccountId1 !== "") {
      cy.xpath(ACCOUNT_ID3_SELECT).select(ftlAccountId1);
    }

    cy.log('enter contract values for all 4 rows');
    if (ftlContractValue1 !== "") {
      cy.xpath(CONTRACT_VALUE3).type(ftlContractValue1);
    }

    cy.log('select wallet types for all 4 rows');
    if (ftlWalletType1 !== "") {
      cy.xpath(WALLET_TYPE3).select(ftlWalletType1);
    }

    cy.log('select tags for all 4 rows');
    if (ftlTag1 !== "") {
      cy.xpath(TAG3).select(ftlTag1);
    }
  }

  // eslint-disable-next-line max-len
  static enterPriceDetailsforFTLExpressionRow2(ftlAccountType2, ftlAccountId2, ftlValue2, ftlContractValue2, ftlWalletType2, ftlTag2) {
    cy.log('enter row 2 details for FTL Expression');
    if (ftlAccountType2 !== "") {
      cy.xpath(ACCOUNT_TYPE4).select(ftlAccountType2);
    }

    if (ftlAccountId2 !== "") {
      cy.xpath(ACCOUNT_ID4_SELECT).select(ftlAccountId2);
    }

    if (ftlValue2 !== "") {
      cy.xpath(VALUE4).select(ftlValue2);
    }

    if (ftlContractValue2 !== "") {
      cy.xpath(CONTRACT_VALUE4).type(ftlContractValue2);
    }

    if (ftlWalletType2 !== "") {
      cy.xpath(WALLET_TYPE4).select(ftlWalletType2);
    }

    if (ftlTag2 !== "") {
      cy.xpath(TAG4).select(ftlTag2);
    }
  }

  static enterAccountID(accountId1, accountId2, accountId3, accountId4) {
    cy.log('enter account type for all 4 rows');
    if (accountId1 !== "") {
      cy.xpath(ACCOUNT_ID1).clear().type(accountId1);
    }

    if (accountId2 !== "") {
      cy.xpath(ACCOUNT_ID2).clear().type(accountId2);
    }

    if (accountId3 !== "") {
      cy.xpath(ACCOUNT_ID3).select(accountId3);
    }

    if (accountId4 !== "") {
      cy.xpath(ACCOUNT_ID4).clear().type(accountId4);
    }
  }

  static enterValues(value1, value2, value3, value4) {
    cy.log('enter values for all 4 rows');
    if (value1 !== "") {
      cy.xpath(VALUE1).select(value1);
    }

    if (value2 !== "") {
      cy.xpath(VALUE2).select(value2);
    }

    if (value3 !== "") {
      cy.xpath(VALUE3).select(value3);
    }

    if (value4 !== "") {
      cy.xpath(VALUE4).select(value4);
    }
  }

  static enterContractValue(contractValue1, contractValue2, contractValue3, contractValue4) {
    cy.log('enter contract values for all 4 rows');
    if (contractValue1 !== "") {
      cy.xpath(CONTRACT_VALUE1).clear().type(contractValue1);
    }

    if (contractValue2 !== "") {
      cy.xpath(CONTRACT_VALUE2).clear().type(contractValue2);
    }

    if (contractValue3 !== "") {
      cy.xpath(CONTRACT_VALUE3).clear().type(contractValue3);
    }

    if (contractValue4 !== "") {
      cy.xpath(CONTRACT_VALUE4).clear().type(contractValue4);
    }
  }

  static selectWalletType(walletType1, walletType2, walletType3, walletType4) {
    cy.log('select wallet types for all 4 rows');
    if (walletType1 !== "") {
      cy.xpath(WALLET_TYPE1).select(walletType1);
    }
    if (walletType2 !== "") {
      cy.xpath(WALLET_TYPE2).select(walletType2);
    }
    if (walletType3 !== "") {
      cy.xpath(WALLET_TYPE3).select(walletType3);
    }
    if (walletType4 !== "") {
      cy.xpath(WALLET_TYPE4).select(walletType4);
    }
  }

  static selectTags(tag1, tag2, tag3, tag4) {
    cy.log('select tags for all 4 rows');
    if (tag1 !== "") {
      cy.xpath(TAG1).select(tag1);
    }

    if (tag2 !== "") {
      cy.xpath(TAG2).select(tag2);
    }

    if (tag3 !== "") {
      cy.xpath(TAG3).select(tag3);
    }

    if (tag4 !== "") {
      cy.xpath(TAG4).select(tag4);
    }
  }

  static clickAddEntities() {
    cy.log('click on add entities button');
    cy.xpath(ADD_ENTITIES_BUTTON).click();
  }

  static clickAdd() {
    cy.log('click add button');
    cy.xpath(ADD_BUTTON).click();
  }

  static clickSave() {
    cy.log('click on save');
    cy.xpath(SAVE_BUTTON).click();
    cy.wait(500);
  }

  static verifySuccessPopup(successMessage) {
    cy.log('verify success popup');
    cy.get(SNACKBAR).should('include.text', successMessage);
  }

  // eslint-disable-next-line no-dupe-class-members
  static verifyProduct(productType) {
    cy.log('verify product type');
    cy.xpath(`//div[text()='${productType}']`).should('be.visible');
  }

  static clickDelete(product) {
    cy.log('click delete button');
    cy.xpath(`//div[text()='${product}']//..//..//button[4]`).click();
    cy.xpath(YES_BUTTON).click();
  }

  static clickReset() {
    cy.log("Click submit");
    cy.xpath(RESET_BUTTON).click();
    cy.wait(1000);
  }

  static resetName() {
    cy.log("should be blank on clicking reset");
    cy.get('[name = "name"]').should('be.empty');
  }

  static resetImportid() {
    cy.log("should be blank after clicking reset");
    cy.get(IMPORT_ID).should('be.empty');
  }

  static enterSearchValue(searchFeild, searchValue) {
    cy.log("enter value in search field");
    cy.xpath(`//input[@name='${searchFeild}']`).clear().type(searchValue);
  }

  static clickClone() {
    cy.log("Click clone button");
    cy.xpath(CLONE_BUTTON).click();
    cy.wait(1000);
  }

  static addClonedName(name) {
    cy.log("Now add name of cloned contract");
    cy.xpath(CLONE_NAME).clear().type(name);
  }

  static enterClonedImportid(id) {
    cy.log("Now enter import id of contract");
    cy.xpath(CLONE_IMPORT_ID).type(id);
  }

  static clickCloneCloning() {
    cy.wait(5000);
    cy.log("Click clone button on clone page");
    cy.xpath(CLONE_BUTTON_CLONING).click();
  }

  static addClonedDescription(desc) {
    cy.log("Now add descriptions of contract clone");
    cy.xpath(CLONE_DESCRIPTION).type(desc);
  }

  static clickEditProduct() {
    cy.log("Click edit button");
    cy.xpath(EDIT_PRODUCT).click();
    cy.wait(1000);
  }

  static clickOnExportButton() {
    cy.log(`click on export button`);
    cy.xpath(EXPORT_BUTTON).click();
  }

  static clickOnDownloadButton() {
    cy.log(`click on download button`);
    cy.xpath(DOWNLOAD_BUTTON).click();
  }

  static verifyNotEditable() {
    cy.log('verify name field is not editable');
    cy.xpath(NAME).should('have.attr', 'disabled');
  }

  static verifyEditNotVisible() {
    cy.log('verify edit button is not visible');
    cy.xpath(EDIT_BUTTON).should('not.exist');
  }

  static verifyEditIsVisible() {
    cy.log('verify edit button is visible');
    this.scrollRight();
    cy.xpath(EDIT_BUTTON).should('be.visible');
  }

  static editProductSKU() {
    cy.log('click on edit rule button');
    cy.xpath(EDIT_PRODUCT_SKU).click();
  }

  static editRule() {
    cy.log('click on edit rule button');
    cy.xpath(EDIT_RULE).click();
  }

  static clickProductStatusToggle() {
    cy.log('click on product status toggle');
    cy.xpath(PRODUCT_STATUS_TOGGLE).click();
  }

  static clickYes() {
    cy.log('click on yes button');
    cy.xpath(YES_BUTTON).click();
    cy.wait(1000);
  }

  static clickView() {
    cy.log('click on view button');
    cy.xpath(VIEW_PRODUCT_SKU).click();
  }

  static verifyMarginTable() {
    cy.log('verify margin table is visible');
    cy.xpath(MARGIN_TABLE).should('be.visible');
  }

  static clickViewContract() {
    cy.log("Clicking on View contract button");
    cy.get(VIEW_CONTRACT_BUTTON).first().click();
  }

  static verifyViewContractField(fieldname, fieldValue) {
    cy.log("Verifying the contract field with value ", fieldname, fieldValue);
    cy.xpath(`//input[@name='${fieldname}']`).should('have.attr', 'value', fieldValue);
  }

  static approveClonedContract() {
    cy.log("clicking on Approve button");
    cy.xpath(APPROVE_CLONE_BUTTON).click();
  }

  static clickYesApproveClonedContract() {
    cy.log("clicking Yes");
    cy.xpath(APPROVE_CLONE_YES_BUTTON).click();
  }

  // eslint-disable-next-line max-len
  static enterPriceEntryDetails(rowIndex, accountType, accountId, value, contractValue, walletType, tag) {
    cy.log("Selecting account type as ", accountType);
    if (accountType !== "") {
      cy.xpath(`//select[@id='rules[0].productRules[${rowIndex}].accountType']`).select(accountType);
    }
    if (accountType === 'Fixed') {
      cy.xpath(`//select[@name='rules[0].productRules[${rowIndex}].accountId']`).select(accountId);
    } else if (accountId !== "") {
      cy.xpath(`//input[@name='rules[0].productRules[${rowIndex}].accountId']`).type(accountId);
    }
    if (value !== "") {
      cy.xpath(`//select[@id='rules[0].productRules[${rowIndex}].expressionValue']`).select(value);
    }
    if (contractValue !== "") {
      cy.xpath(`//input[@name='rules[0].productRules[${rowIndex}].contractValue']`).type(contractValue);
    }
    if (walletType !== "") {
      cy.xpath(`//select[@id='rules[0].productRules[${rowIndex}].walletType']`).select(walletType);
    }
    if (tag !== "") {
      cy.xpath(`//select[@id='rules[0].productRules[${rowIndex}].tag']`).select(tag);
    }
  }

  static clickProductViewAction(product) {
    cy.log('view product');
    cy.xpath(`(//div[text()='${product}']/../../div[@data-field='actions']//button[@title='View'])[1]`).click();
  }

  static validatePriceEntryRanges(priceEntryRanges) {
    cy.log('validate price entry should exist');
    cy.xpath(`//div[text()='${priceEntryRanges}']`).should('be.visible');
    this.clickOK();
  }

  static clickOK() {
    cy.log('click OK button');
    cy.xpath(OK).click();
  }

  static validateCommissionValue(value) {
    cy.log('validate commission value');
    cy.xpath(VALIDATE_COMMISSION_VALUE.replace("VALUE", value)).should('be.visible');
  }

  static clickAddRange() {
    cy.log('click add range button');
    cy.xpath(ADD_RANGE_BUTTON, { timeout: 3000 }).click();
  }

  static enterRange2(rangeFrom2, rangeTo2) {
    cy.log('enter another range values');
    cy.xpath(RANGE_FROM2).clear().type(rangeFrom2);
    cy.xpath(RANGE_TO2).clear().type(rangeTo2);
  }

  static enterAccountType2(accountType1_2, accountType2_2) {
    cy.log('enter account types for all 2 rows');
    if (accountType1_2 !== "") {
      cy.xpath(ACCOUNT_TYPE1_2).select(accountType1_2);
    }

    if (accountType2_2 !== "") {
      cy.xpath(ACCOUNT_TYPE2_2).select(accountType2_2);
    }
  }

  static enterAccountID2(accountId1_2, accountId2_2) {
    cy.log('enter account type for all 2 rows');
    if (accountId1_2 !== "") {
      cy.xpath(ACCOUNT_ID1_2).clear().type(accountId1_2);
    }

    if (accountId2_2 !== "") {
      cy.xpath(ACCOUNT_ID2_2).clear().type(accountId2_2);
    }
  }

  static enterValues2(value1_2, value2_2) {
    cy.log('enter values for all 2 rows');
    if (value1_2 !== "") {
      cy.xpath(VALUE1_2).select(value1_2);
    }

    if (value2_2 !== "") {
      cy.xpath(VALUE2_2).select(value2_2);
    }
  }

  static enterContractValue2(contractValue1_2, contractValue2_2) {
    cy.log('enter contract values for all 2 rows');
    if (contractValue1_2 !== "") {
      cy.xpath(CONTRACT_VALUE1_2).clear().type(contractValue1_2);
    }

    if (contractValue2_2 !== "") {
      cy.xpath(CONTRACT_VALUE2_2).clear().type(contractValue2_2);
    }
  }

  static selectWalletType2(walletType1_2, walletType2_2) {
    cy.log('select wallet types for all 2 rows');
    if (walletType1_2 !== "") {
      cy.xpath(WALLET_TYPE1_2).select(walletType1_2);
    }
    if (walletType2_2 !== "") {
      cy.xpath(WALLET_TYPE2_2).select(walletType2_2);
    }
  }

  static selectTags2(tag1_2, tag2_2) {
    cy.log('select tags for all 2 rows');
    if (tag1_2 !== "") {
      cy.xpath(TAG1_2).select(tag1_2);
    }

    if (tag2_2 !== "") {
      cy.xpath(TAG2_2).select(tag2_2);
    }
  }

  static verifyNotAuthorized() {
    cy.log('verify not authorized screen is visible');
    cy.xpath(NOT_AUTHORIZED, { timeout: 5000 }).should('be.visible');
  }

  static clickToggleButton() {
    cy.log('click on Toggle button');
    cy.xpath(TOGGLE_BUTTON).click();
  }

  static selectDate() {
    cy.xpath(SELECT_DATE, { timeout: 5000 }).clear().type("20/05/2025");
  }
}

export default CreateContractPage;
