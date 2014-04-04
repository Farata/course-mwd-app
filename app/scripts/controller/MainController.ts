/// <reference path='../refs.ts'/>
'use strict';

module auction.controller {

  import m = auction.model;
  import s = auction.service;

  interface IMainScope extends ng.IScope {
    model: MainController;
  }

  class MainController {
    static $inject = ['$scope', 'ProductService'];

    public featuredProducts: m.ProductModel[];

    constructor(private $scope: IMainScope,
                private productService: s.IProductService) {
      this.$scope.model = this;
      this.productService.getFeatured().then(
        (products) => this.featuredProducts = products);
    }
  }

  angular.module('auction').controller('MainController', MainController);
}
