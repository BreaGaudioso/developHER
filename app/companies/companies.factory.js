(function(){

  angular
  .module('app.companies')
  .factory('CompanyFactory', CompanyFactory);
  CompanyFactory.$inject = ['$request'];

  function CompanyFatory($http){
    $http.get('')
  }
})();