/// <reference path='../refs.ts'/>
'use strict';

module auction.controller {

  import m = auction.model;
  import s = auction.service;

  export interface IProductScope extends ng.IScope {
    model: ProductController;
  }

  export class ProductController {
    static $inject = [
      '$scope',
      'product'
    ];

    public isSearchFormVisible = false;

    constructor(private $scope: IProductScope,
                public product: m.ProductModel) {
      $scope.model = this;
    }

    public static resolve = {
      product: ['$route', 'ProductService',
        ($route, productService: s.IProductService) => {
          var productId = parseInt($route.current.params.id);
          return productService.getById(productId);
        }]
    };
  }

  angular.module('auction').controller('ProductController', ProductController);
}
