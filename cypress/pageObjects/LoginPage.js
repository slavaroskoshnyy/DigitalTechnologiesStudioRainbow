import HomePage from "./HomePage";
import data from "../fixtures/data.json";

class LoginPage {
  getVisitLoginPage = (url) => cy.visit(url);
  getInputEmail = () => cy.get("#sdo-login");
  getInputPassword = () => cy.get("#sdo-password");
  getButtonLogin = () => cy.get(".login-btn button").eq(0);
  getButtonResetPassword = () =>
    cy.get(".login-btn button").contains(data.textButtonPasswordReset);
  getErrorMessage = () => cy.get(".el-notification__group  p");

  typeInputEmail(text) {
    this.getInputEmail().type(text);
    return this;
  }
  typeInputPassword(text) {
    this.getInputPassword().type(text);
    return this;
  }

  clickButtonLogin() {
    this.getButtonLogin().click();
    return this;
  }

  clickButtonResetPassword() {
    this.getButtonResetPassword().click();
    return this;
  }
}

export default LoginPage;
