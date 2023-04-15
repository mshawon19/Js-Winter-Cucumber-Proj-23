Feature: Adding guest
    Background:
     Given I am on hotels homepage

     Scenario: Verify user can update number of guests on Home page
        When I click on Travelers
             And I select “Adults" as 6
             And I select “Children” as 3
             And I select first child age: 4
             And I select second child age: Under 1
             And I select third child age: 7
             And I click Done
            Then I verify total number of Travelers is sum of adults and children as same as selected on step #3 and #4.