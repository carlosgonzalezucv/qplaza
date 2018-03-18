(function () {
  'use strict';  
  angular
    .module('BlurAdmin.pages.services.performance')
    .controller('PerformanceCtrl', [
      '$state', 
      PerformanceCtrl
    ]);  
  /** @ngInject */
  function PerformanceCtrl($state) {
    var vm = this;
    $state.go('services.performance.graph');
  }  
})();