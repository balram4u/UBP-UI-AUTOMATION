import URL_PATH from '../../../common/Route';

const LEFT_MENU_SETTINGS = "//p[text()='SETTINGS']";
const CREATE_POLICY_MAPPING = "//span[contains(text(),'Create New Policy Mapping')]";
const SELECT_POLICY = "//select[contains(@class,'MuiSelect-root MuiSelect-select MuiInputBase-input MuiInput-input')]";
const SELECT_RESELLER_TYPE = "//input[@aria-labelledby='Distributor']";
const SELECT_ROLE_TYPE = "//input[@aria-labelledby='Administrator']";
const MOVE_TO_LEFT_SELECTED_RESELLER_TYPE = "(//button[@aria-label='move selected left'])[1]";
const MOVE_TO_LEFT_SELECTED_ROLE_TYPE = "(//button[@aria-label='move selected left'])[2]";
const SAVE_BUTTON = "//span[contains(text(),'save')]";

class PolicyMappingHomePage {
  static visitPolicyMappingHomePage() {
    cy.log('Now visit policy mapping home page');
    cy.wait(800);
    cy.visit(URL_PATH.policyMapping);
  }

  static visitPolicyMappingHomePageUsingLeftMenu() {
    cy.log('Open Policy Mapping');
    cy.xpath(LEFT_MENU_SETTINGS).should('not.exist');
  }

  static clickOnCreatePolicyMappingButton() {
    cy.log('click on create new policy mapping button');
    cy.wait(800);
    cy.xpath(CREATE_POLICY_MAPPING).click();
  }

  static createPolicyMapping(policy) {
    cy.xpath(SELECT_POLICY).select(policy);

    cy.wait(500);
    cy.log('select reseller type');
    cy.xpath(SELECT_RESELLER_TYPE).click();
    cy.log('move selected reseller type left');
    cy.xpath(MOVE_TO_LEFT_SELECTED_RESELLER_TYPE).click();

    cy.log('select role type');
    cy.xpath(SELECT_ROLE_TYPE).click();
    cy.wait(500);
    cy.log('move selected role type left');
    cy.xpath(MOVE_TO_LEFT_SELECTED_ROLE_TYPE).click();

    cy.xpath(SAVE_BUTTON).click();
  }
}

export default PolicyMappingHomePage;
