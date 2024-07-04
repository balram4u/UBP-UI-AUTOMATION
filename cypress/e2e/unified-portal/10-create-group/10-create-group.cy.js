import {
  When, Then, And,
} from 'cypress-cucumber-preprocessor/steps';
import CreateNewGroupPage from '../../../pages/unified-portal/group/create_new_group_page';
import GroupHomePage from '../../../pages/unified-portal/group/group_home_page';
import EditGroupPage from '../../../pages/unified-portal/group/edit_group';
import ViewGroupPage from '../../../pages/unified-portal/group/view_group_page';
import CommonUtilities from "../../../common/Util";

And(/^I navigate to the Create Group Page$/, () => {
  // GroupHomePage.clickOnGroupUsingLeftMenu(grpName);
  GroupHomePage.clickOnGroupUsingUrl();
  cy.url().should('contains', '/home/group/groups');
});

When(/^I perform Create Group having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (groupname, status, description, minimumnumbers, maximumnumbers, year) => {
  GroupHomePage.clickCreateGroup();
  CreateNewGroupPage.enterGroupName(groupname);
  CreateNewGroupPage.selectDate();
  CreateNewGroupPage.selectYearMonthDate(year);
  cy.wait(3000);
  CreateNewGroupPage.selectStatus(status);
  CreateNewGroupPage.enterDescription(description);
  CreateNewGroupPage.enterMinimumMember(minimumnumbers);
  CreateNewGroupPage.enterMaximumMember(maximumnumbers);
  cy.wait(2000);
  CreateNewGroupPage.storeAvailableFromDate();
  CreateNewGroupPage.storeAvailableUntilDate();
  CreateNewGroupPage.clickSubmitButton();
});

Then(/^I am able to see the created Group successfully message "([^"]*)"$/, (message) => {
  CreateNewGroupPage.verifyMessage(message);
});

And(/^Group created should be visible inside table "([^"]*)"$/, (groupname) => {
  GroupHomePage.enterGroupNameToSearch(groupname);
  GroupHomePage.clickToSearch();
  GroupHomePage.verifyGroupInsideTable(groupname);
});

Then(/^I am able to see the fail message after submit the data "([^"]*)"$/, (message) => {
  CreateNewGroupPage.verifyMessage(message);
});

When(/^I click at view button inside the Group table$/, () => {
  GroupHomePage.clickViewButton();
});

Then(/^I validate all fields inside View Group having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (groupname, grouptype, description, minimumMembers, maximumMembers, member, manager) => {
  ViewGroupPage.verifyGroupName(groupname);
  ViewGroupPage.verifyGroupType(grouptype);
  ViewGroupPage.verifyGroupDescription(description);
  ViewGroupPage.verifyGroupMinimumMembers(minimumMembers);
  ViewGroupPage.verifyGroupMaximumMembers(maximumMembers);
  ViewGroupPage.scrollToDown();
  ViewGroupPage.verifyMember(member);
  ViewGroupPage.verifyManager(manager);
});

And(/^I navigate to the Manage Group Types Page$/, () => {
  GroupHomePage.clickOnGroupUsingLeftMenu();
  // GroupHomePage.clickOnGroupUsingUrl();
});

When(/^I perform Edit Group having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (groupname, grouptype, status, description, minimumnumbers, maximumnumbers, member, manager, admin) => {
  GroupHomePage.clickEditButton();
  cy.url().should('contain', '/home/group/groups/edit/');
  cy.wait(1000);
  CreateNewGroupPage.selectGroupType(grouptype);
  CreateNewGroupPage.enterGroupName(groupname);
  CreateNewGroupPage.selectStatus(status);
  CreateNewGroupPage.enterDescription(description);
  CreateNewGroupPage.enterMinimumMember(minimumnumbers);
  CreateNewGroupPage.enterMaximumMember(maximumnumbers);
  EditGroupPage.selectFromDate();
  EditGroupPage.selectToDate();
  EditGroupPage.addMember(member);
  EditGroupPage.addManager(manager);
  EditGroupPage.aaddAdmin(admin);
  EditGroupPage.clickOnUpdate();
});

And(/^I navigate to the Manage Group Types Page$/, () => {
  GroupHomePage.clickOnGroupUsingLeftMenu();
  // GroupHomePage.clickOnGroupUsingUrl();
});

And(/^I am able to search existing Group by Group Name"([^"]*)"$/, (groupName) => {
  GroupHomePage.enterGroupNameToSearch(groupName);
  GroupHomePage.clickToSearch();
  cy.wait(3000);
});

When(/^I perform Delete member,admin and manager$/, () => {
  GroupHomePage.clickEditButton();
  EditGroupPage.deleteMembersAndAdminsLists();
  EditGroupPage.clickOnUpdate();
});

And(/^I navigate to the Manage Group Types Page$/, () => {
  GroupHomePage.clickOnGroupUsingLeftMenu();
  // GroupHomePage.clickOnGroupUsingUrl();
});

When(/^I perform Delete Group"([^"]*)"$/, (groupName) => {
  GroupHomePage.deleteButton(groupName);
  GroupHomePage.deleteYesButton();
});

Then(/^I am able to validate message "([^"]*)"$/, (message) => {
  CreateNewGroupPage.verifyMessage(message);
});

And(/^I click on export button$/, () => {
  CreateNewGroupPage.clickOnExportButton();
});

And(/^I click on download button$/, () => {
  CreateNewGroupPage.clickOnDownloadButton();
});

And(/^I read file name "([^"]*)"$/, (fileName) => {
  CommonUtilities.readFileName(fileName);
});

Then(/^I delete file name "([^"]*)"$/, (fileName) => {
  cy.task('deleteFile', fileName);
});

Then(/^I validate the table list parameters "([^"]*)" "([^"]*)"$/, (key, value) => {
  CommonUtilities.validateTableListParameters(key, value);
});

And(/^I scroll to Bottom if area is scrollable$/, () => {
  GroupHomePage.scrollToBottomWithCondition();
});

Then(/^I click on Reset Button$/, () => {
  GroupHomePage.clickResetButton();
});

Then(/^I click on Edit Button$/, () => {
  GroupHomePage.clickEditButton();
});

Then(/^I click on column button$/, () => {
  GroupHomePage.clickOnColumnButton();
});

Then(/^I validate Members List inside table$/, () => {
  EditGroupPage.verifyMembersList();
});

Then(/^I validate Admins List inside table$/, () => {
  EditGroupPage.verifyAdminsList();
});

Then(/^I validate create group button should not be visible$/, () => {
  GroupHomePage.createGroupShouldNotVisible();
});

Then(/^I validate edit option is should not be visible$/, () => {
  GroupHomePage.editShouldNotVisible();
});

And(/^I am able to search existing Group by Group Name and Status "([^"]*)" "([^"]*)"$/, (groupName, status) => {
  GroupHomePage.enterGroupNameToSearch(groupName);
  GroupHomePage.selectStatusType(status);
  GroupHomePage.clickToSearch();
  cy.wait(3000);
});

And(/^I validate member , manager and admin listed in the grid "([^"]*)" "([^"]*)" "([^"]*)"$/, (member, manager, admin) => {
  ViewGroupPage.scrollToDown();
  ViewGroupPage.verifyMember(member);
  ViewGroupPage.verifyManager(manager);
  ViewGroupPage.verifyAdmin(admin);
});

And(/^I validate member, manager and admin should not listed in the grid "([^"]*)" "([^"]*)" "([^"]*)"$/, (member, manager, admin) => {
  ViewGroupPage.scrollToDown();
  ViewGroupPage.verifyMemberShouldNotVisible(member);
  ViewGroupPage.verifyManagerShouldNotVisible(manager);
  ViewGroupPage.verifyAdminShouldNotVisible(admin);
});

And(/^I validate deleted group should not exist "([^"]*)"$/, (groupName) => {
  GroupHomePage.groupNameShouldNotExist(groupName);
});

Then(/^I validate delete option is should not be visible$/, () => {
  GroupHomePage.deleteShouldNotVisible();
});

Then(/^I validate available from and availble until fields format should be same as entered$/, () => {
  ViewGroupPage.viewDateFormat();
});

And(/^I am able to search with status only "([^"]*)"$/, (status) => {
  GroupHomePage.selectStatusType(status);
  GroupHomePage.clickToSearch();
});

And(/^I validate groups with "([^"]*)" status do not present in the table$/, (status) => {
  GroupHomePage.validateGroupsStatus(status);
});

And(/^I validate searched group listed in the table "([^"]*)"$/, (groupname) => {
  GroupHomePage.verifyGroupInsideTable(groupname);
});

And(/^I get total group count available in the table$/, () => {
  GroupHomePage.validateDefaultGroupCount();
});

And(/^I validate group count should be as default$/, () => {
  GroupHomePage.validateCurrentGroupCount();
});

And(/^I am able to filter existing group by Group Name "([^"]*)" "([^"]*)"$/, (columnName, groupName) => {
  GroupHomePage.clickFilterButton();
  GroupHomePage.selectColumn(columnName);
  GroupHomePage.selectOperator("Equal");
  GroupHomePage.typeFilterValue(groupName);
  GroupHomePage.clickFilterButton();
});

And(/^I validate searched group should not listed in the table "([^"]*)"$/, (message) => {
  GroupHomePage.validateGroupShouldNotListed();
  CommonUtilities.validateMessage(message);
});

And(/^I click on No button$/, () => {
  GroupHomePage.clickNoButton();
});

When(/^I perform Edit Group having same admin with following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (admin1, message, admin2, errorMessage) => {
  GroupHomePage.clickEditButton();
  cy.url().should('contain', '/home/group/groups/edit/');
  cy.wait(900);
  EditGroupPage.selectFromDate();
  EditGroupPage.selectToDate();
  cy.wait(5000);
  EditGroupPage.addInvalidAdmin(admin1);
  CommonUtilities.validateMessage(message);
  cy.wait(5000);
  EditGroupPage.addInvalidAdmin(admin2);
  CommonUtilities.validateMessage(errorMessage);
  cy.wait(900);
});

When(/^I perform Edit Group having same admin and member with following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (member, message, admin, errorMessage) => {
  GroupHomePage.clickEditButton();
  cy.url().should('contain', '/home/group/groups/edit/');
  cy.wait(900);
  EditGroupPage.selectFromDate();
  EditGroupPage.selectToDate();
  cy.wait(5000);
  EditGroupPage.addInvalidMember(member);
  CommonUtilities.validateMessage(message);
  EditGroupPage.addInvalidAdmin(admin);
  CommonUtilities.validateMessage(errorMessage);
});

When(/^I perform Edit Group having same member with following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (member1, message, member2, errorMessage) => {
  GroupHomePage.clickEditButton();
  cy.url().should('contain', '/home/group/groups/edit/');
  cy.wait(900);
  EditGroupPage.selectFromDate();
  EditGroupPage.selectToDate();
  cy.wait(5000);
  EditGroupPage.addInvalidMember(member1);
  CommonUtilities.validateMessage(message);
  cy.wait(5000);
  EditGroupPage.addInvalidMember(member2);
  CommonUtilities.validateMessage(errorMessage);
  cy.wait(900);
});

Then(/^I delete the added list$/, () => {
  EditGroupPage.deletePersonIcon();
});

When(/^I filter and verify member is deleted "([^"]*)" "([^"]*)"$/, (columnMembers, member) => {
  EditGroupPage.clickOnMemberFilter();
  cy.wait(900);
  GroupHomePage.selectColumn(columnMembers);
  GroupHomePage.selectOperator("equals");
  GroupHomePage.typeFilterValue(member);
  EditGroupPage.verifyListNotExist(member);
  cy.wait(900);
});

When(/^I filter and verify admin is deleted "([^"]*)" "([^"]*)"$/, (columnMembers, member) => {
  EditGroupPage.clickOnAdminFilter();
  cy.wait(900);
  GroupHomePage.selectColumn(columnMembers);
  GroupHomePage.selectOperator("equals");
  GroupHomePage.typeFilterValue(member);
  EditGroupPage.verifyListNotExist(member);
  cy.wait(900);
});

When(/^I filter and verify group is deleted "([^"]*)" "([^"]*)"$/, (columnMembers, groupName) => {
  EditGroupPage.clickOnMemberFilter();
  cy.wait(900);
  GroupHomePage.selectColumn(columnMembers);
  GroupHomePage.selectOperator("equal");
  GroupHomePage.typeFilterValue(groupName);
  EditGroupPage.verifyListNotExist(groupName);
  cy.wait(900);
});

When(/^I perform Edit Group with members more than provided limit "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (groupname, grouptype, status, description, minimumNumbers, maximumNumbers, member, manager, admin) => {
  GroupHomePage.clickEditButton();
  cy.url().should('contain', '/home/group/groups/edit/');
  cy.wait(900);
  CreateNewGroupPage.selectGroupType(grouptype);
  CreateNewGroupPage.enterGroupName(groupname);
  CreateNewGroupPage.selectStatus(status);
  CreateNewGroupPage.enterDescription(description);
  CreateNewGroupPage.enterMinimumMember(minimumNumbers);
  CreateNewGroupPage.enterMaximumMember(maximumNumbers);
  EditGroupPage.selectFromDate();
  EditGroupPage.selectToDate();
  EditGroupPage.addMembersMoreThanLimit(member, maximumNumbers);
});

Then(/^I wait for sometime$/, () => {
  cy.wait(2000);
});

When(/^I perform maximum members limit reached having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (groupname, grouptype, status, description, minimumnumbers, maximumnumbers, member, manager, admin) => {
  GroupHomePage.clickEditButton();
  cy.url().should('contain', '/home/group/groups/edit/');
  cy.wait(900);
  CreateNewGroupPage.selectGroupType(grouptype);
  CreateNewGroupPage.enterGroupName(groupname);
  CreateNewGroupPage.selectStatus(status);
  CreateNewGroupPage.enterDescription(description);
  CreateNewGroupPage.enterMinimumMember(minimumnumbers);
  CreateNewGroupPage.enterMaximumMember(maximumnumbers);
  EditGroupPage.selectFromDate();
  EditGroupPage.selectToDate();
  EditGroupPage.addMember(member);
  EditGroupPage.addManager(manager);
  EditGroupPage.aaddAdmin(admin);
});

When(/^I perform Edit Group operation to add Admin and Members "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (admin, member1, member2, member3, member4) => {
  GroupHomePage.clickEditButton();
  cy.url().should('contain', '/home/group/groups/edit/');
  cy.wait(1000);
  EditGroupPage.aaddAdmin(admin);
  EditGroupPage.clickMSISDNToggle();
  EditGroupPage.addMemberMSISDN(member1);
  EditGroupPage.addMemberMSISDN(member2);
  EditGroupPage.addMemberMSISDN(member3);
  EditGroupPage.addMemberMSISDN(member4);
  EditGroupPage.clickOnUpdate();
});

And(/^I wait for "([^"]*)" miliseconds$/, (miliseconds) => {
  cy.wait(parseInt(miliseconds, 10));
});
