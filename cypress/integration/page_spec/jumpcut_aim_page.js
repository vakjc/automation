describe('Automated Income Machine UI check', function () {
    it('Automated Income Machine UI Check', function () {
        cy.ignore_error()
        cy.clearCookies()

        const app_host = 'app.jumpcut.com'
        const host = 'jumpcut.com'

        cy.visit('https://' + host + '/automated-income-machine')
        // Reviews link
        cy.get('#reviews-anchor')
            .should('have.attr', 'href', '/reviews')
        // Company link
        cy.get('#company-anchor')
            .should('have.attr', 'href', '/about')
        // Login link
        cy.get('#login-anchor')
            .should('have.attr', 'href', 'https://' + app_host + '/login')
        // Signup 
        cy.get('#signUpTop > :nth-child(1) > .form-control').type('newaimuser')
            .should('have.value', 'newaimuser')
        cy.get('#signUpTop > :nth-child(2) > .form-control').type('newaimuser@jumpcut.com')
            .should('have.value', 'newaimuser@jumpcut.com')
        cy.get('#optin-submit-top').should('contain', 'START THE COURSE NOW')
        // Content description
        cy.get('#aim-container > section.details > div > div.row.row-details-flipboxes > div:nth-child(1) > div > div.front > div > h4')
            .should('contain', 'Laying The Groundwork')
        cy.get('#aim-container > section.details > div > div.row.row-details-flipboxes > div:nth-child(6) > div > div.front > div > p')
            .should('contain', 'How would you like to dive deep into the advanced psychological strategy surrounding digital products? In this week, we’ll show you…')
        cy.get('#aim-container > section.details > div > div.row.row-details-flipboxes > div:nth-child(12) > div > div.front > div > span.week')
            .should('contain', 'week 12')
        // Bonus section
        cy.get('#aim-container > section.bonus-training > div > div:nth-child(2) > div:nth-child(3) > div > div.bonus-box-inn > h4')
            .should('contain', 'Marketing Template')
        // Signup on the bottom of the page
        cy.get('#signUpBottom > div:nth-child(1) > input').type('newaimuser')
            .should('have.value', 'newaimuser')
        cy.get('#signUpBottom > div:nth-child(2) > input').type('newaimuser@jumpcut.com')
            .should('have.value', 'newaimuser@jumpcut.com')
        cy.get('#optin-submit-bottom').should('contain', 'START THE COURSE NOW')
        // Common links
        cy.get('.ft-r > :nth-child(1) > :nth-child(1) > a')
            .should('have.attr', 'href', 'https://' + host + '/reviews')
        cy.get('.ft-r > :nth-child(1) > :nth-child(2) > a')
            .should('have.attr', 'href', 'https://blog.jumpcut.com/')
        cy.get('.ft-r > :nth-child(1) > :nth-child(3) > a')
            .should('have.attr', 'href', 'https://' + app_host + '/login')
        cy.get('.ft-r > :nth-child(2) > :nth-child(1) > a')
            .should('have.attr', 'href', 'https://' + host + '/about')

    });
});