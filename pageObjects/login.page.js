const assertions = require('../assertions/login.js');

module.exports = class LoginPage {

  constructor() {
    this.errorCss = '#error_box'
    this.route = '/login'
    this.assertions = assertions
  }

  open() {
    browser.url(this.route);
  }

  get username() {
    return $('#email_container input');
  }

  get password() {
    return $('input[type="password"]');
  }

  get getUrl() {
    return browser.getUrl();
  }

  get error() {
    browser.waitUntil(() => $(this.errorCss).getText().length > 0);
    return $(this.errorCss).getText();
  }

  login(user, password) {
    this.username.setValue(user);
    this.password.setValue(password);
    browser.click('#loginbutton');
  }

}