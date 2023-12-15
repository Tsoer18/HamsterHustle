# steps/jack_second_visit_steps.py
from behave import given, when, then
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

@given("Jack goes to {url}")
def step_given_jack_visits(context, url):
    context.driver.get(url)

@when("he enters {email} as his email")
def step_when_enter_email(context, email):
    email_input = context.driver.find_element(By.NAME, "email")
    email_input.send_keys(email)

@when("he enters {password} as his password")
def step_when_enter_password(context, password):
    password_input = context.driver.find_element(By.NAME, "password")
    password_input.send_keys(password)

@when("presses the Login button")
def step_when_press_login_button(context):
    login_button = context.driver.find_element(By.XPATH, "//button[text()='Login']")
    login_button.click()

@when("he presses the View / Edit Profile button")
def step_when_press_view_edit_profile_button(context):
    view_edit_profile_button = context.driver.find_element(By.XPATH, "//a[@class='profile-button']")
    view_edit_profile_button.click()


@when("he enters {value} as {field}")
def step_when_enter_value(context, value, field):
    input_field = context.driver.find_element(By.NAME, field)
    input_field.clear()
    input_field.send_keys(value)

@when("he selects {option} as fitnessLevel from the dropdown")
def step_when_select_option(context, option):
    dropdown_element = context.driver.find_element(By.ID, "fitnessLevel")
    option_element = dropdown_element.find_element(By.XPATH, f"//option[text()='{option}']")
    option_element.click()

@when("he selects {option} as fitnessGoals")
def step_when_select_fitness_goals(context, option):
    # Wait for checkboxes to be present
    checkbox_locator = (By.XPATH, f"//label[contains(text(), '{option}')]/input[@type='checkbox']")
    checkbox = WebDriverWait(context.driver, 2).until(EC.presence_of_element_located(checkbox_locator))

    # Check the checkbox if it is not already checked
    if not checkbox.is_selected():
        checkbox.click()

@when("he presses the Save Profile button")
def step_when_press_save_profile_button(context):
    save_profile_button = context.driver.find_element(By.XPATH, "//button[text()='Save Profile']")
    save_profile_button.click()

@then("he is redirected to {url}")
def step_then_redirected_to_url(context, url):
    print("con url: " + context.driver.current_url)
    print("url:" + url)
    assert context.driver.current_url == url

@then("he can see the updated information at {url}")
def step_then_see_updated_information(context, url):
    context.driver.get(url)
    # Add assertions or checks to verify that the updated information is displayed on the profile page
