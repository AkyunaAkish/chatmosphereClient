(function() {
  'use strict';

  angular.module('chatmosphere')
  .controller('CreateThoughtSpotController', CreateThoughtSpotController)

  CreateThoughtSpotController.$inject = [
    '$log',
    '$scope',
    'ThoughtSpotsService',
    'AuthService',
    'ErrorService',
    '$state'
  ];

  // socket.on('$destroy', function(){});

  function CreateThoughtSpotController ($log, $scope, ThoughtSpotsService, AuthService, ErrorService, $state) {
    $scope.vm = {};

    $scope.vm.createThoughtSpot = function() {

    }
    
  }

}());
