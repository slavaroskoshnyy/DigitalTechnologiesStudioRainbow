/// <reference types="cypress" />

import LoginPage from "../../pageObjects/LoginPage";
import loginData from "../../fixtures/data.json";
import HomePage from "../../pageObjects/HomePage";

describe("Login in system", () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  beforeEach(() => {
    loginPage.getVisitLoginPage(loginData.url);
  });

  it("Login with valid credentials", () => {
    loginPage
      .typeInputEmail(loginData.login)
      .typeInputPassword(loginData.password)
      .clickButtonLogin();

    homePage.getLinkIconHome().should("have.attr", "href", "/");
  });

  it("Login with invalid credentials", () => {
    loginPage
      .typeInputEmail(loginData.invalidLogin)
      .typeInputPassword(loginData.password)
      .clickButtonLogin()
      .getErrorMessage()
      .should("have.text", loginData.errorMessage);
  });

  //! Этот тест провалиться т.к. "Забыли пароль" реализованно не ссылкой

  it("There is a password recovery link on the page", () => {
    loginPage.getButtonResetPassword().then((el) => {
      expect(el.prop("tagName")).to.equal("A");
    });
  });
});
