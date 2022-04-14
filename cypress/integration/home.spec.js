/// <reference types="Cypress" />

describe('Home Page', () => {
  it('should display the header', () => {
    cy.visit('localhost:4200');

    cy.get('.header h1').should('contain.text', 'Book Research');
  });
});
