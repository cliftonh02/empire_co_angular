(function(){
  angular
    .module('empireCo')
    .config(['$stateProvider', Router]);

    function Router($stateProvider){
      $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: "../templates/pages/products/index.html",
        controller: 'ProductCtrl',
        controllerAs: 'vm'
      // })
      // //Route for New Products
      // .state('newProducts', {
      //   url: '/products/new',
      //   templateUrl: "../templates/pages/products/new.html",
      //   controller: 'ProductsIndexController',
      //   controllerAs: 'vm'
      // })
      // //Route for edit Products
      // .state('editProducts', {
      //   url: '/products/edit',
      //   templateUrl: "../templates/pages/products/edit.html",
      //   controller: 'ProductsIndexController',
      //   controllerAs: 'vm'
      });
    }
})();
