/// <reference types="Cypress" />

describe('Search', () => {
  before(() => {
    cy.visit('localhost:4200', { timeout: 30000 });
  });

  it('should have a search button', () => {
    cy.get('.search-form-controls').find('button').should('have.length', 1).and('contain.text', 'Search');
  });

  it('should find some books', () => {
    cy.get('.search-form-controls > :nth-child(1)').type('Harry');

    cy.get('.search-form-controls').find('button').click();

    cy.get('.bkr-book-card').should('have.length.at.least', 1);
  });

  it('should be at page 1', () => {
    cy.get('.paginator-current-page').should('contain.text', '1 /');
  });

  it('should have the prev button disabled', () => {
    cy.get('.bkr-paginator > button').should('be.disabled');
  });

  it('should have the next button enabled', () => {
    cy.get('.bkr-paginator > button:last-child').should('be.enabled');
  });
});
