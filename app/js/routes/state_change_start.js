// angular.module("jwtApp")
// .run(function ($rootScope, $state, $localStorage, AuthService) {
//   $rootScope.$on('$stateChangeStart', function (event, next, current) {
// // if you try access a restricted page without logging in
// if (next.restricted && !$localStorage["token"]) {
//   if(current && current.signup){
//     console.log('in the if');
//     event.preventDefault();
//     $state.go('initial');
//   } else {
//     alert("You're not signed in");
//     event.preventDefault();
//     $state.go('signin');
//   }
// }
//     // if you try to log in or sign up once logged in
//     if (next.preventWhenLoggedIn && $localStorage.getItem("token")) {
//       event.preventDefault();
//       $state.go('home');
//     }
//   });
// });

(function() {
  'use strict';

  angular.module('chatmosphere')
  .run(chatmosphereStateChangeStart);

  chatmosphereStateChangeStart.$inject = [
    '$rootScope',
    '$state',
    '$localStorage',
    'AuthService',
    'ErrorService'
  ];

  function chatmosphereStateChangeStart($rootScope, $state, $localStorage, AuthService, ErrorService){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){

      // if you try access a restricted page without logging in
      if (toState.restricted && !$localStorage["token"]) {
        console.log("You're not signed in");
        event.preventDefault();
        ErrorService.injectAuthError("Please login or signup before entering chatmosphere");
        $state.go('auth');
      } 

    });
  }

}());
