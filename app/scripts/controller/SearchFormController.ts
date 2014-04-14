/// <reference path='../refs.ts'/>
'use strict';

module auction.controller {

  import m = auction.model;
  import s = auction.service;

  class SearchFormData {
    title    : string;
    category : string;
    lowPrice : number = 0;
    highPrice: number = 100;
    bidsCount: number = 0;
    closeDate: Date;

    static fromObject(source): SearchFormData {
      return _.defaults<any, any>(new SearchFormData(), source, {
        lowPrice: parseFloat(source.lowPrice),
        highPrice: parseFloat(source.highPrice),
        bidsCount: parseInt(source.bidsCount)
      });
    }
  }

  class SearchFormController {
    static $inject = [
      '$location',
      'ProductService'
    ];

    formData: SearchFormData;

    constructor(private $location: ng.ILocationService,
                private productService: s.IProductService) {
      this.formData = SearchFormData.fromObject($location.search());
    }

    search() {
      this.$location.search(this.formData);
      this.productService.search(this.formData);
    }
  }

  angular.module('auction').controller('SearchFormController', SearchFormController);
}
