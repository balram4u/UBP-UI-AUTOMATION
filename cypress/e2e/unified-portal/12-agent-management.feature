Feature: 12-Agent Management Feature

    As a user on the unified portal Application
    I want to create resource role

    Background: Enter UserId and Password annd perform Login
        Given I am on the unified portal login page

    @e2e-seamless-one-std @e2e-seamless-one-std-agent
    Scenario Outline: STD-TC-28910 Edit Agents
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        Then I should see the message <RESELLER_ID> on the Home page
        And I navigate to the agents page in trip management
        When I filter with <COLUMN_NAME> <COLUMN_VALUE> value
        When I perform update operation for <AGENT_NAME> with following parameter <UPDATE_AGENT_NAME> <DESCRIPTION> <MAX_COUNT> <VOLUMN_CAPACITY> <WEIGHT_CAPACITY>
        Then I am able to validate proper message <MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | AGENT_NAME         | UPDATE_AGENT_NAME  | DESCRIPTION                      | MAX_COUNT | VOLUMN_CAPACITY | WEIGHT_CAPACITY | MESSAGE                              | COLUMN_NAME | COLUMN_VALUE       |
            | "Operator"  | "2023"   | "OperatorAgent2"   | "OperatorAgent2-1" | "updated agent name and details" | "18"      | "5000"          | "5000"          | "Agent details updated successfully" | "Agent Id"  | "OperatorAgent2"   |
            | "Operator"  | "2023"   | "OperatorAgent2-1" | "OperatorAgent2"   | "updated agent name and details" | "18"      | "5000"          | "5000"          | "Agent details updated successfully" | "Agent Id"  | "OperatorAgent2-1" |

    @e2e-seamless-one-std @e2e-seamless-one-std-agent
    Scenario Outline: STD-TC-28909 View Agents
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        Then I should see the message <RESELLER_ID> on the Home page
        And I navigate to the agents page in trip management
        When I filter with <COLUMN_NAME> <COLUMN_VALUE> value
        And I click on view button to see the Agents details <AGENT_NAME>
        Then I should verify agent details with following parameters <AGENT_NAME> <MAXCOUNT> <DESCRIPTION> <VOLUME_CAPACITY> <WEIGHT_CAPACITY> <VOLUME_CAPACITY_UNIT> <WEIGHT_CAPACITY_UNIT> <RESERVE_VOLUME_CAPACITY> <RESERVE_WEIGHT_CAPACITY> <RESERVE_COUNT>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | AGENT_NAME       | MAXCOUNT | DESCRIPTION                      | VOLUME_CAPACITY | WEIGHT_CAPACITY | VOLUME_CAPACITY_UNIT | WEIGHT_CAPACITY_UNIT | RESERVE_VOLUME_CAPACITY | RESERVE_WEIGHT_CAPACITY | RESERVE_COUNT | COLUMN_NAME | COLUMN_VALUE     |
            | "Operator"  | "2023"   | "OperatorAgent2" | "18"     | "updated agent name and details" | "5000"          | "5000"          | "CUBIC_METER"        | "KILOGRAM"           | "-"                     | "-"                     | "3"           | "Agent Id"  | "OperatorAgent2" |

    @e2e-seamless-one-std @e2e-seamless-one-std-agent
    Scenario Outline: STD-TC-28911 Filter search of Agents using different columns value data
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        Then I should see the message <RESELLER_ID> on the Home page
        And I navigate to the agents page in trip management
        And I get total agent count available in the table
        When I filter with <COLUMN_AGENT_ID> <AGENT_ID> value
        Then I validate the searched Agent details in the grid <AGENTNAME>
        And I navigate to the agents page in trip management
        Then I validate agent count should be as default
        When I filter with <COLUMN_AGENT_NAME> <AGENTNAME> value
        Then I validate the searched Agent details in the grid <AGENTNAME>
        And I navigate to the agents page in trip management
        Then I validate agent count should be as default
        When I filter with <COLUMN_MAX_COUNT> <MAXCOUNT> value
        Then I validate the searched Agent details in the grid <AGENTNAME>
        And I navigate to the agents page in trip management
        Then I validate agent count should be as default
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | AGENTNAME        | MAXCOUNT | DESCRIPTION                       | VOLUME_CAPACITY | WEIGHT_CAPACITY | VOLUME_CAPACITY_UNIT | WEIGHT_CAPACITY_UNIT | RESERVE_VOLUME_CAPACITY | RESERVE_WEIGHT_CAPACITY | RESERVE_COUNT | COLUMN_AGENT_ID | AGENT_ID           | COLUMN_AGENT_NAME | COLUMN_MAX_COUNT |
            | "Operator"  | "2023"   | "OperatorAgent2" | "18"    | "updated agent name and details"   | "5000"          | "5000"          | "CUBIC_METER"        | "KILOGRAM"           | "0"                     | "0"                     | "3"           | "Agent Id"      | "OperatorAgent2-1" | "Agent name"      | "Max Count"      |
