(function(){
  'use strict';
  angular
    .module('kongUi')
    .factory('kongServer', kongServer);

  function  kongServer($q, $http, $cookies, $rootScope){
    var factory = {};
    factory.kongServerUrl = $cookies.get('kongServerUrl');
    if(factory.kongServerUrl){
      factory.kongServer = $cookies.getObject('kongServer');
    }


    factory.connect = function(kongServerUrl){
      factory.kongServerUrl = kongServerUrl;
    };

    factory.disconnect = function(){
      $cookies.remove('kongServerUrl');
      $cookies.remove('kongServer');
      factory.kongServer = null;
      factory.kongServerUrl = null;
      $rootScope.connected = false;
    };

    factory.server = function(){

      var deferred = $q.defer();
      if(!factory.kongServerUrl){
        deferred.reject({});
      }
      else{
        $http.get(factory.kongServerUrl)
          .then(function(response){
            factory.kongServer = response.data;
            $cookies.put('kongServerUrl', factory.kongServerUrl);
            $cookies.putObject('kongServer', factory.kongServer);
            $rootScope.connected = true;
            deferred.resolve(response.data);
          },function(response){

            factory.disconnect();
            deferred.reject(response);

          });
      }
      return deferred.promise;
    };

    factory.status = function(){
      return $http.get(factory.kongServerUrl + '/status');
    };

    return factory;
  }

})();
