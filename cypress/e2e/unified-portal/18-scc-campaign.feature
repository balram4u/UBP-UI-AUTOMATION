Feature: 18-SCC Feature

    As a user on the unified portal Application
    I want to verify campaign relatead cases

    Background: Enter UserId and Password and perform Login
        Given I am on the unified portal login page

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30504: Reseller Role View
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Reseller Role Page
        And Reseller Role created should be visible inside table <ROLE_NAME>
        When I perform View reseller <ROLE_NAME>
        Then I am able to validate following parameters <ROLE_NAME> <IMPORT_ID> <ADDRESS_LOCK> <USER_ID> <DESCRIPTION>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ROLE_NAME | IMPORT_ID | ADDRESS_LOCK | USER_ID | DESCRIPTION |
            | "OPERATOR"  | "2023"   | "webuser" | "webuser" | ""           | ""      | ""          |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30503: Reseller Role Edit
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Reseller Role Page
        And Reseller Role created should be visible inside table <ROLE_NAME>
        When I perform Edit reseller role having following parameters <ROLE_NAME> <NEW_ROLE_NAME> <PASSWORD_POLICY> <ADDRESS_LOCK> <USER_ID> <DESCRIPTION>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ROLE_NAME | NEW_ROLE_NAME | PASSWORD_POLICY | ADDRESS_LOCK | USER_ID | DESCRIPTION       |
            | "OPERATOR"  | "2023"   | "webuser" | "Adhoc_Role"  | "Default"       | "any"        | "*0-9"  | "Adhoc user role" |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30502: Reseller Role creation
        Given Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Reseller Role Page
        When I perform Create Reseller Role having following parameters <ROLE_NAME> <IMPORT_ID> <PASSWORD_POLICY> <ADDRESS_LOCK> <USER_ID> <DESCRIPTION>
        Then I am able to validate proper message <MESSAGE>
        And Reseller Role created should be visible inside table <ROLE_NAME>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ROLE_NAME     | IMPORT_ID     | PASSWORD_POLICY     | ADDRESS_LOCK | USER_ID | DESCRIPTION       | MESSAGE                      |
            | "OPERATOR"  | "2023"   | "Adhoc_Role1" | "Adhoc-Role1" | "Reseller web user" | ""           | ""      | "Adhoc user role" | "Role created successfully." |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30368,TC-30367 ADHOC USER creation from KYC
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Register KYC page
        When I enter personal information and click next button <RESELLER_TYPE> <USER_NAME> <FIRST_NAME> <LAST_NAME> <MOBILE_NO> <EMAIL>
        And I enter user details and click submit button <ROLE_ID>
        Then I am able to validate proper message <MESSAGE>
        And I navigate to the Resellers Page
        Then I validate created KYC available on resellers page <SEARCH_FIELD> <FIRST_NAME> <STATUS>
        And I click on view reseller action
        Then I verify reseller details with parameters <RESELLER_PATH> <USER_NAME> <FIRST_NAME> <RESELLER_TYPE_ID> <RESELLER_TYPE_NAME> <MOBILE_NO> <STATUS> <USER_ID> <PASSWORD> <VIEW_ROLE_ID> <ROLE_NAME>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | RESELLER_TYPE | USER_NAME           | FIRST_NAME          | LAST_NAME           | MOBILE_NO      | EMAIL            | ROLE_ID      | MESSAGE                         | SEARCH_FIELD | STATUS   | RESELLER_PATH                | RESELLER_TYPE_ID | RESELLER_TYPE_NAME | USER_ID             | VIEW_ROLE_ID | ROLE_NAME    |
            | "OPERATOR"  | "2023"   | "AdhocUser"   | "SCC_Adhoc_User_04" | "SCC_Adhoc_User_04" | "SCC_Adhoc_User_04" | "467000033225" | "demo@gmail.com" | "Adhoc_Role" | "Reseller created successfully" | "resellerId" | "Active" | "Operator/SCC_Adhoc_User_04" | "AdhocUser"      | "AdhocUser"        | "SCC_Adhoc_User_04" | "Adhoc_Role" | "Adhoc_Role" |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30501,TC-30496 User group  status as active.
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Create Group Page
        When I perform Create Group having following parameters <GROUP_NAME> <STATUS> <DESCRIPTION> <MINIMUM_NUMBERS> <MAXIMUM_NUMBERS> <YEAR>
        Then I am able to validate proper message <MESSAGE>
        And Group created should be visible inside table <GROUP_NAME>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | GROUP_NAME     | STATUS   | DESCRIPTION    | MINIMUM_NUMBERS | MAXIMUM_NUMBERS | MESSAGE                | YEAR   |
            | "Operator"  | "2023"   | "SCC_GROUP_02" | "Active" | "SCC_GROUP_02" | "1"             | "2"             | "Successful operation" | "2026" |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30497,TC-30498 Edit a User Group
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Create Group Page
        And I am able to search existing Group by Group Name<GROUP_NAME>
        When I perform Edit Group having following parameters <GROUP_NAME> <STATUS> <DESCRIPTION> <MINIMUM_NUMBERS> <MAXIMUM_NUMBERS> <MEMBER>
        Then I am able to validate proper message <MESSAGE>
        And I am able to search existing Group by Group Name<GROUP_NAME>
        When I click at view button inside the Group table
        Then I validate all fields inside View Group having following parameters <GROUP_NAME> <GROUP_TYPE> <DESCRIPTION> <MINIMUM_NUMBERS> <MAXIMUM_NUMBERS> <MEMBER>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | GROUP_NAME     | STATUS   | DESCRIPTION            | MINIMUM_NUMBERS | MAXIMUM_NUMBERS | MESSAGE                | MEMBER              | GROUP_TYPE  |
            | "Operator"  | "2023"   | "SCC_GROUP_02" | "Active" | "SCC_GROUP_02 updated" | "1"             | "100"           | "Successful operation" | "SCC_Adhoc_User_04" | "EXCLUSIVE" |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30452 Workflow creation at group level
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Workflow
        When I perform Create Wrokflow having following parameters <WORKFLOW_NAME> <GROUP_NAME> <DESCRIPTION> <MESSAGE>
        And Workflow created should be visible inside table <COLUMN> <OPERATION> <WORKFLOW_NAME>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | WORKFLOW_NAME     | GROUP_NAME     | DESCRIPTION       | MESSAGE                         | COLUMN | OPERATION |
            | "Operator"  | "2023"   | "SCC_WORKFLOW_02" | "SCC_GROUP_02" | "SCC_WORKFLOW_02" | "Workflow created successfully" | "Name" | "equals"  |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30406 Instant based campaign
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Campaigns page
        When I click create campaign button
        And I select Instant campaign
        And I enter scc profile information and click next button <CAMPAIGN_NAME> <DESCRIPTION> <CAMPAIGN_APPROVAL_WORKFLOW> <EVENT_CHANNEL>
        Then I am able to validate proper message "Profile Information saved successfully"
        And I enter scc target audience information and click next button <REGION> <RESELLER_TYPE> <MSISDN> <ADD_COMMENTS>
        Then I am able to validate proper message "Target Audience saved successfully"
        And I enter scc payment information and click next button <COMMISSION_HEAD> <COST_CENTER>
        Then I am able to validate proper message "Payment Information saved successfully"
        And I enter scc business rule information with single transfer with amount KPI and click next button <KPI_NAME> <KPI_EVENT> <TAEGET_CRITERIA> <EVENT_TARGET>
        Then I am able to validate proper message "Business Rules saved successfully"
        And I enter scc commission formula information for all and click next button <COMMISSION_CRITERIA> <COMMISSION_DEFINATION> <COMMISSION_AMOUNT>
        Then I am able to validate proper message "Commission Formula saved successfully"
        And I enter scc notification information and click next button <CAMPAIGN_PARTICIPATION_SMS_TEMPLATE> <CAMPAIGN_PARTICIPATION_EMAIL_TEMPLATE> <CAMPAIGN_PAYOUT_SMS_TEMPLATE> <CAMPAIGN_PAYOUT_EMAIL_TEMPLATE>
        Then I am able to validate proper message "Notification Management saved successfully"
        And I am on the scc preview screen and create instant campaign <CAMPAIGN_NAME> <KPI_NAME> <EVENT_TARGET> <COMMISSION_AMOUNT> <CREATION_MESSAGE>
        Then I logout
        When Provide <ADHOC_USER> and <PASSWORD> and login into system
        And I navigate to the Campaigns design of pending approval page
        And Campaign created should be visible on pending approval screen <CAMPAIGN_NAME>
        Then I approve the campaign <APPROVE_MESSAGE>
        Then I logout
        And I wait for "50000" miliseconds
        When Provide <TRANSFER_FROM_RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the airtime stock Page
        When I perform airtime stock transaction having following parameters <TRANSFER_TO_RESELLER_ID> <AMOUNT> <ADD_COMMENTS> <MSISDN>
        And I validate and confirm the transaction <TRANSFER_TO_RESELLER_ID> <AMOUNT> <PAYMENT_METHOD> <ADD_COMMENTS>
        Then I validate the transaction <TRANSFER_TO_RESELLER_ID> <AMOUNT> <TITLE> <MESSAGE>
        Then I get the transaction reference number and close the transaction
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ADHOC_USER          | CAMPAIGN_NAME             | DESCRIPTION        | CAMPAIGN_APPROVAL_WORKFLOW | EVENT_CHANNEL | REGION | RESELLER_TYPE | MSISDN         | ADD_COMMENTS | COMMISSION_HEAD         | COST_CENTER     | KPI_NAME            | KPI_EVENT  | TAEGET_CRITERIA | EVENT_TARGET | COMMISSION_CRITERIA   | COMMISSION_DEFINATION | COMMISSION_AMOUNT | CAMPAIGN_PARTICIPATION_SMS_TEMPLATE     | CAMPAIGN_PARTICIPATION_EMAIL_TEMPLATE     | CAMPAIGN_PAYOUT_SMS_TEMPLATE            | CAMPAIGN_PAYOUT_EMAIL_TEMPLATE            | CREATION_MESSAGE                 | APPROVE_MESSAGE                   | TRANSFER_FROM_RESELLER_ID | TRANSFER_TO_RESELLER_ID | AMOUNT | MSISDN | PAYMENT_METHOD | TITLE                    | MESSAGE                | GROSS_COMMISSION | NET_COMMISSION | ELIGIBLE_FOR_PAYOUT | PAYMENT_STATUS |
            | "OPERATOR"  | "2023"   | "SCC_Adhoc_User_04" | "SCC_INSTANT_CAMPAIGN_02" | "INSTANT CAMPAIGN" | "SCC_WORKFLOW_02"          | "ERS"         | "ALL"  | "ALL"         | "467000311225" | "Test"       | "1 - Commission head 1" | "Cost Center 1" | "Automation_KPI_01" | "transfer" | "AMOUNT"        | "100"        | "Same for all actors" | "Overall campaign"    | "1000"            | "smsCampaignPayoutDisbursementTemplate" | "emailCampaignPayoutDisbursementTemplate" | "smsCampaignPayoutDisbursementTemplate" | "emailCampaignPayoutDisbursementTemplate" | "Campaign drafted successfully!" | "Campaign Approved Successfully!" | "DIST1"                   | "SUB-DIST1-1"           | "101"  | ""     | "cash"         | "Stock Sell Successfull" | "You have transferred" | "1000"           | "1000"         | "YES"               | "PROCESSED"    |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30406 Commission calculation validation for Instant based campaign
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Campaigns page
        And I wait for 5minutes
        And Campaign created should be searched inside table <CAMPAIGN_NAME>
        And I click on view action of the campaign
        Then I validate commission calculation <TRANSFER_FROM_RESELLER_ID> <KPI_NAME> <GROSS_COMMISSION> <NET_COMMISSION> <ELIGIBLE_FOR_PAYOUT> <PAYMENT_STATUS>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ADHOC_USER          | CAMPAIGN_NAME             | KPI_NAME            | TRANSFER_FROM_RESELLER_ID | GROSS_COMMISSION | NET_COMMISSION | ELIGIBLE_FOR_PAYOUT | PAYMENT_STATUS |
            | "OPERATOR"  | "2023"   | "SCC_Adhoc_User_04" | "SCC_INSTANT_CAMPAIGN_02" | "Automation_KPI_01" | "DIST1"                   | "1000"           | "1000"         | "YES"               | "PROCESSED"    |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30402 Instant-based campaign creation after entering the duplicate Campaign name
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Campaigns page
        When I click create campaign button
        And I select Instant campaign
        And I enter scc profile information and click next button <CAMPAIGN_NAME> <DESCRIPTION> <CAMPAIGN_APPROVAL_WORKFLOW> <EVENT_CHANNEL>
        Then I am able to validate proper message "A campaign with this name already exist"
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ADHOC_USER          | CAMPAIGN_NAME             | DESCRIPTION        | CAMPAIGN_APPROVAL_WORKFLOW | EVENT_CHANNEL |
            | "OPERATOR"  | "2023"   | "SCC_Adhoc_User_04" | "SCC_INSTANT_CAMPAIGN_02" | "INSTANT CAMPAIGN" | "SCC_WORKFLOW_02"          | "ERS"         |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30459 Reject the Instant campaign which are in approval pending state
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Campaigns page
        When I click create campaign button
        And I select Instant campaign
        And I enter scc profile information and click next button <CAMPAIGN_NAME> <DESCRIPTION> <CAMPAIGN_APPROVAL_WORKFLOW> <EVENT_CHANNEL>
        Then I am able to validate proper message "Profile Information saved successfully"
        And I enter scc target audience information and click next button <REGION> <RESELLER_TYPE> <MSISDN> <ADD_COMMENTS>
        Then I am able to validate proper message "Target Audience saved successfully"
        And I enter scc payment information and click next button <COMMISSION_HEAD> <COST_CENTER>
        Then I am able to validate proper message "Payment Information saved successfully"
        And I enter scc business rule information with single transfer with amount KPI and click next button <KPI_NAME> <KPI_EVENT> <TAEGET_CRITERIA> <EVENT_TARGET>
        Then I am able to validate proper message "Business Rules saved successfully"
        And I enter scc commission formula information for all and click next button <COMMISSION_CRITERIA> <COMMISSION_DEFINATION> <COMMISSION_AMOUNT>
        Then I am able to validate proper message "Commission Formula saved successfully"
        And I enter scc notification information and click next button <CAMPAIGN_PARTICIPATION_SMS_TEMPLATE> <CAMPAIGN_PARTICIPATION_EMAIL_TEMPLATE> <CAMPAIGN_PAYOUT_SMS_TEMPLATE> <CAMPAIGN_PAYOUT_EMAIL_TEMPLATE>
        Then I am able to validate proper message "Notification Management saved successfully"
        And I am on the scc preview screen and create instant campaign <CAMPAIGN_NAME> <KPI_NAME> <EVENT_TARGET> <COMMISSION_AMOUNT> <CREATION_MESSAGE>
        Then I logout
        When Provide <ADHOC_USER> and <PASSWORD> and login into system
        And I navigate to the Campaigns design of pending approval page
        And Campaign created should be visible on pending approval screen <CAMPAIGN_NAME>
        Then I reject the campaign <REJECT_MESSAGE>
        Then I logout
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Campaigns page
        And Campaign created should be searched inside table <CAMPAIGN_NAME>
        Then I validate Campaing status <REJECTED_CAMPAIGN_STATUS>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ADHOC_USER          | CAMPAIGN_NAME             | DESCRIPTION        | CAMPAIGN_APPROVAL_WORKFLOW | EVENT_CHANNEL | REGION | RESELLER_TYPE | MSISDN         | ADD_COMMENTS | COMMISSION_HEAD         | COST_CENTER     | KPI_NAME            | KPI_EVENT  | TAEGET_CRITERIA | EVENT_TARGET | COMMISSION_CRITERIA   | COMMISSION_DEFINATION | COMMISSION_AMOUNT | CAMPAIGN_PARTICIPATION_SMS_TEMPLATE     | CAMPAIGN_PARTICIPATION_EMAIL_TEMPLATE     | CAMPAIGN_PAYOUT_SMS_TEMPLATE            | CAMPAIGN_PAYOUT_EMAIL_TEMPLATE            | CREATION_MESSAGE                 | REJECT_MESSAGE                | REJECTED_CAMPAIGN_STATUS |
            | "OPERATOR"  | "2023"   | "SCC_Adhoc_User_04" | "SCC_INSTANT_CAMPAIGN_06" | "INSTANT CAMPAIGN" | "SCC_WORKFLOW_02"          | "ERS"         | "ALL"  | "ALL"         | "467000033225" | "Test"       | "1 - Commission head 1" | "Cost Center 1" | "Automation_KPI_01" | "transfer" | "AMOUNT"        | "100"        | "Same for all actors" | "Overall campaign"    | "1000"            | "smsCampaignPayoutDisbursementTemplate" | "emailCampaignPayoutDisbursementTemplate" | "smsCampaignPayoutDisbursementTemplate" | "emailCampaignPayoutDisbursementTemplate" | "Campaign drafted successfully!" | "Campaign Has Been Rejected!" | "Disapproved"            |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30405 Instant-based campaign creation after entering invalid MSISDN
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Campaigns page
        When I click create campaign button
        And I select Instant campaign
        And I enter scc profile information and click next button <CAMPAIGN_NAME> <DESCRIPTION> <CAMPAIGN_APPROVAL_WORKFLOW> <EVENT_CHANNEL>
        Then I am able to validate proper message "Profile Information saved successfully"
        And I enter scc target audience information and click next button <REGION> <RESELLER_TYPE> <MSISDN> <ADD_COMMENTS>
        Then I am able to validate proper message "Following phone numbers are not valid"
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ADHOC_USER          | CAMPAIGN_NAME             | DESCRIPTION        | CAMPAIGN_APPROVAL_WORKFLOW | EVENT_CHANNEL | REGION | RESELLER_TYPE | MSISDN         | ADD_COMMENTS |
            | "OPERATOR"  | "2023"   | "SCC_Adhoc_User_04" | "SCC_INSTANT_CAMPAIGN_08" | "INSTANT CAMPAIGN" | "SCC_WORKFLOW_02"          | "ERS"         | "ALL"  | "ALL"         | "111111111111" | ""           |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30401 Instant-based campaign creation after selecting the start and end date as a future date
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Campaigns page
        When I click create campaign button
        And I select Instant campaign
        And I enter scc profile information with future dates and click next button <CAMPAIGN_NAME> <DESCRIPTION> <CAMPAIGN_APPROVAL_WORKFLOW> <EVENT_CHANNEL>
        Then I am able to validate proper message "Profile Information saved successfully"
        And I enter scc target audience information and click next button <REGION> <RESELLER_TYPE> <MSISDN> <ADD_COMMENTS>
        Then I am able to validate proper message "Target Audience saved successfully"
        And I enter scc payment information and click next button <COMMISSION_HEAD> <COST_CENTER>
        Then I am able to validate proper message "Payment Information saved successfully"
        And I enter scc business rule information with single transfer with amount KPI and click next button <KPI_NAME> <KPI_EVENT> <TAEGET_CRITERIA> <EVENT_TARGET>
        Then I am able to validate proper message "Business Rules saved successfully"
        And I enter scc commission formula information for all and click next button <COMMISSION_CRITERIA> <COMMISSION_DEFINATION> <COMMISSION_AMOUNT>
        Then I am able to validate proper message "Commission Formula saved successfully"
        And I enter scc notification information and click next button <CAMPAIGN_PARTICIPATION_SMS_TEMPLATE> <CAMPAIGN_PARTICIPATION_EMAIL_TEMPLATE> <CAMPAIGN_PAYOUT_SMS_TEMPLATE> <CAMPAIGN_PAYOUT_EMAIL_TEMPLATE>
        Then I am able to validate proper message "Notification Management saved successfully"
        And I am on the scc preview screen and create instant campaign <CAMPAIGN_NAME> <KPI_NAME> <EVENT_TARGET> <COMMISSION_AMOUNT> <CREATION_MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ADHOC_USER          | CAMPAIGN_NAME             | DESCRIPTION        | CAMPAIGN_APPROVAL_WORKFLOW | EVENT_CHANNEL | REGION | RESELLER_TYPE | MSISDN         | ADD_COMMENTS | COMMISSION_HEAD         | COST_CENTER     | KPI_NAME            | KPI_EVENT  | TAEGET_CRITERIA | EVENT_TARGET | COMMISSION_CRITERIA   | COMMISSION_DEFINATION | COMMISSION_AMOUNT | CAMPAIGN_PARTICIPATION_SMS_TEMPLATE     | CAMPAIGN_PARTICIPATION_EMAIL_TEMPLATE     | CAMPAIGN_PAYOUT_SMS_TEMPLATE            | CAMPAIGN_PAYOUT_EMAIL_TEMPLATE            | CREATION_MESSAGE                 |
            | "OPERATOR"  | "2023"   | "SCC_Adhoc_User_04" | "SCC_INSTANT_CAMPAIGN_09" | "INSTANT CAMPAIGN" | "SCC_WORKFLOW_02"          | "ERS"         | "ALL"  | "ALL"         | "467000033225" | "Test"       | "1 - Commission head 1" | "Cost Center 1" | "Automation_KPI_01" | "transfer" | "AMOUNT"        | "100"        | "Same for all actors" | "Overall campaign"    | "1000"            | "smsCampaignPayoutDisbursementTemplate" | "emailCampaignPayoutDisbursementTemplate" | "smsCampaignPayoutDisbursementTemplate" | "emailCampaignPayoutDisbursementTemplate" | "Campaign drafted successfully!" |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30415 Arrear based campaign creation for past - past date
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Campaigns page
        When I click create campaign button
        And I select Arrear campaign
        And I enter scc profile information with past date and click next button <CAMPAIGN_NAME> <DESCRIPTION> <CAMPAIGN_APPROVAL_WORKFLOW> <EVENT_CHANNEL>
        Then I am able to validate proper message "Profile Information saved successfully"
        And I enter scc target audience information and click next button <REGION> <RESELLER_TYPE> <MSISDN> <ADD_COMMENTS>
        Then I am able to validate proper message "Target Audience saved successfully"
        And I enter scc payment information for arrear based and click next button <COMMISSION_HEAD> <COST_CENTER>
        Then I am able to validate proper message "Payment Information saved successfully"
        And I enter scc business rule information with multiple KPI and click next button <KPI_NAME_1> <KPI_EVENT_1> <TAEGET_CRITERIA_1> <EVENT_TARGET_1> <KPI_NAME_2> <KPI_EVENT_2> <TAEGET_CRITERIA_2> <EVENT_TARGET_2>
        Then I am able to validate proper message "Business Rules saved successfully"
        And I enter scc commission formula information for all and click next button <COMMISSION_CRITERIA> <COMMISSION_DEFINATION> <COMMISSION_AMOUNT>
        Then I am able to validate proper message "Commission Formula saved successfully"
        And I enter scc notification information and click next button <CAMPAIGN_PARTICIPATION_SMS_TEMPLATE> <CAMPAIGN_PARTICIPATION_EMAIL_TEMPLATE> <CAMPAIGN_PAYOUT_SMS_TEMPLATE> <CAMPAIGN_PAYOUT_EMAIL_TEMPLATE>
        Then I am able to validate proper message "Notification Management saved successfully"
        And I am on the scc preview screen and create instant campaign <CAMPAIGN_NAME> <KPI_NAME_1> <EVENT_TARGET_1> <COMMISSION_AMOUNT> <CREATION_MESSAGE>
        Then I logout
        When Provide <ADHOC_USER> and <PASSWORD> and login into system
        And I navigate to the Campaigns design of pending approval page
        And Campaign created should be visible on pending approval screen <CAMPAIGN_NAME>
        Then I approve the campaign <APPROVE_MESSAGE>
        Then I logout
        And I wait for 5minutes
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Campaigns page
        And Campaign created should be visible on Campaign page <CAMPAIGN_NAME>
        Then I validate that campaign status should be "Closed"
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ADHOC_USER          | CAMPAIGN_NAME            | DESCRIPTION       | CAMPAIGN_APPROVAL_WORKFLOW | EVENT_CHANNEL | REGION | RESELLER_TYPE | MSISDN | ADD_COMMENTS | COMMISSION_HEAD         | COST_CENTER     | KPI_NAME_1                 | KPI_EVENT_1 | TAEGET_CRITERIA_1 | EVENT_TARGET_1 | KPI_NAME_2                 | KPI_EVENT_2 | TAEGET_CRITERIA_2 | EVENT_TARGET_2 | COMMISSION_CRITERIA   | COMMISSION_DEFINATION | COMMISSION_AMOUNT | CAMPAIGN_PARTICIPATION_SMS_TEMPLATE     | CAMPAIGN_PARTICIPATION_EMAIL_TEMPLATE     | CAMPAIGN_PAYOUT_SMS_TEMPLATE            | CAMPAIGN_PAYOUT_EMAIL_TEMPLATE            | CREATION_MESSAGE                 | APPROVE_MESSAGE                   |
            | "OPERATOR"  | "2023"   | "SCC_Adhoc_User_04" | "SCC_ARREAR_CAMPAIGN_11" | "ARREAR CAMPAIGN" | "SCC_WORKFLOW_02"          | "ERS"         | "ALL"  | "ALL"         | ""     | "Test"       | "1 - Commission head 1" | "Cost Center 1" | "Automation_KPI_Arrear_01" | "transfer"  | "AMOUNT"          | "100"          | "Automation_KPI_Arrear_02" | "topup"     | "AMOUNT"          | "100"          | "Same for all actors" | "Overall campaign"    | "1000"            | "smsCampaignPayoutDisbursementTemplate" | "emailCampaignPayoutDisbursementTemplate" | "smsCampaignPayoutDisbursementTemplate" | "emailCampaignPayoutDisbursementTemplate" | "Campaign drafted successfully!" | "Campaign Approved Successfully!" |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30416 Arrear based campaign creation for Past - Future date
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Campaigns page
        When I click create campaign button
        And I select Arrear campaign
        And I enter scc profile information and click next button <CAMPAIGN_NAME> <DESCRIPTION> <CAMPAIGN_APPROVAL_WORKFLOW> <EVENT_CHANNEL>
        Then I am able to validate proper message "Profile Information saved successfully"
        And I enter scc target audience information and click next button <REGION> <RESELLER_TYPE> <MSISDN> <ADD_COMMENTS>
        Then I am able to validate proper message "Target Audience saved successfully"
        And I enter scc payment information for arrear based and click next button <COMMISSION_HEAD> <COST_CENTER>
        Then I am able to validate proper message "Payment Information saved successfully"
        And I enter scc business rule information with multiple KPI and click next button <KPI_NAME_1> <KPI_EVENT_1> <TAEGET_CRITERIA_1> <EVENT_TARGET_1> <KPI_NAME_2> <KPI_EVENT_2> <TAEGET_CRITERIA_2> <EVENT_TARGET_2>
        Then I am able to validate proper message "Business Rules saved successfully"
        And I enter scc commission formula information for all and click next button <COMMISSION_CRITERIA> <COMMISSION_DEFINATION> <COMMISSION_AMOUNT>
        Then I am able to validate proper message "Commission Formula saved successfully"
        And I enter scc notification information and click next button <CAMPAIGN_PARTICIPATION_SMS_TEMPLATE> <CAMPAIGN_PARTICIPATION_EMAIL_TEMPLATE> <CAMPAIGN_PAYOUT_SMS_TEMPLATE> <CAMPAIGN_PAYOUT_EMAIL_TEMPLATE>
        Then I am able to validate proper message "Notification Management saved successfully"
        And I am on the scc preview screen and create instant campaign <CAMPAIGN_NAME> <KPI_NAME_1> <EVENT_TARGET_1> <COMMISSION_AMOUNT> <CREATION_MESSAGE>
        Then I logout
        When Provide <ADHOC_USER> and <PASSWORD> and login into system
        And I navigate to the Campaigns design of pending approval page
        And Campaign created should be visible on pending approval screen <CAMPAIGN_NAME>
        Then I approve the campaign <APPROVE_MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ADHOC_USER          | CAMPAIGN_NAME            | DESCRIPTION       | CAMPAIGN_APPROVAL_WORKFLOW | EVENT_CHANNEL | REGION | RESELLER_TYPE | MSISDN | ADD_COMMENTS | COMMISSION_HEAD         | COST_CENTER     | KPI_NAME_1                 | KPI_EVENT_1 | TAEGET_CRITERIA_1 | EVENT_TARGET_1 | KPI_NAME_2                 | KPI_EVENT_2 | TAEGET_CRITERIA_2 | EVENT_TARGET_2 | COMMISSION_CRITERIA   | COMMISSION_DEFINATION | COMMISSION_AMOUNT | CAMPAIGN_PARTICIPATION_SMS_TEMPLATE     | CAMPAIGN_PARTICIPATION_EMAIL_TEMPLATE     | CAMPAIGN_PAYOUT_SMS_TEMPLATE            | CAMPAIGN_PAYOUT_EMAIL_TEMPLATE            | CREATION_MESSAGE                 | APPROVE_MESSAGE                   |
            | "OPERATOR"  | "2023"   | "SCC_Adhoc_User_04" | "SCC_ARREAR_CAMPAIGN_05" | "ARREAR CAMPAIGN" | "SCC_WORKFLOW_02"          | "ERS"         | "ALL"  | "ALL"         | ""     | "Test"       | "1 - Commission head 1" | "Cost Center 1" | "Automation_KPI_Arrear_01" | "transfer"  | "AMOUNT"          | "100"          | "Automation_KPI_Arrear_02" | "topup"     | "AMOUNT"          | "100"          | "Same for all actors" | "Overall campaign"    | "1000"            | "smsCampaignPayoutDisbursementTemplate" | "emailCampaignPayoutDisbursementTemplate" | "smsCampaignPayoutDisbursementTemplate" | "emailCampaignPayoutDisbursementTemplate" | "Campaign drafted successfully!" | "Campaign Approved Successfully!" |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30427 Arrear based campaign creation for Campaign Edit (Befor Going Live)
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Campaigns page
        When I click create campaign button
        And I select Arrear campaign
        And I enter scc profile information and click next button <CAMPAIGN_NAME> <DESCRIPTION> <CAMPAIGN_APPROVAL_WORKFLOW> <EVENT_CHANNEL>
        Then I am able to validate proper message "Profile Information saved successfully"
        And I enter scc target audience information and click next button <REGION> <RESELLER_TYPE> <MSISDN> <ADD_COMMENTS>
        Then I am able to validate proper message "Target Audience saved successfully"
        And I enter scc payment information for arrear based and click next button <COMMISSION_HEAD> <COST_CENTER>
        Then I am able to validate proper message "Payment Information saved successfully"
        And I enter scc business rule information with multiple KPI and click next button <KPI_NAME_1> <KPI_EVENT_1> <TAEGET_CRITERIA_1> <EVENT_TARGET_1> <KPI_NAME_2> <KPI_EVENT_2> <TAEGET_CRITERIA_2> <EVENT_TARGET_2>
        Then I am able to validate proper message "Business Rules saved successfully"
        And I enter scc commission formula information for all and click next button <COMMISSION_CRITERIA> <COMMISSION_DEFINATION> <COMMISSION_AMOUNT>
        Then I am able to validate proper message "Commission Formula saved successfully"
        And I enter scc notification information and click cancel button <CAMPAIGN_PARTICIPATION_SMS_TEMPLATE> <CAMPAIGN_PARTICIPATION_EMAIL_TEMPLATE> <CAMPAIGN_PAYOUT_SMS_TEMPLATE> <CAMPAIGN_PAYOUT_EMAIL_TEMPLATE>
        And I navigate to the Campaigns page
        And Campaign created should be visible on Campaign page <CAMPAIGN_NAME>
        Then I click on Edit Campaign link
        And I move to the notification information screen
        And I enter scc notification information and click next button <CAMPAIGN_PARTICIPATION_SMS_TEMPLATE> <CAMPAIGN_PARTICIPATION_EMAIL_TEMPLATE> <CAMPAIGN_PAYOUT_SMS_TEMPLATE> <CAMPAIGN_PAYOUT_EMAIL_TEMPLATE>
        Then I am able to validate proper message "Campaign successfully updated"
        And I am on the scc preview screen and create instant campaign <CAMPAIGN_NAME> <KPI_NAME_1> <EVENT_TARGET_1> <COMMISSION_AMOUNT> <CREATION_MESSAGE>
        Then I logout
        When Provide <ADHOC_USER> and <PASSWORD> and login into system
        And I navigate to the Campaigns design of pending approval page
        And Campaign created should be visible on pending approval screen <CAMPAIGN_NAME>
        Then I approve the campaign <APPROVE_MESSAGE>
        And I logout
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Campaigns page
        And Campaign created should be visible on Campaign page <CAMPAIGN_NAME>
        Then I validate that campaign status should be "Active"
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ADHOC_USER          | CAMPAIGN_NAME            | DESCRIPTION       | CAMPAIGN_APPROVAL_WORKFLOW | EVENT_CHANNEL | REGION | RESELLER_TYPE | MSISDN | ADD_COMMENTS | COMMISSION_HEAD         | COST_CENTER     | KPI_NAME_1                 | KPI_EVENT_1 | TAEGET_CRITERIA_1 | EVENT_TARGET_1 | KPI_NAME_2                 | KPI_EVENT_2 | TAEGET_CRITERIA_2 | EVENT_TARGET_2 | COMMISSION_CRITERIA   | COMMISSION_DEFINATION | COMMISSION_AMOUNT | CAMPAIGN_PARTICIPATION_SMS_TEMPLATE     | CAMPAIGN_PARTICIPATION_EMAIL_TEMPLATE     | CAMPAIGN_PAYOUT_SMS_TEMPLATE            | CAMPAIGN_PAYOUT_EMAIL_TEMPLATE            | CREATION_MESSAGE                 | APPROVE_MESSAGE                   |
            | "OPERATOR"  | "2023"   | "SCC_Adhoc_User_04" | "SCC_ARREAR_CAMPAIGN_06" | "ARREAR CAMPAIGN" | "SCC_WORKFLOW_02"          | "ERS"         | "ALL"  | "ALL"         | ""     | "Test"       | "1 - Commission head 1" | "Cost Center 1" | "Automation_KPI_Arrear_01" | "transfer"  | "AMOUNT"          | "100"          | "Automation_KPI_Arrear_02" | "topup"     | "AMOUNT"          | "100"          | "Same for all actors" | "Overall campaign"    | "1000"            | "smsCampaignPayoutDisbursementTemplate" | "emailCampaignPayoutDisbursementTemplate" | "smsCampaignPayoutDisbursementTemplate" | "emailCampaignPayoutDisbursementTemplate" | "Campaign drafted successfully!" | "Campaign Approved Successfully!" |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30412 Arrear based campaign creation after entering commission amount field is as "0"
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Campaigns page
        When I click create campaign button
        And I select Arrear campaign
        And I enter scc profile information and click next button <CAMPAIGN_NAME> <DESCRIPTION> <CAMPAIGN_APPROVAL_WORKFLOW> <EVENT_CHANNEL>
        Then I am able to validate proper message "Profile Information saved successfully"
        And I enter scc target audience information and click next button <REGION> <RESELLER_TYPE> <MSISDN> <ADD_COMMENTS>
        Then I am able to validate proper message "Target Audience saved successfully"
        And I enter scc payment information for arrear based and click next button <COMMISSION_HEAD> <COST_CENTER>
        Then I am able to validate proper message "Payment Information saved successfully"
        And I enter scc business rule information with multiple KPI and click next button <KPI_NAME_1> <KPI_EVENT_1> <TAEGET_CRITERIA_1> <EVENT_TARGET_1> <KPI_NAME_2> <KPI_EVENT_2> <TAEGET_CRITERIA_2> <EVENT_TARGET_2>
        Then I am able to validate proper message "Business Rules saved successfully"
        And I enter scc commission formula information for all and click next button <COMMISSION_CRITERIA> <COMMISSION_DEFINATION> <COMMISSION_AMOUNT>
        Then I am able to validate proper message "Commission Amount cannot be 0 or negative"
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ADHOC_USER          | CAMPAIGN_NAME            | DESCRIPTION       | CAMPAIGN_APPROVAL_WORKFLOW | EVENT_CHANNEL | REGION | RESELLER_TYPE | MSISDN | ADD_COMMENTS | COMMISSION_HEAD         | COST_CENTER     | KPI_NAME_1                 | KPI_EVENT_1 | TAEGET_CRITERIA_1 | EVENT_TARGET_1 | KPI_NAME_2                 | KPI_EVENT_2 | TAEGET_CRITERIA_2 | EVENT_TARGET_2 | COMMISSION_CRITERIA   | COMMISSION_DEFINATION | COMMISSION_AMOUNT |
            | "OPERATOR"  | "2023"   | "SCC_Adhoc_User_04" | "SCC_ARREAR_CAMPAIGN_07" | "ARREAR CAMPAIGN" | "SCC_WORKFLOW_02"          | "ERS"         | "ALL"  | "ALL"         | ""     | "Test"       | "1 - Commission head 1" | "Cost Center 1" | "Automation_KPI_Arrear_01" | "transfer"  | "AMOUNT"          | "100"          | "Automation_KPI_Arrear_02" | "topup"     | "AMOUNT"          | "100"          | "Same for all actors" | "Overall campaign"    | "0"               |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30411 Arrear based campaign creation after entering the duplicate KPI name
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Campaigns page
        When I click create campaign button
        And I select Arrear campaign
        And I enter scc profile information and click next button <CAMPAIGN_NAME> <DESCRIPTION> <CAMPAIGN_APPROVAL_WORKFLOW> <EVENT_CHANNEL>
        Then I am able to validate proper message "Profile Information saved successfully"
        And I enter scc target audience information and click next button <REGION> <RESELLER_TYPE> <MSISDN> <ADD_COMMENTS>
        Then I am able to validate proper message "Target Audience saved successfully"
        And I enter scc payment information for arrear based and click next button <COMMISSION_HEAD> <COST_CENTER>
        Then I am able to validate proper message "Payment Information saved successfully"
        And I enter scc business rule information with multiple KPI and click next button <KPI_NAME_1> <KPI_EVENT_1> <TAEGET_CRITERIA_1> <EVENT_TARGET_1> <KPI_NAME_2> <KPI_EVENT_2> <TAEGET_CRITERIA_2> <EVENT_TARGET_2>
        Then I am able to validate proper message "KPIs cannot have same name within a campaign"
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ADHOC_USER          | CAMPAIGN_NAME            | DESCRIPTION       | CAMPAIGN_APPROVAL_WORKFLOW | EVENT_CHANNEL | REGION | RESELLER_TYPE | MSISDN | ADD_COMMENTS | COMMISSION_HEAD         | COST_CENTER     | KPI_NAME_1                 | KPI_EVENT_1 | TAEGET_CRITERIA_1 | EVENT_TARGET_1 | KPI_NAME_2                 | KPI_EVENT_2 | TAEGET_CRITERIA_2 | EVENT_TARGET_2 |
            | "OPERATOR"  | "2023"   | "SCC_Adhoc_User_04" | "SCC_ARREAR_CAMPAIGN_09" | "ARREAR CAMPAIGN" | "SCC_WORKFLOW_02"          | "ERS"         | "ALL"  | "ALL"         | ""     | "Test"       | "1 - Commission head 1" | "Cost Center 1" | "Automation_KPI_Arrear_01" | "transfer"  | "AMOUNT"          | "100"          | "Automation_KPI_Arrear_01" | "transfer"  | "AMOUNT"          | "100"          |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30408 Arrear based campaign creation after entering the special characters
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Campaigns page
        When I click create campaign button
        And I select Arrear campaign
        And I enter scc profile information and click next button <CAMPAIGN_NAME> <DESCRIPTION> <CAMPAIGN_APPROVAL_WORKFLOW> <EVENT_CHANNEL>
        Then I am able to validate proper message "You've entered invalid Campaign Name, It doesn't match with required pattern or entered characters exceeds more than allowed characters."
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ADHOC_USER          | CAMPAIGN_NAME     | DESCRIPTION       | CAMPAIGN_APPROVAL_WORKFLOW | EVENT_CHANNEL |
            | "OPERATOR"  | "2023"   | "SCC_Adhoc_User_04" | "SCC_ARREAR@123#" | "SCC_ARREAR@123#" | "SCC_WORKFLOW_02"          | "ERS"         |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30409 Arrear based campaign creation after selecting the end date before start date
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Campaigns page
        When I click create campaign button
        And I select Arrear campaign
        And I enter scc profile information with invalid date and click next button <CAMPAIGN_NAME> <DESCRIPTION> <CAMPAIGN_APPROVAL_WORKFLOW> <EVENT_CHANNEL>
        Then I am able to validate proper message "End date should be after start date"
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ADHOC_USER          | CAMPAIGN_NAME     | DESCRIPTION       | CAMPAIGN_APPROVAL_WORKFLOW | EVENT_CHANNEL |
            | "OPERATOR"  | "2023"   | "SCC_Adhoc_User_04" | "SCC_ARREAR_Test" | "SCC_ARREAR_Test" | "SCC_WORKFLOW_02"          | "ERS"         |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30407 Arrear based campaign creation after entering the duplicate campaign name
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Campaigns page
        When I click create campaign button
        And I select Arrear campaign
        And I enter scc profile information with past date and click next button <CAMPAIGN_NAME> <DESCRIPTION> <CAMPAIGN_APPROVAL_WORKFLOW> <EVENT_CHANNEL>
        Then I am able to validate proper message "A campaign with this name already exist"
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ADHOC_USER          | CAMPAIGN_NAME            | DESCRIPTION              | CAMPAIGN_APPROVAL_WORKFLOW | EVENT_CHANNEL |
            | "OPERATOR"  | "2023"   | "SCC_Adhoc_User_04" | "SCC_ARREAR_CAMPAIGN_09" | "SCC_ARREAR_CAMPAIGN_09" | "SCC_WORKFLOW_02"          | "ERS"         |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30403 Instant-based campaign creation after entering the special characters
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Campaigns page
        When I click create campaign button
        And I select Instant campaign
        And I enter scc profile information and click next button <CAMPAIGN_NAME> <DESCRIPTION> <CAMPAIGN_APPROVAL_WORKFLOW> <EVENT_CHANNEL>
        Then I am able to validate proper message "You've entered invalid Campaign Name, It doesn't match with required pattern or entered characters exceeds more than allowed characters."
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ADHOC_USER          | CAMPAIGN_NAME     | DESCRIPTION       | CAMPAIGN_APPROVAL_WORKFLOW | EVENT_CHANNEL |
            | "OPERATOR"  | "2023"   | "SCC_Adhoc_User_04" | "SCC_ARREAR@123#" | "SCC_ARREAR@123#" | "SCC_WORKFLOW_02"          | "ERS"         |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30430 Veiw Campaign
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Campaigns page
        And Campaign created should be searched inside table <CAMPAIGN_NAME>
        When I click on View Campaign link
        Then I am able to validate following parameters <CAMPAIGN_NAME> <DESCRIPTION> <CAMPAIGN_APPROVAL_WORKFLOW> <EVENT_CHANNEL> <REGION> <RESELLER_TYPE> <COMMISSION_HEAD> <COST_CENTER> <KPI_NAME> <KPI_EVENT> <TAEGET_CRITERIA> <EVENT_TARGET> <COMMISSION_CRITERIA> <COMMISSION_DEFINATION> <COMMISSION_AMOUNT> <CAMPAIGN_PARTICIPATION_SMS_TEMPLATE> <CAMPAIGN_PARTICIPATION_EMAIL_TEMPLATE> <CAMPAIGN_PAYOUT_SMS_TEMPLATE> <CAMPAIGN_PAYOUT_EMAIL_TEMPLATE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | CAMPAIGN_NAME             | DESCRIPTION        | CAMPAIGN_APPROVAL_WORKFLOW | EVENT_CHANNEL | REGION                                                 | RESELLER_TYPE                                        | COMMISSION_HEAD         | COST_CENTER     | KPI_NAME            | KPI_EVENT        | TAEGET_CRITERIA | EVENT_TARGET | COMMISSION_CRITERIA   | COMMISSION_DEFINATION | COMMISSION_AMOUNT | CAMPAIGN_PARTICIPATION_SMS_TEMPLATE     | CAMPAIGN_PARTICIPATION_EMAIL_TEMPLATE     | CAMPAIGN_PAYOUT_SMS_TEMPLATE            | CAMPAIGN_PAYOUT_EMAIL_TEMPLATE            |
            | "OPERATOR"  | "2023"   | "SCC_INSTANT_CAMPAIGN_02" | "INSTANT CAMPAIGN" | "SCC_WORKFLOW_02"          | "ERS"         | "Stockholm County,Västra Götaland County,Skåne County" | "Agent,Distributor,FranchiseShop,POS,SubDistributor" | "1 - Commission head 1" | "Cost Center 1" | "Automation_KPI_01" | "transfer (122)" | "AMOUNT"        | "100"        | "Same for all actors" | "Overall campaign"    | "1000"            | "smsCampaignPayoutDisbursementTemplate" | "emailCampaignPayoutDisbursementTemplate" | "smsCampaignPayoutDisbursementTemplate" | "emailCampaignPayoutDisbursementTemplate" |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30433 Veiw Campaign
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Campaigns page
        And Campaign created should be visible on Campaign page <CAMPAIGN_NAME>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | CAMPAIGN_NAME             |
            | "OPERATOR"  | "2023"   | "SCC_INSTANT_CAMPAIGN_02" |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30431 Veiw Campaign
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Campaigns page
        Then Validate Hold and Clone options should not be visible
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | CAMPAIGN_NAME             |
            | "OPERATOR"  | "2023"   | "SCC_INSTANT_CAMPAIGN_02" |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30432 Veiw Campaign
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Campaigns page
        And I select Group By <GROUP_BY>
        Then I click on View Campaign link
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | CAMPAIGN_NAME             | GROUP_BY |
            | "OPERATOR"  | "2023"   | "SCC_INSTANT_CAMPAIGN_02" | "Active" |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30506 Policy creation (Access Management)
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Policy Access Management Page
        When I perform Create New Policy having following parameters <POLICY_NAME> <DESCRIPTION> <MODULES> <SUB_OPTIONS>
        Then I am able to validate proper message <MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | POLICY_NAME               | DESCRIPTION         | MODULES              | SUB_OPTIONS              | MESSAGE              |
            | "Operator"  | "2023"   | "Automation_Adhoc_Policy" | "Automation policy" | "Select-All-Modules" | "Select-All-Sub-Options" | "successfully added" |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30509 Policy Edit (Access Management)
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Policy Access Management Page
        And I search policy having following parameters <POLICY_NAME>
        When I perform Edit Policy having following parameters <NEW_POLICY_NAME> <DESCRIPTION>
        Then I am able to validate proper message <MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | POLICY_NAME               | NEW_POLICY_NAME              | DESCRIPTION            | MESSAGE               |
            | "Operator"  | "2023"   | "Automation_Adhoc_Policy" | "Automation_Adhoc_Policy_01" | "Automation policy 01" | "edited Successfully" |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30507 Policy view (Access Management)
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Policy Access Management Page
        And I search policy having following parameters <POLICY_NAME>
        When I perform View Policy having following parameters <POLICY_NAME> <DESCRIPTION>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | POLICY_NAME                  | DESCRIPTION            |
            | "Operator"  | "2023"   | "Automation_Adhoc_Policy_01" | "Automation policy 01" |

    @e2e-seamless-one-std @e2e-seamless-one-std-scc
    Scenario Outline: STD-TC-30510 Policy Mapping creation
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Policy Mapping page
        When I perform Create New Policy Mapping having following parameters <SELECT_POLICY> <ACTOR_TYPE> <ROLE_TYPE>
        Then I am able to validate proper message <MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | SELECT_POLICY                | ACTOR_TYPE  | ROLE_TYPE    | MESSAGE   |
            | "Operator"  | "2023"   | "Automation_Adhoc_Policy_01" | "AdhocUser" | "Adhoc_Role" | "Success" |
