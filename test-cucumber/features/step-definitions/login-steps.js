import { Given, When, Then } from '@cucumber/cucumber';

import loginPage from '../pageobjects/login.page.js';
 
 
Given(/^User is located on the main page of saucedemo website$/, async () => {
    await loginPage.open()
});
 
When(/^User click “Login” button with (.*) and (.*)$/, async (username, password) => {
    await loginPage.login(username, password)
});
 
Then(/^User see a flash message saying (.*)$/, async (message) => {
    await expect(loginPage.errorAlert).toBeExisting();
    await expect(loginPage.errorAlert).toBeDisplayed(message);
});