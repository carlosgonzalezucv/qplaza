(function () {
    'use strict';  
    angular.module('BlurAdmin.pages.services.performance').controller('OrganicPerformanceCtrl', OrganicPerformanceCtrl);  
    /** @ngInject */
    /*
        Controlador para mostrar los resultados del performance organico 
    */
    function OrganicPerformanceCtrl() {
      var vm = this;
      vm.generalEvaluation = "20";
      vm.criticLevel = 1;
    }  
  })();