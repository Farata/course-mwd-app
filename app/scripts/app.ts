/// <reference path="refs.ts" />
'use strict';

module auction {
  angular.module('auction', ['ngRoute'])
    .config(['$routeProvider', ($routeProvider) => {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainController'
        })
        .when('/search', {
          templateUrl: 'views/search.html',
          controller: 'SearchController'
        })
        .when('/product/:id', {
          templateUrl: 'views/product.html',
          controller: 'ProductController',
          resolve: auction.controller.ProductController.resolve
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);
}
