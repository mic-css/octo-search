(function() {
  'use strict';

  angular
    .module('OctoSearch')
    .service('searchService', function($http, $q) {

      var self = this;
      var userSearchUrl = 'https://api.github.com/search/users';
      var userDetailUrl = 'https://api.github.com/users';
      var MAX_SEARCH = 5;

      var getUserNames = function(items) {
        var usernames = [];
        for(var i = 0; i < MAX_SEARCH && i < items.length; i++) {
          usernames.push(items[i].login);
        }
        return usernames;
      };

      var parseResults = function(results) {
        var filteredResults = [];
        for(var i = 0; i < results.length; i++) {
          filteredResults.push({
             avatar_url: results[i].data.avatar_url,
             login: results[i].data.login,
             name: results[i].data.name,
             public_repos: results[i].data.public_repos,
             followers: results[i].data.followers
           });
        }
        return filteredResults;
      };

      self.userSearch = function(searchTerm) {
        return $http({
          url: userSearchUrl,
          method: 'GET',
          params: {
            'q': searchTerm,
            access_token: 'b7cc748c07c16eafb87f959beb98345308207674'
          }
        }).then(function(response) {
          return getUserNames(response.data.items);
        });
      };

      self.userDetailSearch = function(userName) {
        return $http({
          url: userDetailUrl + "/" + userName,
          method: 'GET',
          params: {
            access_token: 'b7cc748c07c16eafb87f959beb98345308207674'
          }
        });
      };

      self.runAllSearch = function(searchTerm) {
        var deferred = $q.defer();
        var details = [];
        self.userSearch(searchTerm)
          .then(function(usernames) {
            angular.forEach(usernames, function(username) {
              details.push(self.userDetailSearch(username));
            });
          }).then(function() {
            $q.all(details)
              .then(function(results) {
                deferred.resolve(parseResults(results));
              });
          });
        return deferred.promise;
      };
    });
}());

// avatar_url results[0].data.avatar_url
// followers
// login
// name
// public_repos
