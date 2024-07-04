Feature: 01-Login Feature
    As a user on the Unified Portal Application
    I want to test the login page

    Background:
        Given I am on the unified portal login page


    ########################### Standard ###############################

    @e2e-seamless-one-std @e2e-seamless-one-std-login
    Scenario Outline: STD-TC-28021 Performing login operation with passing test data as data table
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        Then I should see the message <RESELLER_ID> on the Home page
        Examples:
            | RESELLER_ID | PASSWORD |
            | "DIST1"     | "2023"   |

    @e2e-seamless-one-std @e2e-seamless-one-std-login
    Scenario Outline: STD-TC-28022 Performing login operation with passing invalid username as data table
        When Provide <RESELLER_ID> and <PASSWORD> and login into system with invalid user
        Then I am able to validate proper message <MESSAGE>
        Examples:
            | RESELLER_ID | PASSWORD | MESSAGE              |
            | "DIST111"   | "2023"   | "Request not found!" |


    @e2e-seamless-one-std @e2e-seamless-one-std-login
    Scenario Outline: STD-TC-28023 Performing login operation with passing invalid password as data table
        When Provide <RESELLER_ID> and <PASSWORD> and login into system with invalid password
        Then I am able to validate proper message <MESSAGE>
        Examples:
            | RESELLER_ID | PASSWORD   | MESSAGE                       |
            | "DIST1"     | "20231122" | "Invalid UserId or Password." |

    @e2e-seamless-one-std @e2e-seamless-one-std-login
    Scenario Outline: STD-TC-28041 Performing Change Password operation with passing test data as data table
        #below scenario also coverd TC-28034 , TC-28031 and TC-28027
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        Then I should see the message <RESELLER_ID> on the Home page
        And I perform Change Password operation having following parameters <PASSWORD> <NEW_PASSWORD> <CONFIRM_PASSWORD>
        When Provide <RESELLER_ID> and <NEW_PASSWORD> and login into system
        Then I should see the message <RESELLER_ID> on the Home page
        Examples:
            | RESELLER_ID | PASSWORD | NEW_PASSWORD | CONFIRM_PASSWORD |
            | "DIST6"     | "2023"   | "2024"       | "2024"           |
            | "DIST6"     | "2024"   | "2023"       | "2023"           |

    @e2e-seamless-one-std @e2e-seamless-one-std-login
    Scenario Outline: STD-TC-28039 Login via valid User ID and invalid password until maximum incorrect login attempts are made
        When Provide <RESELLER_ID> and <PASSWORD> and login into system with invalid password
        Then I am able to validate proper message <MESSAGE>
        Examples:
            | RESELLER_ID  | PASSWORD | MESSAGE                                                               |
            | "POS1-1-1-1" | "202011" | "Invalid UserId or Password."                                         |
            | "POS1-1-1-1" | "202011" | "Invalid UserId or Password."                                         |
            | "POS1-1-1-1" | "202011" | "Max incorrect login attempts reached. Please contact administrator." |

    @e2e-seamless-one-std @e2e-seamless-one-std-login
    Scenario Outline: STD-TC-28039 Performing Reset Wrong Password attempts operation with passing test data as data table
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        Then I should see the message <RESELLER_ID> on the Home page
        When I navigate to the Resellers Page
        And I enter reseller info with parameters <SEARCH_FIELD> <RESELLER_NAME>
        And I Click on the eye icon against any reseller from the list
        And I click on Reseller User Information
        Then I perform Reset Wrong Password Attempts operation
        Then I am able to validate proper message <MESSAGE>
        Then I logout
        Examples:
            | RESELLER_ID | PASSWORD | SEARCH_FIELD | RESELLER_NAME | MESSAGE                              |
            | "Operator"  | "2023"   | "resellerId" | "POS1-1-1-1"  | "Reseller User Updated Successfully" |

    ##Blank password Cannot be check
    @e2e-seamless-one-std @e2e-seamless-one-std-login
    Scenario Outline: STD-TC-28010 Login via User ID into UBP Portal without credentials
        When Provide <RESELLER_ID> and login into system with blank userId
        Then I am able to validate proper message <MESSAGE>
        # Then I am able to validate error message below the field "Password is required" "password"
        Examples:
            | RESELLER_ID | MESSAGE         |
            | ""          | "Enter User Id" |

    @e2e-seamless-one-std @e2e-seamless-one-std-login
    Scenario Outline: STD-TC-28036 Change Password with same password entered in all fields
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        Then I should see the message <RESELLER_ID> on the Home page
        And I perform Change Password operation having following parameters <PASSWORD> <NEW_PASSWORD> <CONFIRM_PASSWORD>
        Then I am able to validate proper message <ERROR_MESSAGE>
        Examples:
            | RESELLER_ID | PASSWORD | NEW_PASSWORD | CONFIRM_PASSWORD | ERROR_MESSAGE                                     |
            | "DIST1"     | "2023"   | "2023"       | "2023"           | "password is not allowed to be same as previous." |

    @e2e-seamless-one-std @e2e-seamless-one-std-login
    Scenario Outline: STD-TC-28032 Change Password with valid old password and matched new/confirm password without conformance to min/max length requirement
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        Then I should see the message <RESELLER_ID> on the Home page
        And I perform Change Password operation having following parameters <PASSWORD> <NEW_PASSWORD> <CONFIRM_PASSWORD>
        Then I am able to validate proper message <ERROR_MESSAGE>
        Examples:
            | RESELLER_ID | PASSWORD | NEW_PASSWORD  | CONFIRM_PASSWORD | ERROR_MESSAGE                                    |
            | "DIST7"     | "2023"   | "20241111sem" | "20241111sem"    | "password has to be max 4, current length is 11" |

    @e2e-seamless-one-std @e2e-seamless-one-std-login
    Scenario Outline: STD-TC-28030 Change Password with valid old password and mismatched new/confirm password once password is expired
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        Then I should see the message <RESELLER_ID> on the Home page
        And I perform Change Password operation having following parameters <PASSWORD> <NEW_PASSWORD> <CONFIRM_PASSWORD>
        Then I am able to validate proper message <ERROR_MESSAGE>
        Examples:
            | RESELLER_ID | PASSWORD | NEW_PASSWORD | CONFIRM_PASSWORD | ERROR_MESSAGE          |
            | "DIST7"     | "2023"   | "2024"       | "2025"           | "Passwords must match" |

    @e2e-seamless-one-std @e2e-seamless-one-std-login
    Scenario Outline: STD-TC-28028 Change Password with invalid old password and matched new/confirm password once password is expired
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        Then I should see the message <RESELLER_ID> on the Home page
        And I perform Change Password operation having following parameters <OLD_PASSWORD> <NEW_PASSWORD> <CONFIRM_PASSWORD>
        Then I am able to validate proper message <ERROR_MESSAGE>
        Examples:
            | RESELLER_ID | PASSWORD | OLD_PASSWORD | NEW_PASSWORD | CONFIRM_PASSWORD | ERROR_MESSAGE                      |
            | "DIST7"     | "2023"   | "1111"       | "2024"       | "2024"           | "The old password is not correct." |

    @e2e-seamless-one-std @e2e-seamless-one-std-login
    Scenario Outline: STD-TC-28029 Change Password with empty old password and new/confirm password once password is expired
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        Then I should see the message <RESELLER_ID> on the Home page
        And I perform Change Password operation having following parameters <OLD_PASSWORD> <NEW_PASSWORD> <CONFIRM_PASSWORD>
        Then I am able to validate proper message <ERROR_MESSAGE>
        Then I am able to validate proper message below field <OLD_PASSWORD_ERROR> <OLD_FIELD>
        Then I am able to validate proper message below field <NEW_PASSWORD_ERROR> <NEW_FIELD>
        Then I am able to validate proper message below field <CONFIRM_PASSWORD_ERROR> <CONFIRM_FIELD>
        Examples:
            | RESELLER_ID | PASSWORD | OLD_PASSWORD | NEW_PASSWORD | CONFIRM_PASSWORD | ERROR_MESSAGE                     | OLD_PASSWORD_ERROR        | NEW_PASSWORD_ERROR        | CONFIRM_PASSWORD_ERROR       | OLD_FIELD      | NEW_FIELD      | CONFIRM_FIELD      |
            | "DIST7"     | "2023"   | ""           | ""           | ""               | "newPassword is a required field" | "Enter your old password" | "Enter your new password" | "Enter Confirm New Password" | "Old Password" | "New Password" | "Confirm Password" |

    @e2e-seamless-one-std @e2e-seamless-one-std-login
    #issue in portal #need to modify this test case
    Scenario Outline: STD-TC-28035 Change Password with Password History Limit greater than 1 once password is expired
        When Provide "Operator" and "2023" and login into system
        And I navigate to the Reseller Password Policy Page
        And Password Policy created should be visible inside table "POS password"
        When I update Password Policy with following parameters "POS password" "Edit password policy" "" "4" "4" "" "" "" "" "" "" and ""
        And I enter password controls details "" "" "" "" "2" ""
        Then I click on update button
        Then I am able to validate proper message "Password policy updated successfully"
        Then I logout
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        Then I should see the message <RESELLER_ID> on the Home page
        And I perform Change Password operation having following parameters <PASSWORD> <NEW_PASSWORD> <CONFIRM_PASSWORD>
        Then I am able to validate proper message <ERROR_MESSAGE>
        Then I logout
        When Provide "Operator" and "2023" and login into system
        And I navigate to the Reseller Password Policy Page
        And Password Policy created should be visible inside table "POS password"
        When I update Password Policy with following parameters "POS password" "Edit password policy" "" "4" "4" "" "" "" "" "" "" and ""
        And I enter password controls details "" "" "" "" "1" ""
        Then I click on update button
        Then I am able to validate proper message "Password policy updated successfully"
        Examples:
            | RESELLER_ID | PASSWORD | NEW_PASSWORD | CONFIRM_PASSWORD | ERROR_MESSAGE                                                   |
            | "DIST6"     | "2023"   | "2024"       | "2024"           | "user cannot update password as it already present in history!" |

    @e2e-seamless-one-std @e2e-seamless-one-std-login
    Scenario Outline: STD-TC-28037 Change Password with valid old password and banned password in new/confirm password fields once password is expired
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        Then I should see the message <RESELLER_ID> on the Home page
        And I perform Change Password operation having following parameters <PASSWORD> <NEW_PASSWORD> <CONFIRM_PASSWORD>
        Then I am able to validate proper message <ERROR_MESSAGE>
        Examples:
            | RESELLER_ID | PASSWORD | NEW_PASSWORD | CONFIRM_PASSWORD | ERROR_MESSAGE      |
            | "DIST7"     | "2023"   | "1234"       | "1234"           | "Banned password!" |

    @e2e-seamless-one-std @e2e-seamless-one-std-login
    Scenario Outline: STD-TC-28038 Change Password with valid old password and alphanumeric new/confirm password without conformance to Numeric Regex requirement once password is expired
        When Provide <RESELLER_ID> and <PASSWORD> and login into system
        Then I should see the message <RESELLER_ID> on the Home page
        And I perform Change Password operation having following parameters <PASSWORD> <NEW_PASSWORD> <CONFIRM_PASSWORD>
        When Provide <RESELLER_ID> and <NEW_PASSWORD> and login into system
        Then I should see the message <RESELLER_ID> on the Home page
        Examples:
            | RESELLER_ID | PASSWORD | NEW_PASSWORD | CONFIRM_PASSWORD |
            | "DIST7"     | "2023"   | "1a2a"       | "1a2a"           |
            | "DIST7"     | "1a2a"   | "2023"       | "2023"           |

    @e2e-seamless-one-std @e2e-seamless-one-std-login
    Scenario Outline: STD-TC-28033 Forgot Password workflow via User ID with Invalid OTP verification code
        When I click on Having trouble signing in option
        And I click on forgot password
        And I enter userId <RESELLER_ID>
        And I click via SMS option
        When I enter invalid otp
        Then I am able to validate proper message <ERROR_MESSAGE>
        Examples:
            | RESELLER_ID  | ERROR_MESSAGE       |
            | "POS1-1-1-1" | "OTP is not valid." |

    @e2e-seamless-one-std @e2e-seamless-one-std-login
    Scenario Outline: STD-TC-28015 Forgot Password workflow via Invalid Reseller ID
        When I click on Having trouble signing in option
        And I click on forgot password
        And I enter userId <RESELLER_ID>
        And I click via SMS option
        Then I am able to validate proper message <ERROR_MESSAGE>
        Examples:
            | RESELLER_ID | ERROR_MESSAGE                               |
            | "POS000"    | "Could not fetched Reseller Info from DMS." |

