/// <reference path='../refs.ts'/>
'use strict';

module auction.model {
  export class BidModel {
    id              : number;
    amount          : number;
    desiredQuantity : number;
    isWinning       : boolean;
    bidTime         : Date;
  }
}
