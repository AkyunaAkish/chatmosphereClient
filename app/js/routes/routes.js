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
    .state('chat', {
      url: "/chat",
      template: "<chat-directive></chat-directive>",
      restricted: true
    });

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

  }

}());
