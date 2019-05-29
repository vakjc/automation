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

    const app_host = Cypress.env('app_host')
    const host = Cypress.env('host')
    const enroll_page_code = 'jt6m7b6r6x'

    cy.ignore_error()
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('https://' + host + '/enroll/' + enroll_page_code)
    cy.reload(true)
    cy.location('hostname', { timeout: 10000 }).should('eq', host)

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
    cy.contains('Viral Academy')
    cy.contains('Become A Successful YouTube Influencer')
    cy.contains('Access 15+ hours of premium step-by-step video lessons on how to launch your own profitable YouTube channel. Plus 24 worksheets with assignments, summaries, and resource lists.')
    cy.contains('Help, Advice, & Support Available Anytime')
    cy.contains('Get lifetime access to our exclusive community where you’ll connect with like-minded social media influencers (some with 100,000+ subscribers) to get advice and motivation.')
    cy.contains('7 Bonus Courses At No Additional Cost')
    cy.contains('Included Today: Growth Hacking Facebook, The Legalities of YouTube, The Art of Vlogging, How to Blow Up as a Musician, Gaming For Dollars, Master The Funny, and more.')
    // Check for testimonials
    cy.get('.testimonials > div:nth-child(1)')
      .should('be.visible')
    cy.get('div.row:nth-child(2)')
      .should('be.visible')
    cy.get('div.row:nth-child(3)')
      .should('be.visible')
    // Before creating account the enrollment form must be disabled
    cy.get('#signup-block > div:nth-child(1) > div:nth-child(2)')
      .should('have.class', 'not-active')
    cy.get('#form-container')
      .should('not.have.class', 'active-section')
    // Check Login of existing user
    cy.get('#login').click()
    cy.get('#email')
      .type('vaishnaviajitkumar')
    cy.get('#password')
      .type('tryjumpcut')
    cy.get('#login-block > div:nth-child(2) > button:nth-child(5)').click()
    // Check for GIFT address
    cy.get('#address').type('Haritha, 11th Cross Road, Malleswaram, Bengaluru, Karnataka, India')
      .should('have.value', 'Haritha, 11th Cross Road, Malleswaram, Bengaluru, Karnataka, India')
    cy.get('#city').type('Bangalore')
      .should('have.value', 'Bangalore')
    cy.get('#zipCode').type('560003')
      .should('have.value', '560003')
    cy.get('#country').select('India')
      .should('have.value', 'India')
    cy.get('#region').select('State of Karnātaka')

    // Check for the payment plan options
    cy.contains('Congratulations!')
    cy.get('#form-container > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)')
      .should('have.class', 'active')
    cy.get('label.plan-block:nth-child(2) > div:nth-child(1)').click()
    cy.get('.todays-total').should('contain', '997')
    cy.get('label.plan-block:nth-child(4) > div:nth-child(1)').click()
    cy.get('.todays-total').should('contain', '197')
    cy.get('#policy').should('be.not.be.checked')
    cy.get('#enrollment-btn').click()
    cy.get('.payment-error').should('contain', 'Please review and agree to the 365-day guarantee')
    cy.get('.top-block > a:nth-child(1)').click()
      .url()
      .should('contain', 'https://' + host + '')
    cy.clearCookies()
    cy.visit('https://' + host + '/enroll/' + enroll_page_code)
    // Check for creating account
    cy.get('#signup-block > div:nth-child(1) > div:nth-child(1)')
      .should('contain', 'Create Your Account')
    //Create account successfully
    var entry = 't' + Cypress.moment()
    cy.get('#n_name').type(entry)
    cy.get('#n_email').type(entry + '@jumpcut.com')
    cy.get('#n_username').type(entry)
    cy.get('#n_password').type('abc123')
    cy.get('#signup-block > div:nth-child(2) > button:nth-child(5)').click()
    cy.get('.enrollment-body > div > b').should('contain', 'Congratulations!')
  });
});