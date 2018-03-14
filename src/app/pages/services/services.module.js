(function () {
  'use strict';
  angular.module(['BlurAdmin.pages.services'], []).config(routeConfig);
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
    .state('services', {
      url: '/services',
      title: 'Servicios',
      templateUrl: 'app/pages/services/services.html',
      // controller: 'ServicesCtrl',
      // controllerAs: 'vm',
      sidebarMeta: {
          icon: 'ion-settings',
          order: 800,
      },
    });
  }
})();
  