import URL_PATH from "../../../common/Route";

const CREATE_OPERATION_BUTTON = "//span[contains(text(),'Create Operation')]";
const VERIFY_OPERATION_NAME_ON_TABLE = "//div[@data-field='code'][@aria-colindex='2']";
const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "//select[@id='columns-filter-select']";
const OPERATOR_SELECT = "//select[@id='columns-operators-select']";
const FILTER_VALUE = "//div[@class='MuiFormControl-root MuiDataGridFilterForm-filterValueInput']//input[@type='text']";
const EDIT_OPERATION = "//a[contains(@href,'/edit/')]";
const VIEW_OPERATION = "//a[contains(@href,'/view/')]";
const ALERT_MESSAGE = "#notistack-snackbar";
const CLOSE_ALERTMESSAGE = "//button/span/span[text()='close']";
const LEFT_MENU_GROUP = "//p[text()='GROUP']";
const LEFT_MENU_OPERATIONS = "//p[text()='OPERATIONS']";
const DELETE_BUTTON = "//div[@role='group']/button";
const DELETE_YES_BUTTON = "//span[contains(text(),'Yes')][1]";

class OperationHomePage {
  static clickOnOperationsUsingLeftMenu() {
    cy.log('visit Operation home page');
    cy.xpath(LEFT_MENU_GROUP).should('be.visible');
    cy.xpath(LEFT_MENU_GROUP).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_OPERATIONS).should('be.visible').click();
  }

  static clickOnOperationsUsingUrl() {
    cy.log('visit Operation home page');
    cy.wait(3000);
    cy.visit(URL_PATH.groupOperations);
  }

  static clickOnOperationsFirstUsingLeftMenu() {
    cy.log('visit Operation home page for first time');
    cy.xpath(LEFT_MENU_GROUP).should('be.visible');
    cy.xpath(LEFT_MENU_GROUP).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_GROUP).click();
    cy.xpath(LEFT_MENU_OPERATIONS).click();
    cy.get(ALERT_MESSAGE).then((() => {
      cy.log("Closing alert message ");
      cy.xpath(CLOSE_ALERTMESSAGE).click({ multiple: true });
    }));
  }

  static clickOnOperationsFirstUsingUrl() {
    cy.log('visit Operation home page for first time');
    cy.visit(URL_PATH.groupOperations);
    cy.get(ALERT_MESSAGE).then((() => {
      cy.log("Closing alert message ");
      cy.xpath(CLOSE_ALERTMESSAGE).click({ multiple: true });
    }));
  }

  static clickCreateOperationButton() {
    cy.log('click operation button');
    cy.xpath(CREATE_OPERATION_BUTTON).click();
  }

  static verifyGroupInsideTable(name) {
    cy.log('Testing of create Operation and validate it inside the table successful');
    cy.xpath(VERIFY_OPERATION_NAME_ON_TABLE).invoke('attr', 'data-value').should('equal', name);
  }

  static clickFilterButton() {
    cy.log('click filter button');
    cy.xpath(FILTER).click();
  }

  static selectColumn(column) {
    cy.log('select column for filter');
    cy.xpath(COLUMN_SELECT).select(column);
  }

  static selectOperator(operator) {
    cy.log('select operator for filter');
    cy.xpath(OPERATOR_SELECT).select(operator);
  }

  static typeFilterValue(filterValue) {
    cy.log('type filter value for filter');
    cy.xpath(FILTER_VALUE).clear().type(filterValue);
  }

  static clickEditButton() {
    cy.log('click edit button');
    cy.xpath(EDIT_OPERATION).should('be.visible').click();
  }

  static clickViewButton() {
    cy.log('click view button');
    cy.xpath(VIEW_OPERATION).should('be.visible').click();
  }

  static deleteButton() {
    cy.log('click delete button');
    cy.xpath(DELETE_BUTTON).should('be.visible').click();
  }

  static deleteYesButton() {
    cy.log('click deleteyes button');
    cy.xpath(DELETE_YES_BUTTON).click();
  }
}
export default OperationHomePage;
