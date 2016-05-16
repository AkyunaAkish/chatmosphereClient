(function() {
  'use strict';

  angular.module('chatmosphere')
  .controller('ChatController', ChatController)

  ChatController.$inject = [
    '$log',
    '$scope',
    'ChatService'
  ];

  function ChatController ($log, $scope, ChatService) {
    $scope.message = 'CHAT!!!';
  }

}());
