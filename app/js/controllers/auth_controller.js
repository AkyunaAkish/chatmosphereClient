(function() {
  'use strict';

  angular.module('chatmosphere')
  .controller('AuthController', AuthController)

  AuthController.$inject = [
    '$log',
    '$scope',
    'authService',
    '$state'
  ];

  function AuthController ($log, $scope, authService, $state) {
    $scope.vm = {};
    $scope.vm.signupShow = true;
    $scope.vm.loginShow = false;

    $scope.vm.showLogin = function(){
      $scope.vm.signupShow = false;
      $scope.vm.loginShow = true;
    }

    $scope.vm.showSignup = function(){
      $scope.vm.signupShow = true;
      $scope.vm.loginShow = false;
    }

    $scope.vm.login = function(){
      authService.login($scope.vm.loginObj).then(function(res){
        $log.info('res in login then function controller', res);
        $state.go('chat');
      });
    }

    $scope.vm.signup = function(){
      authService.signup($scope.vm.signupObj).then(function(res){
        $log.info('res in signup then function controller', res);
        $state.go('chat');
      });
    }

  }

}());
