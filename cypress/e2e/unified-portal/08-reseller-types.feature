Feature: 08-Reseller Types Feature
    As a user on the unified portal Application
    I want to Create Reseller Types

    Background: Enter UserId and Password annd perform Login
        Given I am on the unified portal login page

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28043: Operator or web admin user should be able to create multiple reseller types in the system
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to the Reseller Types Page
        When I enter reseller type information <IMPORT_ID> <NAME> <DESCRIPTION> <ROLE> <SELECT_MPOS_SUPPORT_TYPE> <SELECT_REPORT_GROUP>
        And I click next button
        And I select reseller type settings <SETTING1> <SETTING2> <SETTING3>
        And I click next button
        And I select sub-reseller types <SUB_RESELLER_TYPE1> <SUB_RESELLER_TYPE2>
        And I select allowed-reseller types <ALLOWED_RESELLER_TYPE>
        And I click submit button
        Then I am able to validate proper message <MESSAGE>
        And Reseller Types created should be visible inside table <IMPORT_ID>
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | IMPORT_ID  | NAME         | DESCRIPTION                   | ROLE      | SELECT_MPOS_SUPPORT_TYPE | SELECT_REPORT_GROUP | MESSAGE                               | SUB_RESELLER_TYPE1 | SUB_RESELLER_TYPE2 | ALLOWED_RESELLER_TYPE | SETTING1          | SETTING2 | SETTING3          |
            | "OPERATOR" | "2023"   | "test-1-1" | "Test Type1" | "This is test reseller type1" | "webuser" | ""                       | ""                  | "Reseller Type created successfully." | "Sub Distributor"  | "FranchiseShop"    | "POS"                 | "Allow Web login" | "Used"   | "Allow Terminals" |
            | "OPERATOR" | "2023"   | "test-1-2" | "Test Type2" | "This is test reseller type2" | "webuser" | ""                       | ""                  | "Reseller Type created successfully." | "Sub Distributor"  | "FranchiseShop"    | "POS"                 | "Allow Web login" | "Used"   | "Allow Terminals" |

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28045: Create reseller type with other than operator i.e. Distributor, sub-distributor etc
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to the Reseller Types Page
        And I verify not authorized when tried to access reseller types page
        Then I logout
        Examples:
            | USERNAME | PASSWORD |
            | "DIST1"  | "2023"   |

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28046: All operators (contains, ends with, starts with and equal) are visible under filters option
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to the Reseller Types Page
        Then I click on filters
        And I verify filter options
        Examples:
            | USERNAME   | PASSWORD | IMPORT_ID   | NAME                   | DESCRIPTION                   | SELECT_MPOS_SUPPORT_TYPE  | SELECT_REPORT_GROUP | MESSAGE                               | SUB_RESELLER_TYPE |
            | "OPERATOR" | "2023"   | "newRType3" | "New Resellert Type 3" | "This is new reseller type 3" | "Sync all MPOS terminals" | "Web"               | "Reseller Type created successfully." | " "               |

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28044: Create reseller type with empty importID and name
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to the Reseller Types Page
        When I enter reseller type information <IMPORT_ID> <NAME> <DESCRIPTION> <ROLE> <SELECT_MPOS_SUPPORT_TYPE> <SELECT_REPORT_GROUP>
        And I click next button
        Then I am able to validate proper message <MESSAGE>
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | IMPORT_ID | NAME | DESCRIPTION                   | ROLE      | SELECT_MPOS_SUPPORT_TYPE | SELECT_REPORT_GROUP | MESSAGE                        | SUB_RESELLER_TYPE1 | SUB_RESELLER_TYPE2 | ALLOWED_RESELLER_TYPE | SETTING1          | SETTING2 | SETTING3          |
            | "OPERATOR" | "2023"   | ""        | ""   | "This is test reseller type1" | "webuser" | ""                       | ""                  | "importId is a required field" | "Sub Distributor"  | "FranchiseShop"    | "POS"                 | "Allow Web login" | "Used"   | "Allow Terminals" |

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28049: Operator is able to search reseller types with valid Name
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to the Reseller Types Page
        Then I click on filters
        And I select filter column <FILTER_COLUMN>
        And I select filter option <FILTER_OPTION>
        And I enter filter value <FILTER_VALUE>
        Then Reseller type with name <FILTER_VALUE> should be visible on the screen
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | FILTER_COLUMN | FILTER_OPTION | FILTER_VALUE |
            | "OPERATOR" | "2023"   | "Name"        | "equals"      | "Agent"      |

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28047: Operator is able to search reseller types with valid reseller type ID
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to the Reseller Types Page
        Then I click on filters
        And I select filter column <FILTER_COLUMN>
        And I select filter option <FILTER_OPTION>
        And I enter filter value <FILTER_VALUE>
        Then Reseller type with name <FILTER_VALUE> should be visible on the screen
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | FILTER_COLUMN | FILTER_OPTION | FILTER_VALUE |
            | "OPERATOR" | "2023"   | "ID"          | "equals"      | "POS"        |

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28048: Operator is not able to search reseller types with invalid reseller type ID
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to the Reseller Types Page
        Then I click on filters
        And I select filter column <FILTER_COLUMN>
        And I select filter option <FILTER_OPTION>
        And I enter filter value <FILTER_VALUE>
        Then Reseller types table should be empty
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | FILTER_COLUMN | FILTER_OPTION | FILTER_VALUE |
            | "OPERATOR" | "2023"   | "ID"          | "equals"      | "123"        |

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28050: Operator is not able to search reseller types with invalid reseller type Name
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to the Reseller Types Page
        Then I click on filters
        And I select filter column <FILTER_COLUMN>
        And I select filter option <FILTER_OPTION>
        And I enter filter value <FILTER_VALUE>
        Then Reseller types table should be empty
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | FILTER_COLUMN | FILTER_OPTION | FILTER_VALUE |
            | "OPERATOR" | "2023"   | "Name"        | "equals"      | "TestName"   |

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28053: Operator is able to edit Reseller type
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to the Reseller Types Page
        And I search for reseller type with import ID <IMPORT_ID>
        And I click on edit button <IMPORT_ID>
        And I verify import id is disabled
        When I edit fields <NAME> <DESCRIPTION> <SELECT_MPOS_SUPPORT_TYPE> <SELECT_REPORT_GROUP> <RESELLER_TYPE_SETTINGS>
        Then I am able to validate proper message <MESSAGE>
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | IMPORT_ID | NAME          | DESCRIPTION | SELECT_MPOS_SUPPORT_TYPE | SELECT_REPORT_GROUP | MESSAGE                               | RESELLER_TYPE_SETTINGS |
            | "OPERATOR" | "2023"   | "POS"     | "POS_updated" | "updated"   | ""                       | ""                  | "Reseller Type updated successfully." | ""                     |

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28052: Operator is able to view Reseller type
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to the Reseller Types Page
        When I perform View Reseller Types having following parameters <IMPORT_ID> <NAME> <DESCRIPTION> <SELECT_MPOS_SUPPORT_TYPE> <SELECT_REPORT_GROUP> <RESELLER_TYPE_SETTINGS>
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | IMPORT_ID | NAME          | DESCRIPTION | SELECT_MPOS_SUPPORT_TYPE | SELECT_REPORT_GROUP | RESELLER_TYPE_SETTINGS |
            | "OPERATOR" | "2023"   | "POS"     | "POS_updated" | "updated"   | ""                       | ""                  | "true"                 |

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28051: Operator is able to apply COLUMNS filter on reseller type
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to the Reseller Types Page
        And I click on columns button
        And I toggle off the button for column <TOGGLE>
        And I search for any column <COLUMN>
        Then Column with toggle option should be visible <COLUMN>
        And I click on hide all button
        Then I verify all columns are hidden on screen
        And I perform Show all columns operation
        Then I verify all columns are visible on screen
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | TOGGLE | COLUMN |
            | "OPERATOR" | "2023"   | "id"   | "ID"   |

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28055: Operator is able to Export reseller types
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to the Reseller Types Page
        And I click on export button
        And I click on download button
        And I read file name <FILE_NAME>
        Then I delete file name <FILE_NAME>
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | FILE_NAME  |
            | "OPERATOR" | "2023"   | "data.csv" |

    @e2e-seamless-one-std @e2e-seamless-one-std-reseller
    Scenario Outline: STD-TC-28054: Operator is able to view parent Reseller type
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to the Reseller Types Page
        When I perform View Reseller Types having following parameters <IMPORT_ID> <NAME> <DESCRIPTION> <SELECT_MPOS_SUPPORT_TYPE> <SELECT_REPORT_GROUP> <RESELLER_TYPE_SETTINGS>
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | IMPORT_ID | NAME          | DESCRIPTION | SELECT_MPOS_SUPPORT_TYPE | SELECT_REPORT_GROUP | RESELLER_TYPE_SETTINGS |
            | "OPERATOR" | "2023"   | "POS"     | "POS_updated" | "updated"   | ""                       | ""                  | "true"                 |

