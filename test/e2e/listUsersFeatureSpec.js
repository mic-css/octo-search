describe('octoSearch homepage', function () {

  beforeEach(function () {
    browser.get('http://localhost:8000');
  });

  it('should display a list of users when a search term is submitted', function () {
    searchBox = element(by.css('#search-bar input'));
    searchBox.sendKeys('pitchinvasion');

    submitButton = element(by.css('#search-bar button'));
    submitButton.click();

    var users = element.all(by.css('.user'));
    var firstUser = users.first();
    var firstUserLogin = firstUser.element(by.css('.login'));
    expect(firstUserLogin.getText()).toContain('pitchinvasion');
    var firstUserFollowers = firstUser.element(by.css('.followers'));
    expect(firstUserFollowers.getText()).toMatch(/\d{1,}/);
    var firstUserRepos = firstUser.element(by.css('.repos'));
    expect(firstUserRepos.getText()).toMatch(/\d{1,}/);

    var avatar = element(by.css("img[src*='208986']"));
    expect(avatar.isPresent()).toBe(true);


  });
});
