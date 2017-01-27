// (function(){
//   angular
//   .module('empireCo')
//   .controller('ProductsIndexController', ["$stateParams", productsIndexController]);
//
//   // ProductsIndexController.$inject = {'$http', '$scope'};
//
//   var gear = [
//   {
//   title: "Standard",
//   description: "It's white.",
//   img_url: "https://tk50167.files.wordpress.com/2011/05/esbtk.jpg?w=500&h=721",
//   price: 99
// },{
//   title: "First Order",
//   description: "It's new.",
//   img_url: "https://www.metropolis-collectibles.com/images/xhot902536.jpg",
//   price: 990
// }];
//
//   this.products = gear;
//
//   function ProductsIndexController($http, $scope){
//
//     var rootURL = 'http://localhost:8080/api';
//     //Index
//     $scope.getProducts = function(){
//       $http.get('${rootURL}/products')
//       .then(function(res){
//         $scope.products = undefined;
//         console.log($scope.products)
//       })
//       .catch(function(err){
//         if(err)console.log(err)
//       });
//     };
//     //Show
//    $scope.showProducts = function(product){
//      $http.get(`${rootURL}/products/${id}`)
//        .then(function(res){
//          $scope.products = res.data;
//          console.log($scope.products);
//        })
//        .catch(function(err){
//          if(err)console.log(err);
//        });
//    };
//    //Delete
//   $scope.destroyProducts = function(product){
//     $http.post(`${rootURL}/products/${id}`)
//       .then(function(res){
//         $scope.products = undefined;
//         $scope.getProducts();
//         console.log($scope.products);
//       })
//       .catch(function(err){
//         if(err)console.log(err);
//       });
//   };
//   //New
//  $scope.createProducts = function(product){
//    $http.post(`${rootURL}/products,` product)
//      .then(function(res){
//        console.log(res.data);
//      })
//      .catch(function(err){
//        if(err)console.log(err);
//      });
//  };
//  //Edit
//     $scope.editProducts = function(product){
//       $http.put(`${rootURL}/products/${$scope.product.id}`, product)
//         .then(function(res){
//           // $scope.getProducts(); //REdirect to Index
//           $scope.product = res.data;
//           console.log(res.data);
//         })
//         .catch(function(err){
//           if(err)console.log(err);
//         });
//     };
//
//   }
//
//
//   }
// })();
