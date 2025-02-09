Feature: As a user, I can log into the secure area
 
    Scenario Outline: As a user, I can log into the secure area
        Given User is located on the main page of saucedemo website
        When User click “Login” button with <username> and <password>
        Then User see a flash message saying <message>
         
            Examples:
                | username | password             | message                            |
                |          | SuperSecretPassword! | Epic sadface: Username is required |
