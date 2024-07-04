const SUBMIT_BUTTON = "//span[text()='Submit']";
const TAG_INPUT = "//input[@name='tag']";
const VALUE_INPUT = "//textarea[@name='transactionClassifier']";


class CreateKeywordPage {

  static clickOnSubmitButton() {
    cy.log('click on submit button');
    cy.xpath(SUBMIT_BUTTON).click();
    cy.wait(800);
  }

  static enterTag(tag) {
    if (tag != "") {
      cy.log(`enter tag as : ${tag}`);
      cy.xpath(TAG_INPUT).clear().type(tag);
    } else {
      cy.xpath(TAG_INPUT).clear();
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
}

export default CreateKeywordPage;