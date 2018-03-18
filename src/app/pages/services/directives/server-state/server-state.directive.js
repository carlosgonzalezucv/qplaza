(function(){
  'use strict';
  angular.module('BlurAdmin.pages.services')
    .directive('serverState', serverState);

  function serverState(){
    return {
      restrict: 'E',
      scope: {
        server: '=',
        remove: '&removeServer'
      },
      templateUrl: 'app/pages/services/directives/server-state/server-state.html',
      controller: function($scope) {
        var vm = this;
        vm.server = $scope.server;
      },
      controllerAs: 'vm'
    }
  }
})();