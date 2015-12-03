(function(){

  angular
  .module("app.companies")
  .factory('CompanyFactory', CompanyFactory);
  CompanyFactory.$inject = ['$http'];

  function CompanyFactory($http){
    $http.get('data.json').then(function(data){
      CompanyFactory.companies= data.data; //assigning data to variable
    });
    return CompanyFactory;
  };
})();
