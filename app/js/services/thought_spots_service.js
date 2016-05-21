(function() {
  'use strict';

  angular.module('chatmosphere')
  .service('ThoughtSpotsService', ThoughtSpotsService)

  ThoughtSpotsService.$inject = [
    '$log',
    '$q',
    '$http',
    '$localStorage'
  ];

  function ThoughtSpotsService ($log, $q, $http, $localStorage) {

    this.getThoughtSpots = function() {
      var deferred = $q.defer();
      //note to self, setting up rendering thought spots with a get
      //request that doesn't exist in express yet
      $http.get('http://localhost:3000/api/v1/thought_spots').then(function(response){
        $log.info('res in get thought spots service', response);
        deferred.resolve(response.data);
      })
      .catch(function(err){
        $log.error('err in get thought spots service', err);
        deferred.reject(err.data);
      });
      return deferred.promise;
    }

    this.createThoughtSpot = function(thoughtSpotObj) {

      if (
        $localStorage["token"] && $localStorage["user"]
        && thoughtSpotObj.name && thoughtSpotObj.description) {

          var deferred = $q.defer();
          var temp = {};
          temp.thoughtSpotName = thoughtSpotObj.name;
          temp.thoughtSpotDescription = thoughtSpotObj.description;
          temp.thoughtSpotCreator = $localStorage["user"];
          temp.requestToken = $localStorage["token"];

          $http.post('http://localhost:3000/api/v1/thought_spots', temp).then(function(response){
            $log.info('res in create Thought Spot', response);
            deferred.resolve(response.data);
          })
          .catch(function(err){
            $log.error('error in create Thought Spot', err);
            deferred.reject(err.data);
          })

        } else {
          deferred.reject({error: 'Form improperly filled out'})
        }
        return deferred.promise;

      }

    }

  }());
