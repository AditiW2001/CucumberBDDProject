package StepDefinition;

import java.util.Properties;

import org.apache.commons.lang.RandomStringUtils;
import org.apache.logging.log4j.*;
import org.openqa.selenium.WebDriver;

import PageObject.AddNewCustomer;
import PageObject.DemoLoginPage;
import PageObject.SearchCustomerPage;

/*Parent Class*/
public class BaseClass {
	public WebDriver driver;
	public DemoLoginPage dloginpg;
	public AddNewCustomer addNewCust;
	public SearchCustomerPage searchCustPg;
    public static Logger log;
    public Properties readConfig;
	
//////To generate unique random email id/////////////////
	public String generateEmailId() 
	{
		return(RandomStringUtils.randomAlphabetic(5));
	}
}
