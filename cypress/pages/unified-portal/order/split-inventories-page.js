const SUBMIT_XPATH = "//span[text()='Submit']";
class SplitInventoriesPage {
  static enterSplitValue(endSerial, splitValue) {
    cy.get(`[value="${endSerial}"]`).clear().type(splitValue);
  }

  static submitForSplit() {
    cy.xpath(SUBMIT_XPATH).click();
  }
}

export default SplitInventoriesPage;
