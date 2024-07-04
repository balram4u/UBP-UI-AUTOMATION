import URL_PATH from '../../../common/Route';

const CREATE_BUTTON = "//a[contains(@href,'create')]";
const EDIT_BUTTON = "(//a[contains(@href,'edit')])[1]";
const VIEW_BUTTON = "(//a[contains(@href,'view')])[1]";
const DELETE_BUTTON = "(//a[contains(@href,'edit')]/preceding-sibling::button)[1]";
const CLONE_BUTTON = "(//a[contains(@href,'clone')])[1]";
const YES_BUTTON = "//a/span[contains(text(),'Yes')]";
const NO_BUTTON = "//button/span[contains(text(),'No')]";
const NOTIFICATION_BUTTON = "//p[text()='NOTIFICATION']";
const MESSAGE_BUTTON = "//p[text()='MESSAGE']";

class MessageHomePage {
  static visitMessageHomePage() {
    cy.log('Now visit keyword home page');
    cy.visit(URL_PATH.classifier);
  }

  static clickOnNotification() {
    cy.log('Now click on notification option inside left menu');
    cy.xpath(NOTIFICATION_BUTTON).click();
  }

  static clickOnMessage() {
    cy.log('Now click on message option inside left menu');
    cy.xpath(MESSAGE_BUTTON).click();
  }

  static clickOnCreateButton() {
    cy.log('click on create button');
    cy.xpath(CREATE_BUTTON).click();
  }

  static clickOnEditButton() {
    cy.log('click on edit button');
    cy.xpath(EDIT_BUTTON).click();
  }

  static clickOnCloneButton() {
    cy.log('click on clone button');
    cy.xpath(CLONE_BUTTON).click();
  }

  static clickOnDeleteButton() {
    cy.log('click on delete button');
    cy.xpath(DELETE_BUTTON).click();
  }

  static clickOnViewButton() {
    cy.log('click on view button');
    cy.xpath(VIEW_BUTTON).click();
  }

  static updateMessageConfirmation(param) {
    cy.log(`click on  : ${param}`);
    if (param == 'YES') {
      cy.xpath(YES_BUTTON).click();
    } else {
      cy.xpath(NO_BUTTON).click();
    }
  }
}

export default MessageHomePage;