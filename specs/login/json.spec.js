const loginPage = require('../../pageObjects/login.page.js'),
loginCreds      = require('../../testData/user.json'),
LoginPage       = new loginPage();

console.log(browser.options.baseUrl)

describe('Login page - JSON', function() {

  it('loads the login page', function() {
    LoginPage.open();
    expect(LoginPage.getUrl).to.equal(`${browser.options.baseUrl}${LoginPage.route}`);
  });

  it('throws an error when attempting to log in with invalid credentials', function() {
    LoginPage.login(loginCreds.userName, loginCreds.password);
    expect(LoginPage.error).to.equal(LoginPage.assertions.invalidLogin)
  });
});