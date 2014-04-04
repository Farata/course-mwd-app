'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('auction'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainController', {
      $scope: scope
    });
  }));

  it('empty test to make karma happy', function () {
  });
});
