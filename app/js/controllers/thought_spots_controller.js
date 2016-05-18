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
  }

}());
