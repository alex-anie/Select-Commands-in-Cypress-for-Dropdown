describe('Select multiple element', () => {
    it('Select more than one option web element', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=9')
      cy.get('#entry_212434 #input-sort-212434')
      .select(['Default'], ['Best sellers'], ['Popular'])
    })
  })