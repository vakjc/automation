describe('Customer Journey for user with account and only VA', function () {
    it('Customer Journey for user with account and only VA', function () {
        // Errors not related to application are ignored
        cy.ignore_error()
        cy.clearCookies()
        cy.clearLocalStorage()

        cy.login('VAuser','tryjumpcut')
       
        // Check for ******************* AOTS *************************
        
        cy.visit('https://app.jumpcut.com')
        
        // Unlock Course
        cy.click_unlock_course_aots_user()

        // Check enroll for AOTS from Instant Access button on VSL
        cy.enroll_aots_user()

        // Back to app.jumpcut.com courses page
        cy.go('back')

        // View Course
        cy.view_course_aots_user()

        // Check for ******************* AIM ************************

        cy.visit('https://app.jumpcut.com')
        
        // Unlock Course
        cy.click_unlock_course_aim_user()

        // Check enroll for AIM from Instant Access button on VSL
        cy.enroll_aim_user()

        // Back to app.jumpcut.com courses page
        cy.go('back')

        // View Course
        cy.view_course_aim_user()

        cy.clearLocalStorage()
        cy.clearCookies()

    });
});
