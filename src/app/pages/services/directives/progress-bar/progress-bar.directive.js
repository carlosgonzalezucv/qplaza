(function () {
  'use strict';
  angular.module('BlurAdmin.pages.services')
      .directive('progressBar2', progressBar);  
  /** @ngInject */
  function progressBar() {
    return {
      restrict: 'E',
      templateUrl: 'app/pages/services/directives/progress-bar/progress-bar.html',
      scope: {
        value: "=?",
        text: "@",
        type: "@"
      }
    };
  }
})();