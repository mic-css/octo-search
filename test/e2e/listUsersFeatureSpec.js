describe ('octoSearch homepage', function(){

  it ('should display a list of users', function(){
    browser.get('http://localhost:8000');
    var users = element.all(by.css('.user'));
    var user1 = users.first();
    expect(users.count()).toEqual(4);
    expect(user1.getText()).toEqual('mike');
  });


});
