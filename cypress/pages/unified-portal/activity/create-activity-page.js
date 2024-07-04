const ENTER_RESELLER_ID = "//input[@id='activity-resellers-autocomplete']";
const SAVE_BUTTON = "//span[text()='Save']";
const SELECT_START_DATE_PICKER = "(//button[@class='MuiButtonBase-root MuiIconButton-root'])[1]";
const SELECT_END_DATE_PICKER = "(//button[@class='MuiButtonBase-root MuiIconButton-root'])[2]";
const SELECT_DATE = "//button[contains(@class,'MuiPickersDay-daySelected')]";
const CLOSE_DATE_PICKER = "//div[@class='MuiPickersClock-container']";
const ENTER_REGION = "//input[@id='region']";
const ENTER_ZIP_CODE = "//input[@id='free-solo-with-text-demo']";
const SELECT_LOCATION = "//select[@id='actionType-drop-down']";
const SELECT_CONCEPT = "//select[@id='concept-drop-down']";
const SELECT_SKU = "//div[@data-rowindex='0']//input[@type='checkbox']";
const SELECT_GOALS = "//div[@data-rowindex='0' and @data-field='goals']";
const ENTER_GOAL = "//div[@data-rowindex='0' ]//input[@type='text']";
const VIEW_RESELLER_ID = "//div/p[text()='Resellers']/../span";
const VIEW_REGION = "//div/p[text()='Region']/../span";
const VIEW_ZIP_ID = "//div/p[text()='Zip']/../span";
const VIEW_LOCATION_ID = "//div/p[text()='Location']/../span";
const VIEW_ACTION_ID = "//div/p[text()='Type of Request']/../span";
const VIEW_CONCEPT_ID = "//div/p[text()='Activity Concept']/../span";

class CreateActivityPage {
  static CreateActivityPage(RESELLER_ID, START_TIME, END_TIME, REGION,
    ZIP_CODE, LOCATION, CONCEPT, GOALS) {
    cy.log('Now Create activity');
    cy.wait(1000);
    cy.xpath(ENTER_RESELLER_ID).type(RESELLER_ID)
      .type('{downArrow}').type('{enter}');
    cy.xpath(ENTER_RESELLER_ID).click();
    cy.xpath(800);
    cy.xpath(SELECT_END_DATE_PICKER).click();
    cy.xpath(SELECT_DATE).click();
    cy.xpath(CLOSE_DATE_PICKER).click();
    cy.xpath(CLOSE_DATE_PICKER).click();
    cy.wait(800);

    cy.xpath(SELECT_START_DATE_PICKER).click();
    cy.xpath(SELECT_DATE).click();
    cy.xpath(CLOSE_DATE_PICKER).click();
    cy.xpath(CLOSE_DATE_PICKER).click();
    cy.wait(800);

    cy.xpath(ENTER_REGION).type(REGION).type('{enter}');
    cy.xpath(ENTER_ZIP_CODE).type(ZIP_CODE).type('{enter}');
    cy.xpath(SELECT_LOCATION).select(LOCATION);
    cy.xpath(SELECT_CONCEPT).select(CONCEPT);
    cy.xpath(SELECT_SKU).click();
    cy.xpath(SELECT_GOALS).dblclick();
    cy.xpath(ENTER_GOAL).type(GOALS);
    cy.xpath(SAVE_BUTTON).click();
    cy.wait(1000);
  }

  static UpdateActivityPage(UPDATE_RESELLER_LIST, UPDATE_REGION,
    UPDATE_ZIP_LOCATION, UPDATE_ACTION, UPDATE_CONCEPT) {
    cy.log('Now Update activity');
    cy.wait(1000);
    cy.xpath(ENTER_RESELLER_ID).type(UPDATE_RESELLER_LIST)
      .type('{downArrow}').type('{enter}');
    cy.xpath(ENTER_RESELLER_ID).click();
    cy.xpath(800);
    cy.xpath(ENTER_REGION).clear().type(UPDATE_REGION).type('{enter}');
    cy.xpath(ENTER_ZIP_CODE).clear().type(UPDATE_ZIP_LOCATION).type('{enter}');
    cy.xpath(SELECT_LOCATION).select(UPDATE_ACTION);
    cy.xpath(SELECT_CONCEPT).select(UPDATE_CONCEPT);
    cy.xpath(SAVE_BUTTON).click();
    cy.wait(1000);
  }

  static ViewActivityPage(VIEW_RESELLER_LIST, UPDATE_REGION,
    VIEW_ACTION, VIEW_CONCEPT, VIEW_ZIP, VIEW_LOCATION) {
    cy.log('Now View activity');
    cy.wait(1000);
    cy.xpath(VIEW_RESELLER_ID).invoke('text').then((resellerId) => {
      expect(resellerId).to.eq(VIEW_RESELLER_LIST);
    });

    cy.xpath(VIEW_REGION).invoke('text').then((viewRegion) => {
      expect(viewRegion).to.eq(UPDATE_REGION);
    });

    cy.xpath(VIEW_ZIP_ID).invoke('text').then((viewZip) => {
      expect(viewZip).to.eq(VIEW_ZIP);
    });

    cy.xpath(VIEW_LOCATION_ID).invoke('text').then((viewLocation) => {
      expect(viewLocation).to.eq(VIEW_LOCATION);
    });

    cy.xpath(VIEW_ACTION_ID).invoke('text').then((viewAction) => {
      expect(viewAction).to.eq(VIEW_ACTION);
    });

    cy.xpath(VIEW_CONCEPT_ID).invoke('text').then((viewConcept) => {
      expect(viewConcept).to.eq(VIEW_CONCEPT);
    });
  }
}
export default CreateActivityPage;
