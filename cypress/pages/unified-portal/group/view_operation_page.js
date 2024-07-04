class ViewOperationPage {
  static verifyParameters(param) {
    cy.log('view parameters');
    if (param !== "") {
      const value = param.split("=");
      cy.xpath(`//p[contains(text(),'${value[0].trim()}')]/following-sibling::span[contains(text(),'${value[1].trim()}')]`).should('be.visible');
    }
  }
}
export default ViewOperationPage;
