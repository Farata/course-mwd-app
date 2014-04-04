/// <reference path='../refs.ts'/>
'use strict';

module auction.directive {
  angular.module('auction').directive('auctionProductGallery',
    () => <ng.IDirective>{
      restrict: 'E',
      templateUrl: 'views/partial/product-gallery.html'
    });
}
