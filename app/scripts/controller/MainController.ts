/// <reference path='../refs.ts'/>
'use strict';

module auction.controller {

  import m = auction.model;
  import s = auction.service;

  class MainController {
    static $inject = ['ProductService'];

    public featuredProducts: m.ProductModel[];

    constructor(productService: s.IProductService) {
      productService.getFeatured().then((products) =>
        this.featuredProducts = products);
    }
  }

  angular.module('auction').controller('MainController', MainController);
}
