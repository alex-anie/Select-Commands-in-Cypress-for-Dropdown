describe('Select the index', () => {
    it('select the option tag with an of 1', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=9')
      cy.get('#entry_212434 #input-sort-212434').select(1)

    // Wait for the page to update or stabilize
    cy.url().should('include', 'sort=order_quantity')

    // Assert the selected option's text is 'Best sellers'
    cy.get('#entry_212434 #input-sort-212434 option:selected')
      .should('have.text', 'Best sellers')
    })
  })

  