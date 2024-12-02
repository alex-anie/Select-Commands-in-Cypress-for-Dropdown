describe('Select web element by Text', () => {
    it('Select the option tag with a Newest', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=9')
      cy.get('#entry_212434 #input-sort-212434')
      .select('Newest')
    })
  })