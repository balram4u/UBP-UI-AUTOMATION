const GET_ORDER_ID = '.MuiAlert-message > p:nth-child(2)';
const CLOSE_BUTTON = '//span[text()="Close"]';
const FILTER_VALUE = '//div[contains(@class,"MuiInput-underline MuiInputBase-formControl MuiInput-formControl")]//input[@type="text"]';
const VERIFY_ORDER_TYPE = '//div[@data-field="orderType" and @data-rowindex="0"]';
const VERIFY_BUYER_ID = '//div[@data-field="buyerId" and @data-rowindex="0"]';
const VERIFY_SELLER_ID = '//div[@data-field="sellerId" and @data-rowindex="0"]';
const VERIFY_RECEIVER_ID = '//div[@data-field="receiverId" and @data-rowindex="0"]';
const VERIFY_SENDER_ID = '//div[@data-field="senderId" and @data-rowindex="0"]';
const VERIFY_PAYMENT_MODE = '//div[@data-field="paymentMode" and @data-rowindex="0"]';
const VERIFY_STATE = '//div[@data-field="state" and @data-rowindex="0"]';
const FILTER = "//span[text()='Filters']";
const SCROLLABLE_AREA = "div.MuiDataGrid-window";
const COLUMN_SELECT = "select[id=columns-filter-select]";
const OPERATOR_SELECT = "select[id=columns-operators-select]";
const SEARCH = "//span[text()='Search']";
const SELECT_ORDER_TYPE_FIELD = '//select[@id="order-type-drop-down"]';
const YES_BUTTON = '//span[text()="Yes"]';
const SELECT_ORDER = '(//input[@type="checkbox"])[2]';
const NEXT_BUTTON = '//span[text()="Next"]';
const SUBMIT_BUTTON = '//span[text()="Submit"]';
const ORDER_SUMMARY = "(//td[@class='MuiTableCell-root MuiTableCell-body'])[2]";
const CLICK_DELIVERY_OPTION = '//div[@id="demo-simple-select-outlined"]';
const SELECT_RANGE = '(//span[text()="Select range"])[1]';
const ENTER_QUANTITY = "//input[@name='quantity']";
const CLICK_FOR_REASON = "//div[@id='return-reason-dialog-select']";
const CLICK_REASON = "//ul/li[@data-value='OTHER']";
const ENTER_REASON = "//div/textarea[contains(@placeholder,'wrong with the item')]";
const CLICK_RETURN = "//span[text()='Return']";
const MESSAGE_ALERT = '//div[@id="notistack-snackbar"]';
const FULL_RETURN = "//button/span/p[text()='Full Return']";

let orderId1 = '';
let orderId2 = '';
let orderId3 = '';
let orderIdBranchOperator = '';
let orderIdPosBranch = '';
let orderId = '';

class ReturnOrderPage {
  static getOrderIdForBranchAndOperator() {
    cy.log('Store order Id a variable for branch and operator');
    cy.get(GET_ORDER_ID).invoke('text').then((text) => {
      cy.log(text);
      orderId1 = text.split('[')[1];
      cy.log(orderId1);
      orderIdBranchOperator = orderId1.split(']')[0];
      cy.log("old order ", orderIdBranchOperator);
    });
  }

  static clickOnClose() {
    cy.log('Click on close button');
    cy.xpath(CLOSE_BUTTON).click();
  }

  static getOrderIdForPosAndBranch() {
    cy.log('Store order Id a variable for pos and branch');
    cy.get(GET_ORDER_ID).invoke('text').then((text) => {
      cy.log(text);
      orderId2 = text.split('[')[1];
      cy.log(orderId2);
      orderIdPosBranch = orderId2.split(']')[0];
      cy.log("new order  ", orderIdPosBranch);
      cy.log("old order  ", orderIdBranchOperator);
    });
  }

  static fillOrderForBranchAndOperator() {
    cy.log('Enter orderId in the field');
    cy.log(orderIdBranchOperator);
    cy.wait(1000);
    cy.xpath(FILTER_VALUE).clear().type(orderIdBranchOperator);
    cy.wait(1000);
  }

  static fillOrderForPosAndBranch() {
    cy.log('Enter orderId in the field');
    cy.log(orderIdPosBranch);
    cy.wait(1000);
    cy.xpath(FILTER_VALUE).clear().type(orderIdPosBranch);
    cy.wait(1000);
  }

  static scrollToRight() {
    cy.log('Scroll to right');
    cy.get(SCROLLABLE_AREA).scrollTo('right');
    cy.wait(800);
  }

  static selectColumn(value) {
    cy.log('Select column');
    cy.log(value);
    cy.get(COLUMN_SELECT).select(value);
  }

  static selectOperator(value) {
    cy.log('Select operator');
    cy.log(value);
    cy.get(OPERATOR_SELECT).select(value);
  }

  static verifyOrder(ORDER_TYPE, SELLER_NAME, RESELLER_ID, PAYMENT_MODE, STATE, BUYER_ID, RESELLER_TYPE) {
    cy.log('Verify raised order fields on orders page');
    if (ORDER_TYPE === 'Purchase Order - Payments Involved') {
      if (RESELLER_TYPE === 'Branch') {
        cy.xpath(VERIFY_ORDER_TYPE).contains("PO");
        cy.xpath(VERIFY_SELLER_ID).contains(SELLER_NAME);
        cy.xpath(VERIFY_BUYER_ID).contains(BUYER_ID);
        this.scrollToRight();
        cy.xpath(VERIFY_RECEIVER_ID).contains(RESELLER_ID);
        cy.xpath(VERIFY_SENDER_ID).contains(SELLER_NAME);
        cy.xpath(VERIFY_PAYMENT_MODE).contains(PAYMENT_MODE);
      }
      if (RESELLER_TYPE === 'HQ') {
        cy.xpath(VERIFY_ORDER_TYPE).contains("PO");
        cy.xpath(VERIFY_SELLER_ID).contains(SELLER_NAME);
        cy.xpath(VERIFY_BUYER_ID).contains(BUYER_ID);
        this.scrollToRight();
        cy.xpath(VERIFY_RECEIVER_ID).contains("Branch");
        cy.xpath(VERIFY_SENDER_ID).contains(SELLER_NAME);
        cy.xpath(VERIFY_PAYMENT_MODE).contains(PAYMENT_MODE);
      }
      if (RESELLER_TYPE === 'POS') {
        cy.xpath(VERIFY_ORDER_TYPE).contains("PO");
        cy.xpath(VERIFY_SELLER_ID).contains(SELLER_NAME);
        cy.xpath(VERIFY_BUYER_ID).contains(BUYER_ID);
        this.scrollToRight();
        cy.xpath(VERIFY_RECEIVER_ID).contains(RESELLER_ID);
        cy.xpath(VERIFY_SENDER_ID).contains(SELLER_NAME);
        cy.xpath(VERIFY_PAYMENT_MODE).contains(PAYMENT_MODE);
      }
      cy.xpath(VERIFY_STATE).then((state) => {
        const currentState = state.text();
        if (currentState === 'EXTERNAL_WAIT_CREATED' || currentState === 'EXTERNAL_SCHEDULED') {
          cy.log('current state is ', currentState);
          cy.log('wait until state become submmited');
          cy.wait(50000);
          cy.reload();
          this.clickFilterButton();
          this.selectColumn("Order Id");
          this.selectOperator("Equal");
          if (RESELLER_TYPE === "Branch") {
            this.fillOrderForBranchAndOperator();
            cy.wait(1000);
          }
          if (RESELLER_TYPE === "POS") {
            this.fillOrderForPosAndBranch();
            cy.wait(1000);
          }
          this.clickFilterButton();
          cy.xpath(VERIFY_STATE).invoke("text").should("eq", STATE);
        } else {
          cy.xpath(VERIFY_STATE).invoke("text").should("eq", STATE);
        }
      });
    }
  }

  static clickFilterButton() {
    cy.log('Click on filter button');
    cy.wait(500);
    cy.xpath(FILTER).click();
  }

  static clickSearchButton() {
    cy.log('Click on search button');
    cy.wait(500);
    cy.xpath(SEARCH).click();
  }

  static orderType(orderType) {
    cy.log('Select order type');
    cy.log(orderType);
    if (orderType !== '') {
      cy.wait(1000);
      cy.xpath(SELECT_ORDER_TYPE_FIELD).select(orderType); // 2 seconds
      cy.xpath(YES_BUTTON).click();
      cy.wait(500);
    }
  }

  static selectOrderId() {
    cy.log('Select reseller Id');
    cy.wait(500);
    cy.xpath(SELECT_ORDER).click();
  }

  static getOrderId() {
    cy.log('Store order Id a variable for pos and branch');
    cy.xpath(MESSAGE_ALERT).invoke('text').then((text) => {
      cy.log(text);
      orderId3 = text.split('[')[1];
      cy.log(orderId3);
      orderId = orderId3.split(']')[0];
      cy.log("new order  ", orderId);
      cy.log("old order  ", orderId);
    });
  }

  static clickOnNext() {
    cy.log('Click on Next button');
    cy.xpath(NEXT_BUTTON).click();
  }

  static clickOnSubmit() {
    cy.log('Click on submit button');
    cy.xpath(SUBMIT_BUTTON).click();
  }

  static validateOrderSummary(productSKU) {
    cy.xpath(ORDER_SUMMARY).should('have.text', productSKU);
  }

  static selectDelivery(delivery) {
    cy.log('Click on delivery option', delivery);
    cy.xpath(CLICK_DELIVERY_OPTION).click();
    cy.log('Select delivery option');
    cy.log(`//ul/li[@data-value='${delivery}']`);
    cy.wait(300);
    cy.xpath(`//ul/li[@data-value='${delivery}']`).click();
    cy.wait(300);
  }

  static clickOnSelectRange() {
    cy.log('Click on select range button');
    cy.wait(800);
    cy.xpath(SELECT_RANGE).click(); // 2 seconds
  }

  static enterQuantity(quantity) {
    cy.log('Enter quantity');
    cy.log(quantity);
    cy.wait(100);
    cy.xpath(ENTER_QUANTITY).clear().type(quantity);
  }

  static enterReason() {
    cy.log('entering reason');
    cy.xpath(CLICK_FOR_REASON).click();
    cy.wait(1000);
    cy.xpath(CLICK_REASON).click();
    cy.wait(1000);
    cy.xpath(ENTER_REASON).clear().type('returning');
    cy.wait(1000);
    cy.xpath(CLICK_RETURN).click();
  }

  static fillOrderId() {
    cy.log('Enter orderId in the field');
    cy.log(orderId);
    cy.wait(1000);
    cy.xpath(FILTER_VALUE).clear().type(orderId);
    cy.wait(1000);
  }

  static clickFullReturn() {
    cy.wait(1000);
    cy.log('select full return');
    cy.xpath(FULL_RETURN).click();
  }
}

export default ReturnOrderPage;
