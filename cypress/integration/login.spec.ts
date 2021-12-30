describe('Login', () => {
  it('should login', () => {
    cy.visit('/login');
    cy.url().should('include', 'login');
    cy.get('[formControlName="email"]').type('eee@eee');
    cy.get('[formControlName="password"]').type('qwerty');
    cy.get('#loginBtn').click();
  });
});
