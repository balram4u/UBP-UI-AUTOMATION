Feature: 06-Reseller Feature

  As a user on the unified portal Application
  I want to add Reseller with multiple types

  Background: Enter UserId and Password and perform Login
    Given I am on the unified portal login page

  ###################### Standard ######################
  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller
  Scenario Outline: STD-TC-28081, 28093 Reseller is able to Block Reseller
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_NAME> and expect "1" rows
    And I Click on the eye icon against any reseller from the list
    Then I Click on the block button
    And  I Enter a reason and click on Yes button
    Then I am able to validate proper message "SUCCESS"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | SEARCH_FIELD | RESELLER_NAME |
      | "OPERATOR" | "2023"   | "resellerId" | "DIST3"       |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller
  Scenario Outline: STD-TC-28081.1 Reseller is able to UnBlock Reseller
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_NAME> and expect "1" rows
    And I Click on the eye icon against any reseller from the list
    Then I Click on the unblock button
    Then I Enter a reason and click on Yes button
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | SEARCH_FIELD | RESELLER_NAME |
      | "OPERATOR" | "2023"   | "resellerId" | "DIST3"       |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28377 Reseller is able to Edit Reseller
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_NAME>
    And I click on edit reseller option
    And I Edit various fields Name, MSISDN, email, Parent, city, street, contractID <NAME> <MSISDN> <EMAIL> <PARENT> <CITY> <STREET> <REGION> <SALES_AREA> <CONTRACT_ID>
    Then I am able to validate proper message "Reseller Updated Successfully."
    Then User should navigate to manage reseller children screen
    Then I logout
    Examples:
      | USERNAME | PASSWORD | SEARCH_FIELD   | RESELLER_NAME       | RESELLER_MENU1 | RESELLER_MENU2 | RESELLER_MENU3 | RESELLER_MENU4 | RESELLER_MENU5 | RESELLER_MENU6 | NAME                       | MSISDN | EMAIL                                  | PARENT                 | CITY   | STREET  | REGION | SALES_AREA               | CONTRACT_ID |
      | "DIST1"  | "2023"   | "resellerName" | "SubDistributor1-3" | "RESELLERS"    | "LINK/DE-LINK" | ""             | ""             | ""             | ""             | "SubDistributor1-3-update" | ""     | "SubDistributor1-3-update@seamless.se" | "Distributor1 (DIST1)" | "test" | "test1" | ""     | "Stockholm Municipality" | ""          |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28944 Reseller is not able to Edit MSISDN of a Reseller If its already taken
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    #And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_NAME>
    And I click on edit reseller option
    And I Edit various fields Name, MSISDN, email, Parent, city, street, contractID <NAME> <MSISDN> <EMAIL> <PARENT> <CITY> <STREET> <REGION> <SALES_AREA> <CONTRACT_ID>
    Then I am able to validate proper message "MSISDN is already taken"
    Then I logout
    Examples:
      | USERNAME | PASSWORD | SEARCH_FIELD | RESELLER_NAME | NAME | MSISDN         | EMAIL | PARENT | CITY | STREET | REGION | SALES_AREA               | CONTRACT_ID |
      | "DIST1"  | "2023"   | "resellerId" | "WH1"         | ""   | "467000000019" | ""    | ""     | ""   | ""     | ""     | "Stockholm Municipality" | ""          |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28091 Reseller is able to Change a parent of a reseller
    When Provide <USERNAME> and <PASSWORD> and login into system
    Then I click on reseller and verify different reseller menu options should be visible <RESELLER_MENU1> <RESELLER_MENU2> <RESELLER_MENU3> <RESELLER_MENU4> <RESELLER_MENU5> <RESELLER_MENU6>
    When I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_NAME>
    And I click on edit reseller option
    And I Edit various fields Name, MSISDN, email, Parent, city, street, contractID <NAME> <MSISDN> <EMAIL> <PARENT> <CITY> <STREET> <REGION> <SALES_AREA> <CONTRACT_ID>
    Then I am able to validate proper message "Reseller Updated Successfully."
    Then User should navigate to manage reseller children screen
    Then I logout
    Examples:
      | USERNAME | PASSWORD | SEARCH_FIELD   | RESELLER_NAME       | RESELLER_MENU1 | RESELLER_MENU2 | RESELLER_MENU3 | RESELLER_MENU4 | RESELLER_MENU5 | RESELLER_MENU6 | NAME | MSISDN | EMAIL | PARENT                 | CITY | STREET | REGION | SALES_AREA | CONTRACT_ID |
      | "DIST1"  | "2023"   | "resellerName" | "SubDistributor1-3" | "RESELLERS"    | "LINK/DE-LINK" | ""             | ""             | ""             | ""             | ""   | ""     | ""    | "Distributor1 (DIST1)" | ""   | ""     | ""     | ""         | ""          |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28082 Reseller is able to self Block
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I Click on the profile button at the top right corner
    And I Click on the profile option
    And I Click on the block button
    Then I Enter a reason and click on Yes button
    Then I am able to validate proper message "SUCCESS"
    Then I logout
    Examples:
      | USERNAME | PASSWORD |
      | "DIST3"  | "2023"   |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28082 Blocked reseller should not be able to login
    When Provide <USERNAME> and <PASSWORD> and login into system with invalid data
    Then I am able to validate proper message "You are blocked to use this service. Please contact operator to unblock"
    Examples:
      | USERNAME | PASSWORD |
      | "DIST3"  | "2023"   |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28085 Searching of a blocked reseller
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_NAME> and expect "1" rows
    And I Click on the eye icon against any reseller from the list
    Then I verify the status of Reseller <STATUS>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | SEARCH_FIELD | RESELLER_NAME | STATUS    |
      | "Operator" | "2023"   | "resellerId" | "DIST3"       | "Blocked" |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28085.1 Reseller is able to Unblock a blocked reseller
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_NAME> and expect "1" rows
    And I Click on the eye icon against any reseller from the list
    Then I Click on the unblock button
    Then I Enter a reason and click on Yes button
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | SEARCH_FIELD | RESELLER_NAME |
      | "Operator" | "2023"   | "resellerId" | "DIST3"       |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28083 Reseller is able to self freeze
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I Click on the profile button at the top right corner
    And I Click on the profile option
    And I Click on the freeze button
    Then I Enter a reason and click on Yes button
    Then I am able to validate proper message "SUCCESS"
    Then I logout
    Examples:
      | USERNAME | PASSWORD |
      | "DIST4"  | "2023"   |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28087 Searching of a freezed reseller
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_ID> and expect "1" rows
    And I Click on the eye icon against any reseller from the list
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | SEARCH_FIELD | RESELLER_ID |
      | "Operator" | "2023"   | "resellerId" | "DIST4"     |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller 
  Scenario Outline: STD-TC-28088 Reseller is able to Unfreeze a freezed reseller
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_ID> and expect "1" rows
    And I Click on the eye icon against any reseller from the list
    Then I Click on the unfreeze button
    Then I Enter a reason and click on Yes button
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | SEARCH_FIELD | RESELLER_ID |
      | "Operator" | "2023"   | "resellerId" | "DIST4"     |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28086 Reseller is able to Freeze a reseller
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_ID> and expect "1" rows
    And I Click on the eye icon against any reseller from the list
    Then I Click on the freeze button
    And  I Enter a reason and click on Yes button
    Then I am able to validate proper message "SUCCESS"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | SEARCH_FIELD | RESELLER_ID |
      | "OPERATOR" | "2023"   | "resellerId" | "DIST6"     |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-17: Reseller is able to unfreeze a reseller
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_ID> and expect "1" rows
    And I Click on the eye icon against any reseller from the list
    Then I Click on the unfreeze button
    And  I Enter a reason and click on Yes button
    Then I am able to validate proper message "SUCCESS"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | SEARCH_FIELD | RESELLER_ID |
      | "OPERATOR" | "2023"   | "resellerId" | "DIST6"     |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28050, 28092 Reseller is not able to Search reseller with invalid Reseller Name
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_NAME>
    Then I am able to validate proper message "Reseller not found"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | SEARCH_FIELD   | RESELLER_NAME |
      | "Operator" | "2023"   | "resellerName" | "t3st"        |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28095 Reseller is able to Search reseller with valid Reseller MSISDN
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_MSISDN> and expect "1" rows
    And I Click on the eye icon against any reseller from the list
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | SEARCH_FIELD     | RESELLER_MSISDN |
      | "Operator" | "2023"   | "resellerMSISDN" | "467000000011"  |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28094, 28096 Reseller is not able to Search reseller with invalid Reseller ID
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_ID>
    Then I am able to validate proper message "Reseller Not Found."
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | SEARCH_FIELD | RESELLER_ID |
      | "Operator" | "2023"   | "resellerId" | "t3st"      |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28098 Reseller is able to Export resellers
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I click on export button
    And I click on download button
    And I read file name <FILE_NAME>
    Then I delete file name <FILE_NAME>
    Examples:
      | USERNAME   | PASSWORD | FILE_NAME  |
      | "OPERATOR" | "2023"   | "data.csv" |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-22: Performing Show or Hide all columns operation with passing test data as data table
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I navigate to the Resellers Page
    And I perform Hide all columns operation
    Then I validate columns should not be displayed in the table
    And I perform Show all columns operation
    Then I validate columns should be displayed in the table
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD |
      | "OPERATOR"  | "2023"   |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-27846,28042,28108,28107 Operator is able to Reset Search result
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I navigate to the Resellers Page
    And I select reseller status in advanced search <STATUS>
    And I click on search button
    Then I validate the the status is deactivated <COLUMN_NAME> <STATUS>
    And I click on reset search
    And I verify status dropdown should be reset to All
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | STATUS   | COLUMN_NAME |
      | "OPERATOR"  | "2023"   | "Active" | "Status"    |


  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-26: Reseller is able to delink its immediate children (Leaf node) in the hierarchy
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Link-De-Link Page
    And I enter reseller id to link-delink <RESELLER_ID>
    And I click on Delink button
    Then I am able to validate proper message "You have successfully removed"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | RESELLER_ID |
      | "OPERATOR" | "2023"   | "WH2"       |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-25: Reseller is able to link a reseller which comes under the same and immediate heirarchy and is not linked with any other reseller
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Link-De-Link Page
    And I enter reseller id to link-delink <RESELLER_ID>
    And I click on Link button
    Then I am able to validate proper message "is now registered to you as a sub-reseller"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | RESELLER_ID |
      | "OPERATOR" | "2023"   | "WH2"       |
      

  @e2e-seamless-one-std-not-now @e2e-seamless-one-std-reseller-not-now
  Scenario Outline: STD-TC-28947 Reseller is not able to link a reseller if it is not a parent in the heirarchy
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Link-De-Link Page
    And I enter reseller id to link-delink <RESELLER_ID>
    And I click on Link button
    Then I am able to validate proper message "You are not able to perform the operation as you are not the parent in the hierarchy."
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | RESELLER_ID  |
      | "OPERATOR" | "2023"   | "postest-18" |

  @e2e-seamless-one-std-not-now @e2e-seamless-one-std-reseller-not-now
  Scenario Outline: STD-27: Reseller is not able to delink its children which is not an immediate in the hierarchy
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Link-De-Link Page
    And I enter reseller id to link-delink <RESELLER_ID>
    And I click on Delink button
    Then I am able to validate proper message "You are not able to perform the operation as you are not the parent in the hierarchy."
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | RESELLER_ID   |
      | "OPERATOR" | "2023"   | "SUB-DIST2-1" |

  @e2e-seamless-one-std-not-now @e2e-seamless-one-std-reseller-not-now
  Scenario Outline: STD-28: Reseller is not able to link a reseller which is already associated with other reseller
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Link-De-Link Page
    And I enter reseller id to link-delink <RESELLER_ID>
    And I click on Link button
    Then I am able to validate proper message "You are not able to perform the operation as the provided account is already assigned to a parent."
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | RESELLER_ID  |
      | "OPERATOR" | "2023"   | "postest-18" |
      | "OPERATOR" | "2023"   | "postest-18" |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28132 Operator is able to view heirachy
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the View Hierarchy Page
    And I verify view hierarchy page
    And I verify hierarchy chart is visible
    Then I logout
    Examples:
      | USERNAME   | PASSWORD |
      | "OPERATOR" | "2023"   |

  ######### block/unblock test cases ########
  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28109 Reseller is able to block resellers in bulk with only 1 reason
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I Click on Add More Filters button
    And I select reseller type <TYPE>
    And I click on Done changes button
    And I click on search button
    And I select multiple resellers <NUMBER_OF_RESELLERS>
    Then I Click on the block button
    Then I Enter a reason and click on Yes button
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | TYPE       | NUMBER_OF_RESELLERS |
      | "OPERATOR" | "2023"   | "Bank-PoS" | "2"                 |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28104 Reseller is able to Search reseller from Blocked Status filter
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I navigate to the Resellers Page
    And I select reseller status in advanced search <STATUS>
    And I click on search button
    Then I validate the the status is deactivated <COLUMN_NAME> <STATUS>
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | STATUS    | COLUMN_NAME |
      | "OPERATOR"  | "2023"   | "Blocked" | "Status"    |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28113 Reseller cannot unblock some already unblocked reseller
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I Click on Add More Filters button
    And I select reseller type <TYPE>
    And I click on Done changes button
    And I click on search button
    And I select multiple resellers <NUMBER_OF_RESELLERS>
    Then I Click on the unblock button
    And I click on Individual reasons tab
    Then I Enter individual reason and click on Yes button <NUMBER_OF_RESELLERS>
    Then I am able to validate proper message "Reseller is already active"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | TYPE            | NUMBER_OF_RESELLERS |
      | "OPERATOR" | "2023"   | "FranchiseShop" | "4"                 |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28111 Reseller is able to unblock resellers in bulk with only 1 reason
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I Click on Add More Filters button
    And I select reseller type <TYPE>
    And I click on Done changes button
    And I click on search button
    And I select multiple resellers <NUMBER_OF_RESELLERS>
    Then I Click on the unblock button
    Then I Enter a reason and click on Yes button
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | TYPE       | NUMBER_OF_RESELLERS |
      | "OPERATOR" | "2023"   | "Bank-PoS" | "2"                 |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28110 Reseller is able to block resellers in bulk with different individual reasons
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I Click on Add More Filters button
    And I select reseller type <TYPE>
    And I click on Done changes button
    And I click on search button
    And I select multiple resellers <NUMBER_OF_RESELLERS>
    Then I Click on the block button
    And I click on Individual reasons tab
    Then I Enter individual reason and click on Yes button <NUMBER_OF_RESELLERS>
    Then I am able to validate proper message "SUCCESS"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | TYPE       | NUMBER_OF_RESELLERS |
      | "OPERATOR" | "2023"   | "Bank-PoS" | "2"                 |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28112 Reseller is able to unblock resellers in bulk with different individual reasons
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I Click on Add More Filters button
    And I select reseller type <TYPE>
    And I click on Done changes button
    And I click on search button
    And I select multiple resellers <NUMBER_OF_RESELLERS>
    Then I Click on the unblock button
    And I click on Individual reasons tab
    Then I Enter individual reason and click on Yes button <NUMBER_OF_RESELLERS>
    Then I am able to validate proper message "SUCCESS"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | TYPE       | NUMBER_OF_RESELLERS |
      | "OPERATOR" | "2023"   | "Bank-PoS" | "2"                 |

  ####### Freeze/Un-freeze test cases #######
  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28115 Reseller is able to freeze resellers in bulk with only 1 reason
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I Click on Add More Filters button
    And I select reseller type <TYPE>
    And I click on Done changes button
    And I click on search button
    And I select multiple resellers <NUMBER_OF_RESELLERS>
    Then I Click on the freeze button
    Then I Enter a reason and click on Yes button
    Then I am able to validate proper message "SUCCESS"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | TYPE       | NUMBER_OF_RESELLERS |
      | "OPERATOR" | "2023"   | "Bank-PoS" | "2"                 |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28106 Reseller is able to Search reseller from Frozen Status filter
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I navigate to the Resellers Page
    And I select reseller status in advanced search <STATUS>
    And I click on search button
    Then I validate the the status is deactivated <COLUMN_NAME> <STATUS>
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | STATUS   | COLUMN_NAME |
      | "OPERATOR"  | "2023"   | "Frozen" | "Status"    |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-36: Reseller is not able to freeze some already freezed resellers in bulk
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I Click on Add More Filters button
    And I select reseller type <TYPE>
    And I click on Done changes button
    And I click on search button
    And I select multiple resellers <NUMBER_OF_RESELLERS>
    Then I Click on the freeze button
    Then I Enter a reason and click on Yes button
    Then I am able to validate proper message "Reseller is already frozen"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | TYPE       | NUMBER_OF_RESELLERS |
      | "OPERATOR" | "2023"   | "Bank-PoS" | "2"                 |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28118 Reseller is able to unfreeze resellers in bulk
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I Click on Add More Filters button
    And I select reseller type <TYPE>
    And I click on Done changes button
    And I click on search button
    And I select multiple resellers <NUMBER_OF_RESELLERS>
    Then I Click on the unfreeze button
    Then I Enter a reason and click on Yes button
    Then I am able to validate proper message "SUCCESS"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | TYPE       | NUMBER_OF_RESELLERS |
      | "OPERATOR" | "2023"   | "Bank-PoS" | "2"                 |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28116 Reseller is able to freeze resellers in bulk with different individual reasons
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I Click on Add More Filters button
    And I select reseller type <TYPE>
    And I click on Done changes button
    And I click on search button
    And I select multiple resellers <NUMBER_OF_RESELLERS>
    Then I Click on the freeze button
    And I click on Individual reasons tab
    Then I Enter individual reason and click on Yes button <NUMBER_OF_RESELLERS>
    Then I am able to validate proper message "SUCCESS"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | TYPE       | NUMBER_OF_RESELLERS |
      | "OPERATOR" | "2023"   | "Bank-PoS" | "2"                 |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28117 Reseller is able to unfreeze resellers in bulk with individual reason
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I Click on Add More Filters button
    And I select reseller type <TYPE>
    And I click on Done changes button
    And I click on search button
    And I select multiple resellers <NUMBER_OF_RESELLERS>
    Then I Click on the unfreeze button
    Then I Enter a reason and click on Yes button
    Then I am able to validate proper message "SUCCESS"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | TYPE       | NUMBER_OF_RESELLERS |
      | "OPERATOR" | "2023"   | "Bank-PoS" | "2"                 |

  ######## Activate/De-activate test cases ###############

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28121 Reseller is able to deactivate resellers in bulk with only 1 reason
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I Click on Add More Filters button
    And I select reseller type <TYPE>
    And I click on Done changes button
    And I click on search button
    And I select multiple resellers <NUMBER_OF_RESELLERS>
    Then I Click on the deactivate button
    Then I Enter a reason and click on Yes button
    Then I am able to validate proper message "SUCCESS"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | TYPE       | NUMBER_OF_RESELLERS |
      | "OPERATOR" | "2023"   | "Bank-PoS" | "2"                 |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28105 Reseller is able to Search reseller from Deactivated Status filter
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I navigate to the Resellers Page
    And I select reseller status in advanced search <STATUS>
    And I click on search button
    Then I validate the the status is deactivated <COLUMN_NAME> <STATUS>
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | STATUS   | COLUMN_NAME |
      | "OPERATOR"  | "2023"   | "Active" | "Status"    |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28123 Reseller is able to activate resellers in bulk with only 1 reason
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I Click on Add More Filters button
    And I select reseller type <TYPE>
    And I click on Done changes button
    And I click on search button
    And I select multiple resellers <NUMBER_OF_RESELLERS>
    Then I Click on the activate button
    Then I Enter a reason and click on Yes button
    Then I am able to validate proper message "SUCCESS"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | TYPE       | NUMBER_OF_RESELLERS |
      | "OPERATOR" | "2023"   | "Bank-PoS" | "2"                 |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28125 Reseller is not able to activate some already activated resellers in bulk
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I Click on Add More Filters button
    And I select reseller type <TYPE>
    And I click on Done changes button
    And I click on search button
    And I select multiple resellers <NUMBER_OF_RESELLERS>
    Then I Click on the activate button
    Then I Enter a reason and click on Yes button
    Then I am able to validate proper message "Reseller is already active"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | TYPE       | NUMBER_OF_RESELLERS |
      | "OPERATOR" | "2023"   | "Bank-PoS" | "2"                 |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28122 Reseller is able to deactivate resellers in bulk with different individual reason
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I Click on Add More Filters button
    And I select reseller type <TYPE>
    And I click on Done changes button
    And I click on search button
    And I select multiple resellers <NUMBER_OF_RESELLERS>
    Then I Click on the deactivate button
    And I click on Individual reasons tab
    Then I Enter individual reason and click on Yes button <NUMBER_OF_RESELLERS>
    Then I am able to validate proper message "SUCCESS"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | TYPE       | NUMBER_OF_RESELLERS |
      | "OPERATOR" | "2023"   | "Bank-PoS" | "2"                 |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28124 Reseller is able to activate resellers in bulk with different individual reason
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I Click on Add More Filters button
    And I select reseller type <TYPE>
    And I click on Done changes button
    And I click on search button
    And I select multiple resellers <NUMBER_OF_RESELLERS>
    Then I Click on the activate button
    And I click on Individual reasons tab
    Then I Enter individual reason and click on Yes button <NUMBER_OF_RESELLERS>
    Then I am able to validate proper message "SUCCESS"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | TYPE       | NUMBER_OF_RESELLERS |
      | "OPERATOR" | "2023"   | "Bank-PoS" | "2"                 |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller 
  Scenario Outline: STD-TC-28047, 28099 Operator is able to search reseller types with valid reseller type ID
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I navigate to the Resellers Page
    When I click on filter by providing filter column,operation and filter value <FILTER_COLUMN> <OPERATION> <FILTER_VALUE>
    And I wait for "2000" miliseconds
    Then I verify the Reseller Id is present inside the table <FILTER_VALUE>
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | FILTER_COLUMN | OPERATION | FILTER_VALUE |
      | "operator"  | "2023"   | "resellerId"  | "Equal"   | "WH1"        |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28048, 28100 Operator is able to search reseller types with invalid reseller type ID
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I navigate to the Resellers Page
    When I click on filter by providing filter column,operation and filter value <FILTER_COLUMN> <OPERATION> <FILTER_VALUE>
    Then I am able to validate proper message "Reseller Not Found."
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | FILTER_COLUMN | OPERATION | FILTER_VALUE |
      | "operator"  | "2023"   | "resellerId"  | "Equal"   | "abcd"       |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28102 Reseller is able to Search resellers with valid MSISDN
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I navigate to the Resellers Page
    When I click on filter by providing filter column,operation and filter value <FILTER_COLUMN> <OPERATION> <FILTER_VALUE>
    And I wait for "2000" miliseconds
    Then I verify the Reseller Id is present inside the table <NAME>
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | FILTER_COLUMN    | OPERATION | FILTER_VALUE   | NAME    |
      | "operator"  | "2023"   | "resellerMSISDN" | "Equal"   | "467000000001" | "DIST1" |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28103 Reseller is not able to Search resellers with invalid MSISDN
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I navigate to the Resellers Page
    When I click on filter by providing filter column,operation and filter value <FILTER_COLUMN> <OPERATION> <FILTER_VALUE>
    Then I am able to validate proper message "Reseller not found"
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | FILTER_COLUMN    | OPERATION | FILTER_VALUE |
      | "operator"  | "2023"   | "resellerMSISDN" | "Equal"   | "abcd12345"  |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28089 Operator is able to Change a parent of a reseller
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <SEARCH_VALUE>
    And I click on change parent reseller option
    And I select change parent reseller for UBP <CHANGE_PARENT_NAME>
    Then I am able to validate proper message <MESSAGE>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | SEARCH_VALUE        | SEARCH_FIELD   | MESSAGE                                | SELECT_COLUMN | SELECT_OPERATOR | CHANGE_PARENT_NAME |
      | "OPERATOR" | "2023"   | "SubDistributor2-2" | "resellerName" | "Reseller Parent Changed Successfully" | "Reseller Id" | "Equal"         | "DIST4 (DIST4)"    |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28381 Operator is able to Edit Reseller of Bank-PoS type
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I Click on Add More Filters button
    And I select reseller type <TYPE>
    And I click on Done changes button
    And I click on search button
    And I click on edit reseller option for Bank-Pos
    And I Edit various fields Name, MSISDN, email, Parent, city, street, contractID <NAME> <MSISDN> <EMAIL> <PARENT> <CITY> <STREET> <REGION> <SALES_AREA> <CONTRACT_ID>
    Then I am able to validate proper message "Reseller Updated Successfully."
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | TYPE       | NAME            | MSISDN | EMAIL                       | PARENT | CITY | STREET | REGION | SALES_AREA | CONTRACT_ID |
      | "OPERATOR" | "2023"   | "Bank-PoS" | "Bank1_updated" | ""     | "Bank1_updated@seamless.se" | ""     | ""   | ""     | ""     | ""         | ""          |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28383 Operator is able to Edit Reseller of Warehouse type
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I Click on Add More Filters button
    And I select reseller type <TYPE>
    And I click on Done changes button
    And I click on search button
    And I click on edit reseller option for Warehouse
    And I Edit various fields Name, MSISDN, email, Parent, city, street, contractID <NAME> <MSISDN> <EMAIL> <PARENT> <CITY> <STREET> <REGION> <SALES_AREA> <CONTRACT_ID>
    Then I am able to validate proper message "Reseller Updated Successfully."
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | TYPE        | NAME                 | MSISDN | EMAIL                            | PARENT | CITY | STREET | REGION             | SALES_AREA               | CONTRACT_ID |
      | "OPERATOR" | "2023"   | "WareHouse" | "Warehouse1_updated" | ""     | "Warehouse1_updated@seamless.se" | ""     | ""   | ""     | "Stockholm County" | "Stockholm Municipality" | ""          |
      | "OPERATOR" | "2023"   | "WareHouse" | "WareHouse"          | ""     | "WareHouse@seamless.se"          | ""     | ""   | ""     | "Stockholm County" | "Stockholm Municipality" | ""          |


  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28379 Operator is able to Edit Reseller of Franchise shop type
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_NAME>
    And I click on edit reseller option
    And I Edit various fields Name, MSISDN, email, Parent, city, street, contractID <NAME> <MSISDN> <EMAIL> <PARENT> <CITY> <STREET> <REGION> <SALES_AREA> <CONTRACT_ID>
    Then I am able to validate proper message "Reseller Updated Successfully."
    Then User should navigate to manage reseller children screen
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | SEARCH_FIELD   | RESELLER_NAME | RESELLER_MENU1 | RESELLER_MENU2 | RESELLER_MENU3 | RESELLER_MENU4 | RESELLER_MENU5 | RESELLER_MENU6 | NAME          | MSISDN | EMAIL                     | PARENT | CITY      | STREET     | REGION             | SALES_AREA               | CONTRACT_ID |
      | "OPERATOR" | "2023"   | "resellerName" | "FS1"         | "RESELLERS"    | "LINK/DE-LINK" | ""             | ""             | ""             | ""             | "FS-1-update" | ""     | "FS-1-update@seamless.se" | ""     | "testing" | "testing2" | "Stockholm County" | "Stockholm Municipality" | ""          |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28391 Agent is able to Edit Reseller of POS type
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_NAME>
    And I click on edit reseller option
    And I Edit various fields Name, MSISDN, email, Parent, city, street, contractID <NAME> <MSISDN> <EMAIL> <PARENT> <CITY> <STREET> <REGION> <SALES_AREA> <CONTRACT_ID>
    Then I am able to validate proper message "Reseller Updated Successfully."
    Then User should navigate to manage reseller children screen
    Then I logout
    Examples:
      | USERNAME     | PASSWORD | SEARCH_FIELD   | RESELLER_NAME | RESELLER_MENU1 | RESELLER_MENU2 | RESELLER_MENU3 | RESELLER_MENU4 | RESELLER_MENU5 | RESELLER_MENU6 | NAME                | MSISDN | EMAIL                           | PARENT | CITY      | STREET     | REGION             | SALES_AREA               | CONTRACT_ID |
      | "AGENT1-1-1" | "2023"   | "resellerName" | "POS1-1-1-1"  | "RESELLERS"    | "LINK/DE-LINK" | ""             | ""             | ""             | ""             | "POS1-1-1-1-update" | ""     | "POS1-1-1-1-update@seamless.se" | ""     | "testing" | "testing1" | "Stockholm County" | "Stockholm Municipality" | ""          |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28389 Reseller is able to Edit Reseller of Agent type
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_NAME>
    And I click on edit reseller option
    And I Edit various fields Name, MSISDN, email, Parent, city, street, contractID <NAME> <MSISDN> <EMAIL> <PARENT> <CITY> <STREET> <REGION> <SALES_AREA> <CONTRACT_ID>
    Then I am able to validate proper message "Reseller Updated Successfully."
    Then User should navigate to manage reseller children screen
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | SEARCH_FIELD   | RESELLER_NAME | RESELLER_MENU1 | RESELLER_MENU2 | RESELLER_MENU3 | RESELLER_MENU4 | RESELLER_MENU5 | RESELLER_MENU6 | NAME                | MSISDN | EMAIL                           | PARENT | CITY      | STREET     | REGION             | SALES_AREA               | CONTRACT_ID |
      | "OPERATOR" | "2023"   | "resellerName" | "AGENT1-1-1"  | "RESELLERS"    | "LINK/DE-LINK" | ""             | ""             | ""             | ""             | "AGENT1-1-1-update" | ""     | "AGENT1-1-1-update@seamless.se" | ""     | "testing" | "testing3" | "Stockholm County" | "Stockholm Municipality" | ""          |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller 
  Scenario Outline: STD-TC-28130 Distributor, Sub distributor and Agent is not able to link a reseller which does not come under the same heirarchy and is not linked with any other reseller
    When Provide <USERNAME1> and <PASSWORD> and login into system
    When I navigate to the Link-De-Link Page
    And I enter reseller id to link-delink <RESELLER_ID>
    And I click on Delink button
    Then I logout
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Link-De-Link Page
    And I enter reseller id to link-delink <RESELLER_ID>
    And I click on Link button
    Then I am able to validate proper message "You are not allowed to add this reseller to your distribution hierarchy tree."
    Then I logout
    Examples:
      | USERNAME1  | USERNAME     | PASSWORD | RESELLER_ID |
      | "OPERATOR" | "DIST1"      | "2023"   | "WH2"       |
      | "OPERATOR" | "AGENT2-1-1" | "2023"   | "WH2"       |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller 
  Scenario Outline: STD-TC-28385 Operator is able to Edit Reseller of ASM type
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_NAME>
    And I click on edit reseller option for ASM
    And I Edit various fields Name, MSISDN, email, Parent, city, street, contractID <NAME> <MSISDN> <EMAIL> <PARENT> <CITY> <STREET> <REGION> <SALES_AREA> <CONTRACT_ID>
    Then I am able to validate proper message "Reseller Updated Successfully."
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | SEARCH_FIELD   | RESELLER_NAME | NAME            | MSISDN | EMAIL                       | PARENT | CITY | STREET | REGION             | SALES_AREA               | CONTRACT_ID |
      | "OPERATOR" | "2023"   | "resellerName" | "ASM01"       | "ASM01_updated" | ""     | "asm01_updated@seamless.se" | ""     | ""   | ""     | "Stockholm County" | "Stockholm Municipality" | ""          |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28387 Operator is able to Edit Reseller of OperatorAgent type
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_NAME>
    And I click on edit reseller option for OperatorAgent
    And I Edit various fields Name, MSISDN, email, Parent, city, street, contractID <NAME> <MSISDN> <EMAIL> <PARENT> <CITY> <STREET> <REGION> <SALES_AREA> <CONTRACT_ID>
    Then I am able to validate proper message "Reseller Updated Successfully."
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | SEARCH_FIELD   | RESELLER_NAME    | NAME                     | MSISDN | EMAIL                                | PARENT | CITY | STREET | REGION             | SALES_AREA               | CONTRACT_ID |
      | "OPERATOR" | "2023"   | "resellerName" | "OperatorAgent1" | "OperatorAgent1_updated" | ""     | "OperatorAgent1_updated@seamless.se" | ""     | ""   | ""     | "Stockholm County" | "Stockholm Municipality" | ""          |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28392 Reseller is not able to Change reseller type of a reseller which is not a leaf node
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_ID> and expect "1" rows
    And I click on change reseller type option
    Then I am able to validate proper message <RESELLER_NAME>
    And I select reseller type Id <RESELLER_TYPE>
    And I click on next button
    And I click on submit button
    Then I am able to validate proper message <MESSAGE>
    And I logout
    Examples:
      | USERNAME   | PASSWORD | RESELLER_ID | RESELLER_NAME  | SEARCH_FIELD | MESSAGE                                          | SELECT_COLUMN | SELECT_OPERATOR | RESELLER_TYPE |
      | "OPERATOR" | "2023"   | "DIST1"     | "Distributor1" | "resellerId" | "reseller has children so it cannot be updated." | "Reseller Id" | "Equal"         | "Bank-PoS"    |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28090 Operator is able to Change reseller type of leaf node only
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_ID> and expect "1" rows
    And I click on change reseller type option
    Then I am able to validate proper message <RESELLER_NAME>
    And I select reseller type Id <RESELLER_TYPE>
    And I click on next button
    And I click on submit button
    Then I am able to validate proper message <MESSAGE>
    And I logout
    Examples:
      | USERNAME   | PASSWORD | RESELLER_ID | RESELLER_NAME   | SEARCH_FIELD | MESSAGE                               | SELECT_COLUMN | SELECT_OPERATOR | RESELLER_TYPE |
      | "OPERATOR" | "2023"   | "DIST5"     | "Distributor 5" | "resellerId" | "Reseller Type updated successfully." | "Reseller Id" | "Equal"         | "Bank-PoS"    |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28948 Reseller is not able to link a reseller if reseller is not active
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_ID>
    And I select multiple resellers <NUMBER_OF_RESELLERS>
    Then I Click on the deactivate button
    Then I Enter a reason and click on Yes button
    Then I am able to validate proper message "SUCCESS"
    When I navigate to the Link-De-Link Page
    And I enter reseller id to link-delink <RESELLER_ID>
    And I click on Delink button
    And I enter reseller id to link-delink <RESELLER_ID>
    And I click on Link button
    And I approve Link request
    Then I logout
    Examples:
      | USERNAME | PASSWORD | SEARCH_FIELD | RESELLER_ID   | TYPE              | NUMBER_OF_RESELLERS |
      | "DIST1"  | "2023"   | "resellerId" | "SUB-DIST1-2" | "Sub Distributor" | "1"                 |

  
  @e2e-seamless-one-std @e2e-seamless-one-std-reseller  
  Scenario Outline: STD-TC-28101 All operators (equal) are visible under filters option
    When Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the Resellers Page
    Then I click on filters button
    And I select filter option <FILTER_OPTION>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | FILTER_OPTION |
      | "Operator" | "2023"   | "Equal"       |