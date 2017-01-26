// (function(){
//   angular
//   .module('empireCo')
//   .controller('ProductsIndexController', ["$stateParams", ProductsIndexController]);
//
// ProductsIndexController = ['$http', '$scope'];
//
// function ProductsIndexController($http, $scope){
//
//   var gear = [
//   {
//   name: "Standard",
//   description: "It's white.",
//   img_url: "https://tk50167.files.wordpress.com/2011/05/esbtk.jpg?w=500&h=721",
//   price: 99
//   },{
//   name: "First Order",
//   description: "It's new.",
//   img_url: "https://www.metropolis-collectibles.com/images/xhot902536.jpg",
//   price: 990
//   }];
//
//   this.products = gear;
//   }
//
//   var rootURL = 'http://localhost:8080/api';
//
//   //Index
//     $scope.getProducts = function(){
//       $http.get(`${rootURL}/products`)
//         .then(function(res){
//           $scope.product = undefined;
//           console.log($scope.product);
//         })
//         .catch(function(err){
//           if(err)console.log(err);
//         });
//
//   //Show
//     $scope.showProducts = function(){
//         $http.get(`${rootURL}/products/${id}`)
//         .then(function(res){
//           $scope.product = res.data;
//             console.log($scope.product);
//             })
//             .catch(function(err){
//               if(err)console.log(err);
//               });
//           };
//
//     //Delete
//     $scope.destroyProduct = function(id){
//       $http.delete(`${rootURL}/products/${id}`)
//         .then(function(res){
//           $scope.product = undefined;
//           $scope.getGrumbles();
//           console.log($scope.product);
//         })
//         .catch(function(err){
//           if(err)console.log(err);
//         });
//     };
//
//     //Create
//     $scope.createProduct = function(){
//       $http.create(`${rootURL}/products/${id}`)
//       .then(function(res){
//         console.log(res.data);
//       })
//       .catch(function(err){
//         if(err)console.log(err);
//       });
//     }
//
// };
//
//
//
//
//
//
// })();
