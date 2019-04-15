describe('Viral Academy UI check', function () {
    it('Viral Academy UI check', function () {
        cy.ignore_error()
        cy.clearCookies()

        const app_host = 'app.jumpcut.com'
        const host = 'jumpcut.com'

        cy.visit('https://' + host + '/viral-academy')
        // Reviews link
        cy.get('#reviews-anchor')
            .should('have.attr', 'href', '/reviews')
        // Company link
        cy.get('#company-anchor')
            .should('have.attr', 'href', '/about')
        // Login link
        cy.get('#login-anchor')
            .should('have.attr', 'href', 'https://' + app_host + '/login')
        // Title check
        cy.get('.banner > :nth-child(1)').should('contain', 'Viral')
        cy.get('.banner > :nth-child(2)').should('contain', 'Academy')
        // Input entry check for new user
        cy.get('#submit-form > :nth-child(1) > #firstname').type('newuser')
            .should('have.value', 'newuser')
        cy.get('#submit-form > :nth-child(2) > #email').type('newuser@jumpcut.com')
            .should('have.value', 'newuser@jumpcut.com')
        cy.get('#optin-submit').should('contain', 'Start the course now')
        // Success stories
        cy.get('#AirUp > a').should('have.attr', 'href', 'https://vimeo.com/230857933')
        cy.get('#habbitNest > a').should('have.attr', 'href', 'https://vimeo.com/230861207')
        // Modules listed
        cy.get('.slick-active > .top > .col-sm-9 > .row > :nth-child(2) > .name').should('contain', 'Social Media Secrets')
        cy.get(':nth-child(5) > .top > .col-sm-9 > .row > :nth-child(2) > .name').should('contain', 'Paid to Promote')
        // Videos of success stories
        cy.get('[data-name="The Legalities of Youtube"] > .disable-desktop > .col-xs-8 > .name').should('be.visible')
        cy.get('[data-name="The JK Empire"] > .disable-desktop > .col-xs-8 > .name').should('be.visible')
        cy.get('body > div.container-fluid > div:nth-child(6) > div > div.row.frame-both-sides.bonus-wrapp > div.video-list.p-0.col-xs-12.col-md-4 > div:nth-child(2) > a')
            .should('have.attr', 'href', 'https://' + app_host + '/course/gaming-for-dollars/video/gaming-for-dollars-trailer')
        cy.get('body > div.container-fluid > div:nth-child(6) > div > div.row.frame-both-sides.bonus-wrapp > div.video-list.p-0.col-xs-12.col-md-4 > div:nth-child(3) > a')
            .should('have.attr', 'href', 'https://' + app_host + '/course/growth-hacking-facebook/video/meet-james-shamsi')
        // Statistics of success stories
        cy.get('body > div.container-fluid > div:nth-child(8) > div > div.instructors.row.frame-both-sides > div:nth-child(1) > div > div.photo-container > p.channel')
            .should('contain', '/DavidSoComedy')
        cy.get('body > div.container-fluid > div:nth-child(8) > div > div.instructors.row.frame-both-sides > div:nth-child(4) > div > div.photo-container > p.channel')
            .should('contain', '/simplepickup')
        cy.get('body > div.container-fluid > div:nth-child(9) > div > div.row.content > div > div > button.btn.btn-primary.btn-icon-yt.hidden-md-up')
            .should('have.attr', 'href', '#top')
            .should('contain', 'Get free YouTube Training')
        // Support form
        cy.get('body > div.container-fluid > div:nth-child(10) > div > p > a')
            .should('have.prop', 'href', 'https://jumpcutsupport.zendesk.com/hc/en-us/requests/new')
        // Common links on page footer
        cy.get('.footer-navbar > :nth-child(1) > a')
            .should('have.attr', 'href', 'https://' + host + '/reviews')
        cy.get('.footer-navbar > :nth-child(2) > a')
            .should('have.attr', 'href', 'https://' + host + '/blog/')
        cy.get('.footer-navbar > :nth-child(3) > a')
            .should('have.attr', 'href', 'https://' + host + '/about')
        cy.get('.footer-navbar > :nth-child(4) > a')
            .should('have.attr', 'href', 'https://' + app_host + '/login')
    });
});