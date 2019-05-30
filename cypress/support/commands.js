// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// IGNORE ERROR

Cypress.Commands.add('ignore_error', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})

// Common links for VA

var va_catalog = 'https://app.jumpcut.com/catalog/viral-entrepreneur-academy'
var va_course = 'https://app.jumpcut.com/course/viral-entrepreneur-academy'
var va_enroll = 'https://app.jumpcut.com/enroll/tfxtdr5h'
var va_vsl = 'https://app.jumpcut.com/course/0b6ce06b-30e1-4b93-94fb-d41924311de8/video/you-are-an-influencer'

// Common links for AIM

var aim_catalog = 'https://app.jumpcut.com/catalog/automated-income-machine'
var aim_course = 'https://app.jumpcut.com/course/automated-income-machine'
var aim_enroll = 'https://app.jumpcut.com/enroll/ne9jp9m'
var aim_vsl = 'https://app.jumpcut.com/course/8aee1876-8963-4c48-97d2-1ca8fed2392a/video/welcome'

// Common links for AOTS

var aots_catalog = 'https://app.jumpcut.com/catalog/art-of-the-startup'
var aots_course = 'https://app.jumpcut.com/course/art-of-the-startup'
var aots_enroll = 'https://app.jumpcut.com/enroll/dt4w9gf'
var aots_vsl = 'https://app.jumpcut.com/course/f4a8a2d0-18a0-463d-8942-6f948aca9639/video/meet-justin-kan'

// LOGIN

// Visits login directly
// Enters the email/user, pwd passed 
// Click Login
// Waits for page to load as sometimes this is slow to load

Cypress.Commands.add('login', (email, pw) => {
    cy.visit('https://app.jumpcut.com/login')
    cy.get('#root > div > div > main > div > div.login-form-wrap > form > div:nth-child(1) > div > input[type="text"]')
        .type(email)
        .should('have.value', email)
    cy.get('#root > div > div > main > div > div.login-form-wrap > form > div:nth-child(2) > div > input[type="password"]')
        .type(pw)
        .should('have.value', pw)
    cy.get('#root > div > div > main > div > div.login-form-wrap > form > div.buttonWrap > div > button').click()
    cy.wait(6000)
})

// LOGOUT

// Visits account page
// Clicks logout from dropdown

Cypress.Commands.add('logout',()=> {
    cy.wait(6000)
    cy.get('#dropper').click({ force: true })
    // Click Logout from dropdown
    cy.get('#user-dropdown > li:nth-child(2) > a').click({ force: true })
})

// CLICK UNLOCK COURSE BUTTON FOR VA FOR EXISTING USER

// On page where courses are listed
// Clicks on Unlock Course button associated with VA

Cypress.Commands.add('click_unlock_course_va_user', () => {
    cy.get(':nth-child(1) > .info-block > .course-buttons-block > .course-primary-button > .course-button-text').click()
        .url()
        .should('contain', va_catalog)
})

// CLICK ENROLL FROM VSL FOR VA FOR EXISTING USER 

// Clicks on Instant access from /catalog/viral-entrepreneur-academy 
// This leads to enroll page for VA /enroll/tfxtdr5h
// Checks that the page contains everything like Enrollment button, etc

Cypress.Commands.add('enroll_va_user', () => {
    cy.get('#root > div > div > main > div > div.content > div:nth-child(7) > a')
        .should('have.attr', 'href', va_enroll)
    // Clicking on this href opens a new tab in the browser. This testing is not supported by Cypress
    // One of the workarounds is to use cy.request() and verify that the body contains elements we are looking for
    // Other workarounds are at : https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/testing-dom__tab-handling-links/cypress/integration/tab_handling_anchor_links_spec.js
    cy.request(va_enroll)
        .its('body')
        .should('include', 'enrollment-btn')
        .and('include', 'Enroll Now')
        .and('include', '</html>')
})

// CLICK ON VIEW COURSE FOR EXISTING USER FOR VA

// On page where courses are listed
// Click on View Course for VA
// Rediected to /course/viral-entrepreneur-academy
// Click on Learn more
// Redirected to VSL page with the link to enrollment

Cypress.Commands.add('view_course_va_user', () => {
    cy.get('#root > div > div > main > div > div:nth-child(1) > div.info-block > div.course-buttons-block > a.course-button')
        .should('have.prop', 'href', va_course)
        .click()
        .url()
        .should('contain', va_course)
    cy.wait(6000)
    cy.get('.start-course-btn')
        .should('have.prop', 'href', va_vsl)
        .click()
        .url()
        .should('contain', va_vsl)
    cy.get('#root > div > div > main > div > div > div.left-panel.menu-open > div.innerContent > div > div > div')
        .should('contain', 'You don\'t have access to this course. Click the button below to learn more.')
    cy.get('#root > div > div > main > div > div > div.left-panel > div.innerContent > div > div > a')
        .should('have.prop', 'href', va_catalog)
        .click()
        .url()
        .should('contain', va_catalog)
})

// *********************************** AIM RELATED **********************************************

// CLICK UNLOCK COURSE BUTTON FOR AIM FOR EXISTING USER

// On page where courses are listed
// Clicks on Unlock Course button associated with AIM

Cypress.Commands.add('click_unlock_course_aim_user', () => {
    cy.get('#root > div > div > main > div > div:nth-child(2) > div.info-block > div.course-buttons-block > a.course-primary-button').click()
        .url()
        .should('contain', aim_catalog)
})

// CLICK ENROLL FROM VSL FOR AIM FOR EXISTING USER 

// Clicks on Instant access from /catalog/automated-income-machine 
// This leads to enroll page for AIM /enroll/tfxtdr5h
// Checks that the page contains everything like Enrollment button, etc

Cypress.Commands.add('enroll_aim_user', () => {
    cy.get('#root > div > div > main > div > div.content > div:nth-child(7) > a')
        .should('have.attr', 'href', aim_enroll)
    // Clicking on this href opens a new tab in the browser. This testing is not supported by Cypress
    // One of the workarounds is to use cy.request() and verify that the body contains elements we are looking for
    // Other workarounds are at : https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/testing-dom__tab-handling-links/cypress/integration/tab_handling_anchor_links_spec.js
    cy.request(aim_enroll)
        .its('body')
        .should('include', 'enrollment-btn')
        .and('include', 'Enroll Now')
        .and('include', '</html>')
})

// CLICK ON VIEW COURSE FOR EXISTING USER FOR AIM

// On page where courses are listed
// Click on View Course for AIM
// Rediected to /course/automated-income-machine
// Click on Learn more
// Redirected to VSL page with the link to enrollment

Cypress.Commands.add('view_course_aim_user', () => {
    cy.get('#root > div > div > main > div > div:nth-child(2) > div.info-block > div.course-buttons-block > a.course-button')
        .should('have.prop', 'href', aim_course)
        .click()
        .url()
        .should('contain', aim_course)
    cy.wait(6000)
    cy.get('.start-course-btn')
        .should('have.prop', 'href', aim_vsl)
        .click()
        .url()
        .should('contain', aim_vsl)
    cy.get('#root > div > div > main > div > div > div.left-panel.menu-open > div.innerContent > div > div > div')
        .should('contain', 'You don\'t have access to this course. Click the button below to learn more.')
    cy.get('#root > div > div > main > div > div > div.left-panel > div.innerContent > div > div > a')
        .should('have.prop', 'href', aim_catalog)
        .click()
        .url()
        .should('contain', aim_catalog)
})

// *********************************** AOTS RELATED **********************************************

// CLICK UNLOCK COURSE BUTTON FOR AOTS FOR EXISTING USER

// On page where courses are listed
// Clicks on Unlock Course button associated with AOTS

Cypress.Commands.add('click_unlock_course_aots_user', () => {
    cy.get('div.courses-list-item:nth-child(3) > div:nth-child(2) > div:nth-child(4) > a:nth-child(1)').click()
        .url()
        .should('contain', aots_catalog)
})

// CLICK ENROLL FROM VSL FOR AOTS FOR EXISTING USER 

// Clicks on Instant access from /catalog/automated-income-machine 
// This leads to enroll page for AOTS /enroll/dt4w9gf
// Checks that the page contains everything like Enrollment button, etc

Cypress.Commands.add('enroll_aots_user', () => {
    cy.get('.content > a:nth-child(4)')
        .should('have.attr', 'href', aots_enroll)
    // Clicking on this href opens a new tab in the browser. This testing is not supported by Cypress
    // One of the workarounds is to use cy.request() and verify that the body contains elements we are looking for
    // Other workarounds are at : https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/testing-dom__tab-handling-links/cypress/integration/tab_handling_anchor_links_spec.js
    cy.request(aots_enroll)
        .its('body')
        .should('include', 'Enrollment Page (Initialized, Apex)')
        .and('include', 'Enroll Now')
        .and('include', '</html>')
})

// CLICK ON VIEW COURSE FOR EXISTING USER FOR AOTS

// On page where courses are listed
// Click on View Course for AOTS
// Rediected to /course/art-of-the-startup
// Click on Learn more
// Redirected to VSL page with the link to enrollment

Cypress.Commands.add('view_course_aots_user', () => {
    cy.get('div.courses-list-item:nth-child(3) > div:nth-child(2) > div:nth-child(4) > a:nth-child(2)')
        .should('have.prop', 'href', aots_course)
        .click()
        .url()
        .should('contain', aots_course)
    cy.wait(6000)
    cy.get('.start-course-btn')
        .should('have.prop', 'href', aots_vsl)
        .click()
        .url()
        .should('contain', aots_vsl)
    cy.get('#root > div > div > main > div > div > div.left-panel.menu-open > div.innerContent > div > div > div')
        .should('contain', 'You don\'t have access to this course. Click the button below to learn more.')
    cy.get('#root > div > div > main > div > div > div.left-panel > div.innerContent > div > div > a')
        .should('have.prop', 'href', aots_catalog)
        .click()
        .url()
        .should('contain', aots_catalog)
})

// NAVIGATE TO MY ACCOUNT ON APP JUMPCUT TO VIEW PAYMENT HISTORY

Cypress.Commands.add('my_account',() => {
    cy.get('.hamburger-box').click()
    cy.get('.rah-static > div > .navbar-links > .account > a').click({force: true})
    cy.get('.accountSettings > :nth-child(3) > a').click({force: true})
})

// PAYMENT VIA CREDIT CARD

Cypress.Commands.add('cc_pay',() => {
    cy.get('#braintree-hosted-field-number')
      .then(function ($iframe) {
        const $body = $iframe.contents().find('body')
        cy
          .wrap($body)
          .find('#credit-card-number')
          .type('378282246310005')
      })
    cy.get('#braintree-hosted-field-expirationDate')
      .then(function ($iframe) {
        const $body = $iframe.contents().find('body')
        cy
          .wrap($body)
          .find('#expiration')
          .type('12/34')
      })
    cy.get('#braintree-hosted-field-cvv')
      .then(function ($iframe) {
        const $body = $iframe.contents().find('body')
        cy
          .wrap($body)
          .find('#cvv')
          .type('11111')
      })
    cy.get('#braintree-hosted-field-postalCode')
      .then(function ($iframe) {
        const $body = $iframe.contents().find('body')
        cy
          .wrap($body)
          .find('#postal-code')
          .type('12ABC')
      })
      cy.get('.policy-block > label:nth-child(2)').click({ force: true })
      cy.get('#policy').should('be.checked')
      // Enroll for course
      cy.get('#enrollment-btn').click()
})
