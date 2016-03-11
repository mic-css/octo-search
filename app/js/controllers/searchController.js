(function() {
  'use strict';

  angular
    .module('OctoSearch')
    .controller('SearchController', function (SearchService) {
      var self = this;

      self.test = function() {
        SearchService.runAllSearch('arnold')
          .then(function(searchdata) {
            console.log(searchdata);
          });
        };
    });
}());
