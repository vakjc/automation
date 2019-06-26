describe('Enroll page payment flow with Upsell', function () {
  it('Enroll page payment flow with Upsell', function () {

    /* 
    Testcase covers the following on the enroll page:
    1. VA enroll page
    2. Payment option toggle check
    3. Successful creation of Account - new user
    4. Choose amount
    5. Buy course
    6. Get redirected to upsell
    7. Buy upsell 
    11. Check payment method and history for VA and AIM course
    12. Re-enroll for VA. SHould not see upsell this time
    13. Check Payment history
    14. Only VA should be visible since there was no upsell for a second time
    */

    // Clean up before test
    cy.ignore_error()
    cy.clearCookies()
    cy.clearLocalStorage()

    const enroll_page = 'https://eng-417.demo.jumpcut.com/enroll/gd5vbvp'

    cy.visit('https://eng-417.demo.jumpcut.com/enroll/gd5vbvp')
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
    cy.get('label.plan-block:nth-child(2) > div:nth-child(1)').should('be.visible').click({force: true})
    cy.get('.todays-total').should('contain', '997')
    // Pay with Credit Card
    cy.cc_pay()
    // Wait for payment to go through
    cy.wait(1000)
    cy.location('pathname',{timeout:10000}).should('contain','/upgrade/aimupsell')
    // Check upsell UI for all UI components
    cy.get('.content__greetings').should('contain','Congratulations!! u15')
    cy.get('.payment__description').should('contain','ending in 0005')
    cy.get('.payment__method').should('contain','Credit Card')
    cy.get('#post-cta__refusal').should('contain','POST CTA NO')
    cy.get('#main-content__title > p').should('contain','POST CTA TEXT')
    cy.get('#main-content__body > p').should('contain','POST CTA BODY')
    cy.get('#payment__buy-md > .payment__btn-text').should('contain','Yes, upgrade my order')
    cy.get('.payment__btn-text > .payment__small > .payment__value').should('contain','$997')
    // Upgrade the course
    cy.get('#payment__buy-md').click()
    cy.wait(1000)
    cy.location('hostname',{timeout:20000}).should('eq','eng-203.app.demo.jumpcut.com')
    // Go to My Account
    cy.my_account()
    // Check for Payment History
    cy.get('.null > :nth-child(6)').should('contain','succeeded')
    cy.get('.null > :nth-child(5)').should('contain','$997')
    cy.get('.null > :nth-child(3)').should('contain','Jumpcut Academy')
    cy.get('tbody > :nth-child(3) > :nth-child(3)').should('contain','Automated Income Machine')
    cy.get(':nth-child(3) > :nth-child(5)').should('contain','$997')
    cy.get(':nth-child(3) > :nth-child(6)').should('contain','succeeded')
    // Check for Payment Method
    cy.get('.accountSettings > :nth-child(4) > a').click({force: true})
    cy.contains('12/2034')
    cy.contains('************0005')
    // Now enroll for VA again. Should not get upsell for AIM since we already have the course
    cy.visit(enroll_page)
    // Pay with Credit Card
    cy.cc_pay()
    cy.wait(1000)
    cy.location('pathname',{timeout:10000}).should('not.contain','/aimupsell')
    cy.location('hostname',{timeout:10000}).should('contain','eng-203.app.demo.jumpcut.com')
    // My account to check payment
    cy.my_account()
    cy.get('tbody > :nth-child(4) > :nth-child(3)').should('contain','Jumpcut Academy')
    cy.get(':nth-child(4) > :nth-child(5)').should('contain','$997')
    cy.get(':nth-child(4) > :nth-child(6)').should('contain','succeeded')
    // Clean up after test
    cy.clearCookies()
    cy.clearLocalStorage()
  });
});