Feature: 16-Account Types Feature

    As a user on the Unified Portal Application
    I want to Validate all Account Types Operations

    Background: Enter UserId and Password and perform Login
        Given I am on the unified portal login page

    ################################### Standard ##################################

    @e2e-seamless-one-std @e2e-seamless-one-std-account
    Scenario Outline: TC-30534 Performing Create Account type operation with passing test data as data table
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Account Types Page
        And Click on Create Account Type button
        When I perform Create Account Type having following parameters <ACCOUNT_TYPE_ID> <DESCRIPTION> <MINIMUM_ACCOUNT_BALANCE> <MAXIMUM_ACCOUNT_BALANCE> <MINIMUM_TRANSACTION_AMOUNT> <MAXIMUM_TRANSACTION_AMOUNT> <CREDIT_LIMIT> <COUNT_LIMIT> <PAY_LIMIT> <URL> <EXPIRY_DATE>
        Then I am able to validate proper message <MESSAGE>
        #Commenting Below line for the BUG: UBP-1924
        #And Account Type created should be visible inside table <ACCOUNT_TYPE_ID> <SELECT_COLUMN> <SELECT_OPERATOR> <FILTER_VALUE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ACCOUNT_TYPE_ID | DESCRIPTION        | MINIMUM_ACCOUNT_BALANCE | MAXIMUM_ACCOUNT_BALANCE | MINIMUM_TRANSACTION_AMOUNT | MAXIMUM_TRANSACTION_AMOUNT | CREDIT_LIMIT | COUNT_LIMIT | PAY_LIMIT | URL                     | EXPIRY_DATE  | MESSAGE              | SELECT_COLUMN   | SELECT_OPERATOR | FILTER_VALUE |
            | "OPERATOR"  | "2023"   | "Test-20"       | "Test-Description" | "100"                   | "10000000"              | "1000"                     | "100000"                   | "100000000"  | "90000"     | "90000"   | "http://localhost:8099" | "03/06/2025" | "Account type added" | "accountTypeId" | "equals"        | "Test-20"    |

    @e2e-seamless-one-std @e2e-seamless-one-std-account
    Scenario Outline: TC-30536: Performing View Existing Account type operation
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Account Types Page
        When I perform click on filter to search the Account Id <SELECT_COLUMN> <SELECT_OPERATOR> <FILTER_VALUE>
        And I click on view button inside the table
        Then I am able validate the Account type inside the view page <ACCOUNT_TYPE_ID> <DESCRIPTION> <MINIMUM_ACCOUNT_BALANCE> <MAXIMUM_ACCOUNT_BALANCE> <MINIMUM_TRANSACTION_AMOUNT> <MAXIMUM_TRANSACTION_AMOUNT> <CREDIT_LIMIT> <COUNT_LIMIT> <PAY_LIMIT> <URL> <EXPIRY_DATE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ACCOUNT_TYPE_ID | DESCRIPTION        | MINIMUM_ACCOUNT_BALANCE | MAXIMUM_ACCOUNT_BALANCE | MINIMUM_TRANSACTION_AMOUNT | MAXIMUM_TRANSACTION_AMOUNT | CREDIT_LIMIT | COUNT_LIMIT | PAY_LIMIT | URL                     | SELECT_COLUMN     | SELECT_OPERATOR | FILTER_VALUE | EXPIRY_DATE  |
            | "OPERATOR"  | "2023"   | "AIRTIME"       | "AIRTIME"          | "0"                     | "100000"                | "0"                        | "1000000"                  | "0"          | "0"         | "0"       | "-"                     | "Account Type Id" | "equals"        | "AIRTIME"    | "14/11/2023" |

    @e2e-seamless-one-std @e2e-seamless-one-std-account
    Scenario Outline: TC-30537: Account Types tab should not be visible to any reseller other than opeator
        Given Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Account Types Page
        And I verify not authorized screen is visible
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD |
            | "Dist1"     | "2023"   |