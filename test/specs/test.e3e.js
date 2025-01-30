import LoginPage from "../pageobjects/login.page.js";
import MenuPage from "../pageobjects/menu.page.js";

async function login(username, password) {
  await LoginPage.open();
  await LoginPage.inputUsername.setValue(username);
  await LoginPage.inputPassword.setValue(password);
  await LoginPage.btnSubmit.click();
}

describe("Logout functionality", () => {
  it("should redirect to the Login page", async () => {
    await login("standard_user", "secret_sauce");

    // Checking the availability of a block with products
    const inventoryContainer = $("#inventory_container");
    expect(inventoryContainer).toBeDisplayed();

    // To click on the "Burger" btn
    await MenuPage.btnBurger.click();

    const SideBar = $(".bm-menu");
    expect(SideBar).toBeDisplayed(".bm-item-list");

    // Logout function
    await MenuPage.btnLogout.click();

    const mainPage = $(".login_container");
    expect(mainPage).toBeDisplayed();
  });
});
