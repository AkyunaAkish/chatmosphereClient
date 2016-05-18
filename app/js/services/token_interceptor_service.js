(function() {
  'use strict';

  angular.module('chatmosphere')
  .service('TokenInterceptor', TokenInterceptor)

  TokenInterceptor.$inject = [
    '$log',
    '$localStorage',
    '$q',
    '$injector',
    'ErrorService'
  ];

  function TokenInterceptor ($log, $localStorage, $q, $injector, ErrorService) {

    this.response = function(response) {
      var deferred = $q.defer();

      $log.info('res in interceptor', response);

      if (response.data.token && response.data.user) {
        $localStorage["token"] = response.data.token;
        $localStorage["user"] = response.data.user;
      }

      if (response.data.error) {
        ErrorService.clearErrorMessages();
        ErrorService.injectAuthError(response.data.error);
      }



      deferred.resolve(response);

      return deferred.promise;
    }

    this.request = function(config){
      var deferred = $q.defer();

      // prevent browser bar tampering for /api routes
      config.headers['X-Requested-With'] = 'XMLHttpRequest';

      if($localStorage["token"]){
        config.headers.Authorization = $localStorage["token"];
      }

      deferred.resolve(config);

      return deferred.promise;
    }

    this.requestError = function(err){
      $state.go('auth');
      return err;
    }

    this.responseError = function(err){
      if (err.data.err) {
        console.log(err.data.err, 'yo');
        ErrorService.injectAuthError(err.data.err);
      }
      $injector.get('$state').go('auth');
      return err;
    }

  }

}());
