/// <reference types="Cypress" />

describe('Home Page', () => {
  before(() => {
    cy.visit('localhost:4200');
  });

  it('should display the header', () => {
    cy.get('.header h1').should('contain.text', 'Book Research');
  });

  it('should have two tabs', () => {
    cy.get('.tabs-labels').find('.tabs-label').should('have.length', 2);
  });

  it('should have only one selected tab', () => {
    cy.get('.tabs-label.active').should('have.length', 1);
  });
});
