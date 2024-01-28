package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		//features = ".//FeatureFiles/Login(1).feature",
		features = ".//FeatureFiles/Customer.feature",
		//features = {".//FeatureFiles/Customer.feature",".//FeatureFiles/Login(1).feature"},
		//features = {".//FeatureFiles/Customer.feature",".//FeatureFiles/Login(1).feature"},--> to run multiple feature files
	    //features = ".//FeatureFiles/",
		glue = "StepDefinition",
		dryRun = false,
		monochrome = true,
		//tags = "@Sanity", //scenarios under @sanity tag will be executed
        plugin = {"pretty","html:target/DemoProjectReports/Report1.html"}
		//plugin = {"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"}
		)

//plugin = {"pretty","html:target/DemoProjectReports/Report1.html"}
//plugin = {"pretty","json:target/DemoProjectReports/Report_json.json"}

public class Run {

}
