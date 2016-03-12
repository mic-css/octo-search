describe('service: SearchService', function() {

  var search;

  beforeEach(module('OctoSearch'));
  beforeEach(inject(function(SearchService) {
    search = SearchService;
  }));

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

  var details1 =
    {
      avatar_url: undefined,
      login: 'rachelsmithcode',
      name: undefined,
      public_repos: 25,
      followers: 100,
      html_url: "https://github.com/rachelsmithcode"
    };

  var details1_unfiltered =
    {
      avatar_url: undefined,
      login: 'rachelsmithcode',
      name: undefined,
      public_repos: 25,
      followers: 100,
      html_url: "https://github.com/rachelsmithcode",
      someDataWeDontWant: 1
    };

  var details2 =
    {
      avatar_url: undefined,
      login: 'arnoldmanzano',
      name: undefined,
      public_repos: 5,
      followers: 10,
      html_url: "https://github.com/arnoldmanzano"
    };

  var details2_unfiltered =
    {
      avatar_url: undefined,
      login: 'arnoldmanzano',
      name: undefined,
      public_repos: 5,
      followers: 10,
      html_url: "https://github.com/arnoldmanzano",
      someDataWeDontWant: 1
    };

  describe('#requestUsers', function(){
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend
        .expectGET("https://api.github.com/search/users?access_token=b7cc748c07c16eafb87f959beb98345308207674&q=rachel")
        .respond({ items: items });
    }));

    it('displays search results', function() {
      search.requestUsers('rachel')
        .then(function(response) {
          expect(response).toEqual([items[0].login, items[1].login]);
        });
      httpBackend.flush();
    });
  });

  describe('#requestUserDetails', function(){
    beforeEach(inject(function($httpBackend) {
        httpBackend = $httpBackend;
        httpBackend
          .expectGET("https://api.github.com/users/rachelsmithcode?access_token=b7cc748c07c16eafb87f959beb98345308207674")
          .respond(details1_unfiltered);
    }));

    it('displays search results', function() {
      search.requestUserDetails('rachelsmithcode')
        .then(function(response) {
          expect(response).toEqual(details1);
        });
      httpBackend.flush();
    });
  });

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
          .respond(details1_unfiltered);
    }));
    beforeEach(inject(function($httpBackend) {
        httpBackend = $httpBackend;
        httpBackend
          .expectGET("https://api.github.com/users/arnoldmanzano?access_token=b7cc748c07c16eafb87f959beb98345308207674")
          .respond(details2_unfiltered);
    }));

    it('runs all search', function() {
      search.runAllSearch('rachelsmithcode')
        .then(function(response) {
          expect(response[0]).toEqual(details1);
          expect(response[1]).toEqual(details2);
        });
      httpBackend.flush();
    });
  });
});
