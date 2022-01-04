declare namespace Cypress {
  interface Chainable<Subject = any> {
    customCommand(param: any): typeof customCommand;
    login(email: string, password: string): typeof login;
    drag(dragElement: string, target: string): typeof drag;
    selectField(target: string): typeof selectField;
  }
}

function customCommand(param: any): void {
  console.warn(param);
}

function login(email: string, password: string): void {
  cy.url().should('include', 'login');
  cy.get('[formControlName="email"]').type(email);
  cy.get('[formControlName="password"]').type(password);
  cy.get('#loginBtn').click();
}

function drag(dragElement: string, target: string): void {
  cy.get(dragElement).then(el => {
    const draggableField = el[0];
    cy.get(target).then(el => {
      const droppable = el[0];

      const coords = droppable.getBoundingClientRect();

      draggableField.dispatchEvent(new MouseEvent('mousedown'));
      draggableField.dispatchEvent(new MouseEvent('mousemove', {clientX: 10, clientY: 0}));
      draggableField.dispatchEvent(new MouseEvent('mousemove', {
        clientX: coords.x+10,
        clientY: coords.y+10
      }));
      draggableField.dispatchEvent(new MouseEvent('mouseup'));
    });
  });
}

function selectField(target: string) {
  cy.get(target).click();
}

Cypress.Commands.add('customCommand', customCommand);

Cypress.Commands.add('login', login);

Cypress.Commands.add('drag', drag);

Cypress.Commands.add('selectField', selectField);
