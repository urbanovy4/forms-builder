describe('Login', () => {
  it('should login', () => {
    cy.visit('/login');
    cy.login('eee@eee', 'qwerty');
  });

  it('should drag field in form edit area', () => {
    cy.drag('#field-1', '.edit-area');
    cy.drag('#field-2', '.edit-area');
    cy.drag('#field-3', '.edit-area');
    cy.drag('#field-4', '.edit-area');
    cy.drag('#field-5', '.edit-area');
  });

  it('should select form field', () => {
    cy.selectField('#form-field-1');
    cy.selectField('#form-field-0');
    cy.selectField('#form-field-2');
    cy.selectField('#form-field-3');
    cy.selectField('#form-field-4');
  });

});
