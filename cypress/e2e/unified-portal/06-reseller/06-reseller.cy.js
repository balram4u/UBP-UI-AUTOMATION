/* eslint-disable max-len */
import {
  And, Then, When,
} from 'cypress-cucumber-preprocessor/steps';
import resellerGeneralInfo from '../../../pages/unified-portal/reseller/reseller_general_info';
import resellerAdditionalInfo from '../../../pages/unified-portal/reseller/reseller_additional_info';
import customerInfo from '../../../pages/unified-portal/reseller/customer_info';
import resellerLocationInfo from '../../../pages/unified-portal/reseller/reseller_location_info';
import resellerHomePage from '../../../pages/unified-portal/reseller/reseller_home_page';
import ProductHomePage from '../../../pages/unified-portal/product/product-home-page';
import PortalHomePage from '../../../pages/unified-portal/home/portal-home-page';
import RaiseOrderPage from '../../../pages/unified-portal/order/raise-order-page';
import CommonUtilities from '../../../common/Util';
import RaiseOrderHomePage from '../../../pages/unified-portal/order/raise-order-home-page';
import tripHomePage from '../../../pages/unified-portal/trip/trip-homepge';
import PortalLoginPage from '../../../pages/unified-portal/login/portal-login-page';
import personalInfo from '../../../pages/unified-portal/reseller/reseller-personal-info';
import AddressInfo from '../../../pages/unified-portal/reseller/reseller-address-info';
import CompanyInfo from '../../../pages/unified-portal/reseller/reseller_company_info';
import resellerPage from '../../../pages/unified-portal/reseller/reseller-page';
import ViewReseller from '../../../pages/unified-portal/reseller/view-reseller';
import UserInfo from '../../../pages/unified-portal/reseller/user_info';
import linkdelink from '../../../pages/unified-portal/reseller/link_delink';
import ViewHierarchy from '../../../pages/unified-portal/reseller/view_hierarchy';
import ResellerHomePage from '../../../pages/unified-portal/reseller/reseller_home_page';
import PasswordPolicyPage from '../../../pages/unified-portal/reseller/password_policy_page';
import SearchTransactionPage from '../../../pages/unified-portal/transactions/search-transaction';
import SubscriberTopupMainPage from "../../../pages/unified-portal/transactions/subscriber-topup_main_page";

And(/^I navigate to the Resellers Page$/, () => {
  resellerGeneralInfo.navigateToAddResellerUsingUrl();
});

And(/^I navigate to the Link-De-Link Page$/, () => {
  linkdelink.navigateToLinkDelinkUsingUrl();
});

And(/^I navigate to the View Hierarchy Page$/, () => {
  ViewHierarchy.navigateToViewHierarchyUsingUrl();
});

And(/^User should navigate to manage reseller children screen$/, () => {
  resellerGeneralInfo.verifyManageResellerChildrenScreen();
});

And(/^I click on add reseller button$/, () => {
  resellerGeneralInfo.clickAddReseller();
  cy.wait(800);
});

And(/^I click on next button$/, () => {
  resellerGeneralInfo.clickNext();
});

And(/^I select reseller type "([^"]*)"$/, (type) => {
  resellerGeneralInfo.selectGroupType(type);
});

And(/^I select reseller type Id "([^"]*)"$/, (type) => {
  resellerGeneralInfo.selectResellerType(type);
});

And(/^I enter reseller general info with parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (contractType, dealerMSISDN, status, contractID, parentResellerCode, name) => {
  resellerGeneralInfo.selectContractType(contractType);
  resellerGeneralInfo.enterContractID(contractID);
  resellerGeneralInfo.selectStatus(status);
  resellerGeneralInfo.enterName(name);
  resellerGeneralInfo.inputDealerMSISDN(dealerMSISDN);
  resellerGeneralInfo.selectParentResellerCode(parentResellerCode);
  resellerGeneralInfo.getResellerID();
  resellerGeneralInfo.clickNext();
});

// eslint-disable-next-line no-unused-vars
And(/^I enter reseller general info for GP with parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (contractType, resellerMSISDN, parentResellerID, region, area, territory, thana) => {
  resellerGeneralInfo.selectContractType(contractType);
  cy.wait(1000);
  resellerGeneralInfo.typeResellerMSISDN(resellerMSISDN);
  cy.wait(1000);
  resellerAdditionalInfo.selectParentResellerID(parentResellerID);
  cy.wait(2000);
  resellerGeneralInfo.selectRegion(region);
  cy.wait(2000);
  resellerGeneralInfo.selectArea(area);
  cy.wait(2000);
  resellerGeneralInfo.selectTerritory(territory);
  cy.wait(1000);
  resellerGeneralInfo.selectThana(thana);
  cy.wait(1000);
  resellerGeneralInfo.clickNext();
  cy.wait(1000);
});

And(/^I enter reseller additional info with parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/,
  (dealerCode, anotherOpsDist, distMSISDN, dealerScore, eposTerminalID,
    eposSerialId, paymentType, opBuildingType, rentDueDate, dealerLocationName,
    businessType1, businessType2, businessType3, posNum, nameOfPOSandComp, posType,
    storeMSISDN, unitelPosterType, posterUpdateDate, loanAmount, pinCode,
    dealerReceiveSMS, minRecharge, internet, lastTransactionDate,
    terminateDesc, tag, branchNAme) => {
    resellerAdditionalInfo.enterDealerCode(dealerCode);
    resellerAdditionalInfo.selectAreYouAnotherOperatorsDistributor(anotherOpsDist);
    resellerAdditionalInfo.MSISDNofDistributor(distMSISDN);
    resellerAdditionalInfo.enterEPOSterminalID(eposTerminalID);
    resellerAdditionalInfo.enterEPOSserialID(eposSerialId);
    resellerAdditionalInfo.enterDealerScore(dealerScore);
    resellerAdditionalInfo.selectCashAndCardPayment(paymentType);
    resellerAdditionalInfo.selectOperationBuildingType(opBuildingType);
    resellerAdditionalInfo.enterRentDueDate(rentDueDate);
    resellerAdditionalInfo.enterLocationBuildingName(dealerLocationName);
    resellerAdditionalInfo.selectBusinessType1(businessType1);
    resellerAdditionalInfo.selectBusinessType2(businessType2);
    resellerAdditionalInfo.selectBusinessType3(businessType3);
    resellerAdditionalInfo.enterPOSNumber(posNum);
    resellerAdditionalInfo.selectNameOfPOSandCompany(nameOfPOSandComp);
    resellerAdditionalInfo.selectPOSType(posType);
    resellerAdditionalInfo.enterStoreMSISDN(storeMSISDN);
    resellerAdditionalInfo.selectUnitelPosterType(unitelPosterType);
    resellerAdditionalInfo.enterPosterUpdateDate(posterUpdateDate);
    resellerAdditionalInfo.loanAmountCheck(loanAmount);
    resellerAdditionalInfo.enterPinCode(pinCode);
    resellerAdditionalInfo.dealerReceiveSMS(dealerReceiveSMS);
    resellerAdditionalInfo.enterMinRechargeAmount(minRecharge);
    resellerAdditionalInfo.selectIfHaveInternet(internet);
    resellerAdditionalInfo.selectLastTransactionDate(lastTransactionDate);
    resellerAdditionalInfo.enterTerminateDescription(terminateDesc);
    resellerAdditionalInfo.enterTag(tag);
    resellerAdditionalInfo.enterBranchName(branchNAme);
    resellerGeneralInfo.clickNextBtn();
  });

And(/^I enter reseller additional info for GP with parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/,
  // eslint-disable-next-line camelcase
  (name, externalCode, status, username_prefix, low_balance_alert, AccessibleRegions, AccessibleDomainName) => {
    resellerAdditionalInfo.enterName(name);
    cy.wait(1000);
    resellerAdditionalInfo.selectStatus(status);
    cy.wait(1000);
    resellerAdditionalInfo.enterExternalCode(externalCode);
    cy.wait(1000);
    resellerAdditionalInfo.selectUsernamePrefix(username_prefix);
    cy.wait(1000);
    resellerAdditionalInfo.selectLowBalanceAlert(low_balance_alert);
    cy.wait(1000);
    resellerAdditionalInfo.selectAccessibleRegions(AccessibleRegions);
    cy.wait(1000);
    resellerAdditionalInfo.selectAccessibleDomainName(AccessibleDomainName);
    cy.wait(1000);
    resellerGeneralInfo.clickNext();
    cy.wait(1000);
  });

And(/^I enter users info with params "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/,
  // eslint-disable-next-line camelcase
  (user_role, user_id, user_email, user_password) => {
    cy.wait(1000);
    resellerAdditionalInfo.selectUserRole(user_role);
    cy.wait(1000);
    resellerAdditionalInfo.enterUserID(user_id);
    cy.wait(1000);
    resellerAdditionalInfo.enterUserEmail(user_email);
    cy.wait(1000);
    resellerAdditionalInfo.enterUserPassword(user_password);
    cy.wait(5000);
  });

And(/^I click submit button$/, () => {
  cy.wait(800);
  UserInfo.clickSubmit();
});

And(/^I enter customer info with params "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/,
  (cusID, cnic, name, msisdn, email, fb, isVATpayer, vatPayerType, taxPayerName,
    // eslint-disable-next-line no-unused-vars
    payerID, printReceiptCheck, cusLoanAmountEnabled, cusPinCode) => {
    customerInfo.enterCustomerID(cusID);
    customerInfo.enterCusCNIC(cnic);
    customerInfo.enterCusName(name);
    customerInfo.enterContactaMISDN(msisdn);
    customerInfo.enterEmail(email);
    customerInfo.enterFbID(fb);
    customerInfo.isVATtaxPayer(isVATpayer);
    customerInfo.VATtaxPayerType(vatPayerType);
    customerInfo.enterTaxPayerName(taxPayerName);
    customerInfo.enterTaxPayerID(payerID);
    customerInfo.selectVATprintReciept(printReceiptCheck);
    resellerGeneralInfo.clickNext();
  });

And(/^I enter reseller additional info with parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/,
  (dealerCode, anotherOpsDist, distMSISDN, dealerScore, eposTerminalID,
    eposSerialId, paymentType, opBuildingType, rentDueDate, dealerLocationName,
    businessType1, businessType2, businessType3, posNum, nameOfPOSandComp, posType,
    storeMSISDN, unitelPosterType, posterUpdateDate, loanAmount, pinCode,
    dealerReceiveSMS, minRecharge, internet, lastTransactionDate,
    terminateDesc, tag, branchNAme) => {
    resellerAdditionalInfo.enterDealerCode(dealerCode);
    resellerAdditionalInfo.selectAreYouAnotherOperatorsDistributor(anotherOpsDist);
    resellerAdditionalInfo.MSISDNofDistributor(distMSISDN);
    resellerAdditionalInfo.enterEPOSterminalID(eposTerminalID);
    resellerAdditionalInfo.enterEPOSserialID(eposSerialId);
    resellerAdditionalInfo.enterDealerScore(dealerScore);
    resellerAdditionalInfo.selectCashAndCardPayment(paymentType);
    resellerAdditionalInfo.selectOperationBuildingType(opBuildingType);
    resellerAdditionalInfo.enterRentDueDate(rentDueDate);
    resellerAdditionalInfo.enterLocationBuildingName(dealerLocationName);
    resellerAdditionalInfo.selectBusinessType1(businessType1);
    resellerAdditionalInfo.selectBusinessType2(businessType2);
    resellerAdditionalInfo.selectBusinessType3(businessType3);
    resellerAdditionalInfo.enterPOSNumber(posNum);
    resellerAdditionalInfo.selectNameOfPOSandCompany(nameOfPOSandComp);
    resellerAdditionalInfo.selectPOSType(posType);
    resellerAdditionalInfo.enterStoreMSISDN(storeMSISDN);
    resellerAdditionalInfo.selectUnitelPosterType(unitelPosterType);
    resellerAdditionalInfo.enterPosterUpdateDate(posterUpdateDate);
    resellerAdditionalInfo.loanAmountCheck(loanAmount);
    resellerAdditionalInfo.enterPinCode(pinCode);
    resellerAdditionalInfo.dealerReceiveSMS(dealerReceiveSMS);
    resellerAdditionalInfo.enterMinRechargeAmount(minRecharge);
    resellerAdditionalInfo.selectIfHaveInternet(internet);
    resellerAdditionalInfo.selectLastTransactionDate(lastTransactionDate);
    resellerAdditionalInfo.enterTerminateDescription(terminateDesc);
    resellerAdditionalInfo.enterTag(tag);
    resellerAdditionalInfo.enterBranchName(branchNAme);
    resellerGeneralInfo.clickNext();
  });

And(/^I enter reseller location info with params "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (
  section, serviceBuyAssociation, cityOrProvince, district, khooroOrSection, street, flatNo,
  doorNo, locationType, address, area, region, coordX, coordY, noOfEmployees, areaSize,
  opStartDATE, otherBranchesCheck, numOfBranches, locationOfBranches,
) => {
  resellerLocationInfo.selectSection(section);
  resellerLocationInfo.selectServiceBuyAsspciation(serviceBuyAssociation);
  resellerLocationInfo.selectCityOrProvince(cityOrProvince);
  resellerLocationInfo.selectDistrict(district);
  resellerLocationInfo.selectKhooroOrSection(khooroOrSection);
  resellerLocationInfo.enterStreet(street);
  resellerLocationInfo.enterFlatNo(flatNo);
  resellerLocationInfo.enterDoorNo(doorNo);
  resellerLocationInfo.selectLocationType(locationType);
  resellerLocationInfo.typeAddress(address);
  resellerLocationInfo.selectArea(area);
  resellerLocationInfo.selectRegion(region);
  resellerLocationInfo.typeCoordinateX(coordX);
  resellerLocationInfo.typeCoordinateY(coordY);
  resellerLocationInfo.enterNumOfEmployees(noOfEmployees);
  resellerLocationInfo.selectAreaSIze(areaSize);
  resellerLocationInfo.operationStartDate(opStartDATE);
  resellerLocationInfo.otherBranchesChcek(otherBranchesCheck);
  resellerLocationInfo.enterNumOfBranches(numOfBranches);
  resellerLocationInfo.enterLocationOfBrnaches(locationOfBranches);
  resellerLocationInfo.clickSubmit();
});

And(/^Reseller created should be visible inside table with "([^"]*)" "([^"]*)"$/, (name, msisdn) => {
  if (name !== "") {
    resellerHomePage.enterResellerName(name);
    resellerHomePage.clickSearch();
    cy.wait(1000);
    resellerHomePage.verifyResellerName(name);
    resellerHomePage.verifyResellerMSISDN(msisdn);
  }
});

And(/^I enter reseller general info with parameters for tt "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (dealerMSISDN, status, contractID, parentResellerCode, name, cin, emailResponsible, password) => {
  resellerGeneralInfo.enterPosCode(contractID);
  resellerGeneralInfo.selectStatus(status);
  resellerGeneralInfo.enterName(name);
  resellerGeneralInfo.enterCIN(cin);
  resellerGeneralInfo.enterPassword(password);
  resellerGeneralInfo.inputDealerMSISDN(dealerMSISDN);
  resellerGeneralInfo.selectParentResellerCode(parentResellerCode);
  resellerGeneralInfo.enterEmailResponsible(emailResponsible);
  resellerGeneralInfo.clickNext();
});

And(/^I enter reseller additional info with parameters for tt "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/,
  (region, allowMobileApp, allowReport, allowMobileSell, city, country, externalCode) => {
    resellerAdditionalInfo.selectRegionDropDown(region);
    resellerAdditionalInfo.allowMobileApp(allowMobileApp);
    resellerAdditionalInfo.allowReport(allowReport);
    resellerAdditionalInfo.allowMobileSell(allowMobileSell);
    resellerAdditionalInfo.city(city);
    resellerAdditionalInfo.country(country);
    resellerAdditionalInfo.externalCode(externalCode);
    resellerAdditionalInfo.clickSubmit();
  });

And(/^I click on edit reseller option for tt "([^"]*)"$/, (NAME) => {
  ProductHomePage.clickFilterButton();
  ProductHomePage.selectColumn("Reseller Name");
  ProductHomePage.selectOperator("equals");
  ProductHomePage.fillFilterValue(NAME);
  ProductHomePage.clickFilterButton();
  resellerGeneralInfo.clickEditReseller();
});

And(/^I edit reseller general info with parameters for tt "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (dealerMSISDN, name, cin, emailResponsible, password) => {
  resellerGeneralInfo.enterName(name);
  resellerGeneralInfo.enterCIN(cin);
  resellerGeneralInfo.enterPassword(password);
  resellerGeneralInfo.inputDealerMSISDN(dealerMSISDN);
  resellerGeneralInfo.enterEmailResponsible(emailResponsible);
  resellerGeneralInfo.clickNext();
});

And(/^I update reseller Thana with following parameters "([^"]*)"$/, (thana) => {
  resellerGeneralInfo.selectThana(thana);
  cy.wait(5000);
  resellerGeneralInfo.clickSubmit();
});

And(/^I edit reseller general info with parameters "([^"]*)"$/, (name) => {
  resellerGeneralInfo.enterResellerName(name);
  resellerGeneralInfo.clickNext();
});

And(/^I edit reseller additional info with parameters for tt "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/,
  (allowMobileApp, allowReport, allowMobileSell, city, country, externalCode) => {
    resellerAdditionalInfo.allowMobileApp(allowMobileApp);
    resellerAdditionalInfo.allowReport(allowReport);
    resellerAdditionalInfo.allowMobileSell(allowMobileSell);
    resellerAdditionalInfo.city(city);
    resellerAdditionalInfo.country(country);
    resellerAdditionalInfo.externalCode(externalCode);
    resellerAdditionalInfo.clickSubmit();
  });

And(/^I edit reseller additional info with parameters "([^"]*)" "([^"]*)"$/,
  (shortName, city) => {
    resellerAdditionalInfo.shortName(shortName);
    resellerAdditionalInfo.enterCity(city);
    resellerGeneralInfo.clickNext();
    resellerGeneralInfo.clickSubmit();
  });

And(/^I enter reseller info with parameters "([^"]*)" "([^"]*)"$/, (searchFeild, searchValue) => {
  resellerGeneralInfo.enterSearchValue(searchFeild, searchValue);
  resellerGeneralInfo.clickSearch();
});

And(/^I am able able to validate reseller details "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerType, parentResellerName, name, dealerMSISDN) => {
  resellerGeneralInfo.validateResellerType(resellerType);
  resellerGeneralInfo.validateParentResellerName(parentResellerName);
  resellerGeneralInfo.validateName(name);
  resellerGeneralInfo.validateDealerMSISDN(dealerMSISDN);
});

And(/^I click on Filter Search$/, () => {
  resellerGeneralInfo.clickFilterSearchButton();
});

And(/^I click on view reseller option for tt "([^"]*)"$/, (NAME) => {
  cy.wait(1000);
  resellerGeneralInfo.clickFilterButton();
  cy.wait(1000);
  resellerGeneralInfo.selectColumn("Reseller Name");
  cy.wait(1000);
  resellerGeneralInfo.selectOperator("equals");
  cy.wait(1000);
  resellerGeneralInfo.fillFilterValue(NAME);
  cy.wait(1000);
  resellerGeneralInfo.clickFilterButton();
  resellerGeneralInfo.clickViewReseller();
  cy.wait(1000);
});

And(/^I click on view reseller option$/, () => {
  cy.wait(1000);
  resellerGeneralInfo.clickViewReseller();
});

And(/^I Click on the eye icon against any reseller from the list$/, () => {
  // cy.wait(800);
  resellerGeneralInfo.clickViewReseller();
});

And(/^I click on submit button$/, () => {
  resellerAdditionalInfo.clikcSubmitButton();
  cy.wait(1500);
});

And(/^I perform View Reseller having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (name, resellerType, status, cin, emailResponsible, region, allowMobleApp, allowReport, allowMobilesell) => {
  resellerGeneralInfo.viewResellerDetails(name, resellerType, status, cin, emailResponsible,
    region, allowMobleApp, allowReport, allowMobilesell);
});

And(/^I click on change parent option for tt "([^"]*)"$/, (NAME) => {
  cy.wait(800);
  resellerGeneralInfo.clickFilterButton();
  cy.wait(800);
  resellerGeneralInfo.selectColumn("Reseller Name");
  cy.wait(800);
  resellerGeneralInfo.selectOperator("equals");
  cy.wait(800);
  resellerGeneralInfo.fillFilterValue(NAME);
  cy.wait(800);
  resellerGeneralInfo.clickFilterButton();
  resellerGeneralInfo.clickChangeParent();
});

And(/^I click on change parent reseller option$/, () => {
  cy.wait(800);
  resellerGeneralInfo.clickChangeParent();
});

And(/^I click on change reseller type option$/, () => {
  resellerGeneralInfo.clickChangeResellerType();
});

And(/^I select change parent reseller "([^"]*)"$/, (PARENT_RESELLER) => {
  resellerPage.selectParentReseller(PARENT_RESELLER);
});

And(/^I select change parent reseller for UBP "([^"]*)"$/, (PARENT_RESELLER) => {
  resellerPage.selectParentReseller(PARENT_RESELLER);
});

And(/^I perform change parent operation having following parameters "([^"]*)"$/, (CHANGE_PARENT_ID) => {
  resellerGeneralInfo.enterNewParentID(CHANGE_PARENT_ID);
});

Then(/^I enter "([^"]*)" and its value as "([^"]*)"$/, (FIELD_NAME, FIELD_VALUE) => {
  AddressInfo.fillFieldValues(FIELD_NAME, FIELD_VALUE);
});

And(/^I validate changed parent reseller name "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (NAME, CHANGE_PARENT_NAME, SELECT_COLUMN, SELECT_OPERATOR) => {
  cy.wait(800);
  resellerGeneralInfo.clickFilterButton();
  cy.wait(800);
  resellerGeneralInfo.selectColumn(SELECT_COLUMN);
  cy.wait(800);
  resellerGeneralInfo.selectOperator(SELECT_OPERATOR);
  cy.wait(800);
  resellerGeneralInfo.fillFilterValue(NAME);
  cy.wait(800);
  resellerGeneralInfo.clickFilterButton();
  resellerGeneralInfo.validateParentResellerName(CHANGE_PARENT_NAME);
});

Then(/^I am able to validate reseller details as "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerId, resellerName, resellerTypeName, parentResellerName, MSISDN, status) => {
  resellerGeneralInfo.validateResellerID(resellerId);
  resellerGeneralInfo.validateResellerType(resellerTypeName);
  resellerGeneralInfo.validateParentResellerName(parentResellerName);
  resellerGeneralInfo.validateName(resellerName);
  resellerGeneralInfo.validateDealerMSISDN(MSISDN);
  resellerGeneralInfo.validateStatus(status);
});

And(/^I clear the search area$/, () => {
  resellerGeneralInfo.clearSearchArea();
});

And(/^I click on add more filters$/, () => {
  resellerGeneralInfo.clickAddMoreFilters();
});

And(/^I enter additional filters with parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerTypeName, contractID, region) => {
  resellerGeneralInfo.selectResellerType(resellerTypeName);
  resellerGeneralInfo.enterContractID(contractID);
  resellerGeneralInfo.selectRegion(region);
  resellerGeneralInfo.clickDoneChanges();
  resellerGeneralInfo.clickSearch();
});

And(/^I click on view reseller action$/, () => {
  resellerGeneralInfo.clickViewReseller();
});

Then(/^I verify reseller details with parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerId, resellerName, resellerTypeName, MSISDN, status, region) => {
  // eslint-disable-next-line max-len
  resellerGeneralInfo.validateResellerDetails(resellerId, resellerName, resellerTypeName, MSISDN, status, region);
});

Then(/^I verify edited reseller details of gp with parameters "([^"]*)"$/, (resellerId) => {
  // eslint-disable-next-line max-len
  resellerGeneralInfo.validateResellerDet(resellerId);
});

And(/^I click on profile from menu$/, () => {
  resellerGeneralInfo.clickProfile();
});

And(/^I click on Additional Fields$/, () => {
  resellerGeneralInfo.clickAdditionalFieldsTab();
});

And(/^I should see the Reseller details updated "([^"]*)" "([^"]*)" "([^"]*)"$/, (ownerName, shortName, city) => {
  cy.wait(800);
  resellerGeneralInfo.verifyOwnerName(ownerName);
  resellerGeneralInfo.verifyShortName(shortName);
  resellerGeneralInfo.verifyCity(city);
});

Then(/^I verify the status of Reseller "([^"]*)"$/, (status) => {
  resellerGeneralInfo.verifyStatus(status);
});

Then(/^I search for Reseller with "([^"]*)"$/, (resellerMSISDN) => {
  resellerGeneralInfo.searchResellerMSISDN(resellerMSISDN);
});

Then(/^I unblock the Reseller$/, () => {
  resellerGeneralInfo.unblockProcess();
});

And(/^I select the Reseller by clicking on checkbox$/, () => {
  resellerGeneralInfo.clickResellerCheckBox();
});

And(/^I block the selected Reseller$/, () => {
  resellerGeneralInfo.blockProcess();
});

And(/^I Click on the block button$/, () => {
  resellerGeneralInfo.clickonBlock();
});

And(/^I Click on the unblock button$/, () => {
  resellerGeneralInfo.clickOnUnblock();
});

And(/^I Click on the freeze button$/, () => {
  resellerGeneralInfo.clickonFreeze();
});

And(/^I Click on the unfreeze button$/, () => {
  resellerGeneralInfo.clickOnUnfreeze();
});

And(/^I Click on the activate button$/, () => {
  resellerGeneralInfo.clickOnActivate();
});

And(/^I Click on the deactivate button$/, () => {
  resellerGeneralInfo.clickOnDeactivate();
});

And(/^I Enter a reason and click on Yes button$/, () => {
  resellerGeneralInfo.enterReasonClickYes();
});

And(/^I Enter individual reason and click on Yes button "([^"]*)"$/, (numberOfReasons) => {
  resellerGeneralInfo.enterIndividualReasonClickYes(numberOfReasons);
});

Then(/^I verify the status of Reseller on Reseller home page "([^"]*)"$/, (status) => {
  resellerGeneralInfo.verifyStatusResellerHomePage(status);
});

Then(/^I freeze the selected Reseller$/, () => {
  cy.wait(1000);
  resellerGeneralInfo.freezeProcess();
});

Then(/^I unfreeze the Reseller$/, () => {
  cy.wait(1000);
  resellerGeneralInfo.unfreezeProcess();
});

Then(/^I Deactivate the selected Reseller$/, () => {
  resellerGeneralInfo.deactivateProcess();
});

Then(/^I Activate the Reseller$/, () => {
  resellerGeneralInfo.activateProcess();
});

When(/^I navigate to Reseller user information tab$/, () => {
  cy.contains('Reseller User Information').click();
});

And(/^Add users in users info details page with "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (role, userID, phone, password) => {
  resellerGeneralInfo.clickNextBtn();
  resellerGeneralInfo.clickNextBtn();
  resellerGeneralInfo.addNewUser(role, userID, phone, password);
});

Then(/^I Verify success popup$/, () => {
  resellerGeneralInfo.verifySuccessMsg();
});

Then(/^I verify the updated details of new user added "([^"]*)" "([^"]*)" "([^"]*)"$/, (userID, phone, password) => {
  resellerGeneralInfo.verifyUserInfoUpdated(userID, phone, password);
});

And(/^Delete user in users info details page with "([^"]*)"$/, (userID) => {
  resellerGeneralInfo.deleteUser(userID);
});

When(/^I perform Raise Order with frozen account having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, PRODUCT_SKU, QUANTITY, SELLER_NAME, PAYMENT_AGREEMENT, PAYMENT_MODE, WAREHOUSE, MESSAGE, DELIVERY) => {
  cy.wait(300);

  if (ORDER_TYPE === 'Purchase Order - Payments Involved') {
    cy.wait(300);
    RaiseOrderPage.orderType(ORDER_TYPE);
    RaiseOrderPage.searchResellerId(SELLER_NAME);
    RaiseOrderPage.selectResellerId();
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectBuyerLocation();
    cy.wait(300);
    RaiseOrderPage.clickOnNext();
    cy.wait(1000);
    RaiseOrderPage.selectAssociatedWarehouse(WAREHOUSE);
    cy.wait(300);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectProductSKU(PRODUCT_SKU);
    RaiseOrderPage.enterQuantityAndAddToCart(QUANTITY, ORDER_TYPE);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectDelivery(DELIVERY);
    cy.wait(300);
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.selectPaymentAgreement(PAYMENT_AGREEMENT);
    RaiseOrderPage.selectPaymentMode(PAYMENT_MODE);
    cy.wait(300);
    RaiseOrderPage.clickOnNext();
    cy.wait(300);
    RaiseOrderPage.enterAdditionalInfo();
    RaiseOrderPage.clickOnSubmit();
  }

  CommonUtilities.validateMessage(MESSAGE);
});

Then(/^I perform freeze-unfreeze own account having following paramerters "([^"]*)" "([^"]*)"$/, (action, actionMessage) => {
  resellerGeneralInfo.performFreezeUnfreeze(action);
  CommonUtilities.validateMessage(actionMessage);
});

And(/^I navigate to the Raise Order Page$/, () => {
  RaiseOrderHomePage.visitRaiseOrderHomePageUsingUrl();
});

Then(/^I release used inventories "([^"]*)"$/, (RELEASE_INVENTORIES) => {
  tripHomePage.releaseInventories(RELEASE_INVENTORIES);
});

Then(/^I validate reseller status "([^"]*)"$/, (status) => {
  resellerGeneralInfo.validateStatus(status);
});

Then(/^I am able to perform logout operation$/, () => {
  cy.wait(800);
  PortalHomePage.LogOut();
});

When(/^I perform Raise Order with blocked account having following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, SELLER_NAME, MESSAGE, PRODUCT_SKU, QUANTITY) => {
  cy.wait(300);

  if (ORDER_TYPE === 'Purchase Order - Payments Involved') {
    cy.wait(300);
    RaiseOrderPage.orderType(ORDER_TYPE);
    RaiseOrderPage.searchResellerId(SELLER_NAME);
  }
  if (ORDER_TYPE === 'Instant Sales Order - Payments Involved') {
    cy.wait(300);
    RaiseOrderPage.selectProductSKU(PRODUCT_SKU);
    RaiseOrderPage.clickOnSelectRange();
    RaiseOrderPage.enterQuantity(QUANTITY);
    RaiseOrderPage.clickOnSubmit();
    CommonUtilities.closeAlertMessage();
    RaiseOrderPage.clickOnNext();
    RaiseOrderPage.searchResellerId(SELLER_NAME);
  }
  CommonUtilities.validateMessage(MESSAGE);
});

Then(/^Login into the system with bolcked user "([^"]*)" "([^"]*)" "([^"]*)"$/, (userName, password, errorMessage) => {
  cy.wait(800);
  PortalLoginPage.loginWithBlockedUser(userName, password, errorMessage);
  cy.wait(100);
  CommonUtilities.validateMessage(errorMessage);
});

When(/^I perform Raise Order with un-block account having following parameters "([^"]*)" "([^"]*)"$/, (ORDER_TYPE, SELLER_NAME) => {
  cy.wait(300);

  if (ORDER_TYPE === 'Purchase Order - Payments Involved') {
    cy.wait(300);
    RaiseOrderPage.orderType(ORDER_TYPE);
    RaiseOrderPage.searchResellerId(SELLER_NAME);
    RaiseOrderPage.selectResellerId();
    RaiseOrderPage.clickOnNext();
  }
});

Then(/^I perform block-unblock child account having following paramerters "([^"]*)" "([^"]*)"$/, (action, actionMessage) => {
  resellerGeneralInfo.performFreezeUnfreeze(action);
  CommonUtilities.validateMessage(actionMessage);
});

And(/^I click on edit reseller option$/, () => {
  resellerGeneralInfo.clickEditReseller();
  CommonUtilities.closeAlertMessage();
});

And(/^I click on edit reseller option for Bank-Pos$/, () => {
  resellerGeneralInfo.clickEditResellerForBankPos();
  CommonUtilities.closeAlertMessage();
});

And(/^I click on edit reseller option for Warehouse$/, () => {
  resellerGeneralInfo.clickEditResellerForWarehouse();
  CommonUtilities.closeAlertMessage();
});

And(/^I click on edit reseller option for ASM$/, () => {
  resellerGeneralInfo.clickEditResellerForAsm();
  CommonUtilities.closeAlertMessage();
});

And(/^I click on edit reseller option for OperatorAgent$/, () => {
  resellerGeneralInfo.clickEditResellerForOperatorAgent();
  CommonUtilities.closeAlertMessage();
});

And(/^I Edit various fields Name, MSISDN, email, Parent, city, street, contractID "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (name, msisdn, email, parent, city, street, region, salesArea, contractID) => {
  personalInfo.typeFirstName(name);
  resellerGeneralInfo.typeResellerMSISDN(msisdn);
  personalInfo.typeEmail(email);
  resellerGeneralInfo.selectParentResellerCode(parent);
  personalInfo.clickNextButton();
  resellerLocationInfo.enterStreet(street);
  resellerLocationInfo.enterCity(city);
  resellerLocationInfo.selectRegion(region);
  resellerLocationInfo.selectSalesArea(salesArea);
  personalInfo.clickNextButton();
  resellerGeneralInfo.selectContractType(contractID);
  resellerAdditionalInfo.clikcSubmitButton();
});

And(/^I edit reseller details with parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerType, firstName, shortCode, tillNo, email, region, salesArea, cluster, logisticLocation, latitude, logitude, status, city, district, state, country, resellerPassword, companyName) => {
  if (resellerType === "Dealer Branch") {
    cy.wait(800);
    personalInfo.typeFirstName(firstName);
    personalInfo.typeEmail(email);
    personalInfo.typeBranchShortCode(shortCode);
    personalInfo.typeBranchTillNo(tillNo);
    personalInfo.clickNextButton();
    AddressInfo.selectBranchRegion(region);
    AddressInfo.selectBranchSalesArea(salesArea);
    AddressInfo.selectBranchCluster(cluster);
    AddressInfo.typeBranchLattitude(latitude);
    AddressInfo.typeBranchLongitude(logitude);
    personalInfo.clickNextButton();
    resellerAdditionalInfo.enterLogisticLocation(logisticLocation);
    resellerAdditionalInfo.clikcSubmitButton();
  }

  if (resellerType === "Dealer Sales Agent") {
    cy.wait(800);
    personalInfo.typeFirstName(firstName);
    personalInfo.typeEmail(email);
    personalInfo.typeBranchShortCode(shortCode);
    personalInfo.typeBranchTillNo(tillNo);
    AddressInfo.selectBranchRegion(region);
    AddressInfo.selectBranchSalesArea(salesArea);
    AddressInfo.selectBranchCluster(cluster);
    AddressInfo.typeBranchLattitude(latitude);
    AddressInfo.typeBranchLongitude(logitude);
    personalInfo.clickNextButton();
    resellerAdditionalInfo.enterLogisticLocation(logisticLocation);
    resellerAdditionalInfo.clikcSubmitButton();
  }

  if (resellerType === "Point of Sale") {
    cy.wait(800);
    personalInfo.typeFirstName(firstName);
    personalInfo.typeEmail(email);
    personalInfo.clickNextButton();
    AddressInfo.selectBranchRegion(region);
    AddressInfo.selectBranchSalesArea(salesArea);
    AddressInfo.selectBranchCluster(cluster);
    AddressInfo.typeBranchLattitude(latitude);
    AddressInfo.typeBranchLongitude(logitude);
    personalInfo.clickNextButton();
    resellerAdditionalInfo.enterLogisticLocation(logisticLocation);
    resellerAdditionalInfo.clikcSubmitButton();
  }

  if (resellerType === "Dealer Headquarter") {
    cy.wait(800);
    personalInfo.typeFirstName(firstName);
    personalInfo.typeEmail(email);
    personalInfo.clickNextButton();
    AddressInfo.selectBranchRegion(region);
    personalInfo.clickNextButton();
    resellerAdditionalInfo.clikcSubmitButton();
    cy.wait(100);
  }

  if (resellerType === "Distributor") {
    personalInfo.enterName(firstName);
    personalInfo.selectStatus(status);
    personalInfo.clickNext();
    AddressInfo.enterCity(city);
    AddressInfo.enterDistrict(district);
    AddressInfo.enterState(state);
    AddressInfo.enterCountry(country);
    AddressInfo.enterEmail(email);
    AddressInfo.enterResellerPassword(resellerPassword);
    AddressInfo.clickNext();
    CompanyInfo.enterCompanyName(companyName);
    CompanyInfo.clickSubmit();
  }
});

// eslint-disable-next-line max-len
Then(/^I verify edited reseller details with parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerId, resellerName, resellerTypeName, MSISDN, status, region, shortCode, tillNo, email, salesArea, cluster, logisticLocation, latitude, longitude, city, district, state, country, resellerPassowrd, companyName) => {
  // eslint-disable-next-line max-len
  resellerGeneralInfo.validateEditedResellerDetails(resellerId, resellerName, resellerTypeName, MSISDN, status, region, shortCode, tillNo, email, salesArea, cluster, logisticLocation, latitude, longitude, city, district, state, country, resellerPassowrd, companyName);
});

Then(/^I validate that nationalId and resellerId should not be edited for "([^"]*)"$/, (resellerType) => {
  personalInfo.validateResellerIdDisabled();
  if (resellerType === 'Dealer Sales Agent') {
    personalInfo.validateDSANationalIdDisabled();
  }
  if (resellerType === 'Dealer Branch') {
    personalInfo.clickNextButton();
    personalInfo.validateDBMNationalIdDisabled();
  }
});

Then(/^I click on edit reseller button$/, () => {
  resellerGeneralInfo.clickEditReseller();
});

And(/^I reset the password from Address and Contact section "([^"]*)"$/, (newPassword) => {
  cy.wait(800);
  personalInfo.clickNextButton();
  cy.wait(800);
  personalInfo.enterPasswordVFO(newPassword);
  personalInfo.clickSubmitButton();
  cy.wait(800);
});

And(/^I reset and retrieve the password from Reseller User Information "([^"]*)"$/, (userId) => {
  ViewReseller.clickOnResetPassword(userId);
  cy.wait(800);
  ViewReseller.getResettedPassword(userId);
});

Then(/^I perform login with resetted password for reseller Id "([^"]*)"$/, (resellerId) => {
  PortalLoginPage.login(resellerId, ViewReseller.getPassword);
  cy.url().should('contains', '/home/');
});

And(/^I perform Change Password operation having following parameters "([^"]*)" "([^"]*)"$/, (newPassword, confirmPassword) => {
  cy.log("change the password ");
  PortalHomePage.clickChangePassword();
  PortalHomePage.enterChangePasswordDetails(ViewReseller.getPassword, newPassword, confirmPassword);
  cy.wait(800);
});

And(/^I fill the data to search the reseller by Select Group "([^"]*)"$/, (SELECT_GROUP) => {
  // resellerPage.clickOnDropdownReseller();
  resellerPage.clickAddMoreFilters();
  cy.wait(800);
  resellerPage.selectGroupType(SELECT_GROUP);
  // cy.debug('Click search button');
  // resellerPage.clickSearchButton();
  resellerPage.clickDoneChanges();
  cy.wait(3000);
});

And(/^I fill the data to search the reseller by Select contract type "([^"]*)"$/, (CONTRACT_TYPE) => {
  // resellerPage.clickOnDropdownReseller();
  resellerPage.clickAddMoreFilters();
  cy.wait(800);
  resellerPage.selectContractId(CONTRACT_TYPE);
  // cy.debug('Click search button');
  // resellerPage.clickSearchButton();
  resellerPage.clickDoneChanges();
  cy.wait(3000);
});

And(/^I search the reseller using Reseller ID "([^"]*)"$/, (RESELLER) => {
  // resellerPage.clickOnDropdownReseller();
  resellerPage.typeResellerId(RESELLER);
  cy.wait(800);
  resellerPage.clickSearchButton();
});

When(/^I search the reseller using Msisdn No "([^"]*)"$/, (MSISDN_NO) => {
  // resellerPage.clickOnDropdownReseller();
  resellerPage.typeMsisdnNo(MSISDN_NO);
  resellerPage.clickSearchButton();
});

When(/^I search the reseller using Reseller Name "([^"]*)"$/, (RESELLER_NAME) => {
  // resellerPage.clickOnDropdownReseller();
  resellerPage.typeResellerName(RESELLER_NAME);
  resellerPage.clickSearchButton();
});

When(/^I click on filter by button by provide field,operation and value "([^"]*)" "([^"]*)" "([^"]*)"$/, (FIELD, OPERATION, VALUE) => {
  resellerPage.applyFilter(FIELD, OPERATION, VALUE);
  cy.wait(1000);
  CommonUtilities.verifyFetchedRecordLength(1);
});

When(/^I click on filter by providing filter column,operation and filter value "([^"]*)" "([^"]*)" "([^"]*)"$/, (FIELD, OPERATION, VALUE) => {
  resellerPage.applyFilter(FIELD, OPERATION, VALUE);
});

Then(/^I verify the Reseller Id is present inside the table "([^"]*)"$/, (RESELLER_ID) => {
  // cy.wait(1000);
  resellerPage.validateResellerId(RESELLER_ID);
});

Then(/^I verify the Msisdn No is present inside the table "([^"]*)"$/, (MSISDN_NO) => {
  cy.wait(800);
  resellerPage.validateMsisdnNo(MSISDN_NO);
});

Then(/^I verify the Reseller Name present inside the table "([^"]*)"$/, (RESELLER_NAME) => {
  cy.wait(800);
  resellerPage.validateResellerName(RESELLER_NAME);
});

Then(/^I verify the Reseller Type present inside the table "([^"]*)"$/, (RESELLER_TYPE) => {
  cy.wait(800);
  resellerPage.validateResellerType(RESELLER_TYPE);
});

And(/^I click on reset button$/, () => {
  resellerPage.clickResetButton();
  cy.wait(1000);
});

And(/^Click on search button$/, () => {
  resellerPage.clickSearchButton();
  cy.wait(1000);
});

//  ############### TPK ##################

And(/^I enter reseller general info with parameters for tpk "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerType, dealername, type, dealerMSISDN, resellerID, parentResellerCode) => {
  resellerGeneralInfo.enterdealername(dealername);
  resellerGeneralInfo.inputDealerMSISDN(dealerMSISDN);
  if (resellerType === 'SR') {
    resellerGeneralInfo.typeResellerIDTPK(resellerID);
  }
  resellerGeneralInfo.selectParentResellerCode(parentResellerCode);
  resellerGeneralInfo.selectContractType(type);
  resellerGeneralInfo.clickNextBtn();
});

And(/^I enter reseller additional info with parameters for tpk "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/,
  (resellerType, cnic, contactPerson, telephone, dateOfBirth, email, address, province, city, ptaID, inventory, remarks, maxDailyRechargeLimit, minDailyRechargeLimit, maxDailyTransferLimit, minDailyTransferLimit, region, circle, district) => {
    if (resellerType === 'SR') {
      resellerAdditionalInfo.enterCINForSR(cnic);
    } else {
      resellerAdditionalInfo.enterCIN(cnic);
    }
    resellerAdditionalInfo.entercontactPerson(contactPerson);
    resellerAdditionalInfo.entertelephone(telephone);
    // resellerAdditionalInfo.enterdateofbirth(dateOfBirth);
    resellerAdditionalInfo.enteremail(email);
    resellerAdditionalInfo.enteraddress(address);
    resellerAdditionalInfo.enterprovince(province);
    resellerAdditionalInfo.city(city);
    resellerAdditionalInfo.enterptaid(ptaID);
    resellerAdditionalInfo.enterinventory(inventory);
    resellerAdditionalInfo.enterremarks(remarks);
    resellerAdditionalInfo.entermaxdailyrechargelimit(maxDailyRechargeLimit);
    resellerAdditionalInfo.entermindailyrechargelimit(minDailyRechargeLimit);
    resellerAdditionalInfo.entermaxdailytransferlimit(maxDailyTransferLimit);
    resellerAdditionalInfo.entermindailytransferlimit(minDailyTransferLimit);
    resellerAdditionalInfo.selectRegionDropDown(region);
    resellerAdditionalInfo.selectCircleDropDown(circle);
    resellerAdditionalInfo.selectDistrictDropDown(district);
    resellerGeneralInfo.clickNextBtn();
  });

And(/^I enter user info with params "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/,
  (roles, userId, userPhone, userEmail, userPassword) => {
    UserInfo.selectroles(roles);
    UserInfo.enteruserid(userId);
    UserInfo.enteruserphone(userPhone);
    UserInfo.enteruseremail(userEmail);
    UserInfo.enteruserpassword(userPassword);
    resellerGeneralInfo.clickSubmit();
    cy.wait(4000);
  });

And(/^I click on edit reseller option for tpk "([^"]*)"$/, (NAME) => {
  cy.wait(1000);
  resellerHomePage.enterResellerName(NAME);
  resellerHomePage.clickSearch();
  cy.wait(1000);
  resellerGeneralInfo.clickEditReseller();
});

And(/^I edit reseller general info with parameters for tpk "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (dealername, type, dealerMSISDN, resellerID, parentResellerCode) => {
  resellerGeneralInfo.enterdealername(dealername);
  resellerGeneralInfo.selectParentResellerCode(parentResellerCode);
  resellerGeneralInfo.selectContractType(type);
  resellerGeneralInfo.inputDealerMSISDN(dealerMSISDN);
  resellerGeneralInfo.clickNextBtn();
});

And(/^I edit reseller additional info with parameters for tpk "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/,
  // eslint-disable-next-line max-len
  (resellerType, cnic, contactPerson, telephone, dateOfBirth, email, address, province, city, ptaID, inventory, remarks, maxDailyRechargeLimit, minDailyRechargeLimit, maxDailyTransferLimit, minDailyTransferLimit, region, circle, district) => {
    if (resellerType === 'SR') {
      resellerAdditionalInfo.enterCINForSR(cnic);
    } else {
      resellerAdditionalInfo.enterCIN(cnic);
    }
    resellerAdditionalInfo.entercontactPerson(contactPerson);
    resellerAdditionalInfo.entertelephone(telephone);
    resellerAdditionalInfo.enteremail(email);
    resellerAdditionalInfo.enteraddress(address);
    resellerAdditionalInfo.enterprovince(province);
    resellerAdditionalInfo.city(city);
    resellerAdditionalInfo.enterptaid(ptaID);
    resellerAdditionalInfo.enterinventory(inventory);
    resellerAdditionalInfo.enterremarks(remarks);
    resellerAdditionalInfo.entermaxdailyrechargelimit(maxDailyRechargeLimit);
    resellerAdditionalInfo.entermindailyrechargelimit(minDailyRechargeLimit);
    resellerAdditionalInfo.entermaxdailytransferlimit(maxDailyTransferLimit);
    resellerAdditionalInfo.entermindailytransferlimit(minDailyTransferLimit);
    resellerGeneralInfo.clickNextBtn();
  });

And(/^I edit user info with params for tpk "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/,
  (roles, userId, userPhone, userEmail, userPassword) => {
    UserInfo.selectroles(roles);
    // UserInfo.enteruserid(userId);
    UserInfo.enteruserphone(userPhone);
    UserInfo.enteruseremail(userEmail);
    UserInfo.enteruserpassword(userPassword);
    resellerGeneralInfo.clickSubmit1();
  });

And(/^I click on Next button$/, () => {
  resellerGeneralInfo.clickNextBtn();
});

And(/^I check the Masking of Address and CNIC fields "([^"]*)"$/, (maskedStatus) => {
  resellerAdditionalInfo.checkMaskedCNIC(maskedStatus);
  resellerAdditionalInfo.checkMaskedAddress(maskedStatus);
});

And(/^I verify the region "([^"]*)"$/, (region) => {
  resellerAdditionalInfo.verifyRegion(region);
});

Then(/^Delete user in users info details page with user_id for tpk "([^"]*)"$/, (userID) => {
  resellerGeneralInfo.deleteUserTPK(userID);
});

And(/^I click on export button$/, () => {
  resellerHomePage.clickOnExportButton();
});

And(/^I click on download button$/, () => {
  resellerHomePage.clickOnDownloadButton();
});

And(/^I read file name "([^"]*)"$/, (fileName) => {
  CommonUtilities.readFileName(fileName);
});

Then(/^I delete file name "([^"]*)"$/, (fileName) => {
  cy.task('deleteFile', fileName);
});

And(/^I click on change parent reseller button$/, () => {
  cy.wait(1000);
  cy.debug('Click change parent reseller icon');
  resellerGeneralInfo.clickChangeParentReseller();
});

And(/^I select parent reseller id "([^"]*)"$/, (parentResellerID) => {
  cy.wait(1000);
  resellerGeneralInfo.selectParentResellerIdResellerHome(parentResellerID);
});

And(/^I click on update button$/, () => {
  cy.wait(1000);
  resellerGeneralInfo.clickUpdate();
});

And(/^I verify that reseller id is disabled$/, () => {
  cy.wait(1000);
  resellerGeneralInfo.checkResellerIdDisabled();
});

And(/^Add next user in users info details page with "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (role, userID, phone, password) => {
  resellerGeneralInfo.addNewUser(role, userID, phone, password);
});

And(/^I select reseller status in advanced search "([^"]*)"$/, (status) => {
  resellerGeneralInfo.selectStatus(status);
});

And(/^I click on search button$/, () => {
  resellerHomePage.clickSearch();
  // cy.wait(1000);
});

Then(/^I validate the the status is deactivated "([^"]*)" "([^"]*)"$/, (key, value) => {
  CommonUtilities.scrollToRight();
  CommonUtilities.validateTableListParameters(key, value);
});

And(/^I apply filter search "([^"]*)" "([^"]*)" "([^"]*)"$/, (columnName, operator, value) => {
  cy.wait(1000);
  resellerGeneralInfo.clickFilterButton();
  cy.wait(800);
  resellerGeneralInfo.selectColumn(columnName);
  cy.wait(1000);
  resellerGeneralInfo.selectOperator(operator);
  cy.wait(1000);
  resellerGeneralInfo.fillFilterValue(value);
  cy.wait(800);
  resellerGeneralInfo.clickFilterButton();
});

And(/^I fetch the immediate parent name of reseller$/, () => {
  resellerHomePage.getResellerParent();
});

And(/^I search for the parent reseller$/, () => {
  resellerHomePage.searchResellerParent();
});

And(/^I fetch the msisdn of parent reseller$/, () => {
  resellerHomePage.getResellerMSISDN();
});

And(/^I search for the reseller msisdn$/, () => {
  resellerHomePage.searchResellerMSISDN();
});

Then(/^I compare auto populated RSO number with parent reseller msisdn$/, () => {
  resellerHomePage.compareRSO_MSISDN();
});

Then(/^I click on reseller and verify different reseller menu options should be visible "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerMenu1, resellerMenu2, resellerMenu3, resellerMenu4, resellerMenu5, resellerMenu6) => {
  resellerHomePage.verifyResellerMenuOptions(resellerMenu1, resellerMenu2, resellerMenu3, resellerMenu4, resellerMenu5, resellerMenu6);
});

And(/^I enter reseller name "([^"]*)"$/, (name) => {
  resellerGeneralInfo.enterName(name);
});

And(/^I enter valid reseller MSISDN "([^"]*)"$/, (msisdn) => {
  resellerGeneralInfo.typeResellerMSISDN(msisdn);
});

And(/^I enter valid reseller ID "([^"]*)"$/, (id) => {
  resellerGeneralInfo.typeResellerIDTPK(id);
});

And(/^I select valid reseller parent "([^"]*)"$/, (parent) => {
  resellerGeneralInfo.selectParentResellerCode(parent);
});

And(/^I enter email "([^"]*)"$/, (email) => {
  resellerGeneralInfo.enterEmail(email);
});

And(/^I enter city, street "([^"]*)" "([^"]*)"$/, (street, city) => {
  resellerLocationInfo.enterStreet(street);
  resellerLocationInfo.enterCity(city);
});

And(/^I select region, sales area "([^"]*)" "([^"]*)"$/, (region, salesArea) => {
  resellerGeneralInfo.selectRegion(region);
  resellerGeneralInfo.selectSalesArea(salesArea);
});

And(/^I select role of reseller "([^"]*)"$/, (role) => {
  resellerGeneralInfo.selectUserRole(role);
});

And(/^I Click on the profile button at the top right corner$/, () => {
  resellerGeneralInfo.clickProfileButton();
});

And(/^I Click on the profile option$/, () => {
  resellerGeneralInfo.clickProfileOption();
});

And(/^I verify Resellers table should be empty$/, () => {
  resellerGeneralInfo.verifyEmptyResellerTable();
});

And(/^I click on filters button$/, () => {
  resellerGeneralInfo.clickFilterButton();
});

And(/^I click on reset search$/, () => {
  resellerGeneralInfo.clickResetSearch();
});

And(/^I verify status dropdown should be reset to All$/, () => {
  resellerGeneralInfo.verifyStatusOnReset();
});

And(/^I Click on Add More Filters button$/, () => {
  resellerGeneralInfo.clickAddMoreFilters();
});

And(/^I click on Done changes button$/, () => {
  resellerGeneralInfo.clickDoneChanges();
});

And(/^I select multiple resellers "([^"]*)"$/, (noOfResellers) => {
  resellerGeneralInfo.selectMultipleResellers(noOfResellers);
});

And(/^I click on Individual reasons tab$/, () => {
  resellerGeneralInfo.clickIndividualReasonTab();
});

And(/^I enter reseller id to link-delink "([^"]*)"$/, (id) => {
  linkdelink.enterResellerId(id);
});

And(/^I click on Link button$/, () => {
  linkdelink.clickLink();
});

And(/^I click on Delink button$/, () => {
  linkdelink.clickDeLink();
});

And(/^I verify view hierarchy page$/, () => {
  ViewHierarchy.verifyViewHierarchyPage();
});

And(/^I verify hierarchy chart is visible$/, () => {
  ViewHierarchy.verifyViewHierarchyPage();
});

And(/^I get current balance of reseller and its owner before deactivation "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerId, ownerId, accountTypeId) => {
  resellerGeneralInfo.beforeBalance(resellerId, ownerId, accountTypeId);
});

And(/^I get current balance of reseller and its owner after deactivation "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerId, ownerId, accountTypeId) => {
  resellerGeneralInfo.afterBalance(resellerId, ownerId, accountTypeId);
});

And(/^I validate new balance of reseller and its onwer "([^"]*)" "([^"]*)"$/, (resellerId, ownerId) => {
  resellerGeneralInfo.validateBalance(resellerId, ownerId);
});

And(/^I Click on reseller account information$/, () => {
  cy.wait(2000);
  resellerGeneralInfo.clickResellerAccountInfo();
});

And(/^I validate account balance$/, () => {
  cy.wait(2000);
  resellerGeneralInfo.validateUiAccountBalance();
});

And(/^I navigate to the Reseller Password Policy Page$/, () => {
  ResellerHomePage.goTOResellerPasswordPoliciesUsingUrl();
  cy.wait(4000);
});

And(/^Password Policy created should be visible inside table "([^"]*)"$/, (policyName) => {
  CommonUtilities.applyFilter('Name', 'equals', policyName);
  cy.wait(8000);
});

When(/^I update Password Policy with following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" and "([^"]*)"$/, (policyName, pageTitle, description, minLength, maxLength, regExp, changePolicy, createPolicy, changeTempKey, createTempKey, legalChar, encription) => {
  ResellerHomePage.clickOnEditOfResellerPasswordPolicy(policyName);
  cy.wait(8000);
  PasswordPolicyPage.verifyPageTitle(pageTitle);
  PasswordPolicyPage.fillDescription(description);
  PasswordPolicyPage.fillMinPassword(minLength);
  PasswordPolicyPage.fillMaxPassword(maxLength);
  PasswordPolicyPage.fillRegExp(regExp);
  PasswordPolicyPage.selectChangePolicy(changePolicy);
  PasswordPolicyPage.selectCreatePolicy(createPolicy);
  PasswordPolicyPage.selectChangeTempKey(changeTempKey);
  PasswordPolicyPage.selectCreateTempKey(createTempKey);
  PasswordPolicyPage.selectLegalChar(legalChar);
  PasswordPolicyPage.selectEncryption(encription);
});

And(/^I enter password controls details "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/,
  // eslint-disable-next-line max-len
  (expiryPeriod, createMsg, pwdControl, maxIncorrectLogins, passwordHistoryLimits, bannedPassword) => {
    PasswordPolicyPage.selectPasswordExpirySelect(expiryPeriod);
    PasswordPolicyPage.selectCreateMessage(createMsg);
    PasswordPolicyPage.selectPasswordControl(pwdControl);
    PasswordPolicyPage.enterMaxIncorrectAttempts(maxIncorrectLogins);
    PasswordPolicyPage.enterPasswordHistoryLimits(passwordHistoryLimits);
    PasswordPolicyPage.enterBannedPasswords(bannedPassword);
    cy.wait(1000);
  });

Then(/^I click on update button$/, () => {
  PasswordPolicyPage.clickOnUpdate();
});

And(/^I click on expired password "([^"]*)"$/, (userID) => {
  cy.wait(1000);
  ViewReseller.clickOnExpiredPassword(userID);
  cy.wait(1000);
});

When(/^I Change Password having following parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (password, newPassword, confirmPassword) => {
  PortalHomePage.clickChangePassword();
  PortalHomePage.enterChangePasswordDetails(password, newPassword, confirmPassword);
});

And(/^I enter reseller general info with parameters for gp "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerType, ownerMSISDN, ownerName, parentCategory, contractType, resellerMSISDN, parentResellerId) => {
  if (resellerType == "MAIN DISTRIBUTOR") {
    resellerGeneralInfo.enterOwnerMSISDN(ownerMSISDN);
    cy.wait(900);
    resellerGeneralInfo.enterOwnerName(ownerName);
    cy.wait(900);
    resellerGeneralInfo.selectParentCategory(parentCategory);
    cy.wait(900);
    resellerGeneralInfo.selectContractType(contractType);
    cy.wait(900);
    resellerGeneralInfo.enterResellerMSISDN(resellerMSISDN);
    cy.wait(900);
    resellerGeneralInfo.selectParentResellerId(parentResellerId);
    cy.wait(900);
    resellerGeneralInfo.clickNext();
    cy.wait(1000);
  }
});

And(/^I enter reseller additional info with parameters for gp "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/,
  (name, prefix, status, extCode, lowBalanceAlert) => {
    resellerAdditionalInfo.enterName(name);
    cy.wait(900);
    resellerAdditionalInfo.selectPrefix(prefix);
    cy.wait(900);
    resellerAdditionalInfo.selectStatus(status);
    cy.wait(900);
    resellerAdditionalInfo.enterExternalCode(extCode);
    cy.wait(900);
    resellerAdditionalInfo.selectLowBalanceAlert(lowBalanceAlert);
    cy.wait(900);
    resellerAdditionalInfo.clickNext();
    cy.wait(1000);
  });

And(/^I wait for "([^"]*)" miliseconds$/, (miliseconds) => {
  cy.wait(parseInt(miliseconds));
});

And(/^I verify that reseller type and reseller id are disabled$/, () => {
  resellerGeneralInfo.validateResellerTypeDisability();
  UserInfo.validateResellerIdDisabled();
});

And(/^I edit reseller details of gp with following parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (contractType, name, city, state, country, email) => {
  resellerGeneralInfo.selectContractType(contractType);
  resellerGeneralInfo.clickNext();
  resellerAdditionalInfo.enterName(name);
  resellerAdditionalInfo.enterCity(city);
  resellerAdditionalInfo.enterState(state);
  resellerAdditionalInfo.country(country);
  resellerAdditionalInfo.enteremail(email);
});

And(/^I click on the submit button$/, () => {
  cy.wait(2000);
  resellerGeneralInfo.clickSubmit();
});

And(/^I verify edited reseller details of gp with parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (contractType, name, email) => {
  resellerGeneralInfo.validateGPEditedResellerDetails(contractType, name, email);
});

And(/^I validate account balance for reseller$/, () => {
  cy.wait(2000);
  resellerGeneralInfo.validateUiAccountBalanceForReseller();
});

Then(/^I verify edited thana details of gp with parameter "([^"]*)"$/, (thanaName) => {
  // eslint-disable-next-line max-len
  cy.wait(5000);
  resellerGeneralInfo.clickAdditionalFieldsTab();
  cy.wait(1000);
  resellerGeneralInfo.validateThanaDetails(thanaName);
});

And(/^I edit AccessibleDomainNames "([^"]*)"$/, (accessibleDomainName) => {
  cy.wait(2000);
  resellerGeneralInfo.clickNext();
  cy.wait(2000);
  resellerAdditionalInfo.selectAccessibleDomainName(accessibleDomainName);
  resellerGeneralInfo.clickSubmit();
});

And(/^I validate selected domain details should be displayed in the search reseller result "([^"]*)" "([^"]*)"$/, (key, value) => {
  CommonUtilities.validateTableListParameters(key, value);
});

And(/^I search with DomainName and DomainType "([^"]*)" "([^"]*)"$/, (domainName, domainType) => {
  resellerGeneralInfo.searchWithDomainNameAndType(domainName, domainType);
  resellerGeneralInfo.clickSearch();
});

And(/^I validate DomainName field should consist associated "([^"]*)"$/, (domainNames) => {
  resellerGeneralInfo.validateAssociatedDomainNames(domainNames);
});

And(/^I validate DomainName filed should not consist "([^"]*)"$/, (unrelatedDomainNames) => {
  resellerGeneralInfo.validateUnrelatedDomainNames(unrelatedDomainNames);
});

When(/^I update Password Policy with following parameter "([^"]*)" "([^"]*)"$/, (policyName, passowrdChangeAtFirstLogin) => {
  ResellerHomePage.clickOnEditOfResellerPasswordPolicy(policyName);
  cy.wait(1000);
  PasswordPolicyPage.scrollToBottom();
  PasswordPolicyPage.selectPasswordChangeAtFirstLoginOption(passowrdChangeAtFirstLogin);
});

And(/^I navigate to user info page$/, () => {
  resellerGeneralInfo.navigateToUserInfoPage();
});

And(/^I click on Add new user button$/, () => {
  cy.wait(2000);
  UserInfo.clickAddNewUser();
  cy.wait(3000);
});

And(/^I add new user with following "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/,
  // eslint-disable-next-line camelcase
  (user_role, user_id, user_phone, user_email, user_password, count) => {
    cy.wait(1000);
    UserInfo.addNewUser(user_role, user_id, user_phone, user_email, user_password, count)
    cy.wait(5000);
  });

And(/^I Click submit user button$/, () => {
  UserInfo.clickSubmitUser();
  cy.wait(8000);
});

And(/^I check user should be prompted to change password screen$/, () => {
  PortalHomePage.validateChangePasswordScreen();
});

Then(/^I click on update pay limit button for "([^"]*)"$/, (walletName) => {
  resellerAdditionalInfo.clickOnUpdatePayLimit(walletName);
});

And(/^I verify that wallet "([^"]*)" is visible$/, (walletName) => {
  resellerAdditionalInfo.checkWalletVisible(walletName);
});

And(/^I verify that wallet "([^"]*)" is not visible$/, (walletName) => {
  resellerAdditionalInfo.checkWalletNotVisible(walletName);
});

And(/^I check the wallet balance of "([^"]*)"$/, (walletName) => {
  resellerAdditionalInfo.checkWalletBalance(walletName);
});

And(/^I verify that wallet balance of "([^"]*)" is incremented by "([^"]*)"$/, (walletName, amount) => {
  resellerAdditionalInfo.verifyWalletIncrementedByAmount(walletName, amount);
});


And(/^I navigate to the hierarchy transaction page$/, () => {
  SearchTransactionPage.clickOnHierarchyTransactionUsingUrl();
});

Then(/^I validate performed transaction available under search transaction page "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (id, msisdn, transactionType, product, amount, status, extCode, senderId, senderMSISDN) => {
  SearchTransactionPage.serachWithTransactionReference();
  cy.wait(30000);
  SearchTransactionPage.clickOnSearch();
  // eslint-disable-next-line max-len
  SearchTransactionPage.validateTransaction(id, msisdn, transactionType, product, amount, status, extCode, senderId, senderMSISDN);
});

Then(/^I view the transaction details$/, () => {
  SearchTransactionPage.scrollToLeft();
  SearchTransactionPage.clickView();
});

Then(/^I verify account transactions are not visible$/, () => {
  SearchTransactionPage.verifyAccountTxnNotVisible();
});

Then(/^I search for transaction with reference number$/, () => {
  SearchTransactionPage.serachWithTransactionReference();
  SearchTransactionPage.clickOnSearch();
});

Then(/^I perform a C2S Recharge with "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (msisdn1, pin, msisdn2, amount) => {
  SubscriberTopupMainPage.createC2SRCByApi(msisdn1, pin, msisdn2, amount);
  cy.wait(2000);
});

And(/^I navigate to search transaction page$/, () => {
  SearchTransactionPage.clickOnSearchTransactionUsingUrl();
  cy.wait(8000);
});

Then(/^in search transaction page I verify account transaction without calculating commission "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (accountId, accountTypeId, amount, tag) => {
  SearchTransactionPage.scrollBottom();
  // eslint-disable-next-line max-len
  SearchTransactionPage.verifyAccountTxnRowWithoutCalculation(accountId, accountTypeId, amount, tag);
});

Then(/^I fetch the cumulative wallet balance by API "([^"]*)" "([^"]*)" "([^"]*)"$/, (msisdn1, pin, msisdn2) => {
  resellerAdditionalInfo.getCumulativeWalletBalanceByApi(msisdn1, pin, msisdn2);
});

Then(/^I check the wallet balances$/, () => {
  resellerAdditionalInfo.calculateCumulativeWalletBalance();
});

Then(/^I enter the value "([^"]*)" in input field with label "([^"]*)"$/, (value, label) => {
  resellerAdditionalInfo.typeIntoInputWithLabel(value, label);
  cy.wait(700);
});

Then(/^I click on the close button$/, () => {
  resellerAdditionalInfo.clickUpdatePaylimitCloseButton();
});

And(/^I click on Reseller User Information$/, () => {
  cy.wait(1000);
  resellerGeneralInfo.clickResellerUserInfo();
});

And(/^I verify "([^"]*)" user details are visible on the view page "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (userCount, userId, password, phone, roleId, roleName, webUser) => {
  resellerAdditionalInfo.verifyUserId(userId, userCount);
  resellerAdditionalInfo.verifyPassword(password, userCount);
  resellerAdditionalInfo.verifyPhone(phone, userCount);
  resellerAdditionalInfo.verifyRoleId(roleId, userCount);
  resellerAdditionalInfo.verifyRoleName(roleName, userCount);
  resellerAdditionalInfo.verifyWebUser(webUser, userCount);
});

And(/^I validate deleted user should not exist "([^"]*)"$/, (deletedUser) => {
  resellerAdditionalInfo.verifyDeletedUser(deletedUser);
});

And(/^I approve Link request$/, () => {
  linkdelink.approveLinkRequest();
});

And(/^I enter reseller info with parameters "([^"]*)" "([^"]*)" and expect "([^"]*)" rows$/, (searchFeild, searchValue, expectedRowCount) => {
  resellerGeneralInfo.enterSearchValue(searchFeild, searchValue);
  resellerGeneralInfo.clickSearchAndWaitForRecords(expectedRowCount);
  // cy.wait(5000);
});
