(function(){
    angular
    .module('empireCo')
    .factory('ProductFactory', function($resource){
      return $resource(`${API_URL}/products/:id`); // Note the full endpoint address
    });

})();
