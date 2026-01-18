describe('Login → Add Product Flow', () => {

    it('should login and add a product successfully', () => {
  
      // Step 1: Visit app
      cy.visit('http://localhost:3000')
  
      // Step 2: Login
      cy.get('input[name="email"]').type('testuser@teebay.com')
      cy.get('input[name="password"]').type('123456')
      cy.get('button').click()
  
      // Step 3: Verify login success
      cy.url().should('not.include', '/login')
      cy.contains(/my products/i).should('be.visible')
  
      // Step 4: Click Add Product
      cy.contains('button', 'Add Product').click()
  
      // Step 5: Fill Add Product form
      cy.get('input[name="title"]').type('Cricket')
  
      cy.get('textarea')
        .first()
        .type('Cricket Tools.')
  
      // Step 6: Select Category (Semantic UI dropdown)
      cy.get('div[name="categories"]').click()
      cy.get('.menu.transition .item').first().click()
  
      // Step 7: Enter Price & Rent
      cy.get('input').eq(1).type('500')   // price
      cy.get('input').eq(2).type('50')    // rent
      
//       cy.get('div[name="rent_duration_type"]').click()

// cy.get('.menu.transition .item')
//   .contains(/per day/i)
//   .click()
cy.get('div[name="rent_duration_type"]').click()

cy.get('.menu.transition .item')
  .should('have.length.greaterThan', 0)
  .first()
  .click()

  
      // Step 8: Submit product
      cy.contains('button', /^add product$/i).click()
  
      // Step 9: Verify product added
      cy.contains('Cricket').should('be.visible')
    })
  
  })
  