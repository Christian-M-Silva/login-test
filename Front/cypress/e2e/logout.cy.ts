describe('logout', () => {
  it('should logout on click button', () => {
    cy.visit('/dashboard')
    cy.get('[data-cy="button-logout"]').click();

cy.url().should('eq', 'http://localhost:5173/')  })
})