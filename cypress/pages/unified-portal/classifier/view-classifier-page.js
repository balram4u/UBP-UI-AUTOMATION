const TAG_INPUT = "//input[@name='tag']";
const VALUE_INPUT = "//textarea[@name='transactionClassifier']";

class ViewClassifierPage {

  static verifyTag(tag) {
    cy.log(`view tag as : ${tag}`);
    cy.xpath(TAG_INPUT).should('have.value', tag);
  }

  static verifyValue(value) {
    cy.log(`view value as : ${value}`);
    cy.xpath(VALUE_INPUT).should('include.text', value);
  }
}

export default ViewClassifierPage;