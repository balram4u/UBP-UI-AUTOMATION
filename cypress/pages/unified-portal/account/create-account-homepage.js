import URL_PATH from '../../../common/Route';

const CREATE_ACCOUNT_BUTTON = "//span[contains(text(),'Create Account')]";
const ACCOUNT_ID_MATCH = "//input[@name='accountIdMatch']";
const ACCOUNT_TYPE_ID_MATCH = "//input[@name='accountTypeIdMatch']";
const ACCOUNT_TYPE_MATCH = "//input[@name='accountTypeMatch']";
const SEARCH_BUTTON = "//span[contains(text(),'Search')]";
const VIEW_BUTTON = "//a[contains(@href,'/view/')]";
const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "select[id=columns-filter-select]";
const OPERATOR_SELECT = "select[id=columns-operators-select]";
const FILTER_VALUE = "//input[@placeholder='Filter value']";
const SCROLLABLE_AREA = "div.MuiDataGrid-window";
const VERIFY_ACCOUNT_ID_INSIDE_TABLE = "//div[@class='MuiDataGrid-cell MuiDataGrid-cellLeft'][1]";
const VIEW_ACCOUNT_HEADER = '//div/h4[text()="View and Manage your Account Details"]';
const LEFT_MENU_ACCOUNT = "//p[text()='ACCOUNT']";
const LEFIT_MENU_ACCOUNT = "//p[text()='ACCOUNTS']";

class createAccountHomePage {
  static visitAccountTypeHomePageUsingLeftMenu() {
    cy.log('Open Account -> View Account Types page');
    cy.xpath(LEFT_MENU_ACCOUNT).should('be.visible');
    cy.xpath(LEFT_MENU_ACCOUNT).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_ACCOUNT).click();
    cy.xpath(LEFIT_MENU_ACCOUNT).click();
  }

  static visitAccountTypeHomePageUsingUrl() {
    cy.log('visit account type home page');
    cy.visit(URL_PATH.accounts);
    cy.xpath(VIEW_ACCOUNT_HEADER).should('be.visible');
  }

  static clickOnCreateAccountButton() {
    cy.log('click on create Account button');
    cy.xpath(CREATE_ACCOUNT_BUTTON).click();
  }

  static typeAccountTypeIdMatch(accounttypeIdMatch) {
    cy.log('Type account type Id match');
    cy.xpath(ACCOUNT_TYPE_ID_MATCH).clear();
    cy.xpath(ACCOUNT_TYPE_ID_MATCH).type(accounttypeIdMatch).should('have.value', accounttypeIdMatch);
  }

  static typeAccountIdMatch(accountIdMatch) {
    cy.log('Type accountId match');
    cy.xpath(ACCOUNT_ID_MATCH).clear();
    cy.xpath(ACCOUNT_ID_MATCH).type(accountIdMatch).should('have.value', accountIdMatch);
  }

  static typeAccoutTypeMatch(accountTypeMatch) {
    cy.log('Type accountType match');
    cy.xpath(ACCOUNT_TYPE_MATCH).clear();
    cy.xpath(ACCOUNT_TYPE_MATCH).type(accountTypeMatch).should('have.value', accountTypeMatch);
  }

  static clickOnSearchButton() {
    cy.log('click on Search button');
    cy.xpath(SEARCH_BUTTON).click();
  }

  static clickFilterButton() {
    cy.log('Now we are going to get the Account by filtering with Account id and click filter button');
    cy.xpath(FILTER).click();
  }

  static selectColumn(column) {
    cy.log('select column for filter');
    cy.get(COLUMN_SELECT).select(column);
  }

  static selectOperator(operator) {
    cy.log('select operator for filter');
    cy.get(OPERATOR_SELECT).select(operator);
  }

  static typeFilterValue(filterValue) {
    cy.log('type filter value for filter');
    cy.xpath(FILTER_VALUE).type(filterValue).should('have.value', filterValue);
  }

  static scrollRight() {
    cy.log('scroll right');
    cy.get(SCROLLABLE_AREA).scrollTo('right');
  }

  static clickViewButton() {
    cy.log('click view button');
    this.scrollRight();
    cy.wait(500);
    cy.xpath(VIEW_BUTTON).click();
  }

  static verifyAccountIdInsideTable(accountId) {
    cy.log('verify accountId inside table');
    cy.xpath(VERIFY_ACCOUNT_ID_INSIDE_TABLE).then((table) => {
      const id = table.text();
      cy.log(id);
      expect(id).equal(accountId);
      cy.log('Its done!');
    });
  }
}
export default createAccountHomePage;
