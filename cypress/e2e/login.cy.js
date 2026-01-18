describe('Login Feature', () => {
  it('should login successfully', () => {
    cy.visit('http://localhost:3000')

    cy.get('input[name="email"]').type('testuser@teebay.com')
    cy.get('input[name="password"]').type('123456')
    cy.get('button').click()

    cy.url().should('not.include', '/login')
  })
})