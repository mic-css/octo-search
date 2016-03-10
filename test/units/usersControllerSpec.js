describe('UsersController', function () {
  var ctrl, MockSearchService;

  beforeEach(module('OctoSearch'));

  beforeEach(function () {

    MockSearchService = {
      getUserData: function () {
        return [
          {
            "login": "mike",
            "id": 1550195,
            "avatar_url": "https://avatars.githubusercontent.com/u/1550195?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/mike",
            "html_url": "https://github.com/mike",
            "followers_url": "https://api.github.com/users/mike/followers",
            "following_url": "https://api.github.com/users/mike/following{/other_user}",
            "gists_url": "https://api.github.com/users/mike/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/mike/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/mike/subscriptions",
            "organizations_url": "https://api.github.com/users/mike/orgs",
            "repos_url": "https://api.github.com/users/mike/repos",
            "events_url": "https://api.github.com/users/mike/events{/privacy}",
            "received_events_url": "https://api.github.com/users/mike/received_events",
            "type": "User",
            "site_admin": false,
            "score": 49.00526
          },
          {
            "login": "mbostock",
            "id": 230541,
            "avatar_url": "https://avatars.githubusercontent.com/u/230541?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/mbostock",
            "html_url": "https://github.com/mbostock",
            "followers_url": "https://api.github.com/users/mbostock/followers",
            "following_url": "https://api.github.com/users/mbostock/following{/other_user}",
            "gists_url": "https://api.github.com/users/mbostock/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/mbostock/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/mbostock/subscriptions",
            "organizations_url": "https://api.github.com/users/mbostock/orgs",
            "repos_url": "https://api.github.com/users/mbostock/repos",
            "events_url": "https://api.github.com/users/mbostock/events{/privacy}",
            "received_events_url": "https://api.github.com/users/mbostock/received_events",
            "type": "User",
            "site_admin": false,
            "score": 36.922333
          },
          {
            "login": "MikePall",
            "id": 496664,
            "avatar_url": "https://avatars.githubusercontent.com/u/496664?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/MikePall",
            "html_url": "https://github.com/MikePall",
            "followers_url": "https://api.github.com/users/MikePall/followers",
            "following_url": "https://api.github.com/users/MikePall/following{/other_user}",
            "gists_url": "https://api.github.com/users/MikePall/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/MikePall/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/MikePall/subscriptions",
            "organizations_url": "https://api.github.com/users/MikePall/orgs",
            "repos_url": "https://api.github.com/users/MikePall/repos",
            "events_url": "https://api.github.com/users/MikePall/events{/privacy}",
            "received_events_url": "https://api.github.com/users/MikePall/received_events",
            "type": "User",
            "site_admin": false,
            "score": 34.4127
          },
          {
            "login": "prime31",
            "id": 60377,
            "avatar_url": "https://avatars.githubusercontent.com/u/60377?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/prime31",
            "html_url": "https://github.com/prime31",
            "followers_url": "https://api.github.com/users/prime31/followers",
            "following_url": "https://api.github.com/users/prime31/following{/other_user}",
            "gists_url": "https://api.github.com/users/prime31/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/prime31/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/prime31/subscriptions",
            "organizations_url": "https://api.github.com/users/prime31/orgs",
            "repos_url": "https://api.github.com/users/prime31/repos",
            "events_url": "https://api.github.com/users/prime31/events{/privacy}",
            "received_events_url": "https://api.github.com/users/prime31/received_events",
            "type": "User",
            "site_admin": false,
            "score": 29.537865
          }
        ];
      }
    };

    inject(function ($controller) {
      ctrl = $controller('UsersController', {SearchService: MockSearchService});
    });
  });

  it('initializes with an empty users property', function () {
    expect(ctrl.users.length).toEqual(0);
  });

  xit('gets users from the search service', function () {
    spyOn(MockSearchService, 'getUserData').and.callThrough();
    ctrl.getUsers();
    expect(MockSearchService.getUserData).toHaveBeenCalled();
  });
});