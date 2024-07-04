/* eslint-disable no-param-reassign */
/* eslint-disable radix */
/* eslint-disable camelcase */
import URL_PATH from '../../../common/Route';
import CommonUtilities from '../../../common/Util';

const TXT_ACCOUNTID = "//input[@name='acc.accountId']";
const TXT_ACCOUNTTYPEID = "//input[@name='acc.accountTypeId']";
const TXT_FROMDATE = "//input[@name='fromDate']";
const TXT_TODATE = "//input[@name='untilDate']";
const BTN_SEARCH = "//button/span[text()='Search']";
const LEFT_MENU_ACCOUNT = "//p[text()='ACCOUNT']";
const LEFIT_MENU_SEARCH_TRANSACTIONS = "//p[text()='SEARCH TRANSACTIONS']";
const VIEW_SEARCH_TRANSACTIONS_HEADER = '//p[text()="This Section allows users to search for account transactions based on various parameters"]';
const VERIFY_ACCOUNT_ID = "(//div[@data-field='accountId'])[2]";
const VERIFY_TABLE_CONTENT = "(//div[@data-field='accountId'  or @data-field='actions'])[2]";
const VERIFY_ACCOUNT_TYPE_ID = "(//div[@data-field='accountTypeId'])[2]";
const TXT_REF_NO = "//input[@name='reference']";
const VERIFY_REF_NO = "(//div[@data-field='reference'])[2]";
const SCROLLABLE_AREA = "div.MuiDataGrid-window";
const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "select[id=columns-filter-select]";
const OPERATOR_SELECT = "select[id=columns-operators-select]";
const FILTER_VALUE = "//input[@placeholder='Filter value']";
const VERIFY_AMOUNT = "(//div[@data-field='value'])[2]";
const SELECT_FROM_DATE_PICKER = "(//button[@aria-label='change date'])[1]";
const SELECT_TO_DATE_PICKER = "(//button[@aria-label='change date'])[2]";
const SELECT_DATE = "//button[contains(@class,'MuiPickersDay-daySelected')]";
const VERIFY_DEBIT_TYPE = "(//div[@data-field='type'])[2]";
const VERIFY_CREDIT_TYPE = "(//div[@data-field='type'])[3]";
const VERIFY_DEBIT_ACCOUNT_ID = "(//div[@data-field='accountId'])[3]";
const VERIFY_DEBIT_ACCOUNT__TYPE_ID = "(//div[@data-field='accountTypeId'])[3]";
const GET_CURRENT_DATE = "//button[contains(@class,'MuiPickersDay-daySelected')]/span/p";
const CLICK_RESET_BUTTON = "//button/span[text()='Reset']";
const TRANSACTION = "//p[text() = 'TRANSACTION']";
const SEARCH_TRANSACTION = "//p[text() = 'SEARCH TRANSACTION']";
const VIEW = "(//div/a[contains(@href,'/home/transaction/search/')])[1]";
const VIEW_HIERARCHY_TRANSACTION = "(//div/a[contains(@href,'/home/transaction/hierarchy/')])[1]";
const TRANSACTION_REF_NO_TP = "//input[@name = 'transactionReference']";
const TRANSACTION_TYPE_DROPDOWN = "//select[@name = 'transactionTypeOrProfile']";
const TRANSACTIONS_DISPLAYED = "//div[@class = 'rendering-zone']/div[@role='row']";
const NEXT_PAGE = "//button[@title='Next page']";
const PREVIOUS_PAGE = "//button[@title='Previous page']";
const NOT_AUTHORIZED = "//h2[text() = ' Not Authroized ']";
const DATA_TABLE = "//div[@class='rendering-zone']";
class SearchTransctionPage {
  static clickOnSearchTransactionUsingLeftMenu() {
    cy.log('Open Account -> View Account Types page');
    cy.xpath(LEFT_MENU_ACCOUNT).should('be.visible');
    cy.xpath(LEFT_MENU_ACCOUNT).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_ACCOUNT).click();
    cy.xpath(LEFIT_MENU_SEARCH_TRANSACTIONS).click();
    cy.xpath(VIEW_SEARCH_TRANSACTIONS_HEADER).should('be.visible');
  }

  static clickOnSearchTransactionUsingUrl() {
    cy.log('visit searchTransaction page');
    cy.visit(URL_PATH.searchTransaction);
    cy.wait(800);
    cy.xpath(VIEW_SEARCH_TRANSACTIONS_HEADER).should('be.visible');
  }

  static clickOnSearchTransactionTPUsingUrl() {
    cy.log('visit searchTransaction page');
    cy.visit(URL_PATH.searchTransactions);
    cy.wait(800);
  }

  static clickOnHierarchyTransactionUsingUrl() {
    cy.log('visit searchTransaction page');
    cy.visit(URL_PATH.hierarchyTransaction);
    cy.wait(800);
  }

  static fillAccountId(value) {
    cy.log('Now fill accountId for search Transaction');
    cy.xpath(TXT_ACCOUNTID).clear().type(value);
  }

  static fillAccountTypeId(value) {
    cy.log('Now fill accountTypeId for search Transaction');
    cy.xpath(TXT_ACCOUNTTYPEID).clear().type(value);
  }

  static fillFromDate(value) {
    cy.log('Now fill fromDate for search Transaction');
    cy.xpath(TXT_FROMDATE).clear().type(value);
  }

  static fillToDate(value) {
    cy.log('Now fill ToDate for search Transaction');
    cy.xpath(TXT_TODATE).clear().type(value);
  }

  static selectFromDate() {
    cy.log('select from date');
    cy.xpath(SELECT_FROM_DATE_PICKER).click();
    cy.xpath(SELECT_DATE).click();
    cy.wait(2000);
  }

  static selectToDate() {
    cy.log('select to date');
    cy.xpath(SELECT_TO_DATE_PICKER).click();
    cy.xpath(SELECT_DATE).click();
    cy.wait(2000);
  }

  static clickOnSearchButton() {
    cy.log('click on search button');
    cy.xpath(BTN_SEARCH).click();
  }

  static verifyAccountId(accountId) {
    cy.log('Now verify AccountId');
    // eslint-disable-next-line camelcase
    if (accountId !== "") {
      cy.xpath(VERIFY_ACCOUNT_ID).invoke('text').then((account_id) => {
        expect(account_id).to.eq(accountId);
      });
    }
  }

  static verifyAccountTypeId(accountTypeId) {
    cy.log('Now verify AccounTypetId');
    // eslint-disable-next-line camelcase
    cy.xpath(VERIFY_ACCOUNT_TYPE_ID).invoke('text').then((account_type_id) => {
      expect(account_type_id).to.eq(accountTypeId);
    });
  }

  static scrollToRight() {
    cy.log('Scroll to right');
    cy.get(SCROLLABLE_AREA).scrollTo('right');
    cy.wait(800);
  }

  static scrollToRightwithArguments(pixel) {
    cy.log('Scroll to right');
    cy.get(SCROLLABLE_AREA).scrollTo(pixel);
    cy.wait(800);
  }

  static getColumnCountToScrollPixel(columnCount) {
    return parseInt(columnCount * 105, 10).toString().concat('px');
  }

  static verifyRefNo(refNo) {
    cy.log('Now verify AccounTypetId');
    if (refNo !== "") {
      this.scrollToRight();
      // eslint-disable-next-line camelcase
      cy.xpath(VERIFY_REF_NO).invoke('text').then((refo_no) => {
        expect(refo_no).to.eq(refNo);
      });
    }
  }

  static verifyAmount(amount) {
    cy.log('Now verify AccounTypetId');
    if (amount !== "") {
      this.scrollToRight();
      cy.xpath(VERIFY_AMOUNT).invoke('text').then((Amount) => {
        expect(Amount).to.eq(amount);
      });
    }
  }

  static verifySpecialCharValidation(fieldName, message) {
    cy.log('Now verify Special Char Validation');
    cy.xpath(`//label[text()='${fieldName}']/following-sibling::p`).should('have.text', message);
  }

  static fillRefNo(refNo) {
    cy.log('Now fill ref no for search Transaction');
    cy.xpath(TXT_REF_NO).clear().type(refNo);
  }

  static clickFilterButton() {
    cy.xpath(FILTER).click();
  }

  static selectColumn(value) {
    cy.get(COLUMN_SELECT).select(value);
  }

  static selectOperator(value) {
    cy.get(OPERATOR_SELECT).select(value);
  }

  static fillFilterValue(filterValue) {
    cy.xpath(FILTER_VALUE).clear().type(filterValue);
    cy.wait(1000);
  }

  static selectCurrentFromDate() {
    cy.xpath(SELECT_FROM_DATE_PICKER).click();
    cy.xpath(SELECT_DATE).click();
    cy.wait(800);
  }

  static selectCurrentToDate() {
    cy.xpath(SELECT_TO_DATE_PICKER).click();
    cy.xpath(GET_CURRENT_DATE).invoke('text').then((currentDate) => {
      currentDate = parseInt(currentDate) + 1;
      cy.log('current date + 1 is ', currentDate);
      cy.xpath(`//button/span/p[text()='${currentDate}']`).click();
    });
    cy.wait(800);
  }

  static verifyCreditType(CreditType) {
    cy.log('Now verify AccounTypetId');
    // eslint-disable-next-line camelcase
    cy.xpath(VERIFY_CREDIT_TYPE).invoke('text').then((credit_type) => {
      expect(credit_type).to.eq(CreditType);
    });
  }

  static verifyCreditAccountId(DebitAccountId) {
    cy.log('Now verify AccounTypetId');
    // eslint-disable-next-line camelcase
    cy.xpath(VERIFY_DEBIT_ACCOUNT_ID).invoke('text').then((debit_account_id) => {
      expect(debit_account_id).to.eq(DebitAccountId);
    });
  }

  static verifyCreditAccountTypeId(DebitAccountTypeId) {
    cy.log('Now verify AccounTypetId');
    // eslint-disable-next-line camelcase
    cy.xpath(VERIFY_DEBIT_ACCOUNT__TYPE_ID).invoke('text').then((debit_account_type_id) => {
      expect(debit_account_type_id).to.eq(DebitAccountTypeId);
    });
  }

  static verifyDebitType(DebitType) {
    cy.log('Now verify AccounTypetId');
    // eslint-disable-next-line camelcase
    this.scrollToRight();
    cy.xpath(VERIFY_DEBIT_TYPE).invoke('text').then((debit_type) => {
      expect(debit_type).to.eq(DebitType);
    });
  }

  static verifyTransactions() {
    cy.xpath(VERIFY_TABLE_CONTENT).should('be.visible');
  }

  static verifyNoTransactions() {
    cy.xpath(VERIFY_TABLE_CONTENT).should('not.exist');
  }

  static clickResetButton() {
    cy.xpath(CLICK_RESET_BUTTON).click();
    cy.wait(800);
  }

  static setTransactionReference() {
    cy.log('set transaction reference');
    CommonUtilities.setTextValue(TXT_REF_NO);
  }

  static verifyAllFields() {
    cy.log('verify all the fields of search transaction page');
    cy.xpath('//label[text() = "Transaction Reference"]').should('be.visible');
    cy.xpath('//label[text() = "Sender Reseller Id"]').should('be.visible');
    cy.xpath('//label[text() = "Receiver Reseller Id"]').should('be.visible');
    cy.xpath('//label[text() = "Sender MSISDN"]').should('be.visible');
    cy.xpath('//label[text() = "Receiver MSISDN"]').should('be.visible');
    cy.xpath('//label[text() = "Sender Reseller Type"]').should('be.visible');
    cy.xpath('//label[text() = "Receiver Reseller Type"]').should('be.visible');
    cy.xpath('//label[text() = "Amount"]').should('be.visible');
    cy.xpath('//label[text() = "Transaction Type/Profile"]').should('be.visible');
    cy.xpath('//label[text() = "Transaction Status"]').should('be.visible');
    cy.xpath('//label[text() = "Batch Id"]').should('be.visible');
    cy.xpath('//label[text() = "From"]').should('be.visible');
    cy.xpath('//label[text() = "To"]').should('be.visible');
    cy.xpath('//input[@id = "product-types"]').should('be.visible');
  }

  static verifyTableColumnNames() {
    cy.log('verify table column names');
    cy.scrollTo(0, 500);
    cy.xpath('//div[text() = "Transaction Reference"]').should('be.visible');
    cy.xpath('//div[text() = "Original Ers Reference"]').should('be.visible');
    cy.xpath('//div[text() = "Batch Id"]').should('be.visible');
    cy.xpath('//div[text() = "Sender Reseller Type"]').should('be.visible');
    cy.xpath('//div[text() = "Receiver Reseller Type"]').should('be.visible');
    this.scrollToRightwithArguments('1000px');
    cy.xpath('//div[text() = "Date"]').should('be.visible');
    cy.xpath('//div[text() = "Sender Reseller Id"]').scrollIntoView().should('be.visible');
    cy.xpath('//div[text() = "Sender MSISDN"]').scrollIntoView().should('be.visible');
    this.scrollToRightwithArguments('1700px');
    cy.xpath('//div[text() = "Receiver Reseller Id"]').scrollIntoView().should('be.visible');
    cy.xpath('//div[text() = "Receiver MSISDN"]').scrollIntoView().should('be.visible');
    cy.xpath('//div[text() = "Transaction Type"]').scrollIntoView().should('be.visible');
    cy.xpath('//div[text() = "Product"]').scrollIntoView().should('be.visible');
    cy.xpath('//div[text() = "Amount"]').scrollIntoView().should('be.visible');
    cy.xpath('//div[text() = "Status"]').scrollIntoView().should('be.visible');
  }

  static clickOnTransaction() {
    cy.log('click on search transaction');
    cy.xpath(TRANSACTION).click();
  }

  static verifySearchTransactionNotExist() {
    cy.log('verify search transaction option should not exist');
    cy.xpath(SEARCH_TRANSACTION).should('not.exist');
  }

  static clickOnViewButton() {
    cy.log('click on view button');
    cy.xpath(VIEW).click();
  }

  static clickOnViewButtonHT() {
    cy.log('click on view button');
    cy.xpath(VIEW_HIERARCHY_TRANSACTION).click();
  }

  static verifyViewTransactionRefPage(refNo) {
    cy.log('verify Transaction Ref Page');
    cy.xpath('//h4[contains(text(),"Transaction Reference")]').should('contains.text', refNo);
  }

  static enterTransRefNoTP(refNo) {
    cy.log('enter trans ref no.');
    cy.xpath(TRANSACTION_REF_NO_TP).type(refNo);
  }

  static verifyFieldsShouldNotBeNull(fieldName) {
    cy.log(`verify ${fieldName} is not null`);
    cy.xpath(`//div/p[text() = '${fieldName}']/..//following-sibling::div[1]`).should('not.be.null');
  }

  static verifyFieldsShouldBeNull(fieldName) {
    cy.log(`verify ${fieldName} is null`);
    cy.xpath(`//div/p[text() = '${fieldName}']/..//following-sibling::div[1]`).should('have.length', 1);
  }

  static selectTransactionType(transactionType) {
    cy.log('select transaction type');
    cy.xpath(TRANSACTION_TYPE_DROPDOWN).select(transactionType);
  }

  static verifyNoOfTransactionsDisplayed(transactionsCount) {
    cy.log(`No. of transactions should be displayed ${transactionsCount}`);
    cy.xpath(TRANSACTIONS_DISPLAYED).should('have.length', transactionsCount);
  }

  static selectRowsPerPage(count) {
    cy.log(`select rows per page ${count}`);
    cy.xpath('//div[@aria-haspopup="listbox"]').click();
    cy.wait(500);
    cy.xpath('//li[@role="option"]').each(($pagination) => {
      if ($pagination.text() === count) {
        cy.wrap($pagination).click();
      } else {
        cy.log('fail');
      }
    });
  }

  static verifyPagination(pagination) {
    cy.log(`verify pagination displayed ${pagination}`);
    cy.scrollTo('bottom');
    cy.xpath(`//p[contains(text(), '${pagination}')]`).should('be.visible');
  }

  static clickOnNextPage() {
    cy.log('click on next page');
    cy.xpath(NEXT_PAGE).click();
  }

  static clickOnPreviousPage() {
    cy.log('click on next page');
    cy.xpath(PREVIOUS_PAGE).click();
  }

  static verifyNotAuthorized() {
    cy.log('verify not authorized');
    cy.xpath(NOT_AUTHORIZED).should('be.visible');
  }

  static searchTransaction(searchField, searchValue) {
    cy.log('search transaction');
    if (searchField === 'SenderResellerType' || searchField === 'ReceiverResellerType' || searchField === 'transactionStatus' || searchField === 'transactionTypeOrProfile') {
      cy.xpath(`//select[@name = '${searchField}']`).select(searchValue);
    } else if (searchField === 'product-types') {
      cy.xpath(`//input[@id = '${searchField}']`).type(searchValue).type('{downArrow}').type('{enter}');
    } else {
      cy.xpath(`//input[@name = '${searchField}']`).type(searchValue);
    }
  }

  static verifyTransactionsHaveSearchedValue(searchField, searchValue) {
    cy.log(`verify transaction with ${searchValue}`);
    if (searchField === 'senderMsisdn') {
      this.scrollToRightwithArguments('1200px');
      cy.xpath(`(//div[@data-field="senderMSISDN"])[2]`).invoke('attr', 'data-value').then((value) => {
        expect(value).to.be.equal(searchValue);
      });
    } else if (searchField === 'receiverMsisdn') {
      this.scrollToRightwithArguments('1200px');
      cy.xpath(`(//div[@data-field="receiverMSISDN"])[2]`).invoke('attr', 'data-value').then((value) => {
        expect(value).to.be.equal(searchValue);
      });
    } else if (searchField === 'SenderResellerType') {
      cy.xpath(`(//div[@data-field="senderResellerTypeName"])[2]`).then((value) => {
        cy.wrap(value).should('have.text', 'OPERATOR');
      });
    } else if (searchField === 'ReceiverResellerType') {
      cy.xpath(`(//div[@data-field="receiverResellerTypeName"])[2]`).then((value) => {
        cy.wrap(value).should('have.text', searchValue);
      });
    } else {
      cy.xpath(`(//div[@data-field="${searchField}"])[2]`).invoke('attr', 'data-value').then((value) => {
        expect(value).to.be.equal(searchValue);
      });
    }
  }

  static verifyNoTransactionTableDisplayed() {
    cy.log('transactions records should not be displayed');
    cy.xpath(DATA_TABLE).should('not.visible');
  }
}
export default SearchTransctionPage;