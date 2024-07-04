const IMPORT_ID_XPATH = '//input[@name="importId"]';
const NAME_XPATH = '//input[@name="name"]';
const DESCRIPTION_XPATH = '//textarea[@name="description"]';
const SELECT_MPOS_SUPPORT_TYPE_XPATH = '//select[@name="subDevicePolicy"]';
const SELECT_REPORT_GROUP_XPATH = '//select[@name="adminSiteSupportGroup"]';
const NEXT_BUTTON = '//span[contains(text(),"Next")]';
const MESSAGE_ALERT = '//div[@id="notistack-snackbar"]';
const SELECT_SUB_RESELLER_TYPE_XPATH = "(//input[@aria-autocomplete='list' and @placeholder='Please choose' ])[1]";
const RESET_BUTTON = "//button/span[text() = 'Reset']";
const EXPORT_BUTTON = "//button/span[text()='Export']";
const DOWNLOAD_BUTTON = "//li[contains(text(),'Download')]";
const ROLE_DROPDOWN = "//select[@id = 'role-key-dropdown']";
const SUB_RESELLER_TYPE_DROP_DOWN_VISIBILE = "//input[contains(@aria-controls,'auto-complete')]";
const SUB_RESELLER_TYPE = "(//div//input[@type='text'])[2]";
const ALLOWED_RESELLER_TYPE = "(//div//input[@type='text'])[3]";

class CreateResellerTypesPage {
  // eslint-disable-next-line max-len
  static createResellerType(IMPORT_ID, NAME, DESCRIPTION, ROLE, SELECT_MPOS_SUPPORT_TYPE, SELECT_REPORT_GROUP) {
    if (IMPORT_ID !== "") {
      cy.xpath(IMPORT_ID_XPATH, { timeout: 15000 }).clear().type(IMPORT_ID);
    }

    if (NAME !== "") {
      cy.xpath(NAME_XPATH, { timeout: 15000 }).clear().type(NAME);
    }
    cy.xpath(DESCRIPTION_XPATH, { timeout: 15000 }).clear().type(DESCRIPTION);
    if (ROLE !== "") {
      cy.xpath(ROLE_DROPDOWN, { timeout: 15000 }).select(ROLE);
    }

    if (SELECT_MPOS_SUPPORT_TYPE !== "") {
      cy.xpath(SELECT_MPOS_SUPPORT_TYPE_XPATH, { timeout: 15000 }).select(SELECT_MPOS_SUPPORT_TYPE);
    }

    if (SELECT_REPORT_GROUP !== "") {
      cy.xpath(SELECT_REPORT_GROUP_XPATH, { timeout: 15000 }).select(SELECT_REPORT_GROUP);
    }
  }

  static verifyImportIdDisabled() {
    cy.log('verify import id is not editable');
    cy.xpath(IMPORT_ID_XPATH).should('be.disabled');
  }

  static selectResellerTypeSettings(settings) {
    if (settings !== "") {
      cy.log('select reseller type settings');
      cy.xpath(`//span[text() = '${settings}']`).click();
    }
  }

  static selectSubResellerTypes(subResellerType) {
    if (subResellerType !== "") {
      cy.log('select sub reseller types');
      cy.xpath(SUB_RESELLER_TYPE).type(subResellerType).type('{downArrow}').type('{enter}');
      cy.wait(200);
    }
  }

  static allowedResellerTypes(allowedResellerType) {
    if (allowedResellerType !== "") {
      cy.log('select allowed reseller types');
      cy.xpath(ALLOWED_RESELLER_TYPE).type(allowedResellerType).type('{downArrow}').type('{enter}');
      cy.wait(200);
    }
  }

  static confirmMessage(MESSAGE) {
    cy.xpath(MESSAGE_ALERT, { timeout: 5000 }).should('have.text', MESSAGE);
  }

  static verifyTableCount(IMPORT_ID) {
    cy.get(`[data-value="${IMPORT_ID}"]`, { timeout: 5000 }).should('have.length', 1);
  }

  static enterResellerTypeName(name) {
    cy.log('enter name');
    cy.xpath(NAME_XPATH).clear().type(name);
  }

  static enterResellerImportId(importid) {
    cy.log('enter import id');
    cy.xpath(IMPORT_ID_XPATH).clear().type(importid);
  }

  static clickReset() {
    cy.log("Click submit");
    cy.xpath(RESET_BUTTON).click();
    cy.wait(1000);
  }

  static verifyEmptyResellerTypeName() {
    cy.log('enter name');
    cy.xpath(NAME_XPATH).should('have.value', '');
  }

  static verifyEmptyResellerImportId() {
    cy.log('enter import id');
    cy.xpath(IMPORT_ID_XPATH).should('have.value', '');
  }

  static clickNext() {
    cy.wait(1000);
    cy.log("click next");
    cy.xpath(NEXT_BUTTON).should('be.visible').click();
  }

  static verifySubResellerTypeDropdown() {
    cy.log("click on drop down ");
    cy.xpath(SELECT_SUB_RESELLER_TYPE_XPATH).click();
    cy.log("drop down should be visible");
    cy.xpath(SUB_RESELLER_TYPE_DROP_DOWN_VISIBILE).should('be.visible');
    cy.log("click on drop down again");
    cy.xpath(SELECT_SUB_RESELLER_TYPE_XPATH).click();
    cy.log("drop down should not be visible");
    cy.xpath(SUB_RESELLER_TYPE_DROP_DOWN_VISIBILE).should('not.exist');
  }

  static clickOnExportButton() {
    cy.log(`click on export button`);
    cy.xpath(EXPORT_BUTTON).click();
  }

  static clickOnDownloadButton() {
    cy.log(`click on download button`);
    cy.xpath(DOWNLOAD_BUTTON).click();
  }

  static verifyResellerTypeSettings(text) {
    cy.log(`verify reseller type settings`);
    cy.xpath(`//span[contains(text(),'${text}')]`).should('be.visible');
  }

  static selectRole(role) {
    cy.log('select role');
    if (role !== "") {
      cy.xpath(ROLE_DROPDOWN).select(role);
    }
  }
}

export default CreateResellerTypesPage;
