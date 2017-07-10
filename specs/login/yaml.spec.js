const path = require('path'),
yamlParser = require('yamljs'),
assertions = require('../../assertions/login.js'),
loginPage  = require('../../pageObjects/login.page.js'),
yamlFile   = path.join(__dirname, '..', '..', 'testData', 'user.yaml'),

LoginPage  = new loginPage();

var loginCreds;

describe('Login page - YAML', function() {

  before('Parse YAML', function() {
    loginCreds = yamlParser.load(yamlFile);
  });

  it('loads the login page', function() {
    LoginPage.open();
    expect(LoginPage.getUrl).to.equal(`${browser.options.baseUrl}/login`);
  });

  it('throws an error when attempting to log in with invalid credentials', function() {
    LoginPage.login(loginCreds.userName, loginCreds.password);
    expect(LoginPage.error).to.equal(assertions.invalidLogin);
  });
});

