const COMPANY_NAME = "#companyName-input";
const SUBMIT_BUTTON = "//span[text()='Submit']/..";

class ResellerCompanyInfo {
  static enterCompanyName(companyName) {
    if (companyName !== "") {
      cy.log("enter email");
      cy.get(COMPANY_NAME).clear().type(companyName);
    }
  }

  static clickSubmit() {
    cy.log("Click submit");
    cy.xpath(SUBMIT_BUTTON).click();
  }
}
export default ResellerCompanyInfo;
