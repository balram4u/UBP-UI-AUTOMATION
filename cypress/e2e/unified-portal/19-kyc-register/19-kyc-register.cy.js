import {
  When, And, Then,
} from 'cypress-cucumber-preprocessor/steps';
import personalInfo from '../../../pages/unified-portal/kyc/kyc-personal-info';
import addressInfo from '../../../pages/unified-portal/kyc/kyc-address-info';
import additionalInfo from '../../../pages/unified-portal/kyc/kyc-additional-info';
import dbmDetails from "../../../pages/unified-portal/kyc/kyc-dbm-details";
import searchKyc from "../../../pages/unified-portal/kyc/kyc-search-page";
import CommonUtilities from '../../../common/Util';
import PortalHomePage from '../../../pages/unified-portal/home/portal-home-page';
import approveKYCPage from '../../../pages/unified-portal/kyc/kyc-approve-page';
import resellerGeneralInfo from '../../../pages/unified-portal/reseller/reseller_general_info';
import tripHomePage from '../../../pages/unified-portal/trip/trip-homepge';
import StockTransferHomePage from '../../../pages/unified-portal/order/stock-transfer-home-page';
import PortalLoginPage from '../../../pages/unified-portal/login/portal-login-page';
import ViewKycPage from '../../../pages/unified-portal/kyc/kyc-view-page';
import ResellerTypesPage from '../../../pages/unified-portal/reseller/reseller-types-home-page';
import ProductCategoryHomePage from '../../../pages/unified-portal/product/product-category-home-page';
import InventoriesHomePage from '../../../pages/unified-portal/inventory/inventories-home-page';
import DetailedInventoryPage from '../../../pages/unified-portal/inventory/detailed-inventory-home-page';

And(/^I navigate to the Register KYC page$/, () => {
  personalInfo.clickOnKycRegisterUsingUrl();
});

And(/^I navigate to the Search KYC page$/, () => {
  personalInfo.clickOnKycSearchRUsingUrl();
});

And(/^I navigate to the Resellers Page$/, () => {
  resellerGeneralInfo.navigateToAddResellerUsingUrl();
  cy.wait(10000);
});

And(/^I navigate to the Regions page$/, () => {
  personalInfo.navigateToRegionsUsingUrl();
});

When(/^I entered data on personal info field and click next button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerType, firstName, middleName, lastName, userName, juridicalName, mobileNo, baEmail, hqName, hqCode, hqId, hqjuridicalName, hqMobileNo, hQEmail, hqAlternateEmail, hqCategory, hqManager, hqAlternateManager, hqCompanyRegistrationNo, hqTaxRegistration, hqShipLocation, branchName, branchCode, branchHQCode, branchJuridicalName, branchAgentType, branchRegNo, branchTillNo, dBMFirstName, dBMLasttName, dBMOthertName, dBMNationalId, dBMGender, dBMRole, dBMDateOfBirth, dBMMobileNo, dBMEmail, dsaFirstName, dsaLastName, dsaOtherName, dsaSalesAgentCode, dsaBranchCode, dsaCode, dsaJuridicalName, dsaMobileNo, dsaEmail, dsaNationalId, dsaGender, dsaRole, dsaDateOfBirth, dsaTillNo, posName, posCustomerNo, posBranchCode, posCode, posJuridicalName, posMobileNo, posEmialId, posChannelType, miniStoreFirstName, miniStoreMiddleName, miniStoreLastName, miniStoreUserName, miniStoreJuriName, miniStoreMobileNO, miniStoreEmail) => {
  personalInfo.selectTypeOfReseller(resellerType);
  personalInfo.typeFirstName(firstName);
  personalInfo.typeMiddleName(middleName);
  personalInfo.typeLastName(lastName);
  personalInfo.typeUserName(userName);
  personalInfo.typeJuridicalName(juridicalName);
  personalInfo.typeMobileNo(mobileNo);
  personalInfo.typeEmail(baEmail);
  personalInfo.typeHQName(hqName);
  personalInfo.typeHQCode(hqCode);
  personalInfo.typeHQId(hqId);
  personalInfo.typeHQJuridicalName(hqjuridicalName);
  personalInfo.typeHQMobileNo(hqMobileNo);
  personalInfo.typeHQEmail(hQEmail);
  personalInfo.typeHQAlternateEmail(hqAlternateEmail);
  personalInfo.selectHQCategory(hqCategory);
  personalInfo.selectHQManager(hqManager);
  personalInfo.selectHQAlternateManager(hqAlternateManager);
  personalInfo.typeHQCompanyRegistrationNo(hqCompanyRegistrationNo);
  personalInfo.typeHQTaxRegistration(hqTaxRegistration);
  personalInfo.typeHQShipLocation(hqShipLocation);
  personalInfo.typeBranchName(branchName);
  personalInfo.typeBranchCode(branchCode);
  personalInfo.typeBranchHQCode(branchHQCode);
  personalInfo.typeBranchRegNo(branchRegNo);
  personalInfo.typeBranchTillNo(branchTillNo);
  personalInfo.typeBranchAgentType(branchAgentType);
  personalInfo.typeDsaFirstName(dsaFirstName);
  personalInfo.typeDsaLastName(dsaLastName);
  personalInfo.typeDSAOtherName(dsaOtherName);
  personalInfo.typeDSASalesAgentCode(dsaSalesAgentCode);
  personalInfo.typeDSABranchCode(dsaBranchCode);
  personalInfo.typeDSACode(dsaCode);
  personalInfo.typeDSAJuridicalName(dsaJuridicalName);
  personalInfo.typeDSAMobileNo(dsaMobileNo);
  personalInfo.typeDSAEmail(dsaEmail);
  personalInfo.typeDSANationalId(dsaNationalId);
  personalInfo.typePOSName(posName);
  personalInfo.typePOSCustomerCode(posCustomerNo);
  personalInfo.typePOSBranchCode(posBranchCode);
  personalInfo.selectPOSCode(posCode);
  personalInfo.typePOSJuridicalName(posJuridicalName);
  personalInfo.typePOSMobileNO(posMobileNo);
  personalInfo.typePOSEmailId(posEmialId);
  personalInfo.selectPOSChannelType(posChannelType);
  personalInfo.typeMiniStoreFirstName(miniStoreFirstName);
  personalInfo.typeMiniStoreMiddelName(miniStoreMiddleName);
  personalInfo.typeMiniStoreLastName(miniStoreLastName);
  personalInfo.typeMiniStoreUserName(miniStoreUserName);
  personalInfo.typeMiniStoreJuriName(miniStoreJuriName);
  personalInfo.typeMiniStoreMobileNO(miniStoreMobileNO);
  personalInfo.typeMiniStoreEmial(miniStoreEmail);

  if (resellerType === "branch") {
    personalInfo.clickNextButton();
    dbmDetails.typeDBMFirstName(dBMFirstName);
    dbmDetails.typeDBMLasttName(dBMLasttName);
    dbmDetails.typeDBMOthertName(dBMOthertName);
    dbmDetails.typeDBMNationalId(dBMNationalId);
    dbmDetails.typeDBMGender(dBMGender);
    dbmDetails.typeDBMRole(dBMRole);
    dbmDetails.typeDBMDateOfBirth(dBMDateOfBirth);
    dbmDetails.typeDBMMobileNo(dBMMobileNo);
    dbmDetails.typeDBMEmail(dBMEmail);
    dbmDetails.typeBranchJuridicalName(branchJuridicalName);
  }
  personalInfo.clickNextButton();
});
And(/^I entered data on Address info field and click next button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (street, city, country, region, hqaddress, hqpostalCode, hqcity, hqalternateAddress, hqalternatePostalCode, hqalternateCity, branchAddress, branchCode, branchCity, branchRegion, branchSalesArea, branchCluster, branchLattitude, branchLongitude, dsaAddress, dsaPostalCode, dsaCity, dsaRegion, dsaSalesArea, dsaCluster, dsaRoute, dsaLattitude, dsaLongititude, posAddress, posPostalCode, posCity, posRegion, posSalesArea, posCluster, posRoute, posLongitude, posLattitude, miniStoreStreet, miniStoreCity, miniStoreCountry, miniStoreRegion, miniStoreSalesArea, miniStoreLattitude, miniStoreLongitude) => {
  addressInfo.typeStreet(street);
  addressInfo.typeCity(city);
  addressInfo.typeCountry(country);
  addressInfo.selectRegion(region);

  addressInfo.typeHQAddress(hqaddress);
  addressInfo.typeHQPostalCode(hqpostalCode);
  addressInfo.typeHQCity(hqcity);
  addressInfo.typeHQAlternateAddress(hqalternateAddress);
  addressInfo.typeHQAlternatePostalcode(hqalternatePostalCode);
  addressInfo.typeHQAlternateCity(hqalternateCity);

  addressInfo.typeAddress(branchAddress);
  addressInfo.typeBranchpostalCode(branchCode);
  addressInfo.typeBranchCity(branchCity);
  addressInfo.typeBranchRegion(branchRegion);
  addressInfo.typeBranchSalesArea(branchSalesArea);
  addressInfo.typeBranchCluster(branchCluster);
  addressInfo.typeBranchLattitude(branchLattitude);
  addressInfo.typeBranchLongitude(branchLongitude);
  addressInfo.typeDsaAddress(dsaAddress);
  addressInfo.typeDsaPostalCode(dsaPostalCode);
  addressInfo.typeDsaCity(dsaCity);

  addressInfo.selectDsaRegion(dsaRegion);
  addressInfo.selectDsaSalesArea(dsaSalesArea);
  addressInfo.selectDsaCluster(dsaCluster);
  addressInfo.typeDsaLattitude(dsaLattitude);
  addressInfo.typedsaLongitude(dsaLongititude);

  addressInfo.typePOSAddress(posAddress);
  addressInfo.typePOSPostalCode(posPostalCode);
  addressInfo.typePOSCity(posCity);
  addressInfo.selectPOSRegion(posRegion);
  addressInfo.selectPOSSalesArea(posSalesArea);
  addressInfo.selectPOSCluster(posCluster);
  addressInfo.typePOSLongitude(posLongitude);
  addressInfo.typePOSLattitude(posLattitude);

  addressInfo.typeMiniStoreStreet(miniStoreStreet);
  addressInfo.typeMiniStoreCity(miniStoreCity);
  addressInfo.typeMiniStoreCountry(miniStoreCountry);
  addressInfo.selectMiniStoreRegion(miniStoreRegion);
  addressInfo.selectMiniStoreSalesArea(miniStoreSalesArea);
  addressInfo.selectMiniStoreLattitude(miniStoreLattitude);
  addressInfo.selectMiniStoreLongitude(miniStoreLongitude);

  personalInfo.clickNextButton();
});
And(/^I entered data on Additional info field and click next button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (role, designation, privilege, reportingTo, status, userSubType, hqParent, hqStatus, hqUserSubtType, hqKeyContactPerson, hqKeyContactNumber, hqKeyContactEmailAddress, hqAlternateContatcPerson, hqAlternateMobileNo, hqAlternateContactEmailAddress, associatedWarehousea, branchStatus, branchUserStype, branchRegionAbbreviated, branchContractId, dsaStatus, dsaUserSubtype, dsaContractId, bankname, bankbranch, accountname, accountno, paymentcurrency, swiftcode, routingmetsubdistributor, routingcode, bankcity, bankphone, contactid, posStatus, posUserSubType, posCreditLimit, posContactId, miniStoreRole, miniStoreDesignation, miniStoreUserPrivilege, miniStoreReportingTo, miniStoreStatus, miniStoreUserSubtype, password) => {
  additionalInfo.typeRole(role);
  additionalInfo.typeDesignation(designation);
  additionalInfo.selectUserPrivilege(privilege);
  additionalInfo.typeReportingTo(reportingTo);
  additionalInfo.selectStatus(status);
  additionalInfo.typeUserSubType(userSubType);

  additionalInfo.typeParent(hqParent);
  additionalInfo.selectHQStatus(hqStatus);
  additionalInfo.typeUserSubtType(hqUserSubtType);
  additionalInfo.typeKeyContactPerson(hqKeyContactPerson);
  additionalInfo.typeKeyContactNumber(hqKeyContactNumber);
  additionalInfo.typeKeyContactEmailAddress(hqKeyContactEmailAddress);
  additionalInfo.typeAlternateContatcPerson(hqAlternateContatcPerson);
  additionalInfo.typeAlternateMobileNo(hqAlternateMobileNo);
  additionalInfo.typeAlternateContactEmailAddress(hqAlternateContactEmailAddress);

  additionalInfo.typeBankName(bankname);
  additionalInfo.typeBankBranch(bankbranch);
  additionalInfo.typeAccountName(accountname);
  additionalInfo.typeAccountNo(accountno);
  additionalInfo.typePaymentCurrency(paymentcurrency);
  additionalInfo.typeSwiftCode(swiftcode);
  additionalInfo.typeRoutingMetSubDistributor(routingmetsubdistributor);
  additionalInfo.typeRoutingCode(routingcode);
  additionalInfo.typeBankCity(bankcity);
  additionalInfo.typeBankPhone(bankphone);
  // additionalInfo.selectContactID(contactid);

  additionalInfo.typeAssociatedWarehouse(associatedWarehousea);
  additionalInfo.typeBranchStatus(branchStatus);
  additionalInfo.typeBranchUserStype(branchUserStype);
  additionalInfo.typeBranchRegionAbbreviated(branchRegionAbbreviated);
  additionalInfo.typeBranchContractId(branchContractId);

  additionalInfo.selectDsaStatus(dsaStatus);
  additionalInfo.selectDsaUserSubtype(dsaUserSubtype);
  additionalInfo.selectDsaContractId(dsaContractId);

  additionalInfo.selectPOSStatus(posStatus);
  additionalInfo.typePOSUserSubType(posUserSubType);
  additionalInfo.typePOSCreditLimit(posCreditLimit);
  additionalInfo.typePOSContractId(posContactId);

  additionalInfo.typeMiniStoreRole(miniStoreRole);
  additionalInfo.typeMiniStoreDesignation(miniStoreDesignation);
  additionalInfo.selectMiniStoreUserPrivilege(miniStoreUserPrivilege);
  additionalInfo.typeMiniStoreReportingTo(miniStoreReportingTo);
  additionalInfo.selectMiniStoreStatus(miniStoreStatus);
  additionalInfo.typeMiniStoreUserSubtype(miniStoreUserSubtype);
  additionalInfo.enterPassword(password);
  additionalInfo.clikcSubmitButton();
});

And(/^I verify success message "([^"]*)"$/, (message) => {
  CommonUtilities.validateMessage(message);
});

// eslint-disable-next-line no-undef
Then(/^I navigate to Search KYC page$/, () => {
  // searchKyc.clickOnKycSearchUsingLeftMenu();
  searchKyc.clickOnKycSearchUsingUrl();
});

And(/^I select filter as customer ID "([^"]*)"$/, (cId) => {
  searchKyc.applyFilter("Customer ID");
  searchKyc.typeSearchValue(cId);
});

And(/^I click search button$/, () => {
  searchKyc.clickSearchBtn();
  cy.wait(2000);
});

And(/^I verify record is fetched in table$/, () => {
  searchKyc.verifyRecordFetched();
});

And(/^I select filter as MSISDN "([^"]*)"$/, (msisdn) => {
  searchKyc.applyFilter("MSISDN");
  searchKyc.typeSearchValue(msisdn);
});

And(/^I select filter as first name "([^"]*)"$/, (firstName) => {
  searchKyc.applyFilter("First Name");
  searchKyc.typeSearchValue(firstName);
});

And(/^I enter personal information and click next button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerType, firstName, dealerCode, email, agentType, tillNo, shortCode, dealerSalesAgentCode, channelType, juridicalName, nationalId, gender, mobileNo) => {
  if (resellerType === "branch") {
    cy.wait(2000);
    personalInfo.selectTypeOfReseller(resellerType);
    personalInfo.typeFirstName(firstName);
    personalInfo.typeUserName(dealerCode);
    personalInfo.typeEmail(email);
    personalInfo.typeBranchAgentType(agentType);
    personalInfo.typeBranchShortCode(shortCode);
    personalInfo.typeBranchTillNo(tillNo);
  }

  if (resellerType === "dsa") {
    cy.wait(2000);
    personalInfo.selectTypeOfReseller(resellerType);
    personalInfo.typeFirstName(firstName);
    personalInfo.typeUserName(dealerSalesAgentCode);
    // personalInfo.selectDealerCode(dealerCode);
    personalInfo.typeEmail(email);
    personalInfo.typeMobileNo(mobileNo);
    personalInfo.typeJuridicalName(juridicalName);
    personalInfo.typeDSAGender(gender);
    personalInfo.typeDSANationalId(nationalId);
    personalInfo.typeBranchShortCode(shortCode);
    personalInfo.typeBranchTillNo(tillNo);
  }

  if (resellerType === "pos") {
    cy.wait(2000);
    personalInfo.selectTypeOfReseller(resellerType);
    personalInfo.typeFirstName(firstName);
    personalInfo.typeUserName(dealerSalesAgentCode);
    personalInfo.selectDealerCode(dealerCode);
    personalInfo.typeMobileNo(mobileNo);
    personalInfo.typeEmail(email);
    personalInfo.typeJuridicalName(juridicalName);
    personalInfo.selectPOSChannelType(channelType);
    personalInfo.clickNextButton();
  }

  if (resellerType === "pos_mpesa") {
    cy.wait(2000);
    personalInfo.selectTypeOfReseller(resellerType);
    personalInfo.typeFirstName(firstName);
    personalInfo.typeUserName(dealerSalesAgentCode);
    personalInfo.selectDealerCode(dealerCode);
    personalInfo.typeMobileNo(mobileNo);
    personalInfo.typeEmail(email);
    personalInfo.typeJuridicalName(juridicalName);
    personalInfo.selectPOSChannelType(channelType);
    personalInfo.selectCategory(tillNo);
    personalInfo.clickNextButton();
  }

  if (resellerType === "Distributor" || resellerType === "ASM" || resellerType === "FranchiseShop" || resellerType === "WareHouse" || resellerType === "Bank-PoS" || resellerType === "Sub Distributor" || resellerType === "SubDistributor") {
    cy.wait(2000);
    personalInfo.typeFirstName(firstName);
    personalInfo.typeUserName(dealerCode);
    personalInfo.typeMobileNo(mobileNo);
    personalInfo.typeEmail(email);
    personalInfo.typeJuridicalName(juridicalName);
    // personalInfo.selectContractID(resellerType);
    personalInfo.clickNextButton();
  }
});

And(/^I enter personal information for warehouse type and click next button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (firstName, dealerCode, email, warehouseType, juridicalName, mobileNo) => {
  cy.wait(2000);
  personalInfo.typeFirstName(firstName);
  personalInfo.typeUserName(dealerCode);
  personalInfo.typeMobileNo(mobileNo);
  personalInfo.typeEmail(email);
  personalInfo.typeJuridicalName(juridicalName);
  personalInfo.selectWarehouseType(warehouseType);
  personalInfo.clickNextButton();
});

And(/^I enter personal information for OperatorAgent type and click next button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (firstName, dealerCode, email, parent, juridicalName, mobileNo) => {
  cy.wait(2000);
  personalInfo.typeFirstName(firstName);
  personalInfo.typeUserName(dealerCode);
  personalInfo.typeMobileNo(mobileNo);
  personalInfo.typeEmail(email);
  personalInfo.typeJuridicalName(juridicalName);
  personalInfo.selectParentResellerCode(parent);
  personalInfo.clickNextButton();
});

And(/^I enter personal information for POS type and click next button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (firstName, dealerCode, email, parent, juridicalName, mobileNo) => {
  cy.wait(2000);
  personalInfo.typeFirstName(firstName);
  personalInfo.typeUserName(dealerCode);
  personalInfo.typeMobileNo(mobileNo);
  personalInfo.typeEmail(email);
  personalInfo.typeJuridicalName(juridicalName);
  personalInfo.selectParentResellerCode(parent);
  personalInfo.clickNextButton();
});

And(/^I enter manager details and click next button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (dBMFirstName, dBMNationalId, dBMGender, mobileNo, juridicalName) => {
  dbmDetails.typeDBMFirstName(dBMFirstName);
  dbmDetails.typeDBMNationalId(dBMNationalId);
  dbmDetails.typeDBMGender(dBMGender);
  personalInfo.typeMobileNo(mobileNo);
  personalInfo.typeJuridicalName(juridicalName);
  personalInfo.clickNextButton();
});

And(/^I enter address information and click next button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (address, street, city, region, salesArea, country, lattitude, longitude) => {
  addressInfo.typeAddress(address);
  addressInfo.typeStreet(street);
  // cy.debug('enter postal code', postalCode);
  // addressInfo.typeBranchpostalCode(postalCode);
  addressInfo.typeBranchCity(city);
  addressInfo.selectBranchRegion(region);
  addressInfo.selectBranchSalesArea(salesArea);
  addressInfo.typeCountry(country);
  addressInfo.typeBranchLattitude(lattitude);
  addressInfo.typeBranchLongitude(longitude);
  personalInfo.clickNextButton();
});

And(/^I enter address information for Distributor and click next button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (address, street, city, region, salesArea, country, lattitude, longitude) => {
  addressInfo.typeAddress(address);
  addressInfo.typeStreet(street);
  // cy.debug('enter postal code', postalCode);
  // addressInfo.typeBranchpostalCode(postalCode);
  addressInfo.typeBranchCity(city);
  addressInfo.selectBranchRegion(region);
  addressInfo.selectBranchSalesArea(salesArea);
  addressInfo.typeCountry(country);
  addressInfo.typeBranchLattitude(lattitude);
  addressInfo.typeBranchLongitude(longitude);
  personalInfo.clickNextButton();
});

And(/^I enter address information "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (address, street, city, region, salesArea, country, lattitude, longitude) => {
  addressInfo.typeAddress(address);
  addressInfo.typeStreet(street);
  // cy.debug('enter postal code', postalCode);
  // addressInfo.typeBranchpostalCode(postalCode);
  addressInfo.typeBranchCity(city);
  addressInfo.selectBranchRegion(region);
  addressInfo.selectBranchSalesArea(salesArea);
  addressInfo.typeCountry(country);
  addressInfo.typeBranchLattitude(lattitude);
  addressInfo.typeBranchLongitude(longitude);
});

// eslint-disable-next-line no-unused-vars
And(/^I enter additional information and click next button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerType, associatedWarehousea, status, userSubType, contranctID, password, logisticLocation, enableOneTimePassword) => {
  if (resellerType === "branch") {
    additionalInfo.typeAssociatedWarehouse(associatedWarehousea);
    additionalInfo.typeBranchStatus(status);
    additionalInfo.typeBranchUserStype(userSubType);
    additionalInfo.typeBranchContractId(contranctID);
    additionalInfo.enterPassword(password);
    additionalInfo.enterLogisticLocation(logisticLocation);
    additionalInfo.clikcSubmitButton();
  }

  if (resellerType === "dsa") {
    additionalInfo.selectDsaStatus(status);
    additionalInfo.selectDsaUserSubtype(userSubType);
    additionalInfo.selectDsaContractId(contranctID);
    additionalInfo.enterPassword(password);
    additionalInfo.enterLogisticLocation(logisticLocation);
    additionalInfo.clikcSubmitButton();
  }

  if (resellerType === "pos") {
    additionalInfo.selectPOSStatus(status);
    additionalInfo.selectPOSUserSubType(userSubType);
    additionalInfo.selectPOSCreditLimit('11.11');
    additionalInfo.selectPOSContractId(contranctID);
    additionalInfo.enterPassword(password);
    additionalInfo.enterLogisticLocation(logisticLocation);
    additionalInfo.clikcSubmitButton();
  }

  if (resellerType === "pos_mpesa") {
    additionalInfo.selectPOSStatus(status);
    additionalInfo.selectPOSUserSubType(userSubType);
    additionalInfo.selectPOSContractId(contranctID);
    additionalInfo.enterPassword(password);
    additionalInfo.enterLogisticLocation(logisticLocation);
    additionalInfo.clikcSubmitButton();
  }
});

And(/^I enter additional information for standard and click next button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (parent, status, userSubType, contranctID, password, SccStatus) => {
  cy.wait(3000);
  additionalInfo.typeUserSubType(userSubType);
  additionalInfo.typeParent(parent);
  additionalInfo.selectHQStatus(status);
  // additionalInfo.selectContractID(contranctID);
  // additionalInfo.enableOneTimePassword('No');
  additionalInfo.enterPassword(password);
  additionalInfo.selectSccStatus(SccStatus);
  additionalInfo.clikcSubmitButton();
});

And(/^I enter additional information for OperatorAgent and click next button "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (status, userSubType, contranctID, password) => {
  additionalInfo.selectHQStatus(status);
  additionalInfo.typeUserSubType(userSubType);
  // additionalInfo.selectContractID(contranctID);
  additionalInfo.enableOneTimePassword('No');
  additionalInfo.enterPassword(password);
  additionalInfo.clikcSubmitButton();
});

And(/^I navigate to the KYC Approve page$/, () => {
  personalInfo.clickOnKycApproveUsingUrl();
  cy.wait(3000);
});

Then(/^I am able to perform logout operation$/, () => {
  PortalHomePage.LogOut();
});

When(/^I approve pending KYC with following parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (columnName, operator, firstName) => {
  cy.wait(1000);
  approveKYCPage.clickFilterButton();
  cy.wait(1000);
  approveKYCPage.selectColumn(columnName);
  cy.wait(1000);
  approveKYCPage.selectOperator(operator);
  cy.wait(1000);
  approveKYCPage.enterValue(firstName);
  cy.wait(1000);
  approveKYCPage.clickOnApproveButton();
  cy.wait(500);
  approveKYCPage.clickYesOnApproveButton();
  cy.wait(2000);
});

And(/^I navigate to the Resellers Page$/, () => {
  resellerGeneralInfo.navigateToAddResellerUsingUrl();
});

Then(/^I validate created KYC available on resellers page "([^"]*)" "([^"]*)" "([^"]*)"$/, (searchFeild, searchValue, status) => {
  resellerGeneralInfo.enterSearchValue(searchFeild, searchValue);
  resellerGeneralInfo.clickSearch();
  cy.wait(1000);
  resellerGeneralInfo.validateResellerID(searchValue);
  resellerGeneralInfo.validateStatus(status);
});

And(/^I update old trip status for "([^"]*)"$/, (agentID) => {
  tripHomePage.updateOldTripStatus(agentID);
});

Then(/^I validate trip status on UI should be "([^"]*)"$/, (START_STATUS) => {
  cy.reload();
  cy.wait(2000);
  tripHomePage.surveyTripStatusOnUI(START_STATUS);
});

And(/^I get the tripId from Trip page$/, () => {
  cy.wait(30000);
  tripHomePage.fetchTripIdFromUI();
});

When(/^I start the trip for survey having following parameters "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, RESELLER_PATH) => {
  tripHomePage.startSurveyTrip(ASSIGN_AGENT_ID);
});

And(/^I perform markAsReached for pos survey having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, POS, WAREHOUSE_DESTINATION_TYPE, RESELLER_PATH) => {
  // eslint-disable-next-line max-len
  tripHomePage.markAsReachedForSurvey(ASSIGN_AGENT_ID, POS, WAREHOUSE_DESTINATION_TYPE, RESELLER_PATH);
});

And(/^I perform submitSurvey having following parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, RESELLER_PATH, FIRST_NAME) => {
  tripHomePage.submitSurvey(ASSIGN_AGENT_ID, RESELLER_PATH, FIRST_NAME);
});

And(/^I peform endPosVisit for survey having following parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, RESELLER_PATH, FIRST_NAME) => {
  tripHomePage.endPosVisitForSurvey(ASSIGN_AGENT_ID, RESELLER_PATH, FIRST_NAME);
});

Then(/^I perform endTrip for survey and validate trip status having following parameters "([^"]*)" "([^"]*)"$/, (ASSIGN_AGENT_ID, RESELLER_PATH) => {
  tripHomePage.endTripForSurvey(ASSIGN_AGENT_ID, RESELLER_PATH);
});

And(/^I navigate to Trip Page$/, () => {
  tripHomePage.openTripsPage();
});

When(/^I reject pending KYC with following parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (columnName, operator, firstName) => {
  cy.wait(1000);
  approveKYCPage.clickFilterButton();
  cy.wait(1000);
  approveKYCPage.selectColumn(columnName);
  cy.wait(1000);
  approveKYCPage.selectOperator(operator);
  cy.wait(1000);
  approveKYCPage.enterValue(firstName);
  cy.wait(1000);
  approveKYCPage.clickOnRejectButton();
  cy.wait(500);
  approveKYCPage.typeReasonForRejection("rejecting");
  approveKYCPage.clickYesOnApproveButton();
  cy.wait(2000);
});

// eslint-disable-next-line no-unused-vars
Then(/^I validate created KYC should not be available on resellers page "([^"]*)" "([^"]*)" "([^"]*)"$/, (searchFeild, searchValue, status) => {
  resellerGeneralInfo.enterSearchValue(searchFeild, searchValue);
  resellerGeneralInfo.clickSearch();
  cy.wait(1000);
  resellerGeneralInfo.validateResellerIDShouldNotExist();
});

Then(/^I enter duplicate "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerType, nationalId, gender, firstName, dealerCode, email, agentType, shortCode, tillNo) => {
  cy.wait(2000);
  if (resellerType === 'dsa') {
    personalInfo.selectTypeOfReseller(resellerType);
    personalInfo.typeDSANationalId(nationalId);
    personalInfo.typeDSAGender(gender);
  }
  if (resellerType === 'branch') {
    personalInfo.selectTypeOfReseller(resellerType);
    personalInfo.typeFirstName(firstName);
    personalInfo.typeUserName(dealerCode);
    personalInfo.typeEmail(email);
    personalInfo.typeBranchAgentType(agentType);
    personalInfo.typeBranchShortCode(shortCode);
    personalInfo.typeBranchTillNo(tillNo);
    dbmDetails.typeDBMNationalId(nationalId);
    dbmDetails.typeDBMGender(gender);
  }
});

And(/^I enter reseller info with parameters "([^"]*)" "([^"]*)"$/, (searchFeild, searchValue) => {
  resellerGeneralInfo.enterSearchValue(searchFeild, searchValue);
  cy.wait(1000);
  resellerGeneralInfo.clickSearch();
  cy.wait(1000);
});

Then(/^I validate reseller status "([^"]*)"$/, (status) => {
  resellerGeneralInfo.validateStatus(status);
});

And(/^I navigate to the Stock Transfer Page$/, () => {
  StockTransferHomePage.visitStockTransferHomePageUsingUrl();
  cy.wait(3000);
});

When(/^I perform Stock Transfer with deactivated dsa having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, PRODUCT_SKU, QUANTITY, SELLER_ID) => {
  cy.wait(3000);
  if (ORDER_TYPE === 'Push Inventory Sales Order') {
    cy.wait(1000);
    StockTransferHomePage.selectResellerId();
    cy.wait(1000);
    StockTransferHomePage.clickOnNext();
    cy.wait(1000);
    StockTransferHomePage.selectProductSKU(PRODUCT_SKU);
    cy.wait(1000);
    StockTransferHomePage.getBatchID();
    cy.wait(500);
    StockTransferHomePage.clickOnSelectRange();
    cy.wait(1000);
    StockTransferHomePage.enterQuantity(QUANTITY);
    cy.wait(500);
    StockTransferHomePage.getStartSerial();
    cy.wait(500);
    StockTransferHomePage.getEndSerial();
    cy.wait(500);
    StockTransferHomePage.clickOnSubmit();
    cy.wait(1000);
    StockTransferHomePage.clickOnNext();
    cy.wait(1000);
    StockTransferHomePage.receiverShouldNotExist(SELLER_ID);
  }
});

Then(/^Login into the system with deactivated user "([^"]*)" "([^"]*)" "([^"]*)"$/, (userName, password, errorMessage) => {
  cy.wait(800);
  PortalLoginPage.loginWithBlockedUser(userName, password, errorMessage);
  cy.wait(100);
  CommonUtilities.validateMessage(errorMessage);
});

And(/^I click on view reseller action$/, () => {
  resellerGeneralInfo.clickViewReseller();
});

Then(/^I perform deactive-active child account having following paramerters "([^"]*)" "([^"]*)"$/, (action, actionMessage) => {
  resellerGeneralInfo.performFreezeUnfreeze(action);
  CommonUtilities.validateMessage(actionMessage);
});

And(/^I enter personal information and click next button for deactivated national id "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerType, firstName, dealerCode, email, agentType, tillNo, shortCode, dealerSalesAgentCode, channelType, juridicalName, nationalId, gender, mobileNo) => {
  if (resellerType === "dsa") {
    cy.wait(2000);
    personalInfo.selectTypeOfReseller(resellerType);
    personalInfo.typeFirstName(firstName);
    personalInfo.typeUserName(dealerSalesAgentCode);
    // cy.debug('select dealer code', dealerCode);
    // personalInfo.selectDealerCode(dealerCode);
    personalInfo.typeEmail(email);
    personalInfo.typeMobileNo(mobileNo);
    personalInfo.typeJuridicalName(juridicalName);
    personalInfo.typeDSAGender(gender);
    personalInfo.typeDSANationalId(nationalId);
    personalInfo.typeBranchShortCode(shortCode);
    personalInfo.validateDeactivatedDSA();
    personalInfo.typeBranchTillNo(tillNo);
  }
});

And(/^I click on KYC$/, () => {
  cy.wait(8000);
  ViewKycPage.clickKYC();
  cy.wait(8000);
});

And(/^I verify Search and Register options are visible "([^"]*)" "([^"]*)"$/, (option1, option2) => {
  ViewKycPage.verifyKycOptions(option1);
  ViewKycPage.verifyKycOptions(option2);
});

And(/^I verify "([^"]*)" "([^"]*)" is not visible$/, (option1, option2) => {
  ViewKycPage.verifyKycOptionsNotVisible(option1);
  ViewKycPage.verifyKycOptionsNotVisible(option2);
});

And(/^I verify only "([^"]*)" is visible$/, (option1) => {
  ViewKycPage.verifyKycOptions(option1);
});

And(/^I select reseller type "([^"]*)"$/, (resellerType) => {
  cy.wait(8000);
  personalInfo.selectTypeOfReseller(resellerType);
});

And(/^I select search key "([^"]*)"$/, (searchKey) => {
  searchKyc.selectSearchKey(searchKey);
});

And(/^I enter search value "([^"]*)"$/, (searchValue) => {
  searchKyc.typeSearchValue(searchValue);
});

And(/^I verify reseller status in table "([^"]*)" "([^"]*)"$/, (columnName, resellerStatus) => {
  searchKyc.verifyResellerStatus(columnName, resellerStatus);
});

And(/^I click on view button$/, () => {
  cy.wait(2000);
  searchKyc.clickViewButton();
});

And(/^I verify view page should have same data "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (viewColumnName, firstName, distributorCode, mobileNo, JuridicialName) => {
  searchKyc.verifyPersonalInfo(viewColumnName, firstName, distributorCode, mobileNo, JuridicialName);
});

And(/^I enter reseller info with parameters "([^"]*)" "([^"]*)"$/, (searchFeild, searchValue) => {
  resellerGeneralInfo.enterSearchValue(searchFeild, searchValue);
  cy.wait(3000);
  resellerGeneralInfo.clickSearch();
  cy.wait(3000);
});

And(/^I verify KYC page is not accessible$/, () => {
  cy.wait(2000);
  personalInfo.verifyNotAuthorized();
});

And(/^I select filter column "([^"]*)"$/, (column) => {
  ResellerTypesPage.selectFilterColumn(column);
  cy.wait(1000);
});

And(/^I select filter option "([^"]*)"$/, (option) => {
  ResellerTypesPage.selectFilterOption(option);
  cy.wait(1000);
});

And(/^I enter filter value "([^"]*)"$/, (value) => {
  ResellerTypesPage.typeFilterValue(value);
  cy.wait(1000);
});

And(/^I scroll to Bottom if area is scrollable$/, () => {
  ProductCategoryHomePage.scrollToBottomWithCondition();
});

And(/^I enter data in "([^"]*)" "([^"]*)"$/, (fieldName, mobileNo) => {
  personalInfo.typeInAnyField(fieldName, mobileNo);
});

And(/^I verify warning message "([^"]*)" "([^"]*)"$/, (fieldName, warningMsg) => {
  personalInfo.verifyWarningMsg(fieldName, warningMsg);
});

And(/^I click on columns button$/, () => {
  InventoriesHomePage.clickColumns();
});

And(/^I enter column title "([^"]*)"$/, (columnTitle) => {
  InventoriesHomePage.enterColumnTitle(columnTitle);
});

And(/^I verify toggle list is filtered "([^"]*)"$/, (columnTitle) => {
  InventoriesHomePage.verifyColumnFiltered(columnTitle);
});

And(/^I click on toggle button "([^"]*)"$/, (columnTitle) => {
  InventoriesHomePage.clickToggleButton(columnTitle);
});

And(/^Unchecking the toggle should remove that column from the table "([^"]*)"$/, (columnName) => {
  DetailedInventoryPage.verifyColumnNotVisible(columnName);
});

And(/^I click on export button$/, () => {
  searchKyc.clickOnExportButton();
});

And(/^I click on download button$/, () => {
  searchKyc.clickOnDownloadButton();
});

And(/^I read file name "([^"]*)"$/, (fileName) => {
  CommonUtilities.readFileName(fileName);
});

Then(/^I delete file name "([^"]*)"$/, (fileName) => {
  cy.task('deleteFile', fileName);
});

Then(/^I click on filters$/, () => {
  InventoriesHomePage.clickOnFilters();
  cy.wait(1000);
});

Then(/^I click on edit button$/, () => {
  searchKyc.clickOnEditButton();
});

Then(/^I click on update button$/, () => {
  personalInfo.clickOnUpdate();
});

And(/^I verify Resellers table should be empty$/, () => {
  resellerGeneralInfo.verifyEmptyResellerTable();
});

Then(/^I click on approve button$/, () => {
  searchKyc.clickOnApprove();
});

Then(/^I click on yes button$/, () => {
  cy.wait(3000);
  searchKyc.clickOnYes();
});

Then(/^I click on reject button$/, () => {
  searchKyc.clickOnReject();
  cy.wait(3000);
});

Then(/^I enter reject reason "([^"]*)"$/, (reason) => {
  searchKyc.enterRejectReason(reason);
});

Then(/^I verify next button is disabled$/, () => {
  personalInfo.verifyNextButtonDisabled();
});

Then(/^I verify edit button is not available$/, () => {
  searchKyc.verifyEditButtonNotPresent();
});

Then(/^I verify view button is available$/, () => {
  searchKyc.verifyViewButtonAvailable();
});

And(/^I enter personal information "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerType, firstName, dealerCode, email, juridicalName, mobileNo) => {
  if (resellerType === "Distributor") {
    cy.wait(2000);
    personalInfo.typeFirstName(firstName);
    personalInfo.typeUserName(dealerCode);
    personalInfo.typeMobileNo(mobileNo);
    personalInfo.typeEmail(email);
    personalInfo.typeJuridicalName(juridicalName);
  }
});
