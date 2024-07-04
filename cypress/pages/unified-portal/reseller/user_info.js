const ROLES = "#role-id-dropdown";
const USER_ID = "(//input[@id='user-id-input-box'])[1]";
const USER_IDS = "//input[@id='user-id-input-box']";
const USER_PHONE = "#user-phone-input-box";
const USER_EMAIL = "(//input[@id='user-email-input-box'])[1]";
const USER_PASSWORD = "(//input[@id='user-password-input-box'])[1]";
const NEXT_BUTTON = "//span[text()='Next']/..";
const CLICK_ADD_NEW_USER = "//span[text()='Add new user']";
const SCROLLABLE_AREA = "(//div[contains(@class,'MuiDialogContent-root')])[2]";
const SELECT_USER_ROLE = "(//select[@id='roles-drop-down'])[1]";
const CLICK_SUBMIT_USER = "//span[text()='Submit user']";
const CLICK_SUBMIT = "//span[text()='Submit']";
const USER_ROLE_WITH_INDEX = "(//select[@id='role-id-dropdown'])[INDEX]";
const USER_ID_WITH_INDEX = "(//input[@id='user-id-input-box'])[INDEX]";
const USER_PHONE_WITH_INDEX = "(//input[@id='user-phone-input-box'])[INDEX]";
const USER_EMAIL_WITH_INDEX = "(//input[@id='user-email-input-box'])[INDEX]";
const USER_PASSWORD_WITH_INDEX = "(//input[@id='user-password-input-box'])[INDEX]";

class UserInfo {
  static selectroles(roles) {
    if (roles !== "") {
      cy.log("Select rolest");
      cy.get(ROLES).select(roles);
    }
  }

  static enteruserid(userid) {
    if (userid !== "") {
      cy.log("Enter userid");
      cy.xpath(USER_ID).type(userid);
    }
  }

  static enteruserphone(userphone) {
    if (userphone !== "") {
      cy.log("enter userphone");
      cy.get(USER_PHONE).clear().type(userphone);
    }
  }

  static enteruseremail(useremail) {
    if (useremail !== "") {
      cy.log("enter useremail");
      cy.xpath(USER_EMAIL).clear().type(useremail);
    }
  }

  static enteruserpassword(userpassword) {
    if (userpassword !== "") {
      cy.log("Entering userpassword");
      cy.xpath(USER_PASSWORD).clear().type(userpassword);
    }
  }

  static validateResellerIdDisabled() {
    cy.log('Validate resellerId should be disable');
    cy.xpath(NEXT_BUTTON).click({
      force: true
    });
    cy.wait(900);
    cy.xpath(NEXT_BUTTON).click({
      force: true
    });
    cy.wait(900);

    cy.xpath(USER_IDS).each(($el) => {
      cy.wrap($el).should('be.disabled');
    });
  }

  static clickAddNewUser() {
    cy.log('click add new user button');
    cy.xpath(CLICK_ADD_NEW_USER).click();
  }

  static scrollToTop() {
    cy.log('Scroll to top');
    cy.xpath(SCROLLABLE_AREA).scrollTo('top');
    cy.wait(800);
  }

  static selectUserRole(userRole) {
    cy.log('Select user role');
    cy.xpath(SELECT_USER_ROLE).select(userRole);
  }

  static enterUserID(userID) {
    cy.log('enter user id');
    if (userID !== "") {
      cy.log("enter user id");
      cy.xpath(USER_ID).type(userID);
    }
  }

  static enterUserEmail(userEmail) {
    cy.log('enter email');
    if (userEmail !== "") {
      cy.log("enter user email");
      cy.xpath(USER_EMAIL).type(userEmail);
    }
  }

  static enterUserPassword(userPassword) {
    cy.log('enter password');
    if (userPassword !== "") {
      cy.log("enter user password");
      cy.xpath(USER_PASSWORD).type(userPassword);
    }
  }

  static clickSubmitUser() {
    cy.log('click submit user button');
    cy.xpath(CLICK_SUBMIT_USER).click();
  }

  static clickSubmit() {
    cy.log('click submit button');
    cy.xpath(CLICK_SUBMIT).click({
      force: true
    });
  }

  static addNewUser(userRole, userID, userPhone, userEmail, userPassword, count) {
    if (userRole !== "") {
      cy.log('Select user role');
      cy.xpath(USER_ROLE_WITH_INDEX.replace("INDEX", count)).select(userRole);
    }

    if (userID !== "") {
      cy.log("enter user id");
      cy.xpath(USER_ID_WITH_INDEX.replace("INDEX", count)).type(userID);
    }

    if (userPhone !== "") {
      cy.log("enter user phone");
      cy.xpath(USER_PHONE_WITH_INDEX.replace("INDEX", count)).type(userPhone);
    }

    if (userEmail !== "") {
      cy.log("enter user email");
      cy.xpath(USER_EMAIL_WITH_INDEX.replace("INDEX", count)).type(userEmail);
    }

    if (userPassword !== "") {
      cy.log("enter user password");
      cy.xpath(USER_PASSWORD_WITH_INDEX.replace("INDEX", count)).type(userPassword);
    }
  }
}

export default UserInfo;