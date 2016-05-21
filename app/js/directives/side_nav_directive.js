(function() {
  'use strict';

  angular.module('chatmosphere')
  .directive('sideNavDirective', sideNavDirective)

  function sideNavDirective () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/directive_templates/side_nav_directive.html',
      controller: 'SideNavController'
    }
  }

}());
