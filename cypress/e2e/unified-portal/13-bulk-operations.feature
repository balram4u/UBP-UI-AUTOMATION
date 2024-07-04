Feature: 13-Bulk Operation Feature

  As a user on the unified portal Application
  I want to perform bulk operations

  Background: Enter UserId and Password annd perform Login
    Given I am on the unified portal login page

  #bug card UBP-1689
  ######################## Standard ########################
  @e2e-seamless-one-std @e2e-seamless-one-std-bulk
  Scenario Outline: STD-01 Inventory Serialised Bulk import with blank CSV file
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the bulk import page
    And I wait for "8000" miliseconds
    When I perform import bulk operation with params <IMPORT_SUB_TYPE> <FILE_NAME>
    Then I am able to validate proper message "No more CSV records available"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | IMPORT_SUB_TYPE        | FILE_NAME                      |
      | "OPERATOR" | "2023"   | "Inventory Serialized" | "unified/Serialized_blank.csv" |

  @e2e-seamless-one-std @e2e-seamless-one-std-bulk
  Scenario Outline: STD-02 Inventory Serialised Bulk import
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the bulk import page
    And I wait for "8000" miliseconds
    When I perform import bulk operation with params <IMPORT_SUB_TYPE> <FILE_NAME>
    Then I am able to validate proper message "Successful operation"
    And I validate import information with params <IMPORT_SUB_TYPE> <INITIAL_STATUS> <USERNAME> <FILE_NAME>
    And I wait for 2minutes
    And I reload the page
    And I validate import information with params <IMPORT_SUB_TYPE> <STATUS> <USERNAME> <FILE_NAME>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | IMPORT_SUB_TYPE        | FILE_NAME                          | INITIAL_STATUS | STATUS      |
      | "OPERATOR" | "2023"   | "Inventory Serialized" | "unified/Inventory_Serialized.csv" | "pending"      | "processed" |

  @e2e-seamless-one-std @e2e-seamless-one-std-bulk
  Scenario Outline: STD-03 Inventory Serialised Bulk import with partial correct data in CSV file
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the bulk import page
    And I wait for "8000" miliseconds
    When I perform import bulk operation with params <IMPORT_SUB_TYPE> <FILE_NAME>
    Then I am able to validate proper message "Successful operation"
    And I validate import information with params <IMPORT_SUB_TYPE> <INITIAL_STATUS> <USERNAME> <FILE_NAME>
    And I wait for 2minutes
    And I reload the page
    And I validate import information with params <IMPORT_SUB_TYPE> <STATUS> <USERNAME> <FILE_NAME>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | IMPORT_SUB_TYPE        | FILE_NAME                       | STATUS                | INITIAL_STATUS |
      | "OPERATOR" | "2023"   | "Inventory Serialized" | "unified/s_partial_correct.csv" | "partially-processed" | "pending"      |

  @e2e-seamless-one-std @e2e-seamless-one-std-bulk
  Scenario Outline: STD-05 Inventory Serialised Bulk import with incorrect data in CSV file
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the bulk import page
    When I perform import bulk operation with params <IMPORT_SUB_TYPE> <FILE_NAME>
    Then I am able to validate proper message "Successful operation"
    And I validate import information with params <IMPORT_SUB_TYPE> <INITIAL_STATUS> <USERNAME> <FILE_NAME>
    And I wait for 2minutes
    And I reload the page
    And I validate import information with params <IMPORT_SUB_TYPE> <STATUS> <USERNAME> <FILE_NAME>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | IMPORT_SUB_TYPE        | FILE_NAME                      | STATUS   | INITIAL_STATUS |
      | "OPERATOR" | "2023"   | "Inventory Serialized" | "unified/s_incorrect_data.csv" | "failed" | "pending"      |

  @e2e-seamless-one-std @e2e-seamless-one-std-bulk
  Scenario Outline: STD-06 Inventory NonSerialised Bulk import with partial correct data in CSV file
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the bulk import page
    When I perform import bulk operation with params <IMPORT_SUB_TYPE> <FILE_NAME>
    Then I am able to validate proper message "Successful operation"
    And I validate import information with params <IMPORT_SUB_TYPE> <INITIAL_STATUS> <USERNAME> <FILE_NAME>
    And I wait for 2minutes
    And I reload the page
    And I validate import information with params <IMPORT_SUB_TYPE> <STATUS> <USERNAME> <FILE_NAME>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | IMPORT_SUB_TYPE            | FILE_NAME                        | STATUS   | INITIAL_STATUS |
      | "Operator" | "2023"   | "Inventory Non-serialized" | "unified/ns_partial_correct.csv" | "failed" | "pending"      |

  @e2e-seamless-one-std @e2e-seamless-one-std-bulk
  Scenario Outline: STD-07 Inventory Trackable Bulk import
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the bulk import page
    When I perform import bulk operation with params <IMPORT_SUB_TYPE> <FILE_NAME>
    Then I am able to validate proper message "Successful operation"
    And I validate import information with params <IMPORT_SUB_TYPE> <INITIAL_STATUS> <USERNAME> <FILE_NAME>
    And I wait for 2minutes
    And I reload the page
    And I validate import information with params <IMPORT_SUB_TYPE> <STATUS> <USERNAME> <FILE_NAME>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | IMPORT_SUB_TYPE       | FILE_NAME                         | STATUS      | INITIAL_STATUS |
      | "Operator" | "2023"   | "Inventory Trackable" | "unified/Inventory_Trackable.csv" | "processed" | "pending"      |

  @e2e-seamless-one-std @e2e-seamless-one-std-bulk
  Scenario Outline: STD-08 Inventory NonSerialised Bulk import with blank CSV file
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the bulk import page
    When I perform import bulk operation with params <IMPORT_SUB_TYPE> <FILE_NAME>
    Then I am able to validate proper message "No more CSV records available"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | IMPORT_SUB_TYPE            | FILE_NAME                       |
      | "OPERATOR" | "2023"   | "Inventory Non-serialized" | "unified/nserialized_blank.csv" |

  @e2e-seamless-one-std @e2e-seamless-one-std-bulk
  Scenario Outline: STD-09 Inventory NonSerialised Bulk import with incorrect data in CSV file
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the bulk import page
    When I perform import bulk operation with params <IMPORT_SUB_TYPE> <FILE_NAME>
    Then I am able to validate proper message "Successful operation"
    And I validate import information with params <IMPORT_SUB_TYPE> <INITIAL_STATUS> <USERNAME> <FILE_NAME>
    And I wait for 2minutes
    And I reload the page
    And I validate import information with params <IMPORT_SUB_TYPE> <STATUS> <USERNAME> <FILE_NAME>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | IMPORT_SUB_TYPE            | FILE_NAME                      | STATUS   | INITIAL_STATUS |
      | "Operator" | "2023"   | "Inventory Non-serialized" | "unified/ns_IncorrectData.csv" | "failed" | "pending"      |

  @e2e-seamless-one-std @e2e-seamless-one-std-bulk
  Scenario Outline: STD-10 Inventory Trackable Bulk import with blank CSV file
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the bulk import page
    When I perform import bulk operation with params <IMPORT_SUB_TYPE> <FILE_NAME>
    Then I am able to validate proper message "No more CSV records available"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | IMPORT_SUB_TYPE       | FILE_NAME                     |
      | "OPERATOR" | "2023"   | "Inventory Trackable" | "unified/Trackable_blank.csv" |

  @e2e-seamless-one-std @e2e-seamless-one-std-bulk
  Scenario Outline: STD-11 Inventory Trackable Bulk import with incorrect data in CSV file
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the bulk import page
    When I perform import bulk operation with params <IMPORT_SUB_TYPE> <FILE_NAME>
    Then I am able to validate proper message "Successful operation"
    And I validate import information with params <IMPORT_SUB_TYPE> <INITIAL_STATUS> <USERNAME> <FILE_NAME>
    And I wait for 2minutes
    And I reload the page
    And I validate import information with params <IMPORT_SUB_TYPE> <STATUS> <USERNAME> <FILE_NAME>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | IMPORT_SUB_TYPE       | FILE_NAME                         | STATUS   | INITIAL_STATUS |
      | "Operator" | "2023"   | "Inventory Trackable" | "unified/Trackable_Incorrect.csv" | "failed" | "pending"      |

  @e2e-seamless-one-std @e2e-seamless-one-std-bulk
  Scenario Outline: STD-12 Inventory Trackable Bulk import with partial correct data in CSV file
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the bulk import page
    When I perform import bulk operation with params <IMPORT_SUB_TYPE> <FILE_NAME>
    Then I am able to validate proper message "Successful operation"
    And I validate import information with params <IMPORT_SUB_TYPE> <INITIAL_STATUS> <USERNAME> <FILE_NAME>
    And I wait for 2minutes
    And I reload the page
    And I validate import information with params <IMPORT_SUB_TYPE> <STATUS> <USERNAME> <FILE_NAME>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | IMPORT_SUB_TYPE       | FILE_NAME                          | STATUS                | INITIAL_STATUS |
      | "Operator" | "2023"   | "Inventory Trackable" | "unified/Trac_partial_correct.csv" | "partially-processed" | "pending"      |

  ################################################### ERS 5.0 Framework ######################################################

  @e2e-seamless-one-ers5.0
  Scenario Outline: TS-24505 Performing Bulk Reseller Import Operation with Correct, Partially-Correct and Incorrect CSV Files
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the bulk import page
    When I perform import bulk operation with params <IMPORT_SUB_TYPE> <FILE_NAME>
    Then I am able to validate proper message "Successful operation"
    And I validate import information with params <IMPORT_SUB_TYPE> <INITIAL_STATUS> <USERNAME> <FILE_NAME>
    And I wait for 2minutes
    And I click refresh and verify data again with params <FINAL_STATUS> <TOTAL_UPLOADED> <PASSED> <FAILED>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | IMPORT_SUB_TYPE     | FILE_NAME                                       | INITIAL_STATUS | FINAL_STATUS          | TOTAL_UPLOADED | PASSED | FAILED |
      | "Operator" | "2023"   | "Reseller Reseller" | "ers5.0/Reseller_Import_Processed.csv"          | "pending"      | "processed"           | "10"           | "10"   | "0"    |
      | "Operator" | "2023"   | "Reseller Reseller" | "ers5.0/Reseller_Import_PartiallyProcessed.csv" | "pending"      | "partially-processed" | "10"           | "5"    | "5"    |
      | "Operator" | "2023"   | "Reseller Reseller" | "ers5.0/Reseller_Import_Failed.csv"             | "pending"      | "failed"              | "6"            | "0"    | "6"    |
      | "Operator" | "2023"   | "Reseller Reseller" | "ers5.0/Corporate_Reseller_Import.csv"          | "pending"      | "processed"           | "3"            | "3"    | "0"    |

  @e2e-seamless-one-ers5.0
  Scenario Outline: TS-24505 Performing Bulk Reseller Import Operation with Blank and Incorrect Format CSV Files
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the bulk import page
    When I perform import bulk operation with params <IMPORT_SUB_TYPE> <FILE_NAME>
    Then I am able to validate proper message <Message>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | IMPORT_SUB_TYPE     | FILE_NAME                                | Message                                                                                 |
      | "OPERATOR" | "2023"   | "Reseller Reseller" | "ers5.0/Reseller_Import_Blank.csv"       | "No more CSV records available"                                                         |
      | "Operator" | "2023"   | "Reseller Reseller" | "ers5.0/Reseller_Import_WrongFormat.csv" | "Invalid Reseller->Reseller->CSV import file header format. An valid format must match" |

  @e2e-seamless-one-ers5.0
  Scenario Outline: TS-24506 Performing Reseller Update Import Operation with Blank and Incorrect Format CSV Files
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the bulk import page
    When I perform import bulk operation with params <IMPORT_SUB_TYPE> <FILE_NAME>
    Then I am able to validate proper message <Message>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | IMPORT_SUB_TYPE            | FILE_NAME                               | Message                                                                                        |
      | "OPERATOR" | "2023"   | "Reseller Reseller_Update" | "ers5.0/ResellerUpdate_Blank.csv"       | "No more CSV records available"                                                                |
      | "Operator" | "2023"   | "Reseller Reseller_Update" | "ers5.0/ResellerUpdate_WrongFormat.csv" | "Invalid Reseller->Reseller_Update->CSV import file header format. An valid format must match" |

  @e2e-seamless-one-ers5.0
  Scenario Outline: TS-24506 Performing Reseller Update Import Operation with Correct, Partially-Correct and Incorrect CSV Files
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the bulk import page
    When I perform import bulk operation with params <IMPORT_SUB_TYPE> <FILE_NAME>
    Then I am able to validate proper message "Successful operation"
    And I validate import information with params <IMPORT_SUB_TYPE> <INITIAL_STATUS> <USERNAME> <FILE_NAME>
    And I wait for 2minutes
    And I reload the page
    And I validate import information with params <IMPORT_SUB_TYPE> <STATUS> <USERNAME> <FILE_NAME>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | IMPORT_SUB_TYPE            | FILE_NAME                                      | STATUS                | INITIAL_STATUS |
      | "Operator" | "2023"   | "Reseller Reseller_Update" | "ers5.0/ResellerUpdate_Processed.csv"          | "processed"           | "pending"      |
      | "Operator" | "2023"   | "Reseller Reseller_Update" | "ers5.0/ResellerUpdate_PartiallyProcessed.csv" | "partially-processed" | "pending"      |
      | "Operator" | "2023"   | "Reseller Reseller_Update" | "ers5.0/ResellerUpdate_Failed.csv"             | "failed"              | "pending"      |

  @e2e-seamless-one-ers5.0
  Scenario Outline: TS-24545 Performing Reseller Change Parent Import Operation with Correct, Partially-Correct and Incorrect CSV Files
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the bulk import page
    When I perform import bulk operation with params <IMPORT_SUB_TYPE> <FILE_NAME>
    Then I am able to validate proper message "Successful operation"
    And I validate import information with params <IMPORT_SUB_TYPE> <INITIAL_STATUS> <USERNAME> <FILE_NAME>
    And I wait for 2minutes
    And I click refresh and verify data again with params <FINAL_STATUS> <TOTAL_UPLOADED> <PASSED> <FAILED>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | IMPORT_SUB_TYPE          | FILE_NAME                                    | INITIAL_STATUS | FINAL_STATUS          | TOTAL_UPLOADED | PASSED | FAILED |
      | "Operator" | "2023"   | "Resellers ChangeParent" | "ers5.0/ChangeParent_Processed.csv"          | "pending"      | "processed"           | "4"            | "4"    | "0"    |
      | "Operator" | "2023"   | "Resellers ChangeParent" | "ers5.0/ChangeParent_PartiallyProcessed.csv" | "pending"      | "partially-processed" | "4"            | "1"    | "3"    |
      | "Operator" | "2023"   | "Resellers ChangeParent" | "ers5.0/ChangeParent_Failed.csv"             | "pending"      | "failed"              | "4"            | "0"    | "4"    |

  @e2e-seamless-one-ers5.0
  Scenario Outline: TS-24545 Performing Reseller Change Parent Import Operation with Blank and Incorrect Format CSV Files
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the bulk import page
    When I perform import bulk operation with params <IMPORT_SUB_TYPE> <FILE_NAME>
    Then I am able to validate proper message <Message>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | IMPORT_SUB_TYPE          | FILE_NAME                             | Message                                                                                      |
      | "OPERATOR" | "2023"   | "Resellers ChangeParent" | "ers5.0/ChangeParent_Blank.csv"       | "No more CSV records available"                                                              |
      | "Operator" | "2023"   | "Resellers ChangeParent" | "ers5.0/ChangeParent_WrongFormat.csv" | "Invalid Resellers->ChangeParent->CSV import file header format. An valid format must match" |


