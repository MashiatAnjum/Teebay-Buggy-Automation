describe('User Registration', () => {
  it('should register a new user successfully', () => {

    // Open login page (home)
    cy.visit('http://localhost:3000')

    // Click Sign Up
    cy.contains(/sign up/i).click()

    // Fill registration form (order-based, safe for now)
    cy.get('input').eq(0).type('Test')
    cy.get('input').eq(1).type('User')
    cy.get('input').eq(2).type('Dhaka')
    cy.get('input').eq(3).type(`Test@test.com`)
    cy.get('input').eq(4).type('01700000000')
    cy.get('input').eq(5).type('123456')
    cy.get('input').eq(6).type('123456')

    // Submit registration
    cy.contains(/register/i).click()

    // Assertion (registration success or redirect)
    cy.url().should('not.include', 'register')
  })
})

  