
describe('Force Select an Element', () => {
    it('Force select a disabled element', () => {
      cy.visit('https://cdpn.io/pen/debug/MYgXLQy?authentication_hash=LQkExWmOvBxA')

      cy.get('#iphone-versions #select-version')

      .select('iPhone 11', {force: true})

      .invoke('val').should('eq', 'iPhone-11')
    })
  })
