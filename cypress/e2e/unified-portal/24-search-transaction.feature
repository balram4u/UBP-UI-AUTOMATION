Feature: 24-Search Transaction Feature

    As a user on the unified portal Application
    I want to search all transactions

    Background: Enter UserId and Password and perform Login
        Given I am on the unified portal login page

    ###################### Standard ######################

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28906: Operator is able to search transaction using Transaction Status filter from the list
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to search transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        Then I scroll to right
        Then I validate <STATUS> should be available in the grid
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | STATUS    | SEARCH_FIELD_NAME   | SEARCH_VALUE |
            | "Operator" | "2023"   | "SUCCESS" | "transactionStatus" | "Success"    |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28905,28856: Operator is able to search transaction using Product Type filter from the list
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to search transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        Then I scroll to right
        Then I validate <SEARCH_VALUE> should be available in the grid
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | STATUS    | SEARCH_FIELD_NAME | SEARCH_VALUE |
            | "Operator" | "2023"   | "SUCCESS" | "product-types"   | "transfer"   |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28907,30339: Operator is able to search transaction using Transaction Type/Profile filter from the list
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to search transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        Then I scroll to right
        Then I validate <GRID_VALUE> should be available in the grid
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | STATUS    | SEARCH_FIELD_NAME          | SEARCH_VALUE      | GRID_VALUE        |
            | "Operator" | "2023"   | "SUCCESS" | "transactionTypeOrProfile" | "Credit Transfer" | "CREDIT_TRANSFER" |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28897,28847: Operator is able to search using search transaction option using Amount
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to search transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        Then I scroll to right
        Then I validate <GRID_VALUE> should be available in the grid
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | STATUS    | SEARCH_FIELD_NAME | SEARCH_VALUE | GRID_VALUE |
            | "Operator" | "2023"   | "SUCCESS" | "amount"          | "100"        | "100"      |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28901,28850,28889: Operator is able to reset all the transactions data using reset
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to search transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        Then I scroll to right
        Then I validate <GRID_VALUE> should be available in the grid
        And I click reset button
        Then I validate <SEARCH_FIELD_NAME> <SEARCH_VALUE> should be blank
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | STATUS    | SEARCH_FIELD_NAME | SEARCH_VALUE | GRID_VALUE |
            | "Operator" | "2023"   | "SUCCESS" | "amount"          | "100"        | "100"      |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28899,28848: Operator is able to search transaction option using Batch Id
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to search transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        Then I am able to validate proper message "NO_RECORD_FOUND"
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | STATUS    | SEARCH_FIELD_NAME | SEARCH_VALUE | GRID_VALUE |
            | "Operator" | "2023"   | "SUCCESS" | "batchId"         | "null"       | "null"     |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28896,28884,28900,28846: Operator is able to search transaction option using Receiver Reseller Type filter from the list
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to search transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        And I scroll to the element
        Then I validate element <GRID_VALUE> should be available in the table
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | STATUS    | SEARCH_FIELD_NAME      | SEARCH_VALUE     | GRID_VALUE    |
            | "Operator" | "2023"   | "SUCCESS" | "ReceiverResellerType" | "SubDistributor" | "SUB-DIST1-2" |
            | "Operator" | "2023"   | "SUCCESS" | "ReceiverResellerType" | "Distributor"    | "DIST3"       |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28895,28845: Operator is able to search transaction option using Sender Reseller Type filter from the list
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to search transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        And I scroll to elements
        Then I validate element <GRID_VALUE> should be available in the table
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | STATUS    | SEARCH_FIELD_NAME    | SEARCH_VALUE  | GRID_VALUE |
            | "Operator" | "2023"   | "SUCCESS" | "SenderResellerType" | "Distributor" | "DIST1"    |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28893,28881,28843: Operator is able to search transaction with Sender MSISDN
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to search transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        And I scroll to the element
        Then I validate element <GRID_VALUE> should be available in the table
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | STATUS    | SEARCH_FIELD_NAME | SEARCH_VALUE   | GRID_VALUE     |
            | "Operator" | "2023"   | "SUCCESS" | "senderMsisdn"    | "467000000001" | "467000000001" |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28901: Operator is able to reset all the transactions data using reset
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to search transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        And I click reset button
        Then I validate <SEARCH_FIELD_NAME> <SEARCH_VALUE> should be blank
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | STATUS    | SEARCH_FIELD_NAME | SEARCH_VALUE   | GRID_VALUE     |
            | "Operator" | "2023"   | "SUCCESS" | "senderMsisdn"    | "467000000001" | "467000000001" |

    @e2e-seamless-one-std1
    Scenario Outline: STD-TC-28888,28849: Operator is able to search transaction with From and To date filter
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to search transaction page and verify search transaction page title visible
        When I provide Date and click on search button
        Then I validate transaction should be available in the table
        Then I logout
        Examples:
            | USERNAME   | PASSWORD |
            | "Operator" | "2023"   |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28841: Operator is able to search all the transactions using search transaction option with sender reseller ID
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to search transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        Then I scroll to bottom
        Then I scroll to center
        Then I validate <SENDER_RESELLER_ID> should be available in the grid
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | SENDER_RESELLER_ID | SEARCH_FIELD_NAME  | SEARCH_VALUE |
            | "Operator" | "2023"   | "DIST1"            | "senderResellerId" | "DIST1"      |
