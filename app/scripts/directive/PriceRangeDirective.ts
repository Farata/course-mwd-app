/// <reference path='../refs.ts'/>
'use strict';

module auction.directive {
  angular.module('auction').directive('auctionPriceRange',
    ['$timeout', ($timeout) => <ng.IDirective>{
      scope: {
        minPrice  : '@',
        maxPrice  : '@',
        lowPrice  : '=',
        highPrice : '='
      },
      restrict: 'E',
      templateUrl: 'views/partial/price-range.html',
      link: function (scope: any, el, attrs) {
        var slider: any = angular.element(el).find('input[type=text]'),
            min = scope.minPrice || 0,
            max = scope.maxPrice || 500;

        // Initialize slider
        slider.slider({
          min: min,
          max: max,
          value: [
            scope.lowPrice  || min,
            scope.highPrice || max
          ]
        });

        // Slider -> numeric fields
        slider.on('slideStop', (e) => {
          scope.$apply(() => {
            if (scope.lowPrice  != e.value[0]) scope.lowPrice  = e.value[0];
            if (scope.highPrice != e.value[1]) scope.highPrice = e.value[1];
          });
        });

        // Numeric fields -> slider
        var curVal = () => slider.slider('getValue');
        var setSlider = (low, high) => slider.slider('setValue', [low, high]);
        scope.$watch('lowPrice',  (newVal) => setSlider(newVal, curVal()[1]));
        scope.$watch('highPrice', (newVal) => setSlider(curVal()[0], newVal));
      }
    }]);
}
