Feature: 15-Inventory Feature

  As a user on the unified portal Application
  I want to perform inventory operation

  Background: Enter UserId and Password annd perform Login
    Given I am on the unified portal login page

  ######################## Standard ########################

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27865: Self inventory view
    Given Provide <USERNAME> and <PASSWORD> and login into system
    And I click on Inventory option
    Then I verify different inventory operations
    When I navigate to the Inventories Page
    Then I verify page title "View and Manage Inventories"
    When I navigate to the Detailed Inventory Page
    Then I verify page title "Detailed Inventory View"
    And I click on first view button for inventory
    Then I verify page title "Detailed Inventory View"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD |
      | "OPERATOR" | "2023"   |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27866: Inventories
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I search for particular product with <PRODUCT_CATEGORY> <PRODUCT_NAME> <PRODUCT_SKU> <RESELLER>
    Then I verify searched product availabe in the table with <PRODUCT_NAME> <CATEGORY_PATH> <PRODUCT_SKU> <PRODUCT_TYPE>
    And I click on action button of searched product
    Then I verify page title "Inventory Boxes"
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | PRODUCT_SKU | PRODUCT_CATEGORY    | PRODUCT_NAME | RESELLER       | CATEGORY_PATH               | PRODUCT_TYPE |
      | "OPERATOR" | "2023"   | "SIM_4G"    | "Physical Products" | "SIM-4G"     | "Distributor1" | "Physical Products/SIM-4G/" | "serialised" |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27868: Search Inventory by product category
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I search for particular product with <PRODUCT_CATEGORY> <PRODUCT_NAME> <PRODUCT_SKU> <RESELLER>
    Then I verify searched product availabe in the table with <PRODUCT_NAME> <CATEGORY_PATH> <PRODUCT_SKU> <PRODUCT_TYPE>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | PRODUCT_SKU | PRODUCT_CATEGORY    | PRODUCT_NAME | RESELLER | CATEGORY_PATH | PRODUCT_TYPE |
      | "OPERATOR" | "2023"   | ""          | "Physical Products" | "SIM-4G"     | ""       | ""            | "serialised" |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27869: Search Inventory by multiple product category
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I search with multiple product category <PRODUCT_CATEGORY1> <PRODUCT_CATEGORY2>
    And I uncheck Include own inventory
    And I click on search button
    Then I click on filters
    And I select filter column <COLUMN_NAME>
    And I select filter option <OPERATOR>
    And I enter filter value <PRODUCT>
    And I verify product details in table <COLUMN_NAME> <PRODUCT>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | PRODUCT_SKU | PRODUCT_CATEGORY1  | PRODUCT_CATEGORY2   | COLUMN_NAME | OPERATOR | PRODUCT  |
      | "OPERATOR" | "2023"   | ""          | "Digital Products" | "Physical Products" | "Name"      | "equals" | "SIM-4G" |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27871: Search Inventory by product name
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I search for particular product with <PRODUCT_CATEGORY> <PRODUCT_NAME> <PRODUCT_SKU> <RESELLER>
    And I verify product details in table <COLUMN_NAME> <PRODUCT_NAME>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | PRODUCT_SKU | PRODUCT_CATEGORY | PRODUCT_NAME | RESELLER | CATEGORY_PATH | COLUMN_NAME |
      | "OPERATOR" | "2023"   | ""          | ""               | "SIM-4G"     | ""       | ""            | "Name"      |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27870: Search Inventory by product category without self inventory
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I search for particular product with <PRODUCT_CATEGORY> <PRODUCT_NAME> <PRODUCT_SKU> <RESELLER>
    And I uncheck Include own inventory
    And I click on search button
    And I verify product details in table <COLUMN_NAME> <COLUMN_VALUE>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | PRODUCT_SKU | PRODUCT_CATEGORY    | PRODUCT_NAME | RESELLER | CATEGORY_PATH | PRODUCT_TYPE               | COLUMN_NAME | COLUMN_VALUE                |
      | "OPERATOR" | "2023"   | ""          | "Physical Products" | ""           | ""       | ""            | "trackable-non-serialised" | "Category"  | "Physical Products/SIM-4G/" |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27874: Search Inventory by product SKU
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I search for particular product with <PRODUCT_CATEGORY> <PRODUCT_NAME> <PRODUCT_SKU> <RESELLER>
    And I verify product details in table <COLUMN_NAME> <PRODUCT_SKU>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | PRODUCT_SKU | PRODUCT_CATEGORY | PRODUCT_NAME | RESELLER | CATEGORY_PATH | COLUMN_NAME   |
      | "OPERATOR" | "2023"   | "SIM_4G"    | ""               | ""           | ""       | ""            | "Product SKU" |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27875: Search Inventory by multiple product SKU
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I search with multiple product SKU <PRODUCT_SKU1> <PRODUCT_SKU2>
    Then I click on filters
    And I select filter column <COLUMN_NAME>
    And I select filter option <OPERATOR>
    And I enter filter value <PRODUCT>
    And I verify product details in table <COLUMN_NAME> <PRODUCT>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | PRODUCT_SKU | PRODUCT_SKU1 | PRODUCT_SKU2 | COLUMN_NAME | OPERATOR | PRODUCT  |
      | "OPERATOR" | "2023"   | ""          | "SIM-4G"     | "Sim-5G"     | "Name"      | "equals" | "SIM-4G" |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27872: Search Inventory by multiple product name
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I search with multiple product name <PRODUCT_NAME1> <PRODUCT_NAME2>
    Then I click on filters
    And I select filter column <COLUMN_NAME>
    And I select filter option <OPERATOR>
    And I enter filter value <PRODUCT_NAME1>
    And I verify product details in table <COLUMN_NAME> <PRODUCT_NAME1>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | PRODUCT_SKU | PRODUCT_NAME1 | PRODUCT_NAME2 | COLUMN_NAME | OPERATOR |
      | "OPERATOR" | "2023"   | ""          | "SIM-4G"      | "SIM-5G"      | "Name"      | "equals" |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27873: Search Inventory by product Name without self inventory
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I search for particular product with <PRODUCT_CATEGORY> <PRODUCT_NAME> <PRODUCT_SKU> <RESELLER>
    And I uncheck Include own inventory
    And I click on search button
    And I verify product details in table <COLUMN_NAME> <PRODUCT_NAME>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | PRODUCT_SKU | PRODUCT_CATEGORY | PRODUCT_NAME | RESELLER | CATEGORY_PATH | PRODUCT_TYPE               | COLUMN_NAME |
      | "OPERATOR" | "2023"   | ""          | ""               | "SIM-4G"     | ""       | ""            | "trackable-non-serialised" | "Name"      |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27878: Search Inventory by multiple Reseller Name
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I search with multiple reseller name <RESELLER_NAME1> <RESELLER_NAME2>
    Then I click on filters
    And I select filter column <COLUMN_NAME>
    And I select filter option <OPERATOR>
    And I enter filter value <PRODUCT_NAME>
    And I verify product details in table <COLUMN_NAME> <PRODUCT_NAME>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | RESELLER_NAME1 | RESELLER_NAME2 | COLUMN_NAME | OPERATOR | PRODUCT_NAME |
      | "OPERATOR" | "2023"   | "Distributor1" | "Distributor2" | "Name"      | "equals" | "SIM-4G"     |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27877: Search Inventory by Reseller Name
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I search for particular product with <PRODUCT_CATEGORY> <PRODUCT_NAME> <PRODUCT_SKU> <RESELLER>
    Then I click on filters
    And I select filter column <COLUMN_NAME>
    And I select filter option <OPERATOR>
    And I enter filter value <PRODUCT>
    And I verify product details in table <COLUMN_NAME> <PRODUCT>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | PRODUCT_SKU | PRODUCT_CATEGORY | PRODUCT_NAME | RESELLER       | COLUMN_NAME | OPERATOR | PRODUCT  |
      | "OPERATOR" | "2023"   | ""          | ""               | ""           | "Distributor1" | "Name"      | "equals" | "SIM-4G" |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27876: Search Inventory by product SKU without self inventory
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I search for particular product with <PRODUCT_CATEGORY> <PRODUCT_NAME> <PRODUCT_SKU> <RESELLER>
    And I uncheck Include own inventory
    And I click on search button
    And I verify product details in table <COLUMN_NAME> <PRODUCT_SKU>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | PRODUCT_SKU | PRODUCT_CATEGORY | PRODUCT_NAME | RESELLER | CATEGORY_PATH | COLUMN_NAME   |
      | "OPERATOR" | "2023"   | "SIM_4G"    | ""               | ""           | ""       | ""            | "Product SKU" |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27879: Search Inventory by Reseller Name without self inventory
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I search for particular product with <PRODUCT_CATEGORY> <PRODUCT_NAME> <PRODUCT_SKU> <RESELLER>
    And I uncheck Include own inventory
    And I click on search button
    Then I click on filters
    And I select filter column <COLUMN_NAME>
    And I select filter option <OPERATOR>
    And I enter filter value <PRODUCT>
    And I verify product details in table <COLUMN_NAME> <PRODUCT>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | PRODUCT_SKU | PRODUCT_CATEGORY | PRODUCT_NAME | RESELLER       | COLUMN_NAME | OPERATOR | PRODUCT  |
      | "OPERATOR" | "2023"   | ""          | ""               | ""           | "Distributor1" | "Name"      | "equals" | "SIM_4G" |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27883: Inventory Search result Table column adjustment for Total Count
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I click on columns button
    And I enter column title <COLUMN_NAME>
    And I verify toggle list is filtered <COLUMN_NAME>
    Then I click on toggle button <TOGGLE_COLUMN>
    And Unchecking the toggle should remove that column from the table <COLUMN_NAME>
    Examples:
      | USERNAME   | PASSWORD | COLUMN_NAME   | TOGGLE_COLUMN |
      | "OPERATOR" | "2023"   | "Total Count" | "totalCount"  |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27880: Inventory Search result Table column adjustment for Name
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I click on columns button
    And I enter column title <COLUMN_NAME>
    And I verify toggle list is filtered <COLUMN_NAME>
    Then I click on toggle button <TOGGLE_COLUMN>
    And Unchecking the toggle should remove that column from the table <COLUMN_NAME>
    Examples:
      | USERNAME   | PASSWORD | COLUMN_NAME | TOGGLE_COLUMN |
      | "OPERATOR" | "2023"   | "Name"      | "name"        |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27882: Inventory Search result Table column adjustment for Available Count
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I click on columns button
    And I enter column title <COLUMN_NAME>
    And I verify toggle list is filtered <COLUMN_NAME>
    Then I click on toggle button <TOGGLE_COLUMN>
    And Unchecking the toggle should remove that column from the table <COLUMN_NAME>
    Examples:
      | USERNAME   | PASSWORD | COLUMN_NAME       | TOGGLE_COLUMN    |
      | "OPERATOR" | "2023"   | "Available Count" | "availableCount" |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27881: Inventory Search result Table column adjustment for Checkbox Selection
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I click on columns button
    And I enter column title <COLUMN_NAME>
    And I verify toggle list is filtered <COLUMN_NAME>
    Then I click on toggle button <TOGGLE_COLUMN>
    And Unchecking the toggle should remove that column from the table <COLUMN_NAME>
    Examples:
      | USERNAME   | PASSWORD | COLUMN_NAME          | TOGGLE_COLUMN |
      | "OPERATOR" | "2023"   | "Checkbox Selection" | "__check__"   |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27885: Inventory Search result Table column adjustment for Product SKU
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I click on columns button
    And I enter column title <COLUMN_NAME>
    And I verify toggle list is filtered <COLUMN_NAME>
    Then I click on toggle button <TOGGLE_COLUMN>
    And Unchecking the toggle should remove that column from the table <COLUMN_NAME>
    Examples:
      | USERNAME   | PASSWORD | COLUMN_NAME   | TOGGLE_COLUMN |
      | "OPERATOR" | "2023"   | "Product SKU" | "productSKU"  |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27884: Inventory Search result Table column adjustment for Category
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I click on columns button
    And I enter column title <COLUMN_NAME>
    And I verify toggle list is filtered <COLUMN_NAME>
    Then I click on toggle button <TOGGLE_COLUMN>
    And Unchecking the toggle should remove that column from the table <COLUMN_NAME>
    Examples:
      | USERNAME   | PASSWORD | COLUMN_NAME | TOGGLE_COLUMN |
      | "OPERATOR" | "2023"   | "Category"  | "category"    |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27887: Inventory Search result Table column adjustment for Price
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I click on columns button
    And I enter column title <COLUMN_NAME>
    And I verify toggle list is filtered <COLUMN_NAME>
    Then I click on toggle button <TOGGLE_COLUMN>
    And Unchecking the toggle should remove that column from the table <COLUMN_NAME>
    Examples:
      | USERNAME   | PASSWORD | COLUMN_NAME | TOGGLE_COLUMN |
      | "OPERATOR" | "2023"   | "Price"     | "price"       |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27888: Inventory Search result Table column adjustment for Actions
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I click on columns button
    And I enter column title <COLUMN_NAME>
    And I verify toggle list is filtered <COLUMN_NAME>
    Then I click on toggle button <TOGGLE_COLUMN>
    And Unchecking the toggle should remove that column from the table <COLUMN_NAME>
    Examples:
      | USERNAME   | PASSWORD | COLUMN_NAME | TOGGLE_COLUMN |
      | "OPERATOR" | "2023"   | "Actions"   | "actions"     |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-23 Inventory Search result Table column adjustment for Actions
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I click on columns button
    And I enter column title <COLUMN_NAME>
    And I verify toggle list is filtered <COLUMN_NAME>
    Then I click on toggle button <TOGGLE_COLUMN>
    And Unchecking the toggle should remove that column from the table <COLUMN_NAME>
    Examples:
      | USERNAME   | PASSWORD | COLUMN_NAME    | TOGGLE_COLUMN |
      | "OPERATOR" | "2023"   | "Product Type" | "productType" |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27892: Filter Inventory Search result by Equals operation
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    Then I click on filters
    And I select filter column <FILTER_COLUMN>
    And I select filter option <FILTER_OPTION>
    And I enter filter value <FILTER_VALUE>
    Then I validate the table list parameters <COLUMN_NAME> <COLUMN_VALUE>
    Examples:
      | USERNAME   | PASSWORD | FILTER_COLUMN  | FILTER_OPTION | FILTER_VALUE | COLUMN_NAME    | COLUMN_VALUE |
      | "OPERATOR" | "2023"   | "Product Type" | "equals"      | "serialised" | "Product Type" | "serialised" |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27891: Filter Inventory Search result by contains operation
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    Then I click on filters
    And I select filter column <FILTER_COLUMN>
    And I select filter option <FILTER_OPTION>
    And I enter filter value <FILTER_VALUE>
    Then I validate the table list parameters <COLUMN_NAME> <COLUMN_VALUE>
    Examples:
      | USERNAME   | PASSWORD | FILTER_COLUMN  | FILTER_OPTION | FILTER_VALUE | COLUMN_NAME    | COLUMN_VALUE |
      | "OPERATOR" | "2023"   | "Product Type" | "contains"    | "serialised" | "Product Type" | "serialised" |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27894: Filter Inventory Search result by ends with operation
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    Then I click on filters
    And I select filter column <FILTER_COLUMN>
    And I select filter option <FILTER_OPTION>
    And I enter filter value <FILTER_VALUE>
    Then I validate the table list parameters <COLUMN_NAME> <COLUMN_VALUE>
    Examples:
      | USERNAME   | PASSWORD | FILTER_COLUMN  | FILTER_OPTION | FILTER_VALUE | COLUMN_NAME    | COLUMN_VALUE |
      | "OPERATOR" | "2023"   | "Product Type" | "ends with"   | "lised"      | "Product Type" | "serialised" |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27896: Box Item Details
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I enter additional filters with parameters <COLUMN> <OPERATOR> <PRODUCT_NAME>
    Then I click on action button of first row boxId
    And I verify page title <INVENTORY_BOXES_TITLE>
    Then I click on action button of first boxId available on the screen
    And I verify page title <BOX_ITEMS_PAGE_TITLE>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | INVENTORY_HOME_PAGE_TITLE     | INVENTORY_BOXES_TITLE | BOX_ITEMS_PAGE_TITLE | COLUMN | OPERATOR | PRODUCT_NAME |
      | "OPERATOR" | "2023"   | "View and Manage Inventories" | "Inventory Boxes"     | "Box Items"          | "name" | "equals" | "SIM-4G"     |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27893: Filter Inventory Search result by starts with operation
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    Then I click on filters
    And I select filter column <FILTER_COLUMN>
    And I select filter option <FILTER_OPTION>
    And I enter filter value <FILTER_VALUE>
    Then I validate the table list parameters <COLUMN_NAME> <COLUMN_VALUE>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | FILTER_COLUMN  | FILTER_OPTION | FILTER_VALUE | COLUMN_NAME    | COLUMN_VALUE |
      | "OPERATOR" | "2023"   | "Product Type" | "starts with" | "seri"       | "Product Type" | "serialised" |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27890: Inventory Search result Table column adjustment with SHOW ALL toggle
    When Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I perform Hide all columns operation
    Then I validate columns should not be displayed in the table
    And I perform Show all columns operation
    Then I validate columns should be displayed in the table
    Then I logout
    Examples:
      | USERNAME   | PASSWORD |
      | "OPERATOR" | "2023"   |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27900: Detailed Inventory view Table column adjustment for State
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Detailed Inventory Page
    And I click on columns button
    And I enter column title <COLUMN_NAME>
    And I verify toggle list is filtered <COLUMN_NAME>
    Then I click on toggle button <TOGGLE_COLUMN>
    And Unchecking the toggle should remove that column from the table <COLUMN_NAME>
    Examples:
      | USERNAME   | PASSWORD | COLUMN_NAME | TOGGLE_COLUMN |
      | "OPERATOR" | "2023"   | "State"     | "state"       |

  @e2e-seamless-one-std-not-in-use @e2e-seamless-one-std-inventories-not-in-use
  Scenario Outline: STD-TC-27899: Detailed Inventory view Table column adjustment for Employee ID
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Detailed Inventory Page
    And I click on columns button
    And I enter column title <COLUMN_NAME>
    And I verify toggle list is filtered <COLUMN_NAME>
    Then I click on toggle button <TOGGLE_COLUMN>
    And Unchecking the toggle should remove that column from the table <COLUMN_NAME>
    Examples:
      | USERNAME   | PASSWORD | COLUMN_NAME   | TOGGLE_COLUMN |
      | "OPERATOR" | "2023"   | "Employee Id" | "employee"    |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27898: Detailed Inventory view Table column adjustment for Product SKU
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Detailed Inventory Page
    And I click on columns button
    And I enter column title <COLUMN_NAME>
    And I verify toggle list is filtered <COLUMN_NAME>
    Then I click on toggle button <TOGGLE_COLUMN>
    And Unchecking the toggle should remove that column from the table <COLUMN_NAME>
    Examples:
      | USERNAME   | PASSWORD | COLUMN_NAME   | TOGGLE_COLUMN |
      | "OPERATOR" | "2023"   | "Product SKU" | "productSKU"  |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27897: Detailed Inventory view Table column adjustment for Serial Number
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Detailed Inventory Page
    And I click on columns button
    And I enter column title <COLUMN_NAME>
    And I verify toggle list is filtered <COLUMN_NAME>
    Then I click on toggle button <TOGGLE_COLUMN>
    And Unchecking the toggle should remove that column from the table <COLUMN_NAME>
    Examples:
      | USERNAME   | PASSWORD | COLUMN_NAME     | TOGGLE_COLUMN  |
      | "OPERATOR" | "2023"   | "Serial Number" | "serialNumber" |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27901: Detailed Inventory view Table column adjustment for Box ID
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Detailed Inventory Page
    And I click on columns button
    And I enter column title <COLUMN_NAME>
    And I verify toggle list is filtered <COLUMN_NAME>
    Then I click on toggle button <TOGGLE_COLUMN>
    And Unchecking the toggle should remove that column from the table <COLUMN_NAME>
    Examples:
      | USERNAME   | PASSWORD | COLUMN_NAME | TOGGLE_COLUMN |
      | "OPERATOR" | "2023"   | "Box ID"    | "boxId"       |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27902: Detailed Inventory view Table column adjustment for Owner ID
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Detailed Inventory Page
    And I click on columns button
    And I enter column title <COLUMN_NAME>
    And I verify toggle list is filtered <COLUMN_NAME>
    Then I click on toggle button <TOGGLE_COLUMN>
    And Unchecking the toggle should remove that column from the table <COLUMN_NAME>
    Examples:
      | USERNAME   | PASSWORD | COLUMN_NAME | TOGGLE_COLUMN |
      | "OPERATOR" | "2023"   | "Owner ID"  | "owner"       |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27903: Detailed Inventory view Table column adjustment for Location ID
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Detailed Inventory Page
    And I click on columns button
    And I enter column title <COLUMN_NAME>
    And I verify toggle list is filtered <COLUMN_NAME>
    Then I click on toggle button <TOGGLE_COLUMN>
    And Unchecking the toggle should remove that column from the table <COLUMN_NAME>
    Examples:
      | USERNAME   | PASSWORD | COLUMN_NAME   | TOGGLE_COLUMN |
      | "OPERATOR" | "2023"   | "Location Id" | "locationId"  |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27906: Detailed Inventory view Table column adjustment for Action
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Detailed Inventory Page
    And I click on columns button
    And I enter column title <COLUMN_NAME>
    And I verify toggle list is filtered <COLUMN_NAME>
    Then I click on toggle button <TOGGLE_COLUMN>
    And Unchecking the toggle should remove that column from the table <COLUMN_NAME>
    Examples:
      | USERNAME   | PASSWORD | COLUMN_NAME | TOGGLE_COLUMN |
      | "OPERATOR" | "2023"   | "Actions"   | "actions"     |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27908: Filter detailed Inventory table by Equals operation
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Detailed Inventory Page
    Then I click on filters
    And I select filter column <FILTER_COLUMN>
    And I select filter option <FILTER_OPTION>
    And I enter filter value <FILTER_VALUE>
    Then I validate the table list parameters in the detail inventories page <COLUMN_NAME> <COLUMN_VALUE>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | FILTER_COLUMN | FILTER_OPTION | FILTER_VALUE | COLUMN_NAME   | COLUMN_VALUE |
      | "OPERATOR" | "2023"   | "Product SKU" | "Equal"       | "SIM_4G"     | "Product SKU" | "SIM_4G"     |

  @e2e-seamless-one-std-not-in-use @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27911: Row per page option in Inventory Search Page
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I click on rows per page dropdown
    And I verify values in rows per page dropdown
    And I select number of rows to be displayed <NO_OF_ROWS>
    And I verify number of rows displayed <NO_OF_ROWS_DISPLAYED>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | NO_OF_ROWS | NO_OF_ROWS_DISPLAYED |
      | "OPERATOR" | "2023"   | "4"        | "10"                 |

  @e2e-seamless-one-std-not-in-use @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27913: Row per page option in Inventory Boxes Page
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I enter additional filters with parameters <COLUMN> <OPERATOR> <PRODUCT_NAME>
    Then I click on action button of first row boxId
    And I verify page title <INVENTORY_BOXES_TITLE>
    And I click on rows per page dropdown
    And I verify values in rows per page dropdown
    And I select number of rows to be displayed <NO_OF_ROWS>
    And I verify number of rows displayed <NO_OF_ROWS>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | NO_OF_ROWS | INVENTORY_BOXES_TITLE | COLUMN | OPERATOR | PRODUCT_NAME |
      | "OPERATOR" | "2023"   | "10"       | "Inventory Boxes"     | "name" | "equals" | "SIM-4G"     |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27912: Row per page option in Inventory Details Page
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Detailed Inventory Page
    And I click on rows per page dropdown
    And I verify values in rows per page dropdown
    And I select number of rows to be displayed <NO_OF_ROWS>
    And I verify number of rows displayed <NO_OF_ROWS>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | NO_OF_ROWS | PRODUCT_SKU | SERIAL_NUMBER |
      | "OPERATOR" | "2023"   | "10"       | "Sim-5G"    | "10080"       |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27914: Row per page option in Inventory Boxes Details Page
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I enter additional filters with parameters <COLUMN> <OPERATOR> <PRODUCT_NAME>
    Then I click on action button of first row boxId
    And I verify page title <INVENTORY_BOXES_TITLE>
    Then I click on action button of first boxId available on the screen
    And I verify page title <BOX_ITEMS_PAGE_TITLE>
    And I click on rows per page dropdown
    And I verify values in rows per page dropdown
    And I select number of rows to be displayed <NO_OF_ROWS>
    And I verify number of rows displayed <NO_OF_ROWS>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | NO_OF_ROWS | INVENTORY_BOXES_TITLE | COLUMN | OPERATOR | PRODUCT_NAME | BOX_ITEMS_PAGE_TITLE |
      | "OPERATOR" | "2023"   | "10"       | "Inventory Boxes"     | "name" | "equals" | "SIM-4G"     | "Box Items"          |


  @e2e-seamless-one-std-not-in-use @e2e-seamless-one-std-inventories-not-in-use
  Scenario Outline: STD-TC-27920: Inventory Box Split with out of range input in End Serial
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I enter additional filters with parameters <COLUMN> <OPERATOR> <PRODUCT_NAME>
    Then I click on action button of first row boxId
    And I verify page title <INVENTORY_BOXES_TITLE>
    And I enter additional filters with parameters "Location Id" "Equal" "POS1-1-1-1"
    And I click on split button
    # And I verify split boxed popup is opened
    And I enter End serial range <RANGE>
    And I verify out of range warning
    Examples:
      | USERNAME   | PASSWORD | INVENTORY_BOXES_TITLE | COLUMN | OPERATOR | PRODUCT_NAME | BOX_ITEMS_PAGE_TITLE | RANGE      |
      | "OPERATOR" | "2023"   | "Inventory Boxes"     | "name" | "equals" | "SIM-4G"     | "Box Items"          | "10000334" |

  @e2e-seamless-one-std-not-in-use @e2e-seamless-one-std-inventories-not-in-use
  Scenario Outline: STD-TC-27919: Inventory Box Split with alphanumeric input in End Serial
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I enter additional filters with parameters <COLUMN> <OPERATOR> <PRODUCT_NAME>
    Then I click on action button of first row boxId
    And I verify page title <INVENTORY_BOXES_TITLE>
    And I enter additional filters with parameters "Location Id" "Equal" "POS1-1-1-1"
    And I click on split button
    And I verify split boxed popup is opened
    And I enter End serial range <RANGE>
    Then I verify alphabets not entered
    Examples:
      | USERNAME   | PASSWORD | INVENTORY_BOXES_TITLE | COLUMN | OPERATOR | PRODUCT_NAME | BOX_ITEMS_PAGE_TITLE | RANGE  |
      | "OPERATOR" | "2023"   | "Inventory Boxes"     | "name" | "equals" | "SIM-4G"     | "Box Items"          | "abcd" |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27915: Inventory Export
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I click on export button
    And I click on download button
    And I read file name <FILE_NAME>
    Then I delete file name <FILE_NAME>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | INVENTORY_BOXES_TITLE | COLUMN | OPERATOR | PRODUCT_NAME | FILE_NAME              |
      | "OPERATOR" | "2023"   | "Inventory Boxes"     | "name" | "equals" | "SIM-4G"     | "inventory-export.csv" |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27917: Inventory Box Export
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I enter additional filters with parameters <COLUMN> <OPERATOR> <PRODUCT_NAME>
    Then I click on action button of first row boxId
    And I verify page title <INVENTORY_BOXES_TITLE>
    And I click on export button in Detailed Inventory Page
    And I read file name <FILE_NAME>
    Then I delete file name <FILE_NAME>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | INVENTORY_BOXES_TITLE | COLUMN | OPERATOR | PRODUCT_NAME | FILE_NAME                     |
      | "OPERATOR" | "2023"   | "Inventory Boxes"     | "name" | "equals" | "SIM-4G"     | "inventory-SIM_4G-export.csv" |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27916: Detailed Inventory Export
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Detailed Inventory Page
    And I click on export button in Detailed Inventory Page
    And I click on download button in Detailed Inventory Page
    And I read file name <FILE_NAME>
    Then I delete file name <FILE_NAME>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | INVENTORY_BOXES_TITLE | COLUMN | OPERATOR | PRODUCT_NAME | FILE_NAME  |
      | "OPERATOR" | "2023"   | "Inventory Boxes"     | "name" | "equals" | "SIM-4G"     | "data.csv" |

  @e2e-seamless-one-std @e2e-seamless-one-std-inventories
  Scenario Outline: STD-TC-27918: Inventory Box Details Export
    Given Provide <USERNAME> and <PASSWORD> and login into system
    When I navigate to the Inventories Page
    And I enter additional filters with parameters <COLUMN> <OPERATOR> <PRODUCT_NAME>
    Then I click on action button of first row boxId
    And I verify page title <INVENTORY_BOXES_TITLE>
    Then I click on action button of first boxId available on the screen
    And I verify page title <BOX_ITEMS_PAGE_TITLE>
    And I click on export button in Box Items Page with <STATE>
    Then I logout
    Examples:
      | USERNAME   | PASSWORD | INVENTORY_BOXES_TITLE | COLUMN | OPERATOR | PRODUCT_NAME | BOX_ITEMS_PAGE_TITLE | FILE_NAME    | STATE       |
      | "OPERATOR" | "2023"   | "Inventory Boxes"     | "name" | "equals" | "SIM-4G"     | "Box Items"          | "export.csv" | "Available" |



