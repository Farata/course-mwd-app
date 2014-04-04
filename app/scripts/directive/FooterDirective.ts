/// <reference path='../refs.ts'/>
'use strict';

module auction.directive {
  angular.module('auction').directive('auctionFooter',
    () => <ng.IDirective>{
      restrict: 'E',
      templateUrl: 'views/partial/footer.html'
    });
}
