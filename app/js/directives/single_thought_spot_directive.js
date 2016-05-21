(function() {
  'use strict';

  angular.module('chatmosphere')
  .directive('singleThoughtSpotDirective', singleThoughtSpotDirective)

  function singleThoughtSpotDirective () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/directive_templates/single_thought_spot_directive.html',
      controller: 'SingleThoughtSpotController'
    }
  }

}());
