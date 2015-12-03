(function() {
  angular
  .module('app.women')
  .config(womenRoute);

  womenRoute.$inject = ['$routeProvider'];

  function womenRoute($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'app/women/women.html',
      controller: 'WomenCtrl'
    })
  }
})();