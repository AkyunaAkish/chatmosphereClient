(function() {
  'use strict';

  angular.module('chatmosphere')
  .controller('SingleThoughtSpotController', SingleThoughtSpotController)

  SingleThoughtSpotController.$inject = [
    '$log',
    '$scope',
    'ThoughtSpotsService',
    'AuthService',
    'ErrorService',
    '$state',
    '$stateParams'
  ];

  // socket.on('$destroy', function(){});

  function SingleThoughtSpotController ($log, $scope, ThoughtSpotsService, AuthService, ErrorService, $state, $stateParams, $window) {
    $scope.vm = {};
    $log.info('state params', $stateParams.thought_spot_name);
    $scope.vm.thought_spot_name = $stateParams.thought_spot_name;

  }

}());
