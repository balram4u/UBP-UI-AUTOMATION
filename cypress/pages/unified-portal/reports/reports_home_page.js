/// <reference types="cypress" />
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  format, subDays, addDays,
} from 'date-fns';
import URL_PATH from "../../../common/Route";

const HEADER = "//h6[@id = 'child-app-title']";
const AVAILABLE_REPORTS = "//ul[@id = 'seamless-report-tree']";
const SUBMIT_BUTTON = "//button/span[text() = 'Submit']";
const DOWNLOAD_BUTTON = "//button/span[text() = 'Download']";
const SCHEDULE_BUTTON = "//button/span[text() = 'Schedule']";
const RESET_BUTTON = "//button/span[text() = 'Reset']";
const FROM_DATE = "//input[@id = 'report-form-fromDate']";
const TO_DATE = "//input[@id = 'report-form-toDate']";
const FILE_TYPE = "//select[@name = 'fileType']";
const SIZE = "//select[@name = 'size']";
const REPORTS_LIST = "(//ul/li)[1]";

const fromDate = format(subDays(new Date(), 30), 'dd-MM-yyyy');
const currentDate = format(addDays(new Date(), 0), 'dd-MM-yyyy');

class ReportsHomePage {
  static navigateToReportsUsingURL() {
    cy.log("Navigate to reportspage");
    cy.visit(URL_PATH.reports);
  }

  static verifyHeader(header) {
    cy.log('verify reports page header is visible');
    cy.xpath(HEADER).should('have.text', header);
  }

  static verifyAvailableReports(report1, report2, report3, report4, report5, report6) {
    cy.log('verify available reports in reports tree');
    cy.xpath(AVAILABLE_REPORTS).should('include.text', report1);
    cy.xpath(AVAILABLE_REPORTS).should('include.text', report2);
    cy.xpath(AVAILABLE_REPORTS).should('include.text', report3);
    cy.xpath(AVAILABLE_REPORTS).should('include.text', report4);
    cy.xpath(AVAILABLE_REPORTS).should('include.text', report5);
    cy.xpath(AVAILABLE_REPORTS).should('include.text', report6);
  }

  static clickOnReport(report) {
    cy.log('click on first available report');
    cy.xpath(`//div[text() = '${report}']`).click();
  }

  static verifySubmitBtn() {
    cy.log('verify submit button');
    cy.xpath(SUBMIT_BUTTON).should('be.visible');
  }

  static verifyDownloadBtn() {
    cy.log('verify submit button');
    cy.xpath(DOWNLOAD_BUTTON).should('be.visible');
  }

  static verifyScheduleBtn() {
    cy.log('verify submit button');
    cy.xpath(SCHEDULE_BUTTON).should('be.visible');
  }

  static verifyResetBtn() {
    cy.log('verify submit button');
    cy.xpath(RESET_BUTTON).should('be.visible');
  }

  static verifyFieldName(fieldName) {
    if (fieldName !== "") {
      cy.log('verify field names');
      cy.xpath(`//label[text() = '${fieldName}']`).should('be.visible');
    }
  }

  static enterFromDate() {
    cy.log('enter from date');
    cy.log(fromDate);
    cy.xpath(FROM_DATE).type('03/12/22');
  }

  static enterToDate() {
    cy.log('enter to date');
    cy.log(currentDate);
    cy.xpath(TO_DATE).type('04/01/23');
  }

  static clickSubmit() {
    cy.log('click submit');
    cy.xpath(SUBMIT_BUTTON).click();
  }

  static clickDownload() {
    cy.log('click download');
    cy.xpath(DOWNLOAD_BUTTON).click();
  }

  static clickReset() {
    cy.log('click reset');
    cy.xpath(RESET_BUTTON).click();
  }

  static selectFileType(fileType) {
    cy.log('select file type');
    cy.xpath(FILE_TYPE).select(fileType);
  }

  static selectSize(size) {
    cy.log('select size');
    cy.xpath(SIZE).select(size);
  }

  static verifyFileType(fileType) {
    cy.log('verify file type');
    cy.xpath(FILE_TYPE).should('have.value', fileType);
  }

  static verifySize(size) {
    cy.log('verify size');
    cy.xpath(SIZE).should('have.value', size);
  }

  static verifyReportsListNotDisplayed() {
    cy.log('verify Reports List Not Displayed');
    cy.xpath(REPORTS_LIST).should('not.exist');
  }
}

export default ReportsHomePage;
