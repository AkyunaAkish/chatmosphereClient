(function() {
  'use strict';

  angular.module('chatmosphere')
  .service('AuthService', AuthService)

  AuthService.$inject = [
    '$log',
    '$q',
    '$http',
    '$localStorage'
  ];

  function AuthService ($log, $q, $http, $localStorage) {
    
    this.signup = function(signupObj) {
      var deferred = $q.defer();

      $http.post('http://localhost:3000/api/v1/signup', signupObj).then(function(res){
        deferred.resolve(res);
      })
      .catch(function(err){
        deferred.reject(err);
      })

      return deferred.promise
    }

    this.login = function(loginObj) {
      var deferred = $q.defer();

      $http.post('http://localhost:3000/api/v1/login', loginObj).then(function(res){
        deferred.resolve(res);
      })
      .catch(function(err){
        deferred.reject(err);
      })

      return deferred.promise
    }

    this.logout = function() {
      var deferred = $q.defer();

      delete $localStorage["token"];
      delete $localStorage["user"];

      deferred.resolve("user logged out");

      return deferred.promise
    }

  }

}());
