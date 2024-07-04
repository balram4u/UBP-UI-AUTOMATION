import URL_PATH from '../../../common/Route';
import SearchTransactionPage from './search-transaction';

const TRANSACTION_TAB = "//p[text()='TRANSACTION']";
const TOPUP_TAB = "//p[text()='TOPUP']";
const SUBSCRIBER_TOPUP_PAGE_TITLE = "//h6[text()='transactionManagement']";
const PRODUCT_CATEGORY_DROPDOWN = "select[name='productCategory']";
const PAYMENT_METHOD_DROPDOWN = "select[name='paymentMethod']";
const AMOUNT = "input[name='amount']";
const RECIPIENT_MOBILE_NUMBER = "input[name='topUpPrincipalId']";
const SELL_TOPUP_BUTTON = "//span[text()='Sell Topup']";
// const POPUP_MESSAGE = "div[id='notistack-snackbar']";
const GET_TRANSACTION_NUMBER = '//div[@id="notistack-snackbar"]';
const SEARCH_TRANSACTION_NUMBER = "//input[@name='transactionReference']";
const COMMENTS = "//textarea[@name='comments']";
const ENTER_MOBILE_NO = "//input[@name='isTopUpBulkData[0].recipientMobileNo']";
const ENTER_AMOUNT = "(//label[text()='Amount']//..//div/div/input)[1]";
const ENTER_COMMENTS = "(//label[text()='Comments']//..//div/div/input)[1]";
const ENTER_SECOND_COMMENTS = "(//label[text()='Comments']//..//div/div/input)[2]";
const ENTER_THIRD_COMMENTS = "(//label[text()='Comments']//..//div/div/input)[3]";
const CLICK_SELL_TOPUP = "//span[text()='Sell TopUp']";
const CLICK_CONFIRM = "(//button/span[text()='Confirm'])[2]";
const CLICK_CONFIRM_BUTTON = "(//button/span[text()='Confirm'])[1]";
const CLOSE_BUTTON = "//span[text()='close']";
const TRANSACTION_COUNT = "//p[contains(text(),'Transaction No')]";
const TRANSACTION_NUMBER = "(//div/p[text()='Reference Number']/../p)[2]";
// const TRANSACTION_NUMBER = "(//div/p[text()='Reference Number']/../p)[2]";
const TOGGLE_SINGLE_BULK = "//span/input[@name='validFrom']/../span";
const ENTER_ANONYMOUS_ID = "//input[@name='isTopUpBulkData[0].anonymousId']";
const CLICK_SELL_POSTPAID_TOPUP = "//span[text()='Sell Postpaid TopUp']";
const ENTER_RESELLER_ID = "//input[@name='airtimeSellBulk[0].resellerId']";
const CLICK_SELL_AIRTIME_STOCK = "//span[text()='Sell Airtime Stock']";
const ENTER_MSISDN = "//input[@name='airtimeSellBulk[0].recipientMobileNo' or @name='airtimeSellBulk[0].resellerId']";
const MSISDN_TOGGLE = "//input[@name= 'airtimeSellBulk[0].isMobile']";
const ANONYMOUS_TOGGLE = "//input[@name= 'isTopUpBulkData[0].isAnonymous']";
const UPLOAD_FILE_BUTTON = "//span[text()=' Upload File']";
const FILE_UPLOAD_FIELD = '//input[@type="file"]';
const BULK_TOGGLE = "//input[@name= 'validFrom']";
const SCROLLABLE_AREA = "(//div[contains(@class,'MuiDialogContent-root')])[2]";
const FIRST_ERS_REFERECE_NUMBER = "(//p[contains(text(),'Ers Reference')]/../following-sibling::div[1])[1]";
const SECOND_ERS_REFERECE_NUMBER = "(//p[contains(text(),'Ers Reference')]/../following-sibling::div[1])[2]";
const THIRD_ERS_REFERECE_NUMBER = "(//p[contains(text(),'Ers Reference')]/../following-sibling::div[1])[3]";
const ENTER_SECOND_MOBILE_NO = "//input[@name='isTopUpBulkData[1].recipientMobileNo']";
const ENTER_THIRD_MOBILE_NO = "//input[@name='isTopUpBulkData[2].recipientMobileNo']";
const ENTER_SECOND_AMOUNT = "(//label[text()='Amount']//..//div/div/input)[2]";
const ENTER_THIRD_AMOUNT = "(//label[text()='Amount']//..//div/div/input)[3]";
const ADD_NEW = "//span[text()='Add New']";
const ENTER_SECOND_MSISDN = "//input[@name='airtimeSellBulk[1].recipientMobileNo' or @name='airtimeSellBulk[1].resellerId']";
const ENTER_THIRD_MSISDN = "//input[@name='airtimeSellBulk[2].recipientMobileNo' or @name='airtimeSellBulk[2].resellerId']";
const MSISDN_SECOND_TOGGLE = "//input[@name= 'airtimeSellBulk[1].isMobile']";
const MSISDN_THIRD_TOGGLE = "//input[@name= 'airtimeSellBulk[2].isMobile']";
const RESULT_MESSAGE = "//p[contains(text(),'Result')]/following-sibling::p";
const RESET_BUTTON = "//span[contains(text(),'Reset')]";
const TRANSFER_BUTTON = "//button[@aria-label='Transfer']";
const ENTER_REVERSAL_COMMENTS = "//textarea[contains(@class,'MuiInputBase-input')]";
const ENTER_REVERSAL_COMMENTS_SEARCH_TRANSACTION = "(//div/textarea)[2]";
const CONFIRM_REVERSAL = "//button/span[text()='Confirm']/..";

const FIRST_RECEIPENT = "(//p[contains(text(),'Reseller') or  contains(text(),'Recipient') ]/../following-sibling::div[1])[1]";
const SECOND_RECEIPENT = "(//p[contains(text(),'Reseller') or  contains(text(),'Recipient') ]/../following-sibling::div[1])[2]";
const THIRD_RECEIPENT = "(//p[contains(text(),'Reseller') or  contains(text(),'Recipient') ]/../following-sibling::div[1])[3]";
const FIRST_AMOUNT = "(//p[contains(text(),'Amount')]/../following-sibling::div[1])[1]";
const SECOND_AMOUNT = "(//p[contains(text(),'Amount')]/../following-sibling::div[1])[2]";
const THIRD_AMOUNT = "(//p[contains(text(),'Amount')]/../following-sibling::div[1])[3]";
const FIRST_STATUS = "(//p[contains(text(),'Status')]/../following-sibling::div[1])[1]";
const SECOND_STATUS = "(//p[contains(text(),'Status')]/../following-sibling::div[1])[2]";
const THIRD_STATUS = "(//p[contains(text(),'Status')]/../following-sibling::div[1])[3]";
const FIRST_RESULT = "(//p[contains(text(),'Result Message')]/../following-sibling::div[1])[1]";
const SECOND_RESULT = "(//p[contains(text(),'Result Message')]/../following-sibling::div[1])[2]";
const THIRD_RESULT = "(//p[contains(text(),'Result Message')]/../following-sibling::div[1])[3]";
const TRANSACTION_SUCCESS_COUNT = "//p[contains(text(),'SUCCESS')]/following-sibling::p";
const TRANSACTION_FAILURE_COUNT = "//p[contains(text(),'FAIL')]/following-sibling::p";
const NOT_AUTHORIZED = "//div/h2[text() = ' Not Authroized ']";
const SENDER_RESELLER_ID = "//input[@id = 'sender-reseller-input-box']";
const RECEIVER_RESELLER_ID = "//input[@id = 'receiver-reseller-input-box']";
const SENDER_ACCOUNT_TYPE = "//select[@id = 'sender-account-type-dropdown']";
const RECEIVER_ACCOUNT_TYPE = "//select[@id = 'receiver-account-type-dropdown']";
const COMMENTS_MANUAL_ADJUSTMENT = "//textarea[@name='comments']";
const CONTINUE = "//button/span[text() = 'Continue']";
const CART = "//button[@title = 'Activate']";
const SUBSCRIBER_MSISDN = "//input[@id = 'subscriberMsisdn']";
const SUBMIT = "//button/span[text() = 'Submit']";
const REQUEST_REVERSAL = "//button[@title='Request Reversal']";
const VIEW_TRANSACTION = "//a[@title='View']";
const REVERSE_TRANSACTION = "//button/span[text() = 'Reverse Transaction']";
const REJECT_PENDING = "(//button[@title='Reject'])[1]";
const APPROVE_PENDING = "(//button[@title='Approve'])[1]";
const REJECT = "//button/span[text() = 'Reject']/..";
const APPROVE = "//button/span[text() = 'Approve']/..";
const TRANSFER_BUTTON1 = "//button[@id='transfer-button']";
const H4_TEXT_CSS = "h4";
const H2_TEXT_CSS = "h2";

let transactionNumber = '';
let anonymousID = '';
let firstTransactionNumber = '';
let secondTransactionNumber = '';
let thirdTransactionNumber = '';

class subscriberTopupMainPage {
  // Page Navigation Methods

  static navigateTosubscriberTopupUsingUrl() {
    cy.log("visit subscriberTopup main page through url");
    cy.visit(URL_PATH.subscriberTopup);
  }

  // Click Action Methods

  static clickOnSellTopupButton() {
    cy.log("click on sell topup Button");
    cy.xpath(SELL_TOPUP_BUTTON).should('be.visible').click();
  }

  static clickOnTransactionTab() {
    cy.log("click on transaction tab");
    cy.xpath(TRANSACTION_TAB).should('be.visible').click();
  }

  // Text Input Methods

  static selectProductCategory(productCategory) {
    cy.log(`product category is: ${productCategory}`);
    cy.get(PRODUCT_CATEGORY_DROPDOWN).should('be.visible').select(productCategory);
  }

  static typeAmount(amount) {
    cy.log(`amount is: ${amount}`);
    cy.get(AMOUNT).should('be.visible').clear().type(amount);
  }

  static typeRecipientMobileNumber(recipientMobileNumber) {
    cy.log(`recipient mobile number is: ${recipientMobileNumber}`);
    cy.get(RECIPIENT_MOBILE_NUMBER).should('be.visible').clear().type(recipientMobileNumber);
  }

  static typeComments(productCategory, recipientMobileNumber, amount, paymentMethod) {
    cy.log(' type comments ');
    cy.xpath(COMMENTS).should('be.visible').clear().type(`I am choosing a product category as ${productCategory}  &  payment mode by ${paymentMethod}, sending amount of  ${amount}.00 to  recipient mobile no ${recipientMobileNumber}`);
  }

  static verifyBulkTransaction() {
    cy.log(' validate bulk transaction no.  available');
    cy.xpath(TRANSACTION_COUNT).then((value) => {
      expect(value).length.be.at.least(2);
    });
  }

  static verifySingleTransaction() {
    cy.log(' validate single transaction no.  available');
    cy.xpath(TRANSACTION_COUNT).then((value) => {
      expect(value).to.have.length(1);
    });
  }

  static selectPaymentMethod(paymentMethod) {
    cy.log(`payment method is: ${paymentMethod}`);
    cy.get(PAYMENT_METHOD_DROPDOWN).should('be.visible').select(paymentMethod);
  }

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

  static searchWithTransactionReference() {
    cy.log('searching with transaction reference');
    cy.wait(8000);
    cy.xpath(SEARCH_TRANSACTION_NUMBER).type(transactionNumber);
    cy.wait(5000);
  }

  static verifySubscriberTopupPageTitle() {
    cy.log("verify subscriber topup page title visible");
    cy.xpath(SUBSCRIBER_TOPUP_PAGE_TITLE).should('be.visible');
  }

  static verifyUserName(userName) {
    // cy.log(`verify username is: ${userName}`);
    cy.xpath(`//label[text()='${userName}']`).should('include.text', userName);
  }

  static enterMobileNo(mobileNo) {
    if (mobileNo !== "") {
      cy.log('enter mobile no', mobileNo);
      cy.xpath(ENTER_MOBILE_NO).type(mobileNo);
      cy.wait(1000);
    }
  }

  static enterAmount(amount) {
    cy.log('enter amount', amount);
    cy.xpath(ENTER_AMOUNT).type(amount);
    cy.wait(1000);
  }

  static enterComments(comments) {
    cy.log('enter comments', comments);
    cy.xpath(ENTER_COMMENTS).type(comments);
    cy.wait(1000);
  }

  static verifyMobileNoEmpty(mobileNo) {
    cy.log('enter mobile no', mobileNo);
    cy.xpath(ENTER_MOBILE_NO).should('be.empty');
    cy.wait(1000);
  }

  static verifyAmountEmpty(amount) {
    cy.log('enter amount', amount);
    cy.xpath(ENTER_AMOUNT).should('be.empty');
    cy.wait(1000);
  }

  static verifyCommentsEmpty(comments) {
    cy.log('enter comments', comments);
    cy.xpath(ENTER_COMMENTS).should('be.empty');
    cy.wait(1000);
  }

  static clickSellTopUpButton() {
    cy.log('click sell topup');
    cy.xpath(CLICK_SELL_TOPUP).click();
    cy.wait(1000);
  }

  static clickResetButton() {
    cy.log('click reset topup');
    cy.xpath(RESET_BUTTON).click();
    cy.wait(1000);
  }

  static clickConfirmButton() {
    cy.log('click confirm button');
    cy.wait(2000);
    cy.xpath(CLICK_CONFIRM).click();
    cy.wait(2000);
  }

  static validateBeforeTransaction(mobileNo, amount, paymentMethod, comments) {
    cy.wait(1000);
    cy.log('validate mobile no');
    cy.xpath(`//div/p[text()='${mobileNo}']`).should('be.visible');
    cy.log('validate amount');
    cy.xpath(`//div/p[text()='${amount}']`).should('be.visible');
    cy.log('validate payment method');
    cy.xpath(`//div/p[text()='${paymentMethod}']`).should('be.visible');
    cy.log('validate comments');
    cy.xpath(`//div/p[text()='${comments}']`).should('be.visible');
    cy.wait(800);
  }

  static validateTransactionReceipt(mobileNo, amount, title, message) {
    cy.wait(1000);
    if (mobileNo !== "") {
      cy.log('validate mobile no');
      cy.xpath(`//div/p[text()='${mobileNo}']`, { timeout: 15000 })
        .should('be.visible');
    }

    if (amount !== "") {
      cy.log('validate amount');
      cy.xpath(`//div/p[text()='${amount}']`, { timeout: 15000 })
        .should('be.visible');
    }

    if (title !== "") {
      cy.log('validate title');
      cy.xpath(`//div/p[text()='${title}']`, { timeout: 15000 })
        .should('be.visible');
    }

    if (message !== "") {
      cy.log('validate message');
      cy.xpath(RESULT_MESSAGE, { timeout: 15000 })
        .should('include.text', message);
    }
    cy.wait(800);
  }

  static closeTransactionScreen() {
    cy.log('close the screen');
    cy.xpath(CLOSE_BUTTON).click();
    cy.wait(1000);
  }

  static saveTransactionReference() {
    cy.log('Store transaction number in a variable');
    cy.xpath(TRANSACTION_NUMBER).then((value) => {
      transactionNumber = value.text();
      cy.log('transaction number is', transactionNumber);
    });
  }

  static navigateTopupUsingUrl() {
    cy.log("visit topup main page through url");
    cy.visit(URL_PATH.topup);
    cy.contains(H4_TEXT_CSS, "Sell Topup", { timeout: 90000 })
      .should('be.visible');
  }

  static navigateAirtimePostpaidUsingUrl() {
    cy.log("visit topup main page through url");
    cy.visit(URL_PATH.airtimePostpaid);
  }

  static navigatePendingTransactionsUsingUrl() {
    cy.log("visit pending transactions page using url");
    cy.visit(URL_PATH.pending_transactions);
  }

  static navigateStandardBundleUsingUrl() {
    cy.log("visit standard bundle page using url");
    cy.visit(URL_PATH.standard_bundle);
  }

  static validateTopUpUI(mobile, amount, paymentMethod, comments) {
    cy.log('validate ui');
    cy.wait(1000);
    cy.xpath(`//div/label[text()='${mobile}']/../div/div/input`).should('be.visible');
    cy.log('validate amount');
    cy.xpath(`//div/label[text()='${amount}']/../div/div/input`).should('be.visible');
    cy.log('validate payment method');
    cy.xpath(`//div/label[text()='${paymentMethod}']/../div/select`).should('be.visible');
    cy.log('validate comments');
    cy.xpath(`//div/label[text()='${comments}']/../div/div/input`).should('be.visible');
    cy.wait(1000);
    cy.log('validate single and bulk toggle');
    cy.xpath(`//span[text()='Single']`).should('be.visible');
    cy.xpath(`//span[text()='Bulk']`).should('be.visible');
    cy.xpath(TOGGLE_SINGLE_BULK).should('be.visible');
    cy.wait(800);
  }

  static getAnonymousId(mobile) {
    cy.log('executing markAsReached for warehouse API');
    cy.wait(1000);
    const hostname = Cypress.env('hostname');
    cy.request({
      method: 'GET',
      url: `${hostname}:8680/cc/CC?src=${mobile}&sessionid=noman&cmd=666`,
    }).then((response) => {
      cy.log(response.body);
      const temp = response.body;
      const id1 = temp.split('number ')[1];
      cy.log('id1 value  ', id1);
      anonymousID = id1.split(' ')[0];
      cy.log('anonymous id is   ', anonymousID);
      cy.log(anonymousID);
    });
  }

  static returnAnonymousID() {
    cy.log('return anonymous id');
    cy.log('get anonymous id ', anonymousID);
    const id = anonymousID;
    cy.log('store anonymous id ', id);
    return cy.wrap(id);
  }

  static enterAnonymousId() {
    cy.log('enter enonymous id');
    cy.xpath(ENTER_ANONYMOUS_ID).type(anonymousID);
    cy.wait(1000);
  }

  static clickAnonymousIdToggle() {
    cy.log('click anonymous id toggle');
    cy.xpath(ANONYMOUS_TOGGLE).click({ force: true });
    cy.wait(1000);
  }

  static validateBeforeTransactionForAnonymousID(amount, paymentMethod, comments) {
    cy.wait(1000);
    cy.log('validate mobile no');
    cy.xpath(`//div/p[text()='${anonymousID}']`).should('be.visible');
    cy.log('validate amount');
    cy.xpath(`//div/p[text()='${amount}']`).should('be.visible');
    cy.log('validate payment method');
    cy.xpath(`//div/p[text()='${paymentMethod}']`).should('be.visible');
    cy.log('validate comments');
    cy.xpath(`//div/p[text()='${comments}']`).should('be.visible');
    cy.wait(800);
  }

  static validateTransactionReceiptForAnonymousId(amount, title, message) {
    cy.log('validate mobile no');
    cy.wait(1000);
    cy.xpath(`//div/p[text()='${anonymousID}']`).should('be.visible');
    cy.log('validate amount');
    cy.xpath(`//div/p[text()='${amount}']`).should('be.visible');
    cy.log('validate payment method');
    cy.xpath(`//div/p[text()='${title}']`).should('be.visible');
    cy.log('validate comments');
    cy.xpath('//div/p').contains(message);
    cy.wait(800);
  }

  static clickSellPostpaidTopUp() {
    cy.log('click sell topup');
    cy.xpath(CLICK_SELL_POSTPAID_TOPUP).click();
    cy.wait(1000);
  }

  static navigateAirtimeStockUsingUrl() {
    cy.log("visit airtime stock main page through url");
    cy.visit(URL_PATH.airtimeStock);
    cy.contains(H4_TEXT_CSS, "Sell Airtime Stock", { timeout: 90000 })
      .should('be.visible');
  }

  static navigateAirtimeStockUsingUrlAndVerifyNotAuthorized() {
    cy.log("visit airtime stock main page through url");
    cy.visit(URL_PATH.airtimeStock);
    cy.contains(H2_TEXT_CSS, " Not Authroized ", { timeout: 90000 })
      .should('be.visible');
  }

  static navigateManualAdjustmentUsingUrl() {
    cy.log("visit manual adjustment page through url");
    cy.visit(URL_PATH.manualAdjustmentTransactions);
    cy.contains(H4_TEXT_CSS, "Create new manual adjustment", { timeout: 90000 })
      .should('be.visible');
  }

  static navigateManualAdjustmentUsingUrlAndVerifyNotAuthorized() {
    cy.log("visit manual adjustment page through url");
    cy.visit(URL_PATH.manualAdjustmentTransactions);
    cy.contains(H2_TEXT_CSS, " Not Authroized ", { timeout: 90000 })
      .should('be.visible');
  }

  static enterResellerId(resellerId) {
    cy.log('enter reseller id', resellerId);
    cy.xpath(ENTER_RESELLER_ID).type(resellerId);
    cy.wait(1000);
  }

  static clickSellAirtimeStock() {
    cy.log('click sell airtime stock');
    cy.xpath(CLICK_SELL_AIRTIME_STOCK).click();
    cy.wait(1000);
  }

  static enterMsisdn(msisdn) {
    cy.log('enter msisdn', msisdn);
    cy.xpath(ENTER_MSISDN).type(msisdn);
    cy.wait(1000);
  }

  static clickMsisdnToggle() {
    cy.log('click msisdn id toggle');
    cy.xpath(MSISDN_TOGGLE).click({ force: true });
    cy.wait(1000);
  }

  static bulkTransaction(uploadFile) {
    if (uploadFile !== '') {
      cy.log('upload transaction file');
      const fileName = uploadFile;
      cy.xpath(UPLOAD_FILE_BUTTON).click();
      cy.xpath(FILE_UPLOAD_FIELD).invoke('show').attachFile(fileName);
      cy.wait(2000);
    }
  }

  static clickBulkToggle() {
    cy.log('click anonymous id toggle');
    cy.xpath(BULK_TOGGLE).click({ force: true });
    cy.wait(1000);
  }

  static scrollToDown() {
    cy.log('Scroll to down');
    cy.xpath(SCROLLABLE_AREA).scrollTo('bottom');
    cy.wait(800);
  }

  static scrollToTop() {
    cy.log('Scroll to top');
    cy.xpath(SCROLLABLE_AREA).scrollTo('top');
    cy.wait(800);
  }

  static validateBeforeBulkTransaction(firstMobile, firstAmount, secondMobile, secondAmount, thirdMobile, thirdAmount, paymentMethod, comments) {
    cy.wait(1000);
    cy.log('validate first mobile no');
    cy.xpath(`//div/p[text()='${firstMobile}']`, { timeout: 15000 })
      .should('be.visible');
    cy.log('validate first amount');
    cy.xpath(`//div/p[text()='${firstAmount}']`, { timeout: 15000 })
      .should('be.visible');
    cy.log('validate first payment method');
    cy.xpath(`(//div/p[text()='${paymentMethod}'])[1]`, { timeout: 15000 })
      .should('be.visible');
    cy.log('validate first comments');
    cy.xpath(`(//div/p[text()='${comments}'])[1]`, { timeout: 15000 })
      .should('be.visible');

    cy.log('validate second mobile no');
    cy.xpath(`//div/p[text()='${secondMobile}']`, { timeout: 15000 })
      .should('be.visible');
    cy.log('validate second amount');
    cy.xpath(`//div/p[text()='${secondAmount}']`, { timeout: 15000 })
      .should('be.visible');
    cy.log('validate second payment method');
    cy.xpath(`(//div/p[text()='${paymentMethod}'])[2]`, { timeout: 15000 })
      .should('be.visible');
    cy.log('validate second comments');
    cy.xpath(`(//div/p[text()='${comments}'])[2]`, { timeout: 15000 })
      .should('be.visible');

    this.scrollToDown();
    cy.log('validate third mobile no');
    cy.xpath(`//div/p[text()='${thirdMobile}']`, { timeout: 15000 })
      .should('be.visible');
    cy.log('validate third amount');
    cy.xpath(`//div/p[text()='${thirdAmount}']`, { timeout: 15000 })
      .should('be.visible');
    cy.log('validate third payment method');
    cy.xpath(`(//div/p[text()='${paymentMethod}'])[3]`, { timeout: 15000 })
      .should('be.visible');
    cy.log('validate third comments');
    cy.xpath(`(//div/p[text()='${comments}'])[3]`, { timeout: 15000 })
      .should('be.visible');
    cy.wait(800);
  }

  static validateTopUpTabNotExist() {
    cy.log("click on transaction tab");
    cy.xpath(TOPUP_TAB).should('not.exist');
  }

  static validateBulkTransactionReceipt(firstMobileNo, firstAmount, title, firstMessage, secondMobileNo, secondAmount, secondMessage, thirdMobileNo, thirdAmount, thirdMessage) {
    cy.wait(3000);
    cy.log('validate first transaction');
    cy.log('validate mobile no');
    cy.xpath(`//div/p[text()='${firstMobileNo}']`, { timeout: 15000 })
      .should('be.visible');
    cy.log('validate amount');
    cy.xpath(`//div/p[text()='${firstAmount}']`, { timeout: 15000 })
      .should('be.visible');
    cy.log('validate title');
    cy.xpath(`//div/p[text()='${title}']`, { timeout: 15000 })
      .should('be.visible');
    cy.log('chcek status');
    cy.xpath('(//div/p[contains(text(),"Completed")])[1]', { timeout: 15000 })
      .should('be.visible');

    cy.xpath(SCROLLABLE_AREA).scrollTo(0, 500);
    cy.log('validate message');
    cy.xpath('//div/p', { timeout: 15000 }).contains(firstMessage);
    cy.wait(800);
    cy.log('validate second transaction');
    cy.log('validate mobile no');
    cy.xpath(`//div/p[text()='${secondMobileNo}']`, { timeout: 15000 })
      .should('be.visible');

    cy.xpath(SCROLLABLE_AREA).scrollTo(0, 500);
    cy.log('validate amount');
    cy.xpath(`//div/p[text()='${secondAmount}']`, { timeout: 15000 })
      .should('be.visible');
    cy.log('chcek status');
    cy.xpath('(//div/p[contains(text(),"Completed")])[2]', { timeout: 15000 })
      .should('be.visible');
    cy.log('validate message');
    cy.xpath('//div/p', { timeout: 15000 }).contains(secondMessage);

    this.scrollToDown();
    cy.log('validate third transaction');
    cy.log('validate mobile no');
    cy.xpath(`//div/p[text()='${thirdMobileNo}']`, { timeout: 15000 })
      .should('be.visible');
    cy.log('validate amount');
    cy.xpath(`//div/p[text()='${thirdAmount}']`, { timeout: 15000 })
      .should('be.visible');
    cy.log('chcek status');
    cy.xpath('(//div/p[contains(text(),"Completed")])[3]', { timeout: 15000 })
      .should('be.visible');
    cy.log('validate messsage');
    cy.xpath('//div/p', { timeout: 15000 }).contains(thirdMessage);
    this.scrollToTop();
  }

  static saveBulkTransactionReference() {
    cy.log('Store transaction number in a variable');
    cy.xpath(FIRST_ERS_REFERECE_NUMBER).then((value1) => {
      firstTransactionNumber = value1.text();
      cy.log('transaction number is', firstTransactionNumber);
    });

    this.scrollToDown();
    cy.xpath(SECOND_ERS_REFERECE_NUMBER).then((value2) => {
      secondTransactionNumber = value2.text();
      cy.log('transaction number is', secondTransactionNumber);
    });

    this.scrollToDown();
    cy.xpath(THIRD_ERS_REFERECE_NUMBER).then((value3) => {
      thirdTransactionNumber = value3.text();
      cy.log('transaction number is', thirdTransactionNumber);
    });
  }

  static searchWithFirstTransactionReference() {
    cy.log('searching with transaction reference');
    cy.wait(8000);
    cy.xpath(SEARCH_TRANSACTION_NUMBER).type(firstTransactionNumber);
    cy.wait(5000);
  }

  static searchWithSecondTransactionReference() {
    cy.log('searching with transaction reference');
    cy.wait(8000);
    cy.xpath(SEARCH_TRANSACTION_NUMBER).type(secondTransactionNumber);
    cy.wait(5000);
  }

  static searchWithThirdTransactionReference() {
    cy.log('searching with transaction reference');
    cy.wait(8000);
    cy.xpath(SEARCH_TRANSACTION_NUMBER).type(thirdTransactionNumber);
    cy.wait(5000);
  }

  static enterSecondMobileNo(mobileNo) {
    cy.log('enter mobile no', mobileNo);
    cy.xpath(ENTER_SECOND_MOBILE_NO).type(mobileNo);
    cy.wait(1000);
  }

  static enterSecondAmount(amount) {
    cy.log('enter amount', amount);
    cy.xpath(ENTER_SECOND_AMOUNT).type(amount);
    cy.wait(1000);
  }

  static enterSecondComments(comments) {
    cy.log('enter comments', comments);
    cy.xpath(ENTER_SECOND_COMMENTS).type(comments);
    cy.wait(1000);
  }

  static enterThirdMobileNo(mobileNo) {
    cy.log('enter mobile no', mobileNo);
    cy.xpath(ENTER_THIRD_MOBILE_NO).type(mobileNo);
    cy.wait(1000);
  }

  static enterThirdAmount(amount) {
    cy.log('enter amount', amount);
    cy.xpath(ENTER_THIRD_AMOUNT).type(amount);
    cy.wait(1000);
  }

  static enterThirdComments(comments) {
    cy.log('enter comments', comments);
    cy.xpath(ENTER_THIRD_COMMENTS).type(comments);
    cy.wait(1000);
  }

  static clickAddNew() {
    cy.log('click add new button');
    cy.xpath(ADD_NEW).click();
    cy.wait(1000);
  }

  static enterSecondMsisdn(msisdn) {
    cy.log('enter msisdn', msisdn);
    cy.xpath(ENTER_SECOND_MSISDN).type(msisdn);
    cy.wait(1000);
  }

  static enterThirdMsisdn(msisdn) {
    cy.log('enter msisdn', msisdn);
    cy.xpath(ENTER_THIRD_MSISDN).type(msisdn);
    cy.wait(1000);
  }

  static clickSecondMsisdnToggle() {
    cy.log('click msisdn id toggle');
    cy.xpath(MSISDN_SECOND_TOGGLE).click({ force: true });
    cy.wait(1000);
  }

  static clickThirdMsisdnToggle() {
    cy.log('click msisdn id toggle');
    cy.xpath(MSISDN_THIRD_TOGGLE).click({ force: true });
    cy.wait(1000);
  }

  static clickTransferButton() {
    cy.log('click transfer button');
    cy.xpath(TRANSFER_BUTTON).click({ force: true });
    cy.wait(1000);
  }

  static enterReversalComments(comments) {
    cy.log('perform reversal');
    cy.xpath(ENTER_REVERSAL_COMMENTS).clear({ force: true }).type(comments);
    cy.wait(1000);
  }

  static enterReversalCommentsSearchTransaction(comments) {
    cy.log('perform reversal');
    cy.xpath(ENTER_REVERSAL_COMMENTS_SEARCH_TRANSACTION).type(comments);
    cy.wait(1000);
  }

  static confirmReversal() {
    cy.log('click confirm button');
    cy.xpath(CONFIRM_REVERSAL).click({ force: true });
    cy.wait(1000);
  }

  static verifyFirstReceipent(firstReceipent) {
    cy.log('verify first receipent');
    if (firstReceipent !== "") {
      cy.xpath(FIRST_RECEIPENT).should('include.text', firstReceipent);
    }
  }

  static verifySecondReceipent(secondReceipent) {
    cy.log('verify second receipent');
    if (secondReceipent !== "") {
      cy.xpath(SECOND_RECEIPENT).should('include.text', secondReceipent);
    }
  }

  static verifyThirdReceipent(thirdReceipent) {
    cy.log('verify third receipent');
    if (thirdReceipent !== "") {
      cy.xpath(THIRD_RECEIPENT).should('include.text', thirdReceipent);
    }
  }

  static verifyFirstAmount(firstAmount) {
    cy.log('verify first amount');
    if (firstAmount !== "") {
      cy.xpath(FIRST_AMOUNT).should('include.text', firstAmount);
    }
  }

  static verifySecondAmount(secondAmount) {
    cy.log('verify second amount');
    if (secondAmount !== "") {
      cy.xpath(SECOND_AMOUNT).should('include.text', secondAmount);
    }
  }

  static verifyThirdAmount(thirdAmount) {
    cy.log('verify third amount');
    if (thirdAmount !== "") {
      cy.xpath(THIRD_AMOUNT).should('include.text', thirdAmount);
    }
  }

  static verifyFirstStatus(firstStatus) {
    cy.log('verify first status');
    if (firstStatus !== "") {
      cy.xpath(FIRST_STATUS).should('include.text', firstStatus);
    }
  }

  static verifySecondStatus(secondStatus) {
    cy.log('verify second status');
    if (secondStatus !== "") {
      cy.xpath(SECOND_STATUS).should('include.text', secondStatus);
    }
  }

  static verifyThirdStatus(thirdStatus) {
    cy.log('verify third status');
    if (thirdStatus !== "") {
      cy.xpath(THIRD_STATUS).should('include.text', thirdStatus);
    }
  }

  static verifyFirstResult(firstResult) {
    cy.log('verify first result');
    if (firstResult !== "") {
      cy.xpath(FIRST_RESULT).should('include.text', firstResult);
    }
  }

  static verifySecondResult(secondResult) {
    cy.log('verify second result');
    if (secondResult !== "") {
      cy.xpath(SECOND_RESULT).should('include.text', secondResult);
    }
  }

  static verifyThirdResult(thirdResult) {
    cy.log('verify third result');
    if (thirdResult !== "") {
      cy.xpath(THIRD_RESULT).should('include.text', thirdResult);
    }
  }

  static verifySuccessCount(successCount) {
    cy.log('verify success count');
    if (successCount !== "") {
      cy.xpath(TRANSACTION_SUCCESS_COUNT).should('include.text', successCount);
    }
  }

  static verifyFailureCount(failureCount) {
    cy.log('verify failure count');
    if (failureCount !== "") {
      cy.xpath(TRANSACTION_FAILURE_COUNT).should('include.text', failureCount);
    }
  }

  static verifyWarningMsg(warningMsg) {
    cy.log('verify warning msg');
    cy.xpath(`//div/p[text() = '${warningMsg}']`).should('be.visible');
  }

  static deleteTransaction(transactionNo) {
    cy.log('click on delete button');
    const trNo = transactionNo - 1;
    cy.xpath(`(//button[@title = 'Delete'])[${trNo}]`).click();
  }

  static verifyNotAuthorized() {
    cy.log('verify not authorized is displayed');
    cy.xpath(NOT_AUTHORIZED).should('be.visible');
  }

  static enterSenderResellerID(senderResellerID) {
    cy.log('enter sender reseller id');
    cy.xpath(SENDER_RESELLER_ID, { timeout: 10000 }).type(senderResellerID);
  }

  static enterReceiverResellerID(senderResellerID) {
    cy.log('enter sender reseller id');
    cy.xpath(RECEIVER_RESELLER_ID, { timeout: 10000 }).type(senderResellerID);
  }

  static selectSenderAccountType(senderAccountType) {
    cy.log('select sender account type');
    cy.xpath(SENDER_ACCOUNT_TYPE, { timeout: 10000 }).select(senderAccountType);
  }

  static selectReceiverAccountType(receiverAccountType) {
    cy.log('select sender account type');
    cy.xpath(RECEIVER_ACCOUNT_TYPE, { timeout: 10000 }).select(receiverAccountType);
  }

  static enterCommentsManualAdjustment(comment) {
    cy.log('enter comments');
    cy.xpath(COMMENTS_MANUAL_ADJUSTMENT, { timeout: 10000 }).type(comment);
  }

  static clickOnCart() {
    cy.log('click on cart');
    cy.xpath(CART).click();
  }

  static enterSubscriberMSISDN(subscriberMsisdn) {
    cy.log('enter subscriber msisdn');
    cy.xpath(SUBSCRIBER_MSISDN).type(subscriberMsisdn);
  }

  static clickSubmit() {
    cy.log('click on submit');
    cy.xpath(SUBMIT).click();
  }

  static clickRequestReversal() {
    cy.log('click request reversal');
    cy.xpath(REQUEST_REVERSAL).click();
  }

  static clickContinue() {
    cy.log('click on continue');
    cy.xpath(CONTINUE).click();
  }

  static clickViewButton() {
    cy.log('click on view button');
    cy.xpath(VIEW_TRANSACTION).click();
  }

  static clickReverseTransaction() {
    cy.log('click on reverse transaction button');
    cy.xpath(REVERSE_TRANSACTION).click();
  }

  static verifyConfirmButtonDisabled() {
    cy.log('verify confirm button is disabled');
    cy.xpath(CONFIRM_REVERSAL).should('be.disabled');
  }

  static clickOnRejectPending() {
    cy.log('click on reject');
    cy.xpath(REJECT_PENDING).click();
  }

  static clickOnApprovePending() {
    cy.log('click on approve');
    cy.xpath(APPROVE_PENDING).click();
  }

  static clickOnRejectButton() {
    cy.log('click on reject button');
    cy.xpath(REJECT).click();
  }

  static clickOnApproveButton() {
    cy.log('click on approve button');
    cy.xpath(APPROVE).click();
  }

  static clickConfirmButtonAgain() {
    cy.log('click confirm button');
    cy.wait(2000);
    cy.xpath(CLICK_CONFIRM_BUTTON).click();
    cy.wait(2000);
  }

  static createC2SRCByApi(msisdn1, pin, msisdn2, amount) {
    cy.log("Creating C2C return by API");
    const xml2js = require('xml2js');
    const parser = new xml2js.Parser({ explicitArray: false });
    const hostname = Cypress.env('hostname');
    const xmlPayload = `
    <COMMAND>
    <TYPE>EXRCTRFREQ</TYPE>
    <DATE>03/08/2022 18:47:00</DATE>
    <EXTNWCODE>MO</EXTNWCODE>
    <MSISDN>${msisdn1}</MSISDN>
    <PIN>${pin}</PIN>
    <LOGINID></LOGINID>
    <PASSWORD></PASSWORD>
    <EXTCODE/>
    <EXTREFNUM>098765432345</EXTREFNUM>
    <MSISDN2>${msisdn2}</MSISDN2>
    <AMOUNT>${amount}</AMOUNT>
    <LANGUAGE1>en</LANGUAGE1>
    <LANGUAGE2></LANGUAGE2>
    <SELECTOR>1</SELECTOR>
    <EXTERNALDATA1>External Data 1</EXTERNALDATA1>
    <EXTERNALDATA2>External Data 2</EXTERNALDATA2>
    <EXTERNALDATA3>External Data 3</EXTERNALDATA3>
    <EXTERNALDATA4>External Data 4</EXTERNALDATA4>
    <EXTERNALDATA5>External Data 5</EXTERNALDATA5>
    </COMMAND>
    `;
    cy.request({
      method: 'POST',
      url: `${hostname}:80/api/standard-link/gp/endPoint`,
      qs: {
        'LOGIN': 'ers',
        'PASSWORD': '1357',
        'REQUEST_GATEWAY_CODE': 'ADNDIGITAL',
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
      SearchTransactionPage.setTransactionReference(transactionNumber);
    });
  }

  static clickTransfer() {
    cy.log('click on transfer button');
    cy.xpath(TRANSFER_BUTTON1, { timeout: 5000 }).click();
  }

  static validateManualAdjustmentReceipt(sender_reseller_id, status, result_message) {
    if (sender_reseller_id !== "") {
      cy.log('validate sender_reseller_id');
      cy.xpath(`//div/p[text()='${sender_reseller_id}']`, { timeout: 10000 }).should('be.visible');
    }

    if (status !== "") {
      cy.log('validate status');
      cy.xpath(`//div/p[text()='${status}']`, { timeout: 10000 }).should('be.visible');
    }

    if (result_message !== "") {
      cy.log('validate result_message for manual adjustment');
      cy.xpath(`//div/p[text()='${result_message}']`, { timeout: 10000 }).should('be.visible');
    }
  }
}

export default subscriberTopupMainPage;
