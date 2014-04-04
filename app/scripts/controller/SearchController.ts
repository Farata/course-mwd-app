/// <reference path='../refs.ts'/>
'use strict';

module auction.controller {

  import m = auction.model;
  import s = auction.service;

  interface ISearchScope extends ng.IScope {
    model: SearchController;
  }

  class SearchController {
    static $inject = ['$scope', 'ProductService'];

    public searchResult: m.ProductModel[];

    constructor(private $scope: ISearchScope,
                private productService: s.IProductService) {
      this.$scope.model = this;
      this.productService.search()
        .then((products) => this.searchResult = products);
    }
  }

  angular.module('auction').controller('SearchController', SearchController);
}
