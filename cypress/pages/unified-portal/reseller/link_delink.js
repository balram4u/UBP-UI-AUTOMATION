import URL_PATH from "../../../common/Route";

const RESELLER_ID = "(//input[@type='text'])[2]";
const LINK = "//button/span[text() = 'Link']";
const DELINK = "//button/span[text() = 'De-Link']";

class LinkDelink {
  static navigateToLinkDelinkUsingUrl() {
    cy.log('Navigate to Link/De-link sub-resellers');
    cy.visit(URL_PATH.link_delink);
  }

  static enterResellerId(id) {
    cy.log('enter reseller id to link/delink');
    cy.xpath(RESELLER_ID,{ timeout: 30000 }).type(id);
  }

  static clickLink() {
    cy.xpath(LINK,{ timeout: 30000 }).click();
  }

  static clickDeLink() {
    cy.xpath(DELINK).click();
    cy.xpath(RESELLER_ID,{ timeout: 30000 }).clear();
  }

  static approveLinkRequest() {
    cy.wait(1000);
    const hostname = Cypress.env('hostname');
    cy.request({
      method: 'GET',
      url: `${hostname}:8680/cc/CC?src=467000000019&sessionid=111112&cmd=104&p1=1`,
      headers: {
      },
      body: {
      },
    }).then((response) => {
      cy.log(response.body);
      expect(response.body).to.contains('Access Denied');
    });
  }
}
export default LinkDelink;
