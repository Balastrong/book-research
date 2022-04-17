/// <reference types="Cypress" />

describe('Search', () => {
  before(() => {
    cy.visit('localhost:4200');
  });

  it('should have a search button', () => {
    cy.get('.search-form-controls').find('button').should('have.length', 1).and('contain.text', 'Search');
  });

  it('should find some books', () => {
    cy.get('.search-form-controls').find('button').click();

    cy.get('.bkr-book-card').should('have.length.at.least', 1);
  });

  it('should find some books', () => {
    cy.get('.search-form-controls').find('button').click();

    cy.get('.bkr-book-card').should('have.length.at.least', 1);
  });

  it('should be at page 1', () => {
    cy.get('.paginator-current-page').should('have.text', '1');
  });
});
