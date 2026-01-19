describe('Login → Browse, Category Select, and Filter Flow', () => {

    it('should login and filter products by title and category', () => {
      
      // Step 1: Visit and Login
      cy.visit('http://localhost:3000');
      cy.get('input[name="email"]').type('testuser@teebay.com');
      cy.get('input[name="password"]').type('123456');
      cy.get('button').click();
  
      // Step 2: Navigate to Browse Products
      // Target the menu item specifically
      cy.contains('a.item', 'Browse Products').click();
  
      // Step 3: Type the product title
      // Use the stable name attribute
      cy.get('input[name="title"]').type('Cricket kit');
  
      // Step 4: Select a Category
      // First, click the dropdown to open the menu transition
      cy.get('div[name="category"]').click();
  
      // Then, click the specific option from the visible menu
      // In your inspector, this is a div with role="option"
      cy.get('div.menu.transition')
        .contains('span.text', 'Sporting Goods')
        .click();
  
      // Step 5: Click the Filter button
      // Target the blue submit button in the search form
      cy.get('button[type="submit"].ui.blue.button')
        .contains('Filter')
        .click();
  
      // Step 6: Verify the filtered result appears
      cy.contains('Cricket kit').should('be.visible');
    });
  });