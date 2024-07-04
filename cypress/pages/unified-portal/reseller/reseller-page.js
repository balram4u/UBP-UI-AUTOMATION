import URL_PATH from "../../../common/Route";

const SELECT_RESELLER = "//p[contains(text(),'Filter Search')]";
const SELECT_GROUP = "//select[@name='resellerTypeId']";
const SELECT_CONTRACT_ID = "//select[@name='contractId']";
const TYPE_RESELLER_ID = "//input[@name='resellerId']";
const TYPE_MSISDN_NO = "//input[@name='resellerMSISDN']";
const TYPE_RESELLER_NAME = "//input[@name='resellerName']";
const SELECT_STATUS = "//select[@name='status']";
const SEARCH_BUTTON1 = "//button[3]/span[contains(text(),'Search')]";
const SEARCH_BUTTON = "//span[text()='Search']";
const RESET_BUTTON = "//span[contains(text(),'Reset')]";
const TABLE = "//div[@class='rendering-zone']/div";
const TABLE_CHECKBOX = "//div[@class='rendering-zone']/div/div[1]";
const REASON_FIELD = "//textarea[@rows='4']";
const ACCEPT_YES_BUTTON = "//span[contains(text(),'Yes')]";
const PAGINATION_LOCATOR = ".MuiTablePagination-select";
const SCROLLABLE_AREA = "div.MuiDataGrid-window";
const EDIT_BUTTON = "//a[contains(@href,'/edit/')][1]";
const VIEW_BUTTON = "//a[contains(@href,'/view/')]";
const SUBMIT_BUTTON = "//span[contains(text(),'Submit')]";
const CHANGE_PARENT_BUTTON = "//div[@class='MuiButtonGroup-root']/button";
const SELECT_PARENT_RESELLER = "//input[@id='reseller-parents-drop-down']";
const UPDATE_BUTTON = "//span[contains(text(),'Update')]";
const VERIFY_PARENT_RESELLER_NAME = "//div[@class='rendering-zone']/div";
const BLOCK_BUTTON = "//span[contains(text(),'Block')]";
const UNBLOCK_BUTTON = "//span[contains(text(),'Un-block')]";
const FREEZE_BUTTON = "//span[contains(text(),'Freeze')]";
const UNFREEZE_BUTTON = "//span[contains(text(),'Un-freeze')]";
const ACTIVATE_BUTTON = "//span[contains(text(),'Activate')]";
const DEACTIVATE_BUTTON = "//span[contains(text(),'Deactivate')]";
const LEFT_MENU_RESELLER = "//p[text()='RESELLER']";
const LEFIT_MENU_RESELLERS = "//p[text()='RESELLERS']";
const SELECT_RESELLER_FROM_GRID = "//div[@aria-rowindex='2']//input[@type='checkbox'][1]";
const ENTER_REASON = "//textarea[@rows='4']";
const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "//select[@id='columns-filter-select']";
const OPERATOR_SELECT = "//select[@id='columns-operators-select']";
const FILTER_VALUE = "//input[@class='MuiInputBase-input MuiInput-input']";
const ADD_MORE_FILTERS = "//button[contains(@class,'MuiButton-disableElevation')][2]";
const DONE_CHANGES = "//span[text()='Done changes']";
const PARENT_RESELLER_NAME = "(//div[@class='rendering-zone']//div)[6]";
const FOCUS_TITLE = "//h4[contains(text(),'Change parent reseller')]";

class resellerPage {
  static clickOnResellerUsingUrl() {
    cy.log('click on reseller to visit reseller home page');
    cy.visit(URL_PATH.reseller);
  }

  static clickOnResellerUsingLeftMenu() {
    cy.log('Open Reseller -> View reseller home page');
    cy.xpath(LEFT_MENU_RESELLER).should('be.visible');
    cy.xpath(LEFT_MENU_RESELLER).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_RESELLER).click();
    cy.xpath(LEFIT_MENU_RESELLERS).click();
  }

  static scrollToRight() {
    cy.log('Scroll to right');
    cy.get(SCROLLABLE_AREA).scrollTo('right');
  }

  static scrollToUp() {
    cy.log('Scroll to up');
    cy.get(SCROLLABLE_AREA).scrollTo('top');
    cy.wait(800);
  }

  static clickSearchButton() {
    cy.log('After fill all the Filtered value , now click on search button');
    cy.log('Click on Reseller Search Button');
    cy.xpath(SEARCH_BUTTON).should('be.visible').click({ force: true });
  }

  static clickEditButton() {
    cy.log('Click on edit button ');
    cy.xpath(EDIT_BUTTON).click();
  }

  static clickOnChangeParentResellerButton() {
    cy.log('Click on Change Parent Reseller Button ');
    cy.wait(3000);
    this.scrollToRight();
    cy.wait(2000);
    cy.log('I click on change parent reseller button ');
    cy.xpath(CHANGE_PARENT_BUTTON).click();
  }

  static selectGroupType(group) {
    cy.log(`fill in group data: ${group}`);
    if (group !== " ") {
      cy.log('group selection block');
      cy.xpath(SELECT_GROUP).select(group);
    }
  }

  static clickOnBlockButton() {
    cy.log('click on block button');
    cy.xpath(BLOCK_BUTTON).click();
  }

  static clickOnUnBlockButton() {
    cy.log('click on Unblock button');
    cy.xpath(UNBLOCK_BUTTON).click();
  }

  static clickActivateButton() {
    cy.log('click on Activate button');
    cy.xpath(ACTIVATE_BUTTON).click();
  }

  static clickDeactivateButton() {
    cy.log('click on Deactivate button');
    cy.xpath(DEACTIVATE_BUTTON).click();
  }

  static clickFreezeButton() {
    cy.log('click on Freeze button');
    cy.xpath(FREEZE_BUTTON).click();
  }

  static clickUnFreezeButton() {
    cy.log('click on unfreeze button');
    cy.xpath(UNFREEZE_BUTTON).click();
  }

  static clickOnDropdownReseller() {
    cy.log('click on reseller from dropdown to visit reseller home page');
    cy.xpath(SELECT_RESELLER).click();
  }

  static selectContractId(contractId) {
    cy.log(`fill in contractId data: ${contractId}`);
    if (contractId !== " ") {
      cy.log('contractId selection block');
      cy.xpath(SELECT_CONTRACT_ID).select(contractId);
    }
  }

  static selectParentReseller(PARENT) {
    cy.xpath(SELECT_PARENT_RESELLER, { timeout: 5000 })
      .clear()
      .should('be.empty')
      .invoke('val', PARENT);
    cy.xpath(SELECT_PARENT_RESELLER, { timeout: 5000 })
      .should('have.value', PARENT)
      .type('{downArrow}')
      .type('{enter}');
    cy.xpath(UPDATE_BUTTON, { timeout: 5000 }).click();
    cy.log('Parent reseller updated successfully');
  }

  // static selectParentResellerUB(PARENT) {
  //   cy.log('Select on the parent Reseller');
  //   cy.wait(3000);
  //   cy.xpath('//input[@id="reseller-parents-drop-down"]').clear().type(PARENT).type('{downArrow}')
  //     .type('{enter}');
  //   cy.log('Click on update button');
  //   cy.xpath(UPDATE_BUTTON).click();
  // }

  static verifyParentResellerNameInTable(PARENT) {
    cy.log('verifying the parent Reseller name inside the table ');
    cy.wait(3000);
    cy.xpath(VERIFY_PARENT_RESELLER_NAME).invoke('text').should('eq', PARENT);
  }

  static clickSubmitButton() {
    cy.log('Click on edit button ');
    cy.xpath(SUBMIT_BUTTON).click();
  }

  static clickViewButton() {
    cy.log('First scroll to right side then Click on view button ');
    cy.wait(2000);
    this.scrollToRight();
    cy.wait(1000);
    cy.log('click on view button ');
    cy.xpath(VIEW_BUTTON).click();
  }

  static clickOnReseller() {
    cy.log('navigate to Reseller page');
    this.clickOnResellerUsingUrl();
    // this.clickOnResellerUsingLeftMenu();
  }

  static setPerPageCount() {
    cy.log("Setting per page limit");
    cy.get(PAGINATION_LOCATOR).click();
    const el = `//li[text()='100']`;
    cy.xpath(el).click();
  }

  static selectResellerStatus(status) {
    cy.log(`fill in status data: ${status}`);
    if (status !== " ") {
      cy.log('status selection block');
      cy.xpath(`//button/span[text()='${status}']`).click();
    }
  }

  static typeResellerId(resellerId) {
    cy.log("Type the Reseller id to find inside the Table");
    cy.xpath(TYPE_RESELLER_ID).type(resellerId);
  }

  static typeMsisdnNo(msisdnNo) {
    cy.log('type Msisdn No');
    cy.xpath(TYPE_MSISDN_NO).type(msisdnNo);
  }

  static typeResellerName(resellerName) {
    cy.log('type reseller Name');
    cy.xpath(TYPE_RESELLER_NAME).type(resellerName);
  }

  static clickResellerSearchButton() {
    cy.log('Click on Reseller Search Button');
    cy.xpath(SEARCH_BUTTON1).click();
  }

  static clickResetButton() {
    cy.log('click reset button');
    cy.xpath(RESET_BUTTON).click();
  }

  static clickTableChekbox() {
    cy.log('click table checkbox');
    cy.xpath(TABLE_CHECKBOX).click();
  }

  static validateResellerStatus(status) {
    cy.log('validate Reseller Status');
    cy.xpath(TABLE).eq(0).within(() => {
      cy.get('div').then((element) => {
        cy.log(element.text());
      });
      cy.get('div').eq(6).should('contain.text', status);
      cy.log('verified the validation');
    });
  }

  static validateResellerId(ResellerId) {
    cy.log('I validate Reseller Id');
    cy.xpath(TABLE).eq(0).within(() => {
      cy.get('div').then((element) => {
        cy.log(element.text());
      });
      cy.get('div').eq(1).should('contain.text', ResellerId);
    });
  }

  static validateMsisdnNo(MsisdnNo) {
    cy.log('I validate Msisdn No');
    cy.xpath(TABLE).eq(0).within(() => {
      cy.get('div').then((element) => {
        cy.log(element.text());
      });
      cy.get('div').eq(5).should('contain.text', MsisdnNo);
    });
  }

  static validateResellerName(resellerName) {
    cy.log('I validate reseller Name');
    cy.xpath(TABLE).eq(0).within(() => {
      cy.get('div').then((element) => {
        cy.log(element.text());
      });
      cy.get('div').eq(2).should('contain.text', resellerName);
    });
  }

  static validateResellerType(resellerType) {
    cy.log('validate reseller Type');
    cy.xpath(TABLE).eq(0).within(() => {
      cy.get('div').then((element) => {
        cy.log(element.text());
      });
      cy.get('div').eq(3).should('contain.text', resellerType);
    });
  }

  static typeReasonField(reason) {
    cy.log('type Reason');
    cy.xpath(REASON_FIELD).type(reason);
  }

  static clickOnYesButton() {
    cy.log('Click on yes button');
    cy.xpath(ACCEPT_YES_BUTTON).click();
  }

  static verifyEditPageUrl() {
    cy.log('I verify Edit PageUrl');
    cy.url().should('include', '/reseller/resellers/edit');
  }

  static selectResellerFromGrid() {
    cy.log('Select reseller from the grid');
    cy.xpath(SELECT_RESELLER_FROM_GRID).click();
  }

  static enterReason() {
    cy.log('Entering the reason');
    cy.xpath(ENTER_REASON).type("any reason");
  }

  static selectStatus(STATUS) {
    cy.log('Selecting status');
    cy.xpath(SELECT_STATUS).select(STATUS);
  }

  static validateParentReseller(reseller) {
    cy.log('validate reseller Type');
    cy.xpath(PARENT_RESELLER_NAME).should('contain.text', reseller);
  }

  static applyFilter(field, operation, value) {
    cy.debug('apply Filter search');
    cy.debug('Click on filter logo');
    cy.xpath(FILTER, { timeout: 2000 }).click();
    // cy.wait(100);
    cy.debug('Select the column value');
    cy.xpath(COLUMN_SELECT, { timeout: 2000 }).select(field);
    // cy.wait(100);
    cy.debug('Select the Operator');
    cy.xpath(OPERATOR_SELECT, { timeout: 2000 }).select(operation);
    cy.debug('Click on filter value');
    cy.intercept("**").as("apiCall");
    cy.xpath(FILTER_VALUE, { timeout: 2000 }).clear().type(value);
    cy.wait("@apiCall");
  }

  static clickAddMoreFilters() {
    cy.debug('Clicking on add more filters');
    cy.xpath(ADD_MORE_FILTERS).click();
  }

  static clickDoneChanges() {
    cy.debug('Clicking on done changes');
    cy.xpath(DONE_CHANGES).click();
  }
}

export default resellerPage;
