(function() {
  'use strict';

  angular
    .module('kongUi')
    .directive('formField', formField);

  /** @ngInject */
  function formField() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/formField/field.html',
      scope: {
        config : '=',
        model : '='
      },
      require: ['^form'],
      link: formFieldLink,
      controller: formFieldController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function formFieldController() {
      var vm = this;
    }

    /** @ngInject */
    function formFieldLink(scope, el, attr, ctrls) {
      scope.form = ctrls[0];
      scope.name = attr.name;
    }

  }

})();
