(function() {
  'use strict';

  angular
    .module('OctoSearch')
    .service('searchService', function($http) {

      var self = this;
      var userSearchUrl = 'https://api.github.com/search/users';
      var userDetailUrl = 'https://api.github.com/users';

      self.userSearch = function(searchTerm) {
        return $http({
          url: userSearchUrl,
          method: 'GET',
          params: {
            'q': searchTerm,
            access_token: 'yourtoken'
          }

        });
      };

      self.userDetailSearch = function(userName) {
        return $http({
          url: userDetailUrl + "/" + userName,
          method: 'GET',
          params: {
            access_token: 'yourtoken'
          }
        });
      };



    });

}());
