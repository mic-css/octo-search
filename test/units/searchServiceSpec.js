describe('service: searchService', function() {

  var search;

  beforeEach(module('OctoSearch'));
  beforeEach(inject(function(searchService) {
    search = searchService;
  }));

  describe('#userSearch', function(){
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend
        .expectGET("https://api.github.com/search/users?access_token=b7cc748c07c16eafb87f959beb98345308207674&q=hello")
        .respond({ items: items });
    }));

    it('responds to userSearch', function() {
      expect(search.userSearch).toBeDefined();
    });

    it('displays search results', function() {
      search.userSearch('hello')
        .then(function(response) {
          expect(response).toEqual([items[0].login, items[1].login]);
        });
      httpBackend.flush();
    });
  });

  describe('#userDetailSearch', function(){
    beforeEach(inject(function($httpBackend) {
        httpBackend = $httpBackend;
        httpBackend
          .expectGET("https://api.github.com/users/rachelsmithcode?access_token=b7cc748c07c16eafb87f959beb98345308207674")
          .respond(details);
    }));

    it('responds to userDetailSearch', function() {
      expect(search.userDetailSearch).toBeDefined();
    });

    it('displays search results', function() {
      search.userDetailSearch('rachelsmithcode')
        .then(function(response) {
          expect(response.data).toEqual(details);
        });
      httpBackend.flush();
    });
  });

  var items = [
    {
      "login": "rachelsmithcode",
      "html_url": "https://github.com/rachelsmithcode"
    },
    {
      "login": "arnoldmanzano",
      "html_url": "https://github.com/arnoldmanzano"
    }
  ];

  var details =
    {
      "login": "rachelsmithcode",
      "html_url": "https://github.com/rachelsmithcode",
      "public_repos": 15,
      "followers": 10
    };

  var details1 =
    {
      "login": "rachelsmithcode",
      "html_url": "https://github.com/rachelsmithcode",
      "public_repos": 25,
      "followers": 100
    };

  var details2 =
    {
      "login": "arnoldmanzano",
      "html_url": "https://github.com/arnoldmanzano",
      "public_repos": 5,
      "followers": 10
    };

  describe('#runAllSearch', function() {
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend
        .expectGET("https://api.github.com/search/users?access_token=b7cc748c07c16eafb87f959beb98345308207674&q=rachelsmithcode")
        .respond({ items: items });
    }));
    beforeEach(inject(function($httpBackend) {
        httpBackend = $httpBackend;
        httpBackend
          .expectGET("https://api.github.com/users/rachelsmithcode?access_token=b7cc748c07c16eafb87f959beb98345308207674")
          .respond(details1);
    }));
    beforeEach(inject(function($httpBackend) {
        httpBackend = $httpBackend;
        httpBackend
          .expectGET("https://api.github.com/users/arnoldmanzano?access_token=b7cc748c07c16eafb87f959beb98345308207674")
          .respond(details2);
    }));

    it('runs all search', function() {
      search.runAllSearch('rachelsmithcode')
        .then(function(response) {
          expect(response[0].data).toEqual(details1);
          expect(response[1].data).toEqual(details2);
        });
      httpBackend.flush();
    });
  });
});
