# features/jack_squat_tracking.feature

Feature: Squat Tracking

  Scenario: Jack’s Squat Tracking
    Given Jack goes to http://hh.jonaskaad.com/login
    When he inputs jack@gmail.com as his email
    And he inputs 1234 as his password
    And clicks the button with the text Login
    When he presses Track Your Progress
    And selects Max Squat in the Category dropdown
    And enters 100 in the New Value input
    And presses Save Progress
    Then there should be a chart with the title Max Squat
    And the charts newest value should be 100 for the current date.