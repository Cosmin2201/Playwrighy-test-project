Feature("Zero Bank Application - E2E Test")

Before(({I}) => {
    console.log("BEFORE HOOK")
    I.amOnPage("http://zero.webappsecurity.com/index.html")
})

After(({I}) => {
    console.log("AFTER HOOK")
})

Scenario("Login Test - Negative" , ({I, LoginPage}) => {
    I.click("#signin_button")
    I.seeElement("#login_form")
    // I.fillField("#user_login", "invalid username")
    // I.fillField("#user_password", "invalid password")
    // I.click(".btn-primary")
    LoginPage.submitLogin("invalid username", "invalid password")
    LoginPage.assertLoginPageIsVisible()
    I.seeElement(".alert-error")
})