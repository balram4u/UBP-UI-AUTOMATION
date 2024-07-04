Feature: 22-Airtime Stock Feature

    As a user on the unified portal Application
    I want to transfer airtime stock

    Background: Enter UserId and Password and perform Login
        Given I am on the unified portal login page

    ###################### Standard ######################

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-airtime-stock @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28904: Reseller is able to do airtime stock from the airtime stock transaction receipt
        When Provide <USER_ID> and <PASSWORD> and login into system
        And I navigate to the airtime stock Page
        When I perform airtime stock transaction having following parameters <RESELLER_ID> <AMOUNT> <COMMENTS> <MSISDN>
        And I validate and confirm the transaction <RESELLER_ID> <AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the transaction <RESELLER_ID> <AMOUNT> <TITLE> <MESSAGE>
        Then I get the transaction reference number and close the transaction
        Then I logout
        Examples:
            | USER_ID | PASSWORD | RESELLER_ID   | AMOUNT | PAYMENT_METHOD | COMMENTS | TITLE                    | MESSAGE                       | MSISDN |
            | "DIST1" | "2023"   | "SUB-DIST1-2" | "100"  | "cash"         | "topup"  | "Stock Sell Successfull" | "You have transferred 100.00" | ""     |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-airtime-stock @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28864: Reseller is able to do reversal of airtime stock from the airtime stock transaction receipt
        When Provide <USER_ID> and <PASSWORD> and login into system
        And I navigate to the airtime stock Page
        When I perform airtime stock transaction having following parameters <RESELLER_ID> <AMOUNT> <COMMENTS> <MSISDN>
        And I validate and confirm the transaction <RESELLER_ID> <AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the transaction <RESELLER_ID> <AMOUNT> <TITLE> <MESSAGE>
        And I get the transaction reference number
        And I click transfer button for reversal
        And I enter comments for reversal <REVERSAL_COMMENTS>
        Then I click confirm for reversal
        Then I am able to validate proper message "Reversal initiated"
        Then I logout
        Examples:
            | USER_ID | PASSWORD | RESELLER_ID   | AMOUNT | PAYMENT_METHOD | COMMENTS | TITLE                    | MESSAGE                       | MSISDN | REVERSAL_COMMENTS |
            | "DIST1" | "2023"   | "SUB-DIST1-2" | "100"  | "cash"         | "topup"  | "Stock Sell Successfull" | "You have transferred 100.00" | ""     | "reversal"        |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-airtime-stock @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28880,30337,30342,30343: Airtime stock transaction with a valid reseller ID and invalid amount
        When Provide <USER_ID> and <PASSWORD> and login into system
        And I navigate to the airtime stock Page
        When I perform airtime stock transaction having following parameters <RESELLER_ID> <AMOUNT> <COMMENTS> <MSISDN>
        And I validate and confirm the transaction <RESELLER_ID> <AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the transaction <RESELLER_ID> <AMOUNT> <TITLE> <MESSAGE>
        Then I get the transaction reference number and close the transaction
        Then I logout
        Examples:
            | USER_ID | PASSWORD | RESELLER_ID   | AMOUNT | PAYMENT_METHOD | COMMENTS | TITLE               | MESSAGE                     | MSISDN |
            | "DIST1" | "2023"   | "SUB-DIST1-2" | "0"    | "cash"         | "topup"  | "Stock Sell Failed" | "Given amount is negative." | ""     |
    #| "DIST1" | "2023"   | "SUB-DIST1-2" | "-10"  | "cash"         | "topup"  | "Stock Sell Failed" | "Given amount is negative." | ""     |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-airtime-stock @e2e-seamless-one-std-smoke
    Scenario Outline:  STD-TC-28822: Performing airtime stock bulk transaction operation using add new option by passing with valid MSISDN as test data as data table
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify username <RESELLER_ID>
        And I navigate to the airtime stock Page
        And I perform bulk transaction with msisdn by add new option having following parameters <FIRST_RECIPIENT> <FIRST_AMOUNT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <COMMENTS> <TRANSACTION_TYPE>
        And I validate and confirm the bulk transaction using mobile transaction <FIRST_RECIPIENT> <FIRST_AMOUNT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the bulk transaction details <SUCCESS_COUNT> <FAILURE_COUNT> <FIRST_RECIPIENT> <FIRST_AMOUNT> <FIRST_STATUS> <FIRST_RESULT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <SECOND_STATUS> <SECOND_RESULT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <THIRD_STATUS> <THIRD_RESULT>
        Then I get the bulk transaction reference numbers and close the transactions
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | FIRST_RECIPIENT | SECOND_RECIPIENT | THIRD_RECIPIENT | FIRST_AMOUNT | SECOND_AMOUNT | THIRD_AMOUNT | PAYMENT_METHOD | COMMENTS | SUCCESS_COUNT | FAILURE_COUNT | FIRST_RESULT                 | SECOND_RESULT                | THIRD_RESULT                 | TRANSACTION_TYPE  | FIRST_STATUS | SECOND_STATUS | THIRD_STATUS |
            | "DIST1"     | "2023"   | "467000000019"  | "467000000019"   | "467000000019"  | "10"         | "12"          | "15"         | "cash"         | "topup"  | "3"           | "0"           | "You have transferred 10.00" | "You have transferred 12.00" | "You have transferred 15.00" | "CREDIT_TRANSFER" | "Completed"  | "Completed"   | "Completed"  |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-airtime-stock @e2e-seamless-one-std-smoke
    Scenario Outline:  STD-TC-28820 Performing airtime stock bulk transaction operation using add new option by passing with valid Reseller Id as test data as data table
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify username <RESELLER_ID>
        And I navigate to the airtime stock Page
        When I perform bulk transaction with resellerId by add new option having following parameters <FIRST_RECIPIENT> <FIRST_AMOUNT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <COMMENTS> <TRANSACTION_TYPE>
        And I validate and confirm the bulk transaction using mobile transaction <FIRST_RECIPIENT> <FIRST_AMOUNT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the bulk transaction details <SUCCESS_COUNT> <FAILURE_COUNT> <FIRST_RECIPIENT> <FIRST_AMOUNT> <FIRST_STATUS> <FIRST_RESULT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <SECOND_STATUS> <SECOND_RESULT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <THIRD_STATUS> <THIRD_RESULT>
        Then I get the bulk transaction reference numbers and close the transactions
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | FIRST_RECIPIENT | SECOND_RECIPIENT | THIRD_RECIPIENT | FIRST_AMOUNT | SECOND_AMOUNT | THIRD_AMOUNT | PAYMENT_METHOD | COMMENTS | SUCCESS_COUNT | FAILURE_COUNT | FIRST_RESULT                 | SECOND_RESULT                | THIRD_RESULT                 | TRANSACTION_TYPE  | FIRST_STATUS | SECOND_STATUS | THIRD_STATUS |
            | "DIST1"     | "2023"   | "SUB-DIST1-2"   | "SUB-DIST1-2"    | "SUB-DIST1-2"   | "10"         | "12"          | "15"         | "cash"         | "topup"  | "3"           | "0"           | "You have transferred 10.00" | "You have transferred 12.00" | "You have transferred 15.00" | "CREDIT_TRANSFER" | "Completed"  | "Completed"   | "Completed"  |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-airtime-stock @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28824 Performing airtime stock bulk transaction using file upload option by using MSISDN and Reseller Id by passing test data as data table
        #please provide same dataset mentioned in csv file otherwise validation will be failed
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify username <RESELLER_ID>
        And I navigate to the airtime stock Page
        When I perform bulk transaction with mobile number having following parameters <UPLOAD_FILE> <TRANSACTION_TYPE>
        And I validate and confirm the bulk transaction using mobile transaction <FIRST_RECIPIENT> <FIRST_AMOUNT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the bulk transaction details <SUCCESS_COUNT> <FAILURE_COUNT> <FIRST_RECIPIENT> <FIRST_AMOUNT> <FIRST_STATUS> <FIRST_RESULT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <SECOND_STATUS> <SECOND_RESULT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <THIRD_STATUS> <THIRD_RESULT>
        Then I get the bulk transaction reference numbers and close the transactions
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | FIRST_RECIPIENT | SECOND_RECIPIENT | THIRD_RECIPIENT | FIRST_AMOUNT | SECOND_AMOUNT | THIRD_AMOUNT | PAYMENT_METHOD | COMMENTS  | SUCCESS_COUNT | FAILURE_COUNT | FIRST_RESULT                 | SECOND_RESULT                | THIRD_RESULT                 | TRANSACTION_TYPE  | PRODUCT | STATUS    | UPLOAD_FILE                                                      | FIRST_STATUS | SECOND_STATUS | THIRD_STATUS |
            | "DIST1"     | "2023"   | "467000000019"  | "467000000019"   | "467000000019"  | "12"         | "10"          | "15"         | "cash"         | "comment" | "3"           | "0"           | "You have transferred 12.00" | "You have transferred 10.00" | "You have transferred 15.00" | "CREDIT_TRANSFER" | "topup" | "SUCCESS" | "unified/unifiedBase_sample_msisdn_airtime_stock_import.csv"     | "Completed"  | "Completed"   | "Completed"  |
            | "DIST1"     | "2023"   | "SUB-DIST1-2"   | "SUB-DIST1-2"    | "SUB-DIST1-2"   | "12"         | "10"          | "15"         | "cash"         | "comment" | "3"           | "0"           | "You have transferred 12.00" | "You have transferred 10.00" | "You have transferred 15.00" | "CREDIT_TRANSFER" | "topup" | "SUCCESS" | "unified/unifiedBase_sample_resellerId_airtime_stock_import.csv" | "Completed"  | "Completed"   | "Completed"  |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-airtime-stock @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28823 Performing airtime stock bulk transaction with one valid and one invalid MSISDN by passing test data as data table
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify username <RESELLER_ID>
        And I navigate to the airtime stock Page
        When I perform bulk transaction with one valid and one invalid <TRASACTION_DATA_TYPE> by add new option having following parameters <FIRST_RECIPIENT> <FIRST_AMOUNT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <COMMENTS> <TRANSACTION_TYPE>
        And I click on confirm button
        Then I validate the bulk transaction details <SUCCESS_COUNT> <FAILURE_COUNT> <FIRST_RECIPIENT> <FIRST_AMOUNT> <FIRST_STATUS> <FIRST_RESULT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <SECOND_STATUS> <SECOND_RESULT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <THIRD_STATUS> <THIRD_RESULT>
        Then I close the transaction receipt
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | FIRST_RECIPIENT | SECOND_RECIPIENT | THIRD_RECIPIENT | FIRST_AMOUNT | SECOND_AMOUNT | THIRD_AMOUNT | FIRST_STATUS | SECOND_STATUS | THIRD_STATUS | PAYMENT_METHOD | COMMENTS  | SUCCESS_COUNT | FAILURE_COUNT | FIRST_RESULT                 | SECOND_RESULT                                            | THIRD_RESULT | TRANSACTION_TYPE  | TRASACTION_DATA_TYPE |
            | "DIST1"     | "2023"   | "467000000019"  | "000000000000"   | ""              | "12"         | "10"          | ""           | "Completed"  | "Failed"      | ""           | "cash"         | "comment" | "1"           | "1"           | "You have transferred 12.00" | "The receiving reseller is not registered in the system" | ""           | "CREDIT_TRANSFER" | "MSISDN"             |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-airtime-stock @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28821,28815: Performing airtime stock bulk transaction with one valid and one invalid Reseller Id by passing test data as data table
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify username <RESELLER_ID>
        And I navigate to the airtime stock Page
        When I perform bulk transaction with one valid and one invalid <TRASACTION_DATA_TYPE> by add new option having following parameters <FIRST_RECIPIENT> <FIRST_AMOUNT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <COMMENTS> <TRANSACTION_TYPE>
        And I click on confirm button
        Then I validate the bulk transaction details <SUCCESS_COUNT> <FAILURE_COUNT> <FIRST_RECIPIENT> <FIRST_AMOUNT> <FIRST_STATUS> <FIRST_RESULT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <SECOND_STATUS> <SECOND_RESULT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <THIRD_STATUS> <THIRD_RESULT>
        Then I close the transaction receipt
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | FIRST_RECIPIENT | SECOND_RECIPIENT   | THIRD_RECIPIENT | FIRST_AMOUNT | SECOND_AMOUNT | THIRD_AMOUNT | FIRST_STATUS | SECOND_STATUS | THIRD_STATUS | PAYMENT_METHOD | COMMENTS  | SUCCESS_COUNT | FAILURE_COUNT | FIRST_RESULT                 | SECOND_RESULT                                             | THIRD_RESULT | TRANSACTION_TYPE  | TRASACTION_DATA_TYPE |
            | "DIST1"     | "2023"   | "SUB-DIST1-2"   | "UNKNOWN_RESELLER" | ""              | "12"         | "10"          | ""           | "Completed"  | "Failed"      | ""           | "cash"         | "comment" | "1"           | "1"           | "You have transferred 12.00" | "The receiving reseller is not registered in the system." | ""           | "CREDIT_TRANSFER" | "RESELLER_ID"        |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-airtime-stock @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28812: Airtime stock transaction with an invalid reseller ID
        When Provide <USER_ID> and <PASSWORD> and login into system
        And I navigate to the airtime stock Page
        When I perform airtime stock transaction having following parameters <RESELLER_ID> <AMOUNT> <COMMENTS> <MSISDN>
        And I validate and confirm the transaction <RESELLER_ID> <AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the transaction <RESELLER_ID> <AMOUNT> <TITLE> <MESSAGE>
        Then I get the transaction reference number and close the transaction
        Then I logout
        Examples:
            | USER_ID | PASSWORD | RESELLER_ID | AMOUNT | PAYMENT_METHOD | COMMENTS | TITLE               | MESSAGE                                                   | MSISDN |
            | "DIST1" | "2023"   | "dist1234"  | "100"  | "cash"         | "topup"  | "Stock Sell Failed" | "The receiving reseller is not registered in the system." | ""     |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-airtime-stock @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28811:Airtime stock transaction with a valid reseller ID
        When Provide <USER_ID> and <PASSWORD> and login into system
        And I navigate to the airtime stock Page
        When I perform airtime stock transaction having following parameters <RESELLER_ID> <AMOUNT> <COMMENTS> <MSISDN>
        And I validate and confirm the transaction <RESELLER_ID> <AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the transaction <RESELLER_ID> <AMOUNT> <TITLE> <MESSAGE>
        Then I get the transaction reference number and close the transaction
        Then I logout
        Examples:
            | USER_ID | PASSWORD | RESELLER_ID   | AMOUNT | PAYMENT_METHOD | COMMENTS | TITLE                    | MESSAGE                                           | MSISDN |
            | "DIST1" | "2023"   | "SUB-DIST1-2" | "100"  | "cash"         | "topup"  | "Stock Sell Successfull" | "You have transferred 100.00 SEK to SUB-DIST1-2." | ""     |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-airtime-stock @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28814: Airtime stock transaction to not an immediate children
        When Provide <USER_ID> and <PASSWORD> and login into system
        And I navigate to the airtime stock Page
        When I perform airtime stock transaction having following parameters <RESELLER_ID> <AMOUNT> <COMMENTS> <MSISDN>
        And I validate and confirm the transaction <RESELLER_ID> <AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the transaction <RESELLER_ID> <AMOUNT> <TITLE> <MESSAGE>
        Then I get the transaction reference number and close the transaction
        Then I logout
        Examples:
            | USER_ID | PASSWORD | RESELLER_ID  | AMOUNT | PAYMENT_METHOD | COMMENTS | TITLE               | MESSAGE                                                      | MSISDN |
            | "DIST1" | "2023"   | "POS2-1-1-1" | "100"  | "cash"         | "topup"  | "Stock Sell Failed" | "You are not allowed to transfer to the specified receiver." | ""     |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-airtime-stock @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28813: Airtime stock transaction with a valid reseller ID and outside the margin amount
        When Provide <USER_ID> and <PASSWORD> and login into system
        And I navigate to the airtime stock Page
        When I perform airtime stock transaction having following parameters <RESELLER_ID> <AMOUNT> <COMMENTS> <MSISDN>
        And I validate and confirm the transaction <RESELLER_ID> <AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the transaction <RESELLER_ID> <AMOUNT> <TITLE> <MESSAGE>
        Then I get the transaction reference number and close the transaction
        Then I logout
        Examples:
            | USER_ID | PASSWORD | RESELLER_ID   | AMOUNT   | PAYMENT_METHOD | COMMENTS | TITLE               | MESSAGE                                                                                             | MSISDN |
            | "DIST1" | "2023"   | "SUB-DIST1-2" | "300000" | "cash"         | "topup"  | "Stock Sell Failed" | "You provided an amount outside the margins of the contract. Please try again with a valid amount." | ""     |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-airtime-stock @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28816: Airtime stock transaction with a leaf node
        When Provide <USER_ID> and <PASSWORD> and login into system
        And I navigate to the airtime stock Page and verify not authorized screen
        Then I logout
        Examples:
            | USER_ID         | PASSWORD | RESELLER_ID   | AMOUNT   | PAYMENT_METHOD | COMMENTS | TITLE               | MESSAGE                                                                                             | MSISDN |
            | "POS-1-1-1-1-3" | "2023"   | "SUB-DIST1-2" | "300000" | "cash"         | "topup"  | "Stock Sell Failed" | "You provided an amount outside the margins of the contract. Please try again with a valid amount." | ""     |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-airtime-stock @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28818,28817: Two step Airtime stock transaction with valid MSISDN
        When Provide <USER_ID> and <PASSWORD> and login into system
        And I navigate to the airtime stock Page
        When I perform airtime stock transaction having following parameters <RESELLER_ID> <AMOUNT> <COMMENTS> <MSISDN>
        And I validate and confirm the transaction <MSISDN> <AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the transaction <MSISDN> <AMOUNT> <TITLE> <MESSAGE>
        Then I get the transaction reference number and close the transaction
        Then I logout
        Examples:
            | USER_ID | PASSWORD | RESELLER_ID | AMOUNT | PAYMENT_METHOD | COMMENTS | TITLE                    | MESSAGE                           | MSISDN         |
            | "DIST1" | "2023"   | ""          | "100"  | "cash"         | "topup"  | "Stock Sell Successfull" | "You have transferred 100.00 SEK" | "467000000019" |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-airtime-stock @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28819: Airtime stock transaction with valid MSISDN and outside the margin amount
        When Provide <USER_ID> and <PASSWORD> and login into system
        And I navigate to the airtime stock Page
        When I perform airtime stock transaction having following parameters <RESELLER_ID> <AMOUNT> <COMMENTS> <MSISDN>
        And I validate and confirm the transaction <MSISDN> <AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the transaction <MSISDN> <AMOUNT> <TITLE> <MESSAGE>
        Then I get the transaction reference number and close the transaction
        Then I logout
        Examples:
            | USER_ID | PASSWORD | RESELLER_ID | AMOUNT   | PAYMENT_METHOD | COMMENTS | TITLE               | MESSAGE                                                                                             | MSISDN         |
            | "DIST1" | "2023"   | ""          | "300000" | "cash"         | "topup"  | "Stock Sell Failed" | "You provided an amount outside the margins of the contract. Please try again with a valid amount." | "467000000019" |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-airtime-stock @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28832,28833,28835,28836: Operator is able to do reversal request of topup from search transaction option
        When Provide <USER_ID> and <PASSWORD> and login into system
        And I navigate to the airtime stock Page
        When I perform airtime stock transaction having following parameters <RESELLER_ID> <AMOUNT> <COMMENTS> <MSISDN>
        And I validate and confirm the transaction <RESELLER_ID> <AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the transaction <RESELLER_ID> <AMOUNT> <TITLE> <MESSAGE>
        Then I get the transaction reference number and close the transaction
        Then I logout
        When Provide <USER_ID2> and <PASSWORD2> and login into system
        And I navigate to search transaction page and verify search transaction page title visible
        When I provide transaction reference and click on search button
        And I click on view button
        And I click on reverse transaction button
        And I verify confirm button is disabled
        And I enter comments for request reversal in search transaction <COMMENTS>
        And I click confirm for reversal
        Then I am able to validate proper message "You successfully reversed"
        And I click on reverse transaction button
        And I enter comments for request reversal in search transaction <COMMENTS>
        And I click on confirm button again
        Then I am able to validate proper message "The transaction has already been reversed."
        Then I logout
        Examples:
            | USER_ID | PASSWORD | USER_ID2   | PASSWORD2 | RESELLER_ID   | AMOUNT | PAYMENT_METHOD | COMMENTS | TITLE                    | MESSAGE                       | MSISDN | TRANSACTION_TYPE  | PRODUCT    | STATUS    | RECEIVER_MSISDN |
            | "DIST1" | "2023"   | "Operator" | "2023"    | "SUB-DIST1-2" | "100"  | "cash"         | "topup"  | "Stock Sell Successfull" | "You have transferred 100.00" | ""     | "CREDIT_TRANSFER" | "transfer" | "SUCCESS" | "467000000011"  |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-airtime-stock @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28851: Reseller other than operator is able to search heirarchy transactions using heirarchy transactions with reference number
        Given Provide <USER_ID> and <PASSWORD> and login into system
        And I navigate to the airtime stock Page
        When I perform airtime stock transaction having following parameters <RESELLER_ID> <AMOUNT> <COMMENTS> <MSISDN>
        And I validate and confirm the transaction <RESELLER_ID> <AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the transaction <RESELLER_ID> <AMOUNT> <TITLE> <MESSAGE>
        Then I get the transaction reference number and close the transaction
        And I logout
        When Provide <USER_ID2> and <PASSWORD2> and login into system
        And I navigate to search transaction page and verify search transaction page title visible
        When I provide transaction reference and click on search button
        And I click on view button
        Then I logout
        Examples:
            | USER_ID | PASSWORD | USER_ID2   | PASSWORD2 | RESELLER_ID   | AMOUNT | PAYMENT_METHOD | COMMENTS | TITLE                    | MESSAGE                       | MSISDN | TRANSACTION_TYPE  | PRODUCT    | STATUS    | RECEIVER_MSISDN |
            | "DIST1" | "2023"   | "Operator" | "2023"    | "SUB-DIST1-2" | "100"  | "cash"         | "topup"  | "Stock Sell Successfull" | "You have transferred 100.00" | ""     | "CREDIT_TRANSFER" | "transfer" | "SUCCESS" | "467000000011"  |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-airtime-stock @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28838: Operator is able to reject a transaction from pending transactions
        When Provide <USER_ID> and <PASSWORD> and login into system
        And I navigate to the airtime stock Page
        When I perform airtime stock transaction having following parameters <RESELLER_ID> <AMOUNT> <COMMENTS> <MSISDN>
        And I validate and confirm the transaction <MSISDN> <AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the transaction <MSISDN> <AMOUNT> <TITLE> <MESSAGE>
        Then I get the transaction reference number and close the transaction
        And I navigate to hierarchy transaction page and verify search transaction page title visible
        When I provide transaction reference and click on search button
        And I click on view button
        And I click on reverse transaction button
        And I enter comments for request reversal in search transaction <COMMENTS>
        And I click confirm for reversal
        Then I am able to validate proper message "Reversal initiated"
        Then I logout
        When Provide <USER_ID2> and <PASSWORD2> and login into system
        And I navigate to pending transactions page
        And I wait for "18000" miliseconds
        And I click on reject pending button
        And I enter comments for reversal <COMMENTS>
        And I click on reject button
        Then I am able to validate proper message "The reversal of  100.00 BDT  from account SUB-DIST1-2 to account DIST1 was cancelled"
        Then I logout
        Examples:
            | USER_ID | PASSWORD | USER_ID2   | PASSWORD2 | MSISDN         | COMMENTS      | RESELLER_ID   | AMOUNT | PAYMENT_METHOD | TITLE                    | MESSAGE                       |
            | "Dist1" | "2023"   | "OPERATOR" | "2023"    | "467000000019" | "test reject" | "SUB-DIST1-2" | "100"  | "cash"         | "Stock Sell Successfull" | "You have transferred 100.00" |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-airtime-stock @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28837: Operator is able to approve a transaction from pending transactions
        When Provide <USER_ID> and <PASSWORD> and login into system
        And I navigate to the airtime stock Page
        When I perform airtime stock transaction having following parameters <RESELLER_ID> <AMOUNT> <COMMENTS> <MSISDN>
        And I validate and confirm the transaction <MSISDN> <AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the transaction <MSISDN> <AMOUNT> <TITLE> <MESSAGE>
        Then I get the transaction reference number and close the transaction
        Then I logout
        When Provide <USER_ID2> and <PASSWORD2> and login into system
        And I navigate to pending transactions page
        When I provide transaction reference and click on search button
        And I click on approve pending button
        And I enter comments for reversal <COMMENTS>
        And I click on approve button
        Then I am able to validate proper message "You successfully reversed"
        Then I logout
        Examples:
            | USER_ID | PASSWORD | USER_ID2   | PASSWORD2 | MSISDN         | COMMENTS      | RESELLER_ID   | AMOUNT | PAYMENT_METHOD | TITLE                    | MESSAGE                       |
            | "Dist1" | "2023"   | "OPERATOR" | "2023"    | "467000000019" | "test reject" | "SUB-DIST1-2" | "100"  | "cash"         | "Stock Sell Successfull" | "You have transferred 100.00" |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28863: Reset data imported through file for bulk airtime stock
        #please provide same dataset mentioned in csv file otherwise validation will be failed
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify username <RESELLER_ID>
        And I navigate to the airtime stock Page
        Then I verify page title <PAGE_TITLE>
        When I perform bulk transaction with mobile number having following parameters <UPLOAD_FILE> <TRANSACTION_TYPE>
        And I validate Bulk Transaction Number
        And I click reset button
        And I validate Single Transaction Number
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | TRANSACTION_TYPE | UPLOAD_FILE                                                  | PAGE_TITLE           |
            | "DIST1"     | "2023"   | ""               | "unified/unifiedBase_sample_msisdn_airtime_stock_import.csv" | "Sell Airtime Stock" |
