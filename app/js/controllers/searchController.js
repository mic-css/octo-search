(function() {
  'use strict';

  angular
    .module('OctoSearch')
    .controller('SearchController', function (searchService) {
      var self = this;

      self.test = function() {
        searchService.runAllSearch('arnold')
          .then(function(searchdata) {
            console.log(searchdata);
          });
        };
    });
}());
