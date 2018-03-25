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
        var vm = this, 
            maxRating = 5,
            remain = maxRating - $scope.level,
            stars = new Array(maxRating).fill(0);
        vm.rating = stars.map(function(e, i) { 
          var aux = (i < level) ? '<i class="fa fa-star" style="color: rgb(255,128,123)"></i>': 
                                  '<i class="fa fa-star" style="color: rgba(255,128,123,.4)"></i>';
          return aux.join('');
        });
      },
      controllerAs: 'vm'
    };
  }
})();