(function() {
  'use strict';

  angular.module('chatmosphere')
  .directive('chatDirective', chatDirective)

  function chatDirective () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/directive_templates/chat_directive.html',
      controller: 'ChatController',
      controllerAs: 'vm'
    }
  }

}());
