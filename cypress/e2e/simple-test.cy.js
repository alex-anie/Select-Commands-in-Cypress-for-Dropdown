describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
      cy.get('#main-navigation .widget-navbar .navbar-nav.horizontal')
      .find('li').eq(3).trigger('mouseover') 
      .then($li => {
        cy.log($li.text());
      })
    })
  })