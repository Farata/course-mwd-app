/// <reference path='../refs.ts'/>
'use strict';

module auction.controller {

  import m = auction.model;
  import s = auction.service;

  export interface IProductScope extends ng.IScope {
    model: ProductController;
  }

  export class SearchForm {
    lowPrice:  number = 0;
    highPrice: number = 100;
  }

  export class ProductController {
    static $inject = [
      '$scope',
      'product'
    ];

    public isSearchFormVisible = false;
    public searchForm = new SearchForm();

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
