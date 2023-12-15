# steps/ben_first_visit_steps.py
from behave import given, when, then
from selenium.webdriver.common.by import By

@given("Ben goes to {url}")
def step_given_ben_visits(context, url):
    context.driver.get(url)

@when("he provides his email as {email}")
def step_when_provide_email(context, email):
    email_input = context.driver.find_element(By.NAME, "email")
    email_input.send_keys(email)

@when("he sets his password as {password}")
def step_when_set_password(context, password):
    password_input = context.driver.find_element(By.NAME, "password")
    password_input.send_keys(password)

@when("he clicks the Register button")
def step_when_click_register(context):
    register_button = context.driver.find_element(By.XPATH, "//button[text()='Register']")
    register_button.click()

@then("he is redirected to a page where his email is displayed")
def step_then_redirected_to_page(context):
    # Assuming the email is displayed somewhere on the page after a successful registration
    assert "ben@gmail.com" in context.driver.page_source
