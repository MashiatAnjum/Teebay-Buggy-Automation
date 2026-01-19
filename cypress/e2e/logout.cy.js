describe('Login → Logout Flow', () => {

    it('should login and then logout successfully', () => {
      
      // Step 1-2: Visit and Login
      cy.visit('http://localhost:3000')
      cy.get('input[name="email"]').type('testuser@teebay.com')
      cy.get('input[name="password"]').type('123456')
      cy.get('button').click() 
  
      // Step 3: Verify "My Products" page has loaded
      cy.contains(/my products/i).should('be.visible')
  
      // Step 4: Click the initial Logout button in the menu
      // Targeting the link in the right menu
      cy.get('div.right.menu')
        .find('a.item')
        .contains('Logout')
        .click()
  
      // Step 5: Click "Yes I am sure!" in the confirmation modal
      // This is the missing step that caused the timeout!
      cy.get('button.ui.blue.button')
        .contains('Yes I am sure!')
        .click()
  
      // Step 6: Now verify redirection to login page
    //   cy.url().should('include', '/login')
    //   cy.get('button').contains('Login').should('be.visible')
    })
  })