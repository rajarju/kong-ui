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
    vm.api = new Apis();

    vm.saveApi = function(){
      Apis.save(vm.api).$promise.then(function(response){

      }, function(error){
        console.log(error);
        angular.forEach(error.data, function(value, key){
          vm.apiEditForm[key].$error = vm.apiEditForm[key].$error || {};
          vm.apiEditForm[key].$error.server = value;
        });
      });
    };

  }


})();
