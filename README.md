![Header Logo][header-logo]
___
<h1 align="center">EMPIRE CO API (Front-End)</h1>

Empire Co. is an online retailer set in the Star Wars universe where it provides every Storm-Trooper in the empire a modern user shopping experience through a speedy Single Page Application (SPA). Empire Co. specializes in the distribution of armor and weaponry, and features a catalog of products, shopping cart and checkout functionality.

## Motivation

Empire Co. was created because of shared our interest in developing the necassary skills required to create a modern web store. These skills can potentially open us to strategic roles with client retailers both large and independent.

## Development / Installation

This app utilizes Google's front-end Framework Angular Material. To set up the Angular Material you'll need to install the following packages with either bower or npm.

### Angular.JS

  https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js

### Angular Material Dependencies

  https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js

  https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-animate.min.js

  https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-aria.min.js


## Code Examples
<details>
  <summary>
    [Angular]
  </summary>
  <br>
  ```js
  // app.js
  (function(){

      angular
      .module('empireCo', ['ngResource','ui.router']);

  })();

  // The power of Angular is really found in it's modularity. Above is an example of the Angular module being instantiated, this instantiation of Angular and it's dependency injections becomes an origin for the entire app to reference.

  // Example:
  // routes.js
  (function(){
    angular
      .module('empireCo')
      .config(['$stateProvider', Router]);

      function Router($stateProvider){
        $stateProvider
        .state('products', {
          url: '/products',
          templateUrl: "../partials/products/index.html",
          controller: 'ProductCtrl',
          controllerAs: 'vm'
        });
      }
  })();
  // Here in routes.js we simply reference our Angular module "empireCo" and through that reference our routes.js inherits the 2 depenency injections to our app. So now our routes.js has access to the "$stateProvider" service which is a component of "ui-router". Modularity and inheritance is an important feature of AngularJS.
  ```
</details>
<details>
  <summary>
    [ui-Router]
  </summary>
  <br>
  ```js
  //routers.js
  $stateProvider
  .state('products', {
    url: '/products',
    templateUrl: "../partials/products/index.html",
    controller: 'ProductCtrl',
    controllerAs: 'vm'
  });

  //index.html
  <div ui-view>...</div>
  // ui-Router provides a Angular views and routing functionality. UI-Router allows you to create a state which is essentially a reference of information. When a state is accessed it will load the configured properties which are normally controller and html files. This updating of states allows your app to hot swap views and controller logic without reloading the page.
  ```
</details>


| Clifton Hutchins | Dara Hoy | Alyssa Felix |
|:----------------:|:--------:|:------------:|
| ![Cliff](https://avatars3.githubusercontent.com/u/22736325?v=3&s=100) | ![Dara](https://avatars1.githubusercontent.com/u/23284333?v=3&s=100) | ![Alyssa](https://avatars0.githubusercontent.com/u/22528201?v=3&s=100)
| ![][github-logo]  [cliftonh02](https://github.com/cliftonh02) | ![][github-logo]  [DaraHoy](https://github.com/DaraHoy) | ![][github-logo] [awanderlyss](https://github.com/awanderlyss) |


[github-logo]: http://cdn.shopify.com/s/files/1/0051/4802/t/72/assets/favicon.ico?1744047789295863037
[header-logo]: http://ee-emma.s3.amazonaws.com/ee-product-images/68861/swse_header.png
[morgan]: https://github.com/expressjs/morgan
[nodejs]: https://nodejs.org/en/download/package-manager/#osx
[passport-local-mongoose]: https://github.com/saintedlama/passport-local-mongoose
