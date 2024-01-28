package StepDefinition;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
import org.apache.logging.log4j.LogManager;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import PageObject.AddNewCustomer;
import PageObject.DemoLoginPage;
import PageObject.SearchCustomerPage;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.AfterStep;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
/*Child class of Base Class*/
public class LoginStepDefs extends BaseClass{

    
	
	@Given("User Launch Chrome Browser")
	public void user_Launch_Chrome_Browser() throws IOException {
		
		readConfig = new Properties();
		FileInputStream file = new FileInputStream("Config.properties");
		readConfig.load(file);
		
		log = LogManager.getLogger("LoginStepDefs");
		
	String browser = readConfig.getProperty("browser");
	
	//launch browser
	switch(browser.toLowerCase())
	{
	case "chrome":
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		break;
		
	case "msedge":
		WebDriverManager.edgedriver().setup();
		driver = new EdgeDriver();
		driver.manage().window().maximize();
		break;
		
	case "firefox":
	    WebDriverManager.firefoxdriver().setup();
	    driver = new FirefoxDriver();
	    driver.manage().window().maximize();
	    break;
	    default:
		driver = null;
		break;
	}
	
	//WebDriverManager.chromedriver().setup();
	//driver = new ChromeDriver();
	//driver.manage().window().maximize();
	log.info("Setup1 executed........");
	
	dloginpg = new DemoLoginPage(driver);
	addNewCust = new AddNewCustomer(driver);
    searchCustPg = new SearchCustomerPage(driver);
	log.info("user launched chrome browser");
	}
	

	@When("User Opens URL {string}")
	public void user_Opens_URL(String url) {
	    driver.get(url);
	    log.info("URL Opened");
	}

	@When("User enters Email as {string} and Password as {string}")
	public void user_enters_Email_as_and_Password_as(String emailAdd, String pwd) {
	    dloginpg.enterEmailId(emailAdd);
	    dloginpg.enterpassword(pwd);
	    log.info("Email address and password entered");
	}

	@When("User clicks on Login")
	public void user_clicks_on_Login() {
	    dloginpg.clickOnLoginBtn();
	    log.info("Login button clicked");
	}

	@When("Page Title should be {string}")
	public void page_Title_should_be(String expectedTitle) {
	    String actualTitle = driver.getTitle();
	    
	    if(actualTitle.equals(expectedTitle)) {
	    	Assert.assertTrue(true);
	    	log.warn("Page Title Matched");
	    }
	    else
	    {
	    	Assert.assertTrue(false);
	    	log.warn("Page Title Not Matched");
	    }
	}

	@When("User Click on Logout Link")
	public void user_Click_on_Logout_Link() throws InterruptedException {
	   Thread.sleep(3000);
		dloginpg.clickOnLogoutBtn();
		log.info("User clicked on Logout link");
	}


	@Then("close the browser")
	public void close_the_browser() {
	   //driver.close();
	   log.info("Browser Closed");
	   //driver.quit();
	   
	}

	//////////////////////////////////ADD NEW CUSTOMERS //////////////////////////////////////////
	
	

	@Then("user can view Dashboard")
	public void user_can_view_Dashboard() 
	{
	    String actualTitle = addNewCust.getPageTitle();
	    String expectedTitle = "Dashboard / nopCommerce administration";
	    
	    if(actualTitle.equals(expectedTitle))
	    {
	    	Assert.assertTrue(true);
	    }
	    else
	    {
	    	Assert.assertFalse(false);
	    }
	}

	@When("user click on Customer Menu")
	public void user_click_on_Customer_Menu() throws InterruptedException 
	{
	    addNewCust.clickOnCustomerMenu();
	}

	@When("click on Customer submenu")
	public void click_on_Customer_submenu() 
	{
	    addNewCust.clickOnCustomer_SubMenu();
	}

	@When("click on Add New button")
	public void click_on_Add_New_button() 
	{
	    addNewCust.clickOnAddNewBtn();
	}

	@Then("user can view Add New Customer Page")
	public void user_can_view_Add_New_Customer_Page() {
	    String actualTitle = addNewCust.getPageTitle();
	    String expectedTitle = "Add a new customer / nopCommerce administration";
	    
	    if(actualTitle.equals(expectedTitle))
	    {
	    	Assert.assertTrue(true);
	    }
	    else
	    {
	    	Assert.assertFalse(false);
	    }
	}

	@When("user enter customer info")
	public void user_enter_customer_info() 
	{
	   //addNewCust.enterCustEmailId("test15@gmail.com");
	   addNewCust.enterCustEmailId(generateEmailId() + "@gmail.com");
	   addNewCust.enterCustPassword("test2");
	   addNewCust.enterFirstName("Aditi");
	   addNewCust.enterLastName("W");
	   addNewCust.selectGender("Female");
	   addNewCust.enterDOB("12/3/2023");
	   addNewCust.enterCompanyName("Demo");
	   addNewCust.enterCustomerRole("Guests");
	   addNewCust.enterVendor("Not a vendor");
	}

	@When("click on Save button")
	public void click_on_Save_button() 
	{
	    addNewCust.clickOnSaveBtn();
	}

	@Then("user can view confirmation message {string}")
	public void user_can_view_confirmation_message(String expectedMessage) 
	{
	    String bodyTagString = driver.findElement(By.tagName("Body")).getText();
	    if(bodyTagString.contains(expectedMessage))
	    {
	    	Assert.assertTrue(true);
	    }
	    else
	    {
	    	Assert.assertFalse(false);
	    }
	}
	
	
	///////SEARCH CUSTOMER //////////////
	
	@When("user enters customer Email")
	public void user_enters_customer_Email() 
	{
	    searchCustPg.enterEmailAdd("victoria_victoria@nopCommerce.com");
	}

	@When("user clicks on search button")
	public void user_clicks_on_search_button() throws InterruptedException 
	{
	    searchCustPg.clickOnSearchBtn();
	    Thread.sleep(3000);
	}

	@Then("user should found Email in the search table")
	public void user_should_found_Email_in_the_search_table() 
	{
	    String expectedEmail = "victoria_victoria@nopCommerce.com";
	    
	    if(searchCustPg.searchCustomerByEmail(expectedEmail) == true)
	    {
	    	Assert.assertTrue(true);
	    }
	    else
	    {
	    	Assert.assertFalse(false);
	    }
	    
	}
	
	////////////////////// Search Customer By Name///////////////////
	@When("user enters customer FirstName")
	public void user_enters_customer_FirstName() 
	{
	    searchCustPg.enterFirstName("Victoria");
	}

	@When("user enters customer LastName")
	public void user_enters_customer_LastName() 
	{
	    searchCustPg.enterLastName("Terces");
	}

	@Then("user should found Name in the search table")
	public void user_should_found_Name_in_the_search_table() 
	{
String expectedName = "Victoria Terces";
	    
	    if(searchCustPg.searchCustomerByName(expectedName) == true)
	    {
	    	Assert.assertTrue(true);
	    }
	    else
	    {
	    	Assert.assertFalse(false);
	    }  
	}
	
	@After
	public void teardown(Scenario sc) throws IOException
    {
    	System.out.println("Tear Down method executed");
    	if(sc.isFailed()==true) 
    	{
    		//convert web driver object to Takescreenshot
    		
    		String fileWithPath = "C:\\Users\\BADWA03\\eclipse-workspace\\MyDemoProjects\\Screenshot\\sc1.png";
    		TakesScreenshot srchShot = ((TakesScreenshot)driver);
    		
    	    //Call getscreenshotAs method to create image file
    		File SrcFile=srchShot.getScreenshotAs(OutputType.FILE);
    		
    	    //Move image file to new destination
    		File DestFile=new File(fileWithPath);
    		
    	    //copy file at destination
    	    FileUtils.copyFile(SrcFile, DestFile);
    		
    		
    	}
    	driver.quit();
    }
	
	//@AfterStep
	//public void addScreenshot(Scenario scenario) {
		
		//final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
		//attach image file report(data, media type, name of the attachment)
		//scenario.attach(screenshot, "imag/png", scenario.getName());
	//}

}
