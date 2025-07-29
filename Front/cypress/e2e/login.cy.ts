describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('should sucess login with "admin@admin.com" e "123456"', () => {
    cy.intercept("POST", "https://localhost:44346/api/Login", {
      fixture: "response-login-sucess.json",
    }).as("loginRequestSuccess");
    const inputEmail = cy.get('[data-cy="input-email"]');
    const inputPassword = cy.get('[data-cy="input-password"]');
    const buttonLogin = cy.get('[data-cy="button-login"]');
    inputEmail.type("admin@admin.com");
    inputPassword.type("123456");

    buttonLogin.click();

    cy.wait("@loginRequestSuccess");

    cy.url().should("include", "/dashboard");
  });

  it("should failed login", () => {
    cy.intercept("POST", "https://localhost:44346/api/Login", {
      statusCode: 401,
      body: { message: "Usuário ou senha inválidos" },
    }).as("loginRequestFailed");
    cy.get('[data-cy="input-email"]').type("user@admin.com");
    cy.get('[data-cy="input-password"]').type("1234");
    cy.get('[data-cy="button-login"]').click();
    cy.wait("@loginRequestFailed");

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Usuário ou senha inválidos');
    });
  });
});
