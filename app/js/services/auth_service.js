(function() {
  'use strict';

  angular.module('chatmosphere')
  .service('authService', authService)

  authService.$inject = [
    '$log',
    '$q'
  ];

  function authService ($log, $q) {

  }

}());
