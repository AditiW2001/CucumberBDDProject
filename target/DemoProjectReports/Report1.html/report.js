$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:FeatureFiles/Customer.feature");
formatter.feature({
  "name": "Customer",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Steps common for all scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_Launch_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_Opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_can_view_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add New Customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "user click on Customer Menu",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_click_on_Customer_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Customer submenu",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.click_on_Customer_submenu()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d120.0.6099.225)\nBuild info: version: \u00274.14.1\u0027, revision: \u002703f8ede370\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002721\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9003ef428bac10ea7024d55a270472d5, clickElement {id\u003dC9FA187D1386C9431A1DDA9B41473326_element_49}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 120.0.6099.225, chrome: {chromedriverVersion: 120.0.6099.109 (3419140ab66..., userDataDir: C:\\Users\\BADWA03\\AppData\\Lo...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63913}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63913/devtoo..., se:cdpVersion: 120.0.6099.225, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on windows (9003ef428bac10ea7024d55a270472d5)] -\u003e xpath: //a[contains(@href,\u0027/Admin/Customer/List\u0027)]//p[contains(text(),\u0027Customers\u0027)]]\nSession ID: 9003ef428bac10ea7024d55a270472d5\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:62)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:502)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:486)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:224)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:580)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy31.click(Unknown Source)\r\n\tat PageObject.AddNewCustomer.clickOnCustomer_SubMenu(AddNewCustomer.java:80)\r\n\tat StepDefinition.LoginStepDefs.click_on_Customer_submenu(LoginStepDefs.java:161)\r\n\tat ✽.click on Customer submenu(file:FeatureFiles/Customer.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on Add New button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.click_on_Add_New_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user can view Add New Customer Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_can_view_Add_New_Customer_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter customer info",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enter_customer_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.click_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user can view confirmation message \"The new customer has been added successfully.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_can_view_confirmation_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Steps common for all scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_Launch_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_Opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_can_view_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Customer By Email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user click on Customer Menu",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_click_on_Customer_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Customer submenu",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.click_on_Customer_submenu()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d120.0.6099.225)\nBuild info: version: \u00274.14.1\u0027, revision: \u002703f8ede370\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002721\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c4f07b61b14ac8ef60b8d673455eb61c, clickElement {id\u003dCAB53FDC7F903AC568CD495153089EFD_element_49}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 120.0.6099.225, chrome: {chromedriverVersion: 120.0.6099.109 (3419140ab66..., userDataDir: C:\\Users\\BADWA03\\AppData\\Lo...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63938}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63938/devtoo..., se:cdpVersion: 120.0.6099.225, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on windows (c4f07b61b14ac8ef60b8d673455eb61c)] -\u003e xpath: //a[contains(@href,\u0027/Admin/Customer/List\u0027)]//p[contains(text(),\u0027Customers\u0027)]]\nSession ID: c4f07b61b14ac8ef60b8d673455eb61c\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:62)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:502)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:486)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:224)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:580)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy31.click(Unknown Source)\r\n\tat PageObject.AddNewCustomer.clickOnCustomer_SubMenu(AddNewCustomer.java:80)\r\n\tat StepDefinition.LoginStepDefs.click_on_Customer_submenu(LoginStepDefs.java:161)\r\n\tat ✽.click on Customer submenu(file:FeatureFiles/Customer.feature:24)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters customer Email",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_enters_customer_Email()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on search button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should found Email in the search table",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_found_Email_in_the_search_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Steps common for all scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_Launch_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_Opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_can_view_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Customer By Name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user click on Customer Menu",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_click_on_Customer_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Customer submenu",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.click_on_Customer_submenu()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d120.0.6099.225)\nBuild info: version: \u00274.14.1\u0027, revision: \u002703f8ede370\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002721\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d0f05dd937cec1f9f48862c685c280dc, clickElement {id\u003d6AD1B278BA0E6D837BD9A0735865084E_element_46}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 120.0.6099.225, chrome: {chromedriverVersion: 120.0.6099.109 (3419140ab66..., userDataDir: C:\\Users\\BADWA03\\AppData\\Lo...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63962}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63962/devtoo..., se:cdpVersion: 120.0.6099.225, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on windows (d0f05dd937cec1f9f48862c685c280dc)] -\u003e xpath: //a[contains(@href,\u0027/Admin/Customer/List\u0027)]//p[contains(text(),\u0027Customers\u0027)]]\nSession ID: d0f05dd937cec1f9f48862c685c280dc\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:62)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:502)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:486)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:224)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:580)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy31.click(Unknown Source)\r\n\tat PageObject.AddNewCustomer.clickOnCustomer_SubMenu(AddNewCustomer.java:80)\r\n\tat StepDefinition.LoginStepDefs.click_on_Customer_submenu(LoginStepDefs.java:161)\r\n\tat ✽.click on Customer submenu(file:FeatureFiles/Customer.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters customer FirstName",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_enters_customer_FirstName()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters customer LastName",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_enters_customer_LastName()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on search button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should found Name in the search table",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_found_Name_in_the_search_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});