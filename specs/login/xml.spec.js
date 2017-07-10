const path   = require('path'),
assertions   = require('../../assertions/login.js'),
loginPage    = require('../../pageObjects/login.page.js'),
{ parseXml } = require('../../utils.js'),
xmlFile      = path.join(__dirname, '..', '..', 'testData', 'user.xml'),

LoginPage    = new loginPage();

var loginCreds;

describe('Login page - XML', function() {

  before('Parse XML', function() {
    loginCreds = parseXml(xmlFile).testUser;
  });

  it('loads the login page', function() {
    LoginPage.open();
    expect(LoginPage.getUrl).to.equal(`${browser.options.baseUrl}${LoginPage.route}`);
  });

  it('throws an error when attempting to log in with invalid credentials', function() {
    LoginPage.login(loginCreds.userName, loginCreds.password);
    expect(LoginPage.error).to.equal(LoginPage.assertions.invalidLogin)
  });
});

