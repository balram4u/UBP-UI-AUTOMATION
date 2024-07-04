import URL_PATH from '../../../common/Route';

const CREATE_DOMAIN_BUTTON = "//a[@id='create-domain-button']";


class DomainsHomePage {
  static visitDomainsHomePage() {
    cy.log('Now visit domains home page');
    cy.visit(URL_PATH.domains);
  }

}

export default DomainsHomePage;