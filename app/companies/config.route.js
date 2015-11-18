(function() {
  angular
  .module('app.companies')
  .config(companiesRoute);

  companiesRoute.$inject = ['$routeProvider'];

  function companiesRoute($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'app/companies/companies.html',
      controller: 'CompaniesCtrl'
    })
  }
})();