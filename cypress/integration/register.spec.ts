describe('Register', () => {
  let email: string;
  let password: string;

  before(() => {
    email = generateRandomEmail();
    password = 'TestPassword';
  });

  it('should register and login', () => {
    cy.visit('/register');
    cy.url().should('include', 'register');
    cy.get('[formControlName="email"]').type(email);
    cy.get('[formControlName="password"]').type(password);
    cy.get('#registerBtn').click();
    cy.url().should('include', 'login');
    cy.get('[formControlName="email"]').type(email);
    cy.get('[formControlName="password"]').type(password);
    cy.get('#loginBtn').click();
  });

  it('should route to user form page', () => {
    cy.url().should('include', 'forms-builder');
    cy.get('[routerLink="/user-forms"]').click();
  });
});


function generateRandomEmail(): string {
  const chars: string = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let email: string = '';
  for (let i = 0; i < 10; i++) {
    email += chars[Math.floor(Math.random() * chars.length)];
  }

  return email + '@test.com';
}
