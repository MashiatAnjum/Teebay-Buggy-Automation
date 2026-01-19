describe('Login → Edit Product Flow', () => {

    it('should login and edit the product successfully', () => {
      
      // Step 1: Visit the application
      cy.visit('http://localhost:3000')
  
      // Step 2: Perform Login
      cy.get('input[name="email"]').type('testuser@teebay.com')
      cy.get('input[name="password"]').type('123456')
      cy.get('button').click() 
  
      // Step 3: Verify "My Products" page has loaded
      cy.contains(/my products/i).should('be.visible')
  
      // Step 4: Click on the "Cricket kit" title
      cy.contains('div', 'Cricket kit')
        .first() 
        .click()
  
      // Step 5: Edit the Title
      // Using name="title" from your inspector
      cy.get('input[name="title"]')
        .clear()
        .type('Premium Cricket Kit')
  
      // Step 6: Edit the Description
      // Using name="description" from your inspector
      cy.get('textarea[name="description"]')
        .clear()
        .type('Updated description: Professional grade kit in excellent condition.')
  
      // Step 7: Click the Add Product button to save
      // Using classes and type from your inspector
      cy.get('button[type="submit"].ui.blue.button')
        .contains('Add Product')
        .click()
        
    }) 
  })