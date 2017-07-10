const loginPage = require('../../pageObjects/login.page.js'),
loginCreds      = require('../../testData/user.json'),
assertions      = require('../../assertions/login.js'),
LoginPage       = new loginPage();

describe('Login page - JSON', function() {

  it('loads the login page', function() {
    LoginPage.open();
    expect(LoginPage.getUrl).to.equal(`${browser.options.baseUrl}/login`);
  });

  it('throws an error when attempting to log in with invalid credentials', function() {
    LoginPage.login(loginCreds.userName, loginCreds.password);
    expect(LoginPage.error).to.equal(assertions.invalidLogin)
  });
});

