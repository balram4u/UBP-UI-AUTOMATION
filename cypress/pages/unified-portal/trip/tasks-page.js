import urlPath from '../../../common/Route';

import CommonUtilities from '../../../common/Util';

const VIEW_BTN = "(//a[contains(@href,'view')])[1]";
const ASSIGN_AGENT = "//span[text()='Assign Agent']";
const ASSIGN_AGENT_HEADER = "//h6[text()='Assign Agent']";
const AGENT_DROPDOWN = "#eligible-agents-drop-down";
const ASSIGN_BTN = "//label[@id='eligible-agents-drop-down-label']/../../following-sibling::div/button[2]";
const CANCEL_TRIP = "//button/span[text()='Cancel Trip']";
const CANCEL_TRIP_HEADER = "//h6[text()='Cancel Trip']";
const YES_BUTTON = "//button/span[text()='Yes']";
const POS_INFO_SECTION = "//h6[text()='POS Information']/..";
const DEST_ID_IN_TASK_DETAILS = "//p[text()='Destination Id']/../following-sibling::div/p";
const STATUS_IN_TASK_DETAILS = "//p[text()='Status']/../following-sibling::div/p";
const TASK_TYPE_IN_TASK_DETAILS = "//p[text()='Task type']/../following-sibling::div/p";
const ORDER_TYPE_IN_ORDER_INFO = "//p[text()='Order type']/../following-sibling::div/p";
const PAYMENT_MODE_IN_ORDER_INFO = "//p[text()='Payment mode']/../following-sibling::div/p";
const ORDER_ID_IN_ORDER_INFO = "//p[text()='Order Id']/../following-sibling::div/p";
const ORDER_INFORMATION_SECTION = "//h6[text()='Order Information']";
const ORDER_DETAILS_SECTION = "//h6[text()='Order Details']";
const REF_NO_IN_ORDER_DETAILS = "//p[text()='Ref No.']/../following-sibling::div/p";
const OWNER_ID_IN_ORDER_DETAILS = "//p[text()='Owner ID']/../following-sibling::div/p";
const PRODUCT_SKU_IN_ORDER_DETAILS = "//p[text()='Product SKU']/../following-sibling::div/p";
const AGENT_ID_IN_AGENT_INFO = "//p[text()='Agent Id']/../following-sibling::div/p";
const RESELLER_ID_COLLECTOR_INFO = "//p[text()='Reseller Id']/../following-sibling::div/p";
const COLLECTOR_INFO_SECTION = "//h6[text()='Collector Information']";
const SKU_IN_POS_INFO = "//p[text()='SKU']/../following-sibling::div/p";
const VERIFY_ASSIGN_AGENT_DROPDOWN = "#eligible-agents-drop-down";
const CLICK_ON_CLOSEBUTTON = "//span[contains(text(),'Close')]";
const SCROLLABLE_AREA = "div.MuiDataGrid-window";
const SELECT_DELIVERY_TYPE = "//select[@id='delivery-type-drop-down']";
const SELECT_DELIVERTY_AGENT_OPTION = "//select[@id='delivery-option-drop-down']";
const SELECT_ELIGIBLE_AGENT = "//select[@id='eligible-agents-drop-down']";
const CLICK_ASSIGN = "//button/span[text()='Assign']";
const SELECT_VENDOR = "//select[@name='vendor']";
const SELECT_LOGISTIC_TYPE = "//select[@name='logisticType']";
const SELECT_PRIORITY = "//select[@name='priorityTrip']";
const REQUEST_TRIP = "//button/span[text()='Request Trip']";

class tasksPage {
  static openTasksPage() {
    cy.log('Open task page');
    cy.intercept("GET", "api/aas/v1/delivery/task**").as("getTask");
    cy.visit(urlPath.tasks);
    cy.reload();
    cy.wait("@getTask");
    // cy.wait(5000);
  }

  static applyFilterOnTaskWithOrderId(orderId) {
    cy.log('Apply filter on task table using order ID');
    CommonUtilities.applyFilter("Order Id", "equals", orderId);
    cy.get('.rendering-zone > div').should('have.length', 1);
  }

  static scrollToRight() {
    cy.log('Scroll to right');
    cy.get(SCROLLABLE_AREA).scrollTo('right');
    cy.wait(800);
  }

  static clickView() {
    cy.log("Click to view the task");
    this.scrollToRight();
    cy.wait(500);
    cy.xpath(VIEW_BTN).click();
  }

  static clickAssignAgent() {
    cy.log("assigning agent to the task");
    cy.xpath(ASSIGN_AGENT).click();
    cy.log("asserting that popup for agent assign is appearing");
    cy.xpath(ASSIGN_AGENT_HEADER).should('be.visible');
  }

  static assignAgent(agent) {
    cy.log("select the agent from dropdown");
    cy.get(AGENT_DROPDOWN).select(agent);
    cy.wait(5000);
    cy.xpath(ASSIGN_BTN).click();
    cy.wait(5000);
  }

  static applyFilterOnTrip(agent) {
    cy.log("Apply filter on trips table using agent id");
    CommonUtilities.applyFilter("Agent Id", "equals", agent);
    // cy.get('.rendering-zone > div').should('not.have.length.above', 1);
  }

  static verifyTrip(agentID, resellerID, sku) {
    cy.log("Verify agent ID on trip page");
    cy.xpath(AGENT_ID_IN_AGENT_INFO).eq(0).invoke('text').then((agentIdFound) => {
      expect(agentIdFound).to.eq(agentID);
    });
    cy.log("Expand collector info section");
    cy.xpath(COLLECTOR_INFO_SECTION).click();
    cy.log("Verify reseller id found");
    cy.xpath(RESELLER_ID_COLLECTOR_INFO).eq(0).invoke('text').then((resellerIdFound) => {
      expect(resellerIdFound).to.eq(resellerID);
    });
    cy.log("Expand POS scetion");
    cy.xpath(POS_INFO_SECTION).eq(0).click();
    cy.log("Assert order ID found");
    cy.readFile("cypress/fixtures/orderID.txt").then((orderId) => {
      const orderIdLocator = `(//p[text()='${orderId}'])[1]`;
      cy.log(orderIdLocator);
      cy.xpath(orderIdLocator).eq(0).should('be.visible');
    });
    cy.log("Assert SKU found");
    cy.xpath(SKU_IN_POS_INFO).eq(0).invoke('text').then((skuFound) => {
      expect(skuFound).to.eq(sku);
    });
  }

  static cancelTrip() {
    cy.log("Cancel trip");
    cy.xpath(CANCEL_TRIP).click();
    cy.xpath(CANCEL_TRIP_HEADER).should('be.visible');
    cy.log("Click cancel trip button");
    cy.xpath(YES_BUTTON).click();
    cy.wait(3000);
  }

  static verifyTaskDetails(destID, status, taskType) {
    cy.log("Verify task type on task details page");
    cy.xpath(TASK_TYPE_IN_TASK_DETAILS).eq(0).invoke('text').then((taskTypeFound) => {
      expect(taskTypeFound).to.eq(taskType);
    });
    cy.log("Verify destination iD on task details page");
    cy.xpath(DEST_ID_IN_TASK_DETAILS).eq(0).invoke('text').then((destIdFound) => {
      expect(destIdFound).to.eq(destID);
    });
    cy.log("Verify status found on task details page");
    cy.xpath(STATUS_IN_TASK_DETAILS).eq(0).invoke('text').then((statusFound) => {
      expect(statusFound).to.eq(status);
    });
  }

  static verifyOrderInformation(orderType, paymentType) {
    cy.log("Verify data on order information section");
    cy.xpath(ORDER_INFORMATION_SECTION).click();
    cy.xpath(ORDER_TYPE_IN_ORDER_INFO).eq(0).invoke('text').then((orderTypeFound) => {
      expect(orderTypeFound).to.eq(orderType);
    });
    cy.xpath(PAYMENT_MODE_IN_ORDER_INFO).eq(0).invoke('text').then((paymentModeFound) => {
      expect(paymentType).to.eq(paymentModeFound);
    });
    cy.readFile("cypress/fixtures/orderID.txt").then((orderId) => {
      cy.xpath(ORDER_ID_IN_ORDER_INFO).eq(0).invoke('text').then((orderIdFound) => {
        expect(orderIdFound).to.eq(orderId);
      });
    });
  }

  static verifyOrderDetails(sku, ownerID) {
    cy.log("Verify data on order details section");
    cy.xpath(ORDER_DETAILS_SECTION).click();
    cy.xpath(PRODUCT_SKU_IN_ORDER_DETAILS).eq(0).invoke('text').then((skuFound) => {
      expect(skuFound).to.eq(sku);
    });
    cy.xpath(OWNER_ID_IN_ORDER_DETAILS).eq(0).invoke('text').then((ownerIdFound) => {
      expect(ownerIdFound).to.eq(ownerID);
    });
    cy.readFile("cypress/fixtures/orderID.txt").then((orderId) => {
      cy.xpath(REF_NO_IN_ORDER_DETAILS).eq(0).invoke('text').then((refNoFound) => {
        expect(refNoFound).to.eq(orderId);
      });
    });
  }

  static verifyAssignAgentDropdownOptions() {
    cy.get(VERIFY_ASSIGN_AGENT_DROPDOWN).find('option').then((options) => {
      const actual = [...options].map((o) => o.value);
      expect(actual).to.deep.eq(['', 'AGENT-1-1-1', 'AGENT-1-1-2']);
    });
  }

  static verifyAgentInsideDropDown(AGENT) {
    cy.get(VERIFY_ASSIGN_AGENT_DROPDOWN).should('not.contain', AGENT);
    cy.xpath(CLICK_ON_CLOSEBUTTON).click();
  }

  static assignVendor(deliveryType, deliveryAgentOption, eligibleAgent, vendor, agentAssignedMessage) {
    cy.wait(1000);
    if (deliveryType === 'internal') {
      cy.xpath(SELECT_DELIVERY_TYPE).select(deliveryType);
      cy.wait(2000);
      cy.xpath(SELECT_DELIVERTY_AGENT_OPTION).select(deliveryAgentOption);
      cy.wait(2000);
      cy.xpath(SELECT_ELIGIBLE_AGENT).select(eligibleAgent);
      cy.wait(2000);
      cy.xpath(CLICK_ASSIGN).click();
      cy.wait(1000);
      CommonUtilities.validateMessage(agentAssignedMessage);
    }
    if (deliveryType === 'external') {
      cy.xpath(SELECT_DELIVERY_TYPE).select(deliveryType);
      cy.wait(2000);
      cy.xpath(CLICK_ASSIGN).click();
      cy.wait(3000);
      cy.xpath(SELECT_VENDOR).select(vendor);
      cy.wait(1000);
      cy.xpath(SELECT_LOGISTIC_TYPE).select("COURIER");
      cy.wait(1000);
      cy.xpath(SELECT_PRIORITY).select("Yes");
      cy.wait(1000);
      cy.xpath(REQUEST_TRIP).click();
      cy.wait(1000);
      CommonUtilities.validateMessage(agentAssignedMessage);
    }
  }
}

export default tasksPage;
