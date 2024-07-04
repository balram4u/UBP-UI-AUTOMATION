const SELL_BUTTON = "//span[text()='sell']/../..";
const ADD_ENTITIES = "//span[text()='Add Entities']/..";
const ADD_RANGE = "//span[text()='Add Range']/..";
const COMMENT = "#comment";
const ADD_BTN = "//span[text()='Add']/..";
const SAVE_DIALOG_HEADER = "//div[@role='dialog']/header/div/h6";
const RENDERRED_ROWS = ".rendering-zone > div";
const SAVE_BTN = "//span[text()='Save']/..";
const CANCEL_BTN = "//span[text()='Cancel']/..";
const DELETE_RANGE_BTN = "(//button[@title='Delete'])[1]";
const DELETE_CONFIRMATION = "//p[text()='Are you sure that you want to delete this product rule?']";
const YES_DELETE_BTN = "//span[text()='Yes']/..";
const ROW_ENTRY_KEY = '(//div[@data-field="entryKey"])[2]/span/span/input';
const UPDATE_BTN = "//span[text()='Update']/..";
const OK_BTN = "//span[text()='OK']/..";
const TOGGLE_SWITCH = "(//input[@aria-label='secondary checkbox'])[1]";
const YES_BUTTON = "//span[text()='Yes']/..";
const CHNG_RULE_STATUS_DIALOGUE = "//h4[text()='Change Product Rule Status']";

class ProductRangesAndRules {
  static clickSellButton() {
    cy.log("Now Click sell button");
    cy.xpath(SELL_BUTTON).click();
  }

  static clickAddRule(product) {
    cy.log(`Now click add rule button for ${product}`);
    const ruleBtn = `//div[text()='${product}']/../../div[3]/div/a`;
    cy.xpath(ruleBtn).click();
  }

  static verifyProductRulesPage() {
    cy.log("Now Verify i am not product rules and ranges page");
    cy.get('h4').invoke('text').then((text) => {
      expect(text).to.eq("Add Range & Rules");
    });
  }

  static addRangesFrom(rangeIndex, rangeFrom) {
    const RANGE_FROM = `//input[@id='rules[${rangeIndex}].rangeFrom']`;
    cy.log(`Add range from ${RANGE_FROM}`);
    // Now;
    cy.xpath(RANGE_FROM).clear().type(rangeFrom);
  }

  static addRangesTo(rangeIndex, rangeTo) {
    const RANGE_TO = `//input[@id='rules[${rangeIndex}].rangeTo']`;
    cy.log("Now Add range to");
    cy.xpath(RANGE_TO).clear().type(rangeTo);
  }

  static selectAccountType(type, rangeIndex, entityIndex) {
    const ACC_TYPE = `//select[@id='rules[${rangeIndex}].productRules[${entityIndex}].accountType']`;
    cy.log(`Now SELECT account type ${ACC_TYPE}`);
    cy.xpath(ACC_TYPE).select(type);
  }

  static verifyQuantity(from, to, rangeIndex) {
    const QUANTITY = `//input[@id='rules[${rangeIndex}].rangeFrom']`;
    cy.log(`Now Verify quantity ${QUANTITY}`);
    cy.xpath(QUANTITY).invoke('text').then((value) => {
      expect(value).to.eq(`${from}-${to}`);
    });
  }

  static selectValueType(valueType, rangeIndex, entityIndex) {
    const VALUE_TYPE = `//select[@id='rules[${rangeIndex}].productRules[${entityIndex}].expressionValue']`;
    cy.log(`Now Select value ${VALUE_TYPE}`);
    cy.xpath(VALUE_TYPE).select(valueType);
  }

  static typeContractValue(value, rangeIndex, entityIndex) {
    const CONTRACT_VALUE = `//input[@name='rules[${rangeIndex}].productRules[${entityIndex}].contractValue']`;
    cy.log(`Now Type contract value ${CONTRACT_VALUE}`);
    cy.xpath(CONTRACT_VALUE).type(value);
  }

  static selectWalletType(type, rangeIndex, entityIndex) {
    const WALLET_TYPE = `//select[@id='rules[${rangeIndex}].productRules[${entityIndex}].walletType']`;
    cy.log(`Now Type wallet type ${WALLET_TYPE}`);
    cy.xpath(WALLET_TYPE).select(type);
  }

  static selectTag(tag, rangeIndex, entityIndex) {
    const TAG = `//select[@id='rules[${rangeIndex}].productRules[${entityIndex}].tag']`;
    cy.log(`Now select tag ${TAG}`);
    cy.xpath(TAG).select(tag);
  }

  static clickAddEntities() {
    cy.log("Now Click add entities");
    cy.xpath(ADD_ENTITIES).click();
  }

  static addRange() {
    cy.log("Now Click add range");
    cy.xpath(ADD_RANGE).click();
  }

  static addComment(comment) {
    cy.log("Now Adding comment");
    cy.get(COMMENT).type(comment);
  }

  static clickAddButton() {
    cy.log("Now Click add button");
    cy.xpath(ADD_BTN).click();
  }

  static verifySaveDialogueAppeared() {
    cy.log("Now Verify save dialogue appeared");
    cy.xpath(SAVE_DIALOG_HEADER).invoke('text').then((text) => {
      expect(text).to.eq("Add Range & Rules");
    });
  }

  static verifyEntitiesCountOnSaveDialogue(count) {
    cy.log("Now Verify entities count on save dialogue");
    cy.get(RENDERRED_ROWS).should('have.length', count);
  }

  static clickSaveOnSaveDialogue() {
    cy.log("Now Click save");
    cy.xpath(SAVE_BTN).click();
  }

  static clickCancel() {
    cy.log("Now Click cancel");
    cy.xpath(CANCEL_BTN).click();
  }

  static clickDeleteRule() {
    cy.log("Now Deleting rule");
    cy.xpath(DELETE_RANGE_BTN).click();
  }

  static verifyDeleteDialogue() {
    cy.log("Now verify delete dialogue appears");
    cy.xpath(DELETE_CONFIRMATION).should('have.length', 1);
  }

  static clickYesForDelete() {
    cy.log("Now click yes");
    cy.xpath(YES_DELETE_BTN).click();
  }

  static clickEditRule(product) {
    cy.log("Now Edit rule");
    const editRuleBtn = `(//div[text()='${product}']/../../div)[3]/div/div/button[2]`;
    cy.xpath(editRuleBtn).click();
  }

  static selectRowAndClickUpdate() {
    cy.log("Now select row and click update");
    cy.xpath(ROW_ENTRY_KEY).click();
    cy.xpath(UPDATE_BTN).should('be.enabled').click();
  }

  static clickUpdate() {
    cy.log("Now Click update ");
    cy.xpath(UPDATE_BTN).click();
  }

  static verifyUpdateDialogueAppeared() {
    cy.log("Now Verify save dialogue appeared");
    cy.xpath(SAVE_DIALOG_HEADER).invoke('text').then((text) => {
      expect(text).to.eq("Product Range & Rules");
    });
  }

  static clickViewRule(product) {
    cy.log("Now Click view product rule");
    const VIEW_RULE = `(//div[text()='${product}']/../../div)[3]/div/div/button[1]`;
    cy.xpath(VIEW_RULE).click();
  }

  static verifyEntityOnViewDialgoue(accountType, accountId, value, contractValue, wallet,
    tag, index) {
    cy.log("Now Verify entity's fields");
    const accountTypeLoc = `((//div[@class='rendering-zone'])[2]/div/div)[${3 + (10 * index)}]/div`;
    const accountIdLoc = `((//div[@class='rendering-zone'])[2]/div/div)[${4 + (10 * index)}]/div`;
    const valueLoc = `((//div[@class='rendering-zone'])[2]/div/div)[${5 + (10 * index)}]/div`;
    const contractValueLoc = `((//div[@class='rendering-zone'])[2]/div/div)[${6 + (10 * index)}]/div`;
    const walletLoc = `((//div[@class='rendering-zone'])[2]/div/div)[${7 + (10 * index)}]/div`;
    const tagLoc = `((//div[@class='rendering-zone'])[2]/div/div)[${8 + (10 * index)}]/div`;
    cy.xpath(accountTypeLoc).invoke('text').then((text) => {
      expect(text).to.eq(accountType);
    });
    if (accountId !== "") {
      cy.xpath(accountIdLoc).invoke('text').then((text) => {
        expect(text).to.eq(accountId);
      });
    }
    cy.xpath(valueLoc).invoke('text').then((text) => {
      expect(text).to.eq(value);
    });
    cy.xpath(contractValueLoc).invoke('text').then((text) => {
      expect(text).to.eq(contractValue);
    });
    cy.xpath(walletLoc).invoke('text').then((text) => {
      expect(text).to.eq(wallet);
    });
    cy.xpath(tagLoc).invoke('text').then((text) => {
      expect(text).to.eq(tag);
    });
  }

  static verifyRangeOnViewDialogue(rangeFrom, rangeTo, index) {
    cy.log('Now verify range on view dialogue');
    const rangeLoc = `((//div[@class='rendering-zone'])[2]/div/div)[${2 + (20 * index)}]/div`;
    cy.xpath(rangeLoc).invoke('text').then((text) => {
      expect(text).to.eq(`${rangeFrom}-${rangeTo}`);
    });
  }

  static clickOK() {
    cy.log('Now click ok');
    cy.xpath(OK_BTN).click();
  }

  static toggle(value) {
    cy.log("Now Toggling range");
    // eslint-disable-next-line no-unused-vars
    cy.xpath(TOGGLE_SWITCH).then(($toggle) => {
      cy.get("[name='status']").check();
      if (value === 0) {
        cy.xpath(CHNG_RULE_STATUS_DIALOGUE).should('have.length', 1);
        cy.xpath(YES_BUTTON).click();
      }
    }).should('have.attr', 'value', value);
  }
}

export default ProductRangesAndRules;
