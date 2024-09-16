*** Settings ***
Documentation    A testsuite for YumFoods webpage
Library    SeleniumLibrary
Suite Setup    Open browser to YumFoods
Resource    Carmen.resource
Suite Teardown    Close Browser


*** Test Cases ***
Food categories 
    [Documentation]     Verify that foods are shown in different categories 
    [Tags]

Search bar
    [Documentation]    Verify that search bar is functional in homepage
    [Tags]    

Nav bar
    [Documentation]    Testing nav bar button and links in homepage
    [Tags]  

Fotter
    [Documentation]    Testing fotter in homepage
    [Tags]

Q&A 
    [Documentation]    Verify that the Q&A function exists
    [Tags]