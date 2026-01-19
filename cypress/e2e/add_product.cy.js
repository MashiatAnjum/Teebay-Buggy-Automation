describe('Login → Add Product Flow', () => {

  it('should login and add a product successfully', () => {
    
    // Step 1: Visit application
    cy.visit('http://localhost:3000')

    // Step 2: Login
    cy.get('input[name="email"]').type('testuser@teebay.com')
    cy.get('input[name="password"]').type('123456')
    cy.get('button').click()

    // Step 3: Verify login success
    cy.url().should('not.include', '/login')
    cy.contains(/my products/i).should('be.visible')

    // Step 4: Click Add Product button in the main menu
    cy.contains('button', 'Add Product').click()

    // Step 5: Fill Product Details (Title and Description)
    // Using stable name attributes identified in the form
    cy.get('input[name="title"]').type('Mango')
    cy.get('textarea[name="description"]').type('fruit.')

    // Step 6: Select Category (Multi-select dropdown)
    // Click the dropdown header to reveal the menu transition
    cy.get('div[name="categories"]').click()
    cy.get('.menu.transition .item')
      .first()
      .click({ force: true }) // Force bypasses "display: none" animation errors

    // Step 7: Enter Price & Rent
    // Target inputs by index as per your structure
    cy.get('input').eq(1).type('500')   // Purchase Price
    cy.get('input').eq(2).type('50')    // Rent Price
    
    // Step 8: Select Rent Duration Type
    // Only click ONCE to open the menu
    cy.get('div[name="rent_duration_type"]').click()

    // Select the first option immediately
    cy.get('.menu.transition .item')
      .should('have.length.greaterThan', 0)
      .first()
      .click({ force: true }) // Force ensures selection during DOM transition

    // Step 9: Submit the form
    // Matches button by text and type="submit"
    cy.get('button[type="submit"]')
      .contains(/^add product$/i)
      .click()

    // Step 10: Verify product appears in "My Products" list
    cy.contains('Cricket').should('be.visible')
  })
})