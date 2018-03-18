(function () {
    'use strict';  
    angular
      .module('BlurAdmin.pages.services.monitores')
      .controller('MonitoresCtrl', [
        '$state', 
        PerformanceCtrl
      ]);  
    /** @ngInject */
    function PerformanceCtrl($state) {
      var vm = this;
      $state.go('services.monitores.general')
    }  
  })();