import {WebDriver,Builder,Capabilities,until,By} from "selenium-webdriver";
import { GOAT } from "./GOAT";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const gbp = new GOAT(driver);

  test("website footer on any given page works", async () => {
    //navigate to homepage 
    await gbp.navigate(URL)
    await new Promise(resolve => setTimeout(resolve, 1500));
    //Navigates to the cleaning process of GOAT 
    await gbp.click(gbp.goatClean)
    await new Promise(resolve => setTimeout(resolve, 2000));
    await gbp.click(gbp.cleanProcess)
    await new Promise(resolve => setTimeout(resolve, 2000));
    //Selects 'Selling on Goat' at the footer 
    await gbp.click(gbp.sellOngoat)
    await new Promise(resolve => setTimeout(resolve, 2000));
    await gbp.click(gbp.goatCareers)
    await new Promise(resolve => setTimeout(resolve, 5000));
  });  
 
  afterAll(async () => {
    await gbp.quit();
});