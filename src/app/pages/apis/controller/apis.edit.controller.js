(function() {
  'use strict';

  angular
  .module('kongUi')
  .controller('ApisEditController', ApisEditController);

  /** @ngInject */
  function ApisEditController(Apis, kongServerInfo, metaData, $stateParams, toastr, $state) {
    var vm = this;
    vm.kongServerInfo = kongServerInfo;
    vm.metaData = metaData;

    if(angular.isDefined($stateParams.apiId)){
      vm.api = Apis.get({apiId:$stateParams.apiId});
    }
    vm.submitApi = function(){
      Apis.save(vm.api).$promise.then(function(response){
        vm.api = response;
        toastr.success('Saved');
        $state.go('api.view', {apiId: vm.api.id});
      }, function(error){
        angular.forEach(error.data, function(value, key){
          vm.apiEditForm[key] = vm.apiEditForm[key] || {};
          vm.apiEditForm[key].$error = vm.apiEditForm[key].$error || {};
          vm.apiEditForm[key].$error.server = value;
        });
      });
    };

  }


})();
