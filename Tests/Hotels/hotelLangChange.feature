Feature: Language Change
    Background:
        Given I am on hotels homepage

        Scenario: Verify language can be changed successfully
            When I click on English language
            And I select Español Estados Unidos in Language dropdown
            And I click on Save button
            Then I verify Español is displayed
            When I click on Español language
            And I select English United States in Language dropdown
            And I click on Guardar button
            Then I verify English is displayed