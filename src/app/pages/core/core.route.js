(function() {
  'use strict';

  angular
    .module('kongUi')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider){
    $stateProvider
      .state('core', {
        abstract: true,
        templateUrl : 'app/pages/core/html/core.html'
      })
      .state('core.connect', {
        url: '/',
        templateUrl: 'app/pages/core/html/core.connect.html',
        controller: 'CoreConnectController',
        controllerAs: 'connect',
        resolve: {
          metaData: function(metaData){
            return metaData;
          }
        }
      })
      .state('core.kong', {
        url: '/kong',
        templateUrl: 'app/pages/core/html/core.kong.html',
        controller: 'CoreKongController',
        controllerAs: 'kong',
        resolve: {
          kongServerInfo : function(kongServer){
            return kongServer.server();
          },
          kongServerStatus : function(kongServer){
            return kongServer.status();
          },
          metaData: function(metaData){
            return metaData;
          }
        }
      })
      .state('core.disconnect', {
        controller: function(kongServer, $state){
          kongServer.disconnect();
          $state.go('core.connect');
        },
        controllerAs: 'kong'
      })
      ;
  }

})();
