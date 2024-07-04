import URL_PATH from '../../../common/Route';

const CREATE_RESELLER_ROLE = "//span[contains(text(),'Create Reseller Roles')]";
const CREATE_RESELLER_PASSWORD = "//span[contains(text(),'Create Password Policy')]";
const BTN_FILTER = "//button[@aria-label='Show filters']";
const DDL_SEARCHCOLUMN = "//select[@id='columns-filter-select']";
const TXT_SEARCHVALUE = "//label[text()='Value']/following-sibling::div/input";
// const RESELLER_ROLE_IN_TABLE = "//div[@data-field='roleName'][@aria-colindex='2']";
const VERIFY_DATA_ON_TABLE = "(//div[@data-field='roleName'])[2]";
// const PASSWORD_POLICY_IN_TABLE = "//div[@data-field='name'][@aria-colindex='2']";
const LEFT_MENU_RESELLER = "//p[text()='RESELLER']";
const LEFIT_MENU_VIEW_RESELLER_ROLE = "//p[text()='RESELLER ROLES']";
const LEFIT_MENU_VIEW_PASSWORD_POLICIES = "//p[text()='PASSWORD POLICIES']";
const OPERATOR_SELECT = "//select[@id='columns-operators-select']";
const DELETE_POPUP_YES_BUTTON = "(//button//span[contains(text(),'Yes')])[1]";
const DELETE_POPUP_NO_BUTTON = "(//button//span[text()='No'])[1]";
const FILTER_VALUE = "//input[@placeholder='Filter value']";
const FILTER_COLUMN = "//select[@id='columns-filter-select']";
const ENTER_RESELLER_NAME = "//input[@name='resellerName']";
const CLICK_SEARCH = "//button/span[text()='Search']";
const VERIFY_RESELLER_NAME = "//div[@data-rowindex='0' and @data-field='resellerName']";
const VERIFY_RESELLER_MSISDN = "//div[@data-rowindex='0' and @data-field='resellerMSISDN']";
const EXPORT_BUTTON = "(//span[text()='Export']/../../button)[4]";
const DOWNLOAD_BUTTON = "//li[contains(text(),'Download as CSV')]";
const RESELLER_NAME = "//input[@name='resellerName']";
const RESET_SEARCH = "//button/span[text() = 'Reset Search']";
const SEARCH = "//button/span[text() = 'Search']";
const RESELLER = "//p[text() = 'RESELLER']";

class ResellerHomePage {
  static clickOnResellerRolesUsingUrl() {
    cy.log("visit reseller role home page");
    cy.visit(URL_PATH.resellerRole);
    cy.wait(5000);
    cy.url().should('contains', URL_PATH.resellerRole);
  }

  static clickOnResellerRolesUsingLeftMenu() {
    cy.log("visit reseller role home page");
    cy.xpath(LEFT_MENU_RESELLER).should('be.visible');
    cy.xpath(LEFT_MENU_RESELLER).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_RESELLER).click();
    cy.xpath(LEFIT_MENU_VIEW_RESELLER_ROLE).click();
    cy.url().should('contains', URL_PATH.resellerRole);
  }

  static goTOResellerPasswordPoliciesUsingLeftMenu() {
    cy.log("Now visit reseller password policies page");
    cy.xpath(LEFT_MENU_RESELLER).should('be.visible');
    cy.xpath(LEFT_MENU_RESELLER).click();
    cy.wait(100);
    cy.xpath(LEFT_MENU_RESELLER).click();
    cy.xpath(LEFIT_MENU_VIEW_PASSWORD_POLICIES).click();
    cy.url().should('contains', URL_PATH.resellerPasswordPolicy);
  }

  static goTOResellerPasswordPoliciesUsingUrl() {
    cy.log("Now visit reseller password policies page");
    cy.visit(URL_PATH.resellerPasswordPolicy);
    cy.url().should('contains', URL_PATH.resellerPasswordPolicy);
  }

  static clickOnCreateResellerRole() {
    cy.xpath(CREATE_RESELLER_ROLE).click();
  }

  static clickOnCreateResellerPasswordPolicy() {
    cy.xpath(CREATE_RESELLER_PASSWORD).click();
  }

  static clickOnFilter() {
    cy.xpath(BTN_FILTER).click({
      multiple: true,
    });
  }

  static selectFilterColumn(filterColumn) {
    cy.xpath(FILTER_COLUMN).select(filterColumn);
  }

  static enterFilterValue(filterValue) {
    cy.xpath(FILTER_VALUE).clear().type(filterValue);
  }

  static selectSearchColumn(columnName) {
    cy.xpath(DDL_SEARCHCOLUMN).select(columnName);
  }

  static selectOperator(value) {
    cy.log('Select operator');
    cy.log(value);
    cy.xpath(OPERATOR_SELECT).select(value);
  }

  static fillSearchValue(value) {
    cy.xpath(TXT_SEARCHVALUE).clear().type(value);
    cy.wait(2000);
  }

  static verifyDataInTable(resellerRole) {
    cy.xpath(VERIFY_DATA_ON_TABLE).then((table) => {
      const id = table.text();
      cy.log(id);
      expect(id).equal(resellerRole);
    });
  }

  static clickOnViewOfResellerPasswordPolicy(policyName) {
    cy.log("click on edit button");
    cy.xpath(`(//div[@data-value='${policyName}']/following-sibling::div[@data-field='actions']//*[local-name()='svg'])[1]`).scrollIntoView().click();
  }

  static clickOnEditOfResellerPasswordPolicy(policyName) {
    cy.log("click on view button");
    cy.xpath(`(//div[@data-value='${policyName}']/following-sibling::div[@data-field='actions']//*[local-name()='svg'])[2]`).scrollIntoView().click();
  }

  static clickOnDeleteOfResellerPasswordPolicy(policyName) {
    cy.log("click on view button");
    cy.xpath(`(//div[@data-value='${policyName}']/following-sibling::div[@data-field='actions']//*[local-name()='svg'])[3]`).scrollIntoView().click();
  }

  static clickOnEditOfResellerRole(role) {
    cy.xpath(`//div[@data-field='roleName'and @data-value='${role}']/following-sibling::div//button[2]`).click();
  }

  static clickOnViewOfResellerRole(role) {
    cy.xpath(`//div[@data-field='roleName'and @data-value='${role}']/following-sibling::div//button[1]`).click();
  }

  static clickOnDeleteButtonForRole(role) {
    cy.log(`Clicking on Delete button for ROLE NAME =${role}`);
    cy.xpath(`//div[@data-field='roleName'and @data-value='${role}']/following-sibling::div//button[3]`).click();
  }

  static clickOnDeleteRolePopupYesButton() {
    cy.log('Clicking on Delete Reseller Role Popup Yes Button');
    cy.wait(1000);
    cy.xpath(DELETE_POPUP_YES_BUTTON).click({ force: true });
  }

  static clickOnDeleteRolePopupNoButton() {
    cy.log('Clicking on Delete Reseller Role Popup Yes Button');
    cy.wait(1000);
    cy.xpath(DELETE_POPUP_NO_BUTTON).click({ force: true });
  }

  static enterResellerName(resellerName) {
    cy.log('Enter reseller name');
    cy.xpath(ENTER_RESELLER_NAME).type(resellerName);
  }

  static clickSearch() {
    // cy.wait(300);
    cy.log('Click search button');
    cy.intercept("POST", "/api/dms/auth/searchResellerBasicInfoByAttribute**").as("getResellerBasicInfoByAttr");
    cy.xpath(CLICK_SEARCH, { timeout: 10000 }).click();
    cy.wait("@getResellerBasicInfoByAttr");
  }

  static verifyResellerName(resellerName) {
    cy.xpath(VERIFY_RESELLER_NAME).then((table) => {
      const name = table.text();
      cy.log(name);
      expect(name).equal(resellerName);
    });
  }

  static verifyResellerMSISDN(msisdn) {
    cy.xpath(VERIFY_RESELLER_MSISDN).then((table) => {
      const MSISDN = table.text();
      cy.log(MSISDN);
      expect(MSISDN).equal(msisdn);
    });
  }

  static clickOnExportButton() {
    cy.log(`click on export button`);
    cy.xpath(EXPORT_BUTTON).click();
  }

  static clickOnDownloadButton() {
    cy.log(`click on download button`);
    cy.xpath(DOWNLOAD_BUTTON).click();
  }

  static getResellerParent() {
    cy.log('fetch reseller parent name');
    cy.xpath('(//div[@data-field="parentResellerName"])[2]').invoke('attr', 'data-value').then((PARENT_NAME) => {
      cy.task('setValue', PARENT_NAME);
    });
  }

  static getResellerMSISDN() {
    cy.log('fetch reseller msisdn');
    cy.xpath('(//div[@data-field="resellerMSISDN"])[2]').invoke('attr', 'data-value').then((MSISDN) => {
      cy.task('setValue', MSISDN);
    });
  }

  static searchResellerParent() {
    cy.log('search for reseller parent');
    cy.task('getValue').then((PARENT_NAME) => {
      cy.xpath(RESET_SEARCH).click();
      cy.wait(1000);
      cy.xpath(RESELLER_NAME).type(PARENT_NAME);
      cy.xpath(SEARCH).click();
      cy.wait(1000);
    });
  }

  // eslint-disable-next-line camelcase
  static compareRSO_MSISDN() {
    cy.log('compare rso number and msisdn');
    cy.task('getValue').then((PARENT_MSISDN) => {
      cy.xpath('//input[@id = "rso_number-input"]').invoke('attr', 'value').then((RSO) => {
        cy.wait(600);
        expect(RSO).to.equal(PARENT_MSISDN);
      });
    });
  }

  // eslint-disable-next-line max-len
  static verifyResellerMenuOptions(resellerMenu1, resellerMenu2, resellerMenu3, resellerMenu4, resellerMenu5, resellerMenu6) {
    cy.log('verify reseller options');
    cy.xpath(RESELLER).click();
    if (resellerMenu1 !== "") {
      cy.xpath(`//p[text() = '${resellerMenu1}']`).should('be.visible');
    }
    if (resellerMenu2 !== "") {
      cy.xpath(`//p[text() = '${resellerMenu2}']`).should('be.visible');
    }
    if (resellerMenu3 !== "") {
      cy.xpath(`//p[text() = '${resellerMenu3}']`).should('be.visible');
    }
    if (resellerMenu4 !== "") {
      cy.xpath(`//p[text() = '${resellerMenu4}']`).should('be.visible');
    }
    if (resellerMenu5 !== "") {
      cy.xpath(`//p[text() = '${resellerMenu5}']`).should('be.visible');
    }
    if (resellerMenu6 !== "") {
      cy.xpath(`//p[text() = '${resellerMenu6}']`).should('be.visible');
    }
  }
}
export default ResellerHomePage;
