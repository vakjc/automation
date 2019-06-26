describe('Check for successful VA and AIM optin', function () {

    // VA OPTIN
    var links = ['https://eng-381.demo.jumpcut.com/viral-academy', 'https://eng-381.demo.jumpcut.com/viral-academy-1',
        'https://eng-381.demo.jumpcut.com/viral-academy-2'
    ]

    links.forEach(element => {
        it('Check for VA OPTIN ' + element, function () {
            cy.ignore_error()
            cy.clearCookies()
            cy.visit(element)
            // Enter new username and email
            var entry = 'u' + Cypress.moment()
            cy.get('#submit-form > :nth-child(1) > #firstname')
                .type(entry)
                .should('have.value', entry)
            cy.get('#submit-form > :nth-child(2) > #email')
                .type(entry + '@jumpcut.com')
                .should('have.value', entry + '@jumpcut.com')
            // Click to Optin
            cy.get('#optin-submit').click({ force: true })
            // Verify that the video page loads 
            cy.location('pathname', { timeout: 20000 }).should('eq', '/1/skz6okb/video-1')
        });
    });

    var valink = 'https://eng-381.demo.jumpcut.com/1/skz6okb/optin'
    it('Check for VA OPTIN ' + valink, function () {
        cy.ignore_error()
        cy.clearCookies()
        cy.visit(valink)
        // Link to video page for VA
        var path = '/1/skz6okb/video-1'
        optin(valink, path)
    });

    var aimlink = 'https://eng-381.demo.jumpcut.com/1/aimvpa/optin'
    it('Check for AIM OPTIN ' + aimlink, function () {
        cy.ignore_error()
        cy.clearCookies()
        cy.visit(aimlink)
        // Link to video page for AIM
        var path = '/1/aimvpa/invisible'
        optin(aimlink, path)
    });


    // Function to enter username and email and optin; 
    function optin(link, path) {
        var entry = 'u' + Cypress.moment()
        cy.get('#undefined-287').click({ force: true })
        cy.get('#tmp_input-85551 > input').type(entry)
            .should('have.value', entry)
        cy.get('#tmp_input-85551-132 > input').type(entry + '@jumpcut.com')
            .should('have.value', entry + '@jumpcut.com')
        cy.get('#tmp_button-85389 > a').click({ force: true })
        cy.location('pathname', { timeout: 20000 }).should('eq', path)
        // Second button to optin is unique to AIM 
        if (link.includes('aim')) {
            cy.ignore_error()
            cy.clearCookies()
            cy.visit(link)
            cy.get('#undefined-287-524').click({ force: true })
            cy.get('#tmp_input-85551 > input')
                .should('have.value', entry)
            cy.get('#tmp_input-85551-132 > input')
                .should('have.value', entry + '@jumpcut.com')
            cy.get('#tmp_button-85389 > a').click({ force: true })
            cy.location('pathname', { timeout: 20000 }).should('eq', path)
        }
    }
});

