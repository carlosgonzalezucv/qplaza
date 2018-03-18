(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.services')
        .directive('selector', selector);
  
    /** @ngInject */
    function selector() {
      return {
        restrict: 'E',
        templateUrl: 'app/pages/services/directives/selector/selector.html',
        scope: {
            title: "=?",
            icon: "=?",
            description: "=?",
            target: "@"
        },
        controller: 'SelectorCtrl',
        controllerAs: 'vm'
      };
    }
  })();