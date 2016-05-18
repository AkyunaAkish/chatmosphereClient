(function() {
  'use strict';

  angular.module('chatmosphere')
  .service('ErrorService', ErrorService)

  ErrorService.$inject = [
    '$log'
  ];

  function ErrorService ($log) {

    var _auth_errors = [];

    this.injectAuthError = function(errorMessage){
      _auth_errors.push(errorMessage);
    }

    this.getAuthErrors = function(){
      return _auth_errors.slice();
    }

    this.clearErrorMessages = function(){
      _auth_errors = [];
    }

  }

}());
