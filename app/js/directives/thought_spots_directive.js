(function() {
  'use strict';

  angular.module('chatmosphere')
  .directive('thoughtSpotsDirective', thoughtSpotsDirective)

  function thoughtSpotsDirective () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/directive_templates/thought_spots_directive.html',
      controller: 'ThoughtSpotsController'
    }
  }

}());
