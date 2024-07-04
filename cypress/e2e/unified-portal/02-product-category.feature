Feature: 02-Product Category Feature

    As a user on the Unified Portal Application
    I want to test Product Category feature

    Background: Opening unified portal
        Given I am on the unified portal login page

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-28361,TC-27776, TC-27727, TC-27682, TC-27447, TC-27431:Performing Create Category operation with passing test data as data table
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Product Category Page
        When I perform Create Product Category having following parameters <PRODUCT_CATEGORY_NAME> <PRODUCT_CATEGORY_STATUS> <DESCRIPTION> <PRODUCT_PARENT_CATEGORY> <PRODUCT_WORKFLOW> <PRODUCT_TAX> <IMAGE_FILE> <DATANAME> <DATAVALUE>
        Then I am able to validate proper message <MESSAGE>
        And I am able to search existing Product Categories <PRODUCT_CATEGORY_NAME>
        And Product Categories created should be visible inside table <PRODUCT_CATEGORY_NAME>
        And I verify the product category in view page <PRODUCT_CATEGORY_NAME> <PRODUCT_CATEGORY_STATUS> <DESCRIPTION> <PRODUCT_PARENT_CATEGORY> <PRODUCT_TAX>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | PRODUCT_CATEGORY_NAME | PRODUCT_CATEGORY_STATUS | DESCRIPTION        | PRODUCT_PARENT_CATEGORY | PRODUCT_TAX | MESSAGE                  | PRODUCT_WORKFLOW            | IMAGE_FILE                           | DATANAME | DATAVALUE |
            | "Operator"  | "2023"   | "MainCategory-002"    | "available"             | "Test Description" | ""                      | "SGST-1"    | "Product category added" | "Standard Product Workflow" | "unified/product-category-image.png" | "Test"   | "Data"    |
            | "Operator"  | "2023"   | "ProductCategory-002" | "available"             | "Test Description" | "MainCategory-002"      | "SGST-1"    | "Product category added" | "Standard Product Workflow" | "unified/product-category-image.png" | "Test"   | "Data"    |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-27449:Performing Edit Category operation for existing Product Categories
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Product Category Page
        And I am able to search existing Product Categories <PRODUCT_CATEGORY_NAME>
        When I perform Edit Product Category having following parameters <PRODUCT_CATEGORY_NAME> <PRODUCT_CATEGORY_STATUS> <DESCRIPTION> <PRODUCT_PARENT_CATEGORY> <PRODUCT_WORKFLOW> <PRODUCT_TAX>
        Then I am able to validate proper message <MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | PRODUCT_CATEGORY_NAME | PRODUCT_CATEGORY_STATUS | DESCRIPTION                | PRODUCT_PARENT_CATEGORY | PRODUCT_TAX | MESSAGE                    | PRODUCT_WORKFLOW |
            | "Operator"  | "2023"   | "MainCategory-002" | "available"             | "Test Description Updated" | ""                      | ""          | "Product category updated" | ""               |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-27724:Performing Manage view of Products table using Row per page
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to the Product Category Page
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
            | "Operator" | "2023"   | "10"         | "20"            | "50"           | "100"            |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-27729:Performing Delete Product Category and its Sub Category operation for existing Product
        #below scenario also coverd TC-27728
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Product Category Page
        And I am able to search existing Product Categories <MAIN_PRODUCT_CATEGORY_NAME>
        When I perform Delete Main Product Category operation even it has Sub Product Category
        Then I am able to validate proper message <MAIN_PRODUCT_CATEGORY_DELETE_ERROR_MESSAGE>
        And I cancel the delete operation
        And I am able to search existing Product Categories <SUB_PRODUCT_CATEGORY_NAME>
        When I perform Delete Product Category operation
        Then I am able to validate proper message <SUB_PRODUCT_CATEGORY_DELETE_MESSAGE>
        And I am able to search existing Product Categories <MAIN_PRODUCT_CATEGORY_NAME>
        When I perform Delete Product Category operation
        Then I am able to validate proper message <MAIN_PRODUCT_CATEGORY_DELETE_MESSAGE>
        And I am able to search existing Product Categories <MAIN_PRODUCT_CATEGORY_NAME>
        Then I verify product should not be available <MAIN_PRODUCT_CATEGORY_NAME>
        And I navigate to the Product Category Page
        And I am able to search existing Product Categories <SUB_PRODUCT_CATEGORY_NAME>
        Then I verify product should not be available <SUB_PRODUCT_CATEGORY_NAME>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | MAIN_PRODUCT_CATEGORY_NAME | MAIN_PRODUCT_CATEGORY_DELETE_ERROR_MESSAGE | SUB_PRODUCT_CATEGORY_DELETE_MESSAGE | SUB_PRODUCT_CATEGORY_NAME | MAIN_PRODUCT_CATEGORY_DELETE_MESSAGE |
            | "Operator"  | "2023"   | "MainCategory-002"         | "cannot be deleted"                        | "deleted successfully"              | "ProductCategory-002"     | "deleted successfully"               |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-27774:Performing Product category name length test in Product
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Product Category Page
        When I perform Create Product Category having following parameters <PRODUCT_CATEGORY_NAME> <PRODUCT_CATEGORY_STATUS> <DESCRIPTION> <PRODUCT_PARENT_CATEGORY> <PRODUCT_WORKFLOW> <PRODUCT_TAX> <IMAGE_FILE> <DATANAME> <DATAVALUE>
        Then I am able to validate proper message <MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | PRODUCT_CATEGORY_NAME                                                                                                                                                                                           | PRODUCT_CATEGORY_STATUS | DESCRIPTION        | PRODUCT_PARENT_CATEGORY | PRODUCT_TAX | MESSAGE                                  | PRODUCT_WORKFLOW            | IMAGE_FILE                           | DATANAME | DATAVALUE |
            | "Operator"  | "2023"   | "djebdiebibubucb2fbd3ubfu32bfciu3r2fbciu32rbfci3ur2bfci3r2bfci32rfbi3rfhbr3uifbu3oribfciu3rbfci3ufbcr3qubvcou3rbcv23fou3rbfcou23bfco23urbvco23rubvc2o3rubvo23ruvbc3or2ubfcou32rbfou23rbfcou32rbvo2ubvcou23rbcv" | "available"             | "Test Description" | ""                      | "GST"       | "Name field length must be less than 60" | "Standard Product Workflow" | "unified/product-category-image.png" | "Test"   | "Data"    |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-27687:Performing Filter search of Products categories using invalid data
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Product Category Page
        And I am able to search existing Product Categories <PRODUCT_NAME>
        Then I validate Product should not be visible
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | PRODUCT_NAME |
            | "Operator"  | "2023"   | "100000"     |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-27686:Performing Hide and Show columns of Product category Table
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        And I navigate to the Product Category Page
        And I perform Hide all columns operation
        Then I validate columns should not be displayed in the table
        And I perform Show all columns operation
        Then I validate columns should be displayed in the table
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD |
            | "Operator"  | "2023"   |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-27446:Performing Download Product Category  Report
        Given Provide <USERNAME> and <PASSWORD> and login into system
        And I navigate to the Product Category Page
        And I click on export button
        And I click on download button
        And I read file name <FILE_NAME>
        Then I delete file name <FILE_NAME>
        Then I logout
        Examples:
            | USERNAME   | PASSWORD | FILE_NAME  |
            | "Operator" | "2023"   | "data.csv" |

    @e2e-seamless-one-std @e2e-seamless-one-std-product
    Scenario Outline: STD-TC-27453: Verify that Only operator is able see PRODUCT menu in portal
        Given Provide <USERNAME> and <PASSWORD> and login into system
        Then I validate Product menu should not be visible
        Then I logout
        Examples:
            | USERNAME | PASSWORD |
            | "DIST1"  | "2023"   |




