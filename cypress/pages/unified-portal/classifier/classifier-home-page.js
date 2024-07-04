import URL_PATH from '../../../common/Route';

const CREATE_BUTTON = "//a[contains(@href,'create')]";
const EDIT_BUTTON = "(//a[contains(@href,'view')]/preceding-sibling::button)[1]";
const VIEW_BUTTON = "(//a[contains(@href,'view')])[1]";
const YES_BUTTON = "//a/span[contains(text(),'Yes')]";
const NO_BUTTON = "//button/span[contains(text(),'No')]";
const NOTIFICATION_BUTTON = "//p[text()='NOTIFICATION']"
const CLASSIFIER_BUTTON = "//p[text()='CLASSIFIER']"

class ClassifierHomePage {
  static visitClassifierHomePage() {
    cy.log('Now visit classifier home page');
    cy.visit(URL_PATH.classifier);
  }

  static clickOnNotification() {
    cy.log('Now click on notification option inside left menu');
    cy.xpath(NOTIFICATION_BUTTON).click();
  }

  static clickOnClassifier() {
    cy.log('Now click on classifier option inside left menu');
    cy.xpath(CLASSIFIER_BUTTON).click();
  }

  static clickOnCreateButton() {
    cy.log('click on create button');
    cy.xpath(CREATE_BUTTON).click();
  }

  static clickOnEditButton() {
    cy.log('click on edit button');
    cy.xpath(EDIT_BUTTON).click();
  }

  static clickOnViewButton() {
    cy.log('click on view button');
    cy.xpath(VIEW_BUTTON).click();
  }

  static updateClassifierConfirmation(param) {
    cy.log(`click on  : ${param}`);
    if (param == 'YES') {
      cy.xpath(YES_BUTTON).click();
    } else {
      cy.xpath(NO_BUTTON).click();
    }
  }
}

export default ClassifierHomePage;