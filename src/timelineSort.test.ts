import {WebDriver,Builder,Capabilities,until,By} from "selenium-webdriver";
import { GOAT } from "./GOAT";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const gbp = new GOAT(driver);

// describe("timeline toggle", async () => {
//   beforeEach(async () => {
//   //Click the Style tab at the top of the page 
//   await gbp.navigate('https://www.goat.com/');
//   }) 
// });

  test("sort timeline", async () => {
    //navigate to homepage 
    await gbp.navigate(URL)
    await new Promise(resolve => setTimeout(resolve, 1500));
    //locate the 'Timeline' and click it 
    await gbp.click(gbp.timeLinepage);
    await new Promise(resolve => setTimeout(resolve, 1500));
    //locate 'Sort By' dropdown box
    await gbp.click(gbp.timelineDropdown);
    await new Promise(resolve => setTimeout(resolve, 1500));
    //Sort by new items
    await gbp.click(gbp.dropDownnew);
    await new Promise(resolve => setTimeout(resolve, 1500));
    // locate drop down to select a new filter 
    await gbp.click(gbp.timelineDropdown);
    await new Promise(resolve => setTimeout(resolve, 1500));
    //Sort by upcoming items 
    await gbp.click(gbp.dropDownupcoming);
    await new Promise(resolve => setTimeout(resolve, 1500));
    //Drop down to resort 
    await gbp.click(gbp.timelineDropdown);
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Sort by popular 
    await gbp.click(gbp.dropDownpopular);
    await new Promise(resolve => setTimeout(resolve, 1500));
  });
  afterAll(async () => {
    await gbp.quit();
});
