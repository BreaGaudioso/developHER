(function(){

  angular
  .module("app.companies")
  .factory('CompanyFactory', CompanyFactory);
  CompanyFactory.$inject = ['$http'];

  function CompanyFactory($http){
    var CompanyFactory = {}
    $http.get('data.json').then(function(data){
      CompanyFactory.companies= data.data;
      console.log(CompanyFactory.companies);
    })
    return CompanyFactory;
  };
})();