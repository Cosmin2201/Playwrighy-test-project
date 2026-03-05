const { I } = inject();

module.export = {
  //Set your locators
  loginForm: "#login_form",
  username: "#user_login",
  password: "#user_password",
  submitButton: ".btn-primary",

  //Create page methods

  submitLogin(username, password){
    I.fillField(this.username, username)
    I.fillField(this.password, password)
    I.click(this.submitButton)
  },

  assertLoginPageIsVisible(){
    I.seeElement(this.loginForm)
  }
}