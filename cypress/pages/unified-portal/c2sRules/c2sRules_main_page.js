import URL_PATH from '../../../common/Route';

const C2SRULE_PAGE_TITLE = "//h4[text()='C2S Rules']";
const CREATE_NEW_RULE_BUTTON = "//span[text()='Create New Rule']";
const NEW_RULE_PAGE_TITLE = "//h4[text()='New Rule']";
const VIEW_RULE_PAGE_TITLE = "//h4[text()='View C2S Rules']";
const EDIT_RULE_PAGE_TITLE = "//h4[text()='Edit C2S Rule']";
const GATEWAY_CODE_DROPDOWN = "select[name='fieldsMap.gatewayCode']";
const SERVICE_TYPE_DROPDOWN = "select[name='fieldsMap.serviceType']";
const RESELLER_TYPE_DROPDOWN = "select[name='fieldsMap.resellerType']";
const PRODUCT_VARIANT_BUTTON = "(//button[@class='MuiButtonBase-root MuiIconButton-root MuiAutocomplete-popupIndicator'])[2]";
const PRODUCT_VARIANT_INPUT = "//label[text()='Product Variant']/parent::div/descendant::input";
const PRODUCT_VARIANTS = "span[class*='labelSmall']"
const SUBMIT_BUTTON = "//span[text()='Submit']";
const VIEW_RULE_NAME = "//label[text()='Rule name']/parent::div/descendant::input";
const VIEW_GATEWAY_CODE_NAME = "//label[text()='Gateway code']/parent::div/descendant::input";
const VIEW_SERVICE_TYPE = "//label[text()='Service type']/parent::div/descendant::input";
const VIEW_RESELLER_TYPE = "//label[text()='Reseller Type']/parent::div/descendant::input";
const VIEW_PRODUCT_VARIANT = "//span[@class='MuiChip-label MuiChip-labelSmall']";
const BACK_BUTTON = "//span[text()='Back']";
const POPUP_MESSAGE = "div[id='notistack-snackbar']";
const EXPORT_BUTTON = "//button/span[text()='Export']";
const DOWNLOAD_BUTTON = "//li[text()='Download as CSV']";
const VIEW_BUTTON = "(//a[contains(@href,'view')]//*[local-name()='svg'])[1]";
const EDIT_BUTTON = "(//a[contains(@href,'edit')]//*[local-name()='svg'])[1]";
const COLUMN_TITLE = "(//div[@class='MuiDataGrid-colCellTitle'])";
const C2S_RULE_DATA = "//div[@data-id='1']";
const CONTRACT_BUTTON = "//p[text()='CONTRACT']";
const C2SRULES_BUTTON = "//p[text()='C2SRULES']";
const PRODUCT_VARIANT = "//div/span[text()='VALUE']";
class c2sRulesMainPage {
  // Page Navigation Methods

  static navigateToC2SRulesUsingUrl() {
    cy.log("visit c2sRules main page through url");
    cy.visit(URL_PATH.c2sRules);
  }

  // Click Action Methods

  static clickOnCreateNewRuleButton() {
    cy.log("click on Creatye New Rule Button");
    cy.xpath(CREATE_NEW_RULE_BUTTON).should('be.visible').click();
  }

  static clickOnBackButton() {
    cy.log("click on Back button");
    cy.xpath(BACK_BUTTON).click();
  }

  static clickOnSubmitButton() {
    cy.log("click on Submit button");
    cy.xpath(SUBMIT_BUTTON).click();
  }

  static clickOnEditC2SRule() {
    cy.log(`click on filtered value : edit button `);
    cy.xpath(EDIT_BUTTON).should('be.visible').click();
  }

  static clickOnViewC2SRule() {
    cy.log(`click on filtered value :  view button`);
    cy.xpath(VIEW_BUTTON).should('be.visible').click();
  }

  // Text Validation Methods

  static verifyC2SRulePageTitle() {
    cy.log("verify c2sRule page title visible");
    //cy.xpath(C2SRULE_PAGE_TITLE).should('be.visible');
  }

  static verifyViewRulePageTitle() {
    cy.log("verify view rule page title visible");
    cy.xpath(VIEW_RULE_PAGE_TITLE).should('be.visible');
  }

  static verifyEditRulePageTitle() {
    cy.log("verify edit rule page title visible");
    cy.xpath(EDIT_RULE_PAGE_TITLE).should('be.visible');
  }

  static verifyProductVariantButtonVisibility() {
    cy.log(`checking for product variant button is visible `);
    cy.xpath(PRODUCT_VARIANT_BUTTON).should('be.visible');
  }

  static verifyRuleNameValue(ruleName) {
    cy.log(`verify rule name is: ${ruleName}`);
    cy.xpath(VIEW_RULE_NAME).should('have.value', ruleName);
  }

  static verifyGatewayCodenameValue(gatewayCodeName) {
    cy.log(`verify Gateway Code Name is: ${gatewayCodeName}`);
    cy.xpath(VIEW_GATEWAY_CODE_NAME).should('have.value', gatewayCodeName);
  }

  static verifyServiceTypeValue(serviceType) {
    cy.log(`verify service type is: ${serviceType}`);
    cy.xpath(VIEW_SERVICE_TYPE).should('have.value', serviceType);
  }

  static verifyResellerTypeValue(resellerType) {
    cy.log(`verify reseller type is: ${resellerType}`);
    cy.xpath(VIEW_RESELLER_TYPE).should('have.value', resellerType);
  }

  static verifyProductVariantValue(productVariant) {
    if (productVariant !== "") {
      cy.log(`verify product variant is: ${productVariant}`);
      cy.xpath(VIEW_PRODUCT_VARIANT).should('include.text', productVariant);
    }
  }

  static verifySuccessPopup(popUpMessage) {
    cy.log("verify popup message");
    cy.get(POPUP_MESSAGE).contains(popUpMessage);
  }

  static verifyUserName(userName) {
    cy.log(`verify username is: ${userName}`);
    cy.xpath(`//label[text()='${userName}']`).should('include.text', userName);
  }

  // Text Input Methods

  static typeProductVariant(productVariant) {
    if (productVariant != "") {
      cy.log(`Product Variant is: ${productVariant}`);
      productVariant = productVariant.split(",");
      cy.xpath(PRODUCT_VARIANT_INPUT).type('{backspace}');
      cy.wait(500);
      for (let index = 0; index < productVariant.length; index++) {
        cy.xpath(PRODUCT_VARIANT_INPUT).type(productVariant[index]).type('{downArrow}{downArrow}{enter}');
      }
    }
  }

  static editProductVariant(productVariant) {
    if (productVariant != "") {
      cy.log(`Product Variant is: ${productVariant}`);
      productVariant = productVariant.split(",");
      cy.get('body').then((body) => {
        if (body.find(PRODUCT_VARIANTS).length > 0) {
          cy.get(PRODUCT_VARIANTS).each(($el, index, $list) => {
            const listOfElements = $el.length;
            for (let index = 0; index < listOfElements; index++) {
              cy.xpath(PRODUCT_VARIANT_INPUT).type('{backspace}');
            }
          });
        }
      });
      cy.wait(500);
      for (let index = 0; index < productVariant.length; index++) {
        cy.xpath(PRODUCT_VARIANT_INPUT).type(productVariant[index]).type('{downArrow}{downArrow}{enter}');
      }
    }
  }

  static selectRuleName(ruleName) {
    cy.log(`ruleName  is: ${ruleName}`);
    cy.get(RULE_NAME).select(ruleName);
  }

  static selectGatewayCode(gatewayCode) {
    cy.log(`gateway code is: ${gatewayCode}`);
    cy.get(GATEWAY_CODE_DROPDOWN).select(gatewayCode);
  }

  static selectServiceType(serviceType) {
    cy.log(`service type is: ${serviceType}`);
    cy.get(SERVICE_TYPE_DROPDOWN).select(serviceType);
  }

  static selectResellerType(resellerType) {
    cy.log(`reseller type is: ${resellerType}`);
    cy.get(RESELLER_TYPE_DROPDOWN).select(resellerType);
  }

  static clickOnExportButton() {
    cy.log(`click on export button`);
    cy.xpath(EXPORT_BUTTON).click();
  }

  static clickOnDownloadButton() {
    cy.log(`click on download button`);
    cy.xpath(DOWNLOAD_BUTTON).click();
  }

  static clickOnViewButton() {
    cy.log(`click on view button`);
    cy.xpath(VIEW_BUTTON).click();
  }

  static verifyColumnName(columnName) {
    cy.log('verify column name');
    columnName = columnName.split("=");
    cy.xpath(COLUMN_TITLE + `[${columnName[0]}]`).should('include.text', columnName[1]);
  }
  static verifyC2SRuleData() {
    cy.log(`verify C2S Rule data`);
    cy.xpath(C2S_RULE_DATA).should('exist');
  }

  static verifyCreateNewRuleButton() {
    cy.log(`Verify Create New Rule`);
    cy.xpath(CREATE_NEW_RULE_BUTTON).should('exist');
  }

  static verifyEditRuleButton() {
    cy.log(`Verify Edit Rule Button`);
    cy.xpath(EDIT_BUTTON).should('exist');
  }

  static verifyViewRuleButton() {
    cy.log(`Verify View Rule Button`);
    cy.xpath(VIEW_BUTTON).should('exist');
  }

  static clickOnContractButton() {
    cy.log(`click on contract button`);
    cy.xpath(CONTRACT_BUTTON).should('exist').click();
  }

  static clickOnC2SRulesButton() {
    cy.log(`click on C2S Rules button`);
    cy.xpath(C2SRULES_BUTTON).should('exist').click();
  }

  static validateProductVariant(productVariant) {
    cy.log('validating product variant exists');
    cy.xpath(PRODUCT_VARIANT.replace("VALUE", productVariant)).should('be.visible');
  }

  static validateProductVariantNotExist(productVariant) {
    cy.log('validating product variant does not exist');
    cy.xpath(PRODUCT_VARIANT.replace("VALUE", productVariant)).should('not.exist');
  }
}
export default c2sRulesMainPage;