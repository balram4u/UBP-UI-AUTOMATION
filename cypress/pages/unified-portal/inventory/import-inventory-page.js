import ImportInventoryHomePage from "./import-inventory-home-page";

const SELECT_INVENTORY_TYPE_FIELD = 'select[id=drop-down-file-type]';
const FILE_UPLOAD_FIELD = '//input[@type="file"]';
const SELECT_BUTTON = '//p[contains(text(),"drop files here")]';
const IMPORT_FILE_BUTTON = '//span[text()="import"]';

class ImportInventoryPage {
  static selectProductType(inventoryType) {
    cy.log('Select product type');
    if (inventoryType !== '') {
      cy.get(SELECT_INVENTORY_TYPE_FIELD).select(inventoryType); // 2 seconds
    }
  }

  static importFile(inventoryFile) {
    cy.log('Import file');
    const fileName = inventoryFile;
    cy.xpath(SELECT_BUTTON).click();
    cy.fixture(fileName).then((fileContent) => {
      cy.xpath(FILE_UPLOAD_FIELD).invoke('show').attachFile({ fileContent, fileName, mimeType: 'text/csv' });
    });
  }

  static uploadFile() {
    cy.log('Upload file');
    cy.xpath(IMPORT_FILE_BUTTON).click();
  }

  // this function doesn't work :'(
  static verifyMsg(msg, inventoryFile) {
    // eslint-disable-next-line
    while (true) {
      try {
        cy.xpath(`//div[text()='${msg}']`);
        return;
      } catch (e) {
        ImportInventoryHomePage.clickImportInventoryButton();
        this.importFile(inventoryFile);
        this.uploadFile();
        if (cy.xpath(`//div[text()='${msg}']`).should('be.visible') === true) {
          return;
        }
      }
    }
  }
}

export default ImportInventoryPage;
