import URL_PATH from "../../../common/Route";

const CREATE_GROUP = "//span[contains(text(),'Create Group')]";
const DESCRIPTION = "//*[@name='description']";
const SEARCH_BY_GROUP_NAME = "//input[@name='name']";
const SELECT_STATUS_TYPE = "//select[@name='status']";
const CLICK_ON_SEARCH = "//span[contains(text(),'Search')]";
const VERIFY_GROUP_NAME_ON_TABLE = "//div[@data-field='name'][@aria-colindex='1']";
const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "//select[@id='columns-filter-select']";
const OPERATOR_SELECT = "//select[@id='columns-operators-select']";
const FILTER_VALUE = "//input[@class='MuiInputBase-input MuiInput-input']";
const DELETE_BUTTON = "//div[@role='group']/button";
const DELETE_YES_BUTTON = "//span[contains(text(),'Yes')][1]";
const EDIT_BUTTON = "//a[contains(@href,'/edit/')]";
const VIEW_BUTTON = "//div[@class='MuiButtonGroup-root']/a[1]";
const RESET_BUTTON = "//span[text()='Reset']";
const SUBMIT = "//*[contains(text(),'Submit')]";
const LEFT_MENU_GROUP = "//p[text()='GROUP']";
const LEFIT_MENU_GROUPS = "//p[text()='GROUPS']";
const TABLE_PAGINATION = "(//div[contains(@class,'MuiTablePagination-toolbar')]/p)[2]";
const SCROLLABLE_AREA = "div.MuiDataGrid-window";
const CLICK_COLUMN_BUTTON = "//button[@aria-label='Select columns']";
const GROUP_COUNT = "(//div[@class='MuiDataGrid-footer']/div/div/p)[2]";
const GROUP_ID = "(//div[@data-field='id'])[2]";
const NO_BUTTON = "//button/span[text()='No']";

let totalCount = "";
let currentCount = "";

class GroupHomePage {
  static clickOnGroupUsingLeftMenu() {
    cy.log('visit create group home page');
    cy.xpath(LEFT_MENU_GROUP).should('be.visible');
    cy.xpath(LEFT_MENU_GROUP).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_GROUP).click();
    cy.xpath(LEFIT_MENU_GROUPS).click();
  }

  static clickGroupUsingLeftMenu() {
    cy.log('visit create group home page for first time');
    cy.xpath(LEFT_MENU_GROUP).should('be.visible');
    cy.xpath(LEFT_MENU_GROUP).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_GROUP).click();
    cy.xpath(LEFIT_MENU_GROUPS).click();
  }

  static clickOnGroupUsingUrl() {
    cy.log('visit create group home page for first time');
    cy.visit(URL_PATH.createGroup);
  }

  static clickCreateGroup() {
    cy.log('click create group button');
    cy.xpath(CREATE_GROUP).click();
  }

  static fillDescription(description) {
    cy.log('fill description');
    cy.xpath(DESCRIPTION).type(description).should('have.value', description);
  }

  static submitButton() {
    cy.log('click submit button');
    cy.xpath(SUBMIT).click();
  }

      static deleteButton() {
        cy.log('click delete button');
        cy.xpath(DELETE_BUTTON).click();
      }

  static deleteYesButton() {
    cy.log('click deleteyes button');
    cy.xpath(DELETE_YES_BUTTON).click();
  }

  static clickFilterButton() {
    cy.log('click filter button');
    cy.xpath(FILTER).click();
    cy.wait(1000);
  }

  static selectColumn(column) {
    cy.log('select column for filter');
    cy.xpath(COLUMN_SELECT).select(column);
    cy.wait(1000);
  }

  static selectOperator(operator) {
    cy.log('select operator for filter');
    cy.xpath(OPERATOR_SELECT).select(operator);
    cy.wait(1000);
  }

  static typeFilterValue(filterValue) {
    cy.log('type filter value for filter');
    cy.xpath(FILTER_VALUE).clear().type(filterValue);
    cy.wait(1000);
  }

  static enterGroupNameToSearch(groupName) {
    cy.wait(1000);
    if (groupName != "") {
      cy.log('enter group name and Click on search button to Search group');
      cy.xpath(SEARCH_BY_GROUP_NAME).clear().type(groupName).should('have.value', groupName);
    }
  }

  static selectStatusType(status) {
    cy.log('select status by type');
    cy.xpath(SELECT_STATUS_TYPE).select(status).should('be.visible');
  }

  static clickToSearch() {
    cy.log('Click on search button to Search group');
    cy.xpath(CLICK_ON_SEARCH).click();
  }

  static verifyGroupInsideTable(groupName) {
    cy.log('Here we are verifying the Group name inside the table');
    cy.wait(2000);
    cy.xpath(VERIFY_GROUP_NAME_ON_TABLE).invoke('attr', 'data-value').should('contain', groupName);
  }

  static clickEditButton() {
    cy.log('Now clicking on edit button');
    cy.xpath(EDIT_BUTTON).click();
  }

  static clickViewButton() {
    cy.log('click the View button inside the table to view the Group');
    cy.xpath(VIEW_BUTTON).click();
  }

  static clickResetButton() {
    cy.log('Now clicking on reset button');
    cy.xpath(RESET_BUTTON).click();
  }

  static scrollToBottomWithCondition() {
    cy.log('Scroll to bottom with condition');
    cy.xpath(TABLE_PAGINATION).invoke('text').then((value) => {
      value = value.split(" ")[2];
      if (parseInt(value, 10) > 9) {
        cy.get(SCROLLABLE_AREA).scrollTo('bottom');
      }
    });
    cy.wait(800);
  }

  static clickOnColumnButton() {
    cy.log('click on column button');
    cy.xpath(CLICK_COLUMN_BUTTON).click();
  }

  static createGroupShouldNotVisible() {
    cy.log('validate create group button should not be visible');
    cy.xpath(CREATE_GROUP).should('not.exist');
  }

  static editShouldNotVisible() {
    cy.log('validate edit option should not be visible');
    cy.xpath(EDIT_BUTTON).should('not.exist');
  }

  static groupNameShouldNotExist(groupName) {
    cy.xpath(`//div[@data-field="name" and text()='${groupName}']`).should('not.exist');
  }

  static deleteShouldNotVisible() {
    cy.log('validate delete option should not be visible');
    cy.xpath(DELETE_BUTTON).should('not.exist');
  }

  static validateGroupsStatus(status) {
    cy.log('validate groups do not exist with  ', status);
    cy.xpath(`//div[text()='${status}']`).should('not.exist');
  }

  static validateDefaultGroupCount() {
    cy.log('validate total group count');
    cy.wait(3000);
    cy.xpath(GROUP_COUNT).then((count) => {
      totalCount = count.text();
      cy.log(totalCount);
    });
  }

  static validateCurrentGroupCount() {
    cy.log('validate current group count');
    cy.wait(3000);
    cy.xpath(GROUP_COUNT).then((count) => {
      currentCount = count.text();
      cy.log(currentCount);
      expect(currentCount).to.eq(totalCount);
    });
  }

  static validateGroupShouldNotListed() {
    cy.log('validate group should not exist');
    cy.xpath(GROUP_ID).should('not.exist');
  }

  static clickNoButton() {
    cy.log('click no button');
    cy.xpath(NO_BUTTON).click();
    cy.wait(2000);
  }
}
export default GroupHomePage;
