(function(){

    angular
    .module('empireCo', ['ngMaterial','ngParallax', 'ngResource','ui.router'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
          .primaryPalette('red')
          .accentPalette('orange');
});
})();
