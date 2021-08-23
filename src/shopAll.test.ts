import {WebDriver,Builder,Capabilities,until,By, Browser} from "selenium-webdriver";
import { GOAT } from "./GOAT";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const gbp = new GOAT(driver);


  test("Shop all 'Sort By' button", async () => {
    //navigate to homepage 
    await gbp.navigate(URL)
    await new Promise(resolve => setTimeout(resolve, 1500));
    //Navigate to 'Shop All' page 
    await gbp.click(gbp.shopAll)
    await new Promise(resolve => setTimeout(resolve, 1500));
    //Locaye and click drop down on shop all page 
    await gbp.click(gbp.shopAlldropDown)
    await new Promise(resolve => setTimeout(resolve, 1500));
    //Filter for only new items
    await gbp.click(gbp.dropDownnew)
    await new Promise(resolve => setTimeout(resolve, 1500));
    //Filter for only upcoming items 
    await gbp.click(gbp.shopAlldropDown)
    await new Promise(resolve => setTimeout(resolve, 1500));
    await gbp.click(gbp.dropDownupcoming)
    await new Promise(resolve => setTimeout(resolve, 1500));
     //Filter for Price from low to high  
    await gbp.click(gbp.shopAlldropDown)
    await new Promise(resolve => setTimeout(resolve, 1500));
    await gbp.click(gbp.lowHighprice)
    await new Promise(resolve => setTimeout(resolve, 1500));
    //Filter for Price from high to low 
    await gbp.click(gbp.shopAlldropDown)
    await new Promise(resolve => setTimeout(resolve, 1500));
    await gbp.click(gbp.highLowprice)
    await new Promise(resolve => setTimeout(resolve, 1500));
    //Filter for popular items
    await gbp.click(gbp.shopAlldropDown)
    await new Promise(resolve => setTimeout(resolve, 1500));
    await gbp.click(gbp.dropDownpopular)
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Sneaker Filter
    await gbp.click(gbp.sneakerFilter)
    await new Promise(resolve => setTimeout(resolve, 1500));
});

afterAll(async () => {
  await gbp.quit();
});