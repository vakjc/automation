describe('Login Test', function () {
    it('Login failure check with different username and password combinations', function () {
        
        cy.ignore_error()
        cy.clearCookies()
        cy.clearLocalStorage()
        // Try various username and password combinations
        var usernames = ["abc", "123", "_12345", "@#$", " "]
        var pwd = ["123", "#$%% _", "def_+-", "      "]
        cy.visit('https://app.jumpcut.com/login')
        cy.reload(true)
        cy.wrap(usernames).each(($name, i, usernames) => {
            cy.get('#root > div > div > main > div > div.login-form-wrap > form > div:nth-child(1) > div > input[type="text"]')
                .type($name)
                .should('have.value', $name)
            cy.get('#root > div > div > main > div > div.login-form-wrap > form > div:nth-child(2) > div > input[type="password"]')
                .type('tryjumpcut123')
                .should('have.value', 'tryjumpcut123')
            cy.get('#root > div > div > main > div > div.login-form-wrap > form > div.buttonWrap > div > button').click()
            cy.get('#root > div > div > main > div > div.login-form-wrap > span')
                .should('contain', 'We could not find your username and password combination')
            cy.get('#root > div > div > main > div > div.login-form-wrap > form > div:nth-child(1) > div > input[type="text"]').clear()
            cy.get('#root > div > div > main > div > div.login-form-wrap > form > div:nth-child(2) > div > input[type="password"]').clear()
        });

        cy.wrap(pwd).each(($pass, i, pwd) => {
            cy.get('#root > div > div > main > div > div.login-form-wrap > form > div:nth-child(1) > div > input[type="text"]')
                .type('vaishnaviajitkumar')
                .should('have.value', 'vaishnaviajitkumar')
            cy.get('#root > div > div > main > div > div.login-form-wrap > form > div:nth-child(2) > div > input[type="password"]')
                .type($pass)
                .should('have.value', $pass)
            cy.get('#root > div > div > main > div > div.login-form-wrap > form > div.buttonWrap > div > button').click()
            cy.get('#root > div > div > main > div > div.login-form-wrap > span')
                .should('contain', 'We could not find your username and password combination')
            cy.get('#root > div > div > main > div > div.login-form-wrap > form > div:nth-child(1) > div > input[type="text"]').clear()
            cy.get('#root > div > div > main > div > div.login-form-wrap > form > div:nth-child(2) > div > input[type="password"]').clear()
        });

    });
});