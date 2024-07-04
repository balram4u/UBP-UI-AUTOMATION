const USER_ID_FIELD = "//input[@id='userId']";
const PASSWORD_BUTTON = "//input[@id='password']";
const SUBMIT_BUTTON = "(//span[contains(text(),'Login')])[1]";
const LOGIN_BUTTON = "(//span[contains(text(),'Login')])[2]";
const NEXT_BUTTON = 'span:contains("Next")';

class PortalLoginPage {
  static visit() {
    cy.log('Opening portal');
    cy.openPortal();
  }

  static login(username, password) {
    cy.wait(900);
    cy.get('body').then((body) => {
      if (body.find(NEXT_BUTTON).length > 0) {
        cy.intercept("POST", "auth/v2/verify-user").as("verifyUser");
        cy.xpath(USER_ID_FIELD, { timeout: 5000 }).clear().type(username);
        cy.get(NEXT_BUTTON, { timeout: 5000 }).click();
        cy.wait("@verifyUser");
        cy.wait(3000);
        cy.xpath(PASSWORD_BUTTON, { timeout: 30000 }).clear().type(password);
        cy.intercept("POST", "login-backend").as("loginBackend");
        cy.intercept("GET", "api/access/v1/features/resellerType/**").as("getFeatures");
        cy.intercept("POST", "api/dms/auth/getResellerInfo").as("getResellerInfo");
        cy.intercept("GET", "api/bi-engine/v1/metadata**").as("getBiMetadata");
        cy.xpath(SUBMIT_BUTTON, { timeout: 5000 }).click();
        cy.wait(["@loginBackend", "@getFeatures", "@getResellerInfo", "@getBiMetadata"]);
      } else {
        cy.login(USER_ID_FIELD, username, PASSWORD_BUTTON, password, SUBMIT_BUTTON);
      }
    });
  }

  static loginWithBlockedUser(username, password) {
    cy.log(`username ${username}passowrd${password}`);
    cy.wait(900);
    cy.xpath('//body').then((body) => {
      if (body.find(NEXT_BUTTON).length > 0) {
        cy.xpath(USER_ID_FIELD).clear().type(username);
        cy.get(NEXT_BUTTON).click();
        cy.xpath(PASSWORD_BUTTON).clear().type(password);
        cy.xpath(SUBMIT_BUTTON).click();
      } else {
        cy.login(USER_ID_FIELD, username, PASSWORD_BUTTON, password, SUBMIT_BUTTON);
      }
    });
  }

  static loginWithMSISDN(username, password) {
    cy.log('login with blocked user', username, password);
    if (username != "" && password != "") {
      cy.xpath(USER_ID_FIELD).clear().type(username);
      cy.xpath(PASSWORD_BUTTON).clear().type(password, { log: false });
    }
    cy.xpath(LOGIN_BUTTON).click();
    cy.wait(1000);
  }

  static loginWithInvalidMSISDN(username, password) {
    cy.log('login with blocked user', username, password);
    if (username != "" && password != "") {
      cy.xpath(USER_ID_FIELD).clear().type(username);
      cy.xpath(PASSWORD_BUTTON).clear().type(password, { log: false });
    }
    cy.xpath(LOGIN_BUTTON).click();
  }

  static loginWithInValidUser(username) {
    cy.log(`username ${username}`);
    cy.wait(900);
    cy.xpath('//body').then((body) => {
      if (body.find(NEXT_BUTTON).length > 0) {
        cy.xpath(USER_ID_FIELD).clear().type(username);
        cy.get(NEXT_BUTTON).click();
      }
    });
  }

  static loginWithInValidPassword(username, password) {
    cy.wait(2000);
    cy.xpath('//body').then((body) => {
      if (body.find(NEXT_BUTTON).length > 0) {
        cy.xpath(USER_ID_FIELD).clear().type(username);
        cy.get(NEXT_BUTTON).click();
        cy.xpath(PASSWORD_BUTTON).clear().type(password);
        cy.xpath(SUBMIT_BUTTON).click();
      } else {
        cy.login(USER_ID_FIELD, username, PASSWORD_BUTTON, password, SUBMIT_BUTTON);
      }
    });
  }

  static loginWithBlankUser(username) {
    cy.wait(5000);
    cy.xpath('//body').then((body) => {
      if (body.find(NEXT_BUTTON, { timeout: 5000 }).length > 0) {
        cy.get(NEXT_BUTTON, { timeout: 5000 }).click();
      }
    });
  }

  static loginCredentials(userName, password) {
    if (userName != "") {
      cy.xpath(USER_ID_FIELD).clear().type(userName);
    }
    if (password != "") {
      cy.xpath(PASSWORD_BUTTON).clear().type(password);
    }
    cy.xpath(SUBMIT_BUTTON).click();
    cy.wait(900);
  }
}

export default PortalLoginPage;
