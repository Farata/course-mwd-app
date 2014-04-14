/// <reference path='../refs.ts'/>
'use strict';

module auction.filters {
  angular.module('auction').filter('fromNow', () =>
      (input: string) => moment(input).fromNow());
}
