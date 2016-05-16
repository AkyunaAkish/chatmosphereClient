(function() {
  'use strict';

  angular.module('chatmosphere')
  .controller('AuthController', AuthController)

  AuthController.$inject = [
    '$log',
    '$scope',
    'AuthService',
    '$state',
    'ErrorService'
  ];

  function AuthController ($log, $scope, AuthService, $state, ErrorService) {
    $scope.vm = {};
    $scope.vm.signupShow = true;
    $scope.vm.loginShow = false;

    $scope.vm.authError = ErrorService.getAuthError();

    $scope.$watch(function(){
      return ErrorService.getAuthError();
    }, function(newValue){
      $scope.vm.authError = ErrorService.getAuthError();
    });

    $scope.vm.showLogin = function(){
      $scope.vm.signupShow = false;
      $scope.vm.loginShow = true;
    }

    $scope.vm.showSignup = function(){
      $scope.vm.signupShow = true;
      $scope.vm.loginShow = false;
    }

    $scope.vm.login = function(){
      AuthService.login($scope.vm.loginObj).then(function(res){
        $log.info('res in login then function controller', res);
      });
    }

    $scope.vm.signup = function(){
      AuthService.signup($scope.vm.signupObj).then(function(res){
        $log.info('res in signup then function controller', res);
        if (res.status == 200) {
          $state.go('chat');
        }
      })
    }

  }

}());
