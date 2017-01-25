(function(){
  angular
  .module('empireCo', [
    'ui.router'
  ]);
empreCo.config(function($stateProvider, $urlRouterProvider){
  $urlProvider.otherwise('/home');

  $stateProvider

  .state('home',{
      url: '/home',
      templateUrl: 'index.html',
      controller: function($scope){
        $scope.products [gear]
      }
  })
})
})();
