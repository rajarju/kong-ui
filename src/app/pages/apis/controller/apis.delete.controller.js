(function() {
  'use strict';

  angular
  .module('kongUi')
  .controller('ApisDeleteController', ApisDeleteController);

  /** @ngInject */
  function ApisDeleteController(Apis, kongServerInfo, metaData, $stateParams, toastr, $state) {
    var vm = this;
    vm.kongServerInfo = kongServerInfo;
    vm.metaData = metaData;

    if(angular.isDefined($stateParams.apiId)){
      vm.api = Apis.get({apiId:$stateParams.apiId});
    }

    vm.deleteApi = function(){
      Apis.delete({apiId : vm.api.id}, function(){
        toastr.success('API Removed');
        $state.go('apis.list');
      })
    };

  }


})();
