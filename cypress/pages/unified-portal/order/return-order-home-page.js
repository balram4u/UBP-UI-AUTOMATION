import URL_PATH from "../../../common/Route";

const RETURN_ORDER_HEADER = "//p[text()='Raise Order']"; // it should be Return Order , bug raised for it.
const LEFT_MENU_ORDER = "//p[text()='ORDER']";
const LEFIT_MENU_RETURN_ORDER = "//p[text()='RETURN']";

class ReturnOrderHomePage {
  static visitReturnOrderHomePageUsingLeftMenu() {
    cy.log('Open Return Order Home page and verify title');
    cy.xpath(LEFT_MENU_ORDER).should('be.visible');
    cy.xpath(LEFT_MENU_ORDER).click();
    cy.xpath(LEFT_MENU_ORDER).click();
    cy.xpath(LEFIT_MENU_RETURN_ORDER).click();
    cy.xpath(RETURN_ORDER_HEADER).should('be.visible');
  }

  static visitReturnOrderHomePageUsingUrl() {
    cy.log('Open Return Order Home page and verify title');
    cy.visit(URL_PATH.returnOrder);
    cy.wait(900);
  }
}

export default ReturnOrderHomePage;
