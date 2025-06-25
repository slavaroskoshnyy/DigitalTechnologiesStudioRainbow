/// <reference types="cypress" />

import LoginPage from "../../pageObjects/LoginPage";
import HomePage from "../../pageObjects/HomePage";
import data from "../../fixtures/data.json";

describe("Company page", () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  beforeEach(() => {
    loginPage.getVisitLoginPage(data.url);
    loginPage
      .typeInputEmail(data.login)
      .typeInputPassword(data.password)
      .clickButtonLogin();
    homePage.clickButtonTrainingCenter().clickButtonCompany();
  });

  it("Company page availability", () => {
    homePage.getH1CompanyPage().should("include.text", data.H1PageCompany);
  });
});
