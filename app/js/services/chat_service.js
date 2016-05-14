(function() {
  'use strict';

  angular.module('chatmosphere')
  .service('chatService', chatService)

  chatService.$inject = [
    '$log',
    '$q'
  ];

  function chatService ($log, $q) {

  }

}());
