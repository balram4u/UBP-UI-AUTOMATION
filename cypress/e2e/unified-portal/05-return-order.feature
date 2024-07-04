Feature: 05-Return Order Feature

    As a user on the unified portal Application
    I want to perform return order operation

    Background: Enter UserId and Password annd perform Login
        Given I am on the unified portal login page


    @e2e-seamless-one-std @e2e-seamless-one-std-order @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28935 IRO for ISO orders
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Raise Order Page
        When I perform ISO Raise Order having following parameters <ORDER_TYPE> <PRODUCT_SKU> <QUANTITY> <BUYER_ID> <PAYMENT_AGREEMENT> <PAYMENT_MODE> <TYPE>
        And I navigate to the Orders Page
        And I verify raised order available on Orders Page having following parameters <ORDER_TYPE> <BUYER_ID> <RESELLER_ID> <PAYMENT_MODE> <STATE> <WAREHOUSE>
        And I navigate to the Return Order Page
        When I perform RO Return Order having following parameters "IRO" "Full Return" <QUANTITY>
        And I navigate to the Orders Page
        And I verify raised order available on Orders Page having following parameters <RETURN_ORDER_TYPE> <BUYER_ID> <RESELLER_ID> <RETURN_PAYMENT_MODE> <RETURN_STATE> <WAREHOUSE>
        Then I logout
        Examples:
            | RESELLER_ID   | PASSWORD | RESELLER_TYPE    | ORDER_TYPE                                | PRODUCT_SKU | QUANTITY | BUYER_ID     | PAYMENT_AGREEMENT | PAYMENT_MODE | STATE         | WAREHOUSE | TYPE          | RETURN_ORDER_TYPE | RETURN_PAYMENT_MODE | RETURN_STATE         |
            | "SUB-DIST1-1" | "2023"   | "SubDistributor" | "Instant Sales Order - Payments Involved" | "SIM_4G"    | "1"      | "POS1-1-1-1" | "UPFRONT"         | "CASH"       | "TRANSFERRED" | ""        | "RESELLER_ID" | "IRO"             | "NO_PAYMENT_REQD"   | "RETURN_TRANSFERRED" |

    @e2e-seamless-one-std @e2e-seamless-one-std-order @e2e-seamless-one-std-smoke
    Scenario Outline: STD-TC-28936 IRO for ISO orders Partial return
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Raise Order Page
        When I perform ISO Raise Order having following parameters <ORDER_TYPE> <PRODUCT_SKU> <QUANTITY> <BUYER_ID> <PAYMENT_AGREEMENT> <PAYMENT_MODE> <TYPE>
        And I navigate to the Orders Page
        And I verify raised order available on Orders Page having following parameters <ORDER_TYPE> <BUYER_ID> <RESELLER_ID> <PAYMENT_MODE> <STATE> <WAREHOUSE>
        And I navigate to the Return Order Page
        When I perform RO Return Order having following parameters "IRO" "Partial Return" <RETURN_QUANTITY>
        And I navigate to the Orders Page
        And I verify raised order available on Orders Page having following parameters <RETURN_ORDER_TYPE> <BUYER_ID> <RESELLER_ID> <RETURN_PAYMENT_MODE> <RETURN_STATE> <WAREHOUSE>
        Then I logout
        Examples:
            | RESELLER_ID   | PASSWORD | RESELLER_TYPE    | ORDER_TYPE                                | PRODUCT_SKU | QUANTITY | BUYER_ID     | PAYMENT_AGREEMENT | PAYMENT_MODE | STATE         | WAREHOUSE | TYPE          | RETURN_ORDER_TYPE | RETURN_PAYMENT_MODE | RETURN_STATE         | RETURN_QUANTITY |
            | "SUB-DIST1-1" | "2023"   | "SubDistributor" | "Instant Sales Order - Payments Involved" | "SIM_4G"    | "2"      | "POS1-1-1-1" | "UPFRONT"         | "CASH"       | "TRANSFERRED" | ""        | "RESELLER_ID" | "IRO"             | "NO_PAYMENT_REQD"   | "RETURN_TRANSFERRED" | "1"             |

    