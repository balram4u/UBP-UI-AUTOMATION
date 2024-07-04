// import { seedValue } from "faker/locale/en";

const AGENT_NAME = "//input[@name='agentName']";
const DESCRIPTION = "//textarea[@name='description']";
const TXT_MAXCOUNT = "//input[@name='maxCount']";
const TXT_VOLUMECAPACITY = "//input[@name='volumeCapacity']";
const TXT_WEIGHTCAPACITY = "//input[@name='weightCapacity']";
const BTN_UPDATE = "//button/span[text()='Update']";
const ALERTMESSAGE = "#notistack-snackbar";

class createUpdateAgent {
  static fillAgentName(value) {
    cy.log('Type agent name');
    cy.xpath(AGENT_NAME).clear();
    cy.xpath(AGENT_NAME).type(value);
  }

  static fillDescription(value) {
    cy.log('Type Description of the Agent');
    cy.xpath(DESCRIPTION).clear().type(value);
  }

  static fillMaxCount(value) {
    cy.log('Type Max count of the Agent');
    cy.xpath(TXT_MAXCOUNT).clear().type(value);
  }

  static fillVolumeCapacity(value) {
    cy.log('Type voulume capacity of the Agent');
    cy.xpath(TXT_VOLUMECAPACITY).clear().type(value);
  }

  static fillWeightCapacity(value) {
    cy.log('Type weight capacity of the Agent');
    cy.xpath(TXT_WEIGHTCAPACITY).clear().type(value);
  }

  static clickOnUpdate() {
    cy.log('click On Update button');
    cy.xpath(BTN_UPDATE).click();
  }

  static verifySuccessfulMessage(message) {
    cy.log('verify Successful Message');
    cy.get(ALERTMESSAGE).then((alert) => {
      const text = alert.text();
      cy.log(text);
      expect(text).contains(message);
    });
    cy.log("It is done");
  }
}
export default createUpdateAgent;
