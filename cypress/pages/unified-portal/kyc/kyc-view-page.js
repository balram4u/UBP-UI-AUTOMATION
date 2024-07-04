const VIEW_BUTTON = "//div[@role='group']/a[1]";
const EDIT_BUTTON = "//span[contains(text(),'Edit')]";
const VALIDATE_FIRST_NAME = "//h6[contains(text(),'First Name')]/parent::div/following-sibling::div[1]/h6";
const VALIDATE_LAST_NAME = "//h6[contains(text(),'Last Name')]/parent::div/following-sibling::div[1]/h6";
const VALIDATE_STORE_LICENSE = "//h6[contains(text(),'Store License')]/parent::div/following-sibling::div[1]/h6";
const VALIDATE_NATIONAL_ID = "//div/h6[text()='National Id']/parent::div/following-sibling::div[1]/h6";
const VALIDATE_TAX_ID = "//h6[contains(text(),'Tax Id')]/parent::div/following-sibling::div[1]/h6";
const VALIDATE_STREET = "//h6[contains(text(),'Street')]/parent::div/following-sibling::div[1]/h6";
const VALIDATE_CITY = "//h6[contains(text(),'City')]/parent::div/following-sibling::div[1]/h6";
const VALIDATE_DISTRICT = "//h6[contains(text(),'District')]/parent::div/following-sibling::div[1]/h6";
const VALIDATE_STATE = " //h6[contains(text(),'State')]/parent::div/following-sibling::div[1]/h6";
const VALIDATE_COUNTRY = "//h6[contains(text(),'Country')]/parent::div/following-sibling::div[1]/h6";
const VALIDATE_ZIPCODE = "//h6[contains(text(),'Zip Code')]/parent::div/following-sibling::div[1]/h6";
const VALIDATE_LATTITUDE = "//h6[contains(text(),'Latitude')]/parent::div/following-sibling::div[1]/h6";
const VALIDATE_LONGITUDE = "//h6[contains(text(),'Longitude')]/parent::div/following-sibling::div[1]/h6";
const VALIDATE_EMAIL_ID = "//h6[contains(text(),'Email ID')]/parent::div/following-sibling::div[1]/h6";
const VALIDATE_COMPANY_NAME = "//div/h6[text()='Company Name']/parent::div/following-sibling::div[1]/h6";
const VALIDATE_COMMERCIAL_REGISTRATION_NUMBER = "//div/h6[text()='Commercial Registration Number']/parent::div/following-sibling::div[1]/h6";
const VALIDATE_COMPANY_ADDRESS = "//div/h6[text()='Address']/parent::div/following-sibling::div[1]/h6";
const VALIDATE_CONTACT_PERSON = "//div/h6[text()='Contact Person']/parent::div/following-sibling::div[1]/h6";
const VALIDATE_TEL_NO = "//div/h6[text()='Tel no']/parent::div/following-sibling::div[1]/h6";
const KYC = "//div/p[text() = 'KYC']";
class viewkyc {
  static validateCompayName(companyName) {
    cy.log('validate company Name');
    cy.xpath(VALIDATE_COMPANY_NAME).should('have.text', companyName);
  }

  static validateCommercialRegistrationNo(commercialRegistrationNo) {
    cy.log('validate commercial Registratio nNo');
    cy.xpath(VALIDATE_COMMERCIAL_REGISTRATION_NUMBER).should('have.text', commercialRegistrationNo);
  }

  static validateCompanyAddress(companyAddress) {
    cy.log('validate company Address');
    cy.xpath(VALIDATE_COMPANY_ADDRESS).should('have.text', companyAddress);
  }

  static validateContactPerson(contactPerson) {
    cy.log('validate company Address');
    cy.xpath(VALIDATE_CONTACT_PERSON).should('have.text', contactPerson);
  }

  static validateCompanyTelephoneNo(companyTelephoneNo) {
    cy.log('validate company Address');
    cy.xpath(VALIDATE_TEL_NO).should('have.text', companyTelephoneNo);
  }

  static clickOnViewButton() {
    cy.log('click on view button');
    cy.xpath(VIEW_BUTTON).click();
  }

  static clickOnEditButton() {
    cy.log('click on edit button');
    cy.xpath(EDIT_BUTTON).click();
  }

  static validateFirstName(FIRST_NAME) {
    cy.log('validate First Name');
    cy.xpath(VALIDATE_FIRST_NAME).should('have.text', FIRST_NAME);
  }

  static validateLastName(LAST_NAME) {
    cy.log('validate Last Name');
    cy.xpath(VALIDATE_LAST_NAME).should('have.text', LAST_NAME);
  }

  static validaStoreLicense(LICENE) {
    cy.log('validate Store License');
    cy.xpath(VALIDATE_STORE_LICENSE).should('have.text', LICENE);
  }

  static validateTaxId(TAX_ID) {
    cy.log('validate Tax Id');
    cy.xpath(VALIDATE_TAX_ID).should('have.text', TAX_ID);
  }

  static validateNationalId(NATIONAL_ID) {
    cy.log('validate National Id');
    cy.xpath(VALIDATE_NATIONAL_ID).should('have.text', NATIONAL_ID);
  }

  static validateStreet(STREET) {
    cy.log('validate Street');
    cy.xpath(VALIDATE_STREET).should('have.text', STREET);
  }

  static validateCity(CITY) {
    cy.log('validate City');
    cy.xpath(VALIDATE_CITY).should('have.text', CITY);
  }

  static validateDistrict(DISTRICT) {
    cy.log('validate District');
    cy.xpath(VALIDATE_DISTRICT).should('have.text', DISTRICT);
  }

  static validateState(STATE) {
    cy.log('validate State');
    cy.xpath(VALIDATE_STATE).should('have.text', STATE);
  }

  static validateCountry(COUNTRY) {
    cy.log('validate Country');
    cy.xpath(VALIDATE_COUNTRY).should('have.text', COUNTRY);
  }

  static validateZipCode(ZIPCODE) {
    cy.log('validate Zip Code');
    cy.xpath(VALIDATE_ZIPCODE).should('have.text', ZIPCODE);
  }

  static validateLatitude(LATTITUDE) {
    cy.log('validate Latitude');
    cy.xpath(VALIDATE_LATTITUDE).should('have.text', LATTITUDE);
  }

  static validateLongitude(LONGITUDE) {
    cy.log('validate Longitude');
    cy.xpath(VALIDATE_LONGITUDE).should('have.text', LONGITUDE);
  }

  static validateEmailId(EMAIL_ID) {
    cy.log('validate EMAIL ID');
    cy.xpath(VALIDATE_EMAIL_ID).should('have.text', EMAIL_ID);
  }

  static clickKYC() {
    cy.log('click on KYC');
    cy.xpath(KYC).click();
  }

  static verifyKycOptions(option) {
    cy.log('verify options');
    cy.xpath(`//div/p[text() = '${option}']`).should('be.visible');
  }

  static verifyKycOptionsNotVisible(option) {
    if (option !== "") {
      cy.log('verify options');
      cy.xpath(`//div/p[text() = '${option}']`).should('not.exist');
    }
  }
}
export default viewkyc;
