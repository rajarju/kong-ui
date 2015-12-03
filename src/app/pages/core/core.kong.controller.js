(function() {
  'use strict';

  angular
  .module('kongUi')
  .controller('CoreKongController', CoreKongController);

  /** @ngInject */
  function CoreKongController(kongServerInfo, kongServerStatus, metaData) {
    var vm = this;
    vm.kongServerInfo = kongServerInfo;
    vm.kongServerStatus = kongServerStatus.data;
    vm.metaData = metaData;


  }
})();
