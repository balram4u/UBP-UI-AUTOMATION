const PRODUCT_NAME = "(//p[text()='Name']/../following-sibling::div/p)[1]";
const STATUS = "(//p[text()='Status']/../following-sibling::div/p)[1]";
const CAT_DESCRIPTION = "(//p[text()='Description']/../following-sibling::div/p)[1]";
const PARENT_CATEGORY = "(//p[text()='Parent Category']/../following-sibling::div/p)[1]";
const TAX = "(//p[text()='Taxes']/../following-sibling::div/p)[1]";
const AVAILABLE_FROM = "(//p[text()='Available From']/../following-sibling::div/p)[1]";
const AVAILABLE_UNTIL = "(//p[text()='Available Until']/../following-sibling::div/p)[1]";

class ViewProductCategoryPage {
  static verifyData(PRODUCT_CATEGORY_NAME, PRODUCT_CATEGORY_STATUS,
    DESCRIPTION, PRODUCT_PARENT_CATEGORY, PRODUCT_TAX) {
    cy.wait(3000);
    cy.log('Verify Product Category Details');
    cy.xpath(PRODUCT_NAME).invoke('text').then((text) => {
      expect(text).to.eq(PRODUCT_CATEGORY_NAME);
    });
    cy.xpath(STATUS).invoke('text').then((text) => {
      expect(text).to.eq(PRODUCT_CATEGORY_STATUS);
    });
    cy.xpath(CAT_DESCRIPTION).invoke('text').then((text) => {
      expect(text).to.eq(DESCRIPTION);
    });
    if (PRODUCT_PARENT_CATEGORY !== "") {
      cy.xpath(PARENT_CATEGORY).invoke('text').then((text) => {
        expect(text).to.eq(PRODUCT_PARENT_CATEGORY);
      });
    }
    if (PRODUCT_TAX !== "") {
      cy.xpath(TAX).invoke('text').then((text) => {
        expect(text).to.eq(PRODUCT_TAX);
      });
    }
  }
}

export default ViewProductCategoryPage;
