describe('Customer Journey for user with account and only AOTS', function () {
    it('Customer Journey for user with account and only AOTS', function () {
        // Errors not related to application are ignored
        cy.ignore_error()
        cy.clearCookies()
        cy.clearLocalStorage()

        cy.login('Jkanuser','tryjumpcut')
       
        // Check for ******************* Viral Academy *************************
        
        // Click on unlock course button for VA 
        cy.click_unlock_course_va_user()

        // Check enroll for VA from Instant Access button on VSL
        cy.enroll_va_user()

        // Back to app.jumpcut.com courses page
        cy.go('back')

        // View Course button click, follow upto VSL 
        cy.view_course_va_user()

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
