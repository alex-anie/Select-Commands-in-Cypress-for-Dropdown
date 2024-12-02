
describe('Dynamic Dropdown Test', () => {
    it('should select a specific option from a dynamically loaded dropdown', () => {
      // Step 1: Visit the page
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');  // Replace with your actual page URL
      
      // Step 2: Click on the dropdown to trigger the loading of dynamic options and type the text "iPod"
      cy.get('#entry_217822 > div input[placeholder="Search For Products"]').click().clear().type('iPod');  

  
      // Step 4: iterate over the the returned nodelist and check if "Nano" text exit and click it if Yes
      cy.get('#search > div.search-input-group.flex-fill > div.dropdown > ul li').each(($el, index, $list)=>{
        cy.log($el.text())
        if($el.text() === "Nano"){
            cy.wrap($el).click()
        }
      })
    });
  });