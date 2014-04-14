/// <reference path='../refs.ts'/>
'use strict';

module auction.model {
  // Notice how we use `export` here. Since model is used directly and not
  // registered into Angular's DI container, it should be available outside the
  // `auction.model` module.
  export class ProductModel {
    id            : number;
    title         : string;
    thumb         : string;
    description   : string;
    quantity      : number;
    watchers      : number;
    minimalPrice  : number;
    reservedPrice : number;
    auctionEndTime: Date;
  }
}
