/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
const TXT_NAME = "//input[@name='name']";
const TXT_DESCRIPTION = "//textarea[@name='description']";
const TXT_MINPASSWORD = "//input[@name='minPasswordLength']";
const TXT_MAXPASSWORD = "//input[@name='maxPasswordLength']";
const TXT_REGEXP = "//input[@name='passwordRegexp']";
const DDL_CHANGEPOLICY = "select[id='change-policy-dropdown']";
const DDL_CREATEPOLICY = "select[id='create-policy-dropdown']";
const DDL_CHANGETEMPLATEKEY = "select[id='password-change-template-key-dropdown']";
const DDL_CREATETEMPLATEKEY = "select[id='create-template-key-dropdown']";
const DDL_LEGALCHAR = "select[id='legal-characters-dropdown']";
const DDL_ENCRYPTION = "select[id='encryption-format-policy-dropdown']";
const BTN_SUBMIT = "//button/span[text()='Submit']";
const BTN_UPDATE = "//button/span[text()='Update']";
const DELETE_BTN = "(//a[contains(@href,'/home/reseller/passwords/edit')]/../button)";
const CONFIRM_DELETE_POPUP = "//h6[contains(text(),'Delete Password Policy')]";
const RESET_BUTTON = "//button/span[text() = 'Reset']";
const SUBMIT_BUTTON = "//span[text()='Submit']";
const EXPORT_BUTTON = "//button/span[text()='Export']";
const DOWNLOAD_BUTTON = "//li[contains(text(),'Download')]";
const PASSWORD_EXPIRY_PERIOD = "//select[@id = 'password-expiry-period-policy-dropdown']";
const CREATE_MESSAGE = "//select[@id = 'create-message-dropdown']";
const PASSWORD_CONTROL = "//select[@id = 'password-control-dropdown']";
const MAX_INCORRECT_LOGINS = "//input[@name = 'maxIncorrectloginAttempt']";
const PASSWORD_HISTORY_LIMITS = "//input[@name = 'userPasswordsHistoryLimit']";
const BANNED_PASSWORDS = "//textarea[@name = 'bannedPasswords']";
const PAGE_TITLE = "//h4";
const SELECT_COLUMN_BUTTON = "//button[@aria-label='Select columns']";
const TABLE_PAGINATION = "(//div[contains(@class,'MuiTablePagination-toolbar')]/p)[2]";
const SCROLLABLE_AREA = "div.MuiDataGrid-window";
const NOT_AUTHORIZED = "//h2[text() = ' Not Authroized ']";
const PASSWORD_CHANGE_AT_FIRST_LOGIN = "//span[text()='Password change at first login']//..//input";

class CreatePasswordPolicyPage {
  static fillPasswordPOlicyName(name) {
    cy.xpath(TXT_NAME).clear().type(name);
  }

  static fillDescription(description) {
    if (description !== "") {
      cy.xpath(TXT_DESCRIPTION).clear().clear().type(description);
    }
  }

  static fillMinPassword(length) {
    if (length !== "") {
      cy.xpath(TXT_MINPASSWORD).clear().type(length);
    }
  }

  static fillMaxPassword(length) {
    if (length !== "") {
      cy.xpath(TXT_MAXPASSWORD).clear().type(length);
    }
  }

  static fillRegExp(value) {
    if (value !== "") {
      cy.xpath(TXT_REGEXP).clear().type(value);
    }
  }

  static selectChangePolicy(value) {
    if (value !== "") {
      cy.get(DDL_CHANGEPOLICY).select(value);
    }
  }

  static selectCreatePolicy(value) {
    if (value !== "") {
      cy.get(DDL_CREATEPOLICY).select(value);
    }
  }

  static selectChangeTempKey(value) {
    if (value !== "") {
      cy.get(DDL_CHANGETEMPLATEKEY).select(value);
    }
  }

  static selectCreateTempKey(value) {
    if (value !== "") {
      cy.get(DDL_CREATETEMPLATEKEY).select(value);
    }
  }

  static selectLegalChar(value) {
    if (value !== "") {
      cy.get(DDL_LEGALCHAR).select(value);
    }
  }

  static selectEncryption(value) {
    if (value !== "") {
      cy.get(DDL_ENCRYPTION).select(value);
    }
  }

  static clickOnSubmit() {
    cy.xpath(BTN_SUBMIT).click();
  }

  static clickOnUpdate() {
    cy.xpath(BTN_UPDATE).click();
  }

  static clickDelete() {
    cy.xpath(DELETE_BTN).click();
  }

  static verifyConfirmPopup() {
    cy.xpath(CONFIRM_DELETE_POPUP).should('be.visible');
  }

  static clickYesOrNo(option) {
    const el = `//span[contains(text(),'${option}')]`;
    cy.xpath(el).click();
  }

  static clickSubmit() {
    cy.log("Click submit");
    cy.xpath(SUBMIT_BUTTON).click();
    cy.wait(1000);
  }

  static clickReset() {
    cy.log("Click reset");
    cy.xpath(RESET_BUTTON).click();
    cy.wait(1000);
  }

  static verifyBlankPasswordPOlicyName() {
    cy.log('verify empty policy name');
    cy.xpath(TXT_NAME).should('be.empty');
  }

  static verifyblankDescription() {
    cy.log('verify empty policy description');
    cy.xpath(TXT_DESCRIPTION).should('be.empty');
  }

  static clickOnExportButton() {
    cy.log(`click on export button`);
    cy.xpath(EXPORT_BUTTON).click();
  }

  static clickOnDownloadButton() {
    cy.log(`click on download button`);
    cy.xpath(DOWNLOAD_BUTTON).click();
  }

  static selectPasswordExpirySelect(passwordExpiryPeriod) {
    if (passwordExpiryPeriod !== "") {
      cy.log('select password expiry period');
      cy.xpath(PASSWORD_EXPIRY_PERIOD).select(passwordExpiryPeriod);
    }
  }

  static selectCreateMessage(createMessage) {
    if (createMessage !== "") {
      cy.log('select crete message');
      cy.xpath(CREATE_MESSAGE).select(createMessage);
    }
  }

  static selectPasswordControl(passwordControl) {
    if (passwordControl !== "") {
      cy.log('select password control');
      cy.xpath(PASSWORD_CONTROL).select(passwordControl);
    }
  }

  static enterMaxIncorrectAttempts(maxIncorrectAttempts) {
    if (maxIncorrectAttempts !== "") {
      cy.log('enter maximum incorrrect attempts');
      cy.xpath(MAX_INCORRECT_LOGINS).clear().type(maxIncorrectAttempts);
    }
  }

  static enterPasswordHistoryLimits(passwordHistoryLimits) {
    if (passwordHistoryLimits !== "") {
      cy.log('enter password history limits');
      cy.xpath(PASSWORD_HISTORY_LIMITS).clear().type(passwordHistoryLimits);
    }
  }

  static enterBannedPasswords(bannedPasswords) {
    if (bannedPasswords !== "") {
      cy.log('enter password history limits');
      cy.xpath(BANNED_PASSWORDS).clear().type(bannedPasswords);
    }
  }

  static verifyPageTitle(pageTitle) {
    if (pageTitle !== "") {
      cy.log('verify page title');
      cy.xpath(PAGE_TITLE).should('include.text', pageTitle);
    }
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

  static scrollToBottomWithCondition() {
    cy.log('Scroll to bottom with condition');
    cy.xpath(TABLE_PAGINATION).invoke('text').then((value) => {
      value = value.split(" ")[2];
      if (parseInt(value, 10) > 9) {
        cy.get(SCROLLABLE_AREA).scrollTo('bottom');
      }
    });
    cy.wait(800);
  }

  static fetchCountBeforePolicyCreation() {
    cy.log('fetch count before policy creation');
    cy.xpath(TABLE_PAGINATION).invoke('text').then((beforeValue) => {
      beforeValue = beforeValue.split(" ")[2];
      cy.log(beforeValue);
      cy.task('setValue', beforeValue);
    });
  }

  static verifyCountAfterPolicyCreation() {
    cy.log('verify count after policy creation');
    cy.xpath(TABLE_PAGINATION).invoke('text').then((afterValue) => {
      afterValue = afterValue.split(" ")[2];
      cy.log(afterValue);
      cy.task('getValue').then((beforeValue) => {
        expect(parseInt(afterValue, 10)).to.be.greaterThan(parseInt(beforeValue, 10));
      });
    });
  }

  static fetchCountBeforePolicyDeletion() {
    cy.log('fetch count before policy deletion');
    cy.xpath(TABLE_PAGINATION).invoke('text').then((beforeValue) => {
      beforeValue = beforeValue.split(" ")[2];
      cy.log(beforeValue);
      cy.task('setValue', beforeValue);
    });
  }

  static verifyCountAfterPolicyDeletion() {
    cy.log('verify count after policy deletion');
    cy.xpath(TABLE_PAGINATION).invoke('text').then((afterValue) => {
      // eslint-disable-next-line prefer-destructuring
      afterValue = afterValue.split(" ")[2];
      cy.log(afterValue);
      cy.task('getValue').then((beforeValue) => {
        expect(parseInt(afterValue, 10)).to.be.lessThan(parseInt(beforeValue, 10));
      });
    });
  }

  static verifyNotAuthorized() {
    cy.log('verify not authorized screen is visible');
    cy.xpath(NOT_AUTHORIZED).should('be.visible');
  }

  static selectPasswordChangeAtFirstLoginOption(passowrdChangeAtFirstLogin) {
    cy.log('selecting password change at first login option');
    if (passowrdChangeAtFirstLogin == "YES") {
      cy.xpath(PASSWORD_CHANGE_AT_FIRST_LOGIN).click();
      cy.wait(2000);
    }
    if (passowrdChangeAtFirstLogin == "NO") {
      cy.xpath(PASSWORD_CHANGE_AT_FIRST_LOGIN).click();
      cy.wait(2000);
    }
  }

  static scrollToBottom() {
    cy.log('Scroll to down');
    cy.scrollTo(0, 500);
    cy.wait(800);
  }
}
export default CreatePasswordPolicyPage;
