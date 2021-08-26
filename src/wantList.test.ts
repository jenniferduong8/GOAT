import {WebDriver,Builder,Capabilities,until,By, Browser} from "selenium-webdriver";
import { GOAT } from "./GOAT";

const chromedriver = require("chromedriver");
const puppeteer = require('puppeteer');

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const gbp = new GOAT(driver);

  test("add item to want list", async () => {
    //navigate to homepage 
    await gbp.navigate(URL)
    await new Promise(resolve => setTimeout(resolve, 1500));
    //click "Shop All" on the page 
    await gbp.click(gbp.shopAll)
    await new Promise(resolve => setTimeout(resolve, 1500));
    await gbp.navigate('https://www.goat.com/sneakers/fragment-design-x-travis-scott-x-air-jordan-1-retro-low-dm7866-140')

  });

  afterAll(async () => {
    await gbp.quit();
});