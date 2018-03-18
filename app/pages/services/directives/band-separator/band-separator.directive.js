(function(){
  'use strict';
  angular.module('BlurAdmin.pages.services')
    .directive('bandSeparator', bandSeparator);
    /** @ngInject */
  function bandSeparator () {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        addMonitor: '='
      },
      templateUrl: 'app/pages/services/directives/band-separator/band-separator.html',
      controller: function() {
        var vm = this;
      },
      controllerAs: 'vm'
    }
  }
})();