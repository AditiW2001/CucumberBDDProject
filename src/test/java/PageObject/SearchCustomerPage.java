package PageObject;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchCustomerPage {

	public WebDriver ldriver;

	//constructor
	public SearchCustomerPage(WebDriver rdriver)
	{
		ldriver=rdriver;
		PageFactory.initElements(ldriver, this);
	}

	@FindBy(id = "SearchEmail")
	WebElement emailAdd;

	@FindBy(xpath ="//button[@id='search-customers']")
	WebElement searchBtn;

	@FindBy(xpath = "(//table[@class='table table-bordered table-hover table-striped dataTable no-footer'])[2]")
	WebElement searchResult;

	@FindBy(xpath ="(//table[@class='table table-bordered table-hover table-striped dataTable no-footer'])[2]//tbody/tr")
	List<WebElement> tableRows;

	@FindBy(xpath ="(//table[@class='table table-bordered table-hover table-striped dataTable no-footer'])[2]//tbody/tr[1]/td")
	List<WebElement> tableColumns;

	@FindBy(xpath = "//input[@id='SearchFirstName']")
	WebElement firstname;

	@FindBy(xpath = "//input[@id='SearchLastName']")
	WebElement lastname;

	//////action methods/////////////
	public void enterEmailAdd(String email) {
		emailAdd.sendKeys(email);
	}

	public void clickOnSearchBtn()
	{
		searchBtn.click();
	}

	public boolean searchCustomerByEmail(String expectedEmail)
	{
		boolean found = false;

		int tblrows = tableRows.size();

		//total no of columns
		// int tblcolumns = tableColumns.size();

		for (int i=1;i<=tblrows;i++)//to iterate all the rows of the grid
		{
			WebElement actualEmail = ldriver.findElement(By.xpath("(//table[@class='table table-bordered table-hover table-striped dataTable no-footer'])[2]//tbody/tr[" + i + "]/td[2]"));

			String actualEmailAdd = actualEmail.getText();

			if(actualEmailAdd.equals(expectedEmail))
			{
				found=true;
			}

		}
		return found;

	}
///////////////////////////////Search Customer By Name ////////////////////////
	//action method to enter first name 
	
	public void enterFirstName(String fname)
	{
		firstname.sendKeys(fname);
	}

	public void enterLastName(String lname)
	{
		lastname.sendKeys(lname);
	}
	

	public boolean searchCustomerByName(String name)
	{
		boolean found = false;

		int tblrows = tableRows.size();

		//total no of columns
		// int tblcolumns = tableColumns.size();

		for (int i=1;i<=tblrows;i++)//to iterate all the rows of the grid
		{
			WebElement expectedName = ldriver.findElement(By.xpath("(//table[@class='table table-bordered table-hover table-striped dataTable no-footer'])[2]//tbody/tr[" + i + "]/td[3]"));

			String actualName = expectedName.getText();

			if(actualName.equals(name))
			{
				found=true;
				break;
			}

		}
		return found;
	}
}


