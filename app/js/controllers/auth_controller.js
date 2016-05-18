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

    $scope.vm.authErrors = ErrorService.getAuthErrors();

    $scope.$watch(function(){
      return ErrorService.getAuthErrors();
    }, function(newValue){
      $scope.vm.authErrors = newValue;
    }, true);

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
        if (res.status == 200) {
          $state.go('thought_spots');
        }
      });
    }


    $scope.vm.signup = function(){
      AuthService.signup($scope.vm.signupObj).then(function(res){
        $log.info('res in signup then function controller', res);
        if (res.status == 200) {
          $state.go('thought_spots');
        }
      })
    }

  }

}());
