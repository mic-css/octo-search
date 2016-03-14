describe('octoSearch homepage', function () {

  beforeEach(function () {
    browser.get('http://localhost:8000');
  });

  describe('search bar submit button', function () {
    var submitButton = element(by.css('#search-bar input[type="submit"]'));

    it('should not be visible when the search bar is empty', function () {
      expect(submitButton.getAttribute('class')).toBe('ng-hide');
    });

    it('should become visible when a search term is entered', function () {
      var searchBox = element(by.css('#search-bar input[type="text"]'));
      searchBox.sendKeys('pitchinvasion');
      expect(submitButton.getAttribute('class')).not.toBe('ng-hide');
    });
  });

  it('should display a list of users when a search term is submitted', function () {
    var searchBox = element(by.css('#search-bar input[type="text"]'));
    searchBox.sendKeys('pitchinvasion');

    var submitButton = element(by.css('#search-bar input[type="submit"]'));
    submitButton.click();

    var users = element.all(by.css('.user'));
    var firstUser = users.first();

    var firstUserLogin = firstUser.element(by.css('.login'));
    expect(firstUserLogin.getText()).toContain('pitchinvasion');

    var firstUserName = firstUser.element(by.css('.name'));
    expect(firstUserName.getText()).toContain('Leo Allen');

    var firstUserFollowers = firstUser.element(by.css('.followers'));
    expect(firstUserFollowers.getText()).toMatch(/\d{1,}/);

    var firstUserRepos = firstUser.element(by.css('.repos'));
    expect(firstUserRepos.getText()).toMatch(/\d{1,}/);

    var avatar = element(by.css("img[src*='208986']"));
    expect(avatar.isPresent()).toBe(true);
  });
});
