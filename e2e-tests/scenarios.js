'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });

    beforeEach(function() {
      this.addMatchers({
        toHaveClass: function (expected) {
          var deferred = protractor.promise.defer();
          this.actual.getAttribute('class').then(function(classes) {
            var hasClass = classes.split(' ').indexOf(expected) >= 0;
            deferred.fulfill(hasClass);
          });
          return deferred.promise;
        },
        toBeGreaterThan: function (expected) {
          var deferred = protractor.promise.defer();
          this.actual.getText().then(function(actualValue) {
            var strippedValue = actualValue.substr(-2);
            var expectedValue = expected.substr(-2);
            var isGreater = parseInt(strippedValue) > parseInt(expectedValue);
            deferred.fulfill(isGreater);
          });
          return deferred.promise;
        }
      });
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
      expect(element.all(by.id('t')).first()).toBeGreaterThan('0.09');
      expect(element.all(by.id('t')).first()).toHaveClass('red');
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
