Feature: 21-Policy Feature

    As a user on the unified portal Application
    I want to perform Policy related operation

    Background: Enter UserId and Password annd perform Login
        Given I am on the unified portal login page

    ################################### Standard ##################################

    @e2e-seamless-one-std @e2e-seamless-one-std-policy
    Scenario Outline: TC-28902, TC-30516: Operator is able to Create a new policy from access management
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to policy page
        And I click on Create New Policy button
        When I perform Create New Policy having following parameters <POLICY_NAME> <DESCRIPTION>
        Then I am able to validate proper message <MESSAGE>
        And Password Policy should be visible inside table <POLICY_NAME>
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | POLICY_NAME       | DESCRIPTION                 | MESSAGE                                     |
            | "OPERATOR" | "2023"   | "TestUser Policy" | "This is a TestUser Policy" | "Policy TestUser Policy successfully added" |

    @e2e-seamless-one-std @e2e-seamless-one-std-policy
    Scenario Outline:TC-30518 : Operator is able to update the policy from Access management
        Given Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to policy page
        And Password Policy should be visible inside table <POLICY_NAME>
        And I click on edit button <POLICY_NAME>
        When I perform Edit Policy having following parameters <UPDATE_POLICY_NAME> <UPDATE_DESCRIPTION>
        And I click on Preview button
        And I click on Update button
        Then I am able to validate proper message <MESSAGE>
        And Password Policy should be visible inside table <UPDATE_POLICY_NAME>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | POLICY_NAME       | UPDATE_POLICY_NAME      | UPDATE_DESCRIPTION        | MESSAGE                                             |
            | "OPERATOR"  | "2023"   | "TestUser Policy" | "TestUserUpdate Policy" | "TestUser Policy Updated" | "Policy: TestUserUpdate Policy edited Successfully" |

    @e2e-seamless-one-std @e2e-seamless-one-std-policy
    Scenario Outline: STD-TC-30520: Operator user should be able to delete policy
        Given Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to policy page
        And Password Policy should be visible inside table <POLICY_NAME>
        And I click on delete button <POLICY_NAME>
        And I verify the delete confirmation pop up appears
        And I click Yes to confirm operation
        And I am able to validate proper message "Policy deleted successfully"
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | POLICY_NAME             |
            | "OPERATOR"  | "2023"   | "TestUserUpdate Policy" |

    @e2e-seamless-one-std @e2e-seamless-one-std-policy
    Scenario Outline: STD-TC-30538, TC-30522: Reseller other than operator is not able to see the policy mapping page on the web portal
        Given Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify that no SETTINGS Tab should be visible on leftside menu
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD |
            | "dist1"     | "2023"   |

    @e2e-seamless-one-std @e2e-seamless-one-std-policy
    Scenario Outline: STD-TC-30517: Operator is able to view policy
        Given Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to policy page
        And Password Policy should be visible inside table <POLICY_NAME>
        And I click on view button <POLICY_NAME>
        And I verify policy details <DESCRIPTION> <START_DATE> <END_DATE>
        Examples:
            | RESELLER_ID | PASSWORD | POLICY_NAME       | DESCRIPTION                 | START_DATE            | END_DATE              |
            | "OPERATOR"  | "2023"   | "Operator Policy" | "This is a Operator policy" | "2021-02-12 11:51:14" | "2099-01-01 00:00:00" |

    @e2e-seamless-one-std @e2e-seamless-one-std-policy
    Scenario Outline: TC-30526: Operator is able to create a new policy mapping
        Given Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to policy mapping page
        And I click on Create New Policy Mapping button
        When I enter policy mapping information <POLICY>
        Then I am able to validate proper message <MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | POLICY               | MESSAGE   |
            | "OPERATOR"  | "2023"   | "Distributor Policy" | "Success" |
