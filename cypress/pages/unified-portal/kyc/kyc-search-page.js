import URL_PATH from "../../../common/Route";
import CommonUtilities from '../../../common/Util';

const SEARCH_KEY = "//select[@id='search-key-input-box']";
const DATA_IN_TABLE = "//div[@class='MuiDataGrid-cell MuiDataGrid-cellLeft']";
const PENDING_CHECKBOX = "//input[@name='onlyPending']";
const MSISDN_NO_TABLE = "//div[@class='rendering-zone']/div/div[2]";
const TABLE = "//div[@class='rendering-zone']/div";
const VIEW_KYC = "//a[@id = 'view-kyc-button-0']";
const EDIT_BUTTON = "//div[@class='MuiButtonGroup-root']/a[2]";

const FILTER_INPUT = "#searchKey";
const SEARCH_BUTTON = "//button[@id='search-kyc-submit-button']";
const TABLE_ROWS = ".rendering-zone > div";
const SEARCH_VALUE = "//input[@id = 'search-value-input-box']";
const ROW_PER_PAGE = "//div[@class='MuiSelect-root MuiSelect-select MuiTablePagination-select MuiSelect-selectMenu MuiInputBase-input']";
const LEFT_MENU_KYC = "//p[text()='KYC']";
const LEFIT_MENU_KYC_SEARCH = "//p[text()='SEARCH']";
const EXPORT_BUTTON = "//span[text()='Export']";
const DOWNLOAD_BUTTON = "//li[contains(text(),'Download')]";
const APPROVE = "(//span[text() = 'thumb_up']/../..)[1]";
const REJECT = "(//span[text() = 'thumb_down']/../..)[1]";
const REJECT_REASON = "//input[@id = 'reject-reason-input-box']";
const YES = "//button[@id = 'yes-button']";

class searchKyc {
  static selectRowPerPage() {
    cy.log('Select Row per page');
    cy.xpath(ROW_PER_PAGE).type("100");
    cy.contains("100").click();
  }

  static selectSearchKey(searchKey) {
    cy.log('Select search kyc');
    cy.xpath(SEARCH_KEY).select(searchKey);
  }

  static verifyIdInTable(customerId) {
    cy.log('verify Id inside the Table');
    cy.xpath(DATA_IN_TABLE).eq(1).then((element) => {
      const text = element.text();
      cy.log(text);
      expect(text).to.equal(customerId);
    });
  }

  static clickOnPendingCheckbox() {
    cy.log('verify Id inside the Table');
    cy.xpath(PENDING_CHECKBOX).check();
  }

  static clickOnEditButton() {
    cy.log('Click on edit button');
    cy.wait(2000);
    cy.xpath(EDIT_BUTTON).click();
  }

  static validateMsisdnNoInTable(msisdnNo) {
    cy.log('validate Msisdn No Inside Table', msisdnNo);
    cy.xpath(TABLE).eq(0).within(() => {
      cy.get('div').then((element) => {
        cy.log(element.text());
      });
      cy.get('div').eq(1).should('contain.text', msisdnNo);
    });
  }

  static validateCustomersFirstName(firstName) {
    cy.log('validate Customers First name In the Table ');
    cy.xpath(TABLE).eq(0).within(() => {
      cy.get('div').then((element) => {
        cy.log(element.text());
      });
      cy.get('div').eq(2).should('contain.text', firstName);
    });
  }

  static validateCustomersIdInTable(customerId) {
    cy.log('validate Customers Id In Table ');
    cy.xpath(TABLE).eq(0).within(() => {
      cy.get('div').then((element) => {
        cy.log(element.text());
      });
      cy.get('div').eq(0).should('contain.text', customerId);
    });
  }

  static validateKycInPendingApproval(status) {
    cy.log('click on kyc pendingApproval ');
    cy.xpath(TABLE).eq(0).within(() => {
      cy.get('div').then((element) => {
        cy.log(element.text());
      });
      cy.get('div').eq(4).should('contain.text', status);
    });
  }

  static clickViewButton() {
    cy.log('click View Button');
    cy.xpath(VIEW_KYC).click();
  }

  static clickOnKycSearchUsingLeftMenu() {
    cy.log('Open KYC Search page');
    cy.xpath(LEFT_MENU_KYC).should('be.visible');
    cy.xpath(LEFT_MENU_KYC).click();
    cy.wait(1000);
    cy.xpath(LEFT_MENU_KYC).click();
    cy.xpath(LEFIT_MENU_KYC_SEARCH).click();
    cy.url().should('contain', URL_PATH.kycSearch);
  }

  static clickOnKycSearchUsingUrl() {
    cy.log('Open KYC Search page');
    cy.visit(URL_PATH.kycSearch);
    cy.url().should('contain', URL_PATH.kycSearch);
  }

  static applyFilter(param) {
    cy.log('click on Filter button');
    cy.get(FILTER_INPUT).select(param);
  }

  static clickSearchBtn() {
    cy.log('click on search button');
    cy.xpath(SEARCH_BUTTON).click();
  }

  static verifyRecordFetched() {
    cy.log('verify Record Fetched');
    cy.wait(1000);
    cy.get(TABLE_ROWS).should('have.length.above', 0);
  }

  static verifyRecordForNotFound() {
    cy.log('Verify Record For Not Found');
    cy.wait(1000);
    cy.get(TABLE_ROWS).should('have.length', 0);
  }

  static typeSearchValue(value) {
    cy.log('Type srarch value');
    cy.xpath(SEARCH_VALUE).type(value);
    cy.wait(2000);
  }

  static verifyPageTitle(pageTitle) {
    cy.log(`verify page title as ${pageTitle}`);
    cy.xpath(`//h4[contains(text(),'${pageTitle}')]`).should('be.visible');
  }

  static clickOnExportButton() {
    cy.log(`click on export button`);
    cy.xpath(EXPORT_BUTTON).click();
  }

  static clickOnDownloadButton() {
    cy.log(`click on download button`);
    cy.xpath(DOWNLOAD_BUTTON).click();
  }

  static verifyResellerStatus(columnName, status) {
    cy.log('verify status');
    CommonUtilities.validateTableListParameters(columnName, status);
  }

  static verifyPersonalInfo(viewcolumnName, firstName, distributorCode, mobileNo, JuridicialName) {
    cy.log('verify personal info');
    cy.xpath(`(//div/h6[text() = '${viewcolumnName}']/../following-sibling::div/h6[text() = '${firstName}'])[1]`).should('be.visible');
    // cy.xpath(`(//div/h6[text() = 'Distributor Code']/../following-sibling::div/h6[text() = '${distributorCode}'])[1]`).should('be.visible');
    cy.xpath(`(//div/h6[text() = 'Mobile Number']/../following-sibling::div/h6[text() = '${mobileNo}'])[1]`).should('be.visible');
    cy.xpath(`(//div/h6[text() = 'Juridicial Name']/../following-sibling::div/h6[text() = '${JuridicialName}'])[1]`).should('be.visible');
  }

  static clickOnApprove() {
    cy.log('click on approve button');
    cy.xpath(APPROVE).click();
  }

  static clickOnReject() {
    cy.log('click on reject button');
    cy.xpath(REJECT).click();
  }

  static enterRejectReason(reason) {
    cy.log('enter reject reason');
    cy.xpath(REJECT_REASON).type(reason);
  }

  static clickOnYes() {
    cy.log('click on yes button');
    cy.xpath(YES).click();
  }

  static verifyEditButtonNotPresent() {
    cy.log('verify edit button not present');
    cy.xpath(EDIT_BUTTON).should('not.exist');
  }

  static verifyViewButtonAvailable() {
    cy.log('verify view button');
    cy.xpath(VIEW_KYC).should('be.visible');
  }
}

export default searchKyc;
