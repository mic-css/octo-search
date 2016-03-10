describe('service: searchService', function() {

  var search;

  beforeEach(module('OctoSearch'));

  beforeEach(inject(function(searchService) {
    search = searchService;
  }));

  beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend
        .expectGET("https://api.github.com/search/users?access_token=yourtoken&q=hello")
        .respond(
          { items: items }
        );
  }));

  var items = [
    {
      "login": "tansaku",
      "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
      "html_url": "https://github.com/tansaku"
    },
    {
      "login": "stephenlloyd",
      "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
      "html_url": "https://github.com/stephenlloyd"
    }
  ];

  it('responds to query', function() {
    expect(search.query).toBeDefined();
  });

  it('displays search results', function() {

    search.query('hello')
    .then(function(response) {
      expect(response.data.items).toEqual(items);
    });
    httpBackend.flush();
  });

});
