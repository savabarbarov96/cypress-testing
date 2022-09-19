import { LoginPage } from "./pages/loginPage";

// best practice to include Page Object Model
const logingPage = new LoginPage();

describe("All Login Tests", () => {
  it("Login Test 1", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    // cy.get("[name='username']").click().type("Admin")
    logingPage.enterUsername("Admin");
    logingPage.enterPassword("admin123");
    logingPage.clickLogin();
  });

  it("Login Test 2", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    // cy.get("[name='username']").click().type("Admin")
    logingPage.enterUsername("Admin");
    logingPage.enterPassword("admin123");
    logingPage.clickLogin();
    logingPage.verifyLogin();
  });
});
