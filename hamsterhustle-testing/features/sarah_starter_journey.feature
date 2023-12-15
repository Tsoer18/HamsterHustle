# features/sarah_starter_journey.feature

Feature: User Login and Redirection

  Scenario: Sarah's Login and Redirection
    Given Sarah, at a novice fitness level, goes to http://hh.jonaskaad.com/login
    When she enters sarah@gmail.com as her email
    And she enters UGun$Zp@4nK$zWHX!n4V3bskP7!EC93UPctak*kdzGT4vhtv^#gbJ3x3PVXu as her password
    And presses the button with the text Login
    Then she is redirected to a page where her email is shown somewhere
