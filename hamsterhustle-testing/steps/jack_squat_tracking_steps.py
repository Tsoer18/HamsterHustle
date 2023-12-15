# steps/jack_squat_tracking_steps.py
from behave import given, when, then
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

@given("Jack is on the login page")
def step_given_jack_is_on_login_page(context):
    context.driver.get("http://hh.jonaskaad.com/login")

@when("he inputs {email} as his email")
def step_when_input_email(context, email):
    email_input = context.driver.find_element(By.NAME, "email")
    email_input.send_keys(email)

@when("he inputs {password} as his password")
def step_when_enter_password(context, password):
    password_input = context.driver.find_element(By.NAME, "password")
    password_input.send_keys(password)

@when("clicks the button with the text Login")
def step_when_press_login_button(context):
    context.driver.find_element(By.XPATH, "//button[text()='Login']").click()

@when("he presses Track Your Progress")
def step_when_press_track_progress(context):
    progress_button = context.driver.find_element(By.XPATH, "//a[@class='cta-button progress-button']")
    progress_button.click()

@when("selects {category} in the Category dropdown")
def step_when_select_option(context, category):
    dropdown_element = context.driver.find_element(By.ID, "category")
    option_element = dropdown_element.find_element(By.XPATH, f"//option[text()='{category}']")
    option_element.click()


@when("enters {value} in the New Value input")
def step_when_enter_new_value(context, value):
    new_value_input = context.driver.find_element(By.ID, "newValue")
    new_value_input.clear()
    new_value_input.send_keys(value)

@when("presses Save Progress")
def step_when_press_save_progress(context):
    context.driver.find_element(By.XPATH, "//button[text()='Save Progress']").click()

@then("there should be a chart with the title {chart_title}")
def step_then_check_chart_title(context, chart_title):
    chart_title_element = context.driver.find_element(By.XPATH, f"//h2[text()='{chart_title}']")
    assert chart_title_element.is_displayed()

@then("the charts newest value should be {value} for the current date.")
def step_then_check_chart_newest_value(context, value):
    chart_canvas = context.driver.find_element(By.ID, "Max_SquatChart")
    chart_values = context.driver.execute_script("return Max_SquatData.datasets[0].data[Max_SquatData.datasets[0].data.length-1]", chart_canvas)

    # Compare the extracted value with the expected value
    assert str(chart_values) == value, f"Expected: {value}, Actual: {chart_values}"
