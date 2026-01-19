describe('Account Settings Update Flow', () => {

    it('should login and update all user profile fields', () => {
      
      // Step 1: Visit and Login
      cy.visit('http://localhost:3000');
      cy.get('input[name="email"]').type('testuser@teebay.com');
      cy.get('input[name="password"]').type('123456');
      cy.get('button').click();
  
      // Step 2: Navigate to Account Settings
      // Target the menu item specifically
      cy.contains('a.item', 'Account Settings').click();
  
      // Step 3: Update First Name and Last Name
      // Targeting name attributes from the form structure
      cy.get('input[name="first_name"]').clear().type('Mashiat');
      cy.get('input[name="last_name"]').clear().type('Anjum');
  
      // Step 4: Update Address
      // Targeting name="address"
      cy.get('input[name="address"]').clear().type('Dhaka, Bangladesh');
  
      // Step 5: Update Email and Phone Number
      // Targeting name attributes
      cy.get('input[name="email"]').clear().type('anjum@gmail.com');
      cy.get('input[name="phone_number"]').clear().type('01712345678');
  
      // Step 6: Click the Update Button
      // Targeting the blue submit button
      cy.get('button[type="submit"].ui.blue.button')
        .contains('Update')
        .click();
  
    });
  });