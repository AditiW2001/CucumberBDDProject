package PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DemoLoginPage {

WebDriver ldriver;
	
	public DemoLoginPage(WebDriver rDriver)

	{
		ldriver = rDriver;
		
		PageFactory.initElements(rDriver, this);
	}
	
	@FindBy(id = "Email")
	WebElement email;
	
	
    @FindBy(id = "Password")
    WebElement password;
    
    @FindBy(xpath = "//button[@class='button-1 login-button']")
    WebElement LoginBtn;
    
    @FindBy(xpath = "//a[normalize-space()='Logout']")
    WebElement logout;
    
    public void enterEmailId(String emailAdd)
    {
    	email.clear();
    	email.sendKeys(emailAdd);
    }
    
    public void enterpassword(String pwd)
    {
    	password.clear();
    	password.sendKeys(pwd);
    }
    
    public void clickOnLoginBtn()
    {
    	LoginBtn.click();
    	
    }
    
    public void clickOnLogoutBtn()
    {
    	logout.click();
    	
    }
}
