(function(){
  angular
    .module('empireCo')
    .controller('ProductCtrl', ProductCtrl);

  ProductCtrl.$inject = ['$scope', 'ProductFactory'];

  function ProductCtrl($scope, ProductFactory) {

    console.log('Product-Index View!');

    //Index
    $scope.getProducts = function(){
      var entries = ProductFactory.query(function(){
        console.console.log(entries);
      });// get() returns a single entry
        // .then(function(res){
        //   ProductFactory.products = res.data;
        //   console.log(ProductFactory.products);
        //   $scope.products = ProductFactory.products;
        //   $scope.product = undefined;
          // console.log($scope.products);
        // })
    //     .catch(function(err){ if(err)console.log(err); });
    // };

    //Show
    // $scope.showProduct = function(id){
    //   $http.get(`${rootURL}/products/${id}`)
    //     .then(function(res){
    //       $scope.product = res.data;
    //       console.log($scope.product);
    //     })
    //     .catch(function(err){ if(err)console.log(err); });
    // };
    //
    // //Delete
    // $scope.destroyProduct = function(id){
    //   $http.delete(`${rootURL}/products/${id}`)
    //     .then(function(res){
    //       $scope.product = undefined;
    //       $scope.getProducts();
    //       console.log($scope.product);
    //     })
    //     .catch(function(err){ if(err)console.log(err); });
    // };
    // //New
    // $scope.createProduct = function(product){
    //   $http.post(`${rootURL}/products`, product)
    //     .then(function(res){ console.log(res.data); })
    //     .catch(function(err){ if(err)console.log(err); });
    // };
    // //Edit
    // $scope.editProduct = function(product){
    //   $http.put(`${rootURL}/products/${$scope.product.id}`, product)
    //     .then(function(res){
    //       // $scope.getProducts(); //REdirect to Index
    //       $scope.product = res.data;
    //       console.log(res.data);
    //     })
    //     .catch(function(err){ if(err)console.log(err); });
    // };
  };
}
})();
