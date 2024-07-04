const ADD_MEMBER = "(//div[@class='MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth']/div/input)[2]";
const ADD_ADMIN = "(//div[@class='MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth']/div/input)[3]";
const ADD_MANAGER = "(//div[@class='MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth']/div/input)[4]";
const UPDATE_BUTTON = "//span[contains(text(),'Update')]";
const MEMBER = "//*[@id='group-member-add-button']";
const SELECT_ALL_MEMBERS_CHECKBOX = "(//input[@aria-label='Select All Rows checkbox'])[1]";
const SELECT_ALL_ADMINS_CHECKBOX = "(//input[@aria-label='Select All Rows checkbox'])[2]";
const DELETE_SELECTED_MEMBERS = "//span[contains(text(),'Delete Selected Members')]";
const DELETE_SELECTED_ADMINS = "//span[contains(text(),'Delete Selected Admins')]";
const DELETE_PERSON_ICON = "//span[contains(text(),'person_remove')]";
const LENGTH_MEMBER = "//div[contains(@class,'MuiDataGrid-row')]//div[@role='cell' and @aria-colindex='8']";
const LENGTH_ADMIN = "//div[@class='MuiDataGrid-viewport']/div/div";
const ADMIN = "//*[@id='group-admin-add-button']";
const MANAGER = "//div[6]/button/span[@class='MuiButton-label']";
const XPATH_MEMBER = "//div[x]/div[3]/div[1]/div[2]/button[2]";
const XPATH_ADMIN = "//div[x]/div[3]/div[1]/div[2]/button[2]";
const CLOSE_ALERTMESSAGE = "//button/span/span[text()='close']";
const DELETE_BUTTON_YES = "//p[contains(text(),'delete')]/ancestor::div[@id='dialog-description']/descendant::span[text()='Yes']";
const CLICK_FROM_DATE_PICKER = "(//button[@aria-label='change date']//*[local-name()='svg'])[1]";
const CLICK_TO_DATE_PICKER = "(//button[@aria-label='change date']//*[local-name()='svg'])[2]";
const SELECT_DATE = "//button[contains(@class,'MuiPickersDay-daySelected')]";
const SELECT_MONTH = "//div[contains(@class,'MuiPickersMonth-monthSelected')]";
const SELECT_YEAR = "//div[contains(@class,'MuiPickersYear-yearSelected')]";
const VERIFY_MEMEMBER_LIST = "//h6[contains(text(),'Member')]/..//div[contains(@class,'MuiDataGrid-row')][1]";
const VERIFY_ADMIN_LIST = "//h6[contains(text(),'Admin')]/..//div[contains(@class,'MuiDataGrid-row')][1]";
const REMOVE_ADMIN = "//div/label[text()='Add Admin']/../div/div[@class='MuiChip-root MuiAutocomplete-tag MuiChip-deletable']/*[local-name()='svg']";
const REMOVE_MEMBER = "//div/label[text()='Add Member']/../div/div[@class='MuiChip-root MuiAutocomplete-tag MuiChip-deletable']/*[local-name()='svg']";
const CLICK_MEMBER_FILTER = "(//span[contains(text(),'Filters')])[1]";
const CLICK_ADMIN_FILTER = "(//span[contains(text(),'Filters')])[2]";
const ADD_MEMBER_MSISDN = "//*[@id='edit-group-add-member-input-box']";
const MSISDN_TOGGLE = "//*[@id='edit-group-switch']";

class EditGroupPage {
  static addMember(member) {
    cy.log('add member in the group');
    if (member !== "") {
      const list = member.split(",");
      for (let i = 0; i < list.length; i += 1) {
        cy.xpath(ADD_MEMBER).type(list[i]).type('{downArrow}').type('{enter}');
        cy.wait(900);
      }
      cy.xpath(MEMBER).click();
      cy.log("Closing alert message ");
      cy.wait(4000);
      // cy.xpath(CLOSE_ALERTMESSAGE).click({
      //   multiple: true
      // });
      cy.log("It is done");
    }
  }

  static addManager(manager) {
    cy.log('add manager in the group');
    if (manager !== "") {
      const list = manager.split(",");
      for (let i = 0; i < list.length; i += 1) {
        cy.xpath(ADD_MANAGER).type(list[i]).type('{downArrow}').type('{enter}');
        cy.wait(900);
      }
      cy.xpath(MANAGER).click();
      cy.log("Closing alert message ");
      cy.wait(4000);
      // cy.xpath(CLOSE_ALERTMESSAGE).click({
      //   multiple: true
      // });
      cy.log("It is done");
    }
  }

  static aaddAdmin(admin) {
    cy.log('add admin in the group');
    if (admin !== "") {
      const list = admin.split(",");
      cy.log(admin);
      for (let i = 0; i < list.length; i += 1) {
        cy.xpath(ADD_ADMIN).type(list[i]).type('{downArrow}').type('{enter}');
        cy.wait(900);
      }
      cy.xpath(ADMIN).click();
      cy.log("Closing alert message ");
      cy.wait(4000);
      // cy.xpath(CLOSE_ALERTMESSAGE).click({
      //   multiple: true
      // });
      cy.log("It is done");
    }
  }

  static addMemberMSISDN(member) {
    cy.log('add member in the group');
    if (member !== "") {
      const list = member.split(",");
      for (let i = 0; i < list.length; i += 1) {
        cy.xpath(ADD_MEMBER_MSISDN).type(list[i]).type('{downArrow}').type('{enter}');
        cy.wait(900);
      }
      cy.xpath(MEMBER).click();
      cy.log("Closing alert message ");
      cy.wait(4000);
      // cy.xpath(CLOSE_ALERTMESSAGE).click({
      //   multiple: true
      // });
      cy.log("It is done");
    }
  }

  static deleteMembersAndAdmins() {
    cy.log('delete member and admin from the group');
    cy.wait(1000);
    cy.xpath(SELECT_ALL_MEMBERS_CHECKBOX).eq(0).click();
    cy.wait(1000);
    cy.xpath(DELETE_SELECTED_MEMBERS).click();
    cy.wait(1000);
    cy.xpath(LENGTH_MEMBER).then((tr) => {
      const l1 = tr.length;
      cy.log(`the lenght of manager${l1 + 2}`);
      const updateMember = XPATH_MEMBER.replace('x', l1 + 2);
      cy.log(updateMember);
      cy.xpath(updateMember).click();
    });
    cy.log("Closing alert message ");
    cy.xpath(CLOSE_ALERTMESSAGE).click();
    cy.log("It is done");

    cy.wait(1000);
    cy.xpath(SELECT_ALL_ADMINS_CHECKBOX).eq(1).click();
    cy.wait(1000);
    cy.xpath(DELETE_SELECTED_ADMINS).click();
    cy.wait(1000);
    cy.xpath(LENGTH_ADMIN).then((tr) => {
      const l2 = tr.length;
      cy.log(`the lenght of amdin${l2}${2}`);
      const updateAdmin = XPATH_ADMIN.replace('x', l2 + 2);
      cy.log(updateAdmin);
      cy.xpath(updateAdmin).click();
    });
    cy.log("Closing alert message ");
    cy.xpath(CLOSE_ALERTMESSAGE).click();
    cy.log("It is done");
    cy.wait(1000);
  }

  static deleteMembersAndAdminsLists() {
    cy.log('delete member  from the group');
    cy.wait(1000);
    cy.xpath(SELECT_ALL_MEMBERS_CHECKBOX).scrollIntoView().click();
    cy.wait(1000);
    cy.xpath(DELETE_SELECTED_MEMBERS).click();
    cy.wait(1000);
    cy.xpath(DELETE_BUTTON_YES).its('length').then((Length) => {
      const size = Length;
      cy.log(size);
      cy.xpath(`(${DELETE_BUTTON_YES})[${size}]`).click();
    });

    cy.log('delete  admin from the group');
    cy.wait(1000);
    cy.xpath(SELECT_ALL_ADMINS_CHECKBOX).scrollIntoView().click();
    cy.wait(1000);
    cy.xpath(DELETE_SELECTED_ADMINS).click();
    cy.wait(1000);
    cy.xpath(DELETE_BUTTON_YES).its('length').then((Length) => {
      const size = Length;
      cy.log(size);
      cy.xpath(`(${DELETE_BUTTON_YES})[${size}]`).click();
    });
  }

  static clickOnUpdate() {
    cy.log('click on updtae button');
    cy.xpath(UPDATE_BUTTON).click();
    cy.wait(1000);
  }

  static selectFromDate() {
    cy.log('selecting date');
    cy.xpath(CLICK_FROM_DATE_PICKER).click();
    cy.xpath(SELECT_DATE).click();
  }

  static selectToDate() {
    cy.log('selecting date');
    cy.xpath(CLICK_TO_DATE_PICKER).click();
    cy.xpath(SELECT_DATE).click();
  }

  static selectYearMonthDate() {
    cy.log('selecting year, month, date');
    cy.xpath(CLICK_TO_DATE_PICKER).click();
    cy.xpath(SELECT_YEAR).click();
    cy.xpath(SELECT_MONTH).click();
    cy.xpath(SELECT_DATE).click();
    cy.wait(1000);
  }

  static verifyMembersList() {
    cy.log('verify Members List inside table');
    cy.xpath(VERIFY_MEMEMBER_LIST).scrollIntoView();
    cy.xpath(VERIFY_MEMEMBER_LIST).should('be.visible');
  }

  static verifyAdminsList() {
    cy.log('verify Admins List inside table');
    cy.xpath(VERIFY_ADMIN_LIST).scrollIntoView();
    cy.xpath(VERIFY_ADMIN_LIST).should('be.visible');
  }

  static addInvalidAdmin(admin) {
    cy.log('add admin in the group');
    cy.xpath(ADD_ADMIN).type(admin).type('{downArrow}').type('{enter}');
    cy.xpath(ADMIN).click();
    cy.xpath(REMOVE_ADMIN).click();
  }

  static addInvalidMember(member) {
    cy.log('add admin in the group');
    cy.xpath(ADD_MEMBER).type(member).type('{downArrow}').type('{enter}');
    cy.xpath(MEMBER).click();
    cy.xpath(REMOVE_MEMBER).click();
  }

  static deletePersonIcon() {
    cy.log('deleting individual item');
    cy.xpath(DELETE_PERSON_ICON).scrollIntoView().click();
    cy.xpath(DELETE_BUTTON_YES).click();
  }

  static verifyListNotExist(param) {
    cy.log('list should not exist');
    cy.xpath(`//div[contains(text(),'${param}')]`).should('not.exist');
  }

  static clickOnMemberFilter() {
    cy.log('filter member list');
    cy.xpath(CLICK_MEMBER_FILTER).should('be.visible').click();
  }

  static clickOnAdminFilter() {
    cy.log('filter admin list');
    cy.xpath(CLICK_ADMIN_FILTER).should('be.visible').click();
  }

  static addMembersMoreThanLimit(member, maximumMembers) {
    cy.log('add member in the group');
    if (member !== "") {
      const list = member.split(",");
      for (let i = 0; i <= parseInt(maximumMembers, 10); i += 1) {
        cy.xpath(ADD_MEMBER).type(list[i]).type('{downArrow}').type('{enter}');
        cy.wait(1000);
      }
      cy.xpath(MEMBER).click();
    }
  }

  static addSCCMember(member) {
    cy.log('add member in the group');
    if (member !== "") {
      cy.wait(2000);
      cy.xpath(ADD_MEMBER).type(member);
      cy.wait(2000);
      cy.contains(member).click();
      cy.xpath(MEMBER).click();
      cy.wait(4000);
    }
  }

  static clickMSISDNToggle(){
    cy.log('click msisdn toggle');
    cy.xpath(MSISDN_TOGGLE).click({ force: true });
    cy.wait(1000);
  }

}
export default EditGroupPage;
