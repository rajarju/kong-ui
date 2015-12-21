(function(){
  'use strict';
  angular
  .module('kongUi')
  .factory('Apis', Apis);

  function Apis(kongServer, $q, $resource){
    return $resource(kongServer.kongServerUrl + '/apis/:apiId', {
      
    },{
      query: {
        isArray: false
      },
      save: {
        url : kongServer.kongServerUrl + '/apis/',
        method: 'PUT' // this method issues a PUT request
      }
    });
  }

})();
