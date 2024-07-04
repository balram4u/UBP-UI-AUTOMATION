const USER_NAME_FIELD = "//div[@id='seamless-unified-toolbar']/div/label";
const LOGOUT_FIELD = "//li[contains(text(),'Logout')]";
const CLICK_USERNAME = "//div[@id='seamless-unified-toolbar']/button[@type='button'][2]";
const CLICK_CHANGE_PASSWORD = "//li[text()='Change Password']";
const ENTER_OLD_PASSWORD = "//input[@name='oldPassword']";
const ENTER_NEW_PASSWORD = "//input[@name='newPassword']";
const ENTER_CONFIRM_PASSWORD = "//input[@name='confirmPassword']";
const CLICK_UPDATE_BUTTON = "//button/span[text()='Update']";
const USERNAME = "(//input[@id= 'userId'])[1]";
const HAVING_TROUBLE_SIGNING_IN = "//a[@href='/login/recovery']";
const RECOVERY_HEADER = "//h1[text() = 'Recover your account']";
const FORGOT_PASSWORD = "//p[text() = 'Forgot Password ?']";
const USER_ID = "//label[text() = 'User Id']";
const MSISDN_LOGIN = "//button/span[text()='MSISDN Login']";
// const LOGOUT = "//button/span[text()='Logout']";
const RECOVERY_LINK = "//a[@href='/login/recovery']";
const NEXT_BUTTON = "//span[text() = 'Next']";
const VIA_SMS_BUTTON = "//span[text() = 'Via SMS']";
const VERIFY_OTP = "//span[text() = 'Verify OTP']";
const OTP_0 = "//input[@id='otp-input-box-0']";
const OTP_1 = "//input[@id='otp-input-box-1']";
const OTP_2 = "//input[@id='otp-input-box-2']";
const OTP_3 = "//input[@id='otp-input-box-3']";
const OTP_4 = "//input[@id='otp-input-box-4']";
const OTP_5 = "//input[@id='otp-input-box-5']";
const MSISDN_OPTION = "(//span[@class='MuiToggleButton-label'])[2]";
const PRODUCT_MENU = "//div/p[text()='PRODUCT']";

class PortalHomePage {
  static verify(username) {
    cy.wait(2000);
    cy.xpath(USER_NAME_FIELD).contains(username); // 2 seconds
  }

  static LogOut() {
    cy.xpath(CLICK_USERNAME, { timeout: 5000 }).click({ force: true });
    cy.logout(LOGOUT_FIELD);
  }

  static clickChangePassword() {
    cy.log('Click on change password option');
    cy.xpath(CLICK_USERNAME).click();
    cy.xpath(CLICK_CHANGE_PASSWORD).should('be.visible').click();
  }

  static enterChangePasswordDetails(password, newPassword, confirmPassword) {
    cy.log('Adding password details to perform change password operation');
    if (password !== "") {
      cy.xpath(ENTER_OLD_PASSWORD).type(password);
    }
    if (newPassword !== "") {
      cy.xpath(ENTER_NEW_PASSWORD).type(newPassword);
    }

    if (confirmPassword !== "") {
      cy.xpath(ENTER_CONFIRM_PASSWORD).type(confirmPassword);
    }
    cy.xpath(CLICK_UPDATE_BUTTON).click();
    cy.wait(1000);
  }

  static enterUsername(username) {
    cy.log('enter username');
    cy.wait(1000);
    cy.xpath(USERNAME).type(username);
    cy.wait(1000);
  }

  static clickOnHavingTroubleSigningIn() {
    cy.log('click on "having trouble signing in"');
    cy.xpath(HAVING_TROUBLE_SIGNING_IN).click();
  }

  static verifyRecoveryPage() {
    cy.log('verify recovery page');
    cy.url().should('contains', 'recovery');
    cy.xpath(RECOVERY_HEADER).should('be.visible');
  }

  static clickOnForgotPassword() {
    cy.log('click on forgot password');
    cy.wait(1000);
    cy.xpath(FORGOT_PASSWORD).click();
    cy.wait(1000);
  }

  static verifyUserIdLabel() {
    cy.log('verify user id label on clicking forgot possword');
    cy.xpath(USER_ID).should('be.visible');
  }

  static clickMSISDNLogin() {
    cy.log('click on MSISDN login');
    cy.xpath(MSISDN_LOGIN).click();
    cy.wait(1000);
  }

  static clickHavingTrouble() {
    cy.log('click having trouble option');
    cy.wait(1000);
    cy.xpath(RECOVERY_LINK).click();
    cy.wait(1000);
  }

  static clickNext() {
    cy.log('click on next');
    cy.xpath(NEXT_BUTTON).click();
    cy.wait(1000);
  }

  static clickSMSOption() {
    cy.log('click on sms option');
    cy.wait(1000);
    cy.xpath(VIA_SMS_BUTTON).click();
    cy.wait(1000);
  }

  static enterOTP() {
    cy.log('enter OTP 000000');
    cy.wait(2000);
    cy.xpath(OTP_0).type('0');
    cy.log(900);
    cy.xpath(OTP_1).type('0');
    cy.log(900);
    cy.xpath(OTP_2).type('0');
    cy.log(900);
    cy.xpath(OTP_3).type('0');
    cy.log(900);
    cy.xpath(OTP_4).type('0');
    cy.log(900);
    cy.xpath(OTP_5).type('0');
    cy.wait(1000);
  }

  static verifyOTP() {
    cy.log('verify otp');
    cy.wait(1000);
    cy.xpath(VERIFY_OTP).click();
    cy.wait(1000);
  }

  static clickMSISDNOption() {
    cy.log('click msisdn option');
    cy.xpath(MSISDN_OPTION).click({ force: true });
    cy.log(1000);
  }

  static providePasswordType(passwordType, password) {
    cy.log(`provide particular ${passwordType}`);
    cy.xpath(`//label[contains(text(),'${passwordType}')]/..//input`).clear().type(password);
  }

  static clickOnViewIcon(passwordType) {
    cy.log(`click on ${passwordType}`);
    cy.xpath(`//label[contains(text(),'${passwordType}')]/../..//*[local-name()='svg']`).click();
  }

  static verifyPasswordFormatText(passwordType) {
    cy.log(`verify password format `);
    cy.xpath(`//label[contains(text(),'${passwordType}')]/..//input`).should('have.attr', 'type', 'text');
  }

  static verifyPasswordFormatDot(passwordType) {
    cy.log(`verify password format `);
    cy.xpath(`//label[contains(text(),'${passwordType}')]/..//input`).should('have.attr', 'type', 'password');
  }

  static productShouldNotVisible() {
    cy.log(`product menu should not be visible `);
    cy.xpath(PRODUCT_MENU).should('not.exist');
  }

  static validateChangePasswordScreen() {
    cy.log('validate change password screen');
    cy.xpath(ENTER_OLD_PASSWORD).should('be.visible');
    cy.xpath(ENTER_NEW_PASSWORD).should('be.visible');
    cy.xpath(ENTER_CONFIRM_PASSWORD).should('be.visible');
  }

}

export default PortalHomePage;
