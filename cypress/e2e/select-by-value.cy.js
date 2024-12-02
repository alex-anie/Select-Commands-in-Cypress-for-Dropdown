describe('Select web element by value', () => {
    it('Select the option element by the value attribute', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=9')
      cy.get('#entry_212434 #input-sort-212434')
      .select('https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=9&sort=p.viewed&order=DESC')
    })
  })