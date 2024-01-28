Feature: Customer

Background: Steps common for all scenarios
Given User Launch Chrome Browser
When User Opens URL "https://admin-demo.nopcommerce.com/login"
And User enters Email as "admin@yourstore.com" and Password as "admin"
And User clicks on Login
Then user can view Dashboard

@sanity
Scenario: Add New Customer
When user click on Customer Menu
And click on Customer submenu
And click on Add New button
Then user can view Add New Customer Page
When user enter customer info
And click on Save button
Then user can view confirmation message "The new customer has been added successfully."
And close the browser

@regression
Scenario: Search Customer By Email
When user click on Customer Menu
And click on Customer submenu
And user enters customer Email
When user clicks on search button
Then user should found Email in the search table
And close the browser

@regression
Scenario: Search Customer By Name
When user click on Customer Menu
And click on Customer submenu
And user enters customer FirstName
And user enters customer LastName
When user clicks on search button
Then user should found Name in the search table
And close the browser


