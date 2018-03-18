(function () {
    'use strict';
    angular.module('BlurAdmin.pages.services.monitores', []).config(routeConfig);
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
      .state('services.monitores', {
        url: '/monitores', 
        title: 'Monitores',
        templateUrl: 'app/pages/services/monitores/monitores.html',
        controller: 'MonitoresCtrl',
        controllerAs: 'vm',
        sidebarMeta: {
          icon: 'fa-server',
          order: 800,
        },
      })
      .state('services.monitores.general', {
        url: '/general',
        title: 'Monitores',
        templateUrl: 'app/pages/services/monitores/general/monitores.general.html',
        controller: 'GeneralMonitoresCtrl',
        controllerAs: 'vm'
      })
      .state('services.monitores.servidor', {
        url: '/servidor',
        title: 'Monitores',
        templateUrl: 'app/pages/services/monitores/servidor/monitores.servidor.html',
        controller: 'ServidorMonitoresCtrl',
        controllerAs: 'vm'
      })
      .state('services.monitores.blacklist', {
        url: '/blacklist',
        title: 'Monitores',
        templateUrl: 'app/pages/services/monitores/blacklist/monitores.blacklist.html',
        controller: 'BlackListMonitoresCtrl',
        controllerAs: 'vm'
      })
      .state('services.monitores.correos', {
        url: '/correos',
        title: 'Monitores',
        templateUrl: 'app/pages/services/monitores/correos/monitores.correos.html',
        controller: 'CorreosMonitoresCtrl',
        controllerAs: 'vm'
      })
      .state('services.monitores.dns', {
        url: '/dns',
        title: 'Monitores',
        templateUrl: 'app/pages/services/monitores/dns/monitores.dns.html',
        controller: 'DnsMonitoresCtrl',
        controllerAs: 'vm'
      })
      .state('services.monitores.conectividad', {
        url: '/conectividad',
        title: 'Monitores',
        templateUrl: 'app/pages/services/monitores/conectividad/monitores.conectividad.html',
        controller: 'ConectividadMonitoresCtrl',
        controllerAs: 'vm'
      });
    }  
  })();
    
    