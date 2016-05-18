(function() {
  'use strict';

  angular.module('chatmosphere')
  .controller('SideNavController', SideNavController)

  SideNavController.$inject = [
    '$log',
    'AuthService',
    'ErrorService',
    '$state',
    '$scope'
  ];

  function SideNavController ($log, AuthService, ErrorService, $state, $scope) {
    $scope.vm = {};

    $scope.vm.logout = function(){
      AuthService.logout().then(function(){
        ErrorService.clearErrorMessages();
        $state.go('auth');
      });
    }

  }

}());
