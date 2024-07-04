import URL_PATH from "../../../common/Route";

const MOVE_TO_RIGHT_BUTTON = "//button[@aria-label='move selected right']";
const VALIDATE_MESSAGE = "//div[@id='dialog-description']//h2";
const OKAY_BUTTON = "//button/span[text()='Okay']";
const SAVE_BUTTON = "//button/span[text()='Save']";
const ENTER_DESCRIPTION = "//textarea[@id='description']";
const ENTER_WORKFLOW_NAME = "//input[@id='name']";
const ENTER_GROUP_NAME = "(//input[@placeholder='Search Groups'])[1]";
const VERIFY_WORKFLOW_NAME_ON_TABLE = "//div[@data-field='name'][@data-rowindex='0']";
const CREATE_NEW_BUTTON = "//a/span[text()='Create New']";

class SccWorkFlowPage {
  static clickOnWorkflowsUsingUrl() {
    cy.log("Navigate to workflows page");
    cy.visit(URL_PATH.workflows);
    cy.wait(3000);
  }

  static clickCreateNew() {
    cy.log("click on create new button");
    cy.xpath(CREATE_NEW_BUTTON).click();
    cy.wait(1000);
  }

  static enterWorkFlowName(workFlowName) {
    cy.log("enter workflow name");
    cy.xpath(ENTER_WORKFLOW_NAME).clear().type(workFlowName);
  }

  static enterAndSelectGroupName(groupName) {
    cy.log("enter group name and select group name");
    cy.xpath(ENTER_GROUP_NAME).clear().type(groupName);
    cy.wait(900);
    cy.xpath(`//input[@type='checkbox' and @aria-labelledby='${groupName}']`).click();
    cy.wait(900);
    cy.xpath(MOVE_TO_RIGHT_BUTTON).click();
    cy.wait(900);
  }

  static enterDescription(description) {
    cy.log("enter description");
    cy.xpath(ENTER_DESCRIPTION).clear().type(description);
  }

  static clickSave() {
    cy.log("click on save button");
    cy.xpath(SAVE_BUTTON).click();
    cy.wait(900);
  }

  static validateMessage(message) {
    cy.log("validate message");
    cy.xpath(VALIDATE_MESSAGE).then((Message) => {
      const text = Message.text();
      cy.log(text);
      expect(text).contains(message);
    });
  }

  static clickOkay() {
    cy.log("click on okay button");
    cy.xpath(OKAY_BUTTON).click();
    cy.wait(1000);
  }

  static verifyWorkflowInsideTable(workFlowName) {
    cy.log('Here we are verifying the Group name inside the table');
    cy.wait(2000);
    cy.xpath(VERIFY_WORKFLOW_NAME_ON_TABLE).invoke('attr', 'data-value').should('contain', workFlowName);
  }
}

export default SccWorkFlowPage;
