const path   = require('path'),
xlsx         = require('node-xlsx'),
assertions   = require('../../assertions/login.js'),
loginPage    = require('../../pageObjects/login.page.js'),
{ mapXlsx }  = require('../../utils.js'),
xlsxFile     = path.join(__dirname, '..', '..', 'testData', 'user.xlsx'),

LoginPage  = new loginPage(),
parsedXlsx = xlsx.parse(xlsxFile)[0].data;

var loginCreds;

describe('Login page - XLSX', function() {

  before('Parse xlsx', function() {
    loginCreds = mapXlsx(parsedXlsx[0], parsedXlsx[1]);
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

