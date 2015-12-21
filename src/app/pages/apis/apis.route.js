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
        templateUrl : 'app/pages/core/html/core.html'
      })
      .state('apis.list', {
        url: '/apis',
        templateUrl: 'app/pages/apis/html/apis.list.html',
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
        templateUrl: 'app/pages/apis/html/apis.add.html',
        controller: 'ApisEditController',
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
      .state('apis.edit', {
        url: '/apis/:apiId/edit',
        templateUrl: 'app/pages/apis/html/apis.add.html',
        controller: 'ApisEditController',
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
