'use strict';

describe('myApp.view1 module', function() {

  var ctrl, mockWindow, mockScope;

  beforeEach(module('myApp.view1'));

  beforeEach(module(function($provide) {

      mockWindow = {};
      mockScope = {};

      $provide.value('$window', mockWindow);
      $provide.value('$scope', mockScope);

  }));

  beforeEach(inject(function($controller) {
      ctrl = $controller('View1Ctrl');
  }));

  describe('view1 controller', function(){

    it('should hava controller defined', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});