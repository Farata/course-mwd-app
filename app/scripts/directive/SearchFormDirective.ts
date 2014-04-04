/// <reference path='../refs.ts'/>
'use strict';

module auction.directive {
  angular.module('auction').directive('auctionSearchForm',
    () => <ng.IDirective>{
      restrict: 'E',
      templateUrl: 'views/partial/search-form.html'
    });
}
