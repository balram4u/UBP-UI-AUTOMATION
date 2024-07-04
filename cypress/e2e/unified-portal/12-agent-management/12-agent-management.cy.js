import {
  Given,
  And,
  Then, When,
} from 'cypress-cucumber-preprocessor/steps';
import PortalHomePage from '../../../pages/unified-portal/home/portal-home-page';
import agentHomePage from '../../../pages/unified-portal/trip/agent_home_page';
import createUpdateAgent from '../../../pages/unified-portal/trip/update-agent';
import CommonUtilities from '../../../common/Util';
import viewAgent from '../../../pages/unified-portal/trip/view-agent';
import PortalLoginPage from '../../../pages/unified-portal/login/portal-login-page';

Given(/^I am on the unified portal login page$/, () => {
  PortalLoginPage.visit();
});
Then(/^Provide "([^"]*)" and "([^"]*)" and login into system$/, (resellerId, password) => {
  PortalLoginPage.login(resellerId, password);
});

Then(/^I should see the message "([^"]*)" on the Home page$/, (message) => {
  PortalHomePage.verify(message);
});

And(/^I navigate to the agents page in trip management$/, () => {
  agentHomePage.clickOnAgentsUsingUrl();
});

And(/^I click on edit button to update the agents fields inside the table "([^"]*)"$/, (agentId) => {
  agentHomePage.clickOnUpdate(agentId);
});

And(/^I click on view button to see the Agents details "([^"]*)"$/, (agentId) => {
  agentHomePage.clickOnView(agentId);
});

When(/^I edit the fields of Agents with following parameter "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (agentName, Description, maxCount, voloumeControl, wightCapacity) => {
  cy.url().should('contains', 'home/trip/agents/edit/');
  createUpdateAgent.fillAgentName(agentName);
  createUpdateAgent.fillDescription(Description);
  createUpdateAgent.fillMaxCount(maxCount);
  createUpdateAgent.fillVolumeCapacity(voloumeControl);
  createUpdateAgent.fillWeightCapacity(wightCapacity);
});

And(/^I navigate to the agents page in trip management$/, () => {
  // agentHomePage.clickOnAgentsUsingLeftMenu();
  agentHomePage.clickOnAgentsUsingUrl();
});

When(/^I perform update operation for "([^"]*)" with following parameter "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (agentId, updateAgentName, description, maxCount, voloumeControl, wightCapacity) => {
  agentHomePage.clickOnUpdate(agentId);
  agentHomePage.enterAgentName(updateAgentName);
  agentHomePage.enterDescription(description);
  createUpdateAgent.fillMaxCount(maxCount);
  createUpdateAgent.fillVolumeCapacity(voloumeControl);
  createUpdateAgent.fillWeightCapacity(wightCapacity);
  createUpdateAgent.clickOnUpdate();
});

When(/^I filter with "([^"]*)" "([^"]*)" value$/, (columnName, columnValue) => {
  agentHomePage.clickOnFilter();
  agentHomePage.selectSearchColumn(columnName);
  agentHomePage.fillSearchValue(columnValue);
});

Then(/^I should verify agent details with following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (agentName, maxCount, description, volumeCapacity, weightCapacity, volumeCapacityUnit, weightCapacityUnit, reserveVolumnCapacity, reserveWeightCapacity, reserveCount) => {
  viewAgent.verifyAgentName(agentName);
  viewAgent.verifyMaxCount(maxCount);
  viewAgent.verifyDescription(description);
  viewAgent.verifyVolumnCapacity(volumeCapacity);
  viewAgent.verifyWeightCapacity(weightCapacity);
  viewAgent.verifyVolumnCapacityUnit(volumeCapacityUnit);
  viewAgent.verifyWeightCapacityUnit(weightCapacityUnit);
  viewAgent.verifyReserveVolumnCapacity(reserveVolumnCapacity);
  viewAgent.verifyReserveWeightCapacity(reserveWeightCapacity);
  // viewAgent.verifyReserveCount(reserveCount);
});

And(/^I click on update button$/, () => {
  createUpdateAgent.clickOnUpdate();
});

And(/^I get total agent count available in the table$/, () => {
  agentHomePage.validateDefaultGroupCount();
});

And(/^I validate agent count should be as default$/, () => {
  agentHomePage.validateCurrentGroupCount();
});

And(/^I validate the searched Agent details in the grid "([^"]*)"$/, (agentName) => {
  agentHomePage.validateAgentNameInTable(agentName);
});
