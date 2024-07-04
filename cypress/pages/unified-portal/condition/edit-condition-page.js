const SUBMIT_BUTTON = "//span[text()='Submit']";
const TAG_INPUT = "//input[@name='tag']";
const EXPRESSION_INPUT = "//textarea[@name='conditionExpression']";
const DESCRIPTION_INPUT = "//textarea[@name='description']";

class EditCondtionPage {

  static clickOnSubmitButton() {
    cy.log('click on submit button');
    cy.xpath(SUBMIT_BUTTON).click();
  }

  static enterTag(tag) {
    cy.log(`enter tag as : ${tag}`);
    cy.xpath(TAG_INPUT).clear().type(tag);
  }

  static enterExpression(expression) {
    cy.log(`enter expression as : ${expression}`);
    cy.xpath(EXPRESSION_INPUT).clear().type(expression);
  }

  static enterDescription(description) {
    cy.log(`enter description as : ${description}`);
    cy.xpath(DESCRIPTION_INPUT).clear().type(description);
  }
}

export default EditCondtionPage;