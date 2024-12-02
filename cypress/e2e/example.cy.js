describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://127.0.0.1:5500/example.html')
      cy.get('#iphone-versions #select-version')
      .select('iPhone 12').should('have.value', 'iPhone-12')
    })
  })