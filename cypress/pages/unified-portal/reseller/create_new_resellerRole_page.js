const TXT_ROLENAME = "//input[@name='roleName']";
const TXT_IMPORTID = "//input[@name='importId']";
const TXT_ADDRESSLOCK = "//input[@name='addressLock']";
const TXT_USERIDREGEXP = "//input[@name='userIdRegexp']";
const DDL_PASSWORDPOLICY = "select[id='password-policies-drop-down']";
const TXT_ROLEDESCRIPTION = "//textarea[@name='roleDescription']";
const BTN_SUBMIT = "//span[text()='Submit']";
const ALERTMESSAGE = "#notistack-snackbar";
const BTN_UPDATE = "//button/span[text()='Update']";
const BTN_CLOSE = "//button/span[text()='Close']";
const SUBMIT_BUTTON = "//span[text()='Submit']";
const RESET_BUTTON = "//button/span[text() = 'Reset']";
const EXPORT_BUTTON = "//button/span[text()='Export']";
const DOWNLOAD_BUTTON = "//li[contains(text(),'Download')]";
const SELECT_COLUMN_BUTTON = "//button[@aria-label='Select columns']";
const TABLE_ROWS = "//div[@data-id]";
const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "select[id=columns-filter-select]";
const OPERATOR_SELECT = "select[id=columns-operators-select]";
const FILTER_VALUE = '//div[@class="MuiFormControl-root MuiDataGridFilterForm-filterValueInput"]//input[@type="text"]';
class CreateNewResellerRolePage {
  static fillRoleName(name) {
    if (name !== "") {
      cy.xpath(TXT_ROLENAME).clear().type(name);
    }
  }

  static fillImportId(importId) {
    if (importId !== "") {
      cy.xpath(TXT_IMPORTID).clear().type(importId);
    }
  }

  static fillAddressLock(addressLock) {
    if (addressLock !== "") {
      cy.xpath(TXT_ADDRESSLOCK).clear().type(addressLock);
    }
  }

  static fillUserIdRegExp(userId) {
    if (userId !== "") {
      cy.xpath(TXT_USERIDREGEXP).clear().type(userId);
    }
  }

  static fillDescription(description) {
    if (description !== "") {
      cy.xpath(TXT_ROLEDESCRIPTION).clear().type(description);
    }
  }

  static selectPasswordPolicy(policy) {
    cy.get(DDL_PASSWORDPOLICY).select(policy);
  }

  static fillRoleDescription(description) {
    cy.xpath(TXT_ROLEDESCRIPTION).clear().type(description);
  }

  static clicOnSubmit() {
    cy.xpath(BTN_SUBMIT).click();
  }

  static verifySuccessfulMessage(message) {
    cy.get(ALERTMESSAGE).then((alert) => {
      const text = alert.text();
      cy.log(text);
      expect(text).contains(message);
    });
    cy.log("It is done");
  }

  static clickOnUpdate() {
    cy.xpath(BTN_UPDATE).click();
  }

  static verifyResellerRoleDetails(roleName, importId, addressLock, userId, description) {
    cy.log("Verifying Reseller role name");
    cy.xpath(TXT_ROLENAME).invoke('attr', 'value').should('contain', roleName);
    cy.log("Verifying Import Id");
    cy.xpath(TXT_IMPORTID).invoke('attr', 'value').should('contain', importId);

    if (addressLock !== "") {
      cy.log("Verifying address lock");
      cy.xpath(TXT_ADDRESSLOCK).should('have.value', addressLock);
    }

    if (userId !== "") {
      cy.log("Verifying user id regexp");
      cy.xpath(TXT_USERIDREGEXP).invoke('attr', 'value').should('contain', userId);
    }

    if (description !== "") {
      cy.log("Verifying Reseller role description");
      cy.xpath(TXT_ROLEDESCRIPTION).should('have.text', description);
    }
  }

  static clickOnClose() {
    cy.xpath(BTN_CLOSE).click();
  }

  static clickSubmit() {
    cy.log("Click submit");
    cy.xpath(SUBMIT_BUTTON).click();
    cy.wait(1000);
  }

  static clickReset() {
    cy.log("Click submit");
    cy.xpath(RESET_BUTTON).click();
    cy.wait(1000);
  }

  static verifyEmptyResellerTypeName() {
    cy.xpath(TXT_ROLENAME).should('be.empty');
  }

  static verifyEmptyResellerImportId() {
    cy.xpath(TXT_IMPORTID).should('be.empty');
  }

  static clickOnExportButton() {
    cy.log(`click on export button`);
    cy.xpath(EXPORT_BUTTON).click();
  }

  static clickOnDownloadButton() {
    cy.log(`click on download button`);
    cy.xpath(DOWNLOAD_BUTTON).click();
  }

  static clickOnSelectColumn() {
    cy.log('click on select column button');
    cy.xpath(SELECT_COLUMN_BUTTON).click();
  }

  static tableColumnEnable(tableColumnName) {
    cy.log(`enable table column "${tableColumnName}"`);
    cy.xpath(`//span[text()='${tableColumnName}']/preceding-sibling::span//input[@type='checkbox']`).check();
  }

  static tableColumnDisable(tableColumnName) {
    cy.log(`disable table column "${tableColumnName}"`);
    cy.xpath(`//span[text()='${tableColumnName}']/preceding-sibling::span//input[@type='checkbox']`).uncheck();
  }

  static verifyTableColumnEnabled(tableColumnName) {
    cy.log(`verify table column "${tableColumnName}" enabled`);
    cy.xpath(`//div[@class='MuiDataGrid-columnsContainer']//div[text()='${tableColumnName}']`).should('be.visible');
  }

  static verifyTableColumnDisabled(tableColumnName) {
    cy.log(`verify table column "${tableColumnName}" disabled`);
    cy.xpath(`//div[@class='MuiDataGrid-columnsContainer']//div[text()='${tableColumnName}']`).should('not.exist');
  }

  static verifyImportIdDisabled() {
    cy.log('verify import id is not editable');
    cy.xpath(TXT_IMPORTID).should('be.disabled');
  }

  static verifyEmptyResellerRolesTable() {
    cy.log('verify reseller roles table not visible');
    cy.xpath(TABLE_ROWS).should('not.exist');
  }

  static selectFilterColumn(columnName) {
    cy.log('select column');
    cy.get(COLUMN_SELECT).select(columnName);
  }

  static selectFilterOption(option) {
    cy.log('select filter option');
    cy.get(OPERATOR_SELECT).select(option);
  }

  static typeFilterValue(value) {
    cy.log('type filter value');
    cy.xpath(FILTER_VALUE).type(value);
  }

  static clickOnFilters() {
    cy.log('click on filters');
    cy.xpath(FILTER).click();
  }

  static verifyResellerType(resellerType) {
    cy.log('verify reseller type');
    cy.xpath(`//div[@data-value="${resellerType}"]/..`).should('be.visible');
  }
}
export default CreateNewResellerRolePage;
