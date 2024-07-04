const VERIFY_AGENT_NAME = "//p[contains(text(),'Agent name')]/parent::div/following-sibling::div[1]/p";
const VERIFY_MAX_COUNT = "(//p[text()='Max Count']/../following-sibling::div/p)[1]";
const VERIFY_DESCRIPTION = "(//p[text()='Description']/../following-sibling::div/p)[1]";
const VERIFY_VOLUMN_CAPACITY = "(//p[text()='Volume capacity']/../following-sibling::div/p)[1]";
const VERIFY_WEIGHT_CAPACITY = "(//p[text()='Weight Capacity']/../following-sibling::div/p)[1]";
const VERIFY_VOLUMN_CAPACITY_UNIT = "(//p[text()='Volume capacity unit']/../following-sibling::div/p)[1]";
const VERIFY_WEIGHT_CAPACITY_UNIT = "(//p[text()='Weight capacity unit']/../following-sibling::div/p)[1]";
const VERIFY_RESERVE_VOLUMN_CAPACITY = "(//p[text()='Reserve volume capacity']/../following-sibling::div/p)[1]";
const VERIFY_RESERVE_WEIGHT_CAPACITY = "(//p[text()='Reserve weight capacity']/../following-sibling::div/p)[1]";
const VERIFY_RESERVE_COUNT = "(//p[text()='Reserve Count']/../following-sibling::div/p)[1]";

class viewAgent {
  static verifyAgentName(agentName) {
    cy.log('I verify Agent Name');
    cy.xpath(VERIFY_AGENT_NAME).should('have.text', agentName);
  }

  static verifyMaxCount(maxCount) {
    cy.log('verify max count');
    cy.xpath(VERIFY_MAX_COUNT).should('have.text', maxCount);
  }

  static verifyDescription(description) {
    if (description !== "") {
      cy.log('verify description');
      cy.xpath(VERIFY_DESCRIPTION).should('have.text', description);
    }
  }

  static verifyVolumnCapacity(volumnCapacity) {
    cy.log('verify volumn capacity');
    cy.xpath(VERIFY_VOLUMN_CAPACITY).should('have.text', volumnCapacity);
  }

  static verifyWeightCapacity(weightCapacity) {
    cy.log('verify weight capacity');
    cy.xpath(VERIFY_WEIGHT_CAPACITY).should('have.text', weightCapacity);
  }

  static verifyVolumnCapacityUnit(volumnCapacityUnit) {
    cy.log('verify volumn capacity unit');
    cy.xpath(VERIFY_VOLUMN_CAPACITY_UNIT).should('have.text', volumnCapacityUnit);
  }

  static verifyWeightCapacityUnit(weightCapacityUnit) {
    cy.log('verify weight capacity unit');
    cy.xpath(VERIFY_WEIGHT_CAPACITY_UNIT).should('have.text', weightCapacityUnit);
  }

  static verifyReserveVolumnCapacity(reserveVolumnCapacity) {
    cy.log('verify reserve volumn capacity');
    cy.xpath(VERIFY_RESERVE_VOLUMN_CAPACITY).should('have.text', reserveVolumnCapacity);
  }

  static verifyReserveWeightCapacity(reserveWeightCapacity) {
    cy.log('verify reserve weight capacity');
    cy.xpath(VERIFY_RESERVE_WEIGHT_CAPACITY).should('have.text', reserveWeightCapacity);
  }

  static verifyReserveCount(reserveCount) {
    cy.log('verify reserve count');
    cy.xpath(VERIFY_RESERVE_COUNT).should('have.text', reserveCount);
  }
}
export default viewAgent;
