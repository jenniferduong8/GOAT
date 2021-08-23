import {WebDriver,Builder,Capabilities,until,By} from "selenium-webdriver";
import { GOAT } from "./GOAT";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const gbp = new GOAT(driver);

  test("timeline year toggle and click year", async () => {
    //navigate to homepage 
    await gbp.navigate(URL)
    await new Promise(resolve => setTimeout(resolve, 1500));
    //locate the 'Timeline' and click it 
    await gbp.click(gbp.timeLinepage);
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Click the navigation right arrow on timeline
    await gbp.click(gbp.timelineNaviright);
    await new Promise(resolve => setTimeout(resolve, 2000));
    // Click the navigation left arrow on timeline
    await gbp.click(gbp.timelineNavileft);
    await new Promise(resolve => setTimeout(resolve, 2000));
    //Locate a year on timeline after navigating to the right 
    await gbp.click(gbp.timelineNaviright);
    await new Promise(resolve => setTimeout(resolve, 2000));
    await gbp.click(gbp.year2008);
    await new Promise(resolve => setTimeout(resolve, 2000));
    //Locate a year on timeline after navigating to the left 
    await gbp.click(gbp.timelineNavileft);
    await new Promise(resolve => setTimeout(resolve, 2000));
    await gbp.click(gbp.year2019);
    await new Promise(resolve => setTimeout(resolve, 2000));  
  });  
 
  afterAll(async () => {
    await gbp.quit();
});
