describe('Register', () => {
  let email: string;
  let password: string;

  beforeEach(() => {
    email = generateRandomString() + '@test.com';
    password = 'TestPassword';
  });

  it('should register', () => {
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


export function generateRandomString(): string {
  const chars: string = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let string: string = '';
  for (let i = 0; i < 10; i++) {
    string += chars[Math.floor(Math.random() * chars.length)];
  }

  return string;
}
