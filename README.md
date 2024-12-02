# Select Commands in Cypress for Dropdown

![How to Use Select Commands in Cypress for Dropdown.png](./local-img/thumbnail.png)

## `cypress open`[](https://docs.cypress.io/app/get-started/open-the-app#cypress-open)

You can open Cypress from your **project root** using the commands, depending on the package manager. In this case, we are using `npm`. You can learn more about another package manager [here](https://docs.cypress.io/app/get-started/open-the-app#cypress-open)

```bash
npx cypress open
```

After a moment, the Cypress Launchpad will open.
[](https://docs.cypress.io/app/get-started/open-the-app#cypress-open)

## `lambdaTest Run`

You can run cypress via Lambdatest web automation via npm. Learn how to setup lambdaTest and Cypress [here](https://www.lambdatest.com/support/docs/getting-started-with-cypress-testing/#/prerequisites)

```bash
lambdatest-cypress run
```

This will run Cypress on LambdaTest Web Automation.

### select

Select an `<option>` within a `<select>`.

It is [unsafe](https://docs.cypress.io/app/core-concepts/retry-ability#Only-queries-are-retried) to chain further commands that rely on the subject after `.select()`.

## Syntax[](https://docs.cypress.io/api/commands/select#Syntax)

```jsx
.select(value)
.select(values)
.select(value, options)
.select(values, options)

```

### Usage[](https://docs.cypress.io/api/commands/select#Usage)

**Correct Usage**

```jsx
cy.get('select').select('user-1') // Select the 'user-1' option

```

**Incorrect Usage**

```jsx
cy.select('John Adams') // Errors, cannot be chained off 'cy'
cy.clock().select() // Errors, 'clock' does not yield a <select> element
```

## Text Explanation

### Select by Index

```jsx
describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=9')
      cy.get('#entry_212434 #input-sort-212434').select(1)

    // Wait for the page to update or stabilize
    cy.url().should('include', 'sort=order_quantity')

    // Assert the selected option's text is 'Best sellers'
    cy.get('#entry_212434 #input-sort-212434 option:selected')
      .should('have.text', 'Best sellers')
    })
  })

  
```

The code above performs the following test. 

1. **`cy.url().should('include', 'sort=order_quantity')`**: This ensures that Cypress waits for the page update (as indicated by the change in URL) after selecting the dropdown option.
2. **`cy.get('#entry_212434 #input-sort-212434 option:selected').should('have.text', 'Best sellers')`**: This directly targets the `option:selected` to assert that the selected option's text is "Best sellers."

This should resolve the issue by breaking the chain and making sure Cypress waits for the page to reload before asserting the text.

### Select by Text

```jsx
describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=9')
      cy.get('#entry_212434 #input-sort-212434')
      .select('Newest')
    })
  })
```

Here we are selecting the web element (`<option>` tag) by the text content which is `Newest`

### Select By value

```jsx
describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=9')
      cy.get('#entry_212434 #input-sort-212434')
      .select('https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=9&sort=p.viewed&order=DESC')
    })
  })
```

Here we are selecting the web element (`<option>` tag) by the `value` attribute content which is a link. However most <option> tag don’t have a link as value. They might have a similar test as the content of the tag. Take the example below. 

HTML

```html
<section id="pets-names">
   <label for="pet-select">Choose a pet:</label>
      <select name="pets" id="pet-select">
		      <option value="">--Please choose an option--</option>
		      <option value="dog">Dog</option>
		      <option value="cat">Cat</option>
		      <option value="hamster">Hamster</option>
		      <option value="parrot">Parrot</option>
		      <option value="spider">Spider</option>
		      <option value="goldfish">Goldfish</option>
      </select>
  </section>
```

Cypress

```jsx
describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://127.0.0.1:5500/example.html')
      cy.get('#pets-names #pet-select')
      .select('cat').should('have.value', 'cat')
    })
  })
```

The `example.html`  and `example.cy.js` files exist for local testing. So as to easily test the examples performed on lambdatest playground locally for clarity.

## Select by Force

The select by force examples shows how to select web-elements that have been `disabled` or set to `hidden` using CSS and how to interact with them on Cypress.

```jsx
describe('Force Select an Element', () => {
    it('Force select a disabled element', () => {
      cy.visit('http://127.0.0.1:5500/example.html')
      cy.get('#iphone-versions #select-version').select('iPhone 11', {force: true}).invoke('val').should('eq', 'iPhone-11')
    })

    it('Force select a hidden element', () => {
      cy.visit('http://127.0.0.1:5500/example.html')
      cy.get('#mac-book-models #select-version').select('Mac Studio', {force: true}).invoke('val').should('eq', 'Mac-Studio')
    })
  })
```

Note that this the HTML code for this cypress test is intentionally created on `example.html` file because [lambdatest playground](https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=9) does not have a select web element with a property of hidden or disabled. 

 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Using the Select Command in Cypress</title>
</head>
<style>
    h1 {
        font-size: 2em;
        font-family: 'Courier New', Courier, monospace;
    }

    header {
       
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100px;
        background-color: mediumturquoise;
    }
</style>
<body>
    <main>
        <header>
            <h1>Select Command Examples</h1>
        </header>

        <section class="iphones" id="iphones">
            <h1>Types of iPhone</h1>
            <section id="iphone-versions">
                <label for="select-version">Choose an iPhone:</label>
                        <select name="iPhones" id="select-version" disabled>
                            <option value="">--Please choose an option--</option>
                            <option value="iPhone-8">iPhone 8</option>
                            <option value="iPhone-XR">iPhone XR</option>
                            <option value="iPhone-11" >iPhone 11</option>
                            <option value="iPhone-12">iPhone 12</option>
                            <option value="iPhone-13">iPhone 13</option>
                            <option value="iPhone-14">iPhone 14</option>
                        </select>
            </section>
        </section>

        <section class="mac-book" id="mac-book">
            <h1>Mac Book models released</h1>
            <section id="mac-book-models">
                <label for="select-version">Choose a Mac Book:</label>
                        <select name="mac-book" id="select-version" style="display: none;">
                            <option value="">--Please choose an option--</option>
                            <option value="iMac-Pro">iMac Pro (27-inch)</option>
                            <option value="MacBook-Air">MacBook Air (Retina, 13-inch)</option>
                            <option value="Mac-Pro" >Mac Pro</option>
                            <option value="Mac-mini">MacBook Pro</option>
                            <option value="Mac-Studio">Mac Studio</option>
                            <option value="MacBook-Air">MacBook Air</option>
                        </select>
            </section>
        </section>
    </main>
</body>
</html>
```

## Dynamic Dropdown

The user is able to select an option from a dynamically populated dropdown list. This is down on the Search bar

### **Preconditions:**

- The page with the dropdown is loaded.
- The dropdown options are populated dynamically when the user starts typing or when the dropdown is clicked.

### **Test Steps:**

1. Visit the webpage containing the dropdown.
2. Click on the dropdown to trigger the dynamic loading of options.
3. Wait for the dropdown options to load (if applicable).
4. Search or filter the dropdown options by entering text (if applicable).
5. Select an option from the dropdown.
6. Verify that the correct option has been selected.

### **Expected Result:**

- The dropdown loads the options dynamically.
- The correct option can be selected and is displayed as selected in the dropdown.

```jsx

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
```

## Dynamic Dropdown example 2

So the code below provides another example on how to handless dynamic dropdown in Cypress. 

```jsx

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
```

1. **`describe` and `it`:** Define the test suite and individual test case respectively.
2. **`cy.visit()`:** Navigates to the target page containing the dropdown.
3. **`cy.get()` (Step 2):** Locates the search input field using a CSS selector, clicks it, clears it, and types "iPod" to initiate the dropdown options.
4. **`cy.get()` (Step 4):** Selects all the list items (`li`) in the dropdown by their parent structure.
5. **`.each()`**: Iterates over each dropdown option, checks if the text equals "Nano", and logs the text of each item.
6. **`cy.wrap($el).click()`:** If "Nano" is found, it clicks on that item.

This test ensures that once you type "iPod" in the search box, the dropdown appears, and it automatically selects "Nano" from the options if it exists.

## References

1. The [select](https://docs.cypress.io/api/commands/select) command (Cypress official Docs)
2. [LambdaTest Playground](https://ecommerce-playground.lambdatest.io/index.php?route=common/home) (LambdaTest official website for web testing)