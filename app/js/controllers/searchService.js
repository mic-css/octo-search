(function() {
  'use strict';

  angular
    .module('OctoSearch')
    .service('searchService', function($http) {

      var self = this;
      var queryUrl = 'https://api.github.com/search/users';

      self.query = function(searchTerm) {
        return $http({
          url: queryUrl,
          method: 'GET',
          params: {
            'q': searchTerm,
            access_token: 'yourtoken'
          }

        });
      };


      // this.banana = 0;
    //   $http.get('user.json').success(function(data){
    //     $scope.banana = data;
    //   });
    //
    //
    //   // this.getSearchResults = function() {
    //     // $http({
    //     //   method:'JSONP',
    //     //   url: 'user.json'
    //     // }).success(function(data){
    //     //   this.banana = data;
    //     // });
    //     // $http.get('user.json').success(function(data){
    //     //   this.banana = data;
    //     // });
    //   // };
    //
    });

}());
