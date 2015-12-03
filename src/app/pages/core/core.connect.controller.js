(function() {
  'use strict';

  angular
  .module('kongUi')
  .controller('CoreConnectController', CoreConnectController);

  /** @ngInject */
  function CoreConnectController($state, kongServer, toastr) {
    var vm = this;
    vm.connectForm = {
      kongUrl : 'http://localhost:8001'
    };
    vm.setKongServer = setKongServer;

    function connectToKong(){
      kongServer.server().then(function(serverInfo){
        vm.serverInfo = serverInfo;
        toastr.success(vm.serverInfo.hostname,'Server Connected');
        $state.go('core.kong');
      }, function(error){
        if(angular.isDefined(error.status)){
          toastr.error('Could not connect to server', 'Error');
        }
      });
    }

    function setKongServer(){
      kongServer.connect(vm.connectForm.kongUrl);
      connectToKong();
    }

    connectToKong();
  }
})();
