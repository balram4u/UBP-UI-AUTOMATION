Feature: 14-Stock Transfer Feature

    As a user on the unified portal Application
    I want to perform stock transfer operation

    Background: Enter UserId and Password annd perform Login
        Given I am on the unified portal login page

    @e2e-seamless-one-std @e2e-seamless-one-std-stock-transfer @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28932: Instant Sales Order Stock Transfer from Web Application with wrong range values
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Stock Transfer Page
        When I perform ISOST Stock Transfer with invalid start and end serial having following parameters <ORDER_TYPE> <PRODUCT_SKU> <START_SERIAL> <END_SERIAL>
        Then I am able to validate proper message below field <ERROR_MESSAGE> <FIELD_NAME>
        And I click on close button
        Then I logout
        Examples:
            | RESELLER_ID   | PASSWORD | RESELLER_TYPE    | ORDER_TYPE                           | PRODUCT_SKU | START_SERIAL | END_SERIAL | FIELD_NAME   | ERROR_MESSAGE       |
            | "SUB-DIST1-1" | "2023"   | "SubDistributor" | "Instant Sales Order Stock Transfer" | "SIM_4G"    | "1111111"    | "222222"   | "End Serial" | "Invaid End Serial" |

    @e2e-seamless-one-std @e2e-seamless-one-std-stock-transfer @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28931: Instant Sales Order Stock Transfer from Web Application with wrong Quantity values
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Stock Transfer Page
        When I perform ISOST Stock Transfer with invalid quantity having following parameters <ORDER_TYPE> <PRODUCT_SKU> <QUANTITY>
        Then I am able to validate proper message below field <ERROR_MESSAGE> <FIELD_NAME>
        And I click on close button
        Then I logout
        Examples:
            | RESELLER_ID   | PASSWORD | RESELLER_TYPE    | ORDER_TYPE                           | PRODUCT_SKU | QUANTITY  | FIELD_NAME | ERROR_MESSAGE      |
            | "SUB-DIST1-1" | "2023"   | "SubDistributor" | "Instant Sales Order Stock Transfer" | "SIM_4G"    | "1111111" | "Quantity" | "Invalid Quantity" |

    @e2e-seamless-one-std @e2e-seamless-one-std-stock-transfer @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28933 Instant Sales Order Stock Transfer with Agent Buyer
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Stock Transfer Page
        When I perform ISOST Stock Transfer with invalid buyer having following parameters <ORDER_TYPE> <PRODUCT_SKU> <QUANTITY> <BUYER_ID>
        Then I am able to validate proper message <ERROR_MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID   | PASSWORD | RESELLER_TYPE    | ORDER_TYPE                           | PRODUCT_SKU | QUANTITY | BUYER_ID     | ERROR_MESSAGE                                                             |
            | "SUB-DIST1-1" | "2023"   | "SubDistributor" | "Instant Sales Order Stock Transfer" | "SIM_4G"    | "1"      | "AGENT1-1-1" | "Business logic failure, failing rule id: PARTY_RESTRICTION_CHECK_ISO_ST" |

    @e2e-seamless-one-std @e2e-seamless-one-std-stock-transfer @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28930 Instant Sales Order Stock Transfer with multiple product from Web Application
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Stock Transfer Page
        When I perform ISOST Stock Transfer with multiple product having following parameters <ORDER_TYPE> <PRODUCT_SKU1> <PRODUCT_SKU2> <QUANTITY> <BUYER_ID>
        And I navigate to the Orders Page
        Then I able to validate the order status on orders page <ORDER_STATE>
        Then I logout
        Examples:
            | RESELLER_ID   | PASSWORD | RESELLER_TYPE    | ORDER_TYPE                           | PRODUCT_SKU1 | PRODUCT_SKU2 | QUANTITY | BUYER_ID     | ORDER_STATE   |
            | "SUB-DIST1-1" | "2023"   | "SubDistributor" | "Instant Sales Order Stock Transfer" | "SIM_4G"     | "Sim-5G"     | "1"      | "POS1-1-1-1" | "TRANSFERRED" |

    @e2e-seamless-one-std @e2e-seamless-one-std-stock-transfer @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28929 Instant Sales Order Stock Transfer from Web Application
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Stock Transfer Page
        When I perform ISOST Stock Transfer having following parameters <ORDER_TYPE> <PRODUCT_SKU> <QUANTITY> <BUYER_ID> <TYPE>
        And I navigate to the Orders Page
        Then I able to validate the order status on orders page <ORDER_STATE>
        Then I logout
        Examples:
            | RESELLER_ID   | PASSWORD | RESELLER_TYPE    | ORDER_TYPE                           | PRODUCT_SKU | QUANTITY | BUYER_ID     | ORDER_STATE   | TYPE          |
            | "SUB-DIST1-1" | "2023"   | "SubDistributor" | "Instant Sales Order Stock Transfer" | "SIM_4G"    | "1"      | "POS1-1-1-1" | "TRANSFERRED" | "RESELLER_ID" |

    @e2e-seamless-one-std @e2e-seamless-one-std-stock-transfer @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-30544 Instant Sales Order Stock Transfer using MSISDN from Web Application
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Stock Transfer Page
        When I perform ISOST Stock Transfer having following parameters <ORDER_TYPE> <PRODUCT_SKU> <QUANTITY> <BUYER_ID> <TYPE>
        And I navigate to the Orders Page
        Then I able to validate the order status on orders page <ORDER_STATE>
        Then I logout
        Examples:
            | RESELLER_ID   | PASSWORD | RESELLER_TYPE    | ORDER_TYPE                           | PRODUCT_SKU | QUANTITY | BUYER_ID       | ORDER_STATE   | TYPE     |
            | "SUB-DIST1-1" | "2023"   | "SubDistributor" | "Instant Sales Order Stock Transfer" | "SIM_4G"    | "1"      | "467000000006" | "TRANSFERRED" | "MSISDN" |

    @e2e-seamless-one-std-not-in-use @e2e-seamless-one-std-stock-transfer-not-in-use
    Scenario Outline: STD-TC-30542 PISO trip creation by Sub Distributor User using MSISDN
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Stock Transfer Page
        When I perform PISO Stock Transfer having following parameters <MSISDN> <PRODUCT_SKU> <QUANTITY> <RECEIVER_ID> <ROUTE> <TYPE>
        And I navigate to the Orders Page
        Then I able to validate the order status on orders page <ORDER_STATE>
        Then I logout
        Examples:
            | RESELLER_ID   | PASSWORD | RESELLER_TYPE    | ORDER_TYPE                   | PRODUCT_SKU | QUANTITY | RECEIVER_ID  | ROUTE         | ORDER_STATE | MSISDN         | TYPE     |
            | "SUB-DIST1-1" | "2023"   | "SubDistributor" | "Push Inventory Sales Order" | "SIM_4G"    | "1"      | "AGENT1-1-1" | "POS Group 1" | "RESERVED"  | "467000000040" | "MSISDN" |

    @e2e-seamless-one-std @e2e-seamless-one-std-stock-transfer @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28920 PISO trip creation by Sub Distributor User
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I update old trip status <ASSIGN_AGENT_ID>
        And I navigate to the Stock Transfer Page
        When I perform PISO Stock Transfer having following parameters <RESELLER_ID> <PRODUCT_SKU> <QUANTITY> <RECEIVER_ID> <ROUTE> <TYPE>
        And I navigate to the Orders Page
        Then I able to validate the order status on orders page <ORDER_STATE>
        When I navigate to Trip Page
        And I fetch the tripId from UI <ASSIGN_AGENT_ID>
        Then I logout
        Examples:
            | RESELLER_ID   | PASSWORD | RESELLER_TYPE    | ORDER_TYPE                   | PRODUCT_SKU | QUANTITY | RECEIVER_ID  | ROUTE         | ORDER_STATE | MSISDN | TYPE          | ASSIGN_AGENT_ID |
            | "SUB-DIST1-1" | "2023"   | "SubDistributor" | "Push Inventory Sales Order" | "SIM_4G"    | "1"      | "AGENT1-1-1" | "POS Group 1" | "RESERVED"  | ""     | "RESELLER_ID" | "AGENT1-1-1"    |

    @e2e-seamless-one-std @e2e-seamless-one-std-stock-transfer @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28923 PISO trip creation with wrong Range values
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Stock Transfer Page
        When I perform PISO Stock Transfer with invalid start and end serials having following parameters <RESELLER_ID> <PRODUCT_SKU> <START_SERIAL> <END_SERIAL>
        Then I am able to validate proper message below field <ERROR_MESSAGE> <FIELD_NAME>
        And I click on close button
        Then I logout
        Examples:
            | RESELLER_ID   | PASSWORD | RESELLER_TYPE    | ORDER_TYPE                   | PRODUCT_SKU | START_SERIAL | END_SERIAL | FIELD_NAME   | ERROR_MESSAGE       |
            | "SUB-DIST1-1" | "2023"   | "SubDistributor" | "Push Inventory Sales Order" | "SIM_4G"    | "111111"     | "111111"   | "End Serial" | "Invaid End Serial" |

    @e2e-seamless-one-std @e2e-seamless-one-std-stock-transfer @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28921 PISO trip creation with Quantity greater than available quantity
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Stock Transfer Page
        When I perform PISO Stock Transfer with invalid quantity having following parameters <RESELLER_ID> <PRODUCT_SKU> <QUANTITY>
        Then I am able to validate proper message below field <ERROR_MESSAGE> <FIELD_NAME>
        And I click on close button
        Then I logout
        Examples:
            | RESELLER_ID   | PASSWORD | RESELLER_TYPE    | ORDER_TYPE                   | PRODUCT_SKU | QUANTITY | FIELD_NAME | ERROR_MESSAGE      |
            | "SUB-DIST1-1" | "2023"   | "SubDistributor" | "Push Inventory Sales Order" | "SIM_4G"    | "111111" | "Quantity" | "Invalid Quantity" |

 