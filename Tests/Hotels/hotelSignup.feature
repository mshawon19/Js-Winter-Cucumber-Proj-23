Feature: Sign up
    Background:
        Given I am on hotels homepage

    Scenario: Verify error message for invalid data in SignUp form
        When I click on SignIn link
             And I click on SignUp link
             And I switch window handle to signup page
             And I enter invalid emailAddress with as x!@###
             Then I verify error is displayed Enter a valid Email.
             When I enter invalid firstName as !@
             Then I verify error is displayed as First name cannot contain special characters
             When I enter invalid last name as %-&
             Then I verify error is displayed as Last name cannot contain special characters
             When I enter a password as Password@23
             Then I verify "Keep me signed in" checkbox is displayed 
             And I verify "Keep me signed in" checkbox is enabled
             And I verify "Continue" button is displayed
             And I verify "Continue" button is not enabled