/// <reference path='../refs.ts'/>
'use strict';

module auction.controller {

  import m = auction.model;
  import s = auction.service;

  class SearchController {
    static $inject = ['ProductService'];

    public searchResult: m.ProductModel[];

    constructor(productService: s.IProductService) {
      productService.search()
        .then((products) => this.searchResult = products);
    }
  }

  angular.module('auction').controller('SearchController', SearchController);
}
