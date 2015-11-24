(function(){
  'use strict';

  angular.module('DevelopHerApp',[
    'ngRoute',
    // 'ngResource',
    'app.companies',
    'chart.js'
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
