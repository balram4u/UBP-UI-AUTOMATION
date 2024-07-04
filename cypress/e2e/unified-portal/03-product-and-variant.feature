Feature: 03-Product and Variant Feature

    As a user on the unified portal Application
    I want to Verify Product Create View and Edit

    Background: Enter UserId and Password annd perform Login
        Given I am on the unified portal login page

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-27452,TC-27690,TC-27683:Performing Create Product operation with passing test data as data table
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the View Products Page
        When I perform Create Product having following parameters <PRODUCT_NAME> <PRODUCT_CODE> <DESCRIPTION> <SUPPLIERID> <PRODUCT_TYPE> <PRODUCT_WORKFLOW> <PRODUCT_CATEGORY> <PRODUCT_TAX> <DATANAME> <DATAVALUE> <PRODUCTSKU> <SUPPLIER_REFERENCE> <STATUS> <TERMS_AND_CONDITIONS> <EANCODE> <DATANAME_VARIENT> <DATAVALUE_VARIENT> <VARIANT_CURRENCY> <VARIANT_PRICE> <VARIANT_NAME> <VARIANT_DESCRIPTION>
        Then I am able to validate proper message <MESSAGE>
        And I am able to search existing Product <PRODUCT_NAME>
        And Product created should be visible inside table <PRODUCT_NAME>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | PRODUCT_NAME         | PRODUCT_CODE         | DESCRIPTION                           | SUPPLIERID | PRODUCT_TYPE | PRODUCT_WORKFLOW            | PRODUCT_CATEGORY     | PRODUCT_TAX | DATANAME       | DATAVALUE | PRODUCTSKU           | SUPPLIER_REFERENCE | STATUS      | TERMS_AND_CONDITIONS | EANCODE        | DATANAME_VARIENT | DATAVALUE_VARIENT | VARIANT_CURRENCY | VARIANT_PRICE | MESSAGE         | VARIANT_NAME | VARIANT_DESCRIPTION |
            | "OPERATOR"  | "2023"   | "Automation-Test-01" | "Automation-Test-01" | "Automation-Test-01-Test Description" | "operator" | "Serialised" | "Standard Product Workflow" | "Digitized-Products" | ""          | "test data -1" | "67"      | "Automation-Test-01" | "1"                | "Available" | "Test Only"          | "56automation" | "test data -1"   | "67"              | "USD"            | "10"          | "Product added" | ""           | ""                  |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-27434:Performing View Product and its Variant for existing Product
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the View Products Page
        And I am able to search existing Product <PRODUCT_NAME>
        When I perform View Product and Variant having following parameters <PRODUCT_NAME> <PRODUCT_CODE> <DESCRIPTION> <PRODUCT_TYPE> <PRODUCT_WORKFLOW> <PRODUCT_CATEGORY> <PRODUCTSKU> <SUPPLIER_REFERENCE> <STATUS> <VARIANT_CURRENCY> <VARIANT_PRICE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | PRODUCT_NAME         | PRODUCT_CODE         | DESCRIPTION                           | SUPPLIERID | PRODUCT_TYPE | PRODUCT_WORKFLOW            | PRODUCT_CATEGORY     | PRODUCT_TAX | DATANAME       | DATAVALUE | PRODUCTSKU           | SUPPLIER_REFERENCE | STATUS      | TERMS_AND_CONDITIONS | EANCODE        | DATANAME_VARIENT | DATAVALUE_VARIENT | VARIANT_CURRENCY | VARIANT_PRICE | MESSAGE         |
            | "OPERATOR"  | "2023"   | "Automation-Test-01" | "Automation-Test-01" | "Automation-Test-01-Test Description" | "operator" | "Serialised" | "Standard Product Workflow" | "Digitized-Products" | ""          | "test data -1" | "67"      | "Automation-Test-01" | "1"                | "available" | "Test Only"          | "56automation" | "test data -1"   | "67"              | "USD"            | "10"          | "Product added" |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-Not-Found-In-Testcase:Performing Create multiple Product Variant operation with passing test data as data table
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the View Products Page
        And I am able to search existing Product <PRODUCT_NAME>
        When I perform Create multiple Product Variant having following parameters <PRODUCT_NAME> <PRODUCTSKU> <SUPPLIER_REFERENCE> <STATUS> <TERMS_AND_CONDITIONS> <EANCODE> <DATANAME_VARIENT> <DATAVALUE_VARIENT> <VARIANT_CURRENCY> <VARIANT_PRICE>
        Then I am able to validate proper message <MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | PRODUCT_NAME         | PRODUCTSKU             | SUPPLIER_REFERENCE | STATUS      | TERMS_AND_CONDITIONS | EANCODE        | DATANAME_VARIENT | DATAVALUE_VARIENT | VARIANT_CURRENCY | VARIANT_PRICE | MESSAGE                 |
            | "OPERATOR"  | "2023"   | "Automation-Test-01" | "Automation-Variant-1" | "2"                | "Available" | "Test Only1"         | "57automation" | "test data -2"   | "68"              | "USD"            | "11"          | "Product variant added" |
            | "OPERATOR"  | "2023"   | "Automation-Test-01" | "Automation-Variant-2" | "3"                | "Available" | "Test Only2"         | "58automation" | "test data -3"   | "69"              | "USD"            | "12"          | "Product variant added" |
            | "OPERATOR"  | "2023"   | "Automation-Test-01" | "Automation-Variant-3" | "4"                | "Available" | "Test Only3"         | "59automation" | "test data -4"   | "70"              | "USD"            | "13"          | "Product variant added" |
            | "OPERATOR"  | "2023"   | "Automation-Test-01" | "Automation-Variant-4" | "5"                | "Available" | "Test Only4"         | "60automation" | "test data -5"   | "71"              | "USD"            | "14"          | "Product variant added" |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-27439:Performing View multiple Product Variant with passing test data as data table
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the View Products Page
        And I am able to search existing Product <PRODUCT_NAME>
        When I perform View multiple Product Variant having following parameters <PRODUCT_NAME> <PRODUCTSKU> <SUPPLIER_REFERENCE> <STATUS> <TERMS_AND_CONDITIONS> <VARIANT_CURRENCY> <VARIANT_PRICE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | PRODUCT_NAME         | PRODUCTSKU             | SUPPLIER_REFERENCE | STATUS      | TERMS_AND_CONDITIONS | VARIANT_CURRENCY | VARIANT_PRICE |
            | "OPERATOR"  | "2023"   | "Automation-Test-01" | "Automation-Test-01"   | "1"                | "available" | "Test Only"          | "USD"            | "10"          |
            | "OPERATOR"  | "2023"   | "Automation-Test-01" | "Automation-Variant-1" | "2"                | "available" | "Test Only1"         | "USD"            | "11"          |
            | "OPERATOR"  | "2023"   | "Automation-Test-01" | "Automation-Variant-2" | "3"                | "available" | "Test Only2"         | "USD"            | "12"          |
            | "OPERATOR"  | "2023"   | "Automation-Test-01" | "Automation-Variant-3" | "4"                | "available" | "Test Only3"         | "USD"            | "13"          |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-27441,TC-27437, TC-27440:Performing Edit Product operation for existing Product
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the View Products Page
        And I am able to search existing Product <PRODUCT_NAME>
        When I perform Edit Product having following parameters <PRODUCT_NAME> <PRODUCT_CODE> <DESCRIPTION> <SUPPLIERID> <PRODUCT_TYPE> <PRODUCT_WORKFLOW> <PRODUCT_CATEGORY> <PRODUCT_TAX> <DATANAME> <DATAVALUE> <PRODUCTSKU> <SUPPLIER_REFERENCE> <STATUS> <TERMS_AND_CONDITIONS> <EANCODE> <DATANAME_VARIENT> <DATAVALUE_VARIENT> <VARIANT_CURRENCY> <VARIANT_PRICE> <PRODUCTSKU_STATUS> <IMAGE_FILE>
        Then I am able to validate proper message <MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | PRODUCT_NAME         | PRODUCT_CODE         | DESCRIPTION                                   | SUPPLIERID | PRODUCT_TYPE | PRODUCT_WORKFLOW            | PRODUCT_CATEGORY     | PRODUCT_TAX | DATANAME       | DATAVALUE | PRODUCTSKU           | SUPPLIER_REFERENCE | STATUS      | TERMS_AND_CONDITIONS | EANCODE        | DATANAME_VARIENT | DATAVALUE_VARIENT | VARIANT_CURRENCY | VARIANT_PRICE | MESSAGE           | PRODUCTSKU_STATUS | IMAGE_FILE |
            | "OPERATOR"  | "2023"   | "Automation-Test-01" | "Automation-Test-01" | "Automation-Test-01-Test Description Updated" | "operator" | "Serialised" | "Standard Product Workflow" | "Digitized-Products" | ""          | "test data -1" | "67"      | "Automation-Test-24" | "1"                | "Available" | "Test Only"          | "56automation" | "test data -1"   | "67"              | "USD"            | "10"          | "Product updated" | "available"       | ""         |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-27787:Performing Product sku length test for Product variants
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the View Products Page
        When I perform Create Product with invalid data having following parameters <PRODUCT_NAME> <PRODUCT_CODE> <DESCRIPTION> <SUPPLIERID> <PRODUCT_TYPE> <PRODUCT_WORKFLOW> <PRODUCT_CATEGORY> <PRODUCT_TAX> <DATANAME> <DATAVALUE> <PRODUCTSKU> <SUPPLIER_REFERENCE> <STATUS> <TERMS_AND_CONDITIONS> <EANCODE> <DATANAME_VARIENT> <DATAVALUE_VARIENT> <VARIANT_CURRENCY> <VARIANT_PRICE> <VARIANT_NAME> <VARIANT_DESCRIPTION>
        And I click submit button
        Then I am able to validate proper message <MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | PRODUCT_NAME         | PRODUCT_CODE         | DESCRIPTION                           | SUPPLIERID | PRODUCT_TYPE | PRODUCT_WORKFLOW            | PRODUCT_CATEGORY     | PRODUCT_TAX | DATANAME       | DATAVALUE | PRODUCTSKU                                                                                                                                                                                                                                                                 | SUPPLIER_REFERENCE | STATUS      | TERMS_AND_CONDITIONS | EANCODE        | DATANAME_VARIENT | DATAVALUE_VARIENT | VARIANT_CURRENCY | VARIANT_PRICE | MESSAGE                                         | VARIANT_NAME | VARIANT_DESCRIPTION |
            | "OPERATOR"  | "2023"   | "Automation-Test-03" | "Automation-Test-03" | "Automation-Test-03-Test Description" | "operator" | "Serialised" | "Standard Product Workflow" | "Digitized-Products" | ""          | "test data -1" | "67"      | "djebdiebibubucb2fbd3ubfu32bfciu3r2fbciu32rbfci3ur2bfci3r2bfci32rfbi3rfhbr3uifbu3oribfciu3rbfci3ufbcr3qubvcou3rbcv23fou3rbfcou23bfco23urbvco23rubvc2o3rubvo23ruvbc3or2ubfcou32rbfou23rbfcou32rbvo2ubvcou23rbcvfihcoqhcuqhvcqnqvjnvckjqnvbkjqbvnkqjvbnkdhhdhdhhddhhdhdhdqv" | "1"                | "Available" | "Test Only"          | "56automation" | "test data -1"   | "67"              | "USD"            | "10"          | "ProductSKU field length must be less than 255" | ""           | ""                  |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-27786:Performing Product description length test for Products
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the View Products Page
        When I perform Create Product with invalid data having following parameters <PRODUCT_NAME> <PRODUCT_CODE> <DESCRIPTION> <SUPPLIERID> <PRODUCT_TYPE> <PRODUCT_WORKFLOW> <PRODUCT_CATEGORY> <PRODUCT_TAX> <DATANAME> <DATAVALUE> <PRODUCTSKU> <SUPPLIER_REFERENCE> <STATUS> <TERMS_AND_CONDITIONS> <EANCODE> <DATANAME_VARIENT> <DATAVALUE_VARIENT> <VARIANT_CURRENCY> <VARIANT_PRICE> <VARIANT_NAME> <VARIANT_DESCRIPTION>
        And I click submit button
        Then I am able to validate proper message <MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | PRODUCT_NAME         | PRODUCT_CODE         | DESCRIPTION                                                                                                                                                                                                                                                                | SUPPLIERID | PRODUCT_TYPE | PRODUCT_WORKFLOW            | PRODUCT_CATEGORY     | PRODUCT_TAX | DATANAME       | DATAVALUE | PRODUCTSKU   | SUPPLIER_REFERENCE | STATUS      | TERMS_AND_CONDITIONS | EANCODE        | DATANAME_VARIENT | DATAVALUE_VARIENT | VARIANT_CURRENCY | VARIANT_PRICE | MESSAGE                                          | VARIANT_NAME | VARIANT_DESCRIPTION |
            | "OPERATOR"  | "2023"   | "Automation-Test-03" | "Automation-Test-03" | "djebdiebibubucb2fbd3ubfu32bfciu3r2fbciu32rbfci3ur2bfci3r2bfci32rfbi3rfhbr3uifbu3oribfciu3rbfci3ufbcr3qubvcou3rbcv23fou3rbfcou23bfco23urbvco23rubvc2o3rubvo23ruvbc3or2ubfcou32rbfou23rbfcou32rbvo2ubvcou23rbcvfihcoqhcuqhvcqnqvjnvckjqnvbkjqbvnkqjvbnkdhhdhdhhddhhdhdhdqv" | "operator" | "Serialised" | "Standard Product Workflow" | "Digitized-Products" | ""          | "test data -1" | "67"      | "test-test1" | "1"                | "Available" | "Test Only"          | "56automation" | "test data -1"   | "67"              | "USD"            | "10"          | "Description field length must be less than 255" | ""           | ""                  |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-27785, TC-27775:Performing Product Name length test in products
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the View Products Page
        When I perform Create Product with invalid data having following parameters <PRODUCT_NAME> <PRODUCT_CODE> <DESCRIPTION> <SUPPLIERID> <PRODUCT_TYPE> <PRODUCT_WORKFLOW> <PRODUCT_CATEGORY> <PRODUCT_TAX> <DATANAME> <DATAVALUE> <PRODUCTSKU> <SUPPLIER_REFERENCE> <STATUS> <TERMS_AND_CONDITIONS> <EANCODE> <DATANAME_VARIENT> <DATAVALUE_VARIENT> <VARIANT_CURRENCY> <VARIANT_PRICE> <VARIANT_NAME> <VARIANT_DESCRIPTION>
        And I click submit button
        Then I am able to validate proper message <MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | PRODUCT_NAME                                                                                                                                                                                                                                                               | PRODUCT_CODE         | DESCRIPTION        | SUPPLIERID | PRODUCT_TYPE | PRODUCT_WORKFLOW            | PRODUCT_CATEGORY     | PRODUCT_TAX | DATANAME       | DATAVALUE | PRODUCTSKU   | SUPPLIER_REFERENCE | STATUS      | TERMS_AND_CONDITIONS | EANCODE        | DATANAME_VARIENT | DATAVALUE_VARIENT | VARIANT_CURRENCY | VARIANT_PRICE | MESSAGE                                               | VARIANT_NAME | VARIANT_DESCRIPTION |
            | "OPERATOR"  | "2023"   | "djebdiebibubucb2fbd3ubfu32bfciu3r2fbciu32rbfci3ur2bfci3r2bfci32rfbi3rfhbr3uifbu3oribfciu3rbfci3ufbcr3qubvcou3rbcv23fou3rbfcou23bfco23urbvco23rubvc2o3rubvo23ruvbc3or2ubfcou32rbfou23rbfcou32rbvo2ubvcou23rbcvfihcoqhcuqhvcqnqvjnvckjqnvbkjqbvnkqjvbnkdhhdhdhhddhhdhdhdqv" | "Automation-Test-03" | "test description" | "operator" | "Serialised" | "Standard Product Workflow" | "Digitized-Products" | ""          | "test data -1" | "67"      | "test-test1" | "1"                | "Available" | "Test Only"          | "56automation" | "test data -1"   | "67"              | "USD"            | "10"          | "Length of Name field must not exceed 255 characters" | ""           | ""                  |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-27784:Performing Product code length test in products
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the View Products Page
        When I perform Create Product with invalid data having following parameters <PRODUCT_NAME> <PRODUCT_CODE> <DESCRIPTION> <SUPPLIERID> <PRODUCT_TYPE> <PRODUCT_WORKFLOW> <PRODUCT_CATEGORY> <PRODUCT_TAX> <DATANAME> <DATAVALUE> <PRODUCTSKU> <SUPPLIER_REFERENCE> <STATUS> <TERMS_AND_CONDITIONS> <EANCODE> <DATANAME_VARIENT> <DATAVALUE_VARIENT> <VARIANT_CURRENCY> <VARIANT_PRICE> <VARIANT_NAME> <VARIANT_DESCRIPTION>
        And I click submit button
        Then I am able to validate proper message <MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | PRODUCT_NAME         | PRODUCT_CODE                                                                                                                                                                                                                                                               | DESCRIPTION        | SUPPLIERID | PRODUCT_TYPE | PRODUCT_WORKFLOW            | PRODUCT_CATEGORY     | PRODUCT_TAX | DATANAME       | DATAVALUE | PRODUCTSKU   | SUPPLIER_REFERENCE | STATUS      | TERMS_AND_CONDITIONS | EANCODE        | DATANAME_VARIENT | DATAVALUE_VARIENT | VARIANT_CURRENCY | VARIANT_PRICE | MESSAGE                                  | VARIANT_NAME | VARIANT_DESCRIPTION |
            | "OPERATOR"  | "2023"   | "Automation-Test-03" | "djebdiebibubucb2fbd3ubfu32bfciu3r2fbciu32rbfci3ur2bfci3r2bfci32rfbi3rfhbr3uifbu3oribfciu3rbfci3ufbcr3qubvcou3rbcv23fou3rbfcou23bfco23urbvco23rubvc2o3rubvo23ruvbc3or2ubfcou32rbfou23rbfcou32rbvo2ubvcou23rbcvfihcoqhcuqhvcqnqvjnvckjqnvbkjqbvnkqjvbnkdhhdhdhhddhhdhdhdqv" | "test description" | "operator" | "Serialised" | "Standard Product Workflow" | "Digitized-Products" | ""          | "test data -1" | "67"      | "test-test1" | "1"                | "Available" | "Test Only"          | "56automation" | "test data -1"   | "67"              | "USD"            | "10"          | "Code field length must be less than 60" | ""           | ""                  |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-27725:Performing Manage view of Products table using Row per page
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to the View Products Page
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
            | USERNAME   | PASSWORD | COUNT_AS_TEN | COUNT_AS_TWENTY | COUNT_AS_FIFTY | COUNT_AS_HUNDRED |
            | "OPERATOR" | "2023"   | "10"         | "20"            | "50"           | "100"            |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-27442,TC-27438:Performing Delete Product and its single Variant operation for existing Product
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the View Products Page
        When I perform Create Product having following parameters <PRODUCT_NAME> <PRODUCT_CODE> <DESCRIPTION> <SUPPLIERID> <PRODUCT_TYPE> <PRODUCT_WORKFLOW> <PRODUCT_CATEGORY> <PRODUCT_TAX> <DATANAME> <DATAVALUE> <PRODUCTSKU> <SUPPLIER_REFERENCE> <STATUS> <TERMS_AND_CONDITIONS> <EANCODE> <DATANAME_VARIENT> <DATAVALUE_VARIENT> <VARIANT_CURRENCY> <VARIANT_PRICE> <VARIANT_NAME> <VARIANT_DESCRIPTION>
        Then I am able to validate proper message <MESSAGE>
        And I am able to search existing Product <PRODUCT_NAME>
        When I click on variant option
        And I perform Delete Product Variant operation
        Then I am able to validate proper message <PRODUCT_VARIANT_DELETE_MESSAGE>
        And I navigate to the View Products Page
        And I am able to search existing Product <PRODUCT_NAME>
        And I perform Delete Product operation
        Then I am able to validate proper message <PRODUCT_DELETE_MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | PRODUCT_NAME         | PRODUCT_DELETE_MESSAGE | PRODUCT_VARIANT_DELETE_MESSAGE                                | PRODUCT_CODE         | DESCRIPTION                           | SUPPLIERID | PRODUCT_TYPE | PRODUCT_WORKFLOW            | PRODUCT_CATEGORY     | PRODUCT_TAX | DATANAME       | DATAVALUE | PRODUCTSKU           | SUPPLIER_REFERENCE | STATUS      | TERMS_AND_CONDITIONS | EANCODE        | DATANAME_VARIENT | DATAVALUE_VARIENT | VARIANT_CURRENCY | VARIANT_PRICE | MESSAGE         | VIEW_STATUS | VARIANT_NAME | VARIANT_DESCRIPTION |
            | "OPERATOR"  | "2023"   | "Automation-Test-02" | "deleted successfully" | "Unable to delete, product must contain at least one variant" | "Automation-Test-02" | "Automation-Test-02-Test Description" | "operator" | "Serialised" | "Standard Product Workflow" | "Digitized-Products" | "GST"       | "test data -1" | "67"      | "Automation-Test-02" | "1"                | "Available" | "Test Only"          | "56automation" | "test data -1"   | "67"              | "USD"            | "10"          | "Product added" | "available" | ""           | ""                  |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-27691:Performing Search Products using Filter with invalid data
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the View Products Page
        And I am able to search existing Product <PRODUCT_NAME>
        Then I validate Product should not be visible
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | PRODUCT_NAME |
            | "OPERATOR"  | "2023"   | "100000"     |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-27688:Performing Show/Hide all columns operation with passing test data as data table
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the View Products Page
        And I perform Hide all columns operation
        Then I validate columns should not be displayed in the table
        And I perform Show all columns operation
        Then I validate columns should be displayed in the table
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD |
            | "OPERATOR"  | "2023"   |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline:  STD-TC-27692:Performing Download Product Report
        #below scenario also covered TC-27450
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to the View Products Page
        And I click on export button
        And I click on download button
        And I read file name <FILE_NAME>
        Then I delete file name <FILE_NAME>
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | FILE_NAME  |
            | "OPERATOR" | "2023"   | "data.csv" |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline:  STD-TC-27455:Performing Product Variant report download
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to the View Products Page
        And I am able to search existing Product <PRODUCT_NAME>
        When I click on variant option
        And I click on export button
        And I click on download button
        And I read file name <FILE_NAME>
        Then I delete file name <FILE_NAME>
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | FILE_NAME  | PRODUCT_NAME |
            | "OPERATOR" | "2023"   | "data.csv" | "SIM-4G"     |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-27442:Performing Delete Product Variant operation for product having multiple variants with passing test data as data table
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the View Products Page
        When I perform Create Product having following parameters <PRODUCT_NAME> <PRODUCT_CODE> <DESCRIPTION> <SUPPLIERID> <PRODUCT_TYPE> <PRODUCT_WORKFLOW> <PRODUCT_CATEGORY> <PRODUCT_TAX> <DATANAME> <DATAVALUE> <PRODUCTSKU1> <SUPPLIER_REFERENCE> <STATUS> <TERMS_AND_CONDITIONS> <EANCODE> <DATANAME_VARIENT> <DATAVALUE_VARIENT> <VARIANT_CURRENCY> <VARIANT_PRICE> <VARIANT_NAME> <VARIANT_DESCRIPTION>
        Then I am able to validate proper message <MESSAGE>
        And I am able to search existing Product <PRODUCT_NAME>
        When I click on variant option
        When I perform create product variant having following parameters <PRODUCTSKU2> <SUPPLIER_REFERENCE> <STATUS> <TERMS_AND_CONDITIONS> <EANCODE> <DATANAME_VARIENT> <DATAVALUE_VARIENT> <VARIANT_CURRENCY> <VARIANT_PRICE>
        Then I am able to validate proper message <PRODUCT_VARIANT_ADD_MESSAGE>
        And I perform Delete Product Variant operation from multiple variants
        Then I am able to validate proper message <PRODUCT_VARIANT_DELETE_MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | PRODUCT_NAME                 | PRODUCT_CODE                 | DESCRIPTION                           | SUPPLIERID | PRODUCT_TYPE | PRODUCT_WORKFLOW            | PRODUCT_CATEGORY     | PRODUCT_TAX | DATANAME       | DATAVALUE | PRODUCTSKU1                    | PRODUCTSKU2                    | SUPPLIER_REFERENCE | STATUS      | TERMS_AND_CONDITIONS | EANCODE        | DATANAME_VARIENT | DATAVALUE_VARIENT | VARIANT_CURRENCY | VARIANT_PRICE | MESSAGE         | PRODUCT_VARIANT_DELETE_MESSAGE | PRODUCT_VARIANT_ADD_MESSAGE | VARIANT_NAME | VARIANT_DESCRIPTION |
            | "OPERATOR"  | "2023"   | "Automation-Test-multi_Var1" | "Automation-Test-multi_Var1" | "Automation-Test-01-Test Description" | "operator" | "Serialised" | "Standard Product Workflow" | "Digitized-Products" | ""          | "test data -1" | "67"      | "Automation-Test-multi_Var_01" | "Automation-Test-multi_Var_02" | "1"                | "Available" | "Test Only"          | "56automation" | "test data -1"   | "67"              | "USD"            | "10"          | "Product added" | "deleted successfully"         | "Product variant added"     | ""           | ""                  |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-27438:Performing Delete Product having multiple Variant operation for existing Product
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the View Products Page
        And I am able to search existing Product <PRODUCT_NAME>
        And I perform Delete Product operation
        Then I am able to validate proper message <PRODUCT_DELETE_MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | PRODUCT_NAME                 | PRODUCT_DELETE_MESSAGE |
            | "OPERATOR"  | "2023"   | "Automation-Test-01"         | "deleted successfully" |
            | "OPERATOR"  | "2023"   | "Automation-Test-multi_Var1" | "deleted successfully" |


