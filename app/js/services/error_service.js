(function() {
  'use strict';

  angular.module('chatmosphere')
  .service('ErrorService', ErrorService)

  ErrorService.$inject = [
    '$log'
  ];

  function ErrorService ($log) {

    var _auth_error = "Hi";

    this.injectAuthError = function(errorMessage){
      console.log(errorMessage);
      _auth_error = errorMessage;
    }

    this.getAuthError = function(){
      return _auth_error;
    }

    this.add = function(a,b){
      return a + b;
    }

  }

}());
