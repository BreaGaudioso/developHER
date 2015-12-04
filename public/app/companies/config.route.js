(function() {
  angular
  .module('app.companies')
  .config(companiesRoute);

  companiesRoute.$inject = ['$routeProvider'];

  function companiesRoute($routeProvider){
    $routeProvider
    .when('/numbers', {
      templateUrl: 'app/companies/companies.html',
      controller: 'CompaniesCtrl'
    })
      .when('/about', {
      templateUrl: 'app/static/about.html',
      controller: 'CompaniesCtrl'
    })
      .when('/', {
      templateUrl: 'app/static/welcome.html',
      controller: 'CompaniesCtrl'
    })
  }
})();