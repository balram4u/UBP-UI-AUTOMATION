/// <reference types="cypress" />
const DEALER_CODE = "#dealer_code-input";
const BUSINESS_TYPE1 = "#business_type1-drop-down";
const BUSINESS_TYPE2 = "#business_type2-drop-down";
const BUSINESS_TYPE3 = "#business_type3-drop-down";
const POS_NUMBER = "#pos_number-input";
const NAME_OF_POS_AND_COMPANY = "#pos_company_name-drop-down";
const POS_TYPE = "#pos_type-drop-down";
const STORE_MSISDN = "#store_msisdn-input";
const PIN_CODE = "#pin_code-input";
const DEALER_RECEIVE_SMS = "#sms_notification_enabled-drop-down";
const TERMINATE_DESCRIPTION = "#terminate_description-input";
const LAST_TRANSACTION_DATE = "#last_transaction_date-datepicker";
const TAG = "#tag-input";
const OTHER_OPERATOR_DISTRIBUTOR = "#other_operators_distributor-drop-down";
const DIST_MSISDN = "#distributor_msisdn-input";
const DEALER_SCORE = "#dealer_score-input";
const EPOS_TERMINAL_ID = "#epos_terminal_id-input";
const EPOS_SERIAL_ID = "#epos_serial_id-input";
const CARD_ADN_CASH_PAYMENT = "#cash_card_payment-drop-down";
const OPS_BUILDING_TYPE = "#ops_building_type-drop-down";
const RENT_DUE_DATE = "#rent_due_date-datepicker";
const BUILDING_NAME = "#building_name-input";
const UNITEL_POSTER_TYPE = "#unitel_poster_type-drop-down";
const POSTER_DATE_UPDATE = "#poster_update_date-datepicker";
const LOAN_AMOUNT = "#loanEnabled-drop-down";
const MIN_RECHARGE_AMOUNT = "#min_recharge_balance_amount-input";
const HAVE_INTERNET_BOOLEAN = "#have_internet-drop-down";
const BRANCH_NAME = "#branch_name-input";
const REGION_DROP_DROWN = "#region-drop-down";
const ALLOW_MOBILE_APP = "#allow_mobile_app-drop-down";
const ALLOW_REPORT = "#allow_report-drop-down";
const ALLOW_MOBILE_SELL = "#allow_mobile_sell-drop-down";
const CITY = "#city-input-box";
const COUNTRY = "#country-input-box";
const EXTERNAL_CODE = "#code_external_system-input";
const CIN_FOR_SR = "#national_id-input";
const CONTACT_PERSON = "#CONTACT_PERSON-input";
const TELEPHONE = "#phone-input";
const DATE_OF_BIRTH = "#date_of_birth-datepicker";
const EMAIL = "#email-input-box";
const ADDRESS = "//input[@id='address-input']";
const PROVINCE = "#city_province-input";
const PTA_ID = "#pta_id-input";
const INVENTORY = "#inventory-input";
const REMARKS = "#remarks-input";
const MAX_DAILY_RECHARGE_LIMIT = "#max_daily_recharge_limit-input";
const MIN_DAILY_RECHARGE_LIMIT = "#min_daily_recharge_limit-input";
const MAX_DAILY_TRANSFER_LIMIT = "#max_daily_transfer_limit-input";
const MIN_DAILY_TRANSFER_LIMIT = "#min_daily_transfer_limit-input";
const REGION = "#region-drop-down";
const CIRCLE = "#circle-drop-down";
const DISTRICT = "#district_sum-drop-down";
const NAME = "#name-input-box";
const STATUS = "//select[@id = 'status-drop-down']";
const USERNAME_PREFIX = "#user-name-prefix-drop-down";
const EXTERNAL_CODE_ADDITIONAL_INFO = "#external-code-input-box";
const LOW_BALANCE_ALERT = "#lba-drop-down";
const USER_ID = "#user-id-input-box";
const USER_PASSWORD = "#user-password-input-box";
const USER_EMAIL = "#user-email-input-box";
const SHORT_NAME = "#shortName-input";
const PARENT_RESELLER_ID = "//input[@id='reseller-parents-drop-down']";
const ENTER_LOGISTIC_LOCATION = "//input[@name='logisticLocation']";
const SUBMIT = "//span[contains(text(),'Submit')]";
const CNIC = "//input[@id='national_id-input']";
const REGION_INPUT = "#region-input";
const CIN = "//input[@name='customer_national_identification_id']";
const NEXT_BUTTON = "//span[text()='Next']/..";
const SELECT_PREFIX = "//select[@id='user-name-prefix-drop-down']";
const STATE = "//input[@id='state-input-box']";
const ACCESSIBLE_REGION = "(//input[@placeholder='Please choose'])[1]";
const ACCESSIBLE_DOMAIN_NAME = "(//input[@placeholder='Please choose'])[2]";
const SELECT_USER_ROLE = "//select[@id='role-id-dropdown']";
const RESELLER_ACCOUNT_INFO = "//div[@id='panel4d-content']";
const FOC_WALLET_BALANCE_XPATH = "//p[contains(text(),'FOC_WALLET')]/ancestor-or-self::div[contains(@class,'MuiPaper-elevation1 MuiPaper-rounded')]//span[@class='MuiTypography-root MuiTypography-caption']";
const ALL_WALLETS_XPATH = "//span[@class='MuiTypography-root MuiTypography-caption']"; //Will return multiple elements
const UPDATE_PAYLIMIT_SUBMIT_BUTTON = "//button[@id='ok-button']";
const UPDATE_PAYLIMIT_CLOSE_BUTTON = "//button[@id='close-button']";
const USERID = "(//p[text()='User ID']/parent::div/following-sibling::*[1])[index]";
const ROLEID = "(//p[text()='Role Id']/parent::div/following-sibling::*[1])[index]";
const USERPASSWORD = "(//p[text()='Password']/parent::div/following-sibling::*[1])[index]";
const ROLENAME = "(//p[text()='Role Name']/parent::div/following-sibling::*[1])[index]";
const USERPHONE = "(//p[text()='Phone']/parent::div/following-sibling::*[1])[index+1]";
const WEBUSER = "(//p[text()='Web User']/parent::div/following-sibling::*[1])[index]";
const VERIFY_DELETED_USER = "//p[@id='user-id-value' and text()='deletedUser']";
const CLICK_SUBMIT = "//span[text()='Submit']";
const CLEAR_BUTTON = "(//button[@title='Clear'])[1]"

let focWalletBalance = '';
let cumulativeWalletBalance = 0;
let balanceFromApi = '';

class ResellerAdditionalInfo {
  static enterDealerCode(code) {
    if (code !== "") {
      cy.log("Enter dealer code");
      cy.get(DEALER_CODE).type(code);
    }
  }

  static shortName(shortName) {
    cy.log("Enter short name");
    cy.get(SHORT_NAME).clear();
    cy.get(SHORT_NAME).type(shortName);
  }

  static enterCity(city) {
    cy.log("Enter city");
    cy.get(CITY).clear();
    cy.get(CITY).type(city);
  }

  static enterPassword(password) {
    cy.log("Enter dealer code");
    cy.get(USER_PASSWORD).eq(1).clear();
    cy.get(USER_PASSWORD).type(password);
  }

  static enterBranchName(name) {
    if (name !== "") {
      cy.log("Enter Branch Name");
      cy.get(BRANCH_NAME).type(name);
    }
  }

  static enterDealerScore(score) {
    if (score !== "") {
      cy.log("Enter dealer score");
      cy.get(DEALER_SCORE).type(score);
    }
  }

  static selectBusinessType1(type1) {
    if (type1 !== "") {
      cy.log("Select business type");
      cy.get(BUSINESS_TYPE1).select(type1);
    }
  }

  static selectBusinessType2(type2) {
    if (type2 !== "") {
      cy.log("Select business type");
      cy.get(BUSINESS_TYPE2).select(type2);
    }
  }

  static selectBusinessType3(type3) {
    if (type3 !== "") {
      cy.log("Select business type");
      cy.get(BUSINESS_TYPE3).select(type3);
    }
  }

  static enterPOSNumber(number) {
    if (number !== "") {
      cy.log("Enter POS number");
      cy.get(POS_NUMBER).type(number);
    }
  }

  static enterStoreMSISDN(msisdn) {
    if (msisdn !== "") {
      cy.log("Enter store MSISDN");
      cy.get(STORE_MSISDN).type(msisdn);
    }
  }

  static selectNameOfPOSandCompany(name) {
    if (name !== "") {
      cy.log("select name of POS and company");
      cy.get(NAME_OF_POS_AND_COMPANY).select(name);
    }
  }

  static selectPOSType(type) {
    if (type !== "") {
      cy.log("Select POS type");
      cy.get(POS_TYPE).select(type);
    }
  }

  static loanAmountCheck(booleanValue) {
    if (booleanValue !== "") {
      cy.log("Loan amount check");
      cy.get(LOAN_AMOUNT).select(booleanValue);
    }
  }

  static enterPinCode(code) {
    if (code !== "") {
      cy.log("Enter PIN code");
      cy.get(PIN_CODE).type(code);
    }
  }

  static dealerReceiveSMS(booleanValue) {
    if (booleanValue !== "") {
      cy.log("Dealer receive SMS?");
      cy.get(DEALER_RECEIVE_SMS).select(booleanValue);
    }
  }

  static enterMinRechargeAmount(minAmount) {
    if (minAmount !== "") {
      cy.log("enter min recharge amount");
      cy.get(MIN_RECHARGE_AMOUNT).type(minAmount);
    }
  }

  static enterTerminateDescription(desc) {
    if (desc !== "") {
      cy.log("Enter terminate description");
      cy.get(TERMINATE_DESCRIPTION).type(desc);
    }
  }

  static selectLastTransactionDate(date) {
    if (date !== "") {
      cy.log("select last transaction date");
      cy.get(LAST_TRANSACTION_DATE).type(date);
    }
  }

  static enterTag(tag) {
    if (tag !== "") {
      cy.log("Enter tag");
      cy.get(TAG).type(tag);
    }
  }

  static selectAreYouAnotherOperatorsDistributor(booleanValue) {
    if (booleanValue !== "") {
      cy.log("Select are you another operator's distributor");
      cy.get(OTHER_OPERATOR_DISTRIBUTOR).select(booleanValue);
    }
  }

  static MSISDNofDistributor(msisdn) {
    if (msisdn !== "") {
      cy.log("Enter msisdn of distributor");
      cy.get(DIST_MSISDN).type(msisdn);
    }
  }

  static enterEPOSterminalID(EPOS) {
    if (EPOS !== "") {
      cy.log("Enter EPOS Terminal ID");
      cy.get(EPOS_TERMINAL_ID).type(EPOS);
    }
  }

  static enterEPOSserialID(serialID) {
    if (serialID !== "") {
      cy.log("Enter serial ID");
      cy.get(EPOS_SERIAL_ID).type(serialID);
    }
  }

  static selectCashAndCardPayment(paymentType) {
    if (paymentType !== "") {
      cy.log("Select cash and card payment");
      cy.get(CARD_ADN_CASH_PAYMENT).select(paymentType);
    }
  }

  static selectOperationBuildingType(type) {
    if (type !== "") {
      cy.log("Select operation building type");
      cy.get(OPS_BUILDING_TYPE).select(type);
    }
  }

  static enterRentDueDate(date) {
    if (date !== "") {
      cy.log("Enter rent due date");
      cy.get(RENT_DUE_DATE).type(date);
    }
  }

  static enterLocationBuildingName(name) {
    if (name !== "") {
      cy.log("Enter location building name");
      cy.get(BUILDING_NAME).type(name);
    }
  }

  static selectIfHaveInternet(booleanValue) {
    if (booleanValue !== "") {
      cy.log("Select if have internet or not");
      cy.get(HAVE_INTERNET_BOOLEAN).select(booleanValue);
    }
  }

  static selectUnitelPosterType(type) {
    if (type !== "") {
      cy.log("Select unitel poster type");
      cy.get(UNITEL_POSTER_TYPE).select(type);
    }
  }

  static enterPosterUpdateDate(date) {
    if (date !== "") {
      cy.log("Enter poster update date");
      cy.get(POSTER_DATE_UPDATE).type(date);
    }
  }

  static allowMobileApp() {
    cy.log("select allow mobile app option");
    cy.get(ALLOW_MOBILE_APP).select("Yes");
  }

  static city(city) {
    if (city !== "") {
      cy.log("enter city");
      cy.get(CITY).clear().type(city);
    }
  }

  static allowReport() {
    cy.log("select allow report option");
    cy.get(ALLOW_REPORT).select("Yes");
  }

  static allowMobileSell() {
    cy.log("select allow sell option");
    cy.get(ALLOW_MOBILE_SELL).select("Yes");
  }

  static country(country) {
    if (country !== "") {
      cy.log("enter country");
      cy.get(COUNTRY).clear().type(country);
    }
  }

  static externalCode(externalCode) {
    if (externalCode !== "") {
      cy.log("enter external_code");
      cy.get(EXTERNAL_CODE).type(externalCode);
    }
  }

  static enterCINForSR(cin) {
    if (cin !== "") {
      cy.log("enter cin");
      cy.get(CIN_FOR_SR).clear().type(cin);
    }
  }

  static entercontactPerson(contactPerson) {
    if (contactPerson !== "") {
      cy.log("enter contactPerson");
      cy.get(CONTACT_PERSON).clear().type(contactPerson);
    }
  }

  static entertelephone(telephone) {
    if (telephone !== "") {
      cy.log("enter telephone");
      cy.get(TELEPHONE).clear().type(telephone);
    }
  }

  static enterdateofbirth(dateofbirth) {
    if (dateofbirth !== "") {
      cy.log("Enter date of birth");
      cy.get(DATE_OF_BIRTH).type(dateofbirth);
    }
  }

  static enteremail(email) {
    if (email !== "") {
      cy.log("enter email");
      cy.get(EMAIL).clear().type(email);
    }
  }

  static enteraddress(address) {
    if (address !== "") {
      cy.log("enter address");
      cy.xpath(ADDRESS).clear().type(address);
    }
  }

  static enterprovince(province) {
    if (province !== "") {
      cy.log("enter province");
      cy.get(PROVINCE).clear().type(province);
    }
  }

  static enterptaid(ptaid) {
    if (ptaid !== "") {
      cy.log("enter ptaid");
      cy.get(PTA_ID).clear().type(ptaid);
    }
  }

  static enterinventory(inventory) {
    if (inventory !== "") {
      cy.log("enter inventory");
      cy.get(INVENTORY).clear().type(inventory);
    }
  }

  static enterremarks(remarks) {
    if (remarks !== "") {
      cy.log("enter remarks");
      cy.get(REMARKS).clear().type(remarks);
    }
  }

  static entermaxdailyrechargelimit(maxdailyrechargelimit) {
    if (maxdailyrechargelimit !== "") {
      cy.log("enter maxdailyrechargelimit");
      cy.get(MAX_DAILY_RECHARGE_LIMIT).clear().type(maxdailyrechargelimit);
    }
  }

  static entermindailyrechargelimit(mindailyrechargelimit) {
    if (mindailyrechargelimit !== "") {
      cy.log("enter mindailyrechargelimit");
      cy.get(MIN_DAILY_RECHARGE_LIMIT).clear().type(mindailyrechargelimit);
    }
  }

  static entermaxdailytransferlimit(maxdailytransferlimit) {
    if (maxdailytransferlimit !== "") {
      cy.log("enter maxdailytransferlimit");
      cy.get(MAX_DAILY_TRANSFER_LIMIT).clear().type(maxdailytransferlimit);
    }
  }

  static entermindailytransferlimit(mindailytransferlimit) {
    if (mindailytransferlimit !== "") {
      cy.log("enter mindailytransferlimit");
      cy.get(MIN_DAILY_TRANSFER_LIMIT).clear().type(mindailytransferlimit);
    }
  }

  static selectRegionDropDownTPK(region) {
    if (region !== "") {
      cy.log("select region drop down");
      cy.get(REGION).select(region);
    }
  }

  static selectRegionDropDown(region) {
    if (region !== "") {
      cy.log("select region drop down");
      cy.get(REGION_DROP_DROWN).select(region);
    }
  }

  static selectCircleDropDown(circle) {
    if (circle !== "") {
      cy.log("select circle drop down");
      cy.get(CIRCLE).select(circle);
    }
  }

  static selectDistrictDropDown(district) {
    if (district !== "") {
      cy.log("select district drop down");
      cy.get(DISTRICT).select(district);
    }
  }

  static enterName(name) {
    if (name !== "") {
      cy.log("enter name");
      cy.get(NAME).clear().type(name);
    }
  }

  static selectStatus(status) {
    cy.log("select status");
    cy.xpath(STATUS).select(status);
  }

  static selectUsernamePrefix(usernamePrefix) {
    if (usernamePrefix !== "") {
      cy.log("select username prefix");
      cy.get(USERNAME_PREFIX).select(usernamePrefix);
    }
  }

  static enterExternalCode(externalCode) {
    if (externalCode !== "") {
      cy.log("enter external code");
      cy.get(EXTERNAL_CODE_ADDITIONAL_INFO).type(externalCode);
    }
  }

  static selectLowBalanceAlert(LowBalanceAlert) {
    if (LowBalanceAlert !== "") {
      cy.log("select Low Balance Alert");
      cy.get(LOW_BALANCE_ALERT).select(LowBalanceAlert);
    }
  }

  static enterUserID(userID) {
    cy.log('enter user id');
    if (userID !== "") {
      cy.log("enter user id");
      cy.get(USER_ID).type(userID);
    }
  }

  static enterUserEmail(userEmail) {
    cy.log('enter email');
    if (userEmail !== "") {
      cy.log("enter user email");
      cy.get(USER_EMAIL).type(userEmail);
    }
  }

  static enterUserPassword(userPassword) {
    cy.log('enter password');
    if (userPassword !== "") {
      cy.log("enter user password");
      cy.get(USER_PASSWORD).type(userPassword);
    }
  }

  static selectParentResellerID(parentResellerID) {
    if (parentResellerID !== "") {
      cy.log('select parent reseller');
      cy.wait(2000);
      cy.xpath(CLEAR_BUTTON).click({ force: true });
      cy.wait(5000);
      cy.xpath(PARENT_RESELLER_ID).type(parentResellerID).type('{downArrow}').type('{downArrow}').type('{enter}');
    }
  }

  static clikcSubmitButton() {
    cy.log('click submit button');
    cy.log('click on submit button');
    cy.xpath(SUBMIT, { timeout: 5000 }).click();
  }

  static enterLogisticLocation(logisticLocation) {
    cy.log(`enter logistic location: ${logisticLocation}`);
    if (logisticLocation !== " ") {
      cy.xpath(ENTER_LOGISTIC_LOCATION).clear();
      cy.xpath(ENTER_LOGISTIC_LOCATION).type(logisticLocation);
    }
  }

  static checkMaskedAddress(maskedStatus) {
    cy.log('check if CNIC field is masked with *');
    if (maskedStatus === 'YES') {
      cy.log('Masked');
      cy.xpath(ADDRESS).should('include.value', '*');
    }

    if (maskedStatus === 'NO') {
      cy.log('Not masked');
      cy.xpath(ADDRESS).should('not.include.text', '*');
    }
  }

  static checkMaskedCNIC(maskedStatus) {
    cy.log('check if address field is masked with *');
    if (maskedStatus === 'YES') {
      cy.log('Masked');
      cy.xpath(CNIC).should('include.value', '*');
    }

    if (maskedStatus === 'NO') {
      cy.log('Not masked');
      cy.xpath(CNIC).should('not.include.text', '*');
    }
  }

  static verifyRegion(region) {
    cy.log('verify region');
    if (region !== "") {
      cy.get(REGION_INPUT).should('have.value', region);
    }
  }

  static enterCIN(cin) {
    if (cin !== "") {
      cy.log("enter cin");
      cy.xpath(CIN).clear().type(cin);
    }
  }

  static clickNext() {
    cy.wait(1000);
    cy.log("click next");
    cy.xpath(NEXT_BUTTON).should('be.visible').click();
  }

  static selectPrefix(prefix) {
    cy.log('Select type of reseller');
    cy.xpath(SELECT_PREFIX).select(prefix);
    cy.wait(1000);
  }

  static enterState(state) {
    cy.log("Enter state");
    cy.xpath(STATE).clear();
    cy.xpath(STATE).type(state);
  }

  static clickSubmit() {
    cy.log('click submit button');
    cy.xpath(CLICK_SUBMIT).click({
      force: true
    });
  }

  static selectAccessibleRegions(accessibleRegions) {
    cy.log('Select Accessible regions');
    cy.log(accessibleRegions);
    if (accessibleRegions !== '') {
      cy.xpath(ACCESSIBLE_REGION).type(accessibleRegions);
      cy.contains(accessibleRegions).click();
    }
  }
  static selectAccessibleDomainName(domainName) {
    cy.log('Select Accessible Domain Name');
    cy.log(domainName);
    if (domainName !== '') {
      const list = domainName.split(",");
      for (let i = 0; i < list.length; i += 1) {
        cy.xpath(ACCESSIBLE_DOMAIN_NAME).type(list[i]);
        cy.contains(list[i]).click();
      }
    }
  }

  static selectUserRole(userRole) {
    cy.log('Select user role');
    cy.xpath(SELECT_USER_ROLE).select(userRole);
  }

  static clickOnUpdatePayLimit(walletName) {
    cy.log("Clicking update pay limit for wallet : ", walletName);
    cy.xpath(`//p[contains(text(),'${walletName}')]/../preceding-sibling::div[@style='text-align: right;'][1]/button`).click();
  }

  static checkWalletVisible(walletName) {
    cy.log("Checking for visbility of wallet : ", walletName);
    cy.xpath(RESELLER_ACCOUNT_INFO).children().should('contain', walletName);
  }

  static checkWalletNotVisible(walletName) {
    cy.log("Checking for absence of wallet : ", walletName);
    cy.xpath(RESELLER_ACCOUNT_INFO).children().should('not.contain', walletName);
  }

  static checkWalletBalance(walletName) {
    if (walletName === 'FOC_WALLET') {
      cy.debug("Checking FOC wallet balance");
      cy.xpath(FOC_WALLET_BALANCE_XPATH).then(($element) => {
        const balance = $element.text().substring(4);
        focWalletBalance = balance;
        cy.log("focWalletBalance is now :", focWalletBalance);
      });
    }
  }

  static verifyWalletIncrementedByAmount(walletName, amount) {
    if (walletName === 'FOC_WALLET') {
      cy.debug("Checking FOC wallet balance");
      cy.xpath(FOC_WALLET_BALANCE_XPATH).then(($element) => {
        const balance = $element.text().substring(4);
        const calculatedAmount = parseInt(focWalletBalance, 10) + parseInt(amount, 10);
        expect(parseInt(balance, 10)).to.equal(parseInt(calculatedAmount, 10));
      });
    }
  }

  static calculateCumulativeWalletBalance() {
    cy.debug("Summing balance for all wallets");
    cy.xpath(ALL_WALLETS_XPATH).each(($el) => {
      cumulativeWalletBalance += parseFloat($el.text().substring(4));
    });
  }

  static getCumulativeWalletBalanceByApi(msisdn1, pin, msisdn2) {
    cy.log("Fetching child reseller balance by API");
    const xml2js = require('xml2js');
    const parser = new xml2js.Parser({
      explicitArray: false
    });
    const hostname = Cypress.env('hostname');
    const xmlPayload = `
    <COMMAND>
    <TYPE>BALREQ</TYPE>
    <MSISDN1>${msisdn1}</MSISDN1>
    <PIN>${pin}</PIN>
    <MSISDN2>${msisdn2}</MSISDN2>
    <EXTNWCODE>BD</EXTNWCODE>
    </COMMAND>
    `;
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
      const responseBody = parser.parseString(response.body, (err, parsedResult) => {
        cy.log(parsedResult);
        balanceFromApi = parsedResult.COMMAND.MESSAGE.substring(16);
      });
      cy.log("Balance from response :", balanceFromApi);
      expect(cumulativeWalletBalance).to.equal(parseFloat(balanceFromApi.slice(0, -4)));
    });
  }

  static typeIntoInputWithLabel(value, label) {
    cy.debug('Typing the value: ', value, 'into the field: ', label);
    cy.xpath(`//label[contains(text(),'${label}')]/..//input`).clear().type(value);
  }

  static clickUpdatePaylimitSubmitButton() {
    cy.debug('Clicking submit button');
    cy.xpath(UPDATE_PAYLIMIT_SUBMIT_BUTTON).should('be.visible').click();
    cy.wait(1000);
  }

  static clickUpdatePaylimitCloseButton() {
    cy.debug('Clicking close button');
    cy.xpath(UPDATE_PAYLIMIT_CLOSE_BUTTON).should('be.visible').click();
    cy.wait(1000);
  }

  static verifyUserId(userId, userCount) {
    cy.log('verify UserId');
    cy.xpath(USERID.replace("index", userCount)).should('include.text', userId);
  }
  static verifyRoleId(roleId, userCount) {
    cy.log('verify UserId');
    cy.xpath(ROLEID.replace("index", userCount)).should('include.text', roleId);
  }
  static verifyPassword(userPassword, userCount) {
    cy.log('verify Password');
    cy.xpath(USERPASSWORD.replace("index", userCount)).should('include.text', userPassword);
  }
  static verifyRoleName(roleName, userCount) {
    cy.log('verify RoleName');
    cy.xpath(ROLENAME.replace("index", userCount)).should('include.text', roleName);
  }
  static verifyPhone(userPhone, userCount) {
    cy.log('verify Phone');
    cy.xpath(USERPHONE.replace("index", userCount)).should('include.text', userPhone);
  }
  static verifyWebUser(webUser, userCount) {
    cy.log('verify WebUser');
    cy.xpath(WEBUSER.replace("index", userCount)).should('include.text', webUser);
  }
  static verifyDeletedUser(deletedUser) {
    cy.log('verify deleted user');
    cy.xpath(VERIFY_DELETED_USER.replace("deletedUser", deletedUser)).should('not.exist');
  }
}
export default ResellerAdditionalInfo;