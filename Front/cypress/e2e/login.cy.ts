describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.intercept("POST", "https://localhost:44346/api/Login", {
      fixture: "response-login-sucess.json",
    }).as("loginRequest");
  });

  it('should sucess login with "admin@admin.com" e "123456"', () => {
    const inputEmail = cy.get('[data-cy="input-email"]');
    const inputPassword = cy.get('[data-cy="input-password"]');
    const buttonLogin = cy.get('[data-cy="button-login"]');
    inputEmail.type("admin@admin.com");
    inputPassword.type("123456");

    buttonLogin.click();

    cy.wait("@loginRequest");

    cy.url().should('include', '/dashboard')
  }); 
});
