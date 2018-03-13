(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.services')
      .controller('ServicesCtrl', ServicesCtrl);
  
    /** @ngInject */
    function ServicesCtrl() {
      var vm = this;

      vm.valor = "Cualquier vaina";
    }
  
  })();