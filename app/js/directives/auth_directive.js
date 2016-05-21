(function() {
  'use strict';

  angular.module('chatmosphere')
  .directive('authDirective', authDirective)

  function authDirective () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/directive_templates/auth_directive.html',
      controller: 'AuthController'
    }
  }

}());
