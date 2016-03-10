describe('service: searchService', function() {

  var search;

  beforeEach(module('OctoSearch'));

  beforeEach(inject(function(searchService) {
    search = searchService;
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

  describe('#userSearch', function(){

    beforeEach(inject(function($httpBackend) {
        httpBackend = $httpBackend;
        httpBackend
          .expectGET("https://api.github.com/search/users?access_token=yourtoken&q=hello")
          .respond(
            { items: items }
          );
    }));

    it('responds to userSearch', function() {
      expect(search.userSearch).toBeDefined();
    });

    it('displays search results', function() {

      search.userSearch('hello')
      .then(function(response) {
        expect(response.data.items).toEqual(items);
      });
      httpBackend.flush();
    });
  });

  describe('#userDetailSearch', function(){

    beforeEach(inject(function($httpBackend) {
        httpBackend = $httpBackend;
        httpBackend
          .expectGET("https://api.github.com/users/tansaku?access_token=yourtoken")
          .respond(
            { items: items[0] }
          );
    }));

    it('responds to userDetailSearch', function() {
      expect(search.userDetailSearch).toBeDefined();
    });

    it('displays search results', function() {

      search.userDetailSearch('tansaku')
      .then(function(response) {
        expect(response.data.items).toEqual(items[0]);
      });
      httpBackend.flush();
    });
  });



});
