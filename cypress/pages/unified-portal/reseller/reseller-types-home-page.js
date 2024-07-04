import URL_PATH from '../../../common/Route';

const CREATE_RESELLER_TYPE = '//span[contains(text(),"Create Reseller Type")]';
const VIEW_RESELLER_TYPE = '//a[contains(@href,"/view/newRType3")]';
const EDIT_RESELLER_TYPE = '//a[contains(@href,"/home/reseller/types/edit")]';
const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "select[id=columns-filter-select]";
const OPERATOR_SELECT = "select[id=columns-operators-select]";
const FILTER_VALUE = '//div[@class="MuiFormControl-root MuiDataGridFilterForm-filterValueInput"]//input[@type="text"]';
const SELECT_PARENT_BUTTON = "//a[contains(@href,'/home/reseller/types/parent')]";
const DELETE_RESELLER_TYPE = "//button[contains(@class,'MuiButtonBase-root MuiButton-root MuiButton-text MuiButtonGroup-grouped')]";
const CLICK_YES_BUTTON = "(//button/span[text()='Yes'])[1]";
const LEFT_MENU_RESELLER = "//p[text()='RESELLER']";
const LEFIT_MENU_RESELLER_TYPES = "//p[text()='RESELLER TYPES']";
const SUBMIT_BUTTON = "//span[text()='Submit']";
const NOT_AUTHORIZED = "//h2[text() = ' Not Authroized ']";
const EMPTY_RESELLER_TYPE = "//div[@data-id]";
const COLUMNS_BUTTON = "//button/span[text() = 'Columns']";
const COLUMNS_SEARCH = "//input[@placeholder='Column title']";
const CLICK_SHOW_ALL = "//button/span[contains(text(),'Show all')]";
const CLICK_HIDE_ALL = "//span[contains(text(),'Hide all')]";
const TOGGLE = "//span[@class = 'MuiSwitch-thumb']";
const COLUMN_TITLE = "//div[@class = 'MuiDataGrid-colCellTitle']";

class ResellerTypesPage {
  static visitResellerTypesPageUsingLeftMenu() {
    cy.log("Now visit reseller types page");
    cy.xpath(LEFT_MENU_RESELLER).should('be.visible');
    cy.xpath(LEFT_MENU_RESELLER).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_RESELLER).click();
    cy.xpath(LEFIT_MENU_RESELLER_TYPES).click();
  }

  static visitResellerTypesPageUsingUrl() {
    cy.log("Now visit reseller types page");
    cy.visit(URL_PATH.resellerTypes);
  }

  static clickCreateResellerTypeButton() {
    cy.xpath(CREATE_RESELLER_TYPE, { timeout: 20000 }).should('be.visible').click();
  }

  static clickEditResellerTypeButton(resellerType) {
    cy.wait(5000);
    const RESELLER_TYPE = EDIT_RESELLER_TYPE.replace('newRType3', resellerType);
    cy.xpath(RESELLER_TYPE).click();
  }

  static clickViewResellerTypeButton(resellerType) {
    cy.wait(5000);
    const RESELLER_TYPE = VIEW_RESELLER_TYPE.replace('newRType3', resellerType);
    cy.xpath(RESELLER_TYPE).click({ force: true });
  }

  static filterResellerType(NAME) {
    cy.xpath(FILTER, { timeout: 5000 }).click();
    cy.get(COLUMN_SELECT, { timeout: 5000 }).select("ID");
    cy.get(OPERATOR_SELECT, { timeout: 5000 }).select("equals");
    cy.xpath(FILTER_VALUE, { timeout: 5000 }).clear().type(NAME);
  }

  static selectFilterColumn(columnName) {
    cy.log('select column');
    cy.get(COLUMN_SELECT).select(columnName);
  }

  static selectFilterOption(option) {
    cy.log('select filter option');
    cy.get(OPERATOR_SELECT).select(option);
  }

  static typeFilterValue(value) {
    cy.log('type filter value');
    cy.xpath(FILTER_VALUE).type(value);
  }

  static clickOnFilters() {
    cy.log('click on filters');
    cy.xpath(FILTER).click();
  }

  static verifyResellerType(resellerType) {
    cy.log('verify reseller type');
    cy.xpath(`//div[@data-value="${resellerType}"]/..`).should('be.visible');
  }

  static verifyFilterOptions() {
    cy.log('verify filter options');
    cy.get(OPERATOR_SELECT).select(0).invoke("val").should("eq", "contains");
    cy.get(OPERATOR_SELECT).select(1).invoke("val").should("eq", "equals");
    cy.get(OPERATOR_SELECT).select(2).invoke("val").should("eq", "startsWith");
    cy.get(OPERATOR_SELECT).select(3).invoke("val").should("eq", "endsWith");
  }

  static clickParentButton() {
    cy.xpath(SELECT_PARENT_BUTTON).click();
  }

  static clickDeleteButton() {
    cy.xpath(DELETE_RESELLER_TYPE).click();
    cy.xpath(CLICK_YES_BUTTON).click();
  }

  static clickSubmit() {
    cy.log("Click submit");
    cy.xpath(SUBMIT_BUTTON).click();
    cy.wait(1000);
  }

  static verifyNotAuthorized() {
    cy.log('verify not authorized');
    cy.xpath(NOT_AUTHORIZED).should('be.visible');
  }

  static verifyEmptyResellerTypeTable() {
    cy.log('verify reseller type table is empty');
    cy.xpath(EMPTY_RESELLER_TYPE).should('not.exist');
  }

  static clickColumns() {
    cy.log('click on columns');
    cy.xpath(COLUMNS_BUTTON).click();
  }

  static clickToggle(toggleButton) {
    cy.log(`click on toggle button for column ${toggleButton}`);
    cy.xpath(`//input[@name="${toggleButton}"]`).click();
    cy.wait(100);
  }

  static searchColumn(columnName) {
    cy.log('search for column in column filter');
    cy.xpath(COLUMNS_SEARCH).type(columnName);
  }

  static verifyColumnWithToggleVisible(columnName) {
    cy.log('verify column With Toggle Visible');
    cy.xpath(`//span[text()="${columnName}"]`).should('be.visible');
    cy.xpath(TOGGLE).should('be.visible');
  }

  static showColumns() {
    cy.log('click show all');
    cy.xpath(CLICK_SHOW_ALL).click();
  }

  static hideColumns() {
    cy.log('click hide all');
    cy.xpath(CLICK_HIDE_ALL).click();
  }

  static verifyColumnsHidden() {
    cy.log('verify columns are hidden');
    cy.xpath(COLUMN_TITLE).should('not.exist');
  }

  static verifyColumnsVisible() {
    cy.log('verify columns are visible');
    cy.xpath(COLUMN_TITLE).should('be.visible');
  }
}

export default ResellerTypesPage;
