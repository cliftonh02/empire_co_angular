(function(){
    angular
    .module('empireCo')
    .factory('ProductFactory', function ($resource) {
    return $resource("http://localhost:8080/api/products");
});

})();
