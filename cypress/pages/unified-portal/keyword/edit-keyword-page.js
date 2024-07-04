const SUBMIT_BUTTON = "//span[text()='Submit']";
const NAME_INPUT = "//input[@name='name']";
const VALUE_INPUT = "//textarea[@name='templateValue']";
const CATEGORY_INPUT = "//label[contains(@id,'mui')]/following-sibling::div/input";

class EditKeywordPage {

  static clickOnSubmitButton() {
    cy.log('click on submit button');
    cy.xpath(SUBMIT_BUTTON).click();
  }

  static enterName(name) {
    cy.log(`enter name as : ${name}`);
    cy.xpath(NAME_INPUT).clear().type(name);
  }

  static enterValue(value) {
    cy.log(`enter value as : ${value}`);
    cy.xpath(VALUE_INPUT).clear().type(value);
  }

  static enterCategory(category) {
    if (category != "") {
      cy.log(`enter category as : ${category}`);
      cy.xpath(CATEGORY_INPUT).clear().type(category).type('{downArrow}').type('{enter}');
    }
  }
}

export default EditKeywordPage;