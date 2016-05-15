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
    $scope.vm = {};
    $scope.vm.signup = true;

    $scope.vm.showLogin = function(){
    $scope.vm.signup = false;
    $scope.vm.login = true;
    }

    $scope.vm.showSignup = function(){
      $scope.vm.signup = true;
      $scope.vm.login = false;
    }

    socket.emit('messageFeed', 'yo');
  }

}());
