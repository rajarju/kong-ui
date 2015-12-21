(function() {
  'use strict';

  angular
    .module('kongUi')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

})();
