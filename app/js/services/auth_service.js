(function() {
  'use strict';

  angular.module('chatmosphere')
  .service('authService', authService)

  authService.$inject = [
    '$log',
    '$q',
    '$http'
  ];

  function authService ($log, $q, $http) {

    this.signup = function(signupObj) {
      var deferred = $q.defer();

      $http.post('http://localhost:3000/api/v1/signup', signupObj).then(function(res){
        $log.info('res in service signup', res);
        deferred.resolve(res);
      })
      .catch(function(err){
        $log.error('error in service signup', err);
        deferred.reject(err);
      })

      return deferred.promise
    }

    this.login = function(loginObj) {  
      var deferred = $q.defer();

      $http.post('http://localhost:3000/api/v1/login', loginObj).then(function(res){
        $log.info('res in service login', res);
        deferred.resolve(res);
      })
      .catch(function(err){
        $log.error('error in service login', err);
        deferred.reject(err);
      })

      return deferred.promise
    }

  }

}());
