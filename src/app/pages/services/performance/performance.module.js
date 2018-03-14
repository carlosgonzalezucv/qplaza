(function () {
  'use strict';
  angular.module('BlurAdmin.pages.services.performance', []).config(routeConfig);
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
    .state('services.performance', {
      url: '/performance',
      title: 'Performance',
      templateUrl: 'app/pages/services/performance/performance.html',
      controller: 'PerformanceCtrl',
      controllerAs: 'vm',
      sidebarMeta: {
        icon: 'fa-bar-chart',
        order: 800,
      },
    });
  }  
})();
  
  