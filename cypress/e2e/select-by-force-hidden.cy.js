describe('Force Select an Element', () => {
    it('Force select a hidden element', () => {
      cy.visit('https://cdpn.io/pen/debug/dPbjbwK?authentication_hash=nqAwvJdQxbWr')

      cy.get('#mac-book-models #select-version')

      .select('Mac Studio', {force: true})
      .invoke('val').should('eq', 'Mac-Studio')
    })
  })
