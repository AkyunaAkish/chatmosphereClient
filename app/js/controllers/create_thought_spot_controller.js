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
      console.log($scope.vm.thoughtSpotObj);
      ThoughtSpotsService.createThoughtSpot($scope.vm.thoughtSpotObj)
      .then(function(response){
        $scope.vm.thoughtSpotObj = null;
        $log.info('res in create thought spot controller', response);
        $state.go('thought_spots');
      })
      .catch(function(err){
        $log.error('err in create thought spot controller', err);
        alert(err.error);
      });
    }

  }

}());
