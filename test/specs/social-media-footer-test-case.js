import loginPage from "../pageobjects/login.page.js";
import menuPage from "../pageobjects/menu.page.js";

async function returnPage() {
  await browser.closeWindow();
  await browser.url("https://www.saucedemo.com/inventory.html");
}

describe("Footer functionality", () => {
  it("should open social networks from the footer", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
    await menuPage.isInventoryDisplayed();
    await menuPage.clickTwitterLink();
    await returnPage();
    await menuPage.isInventoryDisplayed();
    await menuPage.clickFacebookLink();
    await returnPage();
    await menuPage.isInventoryDisplayed();
    await menuPage.clickLinkedInLink();
    await returnPage();
    await menuPage.isInventoryDisplayed();
  });
});
