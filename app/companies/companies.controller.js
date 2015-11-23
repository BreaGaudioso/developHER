(function() {
  'use strict';
  angular
  .module("app.companies")
  .controller('CompaniesCtrl', CompaniesCtrl);

    CompaniesCtrl.$inject = ['$scope', 'CompanyFactory'];
    
    function CompaniesCtrl($scope, CompanyFactory) {
      $scope.work = "i work";
      $scope.companies = CompanyFactory;

      $scope.makeChart = function(company){
        $scope.femaleDevs = company.num_female_eng;
        $scope.allDevs = company.num_eng;
        $scope.company = company.company;
      };
    }
})();