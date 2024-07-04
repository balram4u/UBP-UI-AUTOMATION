import URL_PATH from '../../../common/Route';
import tripHomePage from '../trip/trip-homepge';
import CommonUtilities from '../../../common/Util';

const STOCK_TRANSFER_HEADER = "//p[text()='Raise Order']"; // it should be Stock Transfer , bug raised for it.
const SELECT_ORDER_TYPE_FIELD = '//select[@id="order-type-drop-down"]';
const YES_BUTTON = '//span[text()="Yes"]';
const NEXT_BUTTON = '//span[text()="Next"]';
const PREVIOUS_BUTTON = "//span[text()='Previous']";
const SELECT_PRODUCT_SKU_FIELD = '//input[@id="product-select-autocomplete"]';
const SELECT_RANGE = '(//span[text()="Select range"])[1]';
const SELECT_ITEMS = "(//span[text()='Select items'])[1]";
const ENTER_QUANTITY = "//input[@name='quantity']";
const SUBMIT_BUTTON = '//span[text()="Submit"]';
const ENTER_SELLER_NAME = '//input[@class="MuiInputBase-input"]';
const SEARCH_BUTTON = '//button[@type="submit"]';
// const SELECT_SELLER_NAME = '//input[@type="checkbox" and @aria-label="Select Row checkbox"]';
const SELECT_SELLER_NAME = '(//input[@type="checkbox"])[2]';
const LEFT_MENU_ORDER = "//p[text()='ORDER']";
const LEFIT_MENU_STOCK_TRANSFER = "//p[text()='STOCK TRANSFER']";
const ORDER_SUMMARY = "(//td[@class='MuiTableCell-root MuiTableCell-body'])[3]";
const GET_START_SERIAL = "//input[@name='startSerial']";
const GET_END_SERIAL = "//input[@name='endSerial']";
const GET_BATCH_ID = "(//span[text()='Select range'])[1]/../../../../div[@data-field='boxId']";
const FILTER_VALUE = '//div[@class="MuiFormControl-root MuiDataGridFilterForm-filterValueInput"]//input[@type="text"]';
const GET_FIRST_ROW_START_SERIAL = "(//div[contains(@data-field,'startSerial')])[2]";
const GET_FIRST_ROW_END_SERIAL = "(//div[contains(@data-field,'endSerial')])[2]";
const GET_FIRST_ROW_QUANTITY = "(//div[contains(@data-field,'quantity')])[2]";
const GET_FIRST_ROW_BOX_ID = "(//div[contains(@data-field,'boxId')])[2]";
const CLICK_ON_CART = "(//span[@class='MuiBadge-root'])[1]";
const CLICK_ON_CLOSE = "//span[text()='Close']";
const CART_BATCH_ID = "(//tr[@class='MuiTableRow-root']/td)[3]";
const CART_QUANTITY = "(//tr[@class='MuiTableRow-root']/td)[4]";
const CART_AMOUNT = "(//tr[@class='MuiTableRow-root']/td)[3]";
const CART_PRODUCT_SKU = "(//tr[@class='MuiTableRow-root']/th)[1]";
const SELECT_ALL_CHECKBOX = "//input[@aria-label='Select All Rows checkbox']";
const SELECT_STOCK_CHECK_MARK = "(//span[contains(@class,'MuiStepLabel-iconContainer')]//*[local-name()='svg'])[1]";
const REMOVE_BUTTON = "(//h2[contains(text(),'Selected')]/../..//span)[1]";
const EXPORT_BUTTON = "//span[text()='Export']";
const DOWNLOAD_BUTTON = "//li[contains(text(),'Download')]";
const SELECT_RESELLER_DROPDOWN = "//div[@id='reseller-list-select']";
const SELECT_RESELLER = "//li[text()='MSISDN']";

let fetchedStartSerial = '';
let fetchedEndSerial = '';
let fetchedBatchID = '';
let getOrderId = '';
let getInvoiceId = '';

class StockTransferHomePage {
  static visitStockTransferHomePageUsingLeftMenu() {
    cy.log('Open Stock Transfer Home page and verify title');
    cy.xpath(LEFT_MENU_ORDER).should('be.visible');
    cy.xpath(LEFT_MENU_ORDER).click();
    cy.xpath(LEFT_MENU_ORDER).click();
    cy.xpath(LEFIT_MENU_STOCK_TRANSFER).click();
    cy.xpath(STOCK_TRANSFER_HEADER).should('be.visible');
  }

  static visitStockTransferHomePageUsingUrl() {
    cy.log('Open Stock Transfer Home page and verify title');
    cy.visit(URL_PATH.stockTransfer);
  }

  static orderType(orderType) {
    cy.log('Select order type');
    cy.log(orderType);
    if (orderType !== '') {
      cy.xpath(SELECT_ORDER_TYPE_FIELD).select(orderType);
      cy.wait(500);
      cy.xpath(YES_BUTTON).click();
      cy.wait(500);
    }
  }

  static clickOnNext() {
    cy.log('Click on Next button');
    cy.xpath(NEXT_BUTTON).click();
  }

  static clickOnPrevious() {
    cy.log('Click on Previous button');
    cy.xpath(PREVIOUS_BUTTON).click();
  }

  static clickOnRemove() {
    cy.log('Click on Remove button');
    cy.xpath(REMOVE_BUTTON).click();
  }

  static selectProductSKU(productSKU) {
    cy.log('Select product SKU');
    cy.log(productSKU);
    if (productSKU !== '') {
      cy.xpath(SELECT_PRODUCT_SKU_FIELD).type(productSKU);
      cy.xpath(SELECT_PRODUCT_SKU_FIELD).type('{downArrow}').type('{downArrow}')
        .type('{enter}');
    }
  }

  static clickOnSelectRange() {
    cy.log('Click on first select range button');
    cy.xpath(SELECT_RANGE).click({ force: true });
  }

  static clickOnSelectItems() {
    cy.log('Click on select items button');
    cy.wait(800);
    cy.xpath(SELECT_ITEMS).click();
  }

  static enterQuantity(quantity) {
    cy.log('Enter quantity');
    cy.log(quantity);
    cy.wait(100);
    cy.xpath(ENTER_QUANTITY).clear().type(quantity);
  }

  static clickOnSubmit() {
    cy.log('Click on submit button');
    cy.xpath(SUBMIT_BUTTON).click();
  }

  static clickOnSubmitOrder() {
    cy.log('Click on submit button');
    cy.intercept("POST", "api/oms/v2/orders").as("submitOrder");
    cy.xpath(SUBMIT_BUTTON).click({ force: true });
    cy.wait("@submitOrder");
  }

  static selectAllCheckBoxes() {
    cy.log('select all check boxes');
    cy.xpath(SELECT_ALL_CHECKBOX).click();
  }

  static clickOnFirstrowCheckBox() {
    cy.log('click on first row check box');
    cy.xpath(SELECT_SELLER_NAME).click();
  }

  static searchResellerId(SELLER_NAME) {
    cy.log('Search ResellerId');
    cy.log(SELLER_NAME);
    cy.xpath(ENTER_SELLER_NAME).clear().type(SELLER_NAME);
    cy.wait(1000);
    cy.xpath(SEARCH_BUTTON).click();
  }

  static selectResellerId() {
    cy.log('Select ResellerId');
    cy.xpath(SELECT_SELLER_NAME).click({ force: true });
  }

  static selectReceiver(receiver) {
    cy.log('Select Receiver');
    cy.xpath(`//div[@data-id="${receiver}"]//input`).click();
  }

  static selectRoutes(routes) {
    cy.log('Select Routes');
    cy.xpath(`//div[@data-value="${routes}"]//..//input`).click();
  }

  static validateOrderSummary(productSKU) {
    cy.xpath(ORDER_SUMMARY).should('have.text', productSKU);
  }

  static getStartSerial() {
    cy.log('get start serial from UI');
    cy.wait(2000);
    cy.xpath(GET_START_SERIAL).invoke('val').then((value) => {
      fetchedStartSerial = value;
      cy.log('start serial is = ', fetchedStartSerial);
    });
    cy.log('start serial outside = ', fetchedStartSerial);
  }

  static getEndSerial() {
    cy.log('get end serial from UI');
    cy.wait(2000);
    cy.xpath(GET_END_SERIAL).invoke('val').then((value) => {
      fetchedEndSerial = value;
      cy.log('end serial is = ', fetchedEndSerial);
    });
    cy.log('end serial outside = ', fetchedEndSerial);
  }

  static getBatchID() {
    cy.log('get batch id from UI');
    cy.wait(500);
    cy.xpath(GET_BATCH_ID).invoke('text').then((value) => {
      fetchedBatchID = value;
      cy.log('batch id is = ', fetchedBatchID);
    });
    cy.log('batch id outside = ', fetchedBatchID);
  }

  static raiseISOUsingAPI(agentId, productSKU, paymentAgreement, paymentMode, receivers, resellerPath, resellerId) {
    cy.log('executing raise order API for ISO during PISO trip');
    tripHomePage.returnTripId().then((tripId) => {
      const hostname = Cypress.env('hostname');
      cy.request({
        method: 'POST',
        url: `${hostname}:9595/oms/v2/orders`,
        headers: {
          accept: 'application/json',
          'Accept-Language': 'en-GB',
          authorization: 'abc',
          'system-token': `{  "ersReference": "87627365768275356776",  "startTime": "1614254785232",  "rootComponent": "oms",  "context": {    "client": {      "channel": "3PP",      "clientId": "OM-Swagger",      "clientReference": "OMS"    },    "initiator": {      "uid": "${resellerId}",      "typ": "RESELLERUSERID",      "rtp": "branch",      "rmsisdn": "16010000",      "resellerPath": "${resellerPath}" , "rid" : "${resellerId}"   }  }}`,
          'Content-Type': 'application/json',
        },
        body: {
          buyer: {
            id: `${receivers}`,
            additionalFields: [],
          },
          seller: {
            id: `${resellerId}`,
            additionalFields: [],
          },
          sender: {
            id: `${agentId}`,
            additionalFields: [],
          },
          potentialReceivers: [],
          items: [
            {
              productSku: `${productSKU}`,
              quantity: null,
              reserveType: "RANGE",
              serials: [],
              batchIds: [],
              ranges: [
                {
                  batchId: `${fetchedBatchID}`,
                  startSerial: `${fetchedStartSerial}`,
                  endSerial: `${fetchedStartSerial}`,
                },
              ],
              seller: {
                id: `${resellerId}`,
                additionalFields: [],
              },
            },
          ],
          orderType: "ISO",
          paymentAgreement: `${paymentAgreement}`,
          paymentMode: `${paymentMode}`,
          receivers: [
            {
              id: `${receivers}`,
              additionalFields: [],
            },
          ],
          linkedOrderIds: [],
          tripId: `${tripId}`,
          returnType: "",
          returnReason: "",
          additionalFields: [
            {
              name: "invoiceAmount",
              value: 20,
            },
          ],
        },
      }).then((response) => {
        cy.log(response.body);
        expect(response.body.resultCode).to.eq(0);
        getOrderId = response.body.orderId;
        cy.log('order is ', getOrderId);
      });
    });
  }

  static getInvoiceId(resellerId, resellerPath) {
    cy.log('get invoice id for order id', getOrderId);
    const hostname = Cypress.env('hostname');
    cy.request({
      method: 'GET',
      url: `${hostname}:9595/oms/v2/orders/${getOrderId}`,
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-GB',
        authorization: 'abc',
        'system-token': `{  "ersReference": "87627365768275356776",  "startTime": "1614254785232",  "rootComponent": "oms",  "context": {    "client": {      "channel": "3PP",      "clientId": "OM-Swagger",      "clientReference": "OMS"    },    "initiator": {      "uid": "${resellerId}",      "typ": "RESELLERUSERID",      "rtp": "branch",      "rmsisdn": "16010000",      "resellerPath": "${resellerPath}", "rid" : "${resellerId}"    }  }}`,
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      cy.log(response.body);
      expect(response.body.orderId).to.eq(getOrderId);
      getInvoiceId = response.body.invoiceIds[0];
      cy.log('invoice id is ', getInvoiceId);
    });
  }

  static returnInvoiceId() {
    cy.log('return trip id ', getInvoiceId);
    const returngetInvoiceId = getInvoiceId;
    return cy.wrap(returngetInvoiceId);
  }

  static makePayment(resellerId, receivers, agentId, agentIdPath, paymentMode) {
    cy.log('make payment operation');
    tripHomePage.returnTripId().then((tripId) => {
      const hostname = Cypress.env('hostname');
      cy.request({
        method: 'POST',
        url: `${hostname}:9595/oms/v2/make-payment`,
        headers: {
          accept: 'application/json',
          'Accept-Language': 'en-GB',
          authorization: 'abc',
          'system-token': `{  "ersReference": "87627365768275356776",  "startTime": "1614254785232",  "rootComponent": "order-management",  "context": {    "client": {      "channel": "3PP",      "clientId": "OM-Swagger",      "clientReference": "OMS"    },    "initiator": {      "uid": "${agentId}",      "typ": "RESELLERUSERID",      "rtp": "branch",      "rmsisdn": "16010000",      "resellerPath": "${agentIdPath}" , "rid" : "${agentId}"   }  }}`,
          'Content-Type': 'application/json',
        },
        body: [{
          paymentMode: `${paymentMode}`,
          amount: 10,
          paidTo: `${agentId}`,
          paidFrom: `${receivers}`,
          externalReferenceNumber: null,
          tripId: `${tripId}`,
          data: {
            msisdn: "254714111110",
            shortCode: "12345",
            tillNumber: "908776",
            payee: `${resellerId}`,
          },
          invoiceId: `${getInvoiceId}`,
        }],
      }).then((response) => {
        cy.log(response.body);
        expect(response.body.resultCode).to.eq(0);
      });
    });
  }

  static externalPaymentResponse(resellerId, resellerPath) {
    cy.log('external payment response using ', getInvoiceId);
    cy.wait(30000);
    const hostname = Cypress.env('hostname');
    cy.request({
      method: 'GET',
      url: `${hostname}:9595/oms/v2/payments/external/${getInvoiceId}?idType=INVOICE`,
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-GB',
        authorization: 'abc',
        'system-token': `{  "ersReference": "87627365768275356776",  "startTime": "1614254785232",  "rootComponent": "oms",  "context": {    "client": {      "channel": "3PP",      "clientId": "OM-Swagger",      "clientReference": "OMS"    },    "initiator": {      "uid": "${resellerId}",      "typ": "RESELLERUSERID",      "rtp": "branch",      "rmsisdn": "16010000",      "resellerPath": "${resellerPath}" , "rid" : "${resellerId}"   }  }}`,
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      cy.log(response.body);
      expect(response.body.resultCode).to.eq('0');
      expect(response.body.resultDescription).to.eq('The service request is processed successfully.');
    });
  }

  static fillFilterValue() {
    cy.log('Enter orderId in the field');
    cy.log(getOrderId);
    cy.wait(1000);
    cy.xpath(FILTER_VALUE).clear().type(getOrderId);
  }

  static raiseSOUsingAPI(agentId, productSKU, paymentAgreement, paymentMode, receivers, resellerPath, resellerId) {
    cy.log('executing raise order API for ISO during PISO trip');
    tripHomePage.returnTripId().then((tripId) => {
      const hostname = Cypress.env('hostname');
      cy.request({
        method: 'POST',
        url: `${hostname}:9595/oms/v2/orders`,
        headers: {
          accept: 'application/json',
          'Accept-Language': 'en-GB',
          authorization: 'abc',
          'system-token': `{"ersReference": "87627365768275356776","startTime": "1614254785232","rootComponent": "kyc","context":{"initiator":{"uid": "${agentId}","typ": "RESELLERUNIQUEID","rtp": "dsa","rid": "${agentId}"},"client":{"channel": "web","clientId": "postman"}}}`,
          'Content-Type': 'application/json',
        },
        body: {
          buyer: {
            id: `${receivers}`,
            additionalFields: [],
          },
          deliveryPaths: [
            {
              agentType: "",
              dropPoint: {
                id: `${receivers}`,
              },
              pickupPoint: {
                id: `${resellerId}`,
              },
            },
          ],
          items: [
            {
              batchIds: [],
              data: {},
              productSku: `${productSKU}`,
              quantity: 1,
              ranges: [],
              reserveType: "SERIAL",
              serials: [],
            },
          ],
          orderType: "SO",
          paymentAgreement: `${paymentAgreement}`,
          paymentMode: `${paymentMode}`,
          receivers: [
            {
              id: `${receivers}`,
              additionalFields: [],
            },
          ],
          tripId: `${tripId}`,
          returnType: "",
          returnReason: "",
          seller: {
            id: `${resellerId}`,
            additionalFields: [],
          },
          sender: {
            id: `${resellerId}`,
            additionalFields: [],
          },
        },
      }).then((response) => {
        cy.log(response.body);
        expect(response.body.resultCode).to.eq(0);
        getOrderId = response.body.orderId;
        cy.log('order is ', getOrderId);
      });
    });
  }

  static returnSOTypeOrderId() {
    cy.log('return order id ', getOrderId);
    const returngetOrderId = getOrderId;
    return cy.wrap(returngetOrderId);
  }

  static receiverShouldNotExist(receiverId) {
    cy.log('validating receiver should not exists ', receiverId);
    cy.xpath(`//div[@data-id="${receiverId}"]//input`).should('not.exist');
  }

  static clickOnCart() {
    cy.log("click on cart");
    cy.xpath(CLICK_ON_CART).click();
  }

  static clickOnCloseButton() {
    cy.log("click on close button");
    cy.xpath(CLICK_ON_CLOSE).click();
  }

  static verifyCartDetails() {
    cy.log("verify cart details as per table data");
    cy.xpath(CART_BATCH_ID).then((value1) => {
      const batchId = value1.text();
      cy.xpath(CART_QUANTITY).then((value2) => {
        const quantity = value2.text();
        StockTransferHomePage.clickOnCloseButton();
        cy.xpath(GET_FIRST_ROW_BOX_ID).should('include.text', batchId);
        cy.xpath(GET_FIRST_ROW_QUANTITY).should('include.text', quantity);
      });
    });
  }

  static getFirstRowStartSerial() {
    cy.log('get first row start serial');
    CommonUtilities.getTextValue(GET_FIRST_ROW_START_SERIAL);
  }

  static setFirstRowStartSerial() {
    cy.log('set first row start serial');
    CommonUtilities.setTextValue(GET_START_SERIAL);
  }

  static getFirstRowEndSerial() {
    cy.log('get first row end serial');
    CommonUtilities.getTextValue(GET_FIRST_ROW_END_SERIAL);
  }

  static setFirstRowEndSerial() {
    cy.log('set first row end serial');
    CommonUtilities.setTextValue(GET_END_SERIAL);
  }

  static setFirstRowEndSerialInFilterValue() {
    cy.log('set first row end serial in filter value');
    CommonUtilities.setTextValue(FILTER_VALUE);
  }

  static getFirstRowQuantity() {
    cy.log('get first row quantity');
    CommonUtilities.getTextValue(GET_FIRST_ROW_QUANTITY);
  }

  static setFirstRowQuantity() {
    cy.log('set first row end serial');
    CommonUtilities.setTextValue(ENTER_QUANTITY);
  }

  static getBoxId() {
    cy.log('get box Id inside cart');
    CommonUtilities.getExpectedTextValue(CART_BATCH_ID);
  }

  static getQuantity() {
    cy.log('get quantity inside cart');
    CommonUtilities.getExpectedTextValue(CART_QUANTITY);
  }

  static verifyCartAmount(amount) {
    cy.log('verify amount inside cart');
    cy.xpath(CART_AMOUNT).should('include.text', amount);
  }

  static verifyCartProductSKU(productSKU) {
    cy.log('verify product sku inside cart');
    cy.xpath(CART_PRODUCT_SKU).should('include.text', productSKU);
  }

  static verifyFirstRowBoxId() {
    cy.log('verify box Id inside table first row');
    CommonUtilities.verifyActualTextValue(GET_FIRST_ROW_BOX_ID);
  }

  static verifyFirstRowQuantity() {
    cy.log('verify quantity inside table first row');
    CommonUtilities.verifyActualTextValue(GET_FIRST_ROW_QUANTITY);
  }

  static verifyProductSKU(productSKU) {
    cy.log('verify product SKU selected');
    cy.xpath(SELECT_PRODUCT_SKU_FIELD).should('include.value', productSKU);
  }

  static verifyCheckMarkVisble() {
    cy.log('verify check mark is visible');
    cy.xpath(SELECT_STOCK_CHECK_MARK).should('be.visible');
  }

  static verifyCheckMarkNotVisble() {
    cy.log('verify check mark is not visible');
    cy.xpath(SELECT_STOCK_CHECK_MARK).should('not.exist');
  }

  static clickOnExportButton() {
    cy.log(`click on export button`);
    cy.xpath(EXPORT_BUTTON).click();
  }

  static clickOnDownloadButton() {
    cy.log(`click on download button`);
    cy.xpath(DOWNLOAD_BUTTON).click();
  }

  static enterStartSerial(startSerial) {
    cy.log('Enter startSerial');
    cy.wait(1000);
    cy.xpath(GET_START_SERIAL).clear().type(startSerial);
  }

  static enterEndSerial(endSerial) {
    cy.log('Enter endSerial');
    cy.wait(1000);
    cy.xpath(GET_END_SERIAL).clear().type(endSerial);
  }

  static selectMSISDN() {
    cy.log('select MSISDN');
    cy.xpath(SELECT_RESELLER_DROPDOWN).click();
    cy.wait(900);
    cy.xpath(SELECT_RESELLER).click();
    cy.wait(900);
  }
}

export default StockTransferHomePage;
