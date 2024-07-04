const NAME_XPATH = '//input[@name="name"]';
const DESCRIPTION_XPATH = '//textarea[@name="description"]';
const SELECT_MPOS_SUPPORT_TYPE_XPATH = '//select[@name="subDevicePolicy"]';
const SELECT_REPORT_GROUP_XPATH = '//select[@name="adminSiteSupportGroup"]';
const NEXT_BUTTON = '//span[contains(text(),"Next")]';
const UPDATE_BUTTON = '//span[contains(text(),"Update")]';
const MESSAGE_ALERT = '//div[@id="notistack-snackbar"]';
const RESELLER_TYPE_SETTNINGS_CHECK = "//span[text()='Allow Web shop']";

const VIEW_IMPORT_ID = '(//div//p[text()="Import Id"]//following::div//p)[1]';
const VIEW_NAME = '(//div//p[text()="Name"]//following::div//p)[1]';
const VIEW_DESCRIPTION = '(//div//p[text()="Description"]//following::div//p)[1]';
const VIEW_MPOS_SUPPORT = '(//div//p[text()="MPOS support "]//following::div//p)[1]';
const VIEW_ADMIN_SUPPORT_REPORT = '(//div//p[text()="Admin Support Report "]//following::div//p)[1]';
const VIEW_ALLOW_WEB_LOGIN = '(//div//p[text()="Allow Web login"]//following::div//p)[1]';
const VERIFY_IMPORT_ID = "//div[@data-field='id' and @data-rowindex='0']";
const VERIFY_NAME = "//div[@data-field='name' and @data-rowindex='0']";

class EditResellerTypesPage {
  // eslint-disable-next-line max-len
  static editResellerType(NAME, DESCRIPTION, SELECT_MPOS_SUPPORT_TYPE, SELECT_REPORT_GROUP, RESELLERT_TYPE_SETTINGS) {
    cy.xpath(NAME_XPATH, { timeout: 5000 }).clear().type(NAME);
    cy.xpath(DESCRIPTION_XPATH, { timeout: 2000 }).clear().type(DESCRIPTION);

    if (SELECT_MPOS_SUPPORT_TYPE !== "") {
      cy.xpath(SELECT_MPOS_SUPPORT_TYPE_XPATH, { timeout: 2000 }).select(SELECT_MPOS_SUPPORT_TYPE);
    }

    if (SELECT_REPORT_GROUP !== "") {
      cy.xpath(SELECT_REPORT_GROUP_XPATH, { timeout: 2000 }).select(SELECT_REPORT_GROUP);
    }
    cy.xpath(NEXT_BUTTON, { timeout: 5000 }).click();

    if (RESELLERT_TYPE_SETTINGS !== "") {
      cy.log(RESELLERT_TYPE_SETTINGS);
      cy.xpath(RESELLER_TYPE_SETTNINGS_CHECK, { timeout: 5000 }).click();
    }
    cy.xpath(NEXT_BUTTON, { timeout: 2000 }).click();
    cy.xpath(NEXT_BUTTON, { timeout: 2000 }).click();
    cy.xpath(UPDATE_BUTTON, { timeout: 2000 }).click();
  }

  static confirmMessage(MESSAGE) {
    cy.xpath(MESSAGE_ALERT).should('have.text', MESSAGE);
    cy.log("It is done");
  }

  // eslint-disable-next-line max-len
  static viewResellerType(IMPORT_ID, NAME, DESCRIPTION, SELECT_MPOS_SUPPORT_TYPE, SELECT_REPORT_GROUP, RESELLERT_TYPE_SETTINGS) {
    cy.wait(1000);
    cy.xpath(VIEW_IMPORT_ID).should('have.text', IMPORT_ID);
    cy.xpath(VIEW_NAME).should('have.text', NAME);
    cy.xpath(VIEW_DESCRIPTION).should('have.text', DESCRIPTION);
    if (SELECT_MPOS_SUPPORT_TYPE !== "") {
      cy.xpath(VIEW_MPOS_SUPPORT).should('have.text', SELECT_MPOS_SUPPORT_TYPE);
    }

    if (SELECT_REPORT_GROUP !== "") {
      cy.xpath(VIEW_ADMIN_SUPPORT_REPORT).should('have.text', SELECT_REPORT_GROUP);
    }

    if (RESELLERT_TYPE_SETTINGS !== "") {
      cy.xpath(VIEW_ALLOW_WEB_LOGIN).should('have.text', RESELLERT_TYPE_SETTINGS);
    }
    cy.wait(300);
  }

  static verifyResellerType(IMPORT_ID, NAME) {
    cy.wait(3000);
    cy.xpath(VERIFY_IMPORT_ID).should('have.text', IMPORT_ID);
    cy.xpath(VERIFY_NAME).should('have.text', NAME);
  }
}

export default EditResellerTypesPage;
