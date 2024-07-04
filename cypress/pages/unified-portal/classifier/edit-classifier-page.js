const SUBMIT_BUTTON = "//span[text()='Submit']";
const TAG_INPUT = "//input[@name='tag']";
const VALUE_INPUT = "//textarea[@name='transactionClassifier']";


class EditClassifierPage {

  static clickOnSubmitButton() {
    cy.log('click on submit button');
    cy.xpath(SUBMIT_BUTTON).click();
  }

  static enterTag(tag) {
    cy.log(`enter tag as : ${tag}`);
    cy.xpath(TAG_INPUT).clear().type(tag);
  }

  static enterValue(value) {
    cy.log(`enter value as : ${value}`);
    cy.xpath(VALUE_INPUT).clear().type(value);
  }

}

export default EditClassifierPage;