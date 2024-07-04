import URL_PATH from "../../../common/Route";

const FROM_GROUP = "//input[@id='update_auto_Select From Group']";
const FROM_OPERATION = "//input[@id='update_auto_Select Operation']";
const TO_GROUP = "//input[@id='update_auto_Select To Group']";
const CREATE_RELATION = "//span[contains(text(),'Create Relation')]";
const EDIT_FROM_GROUP = "//input[@id='update_auto_Select From Group To Update']";
const EDIT_FROM_OPERATION = "//input[@id='update_auto_Select Operation To Update']";
const EDIT_TO_GROUP = "//input[@id='update_auto_Select To Group To Update']";

const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "//select[@id='columns-filter-select']";
const OPERATOR_SELECT = "//select[@id='columns-operators-select']";
const FILTER_VALUE = "//input[@placeholder='Filter value']";

const EDIT_BUTTON = "(//div[@role='group']/button)[1]";
const UPADTE_BUTTON = "//span[contains(text(),'Update Relation')]";
const ALERT_MESSAGE = "//div[@id='notistack-snackbar']";
const CLOSE_ALERTMESSAGE = "//button/span/span[text()='close']";
const LEFT_MENU_GROUP = "//p[text()='GROUP']";
const LEFIT_MENU_RELATIONS = "//p[text()='RELATIONS']";
const EXPORT_BUTTON = "//button/span[text()='Export']";
const DOWNLOAD_BUTTON = "//li[contains(text(),'Download')]";

class CreateRelation {
  static clickOnRelationHomePageUsingLeftMenu() {
    cy.log('visit create relation page');
    cy.xpath(LEFT_MENU_GROUP).should('be.visible');
    cy.xpath(LEFT_MENU_GROUP).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_GROUP).click();
    cy.xpath(LEFIT_MENU_RELATIONS).click();
  }

  static clickOnRelationHomePageFirstUsingLeftMenu() {
    cy.log('visit create relation page for first time');
    cy.xpath(LEFT_MENU_GROUP).should('be.visible');
    cy.xpath(LEFT_MENU_GROUP).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_GROUP).click();
    cy.xpath(LEFIT_MENU_RELATIONS).click();
    cy.xpath(ALERT_MESSAGE).then((() => {
      cy.log("Closing alert message ");
      cy.xpath(CLOSE_ALERTMESSAGE).click({ multiple: true });
    }));
  }

  static clickOnRelationHomePageUsingUrl() {
    cy.log('visit create relation page');
    cy.visit(URL_PATH.groupRelations);
  }

  static clickOnRelationHomePageFirstUsingUrl() {
    cy.log('visit create relation page for first time');
    cy.visit(URL_PATH.groupRelations);
    // cy.xpath(ALERT_MESSAGE).then((() => {
    //   cy.log("Closing alert message ");
    //   cy.xpath(CLOSE_ALERTMESSAGE).click({ multiple: true });
    // }));
  }

  static selectFomGroup(fromGroup) {
    cy.log('select fromGroup for relation');
    cy.xpath(FROM_GROUP).clear().type(fromGroup).type('{downArrow}')
      .type('{enter}');
  }

  static selectToGroup(toGroup) {
    cy.log('select toGroup for relation');
    cy.xpath(TO_GROUP).clear().type(toGroup).type('{downArrow}')
      .type('{enter}');
  }

  static selectOpearation(operation) {
    cy.log('select operation for relation');
    cy.xpath(FROM_OPERATION).clear().type(operation).type('{downArrow}')
      .type('{enter}');
  }

  static clickOnCreateRelation() {
    cy.log('click on create relation');
    cy.xpath(CREATE_RELATION).should('be.visible').click();
  }

  static editFromGroup(fromGroup) {
    cy.log('edit fromGroup');
    cy.xpath(EDIT_FROM_GROUP).clear().type(fromGroup).type('{downArrow}')
      .type('{enter}');
  }

  static editToGroup(toGroup) {
    cy.log('edit toGroup');
    cy.xpath(EDIT_TO_GROUP).clear().type(toGroup).type('{downArrow}')
      .type('{enter}');
  }

  static editOpearation(operation) {
    cy.log('edit operation');
    cy.xpath(EDIT_FROM_OPERATION).clear().type(operation).type('{downArrow}')
      .type('{enter}');
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
    cy.xpath(EDIT_BUTTON).click();
  }

  static clickUpdateButton() {
    cy.log('click Update button');
    cy.xpath(UPADTE_BUTTON).should('be.visible').click();
  }

  static verifyMessage(message) {
    cy.log('verify Message');
    cy.xpath(ALERT_MESSAGE).then((alert) => {
      const text = alert.text();
      cy.log(text);
      expect(text).contains(message);
    });
    cy.log("Closing alert message ");
    cy.xpath(CLOSE_ALERTMESSAGE).click();
    cy.log("It is done");
  }

  static clickOnExportButton() {
    cy.log(`click on export button`);
    cy.xpath(EXPORT_BUTTON).click();
  }

  static clickOnDownloadButton() {
    cy.log(`click on download button`);
    cy.xpath(DOWNLOAD_BUTTON).click();
  }
}
export default CreateRelation;
