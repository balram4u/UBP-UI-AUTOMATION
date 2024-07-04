import {
  And,
} from 'cypress-cucumber-preprocessor/steps';
import PolicyHomePage from '../../../pages/unified-portal/policy/policy-home-page';
import PolicyMappingHomePage from '../../../pages/unified-portal/policy/policy-mapping-home-page';
import CommonUtilities from "../../../common/Util";

And(/^I navigate to policy page$/, () => {
  PolicyHomePage.visitPolicyHomePage();
  cy.wait(4000);
  if (Cypress.env('lighthouse') === true) {
    cy.checkPerformance();
  }
});

And(/^I navigate to policy mapping page$/, () => {
  PolicyMappingHomePage.visitPolicyMappingHomePage();
  cy.wait(4000);
  if (Cypress.env('lighthouse') === true) {
    cy.checkPerformance();
  }
});

And(/^I click on Create New Policy button/, () => {
  PolicyHomePage.clickCreatePolicyButton();
});

When(/^I perform Create New Policy having following parameters "([^"]*)" "([^"]*)"$/, (POLICY_NAME, DESCRIPTION) => {
  PolicyHomePage.enterPolicyName(POLICY_NAME);
  PolicyHomePage.enterDescription(DESCRIPTION);
  PolicyHomePage.selectDatesFromCalender();
  PolicyHomePage.selectAccessibleModules();
  PolicyHomePage.clickOnFilterUICheckBox(); 
  cy.wait(500);
  PolicyHomePage.selectAccessibleSubModules();
  PolicyHomePage.clickOnSubmitButton();
});

Then(/^I am able to validate proper policy added message "([^"]*)"$/, (MESSAGE) => {
  PolicyHomePage.confirmMessage(MESSAGE);
  cy.wait(800);
});

And(/^Password Policy should be visible inside table "([^"]*)"$/, (policyName) => {
  cy.wait(800);
  CommonUtilities.applyFilter('Policy Name', 'Contains', policyName);
});

And(/^I click on delete button "([^"]*)"$/, (policyName) => {
  PolicyHomePage.clickOnDeletePolicy(policyName);
});

And(/^I click on view button "([^"]*)"$/, (policyName) => {
  PolicyHomePage.clickOnViewPolicy(policyName);
});

And(/^I click on edit button "([^"]*)"$/, (policyName) => {
  PolicyHomePage.clickOnEditPolicy(policyName);
  cy.wait(500);
});

And(/^I verify the delete confirmation pop up appears$/, () => {
  PolicyHomePage.verifyConfirmPopup();
});

And(/^I click Yes to confirm operation$/, () => {
  PolicyHomePage.clickOnDeleteRolePopupYesButton();
});

And(/^I verify that no SETTINGS Tab should be visible on leftside menu$/, () => {
  PolicyMappingHomePage.visitPolicyMappingHomePageUsingLeftMenu();
});

And(/^I verify policy details "([^"]*)" "([^"]*)" "([^"]*)"$/, (description, startdate, enddate) => {
  PolicyHomePage.viewPolicyDescription(description);
  PolicyHomePage.viewStartDate(startdate)
  PolicyHomePage.viewEndDate(enddate)
});

When(/^I perform Edit Policy having following parameters "([^"]*)" "([^"]*)"$/, (updatePolicyName, updateDescription) => {
  cy.wait(800);
  PolicyHomePage.enterPolicyName(updatePolicyName);
  cy.wait(800);
  PolicyHomePage.enterDescription(updateDescription);
  PolicyHomePage.UpdateSubModules();
});

And(/^I click on Preview button$/, () => {
  PolicyHomePage.clickOnPreviewButton();
});

And(/^I click on Update button$/, () => {
  PolicyHomePage.clickOnUpdateButton();
  cy.wait(800);
});

When(/^I click on Create New Policy Mapping button$/, () => {
  PolicyMappingHomePage.clickOnCreatePolicyMappingButton();
});

When(/^I enter policy mapping information "([^"]*)"$/, (policy) => {
  PolicyMappingHomePage.createPolicyMapping(policy);
});



