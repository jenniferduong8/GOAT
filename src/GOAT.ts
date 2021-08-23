// import { url } from "inspector";
import {WebDriver,Builder,Capabilities,until,By} from "selenium-webdriver"
import { isBinaryExpression } from "typescript";


export class GOAT {
  driver: WebDriver;
  url: string = "https://www.goat.com/";
  
//SELECTORS FOR TIMELINE PAGE 
//Timeline page locator 
timeLinepage: By = By.xpath("//a[contains(@data-qa, 'header_timeline')]")

//First Image from Timeline
timelineDropdown: By = By.xpath(("//div[contains(@class,'DropdownMenu__Title-sc-1rl8itc-4 DropdownMenu__Selection-sc-1rl8itc-5 iRNvC')]"))

//Drop down button to sort for new item 
dropDownnew: By = By.xpath("//button[contains(@class,'DropdownMenu__DropdownListItemButton-sc-1rl8itc-7 KqQSV')]")

//Drop down button to sort for upcoming item 
dropDownupcoming: By = By.xpath("//button[contains(@data-qa, 'upcoming')]")

//Drop down button to sort for upcoming item 
dropDownpopular: By = By.xpath("//button[contains(@data-qa, 'popular')]")

//timeline navigation button (right)
timelineNaviright: By = By.xpath("//button[contains(@direction, 'right')]")

//timeline navigation button (left)
timelineNavileft: By = By.xpath("//button[contains(@direction, 'left')]")

//Year 2006 on the timeline
year2006: By = By.xpath("//a[contains(@href, '/timeline/2006')]")

//Year 2008 on the timeline
year2008: By = By.xpath("//a[contains(@href, '/timeline/2008')]")

//Year 2019 on the timeline
year2019: By = By.xpath("//a[contains(@href, '/timeline/2019')]")

//Year 2017 on the timeline
year2017: By = By.xpath("//a[contains(@href, '/timeline/2017')]")

//SHOP ALL SELECTORS
//To select "Shop All" on the homepage 
shopAll: By = By.xpath("//a[contains(@data-qa, 'header_shop_all')]")

//Drop down for Shop all
shopAlldropDown: By = By.xpath("//div[contains(@class,'DropdownMenu__Title-sc-1rl8itc-4 DropdownMenu__Selection-sc-1rl8itc-5 iRNvC')]")

//Price filter from low to high
lowHighprice: By = By.xpath("//button[contains(@data-qa, 'price (low-high)')]")

//Price filter from high to low
highLowprice: By = By.xpath("//button[contains(@data-qa, 'price (high-low)')]")

//Filters for sneakers 
sneakerFilter: By = By.xpath("//label[contains(@for, 'Show-Filter')]")

//MENU TOGGLE SELECTORS 
//Locate the menu button 
menuButton: By = By.xpath("//div[contains(@class, 'Nav__Hamburger-sc-4qndhy-1 jBjohq')]")
editorialRead: By = By.xpath('//a[contains(@href, "/editorial/kobe-bryant-photographs-nathaniel-butler")]')

//Exit the menu button 
escapeMenu: By = By.xpath("//div[contains(@class, 'Hero__Wrapper-kuugln-0 ljpaXE LoginView__Hero-sc-9i7gl9-0 iROqfe')]")

//WEBSITE FOOTER SELECTORS 
//GOAT Clean Page 
goatClean: By = By.xpath("//a[contains(@href, '/goat-clean')]")

//GOAT Cleaning Process 
cleanProcess: By = By.xpath("//a[contains(@href, '/goat-clean/process')]")

// Selling on GOAT 
sellOngoat: By = By.xpath("//a[contains(@href, '/selling')]")

//Careers Page 
goatCareers: By = By.xpath("//a[contains(@href, 'https://jobs.lever.co/goat?department=GOAT')]")










constructor(driver: WebDriver) {
  this.driver = driver;
}


  //Navigate to page URL
  async navigate(url) {
    await this.driver.get(this.url);
  }

  //Closes the web broswer
  async quit() {
   await this.driver.quit();
  }

  // Gets attribute of an element
  async getAttribute(elementBy: By, attribute: string) {
    await this.driver.wait(until.elementLocated(elementBy));
    return (await this.driver.findElement(elementBy)).getAttribute(attribute);
  }

  //clicks an element
  async click(elementBy: By) {
    await this.driver.wait(until.elementsLocated(elementBy));
    return await this.driver.findElement(elementBy).click();
  }

  //Enter keyword into an input field
  async sendKeys(elementBy: By, keys: string) {
    await this.driver.wait(until.elementsLocated(elementBy));
    return await this.driver.findElement(elementBy).sendKeys(keys);
  }

  //Abstract the texts of the element 
  async getText(elementBy: any) {
      await this.driver.wait(until.elementIsVisible(await this.driver.wait(until.elementLocated(elementBy))))
      return (await this.driver.findElement(elementBy)).getText()
  }

  //Enters email into email field (login)
//   async insertEmail(email:string) {
//       await this.driver.wait(
//           until.elementIsVisible(
//               await this.driver.findElement(this.emailInputBox),
//           ),
//       )
//       await this.driver.findElement(this.emaiilInputBox).click()
//       return await this.driver.findElement(this.emailInputBox).sendKeys(email)
//   }

// //Enter passowrd into passwork field (login)
//     async insertPassword(pass:string) {
//         await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.passwordInputBox)
//         ),
//     )   
//     await this.driver.findElement(this.passwordInputBox).click()
//     return await this.driver.findElement(this.passwordInputBox).sendKeys(pass)
// }

}
