import URL_PATH from "../../../common/Route";
import CommonUtilities from "../../../common/Util";

const SUBMIT_NEW_IMPORT_BTN = "//span[text()='Submit New Import']/..";
const SUB_IMPORT_TYPE_DD = "//select[@id='importSubType']";
const IMPORT_CSV_BTN = "//span[text()='Import CSV File']/..";
const FILE_UPLOAD_FIELD = '//input[@type="file"]';
const SUBMIT_BTN = "//span[text()='Submit']/..";
const IMPORT_TYPE = "(//p[text()='Import Type']/../following-sibling::div/p)[1]";
const STATUS = "(//p[text()='Status']/../following-sibling::div/p)[1]";
const SUMMARY = "(//p[text()='Summary']/../following-sibling::div/p)[1]";
const USER = "(//p[text()='User']/../following-sibling::div/p)[1]";
const FILE_NAME = "//p[text()='File Name']/../following-sibling::div/p";
const REFRESH_BTN = "//span[text()='Refresh']";
const TOTAL_UPLOADED = "(//div[@data-field='processed'])[2]";
const PASSED = "(//div[@data-field='success'])[2]";
const FAILED = "(//div[@data-field='failed'])[2]";
const LEFT_MENU_BULK = "//p[text()='BULK']";
const LEFIT_MENU_IMPORT = "//p[text()='IMPORT']";
const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "//select[@id='columns-filter-select']";
const OPERATOR_SELECT = "select[id=columns-operators-select]";
const FILTER_VALUE = '//div[@class="MuiFormControl-root MuiDataGridFilterForm-filterValueInput"]//input[@type="text"]';
const VIEW = "//a[contains(@href,'/home/bulk/imports/view')]";
const APPROVE_BUTTON = "(//button[@title='Approve']//*[local-name()='svg'])[1]";
const REJECT_BUTTON = "(//button[@title='Reject']//*[local-name()='svg'])[1]";
const BATCH_ID = "(//p[text()='Batch Id']/../following-sibling::div/p)[1]";
const VIEW_DEATILS = "//a[contains(@href,'home/bulk/imports/view')]//*[local-name()='svg']";
const REASON_OF_FAILURE_TEXT = "//p[text()='Reason of Failure']/../following-sibling::div/p";
const SEARCH_TABLE_DIV_XPATH = "//div[@class='rendering-zone']";
const SEARCH_TABLE_DIV_CSS = ".rendering-zone";
let batchId = '';

class BulkImportHomePage {
  static navigateToBulkImportHomePageUsingLeftMenu() {
    cy.log('Open Bulk -> View Bulk Management page');
    cy.xpath(LEFT_MENU_BULK).should('be.visible');
    cy.xpath(LEFT_MENU_BULK).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_BULK).click();
    cy.xpath(LEFIT_MENU_IMPORT).click();
  }

  static navigateToBulkImportHomepageUsingUrl() {
    cy.log('navigate to Bulk Import Home page');
    // cy.wait(3000);
    cy.intercept("GET", "/api/bss/v1/batch/scheduled/info**").as("getBatchInfo");
    cy.visit(URL_PATH.bulkImport);
    cy.wait("@getBatchInfo");
    cy.wait(2000);
    cy.get(SEARCH_TABLE_DIV_CSS)
      .invoke('prop', 'childElementCount')
      .then((childElementCount) => {
        cy.log(`There are ${childElementCount} children`);
        if (childElementCount === 0) {
          CommonUtilities.closeAlertMessage();
        }
      });
  }

  static navigateToBulkImportHomePageUsingLeftMenuNew() {
    cy.log('Open Bulk -> View Bulk Management new page');
    cy.xpath(LEFT_MENU_BULK).should('be.visible');
    cy.xpath(LEFT_MENU_BULK).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_BULK).click();
    cy.xpath(LEFIT_MENU_IMPORT).click();
  }

  static clickSubmitNewImport() {
    cy.log("Click submit new import button");
    cy.intercept("GET", "api/bss/v1/import/service/info").as("getServiceInfo");
    cy.xpath(SUBMIT_NEW_IMPORT_BTN).click();
    cy.wait("@getServiceInfo");
    // cy.wait(2000);
  }

  static selectSubImportType(type) {
    cy.log("Select sub import type");
    cy.xpath(SUB_IMPORT_TYPE_DD).select(type);
    cy.wait(1000);
  }

  static clickImportCSV() {
    cy.log("cLICK import csv btn");
    cy.xpath(IMPORT_CSV_BTN).click();
    cy.wait(1000);
  }

  static uploadFile(file) {
    const fileName = file;
    cy.log(`Import file ${fileName}`);
    cy.fixture(fileName).then((fileContent) => {
      cy.xpath(FILE_UPLOAD_FIELD).invoke('show').attachFile({ fileContent, fileName, mimeType: 'text/csv' });
    });
    cy.wait(3000);
    cy.xpath(SUBMIT_BTN).click();
  }

  static verifyImportInformation(type, file, status, user) {
    cy.wait(3000);
    cy.log("Assert import information.");
    cy.xpath(IMPORT_TYPE).invoke('text').then((text) => {
      expect(text).to.contain(type);
    });
    cy.xpath(FILE_NAME).invoke('text').then((text) => {
      expect(text).to.contain(file);
    });
    cy.xpath(STATUS).invoke('text').then((text) => {
      expect(text).to.eq(status);
    });
    cy.xpath(USER).invoke('text').then((text) => {
      expect(text).to.contain(user.toLowerCase());
    });
    cy.xpath(SUMMARY).invoke('text').then((text) => {
      expect(text).to.contain('Import request');
    });
  }

  static refreshDataAndVerifyInfo(status, totalUploaded, passed, failed, depth = 0) {
    // prevent infinite recursion
    expect(depth).to.be.lessThan(20);

    cy.xpath(REFRESH_BTN).click();
    cy.log(`CLick no  ${depth}`);
    cy.xpath(STATUS).invoke('text').then((stat) => {
      cy.log("text is ", status === stat);
      if (status === stat) {
        cy.xpath(STATUS).invoke('text').then((text) => {
          expect(text).to.eq(status);
        });
        cy.xpath(TOTAL_UPLOADED).invoke('text').then((text) => {
          expect(text).to.eq(totalUploaded);
        });
        cy.xpath(PASSED).invoke('text').then((text) => {
          expect(text).to.eq(passed);
        });
        cy.xpath(FAILED).invoke('text').then((text) => {
          expect(text).to.eq(failed);
        });
      } else {
        cy.log('Did not find it, waiting to try again');
        cy.wait(10000);
        this.refreshDataAndVerifyInfo(status, totalUploaded, passed, failed, depth + 1);
      }
    });
  }

  static clickOnFilters() {
    cy.log('click on filters');
    cy.xpath(FILTER).click();
  }

  static selectFilterColumn(columnName) {
    cy.log('select column');
    cy.xpath(COLUMN_SELECT).select(columnName);
  }

  static selectFilterOption(option) {
    cy.log('select filter option');
    cy.get(OPERATOR_SELECT).select(option);
  }

  static typeFilterValue(value) {
    cy.log('type filter value');
    cy.xpath(FILTER_VALUE).type(value);
  }

  static typeImportID() {
    cy.log('type import id');
    cy.task('getValue').then((importID) => {
      cy.xpath(FILTER_VALUE).type(importID);
    });
  }

  static approveImport() {
    cy.log('Approve Import');
    cy.xpath(APPROVE_BUTTON).click();
    cy.wait(500);
  }

  static rejectImport() {
    cy.log('Reject Import');
    cy.xpath(REJECT_BUTTON).click();
    cy.wait(500);
  }

  static captureBatchId() {
    cy.log('Capture Batch ID');
    cy.xpath(BATCH_ID).invoke('text').then((text) => {
      console.log(text);
      batchId = text;
      console.log(batchId);
    });
    cy.wait(500);
  }

  static enterBatchId() {
    cy.log('Enter Batch in the field');
    cy.log(batchId);
    cy.wait(1000);
    cy.xpath(FILTER_VALUE).clear().type(batchId);
    cy.wait(2000);
    cy.xpath(VIEW_DEATILS).click();
    cy.wait(1000);
  }

  static validateColumnStatus(key, value) {
    cy.log('validate value inside table ');
    cy.xpath(`//div[@class='MuiDataGrid-colCellTitle' and text()='${key}']/ancestor::div[@class='MuiDataGrid-main']/descendant::div[@data-value='${value}']`).should('include.text', value);
  }

  static fetchImportID() {
    cy.log('fetch import id');
    cy.xpath('(//p[text() = "Import Id"]/../following-sibling::div//p)[1]').then((ID) => {
      cy.log(ID);
      cy.task('setValue', ID);
    });
  }

  static clickOnView() {
    cy.log('click on view button');
    cy.xpath(VIEW).click();
  }

  static returnBatchId() {
    cy.log("Returning batch ID to calling function :", batchId);
    return batchId;
  }

  static validateFailureReasonContains(stringToCheck) {
    cy.log("validating reason of failure contains ", stringToCheck);
    cy.xpath(REASON_OF_FAILURE_TEXT).invoke('text').then((text) => {
      expect(text).to.contain(stringToCheck);
    });
  }

}

export default BulkImportHomePage;
