Feature: Terms And Conditions
 Background:
     Given I am on hotels homepage

    Scenario: Verify error message for invalid data in SignUp form
        When I click on SignIn link
             And I click on SignUp link
             And I switch window handle to signup page
             And I click “Terms and Conditions” link
             And I switch window handle to Terms and Conditions page
             Then I verify “Terms and Conditions” page opens in new tab
             And I verify that the Last revised date is formatted as MM/dd/yy
             When I switch window handle back to signup page again
             And I click “Privacy Statement” link
             And I switch handle window handle to Privacy Statement page
             Then I verify “Privacy Statement” page opens in new tab
             And I verify “Last Updated“ formatted as dd MMMM, yyyy