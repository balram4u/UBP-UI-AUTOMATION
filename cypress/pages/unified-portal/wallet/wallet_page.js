import URL_PATH from '../../../common/Route';

const ERP_BALANCE_UI = "(//nav[@aria-label='seamless-unified-breadcrumb']//..//div//p)[4]";

class WalletPage {
  static visitWalletPageUsingUrl() {
    cy.log('Go to Inventories page');
    cy.wait(3000);
    cy.visit(URL_PATH.wallet);
    cy.wait(3000);
  }

  static viewERPBalance(userName) {
    cy.log("View ERP Balance for ", userName);

    cy.xpath(ERP_BALANCE_UI).then((balance) => {
      const UI_Balance = balance.text();
      cy.log('ERP Balance on UI is ', UI_Balance.trim());

      const hostname = Cypress.env('hostname');
      cy.request({
        method: 'POST',
        url: `${hostname}:8090/sfc-link/fetch-dealer-balance`,
        headers: {
          ersReference: 'oms-link-12345',
        },
        body: {
          dealerCode: `${userName}`,
        },
      }).then((response) => {
        cy.log(response.body);
        expect(response.body.resultDescription).to.eq('SUCCESS');
        expect(response.body.accountBalance).to.eq(UI_Balance.trim());
      });
    });
  }
}
export default WalletPage;
