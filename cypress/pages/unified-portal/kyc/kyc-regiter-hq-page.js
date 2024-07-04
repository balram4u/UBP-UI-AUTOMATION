// personal info
const HQ_NAME = "//input[@name='firstName']";
const HQ_CODE = "//input[@name='customerId']";
const ID = "//input[@name='additionalFields.dealerId']";
const JURIDICAL_NAME = "//input[@name='familyName']";
const MOBILE_NO = "//input[@name='msisdn']";
const EMAIL = "//input[@name='email']";
const ALTERNATE_EMAIL = "//input[@name='additionalFields.alternateEmail']";
const CATEGORY = "//input[@id='combo-box-additionalFields.dealerCategory']";
const MANAGER = "//input[@id='combo-box-additionalFields.dealerManager']";
const ALTERNATE_MANAGER = "//input[@id='combo-box-additionalFields.alternateManager']";
const COMPANY_REGISTRATION_NO = "//input[@name='additionalFields.companyRegistration']";
const TAX_REGISTRATION = "//input[@name='additionalFields.taxRegistration']";
const SHIP_LOCATION = "//input[@name='additionalFields.shipTo']";
// ADDRESS INFO
const ADDRESS = "//input[@name='street']";
const POSTAL_CODE = "//input[@name='zipcode']";
const CITY = "//input[@name='city']";
const ALTERANATE_ADDRESS = "//input[@name='additionalFields.alternateAddress']";
const ALTERANATE_POSTAL_CODE = "//input[@name='additionalFields.alternateZip']";
const ALTERNATE_CITY = "//input[@name='additionalFields.alternateCity']";

// ADDITIONAL INFO
const PARENT = "//input[@name='parentResellerId']";
const STATUS = "//input[@id='combo-box-status']";
const USER_SUBTYPE = "//input[@name='additionalFields.sincId']";
const KEY_CONTACT_PERSON = "//input[@name='additionalFields.keyPerson']";
const KEY_CONTACT_NUMBER = "//input[@name='additionalFields.keyPersonMobile']";
const KEY_CONTACT_EMAIL_ADDRESS = "//input[@name='additionalFields.keyPersonEmail']";
const ALTERNATE_CONTACT_PERSON = "//input[@name='additionalFields.alternateKeyPerson']";
const ALTERNATE_MOBILE_NO = "//input[@name='additionalFields.alternateKeyPersonMobile']";
const ALTERNATE_CONTACT_EMAIL_ADDRESS = "//input[@name='additionalFields.alternateKeyPersonEmail']";
// BANK DETAILS
const BANK_NAME = "//input[@name='additionalFields.bankName']";
const BANK_BRANCH = "//input[@name='additionalFields.bankBranch']";
const ACCOUNT_NAME = "//input[@name='additionalFields.accountName']";
const ACCOUNT_NO = "//input[@name='additionalFields.accountNo']";
const PAYMENT_CURRENCY = "//input[@name='additionalFields.paymentCurrency']";
const SWIFT_CODE = "//input[@name='additionalFields.swiftCode']";
const ROUTING_METSUBDISTRIBUTOR = "//input[@name='additionalFields.routingMetsubdistributor']";
const ROUTING_CODE = "//input[@name='additionalFields.routingCode']";
const BANK_CITY = "//input[@name='additionalFields.bankCityTown']";
const BANK_PHONE = "//input[@name='additionalFields.bankPhone']";
const CONTACT_ID = "//input[@id='combo-box-additionalFields.contractId']";

const NEXT_BUTTON = "//span[contains(text(),'Next')]";
class kycHQPage {
  static typeHQName(hqName) {
    cy.log(`Parent Category Name is: ${hqName}`);
    if (hqName !== " ") {
      cy.log('hqName selection block');
      cy.xpath(HQ_NAME).type(hqName);
    }
  }

  static typeHQCode(hqCode) {
    cy.log(`Parent Category Name is: ${hqCode}`);
    if (hqCode !== " ") {
      cy.log('hqCode selection block');
      cy.xpath(HQ_CODE).type(hqCode);
    }
  }

  static typeHQId(hQId) {
    cy.log(`Parent Category Name is: ${hQId}`);
    if (hQId !== " ") {
      cy.log('hQId selection block');
      cy.xpath(ID).type(hQId);
    }
  }

  static typeHQJuridicalName(juridicalName) {
    cy.log(`Parent Category Name is: ${juridicalName}`);
    if (juridicalName !== " ") {
      cy.log('juridicalName selection block');
      cy.xpath(JURIDICAL_NAME).type(juridicalName);
    }
  }

  static typeHQMobileNo(mobileNo) {
    cy.log(`Parent Category Name is: ${mobileNo}`);
    if (mobileNo !== " ") {
      cy.log('MOBILE_NO selection block');
      cy.xpath(MOBILE_NO).type(mobileNo);
    }
  }

  static typeHQEmail(email) {
    cy.log(`Parent Category Name is: ${email}`);
    if (email !== " ") {
      cy.log('email selection block');
      cy.xpath(EMAIL).type(email);
    }
  }

  static typeHQAlternateEmail(alternateEmail) {
    cy.log(`Parent Category Name is: ${alternateEmail}`);
    if (alternateEmail !== " ") {
      cy.log('alternateEmail selection block');
      cy.xpath(ALTERNATE_EMAIL).type(alternateEmail);
    }
  }

  static selectHQCategory(category) {
    cy.log(`Parent Category Name is: ${category}`);
    if (category !== " ") {
      cy.log('category selection block');
      cy.xpath(CATEGORY).type(category);
      cy.contains(category).click();
    }
  }

  static selectHQManager(manager) {
    cy.log(`Parent Category Name is: ${manager}`);
    if (manager !== " ") {
      cy.log('manager selection block');
      cy.xpath(MANAGER).type(manager);
      cy.contains(manager).click();
    }
  }

  static selectHQAlternateManager(alternateManager) {
    cy.log(`Parent Category Name is: ${alternateManager}`);
    if (alternateManager !== " ") {
      cy.log('alternateManager selection block');
      cy.xpath(ALTERNATE_MANAGER).type(alternateManager);
      cy.contains(alternateManager).click();
    }
  }

  static typeHQCompanyRegistrationNo(companyRegistrationNo) {
    cy.log(`Parent Category Name is: ${companyRegistrationNo}`);
    if (companyRegistrationNo !== " ") {
      cy.log('companyRegistrationNo selection block');
      cy.xpath(COMPANY_REGISTRATION_NO).type(companyRegistrationNo);
    }
  }

  static typeHQTaxRegistration(taxRegistration) {
    cy.log(`Parent Category Name is: ${taxRegistration}`);
    if (taxRegistration !== " ") {
      cy.log('taxRegistration selection block');
      cy.xpath(TAX_REGISTRATION).type(taxRegistration);
    }
  }

  static typeHQShipLocation(shipLocation) {
    cy.log(`Parent Category Name is: ${shipLocation}`);
    if (shipLocation !== " ") {
      cy.log('shipLocation selection block');
      cy.xpath(SHIP_LOCATION).type(shipLocation);
    }
  }

  // address info
  static typeHQAddress(address) {
    cy.log(`Parent Category Name is: ${address}`);
    if (address !== " ") {
      cy.log('address selection block');
      cy.xpath(ADDRESS).type(address);
    }
  }

  static typeHQPostalCode(postalCode) {
    cy.log(`Parent Category Name is: ${postalCode}`);
    if (postalCode !== " ") {
      cy.log('postalCode selection block');
      cy.xpath(POSTAL_CODE).type(postalCode);
    }
  }

  static typeHQCity(hqcity) {
    cy.log(`Parent Category Name is: ${hqcity}`);
    if (hqcity !== " ") {
      cy.log('city selection block');
      cy.xpath(CITY).type(hqcity);
    }
  }

  static typeHQAlternateAddress(alternateAddress) {
    cy.log(`Parent Category Name is: ${alternateAddress}`);
    if (alternateAddress !== " ") {
      cy.log('alternateAddress selection block');
      cy.xpath(ALTERANATE_ADDRESS).type(alternateAddress);
    }
  }

  static typeHQAlternatePostalcode(alternatePostalcode) {
    cy.log(`Parent Category Name is: ${alternatePostalcode}`);
    if (alternatePostalcode !== " ") {
      cy.log('alternatePostalcode selection block');
      cy.xpath(ALTERANATE_POSTAL_CODE).type(alternatePostalcode);
    }
  }

  static typeHQAlternateCity(alternateCity) {
    cy.log(`Parent Category Name is: ${alternateCity}`);
    if (alternateCity !== " ") {
      cy.log('alternateCity selection block');
      cy.xpath(ALTERNATE_CITY).type(alternateCity);
    }
  }

  static typeParent(parent) {
    cy.xpath(PARENT).type(parent);
  }

  static selectStatus(status) {
    cy.xpath(STATUS).type(status);
    cy.contains(status).click();
  }

  static typeUserSubtType(userSubtType) {
    cy.xpath(USER_SUBTYPE).type(userSubtType);
  }

  static typeKeyContactPerson(KeyContactPerson) {
    cy.xpath(KEY_CONTACT_PERSON).type(KeyContactPerson);
  }

  static typeKeyContactNumber(keyContactNumber) {
    cy.xpath(KEY_CONTACT_NUMBER).type(keyContactNumber);
  }

  static typeKeyContactEmailAddress(keyContactEmailAddress) {
    cy.xpath(KEY_CONTACT_EMAIL_ADDRESS).type(keyContactEmailAddress);
  }

  static typeAlternateContatcPerson(alternateContatcPerson) {
    cy.xpath(ALTERNATE_CONTACT_PERSON).type(alternateContatcPerson);
  }

  static typeAlternateMobileNo(alternateMobileNo) {
    cy.xpath(ALTERNATE_MOBILE_NO).type(alternateMobileNo);
  }

  static typeAlternateContactEmailAddress(alternateContactEmailAddress) {
    cy.xpath(ALTERNATE_CONTACT_EMAIL_ADDRESS).type(alternateContactEmailAddress);
  }

  static typeBankName(bankName) {
    cy.xpath(BANK_NAME).type(bankName);
  }

  static typeBankBranch(bankBranch) {
    cy.xpath(BANK_BRANCH).type(bankBranch);
  }

  static typeAccountName(accountName) {
    cy.xpath(ACCOUNT_NAME).type(accountName);
  }

  static typeAccountNo(accountNo) {
    cy.xpath(ACCOUNT_NO).type(accountNo);
  }

  static typePaymentCurrency(paymentCurrency) {
    cy.xpath(PAYMENT_CURRENCY).type(paymentCurrency);
  }

  static typeSwiftCode(swiftCode) {
    cy.xpath(SWIFT_CODE).type(swiftCode);
  }

  static typeRoutingMetSubDistributor(routingMetSubDistributor) {
    cy.xpath(ROUTING_METSUBDISTRIBUTOR).type(routingMetSubDistributor);
  }

  static typeRoutingCode(rout) {
    cy.xpath(ROUTING_CODE).type(rout);
  }

  static typeBankCity(bankCity) {
    cy.xpath(BANK_CITY).type(bankCity);
  }

  static typeBankPhone(bankPhone) {
    cy.xpath(BANK_PHONE).type(bankPhone);
  }

  static selectContactID(contactID) {
    cy.xpath(CONTACT_ID).type(contactID);
    cy.contains(contactID).click();
  }

  static clicNextButton() {
    cy.xpath(NEXT_BUTTON).click();
  }
}
export default kycHQPage;
