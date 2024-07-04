const GROUP_NAME = "//input[@name='name']";
const GROUP_TYPE = "//div[@role='radiogroup']";
const STATUS = "//select[@name='status']";
const DESCRIPTION = "//textarea[@name='description']";
const MINIMUM_MEMBERS = "//input[@name='minimumMembers']";
const MAXIMUM_MEMBERS = " //input[@name='maximumMembers']";
const AVAILABLE_FROM = "//input[@name='availableFrom']";
const AVAILABLE_UNTIL = "//input[@name='availableUntil']";
const SUBMIT_BUTTON = "//span[contains(text(),'Submit')]";
const RESET_BUTTON = "//*[contains(text(),'Reset')]";
const ALERT_MESSAGE = "#notistack-snackbar";
const CLICK_FROM_DATE_PICKER = "(//button[@aria-label='change date']//*[local-name()='svg'])[1]";
const CLICK_TO_DATE_PICKER = "(//button[@aria-label='change date']//*[local-name()='svg'])[2]";
const SELECT_DATE = "//button[contains(@class,'MuiPickersDay-daySelected')]";
const SELECT_MONTH = "//div[contains(@class,'MuiPickersMonth-monthSelected')]";
const EXPORT_BUTTON = "//button/span[text()='Export']";
const DOWNLOAD_BUTTON = "//li[contains(text(),'Download')]";

let availableFrom = '';
let availableUntil = '';

class CreateNewGroupPage {
  static enterGroupName(groupName) {
    cy.log('Enter group name for create group');
    cy.xpath(GROUP_NAME).clear().type(groupName);
  }

  static selectGroupType(groupType) {
    cy.log('select group type for create group');
    if (groupType !== "") {
      cy.xpath(GROUP_TYPE).contains(groupType).click();
    }
  }

  static selectStatus(status) {
    cy.log('select group status for create group');
    if (status !== "") {
      cy.xpath(STATUS).select(status);
    }
  }

  static enterDescription(description) {
    cy.log('Enter group description for create group');
    if (description !== "") {
      cy.xpath(DESCRIPTION).clear().type(description);
    }
  }

  static enterMinimumMember(minimumNumber) {
    cy.log('Enter minimum number for create group');
    if (minimumNumber !== "") {
      cy.xpath(MINIMUM_MEMBERS).clear();
      cy.xpath(MINIMUM_MEMBERS).type(minimumNumber);
    }
  }

  static enterMaximumMember(maximumNumber) {
    cy.log('Enter maximum number for create group');
    if (maximumNumber !== "") {
      cy.xpath(MAXIMUM_MEMBERS).clear();
      cy.xpath(MAXIMUM_MEMBERS).type(maximumNumber);
    }
  }

  static selectDate() {
    cy.log('selecting date');
    cy.xpath(CLICK_FROM_DATE_PICKER).click();
    cy.xpath(SELECT_DATE).click();
  }

  static selectYearMonthDate(year) {
    cy.log('selecting year, month, date');
    cy.xpath(CLICK_TO_DATE_PICKER).click();
    cy.xpath(`//div[text()='${year}']`).click();
    cy.xpath(SELECT_MONTH).click();
    cy.xpath(SELECT_DATE).click();
  }

  static selectAvailableFrom(availabeFrom) {
    cy.log('select availabe from for create group');
    cy.xpath(AVAILABLE_FROM).clear();
    cy.xpath(AVAILABLE_FROM).type(availabeFrom);
  }

  static selectAvaialableUntil(availableUntil) {
    cy.log('select availabe until for create group');
    cy.xpath(AVAILABLE_UNTIL).clear();
    cy.xpath(AVAILABLE_UNTIL).type(availableUntil);
  }

  static clickSubmitButton() {
    cy.log('click submit button');
    cy.xpath(SUBMIT_BUTTON).click();
  }

  static clickResetbutton() {
    cy.log('click reset button');
    cy.xpath(RESET_BUTTON).click();
  }

  static verifyMessage(message) {
    cy.log('Validating the Message after click Submit Button');
    cy.get(ALERT_MESSAGE).then((alert) => {
      const text = alert.text();
      cy.log(text);
      expect(text).contains(message);
    });
    cy.log("It is done");
  }

  static clickOnExportButton() {
    cy.log(`click on export button`);
    cy.xpath(EXPORT_BUTTON).click();
  }

  static clickOnDownloadButton() {
    cy.log(`click on download button`);
    cy.xpath(DOWNLOAD_BUTTON).click();
  }

  static storeAvailableFromDate() {
    cy.log('store available from date');
    cy.xpath(AVAILABLE_FROM).invoke('val').then((date) => {
      availableFrom = date;
      cy.log('Available from date is ', availableFrom);
    });
  }

  static storeAvailableUntilDate() {
    cy.log('store available until date');
    cy.xpath(AVAILABLE_UNTIL).invoke('val').then((date) => {
      availableUntil = date;
      cy.log('Available until date is ', availableUntil);
    });
  }

  static returnAvailableFromDate() {
    cy.log('return available from date ', availableFrom);
    const returnAvailableFromDate = availableFrom;
    return cy.wrap(returnAvailableFromDate);
  }

  static returnAvailableUntilDate() {
    cy.log('return available from date ', availableUntil);
    const returnAvailableUntilDate = availableUntil;
    return cy.wrap(returnAvailableUntilDate);
  }
}
export default CreateNewGroupPage;
