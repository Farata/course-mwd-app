/// <reference path='../refs.ts'/>
'use strict';

module auction.directive {
  angular.module('auction').directive('auctionDatepicker',
    () => <ng.IDirective>{
      restrict: 'A',
      link: (scope, el: any) => el.datepicker()
    });
}
