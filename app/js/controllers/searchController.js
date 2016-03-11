(function() {
  'use strict';

  angular
    .module('OctoSearch')
    .controller('SearchController', ['SearchService', function (SearchService) {
      var self = this;

      self.users = [];
      self.getUsers = getUsers;
      self.searchTerm = "";

      function getUsers() {
        SearchService.getUserData(self.searchTerm).then(function(userData){
          self.users = userData;
        });
      }
    }]);
}());
