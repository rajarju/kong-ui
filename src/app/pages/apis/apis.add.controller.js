(function() {
  'use strict';

  angular
  .module('kongUi')
  .controller('ApisAddController', ApisAddController);

  /** @ngInject */
  function ApisAddController(Apis, kongServerInfo, metaData) {
    var vm = this;
    vm.kongServerInfo = kongServerInfo;
    vm.metaData = metaData;

    var apis = Apis;

  }
})();
