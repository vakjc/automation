# Automation
Automation scripts for UI/Functionl tests

Covers the following :

1> Functional Workflow
enroll_paymentt_flow.js - Payment with CC 
no_account_no_courses.js - Unlock/View course flow for a user with No account and No courses
with_accnt_no_courses.js - Unlock/View course flow for a user with an account and No courses
with_accnt_and_aim_journey.js - Unlock/View course flow for a user with an account and only AIM course
with_accnt_and_aots_journey.js - Unlock/View course flow for a user with an account and only AOTS course
with_accnt_and_va_journey.js - Unlock/View course flow for a user with an account and only VA course

2> Page_spec
jumpcut_aim_page.js - UI checks for AIM homepage
jumpcut_cc_page.js - UI checks for CC homepage
jumpcut_va_page.js - UI checks for VA homepage
jumpcut_home_page.js - UI checks for Jumpcut homepage
jumpcut_enroll_page.js - UI checks for enroll page

3> Routine_checks
dead_link_checker.js - Check all Jumpcut links for liveness
login_fail.js - Check login for different input combinations of username and password
login_logout.js - Login & Logout flow 
