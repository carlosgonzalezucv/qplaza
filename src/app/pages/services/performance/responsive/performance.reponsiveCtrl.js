(function () {
  'use strict';  
  angular.module('BlurAdmin.pages.services.performance').controller('ResponsivePerformanceCtrl', ResponsivePerformanceCtrl);  
  /** @ngInject */
  /*
      Controlador para mostrar los resultados del performance organico 
  */
  function ResponsivePerformanceCtrl() {
    var vm = this;
    vm.generalEvaluation = "90";
    vm.criticLevel = 0;
  }  
})();