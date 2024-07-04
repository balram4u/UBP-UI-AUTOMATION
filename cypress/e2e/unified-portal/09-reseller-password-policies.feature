Feature: 09-Password Policies Feature

    As a user on the unified portal Application
    I want to create resource password policies

    Background: Enter UserId and Password annd perform Login
        Given I am on the unified portal login page

    ##################### STD ##########################

    @e2e-seamless-one-std
    Scenario Outline: STD-01 Operator user should be able to create password policies
        Given Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Reseller Password Policy Page
        When I create Password Policy with following parameters <POLICY_NAME> <PAGE_TITLE> <DESCRIPTION> <MIN_LENGTH> <MAX_LENGTH> <REG_EXP> <CHANGE_POLICY> <CREATE_POLICY> <CHANGE_TEMPKEY> <CREATE_TEMPKEY> <LEGAL_CHAR> and <ENCRIPTION>
        And I click on submit
        Then I am able to validate proper message <MESSAGE>
        And Password Policy created should be visible inside table <POLICY_NAME>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | POLICY_NAME  | DESCRIPTION         | MIN_LENGTH | MAX_LENGTH | REG_EXP     | CHANGE_POLICY | CREATE_POLICY | CHANGE_TEMPKEY                   | CREATE_TEMPKEY                    | LEGAL_CHAR | ENCRIPTION | MESSAGE                                 | PAGE_TITLE |
            | "OPERATOR"  | "2023"   | "TestPolicy" | "Create-testpolicy" | "1"        | "5"        | "AutoAdmin" | "AdminChange" | "Auto create" | "Default password reset message" | "Default password create message" | "Any"      | "MD5"      | "Password policy created successfully." | ""         |

    @e2e-seamless-one-std
    Scenario Outline: STD-TC-28070: Operator user should be able to edit password policies
        Given Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Reseller Password Policy Page
        And Password Policy created should be visible inside table <POLICY_NAME>
        When I update Password Policy with following parameters <POLICY_NAME> <PAGE_TITLE> <DESCRIPTION> <MIN_LENGTH> <MAX_LENGTH> <REG_EXP> <CHANGE_POLICY> <CREATE_POLICY> <CHANGE_TEMPKEY> <CREATE_TEMPKEY> <LEGAL_CHAR> and <ENCRIPTION>
        Then I click on update button
        Then I am able to validate proper message <MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | POLICY_NAME  | DESCRIPTION         | MIN_LENGTH | MAX_LENGTH | REG_EXP     | CHANGE_POLICY | CREATE_POLICY | CHANGE_TEMPKEY                   | CREATE_TEMPKEY                    | LEGAL_CHAR                   | ENCRIPTION | MESSAGE                                 | PAGE_TITLE |
            | "OPERATOR"  | "2023"   | "TestPolicy" | "Create-testpolicy" | "3"        | "11"       | "AutoAdmin" | "ResetEmail"  | "User create" | "Default password reset message" | "Default password create message" | "Digits and capital letters" | "SHA-1"    | "Password policy updated successfully." | ""         |

    @e2e-seamless-one-std
    Scenario Outline: STD-TC-28068: Operator user should be able to view password policies
        Given Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Reseller Password Policy Page
        And Password Policy created should be visible inside table <POLICY_NAME>
        When I perform View password policy <POLICY_NAME>
        Then I am able to validate following parameters <POLICY_NAME> <DESCRIPTION> <MIN_LENGTH> <MAX_LENGTH> <REG_EXP> <CHANGE_POLICY> <CREATE_POLICY> <LEGAL_CHAR> and <ENCRIPTION>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | POLICY_NAME  | DESCRIPTION         | MIN_LENGTH | MAX_LENGTH | REG_EXP     | CHANGE_POLICY | CREATE_POLICY | LEGAL_CHAR | ENCRIPTION |
            | "OPERATOR"  | "2023"   | "TestPolicy" | "Create-testpolicy" | "3"        | "11"       | "AutoAdmin" | "ResetEmail"  | "UserCreate"  | ""         | ""         |

    @e2e-seamless-one-std
    Scenario Outline: STD-TC-28069: Operator user should be able to delete password policies
        Given Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Reseller Password Policy Page
        And Password Policy created should be visible inside table <POLICY_NAME>
        And I click on delete button <POLICY_NAME>
        And I verify the delete confirmation pop up appears
        And I click Yes to confirm operation
        And I am able to validate proper message "Password policy deleted successfully."
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | POLICY_NAME  |
            | "OPERATOR"  | "2023"   | "TestPolicy" |

    @e2e-seamless-one-std
    Scenario Outline: STD-TC-28071: Password policy tab should not be visible to any reseller other than opeator
        Given Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Reseller Password Policy Page
        And I verify not authorized screen is visible
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD |
            | "Dist1"     | "2023"   |

