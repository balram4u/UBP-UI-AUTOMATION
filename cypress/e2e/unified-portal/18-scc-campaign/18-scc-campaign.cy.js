import {
  When, And, Then,
} from "cypress-cucumber-preprocessor/steps";

import resellerHomePage from '../../../pages/unified-portal/reseller/reseller_home_page';
import createNewResellerRolePage from '../../../pages/unified-portal/reseller/create_new_resellerRole_page';
import GroupHomePage from '../../../pages/unified-portal/group/group_home_page';
import CreateNewGroupPage from '../../../pages/unified-portal/group/create_new_group_page';
import sccKycCreationPage from '../../../pages/unified-portal/scc/scc-kyc-creation-page';
import resellerGeneralInfo from '../../../pages/unified-portal/reseller/reseller_general_info';
import personalInfo from '../../../pages/unified-portal/kyc/kyc-personal-info';
import EditGroupPage from '../../../pages/unified-portal/group/edit_group';
import ViewGroupPage from '../../../pages/unified-portal/group/view_group_page';
import sccWorkFlowCreationPage from '../../../pages/unified-portal/scc/scc-workflow-creation-page';
import CommonUtilities from "../../../common/Util";
import sccCampaignCreationPage from '../../../pages/unified-portal/scc/scc-campaign-creation-page';
import subscriberTopupMainPage from '../../../pages/unified-portal/transactions/subscriber-topup_main_page';

And(/^I navigate to the Reseller Role Page/, () => {
  resellerHomePage.clickOnResellerRolesUsingUrl();
});

And(/^I navigate to the Create Group Page$/, () => {
  GroupHomePage.clickOnGroupUsingUrl();
});

And(/^I navigate to the Resellers Page$/, () => {
  resellerGeneralInfo.navigateToAddResellerUsingUrl();
});

And(/^I navigate to the Register KYC page$/, () => {
  personalInfo.clickOnKycRegisterUsingUrl();
  cy.wait(10000);
});

And(/^I navigate to the Workflow/, () => {
  sccWorkFlowCreationPage.clickOnWorkflowsUsingUrl();
});

And(/^I navigate to the Campaigns page/, () => {
  sccCampaignCreationPage.clickOnCampaignsUsingUrl();
});

And(/^I navigate to the Campaigns design of pending approval page/, () => {
  sccCampaignCreationPage.clickOnCampaignDesignUsingUrl();
});

And(/^I navigate to the airtime stock Page$/, () => {
  subscriberTopupMainPage.navigateAirtimeStockUsingUrl();
});

And(/^I navigate to the Policy Mapping page$/, () => {
  sccCampaignCreationPage.clickOnPolicyMappingUsingUrl();
});

And(/^I navigate to the Policy Access Management Page$/, () => {
  sccCampaignCreationPage.clickOnPolicyUsingUrl();
});

And(/^Reseller Role created should be visible inside table "([^"]*)"$/, (role) => {
  resellerHomePage.clickOnFilter();
  cy.wait(1000);
  resellerHomePage.selectSearchColumn('Role Name');
  cy.wait(1000);
  resellerHomePage.selectOperator('equals');
  cy.wait(1000);
  resellerHomePage.fillSearchValue(role);
  cy.wait(1000);
  resellerHomePage.verifyDataInTable(role);
  cy.wait(2000);
});

When(/^I perform View reseller "([^"]*)"$/, (role) => {
  resellerHomePage.clickOnViewOfResellerRole(role);
});

Then(/^I am able to validate following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (roleName, importId, addressLock, userId, description) => {
  createNewResellerRolePage.verifyResellerRoleDetails(roleName, importId,
    addressLock, userId, description);
  createNewResellerRolePage.clickOnClose();
});

Then(/^I verify import id is not editable$/, () => {
  createNewResellerRolePage.clickOnSelectColumn();
});

When(/^I perform Edit reseller role having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (roleName, newRoleName, passwordPolicy, addressLock, userId, description) => {
  resellerHomePage.clickOnEditOfResellerRole(roleName);
  createNewResellerRolePage.fillRoleName(newRoleName);
  createNewResellerRolePage.selectPasswordPolicy(passwordPolicy);
  createNewResellerRolePage.fillAddressLock(addressLock);
  createNewResellerRolePage.fillUserIdRegExp(userId);
  createNewResellerRolePage.fillRoleDescription(description);
  createNewResellerRolePage.clickOnClose();
});

When(/^I perform Create Reseller Role having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (roleName, importId, passwordPolicy, addressLock, userId, description) => {
  resellerHomePage.clickOnCreateResellerRole();
  createNewResellerRolePage.fillRoleName(roleName);
  createNewResellerRolePage.fillImportId(importId);
  createNewResellerRolePage.selectPasswordPolicy(passwordPolicy);
  createNewResellerRolePage.fillAddressLock(addressLock);
  createNewResellerRolePage.fillUserIdRegExp(userId);
  createNewResellerRolePage.fillDescription(description);
  createNewResellerRolePage.clicOnSubmit();
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
  CreateNewGroupPage.clickSubmitButton();
});

And(/^Group created should be visible inside table "([^"]*)"$/, (groupname) => {
  GroupHomePage.enterGroupNameToSearch(groupname);
  GroupHomePage.clickToSearch();
  GroupHomePage.verifyGroupInsideTable(groupname);
});

And(/^I enter personal information and click next button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerType, userName, firstName, lastName, mobileNo, email) => {
  cy.wait(8000);
  sccKycCreationPage.selectTypeOfReseller(resellerType);
  sccKycCreationPage.typeUserName(userName);
  sccKycCreationPage.typeFirstName(firstName);
  sccKycCreationPage.typeLastName(lastName);
  sccKycCreationPage.typeMobileNo(mobileNo);
  sccKycCreationPage.typeEmail(email);
  sccKycCreationPage.clickNextButton();
});

And(/^I enter user details and click submit button "([^"]*)"$/, (roleId) => {
  cy.wait(3000);
  sccKycCreationPage.selectRoleId(roleId);
  sccKycCreationPage.selectToDateDropDown();
  sccKycCreationPage.moveToNextMonth();
  sccKycCreationPage.selectToDate();
  cy.wait(2000);
  sccKycCreationPage.clickSubmitButton();
});

Then(/^I validate created KYC available on resellers page "([^"]*)" "([^"]*)" "([^"]*)"$/, (searchFeild, searchValue, status) => {
  resellerGeneralInfo.enterSearchValue(searchFeild, searchValue);
  resellerGeneralInfo.clickSearch();
  cy.wait(3000);
  resellerGeneralInfo.validateResellerID(searchValue);
  resellerGeneralInfo.validateStatus(status);
});

When(/^I perform Edit Group having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (groupname, status, description, minimumnumbers, maximumnumbers, member) => {
  GroupHomePage.clickEditButton();
  EditGroupPage.selectFromDate();
  EditGroupPage.selectToDate();
  cy.wait(3000);
  CreateNewGroupPage.enterGroupName(groupname);
  CreateNewGroupPage.selectStatus(status);
  CreateNewGroupPage.enterDescription(description);
  CreateNewGroupPage.enterMinimumMember(minimumnumbers);
  CreateNewGroupPage.enterMaximumMember(maximumnumbers);
  cy.wait(2000);
  EditGroupPage.addSCCMember(member);
  EditGroupPage.clickOnUpdate();
});

And(/^I am able to search existing Group by Group Name"([^"]*)"$/, (groupName) => {
  GroupHomePage.enterGroupNameToSearch(groupName);
  GroupHomePage.clickToSearch();
  cy.wait(2000);
});

When(/^I click at view button inside the Group table$/, () => {
  GroupHomePage.clickViewButton();
});

Then(/^I validate all fields inside View Group having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (groupname, grouptype, description, minimumMembers, maximumMembers, member) => {
  ViewGroupPage.verifyGroupName(groupname);
  ViewGroupPage.verifyGroupType(grouptype);
  ViewGroupPage.verifyGroupDescription(description);
  ViewGroupPage.verifyGroupMinimumMembers(minimumMembers);
  ViewGroupPage.verifyGroupMaximumMembers(maximumMembers);
  ViewGroupPage.scrollToDown();
  ViewGroupPage.verifyMember(member);
});

And(/^I click on view reseller action$/, () => {
  resellerGeneralInfo.clickViewReseller();
});

Then(/^I verify reseller details with parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerPath, resellerId, resellerName, resellerTypeId, resellerTypeName, MSISDN, status, userId, password, roleId, roleName) => {
  resellerGeneralInfo.viewResellerPath(resellerPath);
  resellerGeneralInfo.viewResellerId(resellerId);
  resellerGeneralInfo.viewResellerName(resellerName);
  resellerGeneralInfo.viewResellerTypeId(resellerTypeId);
  resellerGeneralInfo.viewResellerTypeName(resellerTypeName);
  resellerGeneralInfo.viewMSISDN(MSISDN);
  resellerGeneralInfo.viewStatus(status);
  resellerGeneralInfo.clickResellerUserInfo();
  cy.wait(1000);
  resellerGeneralInfo.viewUserId(userId);
  resellerGeneralInfo.viewPassword(password);
  resellerGeneralInfo.viewRoleId(roleId);
  resellerGeneralInfo.viewRoleName(roleName);
});

When(/^I perform Create Wrokflow having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (workFlowName, groupName, description, message) => {
  sccWorkFlowCreationPage.clickCreateNew();
  sccWorkFlowCreationPage.enterWorkFlowName(workFlowName);
  sccWorkFlowCreationPage.enterAndSelectGroupName(groupName);
  sccWorkFlowCreationPage.enterDescription(description);
  sccWorkFlowCreationPage.clickSave();
  sccWorkFlowCreationPage.validateMessage(message);
  sccWorkFlowCreationPage.clickOkay();
});

And(/^Workflow created should be visible inside table "([^"]*)" "([^"]*)" "([^"]*)"$/, (column, operation, workFlowName) => {
  cy.wait(1000);
  CommonUtilities.applyFilter(column, operation, workFlowName);
  sccWorkFlowCreationPage.verifyWorkflowInsideTable(workFlowName);
});

When(/^I click create campaign button$/, () => {
  sccCampaignCreationPage.clickCreateCampaign();
});

And(/^I select Instant campaign$/, () => {
  sccCampaignCreationPage.selectInstantCampaign();
});

And(/^I enter scc profile information and click next button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (campaignName, description, campaignApprovalWorkflow, eventChannel) => {
  cy.wait(2000);
  sccCampaignCreationPage.enterCampaignName(campaignName);
  sccCampaignCreationPage.enterDescription(description);
  sccCampaignCreationPage.selectStartDate();
  sccCampaignCreationPage.selectEndDate();
  sccCampaignCreationPage.selectCampaignApprovalWorkflow(campaignApprovalWorkflow);
  sccCampaignCreationPage.selectEventChannel(eventChannel);
  cy.wait(2000);
  sccCampaignCreationPage.clickNextButton();
});

And(/^I enter scc target audience information and click next button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (region, resellerType, msisdn, comments) => {
  cy.wait(3000);
  sccCampaignCreationPage.selectRegion(region);
  sccCampaignCreationPage.selectResellerType(resellerType);
  cy.wait(2000);
  sccCampaignCreationPage.enterMSISDN(msisdn);
  sccCampaignCreationPage.enterComments(comments);
  cy.wait(2000);
  sccCampaignCreationPage.clickNextButton();
});

And(/^I enter scc payment information and click next button "([^"]*)" "([^"]*)"$/, (commissionHead, costCenter) => {
  cy.wait(3000);
  sccCampaignCreationPage.selectCommissionHead(commissionHead);
  sccCampaignCreationPage.selectCostCenter(costCenter);
  cy.wait(2000);
  sccCampaignCreationPage.clickNextButton();
});

And(/^I enter scc business rule information with single transfer with amount KPI and click next button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (kpiName, kpiEvent, targetCriteria, eventTarget) => {
  cy.wait(3000);
  sccCampaignCreationPage.enterKPIName(kpiName);
  sccCampaignCreationPage.selectKPIEvent(kpiEvent);
  sccCampaignCreationPage.selectTargetCriteria(targetCriteria);
  sccCampaignCreationPage.enterEventTarget(eventTarget);
  cy.wait(2000);
  sccCampaignCreationPage.clickNextButton();
});

And(/^I enter scc commission formula information for all and click next button "([^"]*)" "([^"]*)" "([^"]*)"$/, (commissionCriteria, commissionDefination, commissionAmount) => {
  cy.wait(3000);
  sccCampaignCreationPage.selectCommissionCriteria(commissionCriteria);
  cy.wait(1000);
  sccCampaignCreationPage.selectCommissionDefination(commissionDefination);
  cy.wait(1000);
  sccCampaignCreationPage.enterCommissionAmount(commissionAmount);
  cy.wait(2000);
  sccCampaignCreationPage.clickNextButton();
});

And(/^I enter scc notification information and click next button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (campaignParticipationSmsTemplate, campaignParticipationEmailTemplate, campaignPayoutSmsTemplate, campaignPayoutEmailTemplate) => {
  cy.wait(3000);
  sccCampaignCreationPage.selectCampaignParticipationSmsTemplate(campaignParticipationSmsTemplate);
  sccCampaignCreationPage.selectCampaignParticipationEmailTemplate(campaignParticipationEmailTemplate);
  sccCampaignCreationPage.selectCampaignPayoutSmsTemplate(campaignPayoutSmsTemplate);
  sccCampaignCreationPage.selectCampaignPayoutEmailTemplate(campaignPayoutEmailTemplate);
  cy.wait(2000);
  sccCampaignCreationPage.clickNextButton();
});

And(/^I am on the scc preview screen and create instant campaign "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (campaignName, kpiName, eventTarget, commissionAmount, message) => {
  cy.wait(3000);
  sccCampaignCreationPage.validateCampaignName(campaignName);
  sccCampaignCreationPage.clickBusinessRule();
  cy.wait(2000);
  sccCampaignCreationPage.validateKPI(kpiName);
  sccCampaignCreationPage.validateEventTarget(eventTarget);
  sccCampaignCreationPage.clickCommissionFormula();
  cy.wait(2000);
  sccCampaignCreationPage.validateCommissionAmount(commissionAmount);
  cy.wait(2000);
  sccCampaignCreationPage.clickSubmitButton();
  sccCampaignCreationPage.validateCampaignCreationMessage(message);
  cy.wait(2000);
  sccCampaignCreationPage.clickOkayButton();
});

And(/^Campaign created should be visible on pending approval screen "([^"]*)"$/, (name) => {
  sccCampaignCreationPage.clickOnFilter();
  cy.wait(3000);
  cy.debug('Selecting Role Name in search column');
  sccCampaignCreationPage.selectSearchColumn('Campaign Name');
  cy.wait(2000);
  cy.debug('Selecting column operator');
  sccCampaignCreationPage.selectOperator('equals');
  cy.wait(2000);
  cy.debug('Entering Search value');
  sccCampaignCreationPage.fillSearchValue(name);
  cy.wait(2000);
  // cy.debug('Verifying Reseller Role on table');
  // sccCampaignCreationPage.verifyDataInTable(name);
  cy.wait(3000);
});

And(/^I approve the campaign "([^"]*)"$/, (message) => {
  sccCampaignCreationPage.approveCampaign();
  cy.wait(2000);
  sccCampaignCreationPage.validateCampaignApprovalMessage(message);
  sccCampaignCreationPage.clickOkayButton();
});

When(/^I perform airtime stock transaction having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerId, amount, comments, msisdn) => {
  if (msisdn === "") {
    cy.debug(`enter reseller id ${resellerId}`);
    subscriberTopupMainPage.enterResellerId(resellerId);
  } else {
    cy.debug('click msisdn toggle');
    subscriberTopupMainPage.clickMsisdnToggle();
    cy.debug(`enter msisdn ${msisdn}`);
    subscriberTopupMainPage.enterMsisdn(msisdn);
  }
  cy.debug(`enter amount ${amount}`);
  subscriberTopupMainPage.enterAmount(amount);
  cy.debug(`enter comments ${comments}`);
  subscriberTopupMainPage.enterComments(comments);
  cy.debug('Click on sell airtime stock button');
  subscriberTopupMainPage.clickSellAirtimeStock();
});

And(/^I validate and confirm the transaction "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerId, amount, paymentMethod, comments) => {
  subscriberTopupMainPage.validateBeforeTransaction(resellerId, amount, paymentMethod, comments);
  subscriberTopupMainPage.clickConfirmButton();
});

Then(/^I validate the transaction "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerId, amount, title, message) => {
  subscriberTopupMainPage.validateTransactionReceipt(resellerId, amount, title, message);
});

Then(/^I get the transaction reference number and close the transaction$/, () => {
  subscriberTopupMainPage.saveTransactionReference();
  subscriberTopupMainPage.closeTransactionScreen();
});

And(/^I click on view action of the campaign$/, () => {
  sccCampaignCreationPage.viewCampaign();
});

Then(/^I validate commission calculation "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerId, kpiName, grossCommission, netCommission, eligibleForPayout, paymentStatus) => {
  sccCampaignCreationPage.scrollToDown();
  sccCampaignCreationPage.validateResellerId(resellerId);
  sccCampaignCreationPage.validateKPIName(kpiName);
  sccCampaignCreationPage.validateGrossCommission(grossCommission);
  sccCampaignCreationPage.validateNetCommission(netCommission);
  sccCampaignCreationPage.validateEligibleForPayout(eligibleForPayout);
  cy.wait(1000);
  sccCampaignCreationPage.validatePaymentStatus(paymentStatus);
});

And(/^I wait for 5minutes$/, () => {
  cy.wait(300000);
});

And(/^Campaign created should be searched inside table "([^"]*)"$/, (name) => {
  sccCampaignCreationPage.clickOnFilter();
  cy.wait(800);
  sccCampaignCreationPage.selectSearchColumn('Name');
  cy.wait(800);
  sccCampaignCreationPage.selectOperator('equals');
  cy.wait(800);
  sccCampaignCreationPage.fillSearchValue(name);
  cy.wait(800);
});

// And(/^I search with ResellerId "([^"]*)"$/, (name) => {
//   sccCampaignCreationPage.scrollToDown();
//   sccCampaignCreationPage.clickOnFilter();
//   cy.wait(1000);
//   sccCampaignCreationPage.selectSearchColumn('Reseller Id');
//   cy.wait(1000);
//   sccCampaignCreationPage.selectOperator('equals');
//   cy.wait(1000);
//   sccCampaignCreationPage.fillSearchValue(name);
//   cy.wait(1000);
//   sccCampaignCreationPage.clickOnFilter({multiple : true});
// });

And(/^I reject the campaign "([^"]*)"$/, (message) => {
  sccCampaignCreationPage.rejectCampaign();
  sccCampaignCreationPage.validateCampaignRejectionMessage(message);
  sccCampaignCreationPage.clickOkayButton();
});

When(/^I validate Campaing status "([^"]*)"$/, (status) => {
  sccCampaignCreationPage.rejectedCampaignStatus(status);
});

And(/^I enter scc profile information with future dates and click next button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (campaignName, description, campaignApprovalWorkflow, eventChannel) => {
  cy.wait(2000);
  sccCampaignCreationPage.enterCampaignName(campaignName);
  sccCampaignCreationPage.enterDescription(description);
  sccCampaignCreationPage.selectFutureStartDate();
  sccCampaignCreationPage.selectFutureEndDate();
  sccCampaignCreationPage.selectCampaignApprovalWorkflow(campaignApprovalWorkflow);
  sccCampaignCreationPage.selectEventChannel(eventChannel);
  cy.wait(1000);
  sccCampaignCreationPage.clickNextButton();
});

And(/^I perform Create New Policy Mapping having following parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (policy, actorType, roleType) => {
  cy.wait(2000);
  sccCampaignCreationPage.clickNewPolicyMapping();
  cy.wait(1000);
  sccCampaignCreationPage.selectPolicy(policy);
  sccCampaignCreationPage.selectActorType(actorType);
  sccCampaignCreationPage.selectRoleType(roleType);
  cy.wait(1000);
  sccCampaignCreationPage.clickSaveButton();
  cy.wait(1000);
  sccCampaignCreationPage.clickUpdateButton();
});

And(/^I perform Create New Policy having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (policyName, description, module, subOption) => {
  cy.wait(2000);
  sccCampaignCreationPage.clickNewPolicy();
  cy.wait(1000);
  sccCampaignCreationPage.enterPolicyName(policyName);
  sccCampaignCreationPage.enterPolicyDescription(description);
  sccCampaignCreationPage.selectStartDate();
  sccCampaignCreationPage.clickOutSide();
  sccCampaignCreationPage.selectEndDate();
  sccCampaignCreationPage.clickOutSide();
  sccCampaignCreationPage.selectModule(module);
  sccCampaignCreationPage.selectSubOption(subOption);
  cy.wait(1000);
  sccCampaignCreationPage.clickPolicySaveButton();
});

And(/^I perform Edit Policy having following parameters "([^"]*)" "([^"]*)"$/, (policyName, description) => {
  cy.wait(2000);
  sccCampaignCreationPage.clickEditPolicy();
  cy.wait(3000);
  sccCampaignCreationPage.enterPolicyName(policyName);
  sccCampaignCreationPage.enterPolicyDescription(description);
  cy.wait(1000);
  sccCampaignCreationPage.clickPolicyPreviewButton();
  cy.wait(1000);
  sccCampaignCreationPage.validatePolicyNameInPreview(policyName);
  sccCampaignCreationPage.validateDescriptionInPreview(description);
  sccCampaignCreationPage.validateModulesInPreview();
  sccCampaignCreationPage.validateSubOptionInPreviw();
  sccCampaignCreationPage.validateChannelsInPreview();
  sccCampaignCreationPage.clickUpdateButton();
});

And(/^I search policy having following parameters "([^"]*)"$/, (name) => {
  sccCampaignCreationPage.clickOnFilter();
  cy.wait(1000);
  cy.debug('Selecting Role Name in search column');
  sccCampaignCreationPage.selectSearchColumn('Policy Name');
  cy.wait(1000);
  cy.debug('Selecting column operator');
  sccCampaignCreationPage.selectOperator('Contains');
  cy.wait(1000);
  cy.debug('Entering Search value');
  sccCampaignCreationPage.fillPolicyValue(name);
  cy.wait(2000);
});

And(/^I perform View Policy having following parameters "([^"]*)" "([^"]*)"$/, (policyName, description) => {
  cy.wait(2000);
  sccCampaignCreationPage.clickViewPolicy();
  cy.wait(1000);
  sccCampaignCreationPage.validatePolicyNameInView(policyName);
  sccCampaignCreationPage.validatePolicyDescriptionInView(description);
  sccCampaignCreationPage.validateModuleInView();
  cy.wait(1000);
  sccCampaignCreationPage.clickClose();
});

And(/^I select Arrear campaign$/, () => {
  sccCampaignCreationPage.selectArrearCampaign();
});

And(/^I enter scc profile information with past date and click next button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (campaignName, description, campaignApprovalWorkflow, eventChannel) => {
  cy.wait(2000);
  sccCampaignCreationPage.enterCampaignName(campaignName);
  sccCampaignCreationPage.enterDescription(description);
  sccCampaignCreationPage.selectPastStartDate();
  sccCampaignCreationPage.selectPastEndDate();
  sccCampaignCreationPage.selectCampaignApprovalWorkflow(campaignApprovalWorkflow);
  sccCampaignCreationPage.selectEventChannel(eventChannel);
  cy.wait(1000);
  sccCampaignCreationPage.clickNextButton();
});

And(/^I enter scc payment information for arrear based and click next button "([^"]*)" "([^"]*)"$/, (commissionHead, costCenter) => {
  cy.wait(3000);
  sccCampaignCreationPage.selectCommissionHead(commissionHead);
  // sccCampaignCreationPage.selectPayoutEndOfCampaign("Yes")
  sccCampaignCreationPage.selectPayoutApproval("No");
  sccCampaignCreationPage.selectCostCenter(costCenter);
  cy.wait(2000);
  sccCampaignCreationPage.clickNextButton();
});

And(/^I enter scc business rule information with multiple KPI and click next button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (kpiName1, kpiEvent1, targetCriteria1, eventTarget1, kpiName2, kpiEvent2, targetCriteria2, eventTarget2) => {
  cy.wait(3000);
  sccCampaignCreationPage.enterKPIName(kpiName1);
  sccCampaignCreationPage.selectKPIEvent(kpiEvent1);
  sccCampaignCreationPage.selectTargetCriteria(targetCriteria1);
  sccCampaignCreationPage.enterEventTarget(eventTarget1);
  cy.wait(2000);
  sccCampaignCreationPage.clickAddKPI();
  cy.wait(2000);
  sccCampaignCreationPage.enterKPIName2(kpiName2);
  sccCampaignCreationPage.selectKPIEvent2(kpiEvent2);
  sccCampaignCreationPage.selectTargetCriteria2(targetCriteria2);
  sccCampaignCreationPage.enterEventTarget2(eventTarget2);
  cy.wait(2000);
  sccCampaignCreationPage.clickNextButton();
});

And(/^I enter scc notification information and click cancel button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (campaignParticipationSmsTemplate, campaignParticipationEmailTemplate, campaignPayoutSmsTemplate, campaignPayoutEmailTemplate) => {
  cy.wait(2000);
  sccCampaignCreationPage.selectCampaignParticipationSmsTemplate(campaignParticipationSmsTemplate);
  sccCampaignCreationPage.selectCampaignParticipationEmailTemplate(campaignParticipationEmailTemplate);
  sccCampaignCreationPage.selectCampaignPayoutSmsTemplate(campaignPayoutSmsTemplate);
  sccCampaignCreationPage.selectCampaignPayoutEmailTemplate(campaignPayoutEmailTemplate);
  cy.wait(2000);
  sccCampaignCreationPage.clickCancelButton();
});

And(/^Campaign created should be visible on Campaign page "([^"]*)"$/, (name) => {
  sccCampaignCreationPage.clickOnFilter();
  cy.wait(1000);
  sccCampaignCreationPage.selectSearchColumn('Name');
  cy.wait(1000);
  sccCampaignCreationPage.selectOperator('equals');
  cy.wait(1000);
  sccCampaignCreationPage.fillSearchValue(name);
  cy.wait(1000);
  sccCampaignCreationPage.verifyDataInTable(name);
  cy.wait(2000);
});

And(/^I click on Edit Campaign link$/, () => {
  sccCampaignCreationPage.clickEditLink();
  cy.wait(1000);
});

And(/^I move to the notification information screen$/, () => {
  sccCampaignCreationPage.clickNextButton();
  cy.wait(900);
  sccCampaignCreationPage.clickNextButton();
  cy.wait(900);
  sccCampaignCreationPage.clickNextButton();
  cy.wait(900);
  sccCampaignCreationPage.clickNextButton();
  cy.wait(900);
  sccCampaignCreationPage.clickNextButton();
});

And(/^I validate that campaign status should be "([^"]*)"$/, (status) => {
  sccCampaignCreationPage.validateCampaignStatus(status);
  cy.wait(1000);
});

And(/^I enter scc profile information with invalid date and click next button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (campaignName, description, campaignApprovalWorkflow, eventChannel) => {
  cy.wait(3000);
  sccCampaignCreationPage.enterCampaignName(campaignName);
  sccCampaignCreationPage.enterDescription(description);
  sccCampaignCreationPage.selectStartDate();
  sccCampaignCreationPage.selectPastEndDate();
  sccCampaignCreationPage.selectCampaignApprovalWorkflow(campaignApprovalWorkflow);
  sccCampaignCreationPage.selectEventChannel(eventChannel);
  cy.wait(2000);
  sccCampaignCreationPage.clickNextButton();
});

When(/^I click on View Campaign link$/, () => {
  sccCampaignCreationPage.clickViewLink();
  cy.wait(1000);
});

Then(/^I am able to validate following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (campaignname, description, campaignapprovalworkflow, eventchannel, region, resellertype, commissionhead, costcenter, kpiname, kpievent, targetcriteria, eventtarget, commissioncriteria, commissiondefination, commissionamount, campaignparticipantsmstemplate, campaignparticipantemailtemplate, campaignpayoutsmstemplate, campaignpayoutemailtemplate) => {
  sccCampaignCreationPage.verifyCampaignName(campaignname);
  sccCampaignCreationPage.verifyCampaignDescription(description);
  sccCampaignCreationPage.verifyCampaignApprovalWorkflow(campaignapprovalworkflow);
  sccCampaignCreationPage.verifyEventChannel(eventchannel);
  sccCampaignCreationPage.verifyRegion(region);
  sccCampaignCreationPage.verifyResellerType(resellertype);
  sccCampaignCreationPage.verifyCommissionHead(commissionhead);
  sccCampaignCreationPage.verifyCostCenter(costcenter);
  sccCampaignCreationPage.verifyKpiName(kpiname);
  sccCampaignCreationPage.verifyKpiEvent(kpievent);
  sccCampaignCreationPage.verifyTargetCriteria(targetcriteria);
  sccCampaignCreationPage.verifyEventTarget(eventtarget);
  sccCampaignCreationPage.verifyCommissionCriteria(commissioncriteria);
  sccCampaignCreationPage.verifyCommissionDefination(commissiondefination);
  sccCampaignCreationPage.verifyCommissionAmount(commissionamount);
  sccCampaignCreationPage.verifyCampaignParticipantSmsTemplate(campaignparticipantsmstemplate);
  sccCampaignCreationPage.verifyCampaignParticipantEmailTemplate(campaignparticipantemailtemplate);
  sccCampaignCreationPage.verifyCampaignPayoutSmsTemplate(campaignpayoutsmstemplate);
  sccCampaignCreationPage.verifyCampaignPayoutEmailTemplate(campaignpayoutemailtemplate);
});

And(/^Validate Hold and Clone options should not be visible$/, () => {
  sccCampaignCreationPage.validateHoldShouldNotBeVisible();
  sccCampaignCreationPage.validateCloneShouldNotBeVisible();
  cy.wait(1000);
});

Then(/^I click on View Campaign link$/, () => {
  sccCampaignCreationPage.validateViewLink();
  cy.wait(1000);
});

Then(/^I select Group By "([^"]*)"$/, (status) => {
  sccCampaignCreationPage.selectStatus(status);
  cy.wait(2000);
});

And(/^I wait for "([^"]*)" miliseconds$/, (miliseconds) => {
  cy.wait(parseInt(miliseconds));
});