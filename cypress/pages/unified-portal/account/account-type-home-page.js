import URL_PATH from '../../../common/Route';

const VIEW_ACCOUNT_TYPES_HEADER = '//p[text()="This section allows user to view various accounts and manage them."]';
const CREATE_ACCOUNT_TYPE = "//span[text()='Create Account Type']";
const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "//select[@id='columns-filter-select']";
const OPERATOR_SELECT = "//select[@id='columns-operators-select']";
const FILTER_VALUE = "//input[@placeholder='Filter value']";
const SCROLLABLE_AREA = "div.MuiDataGrid-window";
const EDIT_BUTTON = "//a[contains(@href,'/edit/')]";
const VIEW_BUTTON = "//a[contains(@href,'/view/')]";
const VERIFY_ACCOUNT_ID_INSIDE_TABLE = "//div[@class='MuiDataGrid-cell MuiDataGrid-cellLeft'][1]";
const LEFT_MENU_ACCOUNT = "//p[text()='ACCOUNT']";
const LEFIT_MENU_ACCOUNT_TYPES = "//p[text()='ACCOUNT TYPES']";
const EXPORT_BUTTON = "//button/span[text()='Export']";
const DOWNLOAD_BUTTON = "//li[contains(text(),'Download')]";
const VERIFY_ACCOUNT_TYPE_ID = "(//div[@data-field='accountTypeId'])[2]";
const VERIFY_DESCRIPTION = "(//div[@data-field='description'])[2]";
const NOT_AUTHORIZED = "//h2[text() = ' Not Authroized ']";

class AccountTypeHomePage {
  static visitAccountTypeHomePageUsingLeftMenu() {
    cy.log('Open Account -> View Account Types page');
    cy.xpath(LEFT_MENU_ACCOUNT).should('be.visible');
    cy.xpath(LEFT_MENU_ACCOUNT).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_ACCOUNT).click();
    cy.xpath(LEFIT_MENU_ACCOUNT_TYPES).click();
    cy.xpath(VIEW_ACCOUNT_TYPES_HEADER).should('be.visible');
  }

  static visitAccountTypeHomePageUsingUrl() {
    cy.log('visit account type home page');
    cy.visit(URL_PATH.accountTypes);
    cy.wait(5000);
  }

  static clickCreateAccountButton() {
    cy.xpath(CREATE_ACCOUNT_TYPE, { timeout: 5000 }).click();
    cy.wait(2000);
  }

  static clickFilterButton() {
    cy.log('click filter button');
    cy.xpath(FILTER, { timeout: 5000 }).click();
  }

  static selectColumn(column) {
    cy.log('select column for filter');
    cy.xpath(COLUMN_SELECT, { timeout: 5000 }).select(column);
  }

  static selectOperator(operator) {
    cy.log('select operator for filter');
    cy.xpath(OPERATOR_SELECT, { timeout: 5000 }).select(operator);
  }

  static fillFilterValue(filterValue) {
    cy.log('Provide the filter value you want to show inside the Table');
    cy.xpath(FILTER_VALUE, { timeout: 5000 }).clear().type(filterValue);
  }

  static scrollRight() {
    cy.log('scroll right');
    cy.get(SCROLLABLE_AREA).scrollTo('right');
    cy.wait(500);
  }

  static clickEditButton() {
    cy.log('click edit button');
    this.scrollRight();
    cy.xpath(EDIT_BUTTON).click();
  }

  static clickViewButton() {
    cy.log('click view button');
    this.scrollRight();
    cy.xpath(VIEW_BUTTON).click();
    cy.wait(500);
  }

  static verifyAccountTypeIdInsideTable(accountTypeId) {
    cy.log('Now I can see the Account id details in side the column in first row');
    cy.wait(500);
    cy.xpath(VERIFY_ACCOUNT_ID_INSIDE_TABLE).then((table) => {
      const id = table.text();
      cy.log(id);
      expect(id).equal(accountTypeId);
    });
  }

  static validateTableParameters(columnName, columnFirstRowValue) {
    cy.log('validate value inside table ');
    cy.xpath(`//div[@class='MuiDataGrid-colCellTitle' and text()='${columnName}']/ancestor::div[@class='MuiDataGrid-main']/descendant::div[@role='cell' and text()='${columnFirstRowValue}']`).should('include.text', columnFirstRowValue);
  }

  static clickOnExportButton() {
    cy.log(`click on export button`);
    cy.xpath(EXPORT_BUTTON).click();
  }

  static clickOnDownloadButton() {
    cy.log(`click on download button`);
    cy.xpath(DOWNLOAD_BUTTON).click();
  }

  static getColumnCountToScrollPixel(columnCount) {
    return parseInt(columnCount * 105, 10).toString().concat('px');
  }

  static scrollToRightwithArguments(pixel) {
    cy.log('Scroll to right');
    cy.get(SCROLLABLE_AREA).scrollTo(pixel);
    cy.wait(800);
  }

  /**
   * This method is used to verify the account type id in account types page after
   * applying sort filter
   * @author Biswajit
   * @param {String} accountTypeId it is string parameter which accepts reseller type
   */
  static verifyAccountTypeIdInAccountsTypesPage(accountTypeId) {
    cy.log('Now verify AccounTypetId in Account Types page');
    if (accountTypeId !== "") {
      cy.xpath(VERIFY_ACCOUNT_TYPE_ID).invoke('text').then((account_type_id) => {
        expect(account_type_id).to.eq(accountTypeId);
      });
    } else {
      throw new Error("Passed parameters has an Empty string");
    }
  }

  /**
 *  This method is used to verify the account id in account types page after
 *  applying sort filter
 * @author Biswajit
 * @param {string} description it is string parameter which accepts description
 */
  static verifyDescriptionInAccountsTypesPage(description) {
    cy.log('Now verify Description in Account Types page');

    if (description !== "") {
      cy.xpath(VERIFY_DESCRIPTION).invoke('text').then((description_id) => {
        expect(description_id).to.eq(description);
      });
    } else {
      throw new Error("Passed parameters has an Empty string");
    }
  }
  static verifyNotAuthorized() {
    cy.log('verify not authorized screen is visible');
    cy.xpath(NOT_AUTHORIZED, { timeout: 5000 }).should('be.visible');
  }
}

export default AccountTypeHomePage;
