Feature: List your Property
    Background:
        Given I am on hotels homepage

    Scenario: Verify "List your Property" flow
        When I click on List your property
        And I switch window to Property Info
        Then I verify What would you like to list is displayed
        And I verify Lodging option is displayed
        And I verify Private residence option is displayed
        When I click on Private residence
        Then I verify Step 1 of 3 is displayed
        And I erify See how much you could earn is displayed
        When I enter 4 as bedroom
        And I enter 2.5 as bathroom
        And I click on Next button
        Then I verify Step 2 of 3 is displayed
        And I verify Where is your property located is displayed
        When I enter 121 in address box
        And I select 1211 6th Avenue, New York, NY, USA from auto-suggestion
        Then I verify graph is displayed
        And I verify pin in graph is displayed
        And I verify Move the pin to adjust the location of your property is displayed below graph

        