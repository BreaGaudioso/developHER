(function(){
  'use strict';

  angular.module('DevelopHerApp',[
    'ngRoute',
    'app.companies'
    ])

  .config(configRoutes)

  configRoutes.$inject = ['$routeProvider'];

  function configRoutes($routeProvider){
    $routeProvider
    .otherwise({
      redirectTo: '/'
    })
  }
})();
