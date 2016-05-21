(function() {
  'use strict';

  angular.module('chatmosphere')
  .controller('ThoughtSpotsController', ThoughtSpotsController)

  ThoughtSpotsController.$inject = [
    '$log',
    '$scope',
    'ThoughtSpotsService',
    'AuthService',
    'ErrorService',
    '$state'
  ];

  // socket.on('$destroy', function(){});

  function ThoughtSpotsController ($log, $scope, ThoughtSpotsService, AuthService, ErrorService, $state) {
    $scope.vm = {};
    // $scope.vm.thought_spots = [];
    ThoughtSpotsService.getThoughtSpots().then(function(thought_spots){
      $log.info('thought spots in controller', thought_spots);
      $scope.vm.thought_spots = thought_spots;
    })
    .catch(function(err){
      $log.error('error in thought spot controller\'s catch', err);
    });

  }

}());
