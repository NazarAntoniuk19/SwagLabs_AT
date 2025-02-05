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

    // Checking the availability of a block with products
    await homePage();

    // Click on the "Twitter" link
    await menuPage.clickTwitterLink();

    // Return to the Inventory page and click on the "Facebook" limk
    await returnPage();
    await homePage();

    await menuPage.clickFacebookLink();

    // Return to the Inventory page and click on the "LinkedIn" link
    await returnPage();
    await homePage();

    await menuPage.clickLinkedInLink();

    // Then return to the Inventory page
    await returnPage();
    await homePage();
  });
});
