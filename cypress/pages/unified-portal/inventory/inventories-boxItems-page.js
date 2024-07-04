const SCROLLABLE_AREA = "div.MuiDataGrid-window";
const LOCATION_ID = "//p[text()='Location Id']/following-sibling::span";
const SPLIT_BUTTON = "(//button//span[text() = 'call_split'])[1]";
const END_SERIAL = "//div/label[text() = 'End Serial']/..//div/input";
const OUT_OF_RANGE = "//p[text() = 'Out of Range']";
const SPLIT_BOXES_POPUP = "//h2[contains(text(),'Select range')]";
const CREATE_MORE_BOXES = "//button/span[text() = 'Create More Boxes']";
const EXPORT_CSV = "//button/span[text()='Export CSV']";
const ENTER_STATE = "//input[@placeholder='State']";
const DOWNLOAD_CSV = "//button/span[text()='Download CSV']";
class BoxItemsPage {
  static scrollRight() {
    cy.log('scroll right');
    cy.get(SCROLLABLE_AREA).scrollTo('right');
    cy.wait(1000);
  }

  static validateTableParameters(key, value) {
    cy.log('validate value inside table ');
    cy.xpath(`//div[@class='MuiDataGrid-colCellTitle' and text()='${key}']/ancestor::div[@class='MuiDataGrid-main']/descendant::div[@role='cell']/span[text()='${value}']`).should('include.text', value);
  }

  static validateTableListParameters(key, value) {
    cy.log('validate list values inside table ');
    // this.scrollRight();
    cy.xpath(`//div[@class='MuiDataGrid-colCellTitle' and text()='${key}']/ancestor::div[@class='MuiDataGrid-main']/descendant::div/span[text()='${value}']`).then(($elements) => {
      const listOfElements = $elements.length;
      cy.log(listOfElements);
      for (let i = 1; i <= listOfElements; i++) {
        cy.xpath(`(//div[@class='MuiDataGrid-colCellTitle' and text()='${key}']/ancestor::div[@class='MuiDataGrid-main']/descendant::div/span[text()='${value}'])[${i}]`).should('include.text', value);
      }
    });
  }

  static validateLocationId(locationId) {
    cy.log(`I validate Location Id ${locationId}`);
    cy.xpath(LOCATION_ID).should('include.text', locationId);
  }

  static clickOnSplitButton() {
    cy.log('click on split button');
    this.scrollRight();
    this.scrollRight();
    this.scrollRight();
    cy.xpath(SPLIT_BUTTON).click({ force: true });
  }

  static enterEndSerialRange(range) {
    cy.log('enter end serial range');
    cy.xpath(END_SERIAL).clear().type(range);
    cy.wait(2000);
  }

  static verifyOutOfRangeWarning() {
    cy.log('verify out of range warning');
    cy.wait(2000);
    cy.xpath(OUT_OF_RANGE).should('be.visible');
  }

  static verifySplitBoxesPopup() {
    cy.log('verify split boxes pupup');
    cy.xpath(SPLIT_BOXES_POPUP).should('be.visible');
    cy.wait(2000);
  }

  static clickCreateMoreBoxes() {
    cy.log('click on create more boxes');
    cy.xpath(CREATE_MORE_BOXES).click();
  }

  static verifyEndSerialIsEmpty() {
    cy.log('verify user is not able to enter alphabet');
    cy.xpath(END_SERIAL).should('be.empty');
  }

  static clickOnExportButtonDetailedInventory(state) {
    cy.log(`click on export button in detailed inventory`);
    cy.xpath(EXPORT_CSV).click();
    cy.xpath(ENTER_STATE).type(state);
    cy.xpath(DOWNLOAD_CSV).click();
  }
}

export default BoxItemsPage;
