(function() {
  'use strict';

  angular
    .module('kongUi')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(kongServer) {
      var vm = this;
      vm.disconnect = function(){
        kongServer.disconnect();
      }
    }
  }

})();
