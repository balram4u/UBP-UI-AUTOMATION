import {
  And, Then,
} from 'cypress-cucumber-preprocessor/steps';
import CreateContractType from '../../../pages/unified-portal/contract/create_contract_page';
import CommonUtilities from "../../../common/Util";
import resellerGeneralInfo from '../../../pages/unified-portal/reseller/reseller_general_info';
import resellerAdditionalInfo from '../../../pages/unified-portal/reseller/reseller_additional_info';
import SearchTransactionPage from '../../../pages/unified-portal/transactions/search-transaction';
import BulkImportHomePage from "../../../pages/unified-portal/inventory/bulk-import-home-page";
import UserInfo from '../../../pages/unified-portal/reseller/user_info';

And(/^I navigate to the contracts Page$/, () => {
  CreateContractType.visitContractPageUsingUrl();
  cy.wait(8000);
});

And(/^I click on create contract button$/, () => {
  CreateContractType.clickCreateContract();
});

And(/^verify status options with respect to user logged in "([^"]*)"$/, (allowedStatus) => { });

And(/^I enter data for contract creation with params "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (
  contractType, name, importID, desc, resellerType, country, contractStatus, commissionMode, region,
) => {
  CreateContractType.selectRegion(region);
  CreateContractType.selectContractType(contractType);
  CreateContractType.addName(name);
  CreateContractType.enterImportid(importID);
  CreateContractType.addDescription(desc);
  CreateContractType.selectResellerType(resellerType);
  CreateContractType.selectCountry(country);
  CreateContractType.selectStatus(contractStatus);
  CreateContractType.selectCommissionMode(commissionMode);
  cy.wait(2000);
});

And(/^I click submit button$/, () => {
  CreateContractType.clickSubmit();
});

And(/^I filter the contract with its name "([^"]*)" "([^"]*)"$/, (column, value) => {
  CommonUtilities.applyFilter(column, "equals", value);
});

And(/^I click on edit button$/, () => {
  CreateContractType.clickEdit();
});

And(/^I enter a new name for contract "([^"]*)"$/, (name) => {
  CreateContractType.addName(name);
});

And(/^I click update button$/, () => {
  cy.wait(1000);
  CreateContractType.clickUpdate();
});

And(/^Verify status on contracts page for contract name "([^"]*)" "([^"]*)"$/, (name, status) => {
  CreateContractType.addName(name);
  cy.wait(2000);
  CreateContractType.clickSearch();
  cy.wait(4000);
  CreateContractType.verifyContractName(name);
  cy.wait(2000);
  CreateContractType.verifyStatus(status);
});

Then(/^Change status in edit contracts page for contract name "([^"]*)" "([^"]*)"$/, (name, status) => {
  CreateContractType.addName(name);
  CreateContractType.clickSearch();
  CreateContractType.verifyContractName(name);
  CreateContractType.clickOnEdit();
  CreateContractType.selectStatus(status);
});

And(/^I seach the Contract "([^"]*)"$/, (name) => {
  CreateContractType.addName(name);
  cy.wait(2000);
  CreateContractType.clickSearch();
  cy.wait(4000);
  CreateContractType.verifyContractName(name);
  cy.wait(2000);
});

And(/^I click on Price button$/, () => {
  CreateContractType.clickOnPrice();
});

And(/^I click on Create Margin$/, () => {
  CreateContractType.clickCreateMargin();
});

And(/^I verify Products page header$/, () => {
  CreateContractType.verifyProductsPage();
});

And(/^I search for the product and verify the search result with product name "([^"]*)"$/, (productName) => {
  CreateContractType.enterProductName(productName);
  cy.wait(5000);
  CreateContractType.clickSearch();
  cy.wait(5000);
  CreateContractType.verifyProduct(productName);
  cy.wait(5000);
});

And(/^I click on Product action "([^"]*)"$/, (productName) => {
  CreateContractType.clickProductAction(productName);
});

And(/^I verify product page title "([^"]*)"$/, (productName) => {
  CreateContractType.verifyActionPageHeader(productName);
});

And(/^click on action button for "([^"]*)"$/, (transactionType) => {
  CreateContractType.clickTransactionActionButton(transactionType);
});

And(/^Enter price entry with given details "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (rangeFrom, rangeTo,
  accountType1, accountType2, accountType3, accountType4,
  accountId1, accountId2, accountId3, accountId4,
  value1, value2, value3, value4,
  contractValue1, contractValue2, contractValue3, contractValue4,
  walletType1, walletType2, walletType3, walletType4,
  tag1, tag2, tag3, tag4) => {
  CreateContractType.enterRange(rangeFrom, rangeTo);
  CreateContractType.enterAccountType(accountType1, accountType2, accountType3, accountType4);
  CreateContractType.enterAccountID(accountId1, accountId2, accountId3, accountId4);
  CreateContractType.enterValues(value1, value2, value3, value4);
  CreateContractType.enterContractValue(contractValue1, contractValue2, contractValue3, contractValue4);
  CreateContractType.selectWalletType(walletType1, walletType2, walletType3, walletType4);
  CreateContractType.selectTags(tag1, tag2, tag3, tag4);
});

And(/^I enter range values "([^"]*)" "([^"]*)"$/, (rangeFrom, rangeTo) => {
  CreateContractType.enterRange(rangeFrom, rangeTo);
});

And(/^I enter price entry details for row "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (
  rowIndex, accountType, accountId, value, contractValue, walletType, tag,
) => {
  // eslint-disable-next-line max-len
  CreateContractType.enterPriceEntryDetails(rowIndex, accountType, accountId, value, contractValue, walletType, tag);
});

And(/^Click on Add Entities$/, () => {
  CreateContractType.clickAddEntities();
});

And(/^Enter price entry with given details for FTLExpression Rows "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (
  rangeFrom, rangeTo,
  ftlAccountType1, ftlAccountType2,
  ftlAccountId1, ftlAccountId2,
  ftlValue1, ftlValue2,
  ftlContractValue1, ftlContractValue2,
  ftlWalletType1, ftlWalletType2,
  ftlTag1, ftlTag2,
  condition, mode1, valueType, amount, elseValueType, elseAmount, message,
  condition2, mode2,
) => {
  CreateContractType.enterRange(rangeFrom, rangeTo);
  CreateContractType.enterPriceDetailsforFTLExpressionRow1(ftlAccountType1, ftlAccountId1, ftlValue1, ftlContractValue1, ftlWalletType1, ftlTag1,
    condition, mode1, valueType, amount, elseValueType, elseAmount, message, condition2, mode2);
  CreateContractType.enterPriceDetailsforFTLExpressionRow2(ftlAccountType2, ftlAccountId2, ftlValue2, ftlContractValue2, ftlWalletType2, ftlTag2);
});

And(/^Click on Add button$/, () => {
  CreateContractType.clickAdd();
});

And(/^Click on Save$/, () => {
  CreateContractType.clickSave();
});

And(/^Click on Save "([^"]*)"$/, (successMsg) => {
  CreateContractType.verifySuccessPopup(successMsg);
});

And(/^Verify Action on products page "([^"]*)"$/, (productType) => {
  CreateContractType.verifyProduct(productType);
});

And(/^I click on delete button for "([^"]*)"$/, (product) => {
  cy.wait(4000);
  CreateContractType.clickDelete(product);
});

// reseller part
And(/^I navigate to the Resellers Page$/, () => {
  resellerGeneralInfo.navigateToAddResellerUsingUrl();
});

And(/^I click on add reseller button$/, () => {
  resellerGeneralInfo.clickAddReseller();
});

And(/^I select reseller type "([^"]*)"$/, (type) => {
  resellerGeneralInfo.selectGroupType(type);
});

// eslint-disable-next-line no-unused-vars
And(/^I enter reseller general info for GP with parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (contractType, resellerMSISDN, parentResellerID, region, area, territory, thana) => {
  cy.wait(10000);
  resellerGeneralInfo.selectContractType(contractType);
  cy.wait(1000);
  resellerGeneralInfo.typeResellerMSISDN(resellerMSISDN);
  cy.wait(1000);
  resellerAdditionalInfo.selectParentResellerID(parentResellerID);
  cy.wait(1000);
  resellerGeneralInfo.selectRegion(region);
  cy.wait(2000);
  resellerGeneralInfo.selectArea(area);
  cy.wait(2000);
  resellerGeneralInfo.selectTerritory(territory);
  cy.wait(1000);
  resellerGeneralInfo.selectThana(thana);
  cy.wait(1000);
  resellerGeneralInfo.clickNext();
  cy.wait(1000);
});

And(/^I enter reseller additional info for GP with parameters "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/,
  // eslint-disable-next-line camelcase
  (name, externalCode, status, username_prefix, low_balance_alert, AccessibleRegions, AccessibleDomainName) => {
    resellerAdditionalInfo.enterName(name);
    cy.wait(1000);
    resellerAdditionalInfo.selectStatus(status);
    cy.wait(1000);
    resellerAdditionalInfo.enterExternalCode(externalCode);
    cy.wait(1000);
    resellerAdditionalInfo.selectUsernamePrefix(username_prefix);
    cy.wait(1000);
    resellerAdditionalInfo.selectLowBalanceAlert(low_balance_alert);
    cy.wait(1000);
    resellerAdditionalInfo.selectAccessibleRegions(AccessibleRegions);
    cy.wait(1000);
    resellerAdditionalInfo.selectAccessibleDomainName(AccessibleDomainName);
    cy.wait(1000);
    resellerGeneralInfo.clickNext();
    cy.wait(1000);
  });

And(/^I enter users info with params "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/,
  // eslint-disable-next-line camelcase
  (user_role, user_id, user_email, user_password) => {
    cy.wait(1000);
    resellerAdditionalInfo.selectUserRole(user_role);
    cy.wait(1000);
    resellerAdditionalInfo.enterUserID(user_id);
    cy.wait(1000);
    resellerAdditionalInfo.enterUserEmail(user_email);
    cy.wait(1000);
    resellerAdditionalInfo.enterUserPassword(user_password);
    cy.wait(1000);
  });

And(/^I click the submit button$/, () => {
  cy.wait(800);
  UserInfo.clickSubmit();
});

Then(/^I am able to validate reseller details as "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerId, resellerName, resellerTypeName, parentResellerName, MSISDN, status) => {
  resellerGeneralInfo.validateResellerID(resellerId);
  resellerGeneralInfo.validateResellerType(resellerTypeName);
  resellerGeneralInfo.validateParentResellerName(parentResellerName);
  resellerGeneralInfo.validateName(resellerName);
  resellerGeneralInfo.validateDealerMSISDN(MSISDN);
  resellerGeneralInfo.validateStatus(status);
});

And(/^I navigate to search transaction page$/, () => {
  SearchTransactionPage.clickOnSearchTransactionUsingUrl();
  cy.wait(8000);
});

Then(/^I search for transaction with reference number$/, () => {
  SearchTransactionPage.serachWithTransactionReference();
  SearchTransactionPage.clickOnSearch();
});

And(/^I click on View button$/, () => {
  SearchTransactionPage.clickView();
});

And(/^I calculate and verify the commission "([^"]*)"$/, (amount) => {
  SearchTransactionPage.verifyCommission(amount);
});

And(/^I click reset button$/, () => {
  CreateContractType.clickReset();
});

And(/^I am able to validate if contract name and contract id are reset$/, () => {
  CreateContractType.resetName();
  CreateContractType.resetImportid();
});

And(/^I enter contract info with parameters "([^"]*)" "([^"]*)"$/, (searchFeild, searchValue) => {
  resellerGeneralInfo.enterSearchValue(searchFeild, searchValue);
  cy.wait(1000);
  resellerGeneralInfo.clickSearch();
  cy.wait(1000);
});

And(/^I click on clone button$/, () => {
  CreateContractType.clickClone();
});

And(/^I change status of contract "([^"]*)"$/, (status) => {
  cy.wait(1000);
  CreateContractType.selectStatus(status);
});

And(/^I enter data for contract clone with params "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (
  name, importID, desc, resellerType, country, contractStatus, commissionMode, region,
) => {
  cy.log('Select region', region);
  CreateContractType.selectRegion(region);
  CreateContractType.addClonedName(name);
  CreateContractType.enterClonedImportid(importID);
  CreateContractType.addClonedDescription(desc);
  CreateContractType.selectResellerType(resellerType);
  CreateContractType.selectCountry(country);
  CreateContractType.selectStatus(contractStatus);
  CreateContractType.selectCommissionMode(commissionMode);
  CreateContractType.clickCloneCloning();
});

And(/^I click on edit button ahead of product$/, () => {
  CreateContractType.clickEditProduct();
});

And(/^I click on export button$/, () => {
  CreateContractType.clickOnExportButton();
});

And(/^I click on download button$/, () => {
  CreateContractType.clickOnDownloadButton();
});

And(/^I read file name "([^"]*)"$/, (fileName) => {
  CommonUtilities.readFileName(fileName);
});

Then(/^I delete file name "([^"]*)"$/, (fileName) => {
  cy.task('deleteFile', fileName);
});

And(/^I verify fields are not editable$/, () => {
  CreateContractType.verifyNotEditable();
});

And(/^I verify edit button not visible$/, () => {
  CreateContractType.verifyEditNotVisible();
});

And(/^I verify edit button is visible$/, () => {
  CreateContractType.verifyEditIsVisible();
});

Then(/^I verify column is filtered based on "([^"]*)" "([^"]*)"$/, (columnName, value) => {
  // CommonUtilities.scrollToRight();
  CommonUtilities.validateTableListParameters(columnName, value);
});

And(/^I click on edit rule$/, () => {
  CreateContractType.editRule();
});

And(/^I click on edit Product SKU$/, () => {
  CreateContractType.editProductSKU();
});

And(/^I click on product status toggle$/, () => {
  CreateContractType.clickProductStatusToggle();
});

And(/^I click on yes button$/, () => {
  CreateContractType.clickYes();
});

And(/^I click on view product sku$/, () => {
  CreateContractType.clickView();
});

And(/^I verify margin table is visible$/, () => {
  CreateContractType.verifyMarginTable();
});

Then(/^I edit contract with following parameters "([^"]*)" "([^"]*)" "([^"]*)"$/, (name, status, description) => {
  CreateContractType.clickOnEdit();
  cy.wait(4000);
  CreateContractType.addName(name);
  CreateContractType.addDescription(description);
  CreateContractType.selectStatus(status);
});

And(/^I click the view contract button$/, () => {
  CreateContractType.clickViewContract();
  cy.wait(4000);
});

Then(/^I verify the input field "([^"]*)" has value "([^"]*)"$/, (fieldName, fieldValue) => {
  CreateContractType.verifyViewContractField(fieldName, fieldValue);
});

And(/^I approve the contract$/, () => {
  CreateContractType.approveClonedContract();
  CreateContractType.clickYesApproveClonedContract();
});

Then(/^in search transaction page I verify account transaction "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (resellerId, product, amount, accountId, accountTypeId, tag) => {
  SearchTransactionPage.scrollBottom();
  // eslint-disable-next-line max-len
  SearchTransactionPage.verifyAccountTransaction(resellerId, product, amount, accountId, accountTypeId, tag);
});

Then(/^I validate performed transaction available under search transaction page "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (id, msisdn, transactionType, product, amount, status, extCode, senderId, senderMSISDN) => {
  cy.wait(15000);
  SearchTransactionPage.serachWithTransactionReference();
  cy.wait(30000);
  SearchTransactionPage.clickOnSearch();
  // eslint-disable-next-line max-len
  SearchTransactionPage.validateTransaction(id, msisdn, transactionType, product, amount, status, extCode, senderId, senderMSISDN);
});

Then(/^I search performed transaction available under search transaction page$/, () => {
  cy.wait(15000);
  SearchTransactionPage.serachWithTransactionReference();
  cy.wait(30000);
  SearchTransactionPage.clickOnSearch();
  cy.wait(5000);
});

Then(/^I view the transaction details$/, () => {
  SearchTransactionPage.scrollToLeft();
  SearchTransactionPage.clickView();
});

And(/^I wait for "([^"]*)" miliseconds$/, (miliseconds) => {
  cy.wait(parseInt(miliseconds, 10));
});

And(/^I navigate to the hierarchy transaction page$/, () => {
  SearchTransactionPage.clickOnHierarchyTransactionUsingUrl();
  cy.wait(5000);
});

And(/^I click on view transaction$/, () => {
  SearchTransactionPage.scrollToLeft();
  cy.wait(2000);
  SearchTransactionPage.clickView();
});

Then(/^I check the following tag is not present in account transactions "([^"]*)"$/, (tag) => {
  SearchTransactionPage.verifyTagNotPresentInAccountTxnRows(tag);
});

Then(/^I check the following tag is present in account transactions "([^"]*)"$/, (tag) => {
  SearchTransactionPage.verifyTagPresentInAccountTxnRows(tag);
});

And(/^I navigate to the bulk import page$/, () => {
  BulkImportHomePage.navigateToBulkImportHomepageUsingUrl();
});

And(/^I perform import bulk operation with params "([^"]*)" "([^"]*)"$/, (importType, fileName) => {
  BulkImportHomePage.clickSubmitNewImport();
  BulkImportHomePage.selectSubImportType(importType);
  BulkImportHomePage.clickImportCSV();
  BulkImportHomePage.uploadFile(fileName);
});

And(/^I validate import information with params "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (importSubType, status, username, fileName) => {
  BulkImportHomePage.verifyImportInformation(importSubType, fileName, status, username);
});

And(/^Captured Bulk Import Batch Id$/, () => {
  BulkImportHomePage.captureBatchId();
  cy.wait(900);
});

And(/^Approve the Imported File$/, () => {
  BulkImportHomePage.approveImport();
  cy.wait(900);
});

And(/^I enter filter value as BatchId and Go to Details Screen$/, () => {
  BulkImportHomePage.enterBatchId();
  cy.wait(900);
});

Then(/^I search for transaction with batchId$/, () => {
  const tempVarBatchId = BulkImportHomePage.returnBatchId();
  SearchTransactionPage.setBatchId(tempVarBatchId);
  SearchTransactionPage.searchWithBatchId();
  SearchTransactionPage.clickOnSearch();
  cy.wait(5000);
});

And(/^I enter reseller info with parameters "([^"]*)" "([^"]*)"$/, (searchFeild, searchValue) => {
  cy.wait(5000);
  resellerGeneralInfo.enterSearchValue(searchFeild, searchValue);
  resellerGeneralInfo.clickSearch();
  cy.wait(2000);
});

Then(/^I click on edit reseller button$/, () => {
  cy.wait(2000);
  resellerGeneralInfo.clickEditReseller();
});

Then(/^I approve the autotransfer$/, () => {
  resellerGeneralInfo.approveAutoTransfer();
});

Then(/^I validate performed autotransfer available under search transaction page "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (id, msisdn, transactionType, product, amount, status, extCode, senderId, senderMSISDN) => {
  // eslint-disable-next-line max-len
  SearchTransactionPage.validateTransaction(id, msisdn, transactionType, product, amount, status, extCode, senderId, senderMSISDN);
});

Then(/^I reject the autotransfer$/, () => {
  resellerGeneralInfo.rejectAutoTransfer();
});

Then(/^in search transaction page I verify account transaction with commission "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (accountId, accountTypeId, amount, tag) => {
  SearchTransactionPage.scrollBottom();
  // eslint-disable-next-line max-len
  SearchTransactionPage.verifyAccountTxnRowWithoutCalculation(accountId, accountTypeId, amount, tag);
});

And(/^I click on Add new user button$/, () => {
  cy.wait(2000);
  UserInfo.clickAddNewUser();
  cy.wait(3000);
});

And(/^I add new user with following "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/,
  // eslint-disable-next-line camelcase
  (user_role, user_id, user_phone, user_email, user_password, count) => {
    cy.wait(1000);
    UserInfo.addNewUser(user_role, user_id, user_phone, user_email, user_password, count);
    cy.wait(1000);
  });

And(/^Click on Add range button$/, () => {
  CreateContractType.clickAddRange();
});

And(/^Enter another price entry with given details "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (rangeFrom2, rangeTo2,
  accountType1, accountType2,
  accountId1, accountId2,
  value1, value2,
  contractValue1, contractValue2,
  walletType1, walletType2,
  tag1, tag2) => {
  CreateContractType.enterRange2(rangeFrom2, rangeTo2);
  CreateContractType.enterAccountType2(accountType1, accountType2);
  CreateContractType.enterAccountID2(accountId1, accountId2);
  CreateContractType.enterValues2(value1, value2);
  CreateContractType.enterContractValue2(contractValue1, contractValue2);
  CreateContractType.selectWalletType2(walletType1, walletType2);
  CreateContractType.selectTags2(tag1, tag2);
});

And(/^I verify not authorized screen is visible$/, () => {
  CreateContractType.verifyNotAuthorized();
});

And(/^I click on toggle button and select the date$/, () => {
  CreateContractType.clickToggleButton();
  CreateContractType.selectDate();
});

