import LoginPage from "../pageobjects/login.page.js";
import MenuPage from "../pageobjects/menu.page.js";

async function login(username, password) {
  await LoginPage.open();
  await LoginPage.inputUsername.setValue(username);
  await LoginPage.inputPassword.setValue(password);
  await LoginPage.btnSubmit.click();
}

describe("Badge value stays the same after relogin", () => {
  it("the value should stays the same after relogin", async () => {
    await login("standard_user", "secret_sauce");

    // Checking the availability of a block with products
    const inventoryContainer = await $("#inventory_container");
    expect(inventoryContainer).toBeDisplayed();

    //Add to cart
    await MenuPage.btnAddToCard.click();

    const badgeValue = await MenuPage.badgeShoppingCard.getText();
    console.log(`Badge value: ${badgeValue}`);
    expect(badgeValue).toBe("1"); // Using `toBe` to compare strings

    // Sidebar
    await MenuPage.btnBurger.click();

    const SideBar = await $(".bm-menu");
    expect(SideBar).toBeDisplayed(".bm-item-list");

    // Logout function
    await MenuPage.btnLogout.click();

    const mainPage = await $(".login_container");
    expect(mainPage).toBeDisplayed();

    // Login again
    await login("standard_user", "secret_sauce");

    // To check product availability in the cart again
    const newBadgeValue = await MenuPage.badgeShoppingCard.getText();
    const newTrimmedBadgeValue = newBadgeValue.trim();
    console.log(`Badge value after re-login: ${newTrimmedBadgeValue}`);
    expect(newTrimmedBadgeValue).toBe("1");

    // Click on the cart
    await MenuPage.btnCart.click();

    const cartItemText = await MenuPage.cartItemName.getText();
    const trimmedCartItemText = cartItemText.trim();
    console.log(`Product in the cart: ${trimmedCartItemText}`);
    expect(trimmedCartItemText).toBe("Sauce Labs Backpack");
  });
});
