(function() {
  'use strict';

  angular
    .module('kongUi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
