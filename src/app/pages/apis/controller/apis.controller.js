(function() {
  'use strict';

  angular
  .module('kongUi')
  .controller('ApisController', ApisController);

  /** @ngInject */
  function ApisController(Apis, kongServerInfo, metaData) {
    var vm = this;
    vm.kongServerInfo = kongServerInfo;
    vm.metaData = metaData;

    var apis = Apis.query(function(){
      vm.apis = apis.data;
    });
    
  }
})();
