import URL_PATH from '../../../common/Route';

const BTN_FILTER = "//div[@class='MuiDataGrid-toolbar']/button[@aria-label='Show filters']";
const DDL_SEARCHCOLUMN = "select[id='columns-filter-select']";
const TXT_SEARCHVALUE = "//label[text()='Value']/following-sibling::div/input";
const VERIFY_RESELLER_ROLE_ON_TABLE = "//div[@data-field='agentName'][@aria-colindex='2']";
const VERIFY_AGENT_NAME = "(//p[text()='Agent name']/../following-sibling::div/p)[1]";
const VERIFY_AGENT_ID = "//div[@class='rendering-zone']//div[@data-field='userName']";
const SELECT_PER_PAGE = ".MuiTablePagination-select";
const TABLE = "//div[@class='rendering-zone']/div";
const LEFT_MENU_TRIP = "//p[text()='TRIP']";
const LEFIT_MENU_AGENTS = "//p[text()='AGENTS']";
const ENTER_AGENT_NAME = "//input[@name='agentName']";
const ENTER_DESCRIPTION = "//textarea[@name='description']";
const RESET_BUTTON = "//span[text()='Reset']";
const GROUP_COUNT = "(//div[@class='MuiDataGrid-footer']/div/div/p)[2]";

let totalCount = "";
let currentCount = "";

class agentHomePage {
  static clickOnAgentsUsingUrl() {
    cy.log('visit agent home page');
    cy.visit(URL_PATH.agents);
    cy.url().should('contains', URL_PATH.agents);
    cy.wait(5000);
  }

  static setPerPageCount() {
    cy.log("Setting per page limit");
    cy.get(SELECT_PER_PAGE).click();
    const el = `//li[text()='100']`;
    cy.xpath(el).click();
  }

  static validateAgentIdInTable(agentId) {
    cy.xpath(TABLE).eq(0).within(() => {
      cy.get('div').then((element) => {
        cy.log(element.text());
      });
      cy.get('div').eq(1).should('contain.text', agentId);
    });
  }

  static validateAgentNameInTable(agentName) {
    cy.xpath(TABLE).eq(0).within(() => {
      cy.get('div').then((element) => {
        cy.log(element.text());
      });
      cy.get('div').eq(2).should('contain.text', agentName);
    });
  }

  static clickOnAgentsUsingLeftMenu() {
    cy.log('Open Trip -> View agents page');
    cy.xpath(LEFT_MENU_TRIP).should('be.visible');
    cy.xpath(LEFT_MENU_TRIP).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_TRIP).click();
    cy.xpath(LEFIT_MENU_AGENTS).click();
    cy.url().should('contains', URL_PATH.agents);
  }

  static clickOnFilter() {
    cy.log('click on filter');
    cy.xpath(BTN_FILTER).click();
    cy.wait(1000);
  }

  static selectSearchColumn(columnName) {
    cy.log('select Search Column');
    cy.get(DDL_SEARCHCOLUMN).select(columnName);
    cy.wait(1000);
  }

  static fillSearchValue(value) {
    cy.log('fill Search value');
    cy.xpath(TXT_SEARCHVALUE).type(value);
    cy.wait(1000);
  }

  static clickOnViewOfAgent(agent) {
    cy.log('click on view of agent');
    cy.xpath(`${VERIFY_RESELLER_ROLE_ON_TABLE}[@data-value='${agent}']/following-sibling::div//button[2]`).click();
    cy.wait(2000);
  }

  static clickOnView(agent) {
    cy.log('click on view');
    cy.xpath(`//div[@data-value='${agent}']/following-sibling::div/div/a[contains(@href,'view')]`).click();
    cy.wait(2000);
  }

  static clickOnUpdate(agent) {
    cy.log('click on update');
    cy.xpath(`//div[@data-value='${agent}']/following-sibling::div/div/a[contains(@href,'edit')]`).click();
    cy.wait(2000);
  }

  static verifyAgentId(agent) {
    cy.log('verify AgentId');
    cy.xpath(VERIFY_AGENT_ID).should('have.text', agent);
  }

  static verifyAgentName(agent) {
    cy.log('verify agentName');
    cy.xpath(VERIFY_AGENT_NAME).should('have.text', agent);
  }

  static enterAgentName(agentName) {
    cy.log('enter agent name');
    if (agentName !== "") {
      cy.xpath(ENTER_AGENT_NAME).clear().type(agentName);
    }
  }

  static enterDescription(description) {
    cy.log('enter agent name');
    if (description !== "") {
      cy.xpath(ENTER_DESCRIPTION).clear().type(description);
    }
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

  static validateGroup() {

  }
}
export default agentHomePage;
