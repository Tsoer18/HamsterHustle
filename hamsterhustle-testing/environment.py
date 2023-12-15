# # environment.py
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from cleanup import cleanup_database

chrome_options = Options() 
chrome_options.add_experimental_option("detach", True) 
def before_all(context):
    #context.driver = webdriver.Chrome(options=chrome_options)
    context.driver = webdriver.Chrome()

def after_all(context):
    context.driver.quit()
    # nuke ben
    cleanup_database()