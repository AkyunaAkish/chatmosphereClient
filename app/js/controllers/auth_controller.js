(function() {
  'use strict';

  angular.module('chatmosphere')
  .controller('AuthController', AuthController)

  AuthController.$inject = [
    '$log',
    '$scope',
    'authService'
  ];

  function AuthController ($log, $scope, authService) {
    
    socket.emit('messageFeed', 'yo');
  }

}());
