(function() {
  'use strict';

  angular.module('chatmosphere')
  .directive('createThoughtSpotDirective', createThoughtSpotDirective)

  function createThoughtSpotDirective () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/directive_templates/create_thought_spot_directive.html',
      controller: 'CreateThoughtSpotController',
      controllerAs: 'vm'
    }
  }

}());
