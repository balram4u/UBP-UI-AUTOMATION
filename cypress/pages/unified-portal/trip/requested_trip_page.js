import urlPath from '../../../common/Route';

const SELECT_ELIGIBLE_AGENT = "//select[@id='eligible-agents-drop-down']";
const APPROVE_TRIP = "//button/span[text()='Approve']";
const SCROLLABLE_AREA = "div.MuiDataGrid-window";
const VIEW_REQUESTED_TRIP = "(//div[@data-value='REQUESTED']/..//div/a[contains(@href,'view')])[1]";

class requestedTripPage {
  static scrollToUp() {
    cy.log('Scroll to up');
    cy.get(SCROLLABLE_AREA).scrollTo('top');
    cy.wait(800);
  }

  static openRequestedTripsPage() {
    cy.log("open requested trips page");
    cy.visit(urlPath.requestedTrips);
    this.scrollToUp();
  }

  static approveTrip(eligibleAgent) {
    cy.log('approving trip with eligible agent ', eligibleAgent);
    cy.xpath(VIEW_REQUESTED_TRIP).click();
    cy.wait(1000);
    cy.xpath(SELECT_ELIGIBLE_AGENT).select(eligibleAgent);
    cy.wait(1000);
    cy.xpath(APPROVE_TRIP).click();
  }
}
export default requestedTripPage;
