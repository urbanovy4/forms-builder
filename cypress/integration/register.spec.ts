describe('Register', () => {
  let email: string;
  let password: string;

  beforeEach(() => {
    email = generateRandomEmail();
    password = 'TestPassword';
  });

  it('should register and login', () => {
    cy.visit('/register');
    cy.url().should('include', 'register');
    cy.get('form').contains('Sign Up');
    cy.get('[formControlName="email"]').type(email);
    cy.get('[formControlName="password"]').type(password);
    cy.get('#registerBtn').click();
    cy.intercept({
      method: 'POST',
      path: '/register'
    }).as('register');
  });

  it('should route to login page', () => {
    cy.url().should('include', 'login');
    cy.get('form').contains('Log in');
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
