const SUBMIT_XPATH = "//span[text()='Submit']";
const QUANTITY = '//div[contains(@class,"MuiDataGrid-row")]//div[@role="cell" and @aria-colindex="4"]';
const END_SERIAL = '//input[contains(@class,"MuiInputBase-input MuiInput-input") and @type="text"]';
const CLICK_ROW_PER_PAGE = '//div[text()="20"]';
const CLICK_ROW_NUMBER = '//li[text()="100"]';
const GRID_START_SERIAL = '//div[contains(@class,"MuiDataGrid-row")]//div[@role="cell" and @aria-colindex="4"]';
const SCROLLABLE_AREA = "div.MuiDataGrid-window";
const BOX_LIST = "//div[@class='rendering-zone']/div";
let startSerial = '';

class SplitInventoriesPage {
  static enterSplitValue(endSerial, splitValue) {
    cy.get(`[value="${endSerial}"]`).clear().type(splitValue);
  }

  static submitForSplit() {
    cy.xpath(SUBMIT_XPATH).click();
  }

  static scrollTopRight() {
    cy.log('scroll right');
    cy.get(SCROLLABLE_AREA).scrollTo('topRight');
    cy.wait(1000);
  }

  static splitInventories() {
    cy.log('Set page at 100 limit');
    cy.xpath(CLICK_ROW_PER_PAGE).click();
    cy.xpath(CLICK_ROW_NUMBER).click();
    cy.log('Perform split inventories having quantity more than 2');
    let i = 0;
    // eslint-disable-next-line consistent-return
    cy.xpath(QUANTITY).each(($div) => {
      if ($div.text() > '2') {
        cy.log($div.text());
        cy.xpath(`${QUANTITY}[@data-rowindex=${i}][@data-value=${$div.text()}]/..//div[@data-field="startSerial"]`).invoke('text').then((startSerialText) => {
          startSerial = startSerialText.toString();
          cy.wait(800);
          cy.log(startSerial);
          this.scrollTopRight();
          cy.xpath(`${QUANTITY}[@data-rowindex=${i}][@data-value=${$div.text()}]/..//div/div/button`).click({ force: true });
          cy.wait(800);
          cy.xpath(END_SERIAL).clear().type(startSerial);
          cy.wait(800);
          this.submitForSplit();
        });
        return false;
      }
      i += 1;
    });
  }

  static validateSplitInventories() {
    cy.wait(3000);
    cy.log('validate split inventories are available in grid');
    // eslint-disable-next-line consistent-return
    cy.xpath(GRID_START_SERIAL).each(($div) => {
      if ($div.text() === startSerial) {
        cy.log('Box inventories found');
        return false;
      }
      cy.log('convert startSerial into integer');
      // eslint-disable-next-line radix
      const startSearialInt = parseInt(startSerial);
      cy.log('addition to startSerial by 1 to verify box splited or not');
      const splitBox = startSearialInt + 1;
      if ($div.text() === splitBox) {
        cy.log('Box inventories found');
        return false;
      }
    });
  }

  static verifyBoxList() {
    cy.xpath(BOX_LIST).should('have.length.at.least', parseInt(1, 10));
  }
}

export default SplitInventoriesPage;
