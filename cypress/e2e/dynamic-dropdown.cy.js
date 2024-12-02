
  describe('Dynamic Dropdown Test', () => {
    it('should select a specific option from a dynamically loaded dropdown', () => {
      // Step 1: Visit the page
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');  // Replace with your actual page URL
      
      // Step 2: Click on the dropdown to trigger the loading of dynamic options
      cy.get('#entry_217822 > div input[placeholder="Search For Products"]').click();  // Adjust selector for the dropdown
  
      // Step 3: Wait for the dropdown options to be visible (if required)
      cy.get('#entry_217822 > div input[placeholder="Search For Products"]') // Selector for the dropdown options container
        .should('be.visible');
  
      // Step 4: Optionally filter options by typing in the dropdown's input field
      cy.get('#entry_217822 > div input[placeholder="Search For Products"]').type('iPod Touch'); // Adjust if needed for input
      
      // Step 5: Select an option dynamically
      cy.contains('#search > div.search-input-group.flex-fill > div.dropdown > ul li', 'iPod Touch') // Adjust selector for dropdown item
        .click();
      
      // Step 6: Assert that the correct option is selected
      cy.get('#entry_217822 > div input[placeholder="Search For Products"]').should('have.value', 'iPod Touch');
    });
  });