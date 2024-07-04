const TRANSFER_BUTTON = "//span[text()='Transfer']";

class ManualAdjustmentPage {
  static clickOnTransfer() {
    cy.log('Click on transfer button');
    cy.xpath(TRANSFER_BUTTON).click();
  }
}

export default ManualAdjustmentPage;
