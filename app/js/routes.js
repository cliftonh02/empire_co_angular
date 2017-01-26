(function(){
  angular
    .module('empireCo')
    .config(['$stateProvider', Router]);

    function Router($stateProvider){
      $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: "../templates/pages/products/index.html",
        controller: 'ProductsIndexController',
        controllerAs: 'vm'
      });
    }



})();
