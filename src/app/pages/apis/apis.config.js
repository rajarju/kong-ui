(function() {
  'use strict';

  angular
    .module('kongUi')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider){
    $stateProvider
      .state('apis', {
        abstract: true,
        templateUrl : 'app/pages/apis/apis.html'
      })
      .state('apis.list', {
        url: '/apis',
        templateUrl: 'app/pages/apis/apis.list.html',
        controller: 'ApisController',
        controllerAs: 'apis',
        resolve: {
          kongServerInfo : function(kongServer){
            return kongServer.server();
          },
          metaData: function(metaData){
            return metaData;
          }
        }
      })
      .state('apis.add', {
        url: '/apis/add',
        templateUrl: 'app/pages/apis/apis.add.html',
        controller: 'ApisAddController',
        controllerAs: 'apis',
        resolve: {
          kongServerInfo : function(kongServer){
            return kongServer.server();
          },
          metaData: function(metaData){
            return metaData;
          }
        }
      })
      ;
  }

})();
