(function(){
    angular
    .module('empireCo')
    .factory('ProductFactory', function ($resource) {
    return $resource("https://empire-co.herokuapp.com/api/products");    
});
})();
