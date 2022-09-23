import { LoginPage } from "./pages/loginPage";

// best practice to include Page Object Model
const logingPage = new LoginPage();


//best practices before each 
beforeEach(() => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
})




describe("All Login Tests", () => {
  it("Login Test 1", () => {
    // cy.get("[name='username']").click().type("Admin")
    logingPage.enterUsername("Admin");
    logingPage.enterPassword("admin123");
    logingPage.clickLogin();
  });

  it("Login Test 2", () => {
    // cy.get("[name='username']").click().type("Admin") // 
    logingPage.enterUsername("Admin");
    logingPage.enterPassword("admin123");
    logingPage.clickLogin();
    logingPage.verifyLogin();
  });

  it("Search employee", () => {
    // cy.get("[name='username']").click().type("Admin") // 
    logingPage.enterUsername("Admin");
    logingPage.enterPassword("admin123");
    logingPage.clickLogin();
    logingPage.verifyLogin();
    logingPage.findEmployee("0038")
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.wait(500)
    cy.get('.oxd-table-card > .oxd-table-row').click({ multiple: true })
    cy.get('.orangehrm-edit-employee-name > .oxd-text').should('have.text', 'Aaliyah Haq')
  });
});

