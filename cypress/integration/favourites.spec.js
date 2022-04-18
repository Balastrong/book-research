/// <reference types="Cypress" />

describe('Favourites', () => {
  before(() => {
    cy.visit('localhost:4200', { timeout: 30000 });
  });

  it('should add a book to favourites', () => {
    cy.get('.search-form-controls > :nth-child(1)').type('Harry');

    cy.get('.search-form-controls').find('button').click();

    const favButton = cy.get('.book-card-favourite-button').first();
    favButton.should('not.have.class', 'active');
    favButton.click();
    favButton.should('have.class', 'active');
  });

  it('should update the favourites tab', () => {
    cy.get('.tabs-labels > :nth-child(2)').should('contain.text', '(1)');
  });

  it('should show one book in the favourite tab', () => {
    cy.get('.tabs-labels > :nth-child(2)').click();

    cy.get('.bkr-book-card').should('have.length', 1);
  });
});
