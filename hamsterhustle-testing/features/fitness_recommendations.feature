# features/fitness_recommendations.feature

Feature: Fitness Recommendations

  Scenario: Jack's Fitness Recommendations
    Given Jack goes to http://hh.jonaskaad.com/login
    When he enters jack@gmail.com as his email
    And he enters 1234 as his password
    And presses the button with the text Login
    When he presses Fitness Recommendations
    Then there should be a card with text Intermediate: Losing Weight
    And there should be a button called View Details
