import URL_PATH from '../../../common/Route';

const CREATE_BUTTON = "//a[contains(@href,'create')]";
const EDIT_BUTTON = "(//a[contains(@href,'view')]/preceding-sibling::button)[1]";
const VIEW_BUTTON = "(//a[contains(@href,'view')])[1]";
const YES_BUTTON = "//a/span[contains(text(),'Yes')]";
const NO_BUTTON = "//button/span[contains(text(),'No')]";
const NOTIFICATION_BUTTON = "//p[text()='NOTIFICATION']"
const KEYWORD_BUTTON = "//p[text()='KEYWORD']"

class KeywordHomePage {
  static visitKeywordHomePage() {
    cy.log('Now visit keyword home page');
    cy.visit(URL_PATH.keyword);
  }

  static clickOnNotification() {
    cy.log('Now click on notification option inside left menu');
    cy.xpath(NOTIFICATION_BUTTON).click();
  }

  static clickOnKeyword() {
    cy.log('Now click on keyword option inside left menu');
    cy.xpath(KEYWORD_BUTTON).click();
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

  static updateKeywordConfirmation(param) {
    cy.log(`click on  : ${param}`);
    if (param == 'YES') {
      cy.xpath(YES_BUTTON).click();
    } else {
      cy.xpath(NO_BUTTON).click();
    }
  }
}

export default KeywordHomePage;