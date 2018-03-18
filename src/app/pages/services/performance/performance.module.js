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
    })
    .state('services.performance.general', {
      url: '/general',
      title: 'Performance',
      templateUrl: 'app/pages/services/performance/general/performance.general.html',
      controller: 'GeneralPerformanceCtrl',
      controllerAs: 'vm'
    })
    .state('services.performance.organico', {
      url: '/organic',
      title: 'Performance',
      templateUrl: 'app/pages/services/performance/organico/performance.organico.html',
      controller: 'OrganicPerformanceCtrl',
      controllerAs: 'vm'
    })
    .state('services.performance.responsive', {
      url: '/responsive',
      title: 'Performance',
      templateUrl: 'app/pages/services/performance/responsive/performance.responsive.html',
      controller: 'ResponsivePerformanceCtrl',
      controllerAs: 'vm'
    })
    .state('services.performance.graph', {
      url: '/graph',
      title: 'Performance',
      templateUrl: 'app/pages/services/performance/graph/graph.html'
    });
  }  
})();
  
  