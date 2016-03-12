(function() {
  'use strict';

  angular
    .module('OctoSearch')
    .service('SearchService', function($http, $q) {

      var self = this;
      var requestUsersUrl = 'https://api.github.com/search/users';
      var requestUserDetailsUrl = 'https://api.github.com/users';
      var MAX_SEARCH = 5;

      var mapUserNames = function(items) {
        var usernames = [];
        for(var i = 0; i < MAX_SEARCH && i < items.length; i++) {
          usernames.push(items[i].login);
        }
        return usernames;
      };

      var parseResults = function(results) {
        return {
          avatar_url: results.avatar_url,
          login: results.login,
          name: results.name,
          public_repos: results.public_repos,
          followers: results.followers,
          html_url: results.html_url
        };
      };

      self.requestUsers = function(searchTerm) {
        return $http({
          url: requestUsersUrl,
          method: 'GET',
          params: {
            q: searchTerm,
            access_token: 'b7cc748c07c16eafb87f959beb98345308207674'
          }
        }).then(function(response) {
          return mapUserNames(response.data.items);
        });
      };

      self.requestUserDetails = function(userName) {
        return $http({
          url: requestUserDetailsUrl + "/" + userName,
          method: 'GET',
          params: {
            access_token: 'b7cc748c07c16eafb87f959beb98345308207674'
          }
        }).then(function(response) {
          return parseResults(response.data);
        });
      };

      self.runAllSearch = function(searchTerm) {
        var deferred = $q.defer();
        var details = [];
        self.requestUsers(searchTerm)
          .then(function(usernames) {
            angular.forEach(usernames, function(username) {
              details.push(self.requestUserDetails(username));
            });
          }).then(function() {
            $q.all(details)
              .then(function(results) {
                deferred.resolve(results);
              });
          });
        return deferred.promise;
      };
    });
}());
