import URL_PATH from '../../../common/Route';

const INVENTORIES_HEADER = "//p[text()='This section allows user to view their own and their sub-resellers inventory']";
const SIM_XPATH = "//*[@data-value='SimCards/SIM/']/parent::div//span[contains(text(),'inventory_2')]";
const BATCH_XPATH = "//*[@data-value='6001']/parent::div//span[contains(text(),'call_split')]";
class InventoriesPage {
  static visitInventoriesHomePageUsingLeftMenu() {
    cy.log('Now visit inventories home page using left menu');
    cy.visit(URL_PATH.inventories);
    cy.xpath(INVENTORIES_HEADER).should('be.visible');
  }

  static verifyTableCount(PRODUCT_NAME) {
    cy.get(`[data-value="${PRODUCT_NAME}"]`).should('have.length', 1);
  }

  static clickSIMForSplit() {
    cy.xpath(SIM_XPATH).click();
  }

  static clickBoxForSplit() {
    cy.xpath(BATCH_XPATH).click();
  }
}

export default InventoriesPage;
