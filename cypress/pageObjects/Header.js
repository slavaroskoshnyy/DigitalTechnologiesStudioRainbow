import LoginPage from "./LoginPage";

class Header {
  getMainLabel = () => cy.get("header [aria-current='page']");
  getProfileIcon = () => cy.get("header  > div > span");
  getButtonLogout = () => cy.get("a[href='/logout']");

  clickProfileIcon() {
    this.getProfileIcon().click();
    return this;
  }

  clickButtonLogout() {
    this.getButtonLogout().click();
    return LoginPage;
  }
}

export default Header;
