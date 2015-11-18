(function() {
  'use strict';
  angular
  .module("app.companies")
  .controller('CompaniesCtrl', CompaniesCtrl);

    CompaniesCtrl.$inject = ['$scope'];
    
    function CompaniesCtrl($scope) {
      console.log('access')
    }
})();