/// <reference types="cypress" />
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  format, subDays, addDays, addHours,
} from 'date-fns';

const CONDITIONS_DROPDOWN = "//div[@aria-haspopup='listbox']";
const VALUE_TYPE = "//select[@id='expressions[0].valueType']";
const AMOUNT = "//input[@id='expressions[0].amount']";
const ELSECONDITIONS_VALUETYPE = "//select[@id='valueType']";
const ELSECONDITIONS_AMOUNT = "//input[@id='amount']";
const VALIDATE = "//button/span[text()='Validate']";
const OK = "//span[text()='OK']";
const SNACKBAR = "//div[@id='notistack-snackbar']";
const FROM_DATE = "//input[@id='transactionFromDate']";
const TO_DATE = "//input[@id='transactionToDate']";
const FROM_TIME = "//input[@name='expressions[0].transactionFromTime']";
const TO_TIME = "//input[@name='expressions[0].transactionToTime']";

const transactionFromDate = format(subDays(new Date(), 0), 'dd-MM-yyyy HH:mm:ss');
const transactionToDate = format(addDays(new Date(), 10), 'dd-MM-yyyy HH:mm:ss');

const transactionFromTime = format(addHours(new Date(), 1), 'HH:mm:ss');
const transactionToTime = format(addHours(new Date(), 5), 'HH:mm:ss');

class FTLExpressionsPage {
  static selectConditions(condition1, condition2) {
    cy.log('select condition');
    cy.log('click on conditions dropdown');
    cy.wait(20000);
    cy.xpath("//input[@name='conditions']").invoke('removeAttr', 'aria-hidden');
    cy.xpath("//span[text()='Conditions']/..//div//*[local-name()='svg']").invoke('removeAttr', 'aria-hidden');
    cy.xpath(CONDITIONS_DROPDOWN).click();
    cy.log('select condition');
    cy.xpath(`//li[@data-value="${condition1}"]`).click();

    if (condition2 !== "") {
      cy.xpath(`//li[@data-value="${condition2}"]`).click();
    }
  }

  static selectMode(condition1, condition2, mode1, mode2) {
    cy.log('select mode');

    if ((condition1 === "Transaction Date") || (condition2 === "Transaction Date")) {
      this.enterFromDate(transactionFromDate);
      this.enterToDate(transactionToDate);
    }

    if ((condition1 === "Transaction Time") || (condition2 === "Transaction Time")) {
      this.enterFromTime(transactionFromTime);
      this.enterToTime(transactionToTime);
    }

    if ((condition1 === "Payment Mode") && (condition2 === "Gateway Code")) {
      cy.xpath('//select[@id="expressions[0].Payment Mode"]').select(mode1);
      cy.xpath('//select[@id="expressions[0].Gateway Code"]').select(mode2);
    }

    if (condition1 === 'Payment Mode') {
      cy.xpath('//select[@id="expressions[0].Payment Mode"]').select(mode1);
    }

    if (condition1 === 'Gateway Code') {
      cy.xpath('//select[@id="expressions[0].Gateway Code"]').select(mode1);
    }

    if (condition1 === 'Receiver Type') {
      cy.xpath('//select[@id="expressions[0].receiverType"]').select(mode1);
    }

    if (condition1 === 'Week Day') {
      cy.xpath('//select[@id="expressions[0].weekDay"]').select(mode1);
    }

    if (condition1 === 'Region Code') {
      cy.xpath('//select[@id="expressions[0].Region Code"]').select(mode1);
    }

    if (condition1 === 'Area Code') {
      cy.xpath('//select[@id="expressions[0].Area Code"]').select(mode1);
    }

    if (condition1 === 'Territory Code') {
      cy.xpath('//select[@id="expressions[0].Territory Code"]').select(mode1);
    }

    if (condition1 === 'Thana Code') {
      cy.xpath('//select[@id="expressions[0].Thana Code"]').select(mode1);
    }
  }

  static selectValueType(valueType) {
    cy.log('select value type');
    cy.xpath(VALUE_TYPE).select(valueType);
  }

  static enterAmount(amount) {
    cy.log('enter amount');
    cy.xpath(AMOUNT).type(amount);
  }

  static selectValueTypeforElseCondition(valueType) {
    cy.log('select value type in else condition');
    cy.xpath(ELSECONDITIONS_VALUETYPE).select(valueType);
  }

  static enterAmountforElseCondition(amount) {
    cy.log('enter amount in else condition');
    cy.xpath(ELSECONDITIONS_AMOUNT).type(amount);
  }

  static clickValidate() {
    cy.log('click on validate');
    cy.xpath(VALIDATE).click();
  }

  static clickOK() {
    cy.log('click OK button');
    cy.xpath(OK).click();
  }

  static enterFromDate(fromDate) {
    cy.log('enter from transaction date');
    cy.log(fromDate);
    cy.xpath(FROM_DATE).clear().type(fromDate);
  }

  static enterToDate(toDate) {
    cy.log('enter to transaction date');
    cy.log(toDate);
    cy.xpath(TO_DATE).clear().type(toDate);
  }

  static enterFromTime(fromTime) {
    cy.log('enter from transaction time');
    cy.log(fromTime);
    cy.log('enter from transaction date');
    cy.xpath(FROM_TIME).type(fromTime);
  }

  static enterToTime(toTime) {
    cy.log('enter to transaction time');
    cy.log(toTime);
    cy.log('enter from transaction date');
    cy.xpath(TO_TIME).type(toTime);
  }
}

export default FTLExpressionsPage;
