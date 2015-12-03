(function(){

  angular
  .module("app.companies")
  .factory('CompanyFactory', CompanyFactory);
  CompanyFactory.$inject = ['$http'];

  function CompanyFactory($http){
    var CompanyFactory = {}
    $http.get('data.json').then(function(data){
      console.log('data is ', data);
      CompanyFactory.companies= data.data; //assigning data to variable
    });

    return CompanyFactory;
  };
})();
