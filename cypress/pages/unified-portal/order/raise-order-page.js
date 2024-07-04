/* eslint-disable */
const SELECT_PRODUCT_SKU_FIELD = '//input[@id="product-select-autocomplete"]';
const SELECT_ORDER_TYPE_FIELD = '//select[@id="order-type-drop-down"]';
const SELECT_RANGE = '(//button/span[text()="Select range"])[1]';
const ENTER_QUANTITY = "//input[@name='quantity']";
const SUBMIT_BUTTON = '//span[text()="Submit"]';
const NEXT_BUTTON = '//span[text()="Next"]';
const ENTER_SELLER_NAME = '//input[@class="MuiInputBase-input"]';
const SELECT_SELLER_NAME = '(//input[@type="checkbox"])[2]';
const SELECT_PAYMENT_AGREEMENT_FIELD = '//label[text()="Payment Agreement"]/../div/input';
const SELECT_PAYMENT_MODE_FIELD = '//label[text()="Payment Modes"]/../div/input';
const SEARCH_BUTTON = '//button[@type="submit"]';
const YES_BUTTON = '//span[text()="Yes"]';
const QUANTITY_FIELD = '//input[@placeholder="Quantity"]';
const ADD_TO_CART_FIELD = '//span[text()="Add to cart"]';
const ADD_TO_CART_FIELD_IPO_D = '//span[text()="ADD TO CART"]';
// const GET_ORDER_ID = '//p[@class="MuiTypography-root MuiTypography-body1"]'
const GET_ORDER_ID = '.MuiAlert-message > p:nth-child(2)';
const CLOSE_BUTTON = '//span[text()="Close"]';
const SELECT_ASSOCIATED_SELLER_WAREHOUSE = '//div[contains(@class,"MuiDataGrid-cellWithRenderer MuiDataGrid-cellLeft")]//input[@type="checkbox"]';
const CLICK_DELIVERY_OPTION = '//div[@id="delivery-options-select"]';
const SELECT_DELIVERY_OPTION = '//ul/li[@data-value="delivery"]';
const FILTER_VALUE = '//div[@class="MuiFormControl-root MuiDataGridFilterForm-filterValueInput"]//input[@type="text"]';
// const SELECT_BUYER_WAREHOURSE = '//span[text()="Buyer warehouses"]';
const SELECT_BUYER_LOCATION = '//span[text()="Buyer Location"]';
const VIEW_ACTION_ORDER_ID = '//p[text()="Order Id"]/../following-sibling::div/p';
const VERIFY_DEALER_NAME = "//p[contains(text(),' Stock From ')]/following-sibling::p[1]";
const VERIFY_DEALER_ID = "//p[contains(text(),' Stock From ')]/following-sibling::p[2]";
const VERIFY_DEALER_MSISDN_NO = "//p[contains(text(),' Stock From ')]/following-sibling::p[3]";
const VERIFY_AGENT_NAME = "//p[contains(text(),' Stock To ')]/following-sibling::p[1]";
const VERIFY_AGENT_ID = "//p[contains(text(),' Stock To ')]/following-sibling::p[2]";
const VERIFY_AGENT_MSISDN_NO = "//p[contains(text(),' Stock To ')]/following-sibling::p[3]";
const CLICK_ADDITIONAL_INFORMATION = "//button/span[text()='Additional Information']";
const CLICK_POREFERENCE = "//*[local-name()='th' and text()='POReference']/..//*[local-name()='svg' and @class='MuiSvgIcon-root MuiSvgIcon-fontSizeSmall']";
const ENTER_POREFERENCE_VALUE = "(//input[@class='MuiInputBase-input'])[2]";
const CLICK_SUBMIT = "(//button/span[text()='Submit'])[2]";
const ORDER_SUMMARY = "(//td[@class='MuiTableCell-root MuiTableCell-body'])[3]";
const CLICK_PLUS_BUTTON = "//section/div//button[@tabindex='0']";
const SELECT_ITEM = "//span[text()='Select items']";
const ALL_SELLER_WAREHOUSES = "//button/span[text()='All seller warehouses']";
const ENTER_SELLER_MSISDN = '//input[@class="MuiInputBase-input"]';
const SELECT_RESELLER_DROPDOWN = "//div[@id='demo-simple-select']";
const SELECT_MSISDN = "//li[text()='MSISDN']";
const GET_START_SERIAL = "//input[@name='startSerial']";
const GET_END_SERIAL = "//input[@name='endSerial']";

let orderId1 = '';
let orderId = '';

class RaiseOrderPage {
  static orderType(orderType) {
    cy.log('Select order type');
    cy.log(orderType);
    if (orderType !== '') {
      cy.wait(900);
      cy.xpath(SELECT_ORDER_TYPE_FIELD).select(orderType); // 2 seconds
      cy.xpath(YES_BUTTON).click();
      cy.wait(500);
    }

  }

  // static selectProductSKU(productSKU) {
  //   cy.log('Select product SKU');
  //   cy.log(productSKU);
  //   if (productSKU !== '') {
  //     cy.xpath(SELECT_PRODUCT_SKU_FIELD).type(productSKU);
  //     cy.wait(3000);
  //     cy.xpath(SELECT_PRODUCT_SKU_FIELD).type('{downArrow}')
  //         .type('{downArrow}').type('{enter}');
  //   }
  // }

  static selectProductSKU(productSKU) {
    cy.log('Select product SKU');
    cy.log(productSKU);
    if (productSKU !== '') {
      cy.xpath(SELECT_PRODUCT_SKU_FIELD).type(productSKU);
      cy.contains(productSKU).click();
    }
  }

  static clickOnSelectRange() {
    cy.log('Click on select range button');
    cy.wait(1000);
    cy.xpath(SELECT_RANGE).click({ force: true });
  }

  static enterQuantity(quantity) {
    cy.log('Enter quantity');
    cy.log(quantity);
    cy.wait(1000);
    cy.xpath(ENTER_QUANTITY).clear().type(quantity);
  }

  static clickOnSubmit() {
    cy.log('Click on submit button');
    cy.xpath(SUBMIT_BUTTON).click({ force: true });
  }

  static clickOnSubmitOrder() {
    cy.log('Click on submit button');
    cy.intercept("POST", "api/oms/v2/orders").as("submitOrder");
    cy.xpath(SUBMIT_BUTTON).click({ force: true });
    cy.wait("@submitOrder");
  }

  static clickOnClose() {
    cy.log('Click on close button');
    cy.xpath(CLOSE_BUTTON).click();
  }

  static clickOnNext() {
    cy.log('Click on Next button');
    cy.xpath(NEXT_BUTTON).click();
  }

  static clickOnNextToProductSku() {
    cy.log('Click on Next button');
    cy.intercept("GET", "api/acms/v2/fetch-product-range/**").as("fetchProductRange");
    cy.intercept("POST", "api/pms/v1/product/variant/search").as("getProductVariants");
    cy.xpath(NEXT_BUTTON).click();
    cy.wait(["@fetchProductRange", "@getProductVariants"]);
  }

  static clickOnNextToOrderSummary() {
    cy.log('Click on Next button');
    cy.intercept("POST", "api/oms/v2/preorders").as("preorder");
    cy.xpath(NEXT_BUTTON).click();
    cy.wait("@preorder");
  }

  static searchResellerId(SELLER_NAME) {
    cy.log('Search resellerId');
    cy.log(SELLER_NAME);
    cy.intercept("POST", "api/dms/auth/getResellerBasicInfo").as("getResellerBasicInfo");
    cy.xpath(ENTER_SELLER_NAME).clear().type(SELLER_NAME);
    cy.xpath(SEARCH_BUTTON).click();
    cy.wait("@getResellerBasicInfo");
  }

  static searchResellerIdForPickupDrop(SELLER_NAME) {
    cy.log('Search resellerId');
    cy.log(SELLER_NAME);
    cy.intercept("POST", "api/dms/auth/searchResellerBasicInfoByAttribute**").as("searchResellerBasicInfoByAttribute");
    cy.xpath(ENTER_SELLER_NAME).clear().type(SELLER_NAME);
    cy.xpath(SEARCH_BUTTON).click();
    cy.wait("@searchResellerBasicInfoByAttribute");
  }

  static selectResellerId() {
    cy.log('Select reseller Id');
    // cy.wait(500);
    cy.intercept("POST", "api/dms/auth/getResellerBasicInfo").as("getResellerBasicInfo");
    cy.xpath(SELECT_SELLER_NAME).click();
    cy.wait("@getResellerBasicInfo");
  }

  static selectResellerIdForPickupDrop() {
    cy.log('Select reseller Id');
    // cy.wait(500);
    cy.xpath(SELECT_SELLER_NAME).click();
  }

  static selectPaymentAgreement(PAYMENT_AGREEMENT) {
    cy.log('Select payment agreement');
    cy.log(PAYMENT_AGREEMENT);
    cy.xpath(SELECT_PAYMENT_AGREEMENT_FIELD).type(PAYMENT_AGREEMENT)
      .type('{downArrow}').type('{downArrow}')
      .type('{enter}');
  }

  // static selectPaymentAgreement(PAYMENT_AGREEMENT) {
  //      cy.log('Select payment agreement');
  //      cy.log(PAYMENT_AGREEMENT);
  //      cy.xpath(SELECT_PAYMENT_AGREEMENT_FIELD).type(PAYMENT_AGREEMENT);
  //      cy.contains(PAYMENT_AGREEMENT).click();

  //   }
  static selectPaymentMode(PAYMENT_MODE) {
    cy.log('Select payment mode');
    cy.log(PAYMENT_MODE);
    cy.xpath(SELECT_PAYMENT_MODE_FIELD).type(PAYMENT_MODE)
      .type('{downArrow}').type('{downArrow}')
      .type('{enter}');
    cy.wait(300);
  }
  // static selectPaymentMode(PAYMENT_MODE) {
  //   cy.log('Select payment mode');
  //   cy.log(PAYMENT_MODE);
  //   cy.xpath(SELECT_PAYMENT_MODE_FIELD).type(PAYMENT_MODE)
  //   cy.contains(PAYMENT_MODE).click();
  //   cy.wait(300);
  // }

  static enterQuantityAndAddToCart(quantity, orderType) {
    cy.log('Enter quantity and click on add to cart button');
    cy.log(quantity);
    cy.intercept("POST", "api/ims/v1/inventory-count").as("getInventoryCount");
    cy.xpath(QUANTITY_FIELD).type(quantity);
    // cy.wait(1000);
    cy.wait("@getInventoryCount");
    if (orderType === 'Instant Purchase Order - Digital') {
      cy.xpath(ADD_TO_CART_FIELD_IPO_D).click();
    } else {
      cy.xpath(ADD_TO_CART_FIELD).click();
    }
  }

  static getOrderId(ORDER_TYPE) {
    cy.log('Store order Id a variable');
    if (ORDER_TYPE == 'Instant Purchase Order - Digital') {
      cy.get(GET_ORDER_ID).invoke('text').then((text) => {
        console.log(text);
        orderId1 = text.split(' ')[3];
        console.log(orderId1);
        orderId = orderId1.split(' ')[0];
        console.log(orderId);
        // cy.writeFile('cypress/fixtures/orderID.txt', orderId);
      });
    } else {
      cy.get(GET_ORDER_ID, {timeout:15000})
      .should('be.visible')
      .invoke('text').then((text) => {
        console.log(text);
        orderId1 = text.split('[')[1];
        console.log(orderId1);
        orderId = orderId1.split(']')[0];
        console.log(orderId);
        // cy.writeFile('cypress/fixtures/orderID.txt', orderId);
      });
    }

  }

  static returnOrderId() {
    cy.log('return trip id ', orderId);
    const returnOrderID = orderId;
    return cy.wrap(returnOrderID);
  }

  static selectAssociatedSellerWarehouse() {
    cy.log('Select associated seller warehouse');
    cy.xpath(SELECT_ASSOCIATED_SELLER_WAREHOUSE).click();
  }

  static selectAssociatedWarehouse(warehouse) {
    cy.log('Select associated seller warehouse', warehouse);
    cy.xpath(`//div[text()='${warehouse}']/..//div[contains(@class,'MuiDataGrid-cellWithRenderer MuiDataGrid-cellLeft')]//input[@type='checkbox']`).click({ force: true });
  }

  static selectDeliveryOption() {
    cy.log('Click on delivery option');
    cy.xpath(CLICK_DELIVERY_OPTION).click();
    cy.log('Select delivery option');
    cy.xpath(SELECT_DELIVERY_OPTION).click();
    cy.wait(300);
  }

  static selectDelivery(delivery) {
    cy.log('Click on delivery option', delivery);
    cy.xpath(CLICK_DELIVERY_OPTION).click();
    cy.log('Select delivery option');
    cy.log(`//ul/li[@data-value='${delivery}']`);
    cy.xpath(`//ul/li[@data-value='${delivery}']`).click();
    cy.wait(300);
  }

  static fillFilterValue() {
    cy.log('Enter orderId in the field');
    cy.log(orderId);
    cy.wait(1000);
    cy.xpath(FILTER_VALUE, { timeout: 5000 })
      .should('be.visible')
      .clear()
      .type(orderId);
  }

  // static selectBuyerWarehouse() {
  //   cy.log('Select buyer warehoue');
  //   cy.xpath(SELECT_BUYER_WAREHOURSE).click();
  //   cy.log('warehouse selected');
  // }

  static selectBuyerWarehouse(buyerWarehouse) {
    cy.log('Select buyer warehoue');
    cy.xpath(`//div[@data-id='${buyerWarehouse}']//input`).click();
    cy.log('warehouse selected');
  }

  static selectBuyerLocation() {
    cy.log('Select buyer location');
    cy.xpath(SELECT_BUYER_LOCATION).click();
    cy.log('location selected');
  }

  static verifyOrderIdInViewAction() {
    cy.log('Verify order ID on view orders details page by clicking on view action');
    cy.xpath(VIEW_ACTION_ORDER_ID).eq(0).invoke('text').then((value) => {
      expect(value).to.eq(orderId);
    });
  }

  static selectResellerInStockOrder(id) {
    const RESELLER = "//div[@data-value='" + id + "']/../div/span/span/input";
    cy.xpath(RESELLER).click();
  }
  static addToCartButton() {
    cy.log('Click at Add to cart button ');
    cy.xpath(ADD_TO_CART_FIELD).click();
  }
  static verifyAgentName(agentName) {
    cy.log('Now verifying the Agent Name');
    cy.xpath(VERIFY_AGENT_NAME).should('contain.text', agentName);
  }

  static verifyAgentId(agenId) {
    cy.log('Now verifying the Agent Id');
    cy.xpath(VERIFY_AGENT_ID).should('contain.text', agenId);
  }

  static verifyAgentMsisdnNo(agentMsisdnNo) {
    cy.log('Now verifying the Agent msisdn no');
    cy.xpath(VERIFY_AGENT_MSISDN_NO).should('contain.text', agentMsisdnNo);
  }

  static addToCartButton() {
    cy.xpath(ADD_TO_CART_FIELD).click();
  }

  static verifyDealerId(dealerId) {
    cy.log('Now verifying the Dealer Id');
    cy.xpath(VERIFY_DEALER_ID).should('contain.text', dealerId);
  }

  static verifyDealerName(dealerIdName) {
    cy.log('Now verifying the Dealer Name ');
    cy.xpath(VERIFY_DEALER_NAME).should('contain.text', dealerIdName);
  }

  static verifyDealerMsisdnNo(dealerMsisdnNo) {
    cy.log('Now verifying the Dealer msisdn no ');
    cy.xpath(VERIFY_DEALER_MSISDN_NO).should('contain.text', dealerMsisdnNo);
  }

  static enterAdditionalInfo() {
    cy.log('Now entering the additional info POReference');
    cy.xpath(CLICK_ADDITIONAL_INFORMATION).click();
    cy.xpath(CLICK_POREFERENCE).click();
    cy.wait(200);
    cy.xpath(ENTER_POREFERENCE_VALUE).type("A");
    cy.wait(200);
    cy.xpath(CLICK_PLUS_BUTTON).click();
    cy.wait(200);
    cy.xpath(CLICK_SUBMIT).click();
  }

  static fetchOrderID() {
    cy.log('in raise order page, order id is ', orderId)
    const fetchOrderID = orderId;
    return cy.wrap(fetchOrderID);
  }

  static validateOrderSummary(productSKU) {
    cy.xpath(ORDER_SUMMARY).should('have.text', productSKU);
  }

  static selectItems(quantity) {
    cy.xpath(SELECT_ITEM).click();
  }

  static selectLocation(buyerLocation) {
    cy.log('Select buyer location');
    cy.xpath(`//div[@data-id='${buyerLocation}']//input`).click();
    cy.log('location selected');
  }

  static selectAllSellerWarehouses() {
    cy.log('select all seller warehouses button');
    cy.xpath(ALL_SELLER_WAREHOUSES).click();
    cy.wait(300);
  }

  static searchResellerMSISDN(SELLER_MSISDN) {
    cy.log('Search reseller msisdn');
    cy.log(SELLER_MSISDN);
    cy.intercept("POST", "api/dms/auth/getResellerBasicInfo").as("getResellerBasicInfo");
    cy.xpath(ENTER_SELLER_MSISDN).clear().type(SELLER_MSISDN);
    cy.xpath(SEARCH_BUTTON).click();
    cy.wait("@getResellerBasicInfo");
  }

  static selectMSISDN() {
    cy.xpath(SELECT_RESELLER_DROPDOWN).type('{downArrow}');
    cy.wait(500);
    cy.xpath(SELECT_MSISDN).click();
    cy.wait(500);
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
}

export default RaiseOrderPage;
