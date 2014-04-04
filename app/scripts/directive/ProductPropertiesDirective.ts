/// <reference path='../refs.ts'/>
'use strict';

module auction.directive {
  angular.module('auction').directive('auctionProductProperties',
    () => <ng.IDirective>{
      restrict: 'E',
      templateUrl: 'views/partial/product-properties.html'
    });
}
