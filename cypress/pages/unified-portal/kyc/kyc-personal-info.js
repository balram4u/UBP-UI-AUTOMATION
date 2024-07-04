// dist,sub-dist,resellers,BA
import URL_PATH from "../../../common/Route";

const RESELLER_TYPE = "//select[@name='resellerType']";
const FIRST_NAME = "//input[@name='firstName']";
const MIDDLE_NAME = "//input[@name='extraFields.middleName']";
const LAST_NAME = "//input[@name='extraFields.lastName']";
const JURIDICIAL_NAME = "//input[@name='familyName']";
const USER_NAME = "//input[@name='customerId']";
const MOBILE_NO = "//input[@name='msisdn']";
const EMAIL = "//input[@name='email']";
const ID = "//input[@name='extraFields.dealerId']";
const ALTERNATE_EMAIL = "//input[@name='extraFields.alternateEmail']";
const CATEGORY = "//input[@name='extraFields.dealerCategory']";
const MANAGER = "//input[@name='extraFields.dealerManager']";
const ALTERNATE_MANAGER = "//input[@name='extraFields.alternateDealerManager']";
const COMPANY_REGISTRATION_NO = "//input[@name='extraFields.companyRegistration']";
const TAX_REGISTRATION = "//input[@name='extraFields.taxRegistration']";
const SHIP_LOCATION = "//input[@name='extraFields.shipTo']";
const BRANCH_HQ_CODE = "//input[@name='parentResellerId']";
const AGENT_TYPE = "//input[@id='combo-box-extraFields.agentType']";
const BRANCH_REG_NO = "//input[@name='extraFields.branchRegistration']";
const TILL_NO = "//input[@name='extraFields.tillNo']";
const SHORT_CODE = "//input[@name='extraFields.shortCode']";
const OTHERS_NAME = "//input[@name='extraFields.otherName']";
const DSA_CODE = "//input[@name='extraFields.dealerCode']";
const DSA_NATIONAL_ID = "//input[@name='extraFields.customer_national_identification_id']";
const DSA_GENDER = "//input[@id='combo-box-extraFields.gender']";
const DSA_ROLE = "//input[@name='extraFields.role']";
const DSA_DATE_OF_BIRTH = "//input[@name='extraFields.dob']";
const POS_CODE = "//input[@name='extraFields.dealerCode']";
const LOGOUT = "//span[contains(text(),'Logout')]";
const NEXT_BUTTON = "//span[contains(text(),'Next')]/..";
const PREVIOUS_BUTTON = "//span[contains(text(),'Previous')]";
const RESET_BUTTON = "//span[contains(text(),'Previous')]";
const SUBMIT_BUTTON = "//span[contains(text(),'Submit')]";
const POS_CHANNEL_TYPE = "//input[@id='combo-box-extraFields.channelType']";
const CHANNEL_TYPE = "//select[@id='extraFields.channel-drop-down']";
const DIRECT_TYPE = "//select[@id='extraFields.indirect-drop-down']";
const STORE_LICENSE = "//input[@name='extraFields.storeLicense']";
const NATIONAL_ID_TYPE = "//select[@id='extraFields.idType-drop-down']";
const NATIONAL_ID = "//input[@name='extraFields.idNumber']";
const TAX_ID = "//input[@name='extraFields.taxId']";
const LEFT_MENU_KYC = "//p[text()='KYC']";
const LEFIT_MENU_KYC_REGISTER = "//p[text()='REGISTER']";
const DEALER_CODE = "//input[@id='combo-box-extraFields.dealerCode']";
const SELECT_CATEGORY = "//input[@id='combo-box-extraFields.orgCategory']";
const CLOSE_BUTTON = '//button/span[text()="Close"]';
const VIEW_DEACTIVATED_NATIONAL_ID = '//div/label[text()="National Id"]/../../button//*[local-name()="svg"]';
const VIEW_STATUS_OF_NATIONAL_ID = '//*[@id="dailog-content-box"]/div/table/tbody/tr/td[text()="Deactivated"]';
const WAREHOUSE_TYPE = "//input[@id = 'extraFields-warehouseType-autocomplete']";
const PARENT_RESELLER_CODE = "//input[@id = 'reseller-parents-drop-down']";
const NOT_AUTHORIZED = "//h2[text() = ' Not Authroized ']";
const UPDATE = "//button/span[text() = 'Update']";
const SELECT_CONTRACT = "//select[@id='reseller-contract-drop-down']";
class personalInfo {
  static clickOnKycRegisterUsingLeftMenu() {
    cy.log('Open KYC register page');
    cy.xpath(LEFT_MENU_KYC).should('be.visible');
    cy.xpath(LEFT_MENU_KYC).click();
    cy.wait(1000);
    cy.xpath(LEFT_MENU_KYC).click();
    cy.xpath(LEFIT_MENU_KYC_REGISTER).click();
    cy.url().should('contain', URL_PATH.kycRegister);
  }

  static clickOnKycRegisterUsingUrl() {
    cy.log('Open KYC register page');
    cy.visit(URL_PATH.kycRegister);
    cy.wait(8000);
    cy.url().should('contain', URL_PATH.kycRegister);
  }

  static clickOnKycSearchRUsingUrl() {
    cy.log('Open KYC Search page');
    cy.visit(URL_PATH.kycSearch);
  }

  static navigateToRegionsUsingUrl() {
    cy.log('Open KYC Search page');
    cy.visit(URL_PATH.regions);
  }

  static selectTypeOfReseller(resellerType) {
    cy.log('Select type of reseller');
    cy.xpath(RESELLER_TYPE).select(resellerType);
    cy.wait(2000);
  }

  static typeStoreLicense(storeLicense) {
    cy.log(`fill in hq data: ${storeLicense}`);
    if (storeLicense !== " ") {
      cy.log('Store License selection block');
      cy.xpath(STORE_LICENSE).clear();
      cy.xpath(STORE_LICENSE).type(storeLicense).should('have.value', storeLicense);
    }
  }

  static selectNationalIdType(nationalIdType) {
    cy.log(`select National id type: ${nationalIdType}`);
    cy.xpath(NATIONAL_ID_TYPE).select(nationalIdType).should('have.value', nationalIdType);
  }

  static typeNationalId(nationalId) {
    cy.log(`fill in hq data: ${nationalId}`);
    if (nationalId !== " ") {
      cy.log('Store License selection block');
      cy.xpath(NATIONAL_ID).clear();
      cy.xpath(NATIONAL_ID).type(nationalId).should('have.value', nationalId);
    }
  }

  static typeTaxId(taxId) {
    cy.log(`fill in hq data: ${taxId}`);
    if (taxId !== " ") {
      cy.log('taxId selection block');
      cy.xpath(TAX_ID).clear();
      cy.xpath(TAX_ID).type(taxId).should('have.value', taxId);
    }
  }

  static typeFirstName(firstName) {
    cy.log(`fill in hq data: ${firstName}`);
    if (firstName !== " ") {
      cy.log('firstName selection block');
      cy.xpath(FIRST_NAME).clear();
      cy.xpath(FIRST_NAME).type(firstName).should('have.value', firstName);
    }
  }

  static typeMiddleName(MiddleName) {
    cy.log(`fill in hq data: ${MiddleName}`);
    if (MiddleName !== " ") {
      cy.log('MiddleName selection block');
      cy.xpath(MIDDLE_NAME).clear();
      cy.xpath(MIDDLE_NAME).type(MiddleName).should('have.value', MiddleName);
    }
  }

  static typeLastName(LastName) {
    cy.log(`fill in hq data: ${LastName}`);
    if (LastName !== " ") {
      cy.log('LastName selection block');
      cy.xpath(LAST_NAME).clear();
      cy.xpath(LAST_NAME).type(LastName).should('have.value', LastName);
    }
  }

  static typeFamilyName(FamilyName) {
    cy.log(`fill in hq data: ${FamilyName}`);
    if (FamilyName !== " ") {
      cy.log('FamilyName selection block');
      cy.xpath(JURIDICIAL_NAME).clear();
      cy.xpath(JURIDICIAL_NAME).type(FamilyName).should('have.value', FamilyName);
    }
  }

  static typeUserName(username) {
    cy.log(`fill in hq data: ${username}`);
    if (username !== " ") {
      cy.log('username selection block');
      cy.xpath(USER_NAME).clear();
      cy.xpath(USER_NAME).type(username).should('have.value', username);
    }
  }

  static typeJuridicalName(juridicalName) {
    cy.log(`fill in hq data: ${juridicalName}`);
    if (juridicalName !== " ") {
      cy.log('juridicalName selection block');
      // cy.xpath(JURDICALE_NAME).clear();
      // cy.xpath(JURDICALE_NAME).type(juridicalName).should('have.value', juridicalName);
      cy.xpath(JURIDICIAL_NAME).type(juridicalName);
    }
  }

  static typeMobileNo(mobileNo) {
    cy.log(`fill in hq data: ${mobileNo}`);
    if (mobileNo !== " ") {
      cy.log('mobileNo selection block');
      cy.xpath(MOBILE_NO).clear();
      cy.xpath(MOBILE_NO).type(mobileNo).should('have.value', mobileNo);
    }
  }

  static typeEmail(email) {
    cy.log(`fill in hq data: ${email}`);
    if (email !== " ") {
      cy.log('email selection block');
      cy.xpath(EMAIL).clear();
      cy.xpath(EMAIL).type(email).should('have.value', email);
    }
  }

  // HQ personal deatails methods
  static typeHQName(hqName) {
    cy.log(`Parent Category Name is:${hqName}`);
    if (hqName !== " ") {
      cy.log('hqName selection block');
      // cy.xpath(HQ_NAME).type(hqName).should('have.value', hqName);
      cy.xpath(FIRST_NAME).type(hqName).should('have.value', hqName);
    }
  }

  static typeHQCode(hqCode) {
    cy.log(`Parent Category Name is: ${hqCode}`);
    if (hqCode !== " ") {
      cy.log('hqCode selection block');
      // cy.xpath(HQ_CODE).type(hqCode).should('have.value', hqCode);
      cy.xpath(USER_NAME).type(hqCode).should('have.value', hqCode);
    }
  }

  static checkResellerIdDisabled() {
    cy.log('checkResellerIdDisabled');
    // cy.xpath(HQ_CODE).should('be.disabled');
    cy.xpath(USER_NAME).should('be.disabled');
  }

  static typeHQId(hQId) {
    cy.log(`Parent Category Name is: ${hQId}`);
    if (hQId !== " ") {
      cy.log('hQId selection block');
      cy.xpath(ID).type(hQId).should('have.value', hQId);
    }
  }

  static typeHQJuridicalName(juridicalName) {
    cy.log(`Parent Category Name is: ${juridicalName}`);
    if (juridicalName !== " ") {
      cy.log('juridicalName selection block');
      // cy.xpath(JURIDICAL_NAME).type(juridicalName).should('have.value', juridicalName);
      cy.xpath(JURIDICIAL_NAME).type(juridicalName).should('have.value', juridicalName);
    }
  }

  static typeHQMobileNo(mobileNo) {
    cy.log(`Parent Category Name is: ${mobileNo}`);
    if (mobileNo !== " ") {
      cy.log('MOBILE_NO selection block');
      // cy.xpath(HQMOBILE_NO).type(mobileNo).should('have.value', mobileNo);
      cy.xpath(MOBILE_NO).type(mobileNo).should('have.value', mobileNo);
    }
  }

  static typeHQEmail(email) {
    cy.log(`Parent Category Name is: ${email}`);
    if (email !== " ") {
      cy.log('email selection block');
      // cy.xpath(HQEMAIL).type(email).should('have.value', email);
      cy.xpath(EMAIL).type(email).should('have.value', email);
    }
  }

  static typeHQAlternateEmail(alternateEmail) {
    cy.log(`Parent Category Name is: ${alternateEmail}`);
    if (alternateEmail !== " ") {
      cy.log('alternateEmail selection block');
      cy.xpath(ALTERNATE_EMAIL).type(alternateEmail).should('have.value', alternateEmail);
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
    }
  }

  static selectHQAlternateManager(alternateManager) {
    cy.log(`Parent Category Name is: ${alternateManager}`);
    if (alternateManager !== " ") {
      cy.log('alternateManager selection block');
      cy.xpath(ALTERNATE_MANAGER).type(alternateManager);
    }
  }

  static typeHQCompanyRegistrationNo(companyRegistrationNo) {
    cy.log(`Parent Category Name is: ${companyRegistrationNo}`);
    if (companyRegistrationNo !== " ") {
      cy.log('companyRegistrationNo selection block');
      cy.xpath(COMPANY_REGISTRATION_NO).type(companyRegistrationNo).should('have.value', companyRegistrationNo);
    }
  }

  static typeHQTaxRegistration(taxRegistration) {
    cy.log(`Parent Category Name is: ${taxRegistration}`);
    if (taxRegistration !== " ") {
      cy.log('taxRegistration selection block');
      cy.xpath(TAX_REGISTRATION).type(taxRegistration).should('have.value', taxRegistration);
    }
  }

  static typeHQShipLocation(shipLocation) {
    cy.log(`Parent Category Name is: ${shipLocation}`);
    if (shipLocation !== " ") {
      cy.log('shipLocation selection block');
      cy.xpath(SHIP_LOCATION).type(shipLocation).should('have.value', shipLocation);
    }
  }

  static typeBranchName(branchName) {
    cy.log(`Parent Category Name is: ${branchName}`);
    if (branchName !== " ") {
      cy.log('branchName selection block');
      // cy.xpath(BRANCH_NAME).type(branchName).should('have.value', branchName);
      cy.xpath(FIRST_NAME).type(branchName).should('have.value', branchName);
    }
  }

  static typeBranchCode(branchCode) {
    cy.log(`Parent Category Name is: ${branchCode}`);
    if (branchCode !== " ") {
      cy.log('branchCode selection block');
      // cy.xpath(BRANCH_CODE).type(branchCode);
      cy.xpath(USER_NAME).clear();
      cy.xpath(USER_NAME).type(branchCode);
    }
  }

  static typeBranchHQCode(branchHQCode) {
    cy.log(`Parent Category Name is: ${branchHQCode}`);
    if (branchHQCode !== " ") {
      cy.log('branchHQCode selection block');
      cy.xpath(BRANCH_HQ_CODE).clear();
      cy.xpath(BRANCH_HQ_CODE).type(branchHQCode).should('have.value', branchHQCode);
    }
  }

  static typeBranchAgentType(branchAgentType) {
    cy.log(`Parent Category Name is: ${branchAgentType}`);
    if (branchAgentType !== " ") {
      cy.log('branchAgentType selection block');
      cy.xpath(AGENT_TYPE).type(branchAgentType);
      cy.contains(branchAgentType).click();
    }
  }

  static typeBranchRegNo(branchRegNo) {
    cy.log(`Parent Category Name is: ${branchRegNo}`);
    if (branchRegNo !== " ") {
      cy.log('branchRegNo selection block');
      cy.xpath(BRANCH_REG_NO).type(branchRegNo).should('have.value', branchRegNo);
    }
  }

  static typeBranchTillNo(branchTillNo) {
    cy.log(`Parent Category Name is: ${branchTillNo}`);
    if (branchTillNo !== " ") {
      cy.log('branchTillNo selection block');
      cy.xpath(TILL_NO).type(branchTillNo).should('have.value', branchTillNo);
      cy.xpath(NEXT_BUTTON).click({ force: true });
    }
  }

  static typeBranchShortCode(branchShortCode) {
    cy.log(`Parent Category Name is: ${branchShortCode}`);
    if (branchShortCode !== " ") {
      cy.log('branchShortCode selection block');
      cy.xpath(SHORT_CODE).type(branchShortCode).should('have.value', branchShortCode);
    }
  }

  // dsa
  static typeDsaFirstName(dsaFirstName) {
    cy.log(`Parent Category Name is: ${dsaFirstName}`);
    if (dsaFirstName !== " ") {
      cy.log('dsaFirstName selection block');
      cy.xpath(FIRST_NAME).type(dsaFirstName).should('have.value', dsaFirstName);
    }
  }

  static typeDsaLastName(dsaLastName) {
    cy.log(`Parent Category Name is: ${dsaLastName}`);
    if (dsaLastName !== " ") {
      cy.log('dsaLastName selection block');
      cy.xpath(LAST_NAME).type(dsaLastName).should('have.value', dsaLastName);
    }
  }

  static typeDSAOtherName(dsaOtherName) {
    cy.log(`Parent Category Name is: ${dsaOtherName}`);
    if (dsaOtherName !== " ") {
      cy.log('dsaOtherName selection block');
      cy.xpath(OTHERS_NAME).type(dsaOtherName).should('have.value', dsaOtherName);
    }
  }

  static typeDSASalesAgentCode(dsaSalesAgentCode) {
    cy.log(`Parent Category Name is: ${dsaSalesAgentCode}`);
    if (dsaSalesAgentCode !== " ") {
      cy.log('dsaSalesAgentCode selection block');
      cy.xpath(USER_NAME).type(dsaSalesAgentCode).should('have.value', dsaSalesAgentCode);
    }
  }

  static typeDSABranchCode(dsaBranchCode) {
    cy.log(`Parent Category Name is: ${dsaBranchCode}`);
    if (dsaBranchCode !== " ") {
      cy.log('dsaBranchCode selection block');
      cy.xpath(BRANCH_HQ_CODE).type(dsaBranchCode).should('have.value', dsaBranchCode);
    }
  }

  static typeDSACode(dsaCode) {
    cy.log(`Parent Category Name is${dsaCode}`);
    if (dsaCode !== " ") {
      cy.log('dsaCode selection block');
      cy.xpath(DSA_CODE).type(dsaCode);
    }
  }

  static typeDSAJuridicalName(dsaJuridicalName) {
    cy.log(`Parent Category Name is: ${dsaJuridicalName}`);
    if (dsaJuridicalName !== " ") {
      cy.log('dsaJuridicalName selection block');
      // cy.xpath(JURDICALE_NAME).type(dsaJuridicalName).should('have.value', dsaJuridicalName);
      cy.xpath(JURIDICIAL_NAME).type(dsaJuridicalName).should('have.value', dsaJuridicalName);
    }
  }

  static typeDSAMobileNo(dsaMobileNo) {
    cy.log(`Parent Category Name is: ${dsaMobileNo}`);
    if (dsaMobileNo !== " ") {
      cy.log('dsaMobileNo selection block');
      cy.xpath(MOBILE_NO).type(dsaMobileNo).should('have.value', dsaMobileNo);
    }
  }

  static typeDSAEmail(dsaEmail) {
    cy.log(`Parent Category Name is: ${dsaEmail}`);
    if (dsaEmail !== " ") {
      cy.log('dsaEmail selection block');
      cy.xpath(EMAIL).type(dsaEmail).should('have.value', dsaEmail);
    }
  }

  static typeDSANationalId(dsaNationalId) {
    cy.log(`Parent Category Name is: ${dsaNationalId}`);
    if (dsaNationalId !== " ") {
      cy.log('dsaNationalId selection block');
      cy.xpath(DSA_NATIONAL_ID).type(dsaNationalId).should('have.value', dsaNationalId);
    }
  }

  static typeDSAGender(dsaGender) {
    cy.log(`Gender is:${dsaGender}`);
    if (dsaGender !== " ") {
      cy.log('dsaGender selection block');
      cy.xpath(DSA_GENDER).type(dsaGender);
      cy.contains(dsaGender).click();
    }
  }

  static typeDSARole(dsaRole) {
    cy.log(`Parent Category Name is:${dsaRole}`);
    if (dsaRole !== " ") {
      cy.log('dsaRole selection block');
      cy.xpath(DSA_ROLE).type(dsaRole).should('have.value', dsaRole);
    }
  }

  static typeDSADateOfBirth(dsaDateOfBirth) {
    cy.log(`Parent Category Name is:${dsaDateOfBirth}`);
    if (dsaDateOfBirth !== " ") {
      cy.log('dsaDateOfBirth selection block');
      cy.xpath(DSA_DATE_OF_BIRTH).clear();
      cy.xpath(DSA_DATE_OF_BIRTH).type(dsaDateOfBirth).should('have.value', dsaDateOfBirth);
    }
  }

  static typeDSATillNo(dsaTillNo) {
    cy.log(`Parent Category Name is:${dsaTillNo}`);
    if (dsaTillNo !== " ") {
      cy.log('dsaTillNo selection block');
      cy.xpath(TILL_NO).type(dsaTillNo).should('have.value', dsaTillNo);
    }
  }
  // POS TYPE RESELLER

  static typePOSName(posName) {
    cy.log(`Parent Category Name is:${posName}`);
    if (posName !== " ") {
      cy.log('posName selection block');
      cy.xpath(FIRST_NAME).type(posName).should('have.value', posName);
    }
  }

  static typePOSCustomerCode(posCustomerNo) {
    cy.log(`Parent Category Name is:${posCustomerNo}`);
    if (posCustomerNo !== " ") {
      cy.log('posCustomerNo selection block');
      cy.xpath(USER_NAME).type(posCustomerNo);
    }
  }

  static typePOSBranchCode(posBranchCode) {
    cy.log(`Parent Category Name is:${posBranchCode}`);
    if (posBranchCode !== " ") {
      cy.log('posBranchCode selection block');
      cy.xpath(BRANCH_HQ_CODE).type(posBranchCode).should('have.value', posBranchCode);
    }
  }

  static selectPOSCode(posCode) {
    cy.log(`Parent Category Name is:${posCode}`);
    if (posCode !== " ") {
      cy.log('posCode selection block');
      cy.xpath(POS_CODE).type(posCode);
    }
  }

  static typePOSJuridicalName(posJuridicalName) {
    cy.log(`Parent Category Name is:${posJuridicalName}`);
    if (posJuridicalName !== " ") {
      cy.log('posJuridicalName selection block');
      // cy.xpath(JURDICALE_NAME).type(posJuridicalName).should('have.value', posJuridicalName);
      cy.xpath(JURIDICIAL_NAME).type(posJuridicalName).should('have.value', posJuridicalName);
    }
  }

  static typePOSMobileNO(posMobileNO) {
    cy.log(`Parent Category Name is:${posMobileNO}`);
    if (posMobileNO !== " ") {
      cy.log('posMobileNO selection block');
      cy.xpath(MOBILE_NO).type(posMobileNO).should('have.value', posMobileNO);
    }
  }

  static typePOSEmailId(posEmailId) {
    cy.log(`Parent Category Name is:${posEmailId}`);
    if (posEmailId !== " ") {
      cy.log('posEmailId selection block');
      cy.xpath(EMAIL).type(posEmailId).should('have.value', posEmailId);
    }
  }

  static selectPOSChannelType(posChannelType) {
    cy.log(`Parent Category Name is:${posChannelType}`);
    if (posChannelType !== " ") {
      cy.log('posChannelType selection block');
      cy.xpath(POS_CHANNEL_TYPE).type(posChannelType);
      cy.contains(posChannelType).click();
    }
  }

  static selectChannelType(posChannelType) {
    cy.log(`Parent Category Name is:${posChannelType}`);
    if (posChannelType !== " ") {
      cy.xpath(CHANNEL_TYPE).select(posChannelType).should('have.value', posChannelType);
    }
  }

  // DIRECT_TYPE
  static selectDirectType(posDirectType) {
    cy.log(`Parent Category Name is:${posDirectType}`);
    if (posDirectType !== " ") {
      cy.log("ff");
      cy.xpath(DIRECT_TYPE).select(posDirectType).should('have.value', posDirectType);
    }
  }

  static typeMiniStoreFirstName(miniStoreFirstName) {
    cy.log(`Parent Category Name is:${miniStoreFirstName}`);
    if (miniStoreFirstName !== " ") {
      cy.log('miniStoreFirstName selection block');
      cy.xpath(FIRST_NAME).type(miniStoreFirstName).should('have.value', miniStoreFirstName);
    }
  }

  static typeMiniStoreMiddelName(miniStoreMiddleName) {
    cy.log(`Parent Category Name is:${miniStoreMiddleName}`);
    if (miniStoreMiddleName !== " ") {
      cy.log('miniStoreMiddleName selection block');
      cy.xpath(MIDDLE_NAME).type(miniStoreMiddleName).should('have.value', miniStoreMiddleName);
    }
  }

  static typeMiniStoreLastName(miniStoreLastName) {
    cy.log(`Parent Category Name is:${miniStoreLastName}`);
    if (miniStoreLastName !== " ") {
      cy.log('miniStoreLastName selection block');
      cy.xpath(LAST_NAME).type(miniStoreLastName).should('have.value', miniStoreLastName);
    }
  }

  static typeMiniStoreUserName(miniStoreUserName) {
    cy.log(`Parent Category Name is:${miniStoreUserName}`);
    if (miniStoreUserName !== " ") {
      cy.log('miniStoreUserName selection block');
      cy.xpath(USER_NAME).type(miniStoreUserName).should('have.value', miniStoreUserName);
    }
  }

  static typeMiniStoreJuriName(miniStoreJuriName) {
    cy.log(`Parent Category Name is:${miniStoreJuriName}`);
    if (miniStoreJuriName !== " ") {
      cy.log('miniStoreJuriName selection block');
      // cy.xpath(JURDICALE_NAME).type(miniStoreJuriName).should('have.value', miniStoreJuriName);
      cy.xpath(JURIDICIAL_NAME).type(miniStoreJuriName).should('have.value', miniStoreJuriName);
    }
  }

  static typeMiniStoreMobileNO(miniStoreMobileNO) {
    cy.log(`Parent Category Name is:${miniStoreMobileNO}`);
    if (miniStoreMobileNO !== " ") {
      cy.log('miniStoreMobileNO selection block');
      cy.xpath(MOBILE_NO).type(miniStoreMobileNO).should('have.value', miniStoreMobileNO);
    }
  }

  static typeMiniStoreEmial(miniStoreEmail) {
    cy.log(`Parent Category Name is:${miniStoreEmail}`);
    if (miniStoreEmail !== " ") {
      cy.log('miniStoreEmail selection block');
      cy.xpath(EMAIL).type(miniStoreEmail).should('have.value', miniStoreEmail);
    }
  }

  static clickLogoutButton() {
    cy.log('click on Logout Button');
    cy.xpath(LOGOUT).click();
  }

  static clickNextButton() {
    cy.log('click on Next Button');
    cy.wait(2000);
    cy.xpath(NEXT_BUTTON).click();
  }

  static clickPreviousButton() {
    cy.log('click on previous Button');
    cy.xpath(PREVIOUS_BUTTON).click();
  }

  static clickSubmitButton() {
    cy.log('click on Submit Button');
    cy.xpath(SUBMIT_BUTTON).click();
  }

  static clickResetButton() {
    cy.log('click on Reset Button');
    cy.xpath(RESET_BUTTON).click();
  }

  static clickOnKycApproveUsingUrl() {
    cy.log('Open KYC approve page');
    cy.visit(URL_PATH.kycApprove);
    cy.url().should('contain', URL_PATH.kycApprove);
  }

  static selectDealerCode(dealerCode) {
    cy.log(`Code Name is: ${dealerCode}`);
    if (dealerCode !== " ") {
      cy.log('category selection block');
      cy.xpath(DEALER_CODE).type(dealerCode);
      cy.contains(dealerCode).click();
    }
  }

  static selectCategory(category) {
    cy.log(`Parent Name is: ${category}`);
    if (category !== " ") {
      cy.log('category selection block');
      cy.xpath(SELECT_CATEGORY).type(category);
      cy.contains(category).click();
    }
  }

  static validateDeactivatedDSA() {
    cy.log('validating deactivated dsa');
    cy.xpath(VIEW_DEACTIVATED_NATIONAL_ID).click();
    cy.xpath(VIEW_STATUS_OF_NATIONAL_ID).should('be.visible');
    cy.xpath(CLOSE_BUTTON).click();
    cy.wait(1000);
  }

  static selectWarehouseType(warehouseType) {
    cy.log('select warehouse type');
    if (warehouseType !== "") {
      cy.xpath(WAREHOUSE_TYPE).type(warehouseType);
      cy.contains(warehouseType).click();
    }
  }

  static selectParentResellerCode(parentResellerCode) {
    cy.log('select parent reseller code');
    cy.xpath(PARENT_RESELLER_CODE).type(parentResellerCode);
    cy.contains(parentResellerCode).click();
  }

  static verifyNotAuthorized() {
    cy.log('verify not authorized');
    cy.xpath(NOT_AUTHORIZED).should('be.visible');
  }

  static typeInAnyField(fieldName, data) {
    cy.log(`type in: ${fieldName}, ${data}`);
    cy.xpath(`//label[text() = '${fieldName}']/following-sibling::div`).should('be.visible');
    cy.xpath(`//label[text() = '${fieldName}']/following-sibling::div`).type(data);
  }

  static verifyWarningMsg(fieldName, warningMsg) {
    cy.log('verify warning msg');
    cy.xpath(`//label[text() = '${fieldName}']/following-sibling::p[text() = "${warningMsg}"]`).should('be.visible');
  }

  static clickOnUpdate() {
    cy.log('click on update button');
    cy.xpath(UPDATE).click();
  }

  static verifyNextButtonDisabled() {
    cy.log('verify Next Button is disabled');
    cy.xpath(NEXT_BUTTON).should('have.attr', 'disabled');
  }

  static selectContractID(contractName) {
    cy.log('select contract name');
    cy.xpath(SELECT_CONTRACT).select(contractName);
  }
}
export default personalInfo;
