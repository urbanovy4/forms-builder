import {AvailableStyles} from "../../src/app/helpers/models/model";

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      customCommand(param: any): typeof customCommand;

      login(email: string, password: string): typeof login;

      drag(dragElement: string, target: string): typeof drag;

      selectField(target: string): typeof selectField;

      removeField(target: string): typeof removeField;

      changeStyle(styles): typeof changeStyle;
    }
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
        clientX: coords.x + 10,
        clientY: coords.y + 10
      }));
      draggableField.dispatchEvent(new MouseEvent('mouseup'));
    });
  });
}

function selectField(target: string) {
  cy.get(target).click();
}

function removeField(target: string): void {
  cy.get(target + ' .fa-trash').click();
}

function changeStyle(styles: AvailableStyles): void {
  cy.get('[formControlName="width"]').type(styles.width);
  cy.get('[formControlName="height"]').type(styles.height);
  cy.get('[formControlName="borderStyle"]').click();
  cy.get('mat-option').contains(styles.borderStyle).click();
  cy.get('[formControlName="fontSize"]').type(styles.fontSize);
  cy.get('[formControlName="fontWeight"]').type(styles.fontWeight);
  cy.get('[formControlName="color"]').type(styles.color.hex);
  cy.get('[formControlName="placeholder"]').type(styles.placeholder);
  cy.get('[formControlName="required"]').type(styles.required + '');
  cy.get('button[type="submit"]').click();
}

Cypress.Commands.add('customCommand', customCommand);

Cypress.Commands.add('login', login);

Cypress.Commands.add('drag', drag);

Cypress.Commands.add('selectField', selectField);

Cypress.Commands.add('removeField', removeField);

Cypress.Commands.add('changeStyle', changeStyle);
