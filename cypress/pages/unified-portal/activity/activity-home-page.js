import URL_PATH from '../../../common/Route';

const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "select[id=columns-filter-select]";
const OPERATOR_SELECT = "select[id=columns-operators-select]";
const FILTER_VALUE = "//input[@placeholder='Filter value']";
const CREATE_ACTIVITY_BUTTON = "//span[text()='Create Activity']";
const VERIFY_STATUS = "//div[@data-field='status' and @data-rowindex='0']";
const APPROVE_ACTIVITY = "(//div[@data-rowindex='0']//button)[2]";
const CANCEL_ACTIVITY = "(//div[@data-rowindex='0']//button)[1]";
const SELECT_CANCEL_REASON = "//select[@id='reason-drop-down']";
const SUBMIT_BUTTON = "//span[text()='Submit']";
const SCROLLABLE_AREA = "div.MuiDataGrid-window";
const UPDATE_ACTIVITY_BUTTON = "//div[@data-rowindex='0']//a[contains(@href,'/home/activity/viewActivity/edit')]";
const VIEW_ACTIVITY_BUTTON = "//div[@data-rowindex='0']//a[contains(@href,'/home/activity/viewActivity/view')]";
const VIEW_ACTIVITY_HEADER = '//div/h4[text()="View All Street Marketing Activities"]';
const LEFT_MENU_ACTIVITY = "//p[text()='ACTIVITY']";
const LEFIT_MENU_ACTIVITY = "//p[text()='VIEWACTIVITY']";

class ActivityHomePage {
  static visitActivityHomePageUsingLeftMenu() {
    cy.log('Open Activity -> View Activity page');
    cy.xpath(LEFT_MENU_ACTIVITY).should('be.visible');
    cy.xpath(LEFT_MENU_ACTIVITY).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_ACTIVITY).click();
    cy.xpath(LEFIT_MENU_ACTIVITY).click();
    cy.xpath(VIEW_ACTIVITY_HEADER).should('be.visible');
  }

  static visitActivityHomePageUsingUrl() {
    cy.log('visit activity home page');
    cy.wait(3000);
    cy.visit(URL_PATH.activity);
    cy.xpath(VIEW_ACTIVITY_HEADER).should('be.visible');
  }

  static clickFilterButton() {
    cy.log('click filter button');
    cy.xpath(FILTER).click();
  }

  static selectColumn(value) {
    cy.log('select column from dropdown');
    cy.get(COLUMN_SELECT).select(value);
  }

  static selectOperator(value) {
    cy.log('select operator from dropdown');
    cy.get(OPERATOR_SELECT).select(value);
  }

  static fillFilterValue(filterValue) {
    cy.log('fill filter value for activity');
    cy.xpath(FILTER_VALUE).clear().type(filterValue);
  }

  static clickCreateActivitysButton() {
    cy.log('click Create Activity button');
    cy.xpath(CREATE_ACTIVITY_BUTTON).click();
  }

  static verifyStatus(STATUS) {
    cy.log('Now verify Status');
    cy.wait(1000);
    cy.xpath(VERIFY_STATUS).eq(0).invoke('text').then((value) => {
      expect(value).to.eq(STATUS);
    });
  }

  static scrollToRight() {
    cy.log('Scroll to right');
    cy.get(SCROLLABLE_AREA).scrollTo('right');
    cy.wait(800);
  }

  static approveActivity() {
    cy.log('Now approve Activity');
    this.scrollToRight();
    cy.xpath(APPROVE_ACTIVITY).click();
    cy.xpath(SUBMIT_BUTTON).click();
  }

  static cancelActivity() {
    cy.log('Now cancel Activity');
    this.scrollToRight();
    cy.xpath(CANCEL_ACTIVITY).click();
    cy.xpath(SELECT_CANCEL_REASON).select("Stock");
    cy.xpath(SUBMIT_BUTTON).click();
    cy.wait(2000);
  }

  static clickUpdateActivitysButton() {
    cy.log('Now click update activity button');
    this.scrollToRight();
    cy.xpath(UPDATE_ACTIVITY_BUTTON).click();
  }

  static clickViewActivitysButton() {
    cy.log('Now click view activity button');
    cy.wait(1000);
    this.scrollToRight();
    cy.xpath(VIEW_ACTIVITY_BUTTON).click();
  }
}

export default ActivityHomePage;
