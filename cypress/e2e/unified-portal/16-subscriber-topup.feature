Feature: 16-Subscriber TopUp Feature

    As a user on the unified portal Application
    I want to perform subscriber topup operation

    Background: Enter UserId and Password and perform Login
        Given I am on the unified portal login page

    ###################### Standard ######################

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-topup  @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28793,28802,28803: Performing topup transaction without mandatory fields with passing test data as data table
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify username <RESELLER_ID>
        And I navigate to the topup Page
        And I click on sell topup button
        Then I am able to validate proper message below field "Recipient mobile no is required!" "Recipient Mobile No"
        Then I am able to validate proper message below field "Amount is required!" "Amount"
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD |
            | "DIST1"     | "2023"   |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-topup  @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28794: Performing topup transaction with mobile number by passing test data as data table
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify username <RESELLER_ID>
        And I navigate to the topup Page
        When I perform transaction with mobile number having following parameters <RECIPIENT_MOBILE_NO> <AMOUNT> <COMMENTS> <TRANSACTION_TYPE>
        And I validate and confirm the transaction using mobile transaction <RECIPIENT_MOBILE_NO> <AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the transaction using mobile transaction <RECIPIENT_MOBILE_NO> <AMOUNT> <TITLE> <MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID     | PASSWORD | RECIPIENT_MOBILE_NO | AMOUNT | PAYMENT_METHOD | COMMENTS | TITLE                    | MESSAGE                         | RECEIVER_ID | TRANSACTION_TYPE | PRODUCT | STATUS    |
            | "DIST1"         | "2023"   | "467000000006"      | "100"  | "cash"         | "topup"  | "Successful Transaction" | "You have topped up 100.00 SEK" | ""          | "TOPUP"          | "topup" | "SUCCESS" |
            | "SUB-DIST2-1"   | "2023"   | "467000000006"      | "100"  | "cash"         | "topup"  | "Successful Transaction" | "You have topped up 100.00 SEK" | ""          | "TOPUP"          | "topup" | "SUCCESS" |
            | "POS-1-1-1-1-3" | "2023"   | "467000000006"      | "100"  | "cash"         | "topup"  | "Successful Transaction" | "You have topped up 100.00 SEK" | ""          | "TOPUP"          | "topup" | "SUCCESS" |
            | "AGENT2-1-1"    | "2023"   | "467000000006"      | "100"  | "cash"         | "topup"  | "Successful Transaction" | "You have topped up 100.00 SEK" | ""          | "TOPUP"          | "topup" | "SUCCESS" |

    @e2e-seamless-one-ers5.0
    Scenario Outline: STD-TC-24648: Perform Topup transaction via Single Topup option having initiator of Corporate Type as admin and subscriber as recipient of same group
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify username <RESELLER_ID>
        And I navigate to the topup Page
        When I perform transaction with mobile number having following parameters <RECIPIENT_MOBILE_NO> <AMOUNT> <COMMENTS> <TRANSACTION_TYPE>
        And I validate and confirm the transaction using mobile transaction <RECIPIENT_MOBILE_NO> <AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the transaction using mobile transaction <RECIPIENT_MOBILE_NO> <AMOUNT> <TITLE> <MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID  | PASSWORD | RECIPIENT_MOBILE_NO | AMOUNT | PAYMENT_METHOD | COMMENTS | TITLE                    | MESSAGE                         | RECEIVER_ID | TRANSACTION_TYPE | PRODUCT | STATUS    |
            | "Corporate1" | "2023"   | "467100000001"      | "100"  | "cash"         | "topup"  | "Successful Transaction" | "You have topped up 100.00 SEK" | ""          | "TOPUP"          | "topup" | "SUCCESS" |

    @e2e-seamless-one-ers5.0
    Scenario Outline: STD-TC-24648: Perform Topup transaction via Single Topup option having initiator of Corporate Type as admin and subscriber as recipient of different group
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify username <RESELLER_ID>
        And I navigate to the topup Page
        When I perform transaction with mobile number having following parameters <RECIPIENT_MOBILE_NO> <AMOUNT> <COMMENTS> <TRANSACTION_TYPE>
        And I validate and confirm the transaction using mobile transaction <RECIPIENT_MOBILE_NO> <AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the transaction using mobile transaction <RECIPIENT_MOBILE_NO> <AMOUNT> <TITLE> <MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID  | PASSWORD | RECIPIENT_MOBILE_NO | AMOUNT | PAYMENT_METHOD | COMMENTS | TITLE                | MESSAGE                                                      | RECEIVER_ID | TRANSACTION_TYPE | PRODUCT | STATUS    |
            | "Corporate1" | "2023"   | "467100000021"      | "100"  | "cash"         | "topup"  | "Transaction Failed" | "You are not allowed to transfer to the specified receiver." | ""          | "TOPUP"          | "topup" | "SUCCESS" |



    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-topup  @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28798,30336: Performing topup transaction with invalid amount
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify username <RESELLER_ID>
        And I navigate to the topup Page
        When I perform transaction with mobile number having following parameters <RECIPIENT_MOBILE_NO> <AMOUNT> <COMMENTS> <TRANSACTION_TYPE>
        And I validate and confirm the transaction using mobile transaction <RECIPIENT_MOBILE_NO> <AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the transaction using mobile transaction <RECIPIENT_MOBILE_NO> <AMOUNT> <TITLE> <MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID     | PASSWORD | RECIPIENT_MOBILE_NO | AMOUNT | PAYMENT_METHOD | COMMENTS | TITLE                | MESSAGE                    | TRANSACTION_TYPE |
            | "DIST1"         | "2023"   | "467000000006"      | "0"    | "cash"         | "topup"  | "Transaction Failed" | "Given amount is negative" | "TOPUP"          |
            | "SUB-DIST2-1"   | "2023"   | "467000000006"      | "0"    | "cash"         | "topup"  | "Transaction Failed" | "Given amount is negative" | "TOPUP"          |
            | "POS-1-1-1-1-3" | "2023"   | "467000000006"      | "0"    | "cash"         | "topup"  | "Transaction Failed" | "Given amount is negative" | "TOPUP"          |
            | "AGENT2-1-1"    | "2023"   | "467000000006"      | "0"    | "cash"         | "topup"  | "Transaction Failed" | "Given amount is negative" | "TOPUP"          |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-topup  @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28797: Performing topup transaction with invalid mobile number
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify username <RESELLER_ID>
        And I navigate to the topup Page
        When I perform transaction with mobile number having following parameters <RECIPIENT_MOBILE_NO> <AMOUNT> <COMMENTS> <TRANSACTION_TYPE>
        Then I am able to validate proper message below field "Recipient mobile number is not valid!" "Recipient Mobile No"
        Then I logout
        Examples:
            | RESELLER_ID     | PASSWORD | RECIPIENT_MOBILE_NO | AMOUNT | PAYMENT_METHOD | COMMENTS | TRANSACTION_TYPE |
            | "DIST1"         | "2023"   | "46700"             | "100"  | "cash"         | "topup"  | "TOPUP"          |
            | "SUB-DIST2-1"   | "2023"   | "46700"             | "100"  | "cash"         | "topup"  | "TOPUP"          |
            | "POS-1-1-1-1-3" | "2023"   | "46700"             | "100"  | "cash"         | "topup"  | "TOPUP"          |
            | "AGENT2-1-1"    | "2023"   | "46700"             | "100"  | "cash"         | "topup"  | "TOPUP"          |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-topup  @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28799: Performing topup transaction with topup amount outside of margin
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify username <RESELLER_ID>
        And I navigate to the topup Page
        When I perform transaction with mobile number having following parameters <RECIPIENT_MOBILE_NO> <AMOUNT> <COMMENTS> <TRANSACTION_TYPE>
        And I validate and confirm the transaction using mobile transaction <RECIPIENT_MOBILE_NO> <AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the transaction using mobile transaction <RECIPIENT_MOBILE_NO> <AMOUNT> <TITLE> <MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID     | PASSWORD | RECIPIENT_MOBILE_NO | AMOUNT     | PAYMENT_METHOD | COMMENTS | TITLE                | MESSAGE                                                                                            | TRANSACTION_TYPE |
            | "DIST1"         | "2023"   | "467000000006"      | "20000000" | "cash"         | "topup"  | "Transaction Failed" | "You provided an amount outside the margins of the contract. Please try again with a valid amount" | "TOPUP"          |
            | "SUB-DIST2-1"   | "2023"   | "467000000006"      | "20000000" | "cash"         | "topup"  | "Transaction Failed" | "You provided an amount outside the margins of the contract. Please try again with a valid amount" | "TOPUP"          |
            | "POS-1-1-1-1-3" | "2023"   | "467000000006"      | "20000000" | "cash"         | "topup"  | "Transaction Failed" | "You provided an amount outside the margins of the contract. Please try again with a valid amount" | "TOPUP"          |
            | "AGENT2-1-1"    | "2023"   | "467000000006"      | "20000000" | "cash"         | "topup"  | "Transaction Failed" | "You provided an amount outside the margins of the contract. Please try again with a valid amount" | "TOPUP"          |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-topup  @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28796: Verify top-up tab is not visible when logged in as OPERATOR
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        Then I click on Transaction tab
        And I validate top-up option is not visible
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD |
            | "OPERATOR"  | "2023"   |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-topup  @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28810,28889: Reset data imported through file for bulk top up
        #please provide same dataset mentioned in csv file otherwise validation will be failed
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify username <RESELLER_ID>
        And I navigate to the topup Page
        Then I verify page title <PAGE_TITLE>
        When I perform bulk transaction with mobile number having following parameters <UPLOAD_FILE> <TRANSACTION_TYPE>
        And I validate Bulk Transaction Number
        And I click reset button
        And I validate Single Transaction Number
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | TRANSACTION_TYPE | UPLOAD_FILE                                   | PAGE_TITLE |
            | "DIST1"     | "2023"   | ""               | "unified/unifiedBase_sample_topup_import.csv" | "Topup"    |

#Bug Raised: UBP-1940
    @e2e-seamless-one-std-not-working @e2e-seamless-one-std-transaction-not-working @e2e-seamless-one-std-topup-not-working @e2e-seamless-one-std-smoke-not-working
    Scenario Outline:  STD-TC-28804: Performing topup bulk transaction operation using add new option by passing test data as data table
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify username <RESELLER_ID>
        And I navigate to the topup Page
        When I perform bulk transaction with mobile number by add new option having following parameters <FIRST_RECIPIENT> <FIRST_AMOUNT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <COMMENTS> <TRANSACTION_TYPE>
        And I validate and confirm the bulk transaction using mobile transaction <FIRST_RECIPIENT> <FIRST_AMOUNT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the bulk transaction details <SUCCESS_COUNT> <FAILURE_COUNT> <FIRST_RECIPIENT> <FIRST_AMOUNT> <FIRST_STATUS> <FIRST_RESULT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <SECOND_STATUS> <SECOND_RESULT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <THIRD_STATUS> <THIRD_RESULT>
        Then I get the bulk transaction reference numbers and close the transactions
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | FIRST_RECIPIENT | SECOND_RECIPIENT | THIRD_RECIPIENT | FIRST_AMOUNT | SECOND_AMOUNT | THIRD_AMOUNT | PAYMENT_METHOD | COMMENTS | SUCCESS_COUNT | FAILURE_COUNT | FIRST_RESULT               | SECOND_RESULT              | THIRD_RESULT               | TRANSACTION_TYPE | PRODUCT | FIRST_STATUS | SECOND_STATUS | THIRD_STATUS |
            | "DIST1"     | "2023"   | "467000000006"  | "467000000006"   | "467000000006"  | "10"         | "12"          | "15"         | "cash"         | "topup"  | "3"           | "0"           | "You have topped up 10.00" | "You have topped up 12.00" | "You have topped up 15.00" | "TOPUP"          | "topup" | "Completed"  | "Completed"   | "Completed"  |

#Bug Raised: UBP-1940
    @e2e-seamless-one-std-not-working @e2e-seamless-one-std-transaction-not-working @e2e-seamless-one-std-topup-not-working @e2e-seamless-one-std-smoke-not-working
    Scenario Outline:  STD-TC-28862, 28809 Performing topup bulk transaction using file upload option by passing test data as data table
        #please provide same dataset mentioned in csv file otherwise validation will be failed
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify username <RESELLER_ID>
        And I navigate to the topup Page
        When I perform bulk transaction with mobile number having following parameters <UPLOAD_FILE> <TRANSACTION_TYPE>
        And I validate and confirm the bulk transaction using mobile transaction <FIRST_RECIPIENT> <FIRST_AMOUNT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the bulk transaction details <SUCCESS_COUNT> <FAILURE_COUNT> <FIRST_RECIPIENT> <FIRST_AMOUNT> <FIRST_STATUS> <FIRST_RESULT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <SECOND_STATUS> <SECOND_RESULT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <THIRD_STATUS> <THIRD_RESULT>
        Then I get the bulk transaction reference numbers and close the transactions
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | FIRST_RECIPIENT | SECOND_RECIPIENT | THIRD_RECIPIENT | FIRST_AMOUNT | SECOND_AMOUNT | THIRD_AMOUNT | PAYMENT_METHOD | COMMENTS  | SUCCESS_COUNT | FAILURE_COUNT | FIRST_RESULT               | SECOND_RESULT              | THIRD_RESULT               | TRANSACTION_TYPE | PRODUCT | UPLOAD_FILE                                   | FIRST_STATUS | SECOND_STATUS | THIRD_STATUS |
            | "DIST1"     | "2023"   | "467000000123"  | "467000000124"   | "467000000125"  | "12"         | "10"          | "15"         | "cash"         | "comment" | "3"           | "0"           | "You have topped up 12.00" | "You have topped up 10.00" | "You have topped up 15.00" | "TOPUP"          | "topup" | "unified/unifiedBase_sample_topup_import.csv" | "Completed"  | "Completed"   | "Completed"  |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-topup  @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28801: User is able to reset the input fields on topup screen
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify username <RESELLER_ID>
        And I navigate to the topup Page
        When I enter mobile number, amount and comments <RECIPIENT_MOBILE_NO> <AMOUNT> <COMMENTS>
        And I click reset button
        And I verify mobile number, amount and comments fields are reset
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | RECIPIENT_MOBILE_NO | AMOUNT | PAYMENT_METHOD | COMMENTS | TITLE                   | MESSAGE                         | RECEIVER_ID | TRANSACTION_TYPE | PRODUCT | STATUS    |
            | "DIST1"     | "2023"   | "467000000006"      | "100"  | "cash"         | "topup"  | "Succesful Transaction" | "You have topped up 100.00 SEK" | ""          | "TOPUP"          | "topup" | "SUCCESS" |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-topup  @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28803: Validation of mobile number input field
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify username <RESELLER_ID>
        And I navigate to the topup Page
        When I perform transaction with mobile number having following parameters <RECIPIENT_MOBILE_NO> <AMOUNT> <COMMENTS> <TRANSACTION_TYPE>
        And I verify warning message <WARNING>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | RECIPIENT_MOBILE_NO | AMOUNT | COMMENTS | TITLE                   | MESSAGE                         | RECEIVER_ID | TRANSACTION_TYPE | PRODUCT | STATUS    | WARNING                            |
            | "DIST1"     | "2023"   | ""                  | "100"  | "topup"  | "Succesful Transaction" | "You have topped up 100.00 SEK" | ""          | "TOPUP"          | "topup" | "SUCCESS" | "Recipient mobile no is required!" |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-topup  @e2e-seamless-one-std-smoke
    Scenario Outline:  STD-TC-28806: Bulk Topup transaction with all invalid mobile numbers
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify username <RESELLER_ID>
        And I navigate to the topup Page
        When I perform bulk transaction with mobile number by add new option having following parameters <FIRST_RECIPIENT> <FIRST_AMOUNT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <COMMENTS> <TRANSACTION_TYPE>
        And I verify warning message <WARNING>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | FIRST_RECIPIENT | SECOND_RECIPIENT | THIRD_RECIPIENT | FIRST_AMOUNT | SECOND_AMOUNT | THIRD_AMOUNT | PAYMENT_METHOD | COMMENTS | SUCCESS_COUNT | FAILURE_COUNT | FIRST_RESULT               | SECOND_RESULT              | THIRD_RESULT               | TRANSACTION_TYPE | PRODUCT | FIRST_STATUS | SECOND_STATUS | THIRD_STATUS | WARNING                                 |
            | "DIST1"     | "2023"   | "46700000w2"    | "46700000w2"     | "46700000w2"    | "10"         | "12"          | "15"         | "cash"         | "topup"  | "3"           | "0"           | "You have topped up 10.00" | "You have topped up 12.00" | "You have topped up 15.00" | "TOPUP"          | "topup" | "Completed"  | "Completed"   | "Completed"  | "Recipient mobile number is not valid!" |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-topup  @e2e-seamless-one-std-smoke
    Scenario Outline:  STD-TC-28808: Reset all transactions data in bulk using reset button
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify username <RESELLER_ID>
        And I navigate to the topup Page
        When I perform bulk transaction with mobile number by add new option having following parameters <FIRST_RECIPIENT> <FIRST_AMOUNT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <COMMENTS> <TRANSACTION_TYPE>
        And I click reset button
        And I verify mobile number, amount and comments fields are reset
        And I validate Single Transaction Number
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | FIRST_RECIPIENT | SECOND_RECIPIENT | THIRD_RECIPIENT | FIRST_AMOUNT | SECOND_AMOUNT | THIRD_AMOUNT | PAYMENT_METHOD | COMMENTS | SUCCESS_COUNT | FAILURE_COUNT | FIRST_RESULT               | SECOND_RESULT              | THIRD_RESULT               | TRANSACTION_TYPE | PRODUCT | FIRST_STATUS | SECOND_STATUS | THIRD_STATUS | WARNING                                 |
            | "DIST1"     | "2023"   | "46700000w2"    | "46700000w2"     | "46700000w2"    | "10"         | "12"          | "15"         | "cash"         | "topup"  | "3"           | "0"           | "You have topped up 10.00" | "You have topped up 12.00" | "You have topped up 15.00" | "TOPUP"          | "topup" | "Completed"  | "Completed"   | "Completed"  | "Recipient mobile number is not valid!" |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-topup  @e2e-seamless-one-std-smoke
    Scenario Outline:  STD-TC-28807: Delete a transaction before sending in bulk
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify username <RESELLER_ID>
        And I navigate to the topup Page
        When I perform bulk transaction with mobile number by add new option having following parameters <FIRST_RECIPIENT> <FIRST_AMOUNT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <COMMENTS> <TRANSACTION_TYPE>
        And I delete transaction number <TRANSACTION_NO3>
        And I delete transaction number <TRANSACTION_NO2>
        And I validate Single Transaction Number
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | FIRST_RECIPIENT | SECOND_RECIPIENT | THIRD_RECIPIENT | FIRST_AMOUNT | SECOND_AMOUNT | THIRD_AMOUNT | PAYMENT_METHOD | COMMENTS | SUCCESS_COUNT | FAILURE_COUNT | FIRST_RESULT               | SECOND_RESULT              | THIRD_RESULT               | TRANSACTION_TYPE | PRODUCT | FIRST_STATUS | SECOND_STATUS | THIRD_STATUS | WARNING                                 | TRANSACTION_NO3 | TRANSACTION_NO2 |
            | "DIST1"     | "2023"   | "46700000w2"    | "46700000w2"     | "46700000w2"    | "10"         | "12"          | "15"         | "cash"         | "topup"  | "3"           | "0"           | "You have topped up 10.00" | "You have topped up 12.00" | "You have topped up 15.00" | "TOPUP"          | "topup" | "Completed"  | "Completed"   | "Completed"  | "Recipient mobile number is not valid!" | "3"             | "2"             |


    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-topup  @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28839: Reseller other than operator is not able to view pending transactions tab
        When Provide <USER_ID> and <PASSWORD> and login into system
        And I navigate to pending transactions page
        And I verify not authorized screen
        Then I logout
        Examples:
            | USER_ID | PASSWORD |
            | "DIST1" | "2023"   |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-topup  @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28795: Distributor, Sub distributor, agent , POS, Franchise shops and bank POS reseller is able to sell standard bundle to the subscriber with valid MSISDN
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to standard bundle page
        And I click on cart button
        And I enter subscriber MSISDN <MSISDN>
        And I click on submit button
        Then I validate the transaction <MSISDN> <AMOUNT> <TITLE> <MESSAGE>
        Examples:
            | USERNAME | PASSWORD | MSISDN         | AMOUNT | TITLE | MESSAGE                                                       |
            | "DIST1"  | "2023"   | "467000000006" | ""     | ""    | "You have successfully activated BUNDLE_DAILY_DATA_40 bundle" |

    @e2e-seamless-one-std @e2e-seamless-one-std-transaction @e2e-seamless-one-std-topup  @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28829: Reseller other than operator is able to do reversal request of topup from the topup transaction receipt
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I verify username <RESELLER_ID>
        And I navigate to the topup Page
        When I perform transaction with mobile number having following parameters <RECIPIENT_MOBILE_NO> <AMOUNT> <COMMENTS> <TRANSACTION_TYPE>
        And I validate and confirm the transaction using mobile transaction <RECIPIENT_MOBILE_NO> <AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        And I click on request reversal button
        And I enter comments for reversal <COMMENTS>
        And I click confirm for reversal
        Then I am able to validate proper message "Reversal initiated for"
        Then I logout
        Examples:
            | RESELLER_ID  | PASSWORD | RECIPIENT_MOBILE_NO | AMOUNT | PAYMENT_METHOD | COMMENTS | TITLE                   | MESSAGE                         | RECEIVER_ID | TRANSACTION_TYPE | PRODUCT | STATUS    |
            | "POS1-1-1-1" | "2023"   | "467000006006"      | "100"  | "cash"         | "topup"  | "Succesful Transaction" | "You have topped up 100.00 SEK" | ""          | "TOPUP"          | "topup" | "SUCCESS" |


    ################################################### ERS 5.0 Framework #######################################################

    @e2e-seamless-one-ers5.0
    Scenario Outline:  TS-24647: Perform Corporate Topup transaction via Bulk Topup option having initiator of Corporate Type as admin and subscribers as recipients both belong to same group
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the topup Page
        When I perform bulk transaction with mobile number having following parameters <UPLOAD_FILE> <TRANSACTION_TYPE>
        And I validate and confirm the bulk transaction using mobile transaction <FIRST_RECIPIENT> <FIRST_AMOUNT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the bulk transaction details <SUCCESS_COUNT> <FAILURE_COUNT> <FIRST_RECIPIENT> <FIRST_AMOUNT> <FIRST_STATUS> <FIRST_RESULT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <SECOND_STATUS> <SECOND_RESULT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <THIRD_STATUS> <THIRD_RESULT>
        Then I get the bulk transaction reference numbers and close the transactions
        Then I logout
        Examples:
            | RESELLER_ID  | PASSWORD | FIRST_RECIPIENT | SECOND_RECIPIENT | THIRD_RECIPIENT | FIRST_AMOUNT | SECOND_AMOUNT | THIRD_AMOUNT | PAYMENT_METHOD | COMMENTS | SUCCESS_COUNT | FAILURE_COUNT | FIRST_RESULT               | SECOND_RESULT              | THIRD_RESULT               | TRANSACTION_TYPE | PRODUCT | UPLOAD_FILE                                   | FIRST_STATUS | SECOND_STATUS | THIRD_STATUS |
            | "Corporate1" | "2023"   | "467100000001"  | "467100000002"   | "467100000003"  | "12"         | "10"          | "15"         | "cash"         | "Test"   | "3"           | "0"           | "You have topped up 12.00" | "You have topped up 10.00" | "You have topped up 15.00" | "TOPUP"          | "topup" | "ers5.0/Corporate_Topup_Import_Processed.csv" | "Completed"  | "Completed"   | "Completed"  |

    @e2e-seamless-one-ers5.0
    Scenario Outline: TS-24647: Perform Corporate Topup transaction via Bulk Topup option having initiator of Corporate Type as admin and subscribers as recipients both belong to different groups
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the topup Page
        When I perform bulk transaction with mobile number having following parameters <UPLOAD_FILE> <TRANSACTION_TYPE>
        And I validate and confirm the bulk transaction using mobile transaction <FIRST_RECIPIENT> <FIRST_AMOUNT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the bulk transaction details <SUCCESS_COUNT> <FAILURE_COUNT> <FIRST_RECIPIENT> <FIRST_AMOUNT> <STATUS> <RESULT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <STATUS> <RESULT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <STATUS> <RESULT>
        Then I get the bulk transaction reference numbers and close the transactions
        Then I logout
        Examples:
            | RESELLER_ID  | PASSWORD | FIRST_RECIPIENT | SECOND_RECIPIENT | THIRD_RECIPIENT | FIRST_AMOUNT | SECOND_AMOUNT | THIRD_AMOUNT | PAYMENT_METHOD | COMMENTS | SUCCESS_COUNT | FAILURE_COUNT | RESULT                                                      | TRANSACTION_TYPE | PRODUCT | UPLOAD_FILE                                | STATUS   |
            | "Corporate1" | "2023"   | "467100000031"  | "467100000032"   | "467100000033"  | "12"         | "10"          | "15"         | "cash"         | "Test"   | "0"           | "3"           | "You are not allowed to transfer to the specified receiver" | "TOPUP"          | "topup" | "ers5.0/Corporate_Topup_Import_Failed.csv" | "Failed" |

    @e2e-seamless-one-ers5.0
    Scenario Outline:  TS-24647: Perform Corporate Topup transaction via Bulk Topup option having initiator of Corporate Type as admin and subscribers as recipients of two different groups
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the topup Page
        When I perform bulk transaction with mobile number having following parameters <UPLOAD_FILE> <TRANSACTION_TYPE>
        And I validate and confirm the bulk transaction using mobile transaction <FIRST_RECIPIENT> <FIRST_AMOUNT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the bulk transaction details <SUCCESS_COUNT> <FAILURE_COUNT> <FIRST_RECIPIENT> <FIRST_AMOUNT> <FIRST_STATUS> <FIRST_RESULT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <SECOND_STATUS> <SECOND_RESULT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <THIRD_STATUS> <THIRD_RESULT>
        Then I get the bulk transaction reference numbers and close the transactions
        Then I logout
        Examples:
            | RESELLER_ID  | PASSWORD | FIRST_RECIPIENT | SECOND_RECIPIENT | THIRD_RECIPIENT | FIRST_AMOUNT | SECOND_AMOUNT | THIRD_AMOUNT | PAYMENT_METHOD | COMMENTS | SUCCESS_COUNT | FAILURE_COUNT | FIRST_RESULT               | SECOND_RESULT              | THIRD_RESULT                                                | TRANSACTION_TYPE | PRODUCT | UPLOAD_FILE                                            | FIRST_STATUS | SECOND_STATUS | THIRD_STATUS |
            | "Corporate1" | "2023"   | "467100000001"  | "467100000002"   | "467100000013"  | "12"         | "10"          | "15"         | "cash"         | "Test"   | "2"           | "1"           | "You have topped up 12.00" | "You have topped up 10.00" | "You are not allowed to transfer to the specified receiver" | "TOPUP"          | "topup" | "ers5.0/Corporate_Topup_Import_PartiallyProcessed.csv" | "Completed"  | "Completed"   | "Failed"     |

    @e2e-seamless-one-ers5.0
    Scenario Outline:  TS-24647: Perform Corporate Topup transaction via Bulk Topup option having initiator of Corporate Type as manager and subscribers as recipients both belong to same group
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the topup Page
        When I perform bulk transaction with mobile number having following parameters <UPLOAD_FILE> <TRANSACTION_TYPE>
        And I validate and confirm the bulk transaction using mobile transaction <FIRST_RECIPIENT> <FIRST_AMOUNT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the bulk transaction details <SUCCESS_COUNT> <FAILURE_COUNT> <FIRST_RECIPIENT> <FIRST_AMOUNT> <STATUS> <RESULT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <STATUS> <RESULT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <STATUS> <RESULT>
        Then I get the bulk transaction reference numbers and close the transactions
        Then I logout
        Examples:
            | RESELLER_ID  | PASSWORD | FIRST_RECIPIENT | SECOND_RECIPIENT | THIRD_RECIPIENT | FIRST_AMOUNT | SECOND_AMOUNT | THIRD_AMOUNT | PAYMENT_METHOD | COMMENTS | SUCCESS_COUNT | FAILURE_COUNT | RESULT                                                      | TRANSACTION_TYPE | PRODUCT | UPLOAD_FILE                                 | STATUS   |
            | "Corporate1" | "2023"   | "467100000011"  | "467100000012"   | "467100000013"  | "12"         | "10"          | "15"         | "cash"         | "Test"   | "0"           | "3"           | "You are not allowed to transfer to the specified receiver" | "TOPUP"          | "topup" | "ers5.0/Corporate_Topup_Import_Failed2.csv" | "Failed" |

    @e2e-seamless-one-ers5.0
    Scenario Outline:  TS-24647: Perform Corporate Topup transaction via Bulk Topup option having initiator of Corporate Type as admin and subscribers as recipients both belong to same group (initiate a transaction with other admin in case two corporate-type resellers exist as admin)
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the topup Page
        When I perform bulk transaction with mobile number having following parameters <UPLOAD_FILE> <TRANSACTION_TYPE>
        And I validate and confirm the bulk transaction using mobile transaction <FIRST_RECIPIENT> <FIRST_AMOUNT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the bulk transaction details <SUCCESS_COUNT> <FAILURE_COUNT> <FIRST_RECIPIENT> <FIRST_AMOUNT> <FIRST_STATUS> <FIRST_RESULT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <SECOND_STATUS> <SECOND_RESULT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <THIRD_STATUS> <THIRD_RESULT>
        Then I get the bulk transaction reference numbers and close the transactions
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | FIRST_RECIPIENT | SECOND_RECIPIENT | THIRD_RECIPIENT | FIRST_AMOUNT | SECOND_AMOUNT | THIRD_AMOUNT | PAYMENT_METHOD | COMMENTS | SUCCESS_COUNT | FAILURE_COUNT | FIRST_RESULT               | SECOND_RESULT              | THIRD_RESULT               | TRANSACTION_TYPE | PRODUCT | UPLOAD_FILE                                   | FIRST_STATUS | SECOND_STATUS | THIRD_STATUS |
            | "Corporate" | "2023"   | "467100000001"  | "467100000002"   | "467100000003"  | "12"         | "10"          | "15"         | "cash"         | "Test"   | "3"           | "0"           | "You have topped up 12.00" | "You have topped up 10.00" | "You have topped up 15.00" | "TOPUP"          | "topup" | "ers5.0/Corporate_Topup_Import_Processed.csv" | "Completed"  | "Completed"   | "Completed"  |

    @e2e-seamless-one-ers5.0
    Scenario Outline:  TS-24647: Perform Corporate Topup transaction via Bulk Topup option having initiator of Corporate Type as admin and subscribers which are recently removed from the same group
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the topup Page
        When I perform bulk transaction with mobile number having following parameters <UPLOAD_FILE> <TRANSACTION_TYPE>
        And I validate and confirm the bulk transaction using mobile transaction <FIRST_RECIPIENT> <FIRST_AMOUNT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <PAYMENT_METHOD> <COMMENTS>
        Then I validate the bulk transaction details <SUCCESS_COUNT> <FAILURE_COUNT> <FIRST_RECIPIENT> <FIRST_AMOUNT> <FIRST_STATUS> <FIRST_RESULT> <SECOND_RECIPIENT> <SECOND_AMOUNT> <SECOND_STATUS> <SECOND_RESULT> <THIRD_RECIPIENT> <THIRD_AMOUNT> <THIRD_STATUS> <THIRD_RESULT>
        Then I get the bulk transaction reference numbers and close the transactions
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | FIRST_RECIPIENT | SECOND_RECIPIENT | THIRD_RECIPIENT | FIRST_AMOUNT | SECOND_AMOUNT | THIRD_AMOUNT | PAYMENT_METHOD | COMMENTS | SUCCESS_COUNT | FAILURE_COUNT | FIRST_RESULT               | SECOND_RESULT              | THIRD_RESULT                                                | TRANSACTION_TYPE | PRODUCT | UPLOAD_FILE                                             | FIRST_STATUS | SECOND_STATUS | THIRD_STATUS |
            | "Corporate" | "2023"   | "467100000001"  | "467100000002"   | "467100000004"  | "12"         | "10"          | "15"         | "cash"         | "Test"   | "2"           | "1"           | "You have topped up 12.00" | "You have topped up 10.00" | "You are not allowed to transfer to the specified receiver" | "TOPUP"          | "topup" | "ers5.0/Corporate_Topup_Import_PartiallyProcessed2.csv" | "Completed"  | "Completed"   | "Failed"     |