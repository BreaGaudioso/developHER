(function() {
  'use strict';
  angular
  .module("app.women")
  .controller('WomenCtrl', WomenCtrl);

    WomenCtrl.$inject = ['$scope', 'WomenFactory'];

    function WomenCtrl($scope, WomenFactory) {
      $scope.work = "i work";
    }
})();
