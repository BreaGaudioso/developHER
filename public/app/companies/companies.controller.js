(function() {
  'use strict';
  angular
  .module("app.companies")
  .controller('CompaniesCtrl', CompaniesCtrl);

    CompaniesCtrl.$inject = ['$scope', 'CompanyFactory'];
    
    function CompaniesCtrl($scope, CompanyFactory) {
      $scope.companies = CompanyFactory.companies;
    }
})();