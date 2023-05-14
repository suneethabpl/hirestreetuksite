Feature: Hirestreetuk apllication

    test Hirestreetuk application

    Background:
        Given a User is checking out
        And the User has items in their cart

    Scenario: Applying valid discount code
        When the customer applies a valid discount code '2FOR35'
        Then the order total should be updated with the discounted price '£47.00'
        And the discount amount should be displayed '-£19.00'

    Scenario: Applying invalid discount code
        When the User applies an invalid discount code '2FOR37'
        Then the User should see an error message indicating that 'Oops. Invalid discount code "2FOR37"'