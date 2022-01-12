import {AvailableStyles, BorderStyles} from "../../src/app/helpers/models/model";

describe('FormBuilder', () => {
  let formName: string;
  let email: string;
  let password: string;

  before(() => {
    formName = 'Test Form ' + generateRandomString();
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
  });

  it('should route to login page', () => {
    cy.url().should('include', 'login');
    cy.get('form').contains('Log in');
  });

  it('should login', () => {
    cy.visit('/login');
    cy.url().should('include', '/login');
    cy.login(email, password);
    cy.url().should('include', '/forms-builder');
  });

  it('should drag field in form edit area', () => {
    cy.drag('#field-1', '.edit-area');
    cy.drag('#field-2', '.edit-area');
    cy.drag('#field-3', '.edit-area');
    cy.drag('#field-4', '.edit-area');
    cy.drag('#field-5', '.edit-area');
  });

  it('should select form field', () => {
    cy.selectField('#form-field-0');
    cy.selectField('#form-field-1');
  });

  it('should remove field', () => {
    cy.removeField('#form-field-0');
    cy.removeField('#form-field-2');
  });

  it('should change field style', () => {
    const styles: AvailableStyles = {
      required: true,
      color: {
        rgba: 'rgba(0, 0, 1, 0)',
        r: 0,
        g: 0,
        b: 1,
        a: 0,
        hex: '#000001',
        roundA: 1
      },
      borderStyle: BorderStyles.Dashed,
      fontWeight: '400',
      height: '100px',
      placeholder: 'Field',
      fontSize: '24px',
      width: '300px'
    };
    cy.selectField('#form-field-0');
    cy.changeStyle(styles);
  });

  it('should save created form', () => {
    cy.get('.save-btn button').click();
    cy.get('[formControlName="formName"]').type(formName);
    cy.get('mat-dialog-container button[type="submit"]').click();
  });

  it('should check created form', () => {
    cy.get('[routerlink="/user-forms"]').click();
    cy.url().should('include', '/user-forms');
    cy.contains(formName).click();
    cy.get('.close').click();
  });

  it('should update form', () => {
    cy.get('#form-1 .edit').click();
    cy.get('[formControlName="formName"]').clear().type('Changed Form Name');
    cy.get('button[type="submit"]').click();
  });

  it('should delete form', () => {
    cy.get('#form-1 .remove').click();
    cy.get('button[type="submit"]').click();
  });

  it('should sign out', () => {
    cy.contains('Sign Out').click();
    cy.url().should('include', '/login');
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
