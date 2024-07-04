const SCHEME_NAME = "//input[@name='commissionName']";
const SCHEME_TYPE = "//select[contains(@id,'commission-types-drop-down')]";
const VALIDITY_FROM_DATE_PICKER = "(//button[@class='MuiButtonBase-root MuiIconButton-root'])[1]";
const VALIDITY_TO_DATE_PICKER = "(//button[@class='MuiButtonBase-root MuiIconButton-root'])[2]";
const SELECT_DATE = "//button[contains(@class,'MuiPickersDay-day MuiPickersDay-current MuiPickersDay-daySelected')]";
const CAL_FREQUENCY = "//select[@id='calculation-frequency-drop-down']";
const DISBURSEMENT_FREQ = "//select[@id='disbursement-frequency-drop-down']";
const ADD_RULE_BTN = "//span[contains(text(),'Add Rule')]/..";
const RULE_DROPDOWN = "//select[@name='tableName']";
const ADD_SUBRULE_BTN = "//span[contains(text(),'Add SubRule')]/..";
const ADD_CONDITION_BTN = "//span[contains(text(),'Add Condition')]/..";
const SELECT_COLUMN_DROPDOWN = "(//select[@name='lhs'])[1]";
const SELECT_OPERATOR_DROPDOWN = "//select[@name='columnName']";
const RHS_VALUE = "(//input[@placeholder='rhs'])[1]";
const CAL_TYPE_DROPDOWN = "//select[@id='calculation-type-drop-down']";
const SELECT_LHS_DROPDOWN = "//select[@id='calculation-lhs-drop-down']";
const OPERATOR_DROPDOWN = "//select[@id='calculation-operator-drop-down']";
const CAL_RHS = "(//input[@placeholder='rhs'])[2]";
const NEXT_BTN = "//span[text()='Next']";
// const PREVIOUS = "//span[contains(text(),'Previous')]/..";
const SAVE = "//span[contains(text(),'Save')]";
const SUBMIT = "//button[contains(@class, 'MuiButtonBase-root')]/child::span[contains(text(),'Submit')]";

class CreateCommissionPage {
  static enterSchemeName(schemeName) {
    cy.log('Now Enter scheme Name for create comission');
    cy.xpath(SCHEME_NAME).clear();
    cy.xpath(SCHEME_NAME).type(schemeName);
  }

  static selectCommissionType(commissionType) {
    cy.log('Now select commission Type for create comission');
    cy.xpath(SCHEME_TYPE).select(commissionType);
  }

  static selectValidityFrom() {
    cy.log('Now select Validity From for create comission');
    // cy.xpath(VALIDITY_FROM).clear();
    // cy.xpath(VALIDITY_FROM).type(validityFrom);
    cy.xpath(VALIDITY_FROM_DATE_PICKER).click();
    cy.xpath(SELECT_DATE).click();
  }

  static selectValidityTo() {
    cy.log('Now select Validity To for create comission');
    // cy.xpath(VALIDITY_TO).clear();
    // cy.xpath(VALIDITY_TO).type(validityTo);
    cy.xpath(VALIDITY_TO_DATE_PICKER).click();
    cy.xpath(SELECT_DATE).click();
  }

  static selectCalculationFreq(calFrequency) {
    cy.log('Now select Calculation Freq for create comission');
    cy.xpath(CAL_FREQUENCY).select(calFrequency);
  }

  static selectDisbursementFreq(disbursementFreq) {
    cy.log('Now select Disbursement Freq for create comission');
    cy.xpath(DISBURSEMENT_FREQ).select(disbursementFreq);
  }

  static clickNextButton() {
    cy.log('Now click on Next button');
    cy.xpath(NEXT_BTN).should('be.visible').click({ force: true });
  }

  static clickRuleButton() {
    cy.log('Now click on Rule button');
    cy.xpath(ADD_RULE_BTN).click();
  }

  static selectRuleType(ruleType) {
    cy.log('Now select rule Type');
    cy.xpath(RULE_DROPDOWN).select(ruleType);
  }

  static clickSubRuleButton() {
    cy.log('Now click on SubRule button');
    cy.xpath(ADD_SUBRULE_BTN).click();
  }

  static clickAddCondtnButton() {
    cy.log('Now click on Add Condition button');
    cy.xpath(ADD_CONDITION_BTN).click();
  }

  static selectColumnDropDown(columnType) {
    cy.log('Now select column DropDown');
    cy.xpath(SELECT_COLUMN_DROPDOWN).select(columnType);
  }

  static selectOperatorDropDown(operatorType) {
    cy.log('Now select Operator DropDown');
    cy.xpath(SELECT_OPERATOR_DROPDOWN).select(operatorType);
  }

  static selectCalculationType(calculationType) {
    cy.log('Now select Calculation Type');
    cy.xpath(CAL_TYPE_DROPDOWN).select(calculationType);
  }

  static selectLhsType(lhsType) {
    cy.log('Now select Lhs Type');
    cy.xpath(SELECT_LHS_DROPDOWN).select(lhsType);
  }

  static selectOperatorType(operatorType) {
    cy.log('Now select Operator Type');
    cy.xpath(OPERATOR_DROPDOWN).select(operatorType);
  }

  static enterRhsCondition(rhs) {
    cy.log('Now Enter Rhs Condition');
    cy.xpath(RHS_VALUE).clear();
    cy.xpath(RHS_VALUE).type(rhs);
  }

  static enterRhsCalculation(rhsCal) {
    cy.log('Now Enter Rhs Calculation');
    cy.xpath(CAL_RHS).clear();
    cy.xpath(CAL_RHS).type(rhsCal);
  }

  static clickNext() {
    cy.log('Now click on Next');
    cy.xpath(NEXT_BTN).click();
  }

  static clickSaveButton() {
    cy.log('Now click on Save button');
    cy.xpath(SAVE).click();
  }

  static clickSubmitButton() {
    cy.log('Now click on Submit button');
    cy.xpath(SUBMIT).click();
  }
}
export default CreateCommissionPage;
