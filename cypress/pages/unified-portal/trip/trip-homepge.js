import urlPath from '../../../common/Route';
import CommonUtilities from '../../../common/Util';
import OrderPage from "../order/orders-home-page";
import RaiseOrderPage from "../order/raise-order-page";

const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "select[id=columns-filter-select]";
const OPERATOR_SELECT = "select[id=columns-operators-select]";
const FILTER_VALUE = "//input[@class='MuiInputBase-input MuiInput-input']";
const TABLE = "//div[@class='rendering-zone']/div";
const VIEW_BTN = "(//a[contains(@href,'view')])[1]";
const CANCEL_TRIP_BUTTON = "//span[contains(text(),'Cancel Trip')]";
const CLICK_YES_BUTTON = "//span[contains(text(),'Yes')]";
const VIEW_BUTTON = "//div[@class='rendering-zone']/div[1]/div[7]/div/div/a";
const VERIFY_TRIP_ID_NEW = "//div[@class='rendering-zone']/div[1]/div[2]";
const VERIFY_TRIP_ID_EXISTING = "//div[@class='rendering-zone']/div[2]/div[2]";
const VERIFY_TRIP = "//div[@class='rendering-zone']";
const VERIFY_STATUS = "//div[@class='rendering-zone']/div[1]/div[6]";
const VERIFY_ORDER_STATUS = "//div[@class='rendering-zone']/div[1]/div[7]";
const VERIFY_ORDER_ID = "//h6[text()='Delivery Orders']/../following-sibling::div/div[6]/div[2]/div[2]/p";
const VALIDATE_TRIP_STATUS_ON_UI = "//div[@class='MuiDataGrid-cell MuiDataGrid-cellLeft' and @data-field='status' and @data-rowindex='0']";
const FETCH_TRIPID = "//div[@data-field='tripId' and @data-rowindex='0']";
// eslint-disable-next-line max-len
// const TRIP_RECONCILIATION = "(//div/a[contains(@href,'/home/trip/trips/tripreconciliation')])[1]";
const CLICK_ORDER_ID = "(//div/button[@tabindex='0'])[3]";
const SELECT_PRODUCT_SKU = "//select[@id='product-drop-down']";
const SELECT_STATUS = "//select[@id='status-drop-down']";
const SELECT_SERIAL_TO_DEPOSIT = "//input[@aria-label='Select Row checkbox']";
const CLICK_UPDATE = "//button/span[text()='Update']";
const CLICK_MARK_AS_DONE = "//button/span[text()='Mark As Done']";
const CLICK_RECILIATION = "//button/span[text()='reconcilation']";
const TRIP_TASK_LIST = "//div/h6[text()='Task List']";
const GET_ORDER_ID_UI = "(//div/h6[text()='Task List']//..//..//..//div/p[text()='Order ID ']/../following-sibling::div/p)[1]";
const TASK_TYPE = "(//p[text()='Type']/../following-sibling::div/p)[1]";
const PRODUCT_SKU = "(//div/h6[text()='Task List']//..//..//..//div/p[text()='Product SKU']/../following-sibling::div/p)[1]";
const STATUS = "(//div/h6[text()='Task List']//..//..//..//div/p[text()='Status']/../following-sibling::div/p)[1]";
const SELLER = "(//div/h6[text()='Task List']//..//..//..//div/p[text()='Seller Id']/../following-sibling::div/p)[1]";

let tripId1 = '';
let tripId2 = '';
let length = '';
let orderId1 = '';
let cancelTripId = '';
let resultsOfTripID = '';
let resultsOfTripStatus = '';
let resultsOfWarehouseDocumentID = '';
let resultsOfPOSID = '';
let resultsOfPOSDocumentID = '';
let resultsOfCountRows = '';
let resultsOfCountRowsToDelete = '';
let storeTripID = '';
let resultsSurveyDetails = '';
let fetchSurveyDetails = '';
let fetchSurveyId = '';
let fetchSurveyDocId = '';

class tripHomePage {
  static openTripsPage() {
    cy.log("open trips page");
    cy.intercept("GET", "api/tms/v1/trip**").as("getTrips");
    cy.visit(urlPath.trips);
    cy.wait("@getTrips");
  }

  static filterSearch(column, operator, tripId) {
    cy.log('Filter the search option');
    cy.wait(2000);
    this.clickFilterButton();
    cy.wait(2000);
    this.selectColumn(column);
    cy.wait(2000);
    this.selectOperator(operator);
    cy.wait(2000);
    this.fillTripFilterValue(tripId);
    cy.wait(2000);
  }

  static verifyTaskStatus(STATUS) {
    cy.log('verify Task Status');
    this.filterSearch("Order Id", "Equal", orderId1);
    cy.log(STATUS);
    cy.wait(2000);
    cy.xpath(VERIFY_ORDER_STATUS).then((element) => {
      const status = element.text();
      cy.log(status);
      expect(status).to.equal(STATUS);
    });
  }

  static validateTripStatus(status) {
    cy.log('validate Trip Status');
    cy.xpath(TABLE).eq(0).within(() => {
      cy.get('div').then((state) => {
        cy.log(state.text());
      });
      cy.get('div').eq(5).should('contain.text', status);
    });
  }

  static clickOnView() {
    cy.log('Click on view button');
    cy.xpath(VIEW_BTN).click();
  }

  static clickOnCancelTripButton() {
    cy.log('Click on cancel trip button');
    cy.xpath(CANCEL_TRIP_BUTTON).click();
  }

  static clickOnYesButton() {
    cy.log('click on Yes button');
    cy.xpath(CLICK_YES_BUTTON).click();
  }

  static clickFilterButton() {
    cy.log('Click on filter button');
    cy.xpath(FILTER).click();
  }

  static selectColumn(value) {
    cy.log('Select column');
    cy.log(value);
    cy.get(COLUMN_SELECT).select(value);
  }

  static fillFiltervalue(value) {
    cy.log('Select column');
    cy.log(value);
    cy.xpath(FILTER_VALUE).type(value);
  }

  static selectOperator(value) {
    cy.log('Select operator');
    cy.log(value);
    cy.get(OPERATOR_SELECT).select(value);
  }

  static fillFilterValue() {
    cy.log('fill Filter Value ');
    OrderPage.fillFilterValue();
  }

  static fillTripFilterValue(TRIP_VALUE) {
    cy.log('fill Trip Filter Value');
    cy.xpath(FILTER_VALUE).type(TRIP_VALUE);
  }

  static cancelTheTrip(agentId) {
    cy.log('I cancel the trip');
    cy.wait(10000);
    cy.reload();
    this.filterSearch("Agent Id", "Equal", agentId);
    cy.xpath(TABLE).then((element1) => {
      length = element1.length;
      cy.log(`The no of Trip under this Agent is :${length}`);
      if (length === 1) {
        cy.log('The agent is present already present and it is on Ready state!');
        cy.xpath(VERIFY_TRIP_ID_NEW).then((element) => {
          tripId1 = element.text();
          cy.log(`The first Trip id is :${tripId1}`);
          cancelTripId = tripId1;
          cy.log(cancelTripId);
          cy.xpath(VERIFY_STATUS).then((element2) => {
            const status = element2.text();
            cy.log(status);
            expect(status).to.eq('READY');
            cy.log("We have verified the status of the Trip ");
            cy.xpath(VIEW_BUTTON).click();
            cy.log('We fetch the order id inside the View page');
            this.getOrderId();
            cy.log("Now I cancel the Trip by click on cancel Trip button");
            this.clickOnCancelTripButton();
            cy.log("Now I click on yes button");
            this.clickOnYesButton();
          });
        });
      } else if (length === 2) {
        cy.log(`Here two Trips is present under this Agent id:${agentId}`);
        cy.reload();
        this.filterSearch("Agent Id", "Equal", agentId);
        cy.log(`Now we use filter option to get the two Trips id under this Agent ${agentId}`);
        cy.xpath(VERIFY_TRIP_ID_NEW).then((element3) => {
          tripId1 = element3.text();
          cy.log(`The first Trip id is :${tripId1}`);
          cy.wait(1000);
          cy.xpath(VERIFY_TRIP_ID_EXISTING).then((element4) => {
            tripId2 = element4.text();
            cy.log(`The second Trip id is :${tripId2}`);
            cy.reload();
            cy.log('Now using Trip id we can cancel the Trip');
            this.filterSearch("Trip Id", "Equal", tripId2);
            cancelTripId = tripId2;
            cy.log(`The cancel trip id is :${cancelTripId}`);
            cy.xpath(VIEW_BUTTON).click();
            cy.wait(1000);
            cy.log('We fetch the order id inside the View page');
            this.getOrderId();
            cy.log("Now I cancel the Trip by click on cancel Trip button");
            this.clickOnCancelTripButton();
            cy.log("Now I click on yes button");
            this.clickOnYesButton();
          });
        });
      }
    });
  }

  static verifyCancelAgent() {
    cy.reload();
    this.filterSearch("Trip Id", "Equal", cancelTripId);
    cy.wait(1000);
    cy.xpath(VERIFY_TRIP).then((element1) => {
      const l1 = element1.length;
      cy.log(`the length of TABLE is:${l1}`);
      expect(l1).equal(1);
      cy.log(`I Verified that there is no data present to this Trip id ${cancelTripId}`);
    });
  }

  static getOrderId() {
    cy.xpath(VERIFY_ORDER_ID).then((element) => {
      const id = element.text();
      const order = id.split('OMS');
      orderId1 = `OMS${order[1]}`;
      cy.log(`The order id is :${orderId1}`);
    });
  }

  static verifyCancelTripMessage() {
    cy.log(`The order id is:${orderId1}`);
    cy.xpath(VERIFY_ORDER_ID).then((element) => {
      const id = element.text();
      const order = id.split('OMS');
      orderId1 = `OMS${order[1]}`;
      cy.log(`The order id is :${orderId1}`);
      if (length === 1) {
        cy.log('I take the first Trip ID');
        CommonUtilities.validateMessage(`successfully canceled trip ${tripId1}`);
      } else {
        cy.log('I take the second Trip ID');
        CommonUtilities.validateMessage(`successfully canceled trip ${tripId2}`);
      }
    });
  }

  static verifyStatus(AGENT_ID) {
    cy.wait(20000);
    cy.reload();
    this.filterSearch("Agent Id", "Equal", AGENT_ID);
    cy.xpath(TABLE).then((element1) => {
      length = element1.length;
      cy.log(`The no of Trip under this Agent is :${length}`);
      if (length === 1) {
        cy.log('The agent is present and it is on Ready or Open  state!');
        cy.xpath(VERIFY_TRIP_ID_NEW).then((element) => {
          tripId1 = element.text();
          cy.log(`The first Trip id is :${tripId1}`);
          cy.xpath(VERIFY_STATUS).then((element2) => {
            const statusBefore = element2.text();
            if (statusBefore === 'OPEN') {
              cy.log('The Agent is newly asssign and the status will change from OPEN to READY status ');
              cy.wait(10000);
              cy.reload();
              this.filterSearch("Trip Id", "Equal", tripId1);
              cy.xpath(VERIFY_STATUS).invoke("text").should("eq", "READY");
            } else if (statusBefore === 'READY') {
              cy.reload();
              this.filterSearch("Trip Id", "Equal", tripId1);
              cy.xpath(VERIFY_STATUS).invoke("text").should("eq", "READY");
            }
          });
        });
      } else if (length === 2) {
        cy.log(`Here two Trip is present under the Agent id:${AGENT_ID}`);
        cy.log('Now we filtered to get the two Trip id');
        cy.xpath(VERIFY_TRIP_ID_NEW).then((element3) => {
          tripId1 = element3.text();
          cy.log(`The first Trip id is :${tripId1}`);

          cy.xpath(VERIFY_TRIP_ID_EXISTING).then((element4) => {
            tripId2 = element4.text();
            cy.log(`The second Trip id is :${tripId2}`);
            cy.reload();
            this.filterSearch("Trip Id", "Equal", tripId1);
            cy.wait(6000);
            cy.xpath(VERIFY_STATUS).invoke("text").should("eq", "OPEN");
            cy.reload();
            cy.wait(10000);
            cy.reload();
            this.filterSearch("Trip Id", "Equal", tripId2);
            cy.wait(1000);
            cy.xpath(VERIFY_STATUS).then(((element5) => {
              const status = element5.text();
              cy.log(status);
              if (status === 'OPEN') {
                cy.reload();
                cy.wait(10000);
                cy.log('It is not found in 20 seconds , so we try another 20 seconds');
                cy.xpath(VERIFY_STATUS).invoke("text").should("eq", "READY");
              }
            }));
          });
        });
      }
    });
  }

  static getTripId() {
    cy.log('get order id and trip id');
    cy.wait(40000);
    // get order id
    RaiseOrderPage.fetchOrderID().then((orderId) => {
      cy.log('in trip page , orderId is ', orderId);
      const queryGetTripID = ` select \`TRIP_ID\` from \`TRIP_MANAGEMENT\`.\`UNPLANNED_TASK_DETAIL\` where \`DOCUMENT_ID\` ="${orderId}";`;

      // get trip ID from DB
      cy.task('queryDb', queryGetTripID).then((recordset) => {
        const rec = recordset;
        resultsOfTripID = Object.values(rec[0]);
        resultsOfTripID = resultsOfTripID[0];
        cy.log('TripId is ', resultsOfTripID);
      });
    });
  }

  static fetchTripId(agentId) {
    cy.log('started filtering with agentID');
    cy.wait(15000);
    cy.reload();
    cy.wait(25000);
    cy.reload();
    cy.wait(65000);
    cy.reload();
    cy.wait(9000);
    cy.log('get trip id from UI');
    cy.xpath(`//div[text()='READY']/../div[@data-value='${agentId}']/../div[@data-field='tripId']`).invoke('text').then((value) => {
      resultsOfTripID = value;
      cy.log('trip id is = ', resultsOfTripID);
    });
  }

  static returnTripId() {
    cy.log('return trip id ', resultsOfTripID);
    const returnTripID = resultsOfTripID;
    return cy.wrap(returnTripID);
  }

  static getTripStatus(agentId) {
    cy.log('get trip status for ', agentId);
    cy.wait(50000);
    const queryGetTripStatus = `select \`STATUS\` from \`TRIP_MANAGEMENT\`.\`TRIP\` where \`TRIP_ID\` = "${resultsOfTripID}";`;

    // get trip status from DB
    cy.task('queryDb', queryGetTripStatus).then((recordset) => {
      const rec = recordset;
      resultsOfTripStatus = Object.values(rec[0]);
      resultsOfTripStatus = resultsOfTripStatus[0];
      cy.log('TripStatus is ', resultsOfTripStatus);
    });
  }

  static startTrip(agentId, resellerPath) {
    cy.log('executing startTrip API');
    const hostname = Cypress.env('hostname');
    cy.request({
      method: 'PUT',
      url: `${hostname}:12001/tms/v1/trip/start-trip`,
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-GB',
        authorization: 'abc',
        // 'system-token': `{ "ersReference": "87627365768275356776", "startTime": "1614254785232", "rootComponent": "order-management", "context": {   "client": {     "channel": "swagger-ui",     "clientId": "IMS-Swagger",     "clientReference": "IMS"   },   "initiator": {     "uid": "${agentId}",     "typ": "RESELLERUSERID",     "rtp": "dsa",     "rmsisdn": "254714000000",     "resellerPath": "${resellerPath}"   } }} `,
        'system-token': `{"ersReference": "87627365768275356776","startTime": "1614254785232","rootComponent": "kyc","context":{"initiator":{"uid": "${agentId}","typ": "RESELLERUNIQUEID","rtp": "3pl_agents_staff"},"client":{"channel": "web","clientId": "postman", "rid" : "${agentId}"}}}`,
        'Content-Type': 'application/json',
      },
      body: {
        agentId: `${agentId}`,
        tripId: `${resultsOfTripID}`,
      },
    }).then((response) => {
      cy.log(response.body);
      expect(response.body.resultMessage).to.eq('Trip started successfully.');
    });
  }

  static tripStatusOnUI(statusOnUI) {
    cy.wait(2000);
    cy.log('filter with tripID');
    cy.wait(2000);
    this.clickFilterButton();
    cy.wait(1000);
    this.selectColumn("TRIP ID");
    cy.wait(1000);
    this.selectOperator("Equal");
    cy.wait(1000);
    this.fillFiltervalue(resultsOfTripID);
    cy.wait(1000);
    this.clickFilterButton();
    cy.wait(1000);
    cy.log('validating trip status as ', statusOnUI);
    cy.xpath(VALIDATE_TRIP_STATUS_ON_UI).then((element) => {
      const status = element.text();
      cy.log(status);
      expect(status).to.equal(statusOnUI);
    });
  }

  static markAsReached(agentId, resellerId, destinationType, resellerPath) {
    cy.log('executing markAsReached for warehouse API');
    const hostname = Cypress.env('hostname');
    cy.request({
      method: 'PUT',
      url: `${hostname}:12001/tms/v1/trip/mark-as-reached`,
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-GB',
        authorization: 'abc',
        'system-token': `{ "ersReference": "87627365768275356776", "startTime": "1614254785232", "rootComponent": "order-management", "context": {   "client": {     "channel": "swagger-ui",     "clientId": "IMS-Swagger",     "clientReference": "IMS"   },   "initiator": {     "uid": "${agentId}",     "typ": "RESELLERUSERID",     "rtp": "dsa",     "rmsisdn": "254714000000",     "resellerPath": "${resellerPath}", "rid" : "${agentId}"   } }} `,
        'Content-Type': 'application/json',
      },
      body: {
        agentId: `${agentId}`,
        destinationContext: {
          destinationId: `${resellerId}`,
          destinationType: `${destinationType}`,
        },
        requestTime: "2022-08-02 10:19:03",
        tripId: `${resultsOfTripID}`,
      },
    }).then((response) => {
      cy.log(response.body);
      expect(response.body.resultMessage).to.eq(`Mark as reached successfully [${resellerId}].`);
    });
  }

  static approveCollectStockRequest(agentId, warehouse, resellerPath) {
    cy.wait(1000);
    cy.log('get documentID for approveCollectStockRequest API');
    const queryGetdocumentID = `select \`DOCUMENT_ID\` from \`TRIP_MANAGEMENT\`.\`TRIP_SUMMARY_BY_WAREHOUSE_DOC\` where \`TRIP_ID\` = "${resultsOfTripID}";`;

    // get document id from  trip_summary_by_warehouse_doc table
    cy.task('queryDb', queryGetdocumentID).then((recordset) => {
      const rec = recordset;
      resultsOfWarehouseDocumentID = Object.values(rec[0]);
      resultsOfWarehouseDocumentID = resultsOfWarehouseDocumentID[0];
      cy.log('Warehouse DocumentID is ', resultsOfWarehouseDocumentID);

      // approveCollectStockRequest
      cy.log('executing approveCollectStockRequest API');
      const hostname = Cypress.env('hostname');
      cy.request({
        method: 'PUT',
        url: `${hostname}:12001/tms/v1/trip/stock/collect/approve`,
        headers: {
          accept: 'application/json',
          'Accept-Language': 'en-GB',
          authorization: 'abc',
          'system-token': `{ "ersReference": "87627365768275356776", "startTime": "1614254785232", "rootComponent": "order-management", "context": {   "client": {     "channel": "swagger-ui",     "clientId": "IMS-Swagger",     "clientReference": "IMS"   },   "initiator": {     "uid": "${agentId}",     "typ": "RESELLERUSERID",     "rtp": "dsa",     "rmsisdn": "254714000000",     "resellerPath": "${resellerPath}" , "rid" : "${agentId}"  } }} `,
          'Content-Type': 'application/json',
        },
        body: {
          agentId: `${agentId}`,
          documentId: `${resultsOfWarehouseDocumentID}`,
          otp: '',
          tripId: `${resultsOfTripID}`,
          warehouseId: `${warehouse}`,
        },
      }).then((response) => {
        cy.log(response.body);
        expect(response.body.resultMessage).to.eq('Agent collected stock successfully.');
      });
    });
  }

  static approvePOSDelivery(agentId, resellerPath) {
    cy.wait(1000);
    cy.log('get POSID for approvePOSDelivery API');
    const queryGetPOSID = `select \`POS_ID\` from \`TRIP_MANAGEMENT\`.\`TRIP_SUMMARY_BY_POS_DOC\` where \`TRIP_ID\` = "${resultsOfTripID}";`;
    const queryGetPOSDocumentID = `select \`DOCUMENT_ID\` from \`TRIP_MANAGEMENT\`.\`TRIP_SUMMARY_BY_POS_DOC\` where \`TRIP_ID\` = "${resultsOfTripID}";`;

    // get pos id from  trip_summary_by_pos_doc table
    cy.task('queryDb', queryGetPOSID).then((recordset) => {
      const rec = recordset;
      resultsOfPOSID = Object.values(rec[0]);
      resultsOfPOSID = resultsOfPOSID[0];
      cy.log('POSID is ', resultsOfPOSID);

      // get document id from  trip_summary_by_pos_doc table
      cy.task('queryDb', queryGetPOSDocumentID).then((recordset) => {
        const rec = recordset;
        resultsOfPOSDocumentID = Object.values(rec[0]);
        resultsOfPOSDocumentID = resultsOfPOSDocumentID[0];
        cy.log('POS DocumentID is ', resultsOfPOSDocumentID);

        // execute approvePOSDelivery API
        cy.log('executing approvePOSDelivery API');
        const hostname = Cypress.env('hostname');
        cy.request({
          method: 'PUT',
          url: `${hostname}:12001/tms/v1/trip/pos/deliver/approve`,
          headers: {
            accept: 'application/json',
            'Accept-Language': 'en-GB',
            authorization: 'abc',
            'system-token': `{ "ersReference": "87627365768275356776", "startTime": "1614254785232", "rootComponent": "order-management", "context": {   "client": {     "channel": "swagger-ui",     "clientId": "IMS-Swagger",     "clientReference": "IMS"   },   "initiator": {     "uid": "${agentId}",     "typ": "RESELLERUSERID",     "rtp": "dsa",     "rmsisdn": "254714000000",     "resellerPath": "${resellerPath}" , "rid" : "${agentId}"  } }} `,
            'Content-Type': 'application/json',
          },
          body: {
            agentId: `${agentId}`,
            documentId: `${resultsOfPOSDocumentID}`,
            otp: '',
            posId: `${resultsOfPOSID}`,
            tripId: `${resultsOfTripID}`,
          },
        }).then((response) => {
          cy.log(response.body);
          expect(response.body.resultMessage).to.eq('Agent delivered the stock to POS successfully.');
        });
      });
    });
  }

  static endPosVisit(agentId, resellerPath) {
    cy.log('executing endPOSVisit API');
    const hostname = Cypress.env('hostname');
    cy.request({
      method: 'PUT',
      url: `${hostname}:12001/tms/v1/trip/end-pos-visit`,
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-GB',
        authorization: 'abc',
        'system-token': `{ "ersReference": "87627365768275356776", "startTime": "1614254785232", "rootComponent": "order-management", "context": {   "client": {     "channel": "swagger-ui",     "clientId": "IMS-Swagger",     "clientReference": "IMS"   },   "initiator": {     "uid": "${agentId}",     "typ": "RESELLERUSERID",     "rtp": "dsa",     "rmsisdn": "254714000000",     "resellerPath": "${resellerPath}" , "rid" : "${agentId}"  } }} `,
        'Content-Type': 'application/json',
      },
      body: {
        agentId: `${agentId}`,
        posId: `${resultsOfPOSID}`,
        tripId: `${resultsOfTripID}`,
      },
    }).then((response) => {
      cy.log(response.body);
      expect(response.body.resultMessage).to.eq('Pos visit completed.');
    });
  }

  static endTrip(agentId, resellerPath) {
    cy.log('executing endTrip API');
    const hostname = Cypress.env('hostname');
    cy.request({
      method: 'PUT',
      url: `${hostname}:12001/tms/v1/trip/end-trip`,
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-GB',
        authorization: 'abc',
        'system-token': `{ "ersReference": "87627365768275356776", "startTime": "1614254785232", "rootComponent": "order-management", "context": {   "client": {     "channel": "swagger-ui",     "clientId": "IMS-Swagger",     "clientReference": "IMS"   },   "initiator": {     "uid": "${agentId}",     "typ": "RESELLERUSERID",     "rtp": "dsa",     "rmsisdn": "254714000000",     "resellerPath": "${resellerPath}" , "rid" : "${agentId}"  } }} `,
        'Content-Type': 'application/json',
      },
      body: {
        agentId: `${agentId}`,
        tripId: `${resultsOfTripID}`,
      },
    }).then((response) => {
      cy.log(response.body);
      expect(response.body.resultMessage).to.eq('Trip Ended successfully.');
    });
  }

  static updateOldTripStatus(agentId) {
    cy.wait(1000);
    cy.log('update status of old trips');
    const queryCountNoOfRowsToChange = `select count(*) from \`TRIP_MANAGEMENT\`.\`TRIP\` where \`STATUS\` in ("OPEN","READY","STARTED","COMPLETED","SCHEDULE") and \`AGENT_ID\` = "${agentId}";`;
    const queryUpdateOldTripStatus = `update \`TRIP_MANAGEMENT\`.\`TRIP\` SET \`STATUS\` = "ENDED" where \`STATUS\` in ("OPEN","READY","STARTED","COMPLETED","SCHEDULE") and \`AGENT_ID\` = "${agentId}";`;

    cy.log('count number of rows to update trip status');
    cy.task('queryDb', queryCountNoOfRowsToChange).then((recordset) => {
      const rec = recordset;
      resultsOfCountRows = Object.values(rec[0]);
      resultsOfCountRows = resultsOfCountRows[0];
      cy.log('count of rows is ', resultsOfCountRows);
    });

    cy.log('updating trip status');
    cy.task('queryDb', queryUpdateOldTripStatus).then((result) => {
      expect(result.changedRows).to.eq(resultsOfCountRows);
      cy.log('number of rows updated', resultsOfCountRows);
    });
  }

  static releaseInventories(releaseInventoryList) {
    cy.wait(1000);
    cy.log('release inventories used in previous orders');
    const queryCountNoOfRowsToDelete = `select count(*) from \`inventory_management_system\`.\`serialized_inventory\` where serial_number in (${releaseInventoryList});`;
    const queryReleaseInventories = `delete from \`inventory_management_system\`.\`serialized_inventory\` where serial_number in (${releaseInventoryList});`;

    cy.log('count number of rows to delete inventories');
    cy.task('queryDb', queryCountNoOfRowsToDelete).then((recordset) => {
      const rec = recordset;
      resultsOfCountRowsToDelete = Object.values(rec[0]);
      resultsOfCountRowsToDelete = resultsOfCountRowsToDelete[0];
      cy.log('count of rows is ', resultsOfCountRowsToDelete);
    });

    cy.log('deleting inventories');
    cy.task('queryDb', queryReleaseInventories).then((result) => {
      expect(result.message).to.eq('');
      cy.log('number of rows updated', resultsOfCountRowsToDelete);
    });
  }

  static rejectTrip(agentId, resellerPath) {
    cy.log('executing startTrip API');
    const hostname = Cypress.env('hostname');
    cy.request({
      method: 'PUT',
      url: `${hostname}:12001/tms/v1/trip/reject-trip`,
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-GB',
        authorization: 'abc',
        'system-token': `{ "ersReference": "87627365768275356776", "startTime": "1614254785232", "rootComponent": "order-management", "context": {   "client": {     "channel": "swagger-ui",     "clientId": "IMS-Swagger",     "clientReference": "IMS"   },   "initiator": {     "uid": "${agentId}",     "typ": "RESELLERUSERID",     "rtp": "dsa",     "rmsisdn": "254714000000",     "resellerPath": "${resellerPath}" , "rid" : "${agentId}"  } }} `,
        'Content-Type': 'application/json',
      },
      body: {
        agentId: `${agentId}`,
        tripId: `${resultsOfTripID}`,
        reasonId: '7',
        reasonDescription: 'Bad Weather.',
      },
    }).then((response) => {
      cy.log(response.body);
      expect(response.body.resultMessage).to.eq('Trip rejected successfully.');
    });
  }

  static fetchTripIdFromUI() {
    cy.log('fetching tripID from UI');
    cy.xpath(FETCH_TRIPID).invoke('text').then((fetchTripId) => {
      storeTripID = fetchTripId;
      cy.log('trip id is = ', storeTripID);
    });
  }

  static startSurveyTrip(agentId) {
    cy.log('executing startTrip API');
    cy.wait(30000);
    const hostname = Cypress.env('hostname');
    cy.request({
      method: 'PUT',
      url: `${hostname}:12001/tms/v1/trip/start-trip`,
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-GB',
        authorization: 'abc',
        'system-token': `{"ersReference": "87627365768275356776","startTime": "1614254785232","rootComponent": "kyc","context":{"initiator":{"uid": "${agentId}","typ": "RESELLERUNIQUEID","rtp": "3pl_agents_staff"},"client":{"channel": "web","clientId": "postman", "rid" : "${agentId}"}}}`,
        'Content-Type': 'application/json',
      },
      body: {
        agentId: `${agentId}`,
        tripId: `${storeTripID}`,
      },
    }).then((response) => {
      cy.log(response.body);
      expect(response.body.resultMessage).to.eq('Trip started successfully.');
    });
  }

  static markAsReachedForSurvey(agentId, resellerId, destinationType, resellerPath) {
    cy.log('executing markAsReached for warehouse API');
    const hostname = Cypress.env('hostname');
    cy.request({
      method: 'PUT',
      url: `${hostname}:12001/tms/v1/trip/mark-as-reached`,
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-GB',
        authorization: 'abc',
        'system-token': `{ "ersReference": "87627365768275356776", "startTime": "1614254785232", "rootComponent": "order-management", "context": {   "client": {     "channel": "swagger-ui",     "clientId": "IMS-Swagger",     "clientReference": "IMS"   },   "initiator": {     "uid": "${agentId}",     "typ": "RESELLERUSERID",     "rtp": "dsa",     "rmsisdn": "254714000000",     "resellerPath": "${resellerPath}" , "rid" : "${agentId}"  } }} `,
        'Content-Type': 'application/json',
      },
      body: {
        agentId: `${agentId}`,
        destinationContext: {
          destinationId: `${resellerId}`,
          destinationType: `${destinationType}`,
        },
        requestTime: "2022-08-02 10:19:03",
        tripId: `${storeTripID}`,
      },
    }).then((response) => {
      cy.log(response.body);
      expect(response.body.resultMessage).to.eq(`Mark as reached successfully [${resellerId}].`);
    });
  }

  static endPosVisitForSurvey(agentId, resellerPath, posId) {
    cy.log('executing endPOSVisit API');
    const hostname = Cypress.env('hostname');
    cy.request({
      method: 'PUT',
      url: `${hostname}:12001/tms/v1/trip/end-pos-visit`,
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-GB',
        authorization: 'abc',
        'system-token': `{ "ersReference": "87627365768275356776", "startTime": "1614254785232", "rootComponent": "order-management", "context": {   "client": {     "channel": "swagger-ui",     "clientId": "IMS-Swagger",     "clientReference": "IMS"   },   "initiator": {     "uid": "${agentId}",     "typ": "RESELLERUSERID",     "rtp": "dsa",     "rmsisdn": "254714000000",     "resellerPath": "${resellerPath}"  , "rid" : "${agentId}" } }} `,
        'Content-Type': 'application/json',
      },
      body: {
        agentId: `${agentId}`,
        posId: `${posId}`,
        tripId: `${storeTripID}`,
      },
    }).then((response) => {
      cy.log(response.body);
      expect(response.body.resultMessage).to.eq('Pos visit completed.');
    });
  }

  static endTripForSurvey(agentId, resellerPath) {
    cy.log('executing endTrip API');
    const hostname = Cypress.env('hostname');
    cy.request({
      method: 'PUT',
      url: `${hostname}:12001/tms/v1/trip/end-trip`,
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-GB',
        authorization: 'abc',
        'system-token': `{ "ersReference": "87627365768275356776", "startTime": "1614254785232", "rootComponent": "order-management", "context": {   "client": {     "channel": "swagger-ui",     "clientId": "IMS-Swagger",     "clientReference": "IMS"   },   "initiator": {     "uid": "${agentId}",     "typ": "RESELLERUSERID",     "rtp": "dsa",     "rmsisdn": "254714000000",     "resellerPath": "${resellerPath}" , "rid" : "${agentId}"  } }} `,
        'Content-Type': 'application/json',
      },
      body: {
        agentId: `${agentId}`,
        tripId: `${storeTripID}`,
      },
    }).then((response) => {
      cy.log(response.body);
      expect(response.body.resultMessage).to.eq('Trip Ended successfully.');
    });
  }

  static submitSurvey(agentId, resellerPath, firstName) {
    cy.log('executing submit survey API');

    cy.wait(1000);
    cy.log('fetch survey details from db');
    const querySurveyDetails = `select data from \`TRIP_MANAGEMENT\`.\`TRIP_SUMMARY_BY_POS_DOC\` where \`TRIP_ID\` = "${storeTripID}";`;

    cy.log('count number of rows to update trip status');
    cy.task('queryDb', querySurveyDetails).then((recordset) => {
      const rec = recordset;
      resultsSurveyDetails = Object.values(rec[0]);
      resultsSurveyDetails = resultsSurveyDetails[0];
      fetchSurveyDetails = JSON.parse(resultsSurveyDetails);
      fetchSurveyId = fetchSurveyDetails.surveyData[0].id;
      cy.log('survey id is: ', fetchSurveyId);
      fetchSurveyDocId = fetchSurveyDetails.surveyData[0].surveyDocId;
      cy.log('survey doc id is: ', fetchSurveyDocId);

      const surveyId = parseInt(fetchSurveyId);
      const hostname = Cypress.env('hostname');
      cy.request({
        method: 'POST',
        url: `${hostname}:9596/surveymanagement/v1/survey/submitSurvey`,
        headers: {
          accept: 'application/json',
          'Accept-Language': 'en-GB',
          authorization: 'abc',
          'system-token': `{"ersReference":"20210618090600538010000001068","startTime":1613394601421,"rootComponent":"kyc","context":{"client":{},"initiator":{"uid":"${agentId}","typ":"OPERATOR","rtp":" asm","resellerPath":"${resellerPath}", "rid" : "${agentId}"}}}`,
          'Content-Type': 'application/json',
        },
        body: {
          surveyorId: `${agentId}`,
          tripId: `${storeTripID}`,
          surveyId,
          surveyDocId: `${fetchSurveyDocId}`,
          surveyeeId: `${firstName}`,
          answers: [
            {
              questionId: 70,
              fieldNature: "generic",
              scorable: true,
              answerKeys: [1],
              answerValues: ["Working Way"],
              textAnswer: "",
            },
            {
              questionId: 71,
              fieldNature: "generic",
              scorable: true,
              answerKeys: [1],
              answerValues: ["Delivered all the stock before the time "],
              textAnswer: "",
            }, {
              questionId: 72,
              fieldNature: "generic",
              scorable: false,
              answerKeys: [],
              answerValues: ["test"],
              textAnswer: "test",
            },
          ],
        },
      }).then((response) => {
        cy.log(response.body);
        expect(response.body.resultDescription).to.eq('Survey submitted successfully!');
      });
    });
  }

  static surveyTripStatusOnUI(statusOnUI) {
    cy.wait(2000);
    cy.log('filter with tripID');
    cy.wait(2000);
    this.clickFilterButton();
    cy.wait(1000);
    this.selectColumn("TRIP ID");
    cy.wait(1000);
    this.selectOperator("Equal");
    cy.wait(1000);
    this.fillFiltervalue(storeTripID);
    cy.wait(1000);

    cy.log('validating trip status as ', statusOnUI);
    cy.xpath(VALIDATE_TRIP_STATUS_ON_UI).then((element) => {
      const status = element.text();
      cy.log(status);
      expect(status).to.equal(statusOnUI);
    });
  }

  static endPosVisitForStockTransfer(agentId, resellerPath, posId) {
    cy.log('executing endPOSVisit API');
    const hostname = Cypress.env('hostname');
    cy.request({
      method: 'PUT',
      url: `${hostname}:12001/tms/v1/trip/end-pos-visit`,
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-GB',
        authorization: 'abc',
        'system-token': `{ "ersReference": "87627365768275356776", "startTime": "1614254785232", "rootComponent": "order-management", "context": {   "client": {     "channel": "swagger-ui",     "clientId": "IMS-Swagger",     "clientReference": "IMS"   },   "initiator": {     "uid": "${agentId}",     "typ": "RESELLERUSERID",     "rtp": "dsa",     "rmsisdn": "254714000000",     "resellerPath": "${resellerPath}" , "rid" : "${agentId}"  } }} `,
        'Content-Type': 'application/json',
      },
      body: {
        agentId: `${agentId}`,
        posId: `${posId}`,
        tripId: `${resultsOfTripID}`,
      },
    }).then((response) => {
      cy.log(response.body);
      expect(response.body.resultMessage).to.eq('Pos visit completed.');
    });
  }

  static clickReconciliation(agentId) {
    cy.wait(2000);
    // cy.log('filter with tripID');
    // cy.wait(2000);
    // this.clickFilterButton();
    // cy.wait(1000);
    // this.selectColumn("TRIP ID");
    // cy.wait(1000);
    // this.selectOperator("Equal");
    // cy.wait(1000);
    // this.fillFiltervalue(resultsOfTripID);
    // cy.wait(1000);
    // this.clickFilterButton();
    // cy.wait(1000);
    cy.log('click reconciliation option');
    cy.xpath(`//div[@data-value='COMPLETED']//..//div[@data-value='${agentId}']//..//div/a[contains(@href,'/home/trip/trips/tripreconciliation')]`).click({ force: true });
    cy.wait(1000);
  }

  static clickOrderId() {
    cy.log('select order id');
    cy.xpath(CLICK_ORDER_ID).click();
    cy.wait(1000);
  }

  static selectProductSKU(productSku) {
    cy.log('select product sku');
    cy.xpath(SELECT_PRODUCT_SKU).select(productSku);
    cy.wait(500);
  }

  static selectStatus(status) {
    cy.log('select status');
    cy.xpath(SELECT_STATUS).select(status);
    cy.wait(500);
  }

  static selectSerialNo() {
    cy.log('select serial number');
    cy.xpath(SELECT_SERIAL_TO_DEPOSIT).click();
    cy.wait(500);
  }

  static clickUpdate() {
    cy.log('click update button');
    cy.xpath(CLICK_UPDATE).click();
    cy.wait(800);
  }

  static clickMarkAsDone() {
    cy.log('click mark as done button');
    cy.xpath(CLICK_MARK_AS_DONE).click();
    cy.wait(800);
  }

  static clickReciliation() {
    cy.log('click reconciliation button');
    cy.xpath(CLICK_RECILIATION).click();
  }

  static depositCash(agentId, collectorID, resellerPath) {
    cy.log('executing depositCash API');
    const hostname = Cypress.env('hostname');
    cy.request({
      method: 'PUT',
      url: `${hostname}:12001/tms/v1/trip/deposit-cash-agent`,
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-GB',
        authorization: 'abc',
        'system-token': `{ "ersReference": "87627365768275356776", "startTime": "1614254785232", "rootComponent": "order-management", "context": {   "client": {     "channel": "swagger-ui",     "clientId": "IMS-Swagger",     "clientReference": "IMS"   },   "initiator": {     "uid": "${agentId}",     "typ": "RESELLERUSERID",     "rtp": "dsa",     "rmsisdn": "254714000000",     "resellerPath": "${resellerPath}" , "rid" : "${agentId}"  } }} `,
        'Content-Type': 'application/json',
      },
      body: {
        agentId: `${agentId}`,
        amountCollected: 10,
        collectorId: `${collectorID}`,
        tripId: `${resultsOfTripID}`,
      },
    }).then((response) => {
      cy.log(response.body);
      expect(response.body.resultMessage).to.eq('Cash deposited successfully at collector. Notification sent successfully.');
    });
  }

  static releaseTrackableNonSerializedInventories(product_sku) {
    cy.wait(1000);
    cy.log('release inventories used in previous orders');
    const queryCountNoOfRowsToDelete = `select count(*) from \`inventory_management_system\`.\`trackable_nonserialized_inventory\` where product_sku in ("${product_sku}");`;
    const queryReleaseInventories = `delete from \`inventory_management_system\`.\`trackable_nonserialized_inventory\` where product_sku in ("${product_sku}");`;

    cy.log('count number of rows to delete inventories');
    cy.task('queryDb', queryCountNoOfRowsToDelete).then((recordset) => {
      const rec = recordset;
      resultsOfCountRowsToDelete = Object.values(rec[0]);
      resultsOfCountRowsToDelete = resultsOfCountRowsToDelete[0];
      cy.log('count of rows is ', resultsOfCountRowsToDelete);
    });

    cy.log('deleting inventories');
    cy.task('queryDb', queryReleaseInventories).then((result) => {
      expect(result.message).to.eq('');
      cy.log('number of rows updated', resultsOfCountRowsToDelete);
    });
  }

  static clickTripViewAction() {
    cy.wait(2000);
    cy.log('filter with tripID');
    cy.wait(2000);
    this.clickFilterButton();
    cy.wait(1000);
    this.selectColumn("TRIP ID");
    cy.wait(1000);
    this.selectOperator("Equal");
    cy.wait(1000);
    this.fillFiltervalue(resultsOfTripID);
    cy.wait(1000);
    this.clickFilterButton();
    cy.wait(1000);
    cy.log('click view action');
    cy.xpath(`//div[text()='${resultsOfTripID}']/../div[@data-field='actions']//a[contains(@href,'/view/')]`).click();
    cy.wait(1000);
  }

  static validateOrder() {
    cy.log('validating trip details ');
    cy.xpath(TRIP_TASK_LIST).click();
    cy.wait(1000);
    cy.log('validating order id ');
    RaiseOrderPage.fetchOrderID().then((orderId) => {
      const order = orderId;
      cy.xpath(GET_ORDER_ID_UI).then((orderUi) => {
        const UiOrder = orderUi.text();
        expect(UiOrder).to.equal(order);
      });
    });
  }

  static viewOrderType(type) {
    cy.log('validating order type ');
    cy.xpath(TASK_TYPE).then((ORDER_TYPE) => {
      const orderType = ORDER_TYPE.text();
      expect(orderType).to.equal(type);
    });
  }

  static viewSellerName(seller) {
    cy.log('validating seller id ');
    cy.xpath(SELLER).then((SELLER) => {
      const sellerUI = SELLER.text();
      expect(sellerUI).to.equal(seller);
    });
  }

  static viewProductSku(productSku) {
    cy.log('validating product sku ');
    cy.xpath(PRODUCT_SKU).then((PRODUCT_SKU) => {
      const productSkuUI = PRODUCT_SKU.text();
      expect(productSkuUI).to.equal(productSku);
    });
  }
}
export default tripHomePage;
