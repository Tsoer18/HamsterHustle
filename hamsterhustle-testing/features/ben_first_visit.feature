# features/ben_first_visit.feature

Feature: User Registration and Redirection

  Scenario: Ben's First Visit
    Given Ben goes to http://hh.jonaskaad.com/register
    When he provides his email as ben@gmail.com
    And he sets his password as passwd
    And he clicks the Register button
    Then he is redirected to a page where his email is displayed
