Feature: 19-KYC Feature

  As a user on the unified portal Application
  I want to Register kyc

  Background: Enter UserId and Password annd perform Login
    Given I am on the unified portal login page

  ################################### Standard ##################################
  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-28965: Only Operator can Register Distributor type of Reseller.
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I click on KYC
    And I verify Search and Register options are visible <MENU1> <MENU2>
    And I navigate to the Register KYC page
    And I select reseller type <RESELLER_TYPE>
    When I enter personal information and click next button <RESELLER_TYPE> <FIRST_NAME> <DISTRIBUTOR_CODE> <EMAIL> <AGENT_TYPE> <TILL_NO> <SHORT_CODE> <DEALER_SALES_AGENT_CODE> <CHANNEL_TYPE> <JURDICALE_NAME> <DBM_NATIONAL_ID> <DBM_GENDER> <MOBILE_NO>
    And I enter address information for Distributor and click next button <ADDRESS> <STREET> <CITY> <REGION> <SALES_AREA> <COUNTRY> <LATTITUDE> <LONGITUDE>
    And I enter additional information for standard and click next button <PARENT> <STATUS> <USER_SUB_TYPE> <CONTRACT_ID> <PASSWORD> <SCC_STATUS>
    Then I am able to validate proper message <MESSAGE>
    And I navigate to the Search KYC page
    And I select search key <SEARCH_KEY>
    And I enter search value <MOBILE_NO>
    And I click search button
    And I verify reseller status in table <COLUMN_NAME> <RESELLER_STATUS>
    And I click on view button
    And I verify view page should have same data <NAME_OF_COLUMN> <FIRST_NAME> <DISTRIBUTOR_CODE> <MOBILE_NO> <JURDICALE_NAME>
    And I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <MOBILE_NO>
    And I verify reseller status in table <COLUMN_NAME2> <RESELLER_STATUS2>
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | MENU1    | MENU2      | RESELLER_TYPE | MESSAGE                         | FIRST_NAME      | DISTRIBUTOR_CODE | DEALER_SALES_AGENT_CODE | EMAIL                  | AGENT_TYPE | TILL_NO | SHORT_CODE | DEALER_SALES_AGENT_CODE | CHANNEL_TYPE | DBM_FIRST_NAME | DBM_NATIONAL_ID | DBM_GENDER | MOBILE_NO      | JURDICALE_NAME  | ADDRESS        | CITY        | STREET        | REGION             | SALES_AREA | COUNTRY        | LATTITUDE | LONGITUDE | PARENT                | STATUS   | USER_SUB_TYPE | CONTRACT_ID   | LOGISTIC_LOCATION | PASSWORD1 | SCC_STATUS | SEARCH_KEY | COLUMN_NAME  | RESELLER_STATUS | SEARCH_FIELD     | COLUMN_NAME2 | RESELLER_STATUS2 | NAME_OF_COLUMN     |
      | "OPERATOR"  | "2023"   | "SEARCH" | "REGISTER" | "Distributor" | "Reseller created successfully" | "DIST-1-3-test" | "DIST-1-3-test"  | ""                      | "DIST-1-1@seamless.se" | ""         | ""      | ""         | ""                      | ""           | ""             | ""              | ""         | "467011800138" | "DIST-1-3-test" | "test_address" | "test_city" | "test_street" | "Stockholm County" | ""         | "test_country" | ""        | ""        | "Operator (Operator)" | "Active" | "Dealer"      | "Distributor" | "Any"             | "2023"    | "Active"   | "MSISDN"   | "Kyc Status" | "APPROVED"      | "resellerMSISDN" | "Status"     | "Active"         | "Distributor Name" |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-28964:Only Operator can Register ASM type of Resellers
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I click on KYC
    And I verify Search and Register options are visible <MENU1> <MENU2>
    And I navigate to the Register KYC page
    And I select reseller type <RESELLER_TYPE>
    When I enter personal information and click next button <RESELLER_TYPE> <FIRST_NAME> <DISTRIBUTOR_CODE> <EMAIL> <AGENT_TYPE> <TILL_NO> <SHORT_CODE> <DEALER_SALES_AGENT_CODE> <CHANNEL_TYPE> <JURDICALE_NAME> <DBM_NATIONAL_ID> <DBM_GENDER> <MOBILE_NO>
    And I enter address information and click next button <ADDRESS> <STREET> <CITY> <REGION> <SALES_AREA> <COUNTRY> <LATTITUDE> <LONGITUDE>
    And I enter additional information for standard and click next button <PARENT> <STATUS> <USER_SUB_TYPE> <CONTRACT_ID> <PASSWORD> <SCC_STATUS>
    Then I am able to validate proper message <MESSAGE>
    And I navigate to the Search KYC page
    And I select search key <SEARCH_KEY>
    And I enter search value <MOBILE_NO>
    And I click search button
    And I verify reseller status in table <COLUMN_NAME> <RESELLER_STATUS>
    And I click on view button
    And I verify view page should have same data <NAME_OF_COLUMN> <FIRST_NAME> <DISTRIBUTOR_CODE> <MOBILE_NO> <JURDICALE_NAME>
    And I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <MOBILE_NO>
    And I verify reseller status in table <COLUMN_NAME2> <RESELLER_STATUS2>
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | MENU1    | MENU2      | RESELLER_TYPE | MESSAGE                         | FIRST_NAME | DISTRIBUTOR_CODE | DEALER_SALES_AGENT_CODE | EMAIL               | AGENT_TYPE | TILL_NO | SHORT_CODE | DEALER_SALES_AGENT_CODE | CHANNEL_TYPE | DBM_FIRST_NAME | DBM_NATIONAL_ID | DBM_GENDER | MOBILE_NO      | JURDICALE_NAME | ADDRESS        | CITY        | STREET        | REGION             | SALES_AREA               | COUNTRY        | LATTITUDE | LONGITUDE | PARENT     | STATUS   | USER_SUB_TYPE | CONTRACT_ID | LOGISTIC_LOCATION | PASSWORD1 | SCC_STATUS | SEARCH_KEY | COLUMN_NAME  | RESELLER_STATUS | SEARCH_FIELD     | COLUMN_NAME2 | RESELLER_STATUS2 | NAME_OF_COLUMN |
      | "OPERATOR"  | "2023"   | "SEARCH" | "REGISTER" | "ASM"         | "Reseller created successfully" | "ASM-2"    | "ASM-2"          | ""                      | "ASM-2@seamless.se" | ""         | ""      | ""         | ""                      | ""           | ""             | ""              | ""         | "467011800090" | "ASM-2"        | "test_address" | "test_city" | "test_street" | "Stockholm County" | "Stockholm Municipality" | "test_country" | ""        | ""        | "Operator" | "Active" | "Dealer"      | "ASM"       | "Any"             | "2023"    | ""         | "MSISDN"   | "Kyc Status" | "APPROVED"      | "resellerMSISDN" | "Status"     | "Active"         | "Name"         |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-28966:Only Operator can Register FranchiseShop type of Resellers
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I click on KYC
    And I verify Search and Register options are visible <MENU1> <MENU2>
    And I navigate to the Register KYC page
    And I select reseller type <RESELLER_TYPE>
    When I enter personal information and click next button <RESELLER_TYPE> <FIRST_NAME> <DISTRIBUTOR_CODE> <EMAIL> <AGENT_TYPE> <TILL_NO> <SHORT_CODE> <DEALER_SALES_AGENT_CODE> <CHANNEL_TYPE> <JURDICALE_NAME> <DBM_NATIONAL_ID> <DBM_GENDER> <MOBILE_NO>
    And I enter address information and click next button <ADDRESS> <STREET> <CITY> <REGION> <SALES_AREA> <COUNTRY> <LATTITUDE> <LONGITUDE>
    And I enter additional information for standard and click next button <PARENT> <STATUS> <USER_SUB_TYPE> <CONTRACT_ID> <PASSWORD> <SCC_STATUS>
    Then I am able to validate proper message <MESSAGE>
    And I navigate to the Search KYC page
    And I select search key <SEARCH_KEY>
    And I enter search value <MOBILE_NO>
    And I click search button
    And I verify reseller status in table <COLUMN_NAME> <RESELLER_STATUS>
    And I click on view button
    And I verify view page should have same data <NAME_OF_COLUMN> <FIRST_NAME> <DISTRIBUTOR_CODE> <MOBILE_NO> <JURDICALE_NAME>
    And I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <MOBILE_NO>
    And I verify reseller status in table <COLUMN_NAME2> <RESELLER_STATUS2>
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | MENU1    | MENU2      | RESELLER_TYPE   | MESSAGE                         | FIRST_NAME          | DISTRIBUTOR_CODE    | DEALER_SALES_AGENT_CODE | EMAIL                           | AGENT_TYPE | TILL_NO | SHORT_CODE | DEALER_SALES_AGENT_CODE | CHANNEL_TYPE | DBM_FIRST_NAME | DBM_NATIONAL_ID | DBM_GENDER | MOBILE_NO      | JURDICALE_NAME      | ADDRESS        | CITY        | STREET        | REGION             | SALES_AREA               | COUNTRY        | LATTITUDE | LONGITUDE | PARENT | STATUS   | USER_SUB_TYPE | CONTRACT_ID      | LOGISTIC_LOCATION | PASSWORD1 | SCC_STATUS | SEARCH_KEY | COLUMN_NAME  | RESELLER_STATUS | SEARCH_FIELD     | COLUMN_NAME2 | RESELLER_STATUS2 | NAME_OF_COLUMN      |
      | "OPERATOR"  | "2023"   | "SEARCH" | "REGISTER" | "FranchiseShop" | "Reseller created successfully" | "FranchiseShop-1-2" | "FranchiseShop-1-2" | ""                      | "FranchiseShop-1-2@seamless.se" | ""         | ""      | ""         | ""                      | ""           | ""             | ""              | ""         | "467011800092" | "FranchiseShop-1-2" | "test_address" | "test_city" | "test_street" | "Stockholm County" | "Stockholm Municipality" | "test_country" | "10"      | "20"      | ""     | "Active" | "Dealer"      | "Franchise Shop" | "Any"             | "2023"    | ""         | "MSISDN"   | "Kyc Status" | "APPROVED"      | "resellerMSISDN" | "Status"     | "Active"         | "Retailer POS Name" |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-28968: Only Operator can Register Warehouse type of Reseller
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I click on KYC
    And I verify Search and Register options are visible <MENU1> <MENU2>
    And I navigate to the Register KYC page
    And I select reseller type <RESELLER_TYPE>
    When I enter personal information for warehouse type and click next button <FIRST_NAME> <DISTRIBUTOR_CODE> <EMAIL> <WAREHOUSE_TYPE> <JURDICALE_NAME> <MOBILE_NO>
    And I enter address information and click next button <ADDRESS> <STREET> <CITY> <REGION> <SALES_AREA> <COUNTRY> <LATTITUDE> <LONGITUDE>
    And I enter additional information for standard and click next button <PARENT> <STATUS> <USER_SUB_TYPE> <CONTRACT_ID> <PASSWORD> <SCC_STATUS>
    Then I am able to validate proper message <MESSAGE>
    And I navigate to the Search KYC page
    And I select search key <SEARCH_KEY>
    And I enter search value <MOBILE_NO>
    And I click search button
    And I verify reseller status in table <COLUMN_NAME> <RESELLER_STATUS>
    And I click on view button
    And I verify view page should have same data <NAME_OF_COLUMN> <FIRST_NAME> <DISTRIBUTOR_CODE> <MOBILE_NO> <JURDICALE_NAME>
    And I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <MOBILE_NO>
    And I verify reseller status in table <COLUMN_NAME2> <RESELLER_STATUS2>
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | MENU1    | MENU2      | RESELLER_TYPE | MESSAGE                         | FIRST_NAME      | DISTRIBUTOR_CODE | DEALER_SALES_AGENT_CODE | EMAIL                       | WAREHOUSE_TYPE | TILL_NO | SHORT_CODE | DEALER_SALES_AGENT_CODE | CHANNEL_TYPE | DBM_FIRST_NAME | DBM_NATIONAL_ID | DBM_GENDER | MOBILE_NO      | JURDICALE_NAME  | ADDRESS        | CITY        | STREET        | REGION             | SALES_AREA               | COUNTRY | LATTITUDE | LONGITUDE | PARENT | STATUS   | USER_SUB_TYPE | CONTRACT_ID | LOGISTIC_LOCATION | PASSWORD1 | SCC_STATUS | SEARCH_KEY | COLUMN_NAME  | RESELLER_STATUS | SEARCH_FIELD     | COLUMN_NAME2 | RESELLER_STATUS2 | NAME_OF_COLUMN |
      | "OPERATOR"  | "2023"   | "SEARCH" | "REGISTER" | "WareHouse"   | "Reseller created successfully" | "Warehouse-1-2" | "Warehouse-1-2"  | ""                      | "Warehouse-1-1@seamless.se" | "MSD"          | ""      | ""         | ""                      | ""           | ""             | ""              | ""         | "467011800042" | "Warehouse-1-2" | "test_address" | "test_city" | "test_street" | "Stockholm County" | "Stockholm Municipality" | ""      | "10"      | "20"      | ""     | "Active" | "Warehouse"   | "Warehouse" | "Any"             | "2023"    | ""         | "MSISDN"   | "Kyc Status" | "APPROVED"      | "resellerMSISDN" | "Status"     | "Active"         | "Name"         |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-28967: Only Operator can Register Bank-PoS type of Resellers
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I click on KYC
    And I verify Search and Register options are visible <MENU1> <MENU2>
    And I navigate to the Register KYC page
    And I select reseller type <RESELLER_TYPE>
    When I enter personal information for warehouse type and click next button <FIRST_NAME> <DISTRIBUTOR_CODE> <EMAIL> <WAREHOUSE_TYPE> <JURDICALE_NAME> <MOBILE_NO>
    And I enter address information and click next button <ADDRESS> <STREET> <CITY> <REGION> <SALES_AREA> <COUNTRY> <LATTITUDE> <LONGITUDE>
    And I enter additional information for standard and click next button <PARENT> <STATUS> <USER_SUB_TYPE> <CONTRACT_ID> <PASSWORD> <SCC_STATUS>
    Then I am able to validate proper message <MESSAGE>
    And I navigate to the Search KYC page
    And I select search key <SEARCH_KEY>
    And I enter search value <MOBILE_NO>
    And I click search button
    And I verify reseller status in table <COLUMN_NAME> <RESELLER_STATUS>
    And I click on view button
    And I verify view page should have same data <NAME_OF_COLUMN> <FIRST_NAME> <DISTRIBUTOR_CODE> <MOBILE_NO> <JURDICALE_NAME>
    And I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <MOBILE_NO>
    And I verify reseller status in table <COLUMN_NAME2> <RESELLER_STATUS2>
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | MENU1    | MENU2      | RESELLER_TYPE | MESSAGE                         | FIRST_NAME     | DISTRIBUTOR_CODE | DEALER_SALES_AGENT_CODE | EMAIL                      | AGENT_TYPE | TILL_NO | SHORT_CODE | DEALER_SALES_AGENT_CODE | CHANNEL_TYPE | DBM_FIRST_NAME | DBM_NATIONAL_ID | DBM_GENDER | MOBILE_NO      | JURDICALE_NAME | ADDRESS        | CITY        | STREET        | REGION | SALES_AREA | COUNTRY | LATTITUDE | LONGITUDE | PARENT | STATUS   | USER_SUB_TYPE | CONTRACT_ID | LOGISTIC_LOCATION | PASSWORD1 | SCC_STATUS | SEARCH_KEY | COLUMN_NAME  | RESELLER_STATUS | SEARCH_FIELD     | COLUMN_NAME2 | RESELLER_STATUS2 | WAREHOUSE_TYPE | NAME_OF_COLUMN |
      | "OPERATOR"  | "2023"   | "SEARCH" | "REGISTER" | "Bank-PoS"    | "Reseller created successfully" | "Bank-PoS-1-3" | "Bank-PoS-1-3"   | ""                      | "Bank-PoS-1-2@seamless.se" | ""         | ""      | ""         | ""                      | ""           | ""             | ""              | ""         | "467011802043" | "Bank-PoS-1-3" | "test_address" | "test_city" | "test_street" | ""     | ""         | ""      | ""        | ""        | ""     | "Active" | ""            | "Bank"      | "Any"             | "2023"    | ""         | "MSISDN"   | "Kyc Status" | "APPROVED"      | "resellerMSISDN" | "Status"     | "Active"         | ""             | "Name"         |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-28969: Only Operator can Register OperatorAgent type of Reselller
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I click on KYC
    And I verify Search and Register options are visible <MENU1> <MENU2>
    And I navigate to the Register KYC page
    And I select reseller type <RESELLER_TYPE>
    When I enter personal information for OperatorAgent type and click next button <FIRST_NAME> <DISTRIBUTOR_CODE> <EMAIL> <PARENT> <JURDICALE_NAME> <MOBILE_NO>
    And I enter address information and click next button <ADDRESS> <STREET> <CITY> <REGION> <SALES_AREA> <COUNTRY> <LATTITUDE> <LONGITUDE>
    And I enter additional information for OperatorAgent and click next button <STATUS> <USER_SUB_TYPE> <CONTRACT_ID> <PASSWORD>
    Then I am able to validate proper message <MESSAGE>
    And I navigate to the Search KYC page
    And I select search key <SEARCH_KEY>
    And I enter search value <MOBILE_NO>
    And I click search button
    And I verify reseller status in table <COLUMN_NAME> <RESELLER_STATUS>
    And I click on view button
    And I verify view page should have same data <NAME_OF_COLUMN> <FIRST_NAME> <DISTRIBUTOR_CODE> <MOBILE_NO> <JURDICALE_NAME>
    And I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <MOBILE_NO>
    And I verify reseller status in table <COLUMN_NAME2> <RESELLER_STATUS2>
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | MENU1    | MENU2      | RESELLER_TYPE   | MESSAGE                         | FIRST_NAME          | DISTRIBUTOR_CODE    | DEALER_SALES_AGENT_CODE | EMAIL                           | AGENT_TYPE | TILL_NO | SHORT_CODE | DEALER_SALES_AGENT_CODE | CHANNEL_TYPE | DBM_FIRST_NAME | DBM_NATIONAL_ID | DBM_GENDER | MOBILE_NO      | JURDICALE_NAME  | ADDRESS        | CITY        | STREET        | REGION             | SALES_AREA               | COUNTRY | LATTITUDE | LONGITUDE | PARENT                | STATUS   | USER_SUB_TYPE | CONTRACT_ID     | LOGISTIC_LOCATION | PASSWORD1 | SEARCH_KEY | COLUMN_NAME  | RESELLER_STATUS | SEARCH_FIELD     | COLUMN_NAME2 | RESELLER_STATUS2 | NAME_OF_COLUMN |
      | "OPERATOR"  | "2023"   | "SEARCH" | "REGISTER" | "OperatorAgent" | "Reseller created successfully" | "OperatorAgent-1-2" | "OperatorAgent-1-2" | ""                      | "OperatorAgent-1-2@seamless.se" | ""         | ""      | ""         | ""                      | ""           | ""             | ""              | ""         | "467011800045" | "OperatorAgent" | "test_address" | "test_city" | "test_street" | "Stockholm County" | "Stockholm Municipality" | ""      | ""        | ""        | "Operator (Operator)" | "Active" | "Agent"       | "OperatorAgent" | "Any"             | "2023"    | "MSISDN"   | "Kyc Status" | "APPROVED"      | "resellerMSISDN" | "Status"     | "Active"         | "Name"         |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-28974,28985: Verify that after KYC Register POS user Directly goes to DMS without Approval of ASM and POS user able to login to the portal
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I click on KYC
    And I verify Search and Register options are visible <MENU1> <MENU2>
    And I navigate to the Register KYC page
    And I select reseller type <RESELLER_TYPE>
    When I enter personal information for OperatorAgent type and click next button <FIRST_NAME> <DISTRIBUTOR_CODE> <EMAIL> <PARENT> <JURDICALE_NAME> <MOBILE_NO>
    And I enter address information and click next button <ADDRESS> <STREET> <CITY> <REGION> <SALES_AREA> <COUNTRY> <LATTITUDE> <LONGITUDE>
    And I enter additional information for OperatorAgent and click next button <STATUS> <USER_SUB_TYPE> <CONTRACT_ID> <PASSWORD>
    Then I am able to validate proper message <MESSAGE>
    Then I logout
    When Provide <RESELLER_ID2> and <PASSWORD2> and login into system
    And I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <MOBILE_NO>
    And I verify reseller status in table <COLUMN_NAME2> <RESELLER_STATUS2>
    Then I logout
    When Provide <RESELLER_ID3> and <PASSWORD3> and login into system
    Then I logout
    Examples:
      | RESELLER_ID  | PASSWORD | RESELLER_ID2 | PASSWORD2 | RESELLER_ID3 | PASSWORD3 | MENU1    | MENU2      | RESELLER_TYPE | MESSAGE                         | FIRST_NAME | DISTRIBUTOR_CODE | DEALER_SALES_AGENT_CODE | EMAIL                 | AGENT_TYPE | TILL_NO | SHORT_CODE | DEALER_SALES_AGENT_CODE | CHANNEL_TYPE | DBM_FIRST_NAME | DBM_NATIONAL_ID | DBM_GENDER | MOBILE_NO      | JURDICALE_NAME | ADDRESS        | CITY        | STREET        | REGION             | SALES_AREA               | COUNTRY | LATTITUDE | LONGITUDE | PARENT                    | STATUS   | USER_SUB_TYPE | CONTRACT_ID | LOGISTIC_LOCATION | PASSWORD1 | SCC_STATUS | SEARCH_KEY | COLUMN_NAME  | RESELLER_STATUS | SEARCH_FIELD     | COLUMN_NAME2 | RESELLER_STATUS2 |
      | "Agent1-1-1" | "2023"   | "Operator"   | "2023"    | "POS-1-6"    | "2023"    | "SEARCH" | "REGISTER" | "POS"         | "Reseller created successfully" | "POS-1-6"  | "POS-1-6"        | ""                      | "POS-1-1@seamless.se" | ""         | ""      | ""         | ""                      | ""           | ""             | ""              | ""         | "467011800165" | "POS-1-6"      | "test_address" | "test_city" | "test_street" | "Stockholm County" | "Stockholm Municipality" | ""      | "10"      | "20"      | "Agent1-1-1 (AGENT1-1-1)" | "Active" | ""            | "POS"       | "Any"             | "2023"    | ""         | "MSISDN"   | "Kyc Status" | "APPROVED"      | "resellerMSISDN" | "Status"     | "Active"         |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-28997: Verify that user only able navigate to Next page after fill all mandatory fields while Registering a KYC.
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I click on KYC
    And I verify Search and Register options are visible <MENU1> <MENU2>
    And I navigate to the Register KYC page
    And I select reseller type <RESELLER_TYPE>
    When I enter personal information and click next button <RESELLER_TYPE> <FIRST_NAME> <DISTRIBUTOR_CODE> <EMAIL> <AGENT_TYPE> <TILL_NO> <SHORT_CODE> <DEALER_SALES_AGENT_CODE> <CHANNEL_TYPE> <JURDICALE_NAME> <DBM_NATIONAL_ID> <DBM_GENDER> <MOBILE_NO>
    And I enter address information <ADDRESS> <STREET> <CITY> <REGION> <SALES_AREA> <COUNTRY> <LATTITUDE> <LONGITUDE>
    # Then I am able to validate proper message <MESSAGE>
    Then I verify next button is disabled
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | MENU1    | MENU2      | RESELLER_TYPE | MESSAGE                       | FIRST_NAME | DISTRIBUTOR_CODE | DEALER_SALES_AGENT_CODE | EMAIL               | AGENT_TYPE | TILL_NO | SHORT_CODE | DEALER_SALES_AGENT_CODE | CHANNEL_TYPE | DBM_FIRST_NAME | DBM_NATIONAL_ID | DBM_GENDER | MOBILE_NO      | JURDICALE_NAME | ADDRESS        | CITY        | STREET        | REGION | SALES_AREA | COUNTRY | LATTITUDE | LONGITUDE | PARENT     | STATUS   | USER_SUB_TYPE | CONTRACT_ID | LOGISTIC_LOCATION | PASSWORD1 | SCC_STATUS | SEARCH_KEY | COLUMN_NAME  | RESELLER_STATUS | SEARCH_FIELD     | COLUMN_NAME2 | RESELLER_STATUS2 |
      | "OPERATOR"  | "2023"   | "SEARCH" | "REGISTER" | "ASM"         | "Region is a required field!" | "ASM-2-1"  | "ASM-2-1"        | ""                      | "ASM-2@seamless.se" | ""         | ""      | ""         | ""                      | ""           | ""             | ""              | ""         | "467011800050" | "ASM-2"        | "test_address" | "test_city" | "test_street" | ""     | ""         | ""      | ""        | ""        | "Operator" | "Active" | "Dealer"      | "ASM"       | "Any"             | "2023"    | ""         | "MSISDN"   | "Kyc Status" | "APPROVED"      | "resellerMSISDN" | "Status"     | "Active"         |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-28998: KYC Registering with duplicate data
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I click on KYC
    And I verify Search and Register options are visible <MENU1> <MENU2>
    And I navigate to the Register KYC page
    And I select reseller type <RESELLER_TYPE>
    When I enter personal information and click next button <RESELLER_TYPE> <FIRST_NAME> <DISTRIBUTOR_CODE> <EMAIL> <AGENT_TYPE> <TILL_NO> <SHORT_CODE> <DEALER_SALES_AGENT_CODE> <CHANNEL_TYPE> <JURDICALE_NAME> <DBM_NATIONAL_ID> <DBM_GENDER> <MOBILE_NO>
    Then I am able to validate proper message <MESSAGE>
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | MENU1    | MENU2      | RESELLER_TYPE | MESSAGE                                                                            | FIRST_NAME | DISTRIBUTOR_CODE | DEALER_SALES_AGENT_CODE | EMAIL | AGENT_TYPE | TILL_NO | SHORT_CODE | DEALER_SALES_AGENT_CODE | CHANNEL_TYPE | DBM_FIRST_NAME | DBM_NATIONAL_ID | DBM_GENDER | MOBILE_NO      | JURDICALE_NAME | ADDRESS | CITY | STREET | REGION | SALES_AREA | COUNTRY | LATTITUDE | LONGITUDE | PARENT     | STATUS   | USER_SUB_TYPE | CONTRACT_ID | LOGISTIC_LOCATION | PASSWORD1 | SCC_STATUS | SEARCH_KEY | COLUMN_NAME  | RESELLER_STATUS | SEARCH_FIELD     | COLUMN_NAME2 | RESELLER_STATUS2 |
      | "OPERATOR"  | "2023"   | "SEARCH" | "REGISTER" | "ASM"         | "You cannot register as a reseller, As this Msisdn already exist in Active state." | "ASM1-2 "  | "ASM1-2"         | " "                     | " "   | " "        | " "     | " "        | " "                     | " "          | " "            | " "             | " "        | "467011800090" | " "            | " "     | " "  | " "    | " "    | " "        | " "     | " "       | " "       | "Operator" | "Active" | "Dealer"      | "ASM"       | "Any"             | "2023"    | ""         | "MSISDN"   | "Kyc Status" | "APPROVED"      | "resellerMSISDN" | "Status"     | "Active"         |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-29012: Verify that Warehouse,OperatorAgent,POS,Franchise shop and Bank pos are not able to see KYC menu in portal.
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I navigate to the Register KYC page
    And I verify KYC page is not accessible
    Then I logout
    Examples:
      | RESELLER_ID         | PASSWORD |
      | "OperatorAgent-1-2" | "2023"   |
      | "Bank-PoS-1-2"      | "2023"   |
      | "Warehouse-1-2"     | "2023"   |
      | "FranchiseShop-1-2" | "2023"   |
      | "OperatorAgent-1-2" | "2023"   |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-29011: Filter search of KYC using different columns value(contains, equal , starts with and end with) data in KYC SEARCH page.
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I navigate to the Search KYC page
    Then I click on filters
    And I select filter column <COLUMN_NAME>
    And I select filter option <OPERATOR>
    And I enter filter value <VALUE>
    And I verify reseller status in table <COLUMN_NAME> <VALUE>
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | COLUMN_NAME   | OPERATOR | VALUE               |
      | "Operator"  | "2023"   | "Customer Id" | "equals" | "OperatorAgent-1-2" |
      | "Operator"  | "2023"   | "MSISDN"      | "equals" | "467011800090"      |
      | "Operator"  | "2023"   | "First Name"  | "equals" | "OperatorAgent-1-2" |
      | "Operator"  | "2023"   | "Creater Id"  | "equals" | "Operator"          |
      | "Operator"  | "2023"   | "Kyc Status"  | "equals" | "APPROVED"          |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-29010: User can Search KYC using Search key filter option in KYC SEARCH page
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I navigate to the Search KYC page
    And I select search key <SEARCH_KEY>
    And I enter search value <VALUE>
    And I click search button
    And I verify reseller status in table <SEARCH_COLUMN> <VALUE>
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | SEARCH_KEY    | SEARCH_COLUMN | VALUE               |
      | "Operator"  | "2023"   | "Customer ID" | "Customer Id" | "OperatorAgent-1-2" |
      | "Operator"  | "2023"   | "First Name"  | "First Name"  | "OperatorAgent-1-2" |
      | "Operator"  | "2023"   | "KYC Status"  | "Kyc Status"  | "APPROVED"          |
      | "Operator"  | "2023"   | "MSISDN"      | "MSISDN"      | "467011800090"      |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-29009: User can manage the table using Row per page option in KYC page
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I navigate to the Search KYC page
    When I provide rows per page count <COUNT_AS_TEN>
    And I scroll to Bottom if area is scrollable
    Then I verify rows per page count inside table less than or equal to <COUNT_AS_TEN>
    When I provide rows per page count <COUNT_AS_TWENTY>
    And I scroll to Bottom if area is scrollable
    Then I verify rows per page count inside table less than or equal to <COUNT_AS_TWENTY>
    When I provide rows per page count <COUNT_AS_FIFTY>
    And I scroll to Bottom if area is scrollable
    Then I verify rows per page count inside table less than or equal to <COUNT_AS_FIFTY>
    When I provide rows per page count <COUNT_AS_HUNDRED>
    And I scroll to Bottom if area is scrollable
    Then I verify rows per page count inside table less than or equal to <COUNT_AS_HUNDRED>
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | COUNT_AS_TEN | COUNT_AS_TWENTY | COUNT_AS_FIFTY | COUNT_AS_HUNDRED |
      | "Operator"  | "2023"   | "10"         | "20"            | "50"           | "100"            |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-29000: Mobile number validation while registering a Reseller
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I click on KYC
    And I verify Search and Register options are visible <MENU1> <MENU2>
    And I navigate to the Register KYC page
    And I select reseller type <RESELLER_TYPE>
    When I enter personal information <RESELLER_TYPE> <FIRST_NAME> <DISTRIBUTOR_CODE> <EMAIL> <JURDICALE_NAME> <MOBILE_NO>
    Then I am able to validate error message below the field <MESSAGE> <FIELD_NAME>
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | MENU1    | MENU2      | RESELLER_TYPE | MESSAGE                                                                                                                                    | FIRST_NAME | DISTRIBUTOR_CODE | DEALER_SALES_AGENT_CODE | EMAIL                  | AGENT_TYPE | TILL_NO | SHORT_CODE | DEALER_SALES_AGENT_CODE | CHANNEL_TYPE | DBM_FIRST_NAME | DBM_NATIONAL_ID | DBM_GENDER | MOBILE_NO   | JURDICALE_NAME | FIELD_NAME         |
      | "OPERATOR"  | "2023"   | "SEARCH" | "REGISTER" | "Distributor" | "You've entered invalid Mobile Number, It doesn't match with required pattern or entered characters exceeds more than allowed characters." | "DIST-1-2" | "DIST-1-2"       | ""                      | "DIST-1-1@seamless.se" | ""         | ""      | ""         | ""                      | ""           | ""             | ""              | ""         | "467011800" | "DIST-1-1"     | "msisdn-input-box" |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-29008: User can modify columns of the table using Columns option
    Given Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the Search KYC page
    And I click on columns button
    And I enter column title <COLUMN_NAME>
    And I verify toggle list is filtered <COLUMN_NAME>
    Then I click on toggle button <TOGGLE_COLUMN>
    And Unchecking the toggle should remove that column from the table <COLUMN_NAME>
    And I enter column title <COLUMN_NAME2>
    And I verify toggle list is filtered <COLUMN_NAME2>
    Then I click on toggle button <TOGGLE_COLUMN2>
    And Unchecking the toggle should remove that column from the table <COLUMN_NAME2>
    And I enter column title <COLUMN_NAME3>
    And I verify toggle list is filtered <COLUMN_NAME3>
    Then I click on toggle button <TOGGLE_COLUMN3>
    And Unchecking the toggle should remove that column from the table <COLUMN_NAME3>
    And I click on columns button
    And I perform Hide all columns operation
    Then I validate columns should not be displayed in the table
    And I perform Show all columns operation
    Then I validate columns should be displayed in the table
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | COLUMN_NAME   | TOGGLE_COLUMN | RESELLER_TYPE | COLUMN_NAME2 | COLUMN_NAME3 | TOGGLE_COLUMN2 | TOGGLE_COLUMN3 |
      | "OPERATOR" | "2023"   | "Customer Id" | "customerId"  | "Distributor" | "First Name" | "Creater Id" | "firstName"    | "createrId"    |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-29007: User can Download KYC Report in csv format
    Given Provide <USERNAME> and <PASSWORD> and login into system
    And I navigate to the Search KYC page
    And I select search key <SEARCH_KEY>
    And I enter search value <SEARCH_VALUE>
    And I click search button
    And I verify reseller status in table <COLUMN_NAME> <KYC_STATUS>
    And I click on export button
    And I click on download button
    And I read file name <FILE_NAME>
    Then I delete file name <FILE_NAME>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | FILE_NAME  | COLUMN_NAME  | KYC_STATUS | SEARCH_VALUE | SEARCH_KEY   |
      | "OPERATOR" | "2023"   | "data.csv" | "Kyc Status" | "APPROVED" | "APPROVED"   | "KYC Status" |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-29006: Verify that ASM user can edit KYC which are in pending for approval state present in  KYC APPROVAL page.
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I click on KYC
    And I navigate to the Register KYC page
    And I select reseller type <RESELLER_TYPE>
    When I enter personal information and click next button <RESELLER_TYPE> <FIRST_NAME> <DISTRIBUTOR_CODE> <EMAIL> <AGENT_TYPE> <TILL_NO> <SHORT_CODE> <DEALER_SALES_AGENT_CODE> <CHANNEL_TYPE> <JURDICALE_NAME> <DBM_NATIONAL_ID> <DBM_GENDER> <MOBILE_NO>
    And I enter address information and click next button <ADDRESS> <STREET> <CITY> <REGION> <SALES_AREA> <COUNTRY> <LATTITUDE> <LONGITUDE>
    And I enter additional information for OperatorAgent and click next button <STATUS> <USER_SUB_TYPE> <CONTRACT_ID> <PASSWORD>
    Then I am able to validate proper message "Reseller created successfully"
    And I navigate to the Search KYC page
    And I select search key <SEARCH_KEY>
    And I enter search value <MOBILE_NO>
    And I click search button
    And I verify reseller status in table <COLUMN_NAME> <RESELLER_STATUS>
    Then I logout
    When Provide <RESELLER_ID2> and <PASSWORD> and login into system
    And I navigate to the KYC Approve page
    Then I click on filters
    And I select filter column <FILTER_COLUMN_NAME>
    And I select filter option <OPERATOR>
    And I enter filter value <DISTRIBUTOR_CODE>
    Then I click on edit button
    # edit distributor name
    When I enter data in <FIELD_NAME> <EDITED_NAME>
    Then I click on update button
    Then I am able to validate proper message <MESSAGE>
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | RESELLER_ID2 | RESELLER_TYPE    | FIRST_NAME      | DISTRIBUTOR_CODE | DEALER_SALES_AGENT_CODE | EMAIL                      | AGENT_TYPE | TILL_NO | SHORT_CODE | DEALER_SALES_AGENT_CODE | CHANNEL_TYPE | DBM_FIRST_NAME | DBM_NATIONAL_ID | DBM_GENDER | MOBILE_NO      | JURDICALE_NAME | ADDRESS        | CITY        | STREET        | REGION             | SALES_AREA               | COUNTRY        | LATTITUDE | LONGITUDE | PARENT     | STATUS   | USER_SUB_TYPE | CONTRACT_ID      | LOGISTIC_LOCATION | PASSWORD1 | SCC_STATUS | SEARCH_KEY | COLUMN_NAME  | RESELLER_STATUS    | SEARCH_FIELD     | COLUMN_NAME2 | RESELLER_STATUS2 | FILTER_COLUMN_NAME | OPERATOR | FIELD_NAME            | EDITED_NAME | MESSAGE                         |
      | "Dist1"     | "2023"   | "ASM01"      | "SubDistributor" | "SUB-DIST-2-51" | "SUB-DIST-2-51"  | ""                      | "SUB-DIST-2-3@seamless.se" | ""         | ""      | ""         | ""                      | ""           | ""             | ""              | ""         | "467010801159" | "SUB-DIST-2-5" | "test_address" | "test_city" | "test_street" | "Stockholm County" | "Stockholm Municipality" | "test_country" | "10"      | "20"      | "Operator" | "Active" | ""            | "SubDistributor" | "Any"             | "2023"    | "Active"   | "MSISDN"   | "Kyc Status" | "PENDING_APPROVAL" | "resellerMSISDN" | "Status"     | "Active"         | "Customer Id"      | "equals" | "SubDistributor Name" | "_edited"   | "Reseller successfully updated" |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-29005: Verify Special Character in Name field  is visible in Search Screen Properly and able to View it in Details page
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I click on KYC
    And I verify Search and Register options are visible <MENU1> <MENU2>
    And I navigate to the Register KYC page
    And I select reseller type <RESELLER_TYPE>
    When I enter personal information and click next button <RESELLER_TYPE> <FIRST_NAME> <DISTRIBUTOR_CODE> <EMAIL> <AGENT_TYPE> <TILL_NO> <SHORT_CODE> <DEALER_SALES_AGENT_CODE> <CHANNEL_TYPE> <JURDICALE_NAME> <DBM_NATIONAL_ID> <DBM_GENDER> <MOBILE_NO>
    And I enter address information for Distributor and click next button <ADDRESS> <STREET> <CITY> <REGION> <SALES_AREA> <COUNTRY> <LATTITUDE> <LONGITUDE>
    And I enter additional information for standard and click next button <PARENT> <STATUS> <USER_SUB_TYPE> <CONTRACT_ID> <PASSWORD> <SCC_STATUS>
    Then I am able to validate proper message <MESSAGE>
    And I navigate to the Search KYC page
    And I select search key <SEARCH_KEY>
    And I enter search value <MOBILE_NO>
    And I click search button
    And I verify reseller status in table <COLUMN_NAME> <RESELLER_STATUS>
    And I click on view button
    And I verify view page should have same data <FIELD_NAME> <FIRST_NAME> <DISTRIBUTOR_CODE> <MOBILE_NO> <JURDICALE_NAME>
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | MENU1    | MENU2      | RESELLER_TYPE | MESSAGE                         | FIRST_NAME       | DISTRIBUTOR_CODE | DEALER_SALES_AGENT_CODE | EMAIL                  | AGENT_TYPE | TILL_NO | SHORT_CODE | DEALER_SALES_AGENT_CODE | CHANNEL_TYPE | DBM_FIRST_NAME | DBM_NATIONAL_ID | DBM_GENDER | MOBILE_NO      | JURDICALE_NAME | ADDRESS        | CITY        | STREET        | REGION             | SALES_AREA | COUNTRY        | LATTITUDE | LONGITUDE | PARENT     | STATUS   | USER_SUB_TYPE | CONTRACT_ID   | LOGISTIC_LOCATION | PASSWORD1 | SCC_STATUS | SEARCH_KEY | COLUMN_NAME  | RESELLER_STATUS | SEARCH_FIELD     | COLUMN_NAME2 | RESELLER_STATUS2 | FIELD_NAME         |
      | "OPERATOR"  | "2023"   | "SEARCH" | "REGISTER" | "Distributor" | "Reseller created successfully" | "D-@1234-#$%^&*" | "DIST-1-3-5"     | ""                      | "DIST-1-3@seamless.se" | ""         | ""      | ""         | ""                      | ""           | ""             | ""              | ""         | "467011801262" | "DIST-1-3-5"   | "test_address" | "test_city" | "test_street" | "Stockholm County" | ""         | "test_country" | ""        | ""        | "Operator" | "Active" | "Dealer"      | "Distributor" | "Any"             | "2023"    | "Active"   | "MSISDN"   | "Kyc Status" | "APPROVED"      | "resellerMSISDN" | "Status"     | "Active"         | "Distributor Name" |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-28970,28972,28986,28983: Verify SubDistributor moves to DMS only after approval from ASM
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I click on KYC
    And I navigate to the Register KYC page
    And I select reseller type <RESELLER_TYPE>
    When I enter personal information and click next button <RESELLER_TYPE> <FIRST_NAME> <DISTRIBUTOR_CODE> <EMAIL> <AGENT_TYPE> <TILL_NO> <SHORT_CODE> <DEALER_SALES_AGENT_CODE> <CHANNEL_TYPE> <JURDICALE_NAME> <DBM_NATIONAL_ID> <DBM_GENDER> <MOBILE_NO>
    And I enter address information and click next button <ADDRESS> <STREET> <CITY> <REGION> <SALES_AREA> <COUNTRY> <LATTITUDE> <LONGITUDE>
    And I enter additional information for OperatorAgent and click next button <STATUS> <USER_SUB_TYPE> <CONTRACT_ID> <PASSWORD>
    Then I am able to validate proper message <MESSAGE>
    And I navigate to the Search KYC page
    And I select search key <SEARCH_KEY>
    And I enter search value <MOBILE_NO>
    And I click search button
    And I verify reseller status in table <COLUMN_NAME> <RESELLER_STATUS>
    Then I logout
    # verifying sub-distributor is not displayed in DMS before approval
    When Provide <RESELLER_ID2> and <PASSWORD> and login into system
    And I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <MOBILE_NO>
    Then I am able to validate proper message "Reseller not found"
    Then I logout
    # approval process
    When Provide <RESELLER_ID3> and <PASSWORD> and login into system
    And I navigate to the KYC Approve page
    Then I click on filters
    And I select filter column <COLUMN_NAME>
    And I select filter option <OPERATOR>
    And I enter filter value <DISTRIBUTOR_CODE>
    And I verify reseller status in table <COLUMN_NAME> <DISTRIBUTOR_CODE>
    Then I click on approve button
    And I click on yes button
    Then I am able to validate proper message "Successfully approved reseller"
    Then I logout
    # verifying sub-distributor is displayed in DMS with active status
    When Provide <RESELLER_ID2> and <PASSWORD> and login into system
    And I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <MOBILE_NO>
    And I verify reseller status in table <COLUMN_NAME2> <RESELLER_STATUS2>
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | RESELLER_ID2 | RESELLER_ID3 | RESELLER_TYPE     | MESSAGE                         | FIRST_NAME     | DISTRIBUTOR_CODE | DEALER_SALES_AGENT_CODE | EMAIL                     | AGENT_TYPE | TILL_NO | SHORT_CODE | DEALER_SALES_AGENT_CODE | CHANNEL_TYPE | DBM_FIRST_NAME | DBM_NATIONAL_ID | DBM_GENDER | MOBILE_NO      | JURDICALE_NAME | ADDRESS        | CITY        | STREET        | REGION             | SALES_AREA               | COUNTRY        | LATTITUDE | LONGITUDE | PARENT | STATUS   | USER_SUB_TYPE | CONTRACT_ID      | LOGISTIC_LOCATION | PASSWORD1 | SCC_STATUS | SEARCH_KEY | COLUMN_NAME   | RESELLER_STATUS    | OPERATOR | SEARCH_FIELD     | COLUMN_NAME2 | RESELLER_STATUS2 |
      | "Dist1"     | "2023"   | "Operator"   | "ASM01"      | "Sub Distributor" | "Reseller created successfully" | "Sub-Dist16-6" | "Sub-Dist16-6"   | ""                      | "Sub-Dist1-3@seamless.se" | ""         | ""      | ""         | ""                      | ""           | ""             | ""              | ""         | "467011806193" | "Sub-Dist16-2" | "test_address" | "test_city" | "test_street" | "Stockholm County" | "Stockholm Municipality" | "test_country" | "20"      | "10"      | ""     | "Active" | ""            | "SubDistributor" | "Any"             | "2023"    | "Active"   | "MSISDN"   | "Customer Id" | "PENDING_APPROVAL" | "equals" | "resellerMSISDN" | "Status"     | "Active"         |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-28971,28973,28984: SubDistributor data will not gets shifted to DMS if ASM reject it
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I click on KYC
    And I verify Search and Register options are visible <MENU1> <MENU2>
    And I navigate to the Register KYC page
    And I select reseller type <RESELLER_TYPE>
    When I enter personal information and click next button <RESELLER_TYPE> <FIRST_NAME> <DISTRIBUTOR_CODE> <EMAIL> <AGENT_TYPE> <TILL_NO> <SHORT_CODE> <DEALER_SALES_AGENT_CODE> <CHANNEL_TYPE> <JURDICALE_NAME> <DBM_NATIONAL_ID> <DBM_GENDER> <MOBILE_NO>
    And I enter address information and click next button <ADDRESS> <STREET> <CITY> <REGION> <SALES_AREA> <COUNTRY> <LATTITUDE> <LONGITUDE>
    And I enter additional information for standard and click next button <PARENT> <STATUS> <USER_SUB_TYPE> <CONTRACT_ID> <PASSWORD> <SCC_STATUS>
    Then I am able to validate proper message <MESSAGE>
    And I navigate to the Search KYC page
    And I select search key <SEARCH_KEY>
    And I enter search value <MOBILE_NO>
    And I click search button
    And I verify reseller status in table <COLUMN_NAME> <RESELLER_STATUS>
    Then I logout
    When Provide <RESELLER_ID3> and <PASSWORD3> and login into system
    And I navigate to the KYC Approve page
    Then I click on filters
    And I select filter column <COLUMN_NAME>
    And I select filter option <OPERATOR>
    And I enter filter value <DISTRIBUTOR_CODE>
    And I verify reseller status in table <COLUMN_NAME> <DISTRIBUTOR_CODE>
    Then I click on reject button
    Then I enter reject reason "test"
    And I click on yes button
    Then I am able to validate proper message "Successfully rejected reseller"
    Then I logout
    When Provide <RESELLER_ID2> and <PASSWORD2> and login into system
    And I navigate to the Resellers Page
    And I enter reseller info with parameters <SEARCH_FIELD> <MOBILE_NO>
    Then I am able to validate proper message "Reseller not found"
    Then I logout
    When Provide <DISTRIBUTOR_CODE> and <PASSWORD> and login into system with invalid user
    Examples:
      | RESELLER_ID | PASSWORD | RESELLER_ID2 | PASSWORD2 | RESELLER_ID3 | PASSWORD3 | MENU1    | MENU2      | RESELLER_TYPE     | MESSAGE                         | FIRST_NAME        | DISTRIBUTOR_CODE  | DEALER_SALES_AGENT_CODE | EMAIL                     | AGENT_TYPE | TILL_NO | SHORT_CODE | DEALER_SALES_AGENT_CODE | CHANNEL_TYPE | DBM_FIRST_NAME | DBM_NATIONAL_ID | DBM_GENDER | MOBILE_NO      | JURDICALE_NAME   | ADDRESS        | CITY        | STREET        | REGION             | SALES_AREA               | COUNTRY        | LATTITUDE | LONGITUDE | PARENT | STATUS   | USER_SUB_TYPE | CONTRACT_ID      | LOGISTIC_LOCATION | PASSWORD1 | SCC_STATUS | SEARCH_KEY | COLUMN_NAME   | RESELLER_STATUS    | OPERATOR | SEARCH_FIELD     | COLUMN_NAME2 | RESELLER_STATUS2 |
      | "Dist1"     | "2023"   | "Operator"   | "2023"    | "ASM01"      | "2023"    | "SEARCH" | "REGISTER" | "Sub Distributor" | "Reseller created successfully" | "Sub-Dist1-6-172" | "Sub-Dist1-6-172" | ""                      | "Sub-Dist1-6@seamless.se" | ""         | ""      | ""         | ""                      | ""           | ""             | ""              | ""         | "467011809825" | "Sub-Dist1-6-17" | "test_address" | "test_city" | "test_street" | "Stockholm County" | "Stockholm Municipality" | "test_country" | "20"      | "10"      | ""     | "Active" | ""            | "SubDistributor" | "Any"             | "2023"    | "Active"   | "MSISDN"   | "Customer Id" | "PENDING_APPROVAL" | "equals" | "resellerMSISDN" | "Status"     | "Active"         |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-29010: User can Search KYC using Search key filter option in KYC SEARCH page
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I navigate to the Search KYC page
    And I verify edit button is not available
    And I verify view button is available
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD |
      | "Dist1"     | "2023"   |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-28979: Verify that ASM should have only APPROVE sub menu
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I click on KYC
    And I verify only "APPROVE" is visible
    And I verify <MENU1> <MENU2> is not visible
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | MENU1    | MENU2      |
      | "ASM01"     | "2023"   | "SEARCH" | "REGISTER" |

  #operator is not having edit access now
  @e2e-seamless-one-std-not-in-use @e2e-seamless-one-std-kyc-not-in-use
  Scenario Outline: STD-TC-28981: Verify that Operator have a access of edit Reseller option in KYC SEARCH page
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I navigate to the Search KYC page
    And I click on edit button
    Then I logout
    When Provide <RESELLER_ID2> and <PASSWORD2> and login into system
    And I navigate to the Search KYC page
    And I verify edit button is not available
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | RESELLER_ID2 | PASSWORD2 |
      | "OPERATOR"  | "2023"   | "Dist1"      | "2023"    |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-28982: Verify that Operator ,Distributor, Sub-distributor and Agent users should have  SEARCH and  REGISTER page .
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I click on KYC
    And I verify Search and Register options are visible <MENU1> <MENU2>
    Then I logout
    When Provide <RESELLER_ID2> and <PASSWORD2> and login into system
    And I click on KYC
    And I verify "REGISTER" "" is not visible
    Then I logout
    Examples:
      | RESELLER_ID  | PASSWORD | RESELLER_ID2 | PASSWORD2 | MENU1    | MENU2      |
      | "AGENT1-1-1" | "2023"   | "ASM01"      | "2023"    | "SEARCH" | "REGISTER" |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-28999: Verify that while registering KYC ,Text fields should have maximum 60 characters
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I click on KYC
    And I verify Search and Register options are visible <MENU1> <MENU2>
    And I navigate to the Register KYC page
    And I select reseller type <RESELLER_TYPE>
    When I enter personal information and click next button <RESELLER_TYPE> <FIRST_NAME> <DISTRIBUTOR_CODE> <EMAIL> <AGENT_TYPE> <TILL_NO> <SHORT_CODE> <DEALER_SALES_AGENT_CODE> <CHANNEL_TYPE> <JURDICALE_NAME> <DBM_NATIONAL_ID> <DBM_GENDER> <MOBILE_NO>
    And I enter address information for Distributor and click next button <ADDRESS> <STREET> <CITY> <REGION> <SALES_AREA> <COUNTRY> <LATTITUDE> <LONGITUDE>
    And I enter additional information for standard and click next button <PARENT> <STATUS> <USER_SUB_TYPE> <CONTRACT_ID> <PASSWORD> <SCC_STATUS>
    Then I am able to validate proper message <MESSAGE>
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | MENU1    | MENU2      | RESELLER_TYPE | MESSAGE                                                                           | FIRST_NAME | DISTRIBUTOR_CODE                                                    | DEALER_SALES_AGENT_CODE | EMAIL                  | AGENT_TYPE | TILL_NO | SHORT_CODE | DEALER_SALES_AGENT_CODE | CHANNEL_TYPE | DBM_FIRST_NAME | DBM_NATIONAL_ID | DBM_GENDER | MOBILE_NO      | JURDICALE_NAME | ADDRESS        | CITY        | STREET        | REGION             | SALES_AREA | COUNTRY        | LATTITUDE | LONGITUDE | PARENT     | STATUS   | USER_SUB_TYPE | CONTRACT_ID   | LOGISTIC_LOCATION | PASSWORD1 | SCC_STATUS | SEARCH_KEY | COLUMN_NAME  | RESELLER_STATUS | SEARCH_FIELD     | COLUMN_NAME2 | RESELLER_STATUS2 |
      | "OPERATOR"  | "2023"   | "SEARCH" | "REGISTER" | "Distributor" | "Reseller Rollback: Failed to check canCreateAccount.Couldn't insert account Ids" | "DIST-1-2" | "PfgVh9Zoils7vceBWDPpOiapPURAse9EOQtUdNZfFiYRWwapHVZUZz2m1gznCbekH" | ""                      | "DIST-1-1@seamless.se" | ""         | ""      | ""         | ""                      | ""           | ""             | ""              | ""         | "467011800098" | "DIST-1-1"     | "test_address" | "test_city" | "test_street" | "Stockholm County" | ""         | "test_country" | ""        | ""        | "Operator" | "Active" | "Dealer"      | "Distributor" | "Any"             | "2023"    | "Active"   | "MSISDN"   | "Kyc Status" | "APPROVED"      | "resellerMSISDN" | "Status"     | "Active"         |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-28978: Verify that ASM  APPROVE menu should have only Pending Approval requests of Sub-Dist, Agent and POS type of Resellers
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I navigate to the KYC Approve page
    And I verify reseller status in table <COLUMN_NAME> <RESELLER_STATUS>
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | COLUMN_NAME  | RESELLER_STATUS    |
      | "ASM01"     | "2023"   | "Kyc Status" | "PENDING_APPROVAL" |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-28975,28987: Verify that ASM with same sales area only can APPROVE POS type pending request
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I click on KYC
    And I verify Search and Register options are visible <MENU1> <MENU2>
    And I navigate to the Register KYC page
    And I select reseller type <RESELLER_TYPE>
    When I enter personal information and click next button <RESELLER_TYPE> <FIRST_NAME> <DISTRIBUTOR_CODE> <EMAIL> <AGENT_TYPE> <TILL_NO> <SHORT_CODE> <DEALER_SALES_AGENT_CODE> <CHANNEL_TYPE> <JURDICALE_NAME> <DBM_NATIONAL_ID> <DBM_GENDER> <MOBILE_NO>
    And I enter address information and click next button <ADDRESS> <STREET> <CITY> <REGION> <SALES_AREA> <COUNTRY> <LATTITUDE> <LONGITUDE>
    And I enter additional information for standard and click next button <PARENT> <STATUS> <USER_SUB_TYPE> <CONTRACT_ID> <PASSWORD> <SCC_STATUS>
    Then I am able to validate proper message <MESSAGE>
    And I navigate to the Search KYC page
    And I select search key <SEARCH_KEY>
    And I enter search value <MOBILE_NO>
    And I click search button
    And I verify reseller status in table <COLUMN_NAME> <RESELLER_STATUS>
    Then I logout
    When Provide <RESELLER_ID2> and <PASSWORD2> and login into system
    And I navigate to the KYC Approve page
    Then I click on filters
    And I select filter column <COLUMN_NAME>
    And I select filter option <OPERATOR>
    And I enter filter value <DISTRIBUTOR_CODE>
    And I verify reseller status in table <COLUMN_NAME> <DISTRIBUTOR_CODE>
    And I navigate to the Regions page
    Then I click on filters
    And I select filter column <COLUMN_NAME2>
    And I select filter option <OPERATOR>
    And I enter filter value <REGION>
    And I verify reseller status in table <COLUMN_NAME2> <REGION>
    Then I logout
    Examples:
      | RESELLER_ID | PASSWORD | RESELLER_ID2 | PASSWORD2 | MENU1    | MENU2      | RESELLER_TYPE     | MESSAGE                         | FIRST_NAME      | DISTRIBUTOR_CODE | DEALER_SALES_AGENT_CODE | EMAIL                     | AGENT_TYPE | TILL_NO | SHORT_CODE | DEALER_SALES_AGENT_CODE | CHANNEL_TYPE | DBM_FIRST_NAME | DBM_NATIONAL_ID | DBM_GENDER | MOBILE_NO      | JURDICALE_NAME | ADDRESS        | CITY        | STREET        | REGION             | SALES_AREA               | COUNTRY        | LATTITUDE | LONGITUDE | PARENT | STATUS   | USER_SUB_TYPE | CONTRACT_ID      | LOGISTIC_LOCATION | PASSWORD1 | SCC_STATUS | SEARCH_KEY | COLUMN_NAME   | RESELLER_STATUS    | OPERATOR | SEARCH_FIELD     | COLUMN_NAME2  | RESELLER_STATUS2 |
      | "Dist1"     | "2023"   | "ASM01"      | "2023"    | "SEARCH" | "REGISTER" | "Sub Distributor" | "Reseller created successfully" | "Sub-Dist1-5-8" | "Sub-Dist1-5-8"  | ""                      | "Sub-Dist1-5@seamless.se" | ""         | ""      | ""         | ""                      | ""           | ""             | ""              | ""         | "467011808874" | "Sub-Dist1-3"  | "test_address" | "test_city" | "test_street" | "Stockholm County" | "Stockholm Municipality" | "test_country" | "20"      | "10"      | ""     | "Active" | ""            | "SubDistributor" | "Any"             | "2023"    | "Active"   | "MSISDN"   | "Customer Id" | "PENDING_APPROVAL" | "equals" | "resellerMSISDN" | "Region Name" | "Active"         |

  @e2e-seamless-one-std @e2e-seamless-one-std-kyc
  Scenario Outline: STD-TC-28976: Verify that POS user should get deactivated after Rejected from ASM
    When Provide <RESELLER_ID> and <PASSWORD> and login into system
    And I click on KYC
    And I verify Search and Register options are visible <MENU1> <MENU2>
    And I navigate to the Register KYC page
    And I select reseller type <RESELLER_TYPE>
    When I enter personal information for OperatorAgent type and click next button <FIRST_NAME> <DISTRIBUTOR_CODE> <EMAIL> <PARENT> <JURDICALE_NAME> <MOBILE_NO>
    And I enter address information and click next button <ADDRESS> <STREET> <CITY> <REGION> <SALES_AREA> <COUNTRY> <LATTITUDE> <LONGITUDE>
    And I enter additional information for OperatorAgent and click next button <STATUS> <USER_SUB_TYPE> <CONTRACT_ID> <PASSWORD>
    Then I am able to validate proper message <MESSAGE>
    And I navigate to the Search KYC page
    And I select search key <SEARCH_KEY>
    And I enter search value <MOBILE_NO>
    And I click search button
    And I verify reseller status in table <COLUMN_NAME> <RESELLER_STATUS>
    Then I logout
    When Provide <RESELLER_ID2> and <PASSWORD2> and login into system
    And I navigate to the KYC Approve page
    Then I click on filters
    And I select filter column <COLUMN_NAME2>
    And I select filter option <OPERATOR>
    And I enter filter value <DISTRIBUTOR_CODE>
    And I verify reseller status in table <COLUMN_NAME> <DISTRIBUTOR_CODE>
    Then I click on reject button
    Then I enter reject reason "test"
    And I click on yes button
    Then I am able to validate proper message "Successfully rejected reseller"
    Then I logout
    When Provide <DISTRIBUTOR_CODE> and <PASSWORD> and login into system with invalid user
    Examples:
      | RESELLER_ID  | PASSWORD | RESELLER_ID2 | PASSWORD2 | MENU1    | MENU2      | RESELLER_TYPE | MESSAGE                         | FIRST_NAME  | DISTRIBUTOR_CODE | DEALER_SALES_AGENT_CODE | EMAIL                 | AGENT_TYPE | TILL_NO | SHORT_CODE | DEALER_SALES_AGENT_CODE | CHANNEL_TYPE | DBM_FIRST_NAME | DBM_NATIONAL_ID | DBM_GENDER | MOBILE_NO      | JURDICALE_NAME | ADDRESS        | CITY        | STREET        | REGION             | SALES_AREA               | COUNTRY | LATTITUDE | LONGITUDE | PARENT                    | STATUS   | USER_SUB_TYPE | CONTRACT_ID | LOGISTIC_LOCATION | PASSWORD1 | SCC_STATUS | SEARCH_KEY | COLUMN_NAME  | RESELLER_STATUS    | SEARCH_FIELD     | COLUMN_NAME2  | OPERATOR | RESELLER_STATUS2 |
      | "Agent1-1-1" | "2023"   | "ASM01"      | "2023"    | "SEARCH" | "REGISTER" | "POS"         | "Reseller created successfully" | "POS-1-2-9" | "POS-1-2-9"      | ""                      | "POS-1-2@seamless.se" | ""         | ""      | ""         | ""                      | ""           | ""             | ""              | ""         | "467011809985" | "POS-1-9"      | "test_address" | "test_city" | "test_street" | "Stockholm County" | "Stockholm Municipality" | ""      | "10"      | "20"      | "Agent1-1-1 (AGENT1-1-1)" | "Active" | ""            | "POS"       | "Any"             | "2023"    | ""         | "MSISDN"   | "Kyc Status" | "PENDING_APPROVAL" | "resellerMSISDN" | "Customer Id" | "equals" | "Active"         |
