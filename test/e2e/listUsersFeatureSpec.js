describe ('octoSearch homepage', function(){

  beforeEach (function() {
    browser.get('http://localhost:8000');
  });



  it ('should display a list of users when a search term is submitted', function(){
    searchBox = element(by.css('#search-bar input'));
    searchBox.sendKeys('Bob');
    submitButton = element(by.css('#search-bar button'));
    submitButton.click();
    var users = element.all(by.css('.user'));
    var user1 = users.first();
    expect(users.count()).toEqual(4);
    expect(user1.getText()).toEqual('mike');
  });


});
