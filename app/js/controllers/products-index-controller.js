(function(){
  angular
  .module('empireCo')
  .controller('ProductsIndexController', productsIndexController);
    function productsIndexController(){
      this.products = gear;

      var gear = [
      {
      name: "Standard",
      description: "It's white.",
      img_url: "https://tk50167.files.wordpress.com/2011/05/esbtk.jpg?w=500&h=721",
      price: 99
    },{
      name: "First Order",
      description: "It's new.",
      img_url: "https://www.metropolis-collectibles.com/images/xhot902536.jpg",
      price: 990
    }];
  }
})();
