(function() {
  'use strict';

  angular
    .module('OctoSearch')
    .controller('SearchController', ['$resource', function ($resource) {

      var searchResource = $resource('https://api.github.com/search/users');

      var self = this;

      self.doSearch = function(){
        self.searchResult = searchResource.get(
          { access_token: 'yourtoken',
            q: self.searchTerm }
        );
      };


    }]);
}());
