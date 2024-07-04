import URL_PATH from '../../../common/Route';
import subscriberTopupMainPage from "./subscriber-topup_main_page";

const SEARCH_TRANSACTION_PAGE_TITLE = "//h4[text()='Search Transaction']";
const GET_TRANSACTION_NUMBER = '//div[@id="notistack-snackbar"]';
const SEARCH_TRANSACTION_NUMBER = "//input[@name='transactionReference']";
const CLICK_SEARCH = "//button/span[text()='Search']";
const VERIFY_RECEIVER_ID = "(//div[@data-field='receiverResellerId'])[2]";
const VERIFY_RECEIVER_MSISDN = "(//div[@data-field='receiverMSISDN'])[2]";
const VERIFY_TRASACTION_TYPE = "(//div[@data-field='transactionProfile'])[2]";
const VERIFY_PRODUCT = "(//div[@data-field='productSKU'])[2]";
const VERIFY_AMOUNT = "(//div[@data-field='transactionAmount'])[2]";
const VERIFY_STATUS = "(//div[@data-field='resultMessage'])[2]";
const SCROLLABLE_AREA = "div.MuiDataGrid-window";
const VERIFY_SENDER_ID = "(//div[@data-field='senderResellerId'])[2]";
const VERIFY_SENDER_MSISDN = "(//div[@data-field='senderMSISDN'])[2]";
const TRANSACTION_REFERENCE = "//h4[text()]";
const VIEW = "(//a[@title='View'])[1]";
const REVERSE_TRANSACTION = "//span[text() = 'Reverse Transaction']";
const COMMENT = "(//div[@class='MuiDialogContent-root']//div/textarea)[2]";
const CONFIRM = "//button/span[text() ='Confirm']";
const CURRENT_STATUS = "//p[text()='Current Chain State']/../following-sibling::div/p";
const RESULT_DESCRIPTION = "(//p[text()='Result description']/../following-sibling::div/p)[1]";
const RESET_SEARCH = "//button/span[text() ='Reset Search']";
const CLICK_FROM_DATE_PICKER = "(//button[@aria-label='change date'])[1]";
const CLICK_TO_DATE_PICKER = "(//button[@aria-label='change date'])[2]";
const CURRENT_DATE = "//button[contains(@class,'MuiPickersDay-daySelected')]/span/p";
const CLICK_OK = "//button/span[contains(text(),'OK')]";
const TRNSACTION_ETNRY = "//div[@data-field='ersReference' and @data-rowindex='0' ]";
const COMMISSION_AMOUNT = "//div[@data-value='COMMISSION']/following-sibling::div[@data-field='amount']"
const ACCOUNT_TXN_TABLE = "//div[@class='rendering-zone']";
const BATCH_ID_TEXTFIELD = "//input[@name='batchId']";
const ACCOUNT_TXN_GRID = "//div[@aria-label='grid']";
const EXTERNAL_DATA_VALUE = "//p[text()='externalData']/../following-sibling::*[1]/p"

let transactionNumber = '';
let resultsOfContractMarginRule = [];
let calculatedAmount = 0;
let commisionExpressionValue = 0;
let batchId = '';

function processContractMarginRuleData(data, amount) {
  console.log('Processing data:', data);
  if (data[1] === 2) {
    commisionExpressionValue = parseFloat(data[2] / 100).toFixed(2);
    calculatedAmount = ((amount * commisionExpressionValue) / 100);
  }
  cy.log("commisionExpressionValue: ", commisionExpressionValue);
  cy.log("calculatedAmount: ", calculatedAmount);
  return calculatedAmount;
}

class SearchTransactionPage {
  static clickOnSearchTransactionUsingUrl() {
    cy.log('visit search transaction page');
    cy.visit(URL_PATH.searchTransactions);
  }

  static clickOnHierarchyTransactionUsingUrl() {
    cy.log('visit hierarchy transaction page');
    cy.visit(URL_PATH.hierarchyTransaction);
  }

  static verifySearchTransactionPageTitle() {
    cy.log("verify search transaction page title visible");
    cy.xpath(SEARCH_TRANSACTION_PAGE_TITLE, { timeout: 90000 })
      .should('be.visible');
  }

  // need to parameterize this method
  static getTransactionReference() {
    cy.log('Store transaction number in a variable');
    cy.xpath(GET_TRANSACTION_NUMBER).then((number) => {
      const text = number.text();
      cy.log('get text', text);
      // eslint-disable-next-line prefer-destructuring
      transactionNumber = text.split('ref: ')[1];
      cy.log('transaction number is', transactionNumber);
    });
  }

  static getTransactionReferenceReverse() {
    cy.log('Store transaction number in a variable');
    cy.xpath(GET_TRANSACTION_NUMBER).then((number) => {
      const text = number.text();
      cy.log('get text', text);
      // eslint-disable-next-line prefer-destructuring
      transactionNumber = text.split('ID: ')[1];
      cy.log('transaction number is', transactionNumber);
    });
  }

  static setTransactionReference(txnId) {
    cy.log('Storing transaction number: ', txnId);
    transactionNumber = txnId;
    cy.log('transaction number is', transactionNumber);
  }

  static serachWithTransactionReference() {
    cy.log('searching with transaction reference');
    cy.xpath(SEARCH_TRANSACTION_NUMBER).type(transactionNumber);
  }

  // eslint-disable-next-line no-shadow
  static searchTransactionReferenceWithArgument(transactionNumber) {
    cy.log('searching with transaction reference');
    cy.xpath(SEARCH_TRANSACTION_NUMBER).type(transactionNumber);
  }

  static clickOnSearch() {
    cy.log('clicking on search button');
    cy.xpath(CLICK_SEARCH).click({ force: true });
    cy.wait(1000);
  }

  static scrollRight() {
    cy.log('scroll right');
    cy.get(SCROLLABLE_AREA).scrollTo('right');
    cy.wait(1000);
  }

  static scrollCenter() {
    cy.log('scroll left');
    cy.get(SCROLLABLE_AREA).scrollTo('center');
    cy.wait(1000);
  }

  static scrollBottom() {
    cy.log('scroll bottom');
    cy.scrollTo('bottom');
  }

  static scrollToLeft() {
    cy.log('Scroll to left');
    cy.get(SCROLLABLE_AREA).scrollTo('left');
    cy.wait(800);
  }

  // eslint-disable-next-line max-len
  static validateTransaction(id, msisdn, transactionType, product, amount, status, extCode, senderId, senderMSISDN) {
    cy.log('validating transaction details');

    cy.wait(1000);
    this.scrollRight();
    cy.xpath(VERIFY_SENDER_ID).invoke('text').then((SENDERID) => {
      expect(SENDERID).to.eq(senderId);
    });

    cy.wait(800);
    cy.xpath(VERIFY_SENDER_MSISDN).invoke('text').then((SENDERMSISDN) => {
      expect(SENDERMSISDN).to.include(senderMSISDN);
    });

    cy.wait(800);
    cy.xpath(VERIFY_RECEIVER_ID).invoke('text').then((ID) => {
      if (id != "") {
        expect(ID).to.eq(id);
      }
    });

    cy.wait(800);
    cy.xpath(VERIFY_RECEIVER_MSISDN).invoke('text').then((MSISDN) => {
      expect(MSISDN).to.include(msisdn);
    });

    cy.wait(800);
    cy.xpath(VERIFY_TRASACTION_TYPE).invoke('text').then((TYPE) => {
      expect(TYPE).to.eq(transactionType);
    });

    cy.wait(800);
    cy.xpath(VERIFY_PRODUCT).invoke('text').then((PRODUCT) => {
      expect(PRODUCT).to.eq(product);
    });

    cy.wait(800);
    cy.xpath(VERIFY_AMOUNT).invoke('text').then((AMOUNT) => {
      expect(AMOUNT).to.eq(amount);
    });

    cy.wait(800);
    cy.xpath(VERIFY_STATUS).invoke('text').then((STATUS) => {
      expect(STATUS).to.eq(status);
    });
    this.scrollToLeft();
    this.scrollToLeft();
  }

  static verifySenderResellerId(senderResellerId) {
    cy.log('verify sender reseller id');
    if (senderResellerId !== "") {
      cy.xpath(VERIFY_SENDER_ID).invoke('text').then((SENDERID) => {
        expect(SENDERID).to.eq(senderResellerId);
      });
    }
  }

  static verifySenderMSISDN(senderMSISDN) {
    cy.log('verify sender MSISDN');
    if (senderMSISDN !== "") {
      cy.xpath(VERIFY_SENDER_MSISDN).invoke('text').then((SENDERMSISDN) => {
        expect(SENDERMSISDN).to.eq(senderMSISDN);
      });
    }
  }

  static verifyReceiverResellerId(receiverResellerId) {
    cy.log('verify receiver reseller id');
    if (receiverResellerId !== "") {
      cy.xpath(VERIFY_RECEIVER_ID).invoke('text').then((ID) => {
        expect(ID).to.eq(receiverResellerId);
      });
    }
  }

  static verifyReceiverMSISDN(receiverMSISDN) {
    if (receiverMSISDN !== "") {
      cy.log('verify receiver MSISDN');
      cy.xpath(VERIFY_RECEIVER_MSISDN).invoke('text').then((MSISDN) => {
        expect(MSISDN).to.eq(receiverMSISDN);
      });
    }
  }

  static verifyTransactionType(transactionType) {
    cy.log('verify transaction type');
    if (transactionType !== "") {
      cy.xpath(VERIFY_TRASACTION_TYPE).invoke('text').then((TYPE) => {
        expect(TYPE).to.eq(transactionType);
      });
    }
  }

  static verifyProduct(product) {
    cy.log('verify product');
    if (product !== "") {
      cy.xpath(VERIFY_PRODUCT).invoke('text').then((PRODUCT) => {
        expect(PRODUCT).to.eq(product);
      });
    }
  }

  static verifyAmount(amount) {
    cy.log('verify amount');
    if (amount !== "") {
      cy.xpath(VERIFY_AMOUNT).invoke('text').then((AMOUNT) => {
        expect(AMOUNT).to.eq(amount);
      });
    }
  }

  static verifyStatus(status) {
    cy.log('verify status');
    if (status !== "") {
      cy.xpath(VERIFY_STATUS).invoke('text').then((STATUS) => {
        expect(STATUS).to.eq(status);
      });
    }
  }

  static serachWithO2CTransactionReferenceForApproval() {
    cy.log('searching with transaction reference');
    cy.xpath(SEARCH_TRANSACTION_NUMBER).type(transactionNumber);
  }

  static clickView() {
    cy.log('click on view button');
    cy.xpath(VIEW).click();
  }

  static verifyTransactionRefNumber() {
    cy.log('verify transaction ref number');
    cy.xpath(TRANSACTION_REFERENCE).invoke('text').then((REFNUMBER) => {
      expect(REFNUMBER).to.include(transactionNumber);
    });
  }

  static clickReverseTransaction() {
    cy.log('click on reverse transaction');
    cy.xpath(REVERSE_TRANSACTION).click();
  }

  static enterComment(comment) {
    cy.log('enter comment');
    cy.xpath(COMMENT).type(comment);
    cy.wait(5000);
    cy.xpath(CONFIRM).click();
    cy.wait(2000);
  }

  static verifyCurrentStatusInViewScreen(status) {
    cy.log('Current Chain State');
    cy.xpath(CURRENT_STATUS).should('have.text', status);
  }

  static navigateHierarchyTransactionUsingUrl() {
    cy.log('visit hierarchy transaction page');
    cy.visit(URL_PATH.hierarchyTransaction);
    cy.wait(1000);
  }

  static verifyAnonymousId() {
    cy.log('verify anonymous id');
    subscriberTopupMainPage.returnAnonymousID().then((anonymousId) => {
      cy.log('anonymous id is ', anonymousId);
      cy.xpath(VERIFY_RECEIVER_MSISDN).invoke('text').then((id) => {
        expect(id).to.eq(anonymousId);
      });
    });
  }

  static resetSearch() {
    cy.log('clicking on reset search button');
    cy.wait(1000);
    cy.xpath(RESET_SEARCH).click({ force: true });
    cy.wait(1000);
  }

  static shouldBeBlank(field, value) {
    cy.xpath(`//input[@name='${field}' and @value='${value}']`).should('not.exist');
  }

  static validateData(data) {
    cy.log('validate transaction');
    cy.xpath(`//div[@data-value='${data}']`).should('be.visible');
  }

  static searchTransaction(searchField, searchValue) {
    cy.log('search transaction with', searchField, searchValue);
    if (searchField === "transactionStatus" || searchField === "transactionTypeOrProfile"
      || searchField === "ReceiverResellerType" || searchField === "SenderResellerType") {
      cy.xpath(`//select[@name="${searchField}"]`).select(searchValue);
    }
    if (searchField === "product-types") {
      cy.xpath(`//input[@id="${searchField}"]`).type(searchValue);
      cy.contains(searchValue).click();
    }
    if (searchField === "amount" || searchField === "batchId" || searchField === "senderMsisdn"
      || searchField === "receiverMsisdn" || searchField === "senderResellerId" || searchField === "receiverResellerId" || searchField === "transactionReference") {
      cy.xpath(`//input[@name="${searchField}"]`).clear().type(searchValue);
    }
    cy.wait(1000);
  }

  static validateElement(data) {
    cy.log('validate transaction');
    cy.xpath(`(//div[text()='${data}'])[1]`)
      .scrollIntoView()
      .should('be.visible');
  }

  static scrollTo() {
    cy.log('scroll to right');
    cy.get(SCROLLABLE_AREA).scrollTo('1895px');
  }

  static enterDate() {
    cy.log('enter from date');
    cy.wait(1000);
    cy.xpath(CLICK_FROM_DATE_PICKER).click();
    cy.wait(1000);
    cy.xpath(CURRENT_DATE).click();
    cy.wait(1000);
    // cy.xpath(CLICK_OK).click();
    cy.wait(2000);

    cy.log('enter to date');
    cy.xpath(CLICK_TO_DATE_PICKER).click({ force: true });
    cy.wait(1000);
    cy.xpath(CURRENT_DATE).click();
    cy.wait(1000);
    // cy.xpath(CLICK_OK).click();
    cy.wait(1000);
  }

  static validateTransactionEntry() {
    cy.log('validate transaction entry');
    cy.xpath(TRNSACTION_ETNRY).should('be.visible');
  }

  static getTransactionReferenceFromApprovalScreen() {
    cy.log('Store transaction number in a variable');
    cy.xpath(GET_TRANSACTION_NUMBER).then((number) => {
      const text = number.text();
      cy.log('get text', text);
      transactionNumber = text.split(':')[0];
      cy.log('transaction number is', transactionNumber);
    });
  }

  static transactionNotVisible(id, msisdn) {
    cy.wait(800);
    this.scrollRight();
    cy.xpath(VERIFY_RECEIVER_ID).should('not.have.value', id);
    cy.wait(800);
    cy.xpath(VERIFY_RECEIVER_MSISDN).should('not.have.value', msisdn);

  }

  static verifyAccountTransaction(receiverId, product, amount, accountId, accountTypeId, tag) {
    cy.log("Verifying account transaction row in search transaction page");
    const queryContractMarginRule = `WITH A as (
      SELECT contract_key 
      FROM Refill.commission_receivers
      WHERE tag = '${receiverId}'
      ),
      B as (
      SELECT variant_id
      FROM pms.product_variant
      WHERE product_sku = '${product}'
      ),
      C as (
      SELECT entry_key
      FROM contractmanagement.dwa_contract_price_entries as CPE, A, B
      WHERE CPE.contract_key = A.contract_key
      AND CPE.product_key = B.variant_id
      ),
      D as (
      SELECT id
      FROM contractmanagement.dwa_contract_tags
      WHERE tag_name = '${tag}'
      )
      SELECT CMR.account_id, CMR.value_type_id, CMR.value_expression
      FROM contractmanagement.dwa_contract_margin_rules as CMR, C, D
      WHERE CMR.entry_key = C.entry_key
      AND CMR.tag_id = D.id
      AND pay_options_account_type_id = '${accountTypeId}';`;
    // get contract margin rule value
    cy.task('queryDb', queryContractMarginRule).then((recordset) => {
      const rec = recordset;
      resultsOfContractMarginRule = Object.values(rec[0]);
      cy.log('DB output =', resultsOfContractMarginRule);
      calculatedAmount = processContractMarginRuleData(resultsOfContractMarginRule, amount);
      calculatedAmount = parseFloat(calculatedAmount.toFixed(2));
      cy.xpath(`//div[div[@data-value='${accountId}'] and div[@data-value='${accountTypeId}'] and div[@data-value='${tag}']]`).should('be.visible');
      cy.xpath(`//div[div[@data-value='${accountId}'] and div[@data-value='${accountTypeId}'] and div[@data-value='${tag}']]`).contains(calculatedAmount);
    });
  }

  static verifyAccountTxnRowWithoutCalculation(accountId, accountTypeId, amount, tag) {
    cy.xpath(`//div[div[@data-value='${accountId}'] and div[@data-value='${accountTypeId}'] and div[@data-value='${tag}'] and div[@data-value='${amount}']]`).scrollIntoView().should('be.visible');
  }

  static verifyTagNotPresentInAccountTxnRows(tag) {
    cy.log("Verifying tag is not present in account transaction row in search transaction page");
    cy.xpath(ACCOUNT_TXN_TABLE).should('not.include.text', tag);
  }

  static verifyTagPresentInAccountTxnRows(tag) {
    cy.log("Verifying tag is present in account transaction row in search transaction page");
    cy.xpath(ACCOUNT_TXN_TABLE).should('include.text', tag);
  }

  static searchWithBatchId() {
    cy.log("Entering batchId in search txn screen");
    cy.xpath(BATCH_ID_TEXTFIELD).type(batchId);
  }

  static setBatchId(bId) {
    cy.log('Storing batchId: ', bId);
    batchId = bId;
    cy.log('Batch ID is now', batchId);
  }

  static verifyAccountTxnNotVisible() {
    cy.debug('Verify Account Transaction table is empty');
    cy.xpath(ACCOUNT_TXN_GRID).should('have.attr', 'aria-rowcount', '0');
  }

  static createPromoVASRecharge(msisdn1, pin, msisdn2, amount, externalData_1, externalData_2, externalData_3, externalData_4, externalData_5, externalData_6, externalData_7, externalData_8, externalData_9, externalData_10) {
    cy.log('perform Promo VAS Recharge by API');
    const xml2js = require('xml2js');
    const parser = new xml2js.Parser({
      explicitArray: false
    });
    const hostname = Cypress.env('hostname');
    const xmlPayload = `
    <COMMAND>
    <TYPE>EXTPROMOVASTRFREQ</TYPE>
    <DATE>27/01/2021 11:00:57</DATE>
    <EXTNWCODE>GP</EXTNWCODE>
    <MSISDN>${msisdn1}</MSISDN>
    <PIN>${pin}</PIN>
    <LOGINID></LOGINID>
    <PASSWORD></PASSWORD>
    <EXTCODE>6831</EXTCODE>
    <EXTREFNUM>73919191</EXTREFNUM>
    <MSISDN2>${msisdn2}</MSISDN2>
    <AMOUNT>${amount}</AMOUNT>
    <LANGUAGE1>en</LANGUAGE1>
    <LANGUAGE2></LANGUAGE2>
    <BONUS></BONUS>
    <SELECTOR>XYZ</SELECTOR>
    <EXTERNALDATA1>${externalData_1}</EXTERNALDATA1>
    <EXTERNALDATA2>${externalData_2}</EXTERNALDATA2>
    <EXTERNALDATA3>${externalData_3}</EXTERNALDATA3>
    <EXTERNALDATA4>${externalData_4}</EXTERNALDATA4>
    <EXTERNALDATA5>${externalData_5}</EXTERNALDATA5>
    <EXTERNALDATA6>${externalData_6}</EXTERNALDATA6>
    <EXTERNALDATA7>${externalData_7}</EXTERNALDATA7>
    <EXTERNALDATA8>${externalData_8}</EXTERNALDATA8>
    <EXTERNALDATA9>${externalData_9}</EXTERNALDATA9>
    <EXTERNALDATA10>${externalData_10}</EXTERNALDATA10>
    </COMMAND>`;

    cy.request({
      method: 'POST',
      url: `${hostname}:80/api/standard-link/gp/endPoint`,
      qs: {
        'LOGIN': 'iris',
        'PASSWORD': '1357',
        'REQUEST_GATEWAY_CODE': 'IRIS',
        'REQUEST_GATEWAY_TYPE': 'EXTGW',
        'SERVICE_PORT': '100',
        'SOURCE_TYPE': 'EXTGW',
      },
      headers: {
        'Content-Type': 'application/xml',
      },
      body: xmlPayload
    }).then((response) => {
      cy.log(response.body);
      expect(response.status).to.eq(200);
      const responseBody = parser.parseString(response.body, (err, parsedResult) => {
        cy.log(parsedResult);
        transactionNumber = parsedResult.COMMAND.TXNID;
      });
      cy.log("transaction number from response :", transactionNumber);
    });
  }

  static verifyExternalData(externalDataCount, externalDataValue) {
    cy.log(`verify external data ${externalDataCount} and its value ${externalDataValue} `);
    cy.xpath(EXTERNAL_DATA_VALUE.replace('externalData', externalDataCount)).should('include.text', externalDataValue)
  }

  static scrollInTo() {
    cy.log('scroll to right');
    cy.get(SCROLLABLE_AREA).scrollTo('3005px');
  }

  static scrollToTheElement() {
    cy.log('scroll to right');
    cy.get(SCROLLABLE_AREA).scrollTo('1395px');
  }
}
export default SearchTransactionPage;
