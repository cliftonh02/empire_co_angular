(function(){
  angular
  .module()
  .controller('userCtrl')

  var rootURL = 'http://localhost:8080/api'

  var user = [
    {
      email:" "
      password:" "

  }];

  //Show
    $scope.showUser = function(){
        $http.get(`${rootURL}/products/${id}`)
        .then(function(res){
          $scope.product = res.data;
            console.log($scope.product);
            })
            .catch(function(err){
              if(err)console.log(err);
              });
          };

    //Delete
    $scope.destroyUser = function(id){
      $http.delete(`${rootURL}/products/${id}`)
        .then(function(res){
          $scope.product = undefined;
          $scope.getGrumbles();
          console.log($scope.product);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

    //Create
    $scope.createUser = function(){
      $http.create(`${rootURL}/products/${id}`)
      .then(function(res){
        console.log(res.data);
      })
      .catch(function(err){
        if(err)console.log(err);
      });
    }

};

})()
