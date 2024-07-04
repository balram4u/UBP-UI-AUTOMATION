import {
  Then, When, And,
} from 'cypress-cucumber-preprocessor/steps';

import ReturnOrderHomePage from '../../../pages/unified-portal/order/return-order-home-page';
import OrdersHomePage from '../../../pages/unified-portal/order/orders-home-page';
import ReturnOrderPage from '../../../pages/unified-portal/order/return-order-page';
import PortalHomePage from '../../../pages/unified-portal/home/portal-home-page';
import StockTransferHomePage from '../../../pages/unified-portal/order/stock-transfer-home-page';
import StockTransferPage from '../../../pages/unified-portal/order/stock-transfer-page';
import ReversalOrderHomePage from '../../../pages/unified-portal/order/reversal-order-home-page';
import ReversalOrderPage from '../../../pages/unified-portal/order/reversal-order-page';
import OrdersPage from '../../../pages/unified-portal/order/orders-home-page';
import CommonUtilities from '../../../common/Util';
import tripHomePage from '../../../pages/unified-portal/trip/trip-homepge';
import tasksPage from '../../../pages/unified-portal/trip/tasks-page';
import RaiseOrderPage from '../../../pages/unified-portal/order/raise-order-page';

And(/^I navigate to the Stock Transfer Page$/, () => {
  StockTransferHomePage.visitStockTransferHomePageUsingUrl();
  cy.wait(2000);
});

And(/^I navigate to the Orders Page$/, () => {
  OrdersPage.visitOrdersHomePageUsingUrl();
});

When(/^I perform Stock Transfer having following parameters as "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, PRODUCT_SKU, QUANTITY, SELLER_ID, RESELLER_TYPE, ROUTES) => {
  cy.wait(1000);
  if (ORDER_TYPE === 'Instant Sales Order - Stock Transfer') {
    StockTransferHomePage.orderType(ORDER_TYPE);
    cy.wait(900);
    StockTransferHomePage.selectProductSKU(PRODUCT_SKU);
    cy.wait(1500);
    StockTransferHomePage.clickOnSelectRange();
    cy.wait(900);
    StockTransferHomePage.enterQuantity(QUANTITY);
    cy.wait(900);
    StockTransferHomePage.clickOnSubmit();
    cy.wait(900);
    StockTransferHomePage.clickOnNext();
    cy.wait(900);
    StockTransferPage.searchResellerID(SELLER_ID);
    cy.wait(900);
    StockTransferPage.selectSUBDIST1AsBuyer(SELLER_ID);
    cy.wait(900);
    StockTransferPage.clickOnNext();
    cy.wait(800);
    RaiseOrderPage.validateOrderSummary(PRODUCT_SKU);
    cy.wait(900);
    RaiseOrderPage.verifyAgentId(SELLER_ID);
    cy.wait(900);
    StockTransferPage.clickOnSubmit();
    cy.wait(2000);
    StockTransferPage.getOrderId();
    StockTransferPage.clickOnClose();
    cy.wait(300);
  }

  if (ORDER_TYPE === 'Instant Sales Order - Digital Stock Transfer') {
    StockTransferHomePage.orderType(ORDER_TYPE);
    cy.wait(900);
    StockTransferHomePage.searchResellerId(SELLER_ID);
    cy.wait(900);
    StockTransferHomePage.selectResellerId();
    cy.wait(900);
    StockTransferHomePage.clickOnNext();
    cy.wait(900);
    StockTransferPage.selectProductSKU(PRODUCT_SKU);
    cy.wait(900);
    StockTransferPage.enterQuantityAndAddToCart(QUANTITY);
    cy.wait(900);
    StockTransferPage.clickOnNext();
    cy.wait(800);
    RaiseOrderPage.validateOrderSummary(PRODUCT_SKU);
    cy.wait(800);
    RaiseOrderPage.verifyAgentId(SELLER_ID);
    cy.wait(800);
    StockTransferPage.clickOnSubmit();
    // StockTransferPage.storeOrderIdForIPOST();
    // cy.wait(1000);
    cy.wait(800);
    StockTransferPage.getOrderId();
    StockTransferPage.clickOnClose();
    cy.wait(300);
  }
  if (ORDER_TYPE === 'Instant Purchase Order - Stock Transfer') {
    StockTransferHomePage.orderType(ORDER_TYPE);
    cy.wait(800);
    StockTransferHomePage.searchResellerId(SELLER_ID);
    cy.wait(800);
    StockTransferHomePage.selectResellerId();
    cy.wait(800);
    StockTransferHomePage.clickOnNext();
    cy.wait(900);
    StockTransferPage.selectProductSKU(PRODUCT_SKU);
    cy.wait(800);
    StockTransferPage.enterQuantityAndAddToCart(QUANTITY);
    StockTransferPage.clickOnNext();
    StockTransferPage.clickOnSubmit();
    StockTransferPage.storeOrderIdForIPOST();
    cy.wait(1000);
  }

  if (ORDER_TYPE === 'Instant Sales Order - Digital - no payments') {
    if (RESELLER_TYPE === 'Branch') {
      StockTransferHomePage.orderType(ORDER_TYPE);
    }
    cy.wait(800);
    StockTransferHomePage.searchResellerId(SELLER_ID);
    cy.wait(800);
    StockTransferHomePage.selectResellerId();
    cy.wait(800);
    StockTransferHomePage.clickOnNext();
    cy.wait(800);
    StockTransferPage.selectProductSKU(PRODUCT_SKU);
    cy.wait(800);
    StockTransferPage.enterQuantityAndAddToCart(QUANTITY);
    cy.wait(800);
    StockTransferPage.clickOnNext();
    cy.wait(800);
    StockTransferPage.enterAdditionalInfo();
    cy.wait(800);
    StockTransferPage.clickOnSubmit();
    StockTransferPage.getOrderId();
    cy.wait(1000);
  }

  if (ORDER_TYPE === 'Push Inventory Sales Order') {
    cy.wait(800);
    StockTransferHomePage.selectResellerId();
    cy.wait(800);
    StockTransferHomePage.clickOnNext();
    cy.wait(800);
    StockTransferHomePage.selectProductSKU(PRODUCT_SKU);
    cy.wait(800);
    StockTransferHomePage.getBatchID();
    cy.wait(500);
    StockTransferHomePage.clickOnSelectRange();
    cy.wait(800);
    StockTransferHomePage.enterQuantity(QUANTITY);
    cy.wait(500);
    StockTransferHomePage.getStartSerial();
    cy.wait(500);
    StockTransferHomePage.getEndSerial();
    cy.wait(500);
    StockTransferHomePage.clickOnSubmit();
    cy.wait(800);
    StockTransferHomePage.clickOnNext();
    cy.wait(800);
    StockTransferHomePage.selectReceiver(SELLER_ID);
    cy.wait(800);
    StockTransferHomePage.clickOnNext();
    cy.wait(800);
    StockTransferHomePage.selectRoutes(ROUTES);
    cy.wait(800);
    StockTransferHomePage.clickOnNext();
    cy.wait(800);
    StockTransferHomePage.validateOrderSummary(PRODUCT_SKU);
    cy.wait(500);
    StockTransferHomePage.clickOnSubmit();
    StockTransferPage.getOrderId();
    cy.wait(1000);
  }
});

Then(/^I am able to perform logout operation$/, () => {
  PortalHomePage.LogOut();
});

And(/^I navigate to the Orders Page$/, () => {
  // OrdersHomePage.visitOrdersHomePageUsingLeftMenu();
  OrdersHomePage.visitOrdersHomePageUsingUrl();
});

And(/^I navigate to the Reversal Order Page$/, () => {
  // ReversalOrderHomePage.visitReversalOrderHomePageUsingLeftMenu();
  ReversalOrderHomePage.visitReversalOrderHomePageUsingUrl();
});

And(/^I perform Reversal Order having following parameters "([^"]*)" "([^"]*)"$/, (REVERSAL_ORDER_TYPE, RESELLER_ID) => {
  if (REVERSAL_ORDER_TYPE === 'Instant Purchase Return Order - Stock Transfer') {
    ReversalOrderHomePage.orderType(REVERSAL_ORDER_TYPE);
    ReversalOrderHomePage.searchResellerId(RESELLER_ID);
    cy.wait(800);
    ReversalOrderHomePage.selectResellerId();
    cy.wait(800);
    ReturnOrderHomePage.clickOnNext();
    cy.wait(800);
    ReversalOrderPage.enterOrderId();
    cy.wait(800);
    ReversalOrderPage.clickOnSearch();
    cy.wait(800);
    ReversalOrderPage.selectOrderID();
    cy.wait(800);
    ReversalOrderPage.clickOnNext();
    cy.wait(800);
    ReversalOrderPage.clickOnSubmit();
    cy.wait(800);
    ReturnOrderPage.reasonOfReturnType();
  }

  if (REVERSAL_ORDER_TYPE === 'Instant Sales Return Order - Stock Transfer') {
    // ReversalOrderHomePage.orderType(REVERSAL_ORDER_TYPE);
    ReversalOrderHomePage.selectSUBDIST1AsBuyer();
    cy.wait(800);
    ReversalOrderHomePage.clickOnNext();
    cy.wait(800);
    ReversalOrderPage.enterOrderId();
    cy.wait(800);
    ReversalOrderPage.clickOnSearch();
    cy.wait(800);
    ReversalOrderPage.selectOrderID();
    cy.wait(800);
    ReversalOrderPage.clickOnNext();
    cy.wait(800);
    ReversalOrderPage.clickOnSubmit();
    cy.wait(800);
    ReturnOrderPage.reasonOfReturnType();
  }
});

Then(/^I able to validate the order status on orders page "([^"]*)"$/, (ORDER_STATUS) => {
  cy.wait(800);
  OrdersHomePage.clickFilterButton();
  cy.wait(800);
  OrdersHomePage.selectColumn("orderId");
  cy.wait(800);
  OrdersHomePage.selectOperator("equals");
  cy.wait(800);
  StockTransferPage.fillFilterValue();
  cy.wait(800);
  OrdersHomePage.clickFilterButton();
  OrdersHomePage.checkState(ORDER_STATUS);
});

And(/^I confirm the Order$/, () => {
  OrdersHomePage.scrollToRight();
  OrdersHomePage.scrollToUp();
  OrdersHomePage.confirmOrder();
  CommonUtilities.validateMessage("Order accepted.");
  OrdersHomePage.scrollToRight();
  OrdersHomePage.scrollToUp();
});

Then(/^I perform Confirm Order operation$/, () => {
  OrdersPage.confirmOrder();
  CommonUtilities.validateMessage("confirmationAction");
});

Then(/^I update old trip status "([^"]*)"$/, (ASSIGN_AGENT_ID) => {
  tripHomePage.updateOldTripStatus(ASSIGN_AGENT_ID);
});

And(/^I navigate to Trip Page$/, () => {
  tripHomePage.openTripsPage();
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

And(/^I peform endPosVisit having following parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, RESELLER_PATH, POS_ID) => {
  tripHomePage.endPosVisitForStockTransfer(ASSIGN_AGENT_ID, RESELLER_PATH, POS_ID);
});

Then(/^I perform endTrip having following parameters "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, RESELLER_PATH) => {
  tripHomePage.endTrip(ASSIGN_AGENT_ID, RESELLER_PATH);
});

Then(/^I validate trip status on UI should be "([^"]*)"$/, (START_STATUS) => {
  tripHomePage.tripStatusOnUI(START_STATUS);
});

Then(/^I fetch the tripId from UI "([^"]*)"$/, (ASSIGN_AGENT_ID) => {
  tripHomePage.fetchTripId(ASSIGN_AGENT_ID);
});

Then(/^I raise ISO order using API having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, PRODUCT_SKU, PAYMENT_AGREEMENT, PAYMENT_MODE, RECEIVERS, RESELLER_PATH, RESELLER_ID) => {
  StockTransferHomePage.raiseISOUsingAPI(ASSIGN_AGENT_ID, PRODUCT_SKU, PAYMENT_AGREEMENT, PAYMENT_MODE, RECEIVERS, RESELLER_PATH, RESELLER_ID);
  cy.wait(2000);
});

Then(/^I get invoice id using orderid for confirm payment operation "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, RESELLER_PATH) => {
  StockTransferHomePage.getInvoiceId(ASSIGN_AGENT_ID, RESELLER_PATH);
});

Then(/^I perform makePayment API using following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (RESELLER_ID, RECEIVERS, ASSIGN_AGENT_ID, RESELLER_PATH, MAKE_PAYMENT_MODE) => {
  StockTransferHomePage.makePayment(RESELLER_ID, RECEIVERS, ASSIGN_AGENT_ID, RESELLER_PATH, MAKE_PAYMENT_MODE);
});

Then(/^I verify external payment response should be success "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, RESELLER_PATH) => {
  StockTransferHomePage.externalPaymentResponse(ASSIGN_AGENT_ID, RESELLER_PATH);
});

And(/^I perform markAsReached for collector having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, COLLECTOR, COLLECTOR_DESTINATION_TYPE, RESELLER_PATH) => {
  tripHomePage.markAsReached(ASSIGN_AGENT_ID, COLLECTOR, COLLECTOR_DESTINATION_TYPE, RESELLER_PATH);
});

Then(/^I perform depositStock for reconciliation from UI having following parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, PRODUCT_SKU, REASON) => {
  tripHomePage.clickReconciliation(ASSIGN_AGENT_ID);
  tripHomePage.clickOrderId();
  tripHomePage.selectProductSKU(PRODUCT_SKU);
  tripHomePage.selectStatus(REASON);
  tripHomePage.selectSerialNo();
  tripHomePage.clickUpdate();
  tripHomePage.clickMarkAsDone();
  tripHomePage.clickReciliation();
});

Then(/^I perform depositCash API having following parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, COLLECTOR_ID, RESELLER_PATH) => {
  tripHomePage.depositCash(ASSIGN_AGENT_ID, COLLECTOR_ID, RESELLER_PATH);
});

And(/^I navigate to the Task page$/, () => {
  tasksPage.openTasksPage();
});

And(/^I apply filter to find order id inside the table$/, () => {
  OrdersPage.clickFilterButton();
  cy.wait(800);
  OrdersPage.selectColumn("Order Id");
  OrdersPage.selectOperator("Equal");
  StockTransferHomePage.fillFilterValue();
  cy.wait(800);
});

And(/^I click on view button$/, () => {
  cy.wait(800);
  tasksPage.clickView();
  cy.wait(800);
});

And(/^I click on Assisgn Agent button to assign agent$/, () => {
  tasksPage.clickAssignAgent();
});

Then(/^I select the delivery type "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (DELIVERY_TYPE, DELIVERY_AGENT_OPTION, ELIGIBLE_AGENT, VENDOR) => {
  cy.wait(300);
  tasksPage.assignVendor(DELIVERY_TYPE, DELIVERY_AGENT_OPTION, ELIGIBLE_AGENT, VENDOR);
  cy.wait(300);
});

And(/^I get trip details using order details$/, () => {
  tripHomePage.getTripId();
});

Then(/^I raise SO order using API having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, PRODUCT_SKU, PAYMENT_AGREEMENT, PAYMENT_MODE, RECEIVERS, RESELLER_PATH, RESELLER_ID) => {
  StockTransferHomePage.raiseSOUsingAPI(ASSIGN_AGENT_ID, PRODUCT_SKU, PAYMENT_AGREEMENT, PAYMENT_MODE, RECEIVERS, RESELLER_PATH, RESELLER_ID);
  cy.wait(800);
});

And(/^I perform approvePOSDelivery having following parameters "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, RESELLER_PATH) => {
  tripHomePage.approvePOSDelivery(ASSIGN_AGENT_ID, RESELLER_PATH);
});

And(/^I select order type "([^"]*)"$/, (ORDER_TYPE) => {
  StockTransferHomePage.orderType(ORDER_TYPE);
  cy.wait(800);
});

And(/^I select productSKU "([^"]*)"$/, (PRODUCT_SKU) => {
  StockTransferHomePage.selectProductSKU(PRODUCT_SKU);
  cy.wait(800);
});

Then(/^I verify productSKU as "([^"]*)"$/, (PRODUCT_SKU) => {
  StockTransferHomePage.verifyProductSKU(PRODUCT_SKU);
});

And(/^I sort table data with parameters "([^"]*)" "([^"]*)"$/, (sortField, sortType) => {
  CommonUtilities.SortBy(sortField, sortType);
  cy.wait(800);
});

When(/^I perfrom select range action by passing start and end serial numbers of first row$/, () => {
  StockTransferHomePage.getFirstRowStartSerial();
  cy.wait(800);
  StockTransferHomePage.getFirstRowEndSerial();
  cy.wait(800);
  StockTransferHomePage.clickOnSelectRange();
  cy.wait(800);
  StockTransferHomePage.setFirstRowStartSerial();
  cy.wait(800);
  StockTransferHomePage.setFirstRowEndSerial();
  cy.wait(800);
  StockTransferHomePage.clickOnSubmit();
});

When(/^I perfrom select range action by passing quantity of first row$/, () => {
  StockTransferHomePage.getFirstRowQuantity();
  cy.wait(800);
  StockTransferHomePage.clickOnSelectRange();
  cy.wait(800);
  StockTransferHomePage.setFirstRowQuantity();
  cy.wait(800);
  StockTransferHomePage.clickOnSubmit();
});

When(/^I perform select batch action of first row$/, () => {
  StockTransferHomePage.clickOnFirstrowCheckBox();
  cy.wait(800);
});

When(/^I perfrom select items action on first row$/, () => {
  StockTransferHomePage.clickOnSelectItems();
  cy.wait(800);
  StockTransferHomePage.selectAllCheckBoxes();
  cy.wait(800);
  StockTransferHomePage.clickOnCloseButton();
  cy.wait(800);
});

And(/^I click on cart$/, () => {
  StockTransferHomePage.clickOnCart();
  cy.wait(800);
});

And(/^I verify cart data$/, () => {
  StockTransferHomePage.getBoxId();
  cy.wait(800);
  StockTransferHomePage.getQuantity();
  cy.wait(800);
  StockTransferHomePage.clickOnCloseButton();
  cy.wait(800);
  StockTransferHomePage.verifyFirstRowBoxId();
  cy.wait(800);
  StockTransferHomePage.verifyFirstRowQuantity();
  cy.wait(800);
});

And(/^I provide search key and select search value "([^"]*)" "([^"]*)"$/, (searchKey, selectValue) => {
  OrdersPage.selectBy(searchKey, selectValue);
  cy.wait(800);
});

Then(/^I click on search button$/, () => {
  OrdersPage.clickOnSearchButton();
  cy.wait(800);
});

Then(/^I click on reset button$/, () => {
  OrdersPage.clickOnResetButton();
  cy.wait(800);
});

Then(/^I click on next button$/, () => {
  StockTransferHomePage.clickOnNext();
  cy.wait(800);
});

Then(/^I click on previous button$/, () => {
  StockTransferHomePage.clickOnPrevious();
  cy.wait(800);
});

And(/^I validate select stock check mark is visible$/, () => {
  StockTransferHomePage.verifyCheckMarkVisble();
  cy.wait(800);
});

Then(/^I validate select stock check mark is not visible$/, () => {
  StockTransferHomePage.verifyCheckMarkNotVisble();
  cy.wait(800);
});

When(/^I perform click on filter with passing serial$/, () => {
  StockTransferHomePage.getFirstRowEndSerial();
  OrdersPage.clickFilterButton();
  cy.wait(800);
  OrdersPage.selectColumn("endSerial");
  cy.wait(800);
  OrdersPage.selectOperator("contains");
  cy.wait(800);
  StockTransferHomePage.setFirstRowEndSerialInFilterValue();
  cy.wait(800);
});

Then(/^I remove the stock and close the cart$/, () => {
  StockTransferHomePage.clickOnRemove();
  cy.wait(1000);
  StockTransferHomePage.clickOnCloseButton();
});

Then(/^I validate the table list parameters "([^"]*)" "([^"]*)"$/, (key, value) => {
  CommonUtilities.validateTableListParameters(key, value);
  cy.wait(800);
});

And(/^I click on export button$/, () => {
  StockTransferHomePage.clickOnExportButton();
  cy.wait(800);
});

And(/^I click on download button$/, () => {
  StockTransferHomePage.clickOnDownloadButton();
  cy.wait(800);
});

And(/^I read file name "([^"]*)"$/, (fileName) => {
  CommonUtilities.readFileName(fileName);
});

Then(/^I delete file name "([^"]*)"$/, (fileName) => {
  cy.task('deleteFile', fileName);
});

When(/^I perform Stock Transfer with improper hierarchy having following parameters as "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, PRODUCT_SKU, QUANTITY, SELLER_ID, RESELLER_TYPE, ROUTES) => {
  cy.wait(1000);
  if (ORDER_TYPE === 'Instant Sales Order - Stock Transfer') {
    StockTransferHomePage.orderType(ORDER_TYPE);
    cy.wait(500);
    StockTransferHomePage.selectProductSKU(PRODUCT_SKU);
    cy.wait(500);
    StockTransferHomePage.clickOnSelectRange();
    StockTransferHomePage.enterQuantity(QUANTITY);
    StockTransferHomePage.clickOnSubmit();
    cy.wait(800);
    StockTransferHomePage.clickOnNext();
    cy.wait(800);
    StockTransferPage.searchResellerID(SELLER_ID);
    StockTransferPage.selectSUBDIST1AsBuyer(SELLER_ID);
    StockTransferPage.clickOnNext();
    cy.wait(800);
    RaiseOrderPage.validateOrderSummary(PRODUCT_SKU);
    RaiseOrderPage.verifyAgentId(SELLER_ID);
    StockTransferPage.clickOnSubmit();
    cy.wait(1000);
  }

  if (ORDER_TYPE === 'Instant Sales Order - Digital Stock Transfer') {
    StockTransferHomePage.orderType(ORDER_TYPE);
    cy.wait(800);
    StockTransferHomePage.searchResellerId(SELLER_ID);
    cy.wait(800);
    StockTransferHomePage.selectResellerId();
    cy.wait(800);
    StockTransferHomePage.clickOnNext();
    cy.wait(800);
    StockTransferPage.selectProductSKU(PRODUCT_SKU);
    cy.wait(800);
    StockTransferPage.enterQuantityAndAddToCart(QUANTITY);
    cy.wait(800);
    StockTransferPage.clickOnNext();
    cy.wait(800);
    RaiseOrderPage.validateOrderSummary(PRODUCT_SKU);
    cy.wait(800);
    RaiseOrderPage.verifyAgentId(SELLER_ID);
    cy.wait(800);
    StockTransferPage.clickOnSubmit();
    cy.wait(800);
    // StockTransferPage.storeOrderIdForIPOST();
    // cy.wait(1000);
  }

  if (ORDER_TYPE === 'Instant Purchase Order - Stock Transfer') {
    StockTransferHomePage.orderType(ORDER_TYPE);
    StockTransferHomePage.searchResellerId(SELLER_ID);
    cy.wait(800);
    StockTransferHomePage.selectResellerId();
    cy.wait(800);
    StockTransferHomePage.clickOnNext();
    StockTransferPage.selectProductSKU(PRODUCT_SKU);
    StockTransferPage.enterQuantityAndAddToCart(QUANTITY);
    StockTransferPage.clickOnNext();
    StockTransferPage.clickOnSubmit();
    StockTransferPage.storeOrderIdForIPOST();
    cy.wait(1000);
  }

  if (ORDER_TYPE === 'Instant Sales Order - Digital - no payments') {
    if (RESELLER_TYPE === 'Branch') {
      StockTransferHomePage.orderType(ORDER_TYPE);
    }
    cy.wait(800);
    StockTransferHomePage.searchResellerId(SELLER_ID);
    cy.wait(800);
    StockTransferHomePage.selectResellerId();
    cy.wait(800);
    StockTransferHomePage.clickOnNext();
    cy.wait(800);
    StockTransferPage.selectProductSKU(PRODUCT_SKU);
    cy.wait(800);
    StockTransferPage.enterQuantityAndAddToCart(QUANTITY);
    cy.wait(800);
    StockTransferPage.clickOnNext();
    cy.wait(800);
    StockTransferPage.enterAdditionalInfo();
    cy.wait(800);
    StockTransferPage.clickOnSubmit();
  }

  if (ORDER_TYPE === 'Push Inventory Sales Order') {
    cy.wait(800);
    StockTransferHomePage.selectResellerId();
    cy.wait(800);
    StockTransferHomePage.clickOnNext();
    cy.wait(800);
    StockTransferHomePage.selectProductSKU(PRODUCT_SKU);
    cy.wait(800);
    StockTransferHomePage.getBatchID();
    cy.wait(500);
    StockTransferHomePage.clickOnSelectRange();
    cy.wait(800);
    StockTransferHomePage.enterQuantity(QUANTITY);
    cy.wait(500);
    StockTransferHomePage.getStartSerial();
    cy.wait(500);
    StockTransferHomePage.getEndSerial();
    cy.wait(500);
    StockTransferHomePage.clickOnSubmit();
    cy.wait(800);
    StockTransferHomePage.clickOnNext();
    cy.wait(800);
    StockTransferHomePage.selectReceiver(SELLER_ID);
    cy.wait(800);
    StockTransferHomePage.clickOnNext();
    cy.wait(800);
    StockTransferHomePage.selectRoutes(ROUTES);
    cy.wait(800);
    StockTransferHomePage.clickOnNext();
    cy.wait(800);
    StockTransferHomePage.validateOrderSummary(PRODUCT_SKU);
    cy.wait(500);
    StockTransferHomePage.clickOnSubmit();
  }
});

And(/^I add quantity and add to cart "([^"]*)"$/, (QUANTITY) => {
  StockTransferPage.enterQuantityAndAddToCart(QUANTITY);
  cy.wait(800);
});

And(/^I provide reseller name "([^"]*)"$/, (RESELLER_ID) => {
  StockTransferHomePage.searchResellerId(RESELLER_ID);
  cy.wait(800);
  StockTransferHomePage.selectResellerId();
  cy.wait(800);
  StockTransferHomePage.clickOnNext();
  cy.wait(800);
});

And(/^I verify cart details "([^"]*)" "([^"]*)"$/, (PRODUCT_SKU, AMOUNT) => {
  StockTransferHomePage.verifyCartProductSKU(PRODUCT_SKU);
  StockTransferHomePage.verifyCartAmount(AMOUNT);
});

When(/^I perform ISOST Stock Transfer with invalid start and end serial having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, PRODUCT_SKU, START_SERIAL, END_SERIAL) => {
  cy.wait(2000);
  StockTransferHomePage.orderType(ORDER_TYPE);
  cy.wait(2000);
  StockTransferHomePage.selectProductSKU(PRODUCT_SKU);
  cy.wait(2000);
  StockTransferHomePage.clickOnSelectRange();
  StockTransferHomePage.enterStartSerial(START_SERIAL);
  StockTransferHomePage.enterEndSerial(END_SERIAL);
});

And(/^I click on close button$/, () => {
  StockTransferPage.clickOnClose();
  cy.wait(800);
});

When(/^I perform ISOST Stock Transfer with invalid quantity having following parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, PRODUCT_SKU, QUANTITY) => {
  cy.wait(300);
  StockTransferHomePage.orderType(ORDER_TYPE);
  StockTransferHomePage.selectProductSKU(PRODUCT_SKU);
  cy.wait(300);
  StockTransferHomePage.clickOnSelectRange();
  StockTransferHomePage.enterQuantity(QUANTITY);
});

When(/^I perform ISOST Stock Transfer with invalid buyer having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, PRODUCT_SKU, QUANTITY, BUYER_ID) => {
  cy.wait(2000);
  StockTransferHomePage.orderType(ORDER_TYPE);
  StockTransferHomePage.selectProductSKU(PRODUCT_SKU);
  cy.wait(2000);
  StockTransferHomePage.clickOnSelectRange();
  StockTransferHomePage.enterQuantity(QUANTITY);
  StockTransferHomePage.clickOnSubmit();
  cy.wait(2000);
  StockTransferHomePage.clickOnNext();
  StockTransferHomePage.searchResellerId(BUYER_ID);
  cy.wait(2000);
  StockTransferHomePage.selectResellerId();
  cy.wait(2000);
  StockTransferHomePage.clickOnNext();
  cy.wait(2000);
  StockTransferHomePage.clickOnSubmit();
});

When(/^I perform ISOST Stock Transfer with multiple product having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, PRODUCT_SKU1, PRODUCT_SKU2, QUANTITY, BUYER_ID) => {
  cy.wait(300);
  StockTransferHomePage.orderType(ORDER_TYPE);
  cy.wait(1000);
  StockTransferHomePage.selectProductSKU(PRODUCT_SKU1);
  cy.wait(1000);
  StockTransferHomePage.clickOnSelectRange();
  cy.wait(1000);
  StockTransferHomePage.enterQuantity(QUANTITY);
  cy.wait(1000);
  StockTransferHomePage.clickOnSubmit();
  cy.wait(1000);
  StockTransferHomePage.selectProductSKU(PRODUCT_SKU2);
  cy.wait(1000);
  StockTransferHomePage.clickOnSelectRange();
  cy.wait(1000);
  StockTransferHomePage.enterQuantity(QUANTITY);
  cy.wait(1000);
  StockTransferHomePage.clickOnSubmit();
  cy.wait(1000);
  StockTransferHomePage.clickOnNext();
  cy.wait(1000);
  StockTransferHomePage.searchResellerId(BUYER_ID);
  cy.wait(2000);
  StockTransferHomePage.selectResellerId();
  cy.wait(1000);
  StockTransferHomePage.clickOnNext();
  cy.wait(1000);
  StockTransferHomePage.clickOnSubmit();
  StockTransferPage.getOrderId();
  StockTransferPage.clickOnClose();
  cy.wait(1000);
});

When(/^I perform ISOST Stock Transfer having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, PRODUCT_SKU, QUANTITY, BUYER_ID, TYPE) => {
  cy.wait(300);
  StockTransferHomePage.orderType(ORDER_TYPE);
  StockTransferHomePage.selectProductSKU(PRODUCT_SKU);
  cy.wait(300);
  StockTransferHomePage.clickOnSelectRange();
  StockTransferHomePage.enterQuantity(QUANTITY);
  StockTransferHomePage.clickOnSubmit();
  cy.wait(800);
  StockTransferHomePage.clickOnNext();
  if (TYPE === "MSISDN") {
    StockTransferHomePage.selectMSISDN();
    cy.wait(800);
    StockTransferHomePage.searchResellerId(BUYER_ID);
    cy.wait(800);
  } else {
    StockTransferHomePage.searchResellerId(BUYER_ID);
  }
  cy.wait(800);
  StockTransferHomePage.selectResellerId();
  cy.wait(800);
  StockTransferHomePage.clickOnNext();
  cy.wait(800);
  StockTransferHomePage.clickOnSubmit();
  StockTransferPage.getOrderId();
  StockTransferPage.clickOnClose();
  cy.wait(300);
});

When(/^I perform PISO Stock Transfer having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (RESELLER_ID, PRODUCT_SKU, QUANTITY, RECEIVER_ID, ROUTES, TYPE) => {
  cy.wait(1000);
  if (TYPE === "MSISDN") {
    StockTransferHomePage.selectMSISDN();
    StockTransferHomePage.searchResellerId(RESELLER_ID);
  } else {
    // StockTransferHomePage.searchResellerId(RESELLER_ID);
  }
  StockTransferHomePage.selectResellerId();
  cy.wait(800);
  StockTransferHomePage.clickOnNext();
  cy.wait(900);
  StockTransferHomePage.selectProductSKU(PRODUCT_SKU);
  cy.wait(900);
  StockTransferHomePage.clickOnSelectRange();
  cy.wait(900);
  StockTransferHomePage.enterQuantity(QUANTITY);
  cy.wait(900);
  StockTransferHomePage.clickOnSubmit();
  cy.wait(900);
  StockTransferHomePage.clickOnNext();
  cy.wait(900);
  StockTransferHomePage.selectReceiver(RECEIVER_ID);
  cy.wait(900);
  StockTransferHomePage.clickOnNext();
  cy.wait(900);
  StockTransferHomePage.selectRoutes(ROUTES);
  cy.wait(900);
  StockTransferHomePage.clickOnNext();
  cy.wait(900);
  StockTransferHomePage.validateOrderSummary(PRODUCT_SKU);
  cy.wait(900);
  StockTransferHomePage.clickOnSubmitOrder();
  StockTransferPage.getOrderId();
});

When(/^I perform PISO Stock Transfer with invalid start and end serials having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (RESELLER_ID, PRODUCT_SKU, START_SERIAL, END_SERIAL) => {
  cy.wait(800);
  StockTransferHomePage.searchResellerId(RESELLER_ID);
  StockTransferHomePage.selectResellerId();
  cy.wait(800);
  StockTransferHomePage.clickOnNext();
  cy.wait(900);
  StockTransferHomePage.selectProductSKU(PRODUCT_SKU);
  cy.wait(900);
  StockTransferHomePage.clickOnSelectRange();
  cy.wait(900);
  StockTransferHomePage.enterStartSerial(START_SERIAL);
  StockTransferHomePage.enterEndSerial(END_SERIAL);
});

When(/^I perform PISO Stock Transfer with invalid quantity having following parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (RESELLER_ID, PRODUCT_SKU, QUANTITY) => {
  cy.wait(2000);
  StockTransferHomePage.searchResellerId(RESELLER_ID);
  StockTransferHomePage.selectResellerId();
  cy.wait(2000);
  StockTransferHomePage.clickOnNext();
  cy.wait(2000);
  StockTransferHomePage.selectProductSKU(PRODUCT_SKU);
  cy.wait(2000);
  StockTransferHomePage.clickOnSelectRange();
  cy.wait(2000);
  StockTransferHomePage.enterQuantity(QUANTITY);
});
