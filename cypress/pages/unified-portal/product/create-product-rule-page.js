const CREATE_PRODUCT_RULE_HEADER = '//p[contains(text(),"This section allows the user to create a product rule")]';
const ENTER_PRODUCT = "//label[text()='Product']//..//div/input";
const ENTER_CHANNEL = "//label[text()='Channel']//..//div/input";
const ENTER_DISTRICT = "//label[text()='District']//..//div/input";
const CLICK_SUBMIT = "//button/span[text()='Submit']";
const SELECT_FROM_DATE_PICKER = "(//button[@aria-label='change date'])[1]";
const SELECT_TO_DATE_PICKER = "//label[text()='To']//..//div/div/button";
const SELECT_DATE = "//button[contains(@class,'MuiPickersDay-daySelected')]";
const ENTER_RULE_NAME = "//input[contains(@name,'ruleName')]";
const CLICK_MANUAL_ENTRY = "//span[text()='Manual Entry']";
const CLICK_RESET = "//button/span[text()='Reset']";

class CreateProductRulePage {
  static verifyCreateProductHeader() {
    cy.xpath(CREATE_PRODUCT_RULE_HEADER)
      .should('be.visible');
  }

  static enterRuleName(name) {
    cy.log('enter rule name', name);
    cy.xpath(ENTER_RULE_NAME).clear().type(name);
    cy.wait(500);
  }

  static selectProduct(product) {
    cy.log('select product', product);
    cy.xpath(ENTER_PRODUCT).type(product).type('{downArrow}').type('{downArrow}')
      .type('{enter}');
    cy.wait(500);
  }

  static selectChannel(channel) {
    cy.log('select channel', channel);
    cy.xpath(ENTER_CHANNEL).type(channel).type('{downArrow}').type('{downArrow}')
      .type('{enter}');
    cy.wait(500);
  }

  static selectDistrict(district) {
    cy.log('select channel', district);
    cy.xpath(ENTER_DISTRICT).type(district).type('{downArrow}').type('{downArrow}')
      .type('{enter}');
    cy.wait(500);
    cy.xpath(CLICK_MANUAL_ENTRY).click();
    cy.wait(500);
  }

  static selectFromDate() {
    cy.log('select from date');
    cy.xpath(SELECT_FROM_DATE_PICKER).click();
    cy.xpath(SELECT_DATE).click();
    cy.wait(2000);
  }

  static selectToDate() {
    cy.log('select to date');
    cy.xpath(SELECT_TO_DATE_PICKER).click();
    cy.xpath(SELECT_DATE).click();
    cy.wait(2000);
  }

  static clickSubmit() {
    cy.log('click submit');
    cy.xpath(CLICK_SUBMIT).click();
    cy.wait(200);
  }

  static clickReset() {
    cy.log('click reset');
    cy.xpath(CLICK_RESET).click();
    cy.wait(800);
  }

  static emptyFields(name, product, channel, district) {
    cy.log('verify all fields should be blank');
    cy.xpath(`//input[@value='${name}']`).should('not.exist');
    cy.xpath(`//div/span[text()='${product}']`).should('not.exist');
    cy.xpath(`//div/span[text()='${channel}']`).should('not.exist');
    cy.xpath(`//div/span[text()='${district}']`).should('not.exist');
  }

  static visibleFields(name, product, channel, district) {
    cy.log('verify all fields should be visible');
    cy.xpath(`//input[@value='${name}']`).should('be.visible');
    cy.xpath(`//div/span[text()='${product}']`).should('be.visible');
    cy.xpath(`//div/span[text()='${channel}']`).should('be.visible');
    cy.xpath(`//div/span[text()='${district}']`).should('be.visible');
  }

  static editProduct(product) {
    cy.log('select product', product);
    cy.xpath(`//span[text()='${product}']//..//*[local-name()='svg']`).click();
    cy.wait(1000);
    cy.xpath(ENTER_PRODUCT).type(product).type('{downArrow}').type('{downArrow}')
      .type('{enter}');
    cy.wait(1000);
  }

  static editChannel(channel) {
    cy.log('select channel', channel);
    cy.xpath(`//span[text()='${channel}']//..//*[local-name()='svg']`).click();
    cy.wait(1000);
    cy.xpath(ENTER_CHANNEL).type(channel).type('{downArrow}').type('{downArrow}')
      .type('{enter}');
    cy.wait(1000);
  }

  static editDistrict(district) {
    cy.log('select channel', district);
    cy.xpath(`//span[text()='${district}']//..//*[local-name()='svg']`).click();
    cy.wait(1000);
    cy.xpath(ENTER_DISTRICT).type(district).type('{downArrow}').type('{downArrow}')
      .type('{enter}');
    cy.wait(1000);
    cy.xpath(CLICK_MANUAL_ENTRY).click();
    cy.wait(500);
  }
}

export default CreateProductRulePage;
