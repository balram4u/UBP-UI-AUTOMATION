class ViewPasswordPolicyPage {
  static verifyPasswordPolicyDetails(parameter, value) {
    value = value.replace(" ", "");
    cy.xpath(`//p[text()='${parameter}']/parent::div/following-sibling::div/p[contains(text(),'${value}')]`).should('have.text', value);
  }
}

export default ViewPasswordPolicyPage;
