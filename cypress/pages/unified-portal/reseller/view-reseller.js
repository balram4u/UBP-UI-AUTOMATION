const VERIFY_PARENT_RESELLER_NAME = "//p[contains(text(),'Reseller Path')]/parent::div/following-sibling::div[1]/p";

class ViewReseller {
  
  static getPassword ;
  static verifyParentResellerName(PARENT) {
    cy.log('verify the Parent Reseller Name');
    cy.xpath(VERIFY_PARENT_RESELLER_NAME).invoke('text').should('contains', PARENT);
  }

  static clickOnResetPassword(userId) {
    cy.log(`click on reset password button of User id ${userId}`);
    cy.xpath(`//p[text()='${userId}']/../preceding-sibling::div//span[text()='Reset Password']`).click();
  }

  static clickOnExpiredPassword(userId) {
    cy.log(`click on reset password button of User id ${userId}`);
    cy.xpath(`//p[text()='${userId}']/../preceding-sibling::div//span[text()='Expired Password']`).click();
  }

  static getResettedPassword(userId) {
    cy.log(`get on resetted password of User id ${userId}`);
    cy.xpath(`(//p[text()='${userId}']/../following-sibling::div//p[text()='Password']/../following-sibling::div//p)[1]`).then((password) => {
      this.getPassword = password.text();
      cy.log('get password', this.getPassword);
    });
  }
}

export default ViewReseller;