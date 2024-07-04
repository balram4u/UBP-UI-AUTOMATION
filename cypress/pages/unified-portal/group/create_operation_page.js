const NAME = "//input[@name='name']";
const CODE = "//input[@name='code']";
const MODULE = "//input[@name='module']";
const TYPE = "//input[@name='type']";
const FROM_STATE = "//input[@name='fromState']";
const TO_STATE = "//input[@name='toState']";
const ALERTMESSAGE = "//div[@id='notistack-snackbar']";

const SUBMIT_BUTTON = "//span[contains(text(),'Submit')]";
const RESET_BUTTON = "//span[contains(text(),'Reset')]";
const UPDATE_BUTTON = "//span[contains(text(),'Update')]";
const CLOSE_ALERTMESSAGE = "//button/span/span[text()='close']";
const EXPORT_BUTTON = "//button/span[text()='Export']";
const DOWNLOAD_BUTTON = "//li[contains(text(),'Download')]";

class CreateOperationPage {
  static typeOperationName(operationName) {
    cy.log('type operation Name');
    cy.xpath(NAME).clear().clear();
    cy.xpath(NAME).type(operationName);
  }

  static typeOperationCode(operationCode) {
    cy.log('type operation code');
    cy.xpath(CODE).clear().clear();
    cy.xpath(CODE).type(operationCode);
  }

  static typeOperationModule(operationModule) {
    cy.log('type operation module');
    cy.xpath(MODULE).clear().clear();
    cy.xpath(MODULE).type(operationModule);
  }

  static typeOperationType(operationType) {
    cy.log('type operation type');
    cy.xpath(TYPE).clear().clear();
    cy.xpath(TYPE).type(operationType);
  }

  static typeOperationFromState(operationFromState) {
    cy.log('type operation from State');
    cy.xpath(FROM_STATE).clear().clear();
    cy.xpath(FROM_STATE).type(operationFromState);
  }

  static typeOperationToState(operationToState) {
    cy.log('type operation to State');
    cy.xpath(TO_STATE).clear().clear();
    cy.xpath(TO_STATE).type(operationToState);
  }

  static verifyMessage(message) {
    cy.log('Now we are verifying the message after submitting');
    cy.xpath(ALERTMESSAGE).then((alert) => {
      const text = alert.text();
      cy.log(text);
      expect(text).contains(message);
    });
  }

  static clickSubmitButton() {
    cy.log('Now click on submir butoon afer filling the details');
    cy.xpath(SUBMIT_BUTTON).click();
  }

  static clickResetButton() {
    cy.log('click Reset button');
    cy.xpath(RESET_BUTTON).click();
  }

  static clickUpdateButton() {
    cy.log('click Update button');
    cy.xpath(UPDATE_BUTTON).click();
  }

  static clickOnCloseAlertMessage() {
    cy.log('click on close alert message');
    cy.xpath(CLOSE_ALERTMESSAGE).click();
  }

  static clickOnExportButton() {
    cy.log(`click on export button`);
    cy.xpath(EXPORT_BUTTON).click();
  }

  static clickOnDownloadButton() {
    cy.log(`click on download button`);
    cy.xpath(DOWNLOAD_BUTTON).click();
  }
} export default CreateOperationPage;
