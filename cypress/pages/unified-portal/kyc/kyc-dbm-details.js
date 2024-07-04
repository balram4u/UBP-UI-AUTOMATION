// Branch manager details

const DBM_FIRST_NAME = "//input[@name='extraFields.branchManagerFirstName']";
const DBM_LAST_NAME = "//input[@name='extraFields.branchManagerSecondName']";
const DBM_OTHER_NAME = "//input[@name='extraFields.branchManagerOtherName']";
const DBM_NATIONAL_ID = "//input[@name='extraFields.customer_national_identification_id']";
const DBM_ROLE = "//input[@name='extraFields.dbmRole']";
const DBM_DATE_OF_BIRTH = "//input[@name='extraFields.dbmDob']";
const DBM_MOBILE_NO = "//input[@name='msisdn']";
const DBM_EMAIL = "//input[@name='email']";
const BRANCH_JURIDICAL_NAME = "//input[@name='familyName']";
const DSA_GENDER = "//input[@id='combo-box-extraFields.dbmGender']";

class dbmDetails {
  static typeDBMFirstName(dBMFirstName) {
    cy.log(`Parent Category Name is:${dBMFirstName}`);
    if (dBMFirstName !== " ") {
      cy.log('dBMFirstName selection block');
      cy.xpath(DBM_FIRST_NAME).type(dBMFirstName).should('have.value', dBMFirstName);
    }
  }

  static typeDBMLasttName(dBMLasttName) {
    cy.log(`Parent Category Name is: ${dBMLasttName}`);
    if (dBMLasttName !== " ") {
      cy.log('dBMLasttName selection block');
      cy.xpath(DBM_LAST_NAME).type(dBMLasttName).should('have.value', dBMLasttName);
    }
  }

  static typeDBMOthertName(dBMOthertName) {
    cy.log(`Parent Category Name is: ${dBMOthertName}`);
    if (dBMOthertName !== " ") {
      cy.log('dBMOthertName selection block');
      cy.xpath(DBM_OTHER_NAME).type(dBMOthertName).should('have.value', dBMOthertName);
    }
  }

  static typeDBMNationalId(dBMNationalId) {
    cy.log(`Parent Category Name is: ${dBMNationalId}`);
    if (dBMNationalId !== " ") {
      cy.log('dBMNationalId selection block');
      cy.xpath(DBM_NATIONAL_ID).type(dBMNationalId).should('have.value', dBMNationalId);
    }
  }

  static typeDBMGender(dBMGender) {
    cy.log(`Parent Category Name is: ${dBMGender}`);
    if (dBMGender !== " ") {
      cy.log('dBMGender selection block');
      cy.xpath(DSA_GENDER).type(dBMGender);
      cy.contains(dBMGender).click();
    }
  }

  static typeDBMRole(dBMRole) {
    cy.log(`Parent Category Name is: ${dBMRole}`);
    if (dBMRole !== " ") {
      cy.log('dBMRole selection block');
      cy.xpath(DBM_ROLE).type(dBMRole).should('have.value', dBMRole);
    }
  }

  static typeDBMDateOfBirth(dBMDateOfBirth) {
    cy.log(`Parent Category Name is: ${dBMDateOfBirth}`);
    if (dBMDateOfBirth !== " ") {
      cy.log('dBMDateOfBirth selection block');
      cy.xpath(DBM_DATE_OF_BIRTH).clear();
      cy.xpath(DBM_DATE_OF_BIRTH).type(dBMDateOfBirth).should('have.value', dBMDateOfBirth);
    }
  }

  static typeDBMMobileNo(dBMMobileNo) {
    cy.log(`Parent Category Name is: ${dBMMobileNo}`);
    if (dBMMobileNo !== " ") {
      cy.log('dBMMobileNo selection block');
      cy.xpath(DBM_MOBILE_NO).type(dBMMobileNo).should('have.value', dBMMobileNo);
    }
  }

  static typeDBMEmail(dBMEmail) {
    cy.log(`Parent Category Name is: ${dBMEmail}`);
    if (dBMEmail !== " ") {
      cy.log('dBMEmail selection block');
      cy.xpath(DBM_EMAIL).type(dBMEmail).should('have.value', dBMEmail);
    }
  }

  static typeBranchJuridicalName(branchJuridicalName) {
    cy.log(`Parent Category Name is: ${branchJuridicalName}`);
    if (branchJuridicalName !== " ") {
      cy.log('branchJuridicalName selection block');
      cy.xpath(BRANCH_JURIDICAL_NAME).type(branchJuridicalName).should('have.value', branchJuridicalName);
    }
  }
}
export default dbmDetails;
