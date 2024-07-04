import URL_PATH from '../../../common/Route';

const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "select[id=columns-filter-select]";
const OPERATOR_SELECT = "select[id=columns-operators-select]";
const FILTER_VALUE = "//input[@placeholder='Filter value']";
const VERIFY_FILED_NAME = "//div[@data-field='fieldName' and @data-rowindex='0']";
const VERIFY_FIELD_VALUE = "//div[@data-field='fieldValue' and @data-rowindex='0']";
const VERIFY_ASSOCIATED_FIELD_NAME = "//div[@data-field='associatedFieldName' and @data-rowindex='0']";
const VERIFY_ASSOCIATED_FIELD_VALUE = "//div[@data-field='associatedFieldValue' and @data-rowindex='0']";

class TemplateDropdownsPage {
  static visitTemplateDropdownsPageUsingUrl() {
    cy.log('Go to Inventories page');
    cy.wait(3000);
    cy.visit(URL_PATH.templateDropdowns);
    cy.wait(3000);
  }

  static clickFilterButton() {
    cy.log('Click filter button');
    cy.xpath(FILTER).click();
  }

  static selectColumn(value) {
    cy.log('Select column');
    cy.get(COLUMN_SELECT).select(value);
  }

  static selectOperator(value) {
    cy.log('Select operator');
    cy.get(OPERATOR_SELECT).select(value);
  }

  static fillFilterValue(filterValue) {
    cy.log('Enter filter value');
    cy.xpath(FILTER_VALUE).clear().type(filterValue);
    cy.wait(1000);
  }

  static viewTerritoryDetails(fieldName, fieldvalue, associatedFieldName, associatedFieldValue) {
    cy.log("validating territory details with ", fieldName, fieldvalue, associatedFieldName, associatedFieldValue);
    cy.xpath(VERIFY_FILED_NAME).invoke('text').should('contains', fieldName);
    cy.xpath(VERIFY_FIELD_VALUE).invoke('text').should('contains', fieldvalue);
    cy.xpath(VERIFY_ASSOCIATED_FIELD_NAME).invoke('text').should('contains', associatedFieldName);
    cy.xpath(VERIFY_ASSOCIATED_FIELD_VALUE).invoke('text').should('contains', associatedFieldValue);
  }
}
export default TemplateDropdownsPage;
