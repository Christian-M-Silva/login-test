const urlLogin = "https://localhost:44346/api/Login"

const messageErro = 'Usuário ou senha inválidos'

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('should sucess login with "admin@admin.com" e "123456"', () => {
    cy.intercept("POST", urlLogin, {
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
    cy.intercept("POST", urlLogin, {
      statusCode: 401,
      body: { message: messageErro },
    }).as("loginRequestFailed");
    cy.get('[data-cy="input-email"]').type("user@admin.com");
    cy.get('[data-cy="input-password"]').type("1234");
    cy.get('[data-cy="button-login"]').click();
    cy.wait("@loginRequestFailed");

    cy.on("window:alert", (str) => {
      expect(str).to.equal(messageErro);
    });
  });

  it("should failed login with API request", () => {
    const listCredentials = [
      { email: "admin@admin.com", password: "12345" },
      { email: "user@admin.com", password: "123456" },
      { email: "user@admin.com", password: "12345" },
    ];

    const inputEmail = cy.get('[data-cy="input-email"]');
    const inputPassword = cy.get('[data-cy="input-password"]');

    listCredentials.forEach((credential) => {
      inputEmail.type(credential.email);
      inputPassword.type(credential.password);
      cy.get('[data-cy="button-login"]').click();

      cy.request({
        method: "POST",
        url: urlLogin,
        body: {
          email: credential.email,
          password: credential.password,
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(401);
        expect(response.body.message).to.eq(messageErro);
      });

      inputPassword.clear()
      inputEmail.clear()
    });
  });
});
