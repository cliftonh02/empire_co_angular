(function(){
  angular.module('empireCo')
  .config(function($routeProvider){
    $routeProvider.when('/products', {
      templateUrl: 'templates/pages/products/index.html',
    });
  });
})();
