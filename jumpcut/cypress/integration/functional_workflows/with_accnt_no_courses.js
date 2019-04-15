describe('Customer journey for user with account and no courses', function () {
    it('Customer journey for user with account and no courses', function () {

        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        });
        cy.clearCookies()
        cy.clearLocalStorage()

        const app_host = 'app.jumpcut.com'
        const host = 'jumpcut.com'

        // Login
        cy.login('CatherineTest','tryjumpcut')
        cy.reload(true)
        cy.location('hostname', { timeout: 20000 }).should('eq', 'app.jumpcut.com')

        // Check for ******************* Viral Academy *************************

        // Unlock course -> Optin
        cy.get('#root > div > div > main > div > div:nth-child(1) > div.info-block > div.course-buttons-block > a.course-primary-button')
            .should('have.prop','href', 'https://' + host + '/1/skz6okb/optin?campaign_id=e5698ee6-bab9-4335-8a67-73c5bbafab3e')

        cy.get('#root > div > div > main > div > div:nth-child(1) > div.image-block > a')
            .should('have.prop','href', 'https://' + host + '/1/skz6okb/optin?campaign_id=e5698ee6-bab9-4335-8a67-73c5bbafab3e')

        // View Course -> Start Course -> Learn more -> Optin
        cy.get('#root > div > div > main > div > div:nth-child(1) > div.info-block > div.course-buttons-block > a.course-button')
            .should('have.prop', 'href', 'https://' + app_host + '/course/viral-entrepreneur-academy')
            .click()
            .url()
            .should('contain', 'https://' + app_host + '/course/viral-entrepreneur-academy')
        cy.wait(6000)
        cy.get('.start-course-btn')
            .should('have.prop', 'href', 'https://' + app_host + '/course/0b6ce06b-30e1-4b93-94fb-d41924311de8/video/you-are-an-influencer')
            .click()
            .url()
            .should('contain', 'https://' + app_host + '/course/0b6ce06b-30e1-4b93-94fb-d41924311de8/video/you-are-an-influencer')
        cy.get('#root > div > div > main > div > div > div.left-panel.menu-open > div.innerContent > div > div > div')
            .should('contain', 'You don\'t have access to this course. Click the button below to learn more.')
        cy.get('#root > div > div > main > div > div > div.left-panel > div.innerContent > div > div > a')
            .should('have.prop', 'href', 'https://' + host + '/1/skz6okb/optin?campaign_id=e5698ee6-bab9-4335-8a67-73c5bbafab3e')
            
        // Check for ******************* AIM ************************

        // Unlock Course -> Optin
        cy.visit('https://' + app_host + '/')
        cy.get('#root > div > div > main > div > div:nth-child(2) > div.info-block > div.course-buttons-block > a.course-primary-button')
            .should('have.prop','href', 'https://' + host + '/1/aimvpa/optin?campaign_id=1447e42a-31e7-43bd-bdb5-d64c425273b4')

        cy.get('#root > div > div > main > div > div:nth-child(2) > div.image-block > a')
            .should('have.attr', 'href', 'https://' + host + '/1/aimvpa/optin?campaign_id=1447e42a-31e7-43bd-bdb5-d64c425273b4')

        // View Course -> Start Course -> Learn more -> Optin
        cy.get('#root > div > div > main > div > div:nth-child(2) > div.info-block > div.course-buttons-block > a.course-button')
            .should('have.prop', 'href', 'https://' + app_host + '/course/automated-income-machine')
            .click()
            .url()
            .should('contain', 'https://' + app_host + '/course/automated-income-machine')
        cy.wait(6000)
        cy.get('.start-course-btn')
            .should('have.prop', 'href', 'https://' + app_host + '/course/8aee1876-8963-4c48-97d2-1ca8fed2392a/video/welcome')
            .click()
            .url()
            .should('contain', 'https://' + app_host + '/course/8aee1876-8963-4c48-97d2-1ca8fed2392a/video/welcome')
        cy.get('#root > div > div > main > div > div > div.left-panel.menu-open > div.innerContent > div > div > div')
            .should('contain', 'You don\'t have access to this course. Click the button below to learn more.')
        cy.get('#root > div > div > main > div > div > div.left-panel > div.innerContent > div > div > a')
            .should('have.prop', 'href', 'https://' + host + '/1/aimvpa/optin?campaign_id=1447e42a-31e7-43bd-bdb5-d64c425273b4')
    

        // Check for ******************************* AOTS *********************

        cy.visit('https://' + app_host + '')
        cy.setCookie('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEwZThjM2I3LTRhZTctNDJkZi05MDNlLTlmYzIxY2E2OTkzNiIsImVtYWlsIjoiYWNjbnRub2NvdXJzZUBqdW1wY3V0LmNvbSIsInVzZXJuYW1lIjoiYWNjbnRub2NvdXJzZSIsImFkbWluTGV2ZWwiOjEsImlhdCI6MTU1NDc5MzA1NCwiZXhwIjoxNTU3Mzg1MDU0fQ.L0-miWEVurl8jwgvpDHI7TONLDjXW4GV0Bj8xKdDvqY')
        // Unlock Course -> AOTS 
        cy.get('#root > div > div > main > div > div:nth-child(3) > div.info-block > div.course-buttons-block > a.course-primary-button')
            .should('have.prop', 'href', 'https://' + host + '/art-of-the-startup')
   
        cy.get('#root > div > div > main > div > div:nth-child(3) > div.image-block > a')
            .should('have.prop', 'href', 'https://' + host + '/art-of-the-startup')

        // View Course -> AOTS
        cy.get('div.courses-list-item:nth-child(3) > div:nth-child(2) > div:nth-child(4) > a:nth-child(2)')
            .should('have.prop', 'href', 'https://' + app_host + '/course/art-of-the-startup')
            .click()
        cy.get('.start-course-btn')
            .should('have.prop', 'href', 'https://' + app_host + '/course/f4a8a2d0-18a0-463d-8942-6f948aca9639/video/meet-justin-kan')
            .click()
            .url()
            .should('contain', 'https://' + app_host + '/course/f4a8a2d0-18a0-463d-8942-6f948aca9639/video/meet-justin-kan')
        cy.get('#root > div > div > main > div > div > div.left-panel.menu-open > div.innerContent > div > div > div')
            .should('contain', 'You don\'t have access to this course. Click the button below to learn more.')
        cy.get('#root > div > div > main > div > div > div.left-panel > div.innerContent > div > div > a')
            .should('have.prop', 'href', 'https://' + host + '/art-of-the-startup')

    });
});