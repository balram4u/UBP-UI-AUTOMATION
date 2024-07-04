Feature: 23-Hierarchy Transaction Feature

    As a user on the unified portal Application
    I want to check the hierarchy transactions

    Background: Enter UserId and Password and perform Login
        Given I am on the unified portal login page

    ###################### Standard ######################

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke @e2e-seamless-one-std-hierarchy-transaction
    Scenario Outline: STD-TC-28908: Reseller is able to search transaction using Transaction Status filter from the list
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to hierarchy transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        And I scroll to right
        Then I validate <STATUS> should be available in the grid
        Then I logout
        Examples:
            | USERNAME | PASSWORD | STATUS    | SEARCH_FIELD_NAME   | SEARCH_VALUE |
            | "DIST1"  | "2023"   | "SUCCESS" | "transactionStatus" | "Success"    |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke @e2e-seamless-one-std-hierarchy-transaction
    Scenario Outline: STD-TC-28886: Reseller is able to search transaction using Transaction Type/Profile filter from the list
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to hierarchy transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        Then I scroll to right
        Then I validate <GRID_VALUE> should be available in the grid
        Then I logout
        Examples:
            | USERNAME | PASSWORD | STATUS    | SEARCH_FIELD_NAME          | SEARCH_VALUE      | GRID_VALUE        |
            | "DIST1"  | "2023"   | "SUCCESS" | "transactionTypeOrProfile" | "Credit Transfer" | "CREDIT_TRANSFER" |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke @e2e-seamless-one-std-hierarchy-transaction
    Scenario Outline: STD-TC-28861: Reseller is able to reset all the transactions data using reset
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to hierarchy transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        Then I scroll to right
        Then I validate <GRID_VALUE> should be available in the table
        And I click reset button
        Then I validate <SEARCH_FIELD_NAME> <SEARCH_VALUE> should be blank
        Then I logout
        Examples:
            | USERNAME | PASSWORD | STATUS    | SEARCH_FIELD_NAME          | SEARCH_VALUE      | GRID_VALUE        |
            | "DIST1"  | "2023"   | "SUCCESS" | "transactionTypeOrProfile" | "Credit Transfer" | "CREDIT_TRANSFER" |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke @e2e-seamless-one-std-hierarchy-transaction
    Scenario Outline: STD-TC-28860: Reseller is able to search heirarchy transactions option using From and To date filter
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to hierarchy transaction page and verify search transaction page title visible
        When I provide Date and click on search button
        Then I validate transaction should be available in the table
        Then I logout
        Examples:
            | USERNAME | PASSWORD |
            | "DIST1"  | "2023"   |

    @e2e-seamless-one-std-duplicate
    Scenario Outline: STD-TC-28887: Reseller is able to search transaction option using Batch Id
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to hierarchy transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        Then I validate <GRID_VALUE> should be available in the table
        Then I logout
        Examples:
            | USERNAME | PASSWORD | STATUS    | SEARCH_FIELD_NAME | SEARCH_VALUE | GRID_VALUE |
            | "DIST1"  | "2023"   | "SUCCESS" | "batchId"         | "null"       | "null"     |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke @e2e-seamless-one-std-hierarchy-transaction
    Scenario Outline: STD-TC-28885,28858: Reseller is able to search using search transaction option using Amount
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to hierarchy transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        Then I scroll to right
        Then I validate <GRID_VALUE> should be available in the grid
        Then I logout
        Examples:
            | USERNAME | PASSWORD | STATUS    | SEARCH_FIELD_NAME | SEARCH_VALUE | GRID_VALUE |
            | "DIST1"  | "2023"   | "SUCCESS" | "amount"          | "100"        | "100"      |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke @e2e-seamless-one-std-hierarchy-transaction
    Scenario Outline: STD-TC-28898,30340: Reseller is able to search transaction using Product Type filter from the list
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to hierarchy transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        Then I scroll to right
        Then I validate <SEARCH_VALUE> should be available in the grid
        Then I logout
        Examples:
            | USERNAME | PASSWORD | STATUS    | SEARCH_FIELD_NAME | SEARCH_VALUE |
            | "DIST1"  | "2023"   | "SUCCESS" | "product-types"   | "transfer"   |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke @e2e-seamless-one-std-hierarchy-transaction
    Scenario Outline: STD-TC-28895,28883: Reseller is able to search transaction option using Sender Reseller Type filter from the list
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to hierarchy transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        And I scroll to the elements
        Then I validate element <GRID_VALUE> should be available in the table
        Then I logout
        Examples:
            | USERNAME | PASSWORD | STATUS    | SEARCH_FIELD_NAME    | SEARCH_VALUE  | GRID_VALUE |
            | "DIST1"  | "2023"   | "SUCCESS" | "SenderResellerType" | "Distributor" | "transfer" |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke @e2e-seamless-one-std-hierarchy-transaction
    Scenario Outline: STD-TC-28896,28857: Reseller is able to search transaction option using Receiver Reseller Type filter from the list
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to hierarchy transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        And I scroll to the elements
        Then I validate element <GRID_VALUE> should be available in the table
        Then I logout
        Examples:
            | USERNAME | PASSWORD | STATUS    | SEARCH_FIELD_NAME      | SEARCH_VALUE     | GRID_VALUE |
            | "DIST1"  | "2023"   | "SUCCESS" | "ReceiverResellerType" | "SubDistributor" | "transfer" |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke @e2e-seamless-one-std-hierarchy-transaction
    Scenario Outline: STD-TC-28894,28844: Reseller is able to search transaction with Receiver MSISDN
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to hierarchy transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        And I scroll to the elements
        Then I validate element <GRID_VALUE> should be available in the table
        Then I logout
        Examples:
            | USERNAME | PASSWORD | STATUS    | SEARCH_FIELD_NAME | SEARCH_VALUE   | GRID_VALUE     |
            | "DIST1"  | "2023"   | "SUCCESS" | "receiverMsisdn"  | "467000000006" | "467000000006" |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke @e2e-seamless-one-std-hierarchy-transaction
    Scenario Outline: STD-TC-28893: Reseller is able to search transaction with Sender MSISDN
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to hierarchy transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        And I scroll to the element
        Then I validate element <GRID_VALUE> should be available in the table
        Then I logout
        Examples:
            | USERNAME | PASSWORD | STATUS    | SEARCH_FIELD_NAME | SEARCH_VALUE   | GRID_VALUE     |
            | "DIST1"  | "2023"   | "SUCCESS" | "senderMsisdn"    | "467000000001" | "467000000001" |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke @e2e-seamless-one-std-hierarchy-transaction
    Scenario Outline: STD-TC-28891: Reseller is able to search transaction with Sender Reseller ID
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to hierarchy transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        And I scroll to the elements
        Then I validate element <GRID_VALUE> should be available in the table
        Then I logout
        Examples:
            | USERNAME | PASSWORD | STATUS    | SEARCH_FIELD_NAME  | SEARCH_VALUE | GRID_VALUE |
            | "DIST1"  | "2023"   | "SUCCESS" | "senderResellerId" | "DIST1"      | "transfer" |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke @e2e-seamless-one-std-hierarchy-transaction
    Scenario Outline: STD-TC-28892,28882: Reseller is able to search transaction with Receiver Reseller ID
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I navigate to hierarchy transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        And I scroll to the element
        Then I validate element <GRID_VALUE> should be available in the table
        Then I logout
        Examples:
            | USERNAME | PASSWORD | STATUS    | SEARCH_FIELD_NAME    | SEARCH_VALUE  | GRID_VALUE    |
            | "DIST1"  | "2023"   | "SUCCESS" | "receiverResellerId" | "SUB-DIST1-2" | "SUB-DIST1-2" |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke @e2e-seamless-one-std-hierarchy-transaction
    Scenario Outline: STD-TC-28852: Reseller other than operator is able to search heirarchy transactions using heirarchy transactions with sender reseller ID
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to hierarchy transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        Then I scroll to bottom
        Then I scroll to center
        Then I validate <SENDER_RESELLER_ID> should be available in the grid
        Then I logout
        Examples:
            | USERNAME | PASSWORD | SENDER_RESELLER_ID | SEARCH_FIELD_NAME  | SEARCH_VALUE |
            | "DIST1"  | "2023"   | "DIST1"            | "senderResellerId" | "DIST1"      |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke @e2e-seamless-one-std-hierarchy-transaction
    Scenario Outline: STD-TC-28853: Reseller other than operator is able to search heirarchy transactions using heirarchy transactions with receiver reseller ID
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to hierarchy transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        Then I scroll to bottom
        Then I scroll to center
        Then I validate <SEARCH_VALUE> should be available in the grid
        Then I logout
        Examples:
            | USERNAME | PASSWORD | SENDER_RESELLER_ID | SEARCH_FIELD_NAME    | SEARCH_VALUE |
            | "DIST1"  | "2023"   | "DIST1"            | "receiverResellerId" | "DIST1"      |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke @e2e-seamless-one-std-hierarchy-transaction
    Scenario Outline: STD-TC-28854: Reseller other than operator is able to search heirarchy transactions using heirarchy transactions with Sender MSISDN
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to hierarchy transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        Then I scroll to the element
        Then I validate <SEARCH_VALUE> should be available in the grid
        Then I logout
        Examples:
            | USERNAME | PASSWORD | SENDER_RESELLER_ID | SEARCH_FIELD_NAME | SEARCH_VALUE   |
            | "DIST1"  | "2023"   | "DIST1"            | "senderMsisdn"    | "467000000001" |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke @e2e-seamless-one-std-hierarchy-transaction
    Scenario Outline: STD-TC-28855: Reseller other than operator is able to search heirarchy transactions using heirarchy transactions with Receiver MSISDN
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to hierarchy transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        Then I scroll to right
        Then I validate <SEARCH_VALUE> should be available in the grid
        Then I logout
        Examples:
            | USERNAME | PASSWORD | SENDER_RESELLER_ID | SEARCH_FIELD_NAME | SEARCH_VALUE   |
            | "DIST1"  | "2023"   | "DIST1"            | "receiverMsisdn"  | "467000000006" |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke @e2e-seamless-one-std-hierarchy-transaction
    Scenario Outline: STD-TC-28855: Reseller other than operator is able to search heirarchy transactions using heirarchy transactions with Receiver MSISDN
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to hierarchy transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        Then I scroll to right
        Then I validate <SEARCH_VALUE> should be available in the grid
        Then I logout
        Examples:
            | USERNAME | PASSWORD | SENDER_RESELLER_ID | SEARCH_FIELD_NAME | SEARCH_VALUE |
            | "DIST1"  | "2023"   | "DIST1"            | "amount"          | "100"        |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke @e2e-seamless-one-std-hierarchy-transaction
    Scenario Outline: STD-TC-28861: Reseller other than Operator is able to reset all the transactions data using Reset Search option button
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to hierarchy transaction page and verify search transaction page title visible
        When I provide <SEARCH_FIELD_NAME> <SEARCH_VALUE> and click on search button
        And I click reset button
        Then I validate <SEARCH_FIELD_NAME> <SEARCH_VALUE> should be blank
        Then I logout
        Examples:
            | USERNAME | PASSWORD | SENDER_RESELLER_ID | SEARCH_FIELD_NAME | SEARCH_VALUE |
            | "DIST1"  | "2023"   | "DIST1"            | "amount"          | "100"        |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke @e2e-seamless-one-std-hierarchy-transaction
    Scenario Outline: STD-TC-28890,28840: Reseller is able search heirarchy transactions with reference number
        When Provide <USER_ID> and <PASSWORD> and login into system
        And I navigate to the airtime stock Page
        When I perform airtime stock transaction having following parameters <RESELLER_ID> <AMOUNT> <COMMENTS> <MSISDN>
        And I validate and confirm the transaction <RESELLER_ID> <AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the transaction <RESELLER_ID> <AMOUNT> <TITLE> <MESSAGE>
        Then I get the transaction reference number and close the transaction
        And I navigate to hierarchy transaction page and verify search transaction page title visible
        When I provide transaction reference and click on search button
        Then I should able to verify these parameters <USER_ID> <RESELLER_ID> <RECEIVER_MSISDN> <TRANSACTION_TYPE> <PRODUCT> <AMOUNT> <STATUS>
        Then I logout
        Examples:
            | USER_ID | PASSWORD | RESELLER_ID   | AMOUNT | PAYMENT_METHOD | COMMENTS | TITLE                    | MESSAGE                       | MSISDN | TRANSACTION_TYPE  | PRODUCT    | STATUS    | RECEIVER_MSISDN |
            | "DIST1" | "2023"   | "SUB-DIST1-2" | "100"  | "cash"         | "topup"  | "Stock Sell Successfull" | "You have transferred 100.00" | ""     | "CREDIT_TRANSFER" | "transfer" | "SUCCESS" | "467000000019"  |
