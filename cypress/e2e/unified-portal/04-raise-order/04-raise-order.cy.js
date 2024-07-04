import {
  Then, When, And,
} from 'cypress-cucumber-preprocessor/steps';
import PortalHomePage from '../../../pages/unified-portal/home/portal-home-page';
import RaiseOrderHomePage from '../../../pages/unified-portal/order/raise-order-home-page';
import RaiseOrderPage from '../../../pages/unified-portal/order/raise-order-page';
import tasksPage from '../../../pages/unified-portal/trip/tasks-page';
import tripHomePage from '../../../pages/unified-portal/trip/trip-homepge';
import OrdersPage from '../../../pages/unified-portal/order/orders-home-page';
import CommonUtilities from '../../../common/Util';
import RequestedTripPage from '../../../pages/unified-portal/trip/requested_trip_page';
import BulkImportHomePage from "../../../pages/unified-portal/inventory/bulk-import-home-page";

And(/^I navigate to the Raise Order Page$/, () => {
  RaiseOrderHomePage.visitRaiseOrderHomePageUsingUrl();
});

And(/^I navigate to the Raise Order Page using leftside menu$/, () => {
  RaiseOrderHomePage.visitRaiseOrderHomePageUsingLeftMenu();
});

When(/^I perform Raise Order having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, PRODUCT_SKU, QUANTITY, SELLER_NAME, PAYMENT_AGREEMENT, PAYMENT_MODE, WAREHOUSE, DELIVERY, ASSOCIATED_WAREHOUSE) => {
  if (ORDER_TYPE === 'Instant Sales Order - Payments Involved') {
    RaiseOrderPage.selectProductSKU(PRODUCT_SKU);
    RaiseOrderPage.clickOnSelectRange();
    RaiseOrderPage.enterQuantity(QUANTITY);
    RaiseOrderPage.clickOnSubmit();
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.searchResellerId(SELLER_NAME);
    RaiseOrderPage.selectResellerId();
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectPaymentAgreement(PAYMENT_AGREEMENT);
    RaiseOrderPage.selectPaymentMode(PAYMENT_MODE);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.clickOnSubmit();
  }

  if (ORDER_TYPE === 'Instant Purchase Order - Payments Involved') {
    RaiseOrderPage.orderType(ORDER_TYPE);
    RaiseOrderPage.searchResellerId(SELLER_NAME);
    cy.wait(800);
    RaiseOrderPage.selectResellerId();
    cy.wait(800);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectProductSKU(PRODUCT_SKU);
    cy.wait(800);
    RaiseOrderPage.enterQuantityAndAddToCart(QUANTITY, ORDER_TYPE);
    cy.wait(800);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectPaymentAgreement(PAYMENT_AGREEMENT);
    cy.wait(800);
    RaiseOrderPage.selectPaymentMode(PAYMENT_MODE);
    cy.wait(800);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.clickOnSubmit();
  }
  cy.wait(4000);
  RaiseOrderPage.getOrderId(ORDER_TYPE);
  RaiseOrderPage.clickOnClose();
  cy.wait(900);
});

When(/^I perform Raise Order with multiple devices category SKUS having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, PRODUCT_SKU1, PRODUCT_SKU2, QUANTITY, SELLER_NAME, PAYMENT_AGREEMENT, PAYMENT_MODE) => {
  if (ORDER_TYPE === 'Instant Purchase Order - Payments Involved') {
    RaiseOrderPage.orderType(ORDER_TYPE);
    RaiseOrderPage.searchResellerId(SELLER_NAME);
    cy.wait(800);
    RaiseOrderPage.selectResellerId();
    cy.wait(800);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectProductSKU(PRODUCT_SKU1);
    cy.wait(800);
    RaiseOrderPage.enterQuantityAndAddToCart(QUANTITY, ORDER_TYPE);
    cy.wait(800);
    RaiseOrderPage.selectProductSKU(PRODUCT_SKU2);
    cy.wait(800);
    RaiseOrderPage.enterQuantityAndAddToCart(QUANTITY, ORDER_TYPE);
    cy.wait(800);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectPaymentAgreement(PAYMENT_AGREEMENT);
    cy.wait(800);
    RaiseOrderPage.selectPaymentMode(PAYMENT_MODE);
    cy.wait(800);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.clickOnSubmit();
  }
  cy.wait(4000);
  RaiseOrderPage.getOrderId(ORDER_TYPE);
  RaiseOrderPage.clickOnClose();
  cy.wait(900);
});

Then(/^I am able to perform logout operation$/, () => {
  cy.wait(800);
  PortalHomePage.LogOut();
});

And(/^I navigate to the Orders Page$/, () => {
  OrdersPage.visitOrdersHomePageUsingUrl();
});

Then(/^I verify raised order available on Orders Page having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, SELLER_NAME, RESELLER_ID, PAYMENT_MODE, STATE, BUYER_WAREHOUSE) => {
  cy.wait(800);
  OrdersPage.clickFilterButton();
  cy.wait(800);
  OrdersPage.selectColumn("orderId");
  cy.wait(800);
  OrdersPage.selectOperator("equals");
  cy.wait(800);
  OrdersPage.fillFilterValue();
  cy.wait(800);
  OrdersPage.clickFilterButton();
  cy.wait(800);
  OrdersPage.verifyRaisedOrder(ORDER_TYPE, SELLER_NAME, RESELLER_ID, PAYMENT_MODE, STATE, BUYER_WAREHOUSE);
});

Then(/^I perform Confirm Order operation$/, () => {
  OrdersPage.confirmOrder();
});

Then(/^I perform Confirm Payment operation having following parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (PaidTo, PaidFrom, ORDER_TYPE) => {
  if (ORDER_TYPE === 'Purchase Order - Payments Involved') {
    OrdersPage.clickFilterButton();
    cy.wait(500);
    OrdersPage.selectColumn("Order Id");
    cy.wait(800);
    OrdersPage.selectOperator("Equal");
    cy.wait(800);
    OrdersPage.fillFilterValue();
    cy.wait(800);
    OrdersPage.clickFilterButton();
    OrdersPage.scrollToRight();
    OrdersPage.confirmPayment(PaidFrom, PaidTo);
  }
  if (ORDER_TYPE === 'Instant Purchase Order - Payments Involved') {
    OrdersPage.clickFilterButton();
    cy.wait(500);
    OrdersPage.selectColumn("Order Id");
    cy.wait(800);
    OrdersPage.selectOperator("Equal");
    cy.wait(800);
    OrdersPage.fillFilterValue();
    cy.wait(800);
    OrdersPage.clickFilterButton();
    OrdersPage.scrollToRight();
    OrdersPage.confirmPayment(PaidFrom, PaidTo);
  }
  if (ORDER_TYPE === 'Instant Sales Order - Payments Involved') {
    OrdersPage.confirmPayment(PaidTo, PaidFrom);
  }
});

Then(/^I click on Raise order button to verify it navigates to correct page$/, () => {
  OrdersPage.clickRaiseOrder();
});

And(/^I verify raised order details in view action having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, END_STATE, RESELLER_ID, SELLER_NAME, PRODUCT_SKU, QUANTITY, PAYMENT_MODE, PAYMENT_AGREEMENT) => {
  OrdersPage.viewActionAndVerifyOrderDetails(ORDER_TYPE, END_STATE, RESELLER_ID, SELLER_NAME,
    PRODUCT_SKU, QUANTITY, PAYMENT_MODE, PAYMENT_AGREEMENT);
});

And(/^I select the order type "([^"]*)"$/, (ORDER_TYPE) => {
  RaiseOrderPage.orderType(ORDER_TYPE);
});

And(/^Enter the Reseller Id "([^"]*)"$/, (SELLER_NAME) => {
  RaiseOrderPage.searchResellerId(SELLER_NAME);
});

Then(/^select that Reseller id$/, () => {
  RaiseOrderPage.selectResellerId();
});

And(/^Click on next button$/, () => {
  RaiseOrderPage.clickOnNext();
});

And(/^Select the Buyer location$/, () => {
  RaiseOrderPage.selectBuyerLocation();
});

And(/^Select Associated Warehouse$/, () => {
  RaiseOrderPage.selectAssociatedSellerWarehouse();
});

Then(/^Select type of Product SKU "([^"]*)"$/, (PRODUCT_SKU) => {
  RaiseOrderPage.selectProductSKU(PRODUCT_SKU);
});

And(/^Enter the Quantity of Product "([^"]*)"$/, (QUANTITY, ORDER_TYPE) => {
  RaiseOrderPage.enterQuantityAndAddToCart(QUANTITY, ORDER_TYPE);
});

And(/^Click on Add to cart button to add the product$/, () => {
  RaiseOrderPage.addToCartButton();
});

Then(/^I Select Delivery option$/, () => {
  RaiseOrderPage.selectDeliveryOption();
});

Then(/^I Verify all the fields of Invoice "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (DEALER_ID, DEALER_NAME, DEALER_MSISDN_NO, AGENT_NAME, AGENT_ID, AGENT_MSISDN_NO) => {
  RaiseOrderPage.verifyDealerId(DEALER_ID);
  RaiseOrderPage.verifyDealerName(DEALER_NAME);
  RaiseOrderPage.verifyDealerMsisdnNo(DEALER_MSISDN_NO);
  RaiseOrderPage.verifyAgentId(AGENT_ID);
  RaiseOrderPage.verifyAgentName(AGENT_NAME);
  RaiseOrderPage.verifyAgentMsisdnNo(AGENT_MSISDN_NO);
});

Then(/^Select Payment Agreement "([^"]*)", Select Payment modes "([^"]*)"$/, (PAYMENT_AGREEMENT, PAYMENT_MODE) => {
  RaiseOrderPage.selectPaymentAgreement(PAYMENT_AGREEMENT);
  RaiseOrderPage.selectPaymentMode(PAYMENT_MODE);
});

Then(/^Click on submit button$/, () => {
  RaiseOrderPage.clickOnSubmit();
});

Then(/^Get the order id from the pop-up message$/, () => {
  cy.wait(1000);
  RaiseOrderPage.getOrderId();
  RaiseOrderPage.clickOnClose();
});

And(/^I navigate to the Task page$/, () => {
  tasksPage.openTasksPage();
});

And(/^I apply filter to find order id inside the table$/, () => {
  cy.wait(800);
  OrdersPage.clickFilterButton();
  cy.wait(800);
  OrdersPage.selectColumn("orderId");
  cy.wait(800);
  OrdersPage.selectOperator("Equal");
  cy.wait(800);
  OrdersPage.fillFilterValue();
  cy.wait(800);
  OrdersPage.clickFilterButton();
  cy.wait(800);
});

And(/^I click on view button$/, () => {
  cy.wait(1000);
  tasksPage.clickView();
  cy.wait(1000);
});

And(/^I click on Assisgn Agent button to assign agent$/, () => {
  tasksPage.clickAssignAgent();
});

And(/^I select the agent from dropdown "([^"]*)"$/, (agent) => {
  tasksPage.assignAgent(agent);
});

And(/^I navigate to Trip Page$/, () => {
  tripHomePage.openTripsPage();
});

When(/^Click on filters to filter search with different type of value as "([^"]*)" "([^"]*)" "([^"]*)"$/, (COLUMN_VALUE, OPERATOR, VALUE) => {
  cy.wait(900);
  OrdersPage.clickFilterButton();
  cy.wait(900);
  OrdersPage.selectColumn(COLUMN_VALUE);
  cy.wait(900);
  OrdersPage.selectOperator(OPERATOR);
  cy.wait(900);
  OrdersPage.fillFilterWithDifferentValue(VALUE);
  cy.wait(900);
});

When(/^I verify therer is no such Order details shows inside the table$/, () => {
  cy.wait(900);
  RaiseOrderHomePage.verifyInsideTable();
});

Then(/^The status should be Open or Ready "([^"]*)"$/, (AGENT_ID) => {
  tripHomePage.verifyStatus(AGENT_ID);
});

When(/^I verify that Order Id "([^"]*)" is present inside the table$/, (FILTER_VALUE) => {
  OrdersPage.verifyOrderTypes(FILTER_VALUE);
  cy.wait(900);
});

When(/^I verify that Buyer Id "([^"]*)" is present inside the table$/, (FILTER_VALUE) => {
  OrdersPage.verifyBuyerId(FILTER_VALUE);
  cy.wait(900);
});

When(/^I verify that seller Id "([^"]*)" is present inside the table$/, (FILTER_VALUE) => {
  OrdersPage.verifySellerId(FILTER_VALUE);
  cy.wait(900);
});

When(/^I verify that Sender Id "([^"]*)" is present inside the table$/, (FILTER_VALUE) => {
  OrdersPage.verifySellerId(FILTER_VALUE);
  cy.wait(900);
});

When(/^I verify that Receiver Id "([^"]*)" is present inside the table$/, (FILTER_VALUE) => {
  OrdersPage.verifyReceiverId(FILTER_VALUE);
  cy.wait(900);
});

When(/^I verify that State "([^"]*)" is present inside the table$/, (FILTER_VALUE) => {
  OrdersPage.verifyState(FILTER_VALUE);
  cy.wait(900);
});

When(/^I cancel the Trip which is on READY state "([^"]*)"$/, (ASSIGN_AGENT_ID) => {
  tripHomePage.cancelTheTrip(ASSIGN_AGENT_ID);
});

When(/^I verify the message after cancel the Trip$/, () => {
  tripHomePage.verifyCancelTripMessage();
});

When(/^I verify that the Cancel Trip should not be present inside the table$/, () => {
  tripHomePage.verifyCancelAgent();
});

When(/^I verify the status of the Order Id inside the Task page "([^"]*)"$/, (status) => {
  tripHomePage.verifyTaskStatus(status);
});

When(/^I verify therer is no such Trip details shows inside the table$/, () => {
  RaiseOrderHomePage.verifyInsideTable();
});

When(/^I verified that the order Id is present inside the view page$/, () => {
  OrdersPage.scrollToRight();
  tripHomePage.clickOnView();
  RaiseOrderPage.verifyOrderIdInViewAction();
});

And(/^I verify raised order details in view action having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, END_STATE, RESELLER_ID, SELLER_NAME, PRODUCT_SKU, QUANTITY, PAYMENT_MODE, PAYMENT_AGREEMENT) => {
  OrdersPage.viewActionAndVerifyOrderDetails(ORDER_TYPE, END_STATE, RESELLER_ID, SELLER_NAME,
    PRODUCT_SKU, QUANTITY, PAYMENT_MODE, PAYMENT_AGREEMENT);
});

When(/^I perform Raise Order having following invalid parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, PRODUCT_SKU, QUANTITY, SELLER_NAME, PAYMENT_AGREEMENT, PAYMENT_MODE, WAREHOUSE, ERROR_MESSAGE, DELIVERY) => {
  cy.wait(300);

  if (ORDER_TYPE === 'Purchase Order - Payments Involved') {
    cy.wait(300);
    RaiseOrderPage.orderType(ORDER_TYPE);
    RaiseOrderPage.searchResellerId(SELLER_NAME);
    RaiseOrderPage.selectResellerId();
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectBuyerLocation();
    cy.wait(300);
    RaiseOrderPage.clickOnNext();
    cy.wait(1000);
    RaiseOrderPage.selectAssociatedWarehouse(WAREHOUSE);
    cy.wait(300);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectProductSKU(PRODUCT_SKU);
    RaiseOrderPage.enterQuantityAndAddToCart(QUANTITY, ORDER_TYPE);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectDelivery(DELIVERY);
    cy.wait(300);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectPaymentAgreement(PAYMENT_AGREEMENT);
    RaiseOrderPage.selectPaymentMode(PAYMENT_MODE);
    cy.wait(300);
    RaiseOrderPage.clickOnNext();
    cy.wait(300);
    RaiseOrderPage.enterAdditionalInfo();
    RaiseOrderPage.clickOnSubmit();
  }

  if (ORDER_TYPE === 'Instant Purchase Order - Payments Involved') {
    cy.wait(300);
    RaiseOrderPage.orderType(ORDER_TYPE);
    RaiseOrderPage.searchResellerId(SELLER_NAME);
    RaiseOrderPage.selectResellerId();
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectProductSKU(PRODUCT_SKU);
    RaiseOrderPage.enterQuantityAndAddToCart(QUANTITY, ORDER_TYPE);
    RaiseOrderPage.clickOnNext();
    cy.wait(300);
    RaiseOrderPage.selectPaymentAgreement(PAYMENT_AGREEMENT);
    RaiseOrderPage.selectPaymentMode(PAYMENT_MODE);
    cy.wait(300);
    RaiseOrderPage.clickOnNext();
    cy.wait(300);
  }

  cy.debug('validate Message \'Order invalid\'');
  CommonUtilities.validateMessage(ERROR_MESSAGE);
});

Then(/^I verify raised order PO for SFC available on Orders Page having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, SELLER_NAME, RESELLER_ID, PAYMENT_MODE, STATE, BUYER_ID, RESELLER_TYPE) => {
  cy.wait(800);
  OrdersPage.clickFilterButton();
  cy.wait(800);
  OrdersPage.selectColumn("Order Id");
  cy.wait(800);
  OrdersPage.selectOperator("Equal");
  cy.wait(800);
  OrdersPage.fillFilterValue();
  cy.wait(800);
  OrdersPage.clickFilterButton();
  // eslint-disable-next-line max-len
  OrdersPage.verifyOrder(ORDER_TYPE, SELLER_NAME, RESELLER_ID, PAYMENT_MODE, STATE, BUYER_ID, RESELLER_TYPE);
});

Then(/^I select the delivery type "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (DELIVERY_TYPE, DELIVERY_AGENT_OPTION, ELIGIBLE_AGENT, VENDOR, AGENT_ASSIGNED_MESSAGE) => {
  cy.wait(300);
  tasksPage.assignVendor(DELIVERY_TYPE, DELIVERY_AGENT_OPTION, ELIGIBLE_AGENT, VENDOR, AGENT_ASSIGNED_MESSAGE);
  cy.wait(300);
});

When(/^I perform PO Raise Order for SFC having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, PRODUCT_SKU, QUANTITY, SELLER_NAME, PAYMENT_AGREEMENT, PAYMENT_MODE, WAREHOUSE, DELIVERY, RESELLER_TYPE, BUYER_WAREHOUSE) => {
  cy.wait(300);
  if (RESELLER_TYPE === 'Branch') {
    cy.wait(300);
    RaiseOrderPage.orderType(ORDER_TYPE);
    RaiseOrderPage.searchResellerId(SELLER_NAME);
    RaiseOrderPage.selectResellerId();
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectBuyerLocation();
    cy.wait(300);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectAssociatedWarehouse(WAREHOUSE);
    cy.wait(300);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectProductSKU(PRODUCT_SKU);
    RaiseOrderPage.enterQuantityAndAddToCart(QUANTITY, ORDER_TYPE);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectDelivery(DELIVERY);
    cy.wait(300);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectPaymentAgreement(PAYMENT_AGREEMENT);
    RaiseOrderPage.selectPaymentMode(PAYMENT_MODE);
    cy.wait(300);
    RaiseOrderPage.clickOnNext();
    cy.wait(300);
    RaiseOrderPage.enterAdditionalInfo();
    cy.wait(300);
    RaiseOrderPage.validateOrderSummary(PRODUCT_SKU);
    cy.wait(300);
    RaiseOrderPage.clickOnSubmit();
  }
  if (RESELLER_TYPE === 'HQ') {
    cy.wait(300);
    RaiseOrderPage.orderType(ORDER_TYPE);
    RaiseOrderPage.searchResellerId(SELLER_NAME);
    RaiseOrderPage.selectResellerId();
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectBuyerWarehouse(BUYER_WAREHOUSE);
    cy.wait(200);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectAssociatedWarehouse(WAREHOUSE);
    cy.wait(300);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectProductSKU(PRODUCT_SKU);
    RaiseOrderPage.enterQuantityAndAddToCart(QUANTITY, ORDER_TYPE);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectDelivery(DELIVERY);
    cy.wait(300);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectPaymentAgreement(PAYMENT_AGREEMENT);
    RaiseOrderPage.selectPaymentMode(PAYMENT_MODE);
    cy.wait(300);
    RaiseOrderPage.clickOnNext();
    cy.wait(300);
    RaiseOrderPage.enterAdditionalInfo();
    cy.wait(300);
    RaiseOrderPage.validateOrderSummary(PRODUCT_SKU);
    cy.wait(300);
    RaiseOrderPage.clickOnSubmit();
  }
  if (RESELLER_TYPE === 'Mpesa') {
    cy.wait(300);
    RaiseOrderPage.orderType(ORDER_TYPE);
    RaiseOrderPage.searchResellerId(SELLER_NAME);
    RaiseOrderPage.selectResellerId();
    RaiseOrderPage.clickOnNext();
    cy.wait(300);
    RaiseOrderPage.selectBuyerWarehouse(BUYER_WAREHOUSE);
    cy.wait(300);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectAssociatedWarehouse(WAREHOUSE);
    cy.wait(300);
    RaiseOrderPage.clickOnNext();
    cy.wait(300);
    RaiseOrderPage.selectProductSKU(PRODUCT_SKU);
    RaiseOrderPage.enterQuantityAndAddToCart(QUANTITY, ORDER_TYPE);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectDelivery(DELIVERY);
    cy.wait(300);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectPaymentAgreement(PAYMENT_AGREEMENT);
    RaiseOrderPage.selectPaymentMode(PAYMENT_MODE);
    cy.wait(300);
    RaiseOrderPage.clickOnNext();
    cy.wait(300);
    RaiseOrderPage.enterAdditionalInfo();
    cy.wait(300);
    RaiseOrderPage.validateOrderSummary(PRODUCT_SKU);
    cy.wait(300);
    RaiseOrderPage.clickOnSubmit();
  }
  cy.wait(1000);
  RaiseOrderPage.getOrderId(ORDER_TYPE);
  RaiseOrderPage.clickOnClose();
  cy.wait(1000);
});

And(/^I navigate to the Requested Trip Page$/, () => {
  RequestedTripPage.openRequestedTripsPage();
  cy.wait(2000);
});

When(/^I approve requested trip with eligible agent "([^"]*)"$/, (ELIGIBLE_AGENT) => {
  RequestedTripPage.approveTrip(ELIGIBLE_AGENT);
  CommonUtilities.validateMessage("Requested trip approved successfullyAssigned agent and sent for trip creation.");
});

When(/^I start the trip having following parameters "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, RESELLER_PATH) => {
  tripHomePage.startTrip(ASSIGN_AGENT_ID, RESELLER_PATH);
});

And(/^I perform markAsReached for warehouse having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, WAREHOUSE, WAREHOUSE_DESTINATION_TYPE, RESELLER_PATH) => {
  tripHomePage.markAsReached(ASSIGN_AGENT_ID, WAREHOUSE, WAREHOUSE_DESTINATION_TYPE, RESELLER_PATH);
});

And(/^I perform approveCollectStockRequest having following parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, WAREHOUSE, RESELLER_PATH) => {
  tripHomePage.approveCollectStockRequest(ASSIGN_AGENT_ID, WAREHOUSE, RESELLER_PATH);
});

And(/^I perform markAsReached for pos having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, RESELLER_ID, POS_DESTINATION_TYPE, RESELLER_PATH) => {
  tripHomePage.markAsReached(ASSIGN_AGENT_ID, RESELLER_ID, POS_DESTINATION_TYPE, RESELLER_PATH);
});

And(/^I perform approvePOSDelivery having following parameters "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, RESELLER_PATH) => {
  tripHomePage.approvePOSDelivery(ASSIGN_AGENT_ID, RESELLER_PATH);
});

And(/^I peform endPosVisit having following parameters "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, RESELLER_PATH) => {
  tripHomePage.endPosVisit(ASSIGN_AGENT_ID, RESELLER_PATH);
});

Then(/^I perform endTrip and validate trip status having following parameters "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, RESELLER_PATH) => {
  tripHomePage.endTrip(ASSIGN_AGENT_ID, RESELLER_PATH);
});

And(/^I get trip details using order details$/, () => {
  tripHomePage.getTripId();
});

And(/^I validate trip status should be Ready for "([^"]*)"$/, (ASSIGN_AGENT_ID) => {
  tripHomePage.getTripStatus(ASSIGN_AGENT_ID);
});

Then(/^I validate trip status on UI should be "([^"]*)"$/, (START_STATUS) => {
  tripHomePage.tripStatusOnUI(START_STATUS);
});

Then(/^I update old trip status and release used inventories "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, RELEASE_INVENTORIES) => {
  tripHomePage.updateOldTripStatus(ASSIGN_AGENT_ID);
  tripHomePage.releaseInventories(RELEASE_INVENTORIES);
});

When(/^I reject the trip having following parameters "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, RESELLER_PATH) => {
  tripHomePage.rejectTrip(ASSIGN_AGENT_ID, RESELLER_PATH);
});

When(/^I perform Raise Order for sfc having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, PRODUCT_SKU, QUANTITY, SELLER_NAME, PAYMENT_AGREEMENT, PAYMENT_MODE) => {
  cy.wait(300);
  if (ORDER_TYPE === 'Instant Purchase Order - Digital') {
    cy.wait(300);
    RaiseOrderPage.orderType(ORDER_TYPE);
    RaiseOrderPage.searchResellerId(SELLER_NAME);
    RaiseOrderPage.selectResellerId();
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectProductSKU(PRODUCT_SKU);
    RaiseOrderPage.enterQuantityAndAddToCart(QUANTITY, ORDER_TYPE);
    cy.wait(1000);
    RaiseOrderPage.clickOnNext();
    cy.wait(1000);
    RaiseOrderPage.selectPaymentAgreement(PAYMENT_AGREEMENT);
    cy.wait(1000);
    RaiseOrderPage.selectPaymentMode(PAYMENT_MODE);
    cy.wait(1000);
    RaiseOrderPage.clickOnNext();
    cy.wait(300);
    RaiseOrderPage.enterAdditionalInfo();
    cy.wait(300);
    RaiseOrderPage.validateOrderSummary(PRODUCT_SKU);
    cy.wait(300);
    RaiseOrderPage.clickOnSubmit();
  }

  if (ORDER_TYPE === 'Instant Sales Order - Payments Involved') {
    RaiseOrderPage.selectProductSKU(PRODUCT_SKU);
    RaiseOrderPage.clickOnSelectRange();
    RaiseOrderPage.enterQuantity(QUANTITY);
    RaiseOrderPage.clickOnSubmit();
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.searchResellerId(SELLER_NAME);
    RaiseOrderPage.selectResellerId();
    RaiseOrderPage.clickOnNext();
    cy.wait(300);
    RaiseOrderPage.selectPaymentAgreement(PAYMENT_AGREEMENT);
    RaiseOrderPage.selectPaymentMode(PAYMENT_MODE);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.validateOrderSummary(PRODUCT_SKU);
    cy.wait(300);
    RaiseOrderPage.clickOnSubmit();
  }
  cy.wait(1000);
  RaiseOrderPage.getOrderId(ORDER_TYPE);
  RaiseOrderPage.clickOnClose();
  cy.wait(1000);
});

Then(/^I perform payment confirmation$/, () => {
  OrdersPage.performPaymentConfirmation();
});

Then(/^I am able to validate proper message "([^"]*)"$/, (popUpMessage) => {
  CommonUtilities.validateMessage(popUpMessage);
});

And(/^I verify page title "([^"]*)"$/, (pageTitle) => {
  cy.wait(1000);
  RaiseOrderHomePage.verifyPageTitle(pageTitle);
});

And(/^I verify table rows count "([^"]*)"$/, (minimumCount) => {
  cy.wait(1000);
  CommonUtilities.verifyFetchedRecordLengthGreaterOrEq(minimumCount);
});

Then(/^I approve the raised order PO$/, () => {
  OrdersPage.approveOrder();
});

Then(/^I update old trip status "([^"]*)"$/, (ASSIGN_AGENT_ID) => {
  tripHomePage.updateOldTripStatus(ASSIGN_AGENT_ID);
});

Then(/^I fetch the tripId from UI "([^"]*)"$/, (ASSIGN_AGENT_ID) => {
  tripHomePage.fetchTripId(ASSIGN_AGENT_ID);
});

Then(/^I view task details under the trip "([^"]*)" "([^"]*)" "([^"]*)"$/, (TYPE, SELLER_NAME, PRODUCT_SKU) => {
  tripHomePage.clickTripViewAction();
  tripHomePage.validateOrder();
  tripHomePage.viewOrderType(TYPE);
  tripHomePage.viewSellerName(SELLER_NAME);
  tripHomePage.viewProductSku(PRODUCT_SKU);
});

When(/^I perform PO Raise Order having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (RESELLER_TYPE, ORDER_TYPE, PRODUCT_SKU, QUANTITY, SELLER_NAME, SELLER_MSISDN, PAYMENT_AGREEMENT, PAYMENT_MODE, DROP_LOCATION, DELIVERY, PICKUP_LOCATION) => {
  // cy.wait(2000);
  if (RESELLER_TYPE == "FranchiseShop") {
    RaiseOrderPage.orderType(ORDER_TYPE);
  }
  if (SELLER_MSISDN !== "") {
    RaiseOrderPage.selectMSISDN();
    RaiseOrderPage.searchResellerMSISDN(SELLER_MSISDN);
  } else {
    RaiseOrderPage.searchResellerId(SELLER_NAME);
  }
  // cy.wait(900);
  RaiseOrderPage.selectResellerId();
  // cy.wait(900);
  RaiseOrderPage.clickOnNext();
  // cy.wait(900);
  RaiseOrderPage.searchResellerIdForPickupDrop(DROP_LOCATION);
  // cy.wait(900);
  RaiseOrderPage.selectResellerIdForPickupDrop();
  // cy.wait(900);
  RaiseOrderPage.clickOnNext();
  // cy.wait(900);
  RaiseOrderPage.searchResellerIdForPickupDrop(PICKUP_LOCATION);
  // cy.wait(900);
  RaiseOrderPage.selectResellerIdForPickupDrop();
  // cy.wait(900);
  // cy.wait(900);
  RaiseOrderPage.clickOnNextToProductSku();
  RaiseOrderPage.selectProductSKU(PRODUCT_SKU);
  // cy.wait(900);
  RaiseOrderPage.enterQuantityAndAddToCart(QUANTITY, ORDER_TYPE);
  // cy.wait(900);
  RaiseOrderPage.clickOnNext();
  // cy.wait(900);
  RaiseOrderPage.selectDelivery(DELIVERY);
  // cy.wait(900);
  RaiseOrderPage.clickOnNext();
  // cy.wait(900);
  RaiseOrderPage.selectPaymentAgreement(PAYMENT_AGREEMENT);
  RaiseOrderPage.selectPaymentMode(PAYMENT_MODE);
  // cy.wait(900);
  RaiseOrderPage.clickOnNext();
  // cy.wait(1000);
  // below step is removed
  // cy.debug('enter additional info');
  // RaiseOrderPage.enterAdditionalInfo();
  // cy.wait(900);
  RaiseOrderPage.validateOrderSummary(PRODUCT_SKU);
  // cy.wait(1000);
  RaiseOrderPage.clickOnSubmitOrder();
  // cy.wait(1000);
  RaiseOrderPage.getOrderId(ORDER_TYPE);
  // cy.wait(1000);
  RaiseOrderPage.clickOnClose();
  // cy.wait(1000);
});

When(/^I perform ISO Raise Order with invalid buyer having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (PRODUCT_SKU, QUANTITY, BUYER_ID, PAYMENT_AGREEMENT, PAYMENT_MODE) => {
  cy.wait(300);
  RaiseOrderPage.selectProductSKU(PRODUCT_SKU);
  cy.wait(300);
  RaiseOrderPage.clickOnSelectRange();
  RaiseOrderPage.enterQuantity(QUANTITY);
  RaiseOrderPage.clickOnSubmit();
  cy.wait(900);
  RaiseOrderPage.clickOnNext();
  cy.wait(900);
  RaiseOrderPage.searchResellerId(BUYER_ID);
  cy.wait(900);
  RaiseOrderPage.selectResellerId();
  cy.wait(900);
  RaiseOrderPage.clickOnNext();
  cy.wait(900);
  RaiseOrderPage.selectPaymentAgreement(PAYMENT_AGREEMENT);
  RaiseOrderPage.selectPaymentMode(PAYMENT_MODE);
  cy.wait(900);
  RaiseOrderPage.clickOnNext();
});

When(/^I perform ISO Raise Order with invalid quantity having following parameters "([^"]*)" "([^"]*)"$/, (PRODUCT_SKU, QUANTITY) => {
  cy.wait(300);
  RaiseOrderPage.selectProductSKU(PRODUCT_SKU);
  cy.wait(900);
  RaiseOrderPage.clickOnSelectRange();
  RaiseOrderPage.enterQuantity(QUANTITY);
  cy.wait(900);
});

Then(/^I click on close button$/, () => {
  RaiseOrderPage.clickOnClose();
});

When(/^I perform ISO Raise Order with invalid start and end serials having following parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (PRODUCT_SKU, START_SERIAL, END_SERIAL) => {
  cy.wait(300);
  RaiseOrderPage.selectProductSKU(PRODUCT_SKU);
  cy.wait(900);
  RaiseOrderPage.clickOnSelectRange();
  RaiseOrderPage.enterStartSerial(START_SERIAL);
  cy.wait(900);
  RaiseOrderPage.enterEndSerial(END_SERIAL);
});

Then(/^I click on submit button$/, () => {
  RaiseOrderPage.clickOnSubmit();
});

When(/^I perform ISO Raise Order having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, PRODUCT_SKU, QUANTITY, BUYER_ID, PAYMENT_AGREEMENT, PAYMENT_MODE, TYPE) => {
  cy.wait(800);
  RaiseOrderPage.selectProductSKU(PRODUCT_SKU);
  cy.wait(800);
  RaiseOrderPage.clickOnSelectRange();
  cy.wait(800);
  RaiseOrderPage.enterQuantity(QUANTITY);
  RaiseOrderPage.clickOnSubmit();
  cy.wait(900);
  RaiseOrderPage.clickOnNext();
  cy.wait(900);
  if (TYPE === "MSISDN") {
    RaiseOrderPage.selectMSISDN();
    RaiseOrderPage.searchResellerMSISDN(BUYER_ID);
  } else {
    RaiseOrderPage.searchResellerId(BUYER_ID);
  }
  cy.wait(900);
  RaiseOrderPage.selectResellerId();
  cy.wait(900);
  RaiseOrderPage.clickOnNext();
  cy.wait(900);
  RaiseOrderPage.selectPaymentAgreement(PAYMENT_AGREEMENT);
  RaiseOrderPage.selectPaymentMode(PAYMENT_MODE);
  cy.wait(900);
  RaiseOrderPage.clickOnNext();
  cy.wait(300);
  RaiseOrderPage.validateOrderSummary(PRODUCT_SKU);
  RaiseOrderPage.clickOnSubmit();
  cy.wait(500);
  RaiseOrderPage.getOrderId(ORDER_TYPE);
  RaiseOrderPage.clickOnClose();
  cy.wait(1000);
});

When(/^I navigate to the bulk import page$/, () => {
  BulkImportHomePage.navigateToBulkImportHomepageUsingUrl();
});

And(/^I perform import bulk operation with params "([^"]*)" "([^"]*)"$/, (importType, fileName) => {
  BulkImportHomePage.clickSubmitNewImport();
  BulkImportHomePage.selectSubImportType(importType);
  BulkImportHomePage.clickImportCSV();
  BulkImportHomePage.uploadFile(fileName);
});

And(/^I validate import information with params "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (importSubType, status, username, fileName) => {
  BulkImportHomePage.verifyImportInformation(importSubType, fileName, status, username);
});

And(/^I wait for 2minutes$/, () => {
  cy.wait(150000);
});

And(/^I reload the page$/, () => {
  cy.reload();
});

And(/^I wait for "([^"]*)" miliseconds$/, (miliseconds) => {
  cy.wait(parseInt(miliseconds));
});
