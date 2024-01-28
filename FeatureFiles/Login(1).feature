Feature: Login

@sanity @regression
Scenario: Successful Login into Ecommerce Website

Given User Launch Chrome Browser
When User Opens URL "https://admin-demo.nopcommerce.com/login"
And User enters Email as "admin@yourstore.com" and Password as "admin"
And User clicks on Login
When Page Title should be "Dashboard / nopCommerce administration"
When User Click on Logout Link
Then Page Title should be "Your store. Login"
And close the browser

@regression
Scenario Outline: Successful Login into Ecommerce Website DDT

Given User Launch Chrome Browser
When User Opens URL "https://admin-demo.nopcommerce.com/login"
And User enters Email as "<email>" and Password as "<password>"
And User clicks on Login
When Page Title should be "Dashboard / nopCommerce administration"
When User Click on Logout Link
Then Page Title should be "Your store. Login"
And close the browser

Examples: 
|email|password|
|admin@yourstore.com|admin|
|test@yourstore.com|admin|










