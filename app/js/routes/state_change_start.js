(function() {
  'use strict';

  angular.module('chatmosphere')
  .run(chatmosphereStateChangeStart);

  chatmosphereStateChangeStart.$inject = [
    '$rootScope',
    '$state',
    '$localStorage',
    'AuthService',
    'ErrorService',
    '$http'
  ];

  function chatmosphereStateChangeStart($rootScope, $state, $localStorage, AuthService, ErrorService, $http){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){

      // if you try access a restricted page without logging in
      if (toState.restricted && !$localStorage["token"]) {
        event.preventDefault();
        ErrorService.injectAuthError("Please login or signup before entering chatmosphere");
        $state.go('auth');
      } else if(toState.preventWhenLoggedIn && $localStorage["token"]) {
        event.preventDefault();
        $state.go('thought_spots');
      }

    });
  }

}());
