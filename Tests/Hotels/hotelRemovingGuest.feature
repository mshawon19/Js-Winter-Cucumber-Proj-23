Feature: Removing Guest
        Background:
            Given I am on hotels homepage

     Scenario: Verify user can update number of guests on Home page
        When I click on Travelers
            And I select “Children” as 2
            Then I verify Children-age dropdown are 2
            And I verify Plus-button is enabled
            And I verify minus-button is enabled
            When I select “Children” as 6
            Then I verify Children-age dropdown are 6
            And I verify Plus button is disabled
            And I verify minus button is enabled
            When I select “Children” as 5
            Then I verify Children-age dropdown are 5
            And I verify Plus button is enabled
            And I verify Minus Button is enabled
            When I select “Children” as 0
            Then I verify Children-age dropdown is NOT displayed
            And I verify plus Button is enabled
            And I verify Minus button is disabled







