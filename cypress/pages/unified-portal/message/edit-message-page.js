const SUBMIT_BUTTON = "//span[text()='Submit']";
const SELECT_CLASSIFIER = "//select[@name='classifierId']";
const SELECT_MESSAGE_TYPE = "//select[@name='messageTypeId']";
const MESSAGE_TAG = "//input[@name='messageTag']";
const ENTER_EXPRESSION_VALUE = "//input[@name='expressionValue']";
const CLICK_ON_DATE_ICON = "//input[@name='activationDate']/..//*[local-name()='svg']";
const CLICK_ON_CURRENT_DATE = "//button[contains(@class,'MuiPickersDay-current')]";
const SELECT_LANGUAGE = "//select[@name='languageId']";
const SELECT_RECEIPENT = "//select[@name='recipientId']";
const SELECT_STATUS = "//select[@name='statusId']";
const SELECT_MESSAGE_TEMPLATE_TYPE = "//select[@name='messageTemplateTypeId']"
const ENTER_CONDITION = "//input[@name='conditionExpression']";
const CLICK_ON_GET_KEYWORDS = "//span[text()='Get Keywords']";
const SELECT_TRANSACTION_CATEGORY = "//select[@name='categoryId']";
const ENTER_TRANSACTION_KEYWORD = "//input[contains(@id,'mui')]";
const CLICK_ON_YES_BUTTON = "//span[contains(text(),'Yes')]";
const VALUE_INPUT_FIELD = "//textarea[@name='templateValue']";


class EditMessagePage {

  static clickOnSubmitButton() {
    cy.log('click on submit button');
    cy.xpath(SUBMIT_BUTTON).click();
    cy.wait(800);
  }
  static enterValueField(value) {
    if (value != "") {
      cy.log(`enter value field ${value}`);
      cy.xpath(VALUE_INPUT_FIELD).type(value);
    } else {
      cy.xpath(VALUE_INPUT_FIELD).clear();
    }
  }

  static selectClassifier(classifier) {
    if (classifier != "") {
      cy.log(`select classifier as : ${classifier}`);
      cy.xpath(SELECT_CLASSIFIER).select(classifier);
    }
  }

  static selectMessageType(messageType) {
    if (messageType != "") {
      cy.log(`select message type as : ${messageType}`);
      cy.xpath(SELECT_MESSAGE_TYPE).select(messageType);
    }
  }

  static selectStatus(status) {
    if (status != "") {
      cy.log(`select status type as : ${status}`);
      cy.xpath(SELECT_STATUS).select(status);
    }
  }

  static selectMessageTemplateType(messageTemplateType) {
    if (messageTemplateType != "") {
      cy.log(`select message template type as : ${messageTemplateType}`);
      cy.xpath(SELECT_MESSAGE_TEMPLATE_TYPE).select(messageTemplateType);
    }
  }

  static selectLanguage(language) {
    if (language != "") {
      cy.log(`select language as : ${language}`);
      cy.xpath(SELECT_LANGUAGE).select(language);
    }
  }

  static selectReceipent(receipent) {
    if (receipent != "") {
      cy.log(`select receipent as : ${receipent}`);
      cy.xpath(SELECT_RECEIPENT).select(receipent);
    }
  }

  static enterMessageTag(messageTag) {
    if (messageTag != "") {
      cy.log(`enter message tag as : ${messageTag}`);
      cy.xpath(MESSAGE_TAG).clear().type(messageTag);
    } else {
      cy.xpath(MESSAGE_TAG).clear();
    }
  }

  static enterCondition(condition) {
    if (condition != "") {
      cy.log(`enter condition as : ${condition}`);
      cy.xpath(ENTER_CONDITION).clear().type(condition).type('{downArrow}').type('{enter}');
    } else {
      cy.xpath(ENTER_CONDITION).clear();
    }
  }

  static setActivationDate() {
    cy.log('set actibation date');
    cy.xpath(CLICK_ON_DATE_ICON).click();
    cy.wait(500);
    cy.xpath(CLICK_ON_CURRENT_DATE).click();
  }

  static clickOnGetKeywords() {
    cy.log('click on get keywords');
    cy.xpath(CLICK_ON_GET_KEYWORDS).click();
  }

  static clickOnYesButton() {
    cy.log('click on yes button');
    cy.xpath(CLICK_ON_YES_BUTTON).click();
  }

  static selectTransactionCategory(transactionCategory) {
    cy.log('select transaction category');
    cy.xpath(SELECT_TRANSACTION_CATEGORY).select(transactionCategory);
  }

  static enterTransactionKeyword(transactionKeyword) {
    if (transactionKeyword != "") {
      cy.log(`enter transaction keyword as : ${transactionKeyword}`);
      cy.xpath(ENTER_TRANSACTION_KEYWORD).clear().type(transactionKeyword).type('{downArrow}').type('{enter}').click();
    }
  }


  static enterExpressionValue(value) {
    if (value != "") {
      cy.log(`enter expression value as : ${value}`);
      cy.xpath(ENTER_EXPRESSION_VALUE).clear().type(value);
    } else {
      cy.xpath(ENTER_EXPRESSION_VALUE).clear();
    }
  }
}

export default EditMessagePage;