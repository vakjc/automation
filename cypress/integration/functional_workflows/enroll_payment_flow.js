describe('Enroll page payment flow without Upsell', function () {
  it('Enroll page payment flow without Upsell', function () {

    /* 
    Testcase covers the following on the enroll page:
    1. Link to Jumpcut home
    2. Link to Jumpcut support
    3. Title, Text
    4. Testimonials
    5. Before creating account the enrollment form must be disabled
    6. Check Login of existing user
    7. Payment option toggle check
    8. Successful creation of Account
    9. Choose amount
    10. Buy course
    11. Check payment method and history 
    */

    // Clean up before test
    cy.ignore_error()
    cy.clearCookies()
    cy.clearLocalStorage()
    //app_host = Cypress.env('app_host_demo')
    cy.visit('https://eng-381.demo.jumpcut.com/enroll/ne9jp9m')
    cy.reload(true)
    // Create account for a new user
    var entry = 'u' + Cypress.moment()
    cy.get('#n_name').type(entry,{force: true} )
    cy.get('#n_email').type(entry+'@jumpcut.com',{force: true} )
    cy.get('#n_username').type(entry,{force: true} )
    cy.get('#n_password').type('abc123',{force: true} )
    cy.get('#signup-block > div:nth-child(2) > button:nth-child(5)').click({force: true})
    // Wait for create account to go through and price section to become visible
    cy.wait(3000)
    // Select the 997 one time payment 
    //cy.get('label.plan-block:nth-child(2) > div:nth-child(1)').should('be.visible').click({force: true})
    cy.get('[for="plan-27464ff0-4df5-4f5f-b674-5d5a8b629cd0"] > .price-block').should('be.visible').click({force: true})
    cy.get('.todays-total').should('contain', '197')
    // Pay with Credit Card
    cy.get('#braintree-hosted-field-number')
      .then(function ($iframe) {
        const $body = $iframe.contents().find('body')
        cy
          .wrap($body)
          .find('#credit-card-number')
          .type('378282246310005')//5115720006126548')//
      })
    cy.get('#braintree-hosted-field-expirationDate')
      .then(function ($iframe) {
        const $body = $iframe.contents().find('body')
        cy
          .wrap($body)
          .find('#expiration')
          .type('12/34') //03/2022')//
      })
    cy.get('#braintree-hosted-field-cvv')
      .then(function ($iframe) {
        const $body = $iframe.contents().find('body')
        cy
          .wrap($body)
          .find('#cvv')
          .type('11111') //087')//'
      })
    cy.get('#braintree-hosted-field-postalCode')
      .then(function ($iframe) {
        const $body = $iframe.contents().find('body')
        cy
          .wrap($body)
          .find('#postal-code')
          .type('12ABC') //90028')//
      })
    cy.get('.policy-block > label:nth-child(2)').click({ force: true })
    cy.get('#policy').should('be.checked')
    // Enroll for course
    cy.get('#enrollment-btn').click()
    cy.wait(1000)
    cy.location('hostname',{timeout:20000}).should('eq','app.jumpcut.com')
    // Go to My Account
    cy.get('.hamburger-box').click()
    cy.get('.rah-static > div > .navbar-links > .account > a').click({force: true})
    // Check for Payment History
    cy.get('.accountSettings > :nth-child(3) > a').click({force: true})
    cy.get('.null > :nth-child(6)').should('contain','succeeded')
    cy.get('.null > :nth-child(5)').should('contain','$197')
    cy.get('.null > :nth-child(3)').should('contain','Automated Income Machine')
    // Check for Payment Method
    cy.get('.accountSettings > :nth-child(4) > a').click({force: true})
    cy.contains('03/2022')
    cy.contains('************6548')
    // Clean up after test
    cy.clearCookies()
    cy.clearLocalStorage()

  });
});