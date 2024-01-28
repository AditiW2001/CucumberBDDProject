package PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class AddNewCustomer {

	public WebDriver ldriver;
	
	//constructor
	public AddNewCustomer(WebDriver rdriver)
	{
		ldriver=rdriver;
		PageFactory.initElements(ldriver, this);
	}
	
	@FindBy(xpath = "//a[@href='#']//p[contains(text(),'Customers')]")
	WebElement Customers_menu;
	
	@FindBy(xpath = "//a[contains(@href,'/Admin/Customer/List')]//p[contains(text(),'Customers')]")
	WebElement Customers_submenu;
	
	@FindBy(xpath = "//a[normalize-space()='Add new']")
	WebElement AddNewBtn;
	
	@FindBy(id = "Email")
	WebElement CustEmailId;
	
	@FindBy(id = "Password")
	WebElement CustPassword;
	
	@FindBy(id = "FirstName")
	WebElement CustFirstName;
	
	@FindBy(id = "LastName")
	WebElement CustLastName;
	
	@FindBy(xpath = "//input[@id='Gender_Female']")
	WebElement CustGender;
	
	@FindBy(xpath = "//input[@id='DateOfBirth']")
	WebElement CustDOB;
	
	@FindBy(xpath = "//input[@id='Company']")
	WebElement CustCompany;
	
	//@FindBy(xpath = "//input[@id='IsTaxExempt']")
	//WebElement Tax;
	
	//@FindBy(xpath = "//div[@class='input-group-append']//div[@role='listbox']")
	//WebElement Newsletters;
	
	@FindBy(xpath = "//div[@class='input-group-append input-group-required']//div[@role='listbox']")
	WebElement Customeroles;
	
	@FindBy(xpath = "//select[@id='VendorId']")
	WebElement Vendor;
	
	@FindBy(xpath = "//button[@name='save']")
	WebElement SaveCustBtn;
	
	///////Action Methods ////////////
	
	public String getPageTitle()
	{
		return ldriver.getTitle();
	}
	
	public void clickOnCustomerMenu() throws InterruptedException
	{
		Customers_menu.click();
		Thread.sleep(5000);
	}
	
	public void clickOnCustomer_SubMenu()
	{
		Customers_submenu.click();
	}
	
	public void clickOnAddNewBtn()
	{
		AddNewBtn.click();
	}
	
	public void enterCustEmailId(String custemail)
	{
		CustEmailId.sendKeys(custemail);
	}
	
	public void enterCustPassword(String custpswd)
	{
		CustPassword.sendKeys(custpswd);
	}
	
	public void enterFirstName(String firstname)
	{
		CustFirstName.sendKeys(firstname);
	}
	
	public void enterLastName(String lastname)
	{
		CustLastName.sendKeys(lastname);
	}
	
	public void selectGender(String gender)
	{
		CustGender.sendKeys(gender);
	}
	
	public void enterDOB(String custdob)
	{
		CustDOB.sendKeys(custdob);
	}
	
	public void enterCompanyName(String compname)
	{
		CustCompany.sendKeys(compname);
	}

	public void enterCustomerRole(String custrole)
	{
		CustCompany.sendKeys(custrole);
	}
	
	public void enterVendor(String value)
	{
		Select drp = new Select(Vendor);
		drp.selectByVisibleText(value);
	}
	
	public void clickOnSaveBtn()
	{
		SaveCustBtn.click();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
