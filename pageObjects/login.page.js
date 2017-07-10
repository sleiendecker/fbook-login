module.exports = class LoginPage {

  constructor() {
    this.errorCss = '.uiContextualLayerPositioner'
  }

  open() {
    browser.url('/login')
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
    browser.waitUntil(() => browser.isExisting(this.errorCss));
    return $(this.errorCss).getText();
  }

  login(user, password) {
    this.username.setValue(user);
    this.password.setValue(password);
    browser.click('#loginbutton');
  }


}