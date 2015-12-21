(function(){
  'use strict';
  angular
  .module('kongUi')
  .factory('metaData', metaData);

  function metaData($q, $http){
    var metaData = null;
    var deferred = $q.defer();

    if(metaData){
      return deferred.resolve(metaData);
    }
    else{
      $http.get('app/data/metadata.json')
      .then(function(response){
        metaData = response.data;
        return deferred.resolve(metaData);
      },function(response){
        return deferred.reject(response);
      });
    }
    return deferred.promise;
  }
})();
