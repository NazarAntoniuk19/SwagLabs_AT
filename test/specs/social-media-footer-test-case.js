import loginPage from "../pageobjects/login.page.js";
import menuPage from "../pageobjects/menu.page.js";

async function returnPage() {
  await browser.closeWindow();
  await browser.url("https://www.saucedemo.com/inventory.html");
}

async function homePage() {
  const inventoryContainer = await $("#inventory_container");
  await expect(inventoryContainer).toBeDisplayed();
}

describe("Footer functionality", () => {
  it("should open social networks from the footer", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
    await homePage();
    await menuPage.clickTwitterLink();
    await returnPage();
    await homePage();
    await menuPage.clickFacebookLink();
    await returnPage();
    await homePage();
    await menuPage.clickLinkedInLink();
    await returnPage();
    await homePage();
  });
});
