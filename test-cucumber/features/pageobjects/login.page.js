import Page from "./page.js";

class LoginPage extends Page {
  get inputUsername() {
    return $("#user-name");
  }

  get inputPassword() {
    return $("#password");
  }

  get errorAlert(){
    return $('[data-test="error"]');
  };
  

  get btnSubmit() {
    return $("#login-button");
  }

  /**
   * Method to perform login using username and password
   */
  async login(username, password) {
    await this.inputUsername.setValue(username);    
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  open() {
    return super.open("");
  }
}

export default new LoginPage();
