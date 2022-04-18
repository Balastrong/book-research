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

  it('should switch to the other tab tab', () => {
    const tab1Text = 'Research';
    const tab2Text = 'Favourites';

    cy.get('.tabs-label.active').should('contain.text', tab1Text);

    cy.get('.tabs-labels > :nth-child(2)').click();

    cy.get('.tabs-label.active').should('contain.text', tab2Text);

    cy.get('.tabs-labels > :nth-child(1)').click();

    cy.get('.tabs-label.active').should('contain.text', tab1Text);
  });
});
