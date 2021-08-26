import {WebDriver,Builder,Capabilities,until,By, Browser} from "selenium-webdriver";
import { GOAT } from "./GOAT";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const gbp = new GOAT(driver);


  test("menu tab is clickable", async () => {
    //navigate to homepage 
    await gbp.navigate(URL)
    await new Promise(resolve => setTimeout(resolve, 2000));
    await gbp.click(gbp.menuButton)
    await new Promise(resolve => setTimeout(resolve, 4000));
    //navigate to shop all 
    // await gbp.click(gbp.shopAll)
    // await new Promise(resolve => setTimeout(resolve, 2000));
});

afterAll(async () => {
  await gbp.quit();
});