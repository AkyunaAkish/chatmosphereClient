(function() {
  'use strict';

  angular.module('chatmosphere')
  .controller('ChatController', ChatController)

  ChatController.$inject = [
    '$log',
    '$scope',
    'chatService'
  ];

  function ChatController ($log, $scope, chatService) {

  }

}());
