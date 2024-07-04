import URL_PATH from '../../../common/Route';

const SUBMIT_BUTTON = '//span[text()="Submit"]';
const LEFT_MENU_ORDER = "//p[text()='ORDER']";
const LEFIT_MENU_MANUAL_ADJUSTMENT = "//p[text()='MANUAL ADJUSTMENT']";
const MANUAL_ADJUSTMENT_HEADER = "//div/h4[text()='Create new manual adjustment']";
const ENTER_RECEIVER_ID = "//div/input[@name='receiverReseller']";
const ENTER_SENDER_ID = "//div/input[@name='senderReseller']";
const ENTER_AMOUNT = "//div/input[@name='amount']";
const ENTER_COMMENT = "//input[@name='comment']";
const CLICK_CONTINUE = "//span[text()='Continue']";
const CREDIT = "//button/span/p[text()='Credit']";
const MESSAGE_ALERT = '//div[@id="notistack-snackbar"]';
const FILTER_VALUE = '//div[@class="MuiFormControl-root MuiDataGridFilterForm-filterValueInput"]//input[@type="text"]';
const VERIFY_STATE = '//div[@class="MuiDataGrid-cell MuiDataGrid-cellLeft"][@data-field="state"]';

let orderId1 = '';
let orderId = '';

class ManualAdjustmentHomePage {
  static visitManualAdjustmentHomePageUsingLeftMenu() {
    cy.log('Open Manual Adjustment Home page and verify title');
    cy.xpath(LEFT_MENU_ORDER).should('be.visible');
    cy.xpath(LEFT_MENU_ORDER).click();
    cy.xpath(LEFT_MENU_ORDER).click();
    cy.xpath(LEFIT_MENU_MANUAL_ADJUSTMENT).click();
    cy.xpath(MANUAL_ADJUSTMENT_HEADER).should('be.visible');
  }

  static visitManualAdjustmentHomePageUsingUrl() {
    cy.log('Open Manual Adjustment Home page and verify title');
    cy.visit(URL_PATH.manualAdjustment);
    cy.wait(2000);
  }

  static enterReceiverID(RECEIVER) {
    cy.log('entering receiver id');
    cy.xpath(ENTER_RECEIVER_ID).type(RECEIVER);
  }

  static clickCredit() {
    cy.xpath(CREDIT).click();
  }

  static enterSenderID(SENDER) {
    cy.log('entering sender id');
    cy.xpath(ENTER_SENDER_ID).type(SENDER);
  }

  static enterAmount(AMOUNT) {
    cy.log('entering amount');
    cy.xpath(ENTER_AMOUNT).type(AMOUNT);
  }

  static enterComment(COMMNET) {
    cy.log('entering comment');
    cy.xpath(ENTER_COMMENT).type(COMMNET);
  }

  static clickOnContinue() {
    cy.log('Click on continue button');
    cy.xpath(CLICK_CONTINUE).click();
  }

  static clickOnSubmit() {
    cy.log('Click on submit button');
    cy.xpath(SUBMIT_BUTTON).click();
  }

  static storeOrderIdForISODST() {
    cy.xpath(MESSAGE_ALERT).invoke('text').then((text) => {
      cy.log(text);
      orderId1 = text.split('[')[1];
      orderId = orderId1.split(']')[0];
      cy.log(orderId);
    });
  }

  static fillFilterValue() {
    cy.log('Enter orderId in the field');
    cy.log(orderId);
    cy.wait(1000);
    cy.xpath(FILTER_VALUE).clear().type(orderId);
  }

  static checkState(state) {
    cy.log('Verify order state on orders page');
    cy.wait(1000);
    cy.xpath(VERIFY_STATE).contains(state);
  }
}

export default ManualAdjustmentHomePage;
