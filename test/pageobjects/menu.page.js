import Page from "./page.js";

class MenuPage extends Page {
  get btnBurger() {
    return $("#react-burger-menu-btn");
  }

  async clickBurgerBtn() {
    await this.btnBurger.click();
  }

  get btnLogout() {
    return $("#logout_sidebar_link");
  }

  async clickLogoutBtn() {
    await this.btnLogout.click();
  }

  get btnAddToCard() {
    return $("#add-to-cart-sauce-labs-backpack");
  }

  async clickAddToCardBtn() {
    await this.btnAddToCard.click();
  }

  get badgeShoppingCard() {
    return $(".shopping_cart_badge");
  }

  get btnCart() {
    return $(".shopping_cart_link");
  }

  async clickCartBtn() {
    await this.btnCart.click();
  }

  get cartItemName() {
    return $(".inventory_item_name");
  }

  get btnSort() {
    return $(".product_sort_container");
  }

  async clickSortBtn() {
    await this.btnSort.click();
  }

  get btnCheckout() {
    return $("#checkout");
  }

  async clickCheckoutBtn() {
    await this.btnCheckout.click();
  }

  get inputValidFirstName() {
    return $("#first-name");
  }

  async setValueInputValidFirstName() {
    await this.inputValidFirstName.setValue("Jefrey");
  }

  get inputValidLastName() {
    return $("#last-name");
  }

  async setValueInputValidLastName() {
    await this.inputValidLastName.setValue("Morgan");
  }

  get inputPostalCode() {
    return $("#postal-code");
  }

  async setValueInputPostalCode() {
    await this.inputPostalCode.setValue("88-1001");
  }

  get btnContinue() {
    return $("#continue");
  }

  async clickContinueBtn() {
    await this.btnContinue.click();
  }

  get btnFinish() {
    return $("#finish");
  }

  async clickFinishBtn() {
    await this.btnFinish.click();
  }

  get btnBackHome() {
    return $("#back-to-products");
  }

  async clickBackHomeBtn() {
    await this.btnBackHome.click();
  }

  get CheckoutButton() {
    return $("#checkout");
  }

  async clickCheckoutBtn() {
    await this.CheckoutButton.click();
  }

  async clickTwitterLink() {
    const twitterLink = await $(".social_twitter");
    await twitterLink.waitForClickable({ timeout: 5000 });
    await twitterLink.click();
  }

  async clickFacebookLink() {
    const facebookLink = await $(".social_facebook");
    await facebookLink.waitForClickable({ timeout: 5000 });
    await facebookLink.click();
  }

  async clickLinkedInLink() {
    const LinkedInLink = await $(".social_linkedin");
    await LinkedInLink.waitForClickable({ timeout: 5000 });
    await LinkedInLink.click();
  }

  get inventoryContainer() {
    return $("#inventory_container");
  }

  async isInventoryDisplayed() {
    await this.inventoryContainer.isDisplayed();
  }

  open() {
    return super.open("inventory.html");
  }
}

export default new MenuPage();
