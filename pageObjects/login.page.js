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

  login(user, password) {
    this.username.setValue(user);
    this.password.setValue(password);
    browser.click('#loginbutton');
  }

  get error() {
    browser.waitUntil(() => {
      // browser.isExisting(this.errorCss);
      // console.log($$(this.errorCss).length);
      return browser.isExisting(this.errorCss);
    });
    return $(this.errorCss).getText();
    // browser.waitForExist(this.errorCss)
    // browser.getText(this.errorCss);
  }

}