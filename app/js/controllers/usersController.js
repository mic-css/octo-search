(function() {
  'use strict';

  angular
    .module('OctoSearch')
    .controller('UsersController', [function () { // inject Service
      var self = this;

      self.users = [];
      self.getUsers = getUsers;

      function getUsers() {
        // call to service-----
        // parse JSON
        // set users
      }

      function _parseUserData() {

      }
    }]);
}());
