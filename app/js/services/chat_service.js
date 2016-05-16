(function() {
  'use strict';

  angular.module('chatmosphere')
  .service('ChatService', ChatService)

  ChatService.$inject = [
    '$log',
    '$q'
  ];

  function ChatService ($log, $q) {

  }

}());
