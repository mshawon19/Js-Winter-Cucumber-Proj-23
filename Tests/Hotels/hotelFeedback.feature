Feature: Feedback
    Background:
        Given I am on hotels homepage

    Scenario: Verify error is displayed when user submits the empty feedback form
        When I click on SignIn link
            And I click “Feedback”
             And I switch window handle to feedback page
             And I click on Submit button
             Then I verify error message is displayed Please fill in the required information highlighted below.
             And I verify red-dotted line is displayed around star-section.