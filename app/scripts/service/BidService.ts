/// <reference path='../refs.ts'/>
'use strict';

module auction.service {

  import m = auction.model;

  export interface IBidService {
    placeBid(bid: m.BidModel);
    watchBid(callback: (product: m.ProductModel) => void): void;
    unwatchBid(callback: (product: m.ProductModel) => void): void;
  }

  /**
   * WebSockets-based service to place bids and get updates about new bids.
   */
  class BidService implements IBidService {
    static $inject = ['$log'];
    private ws: WebSocket;
    private callbacks: Array<(product: m.ProductModel) => void> = [];

    constructor(private $log: ng.ILogService) {
      this.ws = new WebSocket('ws://127.0.0.1:8080/auction_jaxrs-1.0/bid');
      this.ws.onmessage = (event) => this.callbacks.forEach(
          (c) => c(JSON.parse(event.data)));
    }

    placeBid(bid: m.BidModel) {
      this.ws.send(JSON.stringify(bid));
    }

    watchBid(callback: (p: m.ProductModel) => void): void {
      this.callbacks.push(callback);
    }

    unwatchBid(callback: (p: m.ProductModel) => void): void {
      _.pull(this.callbacks, callback);
    }
  }

  // Register service in the Angular's DI container.
  angular.module('auction').service('BidService', BidService);
}
