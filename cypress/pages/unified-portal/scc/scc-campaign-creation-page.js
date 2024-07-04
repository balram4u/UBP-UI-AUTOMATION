import URL_PATH from "../../../common/Route";

const CLICK_CREATE_CAMPAIGN = "//button/span[text()='Create Campaign']";
const SELECT_INSTANT_CAMPAIGN = "//div[@class='MuiListItemText-root']/span[text()='INSTANT CAMPAIGN']";
const ENTER_CAMPAIGN_NAME = "//input[@id='name-input-box']";
const ENTER_DESCRIPTION = "//input[@id='description-input-box']";
const SELECT_START_DATE_PICKER = "(//button[contains(@aria-label,'change date')])[1]";
const SELECT_CURRENT_DATE = "//button[contains(@class,'MuiPickersDay-daySelected')]";
const SELECT_END_DATE_PICKER = "(//button[contains(@aria-label,'change date')])[2]";
const NEXT_MONTH = "(//div[@class='MuiPickersCalendarHeader-switchHeader']//span[@class='MuiIconButton-label'])[2]";
const TO_DATE = "(//p[text()='30'])[1]";
const TO_DATE_FUTURE = "(//p[text()='30'])[2]";
const SELECT_CAMPAIGN_APPROVAL_WORKFLOW = "//select[@id='design-workflow-id-drop-down']";
const SELECT_EVENT_CHANNEL = "//input[@placeholder='Please choose']";
const CLICK_NEXT_BUTTON = "//button/span[text()='Save & Next']";
const ENTER_REGION = "//input[@placeholder='Region']";
const ENTER_RESELLER_TYPE = "//input[@placeholder='Reseller Type']";
const ENTER_COMMENTS = "//input[@id='target-audience-comment-input-box']";
const SELECT_COMMISSION_HEAD = "//select[@id='commission-head-drop-down']";
const SELECT_COST_CENTER = "//input[@placeholder='Cost Center']";
const ENTER_KPI_NAME = "//input[@id='kpi-name-input-box']";
const SELECT_KPI_EVENT = "//select[@id='event-type-dropdown']";
const SELECT_TARGET_CRITERIA = "//select[@id='criteria-type-dropdown']";
const ENTER_EVENT_TARGET = "//input[@id='event-target-input-box']";
const ADD_EVENT = "//button/span[text()='Add Event']";
const SELECT_COMMISSION_CRITERIA = "//select[@id='commission-criteria-dropdown']";
const SELECT_COMMISSION_DEFINATION = "//select[@id='commission-definition-criteria-dropdown']";
const ENTER_COMMISSION_AMOUNT = "//input[@id='commission-amount-retailer-input-box']";
const SELECT_CAMPAIGN_PARTICIPATION_SMS_TEMPLATE = "//select[@name='campaignParticipationConfirmation.smsTemplate']";
const SELECT_CAMPAIGN_PARTICIPATION_EMAIL_TEMPLATE = "//select[@name='campaignParticipationConfirmation.emailTemplate']";
const SELECT_CAMPAIGN_PAYOUT_SMS_TEMPLATE = "//select[@name='campaignPayoutDisbursment.smsTemplate']";
const SELECT_CAMPAIGN_PAYOUT_EMAIL_TEMPLATE = "//select[@name='campaignPayoutDisbursment.emailTemplate']";
const CLICK_SUBMIT_BUTTON = "//button/span[text()='Submit']";
const VALIDATE_CAMPAIGN_NAME = "(//p[text()='Campaign Name']/../following-sibling::div/p)[1]";
const VALIDATE_KPI_NAME = "(//p[text()='KPI Name']/../following-sibling::div/p)[1]";
const VALIDATE_EVENT_TARGET = "(//p[text()='Event Target']/../following-sibling::div/p)[1]";
const VALIDATE_COMMISSION_AMOUNT = "(//p[text()='Commission Amount']/../following-sibling::div/p)[1]";
const CLICK_BUSINESS_RULE = "//div/h6[text()='Business Rules']";
const CLICK_COMMISSION_FORMULA = "//div/h6[text()='Commission Formula']";
const VALIDATE_CAMPAIGN_CREATION_MESSAGE = "//div[@id='dialog-description']//div/h4";
const VALIDATE_CAMPAIGN_APPROVAL_MESSAGE = "//div[@id='dialog-description']//div/h2";
const CLICK_OKAY_BUTTON = "//button/span[text()='Okay']";
const BTN_FILTER = "//span[text()='Filters']";
const OPERATOR_SELECT = "//select[@id='columns-operators-select']";
const DDL_SEARCHCOLUMN = "//select[@id='columns-filter-select']";
const TXT_SEARCHVALUE = "//label[text()='Value']/following-sibling::div/input";
const VERIFY_DATA_ON_TABLE = "//div[@data-rowindex='0' and @data-field='name'][1]";
const APPROVE_CAMPAIGN = "(//div[@role='group']//button)[1]";
const REJECT_CAMPAIGN = "(//div[@role='group']//button)[2]";
const ENTER_REASON = "//textarea[@name='reason']";
const CLICK_APPROVE_BUTTON = "//button/span[text()='Approve']";
const CLICK_REJECT_BUTTON = "//button/span[text()='Reject']";
const ENTER_MSISDN = "//input[@placeholder='Add Reseller by MSISDN']";
const CLICK_ADD = "//button/span[text()='Add']";
const VIEW_ACTION = "//a[contains(@href,'/home/campaign/view')]";
const SCROLLABLE_AREA = "div.MuiDataGrid-window";
const CLICK_CREATE_NEW_POLICY_MAPPING = "//a/span[contains(text(),'Create New Policy Mapping')]";
const SELECT_POLICY = "//select[contains(@class,'MuiSelect-select MuiInputBase-input')]";
const ENTER_ACTOR_TYPE = "(//input[contains(@placeholder,'Search Actor Type')])[2]";
const SELECT_ACTOR_TYPE = "(//button[@aria-label='move selected left'])[1]";
const ENTER_ROLE_TYPE = "(//input[contains(@placeholder,'Search Role Type')])[2]";
const SELECT_ROLE_TYPE = "(//button[@aria-label='move selected left'])[2]";
const CLICK_SAVE_BUTTON = "//button/span[text()='save']";
const CLICK_POLICY_SAVE_BUTTON = "//button/span[text()='Save']";
const CLICK_UPDATE_BUTTON = "//button/span[text()='Update']";
const CLICK_NEW_POLICY = "//a/span[text()='Create new policy']";
const ENTER_POLICY_NAME = "//input[contains(@class,'MuiInputBase-input MuiInput-input MuiInputBase-inputMarginDense MuiInput-inputMarginDense')]";
const ENTER_POLICY_DESCRIPTION = "//textarea[contains(@name,'description')]";
const SELECT_MODULE_TYPE = "(//button[@aria-label='move selected left'])[1]";
const SELECT_SUB_MOUDLE_TYPE = "(//button[@aria-label='move selected left'])[2]";
const CLOSE_DATE_PICKER = "//div[@class='MuiPickersClock-squareMask']";
const EDIT_POLICY = "(//div[@role='group']//a[contains(@href,'/home/settings/access-management/policy' ) and @role='button'])[1]";
const PREVIEW_BUTTON = "//button/span[contains(text(),'Preview')]";
const FILL_POLICY_VALUE_FILTER = "//input[@placeholder='value']";
const CLICK_CLOSE = "//button/span[text()='Close']";
const VIEW_POLICY = "(//div[@role='group']//button)[1]";
const SELECT_ARREAR_CAMPAIGN = "//div[@class='MuiListItemText-root']/span[text()='ARREAR BASED']";
const PAST_DATE = "//p[text()='15']";
const SELECT_PAYOUT_APPROVAL = "//select[@id='payout-approval-drop-down']";
const SELECT_PAYOUT_WORKFLOW = "//select[@id='payoutWorkflow-drop-down']";
const CLICK_ADD_KPI = "//button/span[text()='Add KPI']";
const PREVIOUS_MONTH = "(//div[@class='MuiPickersCalendarHeader-switchHeader']//span[@class='MuiIconButton-label'])[1]";
const ENTER_KPI_NAME_2 = "(//input[@id='kpi-name-input-box'])[2]";
const SELECT_KPI_EVENT_2 = "(//select[@id='event-type-dropdown'])[2]";
const SELECT_TARGET_CRITERIA_2 = "(//select[@id='criteria-type-dropdown'])[2]";
const ENTER_EVENT_TARGET_2 = "(//input[@id='event-target-input-box'])[2]";
const CLICK_CANCEL_BUTTON = "//button/span[text()='Cancel']";
const CLICK_YES_BUTTON = "//button/span[text()='Yes']";
const CLICK_EDIT_LINK = "(//a[contains(@href,'/home/campaign/edit')])[1]";
const VERIFY_CAMPAIGN_STATUS = "//div[@data-rowindex='0' and @data-field='status'][1]";
const SELECT_PAYOUT_END_OF_CAMPAIGN = "//select[@id='isEndOfCampaign-drop-down']";
const CLICK_VIEW_LINK = "(//a[contains(@href,'/home/campaign/view')])[1]";
const VIEW_CAMPAIGN_NAME = "//p[text()='Campaign Name']/following-sibling::div/p";
const VIEW_CAMPAIGN_DESCRIPTION = "//p[text()='Description']/following-sibling::div/p";
const VIEW_CAMPAIGN_APPROVAL_WORKFLOW = "//p[text()='Campaign Design Approval Workflow']/following-sibling::div/p";
const VIEW_EVENT_CHANNEL = "//p[text()='Events Channel']/following-sibling::div/p";
const VIEW_REGION = "//p[text()='Region']/following-sibling::div/p";
const VIEW_RESELLER_TYPE = "//p[text()='Reseller Types']/following-sibling::div/p";
const VIEW_COMMISSION_HEAD = "//p[text()='Commission Head']/following-sibling::div/p";
const VIEW_COST_CENTER = "//p[text()='Cost Center']/following-sibling::div/p";
const VIEW_KPI_NAME = "//p[text()='KPI Name']/following-sibling::div/p";
const VIEW_KPI_EVENT = "//p[text()='event']/following-sibling::div/p";
const VIEW_TAEGET_CRITERIA = "//p[text()='Target criteria']/following-sibling::div/p";
const VIEW_EVENT_TARGET = "//p[text()='Event Target']/following-sibling::div/p";
const VIEW_COMMISSION_CRITERIA = "//p[text()='Commission Criteria']/following-sibling::div/p";
const VIEW_COMMISSION_DEFINATION = "//p[text()='Commission Definition Criteria']/following-sibling::div/p";
const VIEW_COMMISSION_AMOUNT = "//p[text()='Commission Amount']/following-sibling::div/p";
const VIEW_CAMPAIGN_PARTICIPATION_EMAIL_TEMPLATE = "(//p[text()='CAMPAIGN_PARTICIPATION_CONFIRMATION'])[2]/following-sibling::div/p";
const VIEW_CAMPAIGN_PARTICIPATION_SMS_TEMPLATE = "(//p[text()='CAMPAIGN_PARTICIPATION_CONFIRMATION'])[1]/following-sibling::div/p";
const VIEW_CAMPAIGN_PAYOUT_SMS_TEMPLATE = "(//p[text()='CAMPAIGN_PAYOUT_DISBURSEMENT'])[1]/following-sibling::div/p";
const VIEW_CAMPAIGN_PAYOUT_EMAIL_TEMPLATE = "(//p[text()='CAMPAIGN_PAYOUT_DISBURSEMENT'])[2]/following-sibling::div/p";
const HOLD_BUTTON = "//div[@aria-label='group action buttons']/button[@tabindex='0']";
const CLONE_BUTTON = "//a[contains(@href,'/home/campaign/create') and @tabindex='0']";
const SELECT_GROUP_BY_STATUS = "//select[@name='status']";
const HEADER = "(//main//p)[1]";
const VIEW_ACTION_VALIDATION = "(//a[contains(@href,'/home/campaign/view')])[1]";

class SccCampaignPage {
  static clickOnCampaignsUsingUrl() {
    cy.log("Navigate to campaigns page");
    cy.visit(URL_PATH.compaigns);
    cy.wait(3000);
  }

  static clickCreateCampaign() {
    cy.log('click create campaign button');
    cy.xpath(CLICK_CREATE_CAMPAIGN).click();
    cy.wait(1000);
  }

  static selectInstantCampaign() {
    cy.log('selecting instant campaign');
    cy.xpath(SELECT_INSTANT_CAMPAIGN).click();
    cy.wait(1000);
  }

  static enterCampaignName(campaignName) {
    cy.log('enter campaign name');
    cy.xpath(ENTER_CAMPAIGN_NAME).clear().type(campaignName);
  }

  static enterDescription(description) {
    cy.log('enter description');
    cy.xpath(ENTER_DESCRIPTION).clear().type(description);
  }

  static selectStartDate() {
    cy.log('select start date');
    cy.xpath(SELECT_START_DATE_PICKER).click();
    cy.xpath(SELECT_CURRENT_DATE).click();
  }

  static selectEndDate() {
    cy.log('select end date');
    cy.xpath(SELECT_END_DATE_PICKER).click();
    cy.wait(1000);
    cy.xpath(NEXT_MONTH).click();
    cy.wait(1000);
    cy.xpath(TO_DATE).click();
    cy.wait(1000);
  }

  static selectCampaignApprovalWorkflow(campaignApprovalWorkflow) {
    cy.log('select campaign approval workflow');
    cy.xpath(SELECT_CAMPAIGN_APPROVAL_WORKFLOW).select(campaignApprovalWorkflow);
  }

  static selectEventChannel(eventChannel) {
    cy.log('select event channel');
    cy.xpath(SELECT_EVENT_CHANNEL).type(eventChannel);
    cy.contains(eventChannel).click();
  }

  static clickNextButton() {
    cy.log('click on next button');
    cy.xpath(CLICK_NEXT_BUTTON).click();
  }

  static clickSubmitButton() {
    cy.log('click on submit button');
    cy.xpath(CLICK_SUBMIT_BUTTON).click();
  }

  static selectRegion(region) {
    cy.log('select region');
    cy.xpath(ENTER_REGION).type(region);
    cy.contains(region).click();
  }

  static selectResellerType(resellerType) {
    cy.log('select reseller type');
    cy.xpath(ENTER_RESELLER_TYPE).type(resellerType);
    cy.contains(resellerType).click();
  }

  static enterComments(comments) {
    cy.log('enter comments');
    if (comments !== "") {
      cy.xpath(ENTER_COMMENTS).type(comments);
    }
  }

  static selectCommissionHead(commissionHead) {
    cy.log('select commission head');
    cy.xpath(SELECT_COMMISSION_HEAD).select(commissionHead);
    cy.wait(1000);
  }

  static selectCostCenter(costCenter) {
    cy.log('select cost center');
    cy.xpath(SELECT_COST_CENTER).type(costCenter);
    cy.contains(costCenter).click({ force: true });
    cy.wait(1000);
  }

  static enterKPIName(kpiName) {
    cy.log('enter kpi name');
    cy.xpath(ENTER_KPI_NAME).clear().type(kpiName);
  }

  static selectKPIEvent(kpiEvent) {
    cy.log('select KPI event');
    cy.xpath(SELECT_KPI_EVENT).select(kpiEvent);
  }

  static selectTargetCriteria(targetCriteria) {
    cy.log('select target criteria');
    cy.xpath(SELECT_TARGET_CRITERIA).select(targetCriteria);
  }

  static enterEventTarget(eventTarget) {
    cy.log('enter kpi name');
    cy.xpath(ENTER_EVENT_TARGET).clear().type(eventTarget);
  }

  static clickAddEvent() {
    cy.log('click add event');
    cy.xpath(ADD_EVENT).click();
  }

  static selectCommissionCriteria(selectCommissionCriteria) {
    cy.log('select commission criteria');
    cy.xpath(SELECT_COMMISSION_CRITERIA).should('be.visible').select(selectCommissionCriteria);
  }

  static selectCommissionDefination(commissionDefination) {
    cy.log('select commission defination');
    cy.xpath(SELECT_COMMISSION_DEFINATION).should('be.visible').select(commissionDefination);
  }

  static enterCommissionAmount(commissionAmount) {
    cy.log('enter commission amount');
    cy.xpath(ENTER_COMMISSION_AMOUNT).clear().type(commissionAmount);
  }

  static selectCampaignParticipationSmsTemplate(campaignParticipationSmsTemplate) {
    cy.log('select campaign participation sms template');
    cy.xpath(SELECT_CAMPAIGN_PARTICIPATION_SMS_TEMPLATE).select(campaignParticipationSmsTemplate);
  }

  static selectCampaignParticipationEmailTemplate(campaignParticipationEmailTemplate) {
    cy.log('select campaign participation email template');
    cy.xpath(SELECT_CAMPAIGN_PARTICIPATION_EMAIL_TEMPLATE).select(campaignParticipationEmailTemplate);
  }

  static selectCampaignPayoutSmsTemplate(campaignPayoutSmsTemplate) {
    cy.log('select campaign payout sms template');
    cy.xpath(SELECT_CAMPAIGN_PAYOUT_SMS_TEMPLATE).select(campaignPayoutSmsTemplate);
  }

  static selectCampaignPayoutEmailTemplate(campaignPayoutEmailTemplate) {
    cy.log('select campaign payout email template');
    cy.xpath(SELECT_CAMPAIGN_PAYOUT_EMAIL_TEMPLATE).select(campaignPayoutEmailTemplate);
  }

  static validateCampaignName(campaignName) {
    cy.log('validate campaign name');
    cy.xpath(VALIDATE_CAMPAIGN_NAME).then((name) => {
      const text = name.text();
      expect(text).eq(campaignName);
    });
  }

  static validateKPI(kpiName) {
    cy.log('validate campaign name');
    cy.xpath(VALIDATE_KPI_NAME).then((name) => {
      const text = name.text();
      expect(text).eq(kpiName);
    });
  }

  static validateEventTarget(eventTarget) {
    cy.log('validate campaign name');
    cy.xpath(VALIDATE_EVENT_TARGET).then((target) => {
      const text = target.text();
      expect(text).eq(eventTarget);
    });
  }

  static validateCommissionAmount(commissionAmount) {
    cy.log('validate campaign name');
    cy.xpath(VALIDATE_COMMISSION_AMOUNT).then((amount) => {
      const text = amount.text();
      expect(text).eq(commissionAmount);
    });
  }

  static clickBusinessRule() {
    cy.log('click business rule');
    cy.xpath(CLICK_BUSINESS_RULE).click();
  }

  static clickCommissionFormula() {
    cy.log('click commission formula');
    cy.xpath(CLICK_COMMISSION_FORMULA).click();
  }

  static validateCampaignCreationMessage(message) {
    cy.log('validate campaign creation message');
    cy.xpath(VALIDATE_CAMPAIGN_CREATION_MESSAGE).then((text1) => {
      const text = text1.text();
      expect(text).eq(message);
    });
  }

  static clickOkayButton() {
    cy.log('click okay button');
    cy.xpath(CLICK_OKAY_BUTTON).click();
    cy.wait(1000);
  }

  static clickOnCampaignDesignUsingUrl() {
    cy.log("Navigate to campaigns design");
    cy.visit(URL_PATH.campaignDesign);
    cy.wait(3000);
  }

  static clickOnFilter() {
    cy.log('click on filters');
    cy.xpath(BTN_FILTER).click();
    cy.wait(1000);
  }

  static selectSearchColumn(columnName) {
    cy.log('search column');
    cy.xpath(DDL_SEARCHCOLUMN).select(columnName);
    cy.wait(1000);
  }

  static fillSearchValue(value) {
    cy.log('fill value');
    cy.xpath(TXT_SEARCHVALUE).clear().type(value);
    cy.wait(2000);
  }

  static selectOperator(value) {
    cy.log('Select operator');
    cy.log(value);
    cy.xpath(OPERATOR_SELECT).select(value);
    cy.wait(1000);
  }

  static verifyDataInTable(name) {
    cy.xpath(VERIFY_DATA_ON_TABLE).then((table) => {
      const text = table.text();
      expect(text).equal(name);
    });
  }

  static approveCampaign() {
    cy.log('approve the campaign');
    cy.xpath(APPROVE_CAMPAIGN).click();
    cy.wait(1000);
    cy.xpath(ENTER_REASON).clear().type('testing');
    cy.wait(1000);
    cy.xpath(CLICK_APPROVE_BUTTON).click();
  }

  static validateCampaignApprovalMessage(message) {
    cy.log('validate campaign creation message');
    cy.xpath(VALIDATE_CAMPAIGN_APPROVAL_MESSAGE).then((text1) => {
      const text = text1.text();
      expect(text).eq(message);
    });
  }

  static enterMSISDN(msisdn) {
    cy.log('enter msisdn');
    if (msisdn !== "") {
      cy.xpath(ENTER_MSISDN).clear().type(msisdn);
      cy.wait(1000);
      cy.xpath(CLICK_ADD).click();
    }
  }

  static viewCampaign() {
    cy.log('click on view action');
    cy.xpath(VIEW_ACTION).click();
    cy.wait(1000);
  }

  static validateResellerId(resellerId) {
    cy.log('validate reseller id');
    cy.xpath(`(//div[@data-value='${resellerId}' and @data-field='resellerId'])[1]`).should('be.visible');
  }

  static validateKPIName(kpiName) {
    cy.log('validate kpi name');
    cy.xpath(`(//div[@data-value='${kpiName}' and @data-field='kpiName'])[1]`).should('be.visible');
  }

  static validateGrossCommission(grossCommission) {
    cy.log('validate gross commission');
    cy.xpath(`(//div[@data-value='${grossCommission}' and @data-field='grossPayoutAmount'])[1]`).should('be.visible');
  }

  static validateNetCommission(netCommission) {
    cy.log('validate net commission');
    cy.xpath(`(//div[@data-value='${netCommission}' and @data-field='netPayoutAmount'])[1]`).should('be.visible');
  }

  static validateEligibleForPayout(eligibleForPayout) {
    cy.log('validate eligible for payout');
    cy.xpath(`(//div[@data-value='${eligibleForPayout}' and @data-field='payoutEligibilityStatus'])[1]`).should('be.visible');
  }

  static validatePaymentStatus(paymentStatus) {
    cy.log('validate payment status');
    cy.xpath(`//div[@class='MuiDataGrid-colCellTitle' and text()='Payment Status']/ancestor::div[@class='MuiDataGrid-main']/descendant::p[text()='${paymentStatus}']`).should('include.text', paymentStatus);
  }

  static scrollRight() {
    cy.log('scroll right');
    cy.wait(1000);
    cy.get(SCROLLABLE_AREA).scrollTo('right');
    cy.wait(1000);
  }

  static scrollToDown() {
    cy.log('Scroll to down');
    cy.scrollTo(0, 2000);
  }

  static rejectCampaign() {
    cy.log('approve the campaign');
    cy.xpath(REJECT_CAMPAIGN).click();
    cy.wait(1000);
    cy.xpath(ENTER_REASON).clear().type('testing');
    cy.wait(1000);
    cy.xpath(CLICK_REJECT_BUTTON).click();
    cy.wait(1000);
  }

  static validateCampaignRejectionMessage(message) {
    cy.log('validate campaign rejection message');
    cy.xpath(VALIDATE_CAMPAIGN_APPROVAL_MESSAGE).then((text1) => {
      const text = text1.text();
      expect(text).eq(message);
    });
  }

  static rejectedCampaignStatus(status) {
    cy.log('validate reject campaign status');
    cy.xpath(`(//div[@data-field='status']//span[text()='${status}'])[1]`).should('be.visible');
  }

  static selectFutureStartDate() {
    cy.log('select future start date');
    cy.xpath(SELECT_START_DATE_PICKER).click();
    cy.wait(1000);
    cy.xpath(NEXT_MONTH).click();
    cy.wait(1000);
    cy.xpath(TO_DATE).click();
  }

  static selectFutureEndDate() {
    cy.log('select future end date');
    cy.xpath(SELECT_END_DATE_PICKER).click();
    cy.wait(1000);
    cy.xpath(NEXT_MONTH).click();
    cy.wait(1000);
    cy.xpath(NEXT_MONTH).click();
    cy.wait(1000);
    cy.xpath(TO_DATE_FUTURE).click();
    cy.wait(1000);
  }

  static clickNewPolicyMapping() {
    cy.log('click create new policy mapping button');
    cy.xpath(CLICK_CREATE_NEW_POLICY_MAPPING).click();
  }

  static selectPolicy(policy) {
    cy.log('select policy');
    cy.xpath(SELECT_POLICY).select(policy);
  }

  static selectActorType(actorType) {
    cy.log('select actor type');
    cy.xpath(ENTER_ACTOR_TYPE).clear().type(actorType);
    cy.xpath(`//input[@aria-labelledby='${actorType}']`).click();
    cy.xpath(SELECT_ACTOR_TYPE).click();
  }

  static selectRoleType(roleType) {
    cy.log('select role type');
    cy.xpath(ENTER_ROLE_TYPE).clear().type(roleType);
    cy.xpath(`//input[@aria-labelledby='${roleType}']`).click();
    cy.xpath(SELECT_ROLE_TYPE).click();
  }

  static clickSaveButton() {
    cy.log('click save button');
    cy.xpath(CLICK_SAVE_BUTTON).click();
  }

  static clickUpdateButton() {
    cy.log('click update button');
    cy.xpath(CLICK_UPDATE_BUTTON).click();
  }

  static clickOnPolicyMappingUsingUrl() {
    cy.log("Navigate to policy mapping page");
    cy.visit(URL_PATH.policyMapping);
    cy.wait(3000);
  }

  static clickOnPolicyUsingUrl() {
    cy.log("Navigate to policy page");
    cy.visit(URL_PATH.policy);
    cy.wait(3000);
  }

  static clickNewPolicy() {
    cy.log('click create new policy mapping button');
    cy.xpath(CLICK_NEW_POLICY).click();
  }

  static enterPolicyName(policyName) {
    cy.log('click create new policy mapping button');
    cy.xpath(ENTER_POLICY_NAME).clear().type(policyName);
  }

  static enterPolicyDescription(description) {
    cy.log('enter description');
    cy.xpath(ENTER_POLICY_DESCRIPTION).clear().type(description);
  }

  static selectModule(Module) {
    cy.log('select module');
    cy.xpath(`//input[contains(@aria-labelledby,'${Module}')]`).click();
    cy.xpath(SELECT_MODULE_TYPE).click();
  }

  static selectSubOption(subOption) {
    cy.log('select module');
    cy.xpath(`//input[contains(@aria-labelledby,'${subOption}')]`).click();
    cy.xpath(SELECT_SUB_MOUDLE_TYPE).click();
  }

  static clickPolicySaveButton() {
    cy.log('click save button');
    cy.xpath(CLICK_POLICY_SAVE_BUTTON).click();
  }

  static clickOutSide() {
    cy.log('click outside to close popup');
    cy.xpath(CLOSE_DATE_PICKER).click();
    cy.xpath(CLOSE_DATE_PICKER).click();
  }

  static clickEditPolicy() {
    cy.log('click edit policy link');
    cy.xpath(EDIT_POLICY).click();
  }

  static clickPolicyPreviewButton() {
    cy.log('click policy preview button');
    cy.xpath(PREVIEW_BUTTON).click();
  }

  static validatePolicyNameInPreview(name) {
    cy.log('validate policy name');
    cy.xpath(`//div/p[contains(text(),'${name}')]`).should('be.visible');
  }

  static validateDescriptionInPreview(description) {
    cy.log('validate policy description');
    cy.xpath(`//div/p[contains(text(),'${description}')]`).should('be.visible');
  }

  static validateModulesInPreview() {
    cy.log('validate modules');
    cy.xpath(`(//div/p[text()='ACCESS'])[1]`).should('be.visible');
  }

  static validateSubOptionInPreviw() {
    cy.log('validate sub options');
    cy.xpath(`(//div/p[contains(text(),'ACCESS')])[3]`).should('be.visible');
  }

  static validateChannelsInPreview() {
    cy.log('validate channels');
    cy.xpath(`(//div/p[text()='ALL'])[1]`).should('be.visible');
  }

  static fillPolicyValue(name) {
    cy.log('fill policy value');
    cy.xpath(FILL_POLICY_VALUE_FILTER).clear().type(name);
  }

  static clickClose() {
    cy.log('click close button');
    cy.xpath(CLICK_CLOSE).click();
  }

  static clickViewPolicy() {
    cy.log('click view link');
    cy.xpath(VIEW_POLICY).click();
  }

  static validatePolicyNameInView(name) {
    cy.log('validate policy name in view action');
    cy.xpath(`(//div[text()='${name}'])[2]`).should('be.visible');
  }

  static validatePolicyDescriptionInView(description) {
    cy.log('validate policy description in view action');
    cy.xpath(`//div/p[text()='${description}']`).should('be.visible');
  }

  static validateModuleInView() {
    cy.log('validate modules');
    cy.xpath(`//div/span[text()='ACCESS']`).should('be.visible');
    cy.xpath(`//div/span[text()='KYC']`).should('be.visible');
    cy.xpath(`//div/span[text()='LOGISTICS']`).should('be.visible');
    cy.xpath(`//div/span[text()='NOTIFICATION']`).should('be.visible');
  }

  static selectArrearCampaign() {
    cy.log('selecting instant campaign');
    cy.xpath(SELECT_ARREAR_CAMPAIGN).click();
    cy.wait(1000);
  }

  static selectPastStartDate() {
    cy.log('select start date');
    cy.xpath(SELECT_START_DATE_PICKER).click();
    cy.wait(1000);
    cy.xpath(PREVIOUS_MONTH).click();
    cy.wait(1000);
    cy.xpath(PAST_DATE).click();
    cy.wait(1000);
  }

  static selectPastEndDate() {
    cy.log('select end date');
    cy.xpath(SELECT_END_DATE_PICKER).click();
    cy.wait(1000);
    cy.xpath(PREVIOUS_MONTH).click();
    cy.wait(1000);
    cy.xpath(PAST_DATE).click();
    cy.wait(1000);
  }

  static selectPayoutApproval(value) {
    cy.log('select payout approval');
    cy.xpath(SELECT_PAYOUT_APPROVAL).type(value);
    cy.contains(value).click({ force: true });
    cy.wait(1000);
  }

  static selectCampaignPayoutWorkflow(campaignApprovalWorkflow) {
    cy.log('select campaign approval workflow');
    cy.xpath(SELECT_PAYOUT_WORKFLOW).select(campaignApprovalWorkflow);
  }

  static clickAddKPI() {
    cy.log('click add KPI');
    cy.xpath(CLICK_ADD_KPI).click();
  }

  static enterKPIName2(kpiName) {
    cy.log('enter kpi name');
    cy.xpath(ENTER_KPI_NAME_2).clear().type(kpiName);
  }

  static selectKPIEvent2(kpiEvent) {
    cy.log('select KPI event');
    cy.xpath(SELECT_KPI_EVENT_2).select(kpiEvent);
  }

  static selectTargetCriteria2(targetCriteria) {
    cy.log('select target criteria');
    cy.xpath(SELECT_TARGET_CRITERIA_2).select(targetCriteria);
  }

  static enterEventTarget2(eventTarget) {
    cy.log('enter kpi name');
    cy.xpath(ENTER_EVENT_TARGET_2).clear().type(eventTarget);
  }

  static clickCancelButton() {
    cy.log('click on next button');
    cy.xpath(CLICK_CANCEL_BUTTON).click();
    cy.wait(1000);
    cy.xpath(CLICK_YES_BUTTON).click();
    cy.wait(1000);
  }

  static clickEditLink() {
    cy.log('click edit link');
    cy.xpath(CLICK_EDIT_LINK).click();
    cy.wait(1000);
  }

  static validateCampaignStatus(status) {
    cy.log('validate campaign status');
    cy.xpath(VERIFY_CAMPAIGN_STATUS).then((table) => {
      const text = table.text();
      expect(text).equal(status);
    });
  }

  static selectPayoutEndOfCampaign(text) {
    cy.log('select payout end of the campaign');
    cy.xpath(SELECT_PAYOUT_END_OF_CAMPAIGN).select(text);
    cy.wait(1000);
  }

  static selectCurrentEndDate() {
    cy.log('select start date');
    cy.xpath(SELECT_END_DATE_PICKER).click();
    cy.xpath(SELECT_CURRENT_DATE).click();
  }

  static clickViewLink() {
    cy.log('click view link');
    cy.xpath(CLICK_VIEW_LINK).click();
    cy.wait(1000);
  }

  static verifyCampaignName(campaignName) {
    cy.log('verify Campaign Name');
    cy.xpath(VIEW_CAMPAIGN_NAME).should('have.text', campaignName);
  }

  static verifyCampaignDescription(description) {
    cy.log('verify Campaign Description');
    cy.xpath(VIEW_CAMPAIGN_DESCRIPTION).should('have.text', description);
  }

  static verifyCampaignApprovalWorkflow(campaignapprovalworkflow) {
    cy.log('verify Campaign Approval Workflow');
    cy.xpath(VIEW_CAMPAIGN_APPROVAL_WORKFLOW).should('have.text', campaignapprovalworkflow);
  }

  static verifyEventChannel(eventchannel) {
    cy.log('verify Event Channel');
    cy.xpath(VIEW_EVENT_CHANNEL).should('have.text', eventchannel);
  }

  static verifyRegion(region) {
    cy.log('verify region');
    cy.xpath(VIEW_REGION).should('have.text', region);
  }

  static verifyResellerType(resellertype) {
    cy.log('verify Reseller Type');
    cy.xpath(VIEW_RESELLER_TYPE).should('have.text', resellertype);
  }

  static verifyCommissionHead(commissionhead) {
    cy.log('verify Commission Head');
    cy.xpath(VIEW_COMMISSION_HEAD).should('have.text', commissionhead);
  }

  static verifyCostCenter(costcenter) {
    cy.log('verify Cost Center');
    cy.xpath(VIEW_COST_CENTER).should('have.text', costcenter);
  }

  static verifyKpiName(kpiname) {
    cy.log('verify Kpi Name');
    cy.xpath(VIEW_KPI_NAME).should('have.text', kpiname);
  }

  static verifyKpiEvent(kpievent) {
    cy.log('verify Kpi Event');
    cy.xpath(VIEW_KPI_EVENT).should('have.text', kpievent);
  }

  static verifyTargetCriteria(targetcriteria) {
    cy.log('verify Target Criteria');
    cy.xpath(VIEW_TAEGET_CRITERIA).should('have.text', targetcriteria);
  }

  static verifyEventTarget(eventtarget) {
    cy.log('verify Event Target(');
    cy.xpath(VIEW_EVENT_TARGET).should('have.text', eventtarget);
  }

  static verifyCommissionCriteria(commissioncriteria) {
    cy.log('verify Commission Criteria');
    cy.xpath(VIEW_COMMISSION_CRITERIA).should('have.text', commissioncriteria);
  }

  static verifyCommissionDefination(commissiondefination) {
    cy.log('verify Commission Defination');
    cy.xpath(VIEW_COMMISSION_DEFINATION).should('have.text', commissiondefination);
  }

  static verifyCommissionAmount(commissionamount) {
    cy.log('verify Commission Amount');
    cy.xpath(VIEW_COMMISSION_AMOUNT).should('have.text', commissionamount);
  }

  static verifyCampaignParticipantSmsTemplate(campaignparticipantsmstemplate) {
    cy.log('verify Campaign Participant Sms Template');
    cy.xpath(VIEW_CAMPAIGN_PARTICIPATION_SMS_TEMPLATE).should('have.text', campaignparticipantsmstemplate);
  }

  static verifyCampaignParticipantEmailTemplate(campaignparticipantemailtemplate) {
    cy.log('verify Campaign Participant Email Template');
    cy.xpath(VIEW_CAMPAIGN_PARTICIPATION_EMAIL_TEMPLATE).should('have.text', campaignparticipantemailtemplate);
  }

  static verifyCampaignPayoutEmailTemplate(campaignpayoutemailtemplate) {
    cy.log('verify Campaign Payout Email Template');
    cy.xpath(VIEW_CAMPAIGN_PAYOUT_EMAIL_TEMPLATE).should('have.text', campaignpayoutemailtemplate);
  }

  static verifyCampaignPayoutSmsTemplate(campaignpayoutsmstemplate) {
    cy.log('verify Campaign Payout sms Template');
    cy.xpath(VIEW_CAMPAIGN_PAYOUT_SMS_TEMPLATE).should('have.text', campaignpayoutsmstemplate);
  }

  static validateHoldShouldNotBeVisible() {
    cy.log('hold should not be visible');
    cy.xpath(HOLD_BUTTON).should('not.exist');
  }

  static validateCloneShouldNotBeVisible() {
    cy.log('clone should not be visible');
    cy.xpath(CLONE_BUTTON).should('not.exist');
  }

  static selectStatus(status) {
    cy.log('select status');
    cy.xpath(SELECT_GROUP_BY_STATUS).select(status);
  }

  static validateViewLink() {
    cy.log('click on view action');
    cy.xpath(VIEW_ACTION_VALIDATION).click();
    cy.wait(2000);
    cy.url().should('contains', '/home/campaign/view/');
    cy.xpath(HEADER).should('have.text', 'This page allows you to view campaign detail');
  }
}

export default SccCampaignPage;
