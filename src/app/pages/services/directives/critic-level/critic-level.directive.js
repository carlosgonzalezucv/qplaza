(function () {
  'use strict';
  angular.module('BlurAdmin.pages.services')
      .directive('criticLevel', criticLevel);  
  /** @ngInject */
  function criticLevel() {
    return {
      restrict: 'E',
      templateUrl: 'app/pages/services/directives/critic-level/critic-level.html',
      scope: {
        level: "=?",
      },
      controller: function($scope) {
        var vm = this;
        var maxRating = 5;
        var remain = maxRating - $scope.level;
        vm.stars = new Array(maxRating).fill(0);
        vm.rating = vm.stars.map((e, i) => (
          (i < level) ? '<i class="fa fa-star" style="color: rgb(255,128,123)"></i>': 
                        '<i class="fa fa-star" style="color: rgba(255,128,123,.4)"></i>'
        )).join('')
      },
      controllerAs: 'vm'
    };
  }
})();