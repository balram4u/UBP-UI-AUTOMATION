const NAME_INPUT = "//input[@name='name']";
const VALUE_INPUT = "//textarea[@name='templateValue']";
const CATEGORY_INPUT = "//input[contains(@id,'mui')]";

class ViewKeywordPage {

  static verifyName(name) {
    cy.log(`view name as : ${name}`);
    cy.xpath(NAME_INPUT).should('have.value', name);
  }

  static verifyValue(value) {
    cy.log(`view value as : ${value}`);
    cy.xpath(VALUE_INPUT).should('include.text', value);
  }

  static verifyCategory(category) {
    cy.log(`view category as : ${category}`);
    cy.xpath(CATEGORY_INPUT).should('have.value', category);
  }
}

export default ViewKeywordPage;