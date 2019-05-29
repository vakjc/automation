describe('VA course checks', function () {
    it('VA course checks - bootcamp, collaborate, etc', function () {
        // Errors not related to application are ignored
        cy.ignore_error()
        cy.clearCookies()
        cy.clearLocalStorage()

        Cypress.on('fail', (err, runnable) => {return false});
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log("err :" + err)
            console.log("runnable :" + runnable)
            return false
        });

        cy.login('VAuser', 'tryjumpcut')
        cy.get('[href="https://forum.jumpcut.com"]')
            .should('have.attr', 'href', 'https://forum.jumpcut.com')
        cy.visit('https://forum.jumpcut.com')
        cy.get('.create-topic').should('contain', 'Submit a post')
            .should('have.attr', 'href', '#')
        cy.get(':nth-child(1) > .active').should('contain', 'View All Posts')
            .should('have.attr', 'href', '/')
        cy.get('.subcategories-list > :nth-child(2) > a').should('contain', 'Hall of Fame')
            .should('have.attr', 'href', '/hall_of_fame')
        cy.get('[data-cid="5"] > a').should('contain', 'Introduce yourself!')
            .should('have.attr', 'href', '/category/5/introduce-yourself')
        cy.get('[data-cid="40"] > a').should('contain', 'Moderator Intros')
            .should('have.attr', 'href', '/category/40/moderator-intros')
        cy.get('[data-cid="38"] > a').should('contain', 'From the Jumpcut Team')
            .should('have.attr', 'href', '/category/38/pinned-posts')
        cy.get('[data-cid="7"] > a').should('contain', 'General Discussion')
            .should('have.attr', 'href', '/category/7/general-discussion')
        cy.get('[data-cid="44"] > a').should('contain', 'Small Wins')
            .should('have.attr', 'href', '/category/44/small-wins')
        cy.get('[data-cid="42"] > a').should('contain', 'VA Editing Breakdown')
            .should('have.attr', 'href', '/category/42/va-student-feature')
        cy.get('[data-cid="12"] > a').should('contain', 'Collaborate')
            .should('have.attr', 'href', '/category/12/collaborate')
        cy.get('[data-cid="11"] > a').should('contain', 'Off-topic')
            .should('have.attr', 'href', '/category/11/off-topic')
        cy.get('[data-section="app"] > .menu-section-list > :nth-child(1) > a')
            .should('have.attr', 'href', 'https://app.jumpcut.com/courses')
        cy.get('[data-section="app"] > .menu-section-list > :nth-child(2) > a')
            .should('have.attr', 'href', '/')
        cy.get('[data-section="app"] > .menu-section-list > :nth-child(3) > a')
            .should('have.attr', 'href', 'https://app.jumpcut.com/review/0b6ce06b-30e1-4b93-94fb-d41924311de8/overview')
        cy.get('[data-section="app"] > .menu-section-list > :nth-child(4) > a')
            .should('have.attr', 'href', 'https://app.jumpcut.com/bootcamp')
        cy.get('[data-section="app"] > .menu-section-list > :nth-child(5) > a')
            .should('have.attr', 'href', 'https://app.jumpcut.com/collaborate/0b6ce06b-30e1-4b93-94fb-d41924311de8')
        cy.get('#topic-options > form > input[type="search"]:nth-child(3)').type('video')
        cy.get('#topic-options > form > button > .material-icons').click()
        cy.wait(2000)
        cy.get('#post_75879 > div.post-info > h2 > a')
          .should('have.attr','href','/post/75879')
    });
    var links = ['https://forum.jumpcut.com/#','https://forum.jumpcut.com/',
                'https://forum.jumpcut.com/hall_of_fame','https://forum.jumpcut.com/category/5/introduce-yourself',
                'https://forum.jumpcut.com/category/40/moderator-intros','https://forum.jumpcut.com/category/38/pinned-posts',
                'https://forum.jumpcut.com/category/7/general-discussio','https://forum.jumpcut.com/category/44/small-wins',
                'https://forum.jumpcut.com/category/42/va-student-feature','https://forum.jumpcut.com/category/12/collaborate',
                'https://forum.jumpcut.com/category/11/off-topic']
    links.forEach(element => {
        it('Check for '+ element, function(){
          cy.request(element, {'failOnStatusCode': true})
    
});
    });
});