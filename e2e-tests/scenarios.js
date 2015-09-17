'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

var View1Page = require('./pages/view1.page.js');
//var View1Page = require('view1-page');

describe('my app', function() {

  var handlesLoaded = false;

  xit('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {

    var page;
    var handle1, handle2;

    beforeEach(function() {
      page = new View1Page();
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
        toBeGreaterThan: function (util, customEqualityTesters) {
          return {
            compare: function(actual, expected) {
              if (expected === undefined) {
                expected = '';
              }
              var result = {};
              var strippedValue = actual.substr(-2);
              var expectedValue = expected.substr(-2);
              result.pass = parseInt(strippedValue) > parseInt(expectedValue);
              if (result.pass) {
                result.message = "Expected " + actual + " not to be quite so goofy";
              } else {
                result.message = "Expected " + actual + " to be goofy, but it was not very goofy";
              }
              return result;
            }
          };
        },

        toBeGoofy: function(util, customEqualityTesters) {
            return {
               compare: function(actual, expected) {
                 if (expected === undefined) {
                   expected = '';
                 }
                 var result = {};
                 result.pass = util.equals(actual.hyuk, "gawrsh" + expected, customEqualityTesters);
                 if (result.pass) {
                   result.message = "Expected " + actual + " not to be quite so goofy";
                 } else {
                   result.message = "Expected " + actual + " to be goofy, but it was not very goofy";
                 }
                 return result;
               }
            };
        }
      });
    });


    xit('should render view1 when user navigates to /view1', function() {
      expect(page.descriptionText.getText()).
        toMatch(/partial for view 1/);

      expect({
        hyuk: 'gawrsh'
      }).toBeGoofy();
      expect({
        hyuk: 'gawrsh is fun'
      }).toBeGoofy(' is fun');
      var el = element.all(by.id('t')).first();
  //    console.log('el', el);
      expect(el.getText()).toBeGreaterThan('0.09');
      expect(el).toHaveClass('red');
    });

    it('should be possible to switch tabs', function() {

      var EC = protractor.ExpectedConditions;
      var titlePresent = EC.titleContains('NU');

      browser.getWindowHandle().then(function(handle) {
        handle1 = handle;
        console.log('handle1', handle1);
      });

      page.nuLink.click().then(function() {

        browser.ignoreSynchronization = true;

//        browser.driver.wait(titlePresent, 20000);

        //browser.driver.wait(function() {
        //  return browser.driver.getCurrentUrl().then(function(url) {
        //    console.log('url', url);
        //    return /nu/.test(url);
        //  });
        //}, 20000);

        browser.sleep(15000);

        browser.getAllWindowHandles().then(function(handles) {
          console.log('handles', handles);
          //handle1 = handles[0];
          //handle2 = handles[1];
          console.log('handle1', handles[0]);
          console.log('handle2', handles[1]);

          //browser.switchTo().window(handle2);
          //browser.sleep(5000);
          browser.ignoreSynchronization = true;
          browser.switchTo().window(handles[1]).then(function() {
            browser.sleep(1000);
          });

          browser.getCurrentUrl().then(function(url) {
            console.log('url is ', url);
          });

//          browser.ignoreSynchronization = false;
         // browser.driver.close();
          browser.switchTo().window(handle1).then(function() {
            browser.sleep(1000);
          });



          browser.ignoreSynchronization = false;

          browser.getCurrentUrl().then(function(url) {
            console.log('original url is ', url);
          });

          browser.sleep(1000);

        })
      });

      browser.sleep(1000);

    });

  });


  xdescribe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
