Feature: Feedback
    Background:
        Given I am on hotels homepage

    Scenario: Verify error is displayed when user submits the empty feedback form
        When I click on SignIn link
            And I click “Feedback”
            And I switch window handle to feedback page
            And I select any star-rating
            And I enter any comments
            And I select any option for How likely are you to return to Hotels.com
            And I select any answer for Prior to this visit, have you ever booked on Hotels.com
            And I select any answer for Did you accomplish what you wanted to do on this page
            And I click on Submit button
            Then I verify THANK YOU FOR YOUR FEEDBACK. is displayed
