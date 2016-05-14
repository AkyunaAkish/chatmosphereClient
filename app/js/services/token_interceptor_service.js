(function() {
  'use strict';

  angular.module('chatmosphere')
  .service('tokenInterceptor', tokenInterceptor)

  tokenInterceptor.$inject = [
    '$log'
  ];

  function tokenInterceptor ($log) {

  }

}());
