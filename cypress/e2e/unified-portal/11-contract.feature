Feature: 11-Contract Feature

  As a user on the unified portal Application
  I want to add contract

  Background: Enter UserId and Password and perform Login
    Given I am on the unified portal login page

  ############################ Standard #####################################

  @e2e-seamless-one-std @e2e-seamless-one-std-contracts
  Scenario Outline: STD-TC-27833: Performing Create contract operation with passing test data as data table
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    And I click on create contract button
    And I enter data for contract creation with params <CONTRACT_TYPE> <NAME> <IMPORT_ID> <DESC> <RESELLER_TYPE> <COUNTRY> <CONTRACT_STATUS> <COMMISSION_MODE> <REGION>
    And I click submit button
    Then I am able to validate proper message "Successfully created contract"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | CONTRACT_TYPE | REGION | NAME     | IMPORT_ID   | DESC   | RESELLER_TYPE | COUNTRY  | CONTRACT_STATUS | COMMISSION_MODE | REGION        |
      | "OPERATOR" | "2023"   | "Regular"     | ""     | "Test14" | "Test_ID14" | "TEMP" | "ALL"         | "Sweden" | "Active"        | "Instant"       | "All Regions" |

  @e2e-seamless-one-std @e2e-seamless-one-std-contracts
  Scenario Outline: STD-TC-27834,27836: Operator is not able to Create a new Contract without mandatory fields
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    And I click on create contract button
    And I enter data for contract creation with params <CONTRACT_TYPE> <NAME> <IMPORT_ID> <DESC> <RESELLER_TYPE> <COUNTRY> <CONTRACT_STATUS> <COMMISSION_MODE> <REGION>
    And I click submit button
    Then I am able to validate proper message "Contract name is required!"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | CONTRACT_TYPE | REGION | NAME | IMPORT_ID | DESC   | RESELLER_TYPE | COUNTRY  | CONTRACT_STATUS | COMMISSION_MODE | REGION        |
      | "OPERATOR" | "2023"   | "Regular"     | ""     | ""   | ""        | "TEMP" | "ALL"         | "Sweden" | "Active"        | "Instant"       | "All Regions" |

  @e2e-seamless-one-std @e2e-seamless-one-std-contracts
  Scenario Outline: STD-TC-27837: Operator is able to View a contract
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    Then I enter contract info with parameters <SEARCH_FIELD> <NAME>
    And I click on View button
    And I verify fields are not editable
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | CONTRACT_TYPE | NAME     | SEARCH_FIELD |
      | "OPERATOR" | "2023"   | "Regular"     | "Test14" | "name"       |

  @e2e-seamless-one-std @e2e-seamless-one-std-contracts
  Scenario Outline: STD-TC-27838: Operator is able to Update a contract
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    Then I enter contract info with parameters <SEARCH_FIELD> <NAME>
    And I click on edit button
    And I enter a new name for contract <EDITED_NAME>
    And I click update button
    Then I am able to validate proper message "Successfully updated contract"
    Then Verify status on contracts page for contract name <EDITED_NAME> <CONTRACT_STATUS>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | CONTRACT_TYPE | NAME     | SEARCH_FIELD | EDITED_NAME     | CONTRACT_STATUS |
      | "OPERATOR" | "2023"   | "Regular"     | "Test14" | "name"       | "Test_update14" | "Active"        |

  @e2e-seamless-one-std @e2e-seamless-one-std-contracts
  Scenario Outline: STD-TC-27840: Operator is not able to Search a contract that does not exist
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    Then I enter contract info with parameters <SEARCH_FIELD> <NAME>
    And I verify edit button not visible
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | CONTRACT_TYPE | NAME           | SEARCH_FIELD |
      | "OPERATOR" | "2023"   | "Regular"     | "Operator1234" | "name"       |

  @e2e-seamless-one-std @e2e-seamless-one-std-contracts
  Scenario Outline: STD-TC-27841: Operator is able to Search a contract with a valid import ID
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    Then I enter contract info with parameters <SEARCH_FIELD> <ID>
    And I verify edit button is visible
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | CONTRACT_TYPE | ID         | SEARCH_FIELD |
      | "OPERATOR" | "2023"   | "Regular"     | "operator" | "importId"   |

  @e2e-seamless-one-std @e2e-seamless-one-std-contracts
  Scenario Outline: STD-TC-27842: Operator is able to Search a contract with an invalid import ID
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    Then I enter contract info with parameters <SEARCH_FIELD> <ID>
    And I verify edit button not visible
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | CONTRACT_TYPE | ID                | SEARCH_FIELD |
      | "OPERATOR" | "2023"   | "Regular"     | "operatorinvalid" | "importId"   |

  @e2e-seamless-one-std @e2e-seamless-one-std-contracts
  Scenario Outline: STD-TC-27843: Operator is able to Search contracts using reseller type filter
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    And I filter the contract with its name <FILTER_COLUMN> <FILTER_VALUE>
    Then I verify column is filtered based on <FILTER_COLUMN> <FILTER_VALUE>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | NAME | FILTER_COLUMN   | FILTER_VALUE |
      | "OPERATOR" | "2023"   | ""   | "Reseller Type" | "Agent"      |

  @e2e-seamless-one-std-not-in-use @e2e-seamless-one-std-contracts-not-in-use
  Scenario Outline: STD-TC-27844: Operator is able to Search contracts using active contract status filter
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    And I filter the contract with its name <FILTER_COLUMN> <FILTER_VALUE>
    Then I verify column is filtered based on <FILTER_COLUMN> <FILTER_VALUE>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | NAME | FILTER_COLUMN | FILTER_VALUE |
      | "OPERATOR" | "2023"   | ""   | "Status"      | "Active"     |

  @e2e-seamless-one-std-not-in-use @e2e-seamless-one-std-contracts-not-in-use
  Scenario Outline: STD-TC-27845: Operator is able to Search contracts using inactive contract status filter
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    And I filter the contract with its name <FILTER_COLUMN> <FILTER_VALUE>
    Then I verify column is filtered based on <FILTER_COLUMN> <FILTER_VALUE>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | NAME | FILTER_COLUMN | FILTER_VALUE |
      | "OPERATOR" | "2023"   | ""   | "Status"      | "Inactive"   |

  @e2e-seamless-one-std @e2e-seamless-one-std-contracts
  Scenario Outline: STD-TC-27847,27839: Operator is able to Clone a contract
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    Then I enter contract info with parameters <SEARCH_FIELD> <NAME>
    And I click on clone button
    And I enter data for contract clone with params <CLONED_NAME> <IMPORT_ID> <DESC> <RESELLER_TYPE> <COUNTRY> <CONTRACT_STATUS> <COMMISSION_MODE> <REGION>
    Then I am able to validate proper message "Successfully cloned contract"
    # changing status of cloned contract  to active from inactive
    Then I enter contract info with parameters <SEARCH_FIELD> <CLONED_NAME>
    And I click on edit button
    Then I change status of contract <CONTRACT_STATUS>
    And I click update button
    Then Verify status on contracts page for contract name <CLONED_NAME> <CONTRACT_STATUS>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | CONTRACT_TYPE | NAME            | IMPORT_ID       | DESC           | RESELLER_TYPE | COUNTRY  | CONTRACT_STATUS | COMMISSION_MODE | CLONED_NAME   | REGION | SEARCH_FIELD |
      | "OPERATOR" | "2023"   | "Regular"     | "Test_update14" | "Test_Cloned14" | "Clone test14" | "MSR"         | "Sweden" | "Active"        | "Instant"       | "CloneTest14" | ""     | "name"       |

  @e2e-seamless-one-std @e2e-seamless-one-std-contracts
  Scenario Outline: STD-TC-27848: Operator is able to add Margin
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    And I seach the Contract <NAME>
    And I click on Price button
    And I click on Create Margin
    And I verify Products page header
    And I search for the product and verify the search result with product name <PRODUCT_NAME>
    And I click on Product action <PRODUCT_NAME>
    # And I verify product page title <PRODUCT_NAME>
    # And click on action button for <ACTION_TYPE>
    And Click on Add Entities
    And Click on Add Entities
    And Enter price entry with given details <RANGE_FROM> <RANGE_TO> <ACCOUNT_TYPE1> <ACCOUNT_TYPE2> <ACCOUNT_TYPE3> <ACCOUNT_TYPE4> <ACCOUNT_ID1> <ACCOUNT_ID2> <ACCOUNT_ID3> <ACCOUNT_ID4> <VALUE1> <VALUE2> <VALUE3> <VALUE4> <CONTRACT_VALUE1> <CONTRACT_VALUE2> <CONTRACT_VALUE3> <CONTRACT_VALUE4> <WALLET_TYPE1> <WALLET_TYPE2> <WALLET_TYPE3> <WALLET_TYPE4> <TAG1> <TAG2> <TAG3> <TAG4>
    And Click on Add button
    And Click on Save
    Then I am able to validate proper message <SUCCESS_MSG>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | NAME            | PRODUCT_NAME            | ACTION_TYPE | RANGE_FROM | RANGE_TO   | ACCOUNT_TYPE1 | ACCOUNT_TYPE2 | ACCOUNT_TYPE3 | ACCOUNT_TYPE4 | SUCCESS_MSG                         | PRODUCT_TYPE | ACCOUNT_ID1 | ACCOUNT_ID2 | ACCOUNT_ID3           | ACCOUNT_ID4 | VALUE1       | VALUE2       | VALUE3       | VALUE4       | CONTRACT_VALUE1 | CONTRACT_VALUE2 | CONTRACT_VALUE3 | CONTRACT_VALUE4 | WALLET_TYPE1 | WALLET_TYPE2 | WALLET_TYPE3  | WALLET_TYPE4 | TAG1     | TAG2       | TAG3                  | TAG4         |
      | "OPERATOR" | "2023"   | "Test_update14" | "SccCommissionTransfer" | "transfer"  | "1"        | "99999999" | "Sender"      | "Receiver"    | "Fixed"       | "Receiver"    | "Product rule created successfully" | "transfer"   | ""          | ""          | "OPERATOR_COMMISSION" | ""          | "Expression" | "Expression" | "Percentage" | "Percentage" | "-x"            | "x"             | "-2.0"          | "2"             | "RESELLER"   | "RESELLER"   | "BOOKKEEPING" | "RESELLER"   | "SENDER" | "RECEIVER" | "RECEIVER_COMMISSION" | "COMMISSION" |

  @e2e-seamless-one-std @e2e-seamless-one-std-contracts
  Scenario Outline: STD-13-27859 Operator is able to View Rule
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    And I seach the Contract <NAME>
    And I click on Price button
    And I click on view product sku
    And I verify margin table is visible
    Examples:
      | USERNAME   | PASSWORD | NAME            | PRODUCT_NAME            | ACTION_TYPE | RANGE_FROM | RANGE_TO   | ACCOUNT_TYPE1 | ACCOUNT_TYPE2 | ACCOUNT_TYPE3 | ACCOUNT_TYPE4 | SUCCESS_MSG                         | PRODUCT_TYPE | ACCOUNT_ID1 | ACCOUNT_ID2 | ACCOUNT_ID3 | ACCOUNT_ID4 | VALUE1 | VALUE2 | VALUE3 | VALUE4 | CONTRACT_VALUE1 | CONTRACT_VALUE2 | CONTRACT_VALUE3 | CONTRACT_VALUE4 | WALLET_TYPE1 | WALLET_TYPE2 | WALLET_TYPE3 | WALLET_TYPE4 | TAG1 | TAG2 | TAG3 | TAG4 |
      | "OPERATOR" | "2023"   | "Test_update14" | "SccCommissionTransfer" | "transfer"  | "1"        | "99999999" | ""            | ""            | ""            | ""            | "Product rule updated successfully" | "transfer"   | ""          | ""          | ""          | ""          | ""     | ""     | ""     | ""     | ""              | ""              | ""              | ""              | ""           | ""           | ""           | ""           | ""   | ""   | ""   | ""   |

  @e2e-seamless-one-std @e2e-seamless-one-std-contracts
  Scenario Outline: STD-TC-27856 Operator is able to update status of a product rule to deactivate
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    And I seach the Contract <NAME>
    And I click on Price button
    And I click on product status toggle
    And I click on yes button
    Then I am able to validate proper message "Status changed successfully"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | NAME            | PRODUCT_NAME            | ACTION_TYPE | RANGE_FROM | RANGE_TO   | ACCOUNT_TYPE1 | ACCOUNT_TYPE2 | ACCOUNT_TYPE3 | ACCOUNT_TYPE4 | SUCCESS_MSG                         | PRODUCT_TYPE | ACCOUNT_ID1 | ACCOUNT_ID2 | ACCOUNT_ID3 | ACCOUNT_ID4 | VALUE1 | VALUE2 | VALUE3 | VALUE4 | CONTRACT_VALUE1 | CONTRACT_VALUE2 | CONTRACT_VALUE3 | CONTRACT_VALUE4 | WALLET_TYPE1 | WALLET_TYPE2 | WALLET_TYPE3 | WALLET_TYPE4 | TAG1 | TAG2 | TAG3 | TAG4 |
      | "OPERATOR" | "2023"   | "Test_update14" | "SccCommissionTransfer" | "transfer"  | "1"        | "99999999" | ""            | ""            | ""            | ""            | "Product rule updated successfully" | "transfer"   | ""          | ""          | ""          | ""          | ""     | ""     | ""     | ""     | ""              | ""              | ""              | ""              | ""           | ""           | ""           | ""           | ""   | ""   | ""   | ""   |

  @e2e-seamless-one-std @e2e-seamless-one-std-contracts
  Scenario Outline: STD-TC-27857: Operator is able to update status of a product rule to activate
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    And I seach the Contract <NAME>
    And I click on Price button
    And I click on product status toggle
    Then I am able to validate proper message "Status changed successfully"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | NAME            | PRODUCT_NAME            | ACTION_TYPE | RANGE_FROM | RANGE_TO   | ACCOUNT_TYPE1 | ACCOUNT_TYPE2 | ACCOUNT_TYPE3 | ACCOUNT_TYPE4 | SUCCESS_MSG                         | PRODUCT_TYPE | ACCOUNT_ID1 | ACCOUNT_ID2 | ACCOUNT_ID3 | ACCOUNT_ID4 | VALUE1 | VALUE2 | VALUE3 | VALUE4 | CONTRACT_VALUE1 | CONTRACT_VALUE2 | CONTRACT_VALUE3 | CONTRACT_VALUE4 | WALLET_TYPE1 | WALLET_TYPE2 | WALLET_TYPE3 | WALLET_TYPE4 | TAG1 | TAG2 | TAG3 | TAG4 |
      | "OPERATOR" | "2023"   | "Test_update14" | "SccCommissionTransfer" | "transfer"  | "1"        | "99999999" | ""            | ""            | ""            | ""            | "Product rule updated successfully" | "transfer"   | ""          | ""          | ""          | ""          | ""     | ""     | ""     | ""     | ""              | ""              | ""              | ""              | ""           | ""           | ""           | ""           | ""   | ""   | ""   | ""   |

  @e2e-seamless-one-std @e2e-seamless-one-std-contracts
  Scenario Outline: STD-TC-27850, 27860: Operator is able to Update Rule
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    And I seach the Contract <NAME>
    And I click on Price button
    And I click on edit Product SKU
    And I click on edit rule
    And Enter price entry with given details <RANGE_FROM> <RANGE_TO> <ACCOUNT_TYPE1> <ACCOUNT_TYPE2> <ACCOUNT_TYPE3> <ACCOUNT_TYPE4> <ACCOUNT_ID1> <ACCOUNT_ID2> <ACCOUNT_ID3> <ACCOUNT_ID4> <VALUE1> <VALUE2> <VALUE3> <VALUE4> <CONTRACT_VALUE1> <CONTRACT_VALUE2> <CONTRACT_VALUE3> <CONTRACT_VALUE4> <WALLET_TYPE1> <WALLET_TYPE2> <WALLET_TYPE3> <WALLET_TYPE4> <TAG1> <TAG2> <TAG3> <TAG4>
    And I click update button
    Then I am able to validate proper message <SUCCESS_MSG>
    And Verify Action on products page <PRODUCT_TYPE>
    Then I click on delete button for <PRODUCT_TYPE>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | NAME            | PRODUCT_NAME            | ACTION_TYPE | RANGE_FROM | RANGE_TO   | ACCOUNT_TYPE1 | ACCOUNT_TYPE2 | ACCOUNT_TYPE3 | ACCOUNT_TYPE4 | SUCCESS_MSG                         | PRODUCT_TYPE            | ACCOUNT_ID1 | ACCOUNT_ID2 | ACCOUNT_ID3 | ACCOUNT_ID4 | VALUE1 | VALUE2 | VALUE3 | VALUE4 | CONTRACT_VALUE1 | CONTRACT_VALUE2 | CONTRACT_VALUE3 | CONTRACT_VALUE4 | WALLET_TYPE1 | WALLET_TYPE2 | WALLET_TYPE3 | WALLET_TYPE4 | TAG1 | TAG2 | TAG3 | TAG4 |
      | "OPERATOR" | "2023"   | "Test_update14" | "SccCommissionTransfer" | "transfer"  | "1"        | "99999999" | ""            | ""            | ""            | ""            | "Product rule updated successfully" | "SccCommissionTransfer" | ""          | ""          | ""          | ""          | ""     | ""     | ""     | ""     | ""              | ""              | ""              | ""              | ""           | ""           | ""           | ""           | ""   | ""   | ""   | ""   |

  @e2e-seamless-one-std @e2e-seamless-one-std-contracts
  Scenario Outline: STD-TC-27849: Performing Create contract operation with passing test data as data table (to add multiple SKU products)
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    And I click on create contract button
    And I enter data for contract creation with params <CONTRACT_TYPE> <NAME> <IMPORT_ID> <DESC> <RESELLER_TYPE> <COUNTRY> <CONTRACT_STATUS> <COMMISSION_MODE> <REGION>
    And I click submit button
    Then I am able to validate proper message "Successfully created contract"
    Examples:
      | USERNAME   | PASSWORD | CONTRACT_TYPE | REGION | NAME     | IMPORT_ID   | DESC   | RESELLER_TYPE | COUNTRY  | CONTRACT_STATUS | COMMISSION_MODE | REGION        |
      | "OPERATOR" | "2023"   | "Regular"     | ""     | "Test15" | "Test_ID15" | "TEMP" | "ALL"         | "Sweden" | "Active"        | "Instant"       | "All Regions" |

  @e2e-seamless-one-std @e2e-seamless-one-std-contracts
  Scenario Outline: STD-TC-27849: Operator is able to Add margin for multi-SKU products
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    And I seach the Contract <NAME>
    And I click on Price button
    And I click on Create Margin
    And I verify Products page header
    And I search for the product and verify the search result with product name <PRODUCT_NAME>
    And I click on Product action <PRODUCT_NAME>
    And Click on Add Entities
    And Click on Add Entities
    And Enter price entry with given details <RANGE_FROM> <RANGE_TO> <ACCOUNT_TYPE1> <ACCOUNT_TYPE2> <ACCOUNT_TYPE3> <ACCOUNT_TYPE4> <ACCOUNT_ID1> <ACCOUNT_ID2> <ACCOUNT_ID3> <ACCOUNT_ID4> <VALUE1> <VALUE2> <VALUE3> <VALUE4> <CONTRACT_VALUE1> <CONTRACT_VALUE2> <CONTRACT_VALUE3> <CONTRACT_VALUE4> <WALLET_TYPE1> <WALLET_TYPE2> <WALLET_TYPE3> <WALLET_TYPE4> <TAG1> <TAG2> <TAG3> <TAG4>
    And Click on Add button
    And Click on Save
    Then I am able to validate proper message <SUCCESS_MSG>
    And Verify Action on products page <PRODUCT_NAME>
    # 2nd product
    And I click on Create Margin
    And I verify Products page header
    And I search for the product and verify the search result with product name <PRODUCT_NAME2>
    And I click on Product action <PRODUCT_NAME2>
    And Click on Add Entities
    And Click on Add Entities
    And Enter price entry with given details <RANGE_FROM2> <RANGE_TO2> <ACCOUNT_TYPE1_2> <ACCOUNT_TYPE2_2> <ACCOUNT_TYPE3_2> <ACCOUNT_TYPE4_2> <ACCOUNT_ID1_2> <ACCOUNT_ID2_2> <ACCOUNT_ID3_2> <ACCOUNT_ID4_2> <VALUE1_2> <VALUE2_2> <VALUE3_2> <VALUE4_2> <CONTRACT_VALUE1_2> <CONTRACT_VALUE2_2> <CONTRACT_VALUE3_2> <CONTRACT_VALUE4_2> <WALLET_TYPE1_2> <WALLET_TYPE2_2> <WALLET_TYPE3_2> <WALLET_TYPE4_2> <TAG1_2> <TAG2_2> <TAG3_2> <TAG4_2>
    And Click on Add button
    And Click on Save
    Then I am able to validate proper message <SUCCESS_MSG>
    And Verify Action on products page <PRODUCT_TYPE2>
    Then I click on delete button for <PRODUCT_TYPE1>
    Then I click on delete button for <PRODUCT_TYPE2>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | NAME     | PRODUCT_NAME            | ACTION_TYPE | RANGE_FROM | RANGE_TO   | ACCOUNT_TYPE1 | ACCOUNT_TYPE2 | ACCOUNT_TYPE3 | ACCOUNT_TYPE4 | SUCCESS_MSG                         | PRODUCT_TYPE1           | ACCOUNT_ID1 | ACCOUNT_ID2 | ACCOUNT_ID3           | ACCOUNT_ID4 | VALUE1       | VALUE2       | VALUE3       | VALUE4       | CONTRACT_VALUE1 | CONTRACT_VALUE2 | CONTRACT_VALUE3 | CONTRACT_VALUE4 | WALLET_TYPE1 | WALLET_TYPE2 | WALLET_TYPE3  | WALLET_TYPE4 | TAG1     | TAG2       | TAG3                  | TAG4         | PRODUCT_TYPE2 | PRODUCT_NAME2 | ACTION_TYPE2 | RANGE_FROM2 | RANGE_TO2  | ACCOUNT_TYPE1_2 | ACCOUNT_TYPE2_2 | ACCOUNT_TYPE3_2 | ACCOUNT_TYPE4_2 | SUCCESS_MSG_2                       | PRODUCT_TYPE_2 | ACCOUNT_ID1_2 | ACCOUNT_ID2_2 | ACCOUNT_ID3_2         | ACCOUNT_ID4_2 | VALUE1_2     | VALUE2_2     | VALUE3_2     | VALUE4_2     | CONTRACT_VALUE1_2 | CONTRACT_VALUE2_2 | CONTRACT_VALUE3_2 | CONTRACT_VALUE4_2 | WALLET_TYPE1_2 | WALLET_TYPE2_2 | WALLET_TYPE3_2 | WALLET_TYPE4_2 | TAG1_2   | TAG2_2     | TAG3_2                | TAG4_2       |
      | "OPERATOR" | "2023"   | "Test15" | "SccCommissionTransfer" | "transfer"  | "1"        | "99999999" | "Sender"      | "Receiver"    | "Fixed"       | "Receiver"    | "Product rule created successfully" | "SccCommissionTransfer" | ""          | ""          | "OPERATOR_COMMISSION" | ""          | "Expression" | "Expression" | "Percentage" | "Percentage" | "-x"            | "x"             | "-2.0"          | "2"             | "RESELLER"   | "RESELLER"   | "BOOKKEEPING" | "RESELLER"   | "SENDER" | "RECEIVER" | "RECEIVER_COMMISSION" | "COMMISSION" | "topup"       | "topup"       | "topup"      | "1"         | "99999999" | "Sender"        | "Receiver"      | "Fixed"         | "Receiver"      | "Product rule created successfully" | "transfer"     | ""            | ""            | "OPERATOR_COMMISSION" | ""            | "Expression" | "Expression" | "Percentage" | "Percentage" | "-x"              | "x"               | "-2.0"            | "2"               | "RESELLER"     | "RESELLER"     | "BOOKKEEPING"  | "RESELLER"     | "SENDER" | "RECEIVER" | "RECEIVER_COMMISSION" | "COMMISSION" |

  @e2e-seamless-one-std @e2e-seamless-one-std-contracts
  Scenario Outline: STD-TC-27851: Operator is able to Add margin with multiple ranges
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    And I seach the Contract <NAME>
    And I click on Price button
    And I click on Create Margin
    And I verify Products page header
    And I search for the product and verify the search result with product name <PRODUCT_NAME>
    And I click on Product action <PRODUCT_NAME>
    And Click on Add Entities
    And Click on Add Entities
    And Enter price entry with given details <RANGE_FROM> <RANGE_TO> <ACCOUNT_TYPE1> <ACCOUNT_TYPE2> <ACCOUNT_TYPE3> <ACCOUNT_TYPE4> <ACCOUNT_ID1> <ACCOUNT_ID2> <ACCOUNT_ID3> <ACCOUNT_ID4> <VALUE1> <VALUE2> <VALUE3> <VALUE4> <CONTRACT_VALUE1> <CONTRACT_VALUE2> <CONTRACT_VALUE3> <CONTRACT_VALUE4> <WALLET_TYPE1> <WALLET_TYPE2> <WALLET_TYPE3> <WALLET_TYPE4> <TAG1> <TAG2> <TAG3> <TAG4>
    And Click on Add range button
    And Enter another price entry with given details <RANGE_FROM2> <RANGE_TO2> <ACCOUNT_TYPE1_2> <ACCOUNT_TYPE2_2> <ACCOUNT_ID1_2> <ACCOUNT_ID2_2> <VALUE1_2> <VALUE2_2> <CONTRACT_VALUE1_2> <CONTRACT_VALUE2_2> <WALLET_TYPE1_2> <WALLET_TYPE2_2> <TAG1_2> <TAG2_2>
    And Click on Add button
    And Click on Save
    Then I am able to validate proper message <SUCCESS_MSG>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | NAME   | PRODUCT_NAME | ACTION_TYPE | RANGE_FROM | RANGE_TO | ACCOUNT_TYPE1 | ACCOUNT_TYPE2 | ACCOUNT_TYPE3 | ACCOUNT_TYPE4 | SUCCESS_MSG                         | PRODUCT_TYPE | ACCOUNT_ID1 | ACCOUNT_ID2 | ACCOUNT_ID3           | ACCOUNT_ID4 | VALUE1       | VALUE2       | VALUE3       | VALUE4       | CONTRACT_VALUE1 | CONTRACT_VALUE2 | CONTRACT_VALUE3 | CONTRACT_VALUE4 | WALLET_TYPE1 | WALLET_TYPE2 | WALLET_TYPE3  | WALLET_TYPE4 | TAG1     | TAG2       | TAG3                  | TAG4         | RANGE_FROM2 | RANGE_TO2 | ACCOUNT_TYPE1_2 | ACCOUNT_TYPE2_2 | ACCOUNT_ID1_2 | ACCOUNT_ID2_2 | VALUE1_2     | VALUE2_2     | CONTRACT_VALUE1_2 | CONTRACT_VALUE2_2 | WALLET_TYPE1_2 | WALLET_TYPE2_2 | TAG1_2   | TAG2_2     |
      | "OPERATOR" | "2023"   | "Test" | "SIM_4G"     | "SIM_4G"    | "1"        | "100000" | "Sender"      | "Receiver"    | "Fixed"       | "Receiver"    | "Product rule created successfully" | "transfer"   | ""          | ""          | "OPERATOR_COMMISSION" | ""          | "Expression" | "Expression" | "Percentage" | "Percentage" | "-x"            | "x"             | "-2.0"          | "2"             | "RESELLER"   | "RESELLER"   | "BOOKKEEPING" | "RESELLER"   | "SENDER" | "RECEIVER" | "RECEIVER_COMMISSION" | "COMMISSION" | "100001"    | "200000"  | "Sender"        | "Receiver"      | ""            | ""            | "Expression" | "Expression" | "-x"              | "x"               | "RESELLER"     | "RESELLER"     | "SENDER" | "RECEIVER" |


  @e2e-seamless-one-std @e2e-seamless-one-std-contracts
  Scenario Outline: STD-TC-27858: Operator is able to export contract price entries
    Given Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    And I seach the Contract <NAME>
    And I click on Price button
    And I click on export button
    And I click on download button
    And I read file name <FILE_NAME>
    Then I delete file name <FILE_NAME>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | NAME        | FILE_NAME  |
      | "OPERATOR" | "2023"   | "Warehouse" | "data.csv" |


  @e2e-seamless-one-std @e2e-seamless-one-std-contracts
  Scenario Outline: STD-TC-27853,TC-27852: Operator is able to Add margin with new entity for absolute commision and percentage commission
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    And I seach the Contract <NAME>
    And I click on Price button
    And I click on Create Margin
    And I verify Products page header
    And I search for the product and verify the search result with product name <PRODUCT_NAME>
    And I click on Product action <PRODUCT_NAME>
    And Click on Add Entities
    And Click on Add Entities
    And Enter price entry with given details <RANGE_FROM> <RANGE_TO> <ACCOUNT_TYPE1> <ACCOUNT_TYPE2> <ACCOUNT_TYPE3> <ACCOUNT_TYPE4> <ACCOUNT_ID1> <ACCOUNT_ID2> <ACCOUNT_ID3> <ACCOUNT_ID4> <VALUE1> <VALUE2> <VALUE3> <VALUE4> <CONTRACT_VALUE1> <CONTRACT_VALUE2> <CONTRACT_VALUE3> <CONTRACT_VALUE4> <WALLET_TYPE1> <WALLET_TYPE2> <WALLET_TYPE3> <WALLET_TYPE4> <TAG1> <TAG2> <TAG3> <TAG4>
    And Click on Add button
    And Click on Save
    Then I am able to validate proper message <SUCCESS_MSG>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | NAME   | PRODUCT_NAME | ACTION_TYPE | RANGE_FROM | RANGE_TO   | ACCOUNT_TYPE1 | ACCOUNT_TYPE2 | ACCOUNT_TYPE3 | ACCOUNT_TYPE4 | SUCCESS_MSG                         | PRODUCT_TYPE | ACCOUNT_ID1 | ACCOUNT_ID2 | ACCOUNT_ID3           | ACCOUNT_ID4 | VALUE1       | VALUE2       | VALUE3       | VALUE4       | CONTRACT_VALUE1 | CONTRACT_VALUE2 | CONTRACT_VALUE3 | CONTRACT_VALUE4 | WALLET_TYPE1 | WALLET_TYPE2 | WALLET_TYPE3  | WALLET_TYPE4 | TAG1     | TAG2       | TAG3                  | TAG4         |
      | "OPERATOR" | "2023"   | "Test" | "topup"      | "transfer"  | "1"        | "99999999" | "Sender"      | "Receiver"    | "Fixed"       | "Receiver"    | "Product rule created successfully" | "transfer"   | ""          | ""          | "OPERATOR_COMMISSION" | ""          | "Expression" | "Expression" | "Percentage" | "Percentage" | "-x"            | "x"             | "-2.0"          | "2"             | "RESELLER"   | "RESELLER"   | "BOOKKEEPING" | "RESELLER"   | "SENDER" | "RECEIVER" | "RECEIVER_COMMISSION" | "COMMISSION" |
      | "OPERATOR" | "2023"   | "Test" | "transfer"   | "transfer"  | "1"        | "99999999" | "Sender"      | "Receiver"    | "Fixed"       | "Receiver"    | "Product rule created successfully" | "transfer"   | ""          | ""          | "OPERATOR_COMMISSION" | ""          | "Expression" | "Expression" | "Absolute"   | "Absolute"   | "-x"            | "x"             | "-20"           | "20"            | "RESELLER"   | "RESELLER"   | "BOOKKEEPING" | "RESELLER"   | "SENDER" | "RECEIVER" | "RECEIVER_COMMISSION" | "COMMISSION" |


  @e2e-seamless-one-std @e2e-seamless-one-std-contracts
  Scenario Outline: STD-TC-27836: Reseller other than operator is not able to view the Contract tab
    Given Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    And I verify not authorized screen is visible
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD |
      | "Dist1"     | "2023"   |

  @e2e-seamless-one-std @e2e-seamless-one-std-contracts
  Scenario Outline: STD-TC-27835: Operator should not enter a string that exceeds max characters limit
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    And I click on create contract button
    And I enter data for contract creation with params <CONTRACT_TYPE> <NAME> <IMPORT_ID> <DESC> <RESELLER_TYPE> <COUNTRY> <CONTRACT_STATUS> <COMMISSION_MODE> <REGION>
    And I click submit button
    Then I am able to validate proper message "Unexpected error"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | CONTRACT_TYPE | REGION | NAME                                                                                                                                                                                                                                                               | IMPORT_ID                                                                                                                                                                                                                                                          | DESC                                                                                                                                                                                                                                                                  | RESELLER_TYPE | COUNTRY  | CONTRACT_STATUS | COMMISSION_MODE | REGION        |
      | "OPERATOR" | "2023"   | "Regular"     | ""     | "ContractNameMaxStringLengthassaxsshhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhffffhhhhhhhhhhhhhhhhhhhhhhhhffedsfdsfdsfedefewdfefdewdedededewdewdfewdewdewsedewsdeasdasdasdwdwedwedewdwdwdwqdwqdedfeadasdwdwdesdeasedwasdsdwdwqdwswdawdwqasqwaswqswwswasswasdwqdwqedqwdwqdwqd" | "Test_ID15"                                                                                                                                                                                                                                                        | "TEMP"                                                                                                                                                                                                                                                                | "ALL"         | "Sweden" | "Active"        | "Instant"       | "All Regions" |
      | "OPERATOR" | "2023"   | "Regular"     | ""     | "Test_15"                                                                                                                                                                                                                                                          | "contractImportIDmaxlengthstringhhhhhhhhhhhffffhhhhhhhhhhhhhhhhhhhhhhhhffedsfdsfdsfedefewdfefdewdedededewdewdfewdewdewsedewsdeasdasdasdwdwedwedewdwdwdwqdwqdedfeadasdwdwdesdeasedwasdsdwdwqdwswdawdwqasqwaswqswwswasswasdwqdwqedqweedwqdwqdwqsdwqdwqdedwdwdwsdwqd" | "TEMP"                                                                                                                                                                                                                                                                | "ALL"         | "Sweden" | "Active"        | "Instant"       | "All Regions" |
      | "OPERATOR" | "2023"   | "Regular"     | ""     | "Test_16"                                                                                                                                                                                                                                                          | "Test_ID16"                                                                                                                                                                                                                                                        | "ContractDescriptionMaxLengthStringhhhhhhhhhhhffffhhhhhhhhhhhhhhhhhhhhhhhhffedsfdsfdsfedefewdfefdewdedededewdewdfewdewdewsedewsdeasdasdasdwdwedwedewdwdwdwqdwqdedfeadasdwdwdesdeasedwasdsdwdwqdwswdawdwqasqwaswqswwswasswasdwqdwqedqweedwqdwqdwqsdwqdwqdedwdwdwsdwqd" | "ALL"         | "Sweden" | "Active"        | "Instant"       | "All Regions" |

  @e2e-seamless-one-std @e2e-seamless-one-std-contracts
  Scenario Outline: STD-TC-27850: Operator is able to Add margin that starts later
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the contracts Page
    And I seach the Contract <NAME>
    And I click on Price button
    And I click on Create Margin
    And I verify Products page header
    And I search for the product and verify the search result with product name <PRODUCT_NAME>
    And I click on Product action <PRODUCT_NAME>
    And I click on toggle button and select the date
    And Click on Add Entities
    And Click on Add Entities
    And Enter price entry with given details <RANGE_FROM> <RANGE_TO> <ACCOUNT_TYPE1> <ACCOUNT_TYPE2> <ACCOUNT_TYPE3> <ACCOUNT_TYPE4> <ACCOUNT_ID1> <ACCOUNT_ID2> <ACCOUNT_ID3> <ACCOUNT_ID4> <VALUE1> <VALUE2> <VALUE3> <VALUE4> <CONTRACT_VALUE1> <CONTRACT_VALUE2> <CONTRACT_VALUE3> <CONTRACT_VALUE4> <WALLET_TYPE1> <WALLET_TYPE2> <WALLET_TYPE3> <WALLET_TYPE4> <TAG1> <TAG2> <TAG3> <TAG4>
    And Click on Add button
    And Click on Save
    Then I am able to validate proper message <SUCCESS_MSG>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | NAME   | PRODUCT_NAME            | ACTION_TYPE             | RANGE_FROM | RANGE_TO   | ACCOUNT_TYPE1 | ACCOUNT_TYPE2 | ACCOUNT_TYPE3 | ACCOUNT_TYPE4 | SUCCESS_MSG                         | PRODUCT_TYPE | ACCOUNT_ID1 | ACCOUNT_ID2 | ACCOUNT_ID3           | ACCOUNT_ID4 | VALUE1       | VALUE2       | VALUE3       | VALUE4       | CONTRACT_VALUE1 | CONTRACT_VALUE2 | CONTRACT_VALUE3 | CONTRACT_VALUE4 | WALLET_TYPE1 | WALLET_TYPE2 | WALLET_TYPE3  | WALLET_TYPE4 | TAG1     | TAG2       | TAG3                  | TAG4         |
      | "OPERATOR" | "2023"   | "Test" | "SccCommissionTransfer" | "SccCommissionTransfer" | "1"        | "99999999" | "Sender"      | "Receiver"    | "Fixed"       | "Receiver"    | "Product rule created successfully" | "transfer"   | ""          | ""          | "OPERATOR_COMMISSION" | ""          | "Expression" | "Expression" | "Percentage" | "Percentage" | "-x"            | "x"             | "-2.0"          | "2"             | "RESELLER"   | "RESELLER"   | "BOOKKEEPING" | "RESELLER"   | "SENDER" | "RECEIVER" | "RECEIVER_COMMISSION" | "COMMISSION" |


