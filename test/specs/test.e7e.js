import LoginPage from "../pageobjects/login.page.js";
import MenuPage from "../pageobjects/menu.page.js";

async function login(username, password) {
  await LoginPage.open();
  await LoginPage.inputUsername.setValue(username);
  await LoginPage.inputPassword.setValue(password);
  await LoginPage.btnSubmit.click();
}

describe("Checkout functionality", () => {
  it("should checkout order", async () => {
    await login("standard_user", "secret_sauce");

    // Checking the availability of a block with products
    const inventoryContainer = await $("#inventory_container");
    await expect(inventoryContainer).toBeDisplayed();

    // To click on the "Add to cart" button
    await MenuPage.btnAddToCard.click();

    const badgeValue = await MenuPage.badgeShoppingCard.getText();
    console.log(`Badge value: ${badgeValue}`);
    expect(badgeValue).toBe("1");

    // To click on the "Cart" button
    await MenuPage.btnCart.click();

    const cartItemText = await MenuPage.cartItemName.getText();
    const trimmedCartItemText = cartItemText.trim();
    console.log(`Product in the cart: ${trimmedCartItemText}`);
    expect(trimmedCartItemText).toBe("Sauce Labs Backpack");

    // Open the Checkout page
    await MenuPage.btnCheckout.click();

    const checkoutTitle = await $(".title=Checkout: Your Information");
    await expect(checkoutTitle).toBeDisplayed();

    // To fill the "First Name" field
    await MenuPage.inputValidFirstName.setValue("Jefrey");

    // To fill the "Last Name" field
    await MenuPage.inputValidLastName.setValue("Morgan");

    // To fill the "Postal Code" field
    await MenuPage.inputPostalCode.setValue("88-1001");

    // To click on the "Continue" button
    await MenuPage.btnContinue.click();

    const overviewTitle = await $(".title=Checkout: Overview");
    await expect(overviewTitle).toBeDisplayed();

    // To finish the order
    await MenuPage.btnFinish.click();

    const thankYouMessage = await $(".complete-header");
    await expect(thankYouMessage).toHaveText("Thank you for your order!");

    // To click on the "Back Home" button
    await MenuPage.btnBackHome.click();

    const inventoryTitle = await $(".title=Products");
    await expect(inventoryTitle).toBeDisplayed();
  });
});
