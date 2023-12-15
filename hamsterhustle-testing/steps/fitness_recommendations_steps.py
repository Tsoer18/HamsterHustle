# steps/fitness_recommendations_steps.py
from behave import given, when, then
from selenium.webdriver.common.by import By


@when("he presses Fitness Recommendations")
def step_when_press_fitness_recommendations(context):
    fitness_recommendations_button = context.driver.find_element(By.XPATH, "//a[@class='cta-button recommendations-button']")
    fitness_recommendations_button.click()

@then("there should be a card with text {card_text}")
def step_then_check_card_text(context, card_text):
    card_element = context.driver.find_element(By.XPATH, f"//*[contains(text(), '{card_text}')]")
    assert card_element.is_displayed()

@then("there should be a button called {button_name}")
def step_then_check_button(context, button_name):
    button_element = context.driver.find_element(By.XPATH, f"//a[text()='{button_name}']")
    assert button_element.is_displayed()
