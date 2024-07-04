// dist,sub-dist,resellers,BA address
const BRANCH_LATTITUDE = "//input[@name='latitude']";
const BRANCH_LONGITUDE = "//input[@name='longitude']";
const BRANCH_REGION = "//select[@id='region-drop-down']";
const BRANCH_SALES_AREA = "//select[@id='salesArea-drop-down']";
const BRANCH_CLUSTER = "//select[@id='cluster-drop-down']";
const CITY = "#city-input";
const DISTRICT = "#district-input";
const STATE = "#state-input";
const COUNTRY = "#country-input";
const EMAIL = "#email-input";
const RESELLER_PASSWORD = "#password-input";
const NEXT_BUTTON = "//span[text()='Next']/..";
class AddressInfo {
  static selectBranchRegion(branchRegion) {
    cy.log(`Parent Category Name is: ${branchRegion}`);
    if (branchRegion !== " ") {
      cy.log('branchCity selection block');
      cy.xpath(BRANCH_REGION).select(branchRegion);
    }
  }

  static selectBranchSalesArea(branchSalesArea) {
    cy.log(`Parent Category Name is: ${branchSalesArea}`);
    if (branchSalesArea !== " ") {
      cy.log('branchSalesArea selection block');
      cy.xpath(BRANCH_SALES_AREA).select(branchSalesArea);
    }
  }

  static selectBranchCluster(branchCluster) {
    cy.log(`Parent Category Name is: ${branchCluster}`);
    if (branchCluster !== " ") {
      cy.log('branchCluster selection block');
      cy.xpath(BRANCH_CLUSTER).select(branchCluster);
    }
  }

  static typeBranchLattitude(branchLattitude) {
    cy.log(`Parent Category Name is: ${branchLattitude}`);
    if (branchLattitude !== " ") {
      cy.log('branchLattitude selection block');
      cy.xpath(BRANCH_LATTITUDE).clear();
      cy.xpath(BRANCH_LATTITUDE).type(branchLattitude).should('have.value', branchLattitude);
    }
  }

  static typeBranchLongitude(branchLongitude) {
    cy.log(`Parent Category Name is: ${branchLongitude}`);
    if (branchLongitude !== " ") {
      cy.log('branchLongitude selection block');
      cy.xpath(BRANCH_LONGITUDE).clear();
      cy.xpath(BRANCH_LONGITUDE).type(branchLongitude).should('have.value', branchLongitude);
    }
  }

  static enterCity(city) {
    if (city !== "") {
      cy.log("enter city");
      cy.get(CITY).clear().type(city);
    }
  }

  static enterDistrict(district) {
    if (district !== "") {
      cy.log("enter district");
      cy.get(DISTRICT).clear().type(district);
    }
  }

  static enterState(state) {
    if (state !== "") {
      cy.log("enter state");
      cy.get(STATE).clear().type(state);
    }
  }

  static enterCountry(country) {
    if (country !== "") {
      cy.log("enter country");
      cy.get(COUNTRY).clear().type(country);
    }
  }

  static enterEmail(email) {
    if (email !== "") {
      cy.log("enter email");
      cy.get(EMAIL).clear().type(email);
    }
  }

  static enterResellerPassword(resellerPassword) {
    if (resellerPassword !== "") {
      cy.log("enter reseller password");
      cy.get(RESELLER_PASSWORD).clear().type(resellerPassword);
    }
  }

  static clickNext() {
    cy.wait(1000);
    cy.log("click next");
    cy.xpath(NEXT_BUTTON).should('be.visible').click();
  }

  static fillFieldValues(fieldName, fieldValue) {
    cy.log('fill field details');
    cy.xpath(`//label[contains(text(),'${fieldName}')]/..//input`).clear().type(fieldValue);
  }
}
export default AddressInfo;
