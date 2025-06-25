// import quoteForm from "../fixtures/quoteForm";
import Header from "./Header";
import data from "../fixtures/data.json";

class HomePage extends Header {
  getButtonTrainingCenter = () =>
    cy.get("ul[role='menubar'] div > span", { timeout: 10000 }).eq(1);
  getButtonCompany = () =>
    cy.get("a[data-cy='router-link-Company']").contains(data.company);
  getH1CompanyPage = () => cy.get("h1");
  getSubmenuItem = () =>
    cy.get("[data-cy='submenu-title-ms-myTraining']").eq(0);
  getLinkIconHome = () =>
    cy.get("header [aria-current='page']", { timeout: 10000 });
  getUserLink = () => cy.get(".description-value a");
  getDescriptionTitle = () => cy.get("#pane-primary .description-title");

  clickButtonTrainingCenter() {
    this.getButtonTrainingCenter().click();
    return this;
  }
  clickButtonCompany() {
    this.getButtonCompany().click();
    return this;
  }
  clickUserLink() {
    this.getUserLink().click();
    return this;
  }
}

export default HomePage;
