Feature: 07-Reseller Role Feature

    As a user on the unified portal Application
    I want to create resource role

    Background: Enter UserId and Password annd perform Login
        Given I am on the unified portal login page

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28056, 28057: Operator or web admin user should be able to add reseller roles for the resellers
        Given Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Reseller Role Page
        When I perform Create Reseller Role having following parameters <ROLE_NAME> <IMPORT_ID> <PASSWORD_POLICY> <ADDRESS_LOCK> <USER_ID> <DESCRIPTION>
        Then I am able to see the created Reseller Role successfully Type message <MESSAGE>
        And Reseller Role created should be visible inside table <ROLE_NAME>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ROLE_NAME   | IMPORT_ID   | PASSWORD_POLICY     | ADDRESS_LOCK | USER_ID | DESCRIPTION | MESSAGE                      |
            | "OPERATOR"  | "2023"   | "Test Role" | "test-role" | "Reseller web user" | ""           | ""      | ""          | "Role created successfully." |

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28060, 28062: Operator is able to Edit reseller roles
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Reseller Role Page
        And Reseller Role created should be visible inside table <ROLE_NAME>
        And I verify import id is not editable
        When I perform Edit reseller role having following parameters <ROLE_NAME> <IMPORT_ID> <PASSWORD_POLICY> <ADDRESS_LOCK> <USER_ID> <DESCRIPTION>
        Then I am able to validate proper message <MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ROLE_NAME | IMPORT_ID | PASSWORD_POLICY     | ADDRESS_LOCK | USER_ID | DESCRIPTION | MESSAGE                      |
            | "OPERATOR"  | "2023"   | "webuser" | "webuser" | "Reseller web user" | ""           | ""      | "updated"   | "Role updated successfully." |

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28059: Operator is able to View reseller roles
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Reseller Role Page
        And Reseller Role created should be visible inside table <ROLE_NAME>
        When I perform View reseller <ROLE_NAME>
        Then I am able to validate following parameters <ROLE_NAME> <IMPORT_ID> <ADDRESS_LOCK> <USER_ID> <DESCRIPTION>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ROLE_NAME | IMPORT_ID | ADDRESS_LOCK | USER_ID | DESCRIPTION |
            | "OPERATOR"  | "2023"   | "webuser" | "webuser" | ""           | ""      | ""          |

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28058: Operator is not able to Add reseller role with empty name and ID
        Given Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Reseller Role Page
        When I perform Create Reseller Role having following parameters <ROLE_NAME> <IMPORT_ID> <PASSWORD_POLICY> <ADDRESS_LOCK> <USER_ID> <DESCRIPTION>
        Then I am able to validate proper message below field <ROLE_NAME_ERROR_MESSAGE> "Role Name"
        Then I am able to validate proper message below field <IMPORT_ID_ERROR_MESSAGE> "Import Id"
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ROLE_NAME | IMPORT_ID | PASSWORD_POLICY     | ADDRESS_LOCK | USER_ID | DESCRIPTION | MESSAGE                         |ROLE_NAME_ERROR_MESSAGE         |IMPORT_ID_ERROR_MESSAGE           |
            | "OPERATOR"  | "2023"   | ""        | ""        | "Reseller web user" | ""           | ""      | ""          | "Role Name is a required field" |"Role Name is a required field" |"Import Id is a required field"   |

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28061: Operator is able to Delete reseller roles
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Reseller Role Page
        And Reseller Role created should be visible inside table <ROLE_NAME>
        When I perform Delete reseller <ROLE_NAME>
        Then I am able to validate proper message <MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ROLE_NAME   | MESSAGE                     |
            | "OPERATOR"  | "2023"   | "Test Role" | "Role deleted successfully" |

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28063: Operator is not able to Search reseller roles with invalid Role Name
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Reseller Role Page
        Then I click on filters
        And I select filter column <FILTER_COLUMN>
        And I select filter option <FILTER_OPTION>
        And I enter filter value <ROLE_NAME>
        And Reseller roles table should be empty
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | ROLE_NAME | FILTER_COLUMN | FILTER_OPTION |
            | "OPERATOR"  | "2023"   | "Test123" | "Role Name"   | "equals"      |

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28064: Operator is able to Search reseller roles with valid Import ID
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Reseller Role Page
        Then I click on filters
        And I select filter column <FILTER_COLUMN>
        And I select filter option <FILTER_OPTION>
        And I enter filter value <IMPORT_ID>
        Then Reseller type with name <IMPORT_ID> should be visible on the screen
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | IMPORT_ID | FILTER_COLUMN | FILTER_OPTION |
            | "OPERATOR"  | "2023"   | "webuser" | "Import Id"   | "equals"      |

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28065: Operator is not able to Search reseller roles with invalid Import ID
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Reseller Role Page
        Then I click on filters
        And I select filter column <FILTER_COLUMN>
        And I select filter option <FILTER_OPTION>
        And I enter filter value <IMPORT_ID>
        And Reseller roles table should be empty
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | IMPORT_ID | FILTER_COLUMN | FILTER_OPTION |
            | "OPERATOR"  | "2023"   | "test123" | "Import Id"   | "equals"      |

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28067: Operator is able to Export reseller roles
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to the Reseller Role Page
        And I click on export button
        And I click on download button
        And I read file name <FILE_NAME>
        Then I delete file name <FILE_NAME>
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | FILE_NAME  |
            | "OPERATOR" | "2023"   | "data.csv" |

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28066: Performing Show/Hide all columns operation with passing test data as data table
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Reseller Role Page
        And I perform Hide all columns operation
        Then I validate columns should not be displayed in the table
        And I perform Show all columns operation
        Then I validate columns should be displayed in the table
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD |
            | "OPERATOR"  | "2023"   |

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28375: Operator is not able to Delete reseller role it is associated with reseller
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Reseller Role Page
        When I perform Delete reseller <ROLE_NAME>
        Then I am able to validate proper message "Role is already assigned to a user."
        Examples:
            | RESELLER_ID | PASSWORD | ROLE_NAME |
            | "OPERATOR"  | "2023"   | "POS"     |

   