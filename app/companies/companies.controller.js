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
        $scope.femaleDevs = parseInt(company.num_female_eng);
        $scope.allDevs = parseInt(company.num_eng);
        $scope.company = company.company;
        $scope.percentage = ($scope.femaleDevs / $scope.allDevs)*100;
        console.log($scope.percent);
        $scope.maleDevs = $scope.allDevs - $scope.femaleDevs;
        $scope.pollData = [$scope.femaleDevs, $scope.maleDevs]
        $scope.pollLabels = ["Female Developers", "Non-female Developers"]

      };
    }
})();
