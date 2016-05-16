(function() {
  'use strict';

  angular.module('chatmosphere')
  .service('TokenInterceptor', TokenInterceptor)

  TokenInterceptor.$inject = [
    '$log',
    '$localStorage',
    '$q',
    '$injector'
  ];

  function TokenInterceptor ($log, $localStorage, $q, $injector) {

    this.response = function(response) {
      var deferred = $q.defer();

      $log.info('res in interceptor', response);

      if (response.data.token && response.data.user) {
        $log.info('res.data!!!!! in interceptor', response.data);
        $localStorage["token"] = response.data.token;
        $localStorage["user"] = response.data.user;
      }

      deferred.resolve(response);

      return deferred.promise;
    }

    this.request = function(config){
      var deferred = $q.defer();

      $log.info('config in request of interceptor', config);

      // prevent browser bar tampering for /api routes
      config.headers['X-Requested-With'] = 'XMLHttpRequest';

      if($localStorage["token"]){
        config.headers.Authorization = $localStorage["token"];
      }

      deferred.resolve(config);

      return deferred.promise;
    }

    this.requestError = function(err){
      $log.error('error in requestError of interceptor', err);
      $state.go('auth');
      alert(err.data.err);
      return err;
    }

    this.responseError = function(err){
      $log.error('error in responseError of interceptor', err);
      $injector.get('$state').go('auth');
      return err;
    }

  }

}());
