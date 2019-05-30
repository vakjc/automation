describe('Jumpcut enroll page UI Test', function () {
    it('Jumpcut enroll page UI Test', function () {

        /* 
        Testcase covers the following on the AIM enroll page:
        1. Link to Jumpcut home
        2. Link to Jumpcut support
        3. Title, Text
        4. Testimonials
        5. Before creating account the enrollment form must be disabled
        6. Check Login of existing user
        7. Payment option toggle check
        8. Successful creation of Account
        */

        const app_host = Cypress.env('app_host')//'eng-232.app.demo.jumpcut.com'
        const host = Cypress.env('host')//'eng-232.demo.jumpcut.com'
        const enroll_page_code = 'ne9jp9m'

        cy.ignore_error()
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://' + host + '/enroll/' + enroll_page_code)
        cy.reload(true)
        cy.location('hostname',{timeout:10000}).should('eq','jumpcut.com')

        // Check for link to homepage
        cy.get('.top-block > a:nth-child(1)')
            .should('have.attr', 'href', '/')
        // Check for support
        cy.get('div.enrollment-question:nth-child(3) > a:nth-child(1)')
            .should('have.prop', 'href', 'https://docs.google.com/forms/d/e/1FAIpQLSe3eYYbNSOXoncox-Q0hgV3pm-wzBq-ixoaLEs9giDj3GzAIQ/viewform')
        cy.request('https://docs.google.com/forms/d/e/1FAIpQLSe3eYYbNSOXoncox-Q0hgV3pm-wzBq-ixoaLEs9giDj3GzAIQ/viewform')
            .its('body')
            .should('contain', 'Submit a Request')
            .and('contain', 'support@jumpcut.com')
        // Check for Title
        cy.contains('Automated Income Machine')
        cy.contains('Launch Your Profitable Online Business')
        cy.contains('Access 15+ hours of premium step-by-step video lessons on how to launch your own profitable online business. Plus 44 worksheets with assignments, summaries, and resource lists.')
        cy.contains('Help, Advice, & Support Available Anytime')
        cy.contains('Get lifetime access to our exclusive community where you’ll connect with like-minded ambitious entrepreneurs (some with successful online businesses) to get advice and motivation.')
        cy.contains('Advanced Bonus Content At No Extra Cost')
        cy.contains('Access 3+ hours of bonus training and case studies, as well as 5 step-by-step fill-in-the-blanks marketing templates to create high-converting emails, sales pages, and more')
        // Check for testimonials
        cy.get('.testimonials > div:nth-child(1)')
          .should('be.visible')
        cy.get('div.row:nth-child(2)')
          .should('be.visible')
        cy.get('div.row:nth-child(3)')
          .should('be.visible')
        // Before creating account the enrollment form must be disabled
        cy.get('#signup-block > div:nth-child(1) > div:nth-child(2)')
          .should('have.class','not-active')
        cy.get('#form-container')
          .should('not.have.class','active-section')
        // Check Login of existing user
        cy.get('#login').click()
        cy.get('#email')
          .type('vaishnaviajitkumar')
        cy.get('#password')
          .type('tryjumpcut')
        cy.get('#login-block > div:nth-child(2) > button:nth-child(5)').click()
        // Check for the payment plan options
        cy.contains('Congratulations!')
        cy.get('#form-container > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)')
          .should('have.class','active')
        cy.get('label.plan-block:nth-child(2) > div:nth-child(1)').click()
        cy.get('.todays-total').should('contain','997')
        cy.get('label.plan-block:nth-child(4) > div:nth-child(1)').click()
        cy.get('.todays-total').should('contain','197')
        cy.get('#policy').should('be.not.be.checked')
        cy.get('#enrollment-btn').click()
        cy.get('.payment-error').should('contain','Please review and agree to the 365-day guarantee')
        cy.get('.top-block > a:nth-child(1)').click()
          .url()
          .should('contain','https://' + host + '')
        cy.clearCookies()
        cy.visit('https://' + host + '/enroll/' + enroll_page_code)
        // Check for creating account
        cy.get('#signup-block > div:nth-child(1) > div:nth-child(1)')
            .should('contain', 'Create Your Account')
        //Create account successfully
        var entry = 't' + Cypress.moment()
        cy.get('#n_name').type(entry)
        cy.get('#n_email').type(entry+'@jumpcut.com')
        cy.get('#n_username').type(entry)
        cy.get('#n_password').type('abc123')
        cy.get('#signup-block > div:nth-child(2) > button:nth-child(5)').click()
        cy.get('.enrollment-body > div > b').should('contain','Congratulations!') 
    });
});