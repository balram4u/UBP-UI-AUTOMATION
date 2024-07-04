/* eslint-disable camelcase */
// dist,sub-dist,resellers,BA additional info
const ROLE = "//input[@name='extraFields.role']";
const DESIGNATION = "//input[@name='extraFields.designation']";
const REPORTING_TO = "//input[@name='parentResellerId']";
// HQ additional info
const PARENT = "//input[@name='parentResellerId']";
const KEY_CONTACT_PERSON = "//input[@name='extraFields.keyPerson']";
const KEY_CONTACT_NUMBER = "//input[@name='extraFields.keyPersonMobile']";
const KEY_CONTACT_EMAIL_ADDRESS = "//input[@name='extraFields.keyPersonEmail']";
const ALTERNATE_CONTACT_PERSON = "//input[@name='extraFields.alternateKeyPerson']";
const ALTERNATE_MOBILE_NO = "//input[@name='extraFields.alternateKeyPersonMobile']";
const ALTERNATE_CONTACT_EMAIL_ADDRESS = "//input[@name='extraFields.alternateKeyPersonEmail']";

// BRANCH ADDITIONAL FIELD
const ASSOCIATED_WAREHOUSE = "//label[contains(text(),'Assoicated Warehouse')]/..//div/input";
const BRANCH_REGION_ABBREVIATED = "//input[@name='extraFields.regionAbbreviated']";
const BRANCH_CONTRACT_ID = "//input[@id='combo-box-extraFields.contractId']";
const BRANCH_USER_SUBTYPE = "//input[@id='combo-box-extraFields.snic_category']";

// bank details
const BANK_NAME = "//input[@name='extraFields.bankName']";
const BANK_BRANCH = "//input[@name='extraFields.bankBranch']";
const ACCOUNT_NAME = "//input[@name='extraFields.accountName']";
const ACCOUNT_NO = "//input[@name='extraFields.accountNo']";
const PAYMENT_CURRENCY = "//input[@name='extraFields.paymentCurrency']";
const SWIFT_CODE = "//input[@name='extraFields.swiftCode']";
const ROUTING_METSUBDISTRIBUTOR = "//input[@name='extraFields.routingMetsubdistributor']";
const ROUTING_CODE = "//input[@name='extraFields.routingCode']";
const BANK_CITY = "//input[@name='extraFields.bankCityTown']";
const BANK_PHONE = "//input[@name='extraFields.bankPhone']";
const CONTRACT_ID = "//input[@id='extraFields-contractID-autocomplete']";
// pos reseller
const CREDIT_LIMIT = "//input[@name='extraFields.creditLimit']";

const NEXT_BUTTON = "//span[contains(text(),'Next')]";
const PASSWORD_FIELD = "//input[@name='extraFields.motte_de_passe']";
const SUBMIT = "//span[contains(text(),'Submit')]";
const ENTER_LOGISTIC_LOCATION = "//input[@name='extraFields.logisticLocation']";
const ENTER_USER_SUB_TYPE = "//input[@id='combo-box-extraFields.snic_category']";
const STATUS = `//input[@id='combo-box-status']`;
const ENTER_CONTRACT_ID = "//input[@id='combo-box-extraFields.contractId']";
const ENABLE_ONE_TIME_PASSWORD = "//input[@id='extraFields-one_time_password-autocomplete']";

class additionalInfo {
  static typeRole(role) {
    cy.log(`fill in hq data: ${role}`);
    if (role !== " ") {
      cy.log('role selection block');
      cy.xpath(ROLE).type(role).should('have.value', role);
    }
  }

  static typeDesignation(designation) {
    cy.log(`fill in hq data: ${designation}`);
    if (designation !== " ") {
      cy.log('designation selection block');
      cy.xpath(DESIGNATION).type(designation).should('have.value', designation);
    }
  }

  static typeReportingTo(reportingTo) {
    cy.log(`fill in hq data: ${reportingTo}`);
    if (reportingTo !== " ") {
      cy.log('reportingTo selection block');
      cy.xpath(REPORTING_TO).type(reportingTo).should('have.value', reportingTo);
    }
  }

  static selectUserPrivilege(privilege) {
    cy.log(`fill in hq data: ${privilege}`);
    if (privilege !== " ") {
      cy.log('privilege selection block');
      const USER_PRIVILEGE = `//input[@value='${privilege}']`;
      cy.xpath(USER_PRIVILEGE).click();
    }
  }

  static selectStatus(status) {
    cy.log(`fill in hq data: ${status}`);
    if (status !== " ") {
      cy.log('status selection block');
      const STATUS = `//input[@value='${status}']`;
      cy.xpath(STATUS).click();
    }
  }

  static selectSccStatus(scc_Status) {
    if (scc_Status !== "") {
      cy.log('status scc status');
      const sccStatus = `//input[@id='sccStatus-autocomplete' and @value = '${scc_Status}']`;
      cy.xpath(sccStatus).click();
    }
  }

  static typeUserSubType(userSubType) {
    cy.log(`fill in hq data: ${userSubType}`);
    if (userSubType !== "") {
      cy.log('userSubType selection block');
      const USER_SUB_TYPE = `//input[@id = 'extraFields-snic_category-autocomplete' and @value = '${userSubType}']`;
      cy.xpath(USER_SUB_TYPE).click();
    }
  }

  static typeBankName(bankName) {
    cy.log(`Parent Category Name is: ${bankName}`);
    if (bankName !== " ") {
      cy.log('bankName selection block');
      cy.xpath(BANK_NAME).type(bankName).should('have.value', bankName);
    }
  }

  static typeBankBranch(bankBranch) {
    cy.log(`Parent Category Name is: ${bankBranch}`);
    if (bankBranch !== " ") {
      cy.log('bankBranch selection block');
      cy.xpath(BANK_BRANCH).type(bankBranch).should('have.value', bankBranch);
    }
  }

  static typeAccountName(accountName) {
    cy.log(`Parent Category Name is: ${accountName}`);
    if (accountName !== " ") {
      cy.log('accountName selection block');
      cy.xpath(ACCOUNT_NAME).type(accountName).should('have.value', accountName);
    }
  }

  static typeAccountNo(accountNo) {
    cy.log(`Parent Category Name is: ${accountNo}`);
    if (accountNo !== " ") {
      cy.log('accouaccountNotName selection block');
      cy.xpath(ACCOUNT_NO).type(accountNo).should('have.value', accountNo);
    }
  }

  static typePaymentCurrency(paymentCurrency) {
    cy.log(`Parent Category Name is: ${paymentCurrency}`);
    if (paymentCurrency !== " ") {
      cy.log('paymentCurrency selection block');
      cy.xpath(PAYMENT_CURRENCY).type(paymentCurrency).should('have.value', paymentCurrency);
    }
  }

  static typeSwiftCode(swiftCode) {
    cy.log(`Parent Category Name is: ${swiftCode}`);
    if (swiftCode !== " ") {
      cy.log('swiftCode selection block');
      cy.xpath(SWIFT_CODE).type(swiftCode).should('have.value', swiftCode);
    }
  }

  static typeRoutingMetSubDistributor(routingMetSubDistributor) {
    cy.log(`Parent Category Name is: ${routingMetSubDistributor}`);
    if (routingMetSubDistributor !== " ") {
      cy.log('routingMetSubDistributor selection block');
      cy.xpath(ROUTING_METSUBDISTRIBUTOR).type(routingMetSubDistributor).should('have.value', routingMetSubDistributor);
    }
  }

  static typeRoutingCode(rout) {
    cy.log(`Parent Category Name is: ${rout}`);
    if (rout !== " ") {
      cy.log('rout selection block');
      cy.xpath(ROUTING_CODE).type(rout).should('have.value', rout);
    }
  }

  static typeBankCity(bankCity) {
    cy.log(`Parent Category Name is: ${bankCity}`);
    if (bankCity !== " ") {
      cy.log('bankCity selection block');
      cy.xpath(BANK_CITY).type(bankCity).should('have.value', bankCity);
    }
  }

  static typeBankPhone(bankPhone) {
    cy.log(`Parent Category Name is: ${bankPhone}`);
    if (bankPhone !== " ") {
      cy.log('bankPhone selection block');
      cy.xpath(BANK_PHONE).type(bankPhone).should('have.value', bankPhone);
    }
  }

  static selectContractID(contractID) {
    cy.log(`Parent Category Name is: ${contractID}`);
    if (contractID !== " ") {
      cy.log('contactID selection block');
      cy.xpath(CONTRACT_ID).type(contractID).type('{downArrow}')
        .type('{enter}');
      // cy.contains(contractID).click({ force: true });
    }
  }

  static typeParent(parent) {
    cy.log(`Parent Category Name is: ${parent}`);
    if (parent !== "") {
      cy.log('parent selection block');
      cy.xpath(PARENT).clear();
      cy.xpath(PARENT).type(parent).type('{downArrow}')
        .type('{enter}');
    }
  }

  static selectHQStatus(status) {
    cy.log(`Parent Category Name is: ${status}`);
    if (status !== " ") {
      cy.log('status selection block');
      const HQ_STATUS = `//input[@id='customerStatus-autocomplete' and @value = '${status}']`;
      cy.xpath(HQ_STATUS).type('{enter}');
      // cy.contains(status).click();
    }
  }

  static typeUserSubtType(userSubtType) {
    cy.log(`Parent Category Name is: ${userSubtType}`);
    if (userSubtType !== " ") {
      cy.log('userSubtType selection block');
      const USER_SUBTYPE = `//input[@name='extraFields.snic_category' and @value = '${userSubtType}']`;
      cy.xpath(USER_SUBTYPE).click();
    }
  }

  static typeKeyContactPerson(KeyContactPerson) {
    cy.log(`Parent Category Name is: ${KeyContactPerson}`);
    if (KeyContactPerson !== " ") {
      cy.log('KeyContactPerson selection block');
      cy.xpath(KEY_CONTACT_PERSON).type(KeyContactPerson).should('have.value', KeyContactPerson);
    }
  }

  static typeKeyContactNumber(keyContactNumber) {
    cy.log(`Parent Category Name is: ${keyContactNumber}`);
    if (keyContactNumber !== " ") {
      cy.log('keyContactNumber selection block');
      cy.xpath(KEY_CONTACT_NUMBER).type(keyContactNumber).should('have.value', keyContactNumber);
    }
  }

  static typeKeyContactEmailAddress(keyContactEmailAddress) {
    cy.log(`Parent Category Name is: ${keyContactEmailAddress}`);
    if (keyContactEmailAddress !== " ") {
      cy.log('keyContactEmailAddress selection block');
      cy.xpath(KEY_CONTACT_EMAIL_ADDRESS).type(keyContactEmailAddress).should('have.value', keyContactEmailAddress);
    }
  }

  static typeAlternateContatcPerson(alternateContatcPerson) {
    cy.log(`Parent Category Name is: ${alternateContatcPerson}`);
    if (alternateContatcPerson !== " ") {
      cy.log('alternateContatcPerson selection block');
      cy.xpath(ALTERNATE_CONTACT_PERSON).type(alternateContatcPerson).should('have.value', alternateContatcPerson);
    }
  }

  static typeAlternateMobileNo(alternateMobileNo) {
    cy.log(`Parent Category Name is: ${alternateMobileNo}`);
    if (alternateMobileNo !== " ") {
      cy.log('alternateMobileNo selection block');
      cy.xpath(ALTERNATE_MOBILE_NO).type(alternateMobileNo).should('have.value', alternateMobileNo);
    }
  }

  static typeAlternateContactEmailAddress(alternateContactEmailAddress) {
    cy.log(`Parent Category Name is: ${alternateContactEmailAddress}`);
    if (alternateContactEmailAddress !== " ") {
      cy.log('alternateContactEmailAddress selection block');
      cy.xpath(ALTERNATE_CONTACT_EMAIL_ADDRESS).type(alternateContactEmailAddress).should('have.value', alternateContactEmailAddress);
      cy.xpath(NEXT_BUTTON).click();
    }
  }

  static typeAssociatedWarehouse(associatedWarehousse) {
    cy.log(`Parent Category Name is: ${associatedWarehousse}`);
    if (associatedWarehousse !== " ") {
      cy.log('associatedWarehousea selection block');
      cy.xpath(ASSOCIATED_WAREHOUSE).type(associatedWarehousse);
      cy.contains(associatedWarehousse).click();
    }
  }

  static typeBranchStatus(branchStatus) {
    cy.log(`Parent Category Name is: ${branchStatus}`);
    if (branchStatus !== " ") {
      cy.log('branchStatus selection block');
      cy.xpath(STATUS).type(branchStatus);
      cy.contains(branchStatus).click();
    }
  }

  static typeBranchUserStype(branchUserStype) {
    cy.log(`Parent Category Name is: ${branchUserStype}`);
    if (branchUserStype !== " ") {
      cy.log('branchUserStype selection block');
      cy.xpath(BRANCH_USER_SUBTYPE).type(branchUserStype).type('{downArrow}')
        .type('{enter}');
      // cy.contains(branchUserStype).click();
    }
  }

  static typeBranchRegionAbbreviated(branchRegionAbbreviated) {
    cy.log(`Parent Category Name is: ${branchRegionAbbreviated}`);
    if (branchRegionAbbreviated !== " ") {
      cy.log('branchRegionAbbreviated selection block');
      cy.xpath(BRANCH_REGION_ABBREVIATED).type(branchRegionAbbreviated).should('have.value', branchRegionAbbreviated);
    }
  }

  static typeBranchContractId(branchContractId) {
    cy.log(`Parent Category Name is: ${branchContractId}`);
    if (branchContractId !== " ") {
      cy.log('branchContractId selection block');
      cy.xpath(BRANCH_CONTRACT_ID).type(branchContractId).type('{downArrow}')
        .type('{enter}');
      // cy.contains(branchContractId).click();
    }
  }

  static selectDsaStatus(dsaStatus) {
    cy.log(`fill in hq data: ${dsaStatus}`);
    if (dsaStatus !== " ") {
      cy.log('dsaStatus selection block');
      cy.xpath(STATUS).type(dsaStatus);
      cy.contains(dsaStatus).click();
      cy.log(800);
    }
  }

  static selectDsaUserSubtype(dsaUserSubtype) {
    cy.log(`fill in hq data: ${dsaUserSubtype}`);
    if (dsaUserSubtype !== " ") {
      cy.log('dsaUserSubtype selection block');
      cy.xpath(ENTER_USER_SUB_TYPE).type(dsaUserSubtype).type('{downArrow}')
        .type('{enter}');
    }
  }

  static selectDsaContractId(dsaContractId) {
    cy.log(`fill in hq data: ${dsaContractId}`);
    if (dsaContractId !== " ") {
      cy.log('dsaContractId selection block');
      cy.xpath(ENTER_CONTRACT_ID).type(dsaContractId).type('{downArrow}')
        .type('{enter}');
    }
  }

  // pos reseller
  static selectPOSStatus(posStatus) {
    cy.log(`fill in hq data: ${posStatus}`);
    if (posStatus !== " ") {
      cy.log('posStatus selection block');
      cy.xpath(STATUS).type(posStatus).type('{downArrow}')
        .type('{enter}');
    }
  }

  static selectPOSUserSubType(posUserSubType) {
    cy.log(`fill in hq data: ${posUserSubType}`);
    if (posUserSubType !== " ") {
      cy.log('posUserSubType selection block');
      cy.xpath(ENTER_USER_SUB_TYPE).type(posUserSubType).type('{downArrow}')
        .type('{enter}');
    }
  }

  static typePOSCreditLimit(posCreditLimit) {
    cy.log(`fill in hq data: ${posCreditLimit}`);
    if (posCreditLimit !== " ") {
      cy.log('posCreditLimit selection block');
      cy.xpath(CREDIT_LIMIT).type(posCreditLimit).should('have.value', posCreditLimit);
    }
  }

  static selectPOSContractId(posContractId) {
    cy.log(`fill in hq data: ${posContractId}`);
    if (posContractId !== " ") {
      cy.log('posContactId selection block');
      cy.xpath(ENTER_CONTRACT_ID).type(posContractId).type('{downArrow}')
        .type('{enter}');
    }
  }

  static selectPOSCreditLimit(posContractId) {
    cy.log(`fill in hq data: ${posContractId}`);
    if (posContractId !== " ") {
      cy.log('posContractId selection block');
      cy.xpath(CREDIT_LIMIT).type(posContractId).should('have.value', posContractId);
    }
  }

  static typeMiniStoreRole(miniStoreRole) {
    cy.log(`fill in hq data: ${miniStoreRole}`);
    if (miniStoreRole !== " ") {
      cy.log('miniStoreRole selection block');
      cy.xpath(ROLE).type(miniStoreRole).should('have.value', miniStoreRole);
    }
  }

  static typeMiniStoreDesignation(miniStoreDesignation) {
    cy.log(`fill in hq data: ${miniStoreDesignation}`);
    if (miniStoreDesignation !== " ") {
      cy.log('miniStoreRole selection block');
      cy.xpath(DESIGNATION).type(miniStoreDesignation).should('have.value', miniStoreDesignation);
    }
  }

  static selectMiniStoreUserPrivilege(miniStoreUserPrivilege) {
    cy.log(`fill in hq data: ${miniStoreUserPrivilege}`);
    if (miniStoreUserPrivilege !== " ") {
      cy.log('miniStoreUserPrivilege selection block');
      const USER_PRIVILEGE = `//input[@value='${miniStoreUserPrivilege}']`;
      cy.xpath(USER_PRIVILEGE).click();
    }
  }

  static typeMiniStoreReportingTo(miniStoreReportingTo) {
    cy.log(`fill in hq data: ${miniStoreReportingTo}`);
    if (miniStoreReportingTo !== " ") {
      cy.log('miniStoreReportingTo selection block');
      cy.xpath(REPORTING_TO).type(miniStoreReportingTo).should('have.value', miniStoreReportingTo);
    }
  }

  static selectMiniStoreStatus(miniStoreStatus) {
    cy.log(`fill in hq data: ${miniStoreStatus}`);
    if (miniStoreStatus !== " ") {
      cy.log('miniStoreStatus selection block');
      const STATUS = `//input[@value='${miniStoreStatus}']`;
      cy.xpath(STATUS).click();
    }
  }

  static typeMiniStoreUserSubtype(miniStoreUserSubtype) {
    cy.log(`fill in hq data: ${miniStoreUserSubtype}`);
    if (miniStoreUserSubtype !== " ") {
      cy.log('miniStoreUserSubtype selection block');
      const USER_SUB_TYPE = `//input[@value='${miniStoreUserSubtype}']`;
      cy.xpath(USER_SUB_TYPE).click();
    }
  }

  static enterPassword(pwd) {
    cy.log(`fill in password data: ${pwd}`);
    if (pwd !== "") {
      cy.xpath(PASSWORD_FIELD).type(pwd);
    }
  }

  static clikcSubmitButton() {
    cy.log('click on submit button');
    cy.xpath(SUBMIT).click();
  }

  static enterLogisticLocation(logisticLocation) {
    cy.log(`enter logistic location: ${logisticLocation}`);
    if (logisticLocation !== " ") {
      cy.xpath(ENTER_LOGISTIC_LOCATION).type(logisticLocation);
    }
  }

  static enableOneTimePassword(oneTimePassword) {
    cy.log(`select enable one time password: ${oneTimePassword}`);
    if (oneTimePassword !== " ") {
      cy.xpath(ENABLE_ONE_TIME_PASSWORD).type(oneTimePassword);
      cy.contains(oneTimePassword).click();
    }
  }
}

export default additionalInfo;
