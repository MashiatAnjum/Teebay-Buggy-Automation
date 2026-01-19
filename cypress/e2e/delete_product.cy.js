describe('Login → Delete Product Flow', () => {

    it('should login and delete the first product card', () => {
      
      // Step 1: Visit the application
      cy.visit('http://localhost:3000')
  
      // Step 2: Perform Login
      cy.get('input[name="email"]').type('testuser@teebay.com')
      cy.get('input[name="password"]').type('123456')
      cy.get('button').click() // Standard login button click
  
      // Step 3: Verify login success and page load
      cy.url().should('not.include', '/login')
      cy.contains(/my products/i).should('be.visible')
  
      // Step 4: Click the Delete Button
      // This targets the button containing the trash icon as seen in your screenshot
      cy.get('button.ui.icon.button')
        .find('i.trash.icon')
        .first() // Selects the first trash icon in the list
        .click({ force: true }) // 'force: true' helps if the icon is small or partially covered
        


       ///code for clicking the yes delete button.
        cy.get('button.ui.blue.button')
        .contains('Yes, delete')
        .click();
  
      // Step 3: Verify the modal is closed and product is gone
      cy.get('.ui.modal').should('not.exist');
      cy.contains('Cricket kit').should('not.exist');







      // Step 5: Verification (Optional but recommended)
      // Ensures the card is actually removed from the UI
      cy.contains('Cricket kit').should('not.exist') 
    })
  })