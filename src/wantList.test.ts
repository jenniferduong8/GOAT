import {WebDriver,Builder,Capabilities,until,By, Browser} from "selenium-webdriver";
import { GOAT } from "./GOAT";

const chromedriver = require("chromedriver");
const puppeteer = require('puppeteer');

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const gbp = new GOAT(driver);

  test("add item to want list", async () => {
    // const broswer = await puppeteer.launch({headless:false, defaultViewport: null})
    // const page = await broswer.newPage()
    // await page.goto('https://www.goat.com/')
    //     const result = await page.evaluate()
    //navigate to homepage 
    await gbp.navigate(URL)
    await new Promise(resolve => setTimeout(resolve, 1500));
    //click "Shop All" on the page 
    await gbp.click(gbp.shopAll)
    await new Promise(resolve => setTimeout(resolve, 1500));
    await gbp.navigate('https://www.goat.com/sneakers/fragment-design-x-travis-scott-x-air-jordan-1-retro-low-dm7866-140')
    
    //filter for apparel to display all apparel 
    // await gbp.click(gbp.filterApparel)
    // await new Promise(resolve => setTimeout(resolve, 1500));
    //Narrow search to display bottoms only
    // await gbp.click(gbp.filterBottoms)
    // await new Promise(resolve => setTimeout(resolve, 1500));
  });

  afterAll(async () => {
    await gbp.quit();
});