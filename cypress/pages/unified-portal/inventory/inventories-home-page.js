/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-destructuring */
/* eslint-disable max-len */
import URL_PATH from '../../../common/Route';

const INVENTORIES_HEADER = "//p[text()='This section allows user to view their own and their sub-resellers inventory']";
const SIM_XPATH = "//*[@data-value='SimCards/SIM/']/parent::div//span[contains(text(),'inventory_2')]";
const BATCH_XPATH = "//*[@data-value='6001']/parent::div//span[contains(text(),'call_split')]";
const STOCK_IN_HAND = "//h4[text()='Stock In Hand']/../../following-sibling::h2";
const SAFARI_SIM = "(//*[@data-value='Electronics/Cards/SFC-SIM/']/parent::div//span[contains(text(),'inventory_2')])[1]";
const MSISDN_XPATH = "//*[contains(@data-value,'/MSISDN/')]/parent::div//span[contains(text(),'inventory_2')]";
const LEFT_MENU_INVENTORY = "//p[text()='INVENTORY']";
const LEFIT_MENU_VIEW_INVENTORY = "//p[text()='INVENTORIES']";
const DISABLE_VIEW_ALL_INVENTORIES = "//span[@class='MuiIconButton-label']/span[text()='check_box']/../../../span[text()='View All Resellers Inventory']";
const STOCK_IN_HAND_OWN_UI_COUNT = "(//*[local-name()='g' and @class='apexcharts-datalabels-group'])[1]";
const CHILD_STOCK_SUMMARY_CHILDREN_COUNT = "(//*[local-name()='g' and @class='apexcharts-datalabels-group'])[2]";
const SELECT_PRODUCT_CATEGORY_DROP_DOWN = "//input[@placeholder='Select...' or @placeholder='Product Category']";
const CLOSE_PRODUCT_CATEGORY_DROP_DOWN = "//a[@class='dropdown-trigger arrow top']";
const ENTER_PRODUCT_NAME = "//input[@id='productName']";
const ENTER_PRODUCT_SKU = "//input[@id='productSku']";
const ENTER_RESELLER_NAME = "//input[@id='inventories-reseller-id-dropdown']";
const CLICK_SEARCH = "//button/span[contains(text(),'Search')]";
const VERIFY_PRODUCT_NAME = "//div[@data-field='name' and @data-rowindex='0']";
const VERIFY_CATEGORY_PATH = "//div[@data-field='category' and @data-rowindex='0']";
const VERIFY_PRODUCT_SKU = "//div[@data-field='productSKU' and @data-rowindex='0']";
const VERIFY_PRODUCT_TYPE = "//div[@data-field='productType' and @data-rowindex='0']";
const ACTION_BUTTON_OF_PRODUCT = "//span[text()='inventory_2']";
const ACTION_BUTTON_OF_BOX_ID = "(//span[text()='inventory_2'])[1]";
const MANUAL_ADJUSTMENT_BUTTON = "//div/button/span[text()='Manual Inventory Adjustment']";
const SELECT_STATUS = "//select[@id='product-status-drop-down']";
const ENTER_REASON = "//input[@name='updateFields.updateReason']";
const CLICK_SUBMIT = "//button/span[text()='Submit']";
const SCROLLABLE_AREA = "div.MuiDataGrid-window";
const SELECT_COLUMN_BUTTON = "//button[@aria-label='Select columns']";
const EXPORT_BUTTON = "//button[@id = 'csv-export-product']";
const EXPORT_BUTTON2 = "//button/span[text()='Export']/..";
const DOWNLOAD_BUTTON = "//span[contains(text(),'Download')]";
const DOWNLOAD_BUTTON2 = "//li[contains(text(),'Download as CSV')]";
const INVENTORY = "//p[text() = 'INVENTORY']";
const INVENTORIES = "//p[text() = 'INVENTORIES']";
const DETAILED_INVENTORY = "//p[text() = 'DETAILED INVENTORY']";
const TABLE = "(//div[@data-value])[1]";
const INCLUDE_OWN_INVENTORY = "(//span//input[@type='checkbox'])[1]";
const COLUMNS = "//span[text() = 'Columns']";
const COLUMN_TITLE_INPUT = "//input[@placeholder='Column title']";
const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "select[id=columns-filter-select]";
const OPERATOR_SELECT = "select[id=columns-operators-select]";
const FILTER_VALUE = '//div[@class="MuiFormControl-root MuiDataGridFilterForm-filterValueInput"]//input[@type="text"]';
const ROWS_PER_PAGE_DROPDOWN = '//div/p[text() = "Rows per page:"]/../div/div';
const NO_OF_ROWS = "//div[@data-id]";

let resultsOfSerializedInvnetory = '';
let resultsOfNonSerializedInvnetory = '';
let resultsOfTrackableNonSerializedInvnetory = '';
let resultsOfStockInHandOwn = '';

let resultsOfChildSerializedInvnetory = '';
let resultsOfChildNonSerializedInvnetory = '';
let resultsOfChildTrackableNonSerializedInvnetory = '';
let resultsOfChildStockSummary = '';

class InventoriesPage {
  constructor(stockInHandCount) {
    this.stockInHandCount = stockInHandCount;
  }

  static visitInventoriesHomePageUsingLeftMenu() {
    cy.log('Open inventory -> View inventory page');
    cy.xpath(LEFT_MENU_INVENTORY).should('be.visible');
    cy.xpath(LEFT_MENU_INVENTORY).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_INVENTORY).click();
    cy.wait(1000);
    cy.xpath(LEFIT_MENU_VIEW_INVENTORY).click();
    cy.xpath(INVENTORIES_HEADER).should('be.visible');
  }

  static visitInventoriesHomePageUsingUrl() {
    cy.log('Go to Inventories page');
    cy.wait(3000);
    cy.visit(URL_PATH.inventories);
  }

  static verifyTableCount(PRODUCT_NAME) {
    cy.get(`[data-value="${PRODUCT_NAME}"]`).should('have.length', 1);
  }

  static clickSIMForSplit() {
    cy.log('Click SIM for split');
    cy.xpath(SIM_XPATH).click();
  }

  static disableViewAllInventory() {
    cy.log('disabling view all inventories checkbox');
    cy.xpath(DISABLE_VIEW_ALL_INVENTORIES).click();
  }

  static clickBoxForSplit() {
    cy.xpath(BATCH_XPATH).click();
  }

  static getStockInHand() {
    cy.log('Get stock in hand');
    cy.wait(3000);
    cy.xpath(STOCK_IN_HAND).invoke('text').then((text) => {
      const count = parseInt(text, 10);
      cy.log(`hiujkh ${count}`);
      this.stockInHandCount = count;
    });
  }

  static validateInventoryAfterImport() {
    cy.log('Validating inventory after import');
    cy.wait(5000);
    cy.xpath(STOCK_IN_HAND).invoke('text').then((text) => {
      const count = parseInt(text, 10);
      expect(count).to.be.greaterThan(this.stockInHandCount);
    });
  }

  static validateInventoryAfterIncorrectImport() {
    cy.log('Validate inventory after incorrect import');
    cy.wait(5000);
    cy.xpath(STOCK_IN_HAND).invoke('text').then((text) => {
      const count = parseInt(text, 10);
      expect(count).to.be.eq(this.stockInHandCount);
    });
  }

  static clickSafariSIMForSplit() {
    cy.xpath(SAFARI_SIM).click();
  }

  static clickMSISDNForSplit() {
    cy.log('Click MSISDN for split');
    cy.xpath(MSISDN_XPATH).click();
  }

  static verifyStockInHandOwn(username) {
    const querySerialized = `select count(1) from \`inventory_management_system\`.\`serialized_inventory\` where owner_id in ("${username}") and workflow_state_id in (1) and location_id in ("${username}") and is_deleted=0;`;
    const queryNonSerialized = `select SUM(quantity) from \`inventory_management_system\`.\`nonserialized_inventory\` where owner_id in ("${username}") and workflow_state_id in (1) and location_id in ("${username}") and is_deleted=0;`;
    const queryTrackableNonSerialized = `select SUM(quantity) from \`inventory_management_system\`.\`trackable_nonserialized_inventory\` where owner_id in ("${username}") and workflow_state_id in (1) and location_id in ("${username}") and is_deleted=0;`;

    // get serialized inventory count
    cy.task('queryDb', querySerialized).then((recordset) => {
      const rec = recordset;
      resultsOfSerializedInvnetory = Object.values(rec[0]);
      resultsOfSerializedInvnetory = resultsOfSerializedInvnetory[0];
      cy.log('DB count =', resultsOfSerializedInvnetory);
      if (resultsOfSerializedInvnetory == null) {
        resultsOfSerializedInvnetory = 0;
      }
      cy.log("serialized output is ****** ", resultsOfSerializedInvnetory);
    });

    // get nonSerialized inventory count
    cy.task('queryDb', queryNonSerialized).then((recordset) => {
      const rec = recordset;
      resultsOfNonSerializedInvnetory = Object.values(rec[0]);
      resultsOfNonSerializedInvnetory = resultsOfNonSerializedInvnetory[0];
      if (resultsOfNonSerializedInvnetory == null) {
        resultsOfNonSerializedInvnetory = 0;
      }
      cy.log("nonSerialized output is ****** ", resultsOfNonSerializedInvnetory);
    });

    // get trackableNonSerialized inventory count
    cy.task('queryDb', queryTrackableNonSerialized).then((recordset) => {
      const rec = recordset;
      resultsOfTrackableNonSerializedInvnetory = Object.values(rec[0]);
      resultsOfTrackableNonSerializedInvnetory = resultsOfTrackableNonSerializedInvnetory[0];
      if (resultsOfTrackableNonSerializedInvnetory == null) {
        resultsOfTrackableNonSerializedInvnetory = 0;
      }
      cy.log("trackableNonSerialized output is ****** ", resultsOfTrackableNonSerializedInvnetory);
    });

    // assert ui and db count
    cy.xpath(STOCK_IN_HAND_OWN_UI_COUNT).then((cn) => {
      resultsOfStockInHandOwn = resultsOfSerializedInvnetory + resultsOfNonSerializedInvnetory + resultsOfTrackableNonSerializedInvnetory;
      const uiCount = cn.text();
      cy.log('UI count =', uiCount);
      expect(parseInt(uiCount, 10)).equal(resultsOfStockInHandOwn);
    });
  }

  static verifyChildStockSummaryChildrenCount(username) {
    const queryChildSerialized = `select count(1) from \`inventory_management_system\`.\`serialized_inventory\` where owner_id in (select tag from \`Refill\`.\`commission_receivers\` where reseller_path like "%${username}/%") and workflow_state_id in (1) and is_deleted=0;`;
    const queryChildNonSerialized = `select SUM(quantity) from \`inventory_management_system\`.\`nonserialized_inventory\` where owner_id in (select tag from \`Refill\`.\`commission_receivers\` where reseller_path like "%${username}/%") and workflow_state_id in (1) and is_deleted=0;`;
    const queryChildTrackableNonSerialized = `select SUM(quantity) from \`inventory_management_system\`.\`trackable_nonserialized_inventory\` where owner_id in (select tag from \`Refill\`.\`commission_receivers\` where reseller_path like "%${username}/%") and workflow_state_id in (1) and is_deleted=0;`;

    // get serialized inventory count
    cy.task('queryDb', queryChildSerialized).then((recordset) => {
      const rec = recordset;
      resultsOfChildSerializedInvnetory = Object.values(rec[0]);
      resultsOfChildSerializedInvnetory = resultsOfChildSerializedInvnetory[0];
      cy.log('DB count =', resultsOfChildSerializedInvnetory);
      if (resultsOfChildSerializedInvnetory == null) {
        resultsOfChildSerializedInvnetory = 0;
      }
      cy.log("serialized output is ****** ", resultsOfChildSerializedInvnetory);
    });

    // get nonSerialized inventory count
    cy.task('queryDb', queryChildNonSerialized).then((recordset) => {
      const rec = recordset;
      resultsOfChildNonSerializedInvnetory = Object.values(rec[0]);
      resultsOfChildNonSerializedInvnetory = resultsOfChildNonSerializedInvnetory[0];
      if (resultsOfChildNonSerializedInvnetory == null) {
        resultsOfChildNonSerializedInvnetory = 0;
      }
      cy.log("nonSerialized output is ****** ", resultsOfChildNonSerializedInvnetory);
    });

    // get trackableNonSerialized inventory count
    cy.task('queryDb', queryChildTrackableNonSerialized).then((recordset) => {
      const rec = recordset;
      resultsOfChildTrackableNonSerializedInvnetory = Object.values(rec[0]);
      resultsOfChildTrackableNonSerializedInvnetory = resultsOfChildTrackableNonSerializedInvnetory[0];
      if (resultsOfChildTrackableNonSerializedInvnetory == null) {
        resultsOfChildTrackableNonSerializedInvnetory = 0;
      }
      cy.log("trackableNonSerialized output is ****** ", resultsOfChildTrackableNonSerializedInvnetory);
    });

    // assert ui and db count
    cy.xpath(CHILD_STOCK_SUMMARY_CHILDREN_COUNT).then((cn) => {
      resultsOfChildStockSummary = resultsOfChildSerializedInvnetory + resultsOfChildNonSerializedInvnetory + resultsOfChildTrackableNonSerializedInvnetory;
      const uiCount = cn.text();
      cy.log('UI count =', uiCount);
      expect(parseInt(uiCount, 10)).equal(resultsOfChildStockSummary);
    });
  }

  static selectProductCategory(productCategory) {
    if (productCategory !== "") {
      cy.log('select product category ', productCategory);
      cy.wait(1000);
      cy.xpath(SELECT_PRODUCT_CATEGORY_DROP_DOWN).click();
      cy.xpath(`//label/span[text()='${productCategory}']`).click();
      cy.wait(1000);
      cy.xpath(STOCK_IN_HAND_OWN_UI_COUNT).click();
    }
  }

  static enterProductName(productName) {
    if (productName !== "") {
      cy.log('enter product name ', productName);
      cy.wait(1000);
      cy.xpath(ENTER_PRODUCT_NAME).type(productName)
        .type('{downArrow}').type('{enter}');
      cy.xpath(ENTER_PRODUCT_NAME).click();
    }
  }

  static enterProductSKU(productSKU) {
    if (productSKU !== "") {
      cy.log('enter product sku ', productSKU);
      cy.wait(1000);
      cy.xpath(ENTER_PRODUCT_SKU).type(productSKU)
        .type('{downArrow}').type('{enter}');
      cy.xpath(ENTER_PRODUCT_SKU).click();
    }
  }

  static enterResellerName(reseller) {
    if (reseller !== "") {
      cy.log('enter reseller name ', reseller);
      cy.wait(2000);
      cy.xpath(ENTER_RESELLER_NAME).type(reseller)
        .type('{downArrow}').type('{enter}');
      cy.xpath(ENTER_RESELLER_NAME).click();
    }
  }

  static clickSearch() {
    cy.wait(2000);
    cy.xpath(CLICK_SEARCH).click();
    cy.wait(1000);
  }

  static validateSearchedProductInTable(productName, categoryPath, productSKU, productType) {
    cy.log('validating searched product in the table with ', productName, categoryPath, productSKU, productType);
    cy.wait(2000);

    cy.xpath(VERIFY_PRODUCT_NAME).invoke('text').then((PRODUCT_NAME) => {
      expect(PRODUCT_NAME).to.contains(productName);
    });

    cy.xpath(VERIFY_CATEGORY_PATH).invoke('text').then((CATEGORY_PATH) => {
      expect(CATEGORY_PATH).to.contains(categoryPath);
    });

    cy.xpath(VERIFY_PRODUCT_SKU).invoke('text').then((PRODUCT_SKU) => {
      expect(PRODUCT_SKU).to.contains(productSKU);
    });

    cy.xpath(VERIFY_PRODUCT_TYPE).invoke('text').then((PRODUCT_TYPE) => {
      expect(PRODUCT_TYPE).to.contains(productType);
    });
  }

  static verifySearchedStockInHandOwn(username, productSKU) {
    const querySerialized = `select count(1) from \`inventory_management_system\`.\`serialized_inventory\` where owner_id in ("${username}") and workflow_state_id in (1) and location_id in ("${username}") and is_deleted=0 and product_sku = "${productSKU}";`;
    const queryNonSerialized = `select SUM(quantity) from \`inventory_management_system\`.\`nonserialized_inventory\` where owner_id in ("${username}") and workflow_state_id in (1) and location_id in ("${username}") and is_deleted=0 and product_sku = "${productSKU}";`;
    const queryTrackableNonSerialized = `select SUM(quantity) from \`inventory_management_system\`.\`trackable_nonserialized_inventory\` where owner_id in ("${username}") and workflow_state_id in (1) and location_id in ("${username}") and is_deleted=0 and product_sku = "${productSKU}";`;

    // get serialized inventory count
    cy.task('queryDb', querySerialized).then((recordset) => {
      const rec = recordset;
      resultsOfSerializedInvnetory = Object.values(rec[0]);
      resultsOfSerializedInvnetory = resultsOfSerializedInvnetory[0];
      cy.log('DB count =', resultsOfSerializedInvnetory);
      if (resultsOfSerializedInvnetory == null) {
        resultsOfSerializedInvnetory = 0;
      }
      cy.log("serialized output is ****** ", resultsOfSerializedInvnetory);
    });

    // get nonSerialized inventory count
    cy.task('queryDb', queryNonSerialized).then((recordset) => {
      const rec = recordset;
      resultsOfNonSerializedInvnetory = Object.values(rec[0]);
      resultsOfNonSerializedInvnetory = resultsOfNonSerializedInvnetory[0];
      if (resultsOfNonSerializedInvnetory == null) {
        resultsOfNonSerializedInvnetory = 0;
      }
      cy.log("nonSerialized output is ****** ", resultsOfNonSerializedInvnetory);
    });

    // get trackableNonSerialized inventory count
    cy.task('queryDb', queryTrackableNonSerialized).then((recordset) => {
      const rec = recordset;
      resultsOfTrackableNonSerializedInvnetory = Object.values(rec[0]);
      resultsOfTrackableNonSerializedInvnetory = resultsOfTrackableNonSerializedInvnetory[0];
      if (resultsOfTrackableNonSerializedInvnetory == null) {
        resultsOfTrackableNonSerializedInvnetory = 0;
      }
      cy.log("trackableNonSerialized output is ****** ", resultsOfTrackableNonSerializedInvnetory);
    });

    // assert ui and db count
    cy.xpath(STOCK_IN_HAND_OWN_UI_COUNT).then((cn) => {
      resultsOfStockInHandOwn = resultsOfSerializedInvnetory + resultsOfNonSerializedInvnetory + resultsOfTrackableNonSerializedInvnetory;
      const uiCount = cn.text();
      cy.log('UI count =', uiCount);
      expect(parseInt(uiCount, 10)).equal(resultsOfStockInHandOwn);
    });
  }

  static verifySearchedChildStockSummaryChildrenCount(username, productSKU) {
    const queryChildSerialized = `select count(1) from \`inventory_management_system\`.\`serialized_inventory\` where owner_id in (select tag from \`Refill\`.\`commission_receivers\` where reseller_path like "%${username}%") and workflow_state_id in (1) and is_deleted=0 and product_sku = "${productSKU}";`;
    const queryChildNonSerialized = `select SUM(quantity) from \`inventory_management_system\`.\`nonserialized_inventory\` where owner_id in (select tag from \`Refill\`.\`commission_receivers\` where reseller_path like "%${username}%") and workflow_state_id in (1) and is_deleted=0 and product_sku = "${productSKU}";`;
    const queryChildTrackableNonSerialized = `select SUM(quantity) from \`inventory_management_system\`.\`trackable_nonserialized_inventory\` where owner_id in (select tag from \`Refill\`.\`commission_receivers\` where reseller_path like "%${username}%") and workflow_state_id in (1) and is_deleted=0 and product_sku = "${productSKU}";`;

    // get serialized inventory count
    cy.task('queryDb', queryChildSerialized).then((recordset) => {
      const rec = recordset;
      resultsOfChildSerializedInvnetory = Object.values(rec[0]);
      resultsOfChildSerializedInvnetory = resultsOfChildSerializedInvnetory[0];
      cy.log('DB count =', resultsOfChildSerializedInvnetory);
      if (resultsOfChildSerializedInvnetory == null) {
        resultsOfChildSerializedInvnetory = 0;
      }
      cy.log("serialized output is ****** ", resultsOfChildSerializedInvnetory);
    });

    // get nonSerialized inventory count
    cy.task('queryDb', queryChildNonSerialized).then((recordset) => {
      const rec = recordset;
      resultsOfChildNonSerializedInvnetory = Object.values(rec[0]);
      resultsOfChildNonSerializedInvnetory = resultsOfChildNonSerializedInvnetory[0];
      if (resultsOfChildNonSerializedInvnetory == null) {
        resultsOfChildNonSerializedInvnetory = 0;
      }
      cy.log("nonSerialized output is ****** ", resultsOfChildNonSerializedInvnetory);
    });

    // get trackableNonSerialized inventory count
    cy.task('queryDb', queryChildTrackableNonSerialized).then((recordset) => {
      const rec = recordset;
      resultsOfChildTrackableNonSerializedInvnetory = Object.values(rec[0]);
      // eslint-disable-next-line max-len
      // eslint-disable-next-line prefer-destructuring
      resultsOfChildTrackableNonSerializedInvnetory = resultsOfChildTrackableNonSerializedInvnetory[0];
      if (resultsOfChildTrackableNonSerializedInvnetory == null) {
        resultsOfChildTrackableNonSerializedInvnetory = 0;
      }
      cy.log("trackableNonSerialized output is ****** ", resultsOfChildTrackableNonSerializedInvnetory);
    });

    // assert ui and db count
    cy.xpath(CHILD_STOCK_SUMMARY_CHILDREN_COUNT).then((cn) => {
      resultsOfChildStockSummary = resultsOfChildSerializedInvnetory + resultsOfChildNonSerializedInvnetory + resultsOfChildTrackableNonSerializedInvnetory;
      const uiCount = cn.text();
      cy.log('UI count =', uiCount);
      expect(parseInt(uiCount, 10)).equal(resultsOfChildStockSummary);
    });
  }

  static scrollRight() {
    cy.log('scroll right');
    cy.get(SCROLLABLE_AREA).scrollTo('right');
    cy.wait(1000);
  }

  static clickActionOfSearchProduct() {
    cy.wait(800);
    cy.log('click on action button of search product');
    cy.xpath(ACTION_BUTTON_OF_PRODUCT).click();
  }

  static clickActionOfBoxId() {
    cy.log('click on action button of box id');
    this.scrollRight();
    cy.xpath(ACTION_BUTTON_OF_BOX_ID).click({ force: true });
  }

  static clickActionOfFirstBoxId() {
    cy.log('click on action button of box id');
    cy.xpath(ACTION_BUTTON_OF_BOX_ID).click();
  }

  static selectSerialNumber(status) {
    cy.wait(800);
    cy.log('select serial number whose status is ', status);
    cy.xpath(`(//div[@data-value='${status}']//..//div)[1]`).click();
  }

  static clickManualAdjustmentButton() {
    cy.wait(800);
    cy.log('click on manual adjustment button');
    cy.xpath(MANUAL_ADJUSTMENT_BUTTON).click();
  }

  static selectStatus(status) {
    cy.wait(800);
    cy.log('select status as ', status);
    cy.xpath(SELECT_STATUS).select(status);
  }

  static enterReason(reason) {
    cy.wait(800);
    cy.log('enter reason ', reason);
    cy.xpath(ENTER_REASON).type(reason);
  }

  static clickSubmit() {
    cy.wait(800);
    cy.log('click on submit button');
    cy.xpath(CLICK_SUBMIT).click();
  }

  static verifyPageTitle(pageTitle) {
    cy.log(`verify page title as ${pageTitle}`);
    cy.xpath(`//h4[contains(text(),'${pageTitle}')]`).should('be.visible');
  }

  static clickOnSelectColumn() {
    cy.log('click on select column button');
    cy.xpath(SELECT_COLUMN_BUTTON).click();
  }

  static tableColumnEnable(tableColumnName) {
    cy.log(`enable table column "${tableColumnName}"`);
    cy.xpath(`//span[text()='${tableColumnName}']/preceding-sibling::span//input[@type='checkbox']`).check();
  }

  static tableColumnDisable(tableColumnName) {
    cy.log(`disable table column "${tableColumnName}"`);
    cy.xpath(`//span[text()='${tableColumnName}']/preceding-sibling::span//input[@type='checkbox']`).uncheck();
  }

  static verifyTableColumnEnabled(tableColumnName) {
    cy.log(`verify table column "${tableColumnName}" enabled`);
    cy.xpath(`//div[@class='MuiDataGrid-columnsContainer']//div[text()='${tableColumnName}']`).should('be.visible');
  }

  static verifyTableColumnDisabled(tableColumnName) {
    cy.log(`verify table column "${tableColumnName}" disabled`);
    cy.xpath(`//div[@class='MuiDataGrid-columnsContainer']//div[text()='${tableColumnName}']`).should('not.exist');
  }

  static clickOnExportButton() {
    cy.log(`click on export button`);
    cy.xpath(EXPORT_BUTTON).click();
  }

  static clickOnExportButtonDetailedInventory() {
    cy.log(`click on export button in detailed inventory`);
    cy.xpath(EXPORT_BUTTON2).click();
  }

  static clickOnDownloadButton() {
    cy.log(`click on download button`);
    cy.xpath(DOWNLOAD_BUTTON).click();
  }

  static clickOnDownloadButtonDetailedInventory() {
    cy.log(`click on download button`);
    cy.xpath(DOWNLOAD_BUTTON2).click();
  }

  static clickInventory() {
    cy.log('click on inventory button');
    cy.xpath(INVENTORY).click();
  }

  static verifyInventoryOperations() {
    cy.log('verify different inventory operations');
    cy.xpath(INVENTORIES).should('be.visible');
    cy.xpath(DETAILED_INVENTORY).should('be.visible');
  }

  static verifyTabularForm() {
    cy.log('verify data is in tabular form');
    cy.xpath(TABLE).should('be.exist');
  }

  static clickIncludeOwnInventory() {
    cy.log('click on include own inventory checkbox');
    cy.xpath(INCLUDE_OWN_INVENTORY).click();
  }

  static clickColumns() {
    cy.log('click on columns');
    cy.xpath(COLUMNS).click();
  }

  static enterColumnTitle(columnTitle) {
    cy.log('enter column title');
    cy.wait(1000);
    cy.xpath(COLUMN_TITLE_INPUT).type(columnTitle).clear();
    cy.xpath(COLUMN_TITLE_INPUT).type(columnTitle);
  }

  static verifyColumnFiltered(columnName) {
    cy.log('verify columns filtered');
    cy.xpath(`//span[text() = '${columnName}']`).should('have.length', 1);
    cy.xpath(`//span[text() = '${columnName}']`).should('be.visible');
  }

  static clickToggleButton(columnName) {
    cy.log('click on toggle button');
    cy.xpath(`//input[@name='${columnName}']`).click();
  }

  static selectFilterColumn(columnName) {
    cy.log('select column');
    cy.get(COLUMN_SELECT).select(columnName);
  }

  static selectFilterOption(option) {
    cy.log('select filter option');
    cy.get(OPERATOR_SELECT).select(option);
  }

  static typeFilterValue(value) {
    cy.log('type filter value');
    cy.xpath(FILTER_VALUE).clear().type(value);
  }

  static clickOnFilters() {
    cy.log('click on filters');
    cy.xpath(FILTER).click();
  }

  static clickOnRowsPerPageDropdown() {
    cy.log('click on rows per page dropdown');
    cy.xpath(ROWS_PER_PAGE_DROPDOWN).click();
  }

  static verifyRowsPerPageDropdownValues() {
    cy.log('verify dropdown values of rows per page');
    const array = ["10", "20", "50", "100"];
    const iterator = array.values();
    cy.xpath('//li[@role="option"]').each(($element) => {
      // eslint-disable-next-line consistent-return
      cy.wrap($element).invoke('attr', 'data-value').then(($pagers) => {
        for (const elements of iterator) {
          expect($pagers).to.be.equal(elements);
          return false;
        }
      });
    });
  }

  static selectNoOfRows(rows) {
    cy.log('select number of rows to be displayed');
    cy.xpath(`//li[@data-value = ${rows}]`).click();
  }

  static verifyNoOfRowsInTable(rows) {
    cy.log('verify No Of Rows In Table');
    cy.xpath(NO_OF_ROWS).should('have.length', rows);
  }

  static validateTableListParameters(columnName, columnData) {
    cy.log('validate list values inside table ');
    cy.xpath(`//div[@class='MuiDataGrid-colCellTitle' and text()='${columnName}']/ancestor::div[@class='MuiDataGrid-main']/descendant::div/span[text()='${columnData}']`).then(($elements) => {
      const listOfElements = $elements.length;
      cy.log(listOfElements);
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= listOfElements; i++) {
        cy.xpath(`(//div[@class='MuiDataGrid-colCellTitle' and text()='${columnName}']/ancestor::div[@class='MuiDataGrid-main']/descendant::div/span[text()='${columnData}'])[${i}]`).should('include.text', columnData);
      }
    });
  }
}

export default InventoriesPage;
