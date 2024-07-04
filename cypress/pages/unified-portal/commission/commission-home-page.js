import URL_PATH from "../../../common/Route";

const CREATE_COMMISSION = "//span[text()='Create Commission']";
const VIEW_COMMISSION_HEADER = '//div/h4[text()="View All Commissions"]';
const LEFT_MENU_COMMISSION = "//p[text()='COMMISSION']";
const LEFIT_MENU_ALLSCHEMES = "//p[text()='ALLSCHEMES']";

class CommissionHomePage {
  static visitCommissionHomePageUsingLeftMenu() {
    cy.log('Open Commission -> View All Commissions page');
    cy.xpath(LEFT_MENU_COMMISSION).should('be.visible');
    cy.xpath(LEFT_MENU_COMMISSION).click();
    cy.wait(200);
    cy.xpath(LEFT_MENU_COMMISSION).click();
    cy.xpath(LEFIT_MENU_ALLSCHEMES).click();
    cy.xpath(VIEW_COMMISSION_HEADER).should('be.visible');
  }

  static visitCommissionHomePageUsingUrl() {
    cy.log('Now visit commission home page');
    cy.wait(3000);
    cy.visit(URL_PATH.commission);
  }

  static clickCreateCommission() {
    cy.log('Now click Create Commission');
    cy.xpath(CREATE_COMMISSION).click();
  }

  static verifyTableCount(SCHEME_NAME) {
    cy.log('Now verify Table Count');
    cy.get(`[data-value="${SCHEME_NAME}"]`).should('have.length', 1);
  }
}
export default CommissionHomePage;
