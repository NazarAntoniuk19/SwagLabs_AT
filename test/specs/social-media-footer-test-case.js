import loginPage from "../pageobjects/login.page.js";
import menuPage from "../pageobjects/menu.page.js";

async function returnPage() {
  //await browser.closeWindow();
  await menuPage.open();
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
    await browser.pause(5000);
    await menuPage.clickTwitterLink();
    await browser.pause(5000);
    await returnPage();
    await browser.pause(5000);
    await homePage();
    await browser.pause(5000);
    await menuPage.clickFacebookLink();
    await browser.pause(5000);
    await returnPage();
    await browser.pause(5000);
    await homePage();
    await browser.pause(5000);
    await menuPage.clickLinkedInLink();
    await browser.pause(5000);
    await returnPage();
    await browser.pause(5000);
    await homePage();
  });
});
