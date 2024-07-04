/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/// <reference types="cypress" />
import URL_PATH from "../../../common/Route";
import CommonUtilities from '../../../common/Util';

const ADD_RESELLER_BTN = "//span[text()='Create Resellers']";
const GROUP_DROPDOWN = "//select[@id = 'reseller-type-id-dropdown']";
const SELECT_RESELLER_TYPE_DROPDOWN = "//select[@id = 'reseller-type-dropdown']";
const CONTRACT_DROPDOWN = "#contract-id-dropdown";
const DEALER_MSISDN = "#resellerMSISDN-input";
const DEALER_NAME = "#name-input";
const DEALER_CONTRACT_ID = "#reseller-contract-drop-down";
const RESELLER_ID = "//input[@name='resellerId']";
const NAME_INPUT = "#name-input";
const OWNER_NAME = "#ownerName-input";
const RESELLER_MSISDN = "#reseller-msisdn-input-box";
const PARENT_RESELLER_CODE = "#reseller-parents-drop-down";
const STATUS_DROPDOWN = "#status-dropdown";
const NEXT_BUTTON = "//span[text()='Next']";
const CIN = "#customer_national_identification_id-input";
const EMAIL_RESPONSIBLE = "#email_responsible-input";
const CITY = "#city-input";
const DISTRICT = "#district-input";
const STATE = "#state-input";
const COUNTRY = "#country-input";
const EMAIL = "#email-input";
const PASSWORD = "#motte_de_passe-input";
const SUBMIT_BUTTON = "//span[text()='Submit']";
const EDIT_RESELLER_BTN = "(//a[contains(@href,'/home/reseller/resellers/edit')])[1]";
const RESELLER_PASSWORD = "#password-input";
const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "//select[@id='columns-filter-select']";
const OPERATOR_SELECT = "//select[@id='columns-operators-select']";
const FILTER_VALUE = "//input[@placeholder='Filter value' or @class='MuiInputBase-input MuiInput-input']";
const SEARCH_BUTTON = "//button/span[text()='Search']";
const VIEW_RESELLER_ID = "//div[@data-field='resellerId' and @data-rowindex='0']";
const VIEW_RESELLER_TYPE = "//div[@data-field='resellerTypeName' and @data-rowindex='0']";
const VIEW_PARENT_RESELLER_NAME = "//div[@data-field='parentResellerName' and @data-rowindex='0']";
const VIEW_NAME = "//div[@data-field='resellerName' and @data-rowindex='0']";
const VIEW_DEALER_MSISDN = "//div[@data-field='resellerMSISDN' and @data-rowindex='0']";
const VIEW_STATUS = "//div[@data-field='status' and @data-rowindex='0']";
const FILTER_SEARCH_BUTTON = "//div[@class='MuiButtonBase-root MuiAccordionSummary-root']";
const VIEW_RESELLER_BTN = "//a[contains(@href,'/home/reseller/resellers/view')]";
// const VIEW_OPTION_RESELLER_ID = "(//p[text()='Reseller Id']/../following-sibling::div/p)[1]";
const VIEW_OPTION_RESELLER_TYPE_NAME = "(//p[text()='Reseller Name']/../following-sibling::div/p)[5]";
const VIEW_OPTION_RESELLER_TYPE_ID = "(//p[text()='Reseller Type Id']/../following-sibling::div/p)[1]";
const VIEW_OPTION_RESELLER_NAME = "(//p[text()='Reseller Name']/../following-sibling::div/p)[1]";
const VIEW_OPTION_RESELLER_TYPE = "(//p[text()='Reseller Type Name']/../following-sibling::div/p)[1]";
const VIEW_OPTION_CIN = "(//p[text()='Customer national identification id']/../following-sibling::div/p)[1]";
const VIEW_OPTION_MSISDN = "(//p[text()='Mobile Number']/../following-sibling::div/p)[1]";
const VIEW_OPTION_STATUS = "(//p[text()='Status']/../following-sibling::div/p)[1]";
const VIEW_OPTION_EMAIL_RESPONSIBLE = "(//p[text()='Email responsible']/../following-sibling::div/p)[1]";
const VIEW_OPTION_REGION = "(//p[text()='Region']/../following-sibling::div/p)[1]";
const VIEW_OPTION_ALLOW_MOBILE_APP = "(//p[text()='Allow mobile app']/../following-sibling::div/p)[1]";
const VIEW_OPTION_ALLOW_REPORT = "(//p[text()='Allow report']/../following-sibling::div/p)[1]";
const VIEW_OPTION_ALLOW_MOBILE_SELL = "(//p[text()='Allow mobile sell']/../following-sibling::div/p)[1]";
const CHANGE_PARENT_BTN = "//div[@class='MuiButtonGroup-root']/button/span[@class='MuiButton-label']";
const CHANGE_RESELLER_TYPE_BTN = "//div[@class='MuiButtonGroup-root']/a[@title='Change reseller type']";
const ENTER_CHANGE_PARENT = "//input[@aria-invalid='true']";
const CLICK_YES_BUTTON = "//span[contains(text(),'Yes')]";
const LEFT_MENU_RESELLER = "//p[text()='RESELLER']";
const LEFIT_MENU_RESELLER_RESELLERS = "//p[text()='RESELLERS']";
const SEARCH_RESELLER_ID = "//input[@name='resellerId']";
const SEARCH_RESELLER_MSISDN = "//input[@name='resellerMSISDN']";
const SEARCH_RESELLER_NAME = "//input[@name='resellerName']";
const ADD_MORE_FILTERS = "//span[text()='Add more filters']";
const SELECT_RESELLER_TYPE_ID = "//select[@name='resellerTypeId']";
const SELECT_CONTRACT_ID = "//select[@name='contractId']";
const SELECT_REGION = "//select[@name='region']";
const CLICK_DONE_CHANGES = "//button/span[text()='Done changes']";
const CLICK_SEARCH = "//button/span[text()='Search']";
const CLICK_ADDITIONAL_FIELDS = "//div/h6[text()='Additional Fields']";
const CLICK_MENU = "//div[@id='seamless-unified-toolbar']/button[@type='button'][2]";
const CLICK_PROFILE = "//li[text()='Profile']";
const NEXT_BTN = "#nextButtonRef";

const RESELLER_VIEW_OWNERNAME = "(//p[text()='Owner Name']/../following-sibling::div/p)[1]";
const RESELLER_VIEW_CITY = "(//p[text()='City']/../following-sibling::div/p)[1]";
const RESELLER_VIEW_NAME = "(//p[text()='Name']/../following-sibling::div/p)[1]";
const RESELLER_VIEW_STATUS = "(//p[text()='Status']/../following-sibling::div/p)[1]";
const RESELLER_VIEW_STATUS_HOMEPAGE = "//div[@class='rendering-zone']//div[@data-field='status']";
const RESELLER_VIEW_DISTRICT = "(//p[text()='District']/../following-sibling::div/p)[1]";
const RESELLER_VIEW_STATE = "(//p[text()='State']/../following-sibling::div/p)[1]";
const RESELLER_VIEW_COMPANY_NAME = "(//p[text()='Company Name']/../following-sibling::div/p)[1]";
const RESELLER_CHECKBOX = "(//input[@type='checkbox'])[2]";
const REASON_TEXTAREA = "#dialog-content-box div>textarea:nth-child(1)";
const BLOCK_BUTTON = "//button/span[text()='Block']";
const UNBLOCK_BUTTON = "//button/span[text()='Un-block']";
const FREEZE_BUTTON = "//button/span[text()='Freeze']";
const UNFREEZE_BUTTON = "//button/span[text()='Un-freeze']";
const DEACTIVATE_BUTTON = "//button/span[text()='Deactivate']";
const ACTIVATE_BUTTON = "//button/span[text()='Activate']";
const ADD_NEW_USER = "//button/span[text()='Add new user']";
const ROLES_DROP_DOWN = "(//div//select[@id='roles-drop-down'])[2]";
const USER_PASSWORD = "(//div//input[@id='userPassword-input'])[2]";
const USER_ID = "(//div//input[@id='userId-input'])[2]";
const PHONE = "(//div//input[@id='userPhone-input'])[2]";
const SUBMIT_USER = "//button/span[text()='Submit user']";
const SUCCESS_SNACKBAR = "//div[@id='notistack-snackbar'][text()='SUCCESS']";
const DELETE_USER = "(//input[ @name='userId']/ancestor::div[contains(@style,'column-reverse')]/descendant::span//*[local-name()='svg'])";
// const USER_INFO_USER_ID = "//div/p[text()='User Id']";
// const USER_INFO_PASSWORD = "//div/p[text()='Password']";
// const USER_INFO_PHONE = "//div/p[text()='Phone']";
// const USER_INFO_ROLE_NAME = "//div/p[text()='Role Name']";
const REGION_DROPDOWN = "#region-drop-down";
const AREA_DROPDOWN = "//select[@id='area-drop-down']";
const SALES_AREA = "#salesArea-drop-down";
const TERRITORY_DROPDOWN = "#territory-drop-down";
const CLICK_ADDRESS_FIELDS = "//div/h6[text()='Reseller Address Information']";
const VIEW_EMAIL = "(//p[contains(text(),'Email')]/../following-sibling::div/p)[1]";
const VIEW_SALES_AREA = "(//p[text()='Sales Area']/../following-sibling::div/p)[1]";
const VIEW_CLUSTER = "(//p[text()='Cluster']/../following-sibling::div/p)[1]";
const VIEW_LONGITUDE = "(//p[text()='Longitude']/../following-sibling::div/p)[1]";
const VIEW_LATITUDE = "(//p[text()='Latitude']/../following-sibling::div/p)[1]";
const VIEW_LOGISTIC_LOCATION = "(//p[text()='Logistic Location']/../following-sibling::div/p)[1]";
const VIEW_SHORT_CODE = "(//p[text()='Short Code']/../following-sibling::div/p)[1]";
const VIEW_TILL_NO = "(//p[text()='Till Number']/../following-sibling::div/p)[1]";
const CHANGE_PARENT_RESELLER = "//button[@title='Change parent reseller']";
const UPDATE = "//button/span[text()='Update']";
const PARENT_RESELLER_ID_RESELLER_HOME = "//select[@id='reseller-parents-drop-down']";
const RESET_SEARCH = "//button/span[text() = 'Reset Search']";
const MANAGE_RESELLER_SCREEN = "//h4[text() = 'View and manage reseller children']";
const CLICK_USERNAME = "//div[@id='seamless-unified-toolbar']/button[@type='button'][2]";
const RESELLER_DATA_FIRSTROW = "(//div[@class= 'MuiDataGrid-row Mui-even'])[1]";
const INDIVIDUAL_REASON = "//button/span[text() = 'Individual Reason']";
const USER_ROLES = "#roles-drop-down";
const RESELLER_USER_INFO = "//div/h6[text()='Reseller User Information']";
const RESELLER_WRONG_PASSWORD_ATTEMPTS = "(//button/span[text()='Reset wrong password attempts'])[1]";
const VIEW_RESELLER_PATH = "(//p[text()='Reseller Path']/../following-sibling::div/p)[1]";
const VIEW_RESELLERID = "(//p[text()='Reseller ID']/../following-sibling::div/p)[1]";
const VIEW_USER_ID = "(//p[text()='User ID']/../following-sibling::div/p)[1]";
const VIEW_PASSWORD = "(//p[text()='Password']/../following-sibling::div/p)[1]";
const VIEW_ROLE_ID = "(//p[text()='Role Id']/../following-sibling::div/p)[1]";
const VIEW_ROLE_NAME = "(//p[text()='Role Name']/../following-sibling::div/p)[1]";
const APPROVE_AUTO_TRANSFER = "//button[@title='Approve Autotransfer']";
const REJECT_AUTO_TRANSFER = "//button[@title='Reject Autotransfer']";
const CLICK_UPDATE = "//button/span[text()='Update']";
const SCROLLABLE_AREA = "div.MuiDataGrid-window";
const CLICK_RESELLER_ACCOUNT_INFO = "//div/h6[text()='Reseller Accounts Information']";
const ENTER_OWNER_MSISDN = "//input[@id='ownerMsisdn-input']";
const ENTER_OWNER_NAME = "//input[@id='ownerName-input']";
const SELECT_PARENT_CATEGORY = "//select[@id='parentResellerType-drop-down']";
const ENTER_RESELLER_MSISDN = "//input[@id='reseller-msisdn-input-box']";
const ENTER_PARENT_RESELLER_ID = "//input[@id='reseller-parents-drop-down']";
const VIEW_CONTRACT_TYPE = "(//p[text()='Contract Name']/../following-sibling::div/p)[1]";
const CLICK_CONTRACT_FIELDS = "//div/h6[text()='Contract Information']";
const THANA_DROPDOWN = "//select[@id='thana-drop-down']";
const VIEW_THANA_NAME = "(//p[text()='Thana Name']/../following-sibling::div/p)[1]";
const DOMAIN_NAME = "//select[@id='domain-name-dropdown']";
const DOMAIN_TYPE = "//input[@id='domain-associates-dropdown']";
const DELETE_USER_ID = "(//div/input[@value = 'userId']/../../../../..//button[@id='delete-user'])[1]";
const DELETE_YES = "//span[text()='Delete']";
const RESELLER_SEARCH_AREA_XPATH = "//div[@class = 'rendering-zone']";
const TABLE_ROW_CSS = "div[role='row']";

let resultsOfResellerBeforeBalance = '';
let resultsOfOwnerBeforeBalance = '';
let resultsOfResellerAfterBalance = '';
let resultsOfOwnerAfterBalance = '';

class ResellerGeneralInfo {
  static navigateToAddResellerUsingLeftMenu() {
    cy.log("Navigate to manage resellers page");
    cy.xpath(LEFT_MENU_RESELLER, { timeout: 2000 }).should('be.visible');
    cy.xpath(LEFT_MENU_RESELLER, { timeout: 2000 }).click();
    cy.xpath(LEFIT_MENU_RESELLER_RESELLERS, { timeout: 2000 }).click();
  }

  static verifyManageResellerChildrenScreen() {
    // cy.log('verify user is navigated to manage reseller screen');
    cy.xpath(MANAGE_RESELLER_SCREEN).should('be.visible');
  }

  static navigateToAddResellerUsingUrl() {
    // cy.log("Navigate to manage resellers page");
    cy.intercept('GET', '/api/dms/v1/resellers/resellerChildren/*').as('getResellerChildren');
    cy.visit(URL_PATH.reseller);
    cy.wait('@getResellerChildren');
  }

  static clickAddReseller() {
    cy.log("Click create reseller button");
    cy.xpath(ADD_RESELLER_BTN).click();
  }

  static selectGroupType(type) {
    cy.log("Select group type");
    cy.xpath(GROUP_DROPDOWN).select(type);
  }

  static selectContractType(type) {
    if (type !== "") {
      cy.log("Select contract type");
      cy.get(CONTRACT_DROPDOWN, { timeout: 2000 }).select(type);
    }
  }

  static inputDealerMSISDN(msisdn) {
    if (msisdn !== "") {
      cy.log("Enter dealer MSISDN");
      cy.get(DEALER_MSISDN, { timeout: 2000 }).clear().type(msisdn);
    }
  }

  static selectRegion(region) {
    if (region !== "") {
      cy.log('select region');
      cy.get(REGION_DROPDOWN).select(2);
    }
  }

  static selectSalesArea(salesArea) {
    if (salesArea !== "") {
      cy.log('select area');
      cy.get(SALES_AREA).select(1);
    }
  }

  static selectArea(area) {
    if (area !== "") {
      cy.log('select area');
      cy.xpath(AREA_DROPDOWN).select(area);
    }
  }

  static selectTerritory(territory) {
    if (territory !== "") {
      cy.log('select territory');
      cy.get(TERRITORY_DROPDOWN).select(territory);
    }
  }

  static selectThana(thana) {
    if (thana !== "") {
      cy.log('select territory');
      cy.xpath(THANA_DROPDOWN).select(thana);
    }
  }

  static selectStatus(status) {
    if (status !== "") {
      cy.log("Select status from status dropdown");
      cy.get(STATUS_DROPDOWN).select(status);
    }
  }

  static selectParentResellerCode(code) {
    if (code !== "") {
      cy.log("parent reseller code select");
      cy.get(PARENT_RESELLER_CODE).select(code);
    }
  }

  static selectUserRole(role) {
    cy.log('select user role');
    cy.get(USER_ROLES).select(role);
  }

  static enterContractID(contractID) {
    if (contractID !== "") {
      cy.log("enter contract ID");
      cy.get(DEALER_CONTRACT_ID).select(contractID);
    }
  }

  static typeResellerIDTPK(resellerID) {
    if (resellerID !== "") {
      cy.log("enter reseller ID");
      cy.xpath(RESELLER_ID, { timeout: 2000 }).clear().type(resellerID);
    }
  }

  static enterName(name) {
    if (name !== "") {
      cy.log("enter name");
      cy.get(NAME_INPUT).clear().type(name);
    }
  }

  static enterdealername(name) {
    if (name !== "") {
      cy.log("enter name");
      cy.get(DEALER_NAME, { timeout: 2000 }).click();
      cy.get(DEALER_NAME, { timeout: 2000 }).clear().type(name);
    }
  }

  static enterResellerName(name) {
    if (name !== "") {
      cy.log("enter name");
      cy.get(OWNER_NAME).clear().type(name);
    }
  }

  static clickNext() {
    cy.log("click next");
    cy.xpath(NEXT_BUTTON, { timeout: 2000 }).should('be.visible').click({ force: true });
  }

  static clickNextBtn() {
    cy.log("click next");
    cy.get(NEXT_BTN, { timeout: 2000 }).click();
  }

  static getResellerID() {
    cy.get(DEALER_CONTRACT_ID).invoke('val').then((id) => {
      cy.wrap(id).as('resellerID');
    });
  }

  // eslint-disable-next-line camelcase
  static typeResellerMSISDN(resller_MSISDN) {
    if (resller_MSISDN !== "") {
      cy.get(RESELLER_MSISDN).clear().type(resller_MSISDN);
    }
  }

  static enterPosCode(contractID) {
    if (contractID !== "") {
      cy.log("enter contract ID");
      cy.get(DEALER_CONTRACT_ID).clear().type(contractID);
    }
  }

  static enterCIN(cin) {
    if (cin !== "") {
      cy.log("enter cin");
      cy.get(CIN).clear().type(cin);
    }
  }

  static enterEmailResponsible(emailResponsible) {
    if (emailResponsible !== "") {
      cy.log("enter email responsible");
      cy.get(EMAIL_RESPONSIBLE).clear().type(emailResponsible);
    }
  }

  static enterPassword(password) {
    if (password !== "") {
      cy.log("enter email responsible");
      cy.get(PASSWORD).clear().type(password);
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
      cy.get(RESELLER_PASSWORD, { timeout: 15000 }).clear().type(resellerPassword);
    }
  }

  static clickSubmit() {
    cy.log("Click submit");
    cy.xpath(SUBMIT_BUTTON, { timeout: 15000 }).click();
  }

  static clickSubmit1() {
    cy.log("Click submit");
    cy.xpath(SUBMIT_BUTTON, { timeout: 15000 }).trigger("click");
  }

  static clickEditReseller() {
    // cy.log("Click edit reseller link");
    cy.intercept("GET", "api/dms/v1/resellers/types/*/allowedTypes").as("getAllowedTypes");
    cy.intercept("GET", "api/dms/v1/roles/").as("getRoles");
    cy.intercept("POST", "api/dms/auth/getResellerInfo").as("getResellerInfo");
    cy.intercept("GET", "api/template/v1/component/DMS/type/**").as("getTemplates");
    cy.intercept("GET", "api/dms/v1/resellers/types/*").as("getResellerTypes");
    cy.intercept("GET", "api/dms/v1/resellers/types/*/parents").as("getResellerParents");
    cy.intercept("GET", "api/rgms/v1/region/*").as("getRegion");
    cy.intercept("GET", "api/acms/v2/contracts*").as("getContracts");
    cy.xpath(EDIT_RESELLER_BTN, { timeout: 1000 }).click();
    cy.wait(["@getAllowedTypes", "@getRoles", "@getResellerInfo", "@getTemplates", "@getResellerTypes", "@getContracts", "@getResellerParents", "@getRegion"]);
  }

  static clickFilterButton() {
    cy.xpath(FILTER).click();
  }

  static selectColumn(value) {
    cy.xpath(COLUMN_SELECT).select(value);
  }

  static selectOperator(value) {
    cy.xpath(OPERATOR_SELECT).select(value);
  }

  static fillFilterValue(filterValue) {
    cy.xpath(FILTER_VALUE, { timeout: 2000 }).clear().type(filterValue);
  }

  static validateResellerID(resellerID) {
    cy.log('Verify Reseller ID');
    if (resellerID != "") {
      cy.xpath(VIEW_RESELLER_ID).invoke('text').then((id) => {
        expect(id).to.eq(resellerID);
      });
    }
  }

  static validateResellerType(resellerType) {
    cy.log('Verify Reseller type');
    cy.xpath(VIEW_RESELLER_TYPE).invoke('text').then((type) => {
      expect(type).to.eq(resellerType);
    });
  }

  static validateParentResellerName(parentResellertName) {
    cy.log('Verify parent reseller name');
    cy.xpath(VIEW_PARENT_RESELLER_NAME).invoke('text').then((parent) => {
      expect(parentResellertName).to.include(parent);
    });
  }

  static validateName(name) {
    cy.log('Verify name');
    cy.xpath(VIEW_NAME).invoke('text').then((Name) => {
      expect(Name).to.eq(name);
    });
  }

  static validateDealerMSISDN(dealerMSISDN) {
    cy.log('Verify  MSISDN');
    cy.xpath(VIEW_DEALER_MSISDN).invoke('text').then((MSISDN) => {
      expect(MSISDN).to.eq(dealerMSISDN);
    });
  }

  static validateStatus(STATUS) {
    cy.log('Verify  status');
    cy.xpath(VIEW_STATUS).invoke('text').then((status) => {
      expect(status).to.eq(STATUS);
    });
  }

  static clickFilterSearchButton() {
    cy.log("Click search button");
    cy.xpath(FILTER_SEARCH_BUTTON).click();
  }

  static enterSearchValue(searchFeild, searchValue) {
    if (searchFeild == "status") {
      cy.xpath(`//select[@name='${searchFeild}']`, { timeout: 5000 }).select(searchValue);
    } else {
      cy.xpath(`//input[@name='${searchFeild}']`, { timeout: 5000 }).clear().type(searchValue);
    }
  }

  static clickResetSearch() {
    cy.log('click reset search');
    cy.xpath(RESET_SEARCH).click();
  }

  static verifyStatusOnReset() {
    cy.log('verify status after reset search');
    cy.get(STATUS_DROPDOWN).should('have.value', 'ALL');
  }

  static clickViewReseller() {
    cy.log("Click view reseller link");
    cy.xpath(VIEW_RESELLER_BTN, { timeout: 6000 }).click({ force: true });
  }

  static viewResellerDetails(name, resellerType, status, cinExpected,
    emailResponsibleExpected, region, allowMobileAppExpected,
    allowReportExpected, allowMobileSellExpected) {
    cy.log('view Reseller details');
    cy.xpath(VIEW_OPTION_RESELLER_NAME).invoke('text').then((Name) => {
      expect(Name).to.eq(name);
    });
    cy.xpath(VIEW_OPTION_RESELLER_TYPE).invoke('text').then((type) => {
      expect(type).to.eq(resellerType);
    });
    cy.xpath(VIEW_OPTION_CIN).eq(0).invoke('text').then((cinActual) => {
      expect(cinActual).to.eq(cinExpected);
    });
    cy.xpath(VIEW_OPTION_STATUS).invoke('text').then((Status) => {
      expect(Status).to.eq(status);
    });
    cy.xpath(VIEW_OPTION_EMAIL_RESPONSIBLE).eq(0).invoke('text').then((emailResponsible) => {
      expect(emailResponsible).to.eq(emailResponsibleExpected);
    });
    cy.xpath(VIEW_OPTION_REGION).invoke('text').then((Region) => {
      expect(Region).to.eq(region);
    });
    cy.xpath(VIEW_OPTION_ALLOW_MOBILE_APP).invoke('text').then((allowMobileApp) => {
      expect(allowMobileApp).to.eq(allowMobileAppExpected);
    });
    cy.xpath(VIEW_OPTION_ALLOW_REPORT).invoke('text').then((allowReport) => {
      expect(allowReport).to.eq(allowReportExpected);
    });
    cy.xpath(VIEW_OPTION_ALLOW_MOBILE_SELL).invoke('text').then((allowMobileSell) => {
      expect(allowMobileSell).to.eq(allowMobileSellExpected);
    });
  }

  // eslint-disable-next-line max-len
  static verifyResellerDetail(resellerTypeName, resellerMSISDN, status, resellerTypeId) {
    cy.log('view Reseller details');
    cy.xpath(VIEW_OPTION_RESELLER_TYPE_NAME).invoke('text').then((Name) => {
      expect(Name).to.eq(resellerTypeName);
    });
    cy.xpath(VIEW_OPTION_STATUS).invoke('text').then((Status) => {
      expect(Status).to.eq(status);
    });
    cy.xpath(VIEW_OPTION_MSISDN).invoke('text').then((ResellerMsisdn) => {
      expect(ResellerMsisdn).to.include(resellerMSISDN);
    });
    cy.xpath(VIEW_OPTION_RESELLER_TYPE_ID).invoke('text').then((ResellerTypeID) => {
      expect(ResellerTypeID).to.eq(resellerTypeId);
    });
  }

  static clickChangeParent() {
    cy.log("Click change parent link");
    cy.xpath(CHANGE_PARENT_BTN, { timeout: 5000 }).click();
  }

  static clickChangeResellerType() {
    cy.xpath(CHANGE_RESELLER_TYPE_BTN,{ timeout: 5000 }).click();
  }

  static enterNewParentID(CHANGE_PARENT_ID) {
    cy.log("Enter new parent ID");
    cy.xpath(ENTER_CHANGE_PARENT).type(CHANGE_PARENT_ID);
    cy.xpath(CLICK_YES_BUTTON).click();
  }

  static clearSearchArea() {
    cy.log("clearing search area");
    cy.xpath(SEARCH_RESELLER_ID).clear();
    cy.xpath(SEARCH_RESELLER_MSISDN).clear();
    cy.xpath(SEARCH_RESELLER_NAME).clear();
  }

  static clickAddMoreFilters() {
    cy.log("clicking on add more filters");
    cy.xpath(ADD_MORE_FILTERS, { timeout: 2000 }).click();
  }

  // static selectResellerType(resellerTypeName) {
  //   cy.log("selecting resellerTypeName");
  //   cy.xpath(SELECT_RESELLER_TYPE_ID).select(resellerTypeName);
  // }

  static selectContractid(contractID) {
    cy.log("selecting contractID");
    cy.xpath(SELECT_CONTRACT_ID).select(contractID);
  }

  // eslint-disable-next-line no-dupe-class-members
  static selectRegion(region) {
    if (region !== "") {
      cy.log("selecting region");
      cy.xpath(SELECT_REGION).select(region);
    }
  }

  static clickDoneChanges() {
    cy.log("clicking on done changes");
    cy.xpath(CLICK_DONE_CHANGES, { timeout: 2000 }).click();
  }

  static clickSearch() {
    cy.log("clicking on search");
    cy.intercept('POST', '/api/dms/auth/searchResellerBasicInfoByAttribute*').as('searchResellerByAttribute');
    cy.xpath(CLICK_SEARCH, { timeout: 2000 }).click({ force: true });
    cy.wait('@searchResellerByAttribute');
  }

  static clickSearchAndWaitForRecords(expectedRowCount) {
    cy.log("clicking on search");
    cy.intercept('POST', '/api/dms/auth/searchResellerBasicInfoByAttribute*').as('searchResellerByAttribute');
    cy.xpath(CLICK_SEARCH, { timeout: 2000 }).click({ force: true });
    cy.wait('@searchResellerByAttribute');
    // Check if only one row is there in the table
    cy.get(TABLE_ROW_CSS, { timeout: 15000 })
      .should('have.length', (Number(expectedRowCount) + Number(1)));
      // .invoke('prop', 'childElementCount')
      // .then(childElementCount => {
      //   cy.log(`There are ${childElementCount} children`);
      //   expect(childElementCount).to.equal(1);
      // });
  }

  // eslint-disable-next-line max-len
  static validateResellerDetails(resellerId, resellerName, resellerTypeName, msisdn, status, region) {
    cy.log('validating Reseller details');
    cy.scrollTo('bottom');
    if (resellerTypeName === 'Dealer Branch') {
      cy.xpath(`(//p[text()='Dealer Branch Code']/../following-sibling::div/p)[1]`).invoke('text').then((Id) => {
        expect(Id).to.eq(resellerId);
      });
    }
    if (resellerTypeName === 'Dealer Sales Agent') {
      cy.xpath(`(//p[text()='Dealer Sales Agent Code']/../following-sibling::div/p)[1]`).invoke('text').then((Id) => {
        expect(Id).to.eq(resellerId);
      });
    }
    if (resellerTypeName === 'Point of Sale') {
      cy.xpath(`(//p[text()='Customer Code']/../following-sibling::div/p)[1]`).invoke('text').then((Id) => {
        expect(Id).to.eq(resellerId);
      });
    }
    if (resellerTypeName === 'Warehouse') {
      cy.xpath(`(//p[text()='Organization ID']/../following-sibling::div/p)[1]`).invoke('text').then((Id) => {
        expect(Id).to.eq(resellerId);
      });
    }

    if (resellerName !== "") {
      cy.xpath(VIEW_OPTION_RESELLER_NAME).invoke('text').then((Name) => {
        expect(Name).to.eq(resellerName);
      });
    }
    cy.xpath(VIEW_OPTION_RESELLER_TYPE).invoke('text').then((Type) => {
      expect(Type).to.eq(resellerTypeName);
    });
    cy.xpath(VIEW_OPTION_MSISDN).invoke('text').then((Msisdn) => {
      expect(Msisdn).to.include(msisdn);
    });
    cy.xpath(VIEW_OPTION_STATUS).invoke('text').then((Status) => {
      expect(Status).to.eq(status);
    });
    cy.xpath(CLICK_ADDITIONAL_FIELDS).click();

    if (region !== "") {
      cy.xpath(VIEW_OPTION_REGION).invoke('text').then((Region) => {
        expect(Region).to.eq(region);
      });
    }
  }

  // eslint-disable-next-line no-dupe-class-members
  static validateResellerDet(data) {
    cy.log('validating Reseller details');
    cy.scrollTo('bottom');
    if (data === 'Dealer Branch') {
      cy.xpath(`(//p[text()='Dealer Branch Code']/../following-sibling::div/p)[1]`).invoke('text').then((Id) => {
        expect(Id).to.eq(data);
      });
    }
  }

  static clickProfile() {
    cy.log("clicking profile");
    cy.xpath(CLICK_MENU, { timeout: 2000 }).click();
    cy.xpath(CLICK_PROFILE, { timeout: 2000 }).click();
  }

  static validateResellerIDShouldNotExist() {
    cy.log('Verify Reseller ID should not exist');
    cy.xpath(VIEW_RESELLER_ID).should('not.exist');
  }

  static clickAdditionalFieldsTab() {
    cy.log("clicking additional fields tab");
    cy.contains('Additional Fields').click();
  }

  static verifyOwnerName(ownerName) {
    cy.xpath(RESELLER_VIEW_OWNERNAME).should('have.text', ownerName);
  }

  static verifyShortName(name) {
    cy.xpath(RESELLER_VIEW_NAME).should('have.text', name);
  }

  static verifyCity(city) {
    cy.xpath(RESELLER_VIEW_CITY).should('have.text', city);
  }

  static blockProcess() {
    cy.log('click on block');
    cy.xpath(BLOCK_BUTTON, { timeout: 2000 }).click();
    cy.log('enter the reason');
    cy.get(REASON_TEXTAREA, { timeout: 2000 }).type('Test Block');
    cy.log('click on Yes');
    cy.xpath(CLICK_YES_BUTTON, { timeout: 2000 }).click();
  }

  static clickonBlock() {
    cy.log('click on block');
    cy.xpath(BLOCK_BUTTON).click();
  }

  static enterReasonClickYes() {
    cy.log('enter the reason');
    cy.get(REASON_TEXTAREA).type('Test');
    cy.log('click on Yes');
    // cy.contains('Yes').click();
    cy.xpath(CLICK_YES_BUTTON, { timeout: 2000 }).click();
  }

  static enterIndividualReasonClickYes(number) {
    cy.log('enter the reason');
    for (let i = 0; i < number; i++) {
      cy.log(i);
      cy.xpath(`//input[@name="reason-${i}"]`).type(`Test ${i}`);
    }
    cy.log('click on Yes');
    // cy.contains('Yes').click();
    cy.xpath(CLICK_YES_BUTTON, { timeout: 2000 }).click();
  }

  static unblockProcess() {
    cy.log('click on unblock');
    cy.xpath(UNBLOCK_BUTTON, { timeout: 2000 }).click();
    cy.log('enter the reason');
    cy.get(REASON_TEXTAREA, { timeout: 2000 }).type('Test UnBlock');
    cy.log('click on Yes');
    cy.xpath(CLICK_YES_BUTTON, { timeout: 2000 }).click({ force: true });
  }

  static clickOnUnblock() {
    cy.log('click on unblock');
    cy.xpath(UNBLOCK_BUTTON).click();
  }

  static freezeProcess() {
    cy.log('click on freeze');
    cy.xpath(FREEZE_BUTTON, { timeout: 2000 }).click();
    cy.log('enter the reason');
    cy.get(REASON_TEXTAREA, { timeout: 2000 }).type('Test Freeze');
    cy.log('click on Yes');
    // cy.contains('Yes').click();
    cy.xpath(CLICK_YES_BUTTON, { timeout: 2000 }).click();
  }

  static clickonFreeze() {
    cy.log('click on freeze');
    cy.xpath(FREEZE_BUTTON, { timeout: 10000 }).click();
  }

  static unfreezeProcess() {
    cy.log('click on unfreeze');
    cy.xpath(UNFREEZE_BUTTON, { timeout: 2000 }).click();
    cy.log('enter the reason');
    cy.get(REASON_TEXTAREA, { timeout: 2000 }).type('Test Unfreeze');
    cy.log('click on Yes');
    cy.xpath(CLICK_YES_BUTTON, { timeout: 2000 }).click();
  }

  static clickOnUnfreeze() {
    cy.log('click on unfreeze');
    cy.xpath(UNFREEZE_BUTTON, { timeout: 2000 }).click();
  }

  static activateProcess() {
    cy.log('click on activate');
    cy.xpath(ACTIVATE_BUTTON, { timeout: 2000 }).click();
    cy.log('enter the reason');
    cy.get(REASON_TEXTAREA, { timeout: 2000 }).type('Test Activate');
    cy.log('click on Yes');
    cy.xpath(CLICK_YES_BUTTON, { timeout: 2000 }).click();
  }

  static clickOnActivate() {
    cy.log('click on activate');
    cy.xpath(ACTIVATE_BUTTON).click();
  }

  static deactivateProcess() {
    cy.log('click on de-activate');
    cy.xpath(DEACTIVATE_BUTTON, { timeout: 2000 }).click();
    cy.log('enter the reason');
    cy.get(REASON_TEXTAREA, { timeout: 2000 }).type('Test deactivate');
    cy.log('click on Yes');
    cy.xpath(CLICK_YES_BUTTON, { timeout: 2000 }).click();
  }

  static clickOnDeactivate() {
    cy.log('click on de-activate');
    cy.xpath(DEACTIVATE_BUTTON, { timeout: 2000 }).click();
  }

  static verifyStatus(status) {
    cy.log('verify status');
    cy.xpath(RESELLER_VIEW_STATUS).should('have.text', status);
  }

  static verifyStatusResellerHomePage(status) {
    cy.log('verify status on reseller home page');
    cy.xpath(RESELLER_VIEW_STATUS_HOMEPAGE).invoke('attr', 'data-value').should('include', status);
  }

  static verifyDistrict(district) {
    cy.log('verify district');
    cy.xpath(RESELLER_VIEW_DISTRICT).should('have.text', district);
  }

  static verifyState(state) {
    cy.log('verify state');
    cy.xpath(RESELLER_VIEW_STATE).should('have.text', state);
  }

  static verifyCompanyName(companyName) {
    cy.log('verify company name');
    cy.xpath(RESELLER_VIEW_COMPANY_NAME).should('have.text', companyName);
  }

  static clickResellerCheckBox() {
    cy.xpath(RESELLER_CHECKBOX, { timeout: 2000 }).click();
  }

  static searchResellerMSISDN(resellerMSISDN) {
    cy.get('[name="resellerMSISDN"]').type(resellerMSISDN);
    cy.log('click on search button');
    cy.xpath(SEARCH_BUTTON, { timeout: 2000 }).click();
  }

  static addNewUser(role, userId, phone, password) {
    let elelength = 0;
    cy.log('click add new user');
    cy.xpath(ADD_NEW_USER, { timeout: 2000 }).click();
    cy.log('select role');
    cy.xpath(ROLES_DROP_DOWN, { timeout: 2000 }).select(role);

    if (userId !== "") {
      cy.xpath('(//div//input[@id="userId-input"])').then((USERID) => {
        elelength = USERID.length - 1;
        cy.log('enter user id');
        cy.xpath(`(//div//input[@id="userId-input"])[${elelength}]`).clear().type(userId);
      });
    }

    if (password !== "") {
      cy.xpath('(//div//input[@id="userPassword-input"])').then((PASSWORD) => {
        elelength = PASSWORD.length - 1;
        cy.log('enter password');
        cy.xpath(`(//div//input[@id='userPassword-input'])[${elelength}]`).clear().type(password);
      });
    }
    if (phone !== "") {
      cy.xpath('(//div//input[@id="userPassword-input"])').then((PHONE) => {
        elelength = PHONE.length - 1;
        cy.log('enter phone');
        cy.xpath(`(//div//input[@id='userPhone-input'])[${elelength}]`).clear().type(phone);
      });
    }
    cy.log('click on submit user');
    cy.xpath(SUBMIT_USER, { timeout: 2000 }).click();
  }

  static verifySuccessMsg() {
    cy.log('verify success msg');
    cy.xpath(SUCCESS_SNACKBAR).should('have.text', 'SUCCESS');
  }

  static deleteUser(userId) {
    cy.log('delete user');
    cy.xpath(DELETE_USER_ID.replace("userId", userId), { timeout: 2000 }).click();
    cy.xpath(DELETE_YES, { timeout: 2000 }).click();
  }

  static verifyUserInfoUpdated(userID, phone, password) {
    cy.log('verify updated user');
    cy.xpath(`//div/p[text()='${userID}']`, { timeout: 2000 }).should('have.text', userID);
    cy.xpath(`//div/p[text()='${phone}']`, { timeout: 2000 }).should('include.text', phone);
    cy.xpath(`//div/p[text()='${password}']`, { timeout: 2000 }).should('have.text', password);
  }

  static performFreezeUnfreeze(action) {
    cy.log('performing freeze/unfreeze user');
    cy.xpath(`//button/span[text()='${action}']`, { timeout: 2000 }).click();
    cy.xpath(` (//textarea)[1]`, { timeout: 2000 }).type('updating');
    cy.xpath(CLICK_YES_BUTTON, { timeout: 2000 }).click();
  }

  // eslint-disable-next-line max-len
  static validateEditedResellerDetails(resellerId, resellerName, resellerTypeName, msisdn, status, region, shortCode, tillNo, email, salesArea, cluster, logisticLocation, latitude, longitude, city, district, state, country, resellerPassowrd, companyName) {
    cy.log('validating Reseller details');
    if (resellerTypeName === 'Dealer Branch') {
      cy.xpath(`(//p[text()='Dealer Branch Code']/../following-sibling::div/p)[1]`).invoke('text').then((Id) => {
        expect(Id).to.eq(resellerId);
      });
    }
    if (resellerTypeName === 'Dealer Sales Agent') {
      cy.xpath(`(//p[text()='Dealer Sales Agent Code']/../following-sibling::div/p)[1]`).invoke('text').then((Id) => {
        expect(Id).to.eq(resellerId);
      });
    }
    if (resellerTypeName === 'Point of Sale') {
      cy.xpath(`(//p[text()='Customer Code']/../following-sibling::div/p)[1]`).invoke('text').then((Id) => {
        expect(Id).to.eq(resellerId);
      });
    }
    if (resellerTypeName === 'Warehouse') {
      cy.xpath(`(//p[text()='Organization ID']/../following-sibling::div/p)[1]`).invoke('text').then((Id) => {
        expect(Id).to.eq(resellerId);
      });
    }
    if (resellerTypeName === 'Dealer HQ') {
      cy.xpath(`(//p[text()='Dealer HQ Code']/../following-sibling::div/p)[1]`).invoke('text').then((Id) => {
        expect(Id).to.eq(resellerId);
      });
    }

    if (resellerTypeName === 'Distributor') {
      cy.xpath(`(//p[text()='Reseller Type Name']/../following-sibling::div/p)[1]`).invoke('text').then((Name) => {
        expect(Name).to.eq(resellerTypeName);
      });
    }
    if (resellerName !== "") {
      cy.xpath(VIEW_OPTION_RESELLER_NAME).invoke('text').then((Name) => {
        expect(Name).to.eq(resellerName);
      });
    }
    if (resellerTypeName !== "") {
      cy.xpath(VIEW_OPTION_RESELLER_TYPE).invoke('text').then((Type) => {
        expect(Type).to.eq(resellerTypeName);
      });
    }
    if (msisdn !== "") {
      cy.xpath(VIEW_OPTION_MSISDN).invoke('text').then((Msisdn) => {
        expect(Msisdn).to.eq(msisdn);
      });
    }
    if (status !== "") {
      cy.xpath(VIEW_OPTION_STATUS).invoke('text').then((Status) => {
        expect(Status).to.eq(status);
      });
    }
    if (email !== "") {
      cy.xpath(CLICK_ADDRESS_FIELDS).click();
      cy.xpath(VIEW_EMAIL).invoke('text').then((Email) => {
        expect(Email).to.eq(email);
      });
    }

    cy.xpath(CLICK_ADDITIONAL_FIELDS).click();
    if (region !== "") {
      cy.xpath(VIEW_OPTION_REGION).invoke('text').then((Region) => {
        expect(Region).to.eq(region);
      });
    }
    if (district !== "") {
      cy.log('verify district');
      cy.xpath(RESELLER_VIEW_DISTRICT).invoke('text').then((District) => {
        expect(District).to.eq(district);
      });
    }

    if (state !== "") {
      cy.log('verify state');
      cy.xpath(RESELLER_VIEW_STATE).invoke('text').then((State) => {
        expect(State).to.eq(state);
      });
    }
    if (companyName !== "") {
      cy.log('verify state');
      cy.xpath(RESELLER_VIEW_COMPANY_NAME).invoke('text').then((CompanyName) => {
        expect(CompanyName).to.eq(companyName);
      });
    }

    if (salesArea !== "") {
      cy.xpath(VIEW_SALES_AREA).invoke('text').then((SalesArea) => {
        expect(SalesArea).to.eq(salesArea);
      });
    }

    if (cluster !== "") {
      cy.xpath(VIEW_CLUSTER).invoke('text').then((Cluster) => {
        expect(Cluster).to.eq(cluster);
      });
    }

    if (shortCode !== "") {
      cy.xpath(VIEW_SHORT_CODE).invoke('text').then((ShortCode) => {
        expect(ShortCode).to.eq(shortCode);
      });
    }

    if (tillNo !== "") {
      cy.xpath(VIEW_TILL_NO).invoke('text').then((TillNo) => {
        expect(TillNo).to.eq(tillNo);
      });
    }

    if (logisticLocation !== "") {
      cy.xpath(VIEW_LOGISTIC_LOCATION).invoke('text').then((LogisticLocation) => {
        expect(LogisticLocation).to.eq(logisticLocation);
      });
    }

    if (latitude !== "") {
      cy.xpath(VIEW_LATITUDE).invoke('text').then((Latitude) => {
        expect(Latitude).to.eq(latitude);
      });
    }

    if (longitude !== "") {
      cy.xpath(VIEW_LONGITUDE).invoke('text').then((Longitude) => {
        expect(Longitude).to.eq(longitude);
      });
    }
  }

  static deleteUserTPK(userID) {
    cy.log('delete user');
    cy.xpath(`(//div/p[text() = '${userID}']/../..//div/button)[3]`).click();
    cy.contains('Delete').click();
  }

  static clickChangeParentReseller() {
    cy.log("Click on change parent reseller button on reseller home page");
    cy.xpath(CHANGE_PARENT_RESELLER).click();
  }

  static selectParentResellerIdResellerHome(parentResellerId) {
    cy.log('select Parent Reseller Id Reseller Home page');
    cy.xpath(PARENT_RESELLER_ID_RESELLER_HOME).select(parentResellerId);
  }

  static clickUpdate() {
    cy.log('click on update');
    cy.xpath(UPDATE).click();
  }

  static checkResellerIdDisabled() {
    cy.log('check if reseller id is disabled');
    cy.xpath(RESELLER_ID).should('be.disabled');
  }

  static clickProfileButton() {
    cy.log('click on profile button');
    cy.xpath(CLICK_USERNAME).click();
  }

  static clickProfileOption() {
    cy.log('click on profile option');
    cy.intercept("POST", "/api/dms/auth/getResellerInfo").as("getResellerInfo");
    cy.intercept("GET", "/api/template/v1/component/DMS/type/**").as("getTemplate");
    cy.xpath(CLICK_PROFILE).click();
    cy.wait(["@getResellerInfo", "@getTemplate"]);
  }

  static verifyEmptyResellerTable() {
    cy.log('verify Empty Reseller Table');
    cy.xpath(RESELLER_DATA_FIRSTROW).should('not.exist');
  }

  static selectMultipleResellers(number) {
    cy.xpath(RESELLER_SEARCH_AREA_XPATH).children().should('be.visible').and(($children) => {
      expect($children).to.have.length(number);
    });
    cy.log(`select ${number} resellers`);
    for (let i = 1; i <= number; i++) {
      cy.xpath(`(//div[@class = "rendering-zone"]//input[@type="checkbox"])[${i}]`, { timeout: 2000 }).click({ force: true });
    }
  }

  static clickIndividualReasonTab() {
    cy.log('click Individual Reason Tab');
    cy.xpath(INDIVIDUAL_REASON).click();
  }

  static clickResellerUserInfo() {
    cy.log('click reseller user info');
    cy.xpath(RESELLER_USER_INFO, { timeout: 2000 }).click();
  }

  static clickResetWrongPasswordAttempts() {
    cy.log('click reseller wrong password attempts');
    cy.xpath(RESELLER_WRONG_PASSWORD_ATTEMPTS).click();
  }

  static viewResellerPath(resellerPath) {
    cy.xpath(VIEW_RESELLER_PATH).invoke('text').then((ResellerPath) => {
      expect(ResellerPath).to.include(resellerPath);
    });
  }

  static viewResellerId(resellerId) {
    cy.xpath(VIEW_RESELLERID).invoke('text').then((ResellerID) => {
      expect(ResellerID).to.include(resellerId);
    });
  }

  static viewResellerName(resellerName) {
    cy.xpath(VIEW_OPTION_RESELLER_NAME).invoke('text').then((ResellerName) => {
      expect(ResellerName).to.include(resellerName);
    });
  }

  static viewResellerTypeId(resellerTypeId) {
    cy.xpath(VIEW_OPTION_RESELLER_TYPE_ID).invoke('text').then((ResellerTypeID) => {
      expect(ResellerTypeID).to.include(resellerTypeId);
    });
  }

  static viewResellerTypeName(resellerTypeName) {
    cy.xpath(VIEW_OPTION_RESELLER_TYPE).invoke('text').then((ResellerTypeName) => {
      expect(ResellerTypeName).to.include(resellerTypeName);
    });
  }

  static viewMSISDN(msisdn) {
    cy.xpath(VIEW_OPTION_MSISDN).invoke('text').then((MSISDN) => {
      expect(MSISDN).to.include(msisdn);
    });
  }

  static viewStatus(status) {
    cy.xpath(VIEW_OPTION_STATUS).invoke('text').then((Status) => {
      expect(Status).to.include(status);
    });
  }

  static viewUserId(userId) {
    cy.xpath(VIEW_USER_ID).invoke('text').then((UserID) => {
      expect(UserID).to.include(userId);
    });
  }

  static viewPassword(password) {
    cy.xpath(VIEW_PASSWORD).invoke('text').then((Password) => {
      expect(Password).to.include(password);
    });
  }

  static viewRoleId(roleId) {
    cy.xpath(VIEW_ROLE_ID).invoke('text').then((RoleId) => {
      expect(RoleId).to.include(roleId);
    });
  }

  static viewRoleName(roleName) {
    cy.xpath(VIEW_ROLE_NAME).invoke('text').then((RoleName) => {
      expect(RoleName).to.include(roleName);
    });
  }

  static approveAutoTransfer() {
    cy.log('approve autotransfer');
    cy.xpath(APPROVE_AUTO_TRANSFER, { timeout: 2000 }).click();
    cy.xpath(CLICK_UPDATE, { timeout: 2000 }).click();
  }

  static rejectAutoTransfer() {
    cy.log('approve autotransfer');
    cy.xpath(REJECT_AUTO_TRANSFER, { timeout: 2000 }).click();
    cy.xpath(CLICK_UPDATE, { timeout: 2000 }).click();
  }

  static scrollRight() {
    cy.log('scroll right');
    cy.get(SCROLLABLE_AREA).scrollTo('right');
  }

  static beforeBalance(resellerId, ownerId, accountTypeId) {
    cy.log('get reseller before balance', resellerId, accountTypeId);
    const queryResellerBeforeBalance = `select balance from \`accountmanagement\`.\`accounts\` where accountTypeId='${accountTypeId}' AND owner='${resellerId}';`;

    cy.task('queryDb', queryResellerBeforeBalance).then((recordset) => {
      const rec = recordset;
      resultsOfResellerBeforeBalance = Object.values(rec[0]);
      resultsOfResellerBeforeBalance = resultsOfResellerBeforeBalance[0];
      cy.log('reseller current balance =', resultsOfResellerBeforeBalance);
    });

    cy.log('owner before balance', ownerId, accountTypeId);
    const queryOwnerBeforeBalance = `select balance from \`accountmanagement\`.\`accounts\` where accountTypeId='${accountTypeId}' AND owner='${ownerId}';`;

    cy.task('queryDb', queryOwnerBeforeBalance).then((recordset) => {
      const rec = recordset;
      resultsOfOwnerBeforeBalance = Object.values(rec[0]);
      resultsOfOwnerBeforeBalance = resultsOfOwnerBeforeBalance[0];
      cy.log('owner current balance =', resultsOfOwnerBeforeBalance);
    });
  }

  static afterBalance(resellerId, ownerId, accountTypeId) {
    cy.log('get reseller after balance', resellerId, accountTypeId);
    const queryResellerAfterBalance = `select balance from \`accountmanagement\`.\`accounts\` where accountTypeId='${accountTypeId}' AND owner='${resellerId}';`;

    cy.task('queryDb', queryResellerAfterBalance).then((recordset) => {
      const rec = recordset;
      resultsOfResellerAfterBalance = Object.values(rec[0]);
      resultsOfResellerAfterBalance = resultsOfResellerAfterBalance[0];
      cy.log('reseller after balance =', resultsOfResellerAfterBalance);
    });

    cy.log('owner after balance', ownerId, accountTypeId);
    const queryOwnerAfterBalance = `select balance from \`accountmanagement\`.\`accounts\` where accountTypeId='${accountTypeId}' AND owner='${ownerId}';`;

    cy.task('queryDb', queryOwnerAfterBalance).then((recordset) => {
      const rec = recordset;
      resultsOfOwnerAfterBalance = Object.values(rec[0]);
      resultsOfOwnerAfterBalance = resultsOfOwnerAfterBalance[0];
      cy.log('owner after balance =', resultsOfOwnerAfterBalance);
    });
  }

  static validateBalance(resellerId, ownerId) {
    cy.log('validate reseller balance:', resellerId);
    expect(resultsOfResellerAfterBalance).to.eq(0);

    cy.log('validate owner balance :', ownerId);
    let newOwnerBalance = resultsOfResellerBeforeBalance + resultsOfOwnerBeforeBalance;
    expect(parseFloat(resultsOfOwnerAfterBalance).toFixed(2) * 1).to.eq(parseFloat(newOwnerBalance).toFixed(2) * 1);
  }

  static clickResellerAccountInfo() {
    cy.log('click reseller account information');
    cy.scrollTo('bottom');
    cy.xpath(CLICK_RESELLER_ACCOUNT_INFO).click();
  }

  static validateUiAccountBalance() {
    cy.log('validate account balance');
    cy.xpath(`(//p[text()='Account Balance']/../following-sibling::div/p)[1]`).should('not.be.empty');
    cy.xpath(`(//p[text()='Account Balance']/../following-sibling::div/p)[1]`).contains('BDT');
    cy.xpath(`(//p[text()='Account Type Id']/../following-sibling::div/p)[1]`).should('have.text', 'DIGITAL_WALLET');

    cy.xpath(`((//p[text()='Account Balance'])[2]/../following-sibling::div/p)[1]`).should('not.be.empty');
    cy.xpath(`((//p[text()='Account Balance'])[2]/../following-sibling::div/p)[1]`).contains('BDT');
    cy.xpath(`((//p[text()='Account Type Id'])[2]/../following-sibling::div/p)[1]`).should('have.text', 'FOC_WALLET');

    cy.xpath(`((//p[text()='Account Balance'])[3]/../following-sibling::div/p)[1]`).should('not.be.empty');
    cy.xpath(`((//p[text()='Account Balance'])[3]/../following-sibling::div/p)[1]`).contains('BDT');
    cy.xpath(`((//p[text()='Account Type Id'])[3]/../following-sibling::div/p)[1]`).should('have.text', 'INCENTIVE_WALLET');

    cy.xpath(`((//p[text()='Account Balance'])[4]/../following-sibling::div/p)[1]`).should('not.be.empty');
    cy.xpath(`((//p[text()='Account Balance'])[4]/../following-sibling::div/p)[1]`).contains('BDT');
    cy.xpath(`((//p[text()='Account Type Id'])[4]/../following-sibling::div/p)[1]`).should('have.text', 'RESELLER');
  }

  static enterOwnerMSISDN(ownerMSISDN) {
    if (ownerMSISDN != "") {
      cy.log('Enter owner MSISDN', ownerMSISDN);
      cy.xpath(ENTER_OWNER_MSISDN).clear().type(ownerMSISDN);
    }
  }

  static enterOwnerName(ownerName) {
    if (ownerName != "") {
      cy.log('Enter owner Name', ownerName);
      cy.xpath(ENTER_OWNER_NAME).clear().type(ownerName);
    }
  }

  static selectParentCategory(parentCategory) {
    if (parentCategory != "") {
      cy.log('select parent category', parentCategory);
      cy.xpath(SELECT_PARENT_CATEGORY).select(parentCategory);
    }
  }

  static enterResellerMSISDN(resellerMSISDN) {
    if (resellerMSISDN != "") {
      cy.log('Enter reseller msisdn', resellerMSISDN);
      cy.xpath(ENTER_RESELLER_MSISDN).clear().type(resellerMSISDN);
    }
  }

  static selectParentResellerId(parentResellerId) {
    if (parentResellerId != "") {
      cy.log('select parent reseller id', parentResellerId);
      cy.xpath(ENTER_PARENT_RESELLER_ID).clear().type(parentResellerId);
      cy.contains(parentResellerId).click();
    }
  }

  static createResellerUsingAPI(loginId, loginPassword, parentMSISDN, parentOriginId, parentExtCode, userCode, userName, extCode, webLoginId, MSISDN) {
    cy.log('Create reseller using API', userCode);
    const xml2js = require('xml2js');
    const parser = new xml2js.Parser({ explicitArray: false });
    const hostname = Cypress.env('hostname');
    const xmlPayload = `<COMMAND>     <TYPE>USERADDREQ</TYPE>     <Date>12/02/2022</Date>     <EXTNWCODE>6537912</EXTNWCODE>     <EMPCODE>RTUBN</EMPCODE>     <LOGINID>${loginId}</LOGINID>     <PASSWORD>${loginPassword}</PASSWORD>     <MSISDN></MSISDN>     <PIN></PIN>     <EXTREFNUM>36918019</EXTREFNUM>     <DATA>         <NETWORKCODE>GD</NETWORKCODE>         <GEOGRAPHYCODE>sdfsfdsfdsf</GEOGRAPHYCODE>         <PARENTMSISDN>${parentMSISDN}</PARENTMSISDN>         <PARENTORIGINID>${parentOriginId}</PARENTORIGINID>         <PARENTEXTERNALCODE>${parentExtCode}</PARENTEXTERNALCODE>         <USERCATCODE>${userCode}</USERCATCODE>         <USERNAME>${userName}</USERNAME>         <SHORTNAME>sdsdsdssd</SHORTNAME>         <USERNAMEPREFIX>MR</USERNAMEPREFIX>         <SUBSCRIBERCODE>ewewew</SUBSCRIBERCODE>         <EXTERNALCODE>${extCode}</EXTERNALCODE>         <CONTACTPERSON>wdwewqeqw</CONTACTPERSON>         <CONTACTNUMBER>3232323</CONTACTNUMBER>         <SSN>21211</SSN>         <ADDRESS1>1002 Popular</ADDRESS1>         <ADDRESS2>vgasdvasgdasd</ADDRESS2>         <CITY>Ahmedabad</CITY>         <STATE>Gujarat</STATE>         <COUNTRY>INDIA</COUNTRY>         <EMAILID>test_pos_571@gmail.com</EMAILID>         <APPOINTMENTDATE>2022/05/05</APPOINTMENTDATE>         <OUTLETTYPE>ewe</OUTLETTYPE>         <SUBOUTLETTYPE>wewewe</SUBOUTLETTYPE>         <LBA>N</LBA>         <WEBLOGINID>${webLoginId}</WEBLOGINID>         <WEBPASSWORD>123456</WEBPASSWORD>         <MSISDNS>             <MSISDN1>${MSISDN}</MSISDN1>             <MSISDN2>2121212</MSISDN2>             <MSISDN3>456789</MSISDN3>         </MSISDNS>         <INFO1>info1</INFO1>         <INFO2>info2</INFO2>         <INFO3>info3</INFO3>         <INFO4>info4</INFO4>         <INFO5>info5</INFO5>         <INFO6>info6</INFO6>      </DATA> </COMMAND>`;
    cy.request({
      method: 'POST',
      url: `${hostname}:80/api/standard-link/gp/endPoint`,
      qs: {
        'LOGIN': 'ers1',
        'PASSWORD': '1357',
        'REQUEST_GATEWAY_CODE': 'WEB',
        'REQUEST_GATEWAY_TYPE': 'WEB',
        'SERVICE_PORT': '100',
        'SOURCE_TYPE': 'WEB',
      },
      headers: {
        'Content-Type': 'application/xml',
      },
      body: xmlPayload
    }).then((response) => {
      cy.log(response.body);
      expect(response.status).to.eq(200);
    });
  }

  static validateResellerTypeDisability() {
    cy.log('Validate reseller type should be disable');
    cy.xpath(GROUP_DROPDOWN).should('be.disabled');
  }

  static validateGPEditedResellerDetails(contractType, name, email) {
    cy.log('validating Reseller details');

    if (name !== "") {
      cy.xpath(VIEW_OPTION_RESELLER_NAME).invoke('text').then((Name) => {
        expect(Name).to.eq(name);
      });
    }

    if (contractType !== "") {
      cy.xpath(CLICK_CONTRACT_FIELDS).click();
      cy.xpath(VIEW_CONTRACT_TYPE, { timeout: 2000 }).invoke('text').then((ContractType) => {
        expect(ContractType).to.eq(contractType);
      });
    }

    if (email !== "") {
      cy.xpath(CLICK_ADDRESS_FIELDS).click();
      cy.xpath(VIEW_EMAIL, { timeout: 2000 }).invoke('text').then((Email) => {
        expect(Email).to.eq(email);
      });
    }

  }

  static validateUiAccountBalanceForReseller() {
    cy.log('validate account balance');
    cy.xpath(`(//p[text()='Account Balance']/../following-sibling::div/p)[1]`).should('not.be.empty');
    cy.xpath(`(//p[text()='Account Balance']/../following-sibling::div/p)[1]`).contains('BDT');
    cy.xpath(`(//p[text()='Account Type Id']/../following-sibling::div/p)[1]`).should('have.text', 'RESELLER');
  }

  static validateThanaDetails(thanaName) {
    cy.log('validating thana details');
    if (thanaName !== "") {
      cy.xpath(VIEW_THANA_NAME).invoke('text').then((Name) => {
        expect(Name).to.eq(thanaName);
      });
    }
  }

  static searchWithDomainNameAndType(domainName, domainType) {
    cy.log('search with domain name and type');
    cy.xpath(DOMAIN_NAME, { timeout: 5000 }).select(domainName);
    cy.xpath(DOMAIN_TYPE, { timeout: 5000 }).type(domainType);
    cy.contains(domainType).click();
  }

  static validateAssociatedDomainNames(domainNames) {
    cy.log('validates associated domain names');
    const list = domainNames.split(",");
    for (let i = 0; i < list.length; i += 1) {
      cy.xpath(DOMAIN_NAME, { timeout: 2000 }).contains(list[i]);
    }
  }

  static validateUnrelatedDomainNames(domainNames) {
    cy.log('validates associated domain names');
    const list = domainNames.split(",");
    for (let i = 0; i < list.length; i += 1) {
      cy.xpath(DOMAIN_NAME, { timeout: 2000 }).contains(list[i]).should('not.exist');
    }
  }

  static navigateToUserInfoPage() {
    this.clickNext();
    this.clickNext();
    cy.wait(2000);
  }

  static selectResellerType(type) {
    cy.xpath(SELECT_RESELLER_TYPE_DROPDOWN, { timeout: 10000 })
      .should('be.visible')
      .select(type);
  }

  static clickEditResellerForBankPos() {
    // cy.log("Click edit reseller link");
    cy.intercept("GET", "api/dms/v1/resellers/types/*/allowedTypes").as("getAllowedTypes");
    cy.intercept("GET", "api/dms/v1/roles/").as("getRoles");
    cy.intercept("POST", "api/dms/auth/getResellerInfo").as("getResellerInfo");
    cy.intercept("GET", "api/template/v1/component/DMS/type/**").as("getTemplates");
    cy.intercept("GET", "api/dms/v1/resellers/types/*").as("getResellerTypes");
    cy.intercept("GET", "api/dms/v1/resellers/types/*/parents").as("getResellerParents");
    cy.intercept("GET", "api/rgms/v1/region/*").as("getRegion");
    cy.intercept("GET", "api/acms/v2/contracts*").as("getContracts");
    cy.xpath(EDIT_RESELLER_BTN, { timeout: 1000 }).click();
    cy.wait(["@getAllowedTypes", "@getRoles", "@getResellerInfo", "@getAllowedTypes", "@getTemplates", "@getResellerTypes", "@getContracts"]);
  }

  static clickEditResellerForWarehouse() {
    // cy.log("Click edit reseller link");
    cy.intercept("GET", "api/dms/v1/resellers/types/*/allowedTypes").as("getAllowedTypes");
    cy.intercept("GET", "api/dms/v1/roles/").as("getRoles");
    cy.intercept("POST", "api/dms/auth/getResellerInfo").as("getResellerInfo");
    cy.intercept("GET", "api/template/v1/component/DMS/type/**").as("getTemplates");
    cy.intercept("GET", "api/dms/v1/resellers/types/*").as("getResellerTypes");
    cy.intercept("GET", "api/dms/v1/resellers/types/*/parents").as("getResellerParents");
    cy.intercept("GET", "api/rgms/v1/region/*").as("getRegion");
    cy.intercept("GET", "api/acms/v2/contracts*").as("getContracts");
    cy.xpath(EDIT_RESELLER_BTN, { timeout: 1000 }).click();
    cy.wait(["@getAllowedTypes", "@getRoles", "@getResellerInfo", "@getAllowedTypes", "@getTemplates", "@getResellerTypes", "@getRegion", "@getRegion", "@getContracts"]);
  }

  static clickEditResellerForAsm() {
    // cy.log("Click edit reseller link");
    cy.intercept("GET", "api/dms/v1/resellers/types/*/allowedTypes").as("getAllowedTypes");
    cy.intercept("GET", "api/dms/v1/roles/").as("getRoles");
    cy.intercept("POST", "api/dms/auth/getResellerInfo").as("getResellerInfo");
    cy.intercept("GET", "api/template/v1/component/DMS/type/**").as("getTemplates");
    cy.intercept("GET", "api/dms/v1/resellers/types/*").as("getResellerTypes");
    cy.intercept("GET", "api/dms/v1/resellers/types/*/parents").as("getResellerParents");
    cy.intercept("GET", "api/rgms/v1/region/?level=1").as("getRegion1");
    cy.intercept("GET", "api/rgms/v1/region/?level=2").as("getRegion2");
    cy.intercept("GET", "api/acms/v2/contracts*").as("getContracts");
    cy.xpath(EDIT_RESELLER_BTN, { timeout: 1000 }).click();
    cy.wait(["@getAllowedTypes", "@getRoles", "@getResellerInfo", "@getAllowedTypes", "@getTemplates", "@getResellerTypes", "@getRegion1", "@getRegion2", "@getContracts"]);
  }

  static clickEditResellerForOperatorAgent() {
    // cy.log("Click edit reseller link");
    cy.intercept("GET", "api/dms/v1/resellers/types/*/allowedTypes").as("getAllowedTypes");
    cy.intercept("GET", "api/dms/v1/roles/").as("getRoles");
    cy.intercept("POST", "api/dms/auth/getResellerInfo").as("getResellerInfo");
    cy.intercept("GET", "api/template/v1/component/DMS/type/**").as("getTemplates");
    cy.intercept("GET", "api/dms/v1/resellers/types/*").as("getResellerTypes");
    cy.intercept("GET", "api/dms/v1/resellers/types/*/parents").as("getResellerParents");
    cy.intercept("GET", "api/rgms/v1/region/*").as("getRegion");
    cy.intercept("GET", "api/acms/v2/contracts*").as("getContracts");
    cy.intercept("POST", "api/dms/auth/searchResellerBasicInfoByAttribute**").as("getResellerBasicInfoByAttr");
    cy.xpath(EDIT_RESELLER_BTN, { timeout: 1000 }).click();
    cy.wait(["@getAllowedTypes", "@getRoles", "@getResellerInfo", "@getAllowedTypes", "@getTemplates", "@getResellerParents", "@getRegion", "@getRegion", "@getResellerBasicInfoByAttr"]);
  }
}
export default ResellerGeneralInfo;
