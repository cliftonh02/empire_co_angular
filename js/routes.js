(function(){
  angular
    .module('empireCo')
    .config(['$stateProvider', Router]);

    function Router($stateProvider){
      $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: "../partials/products/index.html",
        controller: 'ProductCtrl',
        controllerAs: 'vm'
      });
    }
})();


