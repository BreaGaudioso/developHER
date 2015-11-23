(function() {
  'use strict';
  angular
  .module("app.companies")
  .controller('CompaniesCtrl', CompaniesCtrl);

    CompaniesCtrl.$inject = ['$scope', 'CompanyFactory'];
    
    function CompaniesCtrl($scope, CompanyFactory) {
      $scope.work = "i work";
      $scope.companies = CompanyFactory

    }
})();