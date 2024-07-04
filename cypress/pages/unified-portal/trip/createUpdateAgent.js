const TXT_MAXCOUNT = "//input[@name='maxCount']";
const TXT_VOLUMECAPACITY = "//input[@name='volumeCapacity']";
const TXT_WEIGHTCAPACITY = "//input[@name='weightCapacity']";
const BTN_UPDATE = "//button/span[text()='Update']";
const ALERTMESSAGE = "#notistack-snackbar";

class createUpdateAgent {
  static fillMaxCount(value) {
    cy.log('fill MaxCount for create or Update Agent');
    cy.xpath(TXT_MAXCOUNT).clear().type(value);
  }

  static fillVolumeCapacity(value) {
    cy.log('fill Volume Capacity for create or Update Agent');
    cy.xpath(TXT_VOLUMECAPACITY).clear().type(value);
  }

  static fillWeightCapacity(value) {
    cy.log('fill Weight Capacity for create or Update Agent');
    cy.xpath(TXT_WEIGHTCAPACITY).clear().type(value);
  }

  static clickOnUpdate() {
    cy.log('click On Update');
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
