import URL_PATH from '../../../common/Route';
import CommonUtilities from '../../../common/Util';

import RaiseOrderPage from "./raise-order-page";

const ORDERS_HEADER = "//p[text()='This section allows the user to view and manage their order history.']";
const RAISE_ORDER_HEADER = "//h4[text()='Raise Order']";
const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "//select[@id='columns-filter-select']";
const OPERATOR_SELECT = "//select[@id='columns-operators-select']";
const FILTER_VALUE = "//input[@class='MuiInputBase-input MuiInput-input']";
const CONFIRM_ORDER_BUTTON = '//div[@class="MuiButtonGroup-root"]/button[@type="button"][1]';
const CONFIRM_PAYEMENT_BUTTON = '//div[@class="MuiButtonGroup-root"]/button[@type="button"][1]';
const ACCEPT_BUTTON = '//span[contains(text(),"Accept")]';
const SCROLLABLE_AREA = "div.MuiDataGrid-window";
const ENTER_PAID_TO = '//input[@name="paidTo"]';
const ENTER_PAID_FROM = '//input[@name="paidFrom"]';
const CONFIRM_BUTTON = '//span[text()="Confirm"]';
const VALIDATE_ORDER_CONFIRM_PAYMENT_MESSAGE = '//div[@class="MuiAlert-message"]/div';
const CLOSE_BUTTON = '//span[text()="Close"]';
const CLICK_RAISE_ORDER = '//span[text()="Raise Order"]';
const VERIFY_ORDER_TYPE = '//div[@data-field="orderType" and @data-rowindex="0"]';
const VERIFY_BUYER_ID = '//div[@data-field="buyerId" and @data-rowindex="0"]';
const VERIFY_SELLER_ID = '//div[@data-field="sellerId" and @data-rowindex="0"]';
const VERIFY_RECEIVER_ID = '//div[@data-field="receiverId" and @data-rowindex="0"]';
const VERIFY_SENDER_ID = '//div[@data-field="senderId" and @data-rowindex="0"]';
const VERIFY_PAYMENT_MODE = '//div[@data-field="paymentMode" and @data-rowindex="0"]';
const VERIFY_STATE = '//div[contains(@data-field,"state")and @data-rowindex="0"]';
const SELECT_VIEW_ACTION = '.MuiButtonGroup-groupedTextPrimary.MuiButton-textPrimary.MuiButton-textSizeSmall.MuiButton-sizeSmall';
const EXPAND_ITEMS = '//div/h6[text()="Items"]';
// const FILTER_VALUE = "//input[@placeholder='Filter value']";
const GET_SERIALS_VALUE = 'div[class*="Mui-expanded"] div:nth-child(8) p';
const VIEW_ACTION_ORDER_TYPE = '//p[text()="Order type"]/../following-sibling::div/p';
const VIEW_ACTION_STATE = '//p[text()="State"]/../following-sibling::div/p';
const CLICK_INITIATOR = '//div[@id="panel2d-header"]/div/h6[text()="Initiator"]';
const VIEW_INITIATOR_ID = '//h6[text()="Initiator"]/../../following-sibling::div/div/div/div/div/div/div/p[text()="ID"]/../following-sibling::div/p';
const CLICK_SENDER = '//div[@id="panel3d-header"]/div/h6[text()="Sender"]';
const VIEW_SENDER = '//h6[text()="Sender"]/../../following-sibling::div/div/div/div/div/div/div/p[text()="ID"]/../following-sibling::div/p';
const CLICK_SELLER = '//div[@id="panel4d-header"]/div/h6[text()="Seller"]';
const VIEW_SELLER = '//h6[text()="Seller"]/../../following-sibling::div/div/div/div/div/div/div/p[text()="ID"]/../following-sibling::div/p';
const CLICK_BUYER = '//div/h6[text()="Buyer"]';
const VIEW_BUYER = '//h6[text()="Buyer"]/../../following-sibling::div/div/div/div/div/div/div/p[text()="ID"]/../following-sibling::div/p';
const CLICK_RECEIVER = '//div[@id="panel6d-header"]/div/h6[text()="Receiver"]';
const VIEW_RECEIVER = '//h6[text()="Receiver"]/../../following-sibling::div/div/div/div/div/div/div/p[text()="ID"]/../following-sibling::div/p';
const VIEW_PRODUCT_SKU = '//p[text()="Product SKU"]/../following-sibling::div/p';
const VIEW_QUANTITY = '//p[text()="Quantity"]/../following-sibling::div/p';
const VIEW_PAYMENT_MODE = '//p[text()="Payment mode"]/../following-sibling::div/p';
const VIEW_PAYMENT_AGREEMENT = '//p[text()="Payment Agreement"]/../following-sibling::div/p';
const CLICK_INVOICES = '(//div/h6[text()="Invoices"])[2]';
const VALIDATE_INVOICE_STATUS = '//p[text()="Status"]/../following-sibling::div/p';
const SELECT_VIEW_LINK = '(//div/a[contains(@href,"/home/order/orders/view")])[1]';
const SEARCH_BUTTON = "//span[text()='Search']";
const RESET_BUTTON = "//span[contains(text(),'Reset')]";
const TRANSACTION_REFERENCE = "(//p[text()='Transaction Reference']/../following-sibling::div)[1]";
const CLICK_APPROVE = "(//button[contains(@class,'MuiButtonBase-root MuiButton-root MuiButton-text MuiButtonGroup-grouped')]/span[@class='MuiButton-label'])[1]";
const CLICK_ACCEPT = "//span[text()='Accept ']";

let startSerial = '';
const LEFT_MENU_ORDER = "//p[text()='ORDER']";
const LEFIT_MENU_ORDERS = "//p[text()='ORDERS']";

class OrdersPage {
  static visitOrdersHomePageUsingLeftMenu() {
    cy.log('Open Orders page and verify title');
    cy.xpath(LEFT_MENU_ORDER).should('be.visible');
    cy.xpath(LEFT_MENU_ORDER).click();
    cy.xpath(LEFT_MENU_ORDER).click();
    cy.xpath(LEFIT_MENU_ORDERS).click();
    cy.xpath(ORDERS_HEADER).should('be.visible');
  }

  static visitOrdersHomePageUsingUrl() {
    cy.intercept("GET", "api/oms/v2/order-payment-types").as("getOrderPaymentType");
    cy.intercept("GET", "api/oms/v2/order-reasons?type=REJECT").as("getOrderRejectReasons");
    cy.intercept("GET", "api/oms/v2/order-states").as("getOrderStates");
    cy.intercept("GET", "api/oms/v2/orders**").as("getOrders");
    cy.log('Open Orders page and verify title');
    cy.visit(URL_PATH.orders);
    cy.wait(["@getOrderPaymentType", "@getOrderRejectReasons", "@getOrderStates", "@getOrders"]);
  }

  static clickFilterButton() {
    cy.log('Click on filter button');
    cy.wait(500);
    cy.xpath(FILTER, { timeout: 5000 })
      .should('be.visible')
      .click();
  }

  static selectColumn(value) {
    cy.log('Select column');
    cy.log(value);
    cy.xpath(COLUMN_SELECT, { timeout: 5000 })
      .should('be.visible')
      .select(value);
  }

  static selectOperator(value) {
    cy.log('Select operator');
    cy.log(value);
    cy.xpath(OPERATOR_SELECT, { timeout: 5000 })
      .should('be.visible')
      .select(value);
  }

  static fillFilterWithDifferentValue(value) {
    cy.log('Fill the filter value');
    cy.xpath(FILTER_VALUE).type(value);
  }

  static fillFilterValue() {
    cy.log('Fill the filter value');
    cy.intercept("GET", "api/oms/v2/orders**").as("getOrders");
    RaiseOrderPage.fillFilterValue();
    cy.wait("@getOrders");
  }

  static scrollToRight() {
    cy.log('Scroll to right');
    cy.get(SCROLLABLE_AREA).scrollTo('right');
    cy.wait(800);
  }

  static scrollToUp() {
    cy.log('Scroll to up');
    cy.get(SCROLLABLE_AREA).scrollTo('top');
    cy.wait(800);
  }

  static confirmOrder() {
    cy.log('Perform order confirmation');
    this.scrollToRight();
    cy.xpath(CONFIRM_ORDER_BUTTON).click();
    cy.xpath(ACCEPT_BUTTON).click();
  }

  static confirmPayment(PaidTo, PaidFrom) {
    cy.log('Perfrom payment operation');
    cy.wait(1000);
    cy.xpath(CONFIRM_PAYEMENT_BUTTON).click();
    cy.xpath(ENTER_PAID_TO).type(PaidTo);
    cy.xpath(ENTER_PAID_FROM).type(PaidFrom);
    cy.xpath(CONFIRM_BUTTON).click();
    cy.wait(1000);
    cy.xpath(VALIDATE_ORDER_CONFIRM_PAYMENT_MESSAGE).contains("Success");
    cy.xpath(CLOSE_BUTTON).click();
  }

  static clickRaiseOrder() {
    cy.log('Click on raise order button from orders page');
    cy.xpath(CLICK_RAISE_ORDER).click();
    cy.wait(1000);
    cy.xpath(RAISE_ORDER_HEADER).should('be.visible');
  }

  static verifyRaisedOrder(ORDER_TYPE, SELLER_NAME, RESELLER_ID, PAYMENT_MODE, STATE, BUYER_WAREHOUSE) {
    cy.log('Verify raised order fields on orders page');
    if (ORDER_TYPE === 'Instant Sales Order - Payments Involved') {
      cy.xpath(VERIFY_ORDER_TYPE).contains("ISO");
      cy.xpath(VERIFY_STATE).contains(STATE);
      cy.xpath(VERIFY_SELLER_ID).contains(RESELLER_ID);
      cy.xpath(VERIFY_BUYER_ID).contains(SELLER_NAME);
      this.scrollToRight();
      cy.xpath(VERIFY_RECEIVER_ID).contains(SELLER_NAME);
      cy.xpath(VERIFY_SENDER_ID).contains(RESELLER_ID);
      cy.xpath(VERIFY_PAYMENT_MODE).contains(PAYMENT_MODE);
    }
    if (ORDER_TYPE === 'Instant Purchase Order - Payments Involved') {
      cy.xpath(VERIFY_ORDER_TYPE).contains("IPO");
      cy.xpath(VERIFY_STATE).contains(STATE);
      cy.xpath(VERIFY_PAYMENT_MODE).contains(PAYMENT_MODE);
      cy.xpath(VERIFY_SENDER_ID).contains(SELLER_NAME);
      this.scrollToRight();
      cy.xpath(VERIFY_SELLER_ID).contains(SELLER_NAME);
      cy.xpath(VERIFY_BUYER_ID).contains(RESELLER_ID);
      cy.xpath(VERIFY_RECEIVER_ID).contains(RESELLER_ID);
    }
    if (ORDER_TYPE === 'Purchase Order - Payments Involved') {
      cy.xpath(VERIFY_ORDER_TYPE).contains("PO");
      cy.xpath(VERIFY_STATE).contains(STATE);
      cy.xpath(VERIFY_SELLER_ID).contains(SELLER_NAME);
      cy.xpath(VERIFY_BUYER_ID).contains(RESELLER_ID);
      this.scrollToRight();
      cy.xpath(VERIFY_RECEIVER_ID).contains(BUYER_WAREHOUSE);
      cy.xpath(VERIFY_SENDER_ID).contains(SELLER_NAME);
      cy.xpath(VERIFY_PAYMENT_MODE).contains(PAYMENT_MODE);    
    }
    if (ORDER_TYPE === 'Instant Purchase Order - Digital') {
      cy.xpath(VERIFY_STATE).contains(STATE);
      cy.xpath(VERIFY_PAYMENT_MODE).contains(PAYMENT_MODE);
      cy.xpath(VERIFY_ORDER_TYPE).contains("IPO_D");
      this.scrollToRight();
      cy.xpath(VERIFY_SENDER_ID).contains(SELLER_NAME);
      cy.xpath(VERIFY_RECEIVER_ID).contains(RESELLER_ID);
      cy.xpath(VERIFY_BUYER_ID).contains(RESELLER_ID);
      cy.xpath(VERIFY_SELLER_ID).contains(SELLER_NAME);
    }
  }

  static checkState(state) {
    cy.log('Verify order state on orders page');
    cy.wait(1000);
    cy.xpath(VERIFY_STATE).contains(state);
  }

  static viewOrderAndGetSerials() {
    cy.log('Click on view action and get start serial');
    cy.wait(1000);
    this.scrollToRight();
    this.scrollToUp();
    cy.get(SELECT_VIEW_ACTION).click();
    cy.wait(800);
    cy.xpath(EXPAND_ITEMS).click();
    cy.wait(800);
    cy.get(GET_SERIALS_VALUE).invoke('text').then((text) => {
      cy.log('get serials');
      cy.log(text);
      startSerial = text.toString();
      cy.log(startSerial);
    });
  }

  static fillStartSearialValue() {
    cy.log('Enter start serial value in filters');
    cy.wait(500);
    cy.xpath(FILTER_VALUE).clear().type(startSerial);
  }

  static verifyOrderID() {
    RaiseOrderPage.verifyOrderIdInViewAction();
  }

  static verifyOrderType(ORDER_TYPE) {
    cy.log('Verify order type on view orders details page by clicking on view action');
    cy.log(ORDER_TYPE);
    if (ORDER_TYPE === 'Instant Sales Order - Payments Involved') {
      cy.xpath(VIEW_ACTION_ORDER_TYPE).eq(0).invoke('text').then((value) => {
        expect(value).to.eq('ISO');
      });
    }

    if (ORDER_TYPE === 'Instant Purchase Order - Payments Involved') {
      cy.xpath(VIEW_ACTION_ORDER_TYPE).eq(0).invoke('text').then((value) => {
        expect(value).to.eq('IPO');
      });
    }

    if (ORDER_TYPE === 'Purchase Order - Payments Involved') {
      cy.xpath(VIEW_ACTION_ORDER_TYPE).eq(0).invoke('text').then((value) => {
        expect(value).to.eq('PO');
      });
    }
  }

  static verifyEndState(END_STATE) {
    cy.log('Verify state on view orders details page by clicking on view action');
    cy.log(END_STATE);
    cy.xpath(VIEW_ACTION_STATE).eq(0).invoke('text').then((state) => {
      expect(state).to.eq(END_STATE);
    });
  }

  static verifyInitiatorId(INITIATOR_ID) {
    cy.log('Verify Initiator ID on view orders details page by clicking on view action');
    cy.log(INITIATOR_ID);
    cy.xpath(VIEW_INITIATOR_ID).invoke('text').then((initiatorId) => {
      expect(initiatorId).to.eq(INITIATOR_ID);
    });
  }

  static verifySender(SENDER) {
    cy.log('Verify Sender on view orders details page by clicking on view action');
    cy.log(SENDER);
    cy.xpath(VIEW_SENDER).invoke('text').then((sender) => {
      expect(sender).to.eq(SENDER);
    });
  }

  static verifySeller(SELLER) {
    cy.log('Verify Seller on view orders details page by clicking on view action');
    cy.log(SELLER);
    cy.xpath(VIEW_SELLER).invoke('text').then((seller) => {
      expect(seller).to.eq(SELLER);
    });
  }

  static verifyBuyer(BUYER) {
    cy.log('Verify Buyer on view orders details page by clicking on view action');
    cy.log(BUYER);
    cy.xpath(VIEW_BUYER).invoke('text').then((buyer) => {
      expect(buyer).to.eq(BUYER);
    });
  }

  static verifyReceiver(RECEIVER) {
    cy.log('Verify Receiver on view orders details page by clicking on view action');
    cy.log(RECEIVER);
    cy.xpath(VIEW_RECEIVER).invoke('text').then((receiver) => {
      expect(receiver).to.eq(RECEIVER);
    });
  }

  static verifyProductSKU(PRODUCT_SKU) {
    cy.log('Verify Product SKU on view orders details page by clicking on view action');
    cy.log(PRODUCT_SKU);
    cy.xpath(VIEW_PRODUCT_SKU).eq(0).invoke('text').then((productSKU) => {
      expect(productSKU).to.eq(PRODUCT_SKU);
    });
  }

  static verifyQuantity(QUANTITY) {
    cy.log('Verify Quantity on view orders details page by clicking on view action');
    cy.log(QUANTITY);
    cy.xpath(VIEW_QUANTITY).eq(0).invoke('text').then((quantity) => {
      expect(quantity).to.eq(QUANTITY);
    });
  }

  static verifyPaymentMode(PAYMENT_MODE) {
    cy.log('Verify Payment mode on view orders details page by clicking on view action');
    cy.log(PAYMENT_MODE);
    cy.xpath(VIEW_PAYMENT_MODE).eq(0).invoke('text').then((paymentMode) => {
      expect(paymentMode).to.eq(PAYMENT_MODE);
    });
  }

  static verifyPaymentAgreement(PAYMENT_AGREEMENT) {
    cy.log('Verify Payment agreement on view orders details page by clicking on view action');
    cy.log(PAYMENT_AGREEMENT);
    cy.xpath(VIEW_PAYMENT_AGREEMENT).eq(0).invoke('text').then((paymentAgreement) => {
      expect(paymentAgreement).to.eq(PAYMENT_AGREEMENT);
    });
  }

  static viewActionAndVerifyOrderDetails(ORDER_TYPE, END_STATE, RESELLER_ID, SELLER_NAME,
    PRODUCT_SKU, QUANTITY, PAYMENT_MODE, PAYMENT_AGREEMENT) {
    cy.log("verify order details by clicking on view action on orders page");
    cy.wait(500);
    cy.get(SELECT_VIEW_ACTION).click();
    cy.wait(800);
    this.verifyOrderID();
    this.verifyOrderType(ORDER_TYPE);
    this.verifyEndState(END_STATE);
    if (ORDER_TYPE === 'Instant Sales Order - Payments Involved') {
      cy.xpath(CLICK_INITIATOR).click();
      this.verifyInitiatorId(RESELLER_ID);
      cy.xpath(CLICK_SENDER).click();
      this.verifySender(RESELLER_ID);
      cy.xpath(CLICK_SELLER).click();
      this.verifySeller(RESELLER_ID);
      cy.xpath(CLICK_BUYER).click();
      this.verifyBuyer(SELLER_NAME);
      cy.xpath(CLICK_RECEIVER).click();
      this.verifyReceiver(SELLER_NAME);
    }

    if (ORDER_TYPE === 'Purchase Order - Payments Involved') {
      cy.xpath(CLICK_INITIATOR).click();
      this.verifyInitiatorId(RESELLER_ID);
      cy.xpath(CLICK_SENDER).click();
      this.verifySender(SELLER_NAME);
      cy.xpath(CLICK_SELLER).click();
      this.verifySeller(SELLER_NAME);
      cy.xpath(CLICK_BUYER).click();
      this.verifyBuyer(RESELLER_ID);
      cy.xpath(CLICK_RECEIVER).click();
      this.verifyReceiver(RESELLER_ID);
    }

    if (ORDER_TYPE === 'Instant Purchase Order - Payments Involved') {
      cy.xpath(CLICK_INITIATOR).click();
      this.verifyInitiatorId(RESELLER_ID);
      cy.xpath(CLICK_SENDER).click();
      this.verifySender(SELLER_NAME);
      cy.xpath(CLICK_SELLER).click();
      this.verifySeller(SELLER_NAME);
      cy.xpath(CLICK_BUYER).click();
      this.verifyBuyer(RESELLER_ID);
      cy.xpath(CLICK_RECEIVER).click();
      this.verifyReceiver(RESELLER_ID);
    }

    cy.xpath(EXPAND_ITEMS).click();
    this.verifyProductSKU(PRODUCT_SKU);
    this.verifyQuantity(QUANTITY);
    this.verifyPaymentMode(PAYMENT_MODE);
    this.verifyPaymentAgreement(PAYMENT_AGREEMENT);
  }

  static verifyOrderTypes(orderType) {
    cy.log('Verifying the Order Type');
    cy.xpath(VERIFY_ORDER_TYPE).contains(orderType);
  }

  static verifyBuyerId(buyerId) {
    cy.log('Verifying the Byuer Id');
    cy.xpath(VERIFY_BUYER_ID).contains(buyerId);
  }

  static verifySellerId(sellerId) {
    cy.log('Verifying the Seller Id');
    cy.xpath(VERIFY_SELLER_ID).contains(sellerId);
  }

  static verifySenderId(senderId) {
    cy.log('Verifying the Sender Id');
    cy.xpath(VERIFY_SENDER_ID).contains(senderId);
  }

  static verifyReceiverId(receiverrId) {
    cy.log('Verifying the Receiver Id');
    cy.xpath(VERIFY_RECEIVER_ID).contains(receiverrId);
  }

  static verifyState(state) {
    cy.log('Verifying the State');
    cy.xpath(VERIFY_STATE).contains(state);
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
          this.fillFilterValue();
          this.clickFilterButton();
          cy.xpath(VERIFY_STATE).invoke("text").should("eq", STATE);
        } else {
          cy.xpath(VERIFY_STATE).invoke("text").should("eq", STATE);
        }
      });
    }
  }

  static performPaymentConfirmation() {
    cy.log('Perform order confirmation');
    cy.xpath(CONFIRM_ORDER_BUTTON).click();
    cy.wait(3000);
    cy.xpath(CONFIRM_BUTTON).click();
    cy.wait(5000);
  }

  static clickViewAction() {
    cy.log('click view action');
    cy.xpath(SELECT_VIEW_LINK).click({ force: true });
    cy.wait(1000);
  }

  static validateStatusOfInvoice(status) {
    cy.log('validate status of invoice');
    cy.xpath(CLICK_INVOICES).click();
    cy.xpath(VALIDATE_INVOICE_STATUS).invoke('text').then((invoice_status) => {
      expect(invoice_status).to.eq(status);
    });
  }

  static selectBy(key, value) {
    cy.log(`selected search for ${key} and select ${value} `);
    cy.xpath(`//label[text()='${key}']/..//select`).select(value);
  }

  static clickOnSearchButton() {
    cy.log('Click on search button');
    cy.xpath(SEARCH_BUTTON).click();
  }

  static clickOnResetButton() {
    cy.log('Click on reset button');
    cy.xpath(RESET_BUTTON).click();
  }

  static expandItems() {
    cy.log('click and expand items');
    cy.xpath(EXPAND_ITEMS).click();
  }

  static getTransactionReference() {
    cy.log('get transaction reference');
    CommonUtilities.getTextValue(TRANSACTION_REFERENCE);
  }

  static approveOrder() {
    cy.log('approve order');
    cy.wait(1000);
    this.scrollToRight();
    cy.xpath(CLICK_APPROVE).click();
    cy.xpath(100);
    cy.xpath(CLICK_ACCEPT).click();
    cy.xpath(2000);
    CommonUtilities.validateMessage('confirmationAction(CONFIRM) successfully performed on order');
    cy.wait(1000);
  }
}
export default OrdersPage;
