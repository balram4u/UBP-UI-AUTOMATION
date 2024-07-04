import {
  Then, When, And,
} from 'cypress-cucumber-preprocessor/steps';

import RaiseOrderHomePage from '../../../pages/unified-portal/order/raise-order-home-page';
import ReturnOrderHomePage from '../../../pages/unified-portal/order/return-order-home-page';
import ReturnOrder from '../../../pages/unified-portal/order/return-order-page';
import tripHomePage from '../../../pages/unified-portal/trip/trip-homepge';
import OrdersPage from '../../../pages/unified-portal/order/orders-home-page';
import PortalHomePage from '../../../pages/unified-portal/home/portal-home-page';
import tasksPage from '../../../pages/unified-portal/trip/tasks-page';
import RequestedTripPage from '../../../pages/unified-portal/trip/requested_trip_page';
import CommonUtilities from '../../../common/Util';
import RaiseOrderPage from '../../../pages/unified-portal/order/raise-order-page';

And(/^I navigate to the Return Order Page$/, () => {
  ReturnOrderHomePage.visitReturnOrderHomePageUsingUrl();
});

And(/^I navigate to the Raise Order Page$/, () => {
  RaiseOrderHomePage.visitRaiseOrderHomePageUsingUrl();
});

And(/^I navigate to the Orders Page$/, () => {
  OrdersPage.visitOrdersHomePageUsingUrl();
});

Then(/^I update old trip status and release used inventories "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, RELEASE_INVENTORIES) => {
  tripHomePage.updateOldTripStatus(ASSIGN_AGENT_ID);
  tripHomePage.releaseInventories(RELEASE_INVENTORIES);
});

Then(/^I am able to perform logout operation$/, () => {
  cy.wait(800);
  PortalHomePage.LogOut();
});

And(/^I navigate to the Task page$/, () => {
  tasksPage.openTasksPage();
});

And(/^I apply filter to find order id inside the table for po order "([^"]*)"$/, (RESELLER_TYPE) => {
  OrdersPage.clickFilterButton();
  cy.wait(1000);
  OrdersPage.selectColumn("Order Id");
  OrdersPage.selectOperator("Equal");
  if (RESELLER_TYPE === "Branch") {
    ReturnOrder.fillOrderForBranchAndOperator();
  }
  if (RESELLER_TYPE === "POS") {
    ReturnOrder.fillOrderForPosAndBranch();
  }
  if (RESELLER_TYPE === "RO") {
    ReturnOrder.fillOrderId();
  }
  cy.wait(1000);
});

And(/^I click on view button$/, () => {
  cy.wait(1000);
  tasksPage.clickView();
  cy.wait(1000);
});

And(/^I click on Assisgn Agent button to assign agent$/, () => {
  tasksPage.clickAssignAgent();
});

Then(/^I select the delivery type "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (DELIVERY_TYPE, DELIVERY_AGENT_OPTION, ELIGIBLE_AGENT, VENDOR) => {
  cy.wait(300);
  tasksPage.assignVendor(DELIVERY_TYPE, DELIVERY_AGENT_OPTION, ELIGIBLE_AGENT, VENDOR);
  cy.wait(300);
});

And(/^I navigate to the Requested Trip Page$/, () => {
  RequestedTripPage.openRequestedTripsPage();
  cy.wait(2000);
});

When(/^I approve requested trip with eligible agent "([^"]*)"$/, (ELIGIBLE_AGENT) => {
  RequestedTripPage.approveTrip(ELIGIBLE_AGENT);
  CommonUtilities.validateMessage("Requested trip approved successfullyAssigned agent and sent for trip creation.");
});

And(/^I get trip details using order details$/, () => {
  tripHomePage.getTripId();
});

And(/^I validate trip status should be Ready for "([^"]*)"$/, (ASSIGN_AGENT_ID) => {
  tripHomePage.getTripStatus(ASSIGN_AGENT_ID);
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

And(/^I navigate to Trip Page$/, () => {
  tripHomePage.openTripsPage();
});

Then(/^I validate trip status on UI should be "([^"]*)"$/, (START_STATUS) => {
  tripHomePage.tripStatusOnUI(START_STATUS);
});

When(/^I perform PO Raise Order for SFC having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, PRODUCT_SKU, QUANTITY, SELLER_NAME, PAYMENT_AGREEMENT, PAYMENT_MODE, WAREHOUSE, DELIVERY, RESELLER_TYPE) => {
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

    cy.wait(1000);
    ReturnOrder.getOrderIdForBranchAndOperator();
    ReturnOrder.clickOnClose();
    cy.wait(1000);
  }

  if (RESELLER_TYPE === 'POS') {
    cy.wait(300);
    // RaiseOrderPage.orderType(ORDER_TYPE);
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
    RaiseOrderPage.clickOnSelectRange();
    RaiseOrderPage.enterQuantity(3);
    RaiseOrderPage.clickOnSubmit();
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

    cy.wait(1000);
    ReturnOrder.getOrderIdForPosAndBranch();
    ReturnOrder.clickOnClose();
    cy.wait(1000);
  }
});

Then(/^I fetch the tripId from UI "([^"]*)"$/, (ASSIGN_AGENT_ID) => {
  tripHomePage.fetchTripId(ASSIGN_AGENT_ID);
});

Then(/^I verify raised order PO for SFC available on Orders Page having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, SELLER_NAME, RESELLER_ID, PAYMENT_MODE, STATE, BUYER_ID, RESELLER_TYPE) => {
  cy.wait(800);
  OrdersPage.clickFilterButton();
  cy.wait(800);
  OrdersPage.selectColumn("Order Id");
  cy.wait(800);
  OrdersPage.selectOperator("Equal");
  cy.wait(800);
  if (RESELLER_TYPE === "Branch") {
    ReturnOrder.fillOrderForBranchAndOperator();
  }
  if (RESELLER_TYPE === "POS") {
    ReturnOrder.fillOrderForPosAndBranch();
  }
  cy.wait(800);
  ReturnOrder.clickFilterButton();
  // eslint-disable-next-line max-len
  ReturnOrder.verifyOrder(ORDER_TYPE, SELLER_NAME, RESELLER_ID, PAYMENT_MODE, STATE, BUYER_ID, RESELLER_TYPE);
});

Then(/^I update old trip status "([^"]*)"$/, (ASSIGN_AGENT_ID) => {
  tripHomePage.updateOldTripStatus(ASSIGN_AGENT_ID);
});

Then(/^I release used trackable non serialized inventories "([^"]*)"$/, (PRODUCT_SKU) => {
  tripHomePage.releaseTrackableNonSerializedInventories(PRODUCT_SKU);
});

When(/^I perform RO Return Order for SFC having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, PRODUCT_SKU, DELIVERY_TYPE, RESELLER_TYPE, PICKUP_WAREHOUSE) => {
  cy.wait(300);
  if (RESELLER_TYPE === 'POS') {
    cy.wait(300);
    ReturnOrder.orderType(ORDER_TYPE);
    ReturnOrder.fillOrderForPosAndBranch();
    ReturnOrder.clickSearchButton();
    ReturnOrder.selectOrderId();
    ReturnOrder.clickOnNext();
    ReturnOrder.clickFullReturn();
    ReturnOrder.clickOnNext();
    cy.wait(500);
    ReturnOrder.clickOnNext();
    cy.wait(500);
    ReturnOrder.clickOnNext();
    cy.wait(500);
    ReturnOrder.clickOnNext();
    cy.wait(500);
    ReturnOrder.selectDelivery(DELIVERY_TYPE);
    cy.wait(300);
    ReturnOrder.clickOnNext();
    ReturnOrder.validateOrderSummary(PRODUCT_SKU);
    cy.wait(300);
    ReturnOrder.clickOnSubmit({ force: true });
    ReturnOrder.enterReason();

    ReturnOrder.getOrderId();
    cy.wait(1000);
  }

  if (RESELLER_TYPE === 'Branch') {
    cy.wait(300);
    ReturnOrder.orderType(ORDER_TYPE);
    ReturnOrder.fillOrderForBranchAndOperator();
    ReturnOrder.clickSearchButton();
    ReturnOrder.selectOrderId();
    ReturnOrder.clickOnNext();
    ReturnOrder.clickFullReturn();
    ReturnOrder.clickOnNext();
    cy.wait(500);
    ReturnOrder.selectPickUpWarehouse(PICKUP_WAREHOUSE);
    ReturnOrder.clickOnNext();
    cy.wait(500);
    ReturnOrder.clickOnNext();
    cy.wait(500);
    ReturnOrder.clickOnNext();
    cy.wait(500);
    ReturnOrder.selectDelivery(DELIVERY_TYPE);
    cy.wait(300);
    ReturnOrder.clickOnNext();
    ReturnOrder.validateOrderSummary(PRODUCT_SKU);
    cy.wait(300);
    ReturnOrder.clickOnSubmit({ force: true });
    ReturnOrder.enterReason();

    ReturnOrder.getOrderId();
    cy.wait(1000);
  }
});

Then(/^I search raised order for SFC using filter option "([^"]*)"$/, (RESELLER_TYPE) => {
  cy.wait(2000);
  OrdersPage.clickFilterButton();
  cy.wait(2000);
  cy.debug('select Column Order Id from dropdown');
  OrdersPage.selectColumn("Order Id");
  cy.wait(2000);
  cy.debug('select operator Equal from dropdown');
  OrdersPage.selectOperator("Equal");
  cy.wait(2000);
  cy.debug('fill Filter Value');
  if (RESELLER_TYPE === "Branch") {
    ReturnOrder.fillOrderForBranchAndOperator();
  }
  if (RESELLER_TYPE === "POS") {
    ReturnOrder.fillOrderForPosAndBranch();
  }
  if (RESELLER_TYPE === "RO") {
    ReturnOrder.fillOrderId();
  }
  cy.wait(800);
  ReturnOrder.clickFilterButton();
});

Then(/^I approve the raised order PO for SFC$/, () => {
  cy.debug('I approve the raised order PO for SFC');
  ReturnOrder.approveOrder();
});

When(/^I perform ISO Raise Order having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, PRODUCT_SKU, QUANTITY, BUYER_ID, PAYMENT_AGREEMENT, PAYMENT_MODE, TYPE) => {
  cy.wait(5000);
  RaiseOrderPage.selectProductSKU(PRODUCT_SKU);
  cy.wait(3000);
  RaiseOrderPage.clickOnSelectRange();
  RaiseOrderPage.enterQuantity(QUANTITY);
  RaiseOrderPage.clickOnSubmit();
  cy.wait(3000);
  RaiseOrderPage.clickOnNext();
  cy.wait(3000);
  if (TYPE === "MSISDN") {
    RaiseOrderPage.selectMSISDN();
    RaiseOrderPage.searchResellerMSISDN(BUYER_ID);
  } else {
    RaiseOrderPage.searchResellerId(BUYER_ID);
  }
  cy.wait(3000);
  RaiseOrderPage.selectResellerId();
  cy.wait(3000);
  RaiseOrderPage.clickOnNext();
  cy.wait(3000);
  RaiseOrderPage.selectPaymentAgreement(PAYMENT_AGREEMENT);
  RaiseOrderPage.selectPaymentMode(PAYMENT_MODE);
  cy.wait(3000);
  RaiseOrderPage.clickOnNext();
  cy.wait(3000);
  RaiseOrderPage.validateOrderSummary(PRODUCT_SKU);
  RaiseOrderPage.clickOnSubmit();

  cy.wait(3000);
  ReturnOrder.getOrderId();
  RaiseOrderPage.clickOnClose();
  cy.wait(1000);
});

Then(/^I verify raised order available on Orders Page having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, SELLER_NAME, RESELLER_ID, PAYMENT_MODE, STATE, BUYER_WAREHOUSE) => {
  cy.wait(800);
  OrdersPage.clickFilterButton();
  cy.wait(800);
  OrdersPage.selectColumn("orderId");
  cy.wait(1000);
  OrdersPage.selectOperator("equals");
  cy.wait(1000);
  ReturnOrder.fillOrderId();
  cy.wait(800);
  OrdersPage.clickFilterButton();
  OrdersPage.verifyRaisedOrder(ORDER_TYPE, SELLER_NAME, RESELLER_ID, PAYMENT_MODE, STATE, BUYER_WAREHOUSE);
});

When(/^I perform RO Return Order having following parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, RETURN_TYPE, QUANTITY) => {
  cy.wait(1000);
  // ReturnOrder.orderType(ORDER_TYPE);
  cy.wait(1000);
  ReturnOrder.fillOrderId();
  cy.wait(1000);
  ReturnOrder.clickSearchButton();
  cy.wait(1000);
  ReturnOrder.selectOrderId();
  cy.wait(1000);
  ReturnOrder.clickOnNext();
  cy.wait(1000);
  if (RETURN_TYPE === "Full Return") {
    ReturnOrder.clickFullReturn();
  } else if (RETURN_TYPE === "Partial Return") {
    ReturnOrder.clickOnSelectRange();
    cy.wait(900);
    ReturnOrder.enterQuantity(QUANTITY);
    ReturnOrder.clickOnSubmit();
  }
  cy.wait(1000);
  ReturnOrder.clickOnNext();
  cy.wait(2000);
  ReturnOrder.clickOnSubmit();
  cy.wait(1000);
  ReturnOrder.enterReason();
  ReturnOrder.getOrderId();
  cy.wait(1000);
});
