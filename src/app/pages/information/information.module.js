(function () {
    'use strict';
    angular.module(['BlurAdmin.pages.information'], []).config(routeConfig);
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
      .state('information', {
        url: '/information',
        title: 'Información',
        templateUrl: 'app/pages/information/information.html',
        controller: 'InformationCtrl',
        controllerAs: 'vm',
        sidebarMeta: {
            icon: 'ion-information-circled',
            order: 800,
        },
      });
    }
  })();
    