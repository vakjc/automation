describe('Enroll page payment flow without Upsell Paypal', function () {
  it('Enroll page payment flow without Upsell Paypal', function () {

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
    //eng-203.demo.jumpcut.com
    app_host = Cypress.env('app_host_demo')
    cy.visit('https://' + Cypress.env('host_demo') + '/enroll/ne9jp9m')
    cy.reload(true)
    cy.get('#login').click()
    cy.get('#email')
      .type('aots')
    cy.get('#password')
      .type('12345678')
    cy.get('#login-block > div:nth-child(2) > button:nth-child(5)').click()
    // Create account for a new user
    //var entry = 'u' + Cypress.moment()
    //cy.get('#n_name').type(entry,{force: true} )
    //cy.get('#n_email').type(entry+'@jumpcut.com',{force: true} )
    //cy.get('#n_username').type(entry,{force: true} )
    //cy.get('#n_password').type('abc123',{force: true} )
    //cy.get('#signup-block > div:nth-child(2) > button:nth-child(5)').click({force: true})
    // Wait for create account to go through and price section to become visible
    cy.wait(3000)
    // Select the 997 one time payment 
    cy.get('label.plan-block:nth-child(2) > div:nth-child(1)').should('be.visible').click({force: true})
    cy.get('.todays-total').should('contain', '997')
    cy.get(':nth-child(4) > label > div').click({ force: true })
    cy.get('.policy-block > label:nth-child(2)').click({ force: true })
    cy.get('#policy').should('be.checked')
    // Enroll for course
    cy.get('#enrollment-btn').click()
    cy.wait(1000)
    // Pay with PayPal
    //cy.get('#dispatch_a615c6ed95c646f0991523e4162484d1')
    cy.get(".braintree-dispatch-frame").then($iframe => {
      const $body = $iframe.contents().find('body')
      console.log($body.contents())
      cy
      .wrap($body).find('body')
      //console.log($body.find('body')).find('a')
     // console.log(document.getElementsByClassName('braintree-dispatch-frame').contentWindow)
   })
    //cy.get('#return_url').click()
    cy.location('hostname',{timeout:20000}).should('eq',app_host)
    // Go to My Account
    cy.get('.hamburger-box').click()
    cy.get('.rah-static > div > .navbar-links > .account > a').click({force: true})
    // Check for Payment History
    cy.get('.accountSettings > :nth-child(3) > a').click({force: true})
    cy.get('.null > :nth-child(6)').should('contain','succeeded')
    cy.get('.null > :nth-child(5)').should('contain','$997')
    cy.get('.null > :nth-child(3)').should('contain','Automated Income Machine')
    // Check for Payment Method
    cy.get('.accountSettings > :nth-child(4) > a').click({force: true})
    cy.contains('12/2034')
    cy.contains('************0005')
    // Clean up after test
    cy.clearCookies()
    cy.clearLocalStorage()

  });
});