(function() {
  'use strict';

  angular.module('chatmosphere')
  .config(chatmosphereRoutes);

  chatmosphereRoutes.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$httpProvider'
  ];

  function chatmosphereRoutes($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){

    $httpProvider.interceptors.push("TokenInterceptor");

    $stateProvider
    .state('auth', {
      url: "/",
      template: "<auth-directive></auth-directive>",
      preventWhenLoggedIn: true
    })
    .state('thought_spots', {
      url: "/thought_spots",
      template: "<thought-spots-directive></thought-spots-directive>",
      restricted: true
    })
    .state('create_thought_spot', {
      url: "/create_thought_spot",
      template: "<create_thought-spot-directive></create_thought-spot-directive>",
      restricted: true
    });

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

  }

}());
