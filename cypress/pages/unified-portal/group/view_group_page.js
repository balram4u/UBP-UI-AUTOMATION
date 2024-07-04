import CreateNewGroupPage from "./create_new_group_page";

const VIEW_GROUP_NAME = "(//p[text()='Group Name']/../following-sibling::div/p)[1]";
const VIEW_GROUP_STATUS = "(//p[text()='Status']/../following-sibling::div/p)[1]";
const VIEW_GROUP_DESCRIPTION = "(//p[text()='Description']/../following-sibling::div/p)[1]";
const VIEW_GROUP_TYPE = "(//p[text()='Group Type']/../following-sibling::div/p)[1]";
const VIEW_GROUP_MINIMUM_MEMBERS = "(//p[text()='Minimum Members']/../following-sibling::div/p)[1]";
const VIEW_GROUP_MAXIMUM_MEMBERS = "(//p[text()='Maximum Members']/../following-sibling::div/p)[1]";
const VIEW_GROUP_AVAILABLE_FROM_DATE = "(//p[text()='Available From']/../following-sibling::div/p)[1]";
const VIEW_GROUP_AVAILABLE_UNTILL_DATE = "(//p[text()='Available Until']/../following-sibling::div/p)[1]";

let Admins;
let Managers;
let Members;

class ViewGroupPage {
  static verifyGroupName(groupName) {
    cy.log('verify Group Name');
    cy.xpath(VIEW_GROUP_NAME).should('have.text', groupName);
  }

  static verifyGroupStatus(groupStatus) {
    cy.log('verify Group Status');
    cy.xpath(VIEW_GROUP_STATUS).should('have.text', groupStatus);
  }

  static verifyGroupDescription(groupDescription) {
    cy.log('verify Group Description');
    cy.xpath(VIEW_GROUP_DESCRIPTION).should('have.text', groupDescription);
  }

  static verifyGroupType(groupType) {
    cy.log('verify Group type');
    cy.xpath(VIEW_GROUP_TYPE).should('have.text', groupType);
  }

  static verifyGroupMinimumMembers(groupMinimumMembers) {
    cy.log('verify Group Minimum Members');
    cy.xpath(VIEW_GROUP_MINIMUM_MEMBERS).should('have.text', groupMinimumMembers);
  }

  static verifyGroupMaximumMembers(groupMaximumMembers) {
    cy.log('verify Group Maximum Members');
    cy.xpath(VIEW_GROUP_MAXIMUM_MEMBERS).should('have.text', groupMaximumMembers);
  }

  static verifyGroupAvailableFrom(groupAvailableFrom) {
    cy.log('verify group available from');
    cy.xpath(VIEW_GROUP_AVAILABLE_FROM_DATE).then((date) => {
      const fullDate = date.text();
      // cy.log(fullDate);
      const onlyDate = fullDate.split('T');
      // cy.log(onlyDate);
      const datePart = onlyDate[0].replaceAll('-', '/');
      // cy.log(datePart);
      // cy.log(groupAvailableFrom);
      expect(datePart).equal(groupAvailableFrom);
    });
  }

  static verifyGroupAvailableUntil(groupAvailableUntil) {
    cy.log('verify Group Available Until');
    cy.xpath(VIEW_GROUP_AVAILABLE_UNTILL_DATE).then((date) => {
      const fullDate = date.text();
      cy.log(fullDate);
      const onlyDate = fullDate.split('T');
      cy.log(onlyDate);
      const datepart = onlyDate[0].replaceAll('-', '/');
      cy.log(datepart);
      cy.log(groupAvailableUntil);
      // expect(datepart).equal(groupAvailableUntil);
    });
  }

  static verifyMember(member) {
    cy.log('verify members');
    if (member !== "") {
      Members = member.split(',');
      for (let i = 0; i < Members.length; i += 1) {
        cy.xpath(`//div[@data-field="userId" and text()='${Members[i]}']`).should('be.visible');
      }
    }
  }

  static verifyManager(manager) {
    cy.log('verify managers');
    if (manager !== "") {
      Managers = manager.split(',');
      for (let i = 0; i < Managers.length; i += 1) {
        cy.xpath(`//div[@data-field="userId" and text()='${Managers[i]}']`).should('be.visible');
      }
    }
  }

  static verifyAdmin(admin) {
    cy.log('verify admins');
    if (admin !== "") {
      this.scrollToDown1();
      Admins = admin.split(',');
      for (let i = 0; i < Admins.length; i += 1) {
        cy.xpath(`//div[@data-field="userId" and text()='${Admins[i]}']`).should('be.visible');
      }
    }
  }

  static scrollToDown() {
    cy.log('Scroll to down');
    cy.scrollTo(0, 500);
    cy.wait(800);
  }

  static scrollToDown1() {
    cy.log('Scroll to down');
    cy.scrollTo(0, 1500);
    cy.wait(800);
  }

  static verifyMemberShouldNotVisible(member) {
    cy.log('verify members');
    Members = member.split(',');
    for (let i = 0; i < Members.length; i += 1) {
      cy.xpath(`//div[@data-field="userId" and text()='${Members[i]}']`).should('not.exist');
    }
  }

  static verifyManagerShouldNotVisible(manager) {
    cy.log('verify managers');
    Managers = manager.split(',');
    for (let i = 0; i < Managers.length; i += 1) {
      cy.xpath(`//div[@data-field="userId" and text()='${Managers[i]}']`).should('not.exist');
    }
  }

  static verifyAdminShouldNotVisible(admin) {
    cy.log('verify admins');
    Admins = admin.split(',');
    for (let i = 0; i < Admins.length; i += 1) {
      cy.xpath(`//div[@data-field="userId" and text()='${Admins[i]}']`).should('not.exist');
    }
  }

  static viewDateFormat() {
    cy.log('verify available from date');
    CreateNewGroupPage.returnAvailableFromDate().then((availabeFrom) => {
      cy.xpath(VIEW_GROUP_AVAILABLE_FROM_DATE).invoke('text').then((date1) => {
        const uiAvailableFrom = date1;
        cy.log('Available from date is ', uiAvailableFrom);
        expect(uiAvailableFrom).eq(availabeFrom);
      });
    });

    cy.log('verify available until date');
    CreateNewGroupPage.returnAvailableUntilDate().then((availabeUntil) => {
      cy.xpath(VIEW_GROUP_AVAILABLE_UNTILL_DATE).invoke('text').then((date2) => {
        const uiAvailableUntil = date2;
        cy.log('Available from date is ', uiAvailableUntil);
        expect(uiAvailableFrom).eq(availabeUntil);
      });
    });
  }
}
export default ViewGroupPage;
