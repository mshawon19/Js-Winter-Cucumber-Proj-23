# Feature: Sign up
#     Background:
#         Given I am on hotels homepage

#     Scenario: Verify error message for invalid data in SignUp form
#         Then I click on SignIn link
#              And I click on SignUp link
#              And I switch window handle to signup page
#              And I enter invalid emailAddress with as x!@###
#              And I verify error is displayed Enter a valid Email.
#              And I enter invalid firstName as !@
#              And I verify error is displayed as First name cannot contain special characters
#              And I enter invalid last name as %-&
#              And I verify error is displayed as Last name cannot contain special characters
#              And I enter a password as Password@23
#              And I verify "Keep me signed in" checkbox is displayed 
#              And I verify "Keep me signed in" checkbox is enabled
#              And I verify "Continue" button is displayed
#              And I verify "Continue" button is not enabled