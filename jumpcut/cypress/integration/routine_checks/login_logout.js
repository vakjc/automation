describe('Login Test', function () {
  it('Login, check for courses listed and Logout', function () {

    cy.ignore_error()
    cy.clearCookies()
    cy.clearLocalStorage()

    cy.visit('https://jumpcut.com')
    cy.reload(true)
    // Click on LOGIN on Jumpcut homepage
    cy.get('#login-anchor')
      .should('have.prop','href','https://app.jumpcut.com/login')
      .click({force: true})
    cy.reload(true)
    // Enter Username and verify that the correct value is entered
    cy.get('#root > div > div > main > div > div.login-form-wrap > form > div:nth-child(1) > div > input[type="text"]')
      .type('vaishnaviajitkumar')
      .should('have.value', 'vaishnaviajitkumar')
    // Enter password and verify that the correct value is entered
    cy.get('#root > div > div > main > div > div.login-form-wrap > form > div:nth-child(2) > div > input[type="password"]')
      .type('tryjumpcut')
      .should('have.value', 'tryjumpcut')
    // Click on Login Button
    cy.get('#root > div > div > main > div > div.login-form-wrap > form > div.buttonWrap > div > button').click()
  
    // Verify that we have reached page where courses are listed
    cy.get('[href="https://forum.jumpcut.com"] > .course-button-text',{timeout:10000})
    //cy.contains('View Community')
      .should('contain', 'View Community')
    // Click on name to Logout
    cy.get('#dropper').click({ force: true })
    // Click Logout from dropdown
    cy.get('#user-dropdown > li:nth-child(2) > a')
      .should('have.attr','href','#')
      .click({ force: true })
    // Wait for homepage to load
    cy.location('hostname',{timeout: 10000}).should('eq', 'jumpcut.com')
    // Verify that we have logged out and have been routed to Jumpcut homepage
    cy.url()
      .should('contain', 'https://jumpcut.com/')
  });
});