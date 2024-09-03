*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${urlHome}    http://127.0.0.1:5500/
${BROWSER}    chrome

*** Keywords ***
Open browser to YumFoods
    Open Browser    ${urlHome}    ${BROWSER}
    Maximize Browser Window
    