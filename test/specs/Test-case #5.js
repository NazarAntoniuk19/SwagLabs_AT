import LoginPage from "../pageobjects/login.page.js";

async function login(username, password) {
  await LoginPage.open();
  await LoginPage.inputUsername.setValue(username);
  await LoginPage.inputPassword.setValue(password);
  await LoginPage.btnSubmit.click();
}

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
    // await login("standard_user", "secret_sauce");
    await login("standard_user", "secret_sauce");

    // Checking the availability of a block with products
    await homePage();

    // Click on the "Twitter"
    const twitterLink = await $(".social_twitter");
    await twitterLink.waitForClickable({ timeout: 5000 });
    await twitterLink.click();

    // Return to the Inventory page and click on the "Facebook"
    await returnPage();
    await homePage();

    const facebookLink = await $(".social_facebook");
    await facebookLink.waitForClickable({ timeout: 5000 });
    await facebookLink.click();

    // Return to the Inventory page and click on the "LinkedIn"
    await returnPage();
    await homePage();

    const LinkedInLink = await $(".social_linkedin");
    await LinkedInLink.waitForClickable({ timeout: 5000 });
    await LinkedInLink.click();

    // Then return to the Inventory page
    await returnPage();
    await homePage();
  });
});
