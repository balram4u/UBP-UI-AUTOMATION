const TAG_INPUT = "//input[@name='tag']";
const EXPRESSION_INPUT = "//textarea[@name='conditionExpression']";
const DESCRIPTION_INPUT = "//textarea[@name='description']";

class ViewCondtionPage {

  static verifyTag(tag) {
    cy.log(`view tag as : ${tag}`);
    cy.xpath(TAG_INPUT).should('have.value', tag);
  }

  static verifyExpression(expression) {
    cy.log(`view expression as : ${expression}`);
    cy.xpath(EXPRESSION_INPUT).should('have.value', expression);
  }

  static verifyDescription(description) {
    cy.log(`view description as : ${description}`);
    cy.xpath(DESCRIPTION_INPUT).should('have.value', description);
  }
}

export default ViewCondtionPage;