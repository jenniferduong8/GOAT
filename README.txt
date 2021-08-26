GOAT


## Summary

This project we assmebled tested the main functionality of GOAT. It uses Jest as a test
runner, and Selenium Webdriver to hook into the browser.

## Setup

How to set Up the tests: 

1. clone it!
2. `npm i` to install all the dependecies  
3. `npm i -d selenium-webdriver` to install selenium webdriver 
4. `npm install chromedriver --chromedriver_version=LATEST` to install latest chrome driver as older version would fail the tests

## Running Tests

To conduct the test, use `npm jest [test name]` to initialize and run the selected test.  

## What Do We Test

For the purpose of this project, these were tested: 
- Valid footer links and linking to respective page 
- Sort By function on the 'Shop All' page 
- Timeline toggle button and clicking the year to access it 


## How Do We Test

We broke down the tests in different tabs as it would cause timeout errors if it is put together. 
All test are in different tabs but utilizes one base page to run the tests. 
Comments are provided for better clarification on which test it belongs to.  


## Data Files
Files we used for our project: 
GOAT Website: https://www.goat.com/