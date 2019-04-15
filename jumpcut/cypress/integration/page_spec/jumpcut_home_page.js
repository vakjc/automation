describe('Jumpcut home page UI Test', function () {
    it('Jumpcut home page UI Test', function () {

        cy.ignore_error()
        cy.clearCookies()
        cy.clearLocalStorage()

        const app_host = 'app.jumpcut.com'
        const host = 'jumpcut.com'

        cy.visit('https://' + host + '/')
        cy.reload(true)
        // Check Reviews link
        cy.get('#reviews-anchor')
            .should('have.attr', 'href', '/reviews')
        // Check Company link
        cy.get('#company-anchor')
            .should('have.attr', 'href', '/about')
        // Check Login link
        cy.get('#login-anchor')
            .should('have.attr', 'href', 'https://' + app_host + '/login')
        // Check Courses dropdown
        cy.get('#on-ready > div > ul > li.item.parent.courses > a')
            .should('have.class', 'anchor has-dropdown').and('have.attr', 'href', '#')
            .click({force: true})
        cy.get('#view-course-va-sidebar')
            .should('have.attr', 'href', '/viral-academy')
        cy.get('#view-course-aim-sidebar')
            .should('have.attr', 'href', '/automated-income-machine')
        cy.get('#view-course-cc-sidebar')
            .should('have.attr', 'href', '/contagious-content')
        cy.get('#on-ready > div > ul > li.item.parent.courses.active > div > header > img').click({force: true})
        // Check for Header
        cy.get('body > div.home-top > div > div.cta.on-ready.fade-in-up > h1')
            .should('contain', 'Like Business School, Only 100,000x Better.')
        // Check for GET STARTED button
        cy.get('#get-course-started')
            .should('have.class', 'button').and('contain', 'Get Started')
        // Check each individual course
        cy.get('#view-course-va')
            .should('have.prop', 'href', 'https://' + host + '/viral-academy')
        cy.get('#view-course-aim')
            .should('have.prop', 'href', 'https://' + host + '/automated-income-machine')
        cy.get('#view-course-cc')
            .should('have.prop', 'href', 'https://' + host + '/contagious-content')
        cy.get('#view-course-va > span.button.full')
            .should('contain', 'View Course')
            .request('https://' + host + '/viral-academy')
            .its('status')
            .should('eq', 200)
        cy.get('#view-course-aim > span.button.full')
            .should('contain', 'View Course')
            .request('https://' + host + '/automated-income-machine')
            .its('status')
            .should('eq', 200)
        cy.get('body > div.home-light > div > div > div > a.home-course.cc > span.button.full')
            .should('contain', 'View Course')
            .request('https://' + host + '/contagious-content')
            .its('status')
            .should('eq', 200)
        // Check Review stories
        cy.get('.card-Laurie > .home-story-inner > .home-story-bottom > .home-story-read > .button')
            .should('have.attr', 'href', '/reviews/laurie-kevin')
        cy.request('https://' + host + '/reviews/laurie-kevin')
            .its('body')
            .should('include', 'SACRIFICES THAT LED NOWHERE')
            .and('include', 'MEET')
            .and('include', 'the couple behind the Icing Artist.')
            .and('include', '</html>')
        cy.get('.card-Peter > .home-story-inner > .home-story-bottom > .home-story-read > .button')
            .should('have.attr', 'href', '/reviews/peter')
        cy.request('https://' + host + '/reviews/peter')
            .its('body')
            .should('include', 'Hitting Rock Bottom')
            .and('include', 'MEET')
            .and('include', 'AKA Lingualizer')
            .and('include', '</html>')
        cy.get('#stories-next > img').click({force: true})
        cy.get('.card-HARSHYT > .home-story-inner > .home-story-bottom > .home-story-read > .button')
            .should('have.attr', 'href', '/reviews/harshyt-david')
        cy.request('https://' + host + '/reviews/harshyt-david')
            .its('body')
            .should('include', 'A Starving Artist’s Struggle')
            .and('include', 'MEET')
            .and('include', 'AKA Riffshop')
            .and('include', '</html>')
        // Check course links at the bottom
        cy.get('#view-course-va-bottom')
            .should('have.prop', 'href', 'https://' + host + '/viral-academy')
        cy.get('#view-course-aim-bottom')
            .should('have.prop', 'href', 'https://' + host + '/automated-income-machine')
        cy.get('#view-course-cc-bottom')
            .should('have.prop', 'href', 'https://' + host + '/contagious-content')
    });
});

