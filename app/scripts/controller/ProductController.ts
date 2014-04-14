/// <reference path='../refs.ts'/>
'use strict';

module auction.controller {

  import m = auction.model;
  import s = auction.service;

  export class ProductController {
    static $inject = [
      'product',
      '$scope',
      'Restangular',
      'BidService'];

    isSearchFormVisible = false;
    bid: any;

    constructor(public product: m.ProductModel,
                private $scope: ng.IScope,
                private restangular: Restangular,
                private bidService: s.IBidService) {
      // Updates product info as soon as WS reply message arrives.
      var onBid = (p) => $scope.$apply(() => this.product = p);
      // Start listening to incoming WS messages
      bidService.watchBid(onBid);
      // Remove subscription when the controller is destroyed.
      $scope.$on('$destroy', () => bidService.unwatchBid(onBid));
    }

    placeBid() {
      var bidModel = new model.BidModel();
      bidModel.desiredQuantity = 1;

      // Uncomment to communicate with RESTful Bid endpoint.
      //this.restangular.all('bid').post(bidModel).then(
      //    (resp) => this.product = resp);

      this.bidService.placeBid(bidModel);
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
