# steps/sarah_starter_journey_steps.py
from behave import given, when, then
from selenium.webdriver.common.by import By

@given("Sarah, at a novice fitness level, goes to {url}")
def step_given_sarah_novice(context, url):
    context.driver.get(url)

@when("she enters {email} as her email")
def step_when_enter_email(context, email):
    email_input = context.driver.find_element(By.NAME, "email")
    email_input.send_keys(email)

@when("she enters {password} as her password")
def step_when_enter_password(context, password):
    password_input = context.driver.find_element(By.NAME, "password")
    password_input.send_keys(password)

@when("presses the button with the text {button_text}")
def step_when_press_button(context, button_text):
    login_button = context.driver.find_element(By.XPATH, f"//button[text()='{button_text}']")
    print(login_button)
    login_button.click()

@then("she is redirected to a page where her email is shown somewhere")
def step_then_redirected_to_page(context):
    # Assuming the email is displayed somewhere on the page after a successful login
    #print(context.driver.page_source)
    assert "sarah@gmail.com" in context.driver.page_source
