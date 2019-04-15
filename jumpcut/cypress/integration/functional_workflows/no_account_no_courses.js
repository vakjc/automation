describe('Customer journey for user with no account and no courses', function () {
    it('Customer journey for user with no account and no courses', function () {
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        });

        cy.clearLocalStorage()
        cy.clearCookies()
        // Check behavior for VA
        const app_host = 'app.jumpcut.com'
        const host = 'jumpcut.com' 

        cy.visit('https://'+ app_host + '/course/viral-entrepreneur-academy/video/you-are-an-influencer')
        cy.get('#root > div > div > main > div > div > div.left-panel.menu-open > div.innerContent > div > div > div')
            .should('contain', 'You don\'t have access to this course. Click the button below to learn more.')
        cy.get('.course-media-no-access > a:nth-child(2)')
            .should('have.prop', 'href', 'https://' + host + '/1/skz6okb/optin?campaign_id=e5698ee6-bab9-4335-8a67-73c5bbafab3e')

        // Check behavior for AIM

        cy.visit('https://' + app_host + '/course/8aee1876-8963-4c48-97d2-1ca8fed2392a/video/welcome')
        cy.get('#root > div > div > main > div > div > div.left-panel.menu-open > div.innerContent > div > div > div')
            .should('contain', 'You don\'t have access to this course. Click the button below to learn more.')
        cy.get('.course-media-no-access > a:nth-child(2)')
            .should('have.prop', 'href', 'https://' + host + '/1/aimvpa/optin?campaign_id=1447e42a-31e7-43bd-bdb5-d64c425273b4')

        // Check behavior for AOTS

        cy.visit('https://' + app_host + '/course/f4a8a2d0-18a0-463d-8942-6f948aca9639/video/meet-justin-kan')
        cy.get('#root > div > div > main > div > div > div.left-panel.menu-open > div.innerContent > div > div > div')
            .should('contain', 'You don\'t have access to this course. Click the button below to learn more.')
        cy.get('.course-media-no-access > a:nth-child(2)')
            .should('have.prop', 'href', 'https://' + host + '/art-of-the-startup')

    });
});