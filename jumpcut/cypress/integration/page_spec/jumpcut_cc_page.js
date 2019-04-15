describe('Contagious Content home page UI Test', function () {
    it('Contagious Content home page UI Test', function () {
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        });
        cy.clearCookies()
        cy.clearLocalStorage()

        const app_host = 'app.jumpcut.com'
        const host = 'jumpcut.com'

        // Visit CC homepage
        cy.visit('https://' + host + '/contagious-content')
        cy.reload(true)
        cy.location('hostname', { timeout: 1000 }).should('eq', 'jumpcut.com')

        // Reviews link
        cy.get('#reviews-anchor')
            .should('have.attr', 'href', '/reviews')
        // Company link
        cy.get('#company-anchor')
            .should('have.attr', 'href', '/about')
        // Login link
        cy.get('#login-anchor')
            .should('have.attr', 'href', 'https://' + app_host + '/login')
        // Get Instant Access
        cy.get('#get-course-access > span')
            .should('contain', 'Get instant access')
        cy.get('#get-course-access')
            .should('have.prop', 'href', 'https://' + host + '/enroll/ct7bnsp')
        // Content Check
        cy.get('.content > span')
            .should('contain', 'Contagious content')
        cy.get('.content > h2')
            .should('contain', 'The secret psychology of viral marketing.')
        cy.get('.text > h2')
            .should('contain', '365-Day')
        // Instagram cards
        cy.get('.gingerpale')
            .should('have.class', 'contagious-pro gingerpale js-tilt')
        cy.get('.alex')
            .should('have.class', 'contagious-pro alex js-tilt')
        // Content check
        cy.get('.contagious-program-cards > :nth-child(1) > .text > p')
            .should('contain', 'A quick overview of what you can expect to learn in this course.')
        cy.get(':nth-child(5) > .text > p')
            .should('contain', 'We\'ve interviewed social media experts from 5 major platforms to get the best tips, advice, and secrets.')
        cy.get(':nth-child(2) > .inner > .fade-in-left')
            .should('contain', 'Do I need to be a social media influencer')
        // Check course links at the bottom of the page
        cy.get('#view-course-va-bottom')
            .should('have.prop', 'href', 'https://' + host + '/viral-academy')
        cy.get('#view-course-aim-bottom')
            .should('have.prop', 'href', 'https://' + host + '/automated-income-machine')
        cy.get('#view-course-cc-bottom')
            .should('have.prop', 'href', 'https://' + host + '/contagious-content')
    });
});


