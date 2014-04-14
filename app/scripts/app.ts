/// <reference path="refs.ts" />
'use strict';

module auction {
  angular.module('auction', ['ngRoute', 'restangular'])
    .config(['$routeProvider', ($routeProvider) => {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainController',
          controllerAs: 'ctrl'
        })
        .when('/search', {
          templateUrl: 'views/search.html',
          controller: 'SearchController',
          controllerAs: 'ctrl'
        })
        .when('/product/:id', {
          templateUrl: 'views/product.html',
          controller: 'ProductController',
          controllerAs: 'ctrl',
          resolve: auction.controller.ProductController.resolve
        })
        .otherwise({
          redirectTo: '/'
        });
    }])
    .config(['RestangularProvider', (RestangularProvider) => {
      RestangularProvider.setBaseUrl('http://127.0.0.1:8080/auction_jaxrs-1.0/api');
    }]);
}
