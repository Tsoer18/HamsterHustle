# features/jack_second_visit.feature

Feature: User Profile Update

  Scenario: Jack's Second Visit
    Given Jack goes to http://hh.jonaskaad.com/login
    When he enters jack@gmail.com as his email
    And he enters 1234 as his password
    And presses the button with the text Login
    When he presses the View / Edit Profile button
    And he enters None as gender
    And he enters 52 as age
    And he selects Intermediate as fitnessLevel from the dropdown
    And he selects Lose Weight as fitnessGoals
    And he presses the Save Profile button
    Then he is redirected to http://hh.jonaskaad.com/
    And he can see the updated information at http://hh.jonaskaad.com/profile
