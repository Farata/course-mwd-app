/// <reference path='../refs.ts'/>
'use strict';

module auction.directive {
  angular.module('auction').directive('auctionNavbar',
    () => <ng.IDirective>{
      restrict: 'E',
      templateUrl: 'views/partial/navbar.html'
    });
}
