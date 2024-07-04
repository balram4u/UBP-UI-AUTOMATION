const CUSTOMER_ID = "#customer_id-input";
const CUS_CNIC = "#customer_national_identification_id-input";
const CUS_NAME = "#customer_name-input";
const CONTACT_MSISDN = "#contact_msisdn-input";
const EMAIL = "#email-input";
const FACEBOOK_ID = "#facebook-input";
const IS_VAT_PAYER = "#is_tax_payer-drop-down";
const VAT_PAYER_TYPE = "#tax_payer_type-drop-down";
const PAYER_NAME = "#tax_payer_name-input";
const PAYER_ID = "#tax_payer_id-input";
const VAT_PRINT_RECEIPT_CHECK = "#is_tax_vat_enabled-drop-down";

class CustomerInfo {
  static enterCustomerID(id) {
    cy.get(CUSTOMER_ID).type(id);
  }

  static enterCusName(name) {
    if (name !== "") {
      cy.log("Enter customer name");
      cy.get(CUS_NAME).type(name);
    }
  }

  static enterCusCNIC(CNIC) {
    if (CNIC !== "") {
      cy.log("enter cnic");
      cy.get(CUS_CNIC).type(CNIC);
    }
  }

  static enterContactaMISDN(MSISDN) {
    if (MSISDN !== "") {
      cy.log("enter msisdn");
      cy.get(CONTACT_MSISDN).type(MSISDN);
    }
  }

  static enterEmail(email) {
    if (email !== "") {
      cy.log("Entering email");
      cy.get(EMAIL).type(email);
    }
  }

  static enterFbID(fb) {
    if (fb !== "") {
      cy.log("Enter fb id");
      cy.get(FACEBOOK_ID).type(fb);
    }
  }

  static isVATtaxPayer(booleanCheck) {
    if (booleanCheck !== "") {
      cy.log("select is vat tax payer");
      cy.get(IS_VAT_PAYER).select(booleanCheck);
    }
  }

  static VATtaxPayerType(type) {
    if (type !== "") {
      cy.log("Enter tax payer type");
      cy.get(VAT_PAYER_TYPE).type(type);
    }
  }

  static enterTaxPayerName(name) {
    if (name !== "") {
      cy.log("enter tax payer name");
      cy.get(PAYER_NAME).type(name);
    }
  }

  static enterTaxPayerID(id) {
    if (id !== "") {
      cy.log("Enter tax payer ID");
      cy.get(PAYER_ID).type(id);
    }
  }

  static selectVATprintReciept(booleanValue) {
    if (booleanValue !== "") {
      cy.log("Select VAT print receipt");
      cy.get(VAT_PRINT_RECEIPT_CHECK).select(booleanValue);
    }
  }
}

export default CustomerInfo;
