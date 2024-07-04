import URL_PATH from '../../../common/Route';

const IMPORT_BUTTON = '//span[contains(text(),"Import Inventory")]';
const IMPORT_INVENTORY_MODAL = "//p[contains(text(),'drop files here, or click to select files')]";
const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "select[id=columns-filter-select]";
const OPERATOR_SELECT = "select[id=columns-operators-select]";
const FILTER_VALUE = "//input[@placeholder='Filter value']";
const APPROVE_INVENTORY = "//span[contains(text(),'thumb_up_off_alt')]";
const REJECT_INVENTORY = "//span[contains(text(),'thumb_down_off_alt')]";
const VIEW_INVENTORY = "//span[text()='visibility']";
const SKIP_COUNT = "//p[text()='Skip Count']/following-sibling::span";
const WRITE_COUNT = "//p[text()='Write Count']/following-sibling::span";
const LEFT_MENU_INVENTORY = "//p[text()='INVENTORY']";
const LEFIT_MENU_IMPORT_INVENTORY = "//p[text()='IMPORT INVENTORY']";

class ImportInventoryPage {
  static visitImportInventoryHomePageUsingLeftMenu() {
    cy.log('Open Inventory -> View Import Inventory page');
    cy.xpath(LEFT_MENU_INVENTORY).should('be.visible');
    cy.xpath(LEFT_MENU_INVENTORY).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_INVENTORY).click();
    cy.xpath(LEFIT_MENU_IMPORT_INVENTORY).click();
    cy.xpath(LEFIT_MENU_IMPORT_INVENTORY).should('be.visible');
  }

  static visitImportInventoryHomePageUsingUrl() {
    cy.log('visit import inventory page');
    cy.wait(3000);
    cy.visit(URL_PATH.importInventory);
  }

  static clickImportInventoryButton() {
    cy.log('Click import inventory button');
    cy.xpath(IMPORT_BUTTON).click();
    cy.xpath(IMPORT_INVENTORY_MODAL).should('be.visible');
  }

  static clickFilterButton() {
    cy.log('Click filter button');
    cy.xpath(FILTER).click();
  }

  static selectColumn(value) {
    cy.log('Select column');
    cy.get(COLUMN_SELECT).select(value);
  }

  static selectOperator(value) {
    cy.log('Select operator');
    cy.get(OPERATOR_SELECT).select(value);
  }

  static fillFilterValue(filterValue) {
    cy.log('Enter filter value');
    cy.xpath(FILTER_VALUE).clear().type(filterValue);
  }

  static verifyTableCount(PRODUCT_NAME) {
    cy.log('Validating table count');
    cy.get(`[data-value="${PRODUCT_NAME}"]`).should('have.length', 1);
  }

  static approveImportInventory() {
    cy.log('Approve import inventory');
    cy.xpath(APPROVE_INVENTORY).click();
  }

  static clickViewInventoryBtn() {
    cy.log('Click view button');
    cy.xpath(VIEW_INVENTORY).eq(0).click();
    cy.wait(2000);
  }

  static verifyWriteCount(writeCount) {
    cy.log('validating write count');
    if (writeCount === "not_eq_0") {
      cy.xpath(WRITE_COUNT).invoke('text').then((text) => {
        expect(text).to.not.eq('0');
      });
    } else if (writeCount === "eq_0") {
      cy.xpath(WRITE_COUNT).invoke('text').then((text) => {
        expect(text).to.eq('0');
      });
    }
  }

  static verifySkipCount(skipCount) {
    cy.log('Validating skip count');
    if (skipCount === "not_eq_0") {
      cy.xpath(SKIP_COUNT).invoke('text').then((text) => {
        expect(text).to.not.eq("0");
      });
    } else if (skipCount === "eq_0") {
      cy.xpath(SKIP_COUNT).invoke('text').then((text) => {
        expect(text).to.be.eq("0");
      });
    }
  }

  static verifyApproveBtnNotPresent() {
    cy.log('Validate approve button should not visible');
    cy.xpath(APPROVE_INVENTORY).should('not.be.visible');
  }

  static rejectImportInventory() {
    cy.log('Reject import inventory');
    cy.xpath(REJECT_INVENTORY).click();
  }
}

export default ImportInventoryPage;
