Feature: 04-Raise Order Feature

    As a user on the unified portal Application
    I want to perform raise order operation

    Background: Opening unified portal
        Given I am on the unified portal login page

    @e2e-seamless-one-std @e2e-seamless-one-std-order @e2e-seamless-one-std-smoke 
    Scenario Outline: STD-NOT-AVAILABLE-IN-TEST-CASE Inventory Serialised Bulk import for OMS 1
        When Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to the bulk import page
        # And I wait for "12000" miliseconds
        When I perform import bulk operation with params <IMPORT_SUB_TYPE> <FILE_NAME>
        Then I am able to validate proper message "Successful operation"
        And I validate import information with params <IMPORT_SUB_TYPE> <INITIAL_STATUS> <USERNAME> <FILE_NAME>
        And I wait for "180000" miliseconds
        And I reload the page
        And I validate import information with params <IMPORT_SUB_TYPE> <STATUS> <USERNAME> <FILE_NAME>
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | IMPORT_SUB_TYPE        | FILE_NAME                                | INITIAL_STATUS | STATUS      |
            | "OPERATOR" | "2023"   | "Inventory Serialized" | "unified/Inventory_Serialized_OMS_1.csv" | "pending"      | "processed" |

    @e2e-seamless-one-std @e2e-seamless-one-std-order @e2e-seamless-one-std-smoke 
    Scenario Outline: STD-NOT-AVAILABLE-IN-TEST-CASE Inventory Serialised Bulk import for OMS 2
        When Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to the bulk import page
        When I perform import bulk operation with params <IMPORT_SUB_TYPE> <FILE_NAME>
        Then I am able to validate proper message "Successful operation"
        And I validate import information with params <IMPORT_SUB_TYPE> <INITIAL_STATUS> <USERNAME> <FILE_NAME>
        And I wait for "180000" miliseconds
        And I reload the page
        And I validate import information with params <IMPORT_SUB_TYPE> <STATUS> <USERNAME> <FILE_NAME>
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | IMPORT_SUB_TYPE        | FILE_NAME                                | INITIAL_STATUS | STATUS      |
            | "OPERATOR" | "2023"   | "Inventory Serialized" | "unified/Inventory_Serialized_OMS_2.csv" | "pending"      | "processed" |

    @e2e-seamless-one-std @e2e-seamless-one-std-order @e2e-seamless-one-std-smoke 
    Scenario Outline: STD-NOT-AVAILABLE-IN-TEST-CASE PO order raised by Distributor
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Raise Order Page
        When I perform PO Raise Order having following parameters <RESELLER_TYPE> <ORDER_TYPE> <PRODUCT_SKU> <QUANTITY> <SELLER_NAME> <SELLER_MSISDN> <PAYMENT_AGREEMENT> <PAYMENT_MODE> <DROP_LOCATION> <DELIVERY> <PICKUP_LOCATION>
        And I wait for "8000" miliseconds
        Then I am able to perform logout operation
        And I wait for "5000" miliseconds
        Then Provide <SELLER_NAME> and <PASSWORD> and login into system
        And I navigate to the Orders Page
        And I verify raised order available on Orders Page having following parameters <ORDER_TYPE> <SELLER_NAME> <RESELLER_ID> <PAYMENT_MODE> <STATE> <DROP_LOCATION>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | RESELLER_TYPE | ORDER_TYPE                           | PRODUCT_SKU | QUANTITY | SELLER_NAME | SELLER_MSISDN | PAYMENT_AGREEMENT | PAYMENT_MODE | STATE       | END_STATE   | DROP_LOCATION | PICKUP_LOCATION | DELIVERY   |
            | "DIST1"     | "2023"   | "Distributor" | "Purchase Order - Payments Involved" | "SIM_4G"    | "1"      | "Operator"  | ""            | "UPFRONT"         | "CASH"       | "SUBMITTED" | "SUBMITTED" | "SUB-DIST1-1" | "WH1"           | "delivery" |

    @e2e-seamless-one-std @e2e-seamless-one-std-order @e2e-seamless-one-std-smoke 
    Scenario Outline: STD-TC-28912,TC-28917 PO order raised by Distributor and trip creation
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I update old trip status <ASSIGN_AGENT_ID>
        And I navigate to the Raise Order Page
        When I perform PO Raise Order having following parameters <RESELLER_TYPE> <ORDER_TYPE> <PRODUCT_SKU> <QUANTITY> <SELLER_NAME> <SELLER_MSISDN> <PAYMENT_AGREEMENT> <PAYMENT_MODE> <DROP_LOCATION> <DELIVERY> <PICKUP_LOCATION>
        And I wait for "8000" miliseconds
        Then I am able to perform logout operation
        Then Provide <SELLER_NAME> and <PASSWORD> and login into system
        And I navigate to the Orders Page
        # And I apply filter to find order id inside the table
        # When I approve the raised order PO
        And I verify raised order available on Orders Page having following parameters <ORDER_TYPE> <SELLER_NAME> <RESELLER_ID> <PAYMENT_MODE> <STATE> <DROP_LOCATION>
        And I navigate to the Task page
        Then I apply filter to find order id inside the table
        And I click on view button
        When I click on Assisgn Agent button to assign agent
        Then I select the delivery type <DELIVERY_TYPE> <DELIVERY_AGENT_OPTION> <ELIGIBLE_AGENT> <VENDOR> <AGENT_ASSIGNED_MESSAGE>
        When I navigate to Trip Page
        And I fetch the tripId from UI <ASSIGN_AGENT_ID>
        Then I view task details under the trip <TYPE> <SELLER_NAME> <PRODUCT_SKU>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | RESELLER_TYPE | ORDER_TYPE                           | PRODUCT_SKU | QUANTITY | SELLER_NAME | SELLER_MSISDN | PAYMENT_AGREEMENT | PAYMENT_MODE | STATE       | END_STATE   | DROP_LOCATION | PICKUP_LOCATION | DELIVERY   | DELIVERY_TYPE | DELIVERY_AGENT_OPTION | ELIGIBLE_AGENT                    | ASSIGN_AGENT_ID  | TRIP_STATUS | TYPE | VENDOR | AGENT_ASSIGNED_MESSAGE |
            | "DIST1"     | "2023"   | "Distributor" | "Purchase Order - Payments Involved" | "SIM_4G"    | "1"      | "Operator"  | ""            | "UPFRONT"         | "CASH"       | "SUBMITTED" | "SUBMITTED" | "SUB-DIST1-1" | "WH1"           | "delivery" | "internal"    | "Seller"              | "OperatorAgent1 (OperatorAgent1)" | "OperatorAgent1" | "Ready"     | "PO" | ""     | "Agent assigned."      |

    @e2e-seamless-one-std @e2e-seamless-one-std-order @e2e-seamless-one-std-smoke 
    Scenario Outline: STD-TC-28918 PO order and trip creation using MSISDN
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I update old trip status <ASSIGN_AGENT_ID>
        And I navigate to the Raise Order Page
        When I perform PO Raise Order having following parameters <RESELLER_TYPE> <ORDER_TYPE> <PRODUCT_SKU> <QUANTITY> <SELLER_NAME> <SELLER_MSISDN> <PAYMENT_AGREEMENT> <PAYMENT_MODE> <DROP_LOCATION> <DELIVERY> <PICKUP_LOCATION>
        And I wait for "8000" miliseconds
        Then I am able to perform logout operation
        Then Provide <SELLER_NAME> and <PASSWORD> and login into system
        And I navigate to the Orders Page
        # And I apply filter to find order id inside the table
        # When I approve the raised order PO
        And I verify raised order available on Orders Page having following parameters <ORDER_TYPE> <SELLER_NAME> <RESELLER_ID> <PAYMENT_MODE> <STATE> <DROP_LOCATION>
        And I navigate to the Task page
        Then I apply filter to find order id inside the table
        And I click on view button
        When I click on Assisgn Agent button to assign agent
        Then I select the delivery type <DELIVERY_TYPE> <DELIVERY_AGENT_OPTION> <ELIGIBLE_AGENT> <VENDOR> <AGENT_ASSIGNED_MESSAGE>
        When I navigate to Trip Page
        And I fetch the tripId from UI <ASSIGN_AGENT_ID>
        Then I view task details under the trip <TYPE> <SELLER_NAME> <PRODUCT_SKU>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | RESELLER_TYPE | ORDER_TYPE                           | PRODUCT_SKU | QUANTITY | SELLER_NAME | SELLER_MSISDN  | PAYMENT_AGREEMENT | PAYMENT_MODE | STATE       | END_STATE   | DROP_LOCATION | PICKUP_LOCATION | DELIVERY   | DELIVERY_TYPE | DELIVERY_AGENT_OPTION | ELIGIBLE_AGENT                    | ASSIGN_AGENT_ID  | TRIP_STATUS | TYPE | VENDOR | AGENT_ASSIGNED_MESSAGE |
            | "DIST1"     | "2023"   | "Distributor" | "Purchase Order - Payments Involved" | "SIM_4G"    | "1"      | "Operator"  | "467000000000" | "UPFRONT"         | "CASH"       | "SUBMITTED" | "SUBMITTED" | "SUB-DIST1-1" | "WH1"           | "delivery" | "internal"    | "Seller"              | "OperatorAgent1 (OperatorAgent1)" | "OperatorAgent1" | "Ready"     | "PO" | ""     | "Agent assigned."      |

    @e2e-seamless-one-std @e2e-seamless-one-std-order @e2e-seamless-one-std-smoke 
    Scenario Outline: STD-TC-28919 PO order and trip creation
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I update old trip status <ASSIGN_AGENT_ID>
        And I navigate to the Raise Order Page
        When I perform PO Raise Order having following parameters <RESELLER_TYPE> <ORDER_TYPE> <PRODUCT_SKU> <QUANTITY> <SELLER_NAME> <SELLER_MSISDN> <PAYMENT_AGREEMENT> <PAYMENT_MODE> <DROP_LOCATION> <DELIVERY> <PICKUP_LOCATION>
        And I wait for "8000" miliseconds
        Then I am able to perform logout operation
        Then Provide <SELLER_NAME> and <PASSWORD> and login into system
        And I navigate to the Orders Page
        # And I apply filter to find order id inside the table
        # When I approve the raised order PO
        And I verify raised order available on Orders Page having following parameters <ORDER_TYPE> <SELLER_NAME> <RESELLER_ID> <PAYMENT_MODE> <STATE> <DROP_LOCATION>
        And I navigate to the Task page
        Then I apply filter to find order id inside the table
        And I click on view button
        When I click on Assisgn Agent button to assign agent
        Then I select the delivery type <DELIVERY_TYPE> <DELIVERY_AGENT_OPTION> <ELIGIBLE_AGENT> <VENDOR> <AGENT_ASSIGNED_MESSAGE>
        When I navigate to Trip Page
        And I fetch the tripId from UI <ASSIGN_AGENT_ID>
        When I start the trip having following parameters <ASSIGN_AGENT_ID> <RESELLER_PATH>
        When I navigate to Trip Page
        Then I validate trip status on UI should be <START_STATUS>
        And I perform markAsReached for warehouse having following parameters <ASSIGN_AGENT_ID> <PICKUP_LOCATION> <WAREHOUSE_DESTINATION_TYPE> <RESELLER_PATH>
        And I perform approveCollectStockRequest having following parameters <ASSIGN_AGENT_ID> <PICKUP_LOCATION> <RESELLER_PATH>
        And I perform markAsReached for pos having following parameters <ASSIGN_AGENT_ID> <DROP_LOCATION> <POS_DESTINATION_TYPE> <RESELLER_PATH>
        And I perform approvePOSDelivery having following parameters <ASSIGN_AGENT_ID> <RESELLER_PATH>
        And I peform endPosVisit having following parameters <ASSIGN_AGENT_ID> <RESELLER_PATH>
        Then I perform endTrip and validate trip status having following parameters <ASSIGN_AGENT_ID> <RESELLER_PATH>
        When I navigate to Trip Page
        Then I validate trip status on UI should be <END_STATUS>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | RESELLER_TYPE | ORDER_TYPE                           | PRODUCT_SKU | QUANTITY | SELLER_NAME | SELLER_MSISDN | PAYMENT_AGREEMENT | PAYMENT_MODE | STATE       | END_STATE   | DROP_LOCATION | PICKUP_LOCATION | DELIVERY   | DELIVERY_TYPE | DELIVERY_AGENT_OPTION | ELIGIBLE_AGENT                    | ASSIGN_AGENT_ID  | TRIP_STATUS | TYPE | VENDOR | AGENT_ASSIGNED_MESSAGE | WAREHOUSE_DESTINATION_TYPE | POS_DESTINATION_TYPE | RESELLER_PATH             | START_STATUS | END_STATUS |
            | "DIST1"     | "2023"   | "Distributor" | "Purchase Order - Payments Involved" | "SIM_4G"    | "1"      | "Operator"  | ""            | "UPFRONT"         | "CASH"       | "SUBMITTED" | "SUBMITTED" | "SUB-DIST1-1" | "WH1"           | "delivery" | "internal"    | "Seller"              | "OperatorAgent1 (OperatorAgent1)" | "OperatorAgent1" | "Ready"     | "PO" | ""     | "Agent assigned."      | "WAREHOUSE"                | "POS"                | "OPERATOR/OperatorAgent1" | "STARTED"    | "ENDED"    |

    @e2e-seamless-one-std @e2e-seamless-one-std-order @e2e-seamless-one-std-smoke 
    Scenario Outline: STD-TC-28939 PO order and trip creation by an Franchise Shops
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I update old trip status <ASSIGN_AGENT_ID>
        And I navigate to the Raise Order Page
        When I perform PO Raise Order having following parameters <RESELLER_TYPE> <ORDER_TYPE> <PRODUCT_SKU> <QUANTITY> <SELLER_NAME> <SELLER_MSISDN> <PAYMENT_AGREEMENT> <PAYMENT_MODE> <DROP_LOCATION> <DELIVERY> <PICKUP_LOCATION>
        And I wait for "8000" miliseconds
        Then I am able to perform logout operation
        Then Provide <SELLER_NAME> and <SELLER_PASSWORD> and login into system
        And I navigate to the Orders Page
        And I verify raised order available on Orders Page having following parameters <ORDER_TYPE> <SELLER_NAME> <RESELLER_ID> <PAYMENT_MODE> <STATE> <DROP_LOCATION>
        And I navigate to the Task page
        Then I apply filter to find order id inside the table
        And I click on view button
        When I click on Assisgn Agent button to assign agent
        Then I select the delivery type <DELIVERY_TYPE> <DELIVERY_AGENT_OPTION> <ELIGIBLE_AGENT> <VENDOR> <AGENT_ASSIGNED_MESSAGE>
        When I navigate to Trip Page
        And I fetch the tripId from UI <ASSIGN_AGENT_ID>
        Then I view task details under the trip <TYPE> <SELLER_NAME> <PRODUCT_SKU>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | RESELLER_TYPE   | ORDER_TYPE                           | PRODUCT_SKU | QUANTITY | SELLER_NAME | SELLER_PASSWORD | SELLER_MSISDN | PAYMENT_AGREEMENT | PAYMENT_MODE | STATE       | END_STATE   | DROP_LOCATION | PICKUP_LOCATION | DELIVERY   | DELIVERY_TYPE | DELIVERY_AGENT_OPTION | ELIGIBLE_AGENT                    | ASSIGN_AGENT_ID  | TRIP_STATUS | TYPE | VENDOR | AGENT_ASSIGNED_MESSAGE |
            | "FS1"       | "2023"   | "FranchiseShop" | "Purchase Order - Payments Involved" | "SIM_4G"    | "1"      | "Operator"  | "2023"          | ""            | "UPFRONT"         | "CASH"       | "SUBMITTED" | "SUBMITTED" | "FS1"         | "WH1"           | "delivery" | "internal"    | "Seller"              | "OperatorAgent1 (OperatorAgent1)" | "OperatorAgent1" | "Ready"     | "PO" | ""     | "Agent assigned."      |

    @e2e-seamless-one-std @e2e-seamless-one-std-order @e2e-seamless-one-std-smoke 
    Scenario Outline: STD-TC-28941 PO order rejected by an agent
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I update old trip status <ASSIGN_AGENT_ID>
        And I navigate to the Raise Order Page
        When I perform PO Raise Order having following parameters <RESELLER_TYPE> <ORDER_TYPE> <PRODUCT_SKU> <QUANTITY> <SELLER_NAME> <SELLER_MSISDN> <PAYMENT_AGREEMENT> <PAYMENT_MODE> <DROP_LOCATION> <DELIVERY> <PICKUP_LOCATION>
        And I wait for "8000" miliseconds
        Then I am able to perform logout operation
        Then Provide <SELLER_NAME> and <PASSWORD> and login into system
        And I navigate to the Orders Page
        # And I apply filter to find order id inside the table
        # When I approve the raised order PO
        And I verify raised order available on Orders Page having following parameters <ORDER_TYPE> <SELLER_NAME> <RESELLER_ID> <PAYMENT_MODE> <STATE> <DROP_LOCATION>
        And I navigate to the Task page
        Then I apply filter to find order id inside the table
        And I click on view button
        When I click on Assisgn Agent button to assign agent
        Then I select the delivery type <DELIVERY_TYPE> <DELIVERY_AGENT_OPTION> <ELIGIBLE_AGENT> <VENDOR> <AGENT_ASSIGNED_MESSAGE>
        When I navigate to Trip Page
        And I fetch the tripId from UI <ASSIGN_AGENT_ID>
        When I reject the trip having following parameters <ASSIGN_AGENT_ID> <RESELLER_PATH>
        When I navigate to Trip Page
        Then I validate trip status on UI should be <REJECTED_STATUS>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | RESELLER_TYPE | ORDER_TYPE                           | PRODUCT_SKU | QUANTITY | SELLER_NAME | SELLER_MSISDN | PAYMENT_AGREEMENT | PAYMENT_MODE | STATE       | END_STATE   | DROP_LOCATION | PICKUP_LOCATION | DELIVERY   | DELIVERY_TYPE | DELIVERY_AGENT_OPTION | ELIGIBLE_AGENT                    | ASSIGN_AGENT_ID  | TRIP_STATUS | TYPE | VENDOR | AGENT_ASSIGNED_MESSAGE | RESELLER_PATH    | START_STATUS | REJECTED_STATUS |
            | "DIST1"     | "2023"   | "Distributor" | "Purchase Order - Payments Involved" | "SIM_4G"    | "1"      | "Operator"  | ""            | "UPFRONT"         | "CASH"       | "SUBMITTED" | "SUBMITTED" | "SUB-DIST1-1" | "WH1"           | "delivery" | "internal"    | "Seller"              | "OperatorAgent1 (OperatorAgent1)" | "OperatorAgent1" | "Ready"     | "PO" | ""     | "Agent assigned."      | "OPERATOR/DIST1" | "STARTED"    | "REJECTED"      |

    @e2e-seamless-one-std @e2e-seamless-one-std-order @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28934 Instant Sales Order with Agent Buyer
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Raise Order Page
        When I perform ISO Raise Order with invalid buyer having following parameters <PRODUCT_SKU> <QUANTITY> <BUYER_ID> <PAYMENT_AGREEMENT> <PAYMENT_MODE>
        Then I am able to validate proper message <ERROR_MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID   | PASSWORD | RESELLER_TYPE    | PRODUCT_SKU | QUANTITY | BUYER_ID     | PAYMENT_AGREEMENT | PAYMENT_MODE | ERROR_MESSAGE                                                          |
            | "SUB-DIST1-1" | "2023"   | "SubDistributor" | "SIM_4G"    | "1"      | "AGENT1-1-1" | "UPFRONT"         | "CASH"       | "Business logic failure, failing rule id: PARTY_RESTRICTION_CHECK_ISO" |

    @e2e-seamless-one-std @e2e-seamless-one-std-order @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28928 Instant Sales Order from Web Application with wrong Quantity values
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Raise Order Page
        When I perform ISO Raise Order with invalid quantity having following parameters <PRODUCT_SKU> <QUANTITY>
        Then I am able to validate proper message below field <ERROR_MESSAGE> <FIELD_NAME>
        And I click on close button
        Then I logout
        Examples:
            | RESELLER_ID   | PASSWORD | RESELLER_TYPE    | PRODUCT_SKU | QUANTITY | FIELD_NAME | ERROR_MESSAGE      |
            | "SUB-DIST1-1" | "2023"   | "SubDistributor" | "SIM_4G"    | "111111" | "Quantity" | "Invalid Quantity" |

    @e2e-seamless-one-std @e2e-seamless-one-std-order @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28927 Instant Sales Order from Web Application with wrong range values
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Raise Order Page
        When I perform ISO Raise Order with invalid start and end serials having following parameters <PRODUCT_SKU> <START_SERIAL> <END_SERIAL>
        Then I am able to validate proper message below field <ERROR_MESSAGE> <FIELD_NAME>
        And I click on close button
        Then I logout
        Examples:
            | RESELLER_ID   | PASSWORD | RESELLER_TYPE    | PRODUCT_SKU | START_SERIAL | END_SERIAL | FIELD_NAME   | ERROR_MESSAGE       |
            | "SUB-DIST1-1" | "2023"   | "SubDistributor" | "SIM_4G"    | "111111"     | "111111"   | "End Serial" | "Invaid End Serial" |

    @e2e-seamless-one-std @e2e-seamless-one-std-order @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28926 Instant Sales Order partyHierarchy check for Buyer not in hierarchy
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Raise Order Page
        When I perform ISO Raise Order with invalid buyer having following parameters <PRODUCT_SKU> <QUANTITY> <BUYER_ID> <PAYMENT_AGREEMENT> <PAYMENT_MODE>
        And I click on submit button
        Then I am able to validate proper message <ERROR_MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID   | PASSWORD | RESELLER_TYPE    | PRODUCT_SKU | QUANTITY | BUYER_ID     | PAYMENT_AGREEMENT | PAYMENT_MODE | ERROR_MESSAGE                     |
            | "SUB-DIST1-1" | "2023"   | "SubDistributor" | "SIM_4G"    | "1"      | "POS2-1-1-1" | "UPFRONT"         | "CASH"       | "not in a same hierarchy in rule" |

    @e2e-seamless-one-std @e2e-seamless-one-std-order @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28925 Instant Sales Order partyHierarchy check for Operator
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Raise Order Page
        When I perform ISO Raise Order with invalid buyer having following parameters <PRODUCT_SKU> <QUANTITY> <BUYER_ID> <PAYMENT_AGREEMENT> <PAYMENT_MODE>
        And I click on submit button
        Then I am able to validate proper message <ERROR_MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID   | PASSWORD | RESELLER_TYPE    | PRODUCT_SKU | QUANTITY | BUYER_ID   | PAYMENT_AGREEMENT | PAYMENT_MODE | ERROR_MESSAGE                     |
            | "SUB-DIST1-1" | "2023"   | "SubDistributor" | "SIM_4G"    | "1"      | "Operator" | "UPFRONT"         | "CASH"       | "not in a same hierarchy in rule" |

    @e2e-seamless-one-std @e2e-seamless-one-std-order @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28924 Instant Sales Order from Web Application
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Raise Order Page
        When I perform ISO Raise Order having following parameters <ORDER_TYPE> <PRODUCT_SKU> <QUANTITY> <BUYER_ID> <PAYMENT_AGREEMENT> <PAYMENT_MODE> <TYPE>
        And I navigate to the Orders Page
        And I verify raised order available on Orders Page having following parameters <ORDER_TYPE> <BUYER_ID> <RESELLER_ID> <PAYMENT_MODE> <STATE> <WAREHOUSE>
        Then I logout
        Examples:
            | RESELLER_ID   | PASSWORD | RESELLER_TYPE    | ORDER_TYPE                                | PRODUCT_SKU | QUANTITY | BUYER_ID     | PAYMENT_AGREEMENT | PAYMENT_MODE | STATE         | WAREHOUSE | TYPE          |
            | "SUB-DIST1-1" | "2023"   | "SubDistributor" | "Instant Sales Order - Payments Involved" | "SIM_4G"    | "1"      | "POS1-1-1-1" | "UPFRONT"         | "CASH"       | "TRANSFERRED" | ""        | "RESELLER_ID" |

    @e2e-seamless-one-std @e2e-seamless-one-std-order @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-30543 Instant Sales Order using MSISDN from Web Application
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Raise Order Page
        When I perform ISO Raise Order having following parameters <ORDER_TYPE> <PRODUCT_SKU> <QUANTITY> <BUYER_MSISDN> <PAYMENT_AGREEMENT> <PAYMENT_MODE> <TYPE>
        And I navigate to the Orders Page
        And I verify raised order available on Orders Page having following parameters <ORDER_TYPE> <BUYER_ID> <RESELLER_ID> <PAYMENT_MODE> <STATE> <WAREHOUSE>
        Then I logout
        Examples:
            | RESELLER_ID   | PASSWORD | RESELLER_TYPE    | ORDER_TYPE                                | PRODUCT_SKU | QUANTITY | BUYER_ID     | PAYMENT_AGREEMENT | PAYMENT_MODE | STATE         | WAREHOUSE | TYPE     | BUYER_MSISDN   |
            | "SUB-DIST1-1" | "2023"   | "SubDistributor" | "Instant Sales Order - Payments Involved" | "SIM_4G"    | "1"      | "POS1-1-1-1" | "UPFRONT"         | "CASH"       | "TRANSFERRED" | ""        | "MSISDN" | "467000000006" |

    