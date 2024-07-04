const SUBMIT_BUTTON = "//span[text()='Submit']";
const NAME_INPUT = "//input[@name='name']";
const VALUE_INPUT = "//textarea[@name='templateValue']";
const CATEGORY_INPUT = "//label[contains(@id,'mui')]/following-sibling::div/input";

class CreateKeywordPage {

  static clickOnSubmitButton() {
    cy.log('click on submit button');
    cy.xpath(SUBMIT_BUTTON).click();
    cy.wait(800);
  }

  static enterName(name) {
    if (name != "") {
      cy.log(`enter name as : ${name}`);
      cy.xpath(NAME_INPUT).clear().type(name);
    } else {
      cy.xpath(NAME_INPUT).clear();
    }
  }

  static enterValue(value) {
    if (value != "") {
      cy.log(`enter value as : ${value}`);
      cy.xpath(VALUE_INPUT).clear().type(value);
    } else {
      cy.xpath(VALUE_INPUT).clear();
    }
  }

  static enterCategory(category) {
    if (category != "") {
      cy.log(`enter category as : ${category}`);
      cy.xpath(CATEGORY_INPUT).clear().type(category).type('{downArrow}').type('{enter}');
    } 
  }

  static verifyCategory(category) {
      cy.log(`verify category is disabled`);
      cy.xpath(CATEGORY_INPUT).should('be.disabled')
  }
}

export default CreateKeywordPage;