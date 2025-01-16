
describe('Force Select an Element', () => {
    it('Force select a disabled element', () => {
      cy.visit('http://127.0.0.1:5500/example.html')
      cy.get('#iphone-versions #select-version')
      .select('iPhone 11', {force: true})
      .invoke('val').should('eq', 'iPhone-11')
    })
  })
